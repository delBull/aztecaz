import { prisma } from "@repo/database";
import { notFound } from "next/navigation";
import EditPropertyClient from "./EditPropertyClient";

export default async function EditPropertyPage({ params }: { params: { id: string } }) {
    const property = await prisma.property.findUnique({
        where: { id: params.id }
    });

    if (!property) {
        notFound();
    }

    // Serialize Decimal, Date and other complex typings to plain objects for Client Components
    const serializedProperty = {
        ...property,
        price: property.price ? typeof property.price === "number" ? property.price : parseFloat((property.price as any).toString()) : 0,
        createdAt: property.createdAt ? property.createdAt.toISOString() : undefined,
        updatedAt: property.updatedAt ? property.updatedAt.toISOString() : undefined,
    };

    return <EditPropertyClient initialData={serializedProperty} />;
}
