import { NextResponse } from "next/server";
import { prisma } from "@repo/database";

const SUPER_ADMIN_WALLET = "0x00c9f7EE6d1808C09B61E561Af6c787060BFE7C9";

export async function GET() {
    try {
        // 1. Create the Default Organization
        const org = await prisma.organization.upsert({
            where: { slug: "aztecaz-hq" },
            update: {},
            create: {
                name: "Aztecaz HQ",
                slug: "aztecaz-hq",
                plan: "ENTERPRISE",
            },
        });

        // 2. Create or Update the Super Admin User
        const user = await prisma.user.upsert({
            where: { walletAddress: SUPER_ADMIN_WALLET },
            update: {}, // No updates if exists, just need the ID
            create: {
                walletAddress: SUPER_ADMIN_WALLET,
                name: "Super Admin",
            },
        });

        // 3. Assign ADMIN role
        const membership = await prisma.organizationMember.upsert({
            where: {
                userId_organizationId: {
                    userId: user.id,
                    organizationId: org.id,
                },
            },
            update: {
                role: "ADMIN", // Ensure they are always ADMIN
            },
            create: {
                userId: user.id,
                organizationId: org.id,
                role: "ADMIN",
            },
        });

        return NextResponse.json({
            success: true,
            message: "Super Admin configured successfully",
            user,
            org,
            membership,
        });
    } catch (error) {
        console.error("Setup error:", error);
        return NextResponse.json({ error: "Failed to setup admin" }, { status: 500 });
    }
}
