"use client";

import { cn } from "@/lib/utils";
// import { motion, useMotionValue, useTransform } from "framer-motion";
import { GripVertical } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface BeforeAfterSliderProps {
    beforeImage: string;
    afterImage: string;
    beforeAlt?: string;
    afterAlt?: string;
    className?: string;
}

export const BeforeAfterSlider = ({
    beforeImage,
    afterImage,
    beforeAlt = "Before",
    afterAlt = "After",
    className,
}: BeforeAfterSliderProps) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
        if (!isDragging || !containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = "touches" in event ? event.touches[0].clientX : event.clientX;
        const position = ((x - rect.left) / rect.width) * 100;

        setSliderPosition(Math.min(100, Math.max(0, position)));
    };

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);

    useEffect(() => {
        document.addEventListener("mouseup", handleMouseUp);
        document.addEventListener("touchend", handleMouseUp);
        return () => {
            document.removeEventListener("mouseup", handleMouseUp);
            document.removeEventListener("touchend", handleMouseUp);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className={cn(
                "relative w-full h-[400px] md:h-[600px] overflow-hidden rounded-xl cursor-ew-resize select-none",
                className
            )}
            onMouseMove={handleMove}
            onTouchMove={handleMove}
        >
            {/* After Image (Background) */}
            <Image
                src={afterImage}
                alt={afterAlt}
                fill
                className="object-cover"
                quality={80}
                sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-bold backdrop-blur-sm z-10">
                AFTER
            </div>

            {/* Before Image (Clipped) */}
            <div
                className="absolute inset-0 z-20 pointer-events-none"
                style={{
                    clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                }}
            >
                <Image
                    src={beforeImage}
                    alt={beforeAlt}
                    fill
                    className="object-cover"
                    quality={80}
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4 bg-tmt-orange/90 text-white px-3 py-1 rounded-full text-sm font-bold backdrop-blur-sm">
                    BEFORE
                </div>
            </div>

            {/* Slider Handle */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-white z-30 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-tmt-orange w-10 h-10 rounded-full flex items-center justify-center shadow-lg border-2 border-white pointer-events-auto cursor-ew-resize"
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleMouseDown}
                >
                    <GripVertical className="text-white w-5 h-5" />
                </div>
            </div>
        </div>
    );
};
