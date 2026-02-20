import Image from "next/image";

export default function DashboardPage() {
    return (
        <div className="relative min-h-[60vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden rounded-3xl bg-[#14141F] border border-[#2C2C39]">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[800px] bg-[#DDF247]/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 space-y-6 max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
                <div className="inline-flex items-center space-x-2 bg-[#1C1C29] px-4 py-2 rounded-full border border-[#2C2C39]">
                    <span className="w-2 h-2 rounded-full bg-[#DDF247] animate-pulse" />
                    <span className="text-sm font-medium text-gray-300">Sistema Operativo AztecaZ</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">
                    Bienvenido al <br />
                    <span className="bg-gradient-to-r from-white via-[#DDF247] to-white bg-clip-text text-transparent">
                        Mercado del Futuro
                    </span>
                </h1>

                <p className="text-lg text-gray-400 max-w-xl mx-auto">
                    Has ingresado a la red de bienes raíces tokenizados de élite. Administra inversiones,
                    expande tu portafolio y gestiona el capital de forma descentralizada.
                </p>

                <div className="pt-8">
                    <img
                        src="/assets/home/Aztecaz 512.svg"
                        alt="AztecaZ Logo"
                        className="w-24 h-24 mx-auto opacity-80"
                    />
                </div>
            </div>

            {/* Grid Pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(black,transparent_70%)] pointer-events-none" />
        </div>
    );
}
