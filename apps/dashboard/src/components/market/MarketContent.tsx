"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import CreatePropertyButton from "./CreatePropertyButton";

interface MarketContentProps {
    initialProperties: any[];
}

export default function MarketContent({ initialProperties }: MarketContentProps) {
    const searchParams = useSearchParams();
    const globalSearchQuery = searchParams.get('q') || "";

    const [category, setCategory] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    const filteredProperties = useMemo(() => {
        return initialProperties.filter((p: any) => {
            let matchesSearch = true;
            if (globalSearchQuery) {
                const searchTerms = globalSearchQuery.toLowerCase().split(/\s+/).filter(Boolean);

                matchesSearch = searchTerms.every(term => {
                    const inTitle = p.title?.toLowerCase().includes(term);
                    const inDescription = p.description?.toLowerCase().includes(term);
                    const inLocation = p.location?.toLowerCase().includes(term);
                    const inCategory = p.category?.toLowerCase().includes(term);
                    const inTags = p.tags?.some((t: string) => t.toLowerCase().includes(term));

                    return inTitle || inDescription || inLocation || inCategory || inTags;
                });
            }

            const matchesCategory = category ? p.category === category : true;
            const matchesMinPrice = minPrice ? Number(p.price) >= Number(minPrice) : true;
            const matchesMaxPrice = maxPrice ? Number(p.price) <= Number(maxPrice) : true;

            return matchesSearch && matchesCategory && matchesMinPrice && matchesMaxPrice;
        });
    }, [initialProperties, globalSearchQuery, category, minPrice, maxPrice]);

    const isSearchingGlobal = !!globalSearchQuery;

    // Si hay una búsqueda global activa, mostramos tanto las activas como los lanzamientos.
    // Si no, solo mostramos las activas (los lanzamientos tienen su propia página).
    const available = filteredProperties.filter(p => {
        if (p.status === "ARCHIVED") return false;
        if (isSearchingGlobal) return true;
        return p.status !== "COMING_SOON";
    });

    return (
        <div className="text-white bg-[#0E0E17] min-h-screen">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
                <h1 className="text-3xl font-bold whitespace-nowrap">Marketplace</h1>

                {/* Filters Bar moved next to title */}
                <div className="flex-1 flex flex-wrap items-center justify-end gap-4">
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="bg-[#14141F] border border-[#2C2C39] px-3 py-2 rounded-xl text-sm focus:border-[#DDF247] outline-none min-w-[150px]"
                    >
                        <option value="">Todas las Categorías</option>
                        <option value="RESIDENCIAL">Residencial</option>
                        <option value="COMERCIAL">Comercial</option>
                        <option value="INDUSTRIAL">Industrial</option>
                        <option value="TERRENO">Terreno</option>
                    </select>

                    <input
                        type="number"
                        placeholder="Precio Mín."
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                        className="bg-[#14141F] border border-[#2C2C39] px-3 py-2 rounded-xl text-sm focus:border-[#DDF247] outline-none w-32"
                    />

                    <input
                        type="number"
                        placeholder="Precio Máx."
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        className="bg-[#14141F] border border-[#2C2C39] px-3 py-2 rounded-xl text-sm focus:border-[#DDF247] outline-none w-32"
                    />

                    {(category || minPrice || maxPrice) && (
                        <button
                            onClick={() => { setCategory(""); setMinPrice(""); setMaxPrice(""); }}
                            className="text-xs text-gray-400 hover:text-[#DDF247] transition-colors px-2"
                        >
                            Limpiar
                        </button>
                    )}
                </div>
            </div>

            {/* Disponibilidad Section */}
            <div>
                <h2 className="text-2xl font-bold mb-4 whitespace-nowrap">Disponibilidad ({available.length})</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {available.map((property: any) => (
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
                                        <span className="text-[#DDF247] font-mono whitespace-nowrap bg-[#DDF247]/10 px-2 py-0.5 rounded text-sm">
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
                                            {property.organization?.name || "Global"}
                                        </span>
                                        <span>{new Date(property.createdAt).toLocaleDateString()}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                    {available.length === 0 && (
                        <div className="col-span-full py-12 text-center text-gray-400 bg-[#14141F] rounded-2xl border border-[#2C2C39]">
                            <p>No hay propiedades que coincidan con estos filtros.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
