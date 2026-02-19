import { prisma } from "@repo/database";
import Link from "next/link";
import CreatePropertyButton from "@/components/market/CreatePropertyButton";

// Using a server component to fetch data directly
export default async function MarketPage() {
    const properties = await prisma.property.findMany({
        orderBy: { createdAt: "desc" },
        include: {
            organization: true
        }
    });

    return (
        <div className="text-white">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold">Disponibilidad (Market)</h1>
                <CreatePropertyButton />
            </div>

            {/* Lanzamientos Section */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-[#DDF247]">Lanzamientos 🚀</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {properties.filter((p: any) => p.status === "COMING_SOON").map((property: any) => (
                        <div key={property.id} className="bg-[#14141F] border border-[#2C2C39] rounded-2xl overflow-hidden hover:border-[#DDF247] transition-colors relative group">
                            <div className="h-48 bg-[#1C1C29] relative">
                                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                                    {property.images[0] ? (
                                        <img src={property.images[0]} alt={property.title} className="w-full h-full object-cover" />
                                    ) : (
                                        <span>No Image</span>
                                    )}
                                </div>
                                <div className="absolute top-2 right-2 px-2 py-1 bg-[#DDF247] text-black font-bold rounded text-xs z-10">
                                    COMING SOON
                                </div>
                                {property.category && (
                                    <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/60 backdrop-blur rounded text-xs text-white">
                                        {property.category}
                                    </div>
                                )}
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-bold truncate mb-1">{property.title}</h3>
                                <p className="text-sm text-gray-400 line-clamp-2 mb-4 h-10">
                                    {property.description || "Próximamente más detalles..."}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {property.tags.map((tag: string) => (
                                        <span key={tag} className="px-2 py-1 bg-[#2C2C39] rounded text-[10px] text-gray-300">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                    {properties.filter((p: any) => p.status === "COMING_SOON").length === 0 && (
                        <div className="col-span-full py-8 text-center text-gray-500 border border-[#2C2C39] border-dashed rounded-xl">
                            No hay lanzamientos próximos.
                        </div>
                    )}
                </div>
            </div>

            {/* Disponibilidad Section */}
            <div>
                <h2 className="text-2xl font-bold mb-4">Disponibilidad</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {properties.filter((p: any) => p.status !== "COMING_SOON" && p.status !== "ARCHIVED").map((property: any) => (
                        <Link key={property.id} href={`/dashboard/properties/${property.slug}`} className="block group">
                            <div className="bg-[#14141F] border border-[#2C2C39] rounded-2xl overflow-hidden hover:border-[#DDF247] transition-all duration-300 hover:shadow-[0_0_20px_rgba(221,242,71,0.1)] hover:-translate-y-1">
                                <div className="h-48 bg-[#1C1C29] relative overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                                        {property.images[0] ? (
                                            <img src={property.images[0]} alt={property.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                        ) : (
                                            <span>No Image</span>
                                        )}
                                    </div>
                                    <div className="absolute top-2 right-2 px-2 py-1 bg-black/50 rounded text-xs backdrop-blur-sm border border-white/10">
                                        {property.status}
                                    </div>
                                    {property.category && (
                                        <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/60 backdrop-blur rounded text-xs text-white border border-white/10">
                                            {property.category}
                                        </div>
                                    )}
                                </div>
                                <div className="p-4">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-lg font-bold truncate pr-2 group-hover:text-[#DDF247] transition-colors">{property.title}</h3>
                                        <span className="text-[#DDF247] font-mono whitespace-nowrap bg-[#DDF247]/10 px-2 py-0.5 rounded">
                                            {property.currency} {Number(property.price).toLocaleString()}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-400 line-clamp-2 mb-4 h-10">
                                        {property.description || "Sin descripción"}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {property.tags.map((tag: string) => (
                                            <span key={tag} className="px-2 py-1 bg-[#2C2C39] rounded text-[10px] text-gray-300">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex items-center justify-between text-xs text-gray-500 border-t border-[#2C2C39] pt-4 mt-auto">
                                        <span className="flex items-center gap-1">
                                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                            {property.organization.name}
                                        </span>
                                        <span>{new Date(property.createdAt).toLocaleDateString()}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                    {properties.filter((p: any) => p.status !== "COMING_SOON" && p.status !== "ARCHIVED").length === 0 && (
                        <div className="col-span-full py-12 text-center text-gray-400 bg-[#14141F] rounded-2xl border border-[#2C2C39]">
                            <p>No hay propiedades disponibles.</p>
                            <Link href="/dashboard/create" className="text-[#DDF247] hover:underline mt-2 inline-block">
                                Crear la primera
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
