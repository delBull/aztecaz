"use client";

import { useFormState } from "react-dom";
import { createProperty } from "@/actions/create-property";
import { SubmitButton } from "@/components/SubmitButton";
import { useRole } from "@/context/RoleContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Upload from "@/components/Upload";

const initialState = {
    message: "",
    errors: {},
};

// Hardcoded for demo/seed
const ORG_ID = "cmlqzj3wy0000zfvlxlmlcy28";

export default function CreatePropertyPage() {
    // @ts-ignore
    const [state, dispatch] = useFormState(createProperty, initialState);
    const { isSuperAdmin, hasRole, isLoading } = useRole();
    const router = useRouter();

    // Form State
    const [imageUrl, setImageUrl] = useState("");
    const [videoUrl, setVideoUrl] = useState("");
    const [category, setCategory] = useState("");
    const [features, setFeatures] = useState<Record<string, any>>({});

    useEffect(() => {
        if (!isLoading && !isSuperAdmin && !hasRole(["AGENT", "BROKER"])) {
            router.push("/dashboard");
        }
    }, [isLoading, isSuperAdmin, hasRole, router]);

    const handleFeatureChange = (key: string, value: any) => {
        setFeatures(prev => ({ ...prev, [key]: value }));
    };

    if (isLoading) {
        return <div className="text-white flex justify-center items-center h-64">Loading...</div>;
    }

    if (!isSuperAdmin && !hasRole(["AGENT", "BROKER"])) {
        return null;
    }

    return (
        <div className="max-w-3xl mx-auto text-white">
            <h1 className="text-3xl font-bold mb-8">Crear Nueva Propiedad</h1>

            <form action={dispatch} className="space-y-8 bg-[#14141F] p-8 rounded-2xl border border-[#2C2C39]">
                {/* Hidden Inputs for Non-Standard Fields */}
                <input type="hidden" name="organizationId" value={ORG_ID} />
                <input type="hidden" name="imageUrl" value={imageUrl} />
                <input type="hidden" name="videoUrl" value={videoUrl} />
                <input type="hidden" name="features" value={JSON.stringify(features)} />

                {/* --- Basic Info --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="col-span-full">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-400 mb-2">Título</label>
                        <input type="text" id="title" name="title" required className="w-full px-4 py-3 bg-[#1C1C29] border border-[#2C2C39] rounded-xl focus:border-[#DDF247] focus:outline-none transition-colors" placeholder="Ej. Departamento de Lujo en Polanco" />
                        {state.errors?.title && <p className="mt-2 text-sm text-red-500">{state.errors.title}</p>}
                    </div>

                    <div>
                        <label htmlFor="price" className="block text-sm font-medium text-gray-400 mb-2">Precio (USD)</label>
                        <input type="number" id="price" name="price" required min="0" step="0.01" className="w-full px-4 py-3 bg-[#1C1C29] border border-[#2C2C39] rounded-xl focus:border-[#DDF247] focus:outline-none transition-colors" placeholder="0.00" />
                    </div>

                    <div>
                        <label htmlFor="currency" className="block text-sm font-medium text-gray-400 mb-2">Moneda</label>
                        <select name="currency" className="w-full px-4 py-3 bg-[#1C1C29] border border-[#2C2C39] rounded-xl focus:border-[#DDF247] focus:outline-none transition-colors text-white">
                            <option value="USD">USD</option>
                            <option value="MXN">MXN</option>
                        </select>
                    </div>
                </div>

                {/* --- Media Uploads --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Upload
                        label="Imagen Principal"
                        accept="image/*"
                        type="image"
                        onUploadComplete={setImageUrl}
                        currentValue={imageUrl}
                    />
                    <Upload
                        label="Video Promocional (Opcional)"
                        accept="video/*"
                        type="video"
                        onUploadComplete={setVideoUrl}
                        currentValue={videoUrl}
                    />
                </div>

                {/* --- Categorization --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-400 mb-2">Categoría</label>
                        <select
                            id="category"
                            name="category"
                            value={category}
                            onChange={(e) => {
                                setCategory(e.target.value);
                                setFeatures({}); // Reset features on category change
                            }}
                            className="w-full px-4 py-3 bg-[#1C1C29] border border-[#2C2C39] rounded-xl focus:border-[#DDF247] focus:outline-none transition-colors text-white"
                        >
                            <option value="">Seleccionar...</option>
                            <option value="RESIDENCIAL">Residencial</option>
                            <option value="COMERCIAL">Comercial</option>
                            <option value="INDUSTRIAL">Industrial</option>
                            <option value="TERRENO">Terreno</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="tags" className="block text-sm font-medium text-gray-400 mb-2">Tags (separados por coma)</label>
                        <input type="text" id="tags" name="tags" className="w-full px-4 py-3 bg-[#1C1C29] border border-[#2C2C39] rounded-xl focus:border-[#DDF247] focus:outline-none transition-colors" placeholder="Ej. Lujo, Playa, Oportunidad" />
                    </div>
                </div>

                {/* --- Dynamic Fields based on Category --- */}
                {category === "RESIDENCIAL" && (
                    <div className="p-4 bg-[#1C1C29] rounded-xl border border-[#2C2C39] space-y-4 animate-in fade-in">
                        <h3 className="tex-lg font-semibold text-[#DDF247]">Detalles Residenciales</h3>
                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <label className="text-xs text-gray-400">Recámaras</label>
                                <input type="number" onChange={(e) => handleFeatureChange("bedrooms", e.target.value)} className="w-full mt-1 px-3 py-2 bg-[#14141F] rounded border border-[#2C2C39] focus:border-[#DDF247] outline-none" />
                            </div>
                            <div>
                                <label className="text-xs text-gray-400">Baños</label>
                                <input type="number" onChange={(e) => handleFeatureChange("bathrooms", e.target.value)} className="w-full mt-1 px-3 py-2 bg-[#14141F] rounded border border-[#2C2C39] focus:border-[#DDF247] outline-none" />
                            </div>
                            <div>
                                <label className="text-xs text-gray-400">Estacionamientos</label>
                                <input type="number" onChange={(e) => handleFeatureChange("parking", e.target.value)} className="w-full mt-1 px-3 py-2 bg-[#14141F] rounded border border-[#2C2C39] focus:border-[#DDF247] outline-none" />
                            </div>
                        </div>
                    </div>
                )}

                {/* --- Location --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="location" className="block text-sm font-medium text-gray-400 mb-2">Ubicación (Texto)</label>
                        <input type="text" id="location" name="location" className="w-full px-4 py-3 bg-[#1C1C29] border border-[#2C2C39] rounded-xl focus:border-[#DDF247] focus:outline-none transition-colors" placeholder="Ej. Polanco, CDMX" />
                    </div>

                    <div>
                        <label htmlFor="locationUrl" className="block text-sm font-medium text-gray-400 mb-2">Google Maps URL 📍</label>
                        <input type="url" id="locationUrl" name="locationUrl" className="w-full px-4 py-3 bg-[#1C1C29] border border-[#2C2C39] rounded-xl focus:border-[#DDF247] focus:outline-none transition-colors" placeholder="https://maps.google.com/..." />
                    </div>
                </div>

                {category === "INDUSTRIAL" && (
                    <div className="p-4 bg-[#1C1C29] rounded-xl border border-[#2C2C39] space-y-4 animate-in fade-in">
                        <h3 className="tex-lg font-semibold text-[#DDF247]">Detalles Industriales</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-xs text-gray-400">Altura Techumbre (m)</label>
                                <input type="number" onChange={(e) => handleFeatureChange("ceilingHeight", e.target.value)} className="w-full mt-1 px-3 py-2 bg-[#14141F] rounded border border-[#2C2C39] focus:border-[#DDF247] outline-none" />
                            </div>
                            <div>
                                <label className="text-xs text-gray-400">Andenes de Carga</label>
                                <input type="number" onChange={(e) => handleFeatureChange("loadingDocks", e.target.value)} className="w-full mt-1 px-3 py-2 bg-[#14141F] rounded border border-[#2C2C39] focus:border-[#DDF247] outline-none" />
                            </div>
                            <div className="col-span-2">
                                <label className="text-xs text-gray-400">Capacidad Eléctrica (KVA)</label>
                                <input type="text" onChange={(e) => handleFeatureChange("powerCapacity", e.target.value)} className="w-full mt-1 px-3 py-2 bg-[#14141F] rounded border border-[#2C2C39] focus:border-[#DDF247] outline-none" />
                            </div>
                        </div>
                    </div>
                )}

                {category === "TERRENO" && (
                    <div className="p-4 bg-[#1C1C29] rounded-xl border border-[#2C2C39] space-y-4 animate-in fade-in">
                        <h3 className="tex-lg font-semibold text-[#DDF247]">Detalles del Terreno</h3>
                        <div className="grid grid-cols-1 gap-4">
                            <div>
                                <label className="text-xs text-gray-400">Uso de Suelo</label>
                                <select onChange={(e) => handleFeatureChange("landUse", e.target.value)} className="w-full mt-1 px-3 py-2 bg-[#14141F] rounded border border-[#2C2C39] text-white outline-none">
                                    <option value="">Seleccionar...</option>
                                    <option value="Habitacional">Habitacional</option>
                                    <option value="Comercial">Comercial</option>
                                    <option value="Mixto">Mixto</option>
                                    <option value="Industrial">Industrial</option>
                                </select>
                            </div>
                            <div>
                                <label className="text-xs text-gray-400">Topografía</label>
                                <input type="text" placeholder="Ej. Plano, Irregular, Pendiente ascendente" onChange={(e) => handleFeatureChange("topography", e.target.value)} className="w-full mt-1 px-3 py-2 bg-[#14141F] rounded border border-[#2C2C39] focus:border-[#DDF247] outline-none" />
                            </div>
                        </div>
                    </div>
                )}

                {/* --- Status & Visibility --- */}
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="status" className="block text-sm font-medium text-gray-400 mb-2">Estatus</label>
                        <select id="status" name="status" className="w-full px-4 py-3 bg-[#1C1C29] border border-[#2C2C39] rounded-xl focus:border-[#DDF247] focus:outline-none transition-colors text-white">
                            <option value="DRAFT">Borrador</option>
                            <option value="PUBLISHED">Publicado</option>
                            <option value="COMING_SOON">Próximo Lanzamiento</option>
                            <option value="ARCHIVED">Archivado</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="visibility" className="block text-sm font-medium text-gray-400 mb-2">Visibilidad</label>
                        <select id="visibility" name="visibility" className="w-full px-4 py-3 bg-[#1C1C29] border border-[#2C2C39] rounded-xl focus:border-[#DDF247] focus:outline-none transition-colors text-white">
                            <option value="PUBLIC">Público</option>
                            <option value="PRIVATE">Privado</option>
                            <option value="UNLISTED">No Listado</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-400 mb-2">Descripción</label>
                    <textarea id="description" name="description" rows={4} className="w-full px-4 py-3 bg-[#1C1C29] border border-[#2C2C39] rounded-xl focus:border-[#DDF247] focus:outline-none transition-colors" placeholder="Describe la propiedad..." />
                </div>

                <div className="pt-4">
                    <SubmitButton />
                </div>

                <p aria-live="polite" className="sr-only">
                    {state?.message}
                </p>
            </form>
        </div>
    );
}
