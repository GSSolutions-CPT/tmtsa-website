"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const ROTATING_TEXTS = ["PAINTING", "SPALLING", "ROOFING", "COATINGS"];

export const DynamicHero = () => {
    const [index, setIndex] = useState(0);
    const [isLoaded, setIsLoaded] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % ROTATING_TEXTS.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-zinc-900">
            {/* Cinematic Video Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <video
                    src="/videos/tmtfrontpage.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    onLoadedData={() => setIsLoaded(true)}
                    className="w-full h-full object-cover scale-105"
                />

                {/* Multi-layer gradient overlays for depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/70 z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 z-10" />

                {/* Subtle film grain texture */}
                <div className="absolute inset-0 z-10 opacity-[0.04] pointer-events-none mix-blend-overlay"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                        backgroundSize: '128px 128px',
                    }}
                />

                {/* Seamless Blend to Page Background (White) */}
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/50 to-transparent z-20" />
            </div>

            {/* Content */}
            <div className="relative z-30 container mx-auto px-4 text-center pb-20">
                {/* Trusted Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-8"
                >
                    <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white/90 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.2em]">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        Cape Town&apos;s #1 Rated Contractor
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="font-heading font-black text-white text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight uppercase drop-shadow-2xl mb-6"
                >
                    <span className="block text-2xl md:text-4xl font-bold tracking-widest mb-2 text-tmt-orange">Cape Town&apos;s Premier</span>
                    <div className="flex flex-col md:block">
                        <span className="text-white">Waterproofing</span>
                        <span className="hidden md:inline mx-4 text-neutral-600">|</span>
                        <span className="text-white">Roofing</span>
                    </div>
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-4 text-lg md:text-2xl text-white/90 max-w-2xl mx-auto font-medium drop-shadow-md flex items-center justify-center gap-2"
                >
                    <span>Specializing in</span>
                    <div className="h-[1.5em] relative overflow-hidden flex justify-center text-tmt-orange w-32 text-left">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={ROTATING_TEXTS[index]}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="block font-bold"
                            >
                                {ROTATING_TEXTS[index]}
                            </motion.span>
                        </AnimatePresence>
                    </div>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-10 flex flex-col md:flex-row gap-4 justify-center items-center"
                >
                    <Link
                        href="/contact"
                        className="group relative px-10 py-5 bg-tmt-orange text-white font-bold text-lg uppercase tracking-wider rounded-lg overflow-hidden shadow-lg shadow-tmt-orange/30 hover:shadow-tmt-orange/50 transition-all hover:-translate-y-1 duration-300"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Get a Free Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    </Link>

                    <Link
                        href="/services"
                        className="px-10 py-5 border border-white/30 text-white font-bold text-lg uppercase tracking-wider hover:bg-white/10 transition-all backdrop-blur-sm rounded-lg duration-300 hover:-translate-y-1"
                    >
                        View Our Work
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={isLoaded ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
            >
                <span className="text-white/50 text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ChevronDown className="w-5 h-5 text-white/50" />
                </motion.div>
            </motion.div>
        </div>
    );
};
