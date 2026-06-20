"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import dynamic from "next/dynamic";

import type { Block, ContractPDFViewerProps } from "./ContractPDFViewer";

// Dynamically import the PDF viewer and generator to avoid SSR issues
const ContractPDFViewer = dynamic<ContractPDFViewerProps>(
    () => import("./ContractPDFViewer").then((mod) => mod.default), 
    { ssr: false }
);

export default function ContractEditorPage({ params }: { params: { id: string } }) {
    const searchParams = useSearchParams();
    const router = useRouter();
    
    const type = searchParams.get("type") || "intermediacion";
    const client = searchParams.get("client") || "";
    const address = searchParams.get("address") || "";
    const price = searchParams.get("price") || "";
    const comm = searchParams.get("comm") || "";

    const [blocks, setBlocks] = useState<Block[]>([]);
    const [showPDF, setShowPDF] = useState(false);

    useEffect(() => {
        // Mock data loading based on contract type
        const initialBlocks: Block[] = [
            {
                id: "b1",
                type: "title",
                content: type === "compraventa" 
                    ? "CONTRATO DE PROMESA DE COMPRAVENTA" 
                    : "CONTRATO DE PRESTACIÓN DE SERVICIOS DE INTERMEDIACIÓN INMOBILIARIA",
                editable: false,
            },
            {
                id: "b2",
                type: "clause",
                title: "DECLARACIONES",
                content: `QUE CELEBRAN POR UNA PARTE AZTECAZ PLATFORM (EN ADELANTE "EL PROFESIONAL") Y POR LA OTRA PARTE EL C. ${client.toUpperCase()} (EN ADELANTE "EL PROPIETARIO"), AL TENOR DE LAS SIGUIENTES DECLARACIONES Y CLÁUSULAS.`,
                editable: true,
            },
            {
                id: "b3",
                type: "clause",
                title: "CLÁUSULA PRIMERA: OBJETO",
                content: `EL PROPIETARIO encomienda a EL PROFESIONAL la promoción y venta del inmueble ubicado en: ${address}, fijando como precio de salida la cantidad de $${price} MXN.`,
                editable: true,
            },
            {
                id: "b4",
                type: "clause",
                title: "CLÁUSULA SEGUNDA: COMISIÓN",
                content: `EL PROPIETARIO pagará a EL PROFESIONAL por concepto de honorarios el ${comm}% sobre el precio de cierre de la operación, más el Impuesto al Valor Agregado (I.V.A.) correspondiente.`,
                editable: true,
            },
            {
                id: "b5",
                type: "clause",
                title: "CLÁUSULA DE REGISTRO PROFECO (INMUTABLE)",
                content: `Este modelo de contrato está registrado ante la Procuraduría Federal del Consumidor bajo el número 1234-5678. Cualquier alteración a esta cláusula invalidará el contrato frente a la institución regulatoria.`,
                editable: false, // Locked for legal protection
            },
            {
                id: "b6",
                type: "signatures",
                content: "",
                editable: false,
            }
        ];
        setBlocks(initialBlocks);
    }, [type, client, address, price, comm]);

    const handleBlockChange = (id: string, newContent: string) => {
        setBlocks(blocks.map(b => b.id === id ? { ...b, content: newContent } : b));
    };

    return (
        <div className="text-white min-h-screen bg-[#0E0E17] max-w-6xl mx-auto pb-24">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <Link href="/dashboard/contracts/create" className="text-[#DDF247] hover:underline text-sm mb-4 inline-block flex items-center gap-2">
                        <span>←</span> Atrás
                    </Link>
                    <h1 className="text-3xl font-extrabold">Edición de Contrato</h1>
                    <p className="text-gray-400 mt-2">Modifica las cláusulas permitidas o genera el documento final.</p>
                </div>
                <div className="flex gap-4">
                    <button 
                        onClick={() => setShowPDF(!showPDF)}
                        className="px-6 py-3 border border-[#2C2C39] bg-[#1C1C29] text-white font-bold rounded-xl hover:bg-[#2C2C39] transition-colors"
                    >
                        {showPDF ? "Volver a Edición" : "Vista Previa PDF"}
                    </button>
                    {!showPDF && (
                        <button 
                            onClick={() => setShowPDF(true)}
                            className="px-6 py-3 bg-[#DDF247] text-black font-bold rounded-xl transition-colors"
                        >
                            Finalizar y Generar
                        </button>
                    )}
                </div>
            </div>

            {!showPDF ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Editor Flow */}
                    <div className="md:col-span-2 space-y-6">
                        {blocks.map((block) => (
                            <div key={block.id} className={`p-6 rounded-2xl border ${block.editable ? 'bg-[#14141F] border-[#2C2C39]' : 'bg-[#1C1C29]/50 border-red-500/20 relative'}`}>
                                {!block.editable && block.type !== 'title' && block.type !== 'signatures' && (
                                    <div className="absolute top-4 right-4 text-red-400/50" title="Cláusula Bloqueada por Compliance Legal">
                                        🔒
                                    </div>
                                )}
                                
                                {block.title && <h3 className="text-sm font-bold text-[#DDF247] mb-3">{block.title}</h3>}
                                
                                {block.type === 'title' && (
                                    <h2 className="text-2xl font-bold text-center text-white">{block.content}</h2>
                                )}
                                
                                {block.type === 'clause' && (
                                    block.editable ? (
                                        <textarea 
                                            value={block.content}
                                            onChange={(e) => handleBlockChange(block.id, e.target.value)}
                                            className="w-full bg-[#1C1C29] border border-[#2C2C39] rounded-xl p-4 text-gray-300 focus:outline-none focus:border-[#DDF247] transition-colors min-h-[120px] resize-y"
                                        />
                                    ) : (
                                        <p className="text-gray-400 leading-relaxed p-4 bg-[#14141F] rounded-xl border border-[#2C2C39]/50">{block.content}</p>
                                    )
                                )}

                                {block.type === 'signatures' && (
                                    <div className="flex justify-between mt-12 px-8">
                                        <div className="text-center">
                                            <div className="w-48 border-b border-gray-500 mb-2"></div>
                                            <p className="text-sm text-gray-400">EL PROFESIONAL</p>
                                        </div>
                                        <div className="text-center">
                                            <div className="w-48 border-b border-gray-500 mb-2"></div>
                                            <p className="text-sm text-gray-400">EL PROPIETARIO</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Guide Sidebar */}
                    <div className="space-y-6">
                        <div className="bg-[#1C1C29] p-6 rounded-2xl border border-[#2C2C39]">
                            <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                                ℹ️ Guía de Edición
                            </h3>
                            <ul className="text-sm text-gray-400 space-y-3">
                                <li>• Revisa cuidadosamente las <strong>cantidades y datos personales</strong>.</li>
                                <li>• Los bloques con fondo oscuro y un 🔒 candado están protegidos por el equipo Legal de Aztecaz.</li>
                                <li>• Puedes ajustar el texto en los cuadros editables si el cliente negoció condiciones específicas.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="bg-white rounded-2xl h-[800px] overflow-hidden">
                    <ContractPDFViewer blocks={blocks} client={client} />
                </div>
            )}
        </div>
    );
}
