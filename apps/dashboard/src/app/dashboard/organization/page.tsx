import { prisma } from "@repo/database";
import { InviteMemberForm } from "@/components/organization/InviteMemberForm";
import { OrganizationTabs } from "@/components/organization/OrganizationTabs";

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
                    role: 'asc'
                }
            },
            properties: {
                orderBy: {
                    createdAt: 'desc'
                }
            }
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

    // Serialize properties to avoid date issues in client components
    const serializedProperties = organization.properties.map(p => ({
        ...p,
        price: p.price.toString(),
        createdAt: p.createdAt.toISOString(),
        updatedAt: p.updatedAt.toISOString(),
    }));

    return (
        <div className="p-8 max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">{organization.name}</h1>
                    <p className="text-gray-400">Gestiona los miembros y las propiedades de tu organización.</p>
                </div>
                <div className="bg-[#1C1C29] px-4 py-2 rounded-lg border border-[#2C2C39]">
                    <span className="text-sm text-gray-400">Plan: </span>
                    <span className="text-[#DDF247] font-bold">{organization.plan}</span>
                </div>
            </div>

            <OrganizationTabs
                organization={organization}
                properties={serializedProperties}
            />
        </div>
    );
}
