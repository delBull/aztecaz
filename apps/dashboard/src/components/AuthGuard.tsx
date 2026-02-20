"use client";

import { useActiveAccount, useIsAutoConnecting } from "thirdweb/react";
import NextImage from "next/image";
import { useEffect, useState } from "react";
import { ConnectEmbed, useAutoConnect } from "thirdweb/react";
import { createThirdwebClient } from "thirdweb";
import { darkTheme } from "thirdweb/react";
import { usePathname } from "next/navigation";

const client = createThirdwebClient({
    clientId: process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID || "",
});

export default function AuthGuard({ children }: { children: React.ReactNode }) {
    const account = useActiveAccount();
    const isAutoConnecting = useIsAutoConnecting();
    const pathname = usePathname();

    const isPublicRoute = pathname?.startsWith('/dashboard/market') ||
        pathname?.startsWith('/dashboard/launches') ||
        pathname?.startsWith('/dashboard/properties') ||
        pathname?.startsWith('/p/');

    // 1. Priority: If it's a public route, render immediately (don't wait for wallet)
    if (isPublicRoute) {
        return <>{children}</>;
    }

    // 2. If auto-connecting, show a loading state
    if (isAutoConnecting) {
        return (
            <div className="flex h-screen w-full items-center justify-center bg-[#14141F]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#DDF247]"></div>
            </div>
        );
    }

    // 3. If connected, render the protected content
    if (account) {
        return <>{children}</>;
    }

    // If not connected, render the Login Screen
    return (
        <div className="flex h-screen w-full flex-col items-center justify-center bg-[#000000] bg-[url('/assets/images/bg-login.png')] bg-cover bg-center">
            <div className="z-10 flex flex-col items-center justify-center p-8 bg-[#111111]/95 backdrop-blur-xl rounded-2xl border border-[#222222] shadow-2xl">
                <div className="mb-8 flex flex-col items-center">
                    <NextImage src="/assets/images/logo/only_h_o.png" alt="Aztecaz" width={64} height={64} className="h-16 w-auto mb-4 object-contain" />
                    <h1 className="text-2xl font-bold text-white mb-2">Bienvenido al Dashboard</h1>
                    <p className="text-gray-400 text-center max-w-xs">
                        Conecta tu wallet para acceder a tus propiedades y organización.
                    </p>
                </div>

                <ConnectEmbed
                    client={client}
                    showThirdwebBranding={false}
                    theme={darkTheme({
                        colors: {
                            primaryButtonBg: "#DDF247",
                            primaryButtonText: "#000000",
                        }
                    })}
                    modalSize="compact"
                />
            </div>
        </div>
    );
}
