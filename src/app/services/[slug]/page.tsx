import { PageHero } from "@/components/ui/PageHero";
import { getServiceBySlug, SERVICE_LOCATIONS } from "@/data/services";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";

// Force static generation for these paths
export async function generateStaticParams() {
    return SERVICE_LOCATIONS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const service = getServiceBySlug(resolvedParams.slug);

    if (!service) {
        return {
            title: "Service Not Found",
        };
    }

    return {
        title: `${service.title} | The Maintenance Team`,
        description: service.description,
        keywords: service.keywords,
    };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const service = getServiceBySlug(resolvedParams.slug);

    if (!service) {
        notFound();
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.service,
        "provider": {
            "@type": "HomeAndConstructionBusiness",
            "name": "The Maintenance Team",
            "image": "https://tmtsa.vercel.app/images/tmt-logo-2026.png", // Correct logo path
            "telephone": "+27766300879",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": service.location,
                "addressRegion": "Western Cape",
                "addressCountry": "ZA"
            }
        },
        "areaServed": {
            "@type": "City",
            "name": service.location
        },
        "description": service.description
    };

    return (
        <main className="min-h-screen bg-white text-tmt-dark selection:bg-tmt-orange selection:text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Unique Page Hero */}
            <PageHero
                title={<span>{service.service} <span className="text-tmt-orange">Services</span></span>}
                subtitle={service.title}
                imageSrc={service.heroImage || "/images/hero-services-gold.png"}
                imageAlt={service.service}
            />

            {/* Content Section */}
            <section className="py-20 container mx-auto px-4 max-w-4xl">
                {/* Structured Data: Common Signs */}
                {service.structuredData?.commonSigns && (
                    <div className="mb-16">
                        <h3 className="font-heading font-bold text-2xl mb-8 uppercase tracking-wide">Signs You Need This Service</h3>
                        <div className="grid gap-6 md:grid-cols-2">
                            {service.structuredData.commonSigns.map((sign, idx) => (
                                <div key={idx} className="bg-red-50/50 p-6 rounded-lg border border-red-100 flex gap-4 items-start">
                                    <div className="bg-red-100 p-3 rounded-full shrink-0 text-red-600">
                                        <AlertTriangle className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-red-900 mb-1">{sign.title}</h4>
                                        <p className="text-sm text-red-800/80 leading-relaxed">{sign.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div
                    className="prose prose-lg prose-headings:font-heading prose-headings:font-bold prose-headings:uppercase prose-headings:tracking-wide prose-p:text-neutral-600 prose-li:text-neutral-600 prose-strong:text-black prose-img:rounded-sm prose-img:shadow-xl prose-img:border prose-img:border-black/5 max-w-none"
                    dangerouslySetInnerHTML={{ __html: service.content }}
                />

                {/* Structured Data: Process Steps */}
                {service.structuredData?.processSteps && (
                    <div className="mt-16 mb-16">
                        <h3 className="font-heading font-bold text-2xl mb-8 uppercase tracking-wide">Our Restoration Process</h3>
                        <div className="grid gap-8 md:grid-cols-2">
                            {service.structuredData.processSteps.map((step, idx) => (
                                <div key={idx} className="bg-zinc-50 p-6 border-l-4 border-tmt-orange rounded-r-lg shadow-sm">
                                    <span className="text-tmt-orange font-bold text-lg mb-2 block">Step 0{idx + 1}</span>
                                    <h4 className="font-bold text-xl mb-3">{step.title}</h4>
                                    <p className="text-zinc-600 leading-relaxed">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Structured Data: Features */}
                {service.structuredData?.features && (
                    <div className="mt-16 mb-16 bg-neutral-900 text-white p-12 -mx-4 md:-mx-12 rounded-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-tmt-orange opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />

                        <h3 className="font-heading font-bold text-2xl mb-8 uppercase tracking-wide relative z-10">Why Choose TMT?</h3>
                        <div className="grid gap-6 md:grid-cols-2 relative z-10">
                            {service.structuredData.features.map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-4">
                                    <div className="bg-white/10 p-2 rounded-full shrink-0 mt-1">
                                        <svg className="w-5 h-5 text-tmt-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-white mb-1">{feature.title}</h4>
                                        {feature.description && <p className="text-neutral-400 text-sm">{feature.description}</p>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Structured Data: FAQs */}
                {service.structuredData?.faqs && (
                    <div className="mt-16 mb-16">
                        <h3 className="font-heading font-bold text-2xl mb-8 uppercase tracking-wide">Frequently Asked Questions</h3>
                        <div className="space-y-4">
                            {service.structuredData.faqs.map((faq, idx) => (
                                <div key={idx} className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                                    <h4 className="font-bold text-lg text-tmt-dark mb-2 flex items-center gap-2">
                                        {faq.question}
                                    </h4>
                                    <p className="text-zinc-600 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="mt-16 border-t border-neutral-100 pt-12 text-center">
                    <h3 className="font-heading font-bold text-3xl mb-6 uppercase">Ready to Start?</h3>
                    <p className="text-neutral-500 mb-8 max-w-xl mx-auto">Contact us today for a free consultation and quote for your {service.service} project.</p>
                    <Link href="/contact" className="inline-block px-10 py-4 bg-tmt-dark text-white font-bold uppercase tracking-widest hover:bg-tmt-orange hover:text-white transition-colors duration-300">
                        Get a Quote
                    </Link>
                </div>

                {/* Related Services Navigation */}
                <div className="mt-24 pt-12 border-t border-neutral-200">
                    <h3 className="font-heading font-bold text-sm text-neutral-400 uppercase tracking-widest mb-8 text-center">Explore Other Services</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/services/waterproofing" className="px-6 py-3 border border-neutral-200 rounded-full text-sm font-bold text-neutral-600 hover:border-tmt-orange hover:text-tmt-orange transition-colors">Waterproofing</Link>
                        <Link href="/services/painting-roofing" className="px-6 py-3 border border-neutral-200 rounded-full text-sm font-bold text-neutral-600 hover:border-tmt-orange hover:text-tmt-orange transition-colors">Roof Painting</Link>
                        <Link href="/services/structural-repairs" className="px-6 py-3 border border-neutral-200 rounded-full text-sm font-bold text-neutral-600 hover:border-tmt-orange hover:text-tmt-orange transition-colors">Structural Repairs</Link>
                        <Link href="/services/renovations" className="px-6 py-3 border border-neutral-200 rounded-full text-sm font-bold text-neutral-600 hover:border-tmt-orange hover:text-tmt-orange transition-colors">Renovations</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
