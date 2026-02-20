"use client";

import { ConnectButton } from "thirdweb/react";
import { createThirdwebClient } from "thirdweb";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { searchProperties } from "@/actions/search-properties";

// Make sure to replace this with your actual client ID or use the Environment Variable
const client = createThirdwebClient({
    clientId: process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID || "",
});

export default function Header() {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const [results, setResults] = useState<any[]>([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown on click outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setShowDropdown(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Debounced search
    useEffect(() => {
        const delayDebounceFn = setTimeout(async () => {
            if (searchTerm.trim().length > 1) {
                setIsSearching(true);
                const data = await searchProperties(searchTerm);
                setResults(data);
                setShowDropdown(true);
                setIsSearching(false);
            } else {
                setResults([]);
                setShowDropdown(false);
            }
        }, 300);

        return () => clearTimeout(delayDebounceFn);
    }, [searchTerm]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setShowDropdown(false);
        if (searchTerm.trim()) {
            router.push(`/dashboard/market?q=${encodeURIComponent(searchTerm)}`);
        } else {
            router.push(`/dashboard/market`);
        }
    };

    return (
        <header className="flex items-center justify-between h-20 px-8 bg-[#14141F] border-b border-[#2C2C39]">
            <div className="flex-1 max-w-xl">
                <div className="relative" ref={dropdownRef}>
                    <form onSubmit={handleSearch} className="relative">
                        <input
                            type="text"
                            placeholder="Buscar propiedades, tags, o folios..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onFocus={() => { if (searchTerm.trim().length > 1) setShowDropdown(true); }}
                            className="w-full px-4 py-2.5 bg-[#1C1C29] border border-[#2C2C39] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#DDF247] transition-colors"
                        />
                        <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#DDF247] transition-colors">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </button>
                    </form>

                    {showDropdown && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-[#1C1C29] border border-[#2C2C39] rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] z-50 overflow-hidden">
                            {isSearching ? (
                                <div className="p-4 text-center text-sm text-gray-400">Buscando...</div>
                            ) : results.length > 0 ? (
                                <ul>
                                    {results.map((prop) => (
                                        <li key={prop.id}>
                                            <Link
                                                href={`/dashboard/properties/${prop.slug}`}
                                                className="flex items-center gap-4 p-3 hover:bg-[#2C2C39] transition-colors"
                                                onClick={() => setShowDropdown(false)}
                                            >
                                                <div className="w-12 h-12 rounded-lg bg-[#14141F] overflow-hidden flex-shrink-0 relative">
                                                    {prop.images[0] ? (
                                                        <img src={prop.images[0]} alt="" className="w-full h-full object-cover" />
                                                    ) : (
                                                        <div className="w-full h-full bg-gray-800" />
                                                    )}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="text-white font-medium truncate">{prop.title}</h4>
                                                    <p className="text-xs text-gray-400 flex items-center gap-2">
                                                        <span>{prop.category || "Inmueble"}</span>
                                                        <span>•</span>
                                                        <span className="font-mono text-[#DDF247]">{prop.currency} {Number(prop.price).toLocaleString()}</span>
                                                    </p>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <span className={`text-[10px] px-2 py-1 rounded font-bold uppercase ${prop.status === 'COMING_SOON' ? 'bg-[#DDF247] text-black' : 'bg-[#2C2C39] text-gray-300'}`}>
                                                        {prop.status === 'COMING_SOON' ? 'PREVENTA' : 'ACTIVO'}
                                                    </span>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                    <li className="border-t border-[#2C2C39] p-2">
                                        <button
                                            onClick={handleSearch}
                                            className="w-full text-center text-xs text-[#DDF247] hover:underline p-2"
                                        >
                                            Ver todos los resultados
                                        </button>
                                    </li>
                                </ul>
                            ) : (
                                <div className="p-4 text-center text-sm text-gray-400">No se encontraron resultados</div>
                            )}
                        </div>
                    )}
                </div>
            </div>
            <div className="flex items-center space-x-6">
                <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
                    <svg width={24} height={25} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 18.8476C17.6392 18.8476 20.2481 18.1242 20.5 15.2205C20.5 12.3188 18.6812 12.5054 18.6812 8.94511C18.6812 6.16414 16.0452 3 12 3C7.95477 3 5.31885 6.16414 5.31885 8.94511C5.31885 12.5054 3.5 12.3188 3.5 15.2205C3.75295 18.1352 6.36177 18.8476 12 18.8476Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M14.3888 21.8574C13.0247 23.3721 10.8967 23.3901 9.51947 21.8574" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx={17} cy={5} r={4} fill="#DDF247" stroke="#1D1D1D" strokeWidth="1.5" />
                    </svg>
                </button>

                {/* Thirdweb Connect Button */}
                <ConnectButton
                    client={client}
                    theme="dark"
                    connectButton={{ label: "Login" }}
                    connectModal={{
                        size: "compact",
                        title: "Inicia Sesión",
                        showThirdwebBranding: false,
                    }}
                />
            </div>
        </header>
    );
}
