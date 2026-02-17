import { prisma } from "@repo/database";
import Link from "next/link";

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
                <Link href="/dashboard/create" className="px-4 py-2 bg-[#DDF247] text-black font-bold rounded-lg hover:bg-[#cce336] transition-colors">
                    Nueva Propiedad
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {properties.map((property) => (
                    <div key={property.id} className="bg-[#14141F] border border-[#2C2C39] rounded-2xl overflow-hidden hover:border-[#DDF247] transition-colors">
                        <div className="h-48 bg-[#1C1C29] relative">
                            {/* Placeholder for image */}
                            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                                {property.images[0] ? (
                                    <img src={property.images[0]} alt={property.title} className="w-full h-full object-cover" />
                                ) : (
                                    <span>No Image</span>
                                )}
                            </div>
                            <div className="absolute top-2 right-2 px-2 py-1 bg-black/50 rounded text-xs">
                                {property.status}
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-lg font-bold truncate pr-2">{property.title}</h3>
                                <span className="text-[#DDF247] font-mono whitespace-nowrap">
                                    {property.currency} {Number(property.price).toLocaleString()}
                                </span>
                            </div>
                            <p className="text-sm text-gray-400 line-clamp-2 mb-4">
                                {property.description || "Sin descripción"}
                            </p>
                            <div className="flex items-center justify-between text-xs text-gray-500 border-t border-[#2C2C39] pt-4">
                                <span>{property.organization.name}</span>
                                <span>{new Date(property.createdAt).toLocaleDateString()}</span>
                            </div>
                        </div>
                    </div>
                ))}

                {properties.length === 0 && (
                    <div className="col-span-full py-12 text-center text-gray-400 bg-[#14141F] rounded-2xl border border-[#2C2C39]">
                        <p>No hay propiedades disponibles.</p>
                        <Link href="/dashboard/create" className="text-[#DDF247] hover:underline mt-2 inline-block">
                            Crear la primera
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
