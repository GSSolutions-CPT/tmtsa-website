"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface PageHeroProps {
  title: React.ReactNode;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
  size?: "default" | "compact" | "large";
}

export const PageHero = ({ title, subtitle, imageSrc, imageAlt, size = "default" }: PageHeroProps) => {
  const heightClass = {
    compact: "h-[40vh] md:h-[50vh]",
    default: "h-[60vh] md:h-[70vh]",
    large: "h-[80vh] md:h-[90vh]"
  }[size];

  return (
    <div className={cn("relative w-full overflow-hidden flex items-center justify-center bg-tmt-dark", heightClass)}>
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="relative w-full h-full"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Executive Gold Overlay: Minimal Dark for Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60 z-10" />

        {/* Seamless Blend to Page Background (White) */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent z-20" />
      </div>

      {/* Content */}
      <div className="relative z-30 container mx-auto px-4 text-center">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className={cn(
            "font-heading font-black text-white/90 leading-tight tracking-tight uppercase drop-shadow-2xl px-2",
            size === "compact" ? "text-3xl md:text-6xl" : "text-4xl md:text-8xl"
          )}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className={cn(
              "font-sans text-white/80 mx-auto font-medium tracking-wide",
              size === "compact" ? "text-base md:text-xl mt-4 max-w-xl" : "text-lg md:text-2xl mt-6 max-w-2xl"
            )}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
};
