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
                            : "border-white/30 text-white hover:bg-white/10"
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
                    <p className="text-2xl font-bold text-zinc-900 mb-1">076 630 0879</p>
                    <p className="text-zinc-500 font-medium">info@tmtsa.co.za</p>

                    <div className="mt-8 flex gap-4">
                        <div className="h-10 w-10 bg-zinc-100 rounded-full flex items-center justify-center">
                            {/* Social circles placeholders */}
                        </div>
                        <div className="h-10 w-10 bg-zinc-100 rounded-full flex items-center justify-center">
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};
