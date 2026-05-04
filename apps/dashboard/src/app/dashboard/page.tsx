import { getPlatformConfig } from "@/actions/update-platform-config";
import Link from "next/link";

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

export default async function DashboardPage() {
    const config = await getPlatformConfig("about_aztecaz") as unknown as PlatformData;

    return (
        <div className="space-y-12 pb-20">
            {/* Welcome Hero */}
            <div className="relative min-h-[50vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden rounded-3xl bg-[#14141F] border border-[#2C2C39]">
                {/* Background Glows */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[800px] bg-[#DDF247]/10 blur-[120px] rounded-full pointer-events-none" />

                <div className="relative z-10 space-y-6 max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <div className="inline-flex items-center space-x-2 bg-[#1C1C29] px-4 py-2 rounded-full border border-[#2C2C39]">
                        <span className="w-2 h-2 rounded-full bg-[#DDF247] animate-pulse" />
                        <span className="text-sm font-medium text-gray-300">Sistema Operativo AztecaZ</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">
                        {config?.about?.title || "Bienvenido al Mercado del Futuro"}
                    </h1>

                    <p className="text-lg text-gray-400 max-w-2xl mx-auto whitespace-pre-line">
                        {config?.about?.content || "Has ingresado a la red de bienes raíces tokenizados de élite. Administra inversiones, expande tu portafolio y gestiona el capital de forma descentralizada."}
                    </p>

                    <div className="pt-8">
                        <img
                            src="/logo_aztecaz.png"
                            alt="AztecaZ Logo"
                            className="h-16 w-auto mx-auto"
                        />
                    </div>
                </div>

                {/* Grid Pattern overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(black,transparent:70%)] pointer-events-none" />
            </div>

            {/* Sections Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Nosotros Section Summary */}
                <div className="bg-[#14141F] p-8 rounded-3xl border border-[#2C2C39] hover:border-[#DDF247]/30 transition-all group">
                    <div className="w-12 h-12 bg-[#DDF247]/10 rounded-2xl flex items-center justify-center mb-6 text-[#DDF247]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-4">Nuestra Visión</h2>
                    <p className="text-gray-400 leading-relaxed mb-6">
                        En Aztecaz, estamos redefiniendo la propiedad inmobiliaria a través de la transparencia y la tecnología blockchain.
                    </p>
                    <div className="flex gap-4">
                        <div className="bg-[#1C1C29] p-4 rounded-xl border border-[#2C2C39] flex-1">
                            <span className="block text-[#DDF247] font-bold text-xl mb-1">+100M</span>
                            <span className="text-xs text-gray-500 uppercase">AUM</span>
                        </div>
                        <div className="bg-[#1C1C29] p-4 rounded-xl border border-[#2C2C39] flex-1">
                            <span className="block text-[#DDF247] font-bold text-xl mb-1">500+</span>
                            <span className="text-xs text-gray-500 uppercase">Inversionistas</span>
                        </div>
                    </div>
                </div>

                {/* Servicios Preview */}
                <div className="bg-[#14141F] p-8 rounded-3xl border border-[#2C2C39] hover:border-[#DDF247]/30 transition-all">
                    <h2 className="text-2xl font-bold text-white mb-6">Servicios de Élite</h2>
                    <div className="space-y-4">
                        {(config?.services || []).slice(0, 3).map((service, idx) => (
                            <div key={idx} className="flex gap-4 items-start p-4 bg-[#1C1C29] rounded-2xl border border-[#2C2C39]">
                                <div className="w-8 h-8 rounded-lg bg-[#DDF247] flex items-center justify-center text-black flex-shrink-0">
                                    <span className="font-bold text-xs">{idx + 1}</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-sm">{service.title}</h3>
                                    <p className="text-xs text-gray-500 mt-1 line-clamp-1">{service.content}</p>
                                </div>
                            </div>
                        ))}
                        {(!config?.services || config.services.length === 0) && (
                            <>
                                <div className="p-4 bg-[#1C1C29] rounded-2xl border border-[#2C2C39] opacity-50">
                                    <h3 className="font-bold text-white text-sm">Tokenización Inmobiliaria</h3>
                                </div>
                                <div className="p-4 bg-[#1C1C29] rounded-2xl border border-[#2C2C39] opacity-50">
                                    <h3 className="font-bold text-white text-sm">Gestión de Portafolio</h3>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* Equipo Section */}
            {config?.team && config.team.length > 0 && (
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-white">Liderazgo y Equipo</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {config.team.map((member, idx) => (
                            <div key={idx} className="bg-[#14141F] p-4 rounded-3xl border border-[#2C2C39] text-center group hover:border-[#DDF247]/30 transition-all">
                                <div className="aspect-square rounded-2xl bg-[#1C1C29] mb-4 overflow-hidden border border-[#2C2C39] group-hover:border-[#DDF247]/20 transition-all">
                                    {member.image ? (
                                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-gray-700">
                                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                        </div>
                                    )}
                                </div>
                                <h3 className="font-bold text-white">{member.name}</h3>
                                <p className="text-xs text-[#DDF247] mt-1">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
