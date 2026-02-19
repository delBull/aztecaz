"use client";

import { useFormState } from "react-dom";
import { useActiveAccount } from "thirdweb/react";
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

export default function CreatePropertyPage() {
    const account = useActiveAccount();
    // @ts-ignore
    const [state, dispatch] = useFormState(createProperty, initialState);
    const { isSuperAdmin, hasRole, isLoading, organization } = useRole();
    const router = useRouter();

    // Form State
    const [imageUrl, setImageUrl] = useState("");
    const [videoUrl, setVideoUrl] = useState("");
    const [pdfUrl, setPdfUrl] = useState("");
    const [category, setCategory] = useState("");

    useEffect(() => {
        if (!isLoading && !isSuperAdmin && !hasRole(["AGENT", "BROKER"])) {
            router.push("/dashboard");
        }
    }, [isLoading, isSuperAdmin, hasRole, router]);

    if (isLoading || !organization) {
        return <div className="text-white flex justify-center items-center h-64">Cargando organización...</div>;
    }

    if (!isSuperAdmin && !hasRole(["AGENT", "BROKER"])) {
        return null;
    }

    const documentsJson = pdfUrl ? JSON.stringify([{ name: "Layout/Plano", url: pdfUrl }]) : "[]";

    return (
        <div className="max-w-4xl mx-auto text-white pb-20">
            <h1 className="text-3xl font-bold mb-8">Crear Nueva Propiedad</h1>

            <form action={dispatch} className="space-y-8 bg-[#14141F] p-8 rounded-2xl border border-[#2C2C39]">
                {/* Hidden Inputs for Non-Standard Fields */}
                <input type="hidden" name="organizationId" value={organization.id} />
                <input type="hidden" name="creatorWalletAddress" value={account?.address || ""} />
                <input type="hidden" name="imageUrl" value={imageUrl} />
                <input type="hidden" name="videoUrl" value={videoUrl} />
                <input type="hidden" name="documents" value={documentsJson} />

                {/* --- SECCIÓN 1: INFORMACIÓN BÁSICA --- */}
                <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-[#DDF247] border-b border-[#2C2C39] pb-2">Información Básica</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="col-span-full">
                            <label htmlFor="title" className="block text-sm font-medium text-gray-400 mb-2">Título de la Propiedad</label>
                            <input type="text" id="title" name="title" required className="w-full px-4 py-3 bg-[#1C1C29] border border-[#2C2C39] rounded-xl focus:border-[#DDF247] focus:outline-none transition-colors" placeholder="Ej. Villa Paraíso - Preventa Exclusiva" />
                            {state.errors?.title && <p className="mt-2 text-sm text-red-500">{state.errors.title}</p>}
                        </div>

                        <div>
                            <label htmlFor="price" className="block text-sm font-medium text-gray-400 mb-2">Precio</label>
                            <input type="number" id="price" name="price" required min="0" step="0.01" className="w-full px-4 py-3 bg-[#1C1C29] border border-[#2C2C39] rounded-xl focus:border-[#DDF247] focus:outline-none transition-colors" placeholder="0.00" />
                        </div>

                        <div>
                            <label htmlFor="currency" className="block text-sm font-medium text-gray-400 mb-2">Moneda</label>
                            <select name="currency" className="w-full px-4 py-3 bg-[#1C1C29] border border-[#2C2C39] rounded-xl focus:border-[#DDF247] focus:outline-none transition-colors text-white">
                                <option value="USD">USD - Dólares</option>
                                <option value="MXN">MXN - Pesos Mexicanos</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="category" className="block text-sm font-medium text-gray-400 mb-2">Tipo de Propiedad</label>
                            <select
                                id="category"
                                name="category"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                required
                                className="w-full px-4 py-3 bg-[#1C1C29] border border-[#2C2C39] rounded-xl focus:border-[#DDF247] focus:outline-none transition-colors text-white"
                            >
                                <option value="">Seleccionar...</option>
                                <option value="RESIDENCIAL">Residencial</option>
                                <option value="COMERCIAL">Comercial</option>
                                <option value="INDUSTRIAL">Industrial</option>
                                <option value="TERRENO">Terreno / Lote</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="tags" className="block text-sm font-medium text-gray-400 mb-2">Tags / Etiquetas</label>
                            <input type="text" id="tags" name="tags" className="w-full px-4 py-3 bg-[#1C1C29] border border-[#2C2C39] rounded-xl focus:border-[#DDF247] focus:outline-none transition-colors" placeholder="Lujo, Preventa, Alberca..." />
                        </div>
                    </div>
                </div>

                {/* --- SECCIÓN 2: MULTIMEDIA Y DOCUMENTOS --- */}
                <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-[#DDF247] border-b border-[#2C2C39] pb-2">Multimedia y Planos</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Upload
                            label="Foto Principal"
                            accept="image/*"
                            onUploadComplete={setImageUrl}
                            currentValue={imageUrl}
                        />
                        <Upload
                            label="Video Tour"
                            accept="video/*"
                            type="video"
                            onUploadComplete={setVideoUrl}
                            currentValue={videoUrl}
                        />
                        <Upload
                            label="Plano / Layout (PDF)"
                            accept=".pdf"
                            type="document"
                            onUploadComplete={setPdfUrl}
                            currentValue={pdfUrl}
                        />
                    </div>
                </div>

                {/* --- SECCIÓN 3: ESPECIFICACIONES TÉCNICAS (DINÁMICO) --- */}
                <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-[#DDF247] border-b border-[#2C2C39] pb-2">Especificaciones Técnicas</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Fields common to most or specific categories */}
                        {(category === "RESIDENCIAL" || category === "COMERCIAL" || category === "INDUSTRIAL") && (
                            <>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Área Construida (m²)</label>
                                    <input type="number" name="areaSqFt" className="w-full px-4 py-2 bg-[#1C1C29] border border-[#2C2C39] rounded-xl outline-none focus:border-[#DDF247]" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Estacionamientos</label>
                                    <input type="number" name="parkingSpaces" className="w-full px-4 py-2 bg-[#1C1C29] border border-[#2C2C39] rounded-xl outline-none focus:border-[#DDF247]" />
                                </div>
                            </>
                        )}

                        {category === "RESIDENCIAL" && (
                            <>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Recámaras</label>
                                    <input type="number" name="bedrooms" className="w-full px-4 py-2 bg-[#1C1C29] border border-[#2C2C39] rounded-xl outline-none focus:border-[#DDF247]" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Baños</label>
                                    <input type="number" name="bathrooms" step="0.5" className="w-full px-4 py-2 bg-[#1C1C29] border border-[#2C2C39] rounded-xl outline-none focus:border-[#DDF247]" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Año de Construcción</label>
                                    <input type="number" name="yearBuilt" className="w-full px-4 py-2 bg-[#1C1C29] border border-[#2C2C39] rounded-xl outline-none focus:border-[#DDF247]" />
                                </div>
                            </>
                        )}

                        {(category === "INDUSTRIAL" || category === "COMERCIAL") && (
                            <>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Altura de Techo (m)</label>
                                    <input type="number" name="ceilingHeight" step="0.1" className="w-full px-4 py-2 bg-[#1C1C29] border border-[#2C2C39] rounded-xl outline-none focus:border-[#DDF247]" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Capacidad Eléctrica</label>
                                    <input type="text" name="electricalCapacity" placeholder="Ej. 50 KVA" className="w-full px-4 py-2 bg-[#1C1C29] border border-[#2C2C39] rounded-xl outline-none focus:border-[#DDF247]" />
                                </div>
                            </>
                        )}

                        {category === "INDUSTRIAL" && (
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Carga de Piso (Ton/m²)</label>
                                <input type="number" name="floorLoad" step="0.1" className="w-full px-4 py-2 bg-[#1C1C29] border border-[#2C2C39] rounded-xl outline-none focus:border-[#DDF247]" />
                            </div>
                        )}

                        {(category === "TERRENO" || category === "RESIDENCIAL" || category === "INDUSTRIAL") && (
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Superficie Terreno (m²)</label>
                                <input type="number" name="lotSize" className="w-full px-4 py-2 bg-[#1C1C29] border border-[#2C2C39] rounded-xl outline-none focus:border-[#DDF247]" />
                            </div>
                        )}

                        {category === "TERRENO" && (
                            <>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Frente (m)</label>
                                    <input type="number" name="frontage" className="w-full px-4 py-2 bg-[#1C1C29] border border-[#2C2C39] rounded-xl outline-none focus:border-[#DDF247]" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Fondo (m)</label>
                                    <input type="number" name="depth" className="w-full px-4 py-2 bg-[#1C1C29] border border-[#2C2C39] rounded-xl outline-none focus:border-[#DDF247]" />
                                </div>
                            </>
                        )}

                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Uso de Suelo / Zonificación</label>
                            <input type="text" name="zoning" placeholder="Ej. H5/20, Industrial Ligera" className="w-full px-4 py-2 bg-[#1C1C29] border border-[#2C2C39] rounded-xl outline-none focus:border-[#DDF247]" />
                        </div>
                    </div>
                </div>

                {/* --- SECCIÓN 4: UBICACIÓN Y ESTATUS --- */}
                <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-[#DDF247] border-b border-[#2C2C39] pb-2">Ubicación y Estatus</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="location" className="block text-sm font-medium text-gray-400 mb-2">Dirección / Zona</label>
                            <input type="text" id="location" name="location" className="w-full px-4 py-3 bg-[#1C1C29] border border-[#2C2C39] rounded-xl focus:border-[#DDF247] focus:outline-none transition-colors" placeholder="Ej. Polanco, CDMX" />
                        </div>

                        <div>
                            <label htmlFor="locationUrl" className="block text-sm font-medium text-gray-400 mb-2">Google Maps URL 📍</label>
                            <input type="url" id="locationUrl" name="locationUrl" className="w-full px-4 py-3 bg-[#1C1C29] border border-[#2C2C39] rounded-xl focus:border-[#DDF247] focus:outline-none transition-colors" placeholder="https://maps.google.com/..." />
                        </div>

                        <div>
                            <label htmlFor="status" className="block text-sm font-medium text-gray-400 mb-2">Estatus de Publicación</label>
                            <select id="status" name="status" className="w-full px-4 py-3 bg-[#1C1C29] border border-[#2C2C39] rounded-xl focus:border-[#DDF247] focus:outline-none transition-colors text-white">
                                <option value="DRAFT">Borrador</option>
                                <option value="PUBLISHED">Publicado</option>
                                <option value="COMING_SOON">Próximo Lanzamiento (Preventa)</option>
                                <option value="ARCHIVED">Archivado</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="visibility" className="block text-sm font-medium text-gray-400 mb-2">Visibilidad</label>
                            <select id="visibility" name="visibility" className="w-full px-4 py-3 bg-[#1C1C29] border border-[#2C2C39] rounded-xl focus:border-[#DDF247] focus:outline-none transition-colors text-white">
                                <option value="PUBLIC">Público (En Market)</option>
                                <option value="PRIVATE">Privado (Solo enlaces directos)</option>
                                <option value="UNLISTED">No Listado</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-400 mb-2">Descripción Detallada</label>
                    <textarea id="description" name="description" rows={6} className="w-full px-4 py-3 bg-[#1C1C29] border border-[#2C2C39] rounded-xl focus:border-[#DDF247] focus:outline-none transition-colors" placeholder="Describe los beneficios y características únicas de la propiedad..." />
                </div>

                <div className="pt-8 block">
                    <SubmitButton />
                </div>

                <p aria-live="polite" className="sr-only">
                    {state?.message}
                </p>
            </form>
        </div>
    );
}
