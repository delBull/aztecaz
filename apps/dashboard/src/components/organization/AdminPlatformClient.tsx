"use client";

import { useState } from "react";
import { updatePlatformConfig } from "@/actions/update-platform-config";
import { SubmitButton } from "@/components/SubmitButton";

interface Section {
    title: string;
    content: string;
}

interface Service {
    title: string;
    content: string;
}

interface TeamMember {
    name: string;
    role: string;
    image: string;
}

interface PlatformData {
    about: Section;
    services: Service[];
    team: TeamMember[];
}

export default function AdminPlatformClient({ initialData }: { initialData: PlatformData | null }) {
    const [data, setData] = useState<PlatformData>(initialData || {
        about: { title: "Quién es Aztecaz", content: "" },
        services: [{ title: "", content: "" }],
        team: [{ name: "", role: "", image: "" }]
    });
    const [status, setStatus] = useState<string>("");

    const handleSave = async () => {
        setStatus("Guardando...");
        const res = await updatePlatformConfig("about_aztecaz", data);
        if (res.success) {
            setStatus("¡Guardado correctamente!");
            setTimeout(() => setStatus(""), 3000);
        } else {
            setStatus("Error al guardar.");
        }
    };

    const addService = () => setData({ ...data, services: [...data.services, { title: "", content: "" }] });
    const removeService = (index: number) => setData({ ...data, services: data.services.filter((_, i) => i !== index) });

    const addTeamMember = () => setData({ ...data, team: [...data.team, { name: "", role: "", image: "" }] });
    const removeTeamMember = (index: number) => setData({ ...data, team: data.team.filter((_, i) => i !== index) });

    return (
        <div className="max-w-4xl mx-auto space-y-12 pb-20">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-white">Gestión de Plataforma</h1>
                <div className="flex items-center gap-4">
                    {status && <span className="text-sm text-[#DDF247]">{status}</span>}
                    <button 
                        onClick={handleSave}
                        className="px-6 py-2 bg-[#DDF247] text-black font-bold rounded-xl hover:bg-white transition-all"
                    >
                        Guardar Cambios
                    </button>
                </div>
            </div>

            {/* Nosotros Section */}
            <section className="bg-[#14141F] border border-[#2C2C39] p-8 rounded-2xl space-y-6">
                <h2 className="text-xl font-bold text-[#DDF247] border-b border-[#2C2C39] pb-4">Sección: Nosotros</h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Título de Bienvenida</label>
                        <input 
                            type="text" 
                            value={data.about.title} 
                            onChange={(e) => setData({ ...data, about: { ...data.about, title: e.target.value } })}
                            className="w-full bg-[#1C1C29] border border-[#2C2C39] p-3 rounded-xl text-white outline-none focus:border-[#DDF247]"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Contenido Principal</label>
                        <textarea 
                            rows={6}
                            value={data.about.content} 
                            onChange={(e) => setData({ ...data, about: { ...data.about, content: e.target.value } })}
                            className="w-full bg-[#1C1C29] border border-[#2C2C39] p-3 rounded-xl text-white outline-none focus:border-[#DDF247]"
                        />
                    </div>
                </div>
            </section>

            {/* Servicios Section */}
            <section className="bg-[#14141F] border border-[#2C2C39] p-8 rounded-2xl space-y-6">
                <div className="flex justify-between items-center border-b border-[#2C2C39] pb-4">
                    <h2 className="text-xl font-bold text-[#DDF247]">Sección: Servicios</h2>
                    <button onClick={addService} className="text-sm bg-white/5 px-3 py-1 rounded-lg hover:bg-white/10 text-white transition-colors">
                        + Añadir Servicio
                    </button>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    {data.services.map((service, index) => (
                        <div key={index} className="p-6 bg-[#1C1C29] border border-[#2C2C39] rounded-xl relative">
                            <button onClick={() => removeService(index)} className="absolute top-4 right-4 text-gray-500 hover:text-red-500">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>
                            <div className="grid grid-cols-1 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Título</label>
                                    <input 
                                        type="text" 
                                        value={service.title} 
                                        onChange={(e) => {
                                            const newServices = [...data.services];
                                            newServices[index].title = e.target.value;
                                            setData({ ...data, services: newServices });
                                        }}
                                        className="w-full bg-[#14141F] border border-[#2C2C39] p-3 rounded-xl text-white outline-none focus:border-[#DDF247]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Descripción</label>
                                    <textarea 
                                        rows={3}
                                        value={service.content} 
                                        onChange={(e) => {
                                            const newServices = [...data.services];
                                            newServices[index].content = e.target.value;
                                            setData({ ...data, services: newServices });
                                        }}
                                        className="w-full bg-[#14141F] border border-[#2C2C39] p-3 rounded-xl text-white outline-none focus:border-[#DDF247]"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Equipo Section */}
            <section className="bg-[#14141F] border border-[#2C2C39] p-8 rounded-2xl space-y-6">
                <div className="flex justify-between items-center border-b border-[#2C2C39] pb-4">
                    <h2 className="text-xl font-bold text-[#DDF247]">Sección: Equipo</h2>
                    <button onClick={addTeamMember} className="text-sm bg-white/5 px-3 py-1 rounded-lg hover:bg-white/10 text-white transition-colors">
                        + Añadir Miembro
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {data.team.map((member, index) => (
                        <div key={index} className="p-6 bg-[#1C1C29] border border-[#2C2C39] rounded-xl relative">
                            <button onClick={() => removeTeamMember(index)} className="absolute top-4 right-4 text-gray-500 hover:text-red-500">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Nombre</label>
                                    <input 
                                        type="text" 
                                        value={member.name} 
                                        onChange={(e) => {
                                            const newTeam = [...data.team];
                                            newTeam[index].name = e.target.value;
                                            setData({ ...data, team: newTeam });
                                        }}
                                        className="w-full bg-[#14141F] border border-[#2C2C39] p-3 rounded-xl text-white outline-none focus:border-[#DDF247]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Puesto / Rol</label>
                                    <input 
                                        type="text" 
                                        value={member.role} 
                                        onChange={(e) => {
                                            const newTeam = [...data.team];
                                            newTeam[index].role = e.target.value;
                                            setData({ ...data, team: newTeam });
                                        }}
                                        className="w-full bg-[#14141F] border border-[#2C2C39] p-3 rounded-xl text-white outline-none focus:border-[#DDF247]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">URL Imagen (Opcional)</label>
                                    <input 
                                        type="text" 
                                        value={member.image} 
                                        onChange={(e) => {
                                            const newTeam = [...data.team];
                                            newTeam[index].image = e.target.value;
                                            setData({ ...data, team: newTeam });
                                        }}
                                        className="w-full bg-[#14141F] border border-[#2C2C39] p-3 rounded-xl text-white outline-none focus:border-[#DDF247]"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
