import { prisma } from "@repo/database";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface PropertyLandingPageProps {
    params: {
        slug: string;
    };
}

export default async function PropertyLandingPage({ params }: PropertyLandingPageProps) {
    const property = await prisma.property.findUnique({
        where: { slug: params.slug },
        include: {
            organization: true,
            user: true,
        },
    });

    if (!property) {
        notFound();
    }

    const org = property.organization;
    const agent = property.user;

    // Format price
    const formattedPrice = new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: property.currency,
    }).format(Number(property.price));

    const whatsappMessage = encodeURIComponent(`Hola, vi la propiedad "${property.title}" en Aztecaz y me gustaría recibir más información.`);
    const whatsappUrl = `https://wa.me/${org.phone || ""}?text=${whatsappMessage}`;

    return (
        <div className="min-h-screen bg-[#0E0E17] text-white selection:bg-[#DDF247] selection:text-black">
            {/* Glassmorphism Header */}
            <header className="fixed top-0 w-full z-50 bg-[#0E0E17]/60 backdrop-blur-xl border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        {org.logo ? (
                            <Image src={org.logo} alt={org.name} width={40} height={40} className="w-10 h-10 object-contain rounded-lg bg-white/5 p-1" />
                        ) : (
                            <div className="w-10 h-10 bg-[#DDF247] rounded-lg flex items-center justify-center text-black font-bold">
                                {org.name.charAt(0)}
                            </div>
                        )}
                        <span className="font-semibold tracking-tight">{org.name}</span>
                    </div>
                    <Link
                        href={whatsappUrl}
                        target="_blank"
                        className="bg-[#DDF247] text-black px-6 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-transform"
                    >
                        Contactar Agente
                    </Link>
                </div>
            </header>

            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative h-[80vh] w-full mt-2 mx-auto max-w-[1400px] overflow-hidden rounded-3xl shadow-2xl px-6">
                    <Image
                        src={property.images[0] || "/assets/images/placeholder-property.jpg"}
                        alt={property.title}
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E17] via-transparent to-transparent opacity-90" />

                    <div className="absolute bottom-12 left-12 right-12">
                        <div className="max-w-4xl">
                            <span className="bg-[#DDF247] text-black px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block">
                                {property.category || "EXCLUSIVO"}
                            </span>
                            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">{property.title}</h1>
                            <div className="flex items-center gap-4 text-xl text-gray-300">
                                <span className="flex items-center gap-2">📍 {property.location}</span>
                                <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                                <span className="text-[#DDF247] font-bold">{formattedPrice}</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Left: Details */}
                    <div className="lg:col-span-2 space-y-12">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold border-l-4 border-[#DDF247] pl-4">Descripción</h3>
                            <p className="text-xl text-gray-400 leading-relaxed font-light">
                                {property.description}
                            </p>
                        </div>

                        {/* Feature Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                            {property.bedrooms && (
                                <div className="p-6 bg-white/5 rounded-2xl border border-white/5 group hover:border-[#DDF247]/30 transition-colors">
                                    <p className="text-gray-500 text-sm mb-1 uppercase tracking-wider">Recámaras</p>
                                    <p className="text-3xl font-bold">{property.bedrooms}</p>
                                </div>
                            )}
                            {property.bathrooms && (
                                <div className="p-6 bg-white/5 rounded-2xl border border-white/5 group hover:border-[#DDF247]/30 transition-colors">
                                    <p className="text-gray-500 text-sm mb-1 uppercase tracking-wider">Baños</p>
                                    <p className="text-3xl font-bold">{property.bathrooms}</p>
                                </div>
                            )}
                            {property.areaSqFt && (
                                <div className="p-6 bg-white/5 rounded-2xl border border-white/5 group hover:border-[#DDF247]/30 transition-colors">
                                    <p className="text-gray-500 text-sm mb-1 uppercase tracking-wider">Área Const.</p>
                                    <p className="text-3xl font-bold">{property.areaSqFt} m²</p>
                                </div>
                            )}
                            {property.lotSize && (
                                <div className="p-6 bg-white/5 rounded-2xl border border-white/5 group hover:border-[#DDF247]/30 transition-colors">
                                    <p className="text-gray-500 text-sm mb-1 uppercase tracking-wider">Terreno</p>
                                    <p className="text-3xl font-bold">{property.lotSize} m²</p>
                                </div>
                            )}
                            {property.ceilingHeight && (
                                <div className="p-6 bg-white/5 rounded-2xl border border-white/5 group hover:border-[#DDF247]/30 transition-colors">
                                    <p className="text-gray-500 text-sm mb-1 uppercase tracking-wider">Altura</p>
                                    <p className="text-3xl font-bold">{property.ceilingHeight} m</p>
                                </div>
                            )}
                            {property.parkingSpaces && (
                                <div className="p-6 bg-white/5 rounded-2xl border border-white/5 group hover:border-[#DDF247]/30 transition-colors">
                                    <p className="text-gray-500 text-sm mb-1 uppercase tracking-wider">Estac.</p>
                                    <p className="text-3xl font-bold">{property.parkingSpaces}</p>
                                </div>
                            )}
                        </div>

                        {/* Project Details / Files */}
                        {(property.zoning || property.yearBuilt || property.electricalCapacity) && (
                            <div className="bg-white/5 p-8 rounded-3xl border border-white/5">
                                <h4 className="text-lg font-bold mb-6 text-[#DDF247]">Detalles Adicionales</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
                                    {property.zoning && (
                                        <div className="flex justify-between border-b border-white/5 pb-2">
                                            <span className="text-gray-500">Zonificación</span>
                                            <span className="font-semibold">{property.zoning}</span>
                                        </div>
                                    )}
                                    {property.yearBuilt && (
                                        <div className="flex justify-between border-b border-white/5 pb-2">
                                            <span className="text-gray-500">Año Construcción</span>
                                            <span className="font-semibold">{property.yearBuilt}</span>
                                        </div>
                                    )}
                                    {property.electricalCapacity && (
                                        <div className="flex justify-between border-b border-white/5 pb-2">
                                            <span className="text-gray-500">Capacidad Eléctrica</span>
                                            <span className="font-semibold">{property.electricalCapacity}</span>
                                        </div>
                                    )}
                                    {property.orientation && (
                                        <div className="flex justify-between border-b border-white/5 pb-2">
                                            <span className="text-gray-500">Orientación</span>
                                            <span className="font-semibold">{property.orientation}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* PDF Downloads */}
                        {property.documents && (Array.isArray(property.documents)) && property.documents.length > 0 && (
                            <div className="space-y-4">
                                <h4 className="text-lg font-bold">Documentación Relacionada</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {(property.documents as any[]).map((doc, i) => (
                                        <a
                                            key={i}
                                            href={doc.url}
                                            target="_blank"
                                            className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-[#DDF247] transition-colors group"
                                        >
                                            <div className="bg-red-500/20 p-2 rounded-lg text-red-500 group-hover:scale-110 transition-transform">
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" /></svg>
                                            </div>
                                            <div className="flex-1 overflow-hidden">
                                                <p className="font-medium truncate">{doc.name}</p>
                                                <p className="text-xs text-gray-500 uppercase tracking-tighter">Descargar PDF</p>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right: Sidebar / Lead Capture */}
                    <div className="space-y-8">
                        {/* Agent Card */}
                        <div className="p-8 bg-white/5 rounded-3xl border border-white/5 backdrop-blur-md sticky top-32">
                            <div className="flex flex-col items-center text-center">
                                {agent?.image ? (
                                    <Image src={agent.image} alt={agent.name || ""} width={100} height={100} className="rounded-full mb-4 border-2 border-[#DDF247]" />
                                ) : (
                                    <div className="w-20 h-20 bg-[#1C1C29] rounded-full flex items-center justify-center text-2xl font-bold text-gray-400 mb-4 border border-white/10">
                                        {agent?.name?.charAt(0) || org.name.charAt(0)}
                                    </div>
                                )}
                                <h5 className="text-xl font-bold">{agent?.name || "Asesor Inmobiliario"}</h5>
                                <p className="text-gray-500 text-sm mb-8">{org.name}</p>

                                <div className="w-full space-y-4">
                                    <Link
                                        href={whatsappUrl}
                                        target="_blank"
                                        className="w-full bg-[#DDF247] text-black h-14 rounded-2xl font-black flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-[0_10px_30px_rgba(221,242,71,0.2)]"
                                    >
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.01 2.01c-5.52 0-9.99 4.47-9.99 9.99 0 1.63.39 3.17 1.08 4.54L2 22l5.58-1.46c1.32.72 2.82 1.13 4.41 1.13 5.52 0 9.99-4.47 9.99-9.99 0-5.52-4.47-9.99-9.99-9.99zM12.01 20c-1.46 0-2.83-.37-4.04-1.02l-.29-.15-3.35.88.9-3.27-.17-.27c-.7-1.12-1.1-2.45-1.1-3.87 0-3.85 3.13-6.99 6.99-6.99 3.85 0 6.99 3.13 6.99 6.99 0 3.86-3.13 6.98-6.93 6.98z" /></svg>
                                        AGENDAR VISITA
                                    </Link>

                                    <button className="w-full bg-white/5 border border-white/10 text-white h-14 rounded-2xl font-bold hover:bg-white/10 transition-all">
                                        SOLICITAR TOUR VIRTUAL
                                    </button>
                                </div>

                                <div className="mt-8 pt-8 border-t border-white/5 w-full">
                                    <p className="text-xs text-gray-500 mb-2">UBICACIÓN EXACTA</p>
                                    <Link
                                        href={property.locationUrl || "#"}
                                        target="_blank"
                                        className="text-[#DDF247] text-sm hover:underline flex items-center justify-center gap-1"
                                    >
                                        Ver en Google Maps 📍
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="py-20 border-t border-white/5 bg-[#08080C]">
                <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
                    <p className="text-gray-600 text-sm mb-4">Propulsado por Aztecaz Platform</p>
                    <NextImage src="/assets/images/logo/only_h_o.png" alt="Aztecaz" width={40} height={40} className="opacity-20 grayscale brightness-200" />
                </div>
            </footer>
        </div>
    );
}

// Reuse NextImage just in case
function NextImage({ src, alt, width, height, className }: any) {
    return <Image src={src} alt={alt} width={width} height={height} className={className} />;
}
