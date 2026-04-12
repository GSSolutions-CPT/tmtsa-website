import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children: ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoCard = ({
    className,
    title,
    description,
    header,
    icon,
    href,
    cta = "Learn More",
}: {
    className?: string;
    title: string;
    description: string;
    header?: ReactNode;
    icon?: ReactNode;
    href?: string;
    cta?: string;
}) => {
    return (
        <div
            className={cn(
                "row-span-1 rounded-2xl border border-neutral-200 group/bento hover:border-tmt-orange/40 transition-all duration-500 overflow-hidden relative bg-white h-auto min-h-[350px] md:min-h-0 md:h-full hover:shadow-2xl hover:shadow-black/10 hover:-translate-y-1",
                className
            )}
        >
            <div className="h-full w-full absolute inset-0 z-0">
                {header}
                {/* Enhanced gradient with richer depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 z-10 transition-all duration-500 group-hover/bento:from-black/95 group-hover/bento:via-black/50" />
            </div>

            <div className="absolute top-6 left-6 z-20 transition-all duration-300 group-hover/bento:scale-110">
                {icon}
            </div>

            <div className="absolute bottom-6 left-6 z-20 pr-6">
                <h3 className="font-heading font-bold text-2xl text-white mb-2 uppercase tracking-wide group-hover/bento:text-tmt-orange transition-colors duration-300">
                    {title}
                </h3>
                <p className="font-sans font-normal text-neutral-300 text-sm mb-4 max-w-[90%] group-hover/bento:text-neutral-200 transition-colors">
                    {description}
                </p>
                {href && (
                    <Link href={href} className="inline-flex items-center text-tmt-orange text-sm font-semibold tracking-wider hover:underline gap-1 group/cta">
                        {cta} <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
                    </Link>
                )}
            </div>
        </div>
    );
};
