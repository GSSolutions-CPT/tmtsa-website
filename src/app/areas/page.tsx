import { TARGET_AREAS } from "@/data/areas";
import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Service Areas | Cape Town Coverage",
    description: "The Maintenance Team serves the Atlantic Seaboard, Northern Suburbs, Southern Suburbs, Winelands, and City Bowl areas of Cape Town.",
};

export default function AreasPage() {
    return (
        <main className="min-h-screen bg-zinc-50 text-zinc-900">
            <div className="pt-32 pb-16 container mx-auto px-4 text-center">
                <h1 className="font-heading font-black text-5xl md:text-7xl mb-6 text-zinc-900 uppercase">
                    Areas We <span className="text-tmt-orange">Serve</span>
                </h1>
                <p className="max-w-2xl mx-auto text-xl text-zinc-500 font-light">
                    Providing specialized waterproofing, painting, and structural repair services to the Western Cape&apos;s most prestigious properties.
                </p>
            </div>

            <section className="pb-24 px-4 container mx-auto">
                <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto">
                    {TARGET_AREAS.map((region, idx) => (
                        <div key={idx} className="bg-white p-8 md:p-12 rounded-none shadow-xl shadow-zinc-200/50 border-l-4 border-tmt-orange flex flex-col md:flex-row gap-8 items-start">
                            <div className="md:w-1/3">
                                <h2 className="font-heading font-bold text-3xl text-zinc-900 mb-2">{region.region}</h2>
                                <div className="h-1 w-20 bg-tmt-orange mb-4" />
                                <p className="text-zinc-500 text-sm font-medium uppercase tracking-wide">{region.description}</p>
                            </div>

                            <div className="md:w-2/3">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {region.areas.map((area, aIdx) => {
                                        const slug = area.toLowerCase().replace(/\s+/g, '-');
                                        return (
                                            <Link href={`/areas/${slug}`} key={aIdx} className="group flex items-center gap-3 p-4 bg-zinc-50 hover:bg-zinc-100 transition-colors border border-zinc-100">
                                                <MapPin className="w-5 h-5 text-tmt-orange group-hover:scale-110 transition-transform" />
                                                <span className="font-bold text-zinc-700">{area}</span>
                                                <ArrowRight className="w-4 h-4 text-zinc-300 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <h3 className="font-heading text-3xl font-bold mb-6">Don&apos;t see your area listed?</h3>
                    <p className="text-zinc-600 mb-8">We service the entire Greater Cape Town area. Contact us for a specialized quote.</p>
                    <Link href="/contact" className="inline-block bg-zinc-900 text-white px-8 py-4 font-bold rounded-none hover:bg-tmt-orange transition-colors uppercase tracking-wider">
                        Contact Our Team
                    </Link>
                </div>
            </section>
        </main>
    );
}
