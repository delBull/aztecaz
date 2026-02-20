"use client";

import { useActiveAccount } from "thirdweb/react";
import { useRole } from "@/context/RoleContext";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function SettingsPage() {
    const account = useActiveAccount();
    const { userRole, organization, isLoading } = useRole();
    const [activeTab, setActiveTab] = useState("profile");

    const [isSaving, setIsSaving] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // State for Organization Form
    const [orgForm, setOrgForm] = useState({
        name: "",
        description: "",
        phone: "",
        email: "",
        website: "",
        logo: "",
        facebook: "",
        instagram: "",
        twitter: "",
        linkedin: "",
        slug: "",
    });

    // Load data
    useEffect(() => {
        if (organization) {
            setOrgForm({
                name: organization.name || "",
                description: organization.description || "",
                phone: organization.phone || "",
                email: organization.email || "",
                website: organization.website || "",
                logo: organization.logo || "",
                facebook: organization.facebook || "",
                instagram: organization.instagram || "",
                twitter: organization.twitter || "",
                linkedin: organization.linkedin || "",
                slug: organization.slug || "",
            });
        }
    }, [organization]);

    const handleOrgSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);
        try {
            const response = await fetch('/api/organization/update', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    walletAddress: account?.address,
                    organizationId: organization?.id,
                    data: orgForm
                })
            });

            if (!response.ok) throw new Error('Failed to update organization');

            alert("Organización actualizada correctamente");
            // Optionally reload window or re-fetch context
            window.location.reload();
        } catch (error) {
            console.error("Error updating organization:", error);
            alert("Error al actualizar la organización");
        } finally {
            setIsSaving(false);
        }
    };

    const handleLogoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) return;

        setIsUploading(true);
        const file = e.target.files[0];

        try {
            const response = await fetch(`/api/upload?filename=${encodeURIComponent(file.name)}`, {
                method: 'POST',
                body: file,
            });

            if (!response.ok) throw new Error('Upload failed');

            const blob = await response.json();
            setOrgForm(prev => ({ ...prev, logo: blob.url }));
        } catch (error) {
            console.error("Error uploading logo:", error);
            alert("Error al subir el logo");
        } finally {
            setIsUploading(false);
        }
    };

    if (isLoading) {
        return <div className="p-8 text-white">Cargando configuración...</div>;
    }

    if (!account) {
        return <div className="p-8 text-white">Debes iniciar sesión para ver esta página.</div>;
    }

    return (
        <div className="max-w-4xl mx-auto pb-20">
            <h1 className="text-3xl font-bold text-white mb-8">Configuración</h1>

            <div className="flex border-b border-[#2C2C39] mb-8">
                <button
                    onClick={() => setActiveTab("profile")}
                    className={`px-6 py-3 text-sm font-medium transition-colors border-b-2 ${activeTab === "profile" ? "border-[#DDF247] text-[#DDF247]" : "border-transparent text-gray-400 hover:text-white"
                        }`}
                >
                    Mi Perfil
                </button>
                {organization && (["ADMIN", "ORG_ADMIN", "BROKER"].includes(userRole || "") || true) && (
                    <button
                        onClick={() => setActiveTab("organization")}
                        className={`px-6 py-3 text-sm font-medium transition-colors border-b-2 ${activeTab === "organization" ? "border-[#DDF247] text-[#DDF247]" : "border-transparent text-gray-400 hover:text-white"
                            }`}
                    >
                        Organización
                    </button>
                )}
            </div>

            {activeTab === "profile" && (
                <div className="bg-[#14141F] rounded-2xl border border-[#2C2C39] p-8">
                    <h2 className="text-xl font-bold text-white mb-6">Información Personal</h2>
                    <div className="flex items-center gap-6 mb-8">
                        <div className="w-20 h-20 bg-[#1C1C29] rounded-full flex items-center justify-center border border-[#2C2C39]">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </div>
                        <div>
                            <p className="text-white font-mono text-sm mb-1">{account.address}</p>
                            <p className="text-gray-400 text-xs">Wallet Conectada</p>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === "organization" && organization && (
                <form onSubmit={handleOrgSave} className="space-y-6">
                    <div className="bg-[#14141F] rounded-2xl border border-[#2C2C39] p-8">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold text-white">Perfil de la Organización</h2>
                            <span className="px-3 py-1 bg-[#2C2C39] text-gray-300 text-xs rounded-full border border-[#3D3D4D]">
                                {organization.plan} Plan
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="col-span-full">
                                <label className="block text-sm font-medium text-gray-400 mb-2">Logo de la Organización</label>
                                <div className="flex items-center gap-6">
                                    <div
                                        onClick={() => fileInputRef.current?.click()}
                                        className="w-24 h-24 bg-[#1C1C29] rounded-xl flex items-center justify-center border border-dashed border-gray-600 cursor-pointer hover:border-[#DDF247] overflow-hidden relative"
                                    >
                                        {isUploading ? (
                                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#DDF247]"></div>
                                        ) : orgForm.logo ? (
                                            <Image
                                                src={orgForm.logo}
                                                alt="Logo"
                                                fill
                                                className="object-cover"
                                            />
                                        ) : (
                                            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                            </svg>
                                        )}
                                        <input
                                            type="file"
                                            ref={fileInputRef}
                                            className="hidden"
                                            accept="image/*"
                                            onChange={handleLogoUpload}
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm text-gray-300 mb-1">Sube el logo de tu organización.</p>
                                        <p className="text-xs text-gray-500">Recomendado: 500x500px, PNG o JPG.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label className="block text-sm font-medium text-gray-400 mb-2">Nombre de la Organización</label>
                                <input
                                    type="text"
                                    value={orgForm.name}
                                    onChange={(e) => setOrgForm({ ...orgForm, name: e.target.value })}
                                    className="w-full bg-[#1C1C29] border border-[#2C2C39] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#DDF247]"
                                />
                            </div>

                            <div className="col-span-full">
                                <label className="block text-sm font-medium text-gray-400 mb-2">Descripción</label>
                                <textarea
                                    value={orgForm.description}
                                    onChange={(e) => setOrgForm({ ...orgForm, description: e.target.value })}
                                    rows={4}
                                    className="w-full bg-[#1C1C29] border border-[#2C2C39] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#DDF247]"
                                    placeholder="Describe tu agencia inmobiliaria..."
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Teléfono / WhatsApp</label>
                                <input
                                    type="text"
                                    value={orgForm.phone}
                                    onChange={(e) => setOrgForm({ ...orgForm, phone: e.target.value })}
                                    className="w-full bg-[#1C1C29] border border-[#2C2C39] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#DDF247]"
                                    placeholder="+52 123 456 7890"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Email de Contacto</label>
                                <input
                                    type="email"
                                    value={orgForm.email}
                                    onChange={(e) => setOrgForm({ ...orgForm, email: e.target.value })}
                                    className="w-full bg-[#1C1C29] border border-[#2C2C39] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#DDF247]"
                                    placeholder="contacto@inmobiliaria.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Sitio Web</label>
                                <input
                                    type="url"
                                    value={orgForm.website}
                                    onChange={(e) => setOrgForm({ ...orgForm, website: e.target.value })}
                                    className="w-full bg-[#1C1C29] border border-[#2C2C39] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#DDF247]"
                                    placeholder="https://..."
                                />
                            </div>

                            {/* Removed redundant Logo URL input as we have upload now */}

                        </div>
                    </div>

                    <div className="bg-[#14141F] rounded-2xl border border-[#2C2C39] p-8">
                        <h2 className="text-xl font-bold text-white mb-6">Redes Sociales</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Facebook</label>
                                <input
                                    type="url"
                                    value={orgForm.facebook}
                                    onChange={(e) => setOrgForm({ ...orgForm, facebook: e.target.value })}
                                    className="w-full bg-[#1C1C29] border border-[#2C2C39] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#DDF247]"
                                    placeholder="https://facebook.com/..."
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Instagram</label>
                                <input
                                    type="url"
                                    value={orgForm.instagram}
                                    onChange={(e) => setOrgForm({ ...orgForm, instagram: e.target.value })}
                                    className="w-full bg-[#1C1C29] border border-[#2C2C39] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#DDF247]"
                                    placeholder="https://instagram.com/..."
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Twitter / X</label>
                                <input
                                    type="url"
                                    value={orgForm.twitter}
                                    onChange={(e) => setOrgForm({ ...orgForm, twitter: e.target.value })}
                                    className="w-full bg-[#1C1C29] border border-[#2C2C39] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#DDF247]"
                                    placeholder="https://twitter.com/..."
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">LinkedIn</label>
                                <input
                                    type="url"
                                    value={orgForm.linkedin}
                                    onChange={(e) => setOrgForm({ ...orgForm, linkedin: e.target.value })}
                                    className="w-full bg-[#1C1C29] border border-[#2C2C39] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#DDF247]"
                                    placeholder="https://linkedin.com/..."
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            disabled={isSaving}
                            className="bg-[#DDF247] text-black font-bold py-3 px-8 rounded-xl hover:bg-[#cce336] transition-colors shadow-lg shadow-[#DDF247]/20 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSaving ? "Guardando..." : "Guardar Cambios"}
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
}
