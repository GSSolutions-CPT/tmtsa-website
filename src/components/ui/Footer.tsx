'use client';

import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="bg-zinc-950 text-white pt-16 md:pt-24 pb-8 border-t border-zinc-800 font-sans">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-8 mb-16">
                    {/* 1. Brand & Newsletter (Spans 2 cols on LG) */}
                    <div className="lg:col-span-2 space-y-8 pr-0 lg:pr-12">
                        <Link href="/" className="block relative h-10 w-40">
                            <Image
                                src="/images/tmt-logo-footer-2026.png"
                                alt="The Maintenance Team Logo"
                                fill
                                className="object-contain object-left"
                            />
                        </Link>
                        <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
                            Cape Town&apos;s leading specialists in structural repairs, waterproofing, and industrial coating solutions. Protecting high-value assets since 2008.
                        </p>

                        {/* Newsletter CTA */}
                        <div className="pt-4">
                            <h5 className="text-white font-bold text-sm mb-3">Expert insights in your inbox</h5>
                            <form
                                onSubmit={async (e) => {
                                    e.preventDefault();
                                    const form = e.target as HTMLFormElement;
                                    const emailInput = form.querySelector('input[type="email"]') as HTMLInputElement;
                                    const email = emailInput?.value;
                                    const btn = form.querySelector('button');

                                    if (email && btn) {
                                        const originalText = btn.innerText;
                                        btn.disabled = true;
                                        btn.innerText = '...';
                                        try {
                                            await fetch('/api/newsletter', {
                                                method: 'POST',
                                                headers: { 'Content-Type': 'application/json' },
                                                body: JSON.stringify({ email }),
                                            });
                                            alert('Subscribed!');
                                            form.reset();
                                        } catch (err) {
                                            console.error(err);
                                        } finally {
                                            btn.disabled = false;
                                            btn.innerText = originalText;
                                        }
                                    }
                                }}
                                className="flex gap-2"
                            >
                                <input
                                    id="newsletter-email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    placeholder="Enter your email"
                                    required
                                    className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-tmt-orange transition-colors text-white placeholder:text-zinc-600"
                                />
                                <button type="submit" className="bg-tmt-orange text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-orange-600 transition-colors">
                                    Join
                                </button>
                            </form>
                            <p className="text-zinc-600 text-[10px] mt-2">No spam. Unsubscribe anytime.</p>
                        </div>
                    </div>

                    {/* 2. Solutions */}
                    <div>
                        <h4 className="font-heading font-bold text-sm mb-6 uppercase tracking-widest text-zinc-500">Solutions</h4>
                        <ul className="space-y-3 text-zinc-400 text-sm">
                            <li><Link href="/solutions/residential" className="hover:text-tmt-orange transition-colors">Residential</Link></li>
                            <li><Link href="/solutions/commercial" className="hover:text-tmt-orange transition-colors">Commercial</Link></li>
                            <li><Link href="/solutions/body-corporate" className="hover:text-tmt-orange transition-colors">Body Corporate</Link></li>
                            <li><Link href="/solutions/estates" className="hover:text-tmt-orange transition-colors">Estates</Link></li>
                            <li><Link href="/solutions/industrial" className="hover:text-tmt-orange transition-colors">Industrial</Link></li>
                            <li><Link href="/solutions/rental-agents" className="hover:text-tmt-orange transition-colors">Rental Agents</Link></li>
                        </ul>
                    </div>

                    {/* 3. Services */}
                    <div>
                        <h4 className="font-heading font-bold text-sm mb-6 uppercase tracking-widest text-zinc-500">Services</h4>
                        <ul className="space-y-3 text-zinc-400 text-sm">
                            <li><Link href="/services/waterproofing" className="hover:text-tmt-orange transition-colors">Waterproofing</Link></li>
                            <li><Link href="/services/painting-roofing" className="hover:text-tmt-orange transition-colors">Roof Painting</Link></li>
                            <li><Link href="/services/structural-repairs" className="hover:text-tmt-orange transition-colors">Structural Repairs</Link></li>
                            <li><Link href="/services/paving-cleaning" className="hover:text-tmt-orange transition-colors">Cleaning</Link></li>
                            <li><Link href="/services/plumbing" className="hover:text-tmt-orange transition-colors">Plumbing</Link></li>
                            <li><Link href="/services/renovations" className="hover:text-tmt-orange transition-colors">Renovations</Link></li>
                        </ul>
                    </div>

                    {/* 4. Prime Areas */}
                    <div className="hidden md:block">
                        <Link href="/areas" className="font-heading font-bold text-sm mb-6 uppercase tracking-widest text-zinc-500 block hover:text-tmt-orange transition-colors">Areas</Link>
                        <ul className="space-y-3 text-zinc-400 text-sm">
                            <li><Link href="/areas/atlantic-seaboard" className="hover:text-tmt-orange transition-colors">Atlantic Seaboard</Link></li>
                            <li><Link href="/areas/southern-suburbs" className="hover:text-tmt-orange transition-colors">Southern Suburbs</Link></li>
                            <li><Link href="/areas/northern-suburbs" className="hover:text-tmt-orange transition-colors">Northern Suburbs</Link></li>
                            <li><Link href="/areas/winelands" className="hover:text-tmt-orange transition-colors">Winelands</Link></li>
                            <li><Link href="/areas/city-bowl" className="hover:text-tmt-orange transition-colors">City Bowl</Link></li>
                        </ul>
                    </div>

                    {/* 5. Company & Contact */}
                    <div>
                        <h4 className="font-heading font-bold text-sm mb-6 uppercase tracking-widest text-zinc-500">Company</h4>
                        <ul className="space-y-3 text-zinc-400 text-sm mb-8">
                            <li><Link href="/about" className="hover:text-tmt-orange transition-colors">About Us</Link></li>
                            <li><Link href="/blog" className="hover:text-tmt-orange transition-colors">Insights</Link></li>
                            <li><Link href="/contact" className="hover:text-tmt-orange transition-colors">Contact</Link></li>
                            <li><Link href="/faq" className="hover:text-tmt-orange transition-colors">FAQs</Link></li>
                        </ul>
                        <div className="flex gap-4">
                            <Link href="#" className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-tmt-orange hover:text-white transition-all" aria-label="Visit our Facebook page"><Facebook className="w-4 h-4" /></Link>
                            <Link href="#" className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-tmt-orange hover:text-white transition-all" aria-label="Visit our Instagram profile"><Instagram className="w-4 h-4" /></Link>
                            <Link href="#" className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-tmt-orange hover:text-white transition-all" aria-label="Visit our LinkedIn profile"><Linkedin className="w-4 h-4" /></Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-zinc-600 text-xs">
                        &copy; {new Date().getFullYear()} The Maintenance Team (Pty) Ltd.
                    </p>
                    <div className="flex gap-6 text-xs text-zinc-600">
                        <Link href="/privacy" className="hover:text-zinc-400">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-zinc-400">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
