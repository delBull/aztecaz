"use server";

import { prisma } from "@repo/database";
import { revalidatePath } from "next/cache";

export async function deleteProperty(id: string, walletAddress: string) {
    if (!id || !walletAddress) {
        return { error: "ID and wallet address required" };
    }

    try {
        // Normalize wallet address case
        const normalizedWallet = walletAddress.toLowerCase();

        // Find user by normalized wallet address or exact match (prisma doesn't do case-insensitive findUnique normally unless configured or using raw)
        // Ideally we assume wallet addresses are stored consistently. Let's try finding unique.
        let user = await prisma.user.findFirst({
            where: {
                walletAddress: { equals: normalizedWallet, mode: 'insensitive' }
            },
            include: { memberships: true }
        });

        if (!user) return { error: "User not found" };

        const property = await prisma.property.findUnique({ where: { id } });
        if (!property) return { error: "Property not found" };

        const isOwner = (property as any).userId === user.id;
        const orgMembership = user.memberships.find(m => m.organizationId === property.organizationId);
        const isOrgAdmin = orgMembership?.role === 'ORG_ADMIN' || orgMembership?.role === 'ADMIN' || orgMembership?.role === 'BROKER';

        if (!isOwner && !isOrgAdmin) {
            return { error: "Unauthorized" };
        }

        await prisma.property.delete({ where: { id } });

        revalidatePath("/dashboard/organization");
        revalidatePath("/dashboard/properties");
        return { success: true };
    } catch (error) {
        console.error("Delete property error:", error);
        return { error: "Failed to delete property" };
    }
}
