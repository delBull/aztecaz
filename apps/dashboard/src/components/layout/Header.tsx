"use client";

import { ConnectButton } from "thirdweb/react";
import { createThirdwebClient } from "thirdweb";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { searchProperties } from "@/actions/search-properties";
import { getNotifications, type Notification } from "@/actions/get-notifications";

// Make sure to replace this with your actual client ID or use the Environment Variable
const client = createThirdwebClient({
    clientId: process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID || "",
});


function NotificationsPanel() {
    const [open, setOpen] = useState(false);
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [loading, setLoading] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const unreadCount = notifications.filter(n => n.unread).length;

    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
        }
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, []);

    // Fetch from DB when panel opens
    useEffect(() => {
        if (!open) return;
        setLoading(true);
        getNotifications().then((data) => {
            setNotifications(data);
            setLoading(false);
        });
    }, [open]);

    const markAllRead = () => setNotifications(prev => prev.map(n => ({ ...n, unread: false })));

    return (
        <div className="relative" ref={ref}>
            <button
                onClick={() => setOpen(!open)}
                className="relative p-2 text-gray-400 hover:text-white transition-colors"
                aria-label="Notificaciones"
            >
                <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
                {unreadCount > 0 && (
                    <span className="absolute top-1 right-1 w-4 h-4 bg-[#DDF247] text-black text-[9px] font-black rounded-full flex items-center justify-center leading-none">
                        {unreadCount}
                    </span>
                )}
            </button>

            {open && (
                <div className="absolute top-full right-0 mt-2 w-80 bg-[#1C1C29] border border-[#2C2C39] rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] z-50 overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center justify-between px-5 py-4 border-b border-[#2C2C39]">
                        <h3 className="text-sm font-bold text-white">Notificaciones</h3>
                        {unreadCount > 0 && (
                            <button onClick={markAllRead} className="text-[10px] text-[#DDF247] hover:underline font-semibold">
                                Marcar todo como leído
                            </button>
                        )}
                    </div>

                    {/* Feed */}
                    <ul className="max-h-80 overflow-y-auto divide-y divide-[#2C2C39]/50">
                        {notifications.map(n => (
                            <li
                                key={n.id}
                                className={`flex gap-3 px-4 py-3 hover:bg-[#2C2C39]/50 transition-colors cursor-pointer ${n.unread ? "bg-[#DDF247]/5" : ""}`}
                            >
                                <span className="text-xl flex-shrink-0 mt-0.5">{n.icon}</span>
                                <div className="flex-1 min-w-0">
                                    <p className={`text-xs font-semibold ${n.unread ? "text-white" : "text-gray-300"}`}>{n.title}</p>
                                    <p className="text-[11px] text-gray-400 mt-0.5 leading-snug">{n.body}</p>
                                    <p className="text-[10px] text-gray-600 mt-1">{n.time}</p>
                                </div>
                                {n.unread && (
                                    <span className="w-2 h-2 bg-[#DDF247] rounded-full flex-shrink-0 mt-1.5" />
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Footer */}
                    <div className="px-5 py-3 border-t border-[#2C2C39] text-center">
                        <Link href="/dashboard" onClick={() => setOpen(false)} className="text-xs text-[#DDF247] hover:underline font-semibold">
                            Ver todo el historial →
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

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
            <div className="flex items-center space-x-4">
                <NotificationsPanel />
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
