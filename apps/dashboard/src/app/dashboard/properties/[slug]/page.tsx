import { prisma } from "@repo/database";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";

interface Props {
    params: {
        slug: string;
    };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const property = await prisma.property.findUnique({
        where: { slug: params.slug },
        include: { organization: true },
    });

    if (!property) return { title: "Propiedad no encontrada" };

    return {
        title: `${property.title} | Aztecaz Market`,
        description: property.description?.substring(0, 160) || "Detalles de la propiedad en Aztecaz Market",
        openGraph: {
            images: property.images && property.images.length > 0 ? [property.images[0]] : [],
        },
    };
}

export default async function PropertyDetailPage({ params }: Props) {
    const property = await prisma.property.findUnique({
        where: { slug: params.slug },
        include: {
            organization: true,
        },
    });

    if (!property) notFound();

    // Calculate Price per SqFt
    const pricePerSqFt = property.areaSqFt && Number(property.price) > 0
        ? Math.round(Number(property.price) / property.areaSqFt)
        : null;

    return (
        <div className="text-white min-h-screen pb-20">
            {/* Navigation Back */}
            <div className="mb-6">
                <Link href="/dashboard/market" className="flex items-center text-gray-400 hover:text-white transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    Volver al Market
                </Link>
            </div>

            {/* Hero Section */}
            <div className="relative h-[60vh] min-h-[500px] w-full rounded-2xl overflow-hidden mb-8 group border border-[#2C2C39]">
                {property.images && property.images.length > 0 ? (
                    <img src={property.images[0]} alt={property.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                ) : (
                    <div className="w-full h-full bg-[#14141F] flex items-center justify-center text-gray-500">
                        <span className="text-xl">Sin Imagen</span>
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E17] via-[#0E0E17]/50 to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                        <span className="px-3 py-1 bg-[#DDF247] text-black font-bold rounded-lg text-sm uppercase tracking-wider shadow-[0_0_15px_rgba(221,242,71,0.3)]">
                            {property.status}
                        </span>
                        {property.category && (
                            <span className="px-3 py-1 bg-black/60 backdrop-blur border border-white/10 text-white rounded-lg text-sm">
                                {property.category}
                            </span>
                        )}
                        {property.visibility === "PUBLIC" && (
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-lg text-sm flex items-center gap-1">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                Público
                            </span>
                        )}
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                        {property.title}
                    </h1>

                    <div className="flex items-center gap-2 text-gray-300 text-lg">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#DDF247]">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        {property.location || "Ubicación no especificada"}
                        {property.locationUrl && (
                            <a
                                href={property.locationUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-2 px-2 py-0.5 text-xs border border-[#DDF247] text-[#DDF247] rounded hover:bg-[#DDF247] hover:text-black transition-colors"
                            >
                                Ver Mapa
                            </a>
                        )}
                    </div>
                </div>

                {/* Price Tag (Floating) */}
                <div className="absolute top-8 right-8 bg-black/80 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-2xl">
                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Precio de Venta</p>
                    <p className="text-2xl font-bold text-[#DDF247]">
                        {property.currency} {Number(property.price).toLocaleString()}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Description */}
                    <div className="bg-[#14141F] rounded-2xl border border-[#2C2C39] p-8">
                        <h2 className="text-2xl font-bold text-white mb-6">Descripción</h2>
                        <div className="prose prose-invert max-w-none text-gray-400 whitespace-pre-line leading-relaxed">
                            {property.description || "No hay descripción disponible para esta propiedad."}
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="bg-[#14141F] rounded-2xl border border-[#2C2C39] p-8">
                        <h2 className="text-2xl font-bold text-white mb-6">Características y Detalles</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            {/* Standard Stats */}
                            <FeatureCard label="Área Total" value={property.areaSqFt ? `${property.areaSqFt} ft²` : "-"} icon="area" />
                            {pricePerSqFt && (
                                <FeatureCard label="Precio / ft²" value={`${property.currency} ${pricePerSqFt.toLocaleString()}`} icon="tag" />
                            )}

                            {property.category === 'RESIDENCIAL' && (
                                <>
                                    <FeatureCard label="Recámaras" value={property.bedrooms || "-"} icon="bed" />
                                    <FeatureCard label="Baños" value={property.bathrooms || "-"} icon="bath" />
                                </>
                            )}

                            {/* Dynamic JSON Features */}
                            {property.features && typeof property.features === 'object' && Object.entries(property.features as object).map(([key, value]) => {
                                if (['bedrooms', 'bathrooms', 'area'].includes(key) || !value) return null;
                                return (
                                    <FeatureCard
                                        key={key}
                                        label={key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                                        value={String(value)}
                                    />
                                );
                            })}
                        </div>

                        {(!property.features || Object.keys(property.features as object).length === 0) && !property.bedrooms && !property.bathrooms && (
                            <p className="text-gray-500 text-sm italic mt-4">No hay características adicionales registradas.</p>
                        )}


                        {/* Tags */}
                        {property.tags && property.tags.length > 0 && (
                            <div className="mt-8 pt-6 border-t border-[#2C2C39]">
                                <h3 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Etiquetas</h3>
                                <div className="flex flex-wrap gap-2">
                                    {property.tags.map((tag: string) => (
                                        <span key={tag} className="px-3 py-1 bg-[#1C1C29] border border-[#2C2C39] rounded-full text-sm text-gray-300">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Video Section */}
                    {property.videoUrl && (
                        <div className="bg-[#14141F] rounded-2xl border border-[#2C2C39] p-8">
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                                Video Tour
                                <span className="px-2 py-0.5 bg-red-500/20 text-red-500 text-xs rounded border border-red-500/30">HD</span>
                            </h2>
                            <div className="relative aspect-video bg-black rounded-xl overflow-hidden border border-[#2C2C39] shadow-inner">
                                <video
                                    src={property.videoUrl}
                                    controls
                                    className="w-full h-full object-contain"
                                    poster={property.images?.[0]}
                                />
                            </div>
                        </div>
                    )}

                    {/* Documents / PDFs Section */}
                    {property.documents && Array.isArray(property.documents) && (property.documents as any[]).length > 0 && (
                        <div className="bg-[#14141F] rounded-2xl border border-[#2C2C39] p-8">
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="w-9 h-9 bg-red-500/15 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                        <polyline points="14 2 14 8 20 8" />
                                        <line x1="16" y1="13" x2="8" y2="13" />
                                        <line x1="16" y1="17" x2="8" y2="17" />
                                        <polyline points="10 9 9 9 8 9" />
                                    </svg>
                                </span>
                                Documentos y Planos
                            </h2>
                            <ul className="space-y-3">
                                {(property.documents as any[]).map((doc: { name: string; url: string }, idx: number) => (
                                    <li
                                        key={idx}
                                        className="flex items-center gap-4 p-4 bg-[#1C1C29] rounded-xl border border-[#2C2C39] hover:border-[#DDF247]/30 transition-colors group"
                                    >
                                        {/* PDF icon */}
                                        <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <span className="text-red-400 font-bold text-xs">PDF</span>
                                        </div>

                                        {/* Name */}
                                        <span className="flex-1 text-white font-medium truncate text-sm">
                                            {doc.name || `Documento ${idx + 1}`}
                                        </span>

                                        {/* Actions */}
                                        <div className="flex items-center gap-2 flex-shrink-0">
                                            {/* View Online */}
                                            <a
                                                href={doc.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1.5 px-3 py-2 bg-[#2C2C39] hover:bg-[#DDF247] hover:text-black text-gray-300 text-xs font-semibold rounded-lg transition-all"
                                                title="Ver en línea"
                                            >
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                    <circle cx="12" cy="12" r="3" />
                                                </svg>
                                                Ver
                                            </a>

                                            {/* Download */}
                                            <a
                                                href={doc.url}
                                                download={doc.name || `documento-${idx + 1}.pdf`}
                                                className="flex items-center gap-1.5 px-3 py-2 bg-[#2C2C39] hover:bg-[#2C2C39]/70 text-gray-300 text-xs font-semibold rounded-lg transition-all border border-[#3D3D4D]"
                                                title="Descargar"
                                            >
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                                    <polyline points="7 10 12 15 17 10" />
                                                    <line x1="12" y1="15" x2="12" y2="3" />
                                                </svg>
                                                Descargar
                                            </a>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                    <div className="sticky top-8 space-y-6">
                        {/* Organization Box */}
                        <div className="bg-[#14141F] rounded-2xl border border-[#2C2C39] p-6 shadow-xl relative overflow-hidden">
                            {/* Background accent */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#DDF247]/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

                            <h3 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider relative z-10">Listado por</h3>
                            <div className="flex items-center gap-4 mb-6 relative z-10">
                                {property.organization.logo ? (
                                    <img src={property.organization.logo} alt={property.organization.name} className="w-14 h-14 rounded-full object-cover border-2 border-[#DDF247]" />
                                ) : (
                                    <div className="w-14 h-14 bg-gradient-to-br from-[#DDF247] to-[#b1c236] rounded-full flex items-center justify-center text-black font-bold text-2xl shadow-lg shadow-[#DDF247]/20">
                                        {property.organization.name.substring(0, 1).toUpperCase()}
                                    </div>
                                )}
                                <div>
                                    <h4 className="font-bold text-white text-lg leading-tight">{property.organization.name}</h4>
                                    <p className="text-xs text-[#DDF247] flex items-center gap-1 mt-1">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path></svg>
                                        Agencia Verificada
                                    </p>
                                </div>
                            </div>

                            {property.organization.description && (
                                <p className="text-sm text-gray-400 mb-6 line-clamp-3 relative z-10">
                                    {property.organization.description}
                                </p>
                            )}

                            <div className="space-y-3 relative z-10">
                                {property.organization.phone && (
                                    <a
                                        href={`https://wa.me/${property.organization.phone.replace(/[^0-9]/g, '')}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center w-full py-3 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#20b858] transition-all gap-2 shadow-lg shadow-green-900/20"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                                        WhatsApp
                                    </a>
                                )}
                                <a
                                    href={`mailto:${property.organization.email || 'contacto@aztecaz.com'}`}
                                    className="flex items-center justify-center w-full py-3 bg-[#2C2C39] text-white font-bold rounded-xl hover:bg-[#3D3D4D] transition-all gap-2 border border-[#3D3D4D]"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                    Contactar por Email
                                </a>
                            </div>

                            {/* Socials */}
                            <div className="flex justify-center gap-4 mt-6 pt-6 border-t border-[#2C2C39]/50">
                                {property.organization.website && (
                                    <a href={property.organization.website} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg></a>
                                )}
                                {property.organization.instagram && (
                                    <a href={property.organization.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#E1306C] transition-colors"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
                                )}
                                {property.organization.facebook && (
                                    <a href={property.organization.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1877F2] transition-colors"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                                )}
                            </div>
                        </div>

                        {/* Quick Stats / Highlights */}
                        <div className="bg-[#14141F]/50 backdrop-blur rounded-2xl border border-[#2C2C39] p-6">
                            <h3 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">Detalles de Inversión</h3>
                            <ul className="space-y-4 text-sm">
                                <li className="flex justify-between items-center pb-3 border-b border-[#2C2C39]">
                                    <span className="text-gray-400">Precio / ft²</span>
                                    <span className="text-white font-mono">
                                        {pricePerSqFt ? `${property.currency} ${pricePerSqFt.toLocaleString()}` : "-"}
                                    </span>
                                </li>
                                <li className="flex justify-between items-center pb-3 border-b border-[#2C2C39]">
                                    <span className="text-gray-400">Fecha de listado</span>
                                    <span className="text-white font-mono">{new Date(property.createdAt).toLocaleDateString()}</span>
                                </li>
                                {property.documents && Array.isArray(property.documents) && (property.documents as any[]).length > 0 && (
                                    <li className="flex justify-between items-center pb-3 border-b border-[#2C2C39]">
                                        <span className="text-gray-400">Documentos</span>
                                        <div className="flex flex-wrap gap-1 justify-end max-w-[60%]">
                                            {(property.documents as any[]).map((doc: { name: string; url: string }, idx: number) => (
                                                <a
                                                    key={idx}
                                                    href={doc.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-1 px-2 py-1 bg-red-500/10 hover:bg-[#DDF247] hover:text-black text-red-400 text-[10px] font-bold rounded-md transition-all"
                                                    title={doc.name || `Documento ${idx + 1}`}
                                                >
                                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
                                                    {doc.name ? doc.name.replace(/\.pdf$/i, '').substring(0, 12) : `PDF ${idx + 1}`}
                                                </a>
                                            ))}
                                        </div>
                                    </li>
                                )}
                                <li className="flex justify-between items-center">
                                    <span className="text-gray-400">ID Propiedad</span>
                                    <span className="text-white font-mono text-xs opacity-70">#{property.id.substring(0, 8)}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Helper Component for Features
function FeatureCard({ label, value, icon }: { label: string, value: string | number, icon?: string }) {
    return (
        <div className="bg-[#1C1C29] p-4 rounded-xl border border-[#2C2C39]/50 hover:border-[#DDF247]/50 transition-colors">
            <p className="text-gray-500 text-xs mb-1 uppercase tracking-wide flex items-center gap-1">
                {/* Optional Icon Mapping based on prop */}
                {label}
            </p>
            <p className="text-white font-bold text-lg truncate" title={String(value)}>{value}</p>
        </div>
    );
}
