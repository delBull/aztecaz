import { ComingSoon } from "@/components/layout/ComingSoon";

export default function FinancePage() {
    return (
        <ComingSoon
            title="Gestión Financiera & ROI"
            description="Lleva el control total de tus rendimientos inmobiliarios. Próximamente habilitaremos el panel de balances, flujos de caja y proyecciones de retorno de inversión."
            icon={
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3 1.343 3 3-1.343 3-3 3m0-13c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3m0 13a9 9 0 110-18 9 9 0 010 18z" />
                </svg>
            }
            features={[
                "Balance General de Inversiones",
                "Cálculo Automático de ROI",
                "Reportes Fiscales Exportables",
                "Historial de Dividendos Pagados"
            ]}
        />
    );
}
