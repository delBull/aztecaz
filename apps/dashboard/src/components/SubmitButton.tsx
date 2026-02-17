"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className="w-full px-8 py-3 bg-[#DDF247] text-black font-bold rounded-xl hover:bg-[#cce336] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
            {pending ? "Guardando..." : "Crear Propiedad"}
        </button>
    );
}
