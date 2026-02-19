"use client";

interface ComingSoonProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    features: string[];
}

export function ComingSoon({ title, description, icon, features }: ComingSoonProps) {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
            <div className="w-24 h-24 bg-[#DDF247]/10 rounded-3xl flex items-center justify-center mb-8 animate-pulse text-[#DDF247]">
                {icon}
            </div>

            <h1 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                {title}
            </h1>

            <p className="text-gray-400 max-w-lg text-lg mb-12 leading-relaxed">
                {description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl w-full">
                {features.map((feature, index) => (
                    <div key={index} className="bg-[#14141F] border border-[#2C2C39] p-4 rounded-2xl flex items-center space-x-3 text-left">
                        <div className="w-8 h-8 bg-[#1C1C29] rounded-lg flex items-center justify-center">
                            <svg className="w-4 h-4 text-[#DDF247]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <span className="text-gray-300 font-medium">{feature}</span>
                    </div>
                ))}
            </div>

            <div className="mt-16 inline-flex items-center space-x-2 bg-[#DDF247]/5 border border-[#DDF247]/20 px-4 py-2 rounded-full">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DDF247] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#DDF247]"></span>
                </span>
                <span className="text-xs font-bold text-[#DDF247] uppercase tracking-widest">En Desarrollo Activo</span>
            </div>
        </div>
    );
}
