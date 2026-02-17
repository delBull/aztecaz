import { useState } from "react";
import { useForm } from "react-hook-form";

export default function LeadForm({ propertyId }) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [status, setStatus] = useState("idle"); // idle, loading, success, error

    const onSubmit = async (data) => {
        setStatus("loading");
        try {
            const res = await fetch("/api/leads/create", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...data, propertyId }),
            });

            if (res.ok) {
                setStatus("success");
                reset();
            } else {
                setStatus("error");
            }
        } catch (e) {
            setStatus("error");
        }
    };

    return (
        <div className="lead-form-container bg-[#14141F] p-6 rounded-2xl border border-[#2C2C39]">
            <h4 className="text-xl font-bold text-white mb-4">Me interesa esta propiedad</h4>

            {status === "success" ? (
                <div className="text-[#DDF247] text-center py-4">
                    ¡Gracias! Mensaje enviado correctamente. Nos pondremos en contacto.
                </div>
            ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <input
                            {...register("name", { required: true })}
                            placeholder="Nombre Completo"
                            className="w-full px-4 py-3 bg-[#1C1C29] border border-[#2C2C39] rounded-xl focus:border-[#DDF247] focus:outline-none text-white transition-colors"
                        />
                        {errors.name && <span className="text-red-500 text-sm">Campo requerido</span>}
                    </div>
                    <div>
                        <input
                            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                            placeholder="Correo Electrónico"
                            type="email"
                            className="w-full px-4 py-3 bg-[#1C1C29] border border-[#2C2C39] rounded-xl focus:border-[#DDF247] focus:outline-none text-white transition-colors"
                        />
                        {errors.email && <span className="text-red-500 text-sm">Email inválido</span>}
                    </div>
                    <div>
                        <input
                            {...register("phone", { required: true })}
                            placeholder="Teléfono"
                            type="tel"
                            className="w-full px-4 py-3 bg-[#1C1C29] border border-[#2C2C39] rounded-xl focus:border-[#DDF247] focus:outline-none text-white transition-colors"
                        />
                        {errors.phone && <span className="text-red-500 text-sm">Campo requerido</span>}
                    </div>
                    <div>
                        <textarea
                            {...register("message")}
                            placeholder="Estoy interesado en esta propiedad..."
                            rows="4"
                            className="w-full px-4 py-3 bg-[#1C1C29] border border-[#2C2C39] rounded-xl focus:border-[#DDF247] focus:outline-none text-white transition-colors"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full py-3 bg-[#DDF247] text-black font-bold rounded-xl hover:bg-[#cce336] transition-colors disabled:opacity-50"
                    >
                        {status === "loading" ? "Enviando..." : "Enviar Mensaje"}
                    </button>
                    {status === "error" && <p className="text-red-500 text-center text-sm">Ocurrió un error. Intenta de nuevo.</p>}
                </form>
            )}
        </div>
    );
}
