"use client";

import { useState } from "react";
import Image from "next/image";
import { Upload, ArrowRight, CheckCircle2, Loader2, RefreshCw, Wand2 } from "lucide-react";

// --- Pricing & Service Logic ---
import { SITE_DATA } from "@/lib/siteData";

// --- Pricing & Service Logic ---
type ServiceType = string;
type SizeOption = {
    id: string;
    label: string;
    area: string;
    priceRange: string;
};

// Map services from SITE_DATA, but we still need specific icons/logic for the engine
const SERVICE_ICONS: Record<string, string> = {
    "waterproofing": "💧",
    "painting-roofing": "🏠",
    "plumbing": "🔧",
    "renovations": "🔨",
    "structural-repairs": "🧱",
    "paving-cleaning": "🧹",
};

const SERVICES = SITE_DATA.services.map(s => ({
    id: s.slug,
    label: s.title,
    icon: SERVICE_ICONS[s.slug] || "✨"
}));

const SIZES: Record<string, SizeOption[]> = {
    "paving-cleaning": [
        { id: "small", label: "Small", area: "Patio / Walkway (~20m²)", priceRange: "R800 - R1,200" },
        { id: "medium", label: "Medium", area: "Double Driveway (~50m²)", priceRange: "R2,200 - R2,800" },
        { id: "large", label: "Large", area: "Wrap-around / Estate (~100m²)", priceRange: "R4,500 - R5,500" },
    ],
    "painting-roofing": [
        { id: "small", label: "Single Garage", area: "Standard Garage", priceRange: "R3,500 - R5,000" },
        { id: "medium", label: "Standard House", area: "3 Bedroom Home", priceRange: "R15,000 - R22,000" },
        { id: "large", label: "Large Estate", area: "Multi-story / Complex", priceRange: "R35,000+" },
    ],
    "waterproofing": [
        { id: "small", label: "Balcony", area: "Single Balcony (~15m²)", priceRange: "R4,500 - R6,500" },
        { id: "medium", label: "Roof Slab", area: "Flat Roof Section (~40m²)", priceRange: "R12,000 - R18,000" },
        { id: "large", label: "Full Roof", area: "Complete Torch-on (~100m²)", priceRange: "R35,000 - R45,000" },
    ],
    "plumbing": [
        { id: "small", label: "Minor Repair", area: "Leak / Blockage", priceRange: "R950 - R1,500" },
        { id: "medium", label: "Installation", area: "Geyser / Toilet Install", priceRange: "R3,500 - R8,000" },
        { id: "large", label: "Renovation", area: "Full Bathroom Re-pipe", priceRange: "R15,000+" },
    ],
    "renovations": [
        { id: "small", label: "Refresh", area: "Paint & Minor Updates", priceRange: "R15,000 - R25,000" },
        { id: "medium", label: "Remodel", area: "New Fixtures & Tiling", priceRange: "R45,000 - R85,000" },
        { id: "large", label: "Full Strip", area: "Complete Rebuild", priceRange: "R120,000+" },
    ],
    "structural-repairs": [
        { id: "small", label: "Crack Inspection", area: "Minor Hairline Cracks", priceRange: "R2,500 - R5,000" },
        { id: "medium", label: "Spalling Patch", area: "Beam/Column Repair", priceRange: "R8,000 - R15,000" },
        { id: "large", label: "Major Works", area: "Structural Reinforcement", priceRange: "Quote on Assesment" },
    ],
};

const AI_PROMPTS: Record<string, string> = {
    "paving-cleaning": "High pressure clean paving, wet look sealer, pristine condition, photorealistic, clean joints, no weeds, brand new driveway",
    "painting-roofing": "Freshly painted charcoal grey roof, clean gutters, modern aesthetic, photorealistic, new roof tiles, architectural digest style",
    "waterproofing": "Clean flat roof, silver bitumen coating, professional waterproofing torch-on, watertight, dry surface, construction details, photorealistic",
    "plumbing": "Modern bathroom fixtures, clean piping, new geyser installation, professional plumbing work, gleaming chrome, photorealistic interior",
    "renovations": "Modern luxury bathroom renovation, marble tiles, glass shower, spa-like atmosphere, bright lighting, high-end production value, photorealistic",
    "structural-repairs": "Repaired concrete beam, smooth plaster finish, painted white, structurally sound, construction site finished work, clean edges, photorealistic",
};

