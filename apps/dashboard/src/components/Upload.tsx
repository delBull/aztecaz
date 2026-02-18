"use client";

import { useState, useRef } from "react";

interface UploadProps {
    label: string;
    accept: string;
    onUploadComplete: (url: string) => void;
    currentValue?: string;
    type?: "image" | "video";
}

export default function Upload({ label, accept, onUploadComplete, currentValue, type = "image" }: UploadProps) {
    const [uploading, setUploading] = useState(false);
    const [preview, setPreview] = useState<string | null>(currentValue || null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // Local preview
        const objectUrl = URL.createObjectURL(file);
        setPreview(objectUrl);

        try {
            setUploading(true);

            // We'll upload via a server action or API route. 
            // For now, let's implement the API route approach as it handles buffering better for Vercel Blob.
            const response = await fetch(`/api/upload?filename=${file.name}`, {
                method: 'POST',
                body: file,
            });

            if (!response.ok) {
                throw new Error("Upload failed");
            }

            const newBlob = await response.json();
            onUploadComplete(newBlob.url);
        } catch (error) {
            console.error("Error uploading file:", error);
            alert("Error al subir archivo. Verifique su conexión.");
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="w-full">
            <label className="block text-sm font-medium text-gray-400 mb-2">{label}</label>

            <div
                onClick={() => fileInputRef.current?.click()}
                className={`
                    cursor-pointer border-2 border-dashed border-[#2C2C39] rounded-xl 
                    h-48 flex flex-col items-center justify-center transition-colors 
                    hover:border-[#DDF247] hover:bg-[#1C1C29] relative overflow-hidden group
                    ${uploading ? 'opacity-50 pointer-events-none' : ''}
                `}
            >
                {preview ? (
                    type === "image" ? (
                        <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                    ) : (
                        <video src={preview} className="w-full h-full object-cover" controls={false} />
                    )
                ) : (
                    <div className="text-center text-gray-500 group-hover:text-gray-300">
                        <svg className="w-10 h-10 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p className="text-sm">Click para subir {type === "image" ? "imagen" : "video"}</p>
                    </div>
                )}

                {uploading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-10">
                        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#DDF247]"></div>
                    </div>
                )}
            </div>

            <input
                ref={fileInputRef}
                type="file"
                accept={accept}
                className="hidden"
                onChange={handleFileChange}
            />
            {currentValue && (
                <p className="text-xs text-green-500 mt-2 flex items-center">
                    ✓ Archivo cargado correctamente
                </p>
            )}
        </div>
    );
}
