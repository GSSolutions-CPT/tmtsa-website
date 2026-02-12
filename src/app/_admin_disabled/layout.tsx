import Link from 'next/link';
import { signOut } from '@/auth';

import { LucideLayoutDashboard, LucideInbox, LucideUsers, LucideFileText, LucideBriefcase, LucideLogOut, LucideIcon } from 'lucide-react';

const NavItem = ({ href, icon: Icon, label }: { href: string; icon: LucideIcon; label: string }) => {
    return (
        <Link
            href={href}
            className="flex items-center gap-3 px-4 py-3 text-neutral-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
        >
            <Icon className="w-5 h-5" />
            <span className="font-medium">{label}</span>
        </Link>
    );
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen bg-neutral-100">
            {/* Sidebar */}
            <aside className="w-64 bg-zinc-950 text-white flex flex-col fixed h-full inset-y-0 z-50">
                <div className="p-6 border-b border-white/10 flex items-center gap-3">
                    {/* Fallback if logo retrieval fails */}
                    <div className="w-8 h-8 bg-tmt-orange rounded flex items-center justify-center font-bold">T</div>
                    <span className="font-heading font-bold text-xl tracking-wide">TMT ADMIN</span>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    <NavItem href="/admin" icon={LucideLayoutDashboard} label="Dashboard" />
                    <NavItem href="/admin/inbox" icon={LucideInbox} label="Inbox" />
                    <NavItem href="/admin/subscribers" icon={LucideUsers} label="Subscribers" />
                    <NavItem href="/admin/blog" icon={LucideFileText} label="Blog CMS" />
                    <NavItem href="/admin/projects" icon={LucideBriefcase} label="Project CMS" />
                </nav>

                <div className="p-4 border-t border-white/10">
                    <form
                        action={async () => {
                            'use server';
                            await signOut();
                        }}
                    >
                        <button className="flex items-center gap-3 px-4 py-3 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors w-full">
                            <LucideLogOut className="w-5 h-5" />
                            <span className="font-medium">Sign Out</span>
                        </button>
                    </form>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 ml-64 p-8 overflow-y-auto">
                {children}
            </main>
        </div>
    );
}
