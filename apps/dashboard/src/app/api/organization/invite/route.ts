import { NextResponse } from "next/server";
import { prisma } from "@repo/database";

export async function POST(req: Request) {
    try {
        const { organizationId, walletAddress, role } = await req.json();

        if (!organizationId || !walletAddress || !role) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // 1. Find or Create User
        const user = await prisma.user.upsert({
            where: { walletAddress },
            update: {},
            create: {
                walletAddress,
                name: `User ${walletAddress.slice(0, 6)}`,
            },
        });

        // 2. Add Organization Membership
        const membership = await prisma.organizationMember.upsert({
            where: {
                userId_organizationId: {
                    userId: user.id,
                    organizationId,
                },
            },
            update: {
                role, // Update role if already exists
            },
            create: {
                userId: user.id,
                organizationId,
                role,
            },
        });

        return NextResponse.json({ success: true, membership });
    } catch (error) {
        console.error("Error adding member:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
