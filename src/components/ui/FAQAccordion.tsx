"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

type FAQItem = {
    question: string;
    answer: string;
    category: string;
};

interface FAQAccordionProps {
    items: FAQItem[];
}

export const FAQAccordion = ({ items }: FAQAccordionProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="space-y-0 border-t border-black/10">
            {items.map((faq, index) => (
                <div
                    key={index}
                    className="border-b border-black/10 group"
                >
                    <button
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="w-full flex items-center justify-between py-8 text-left hover:bg-neutral-50 transition-colors px-4 -mx-4 rounded-sm"
                    >
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                            <span className="text-xs font-bold text-tmt-orange uppercase tracking-widest min-w-[120px]">
                                {faq.category}
                            </span>
                            <span className={cn(
                                "font-heading font-bold text-xl md:text-2xl transition-colors duration-300",
                                openIndex === index ? "text-black" : "text-neutral-600 group-hover:text-black"
                            )}>
                                {faq.question}
                            </span>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                            <div className={cn(
                                "w-8 h-8 flex items-center justify-center rounded-full border border-neutral-200 transition-all duration-300",
                                openIndex === index ? "bg-tmt-dark border-tmt-dark text-white" : "text-neutral-400 group-hover:border-tmt-orange group-hover:text-tmt-orange"
                            )}>
                                {openIndex === index ? <Minus size={14} /> : <Plus size={14} />}
                            </div>
                        </div>
                    </button>

                    <AnimatePresence>
                        {openIndex === index && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <div className="pb-8 pl-0 md:pl-[152px] pr-4 text-neutral-500 text-lg leading-relaxed font-sans">
                                    {faq.answer}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
};
