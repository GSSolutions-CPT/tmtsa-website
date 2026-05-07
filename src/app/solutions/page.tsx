import { SITE_DATA } from "@/lib/siteData";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Solutions | Residential, Commercial & Body Corporate",
    description: "Tailored maintenance strategies for every property type. From private residences to large-scale industrial complexes across Cape Town.",
};

export default function SolutionsPage() {
    return (
        <main className="min-h-screen bg-zinc-50 text-zinc-900">
            {/* Hero Section */}
            <div className="pt-32 pb-16 container mx-auto px-4 text-center">
                <h1 className="font-heading font-black text-5xl md:text-7xl mb-6 text-zinc-900 uppercase">
                    Our <span className="text-tmt-orange">Solutions</span>
                </h1>
                <p className="max-w-2xl mx-auto text-xl text-zinc-500 font-light">
                    Tailored maintenance strategies for every property type. From private residences to large-scale industrial complexes.
                </p>
            </div>

            {/* Solutions Grid */}
            <section className="pb-24 px-4 container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SITE_DATA.solutions.map((solution, idx) => (
                        <Link
                            href={solution.href}
                            key={idx}
                            className="group bg-white rounded-none shadow-xl shadow-zinc-200/50 hover:shadow-2xl hover:shadow-zinc-200/70 transition-all duration-300 border-t-4 border-tmt-orange flex flex-col h-full overflow-hidden"
                        >
                            {/* Image */}
                            <div className="relative h-48 w-full overflow-hidden">
                                <Image
                                    src={solution.heroImage}
                                    alt={solution.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                            </div>

                            {/* Content */}
                            <div className="p-8 flex flex-col flex-grow">
                                <h2 className="font-heading font-bold text-2xl text-zinc-900 mb-2 group-hover:text-tmt-orange transition-colors">
                                    {solution.title}
                                </h2>
                                <p className="text-zinc-500 text-sm font-medium uppercase tracking-wide mb-4 line-clamp-2">
                                    {solution.description}
                                </p>
                                <p className="text-zinc-600 mb-6 line-clamp-3 flex-grow">
                                    {solution.introText}
                                </p>

                                {/* Benefits Preview */}
                                <div className="space-y-2 mb-6">
                                    {solution.benefits.slice(0, 2).map((benefit, bIdx) => (
                                        <div key={bIdx} className="flex items-center gap-2 text-sm text-zinc-500">
                                            <CheckCircle2 className="w-4 h-4 text-tmt-orange flex-shrink-0" />
                                            <span>{benefit}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex items-center gap-2 text-sm font-bold text-tmt-orange uppercase tracking-wider mt-auto">
                                    View Solution <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <h3 className="font-heading text-3xl font-bold mb-6">Need a Custom Maintenance Plan?</h3>
                    <p className="text-zinc-600 mb-8 max-w-2xl mx-auto">
                        We understand that every property has unique requirements. Our team can assess your specific needs and tailor a solution that fits your budget and timeline.
                    </p>
                    <Link href="/contact" className="inline-block bg-zinc-900 text-white px-8 py-4 font-bold rounded-none hover:bg-tmt-orange transition-colors uppercase tracking-wider">
                        Get a Free Assessment
                    </Link>
                </div>
            </section>
        </main>
    );
}
