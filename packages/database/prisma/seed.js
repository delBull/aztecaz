const { PrismaClient, UserRole } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    const ORG_ID = 'cmlqzj3wy0000zfvlxlmlcy28';
    const SUPER_ADMIN_WALLET = '0x31Fe3E40BBB1DEf15c738de1eEcC7aCFD3720543'; // From user request

    console.log('🌱 Seeding database with Node.js...');

    // 1. Create Organization
    try {
        // 0. Cleanup conflicting slug
        const existingOrg = await prisma.organization.findUnique({
            where: { slug: 'aztecaz-hq' },
        });

        if (existingOrg && existingOrg.id !== ORG_ID) {
            console.log(`⚠️ Found conflicting org with slug 'aztecaz-hq' but different ID (${existingOrg.id}). Deleting members first...`);

            // Delete members first
            await prisma.organizationMember.deleteMany({
                where: { organizationId: existingOrg.id }
            });

            console.log(`⚠️ Deleting conflicting org...`);
            await prisma.organization.delete({
                where: { slug: 'aztecaz-hq' }
            });
        }

        const org = await prisma.organization.upsert({
            where: { id: ORG_ID },
            update: {},
            create: {
                id: ORG_ID,
                name: 'Aztecaz HQ',
                slug: 'aztecaz-hq',
                plan: 'ENTERPRISE',
            },
        });
        console.log(`✅ Organization ensured: ${org.name} (${org.id})`);

        // 2. Create Super Admin User
        const admin = await prisma.user.upsert({
            where: { walletAddress: SUPER_ADMIN_WALLET },
            update: {},
            create: {
                walletAddress: SUPER_ADMIN_WALLET,
                name: 'Super Admin',
                image: 'https://github.com/shadcn.png',
            },
        });
        console.log(`✅ Super Admin ensured: ${admin.walletAddress} (${admin.id})`);

        // 3. Assign Role
        const membership = await prisma.organizationMember.upsert({
            where: {
                userId_organizationId: {
                    userId: admin.id,
                    organizationId: org.id,
                },
            },
            update: {
                role: UserRole.ADMIN, // Ensure they are ADMIN
            },
            create: {
                userId: admin.id,
                organizationId: org.id,
                role: UserRole.ADMIN,
            },
        });
        console.log(`✅ Membership assigned: ${membership.role}`);

    } catch (error) {
        console.error("Error during seeding:", error);
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
