"use client";

import { ConnectButton } from "thirdweb/react";
import { createThirdwebClient } from "thirdweb";

// Make sure to replace this with your actual client ID or use the Environment Variable
const client = createThirdwebClient({
    clientId: process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID || "",
});

export default function Header() {
    return (
        <header className="flex items-center justify-between h-20 px-8 bg-[#14141F] border-b border-[#2C2C39]">
            <div className="flex-1 max-w-xl">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="¿Buscas algo en particular?..."
                        className="w-full px-4 py-2.5 bg-[#1C1C29] border border-[#2C2C39] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#DDF247] transition-colors"
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </button>
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
                    connectButton={{ label: "Conectar Wallet" }}
                    connectModal={{
                        size: "wide",
                        title: "Inicia Sesión",
                    }}
                />
            </div>
        </header>
    );
}
