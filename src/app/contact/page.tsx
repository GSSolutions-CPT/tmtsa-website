import { BadgeCheck, Mail, MapPin, ShieldCheck, MessageCircle } from "lucide-react";

export const metadata = {
    title: "Contact Us | The Maintenance Team",
    description: "Get a free, no-obligation quote for waterproofing, painting, and renovations in Cape Town.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-tmt-dark text-white pt-24 pb-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase mb-6">Get a Quote</h1>
                    <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                        Industrial precision for your residential needs. Contact us today for a site assessment.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8 bg-neutral-900/50 p-8 rounded-2xl border border-white/10">
                        <h2 className="font-heading text-3xl font-bold text-tmt-orange mb-8">Contact Details</h2>

                        <div className="flex items-start gap-4">
                            <MessageCircle className="w-6 h-6 text-tmt-orange shrink-0 mt-1" />
                            <div>
                                <h3 className="font-bold text-lg mb-1">WhatsApp Line</h3>
                                <a href="https://wa.me/27766300879" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-tmt-orange transition-colors">076 630 0879</a>
                                <p className="text-sm text-neutral-500 mt-1">Strictly WhatsApp, no phone calls</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Mail className="w-6 h-6 text-tmt-orange shrink-0 mt-1" />
                            <div className="w-full">
                                <h3 className="font-bold text-lg mb-4">Leadership Team</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="bg-neutral-800/50 p-4 rounded-lg">
                                        <p className="font-bold text-white text-lg">Sage Seeley</p>
                                        <p className="text-sm text-tmt-orange mb-2">CEO & Founder</p>
                                        <a href="mailto:Sage@TheMaintenanceTeamSA.co.za" className="text-sm hover:text-white text-neutral-300 block mb-1">Sage@TheMaintenanceTeamSA.co.za</a>
                                        <a href="tel:+27791612160" className="text-sm hover:text-white text-neutral-300 block">079 161 2160</a>
                                    </div>
                                    <div className="bg-neutral-800/50 p-4 rounded-lg">
                                        <p className="font-bold text-white text-lg">Levonde Roos</p>
                                        <p className="text-sm text-tmt-orange mb-2">COO</p>
                                        <a href="mailto:Lavonde@TheMaintenanceTeamSA.co.za" className="text-sm hover:text-white text-neutral-300 block mb-1">Lavonde@TheMaintenanceTeamSA.co.za</a>
                                        <a href="tel:+27606727343" className="text-sm hover:text-white text-neutral-300 block">060 672 7343</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Mail className="w-6 h-6 text-tmt-orange shrink-0 mt-1" />
                            <div>
                                <h3 className="font-bold text-lg mb-2">Departments</h3>
                                <div className="space-y-2 text-sm text-neutral-300">
                                    <a href="mailto:Admin@TheMaintenanceTeamSA.co.za" className="hover:text-tmt-orange block">Admin@TheMaintenanceTeamSA.co.za</a>
                                    <a href="mailto:Info@TheMaintenanceTeamSA.co.za" className="hover:text-tmt-orange block">Info@TheMaintenanceTeamSA.co.za</a>
                                    <a href="mailto:Accounts@TheMaintenanceTeamSA.co.za" className="hover:text-tmt-orange block">Accounts@TheMaintenanceTeamSA.co.za</a>
                                    <a href="mailto:Sales@TheMaintenanceTeamSA.co.za" className="hover:text-tmt-orange block">Sales@TheMaintenanceTeamSA.co.za</a>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <MapPin className="w-6 h-6 text-tmt-orange shrink-0 mt-1" />
                            <div>
                                <h3 className="font-bold text-lg mb-1">Service Areas</h3>
                                <p className="text-neutral-300">Durbanville, Blouberg, Table View, Camps Bay, Darling, and Greater Cape Town.</p>
                            </div>
                        </div>

                        <div className="mt-12 pt-12 border-t border-white/10">
                            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                                <ShieldCheck className="w-5 h-5 text-tmt-orange" />
                                Why Choose TMT?
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-sm text-neutral-300">
                                    <BadgeCheck className="w-5 h-5 text-green-500" />
                                    <span>Satisfaction Guarantee on all workmanship</span>
                                </li>
                                <li className="flex items-center gap-3 text-sm text-neutral-300">
                                    <BadgeCheck className="w-5 h-5 text-green-500" />
                                    <span>10-Year Waterproofing Warranty</span>
                                </li>
                                <li className="flex items-center gap-3 text-sm text-neutral-300">
                                    <BadgeCheck className="w-5 h-5 text-green-500" />
                                    <span>No hidden costs - Itemized quotes</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* WhatsApp CTA */}
                    <div className="bg-neutral-900 p-8 rounded-2xl border border-white/10 flex flex-col justify-center items-center text-center space-y-6">
                        <MessageCircle className="w-20 h-20 text-green-500" />
                        <div>
                            <h2 className="font-heading text-3xl font-bold text-white mb-4">Chat with Us on WhatsApp</h2>
                            <p className="text-neutral-400 mb-8 max-w-sm mx-auto">
                                The fastest way to get a response. Send us a message on WhatsApp and we&apos;ll get back to you immediately to arrange your assessment and quote.
                            </p>
                        </div>
                        <a 
                            href="https://wa.me/27766300879" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full transition-all hover:scale-105"
                        >
                            <MessageCircle className="w-6 h-6" />
                            Message on WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
