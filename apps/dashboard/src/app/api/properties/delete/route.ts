import { NextResponse } from "next/server";
import { prisma } from "@repo/database";

export async function POST(req: Request) {
    try {
        const { id, walletAddress } = await req.json();

        if (!id || !walletAddress) {
            return NextResponse.json({ error: "ID and wallet address required" }, { status: 400 });
        }

        // Verify user and permissions
        const user = await prisma.user.findUnique({
            where: { walletAddress },
            include: {
                memberships: true
            }
        });

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        const property = await prisma.property.findUnique({
            where: { id }
        });

        if (!property) {
            return NextResponse.json({ error: "Property not found" }, { status: 404 });
        }

        // Permission check: Owner, ORG_ADMIN, or Super Admin
        const isOwner = property.userId === user.id;
        const orgMembership = user.memberships.find(m => m.organizationId === property.organizationId);
        const isOrgAdmin = orgMembership?.role === 'ORG_ADMIN' || orgMembership?.role === 'ADMIN';

        // Check if user is platform ADMIN (role in UserRole enum)
        // Note: Global platform admin logic might vary, assuming ORG_ADMIN/ADMIN is sufficient here for now.

        if (!isOwner && !isOrgAdmin) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
        }

        await prisma.property.delete({
            where: { id }
        });

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
