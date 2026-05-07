"use client";

import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { SITE_DATA } from "@/lib/siteData";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    // Close mobile menu when route changes
    useEffect(() => {
        setMobileMenuOpen(false); // eslint-disable-line
        setActiveDropdown(null);
    }, [pathname]);

    const handleDropdownEnter = (menu: string) => setActiveDropdown(menu);
    const handleDropdownLeave = () => setActiveDropdown(null);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-b border-transparent",
                scrolled || mobileMenuOpen ? "bg-white/95 backdrop-blur-md border-zinc-200 py-4 shadow-sm" : "bg-transparent py-6"
            )}
            onMouseLeave={handleDropdownLeave}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="relative h-12 w-32 md:h-16 md:w-48 transition-transform hover:scale-105 z-50">
                    <Image
                        src={scrolled || mobileMenuOpen ? "/images/tmt-logo-2026.png" : "/images/tmt-logo-white-2026.png"}
                        alt="The Maintenance Team"
                        fill
                        sizes="(max-width: 768px) 128px, 192px"
                        className="object-contain"
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <div className={cn(
                    "hidden md:flex items-center gap-8 font-heading font-medium text-sm tracking-widest uppercase transition-colors",
                    scrolled ? "text-zinc-900" : "text-white"
                )}>
                    <Link href="/" className="hover:text-tmt-orange transition-colors">Home</Link>

                    {/* Services Dropdown */}
                    <div
                        className="relative group h-full py-2"
                        onMouseEnter={() => handleDropdownEnter('services')}
                    >
                        <Link href="/services" className="hover:text-tmt-orange transition-colors flex items-center gap-1">
                            Services <ChevronDown className="w-3 h-3" />
                        </Link>
                        {/* Mega Menu */}
                        {activeDropdown === 'services' && (
                            <div className="absolute top-full -left-10 w-[600px] bg-white rounded-xl shadow-xl border border-neutral-100 p-6 grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2">
                                {SITE_DATA.services.map((service) => (
                                    <Link key={service.slug} href={service.href} className="group/item flex items-start gap-4 p-3 rounded-lg hover:bg-neutral-50 transition-colors">
                                        <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                                            <Image src={service.heroImage} alt={service.title} fill className="object-cover" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-zinc-900 group-hover/item:text-tmt-orange transition-colors capitalize text-sm">{service.title}</div>
                                            <p className="text-zinc-500 text-xs normal-case tracking-normal mt-0.5 line-clamp-2">{service.description}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Solutions Dropdown */}
                    <div
                        className="relative group h-full py-2"
                        onMouseEnter={() => handleDropdownEnter('solutions')}
                    >
                        <Link href="/solutions" className="hover:text-tmt-orange transition-colors flex items-center gap-1">
                            Solutions <ChevronDown className="w-3 h-3" />
                        </Link>
                        {/* Mega Menu */}
                        {activeDropdown === 'solutions' && (
                            <div className="absolute top-full -left-10 w-[600px] bg-white rounded-xl shadow-xl border border-neutral-100 p-6 grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2">
                                {SITE_DATA.solutions.map((item) => (
                                    <Link key={item.slug} href={item.href} className="group/item flex items-start gap-4 p-3 rounded-lg hover:bg-neutral-50 transition-colors">
                                        <div className="relative w-16 h-12 rounded-lg overflow-hidden flex-shrink-0 border border-neutral-100">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src={item.heroImage}
                                                alt={item.title}
                                                className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                        <div>
                                            <div className="font-bold text-zinc-900 group-hover/item:text-tmt-orange transition-colors capitalize text-sm">{item.title}</div>
                                            <p className="text-zinc-500 text-xs normal-case tracking-normal mt-0.5 line-clamp-2">{item.description}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Areas Dropdown */}
                    <div
                        className="relative group h-full py-2"
                        onMouseEnter={() => handleDropdownEnter('areas')}
                    >
                        <Link href="/areas" className="hover:text-tmt-orange transition-colors flex items-center gap-1">
                            Areas <ChevronDown className="w-3 h-3" />
                        </Link>
                        {/* Mega Menu */}
                        {activeDropdown === 'areas' && (
                            <div className="absolute top-full -left-10 w-[600px] bg-white rounded-xl shadow-xl border border-neutral-100 p-6 grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2">
                                {SITE_DATA.areas.map((item) => (
                                    <Link key={item.slug} href={item.href} className="group/item flex items-start gap-4 p-3 rounded-lg hover:bg-neutral-50 transition-colors">
                                        <div className="relative w-16 h-12 rounded-lg overflow-hidden flex-shrink-0 border border-neutral-100">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src={item.heroImage}
                                                alt={item.title}
                                                className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                        <div>
                                            <div className="font-bold text-zinc-900 group-hover/item:text-tmt-orange transition-colors capitalize text-sm">{item.title}</div>
                                            <p className="text-zinc-500 text-xs normal-case tracking-normal mt-0.5 line-clamp-2">{item.description}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Tools Dropdown */}
                    <div
                        className="relative group h-full py-2"
                        onMouseEnter={() => handleDropdownEnter('tools')}
                    >
                        <Link href="/quote" className="hover:text-tmt-orange transition-colors flex items-center gap-1">
                            Tools <ChevronDown className="w-3 h-3" />
                        </Link>
                        {/* Mega Menu */}
                        {activeDropdown === 'tools' && (
                            <div className="absolute top-full -left-10 w-[400px] bg-white rounded-xl shadow-xl border border-neutral-100 p-6 grid grid-cols-1 gap-4 animate-in fade-in slide-in-from-top-2">
                                {SITE_DATA.tools.map((item) => (
                                    <Link key={item.href} href={item.href} className="group/item flex items-start gap-4 p-3 rounded-lg hover:bg-neutral-50 transition-colors">
                                        <div className="mt-1 p-2 bg-neutral-100 rounded-md group-hover/item:bg-tmt-orange/10 transition-colors">
                                            {/* Render icon dynamically if possible, else fallback */}
                                            {item.icon ? <item.icon className="w-5 h-5 text-zinc-600 group-hover/item:text-tmt-orange" /> : <div className="w-5 h-5 bg-tmt-orange rounded-full" />}
                                        </div>
                                        <div>
                                            <div className="font-bold text-zinc-900 group-hover/item:text-tmt-orange transition-colors text-sm">{item.title}</div>
                                            <p className="text-zinc-500 text-xs normal-case tracking-normal mt-0.5">{item.description}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link href="/about" className="hover:text-tmt-orange transition-colors">About</Link>
                    <Link href="/blog" className="hover:text-tmt-orange transition-colors">Blog</Link>
                    <Link href="/contact" className="bg-zinc-900 text-white px-6 py-2 font-bold hover:bg-tmt-orange transition-colors">
                        Get Quote
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className={cn(
                        "md:hidden flex items-center gap-2 relative z-[60] cursor-pointer font-bold uppercase tracking-widest text-xs border px-3 py-2 rounded transition-colors",
                        scrolled || mobileMenuOpen
                            ? "border-zinc-200 text-zinc-900 hover:bg-zinc-100"
                            : "border-white/30 text-white bg-black/20 backdrop-blur-sm hover:bg-black/40"
                    )}
                >
                    <span className="mt-0.5">Menu</span>
                    {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile Menu Overlay - Outside container for full-screen coverage */}
            <div className={cn(
                "fixed inset-0 bg-white z-[55] flex flex-col pt-32 px-6 transition-transform duration-500 ease-in-out md:hidden overflow-y-auto w-full h-screen",
                mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            )}>
                <div className="flex flex-col gap-6 text-xl font-heading font-bold text-zinc-900 uppercase tracking-wide max-w-lg mx-auto w-full">
                    <Link href="/" className="border-b border-zinc-100 pb-4 hover:text-tmt-orange transition-colors">Home</Link>

                    {/* Mobile Services */}
                    <div className="border-b border-zinc-100 pb-4">
                        <span className="text-tmt-orange mb-2 block text-sm">Services</span>
                        <div className="grid grid-cols-1 gap-3 pl-4">
                            {SITE_DATA.services.map(s => (
                                <Link key={s.slug} href={s.href} className="text-base text-zinc-600 hover:text-tmt-orange capitalize font-medium">{s.title}</Link>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Solutions */}
                    <div className="border-b border-zinc-100 pb-4">
                        <span className="text-tmt-orange mb-2 block text-sm">Solutions</span>
                        <div className="grid grid-cols-1 gap-3 pl-4">
                            {SITE_DATA.solutions.map(s => (
                                <Link key={s.slug} href={s.href} className="text-base text-zinc-600 hover:text-tmt-orange capitalize font-medium">{s.title}</Link>
                            ))}
                        </div>
                    </div>

                    <Link href="/areas" className="border-b border-zinc-100 pb-4 hover:text-tmt-orange transition-colors">Areas</Link>

                    {/* Mobile Tools */}
                    <div className="border-b border-zinc-100 pb-4">
                        <span className="text-tmt-orange mb-2 block text-sm">Tools</span>
                        <div className="grid grid-cols-1 gap-3 pl-4">
                            {SITE_DATA.tools.map(s => (
                                <Link key={s.href} href={s.href} className="text-base text-zinc-600 hover:text-tmt-orange capitalize font-medium">{s.title}</Link>
                            ))}
                        </div>
                    </div>

                    <Link href="/blog" className="border-b border-zinc-100 pb-4 hover:text-tmt-orange transition-colors">Blog</Link>
                    <Link href="/contact" className="text-tmt-orange text-2xl">Get a Quote</Link>
                </div>

                <div className="mt-12 pb-20 max-w-lg mx-auto w-full border-t border-zinc-100 pt-8">
                    <p className="text-zinc-400 text-sm mb-4">Contact Us</p>
                    <a href="https://wa.me/27766300879" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-green-600 mb-1 block hover:text-green-700">WhatsApp: 076 630 0879</a>
                    <a href="mailto:Info@TheMaintenanceTeamSA.co.za" className="text-zinc-500 font-medium hover:text-tmt-orange">Info@TheMaintenanceTeamSA.co.za</a>

                    <div className="mt-8 flex gap-4">
                        <a href="https://www.facebook.com/TheMaintenanceTeamSA" target="_blank" rel="noopener noreferrer" className="h-10 w-10 bg-zinc-100 rounded-full flex items-center justify-center text-zinc-500 hover:bg-tmt-orange hover:text-white transition-all" aria-label="Facebook">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                        </a>
                        <a href="https://www.instagram.com/the_maintenance_team" target="_blank" rel="noopener noreferrer" className="h-10 w-10 bg-zinc-100 rounded-full flex items-center justify-center text-zinc-500 hover:bg-tmt-orange hover:text-white transition-all" aria-label="Instagram">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};
