"use client";

import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "./ScrollReveal";

export const CTABanner = () => {
    return (
        <section className="relative py-24 overflow-hidden bg-zinc-900">
            {/* Background glow accents */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-tmt-orange/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-tmt-orange/5 rounded-full blur-[120px] pointer-events-none" />

            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                style={{ 
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }} 
            />

            <div className="container mx-auto px-4 relative z-10">
                <ScrollReveal>
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block text-tmt-orange font-bold uppercase tracking-[0.2em] text-xs mb-6 border border-tmt-orange/20 px-4 py-2 rounded-full bg-tmt-orange/5">
                            Ready to Transform Your Property?
                        </span>
                        <h2 className="font-heading text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                            Let&apos;s Build Something{" "}
                            <span className="text-tmt-orange">Extraordinary</span>
                        </h2>
                        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                            Get a free, no-obligation site assessment and detailed quote. Our team responds within 2 hours.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href="/contact"
                                className="group relative px-10 py-5 bg-tmt-orange text-white font-bold text-lg uppercase tracking-wider rounded-xl overflow-hidden shadow-lg shadow-tmt-orange/30 hover:shadow-tmt-orange/50 transition-all hover:-translate-y-1 duration-300"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Request a Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                            </Link>

                            <a
                                href="tel:+27766300879"
                                className="group flex items-center gap-3 px-8 py-5 border border-white/20 text-white font-bold text-lg uppercase tracking-wider hover:bg-white/10 transition-all backdrop-blur-sm rounded-xl duration-300 hover:-translate-y-1"
                            >
                                <Phone className="w-5 h-5 text-tmt-orange" />
                                076 630 0879
                            </a>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};
