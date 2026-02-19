import { prisma } from "@repo/database";
import MarketContent from "@/components/market/MarketContent";

export default async function MarketPage() {
    const properties = await prisma.property.findMany({
        orderBy: { createdAt: "desc" },
        include: {
            organization: true
        }
    });

    // Serialize Decimal and Date values for the client component
    const serializedProperties = properties.map(p => ({
        ...p,
        price: p.price.toString(),
        createdAt: p.createdAt.toISOString(),
        updatedAt: p.updatedAt.toISOString(),
    }));

    return <MarketContent initialProperties={serializedProperties} />;
}
