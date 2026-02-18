"use client";

import { useFormState } from "react-dom";
import { createProperty } from "@/actions/create-property";
import { SubmitButton } from "@/components/SubmitButton";
import { useRole } from "@/context/RoleContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const initialState = {
    message: "",
    errors: {},
};

// Hardcoded for demo/seed
const ORG_ID = "cmlqzj3wy0000zfvlxlmlcy28"; // This is the ID from the user's previous output for "Aztecaz HQ"
// logic: In a real app, we'd get this from the user's active organization context.

export default function CreatePropertyPage() {
    // @ts-ignore
    const [state, dispatch] = useFormState(createProperty, initialState);
    const { isSuperAdmin, hasRole, isLoading } = useRole();
    const router = useRouter();

    useEffect(() => {
        if (!isLoading && !isSuperAdmin && !hasRole(["AGENT", "BROKER"])) {
            router.push("/dashboard");
        }
    }, [isLoading, isSuperAdmin, hasRole, router]);

    if (isLoading) {
        return <div className="text-white flex justify-center items-center h-64">Loading...</div>;
    }

    if (!isSuperAdmin && !hasRole(["AGENT", "BROKER"])) {
        return null; // Don't render anything while redirecting
    }

    return (
        <div className="max-w-2xl mx-auto text-white">
            <h1 className="text-3xl font-bold mb-8">Crear Nueva Propiedad</h1>

            <form action={dispatch} className="space-y-6 bg-[#14141F] p-8 rounded-2xl border border-[#2C2C39]">
                {/* Hidden Organization ID */}
                <input type="hidden" name="organizationId" value={ORG_ID} />

                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-400 mb-2">Título</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        required
                        className="w-full px-4 py-3 bg-[#1C1C29] border border-[#2C2C39] rounded-xl focus:border-[#DDF247] focus:outline-none transition-colors"
                        placeholder="Ej. Departamento de Lujo en Polanco"
                    />
                    <div id="title-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.title &&
                            state.errors.title.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                    </div>
                </div>

                <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-400 mb-2">Precio (USD)</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        required
                        min="0"
                        step="0.01"
                        className="w-full px-4 py-3 bg-[#1C1C29] border border-[#2C2C39] rounded-xl focus:border-[#DDF247] focus:outline-none transition-colors"
                        placeholder="0.00"
                    />
                </div>

                <div>
                    <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-400 mb-2">URL de la Imagen (Principal)</label>
                    <input
                        type="url"
                        id="imageUrl"
                        name="imageUrl"
                        className="w-full px-4 py-3 bg-[#1C1C29] border border-[#2C2C39] rounded-xl focus:border-[#DDF247] focus:outline-none transition-colors"
                        placeholder="https://example.com/image.jpg"
                    />
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-400 mb-2">Categoría</label>
                        <select
                            id="category"
                            name="category"
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
                        <input
                            type="text"
                            id="tags"
                            name="tags"
                            className="w-full px-4 py-3 bg-[#1C1C29] border border-[#2C2C39] rounded-xl focus:border-[#DDF247] focus:outline-none transition-colors"
                            placeholder="Ej. Lujo, Playa, Oportunidad"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="status" className="block text-sm font-medium text-gray-400 mb-2">Estatus</label>
                        <select
                            id="status"
                            name="status"
                            className="w-full px-4 py-3 bg-[#1C1C29] border border-[#2C2C39] rounded-xl focus:border-[#DDF247] focus:outline-none transition-colors text-white"
                        >
                            <option value="DRAFT">Borrador</option>
                            <option value="PUBLISHED">Publicado</option>
                            <option value="COMING_SOON">Próximo Lanzamiento</option>
                            <option value="ARCHIVED">Archivado</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="visibility" className="block text-sm font-medium text-gray-400 mb-2">Visibilidad</label>
                        <select
                            id="visibility"
                            name="visibility"
                            className="w-full px-4 py-3 bg-[#1C1C29] border border-[#2C2C39] rounded-xl focus:border-[#DDF247] focus:outline-none transition-colors text-white"
                        >
                            <option value="PUBLIC">Público</option>
                            <option value="PRIVATE">Privado</option>
                            <option value="UNLISTED">No Listado</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-400 mb-2">Descripción</label>
                    <textarea
                        id="description"
                        name="description"
                        rows={4}
                        className="w-full px-4 py-3 bg-[#1C1C29] border border-[#2C2C39] rounded-xl focus:border-[#DDF247] focus:outline-none transition-colors"
                        placeholder="Describe la propiedad..."
                    />
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
