"use client";

import { PageHero } from "@/components/ui/PageHero";
import { CheckCircle2, MapPin } from "lucide-react";
import Link from "next/link";

interface ContentPageProps {
    title: string;
    subtitle?: string;
    heroImage: string;
    introText: string;
    benefits: string[];
    ctaLink?: string;
    ctaText?: string;
    serviceArea?: {
        image?: string;
        locations: string[];
    };
    children?: React.ReactNode;
}

export const ContentPage = ({
    title,
    subtitle,
    heroImage,
    introText,
    benefits,
    ctaLink = "/contact",
    ctaText = "Get a Free Quote",

    children
}: ContentPageProps) => {
    return (
        <main className="min-h-screen bg-tmt-light">
            {/* Hero Section */}
            <PageHero
                title={title}
                subtitle={subtitle}
                imageSrc={heroImage}
                imageAlt={title}
                size="compact"
            />

            {/* Main Content Grid */}
            <div className="container mx-auto px-4 py-16 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Left Column: Core Content (8 cols) */}
                    <div className="lg:col-span-8">
                        <section className="prose prose-lg prose-zinc max-w-none">
                            <h2 className="text-3xl font-heading font-bold text-tmt-dark mb-6">Overview</h2>
                            <p className="lead text-xl text-neutral-600 mb-8 leading-relaxed font-light">
                                {introText}
                            </p>

                            {/* Children content (Optional extra HTML) */}
                            {children && <div className="mt-8">{children}</div>}
                        </section>

                        {/* Benefits Grid */}
                        <section className="mt-16">
                            <h3 className="text-2xl font-heading font-bold text-tmt-dark mb-8">Key Benefits</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {benefits.map((benefit, idx) => (
                                    <div key={idx} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-neutral-100 hover:border-tmt-orange/30 transition-colors">
                                        <CheckCircle2 className="w-6 h-6 text-tmt-orange flex-shrink-0 mt-1" />
                                        <span className="font-medium text-lg text-neutral-800">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* CTA Bar */}
                        <section className="mt-16 bg-neutral-900 rounded-2xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group">
                            <div className="relative z-10">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready to get started?</h3>
                                <p className="text-neutral-400">Our team is ready to assist you with a professional assessment.</p>
                            </div>
                            <Link href={ctaLink} className="relative z-10 bg-tmt-orange text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-tmt-orange transition-all duration-300 shadow-lg whitespace-nowrap">
                                {ctaText}
                            </Link>

                            {/* Background Effect */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-tmt-orange/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:bg-tmt-orange/20 transition-all"></div>
                        </section>
                    </div>

                    {/* Right Column: Sidebar (4 cols) */}
                    <div className="lg:col-span-4 space-y-8">
                        {/* Service Area Box */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 sticky top-24">
                            <h4 className="font-heading font-bold text-xl mb-6 flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-tmt-orange" />
                                Service Areas
                            </h4>
                            <p className="text-neutral-500 text-sm mb-6">
                                We proudly serve the greater Cape Town area, including:
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["Atlantic Seaboard", "Southern Suburbs", "City Bowl", "Northern Suburbs", "Winelands"].map((area) => (
                                    <Link key={area} href={`/areas/${area.toLowerCase().replace(' ', '-')}`} className="px-3 py-1.5 bg-neutral-50 text-neutral-600 text-xs font-bold uppercase tracking-wide rounded-md hover:bg-tmt-orange hover:text-white transition-colors border border-neutral-100">
                                        {area}
                                    </Link>
                                ))}
                            </div>

                            <div className="mt-8 pt-8 border-t border-neutral-100">
                                <h4 className="font-heading font-bold text-xl mb-4">Need Help?</h4>
                                <p className="text-neutral-500 text-sm mb-4">Chat with us on WhatsApp directly.</p>
                                <a href="https://wa.me/27766300879" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-green-600 hover:text-green-700 transition-colors block mb-2">
                                    076 630 0879
                                </a>
                                <a href="mailto:Info@TheMaintenanceTeamSA.co.za" className="text-neutral-500 hover:text-tmt-orange transition-colors text-sm">
                                    Info@TheMaintenanceTeamSA.co.za
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
