import { ComingSoon } from "@/components/layout/ComingSoon";

export default function HistoryPage() {
    return (
        <ComingSoon
            title="Registro de Actividades"
            description="Toda la trazabilidad de tus movimientos en la blockchain. Consulta el historial completo de compras, ventas y eventos de gobernanza de tus activos."
            icon={
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            }
            features={[
                "Firma Digital en cada Transacción",
                "Explorador de Bloques Integrado",
                "Certificados de Operación PDF",
                "Auditoría de Smart Contracts en Tiempo Real"
            ]}
        />
    );
}
