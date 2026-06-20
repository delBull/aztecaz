import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Documentos Legales | Aztecaz Platform",
    description: "Gestión y creación de contratos inmobiliarios.",
};

export default async function ContractsPage() {
    // Aquí es donde se conectará la base de datos real (ej. Prisma)
    // const recentContracts = await prisma.contract.findMany({ where: { organizationId: currentOrg } })
    const recentContracts: any[] = [
        {
            id: "C-2026-004",
            type: "Promesa de Compraventa",
            client: "Luis Gómez",
            property: "Torre Luz 5B",
            date: "20 Jun 2026",
            status: "PENDIENTE",
            flow: "PHYSICAL"
        }
    ]; // Agregado un mock para que veas el flujo físico

    return (
        <div className="text-white min-h-screen bg-[#0E0E17] max-w-6xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-extrabold mb-2">Documentos Legales</h1>
                    <p className="text-gray-400">Genera, edita y gestiona contratos adaptados a la ley inmobiliaria mexicana.</p>
                </div>
                <Link
                    href="/dashboard/contracts/create"
                    className="flex items-center gap-2 px-6 py-3 bg-[#DDF247] text-black font-bold rounded-xl hover:bg-[#cce336] transition-all"
                >
                    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14M5 12h14" />
                    </svg>
                    Nuevo Contrato
                </Link>
            </div>

            {/* Quick Actions / Templates */}
            <div className="mb-12">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-[#1C1C29] rounded-lg flex items-center justify-center text-[#DDF247]">📋</span>
                    Plantillas Frecuentes
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                        {
                            title: "Intermediación Inmobiliaria",
                            desc: "Autorización exclusiva / no exclusiva para promoción de inmuebles.",
                            icon: "🤝",
                        },
                        {
                            title: "Promesa de Compraventa",
                            desc: "Asegura la venta y establece penalizaciones antes de escriturar.",
                            icon: "🏠",
                        },
                        {
                            title: "Arrendamiento",
                            desc: "Contrato de renta residencial o comercial con aval / póliza.",
                            icon: "🔑",
                        },
                    ].map((template) => (
                        <Link key={template.title} href="/dashboard/contracts/create" className="p-5 bg-[#14141F] border border-[#2C2C39] rounded-2xl hover:border-[#DDF247]/50 transition-colors group">
                            <div className="text-3xl mb-3">{template.icon}</div>
                            <h3 className="font-bold text-white mb-1 group-hover:text-[#DDF247] transition-colors">{template.title}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">{template.desc}</p>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Recent Contracts Table */}
            <div>
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-[#1C1C29] rounded-lg flex items-center justify-center text-[#DDF247]">📁</span>
                    Historial de Contratos
                </h2>
                <div className="bg-[#14141F] border border-[#2C2C39] rounded-2xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-[#1C1C29] text-gray-400 text-xs uppercase font-semibold">
                                <tr>
                                    <th className="px-6 py-4">ID</th>
                                    <th className="px-6 py-4">Tipo</th>
                                    <th className="px-6 py-4">Cliente</th>
                                    <th className="px-6 py-4">Propiedad</th>
                                    <th className="px-6 py-4">Fecha</th>
                                    <th className="px-6 py-4">Estado</th>
                                    <th className="px-6 py-4 text-right">Acción</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#2C2C39]">
                                {recentContracts.length === 0 ? (
                                    <tr>
                                        <td colSpan={7} className="px-6 py-8 text-center text-gray-500">
                                            Aún no hay contratos generados en esta organización.
                                        </td>
                                    </tr>
                                ) : (
                                    recentContracts.map((contract) => (
                                        <tr key={contract.id} className="hover:bg-[#1C1C29] transition-colors">
                                            <td className="px-6 py-4 font-mono text-gray-300">{contract.id}</td>
                                            <td className="px-6 py-4 text-white font-medium">{contract.type}</td>
                                            <td className="px-6 py-4 text-gray-300">{contract.client}</td>
                                            <td className="px-6 py-4 text-gray-400">{contract.property}</td>
                                            <td className="px-6 py-4 text-gray-400">{contract.date}</td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex px-2 py-1 text-[10px] font-bold rounded-full uppercase tracking-wider ${
                                                    contract.status === "FIRMADO" ? "bg-green-500/10 text-green-400 border border-green-500/20" :
                                                    contract.status === "PENDIENTE" ? "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20" :
                                                    "bg-gray-500/10 text-gray-400 border border-gray-500/20"
                                                }`}>
                                                    {contract.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right flex justify-end gap-3 items-center h-full">
                                                {contract.status === "PENDIENTE" && contract.flow === "PHYSICAL" && (
                                                    <button className="text-blue-400 hover:text-white font-medium text-sm transition-colors border border-blue-500/30 px-3 py-1 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 flex items-center gap-2">
                                                        <span>📤</span> Subir PDF Firmado
                                                    </button>
                                                )}
                                                <button className="text-[#DDF247] hover:text-white font-medium text-sm transition-colors">
                                                    Ver Detalles
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
