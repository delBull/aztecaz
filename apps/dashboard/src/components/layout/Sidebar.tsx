"use client";

import Link from "next/link";
import NextImage from "next/image";
import { usePathname } from "next/navigation";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useState } from "react";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const sidebarItems = [
    {
        name: "Disponibilidad",
        href: process.env.NEXT_PUBLIC_WEB_URL ? `${process.env.NEXT_PUBLIC_WEB_URL}/market` : "https://www.aztecaz.xyz/market",
        icon: (
            <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.2">
                    <path d="M6.75731 9.35159V15.64" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11.0351 6.34253V15.64" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15.2431 12.6746V15.6401" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.2954 1.83334H6.70492C3.71048 1.83334 1.8335 3.95275 1.8335 6.95307V15.0469C1.8335 18.0473 3.70175 20.1667 6.70492 20.1667H15.2954C18.2986 20.1667 20.1668 18.0473 20.1668 15.0469V6.95307C20.1668 3.95275 18.2986 1.83334 15.2954 1.83334Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <path fillRule="evenodd" clipRule="evenodd" d="M6.71982 1.83371H15.2806C18.3982 1.83371 20.1582 3.60196 20.1673 6.71954V15.2812C20.1673 18.3979 18.3982 20.167 15.2806 20.167H6.71982C3.60223 20.167 1.83398 18.3979 1.83398 15.2812V6.71954C1.83398 3.60196 3.60223 1.83371 6.71982 1.83371ZM11.0456 16.372C11.4407 16.372 11.7697 16.0787 11.8064 15.6845V6.34371C11.8431 6.05954 11.7065 5.77446 11.459 5.61954C11.2014 5.46371 10.8897 5.46371 10.6432 5.61954C10.3947 5.77446 10.2582 6.05954 10.2847 6.34371V15.6845C10.3315 16.0787 10.6606 16.372 11.0456 16.372ZM15.2628 16.372C15.6478 16.372 15.9769 16.0787 16.0237 15.6845V12.6779C16.0502 12.3836 15.9137 12.1095 15.6652 11.9537C15.4187 11.7979 15.107 11.7979 14.8503 11.9537C14.6019 12.1095 14.4653 12.3836 14.502 12.6779V15.6845C14.5387 16.0787 14.8677 16.372 15.2628 16.372ZM7.534 15.6845C7.49734 16.0787 7.16825 16.372 6.77317 16.372C6.379 16.372 6.049 16.0787 6.01325 15.6845V9.35038C5.98575 9.0653 6.12234 8.78205 6.37075 8.62621C6.61734 8.47038 6.92992 8.47038 7.17742 8.62621C7.424 8.78205 7.56242 9.0653 7.534 9.35038V15.6845Z" fill="currentColor" />
            </svg>
        ),
    },
    {
        name: "Lanzamientos",
        href: "/dashboard/launches",
        icon: (
            <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M15.7481 4.0425C15.7481 2.82333 16.7381 1.83333 17.9573 1.83333C19.1764 1.83333 20.1664 2.82333 20.1664 4.0425C20.1664 5.26166 19.1764 6.25166 17.9573 6.25166C16.7381 6.25166 15.7481 5.26166 15.7481 4.0425ZM12.2188 13.5294L14.868 10.1111L14.8313 10.1294C14.978 9.92777 15.0055 9.6711 14.9047 9.44194C14.8048 9.21277 14.5838 9.05694 14.3464 9.0386C14.098 9.0111 13.8514 9.1211 13.7038 9.32277L11.4864 12.1919L8.94634 10.1936C8.79051 10.0744 8.60717 10.0277 8.42384 10.0469C8.24142 10.0744 8.07642 10.1744 7.96551 10.321L5.25309 13.8511L5.19717 13.9336C5.04134 14.226 5.11467 14.6019 5.38967 14.8044C5.51801 14.8869 5.65551 14.9419 5.81134 14.9419C6.02309 14.9511 6.22384 14.8402 6.35217 14.6669L8.65301 11.7052L11.2655 13.6678L11.348 13.7219C11.6413 13.8777 12.008 13.8053 12.2188 13.5294ZM14.1622 3.46527C14.1255 3.69444 14.1072 3.9236 14.1072 4.15277C14.1072 6.21527 15.7755 7.88269 17.8288 7.88269C18.058 7.88269 18.278 7.8561 18.5072 7.81944V15.216C18.5072 18.3244 16.6738 20.1669 13.5572 20.1669H6.78392C3.66634 20.1669 1.83301 18.3244 1.83301 15.216V8.4336C1.83301 5.31694 3.66634 3.46527 6.78392 3.46527H14.1622Z" fill="currentColor" />
            </svg>
        ),
    },
    {
        name: "Finanzas",
        href: "/dashboard/finance",
        icon: (
            <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M4.16134 1.83334H7.25967C8.55217 1.83334 9.58801 2.88751 9.58801 4.18093V7.30584C9.58801 8.60751 8.55217 9.65251 7.25967 9.65251H4.16134C2.87801 9.65251 1.83301 8.60751 1.83301 7.30584V4.18093C1.83301 2.88751 2.87801 1.83334 4.16134 1.83334ZM4.16134 12.3472H7.25967C8.55217 12.3472 9.58801 13.3932 9.58801 14.6948V17.8197C9.58801 19.1122 8.55217 20.1664 7.25967 20.1664H4.16134C2.87801 20.1664 1.83301 19.1122 1.83301 17.8197V14.6948C1.83301 13.3932 2.87801 12.3472 4.16134 12.3472ZM17.8381 1.83334H14.7398C13.4473 1.83334 12.4114 2.88751 12.4114 4.18093V7.30584C12.4114 8.60751 13.4473 9.65251 14.7398 9.65251H17.8381C19.1214 9.65251 20.1664 8.60751 20.1664 7.30584V4.18093C20.1664 2.88751 19.1214 1.83334 17.8381 1.83334ZM14.7398 12.3472H17.8381C19.1214 12.3472 20.1664 13.3932 20.1664 14.6948V17.8197C20.1664 19.1122 19.1214 20.1664 17.8381 20.1664H14.7398C13.4473 20.1664 12.4114 19.1122 12.4114 17.8197V14.6948C12.4114 13.3932 13.4473 12.3472 14.7398 12.3472Z" fill="currentColor" />
            </svg>
        ),
    },
    {
        name: "Mis Activos",
        href: "/dashboard/assets",
        icon: (
            <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12.3279 4.47353H15.142C18.5245 4.47353 20.1745 6.27936 20.1654 9.9827V14.4469C20.1654 17.9852 17.9837 20.1669 14.4362 20.1669H7.55203C4.02286 20.1669 1.83203 17.9852 1.83203 14.4377V7.55353C1.83203 3.75853 3.5187 1.83353 6.8462 1.83353H8.29453C9.14795 1.82436 9.94453 2.21853 10.467 2.8877L11.2737 3.9602C11.5304 4.28103 11.9154 4.47353 12.3279 4.47353ZM6.75391 14.016H15.2422C15.6181 14.016 15.9206 13.7044 15.9206 13.3285C15.9206 12.9435 15.6181 12.641 15.2422 12.641H6.75391C6.36891 12.641 6.06641 12.9435 6.06641 13.3285C6.06641 13.7044 6.36891 14.016 6.75391 14.016Z" fill="currentColor" />
            </svg>
        ),
    },
    {
        name: "Wallet",
        href: "/dashboard/wallet",
        icon: (
            <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M16.2883 7.68332H20.1668C20.1668 4.56921 18.3009 2.75 15.1394 2.75H6.8609C3.69942 2.75 1.8335 4.56921 1.8335 7.6436V14.3564C1.8335 17.4308 3.69942 19.25 6.8609 19.25H15.1394C18.3009 19.25 20.1668 17.4308 20.1668 14.3564V14.0704H16.2883C14.4883 14.0704 13.0291 12.6477 13.0291 10.8928C13.0291 9.13778 14.4883 7.71509 16.2883 7.71509V7.68332ZM16.2883 9.04971H19.4824C19.8604 9.04971 20.1668 9.34848 20.1668 9.71702V12.0367C20.1624 12.4035 19.8586 12.6997 19.4824 12.704H16.3616C15.4504 12.716 14.6535 12.1077 14.4468 11.2423C14.3433 10.7051 14.4886 10.1508 14.8438 9.72787C15.199 9.30496 15.7277 9.05674 16.2883 9.04971ZM16.4268 11.4886H16.7283C17.1153 11.4886 17.4291 11.1827 17.4291 10.8054C17.4291 10.428 17.1153 10.1222 16.7283 10.1222H16.4268C16.2417 10.12 16.0635 10.1903 15.9318 10.3171C15.8002 10.444 15.7261 10.617 15.7261 10.7974C15.7261 11.1761 16.0385 11.4842 16.4268 11.4886ZM6.17646 7.68332H11.3505C11.7375 7.68332 12.0513 7.37744 12.0513 7.00012C12.0513 6.6228 11.7375 6.31692 11.3505 6.31692H6.17646C5.79261 6.3169 5.48018 6.61796 5.47572 6.99218C5.47569 7.3708 5.78814 7.67897 6.17646 7.68332Z" fill="currentColor" />
            </svg>
        ),
    },
    {
        name: "Historial",
        href: "/dashboard/history",
        icon: (
            <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M7.03051 1.83337H14.978C18.0855 1.83337 20.1663 4.01412 20.1663 7.25912V14.7483C20.1663 17.985 18.0855 20.1667 14.978 20.1667H7.03051C3.92301 20.1667 1.83301 17.985 1.83301 14.7483V7.25912C1.83301 4.01412 3.92301 1.83337 7.03051 1.83337ZM14.2813 14.4925C14.5105 14.4925 14.7397 14.3734 14.868 14.1534C15.0697 13.8316 14.9597 13.41 14.6297 13.2092L11.3663 11.2659V7.02996C11.3663 6.65504 11.0638 6.34246 10.6788 6.34246C10.303 6.34246 9.99134 6.65504 9.99134 7.02996V11.66C9.99134 11.8984 10.1197 12.1275 10.3305 12.2467L13.9238 14.3917C14.0338 14.465 14.1622 14.4925 14.2813 14.4925Z" fill="currentColor" />
            </svg>
        ),
    },
    {
        name: "Configuración",
        href: "/dashboard/settings",
        icon: (
            <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.0709 10.2942C8.66986 10.2942 8.35275 10.6059 8.35275 11C8.35275 11.385 8.66986 11.7059 9.0709 11.7059H14.6668V16.0875C14.6668 18.3334 12.8108 20.1667 10.5165 20.1667H5.97448C3.68948 20.1667 1.8335 18.3425 1.8335 16.0967V5.91254C1.8335 3.65754 3.69881 1.83337 5.98381 1.83337H10.5352C12.8108 1.83337 14.6668 3.65754 14.6668 5.90337V10.2942H9.0709ZM17.9945 7.82856L20.6712 10.4961C20.8087 10.6336 20.882 10.8077 20.882 11.0002C20.882 11.1836 20.8087 11.3669 20.6712 11.4952L17.9945 14.1627C17.857 14.3002 17.6737 14.3736 17.4995 14.3736C17.3162 14.3736 17.1328 14.3002 16.9953 14.1627C16.7203 13.8877 16.7203 13.4386 16.9953 13.1636L18.462 11.7061H14.667V10.2944H18.462L16.9953 8.83689C16.7203 8.56189 16.7203 8.11272 16.9953 7.83772C17.2703 7.55356 17.7195 7.55356 17.9945 7.82856Z" fill="currentColor" />
            </svg>
        ),
    },
];

