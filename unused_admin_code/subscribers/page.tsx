import { db } from "@/db";
import { newsletterSubs } from "@/db/schema";
import { desc } from "drizzle-orm";
import { format } from "date-fns";
import { LucideMail, LucideCalendar } from "lucide-react";

export const dynamic = 'force-dynamic';

export default async function SubscribersPage() {
    const subs = await db.select().from(newsletterSubs).orderBy(desc(newsletterSubs.createdAt));

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold font-heading text-neutral-900">Subscribers</h1>
                <span className="bg-neutral-100 text-neutral-600 px-3 py-1 rounded-full text-sm font-medium">
                    {subs.length} Total
                </span>
            </div>

            <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-sm">
                <table className="w-full text-left">
                    <thead className="bg-neutral-50 border-b border-neutral-200">
                        <tr>
                            <th className="p-4 font-bold text-neutral-700 text-sm">Email Address</th>
                            <th className="p-4 font-bold text-neutral-700 text-sm">Subscribed Date</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-100">
                        {subs.map((sub) => (
                            <tr key={sub.id} className="hover:bg-neutral-50 transition-colors">
                                <td className="p-4">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-blue-50 text-blue-600 p-2 rounded-lg">
                                            <LucideMail className="w-4 h-4" />
                                        </div>
                                        <span className="font-medium text-neutral-900">{sub.email}</span>
                                    </div>
                                </td>
                                <td className="p-4 text-neutral-500 text-sm">
                                    <div className="flex items-center gap-2">
                                        <LucideCalendar className="w-3 h-3" />
                                        {format(sub.createdAt, 'PP p')}
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {subs.length === 0 && (
                            <tr>
                                <td colSpan={2} className="p-8 text-center text-neutral-400">
                                    No subscribers yet.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
