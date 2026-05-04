"use client";

import { useState, useEffect } from "react";

interface PropertyHeaderActionsProps {
    images: string[];
    videoUrl?: string | null;
}

export default function PropertyHeaderActions({ images, videoUrl }: PropertyHeaderActionsProps) {
    const [activeModal, setActiveModal] = useState<"gallery" | "video" | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Prevent scroll when modal is open
    useEffect(() => {
        if (activeModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [activeModal]);

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <>
            <div className="absolute bottom-8 right-8 flex gap-3 z-20">
                {images && images.length > 0 && (
                    <button
                        onClick={() => setActiveModal("gallery")}
                        className="flex items-center gap-2 px-6 py-3 bg-black/60 backdrop-blur-xl border border-white/20 text-white font-bold rounded-xl hover:bg-[#DDF247] hover:text-black hover:border-[#DDF247] transition-all group shadow-2xl"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                            <circle cx="8.5" cy="8.5" r="1.5" />
                            <polyline points="21 15 16 10 5 21" />
                        </svg>
                        Galería
                        <span className="ml-1 text-xs opacity-60 group-hover:opacity-100">({images.length})</span>
                    </button>
                )}

                {videoUrl && (
                    <button
                        onClick={() => setActiveModal("video")}
                        className="flex items-center gap-2 px-6 py-3 bg-[#DDF247] text-black font-bold rounded-xl hover:bg-white transition-all shadow-xl"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <polygon points="10 8 16 12 10 16 10 8" />
                        </svg>
                        Video
                    </button>
                )}
            </div>

            {/* Modal Container */}
            {activeModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
                    {/* Backdrop */}
                    <div 
                        className="absolute inset-0 bg-black/95 backdrop-blur-md"
                        onClick={() => setActiveModal(null)}
                    />

                    {/* Close Button */}
                    <button 
                        onClick={() => setActiveModal(null)}
                        className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors z-50 bg-white/10 p-2 rounded-full backdrop-blur"
                    >
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>

                    {/* Content */}
                    <div className="relative w-full max-w-6xl aspect-video md:aspect-auto md:h-[80vh] flex items-center justify-center z-10">
                        {activeModal === "gallery" && images.length > 0 && (
                            <div className="relative w-full h-full flex flex-col">
                                <div className="flex-1 relative flex items-center justify-center overflow-hidden rounded-2xl bg-black/40">
                                    <img 
                                        src={images[currentImageIndex]} 
                                        alt={`Imagen ${currentImageIndex + 1}`} 
                                        className="max-w-full max-h-full object-contain select-none animate-in zoom-in-95 duration-500"
                                    />

                                    {images.length > 1 && (
                                        <>
                                            <button 
                                                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-[#DDF247] hover:text-black text-white rounded-full transition-all backdrop-blur border border-white/10"
                                            >
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="15 18 9 12 15 6" />
                                                </svg>
                                            </button>
                                            <button 
                                                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-[#DDF247] hover:text-black text-white rounded-full transition-all backdrop-blur border border-white/10"
                                            >
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="9 18 15 12 9 6" />
                                                </svg>
                                            </button>
                                        </>
                                    )}
                                </div>

                                {/* Thumbnails / Indicator */}
                                <div className="mt-6 flex flex-col items-center gap-4">
                                    <div className="flex gap-2 overflow-x-auto max-w-full pb-2 no-scrollbar">
                                        {images.map((img, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setCurrentImageIndex(idx)}
                                                className={`w-20 h-14 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                                                    currentImageIndex === idx ? "border-[#DDF247] scale-105" : "border-transparent opacity-40 hover:opacity-100"
                                                }`}
                                            >
                                                <img src={img} className="w-full h-full object-cover" />
                                            </button>
                                        ))}
                                    </div>
                                    <div className="text-white/60 font-medium text-sm">
                                        {currentImageIndex + 1} / {images.length}
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeModal === "video" && videoUrl && (
                            <div className="w-full h-full bg-black/40 rounded-2xl overflow-hidden border border-white/10 flex items-center justify-center">
                                <video 
                                    src={videoUrl} 
                                    controls 
                                    autoPlay 
                                    className="max-w-full max-h-full"
                                />
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
