"use client";

import { useState, useEffect } from "react";
import { Cookie } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

declare global {
    interface Window {
        gtag?: (...args: any[]) => void;
    }
}

export const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie_consent");
        // If not explicitly granted or denied, show banner
        if (consent !== "granted" && consent !== "denied") {
            // Small delay so it doesn't appear instantaneously on navigation
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookie_consent", "granted");
        setIsVisible(false);

        // Update Google Tag consent dynamically
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("consent", "update", {
                ad_user_data: "granted",
                ad_personalization: "granted",
                ad_storage: "granted",
                analytics_storage: "granted",
            });
        }
    };

    const declineCookies = () => {
        localStorage.setItem("cookie_consent", "denied");
        setIsVisible(false);

        // Explicitly set to denied again if previously granted (e.g. if we add a preferences center later)
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("consent", "update", {
                ad_user_data: "denied",
                ad_personalization: "denied",
                ad_storage: "denied",
                analytics_storage: "denied",
            });
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 150, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 150, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 pointer-events-none"
                >
                    <div className="max-w-5xl mx-auto rounded-2xl bg-[#121212]/95 border border-zinc-800 p-6 md:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-2xl backdrop-blur-xl pointer-events-auto">
                        <div className="flex items-start gap-4">
                            <div className="bg-tmt-orange/10 p-3 rounded-full flex-shrink-0 animate-pulse">
                                <Cookie className="w-6 h-6 text-tmt-orange" />
                            </div>
                            <div className="text-left">
                                <h3 className="text-white font-heading text-lg font-bold mb-2">
                                    We value your privacy
                                </h3>
                                <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
                                    We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking <strong className="text-white">"Accept All"</strong>, you consent to our use of cookies in accordance with our policies.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-3 shrink-0">
                            <button
                                onClick={declineCookies}
                                className="px-6 py-3 rounded-full text-zinc-300 bg-zinc-800 hover:bg-zinc-700 hover:text-white transition-colors text-sm font-medium whitespace-nowrap w-full sm:w-auto"
                            >
                                Use Necessary Only
                            </button>
                            <button
                                onClick={acceptCookies}
                                className="px-6 py-3 rounded-full text-[#121212] bg-tmt-orange hover:bg-[#E5BE3E] hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all text-sm font-bold whitespace-nowrap w-full sm:w-auto shadow-[0_0_20px_rgba(212,175,55,0.3)] shadow-tmt-orange/20"
                            >
                                Accept All
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
