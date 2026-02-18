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
    status: z.enum(["DRAFT", "PUBLISHED", "ARCHIVED", "SOLD", "RENTED", "COMING_SOON"]),
    visibility: z.enum(["PUBLIC", "PRIVATE", "UNLISTED"]),
    category: z.string().optional(),
    tags: z.string().optional(),
    location: z.string().optional(),
    locationUrl: z.string().optional(),
});

export async function createProperty(prevState: any, formData: FormData) {
    // Simulate Auth check - validation would ideally go here
    // const session = await auth();
    // if (!session) return { message: "Unauthorized" };

    const validatedFields = CreatePropertySchema.safeParse({
        title: formData.get("title"),
        description: formData.get("description"),
        price: formData.get("price"),
        currency: formData.get("currency") || "USD",
        status: formData.get("status"),
        visibility: formData.get("visibility"),
        category: formData.get("category"),
        tags: formData.get("tags"),
        location: formData.get("location"),
        locationUrl: formData.get("locationUrl"),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Missing Fields. Failed to Create Property.",
        };
    }

    const { title, description, price, currency, status, visibility, category, tags: tagsRaw, location, locationUrl } = validatedFields.data;

    const imageUrl = formData.get("imageUrl") as string;
    const videoUrl = formData.get("videoUrl") as string;
    const featuresRaw = formData.get("features") as string;

    const images = imageUrl ? [imageUrl] : [];
    const tags = tagsRaw ? tagsRaw.split(",").map(t => t.trim()).filter(Boolean) : [];
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-") + "-" + Date.now();
    const organizationId = formData.get("organizationId") as string;

    let features = {};
    try {
        features = featuresRaw ? JSON.parse(featuresRaw) : {};
    } catch {
        features = {};
    }

    if (!organizationId) {
        return { message: "Error: Organization ID Missing" };
    }

    try {
        await prisma.property.create({
            data: {
                title,
                description,
                price,
                currency,
                slug,
                status,
                visibility,
                organizationId,
                images,
                videoUrl: videoUrl || null,
                category,
                tags,
                features,
                location,
                locationUrl,
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
