"use client";

import { useState } from "react";
import { InviteMemberForm } from "./InviteMemberForm";
import { useActiveAccount } from "thirdweb/react";
import { useRole } from "@/context/RoleContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface OrganizationTabsProps {
    organization: any;
    properties: any[];
}

export function OrganizationTabs({ organization, properties }: OrganizationTabsProps) {
    const [activeTab, setActiveTab] = useState("members");
    const account = useActiveAccount();
    const { isSuperAdmin, userRole, hasRole } = useRole();
    const router = useRouter();

    // RBAC: Agents see only their own properties. Admins see all.
    const filteredProperties = properties.filter(prop => {
        if (isSuperAdmin || userRole === 'ORG_ADMIN' || userRole === 'BROKER') return true;
        return prop.userId === organization.members.find((m: any) => m.user.walletAddress === account?.address)?.user?.id;
    });

    const handleDelete = async (id: string) => {
        if (window.confirm("¡Alerta! ¿Estás seguro de que deseas eliminar esta propiedad? Esta acción es permanente.")) {
            try {
                const res = await fetch("/api/properties/delete", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ id, walletAddress: account?.address })
                });

                if (res.ok) {
                    router.refresh();
                } else {
                    alert("Error al eliminar la propiedad");
                }
            } catch (err) {
                console.error(err);
                alert("Error de conexión");
            }
        }
    };

    return (
        <div className="space-y-6">
            {/* Tab Swipper */}
            <div className="flex space-x-4 border-b border-[#2C2C39]">
                <button
                    onClick={() => setActiveTab("members")}
                    className={`px-4 py-2 font-medium transition-colors border-b-2 ${activeTab === "members" ? "text-[#DDF247] border-[#DDF247]" : "text-gray-400 border-transparent hover:text-white"
                        }`}
                >
                    Miembros del Equipo
                </button>
                <button
                    onClick={() => setActiveTab("properties")}
                    className={`px-4 py-2 font-medium transition-colors border-b-2 ${activeTab === "properties" ? "text-[#DDF247] border-[#DDF247]" : "text-gray-400 border-transparent hover:text-white"
                        }`}
                >
                    Mis Propiedades
                </button>
            </div>

            {activeTab === "members" && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-[#14141F] border border-[#2C2C39] rounded-2xl overflow-hidden">
                            <div className="p-6 border-b border-[#2C2C39]">
                                <h2 className="text-xl font-semibold text-white">Equipo de Trabajo</h2>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead className="bg-[#1C1C29] text-gray-400 text-sm uppercase">
                                        <tr>
                                            <th className="px-6 py-4 font-medium">Usuario</th>
                                            <th className="px-6 py-4 font-medium">Wallet</th>
                                            <th className="px-6 py-4 font-medium">Rol</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-[#2C2C39]">
                                        {organization.members.map((member: any) => (
                                            <tr key={member.id} className="hover:bg-[#1C1C29]/50 transition-colors">
                                                <td className="px-6 py-4">
                                                    <div className="font-medium text-white">{member.user.name || "Sin Nombre"}</div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm text-gray-500 font-mono">
                                                        {member.user.walletAddress?.slice(0, 6)}...{member.user.walletAddress?.slice(-4)}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${member.role === 'ADMIN' || member.role === 'ORG_ADMIN' ? "bg-purple-900/30 border-purple-500/30 text-purple-400" :
                                                            member.role === 'BROKER' ? "bg-blue-900/30 border-blue-500/30 text-blue-400" :
                                                                "bg-green-900/30 border-green-500/30 text-green-400"
                                                        }`}>
                                                        {member.role}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="bg-[#14141F] border border-[#2C2C39] rounded-2xl p-6 sticky top-8">
                            <h2 className="text-xl font-semibold text-white mb-1">Invitar Miembro</h2>
                            <p className="text-sm text-gray-400 mb-6">Agrega agentes a tu equipo.</p>
                            <InviteMemberForm organizationId={organization.id} />
                        </div>
                    </div>
                </div>
            )}

            {activeTab === "properties" && (
                <div className="bg-[#14141F] border border-[#2C2C39] rounded-2xl overflow-hidden">
                    <div className="p-6 border-b border-[#2C2C39] flex justify-between items-center">
                        <h2 className="text-xl font-semibold text-white">Inventario de la Organización</h2>
                        <Link href="/dashboard/create" className="bg-[#DDF247] text-black px-4 py-2 rounded-lg font-bold text-sm hover:scale-105 transition-transform">
                            + Nueva Propiedad
                        </Link>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-[#1C1C29] text-gray-400 text-sm uppercase">
                                <tr>
                                    <th className="px-6 py-4 font-medium">Propiedad</th>
                                    <th className="px-6 py-4 font-medium">Precio</th>
                                    <th className="px-6 py-4 font-medium">Estatus</th>
                                    <th className="px-6 py-4 font-medium text-right">Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#2C2C39]">
                                {filteredProperties.map((prop: any) => (
                                    <tr key={prop.id} className="hover:bg-[#1C1C29]/50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="font-medium text-white">{prop.title}</div>
                                            <div className="text-xs text-gray-500">{prop.location || "Sin ubicación"}</div>
                                        </td>
                                        <td className="px-6 py-4 text-white font-mono">
                                            {prop.price} {prop.currency}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase border ${prop.status === 'PUBLISHED' ? "bg-green-900/20 border-green-500/30 text-green-400" : "bg-gray-800 border-gray-700 text-gray-400"
                                                }`}>
                                                {prop.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right space-x-3">
                                            <Link href={`/dashboard/edit/${prop.id}`} className="text-gray-400 hover:text-[#DDF247] transition-colors text-sm">
                                                Editar
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(prop.id)}
                                                className="text-gray-400 hover:text-red-500 transition-colors text-sm"
                                            >
                                                Eliminar
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                {filteredProperties.length === 0 && (
                                    <tr>
                                        <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                                            No se encontraron propiedades.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}
