import { NextResponse } from "next/server";
import { prisma } from "@repo/database";

export async function POST(req: Request) {
    try {
        const { walletAddress } = await req.json();

        if (!walletAddress) {
            return NextResponse.json({ error: "Wallet address required" }, { status: 400 });
        }

        // Find or create user
        const user = await prisma.user.upsert({
            where: { walletAddress },
            update: {},
            create: {
                walletAddress,
                name: `User ${walletAddress.slice(0, 6)}`,
            },
            include: {
                memberships: true,
            },
        });

        return NextResponse.json(user);
    } catch (error) {
        console.error("Error checking user:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
