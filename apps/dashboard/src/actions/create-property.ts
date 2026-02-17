"use server";

import { prisma } from "@repo/database";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const CreatePropertySchema = z.object({
    title: z.string().min(1),
    description: z.string().optional(),
    price: z.coerce.number().min(0),
    currency: z.enum(["USD", "MXN"]).default("USD"), // Assuming MXN is needed
    status: z.enum(["DRAFT", "PUBLISHED", "ARCHIVED", "SOLD", "RENTED"]),
    visibility: z.enum(["PUBLIC", "PRIVATE", "UNLISTED"]),
});

export async function createProperty(prevState: any, formData: FormData) {
    // Simulate Auth check - validation would ideally go here
    // const session = await auth();
    // if (!session) return { message: "Unauthorized" };

    const validatedFields = CreatePropertySchema.safeParse({
        title: formData.get("title"),
        description: formData.get("description"),
        price: formData.get("price"),
        // currency: formData.get("currency"), // Defaulting to USD for now in UI or handle here
        status: formData.get("status"),
        visibility: formData.get("visibility"),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Missing Fields. Failed to Create Property.",
        };
    }

    const { title, description, price, status, visibility } = validatedFields.data;
    const imageUrl = formData.get("imageUrl") as string;
    const images = imageUrl ? [imageUrl] : [];
    const slug = title.toLowerCase().replace(/ /g, "-") + "-" + Date.now();
    const organizationId = formData.get("organizationId") as string;

    if (!organizationId) {
        return { message: "Error: Organization ID Missing" };
    }

    try {
        await prisma.property.create({
            data: {
                title,
                description,
                price,
                slug,
                status,
                visibility,
                organizationId,
                images,
            },
        });
    } catch (e) {
        console.error(e);
        return {
            message: "Database Error: Failed to Create Property.",
        };
    }

    revalidatePath("/dashboard/market");
    redirect("/dashboard/market");
}
