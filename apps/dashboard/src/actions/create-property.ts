"use server";

// @ts-nocheck
import { prisma } from "@repo/database";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const CreatePropertySchema = z.object({
    title: z.string().min(1),
    description: z.string().optional(),
    price: z.coerce.number().min(0),
    currency: z.enum(["USD", "MXN"]).default("USD"),
    status: z.enum(["DRAFT", "PUBLISHED", "ARCHIVED", "SOLD", "RENTED", "COMING_SOON"]),
    visibility: z.enum(["PUBLIC", "PRIVATE", "UNLISTED"]),
    category: z.string().optional(),
    tags: z.string().optional(),
    location: z.string().optional(),
    locationUrl: z.string().optional(),
    // Expanded fields
    bedrooms: z.coerce.number().optional(),
    bathrooms: z.coerce.number().optional(),
    areaSqFt: z.coerce.number().optional(),
    lotSize: z.coerce.number().optional(),
    yearBuilt: z.coerce.number().optional(),
    floors: z.coerce.number().optional(),
    parkingSpaces: z.coerce.number().optional(),
    orientation: z.string().optional(),
    zoning: z.string().optional(),
    ceilingHeight: z.coerce.number().optional(),
    electricalCapacity: z.string().optional(),
    floorLoad: z.coerce.number().optional(),
    frontage: z.coerce.number().optional(),
    depth: z.coerce.number().optional(),
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
        bedrooms: formData.get("bedrooms"),
        bathrooms: formData.get("bathrooms"),
        areaSqFt: formData.get("areaSqFt"),
        lotSize: formData.get("lotSize"),
        yearBuilt: formData.get("yearBuilt"),
        floors: formData.get("floors"),
        parkingSpaces: formData.get("parkingSpaces"),
        orientation: formData.get("orientation"),
        zoning: formData.get("zoning"),
        ceilingHeight: formData.get("ceilingHeight"),
        electricalCapacity: formData.get("electricalCapacity"),
        floorLoad: formData.get("floorLoad"),
        frontage: formData.get("frontage"),
        depth: formData.get("depth"),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Missing Fields. Failed to Create Property.",
        };
    }

    const {
        title, description, price, currency, status, visibility, category,
        tags: tagsRaw, location, locationUrl,
        bedrooms, bathrooms, areaSqFt, lotSize, yearBuilt, floors,
        parkingSpaces, orientation, zoning, ceilingHeight,
        electricalCapacity, floorLoad, frontage, depth
    } = validatedFields.data;

    const imageUrl = formData.get("imageUrl") as string;
    const videoUrl = formData.get("videoUrl") as string;
    const featuresRaw = formData.get("features") as string;
    const documentsRaw = formData.get("documents") as string;

    const images = imageUrl ? [imageUrl] : [];
    const tags = tagsRaw ? tagsRaw.split(",").map(t => t.trim()).filter(Boolean) : [];
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-") + "-" + Date.now();
    const organizationId = formData.get("organizationId") as string;
    const creatorWalletAddress = formData.get("creatorWalletAddress") as string;

    let userId = null;
    if (creatorWalletAddress) {
        const user = await prisma.user.findUnique({
            where: { walletAddress: creatorWalletAddress },
        });
        if (user) {
            userId = user.id;
        }
    }

    let features = {};
    try {
        features = featuresRaw ? JSON.parse(featuresRaw) : {};
    } catch {
        features = {};
    }

    let documents = [];
    try {
        documents = documentsRaw ? JSON.parse(documentsRaw) : [];
    } catch {
        documents = [];
    }

    if (!organizationId) {
        return { message: "Error: Organization ID Missing" };
    }

    try {
        await (prisma.property.create as any)({
            data: {
                title,
                slug,
                description,
                price,
                currency,
                status,
                visibility,
                category,
                tags,
                organizationId,
                userId, // Associate with creator
                images,
                videoUrl: videoUrl || null,
                features,
                documents: documents.length > 0 ? documents : null,
                location,
                locationUrl,
                bedrooms,
                bathrooms,
                areaSqFt,
                lotSize,
                yearBuilt,
                floors,
                parkingSpaces,
                orientation,
                zoning,
                ceilingHeight,
                electricalCapacity,
                floorLoad,
                frontage,
                depth,
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
