"use server";

import { prisma } from "@repo/database";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const UpdatePropertySchema = z.object({
    id: z.string().min(1),
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

export async function updateProperty(prevState: any, formData: FormData) {
    const validatedFields = UpdatePropertySchema.safeParse({
        id: formData.get("id"),
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
            message: "Faltan campos obligatorios. Error al actualizar.",
        };
    }

    const {
        id, title, description, price, currency, status, visibility, category,
        tags: tagsRaw, location, locationUrl,
        bedrooms, bathrooms, areaSqFt, lotSize, yearBuilt, floors,
        parkingSpaces, orientation, zoning, ceilingHeight,
        electricalCapacity, floorLoad, frontage, depth
    } = validatedFields.data;

    const imageUrl = formData.get("imageUrl") as string;
    const videoUrl = formData.get("videoUrl") as string;
    const featuresRaw = formData.get("features") as string;
    const documentsRaw = formData.get("documents") as string;

    const images = imageUrl ? [imageUrl] : undefined; // Use existing if not updated? For now let's just use what's passed
    const tags = tagsRaw ? tagsRaw.split(",").map(t => t.trim()).filter(Boolean) : [];

    // Check if property exists
    const property = await prisma.property.findUnique({ where: { id } });
    if (!property) return { message: "Property not found" };

    let features = property.features || {};
    try {
        if (featuresRaw) features = JSON.parse(featuresRaw);
    } catch { } // ignore

    let documents = property.documents;
    try {
        if (documentsRaw && documentsRaw !== "[]") documents = JSON.parse(documentsRaw);
    } catch { } // ignore

    const updateData: any = {
        title,
        description,
        price,
        currency,
        status,
        visibility,
        category,
        tags,
        features,
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
    };

    if (images && images.length > 0) updateData.images = images;
    if (videoUrl) updateData.videoUrl = videoUrl;
    if (documents) updateData.documents = documents;

    try {
        await (prisma.property.update as any)({
            where: { id },
            data: updateData,
        });
    } catch (e) {
        console.error("Database Error Update:", e);
        return { message: "Error de base de datos al actualizar la propiedad." };
    }

    revalidatePath("/dashboard/organization");
    revalidatePath("/dashboard/market");
    redirect("/dashboard/organization");
}
