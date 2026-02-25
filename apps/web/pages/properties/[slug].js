import { useState, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import { prisma } from "@repo/database";
import LeadForm from "../../components/elements/LeadForm";
import Link from "next/link";

export default function PropertyDetails({ property }) {
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Prevent scrolling when full screen gallery is open
    useEffect(() => {
        if (isGalleryOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => { document.body.style.overflow = 'auto'; };
    }, [isGalleryOpen]);

    const openGallery = (index) => {
        setCurrentImageIndex(index);
        setIsGalleryOpen(true);
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
    };

    if (!property) return <div>Property not found</div>;

    const galleryImages = property.images && property.images.length > 1 ? property.images.slice(1) : [];
    // Only show a max of 3 thumbnails in the grid
    const displayImages = galleryImages.slice(0, 3);

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
                    <p className="text-xl text-gray-300 flex items-center gap-2">
                        {property.location}
                        {property.locationUrl && (
                            <a href={property.locationUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[#DDF247] text-sm font-bold border border-[#DDF247] px-3 py-1 rounded-full hover:bg-[#DDF247] hover:text-black transition-all">
                                <span>Ver Ubicación</span>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                            </a>
                        )}
                    </p>
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

                            <div className="features-box bg-[#14141F] p-8 rounded-2xl border border-[#2C2C39] mb-8">
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

                            {/* Gallery Section */}
                            {galleryImages.length > 0 && (
                                <div className="gallery-box bg-[#14141F] p-8 rounded-2xl border border-[#2C2C39]">
                                    <h3 className="text-2xl font-bold text-white mb-6">Galería de Fotos 📸</h3>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                        {displayImages.map((img, idx) => (
                                            <div
                                                key={idx}
                                                className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                                                onClick={() => openGallery(idx)}
                                            >
                                                <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                                </div>

                                                {/* Overlay "+X Fotos" on the last thumbnail if there are more images */}
                                                {idx === 2 && galleryImages.length > 3 && (
                                                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center font-bold text-2xl text-white">
                                                        +{galleryImages.length - 3}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24">
                                <LeadForm propertyId={property.id} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fullscreen Gallery Modal */}
            {isGalleryOpen && (
                <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center">
                    {/* Close Button */}
                    <button
                        onClick={() => setIsGalleryOpen(false)}
                        className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors z-[110]"
                        aria-label="Cerrar galería"
                    >
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>

                    {/* Image Counter */}
                    <div className="absolute top-8 left-1/2 -translate-x-1/2 text-white font-bold tracking-widest text-sm z-[110] bg-black/50 px-4 py-1 rounded-full border border-white/10">
                        {currentImageIndex + 1} / {galleryImages.length}
                    </div>

                    {/* Navigation Prev */}
                    <button
                        onClick={(e) => { e.stopPropagation(); prevImage(); }}
                        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/5 hover:bg-white/10 border border-white/10 p-4 rounded-full text-white transition-all hover:scale-110 z-[110]"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </button>

                    {/* Main Image Container */}
                    <div className="w-full max-w-6xl max-h-screen p-4 md:p-12 flex items-center justify-center relative select-none" onClick={() => setIsGalleryOpen(false)}>
                        <img
                            src={galleryImages[currentImageIndex]}
                            alt={`Gallery image ${currentImageIndex + 1}`}
                            className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl transition-opacity animate-[fadeIn_0.3s_ease-out]"
                            onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        />
                    </div>

                    {/* Navigation Next */}
                    <button
                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/5 hover:bg-white/10 border border-white/10 p-4 rounded-full text-white transition-all hover:scale-110 z-[110]"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>

                    {/* Thumbnails Strip */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 w-full max-w-3xl overflow-x-auto px-6 py-2 no-scrollbar scroll-smooth">
                        {galleryImages.map((img, idx) => (
                            <div
                                key={idx}
                                onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                                className={`
                                    w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-lg overflow-hidden cursor-pointer transition-all duration-300
                                    ${currentImageIndex === idx ? 'ring-2 ring-[#DDF247] scale-105 opacity-100' : 'opacity-40 hover:opacity-100 grayscale hover:grayscale-0'}
                                `}
                            >
                                <img src={img} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>
            )}
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
                createdAt: property.createdAt.toISOString(),
                updatedAt: property.updatedAt.toISOString(),
            }
        },
        revalidate: 60,
    };
}
