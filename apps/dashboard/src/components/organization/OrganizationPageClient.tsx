"use client";

import { useRole } from "@/context/RoleContext";
import { InviteMemberForm } from "@/components/organization/InviteMemberForm";
import { OrganizationTabs } from "@/components/organization/OrganizationTabs";
import { useState, useEffect } from "react";

export default function OrganizationPageClient() {
    const { organization, isLoading: isRoleLoading } = useRole();
    const [fullOrgData, setFullOrgData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!isRoleLoading && organization?.id) {
            // Fetch full org data with members and properties
            const fetchOrgDetails = async () => {
                try {
                    const res = await fetch(`/api/organization/${organization.id}`);
                    if (res.ok) {
                        const data = await res.json();
                        setFullOrgData(data);
                    }
                } catch (err) {
                    console.error("Error fetching org details:", err);
                } finally {
                    setLoading(false);
                }
            };
            fetchOrgDetails();
        } else if (!isRoleLoading && !organization) {
            setLoading(false);
        }
    }, [organization?.id, isRoleLoading]);

    if (isRoleLoading || loading) {
        return (
            <div className="flex h-64 w-full items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#DDF247]"></div>
            </div>
        );
    }

    if (!organization || !fullOrgData) {
        return (
            <div className="flex flex-col items-center justify-center h-[50vh] text-white">
                <h2 className="text-xl font-bold mb-2">Organización no encontrada</h2>
                <p className="text-gray-400">No pareces estar vinculado a ninguna organización activa.</p>
            </div>
        );
    }

    return (
        <div className="p-8 max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">{fullOrgData.name}</h1>
                    <p className="text-gray-400">Gestiona los miembros y las propiedades exclusivas de tu organización.</p>
                </div>
                <div className="bg-[#1C1C29] px-4 py-2 rounded-lg border border-[#2C2C39]">
                    <span className="text-sm text-gray-400">Plan: </span>
                    <span className="text-[#DDF247] font-bold">{fullOrgData.plan || "PRO"}</span>
                </div>
            </div>

            <OrganizationTabs
                organization={fullOrgData}
                properties={fullOrgData.properties || []}
            />
        </div>
    );
}
