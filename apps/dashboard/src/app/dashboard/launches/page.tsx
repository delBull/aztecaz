import { prisma } from "@repo/database";
import Image from "next/image";
import Link from "next/link";

export default async function LaunchesPage() {
    const upcomingLaunches = await prisma.property.findMany({
        where: { status: "COMING_SOON" },
        orderBy: { createdAt: "desc" },
    });

    return (
        <div className="p-8 max-w-7xl mx-auto text-white">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                <div>
                    <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                        Próximos Lanzamientos
                    </h1>
                    <p className="text-gray-400 max-w-xl text-lg">
                        Descubre las propiedades más exclusivas antes que nadie. Únete a las preventas y asegura tu inversión en el Real Estate del futuro.
                    </p>
                </div>
                <div className="bg-[#1C1C29] px-6 py-3 rounded-2xl border border-[#2C2C39] flex items-center space-x-3">
                    <span className="w-3 h-3 bg-[#DDF247] rounded-full animate-pulse" />
                    <span className="text-sm font-semibold uppercase tracking-wider">Activos en Preventa: {upcomingLaunches.length}</span>
                </div>
            </div>

            {upcomingLaunches.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {upcomingLaunches.map((launch) => (
                        <div key={launch.id} className="group relative bg-[#14141F] rounded-3xl overflow-hidden border border-[#2C2C39] hover:border-[#DDF247]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#DDF247]/5">
                            <div className="aspect-[16/10] relative overflow-hidden">
                                <Image
                                    src={launch.images[0] || "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80"}
                                    alt={launch.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#14141F] via-transparent to-transparent opacity-60" />
                                <div className="absolute top-4 left-4 bg-[#DDF247] text-black px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                                    Próximamente
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3 group-hover:text-[#DDF247] transition-colors line-clamp-1">
                                    {launch.title}
                                </h3>
                                <div className="flex items-center text-gray-400 text-sm mb-4">
                                    <svg className="w-4 h-4 mr-2 text-[#DDF247]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    {launch.location || "Ubicación por confirmar"}
                                </div>

                                <div className="pt-4 border-t border-[#2C2C39] flex justify-between items-center">
                                    <div>
                                        <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Precio Estimado</p>
                                        <p className="text-lg font-mono font-bold text-white">
                                            {launch.price.toString()} <span className="text-[#DDF247]">{launch.currency}</span>
                                        </p>
                                    </div>
                                    <Link href={`/dashboard/market?id=${launch.id}`} className="p-3 bg-[#1C1C29] rounded-xl hover:bg-[#DDF247] hover:text-black transition-all group/btn">
                                        <svg className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-24 bg-[#14141F] rounded-3xl border border-dashed border-[#2C2C39]">
                    <div className="bg-[#1C1C29] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Sin lanzamientos próximos</h3>
                    <p className="text-gray-500 max-w-sm mx-auto">
                        Estamos preparando nuevas oportunidades. Vuelve pronto para descubrir los próximos Proyectos de Aztecaz.
                    </p>
                </div>
            )}

            {/* Coming Soon Legends Section */}
            <div className="mt-20 p-10 bg-gradient-to-br from-[#1C1C29] to-[#14141F] rounded-[3rem] border border-[#2C2C39] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                    <svg className="w-48 h-48" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                    </svg>
                </div>
                <div className="relative z-10">
                    <h2 className="text-2xl font-bold mb-6 flex items-center">
                        <span className="w-10 h-10 bg-[#DDF247]/10 rounded-xl flex items-center justify-center mr-4">
                            <svg className="w-6 h-6 text-[#DDF247]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </span>
                        Hoja de Ruta de Inversión
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <h4 className="text-[#DDF247] font-semibold">Tecnología de Fraccionamiento</h4>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                Muy pronto podrás adquirir fracciones de estas propiedades mediante Smart Contracts, permitiendo inversiones desde montos mínimos con total transparencia y seguridad blockchain.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <h4 className="text-[#DDF247] font-semibold">ActiveBid & Secondary Market</h4>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                Habilitaremos el módulo de subastas en vivo y un mercado secundario para que puedas vender tus participaciones de activos inmobiliarios de forma líquida e inmediata.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
