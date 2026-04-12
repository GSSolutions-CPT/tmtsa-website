"use client";

import { AnimatedCounter } from "./AnimatedCounter";
import { ScrollReveal } from "./ScrollReveal";

const STATS = [
    { value: 500, suffix: "+", label: "Projects Completed" },
    { value: 10, suffix: " Yrs", label: "Insurance-Backed Guarantee" },
    { value: 138, suffix: "+", label: "Google Reviews" },
    { value: 5, suffix: ".0", label: "Star Rating" },
];

export const StatsBar = () => {
    return (
        <div className="relative bg-zinc-900 py-16 overflow-hidden">
            {/* Decorative accent line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-tmt-orange/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-tmt-orange/50 to-transparent" />

            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-tmt-orange/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
                    {STATS.map((stat, i) => (
                        <ScrollReveal key={stat.label} delay={i * 0.1}>
                            <div className="text-center relative group">
                                <div className="font-heading font-black text-4xl md:text-5xl text-white mb-2">
                                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                                </div>
                                <p className="text-zinc-500 text-sm font-medium uppercase tracking-widest">{stat.label}</p>

                                {/* Vertical divider (not on last) */}
                                {i < STATS.length - 1 && (
                                    <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-zinc-800" />
                                )}
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </div>
    );
};
