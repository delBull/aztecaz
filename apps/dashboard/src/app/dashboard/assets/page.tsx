import { ComingSoon } from "@/components/layout/ComingSoon";

export default function AssetsPage() {
    return (
        <ComingSoon
            title="Mi Portafolio de Activos"
            description="Visualiza y gestiona tu colección de real estate tokenizado. Aquí aparecerán tus certificados de propiedad (NFTs) y todas las métricas de tus activos digitales."
            icon={
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            }
            features={[
                "Visualizador 3D de Propiedades",
                "Gestión de Certificados NFT",
                "Documentación Legal Digital",
                "Transferencia de Propiedad P2P"
            ]}
        />
    );
}
