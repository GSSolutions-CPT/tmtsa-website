import { db } from '@/db';
import { quoteRequests, newsletterSubs, blogPosts } from '@/db/schema';
import { count } from 'drizzle-orm';
import { LucideInbox, LucideUsers, LucideFileText, LucideIcon } from 'lucide-react';

export const dynamic = 'force-dynamic';

const StatCard = ({ title, value, icon: Icon, color }: { title: string; value: number; icon: LucideIcon; color: string }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200">
        <div className="flex items-center justify-between mb-4">
            <h3 className="text-neutral-500 font-medium text-sm">{title}</h3>
            <div className={`p-2 rounded-lg ${color} bg-opacity-10`}>
                <Icon className={`w-5 h-5 ${color.replace('bg-', 'text-')}`} />
            </div>
        </div>
        <div className="text-3xl font-bold text-neutral-900">{value}</div>
    </div>
);

export default async function AdminDashboard() {
    const [quotesCount] = await db.select({ count: count() }).from(quoteRequests);
    const [subsCount] = await db.select({ count: count() }).from(newsletterSubs);
    const [postsCount] = await db.select({ count: count() }).from(blogPosts);

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold font-heading text-neutral-900">Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard
                    title="Total Leads"
                    value={quotesCount.count}
                    icon={LucideInbox}
                    color="text-blue-500"
                />
                <StatCard
                    title="Subscribers"
                    value={subsCount.count}
                    icon={LucideUsers}
                    color="text-green-500"
                />
                <StatCard
                    title="Blog Posts"
                    value={postsCount.count}
                    icon={LucideFileText}
                    color="text-purple-500"
                />
            </div>

            <div className="bg-white rounded-xl border border-neutral-200 p-8 text-center">
                <h2 className="text-xl font-bold text-neutral-900 mb-2">Welcome Back, Admin!</h2>
                <p className="text-neutral-500 max-w-lg mx-auto">
                    Select an option from the sidebar to manage your website content.
                </p>
            </div>
        </div>
    );
}
