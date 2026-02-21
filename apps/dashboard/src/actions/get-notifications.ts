"use server";

import { prisma } from "@repo/database";

export type Notification = {
    id: string;
    icon: string;
    title: string;
    body: string;
    time: string;
    unread: boolean;
    type: "property" | "feature" | "admin";
};

function timeAgo(date: Date): string {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 60) return `Hace ${diffMins} minutos`;
    if (diffHours < 24) return `Hace ${diffHours} hora${diffHours > 1 ? "s" : ""}`;
    if (diffDays === 1) return "Ayer";
    return `Hace ${diffDays} días`;
}

export async function getNotifications(): Promise<Notification[]> {
    try {
        // Fetch recent property activity from the last 30 days
        const since = new Date();
        since.setDate(since.getDate() - 30);

        const recentProperties = await prisma.property.findMany({
            where: {
                createdAt: { gte: since },
                status: { in: ["PUBLISHED", "COMING_SOON"] },
            },
            orderBy: { createdAt: "desc" },
            take: 8,
            select: {
                id: true,
                title: true,
                status: true,
                createdAt: true,
                updatedAt: true,
            },
        });

        const notifications: Notification[] = recentProperties.map((p) => {
            const isNew = (new Date().getTime() - p.createdAt.getTime()) < 1000 * 60 * 60 * 24; // < 24h
            const isComingSoon = p.status === "COMING_SOON";

            return {
                id: p.id,
                icon: isComingSoon ? "🚀" : "🏢",
                title: isComingSoon ? "Nuevo lanzamiento" : "Propiedad publicada",
                body: `"${p.title}" fue ${isComingSoon ? "agregada como preventa" : "publicada en el Market"}.`,
                time: timeAgo(p.createdAt),
                unread: isNew,
                type: "property",
            };
        });

        return notifications;
    } catch (e) {
        console.error("getNotifications error:", e);
        return [];
    }
}
