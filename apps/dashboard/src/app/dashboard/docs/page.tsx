import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Documentación | Aztecaz Platform",
    description: "Whitepaper y documentación oficial de la plataforma Aztecaz.",
};

export default function DocsPage() {
    return (
        <div className="text-white min-h-screen pb-24 bg-[#0E0E17]">
            {/* Hero */}
            <div className="relative mb-16 py-16 px-8 rounded-3xl overflow-hidden bg-gradient-to-br from-[#1C1C29] to-[#14141F] border border-[#2C2C39]">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#DDF247]/5 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none" />
                <div className="relative z-10 max-w-3xl">
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#DDF247]/10 text-[#DDF247] text-xs font-bold rounded-full mb-6 uppercase tracking-widest border border-[#DDF247]/20">
                        Documento Oficial · v1.0 · Feb 2026
                    </span>
                    <h1 className="text-5xl font-extrabold mb-4 leading-tight">
                        Aztecaz Platform
                        <span className="block text-[#DDF247]">Whitepaper</span>
                    </h1>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                        Una plataforma de inteligencia inmobiliaria que combina tecnología blockchain,
                        inteligencia artificial y experiencia de usuario de clase mundial para
                        democratizar el acceso al mercado de bienes raíces.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto space-y-12">

                {/* Table of Contents */}
                <DocSection title="Índice" icon="📋">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                            ["1", "¿Qué es Aztecaz?"],
                            ["2", "¿Qué es una Wallet?"],
                            ["3", "¿Cómo funciona la autenticación?"],
                            ["4", "El Marketplace de Propiedades"],
                            ["5", "Tokenización de Activos"],
                            ["6", "Estimador de Valor con IA"],
                            ["7", "Agenda Soberana"],
                            ["8", "Pricing Dinámico"],
                            ["9", "Plan de Implementación (Roadmap)"],
                            ["10", "Glosario"],
                        ].map(([n, label]) => (
                            <a
                                key={n}
                                href={`#section-${n}`}
                                className="flex items-center gap-3 p-3 bg-[#1C1C29] rounded-xl border border-[#2C2C39] hover:border-[#DDF247]/40 transition-colors text-sm text-gray-300 hover:text-white"
                            >
                                <span className="w-6 h-6 bg-[#DDF247]/10 text-[#DDF247] text-xs font-bold rounded-lg flex items-center justify-center flex-shrink-0">{n}</span>
                                {label}
                            </a>
                        ))}
                    </div>
                </DocSection>

                {/* 1 */}
                <DocSection id="section-1" title="1. ¿Qué es Aztecaz?" icon="🏛️">
                    <DocParagraph>
                        Aztecaz es una <strong>plataforma digital de gestión y comercialización de bienes raíces</strong> diseñada para agencias, desarrolladores e inversionistas. Combina un dashboard de administración de propiedades con inteligencia de mercado avanzada.
                    </DocParagraph>
                    <DocParagraph>
                        A diferencia de los portales tradicionales como Lamudi o Mercado Libre, Aztecaz no es solo un tablón de anuncios. Es un <strong>sistema operativo inmobiliario</strong> que permite gestionar el ciclo de vida completo de una propiedad: desde su publicación hasta la venta, con herramientas de IA, agenda de visitas, y en el futuro, fraccionamiento via blockchain.
                    </DocParagraph>
                    <DocCallout type="key">
                        Aztecaz es la intersección entre <strong>PropTech</strong> (tecnología para bienes raíces) y <strong>DeFi</strong> (finanzas descentralizadas), aplicada al mercado mexicano y latinoamericano.
                    </DocCallout>
                </DocSection>

                {/* 2 */}
                <DocSection id="section-2" title="2. ¿Qué es una Wallet?" icon="👛">
                    <DocParagraph>
                        Una <strong>wallet</strong> (billetera digital) es una aplicación que almacena tus claves criptográficas — la representación digital de tu identidad en la blockchain. No guarda dinero directamente; guarda las <em>llaves</em> que te permiten acceder a tus activos digitales.
                    </DocParagraph>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                        {[
                            { title: "MetaMask", desc: "La wallet más popular. Extensión de navegador. Ideal para empezar.", icon: "🦊" },
                            { title: "Coinbase Wallet", desc: "Fácil de usar. App móvil + extensión. Buena para principiantes.", icon: "🔵" },
                            { title: "WalletConnect", desc: "Protocolo para conectar cualquier wallet mobile a la web.", icon: "🔗" },
                        ].map(w => (
                            <div key={w.title} className="p-4 bg-[#1C1C29] rounded-xl border border-[#2C2C39]">
                                <div className="text-2xl mb-2">{w.icon}</div>
                                <h4 className="font-bold text-white mb-1">{w.title}</h4>
                                <p className="text-xs text-gray-400">{w.desc}</p>
                            </div>
                        ))}
                    </div>
                    <DocCallout type="info">
                        En Aztecaz, tu wallet es tu <strong>identidad</strong>. No necesitas usuario ni contraseña — tu dirección de wallet es única y verificable matemáticamente.
                    </DocCallout>
                </DocSection>

                {/* 3 */}
                <DocSection id="section-3" title="3. ¿Cómo funciona la autenticación?" icon="🔐">
                    <DocParagraph>
                        Aztecaz utiliza <strong>Thirdweb</strong> como capa de autenticación Web3. El flujo es:
                    </DocParagraph>
                    <ol className="space-y-3 my-4">
                        {[
                            "El usuario hace clic en \"Login\" en el navbar.",
                            "Thirdweb muestra un modal con opciones: MetaMask, Coinbase Wallet, WalletConnect, y login social (Google, Apple).",
                            "El usuario firma un mensaje criptográfico — esto no cuesta dinero, solo verifica identidad.",
                            "Aztecaz registra la dirección de wallet en la base de datos y asocia el perfil de organización.",
                            "El usuario accede al dashboard con todos sus permisos y datos.",
                        ].map((step, i) => (
                            <li key={i} className="flex gap-3 text-sm text-gray-300">
                                <span className="w-6 h-6 bg-[#DDF247] text-black font-black text-xs rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                                {step}
                            </li>
                        ))}
                    </ol>
                </DocSection>

                {/* 4 */}
                <DocSection id="section-4" title="4. El Marketplace de Propiedades" icon="🏢">
                    <DocParagraph>
                        El <strong>Marketplace</strong> es el corazón de la plataforma. Aquí se listan todas las propiedades disponibles con filtros por categoría, precio, y búsqueda inteligente global.
                    </DocParagraph>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                        {[
                            { label: "Disponibles", desc: "Propiedades en venta o renta actualmente publicadas." },
                            { label: "Lanzamientos", desc: "Preventas y proyectos futuros con descuentos de preventa." },
                            { label: "Buscador Global", desc: "Busca en tiempo real por título, descripción, ubicación, categoría o etiqueta." },
                            { label: "Filtros", desc: "Filtra por categoría (Residencial, Industrial, Terreno, etc.) y rango de precios." },
                        ].map(f => (
                            <div key={f.label} className="p-4 bg-[#1C1C29] rounded-xl border border-[#2C2C39]">
                                <h4 className="font-bold text-[#DDF247] mb-1 text-sm">{f.label}</h4>
                                <p className="text-xs text-gray-400">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                    <DocParagraph>
                        Cada propiedad tiene su propia página de detalle con galería de imágenes, video tour, documentos/planos (PDF), características técnicas, información de contacto de la organización y coordenadas en el mapa.
                    </DocParagraph>
                </DocSection>

                {/* 5 */}
                <DocSection id="section-5" title="5. Tokenización de Activos Inmobiliarios" icon="🪙">
                    <DocParagraph>
                        La <strong>tokenización</strong> es el proceso de representar un activo del mundo real (una propiedad) como un token digital en una blockchain. Esto permite dividir la propiedad en fracciones y vender esas fracciones a múltiples inversionistas.
                    </DocParagraph>
                    <DocCallout type="example">
                        Ejemplo: Una propiedad de $5,000,000 MXN puede tokenizarse en 5,000 tokens de $1,000 MXN cada uno. Un inversionista puede comprar desde 1 token, accediendo a un activo que de otro modo estaría fuera de su alcance.
                    </DocCallout>
                    <div className="my-6 space-y-3">
                        {[
                            { step: "Evaluar", desc: "La propiedad pasa por el Estimador de Valor para establecer precio base." },
                            { step: "Estructurar", desc: "Se define el número de tokens, precio por token y derechos asociados (rendimientos, revalorización)." },
                            { step: "Desplegar", desc: "Se despliega un Smart Contract en la blockchain (Polygon/Base) que representa la propiedad." },
                            { step: "Distribuir", desc: "Los tokens se ofrecen en la plataforma. Los inversionistas compran y los guardan en su wallet." },
                            { step: "Liquidez", desc: "En el mercado secundario (próximamente), los tokens pueden venderse a otros usuarios." },
                        ].map((s, i) => (
                            <div key={s.step} className="flex gap-4 p-3 bg-[#1C1C29] rounded-xl border border-[#2C2C39]">
                                <span className="w-8 h-8 bg-[#DDF247]/10 text-[#DDF247] text-xs font-black rounded-lg flex items-center justify-center flex-shrink-0">{i + 1}</span>
                                <div>
                                    <span className="text-white font-semibold text-sm">{s.step}: </span>
                                    <span className="text-gray-400 text-sm">{s.desc}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </DocSection>

                {/* 6 */}
                <DocSection id="section-6" title="6. Estimador de Valor con IA (Próximamente)" icon="🧠">
                    <DocParagraph>
                        El <strong>Estimador de Valor</strong> es un modelo de Machine Learning que analiza las características de una propiedad y devuelve una valoración de mercado con rango de confianza.
                    </DocParagraph>
                    <div className="p-5 bg-[#1C1C29] rounded-2xl border border-[#DDF247]/20 my-6 font-mono text-sm">
                        {/* Ejemplo de respuesta del API: */}
                        <p className="text-[#DDF247]">{"{"}</p>
                        <p className="pl-4 text-gray-300">valor_mercado: <span className="text-[#DDF247]">$3,450,000</span>,</p>
                        <p className="pl-4 text-gray-300">rango: <span className="text-[#DDF247]">[$3,100,000 – $3,800,000]</span>,</p>
                        <p className="pl-4 text-gray-300">confianza: <span className="text-green-400">&ldquo;Alta 🟢&rdquo;</span>,</p>
                        <p className="pl-4 text-gray-300">precio_salida: <span className="text-[#DDF247]">$3,290,000</span>,</p>
                        <p className="pl-4 text-gray-300">drivers: <span className="text-blue-400">[&ldquo;Ubicación +8%&rdquo;, &ldquo;Vista +3%&rdquo;, &ldquo;Antigüedad -2%&rdquo;]</span></p>
                        <p className="text-[#DDF247]">{"}"}</p>
                    </div>
                    <DocCallout type="info">
                        El modelo usa XGBoost/LightGBM con explicabilidad SHAP para mostrar qué factores específicos suben o bajan el precio estimado.
                    </DocCallout>
                </DocSection>

                {/* 7 */}
                <DocSection id="section-7" title="7. Agenda Soberana (Próximamente)" icon="🗓️">
                    <DocParagraph>
                        La <strong>Agenda Soberana</strong> es el módulo de gestión de visitas a propiedades. Más que un calendario, es un <em>motor de percepción de demanda</em> que usa señales de comportamiento para crear urgencia y presión social basada en datos reales.
                    </DocParagraph>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                        {[
                            { label: "🔥 Alta demanda", desc: "Badge automático cuando hay muchas visitas agendadas en los últimos 7 días." },
                            { label: "⏳ Escasez real", desc: "\"Solo quedan 2 horarios disponibles\" cuando el calendario está casi lleno." },
                            { label: "👤 Activity feed", desc: "\"Alguien agendó una visita hace 2h\" — urgencia sin nombre." },
                            { label: "📊 Conversion rate", desc: "Métricas reales de visitas → ofertas → ventas para cada propiedad." },
                        ].map(f => (
                            <div key={f.label} className="p-4 bg-[#1C1C29] rounded-xl border border-[#2C2C39]">
                                <h4 className="font-semibold text-white mb-1 text-sm">{f.label}</h4>
                                <p className="text-xs text-gray-400">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </DocSection>

                {/* 8 */}
                <DocSection id="section-8" title="8. Pricing Dinámico (Próximamente)" icon="💰">
                    <DocParagraph>
                        El módulo de <strong>Pricing Dinámico</strong> combina el Estimador de Valor y la Agenda Soberana para sugerir ajustes automáticos de precio basados en condiciones de mercado en tiempo real.
                    </DocParagraph>
                    <div className="overflow-x-auto my-6">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="text-left border-b border-[#2C2C39]">
                                    <th className="pb-3 text-gray-400 font-semibold pr-6">Condición</th>
                                    <th className="pb-3 text-gray-400 font-semibold pr-6">Indicador</th>
                                    <th className="pb-3 text-gray-400 font-semibold">Acción sugerida</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#2C2C39]">
                                {[
                                    ["Demanda alta + pocas cancelaciones", "DemandScore > 70", "↑ Precio 2–4%"],
                                    ["Baja demanda + 45+ días en mercado", "DemandScore < 30", "↓ Precio o mejorar fotos"],
                                    ["Precio 10%+ arriba del mercado", "precio > estimado + 10%", "⚠️ Advertencia al publicar"],
                                ].map(([cond, ind, acc]) => (
                                    <tr key={cond}>
                                        <td className="py-3 text-gray-300 pr-6">{cond}</td>
                                        <td className="py-3 font-mono text-[#DDF247] text-xs pr-6">{ind}</td>
                                        <td className="py-3 text-white font-semibold">{acc}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <DocCallout type="info">
                        Modo <strong>Asistido</strong> (default) solo sugiere cambios. Modo <strong>Automático</strong> (opt-in) los aplica dentro de límites configurables por el administrador.
                    </DocCallout>
                </DocSection>

                {/* 9 */}
                <DocSection id="section-9" title="9. Plan de Implementación (Roadmap)" icon="🚀">
                    <div className="space-y-4 my-4">
                        {[
                            {
                                phase: "✅ Completado",
                                color: "bg-green-500",
                                items: ["Dashboard multi-tenant con organizaciones", "Marketplace de propiedades", "Buscador global con autocompletado", "Página de Lanzamientos (preventas)", "Gestión de documentos/PDFs", "Autenticación Web3 con Thirdweb", "Sistema de notificaciones en tiempo real"],
                            },
                            {
                                phase: "🔵 Fase MVP — Estimador IA",
                                color: "bg-blue-500",
                                items: ["Modelo de valoración (XGBoost + SHAP)", "Widget de estimación en cada propiedad", "Comparables en mapa", "Confidence Tier (Alta / Media / Baja confianza)", "Diferencia precio mercado vs precio de salida"],
                            },
                            {
                                phase: "🟡 Fase 2 — Agenda Soberana",
                                color: "bg-yellow-500",
                                items: ["Calendario de visitas", "Score de demanda (DemandScore)", "Badges de alta demanda", "Activity feed anónimo", "Anti-manipulación de métricas"],
                            },
                            {
                                phase: "🟠 Fase 3 — Pricing Dinámico",
                                color: "bg-orange-500",
                                items: ["Simulador \"¿Qué pasa si?\"", "Auto-repricing asistido y automático", "Score de vendibilidad 0–100", "Alertas de mercado por zona"],
                            },
                            {
                                phase: "🔴 Fase 4 — IA Visual + Tokenización",
                                color: "bg-red-500",
                                items: ["Scoring de condición desde fotos", "Staging virtual", "Lead scoring automático", "Smart Contracts para fraccionamiento", "Mercado secundario de tokens"],
                            },
                        ].map(p => (
                            <div key={p.phase} className="p-5 bg-[#1C1C29] rounded-2xl border border-[#2C2C39]">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`w-2 h-2 rounded-full ${p.color}`} />
                                    <h4 className="font-bold text-white">{p.phase}</h4>
                                </div>
                                <ul className="space-y-1.5">
                                    {p.items.map(item => (
                                        <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
                                            <span className="text-[#DDF247] mt-0.5 flex-shrink-0">›</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </DocSection>

                {/* 10 */}
                <DocSection id="section-10" title="10. Glosario" icon="📚">
                    <dl className="space-y-4">
                        {[
                            ["Blockchain", "Registro digital distribuido e inmutable. Ninguna entidad central lo controla."],
                            ["Token", "Unidad digital en la blockchain que representa un activo o derecho."],
                            ["Smart Contract", "Contrato programable que se ejecuta automáticamente en la blockchain sin intermediarios."],
                            ["Wallet / Billetera", "Aplicación que almacena claves criptográficas para interactuar con la blockchain."],
                            ["DeFi", "Finanzas Descentralizadas. Servicios financieros sin bancos ni intermediarios tradicionales."],
                            ["PropTech", "Property Technology. Uso de tecnología digital para transformar bienes raíces."],
                            ["Tokenización", "Convertir derechos sobre un activo real en tokens digitales en la blockchain."],
                            ["SHAP", "Método matemático para explicar predicciones de modelos de Machine Learning."],
                            ["NFT", "Non-Fungible Token. Token único, no intercambiable, que puede representar una propiedad."],
                            ["Multi-tenant", "Arquitectura donde múltiples organizaciones comparten la plataforma con datos aislados."],
                        ].map(([term, def]) => (
                            <div key={term} className="grid grid-cols-[140px,1fr] gap-4 py-3 border-b border-[#2C2C39]/50">
                                <dt className="font-bold text-[#DDF247] text-sm">{term}</dt>
                                <dd className="text-gray-400 text-sm">{def}</dd>
                            </div>
                        ))}
                    </dl>
                </DocSection>

                {/* Footer */}
                <div className="text-center py-8 text-gray-600 text-sm border-t border-[#2C2C39]">
                    <p>Aztecaz Platform · Whitepaper v1.0 · Febrero 2026</p>
                    <p className="mt-1">Documento interno · Confidencial</p>
                </div>
            </div>
        </div>
    );
}

// ── Helper Components ──────────────────────────────────────────────

function DocSection({ id, title, icon, children }: { id?: string; title: string; icon: string; children: React.ReactNode }) {
    return (
        <section id={id} className="scroll-mt-8">
            <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-10 bg-[#DDF247]/10 rounded-xl flex items-center justify-center text-xl flex-shrink-0">{icon}</span>
                <h2 className="text-xl font-bold text-white">{title}</h2>
            </div>
            <div className="pl-0 space-y-4">{children}</div>
        </section>
    );
}

function DocParagraph({ children }: { children: React.ReactNode }) {
    return <p className="text-gray-400 leading-relaxed">{children}</p>;
}

function DocCallout({ type, children }: { type: "key" | "info" | "example"; children: React.ReactNode }) {
    const styles = {
        key: "border-[#DDF247]/30 bg-[#DDF247]/5 text-gray-300",
        info: "border-blue-500/30 bg-blue-500/5 text-gray-300",
        example: "border-purple-500/30 bg-purple-500/5 text-gray-300",
    };
    const icons = { key: "💡", info: "ℹ️", example: "📌" };
    return (
        <div className={`flex gap-3 p-4 rounded-xl border ${styles[type]} text-sm leading-relaxed`}>
            <span className="flex-shrink-0">{icons[type]}</span>
            <span>{children}</span>
        </div>
    );
}
