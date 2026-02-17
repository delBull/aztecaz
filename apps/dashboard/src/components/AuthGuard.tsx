"use client";

import { useActiveAccount, useIsAutoConnecting } from "thirdweb/react";
import NextImage from "next/image";
import { useEffect, useState } from "react";
import { ConnectEmbed, useAutoConnect } from "thirdweb/react";
import { createThirdwebClient } from "thirdweb";
import { darkTheme } from "thirdweb/react";

const client = createThirdwebClient({
    clientId: process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID || "",
});

export default function AuthGuard({ children }: { children: React.ReactNode }) {
    const account = useActiveAccount();
    const isAutoConnecting = useIsAutoConnecting();

    // If auto-connecting, show a loading state to prevent flash of login content
    if (isAutoConnecting) {
        return (
            <div className="flex h-screen w-full items-center justify-center bg-[#14141F]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#DDF247]"></div>
            </div>
        );
    }

    // If connected, render the protected content
    if (account) {
        return <>{children}</>;
    }

    // If not connected, render the Login Screen
    return (
        <div className="flex h-screen w-full flex-col items-center justify-center bg-[#14141F] bg-[url('/assets/images/bg-login.png')] bg-cover bg-center">
            <div className="z-10 flex flex-col items-center justify-center p-8 bg-[#1C1C29]/90 backdrop-blur-md rounded-2xl border border-[#2C2C39] shadow-2xl">
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
                    modalSize="wide"
                />
            </div>
        </div>
    );
}
