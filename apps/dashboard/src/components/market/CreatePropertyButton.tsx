"use client";

import Link from "next/link";
import { useActiveAccount } from "thirdweb/react";

export default function CreatePropertyButton() {
    const account = useActiveAccount();

    if (!account) return null;

    return (
        <Link href="/dashboard/create" className="px-4 py-2 bg-[#DDF247] text-black font-bold rounded-lg hover:bg-[#cce336] transition-colors">
            Nueva Propiedad
        </Link>
    );
}
