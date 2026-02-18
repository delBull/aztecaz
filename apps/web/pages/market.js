import { prisma } from "@repo/database";
import Link from "next/link";
import Layout from "../components/layout/Layout";
// import { Search, Filter } from "lucide-react"; 

export async function getStaticProps() {
    try {
        const properties = await prisma.property.findMany({
            where: {
                status: {
                    in: ["PUBLISHED", "COMING_SOON", "SOLD", "RENTED"]
                },
                visibility: "PUBLIC"
            },
            orderBy: { createdAt: "desc" },
            include: {
                organization: true
            }
        });

        const serializedProperties = properties.map(p => ({
            ...p,
            price: p.price.toString(),
            createdAt: p.createdAt.toISOString(),
            updatedAt: p.updatedAt.toISOString(),
        }));

        return {
            props: {
                properties: serializedProperties
            },
            revalidate: 60 // Revalidate every 60 seconds (ISR)
        };
    } catch (error) {
        console.error("Error fetching properties for market:", error);
        return {
            props: {
                properties: []
            },
            revalidate: 60
        };
    }
}

export default function Market({ properties }) {
    const launches = properties.filter(p => p.status === "COMING_SOON");
    // Filter out COMING_SOON and ARCHIVED for the "Disponibilidad" section
    const available = properties.filter(p => p.status !== "COMING_SOON" && p.status !== "ARCHIVED");

    return (
        <Layout headerStyle={1} footerStyle={1}>
            {/* Dark Theme Background Wrapper - Matching Dashboard #14141F background mostly, or page background */}
            <div style={{ backgroundColor: '#13131A', minHeight: '100vh', color: 'white' }}>
                <div className="themesflat-container" style={{ paddingTop: '140px', paddingBottom: '80px' }}>

                    {/* Header Section from Dashboard */}
                    <div className="flex items-center justify-between mb-40">
                        <h1 className="text-3xl font-bold text-white">Disponibilidad (Market)</h1>
                        {/* We don't show "Nueva Propiedad" button here for public users */}
                        <Link href={process.env.NEXT_PUBLIC_DASHBOARD_URL || "http://localhost:3001/dashboard"} className="px-6 py-3 bg-[#DDF247] text-black font-bold rounded-xl hover:bg-[#cce336] transition-colors flex items-center gap-2">
                            <span>Ir al Dashboard</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>

                    {/* Lanzamientos Section - Matching Dashboard Layout */}
                    {launches.length > 0 && (
                        <div className="mb-60">
                            <h2 className="text-2xl font-bold mb-6 text-[#DDF247]">Lanzamientos 🚀</h2>
                            <div className="grid-properties">
                                {launches.map(property => (
                                    <PropertyCard key={property.id} property={property} isLaunch={true} />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Disponibilidad Section - Matching Dashboard Layout */}
                    <div>
                        <h2 className="text-2xl font-bold mb-6 text-white">Disponibilidad</h2>
                        {available.length > 0 ? (
                            <div className="grid-properties">
                                {available.map(property => (
                                    <PropertyCard key={property.id} property={property} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 border border-dashed border-[#2C2C39] rounded-2xl bg-[#1C1C29]">
                                <p className="text-gray-400">No hay propiedades disponibles en este momento.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .grid-properties {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
                    gap: 24px;
                }
            `}</style>
        </Layout>
    );
}

// Replicating the Dashboard Card Component exactly
function PropertyCard({ property, isLaunch = false }) {
    // Determine status badge color/text based on dashboard logic
    const isComingSoon = property.status === "COMING_SOON";

    return (
        <div className="bg-[#14141F] border border-[#2C2C39] rounded-2xl overflow-hidden hover:border-[#DDF247] transition-colors relative group h-full flex flex-col">
            {/* Image Section */}
            <div className="h-48 bg-[#1C1C29] relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    {property.images[0] ? (
                        <img
                            src={property.images[0]}
                            alt={property.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    ) : (
                        <span>No Image</span>
                    )}
                </div>

                {/* Status Badge */}
                <div className={`absolute top-2 right-2 px-2 py-1 rounded text-xs font-bold z-10 ${isComingSoon ? 'bg-[#DDF247] text-black' : 'bg-black/50 text-white backdrop-blur-sm'
                    }`}>
                    {isComingSoon ? 'COMING SOON' : property.status}
                </div>

                {/* Category Badge */}
                {property.category && (
                    <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/60 backdrop-blur rounded text-xs text-white border border-white/10">
                        {property.category}
                    </div>
                )}
            </div>

            {/* Content Section */}
            <div className="p-4 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2 gap-2">
                    <h3 className="text-lg font-bold text-white truncate flex-1" title={property.title}>{property.title}</h3>
                    <span className="text-[#DDF247] font-mono whitespace-nowrap text-sm font-bold">
                        {property.currency} {Number(property.price).toLocaleString()}
                    </span>
                </div>

                <p className="text-sm text-gray-400 line-clamp-2 mb-4 h-10 overflow-hidden leading-relaxed">
                    {property.description || "Sin descripción disponible."}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-auto">
                    {property.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-[#2C2C39] rounded text-[10px] text-gray-300">
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between text-xs text-gray-500 border-t border-[#2C2C39] pt-4 mt-4">
                    <span>{property.organization?.name || 'Aztecaz'}</span>
                    <span>{new Date(property.createdAt).toLocaleDateString()}</span>
                </div>
            </div>
        </div>
    );
}