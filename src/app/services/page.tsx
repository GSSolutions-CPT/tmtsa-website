"use client";

import { PageHero } from "@/components/ui/PageHero";
// import { cn } from "@/lib/utils";
import { ArrowRight, Wrench } from "lucide-react";
import Link from "next/link";

const SERVICES = [
    {
        title: "Waterproofing",
        slug: "waterproofing",
        description: "Expert waterproofing solutions for flat roofs, balconies, and showers to protect your property from water damage.",
        features: ["Torch-on Systems", "Lateral Damp Treatment", "Balcony Sealing"],
        image: "/images/services/hero-waterproofing.png"
    },
    {
        title: "Paint & Roof",
        slug: "painting-roofing",
        description: "Comprehensive painting and roofing repairs ensuring longevity and aesthetic appeal for your home.",
        features: ["Interior & Exterior", "Roof Painting & Repair", "Protective Coatings"],
        image: "/images/services/hero-painting.png"
    },
    {
        title: "Plumbing",
        slug: "plumbing",
        description: "Professional plumbing services for maintenance, repairs, and clear-outs.",
        features: ["Leak Detection", "Maintenance", "Renovation Plumbing"],
        image: "/images/services/hero-plumbing.png"
    },
    {
        title: "Renovations",
        slug: "renovations",
        description: "Complete bathroom and kitchen renovations, handling everything from demolition to the final finish.",
        features: ["Kitchens & Bathrooms", "Property Improvements", "Tiling"],
        image: "/images/services/content-renovation.png"
    },
    {
        title: "Structural Repairs",
        slug: "structural-repairs",
        description: "Specialized repair of structural cracks and spalling to restore the integrity of your building.",
        features: ["Crack Injection", "Spalling Repair", "Structural Assessments"],
        image: "/images/services/hero-structural.png"
    },
    {
        title: "Paving & Cleaning",
        slug: "paving-cleaning",
        description: "Deep cleaning and paving restoration to bring your exterior surfaces back to life.",
        features: ["Roof Cleaning", "Paving Restoration", "Wall Washing"],
        image: "/images/services/hero-cleaning.png"
    }
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white text-tmt-dark selection:bg-tmt-orange selection:text-white">
            {/* 1. Unique Page Hero (Compact Hub Style) */}
            <PageHero
                title={<span>Elite <span className="text-tmt-orange">Services</span></span>}
                subtitle="Comprehensive property maintenance specialists. From waterproofing to full-scale renovations, we handle it all."
                imageSrc="/images/hero-services-gold.png"
                imageAlt="White Marble Architect Table with Gold Tools"
                size="compact"
            />

            {/* SEO Intro for Hub Page */}
            <section className="py-20 text-center max-w-4xl mx-auto px-4">
                <h2 className="font-heading text-3xl font-bold mb-6">Cape Town&apos;s Full-Service Contractors</h2>
                <div className="w-24 h-1 bg-tmt-orange mx-auto rounded-full mb-8"></div>
                <p className="text-neutral-600 text-lg leading-relaxed">
                    Most contractors specialize in just one trade. <strong>The Maintenance Team</strong> integrates <strong>structural waterproofing</strong>, <strong>roofing</strong>, <strong>painting</strong>, and <strong>renovations</strong> under one roof.
                    This holistic approach means we don&apos;t just paint over a crack—we fix the structural issue causing it. From <strong>Durbanville</strong> to the <strong>Atlantic Seaboard</strong>, trust us with your most valuable asset.
                </p>
            </section>

            {/* 2. Services Grid */}
            <section className="pb-32 px-4 container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES.map((service, index) => (
                        <div
                            key={index}
                            className="group border border-neutral-200 bg-white hover:border-black transition-all duration-500 relative overflow-hidden flex flex-col"
                        >
                            {/* Image Header */}
                            <Link href={`/services/${service.slug}`} className="block h-64 overflow-hidden relative bg-neutral-100 cursor-pointer">
                                {service.image ? (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-tmt-dark">
                                        <Wrench className="w-20 h-20 text-white/20" />
                                    </div>
                                )}

                                {/* Gold Overlay on Hover */}
                                <div className="absolute inset-0 bg-tmt-orange/0 group-hover:bg-tmt-orange/10 transition-colors duration-500" />
                            </Link>

                            {/* Content */}
                            <div className="p-8 flex-1 flex flex-col">
                                <Link href={`/services/${service.slug}`} className="block">
                                    <h3 className="font-heading font-bold text-2xl text-black mb-4 uppercase tracking-wide hover:text-tmt-orange transition-colors">
                                        {service.title}
                                    </h3>
                                </Link>

                                <p className="font-sans text-neutral-600 mb-8 leading-relaxed flex-1">
                                    {service.description}
                                </p>

                                <ul className="space-y-3 pt-6 border-t border-neutral-100 mb-8">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center text-sm font-bold text-neutral-800 uppercase tracking-wider">
                                            <span className="w-1.5 h-1.5 bg-tmt-orange rounded-full mr-3" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href={`/services/${service.slug}`}
                                    className="mt-auto inline-flex items-center justify-center gap-2 bg-zinc-900 text-white px-6 py-3 font-bold text-sm uppercase tracking-widest hover:bg-tmt-orange transition-colors group-hover:bg-tmt-orange"
                                >
                                    Learn More <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    ))}

                    {/* Contact Card */}
                    <div className="group border border-black bg-tmt-dark p-8 flex flex-col justify-center items-center text-center relative overflow-hidden h-full min-h-[500px]">
                        {/* ... content ... */}
                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, #D4AF37 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                        <h3 className="font-heading font-black text-3xl text-white mb-6 uppercase tracking-tight relative z-10">
                            Ready to <span className="text-tmt-orange">Start?</span>
                        </h3>
                        <div className="space-y-4 mb-8 font-sans text-neutral-300 relative z-10">
                            <p>076 630 0879</p>
                            <p className="text-sm">themaintenanceteam.oncall@gmail.com</p>
                            <div className="flex justify-center gap-4 text-xs font-bold uppercase tracking-widest text-tmt-orange mt-4">
                                <span>@The_Maintenance_Team</span>
                            </div>
                        </div>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-tmt-orange text-black px-8 py-4 font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300 relative z-10"
                        >
                            Book Consultation <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
