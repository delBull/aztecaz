import { prisma } from "@repo/database";
import { NextResponse } from "next/server";

export async function GET(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const organizationId = params.id;

        const organization = await prisma.organization.findUnique({
            where: { id: organizationId },
            include: {
                members: {
                    include: {
                        user: true,
                    },
                    orderBy: {
                        role: 'asc'
                    }
                },
                properties: {
                    orderBy: {
                        createdAt: 'desc'
                    }
                }
            },
        });

        if (!organization) {
            return NextResponse.json({ error: "Organization not found" }, { status: 404 });
        }

        // Serialize decimals/dates
        const serializedProperties = organization.properties.map(p => ({
            ...p,
            price: p.price.toString(),
            createdAt: p.createdAt.toISOString(),
            updatedAt: p.updatedAt.toISOString(),
        }));

        return NextResponse.json({
            ...organization,
            properties: serializedProperties
        });
    } catch (error) {
        console.error("Error fetching organization:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
