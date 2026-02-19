import { NextResponse } from "next/server";
import { prisma } from "@repo/database";

export async function POST(req: Request) {
    try {
        const { walletAddress, organizationId, data } = await req.json();

        if (!walletAddress || !organizationId || !data) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // Verify user exists and check permissions
        const user = await prisma.user.findUnique({
            where: { walletAddress },
            include: {
                memberships: {
                    where: { organizationId },
                }
            }
        });

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        const membership = user.memberships[0];

        // Check if user is a member of the organization and has appropriate role
        // Allow ADMIN, ORG_ADMIN, and potentially BROKER if they own it (usually ORG_ADMIN)
        if (!membership || !["ADMIN", "ORG_ADMIN"].includes(membership.role)) {
            return NextResponse.json({ error: "Unauthorized: Insufficient permissions" }, { status: 403 });
        }

        // Update organization
        const updatedOrg = await prisma.organization.update({
            where: { id: organizationId },
            data: {
                name: data.name,
                description: data.description,
                phone: data.phone,
                email: data.email,
                website: data.website,
                logo: data.logo,
                facebook: data.facebook,
                instagram: data.instagram,
                twitter: data.twitter,
                linkedin: data.linkedin,
                // We typically don't update slug often as it changes URLs, but if requested:
                // slug: data.slug, 
            },
        });

        return NextResponse.json(updatedOrg);

    } catch (error) {
        console.error("Error updating organization:", error);
        // @ts-ignore
        return NextResponse.json({ error: "Internal Server Error", details: error.message }, { status: 500 });
    }
}