export const VisualQuoteEngine = () => {
    // State
    const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
    const [service, setService] = useState<ServiceType | null>(null);
    const [size, setSize] = useState<SizeOption | null>(null);
    const [imageFile, setImageFile] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [prediction, setPrediction] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const [blobUrl, setBlobUrl] = useState<string | null>(null);

    // Handlers
    const handleServiceSelect = (s: string) => {
        setService(s as ServiceType);
        setStep(2);
    };

    const handleSizeSelect = (s: SizeOption) => {
        setSize(s);
        setStep(3);
    };

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            // 1. Show preview immediately
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageFile(reader.result as string);
            };
            reader.readAsDataURL(file);

            // 2. Upload to Vercel Blob in background
            try {
                const response = await fetch(`/api/upload?filename=${file.name}`, {
                    method: 'POST',
                    body: file,
                });
                const blob = await response.json();
                setBlobUrl(blob.url);
            } catch (err) {
                console.error("Failed to upload image to blob", err);
            }
        }
    };

    const generateQuote = async () => {
        if (!imageFile || !service) return;

        setIsLoading(true);
        setError(null);

        // Advance to results immediately to show loading state there
        setStep(4);

        try {
            const response = await fetch("/api/generate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    image: imageFile,
                    prompt: AI_PROMPTS[service],
                }),
            });

            const data = await response.json();

            if (response.ok) {
                // Replicate returns an array, typically prediction[0] is the URL
                setPrediction(Array.isArray(data.output) ? data.output[0] : data.output);
            } else {
                setError("AI generation failed, but here is your estimate.");
            }
        } catch (err) {
            setError("Something went wrong with the AI. Please try again.");
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    const reset = () => {
        setStep(1);
        setService(null);
        setSize(null);
        setImageFile(null);
        setPrediction(null);
        setError(null);
        setBlobUrl(null);
    };

    // Helper to build WhatsApp Link
    const getWhatsAppLink = () => {
        if (!service || !size) return "#";
        const serviceLabel = SERVICES.find(s => s.id === service)?.label || service;
        const message = `Hi TMT, I'm interested in the ${serviceLabel}. My area is roughly ${size.label} (${size.area}). The online estimate was ${size.priceRange}. ${blobUrl ? `Here is a photo of the area: ${blobUrl}` : ""} Can we book a site visit? (Ref: AI-Quote)`;
        return `https://wa.me/27766300879?text=${encodeURIComponent(message)}`;
    };

    return (
        <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-neutral-200">
            {/* Header / Progress */}
            <div className="bg-neutral-50 px-6 py-4 border-b border-neutral-100 flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-tmt-orange text-white font-bold text-sm">
                        {step}
                    </span>
                    <span className="text-sm font-semibold text-neutral-600 uppercase tracking-wide">
                        {step === 1 && "Select Service"}
                        {step === 2 && "Select Size"}
                        {step === 3 && "Upload Photo"}
                        {step === 4 && "Your Smart Quote"}
                    </span>
                </div>
                {step > 1 && (
                    <button onClick={reset} className="text-xs text-neutral-400 hover:text-red-500 flex items-center gap-1">
                        <RefreshCw className="w-3 h-3" /> Start Over
                    </button>
                )}
            </div>

            <div className="p-6 md:p-10 min-h-[400px]">
                {/* Step 1: Select Service */}
                {step === 1 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                        {SERVICES.map((s) => (
                            <button
                                key={s.id}
                                onClick={() => handleServiceSelect(s.id)}
                                className="flex flex-col items-center justify-center p-6 md:p-10 border-2 border-neutral-100 rounded-xl hover:border-tmt-orange hover:bg-orange-50/10 transition-all duration-300 group"
                            >
                                <span className="text-4xl md:text-6xl mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">{s.icon}</span>
                                <h3 className="font-heading font-bold text-xl md:text-2xl text-tmt-dark text-center">{s.label}</h3>
                                <div className="mt-4 flex items-center text-tmt-orange font-semibold text-sm opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                                    Next Step <ArrowRight className="w-4 h-4 ml-1" />
                                </div>
                            </button>
                        ))}
                    </div>
                )}

                {/* Step 2: Select Size */}
                {step === 2 && service && (
                    <div className="space-y-4">
                        <h3 className="text-center text-xl font-heading font-bold mb-8">How big is the area?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {SIZES[service].map((opt) => (
                                <button
                                    key={opt.id}
                                    onClick={() => handleSizeSelect(opt)}
                                    className="p-6 border-2 border-neutral-100 rounded-xl text-left hover:border-tmt-orange hover:bg-orange-50/10 transition-all"
                                >
                                    <div className="text-tmt-orange mb-2">
                                        {opt.id === "small" && <span className="text-2xl">S</span>}
                                        {opt.id === "medium" && <span className="text-3xl">M</span>}
                                        {opt.id === "large" && <span className="text-4xl">L</span>}
                                    </div>
                                    <h4 className="font-bold text-lg text-tmt-dark">{opt.label}</h4>
                                    <p className="text-neutral-500 text-sm mb-4">{opt.area}</p>
                                    <span className="inline-block bg-neutral-100 text-neutral-600 text-xs font-bold px-2 py-1 rounded">
                                        Est. {opt.priceRange}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Step 3: Upload */}
                {step === 3 && (
                    <div className="flex flex-col items-center justify-center h-full space-y-8 py-10">
                        <div className="text-center space-y-2">
                            <h3 className="font-heading font-bold text-xl">Upload a photo of your area</h3>
                            <p className="text-neutral-500 max-w-sm mx-auto">Our AI will analyze it and show you what it could look like renovated.</p>
                        </div>

                        <div className="relative w-full max-w-md">
                            <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-neutral-300 border-dashed rounded-lg cursor-pointer bg-neutral-50 hover:bg-neutral-100 transition-colors">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    {imageFile ? (
                                        <div className="relative w-full h-full p-4">
                                            <div className="relative h-48 w-full">
                                                <Image
                                                    src={imageFile}
                                                    alt="User uploaded property photo for renovation preview"
                                                    fill
                                                    className="object-contain rounded"
                                                />
                                            </div>
                                            <p className="text-xs text-green-600 mt-2 font-bold flex items-center justify-center gap-1">
                                                <CheckCircle2 className="w-3 h-3" /> Photo Ready
                                            </p>
                                        </div>
                                    ) : (
                                        <>
                                            <Upload className="w-10 h-10 text-neutral-400 mb-3" />
                                            <p className="mb-2 text-sm text-neutral-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                            <p className="text-xs text-neutral-500">PNG, JPG (MAX. 5MB)</p>
                                        </>
                                    )}
                                </div>
                                <input id="quote-photo-upload" name="photo" type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                            </label>
                        </div>

                        {imageFile && (
                            <button
                                onClick={generateQuote}
                                className="px-8 py-3 bg-tmt-dark text-white font-bold rounded-lg hover:bg-tmt-orange transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                <Wand2 className="w-5 h-5" /> Generate Magic Quote
                            </button>
                        )}
                    </div>
                )}

                {/* Step 4: Results */}
                {step === 4 && size && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-in fade-in zoom-in duration-500">
                        {/* Left: Image Result */}
                        <div className="bg-neutral-900 rounded-xl overflow-hidden relative min-h-[300px] flex items-center justify-center group">
                            {isLoading ? (
                                <div className="text-center space-y-4 p-8">
                                    <Loader2 className="w-12 h-12 text-tmt-orange animate-spin mx-auto" />
                                    <p className="text-neutral-400 animate-pulse">Analyzing surfaces...</p>
                                    <p className="text-neutral-500 text-xs">Applying {service} filters...</p>
                                </div>
                            ) : prediction ? (
                                <>
                                    <Image
                                        src={prediction}
                                        alt={`AI generated ${service} renovation visualization`}
                                        fill
                                        className="object-cover"
                                        unoptimized // Allow varying AI domains
                                    />
                                    <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md border border-white/20 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2 z-10">
                                        <Wand2 className="w-3 h-3 text-tmt-orange" /> AI Visualization
                                    </div>
                                    <a href={prediction} download="tmt-vision.png" className="absolute bottom-4 right-4 bg-black/50 hover:bg-black text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10" title="Download Image">
                                        <Upload className="w-4 h-4 rotate-180" />
                                    </a>
                                </>
                            ) : (
                                <div className="p-8 text-center">
                                    <p className="text-white mb-2">Could not generate visualization.</p>
                                    <p className="text-neutral-400 text-sm">{error || "Please try again with a clearer photo."}</p>
                                    {imageFile && (
                                        <div className="relative mt-4 h-32 w-auto mx-auto opacity-50 rounded overflow-hidden">
                                            <Image
                                                src={imageFile}
                                                alt="Original"
                                                width={200}
                                                height={128}
                                                className="object-contain"
                                            />
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Right: Quote Breakdown */}
                        <div className="flex flex-col justify-center space-y-6">
                            <div>
                                <h2 className="font-heading font-bold text-2xl text-tmt-dark mb-1">Estimated Investment</h2>
                                <p className="text-neutral-500 text-sm">Based on {size.area} area</p>
                            </div>

                            <div className="bg-orange-50 border border-orange-100 p-6 rounded-lg">
                                <span className="block text-sm text-orange-600 font-bold uppercase tracking-wider mb-2">Total Estimate</span>
                                <div className="text-3xl md:text-5xl font-bold text-tmt-dark tracking-tight">
                                    {size.priceRange}
                                </div>
                                <p className="text-xs text-neutral-500 mt-2">*Subject to final on-site measurement.</p>
                            </div>

                            <div className="space-y-3">
                                <a
                                    href={getWhatsAppLink()}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex items-center justify-center gap-2 py-4 bg-[#25D366] text-white font-bold rounded-lg hover:bg-[#128C7E] transition-colors shadow-md hover:shadow-lg"
                                >
                                    <span>Book via WhatsApp</span>
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                                <p className="text-center text-xs text-neutral-400">
                                    Secure booking. No obligation quote.
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
