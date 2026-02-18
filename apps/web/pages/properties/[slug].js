import Layout from "../../components/layout/Layout";
import { prisma } from "@repo/database";
import LeadForm from "../../components/elements/LeadForm";
import Link from "next/link";

export default function PropertyDetails({ property }) {
    if (!property) return <div>Property not found</div>;

    return (
        <Layout headerStyle={1} footerStyle={1} pageCls="property-details-page">
            <section className="property-hero relative h-[50vh] min-h-[400px]">
                {property.images && property.images.length > 0 ? (
                    <img src={property.images[0]} alt={property.title} className="w-full h-full object-cover" />
                ) : (
                    <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-500">No Image</div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B15] to-transparent"></div>
                <div className="container absolute bottom-10 left-0 right-0">
                    <span className="bg-[#DDF247] text-black px-3 py-1 rounded text-sm font-bold mb-4 inline-block">{property.status}</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{property.title}</h1>
                    <p className="text-xl text-gray-300">{property.location}</p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        <div className="lg:col-span-2">
                            <div className="description-box bg-[#14141F] p-8 rounded-2xl border border-[#2C2C39] mb-8">
                                <h3 className="text-2xl font-bold text-white mb-6">Descripción</h3>
                                <p className="text-gray-400 leading-relaxed whitespace-pre-line">{property.description}</p>
                            </div>

                            {property.videoUrl && (
                                <div className="video-box bg-[#14141F] p-8 rounded-2xl border border-[#2C2C39] mb-8">
                                    <h3 className="text-2xl font-bold text-white mb-6">Video Tour 🎥</h3>
                                    <div className="aspect-video rounded-xl overflow-hidden bg-black">
                                        <video
                                            src={property.videoUrl}
                                            controls
                                            className="w-full h-full object-contain"
                                            poster={property.images[0]} // Use main image as poster
                                        />
                                    </div>
                                </div>
                            )}

                            <div className="features-box bg-[#14141F] p-8 rounded-2xl border border-[#2C2C39]">
                                <h3 className="text-2xl font-bold text-white mb-6">Detalles</h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                    <div className="text-center p-4 bg-[#1C1C29] rounded-xl border border-[#2C2C39/50]">
                                        <div className="text-gray-400 text-sm mb-1">Precio</div>
                                        <div className="text-[#DDF247] font-bold text-lg">{property.currency} {Number(property.price).toLocaleString()}</div>
                                    </div>
                                    <div className="text-center p-4 bg-[#1C1C29] rounded-xl border border-[#2C2C39/50]">
                                        <div className="text-gray-400 text-sm mb-1">Categoría</div>
                                        <div className="text-white font-bold text-lg capitalize">{property.category ? property.category.toLowerCase() : "-"}</div>
                                    </div>

                                    {/* Standard Fields */}
                                    {property.category === 'RESIDENCIAL' && (
                                        <>
                                            <div className="text-center p-4 bg-[#1C1C29] rounded-xl border border-[#2C2C39/50]">
                                                <div className="text-gray-400 text-sm mb-1">Recámaras</div>
                                                <div className="text-white font-bold text-lg">{property.features?.bedrooms || property.bedrooms || "-"}</div>
                                            </div>
                                            <div className="text-center p-4 bg-[#1C1C29] rounded-xl border border-[#2C2C39/50]">
                                                <div className="text-gray-400 text-sm mb-1">Baños</div>
                                                <div className="text-white font-bold text-lg">{property.features?.bathrooms || property.bathrooms || "-"}</div>
                                            </div>
                                        </>
                                    )}

                                    {/* Dynamic Features Rendering */}
                                    {property.features && Object.entries(property.features).map(([key, value]) => {
                                        // Skip standard fields we already showed or internal ones
                                        if (['bedrooms', 'bathrooms'].includes(key)) return null;

                                        // Format label: camelCase to Title Case
                                        const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());

                                        return (
                                            <div key={key} className="text-center p-4 bg-[#1C1C29] rounded-xl border border-[#2C2C39/50]">
                                                <div className="text-gray-400 text-sm mb-1 translate-y">{label}</div>
                                                <div className="text-white font-bold text-lg">{String(value)}</div>
                                            </div>
                                        );
                                    })}

                                    <div className="text-center p-4 bg-[#1C1C29] rounded-xl border border-[#2C2C39/50]">
                                        <div className="text-gray-400 text-sm mb-1">Área</div>
                                        <div className="text-white font-bold text-lg">{property.areaSqFt ? `${property.areaSqFt} ft²` : "-"}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24">
                                <LeadForm propertyId={property.id} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export async function getStaticPaths() {
    const properties = await prisma.property.findMany({
        where: { status: "PUBLISHED", visibility: "PUBLIC" }, // Only generate paths for public properties
        select: { slug: true },
    });

    const paths = properties.map((property) => ({
        params: { slug: property.slug },
    }));

    return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
    const property = await prisma.property.findUnique({
        where: { slug: params.slug },
    });

    if (!property) {
        return { notFound: true };
    }

    return {
        props: {
            property: {
                ...property,
                price: property.price.toString(),
                // createdAt: property.createdAt.toISOString()
            }
        },
        revalidate: 60,
    };
}
