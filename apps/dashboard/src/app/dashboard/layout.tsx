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
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="flex h-screen bg-[#0E0E17] overflow-hidden">
            <Sidebar 
                isCollapsed={isCollapsed} 
                setIsCollapsed={setIsCollapsed} 
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
            />
            <div
                className={`flex flex-col flex-1 transition-all duration-300 w-full min-w-0 pl-0 ${isCollapsed ? "md:pl-20" : "md:pl-64"}`}
            >
                <Header 
                    isMobileMenuOpen={isMobileMenuOpen}
                    setIsMobileMenuOpen={setIsMobileMenuOpen}
                />
                <main className="flex-1 overflow-y-auto overflow-x-hidden p-4 md:p-8 bg-[#0E0E17]">
                    {children}
                </main>
            </div>
        </div>
    );
}
