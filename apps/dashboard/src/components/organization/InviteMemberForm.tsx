"use client";

import { useState } from "react";
import { useActiveAccount } from "thirdweb/react";
import { useRouter } from "next/navigation";

export function InviteMemberForm({ organizationId }: { organizationId: string }) {
    const router = useRouter();
    const [walletAddress, setWalletAddress] = useState("");
    const [role, setRole] = useState("AGENT");
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState<{ type: "success" | "error", text: string } | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage(null);

        try {
            const res = await fetch("/api/organization/invite", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    organizationId,
                    walletAddress,
                    role,
                }),
            });

            if (!res.ok) throw new Error("Failed to invite member");

            setMessage({ type: "success", text: "Miembro agregado exitosamente" });
            setWalletAddress("");
            router.refresh();
        } catch (error) {
            setMessage({ type: "error", text: "Error al agregar miembro. Verifica la dirección." });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                    Wallet Address
                </label>
                <input
                    type="text"
                    required
                    value={walletAddress}
                    onChange={(e) => setWalletAddress(e.target.value)}
                    placeholder="0x..."
                    className="w-full bg-[#1C1C29] border border-[#2C2C39] rounded-xl px-4 py-2 text-white focus:outline-none focus:border-[#DDF247]"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                    Rol
                </label>
                <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full bg-[#1C1C29] border border-[#2C2C39] rounded-xl px-4 py-2 text-white focus:outline-none focus:border-[#DDF247]"
                >
                    <option value="AGENT">Agente (Agent)</option>
                    <option value="BROKER">Broker / Manager</option>
                    <option value="ORG_ADMIN">Admin de Organización</option>
                    <option value="READ_ONLY">Solo Lectura</option>
                </select>
            </div>

            {message && (
                <div className={`text-sm ${message.type === "success" ? "text-green-500" : "text-red-500"}`}>
                    {message.text}
                </div>
            )}

            <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#DDF247] text-black font-bold py-3 rounded-xl hover:bg-[#cce336] transition-colors disabled:opacity-50"
            >
                {isLoading ? "Agregando..." : "Agregar Miembro"}
            </button>
        </form>
    );
}
