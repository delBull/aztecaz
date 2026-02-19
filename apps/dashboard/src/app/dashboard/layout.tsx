"use client";

import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen bg-[#0E0E17]">
            <Sidebar />
            <div className="flex flex-col flex-1 pl-20 md:pl-64 transition-all duration-300">
                <Header />
                <main className="flex-1 overflow-y-auto p-8 bg-[#0E0E17]">
                    {children}
                </main>
            </div>
        </div>
    );
}
