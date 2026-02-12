import { db } from "@/db";
import { quoteRequests } from "@/db/schema";
import { desc } from "drizzle-orm";
import { format } from "date-fns";
import { LucidePhone, LucideMail, LucideCalendar, LucideBriefcase } from "lucide-react";

export const dynamic = 'force-dynamic';

export default async function InboxPage() {
    const leads = await db.select().from(quoteRequests).orderBy(desc(quoteRequests.createdAt));

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold font-heading text-neutral-900">Inbox</h1>
                <span className="bg-neutral-100 text-neutral-600 px-3 py-1 rounded-full text-sm font-medium">
                    {leads.length} Total Leads
                </span>
            </div>

            <div className="grid gap-4">
                {leads.map((lead) => (
                    <div key={lead.id} className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex flex-col md:flex-row justify-between gap-4">
                            {/* Header Info */}
                            <div className="space-y-1">
                                <h3 className="font-bold text-lg text-neutral-900">{lead.name}</h3>
                                <div className="flex items-center gap-4 text-sm text-neutral-500">
                                    <span className="flex items-center gap-1">
                                        <LucideMail className="w-3 h-3" />
                                        <a href={`mailto:${lead.email}`} className="hover:text-tmt-orange transition-colors">{lead.email}</a>
                                    </span>
                                    {lead.phone && (
                                        <span className="flex items-center gap-1">
                                            <LucidePhone className="w-3 h-3" />
                                            <a href={`tel:${lead.phone}`} className="hover:text-tmt-orange transition-colors">{lead.phone}</a>
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Date */}
                            <div className="text-neutral-400 text-sm flex items-center gap-1 md:self-start">
                                <LucideCalendar className="w-3 h-3" />
                                {format(lead.createdAt, 'PP p')}
                            </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-neutral-100 grid md:grid-cols-2 gap-4">
                            <div>
                                <span className="text-xs uppercase tracking-wider text-neutral-400 font-bold block mb-1">Service Type</span>
                                <div className="flex items-center gap-2 text-neutral-800 font-medium bg-neutral-50 px-3 py-2 rounded-lg inline-block border border-neutral-100 text-sm">
                                    <LucideBriefcase className="w-4 h-4 text-tmt-orange" />
                                    {lead.serviceType}
                                </div>
                            </div>

                            {/* Message */}
                            {lead.message && (
                                <div>
                                    <span className="text-xs uppercase tracking-wider text-neutral-400 font-bold block mb-1">Message</span>
                                    <p className="text-neutral-600 text-sm leading-relaxed bg-neutral-50 p-3 rounded-lg border border-neutral-100">
                                        {lead.message}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                ))}

                {leads.length === 0 && (
                    <div className="text-center py-20 bg-white rounded-xl border border-neutral-200 border-dashed">
                        <p className="text-neutral-400">No leads found yet.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
