"use server";

import { prisma } from "@repo/database";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const InviteMemberSchema = z.object({
    email: z.string().email(),
    role: z.enum(["USER", "AGENT", "BROKER", "ORG_ADMIN", "ADMIN", "READ_ONLY"]),
});

export async function inviteMember(prevState: any, formData: FormData) {
    const validatedFields = InviteMemberSchema.safeParse({
        email: formData.get("email"),
        role: formData.get("role"),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Invalid Fields. Failed to Invite Member.",
        };
    }

    const { email, role } = validatedFields.data;
    const DEFAUL_ORG = "demo-org-id"; // Hardcoded for V1

    try {
        // 1. Check if user exists, if not create placeholder
        let user = await prisma.user.findUnique({
            where: { email }
        });

        if (!user) {
            user = await prisma.user.create({
                data: {
                    email,
                    name: email.split("@")[0], // Fallback name
                }
            });
        }

        // 2. Check if already a member
        const existingMember = await prisma.organizationMember.findUnique({
            where: {
                userId_organizationId: {
                    userId: user.id,
                    organizationId: DEFAUL_ORG
                }
            }
        });

        if (existingMember) {
            return { message: "User is already a member of this organization." };
        }

        // 3. Create Membership
        await prisma.organizationMember.create({
            data: {
                userId: user.id,
                organizationId: DEFAUL_ORG,
                role: role as any // Type cast for safety against enum mismatch if prisma types lag
            }
        });

    } catch (e) {
        console.error(e);
        return {
            message: "Database Error: Failed to Invite Member.",
        };
    }

    revalidatePath("/dashboard/organization");
    return { message: "Success! Member invited." };
}
