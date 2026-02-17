import Layout from "../../components/layout/Layout";
import PropertiesGrid from "../../components/sections/properties/PropertiesGrid";
import { prisma } from "@repo/database";

export default function PropertiesPage({ properties }) {
    return (
        <Layout headerStyle={1} footerStyle={1} pageCls="properties-page">
            <div className="section-title text-center mb-50 pt-50">
                <h2 className="title-style-2">Propiedades Exclusivas</h2>
                <p className="text-gray sm">Encuentra tu próximo hogar o inversión.</p>
            </div>

            <PropertiesGrid properties={properties} />
        </Layout>
    );
}

export async function getStaticProps() {
    try {
        const properties = await prisma.property.findMany({
            where: {
                status: "PUBLISHED",
                visibility: "PUBLIC",
            },
            orderBy: {
                createdAt: "desc",
            },
            // Select fields needed for the grid
            select: {
                id: true,
                title: true,
                slug: true,
                price: true,
                currency: true,
                images: true,
                location: true,
                bedrooms: true,
                bathrooms: true,
                areaSqFt: true,
                status: true,
            }
        });

        // Serialize Decimal / Dates if needed (Prisma returns Decimal which isn't serializable by Next.js directly sometimes, strictly JSON)
        // Actually Next.js pages router getStaticProps handles basic JSON but Decimal might be tricky. 
        // Let's safe serialize.
        const safeProperties = properties.map(p => ({
            ...p,
            price: p.price.toString(),
            // createdAt: p.createdAt.toISOString(), // if we selected it
        }));

        return {
            props: {
                properties: safeProperties,
            },
            revalidate: 60, // ISR: Revalidate every 60 seconds
        };
    } catch (error) {
        console.error("Error fetching properties:", error);
        return {
            props: {
                properties: [],
            },
            revalidate: 60,
        };
    }
}
