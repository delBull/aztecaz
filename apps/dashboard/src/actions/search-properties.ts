"use server";

import { prisma } from "@repo/database";

export async function searchProperties(query: string) {
    if (!query || query.trim().length === 0) return [];

    const searchTerms = query.toLowerCase().split(/\s+/).filter(Boolean);

    // We use Prisma OR across various fields for each term.
    const AND = searchTerms.map(term => ({
        OR: [
            { title: { contains: term, mode: "insensitive" } },
            { description: { contains: term, mode: "insensitive" } },
            { location: { contains: term, mode: "insensitive" } },
            { category: { contains: term, mode: "insensitive" } },
            { slug: { contains: term, mode: "insensitive" } }
        ]
    }));

    try {
        const results = await prisma.property.findMany({
            where: {
                AND: AND as any,
                // Only show published or coming soon (exclude drafts/archived/unlisted)
                status: { in: ["PUBLISHED", "COMING_SOON", "SOLD", "RENTED"] },
                visibility: { not: "PRIVATE" }
            },
            take: 6,
            orderBy: { createdAt: "desc" },
            select: {
                id: true,
                title: true,
                slug: true,
                status: true,
                category: true,
                price: true,
                currency: true,
                images: true,
            }
        });

        // Serialize decimal
        return results.map(p => ({
            ...p,
            price: p.price.toString()
        }));
    } catch (e) {
        console.error("Search error:", e);
        return [];
    }
}
