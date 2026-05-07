import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Star, ShieldCheck, Users } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | The Maintenance Team",
    description: "Learn about Cape Town's trusted waterproofing & painting specialists. Over 10 years of experience serving residential, commercial, and body corporate clients.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-zinc-50 text-zinc-900">
            {/* Hero Section */}
            <div className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center text-center px-4">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/hero-executive-gold.png" // Using existing premium asset
                        alt="The Maintenance Team Leadership"
                        fill
                        className="object-cover brightness-50"
                        priority
                    />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto text-white">
                    <h1 className="font-heading font-black text-5xl md:text-7xl mb-6 uppercase tracking-tight">
                        About <span className="text-tmt-orange">Us</span>
                    </h1>
                    <p className="text-xl md:text-2xl font-light text-zinc-100 max-w-2xl mx-auto leading-relaxed">
                        Cape Town&apos;s Trusted Waterproofing & Painting Experts
                    </p>
                </div>
            </div>

            {/* Introduction Section */}
            <section className="py-24 px-4 container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div>
                            <h2 className="font-heading font-bold text-4xl text-zinc-900 mb-4 uppercase">
                                Who We <span className="text-tmt-orange">Are</span>
                            </h2>
                            <div className="h-1 w-24 bg-tmt-orange rounded-full" />
                        </div>
                        <div className="text-zinc-600 space-y-6 text-lg leading-relaxed">
                            <p>
                                The Maintenance Team is a Cape Town–based home improvement company with over 10 years of industry experience. We are known for our dependable service, attention to detail, and a skilled team that completes projects on time and to a high standard.
                            </p>
                            <p>
                                We are a trusted choice for homeowners, body corporates, and commercial clients across Cape Town, delivering reliable workmanship and practical solutions that improve and protect properties.
                            </p>
                        </div>
                    </div>
                    <div className="relative h-[500px] rounded-none overflow-hidden shadow-2xl border-4 border-white">
                        <Image
                            src="/images/bento-cleaning-bright.png" // Professional team/work image
                            alt="Professional Maintenance Team"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-zinc-900/90 p-8 text-white backdrop-blur-sm">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-tmt-orange rounded-full text-zinc-900">
                                    <Star className="w-6 h-6 fill-current" />
                                </div>
                                <div>
                                    <p className="font-bold text-xl">10+ Years Experience</p>
                                    <p className="text-zinc-400 text-sm">Serving Greater Cape Town</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission / Focus Section */}
            <section className="py-24 bg-zinc-900 text-white">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h2 className="font-heading font-bold text-4xl mb-12 uppercase">Our <span className="text-tmt-orange">Focus</span></h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        <div className="bg-white/5 p-8 rounded-lg border border-white/10 hover:border-tmt-orange/50 transition-colors">
                            <ShieldCheck className="w-10 h-10 text-tmt-orange mb-6" />
                            <h3 className="font-bold text-xl mb-3">Quality Service</h3>
                            <p className="text-zinc-400">Consistently delivering high-quality service using trusted materials and proven methods.</p>
                        </div>
                        <div className="bg-white/5 p-8 rounded-lg border border-white/10 hover:border-tmt-orange/50 transition-colors">
                            <Users className="w-10 h-10 text-tmt-orange mb-6" />
                            <h3 className="font-bold text-xl mb-3">Integrity</h3>
                            <p className="text-zinc-400">Our goal is simple: to be a trusted name in home improvement built on quality workmanship.</p>
                        </div>
                        <div className="bg-white/5 p-8 rounded-lg border border-white/10 hover:border-tmt-orange/50 transition-colors">
                            <CheckCircle2 className="w-10 h-10 text-tmt-orange mb-6" />
                            <h3 className="font-bold text-xl mb-3">Turnkey Solutions</h3>
                            <p className="text-zinc-400">From waterproofing to renovations, we provide complete solutions within your budget.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Summary */}
            <section className="py-24 container mx-auto px-4 text-center">
                <h2 className="font-heading font-bold text-4xl text-zinc-900 mb-12 uppercase">
                    What We <span className="text-tmt-orange">Do</span>
                </h2>
                <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                    {[
                        "Waterproofing",
                        "Interior & Exterior Painting",
                        "Roofing Repairs",
                        "Plumbing",
                        "Bathroom Renovations",
                        "Kitchen Renovations",
                        "General Maintenance"
                    ].map((service, idx) => (
                        <span key={idx} className="px-6 py-3 bg-white border border-zinc-200 shadow-sm text-zinc-700 font-medium rounded-full uppercase tracking-wider text-sm">
                            {service}
                        </span>
                    ))}
                </div>

                <div className="mt-16">
                    <Link href="/contact" className="inline-block bg-tmt-orange text-zinc-900 px-10 py-5 font-bold rounded-none hover:bg-zinc-900 hover:text-white transition-all uppercase tracking-widest shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        Work With Us
                    </Link>
                </div>
            </section>
        </main>
    );
}
