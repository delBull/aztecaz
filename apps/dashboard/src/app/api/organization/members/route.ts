import { NextResponse } from "next/server";
import { prisma } from "@repo/database";

export async function POST(req: Request) {
    try {
        const { organizationId } = await req.json();

        if (!organizationId) {
            return NextResponse.json({ error: "Organization ID required" }, { status: 400 });
        }

        const members = await prisma.organizationMember.findMany({
            where: { organizationId },
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        walletAddress: true,
                        image: true,
                    },
                },
            },
        });

        return NextResponse.json(members);
    } catch (error) {
        console.error("Error fetching members:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
