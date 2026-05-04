"use server";

import { prisma } from "@repo/database";
import { revalidatePath } from "next/cache";

export async function updatePlatformConfig(key: string, value: any) {
    try {
        await prisma.platformConfig.upsert({
            where: { key },
            update: { value },
            create: { key, value },
        });

        revalidatePath("/dashboard");
        return { success: true };
    } catch (error) {
        console.error("Failed to update platform config:", error);
        return { success: false, error: "Error al actualizar la configuración" };
    }
}

export async function getPlatformConfig(key: string) {
    try {
        const config = await prisma.platformConfig.findUnique({
            where: { key },
        });
        return config?.value || null;
    } catch (error) {
        console.error("Failed to get platform config:", error);
        return null;
    }
}
