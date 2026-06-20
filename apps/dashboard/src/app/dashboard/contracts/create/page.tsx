"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Define the steps
type Step = "SELECT_TYPE" | "FILL_DATA" | "EDITOR";

export default function CreateContractPage() {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState<Step>("SELECT_TYPE");
    const [contractType, setContractType] = useState<string | null>(null);

    // Form data
    const [formData, setFormData] = useState({
        clientName: "",
        clientRFC: "",
        propertyAddress: "",
        operationPrice: "",
        commission: "5", // %
    });

    // Contract Types
    const contractTypes = [
        { id: "intermediacion", name: "Intermediación Inmobiliaria Exclusiva", icon: "🤝" },
        { id: "compraventa", name: "Promesa de Compraventa", icon: "🏠" },
        { id: "arrendamiento", name: "Arrendamiento Residencial", icon: "🔑" },
    ];

    const handleNext = () => {
        if (currentStep === "SELECT_TYPE" && contractType) setCurrentStep("FILL_DATA");
        else if (currentStep === "FILL_DATA") setCurrentStep("EDITOR");
    };

    const handleBack = () => {
        if (currentStep === "EDITOR") setCurrentStep("FILL_DATA");
        else if (currentStep === "FILL_DATA") setCurrentStep("SELECT_TYPE");
    };

    return (
        <div className="text-white min-h-screen bg-[#0E0E17] max-w-4xl mx-auto pb-24">
            {/* Header / Breadcrumb */}
            <div className="mb-8">
                <Link href="/dashboard/contracts" className="text-[#DDF247] hover:underline text-sm mb-4 inline-block flex items-center gap-2">
                    <span>←</span> Volver a Contratos
                </Link>
                <h1 className="text-3xl font-extrabold">Crear Nuevo Contrato</h1>
                <p className="text-gray-400 mt-2">
                    {currentStep === "SELECT_TYPE" && "Paso 1: Selecciona el tipo de documento que necesitas."}
                    {currentStep === "FILL_DATA" && "Paso 2: Completa los datos clave de la operación."}
                    {currentStep === "EDITOR" && "Paso 3: Revisa y personaliza las cláusulas."}
                </p>
            </div>

            {/* Progress Bar */}
            <div className="flex items-center mb-8 gap-2">
                <div className={`h-2 flex-1 rounded-full ${currentStep === "SELECT_TYPE" || currentStep === "FILL_DATA" || currentStep === "EDITOR" ? "bg-[#DDF247]" : "bg-[#1C1C29]"}`} />
                <div className={`h-2 flex-1 rounded-full ${currentStep === "FILL_DATA" || currentStep === "EDITOR" ? "bg-[#DDF247]" : "bg-[#1C1C29]"}`} />
                <div className={`h-2 flex-1 rounded-full ${currentStep === "EDITOR" ? "bg-[#DDF247]" : "bg-[#1C1C29]"}`} />
            </div>

            {/* Step 1: Select Type */}
            {currentStep === "SELECT_TYPE" && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {contractTypes.map((type) => (
                        <button
                            key={type.id}
                            onClick={() => setContractType(type.id)}
                            className={`p-6 border-2 rounded-2xl text-left transition-all ${
                                contractType === type.id 
                                    ? "border-[#DDF247] bg-[#DDF247]/10" 
                                    : "border-[#2C2C39] bg-[#14141F] hover:border-gray-500"
                            }`}
                        >
                            <div className="text-4xl mb-4">{type.icon}</div>
                            <h3 className="font-bold text-lg mb-2">{type.name}</h3>
                        </button>
                    ))}
                </div>
            )}

            {/* Step 2: Fill Data */}
            {currentStep === "FILL_DATA" && (
                <div className="bg-[#14141F] border border-[#2C2C39] p-8 rounded-2xl space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Nombre del Cliente / Propietario</label>
                            <input 
                                type="text"
                                className="w-full bg-[#1C1C29] border border-[#2C2C39] rounded-xl p-3 text-white focus:outline-none focus:border-[#DDF247] transition-colors"
                                placeholder="Ej. Juan Pérez García"
                                value={formData.clientName}
                                onChange={(e) => setFormData({...formData, clientName: e.target.value})}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">RFC (Opcional)</label>
                            <input 
                                type="text"
                                className="w-full bg-[#1C1C29] border border-[#2C2C39] rounded-xl p-3 text-white focus:outline-none focus:border-[#DDF247] transition-colors"
                                placeholder="Ej. PEGJ800101XYZ"
                                value={formData.clientRFC}
                                onChange={(e) => setFormData({...formData, clientRFC: e.target.value})}
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-400 mb-2">Dirección de la Propiedad</label>
                            <input 
                                type="text"
                                className="w-full bg-[#1C1C29] border border-[#2C2C39] rounded-xl p-3 text-white focus:outline-none focus:border-[#DDF247] transition-colors"
                                placeholder="Ej. Calle Palmas 123, Lomas, CDMX"
                                value={formData.propertyAddress}
                                onChange={(e) => setFormData({...formData, propertyAddress: e.target.value})}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Precio de Operación (MXN)</label>
                            <input 
                                type="text"
                                className="w-full bg-[#1C1C29] border border-[#2C2C39] rounded-xl p-3 text-white focus:outline-none focus:border-[#DDF247] transition-colors"
                                placeholder="Ej. 5000000"
                                value={formData.operationPrice}
                                onChange={(e) => setFormData({...formData, operationPrice: e.target.value})}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Comisión (%)</label>
                            <input 
                                type="number"
                                className="w-full bg-[#1C1C29] border border-[#2C2C39] rounded-xl p-3 text-white focus:outline-none focus:border-[#DDF247] transition-colors"
                                placeholder="5"
                                value={formData.commission}
                                onChange={(e) => setFormData({...formData, commission: e.target.value})}
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Navigation Actions */}
            <div className="flex justify-between mt-8">
                {currentStep !== "SELECT_TYPE" ? (
                    <button 
                        onClick={handleBack}
                        className="px-6 py-3 border border-[#2C2C39] text-white rounded-xl hover:bg-[#1C1C29] transition-colors"
                    >
                        Atrás
                    </button>
                ) : <div />}

                {currentStep === "SELECT_TYPE" && (
                    <button 
                        onClick={handleNext}
                        disabled={!contractType}
                        className="px-6 py-3 bg-[#DDF247] text-black font-bold rounded-xl disabled:opacity-50 transition-colors"
                    >
                        Continuar
                    </button>
                )}
                
                {currentStep === "FILL_DATA" && (
                    <button 
                        onClick={() => router.push(`/dashboard/contracts/editor/new?type=${contractType}&client=${encodeURIComponent(formData.clientName)}&address=${encodeURIComponent(formData.propertyAddress)}&price=${formData.operationPrice}&comm=${formData.commission}`)}
                        className="px-6 py-3 bg-[#DDF247] text-black font-bold rounded-xl transition-colors flex items-center gap-2"
                    >
                        Generar Documento <span>→</span>
                    </button>
                )}
            </div>
        </div>
    );
}
