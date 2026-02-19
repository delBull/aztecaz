import { ComingSoon } from "@/components/layout/ComingSoon";

export default function WalletPage() {
    return (
        <ComingSoon
            title="Billetera Aztecaz"
            description="Gestiona tus fondos y recompensas de forma segura. Próximamente podrás realizar retiros, depósitos y swaps de tokens directamente desde tu dashboard."
            icon={
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
            }
            features={[
                "Bóveda Multipropósito QR",
                "Integración con MetaMask & Social Login",
                "Historial Detallado de Gas",
                "Staking de Rendimientos Inmobiliarios"
            ]}
        />
    );
}