import { useRouter } from "next/navigation";
import { useDisconnect, useActiveWallet } from "thirdweb/react";
import { useRole } from "@/context/RoleContext";

export default function Sidebar() {
    const pathname = usePathname();
    const router = useRouter();
    const [isCollapsed, setIsCollapsed] = useState(false);
    const { disconnect } = useDisconnect();
    const wallet = useActiveWallet();
    const { isSuperAdmin, hasRole, isLoading } = useRole();

    // Define restrictions for specific routes
    const restrictedItems = {
        "/dashboard/market": ["ADMIN", "ORG_ADMIN", "BROKER", "AGENT"],
        "/dashboard/launches": ["ADMIN", "ORG_ADMIN", "BROKER", "AGENT"],
        "/dashboard/finance": ["ADMIN", "ORG_ADMIN", "BROKER"],
    };

    return (
        <div
            className={cn(
                "flex flex-col h-screen bg-[#14141F] border-r border-[#2C2C39] fixed left-0 top-0 transition-all duration-300 z-50",
                isCollapsed ? "w-20" : "w-64"
            )}
        >
            <div className="flex items-center justify-between h-20 px-4 border-b border-[#2C2C39]">
                <Link href="/dashboard" className="flex items-center justify-center w-full">
                    {isCollapsed ? (
                        <NextImage src="/favicon.png" alt="Aztecaz" width={32} height={32} className="h-8 w-8 object-contain" />
                    ) : (
                        <NextImage src="/assets/images/logo/only_h_o.png" alt="Aztecaz" width={40} height={40} className="h-10 w-auto object-contain" />
                    )}
                </Link>
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className={cn(
                        "text-gray-400 hover:text-white transition-colors absolute -right-3 top-9 bg-[#14141F] border border-[#2C2C39] rounded-full p-1",
                    )}
                >
                    {isCollapsed ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    ) : (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    )}
                </button>
            </div>

            <div className="flex flex-col flex-1 overflow-y-auto py-4 overflow-x-hidden">
                {/* Create Property - Only for Admins/Agents */}
                {(isSuperAdmin || hasRole("AGENT")) && (
                    <div className="px-4 mb-6">
                        <Link
                            href="/dashboard/create"
                            className={cn(
                                "flex items-center justify-center w-full py-3 bg-[#DDF247] text-black font-bold rounded-xl hover:bg-[#cce336] transition-colors",
                                isCollapsed ? "px-0" : "px-4"
                            )}
                            title="Crear Propiedad"
                        >
                            <span className="text-xl">+</span>
                            {!isCollapsed && <span className="ml-2">Crear Propiedad</span>}
                        </Link>
                    </div>
                )}

                <nav className="flex-1 px-2 space-y-2">
                    <div>
                        {/* Activos Section - Mostly for Admins/Agents */}
                        {(isSuperAdmin || hasRole("AGENT")) && (
                            <>
                                {!isCollapsed && (
                                    <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                                        Activos
                                    </p>
                                )}
                                {sidebarItems.slice(0, 3).map((item) => {
                                    // Skip if user doesn't have required role for this item
                                    // @ts-ignore
                                    if (restrictedItems[item.href] && !hasRole(restrictedItems[item.href])) {
                                        return null;
                                    }

                                    const isActive = pathname === item.href;
                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className={cn(
                                                "flex items-center py-3 text-sm font-medium rounded-xl transition-colors relative group",
                                                isActive
                                                    ? "bg-[#DDF247] text-black"
                                                    : "text-gray-400 hover:bg-[#1C1C29] hover:text-white",
                                                isCollapsed ? "justify-center px-0" : "px-4"
                                            )}
                                            title={isCollapsed ? item.name : undefined}
                                        >
                                            <span className={cn("flex-shrink-0", !isCollapsed && "mr-3")}>{item.icon}</span>
                                            {!isCollapsed && <span>{item.name}</span>}
                                        </Link>
                                    );
                                })}
                            </>
                        )}
                    </div>

                    <div className="mt-8">
                        {!isCollapsed && (
                            <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                                Cuenta
                            </p>
                        )}

                        {/* Organization - Only for those who belong to one */}
                        {(isSuperAdmin || hasRole("AGENT")) && (
                            <Link
                                href="/dashboard/organization"
                                className={cn(
                                    "flex items-center py-3 text-sm font-medium rounded-xl transition-colors mb-1 relative group",
                                    pathname === "/dashboard/organization"
                                        ? "bg-[#DDF247] text-black"
                                        : "text-gray-400 hover:bg-[#1C1C29] hover:text-white",
                                    isCollapsed ? "justify-center px-0" : "px-4"
                                )}
                                title={isCollapsed ? "Organización" : undefined}
                            >
                                <span className={cn("flex-shrink-0", !isCollapsed && "mr-3")}>
                                    <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="9" cy="7" r="4"></circle>
                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                    </svg>
                                </span>
                                {!isCollapsed && <span>Organización</span>}
                            </Link>
                        )}

                        {/* Common items for everyone (Wallet, History, Settings) */}
                        {sidebarItems.slice(3).map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "flex items-center py-3 text-sm font-medium rounded-xl transition-colors relative group",
                                        isActive
                                            ? "bg-[#DDF247] text-black"
                                            : "text-gray-400 hover:bg-[#1C1C29] hover:text-white",
                                        isCollapsed ? "justify-center px-0" : "px-4"
                                    )}
                                    title={isCollapsed ? item.name : undefined}
                                >
                                    <span className={cn("flex-shrink-0", !isCollapsed && "mr-3")}>{item.icon}</span>
                                    {!isCollapsed && <span>{item.name}</span>}
                                </Link>
                            );
                        })}
                    </div>
                </nav>

                <div className="p-4 border-t border-[#2C2C39]">
                    <button
                        onClick={() => {
                            if (wallet) disconnect(wallet);
                            router.push("/");
                        }}
                        className={cn(
                            "flex items-center w-full py-3 text-sm font-medium text-gray-400 rounded-xl hover:bg-[#1C1C29] hover:text-white transition-colors text-left",
                            isCollapsed ? "justify-center px-0" : "px-4"
                        )}
                        title={isCollapsed ? "Cerrar Sesión" : undefined}
                    >
                        <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("flex-shrink-0", !isCollapsed && "mr-3")}>
                            <path fillRule="evenodd" clipRule="evenodd" d="M13.7627 6.77369V5.91844C13.7627 4.05303 12.2502 2.54053 10.3848 2.54053H5.91606C4.05156 2.54053 2.53906 4.05303 2.53906 5.91844V16.1209C2.53906 17.9864 4.05156 19.4989 5.91606 19.4989H10.394C12.2539 19.4989 13.7627 17.9909 13.7627 16.131V15.2666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M19.9907 11.0196H8.95312" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M17.3047 8.34741L19.9887 11.0195L17.3047 13.6925" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {!isCollapsed && <span>Cerrar Sesión</span>}
                    </button>
                </div>
            </div>
        </div>
    );
}
