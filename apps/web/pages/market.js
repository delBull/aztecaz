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
            organization: {
                ...p.organization,
                createdAt: p.organization.createdAt.toISOString(),
                updatedAt: p.organization.updatedAt.toISOString(),
            }
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
        <Layout headerStyle={1} footerStyle={1} pageCls="market-page-body">
            {/* Dark Theme Background Wrapper - Using tw- prefix */}
            <div style={{ backgroundColor: '#0B0B15', minHeight: '100vh', color: 'white' }}>
                <div className="tw-w-full tw-max-w-[1600px] tw-mx-auto tw-px-5" style={{ paddingTop: '140px', paddingBottom: '80px' }}>

                    {/* Header Section from Dashboard */}
                    <div className="tw-flex tw-items-center tw-justify-between tw-mb-12">
                        <h1 className="tw-text-3xl tw-font-bold tw-text-white">Disponibilidad (Market)</h1>
                        {/* We don't show "Nueva Propiedad" button here for public users */}
                        <Link href={process.env.NEXT_PUBLIC_DASHBOARD_URL || "http://localhost:3001/dashboard"} className="tw-hidden md:tw-flex tw-px-6 tw-py-3 tw-bg-[#DDF247] tw-text-black tw-font-bold tw-rounded-xl hover:tw-bg-[#cce336] tw-transition-colors tw-items-center tw-gap-2">
                            <span>Ir al Dashboard</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>

                    {/* Lanzamientos Section - Matching Dashboard Layout */}
                    <div className="tw-mb-12">
                        <h2 className="tw-text-2xl tw-font-bold tw-mb-6 tw-text-[#DDF247]">Lanzamientos 🚀</h2>
                        <div className="grid-properties">
                            {launches.length > 0 ? launches.map(property => (
                                <PropertyCard key={property.id} property={property} isLaunch={true} />
                            )) : (
                                <div className="tw-col-span-full tw-py-8 tw-text-center tw-text-gray-500 tw-border tw-border-[#2C2C39] tw-border-dashed tw-rounded-xl tw-w-full">
                                    No hay lanzamientos próximos.
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Disponibilidad Section - Matching Dashboard Layout */}
                    <div>
                        <h2 className="tw-text-2xl tw-font-bold tw-mb-6 tw-text-white">Disponibilidad</h2>
                        <div className="grid-properties">
                            {available.length > 0 ? available.map(property => (
                                <PropertyCard key={property.id} property={property} />
                            )) : (
                                <div className="tw-col-span-full tw-py-20 tw-text-center tw-text-gray-400 tw-bg-[#14141F] tw-rounded-2xl tw-border tw-border-[#2C2C39] tw-w-full">
                                    <p>No hay propiedades disponibles en este momento.</p>
                                </div>
                            )}
                        </div>
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

// Replicating the Dashboard Card Component with tw- prefix
function PropertyCard({ property, isLaunch = false }) {
    // Determine status badge color/text based on dashboard logic
    const isComingSoon = property.status === "COMING_SOON";

    return (
        <Link href={`/properties/${property.slug}`} className="tw-block tw-h-full">
            <div className="tw-bg-[#14141F] tw-border tw-border-[#2C2C39] tw-rounded-2xl tw-overflow-hidden hover:tw-border-[#DDF247] tw-transition-all tw-duration-300 hover:tw-shadow-[0_0_20px_rgba(221,242,71,0.1)] group tw-h-full tw-flex tw-flex-col tw-relative">
                {/* Image Section */}
                <div className="tw-h-48 tw-bg-[#1C1C29] tw-relative tw-overflow-hidden">
                    <div className="tw-absolute tw-inset-0 tw-flex tw-items-center tw-justify-center tw-text-gray-500">
                        {property.images[0] ? (
                            <img
                                src={property.images[0]}
                                alt={property.title}
                                className="tw-w-full tw-h-full tw-object-cover tw-transition-transform tw-duration-700 group-hover:tw-scale-110"
                            />
                        ) : (
                            <span>No Image</span>
                        )}
                    </div>

                    {/* Status Badge */}
                    <div className={`tw-absolute tw-top-2 tw-right-2 tw-px-2 tw-py-1 tw-rounded tw-text-xs tw-font-bold tw-z-10 tw-tracking-wide ${isComingSoon ? 'tw-bg-[#DDF247] tw-text-black' : 'tw-bg-black/50 tw-text-white tw-backdrop-blur-md'
                        }`}>
                        {isComingSoon ? 'COMING SOON' : property.status}
                    </div>

                    {/* Category Badge */}
                    {property.category && (
                        <div className="tw-absolute tw-bottom-2 tw-left-2 tw-px-2 tw-py-1 tw-bg-black/60 tw-backdrop-blur tw-rounded tw-text-xs tw-text-white tw-tracking-wide tw-uppercase">
                            {property.category}
                        </div>
                    )}
                </div>

                {/* Content Section */}
                <div className="tw-p-4 tw-flex tw-flex-col tw-flex-1">
                    <div className="tw-flex tw-justify-between tw-items-start tw-mb-2 tw-gap-2">
                        <h3 className="tw-text-lg tw-font-bold tw-text-white tw-truncate tw-flex-1 group-hover:tw-text-[#DDF247] tw-transition-colors" title={property.title}>{property.title}</h3>
                        <span className="tw-text-[#DDF247] tw-font-mono tw-whitespace-nowrap tw-text-md tw-font-bold">
                            {property.currency} {Number(property.price).toLocaleString()}
                        </span>
                    </div>

                    <p className="tw-text-sm tw-text-gray-400 tw-line-clamp-2 tw-mb-4 tw-h-10 tw-overflow-hidden tw-leading-relaxed tw-opacity-80">
                        {property.description || "Sin descripción disponible."}
                    </p>

                    {/* Tags */}
                    <div className="tw-flex tw-flex-wrap tw-gap-2 tw-mb-auto">
                        {property.tags.map(tag => (
                            <span key={tag} className="tw-px-2 tw-py-1 tw-bg-[#2C2C39] tw-rounded tw-text-[10px] tw-text-gray-300">
                                #{tag}
                            </span>
                        ))}
                    </div>

                    {/* Footer */}
                    <div className="tw-flex tw-items-center tw-justify-between tw-text-xs tw-text-gray-500 tw-border-t tw-border-[#2C2C39] tw-pt-4 tw-mt-4">
                        <span className="tw-flex tw-items-center tw-gap-1">
                            {property.organization?.name || 'Aztecaz'}
                        </span>
                        <span>{new Date(property.createdAt).toLocaleDateString()}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}