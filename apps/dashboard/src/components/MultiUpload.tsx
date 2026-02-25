"use client";

import { useState, useRef } from "react";
import { upload } from '@vercel/blob/client';

interface MultiUploadProps {
    label: string;
    accept: string;
    onUploadComplete: (urls: string[]) => void;
    currentValues?: string[];
    maxFiles?: number;
}

export default function MultiUpload({ label, accept, onUploadComplete, currentValues = [], maxFiles = 10 }: MultiUploadProps) {
    const [uploading, setUploading] = useState(false);
    const [previews, setPreviews] = useState<string[]>(currentValues);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        if (files.length === 0) return;

        // Check max files
        if (previews.length + files.length > maxFiles) {
            alert(`Solo puedes subir un máximo de ${maxFiles} archivos.`);
            return;
        }

        try {
            setUploading(true);
            const newUrls: string[] = [];

            // Upload sequentially or in parallel. Parallel is faster but might hit rate limits. 
            // We'll use Promise.all for speed.
            const uploadPromises = files.map(async (file) => {
                const newBlob = await upload(file.name, file, {
                    access: 'public',
                    handleUploadUrl: '/api/upload',
                });
                return newBlob.url;
            });

            const uploadedUrls = await Promise.all(uploadPromises);

            const updatedUrls = [...previews, ...uploadedUrls];
            setPreviews(updatedUrls);
            onUploadComplete(updatedUrls);

        } catch (error: any) {
            console.error("Error uploading files:", error);
            alert(`Error al subir archivos: ${error.message || 'Verifique su conexión y configuración.'}`);
        } finally {
            setUploading(false);
            // Reset input so the same files can be selected again if needed
            if (fileInputRef.current) fileInputRef.current.value = "";
        }
    };

    const handleRemove = (indexToRemove: number) => {
        const updatedUrls = previews.filter((_, index) => index !== indexToRemove);
        setPreviews(updatedUrls);
        onUploadComplete(updatedUrls);
    };

    return (
        <div className="w-full">
            <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-gray-400">{label}</label>
                <span className="text-xs text-gray-500">{previews.length} / {maxFiles}</span>
            </div>

            {/* Grid of previews and add button */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {previews.map((url, index) => (
                    <div key={index} className="relative group aspect-square rounded-xl overflow-hidden border border-[#2C2C39] bg-[#1C1C29]">
                        <img src={url} alt={`Preview ${index}`} className="w-full h-full object-cover" />
                        <button
                            type="button"
                            onClick={() => handleRemove(index)}
                            className="absolute top-2 right-2 bg-red-500/80 hover:bg-red-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm"
                            title="Eliminar imagen"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                ))}

                {previews.length < maxFiles && (
                    <div
                        onClick={() => fileInputRef.current?.click()}
                        className={`
                            cursor-pointer border-2 border-dashed border-[#2C2C39] rounded-xl 
                            aspect-square flex flex-col items-center justify-center transition-colors 
                            hover:border-[#DDF247] hover:bg-[#1C1C29] relative overflow-hidden group
                            ${uploading ? 'opacity-50 pointer-events-none' : ''}
                        `}
                    >
                        <div className="text-center text-gray-500 group-hover:text-gray-300">
                            <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            <p className="text-xs">Añadir foto</p>
                        </div>

                        {uploading && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-10">
                                <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-[#DDF247]"></div>
                            </div>
                        )}
                    </div>
                )}
            </div>

            <input
                ref={fileInputRef}
                type="file"
                accept={accept}
                multiple
                className="hidden"
                onChange={handleFileChange}
            />
        </div>
    );
}
