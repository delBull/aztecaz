"use client";

import { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div className="flex h-screen bg-[#0E0E17]">
            <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
            <div
                className={`flex flex-col flex-1 transition-all duration-300 ${isCollapsed ? "pl-20" : "pl-64"
                    }`}
            >
                <Header />
                <main className="flex-1 overflow-y-auto p-8 bg-[#0E0E17]">
                    {children}
                </main>
            </div>
        </div>
    );
}
