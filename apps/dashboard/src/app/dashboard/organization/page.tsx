import { prisma } from "@repo/database";
import { InviteMemberForm } from "@/components/organization/InviteMemberForm";

// In a real app, we would fetch the user's org from context or params.
// For now, we fetch the 'aztecaz-hq' org we seeded.
const ORG_SLUG = "aztecaz-hq";

export default async function OrganizationPage() {
    const organization = await prisma.organization.findUnique({
        where: { slug: ORG_SLUG },
        include: {
            members: {
                include: {
                    user: true,
                },
                orderBy: {
                    role: 'asc' // Admin first usually
                }
            },
        },
    });

    if (!organization) {
        return (
            <div className="flex flex-col items-center justify-center h-[50vh] text-white">
                <h2 className="text-xl font-bold mb-2">Organización no encontrada</h2>
                <p className="text-gray-400">Ejecuta el setup inicial o contacta soporte.</p>
            </div>
        );
    }

    return (
        <div className="p-8 max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">{organization.name}</h1>
                    <p className="text-gray-400">Gestiona los miembros y roles de tu organización.</p>
                </div>
                <div className="bg-[#1C1C29] px-4 py-2 rounded-lg border border-[#2C2C39]">
                    <span className="text-sm text-gray-400">Plan: </span>
                    <span className="text-[#DDF247] font-bold">{organization.plan}</span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Members List */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-[#14141F] border border-[#2C2C39] rounded-2xl overflow-hidden">
                        <div className="p-6 border-b border-[#2C2C39]">
                            <h2 className="text-xl font-semibold text-white">Miembros del Equipo</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-[#1C1C29] text-gray-400 text-sm uppercase">
                                    <tr>
                                        <th className="px-6 py-4 font-medium">Usuario</th>
                                        <th className="px-6 py-4 font-medium">Wallet</th>
                                        <th className="px-6 py-4 font-medium">Rol</th>
                                        <th className="px-6 py-4 font-medium text-right">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#2C2C39]">
                                    {organization.members.map((member) => (
                                        <tr key={member.id} className="hover:bg-[#1C1C29]/50 transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="font-medium text-white">{member.user.name || "Sin Nombre"}</div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="text-sm text-gray-500 font-mono">
                                                    {member.user.walletAddress?.slice(0, 6)}...{member.user.walletAddress?.slice(-4)}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={cn(
                                                    "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
                                                    member.role === 'ADMIN' ? "bg-purple-900/30 border-purple-500/30 text-purple-400" :
                                                        member.role === 'BROKER' ? "bg-blue-900/30 border-blue-500/30 text-blue-400" :
                                                            member.role === 'AGENT' ? "bg-green-900/30 border-green-500/30 text-green-400" :
                                                                "bg-gray-800 border-gray-700 text-gray-400"
                                                )}>
                                                    {member.role}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                {member.role !== 'ADMIN' && (
                                                    <button className="text-gray-400 hover:text-white transition-colors text-sm underline">
                                                        Editar
                                                    </button>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                    {organization.members.length === 0 && (
                                        <tr>
                                            <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                                                No hay miembros registrados.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Invite Sidebar */}
                <div>
                    <div className="bg-[#14141F] border border-[#2C2C39] rounded-2xl p-6 sticky top-8">
                        <h2 className="text-xl font-semibold text-white mb-1">Invitar Nuevo Miembro</h2>
                        <p className="text-sm text-gray-400 mb-6">Agrega colaboradores a tu organización.</p>
                        <InviteMemberForm organizationId={organization.id} />
                    </div>
                </div>
            </div>
        </div>
    );
}

function cn(...inputs: (string | undefined | null | false)[]) {
    return inputs.filter(Boolean).join(' ');
}
