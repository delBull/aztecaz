"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useActiveAccount } from "thirdweb/react";

type UserRole = "ADMIN" | "ORG_ADMIN" | "BROKER" | "AGENT" | "READ_ONLY" | "USER";

interface UserData {
    id: string;
    walletAddress: string;
    memberships: Array<{
        role: UserRole;
        organizationId: string;
    }>;
}

interface RoleContextType {
    user: UserData | null;
    isLoading: boolean;
    hasRole: (role: UserRole | UserRole[]) => boolean;
    isSuperAdmin: boolean;
}

const RoleContext = createContext<RoleContextType | undefined>(undefined);

export function RoleProvider({ children }: { children: React.ReactNode }) {
    const account = useActiveAccount();
    const [user, setUser] = useState<UserData | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!account?.address) {
            setUser(null);
            return;
        }

        const fetchUser = async () => {
            setIsLoading(true);
            try {
                const res = await fetch("/api/user/check", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ walletAddress: account.address }),
                });

                if (res.ok) {
                    const data = await res.json();
                    setUser(data);
                }
            } catch (error) {
                console.error("Failed to fetch user role:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchUser();
    }, [account?.address]);

    const hasRole = (role: UserRole | UserRole[]) => {
        if (!user) return false;

        // Check if user has any of the required memberships
        const rolesToCheck = Array.isArray(role) ? role : [role];

        return user.memberships.some(membership =>
            rolesToCheck.includes(membership.role)
        );
    };

    // Simplify for now: if they have any ADMIN-like role in any org, treat as Admin for UI visibility
    // ALSO CHECK ENV VAR for hardcoded super admin
    const isSuperAdminWallet = account?.address && process.env.NEXT_PUBLIC_SUPER_ADMIN_ADDRESS &&
        account.address.toLowerCase() === process.env.NEXT_PUBLIC_SUPER_ADMIN_ADDRESS.toLowerCase();

    const isSuperAdmin = isSuperAdminWallet || hasRole(["ADMIN", "ORG_ADMIN", "BROKER"]);

    return (
        <RoleContext.Provider value={{ user, isLoading, hasRole, isSuperAdmin }}>
            {children}
        </RoleContext.Provider>
    );
}

export const useRole = () => {
    const context = useContext(RoleContext);
    if (context === undefined) {
        throw new Error("useRole must be used within a RoleProvider");
    }
    return context;
};
