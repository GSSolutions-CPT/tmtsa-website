import { db } from '@/db';
import { quoteRequests } from '@/db/schema';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import LeadNotificationEmail from '@/components/emails/LeadNotification';

// POST /api/quote
export async function POST(req: Request) {
    const ADMIN_EMAILS = [
        'Admin <admin@themaintenanceteamsa.co.za>',
        'Sage Seeley <info@themaintenanceteamsa.co.za>',
        'Sage <sage@themaintenanceteamsa.co.za>'
    ];
    try {
        const data = await req.json();

        // Basic validation
        if (!data.name || !data.email) {
            return NextResponse.json({ error: 'Name and Email required' }, { status: 400 });
        }

        // 1. Save to Database
        await db.insert(quoteRequests).values({
            name: data.name,
            email: data.email,
            phone: data.phone,
            serviceType: data.serviceType,
            message: data.message,
            status: 'pending'
        });

        // 2. Send Email Notification (Only if API Key is present)
        if (process.env.RESEND_API_KEY) {
            try {
                const resend = new Resend(process.env.RESEND_API_KEY);
                const { error } = await resend.emails.send({
                    from: 'TMT Website <notifications@themaintenanceteamsa.co.za>', // Update to verified domain e.g., notifications@themaintenanceteamsa.co.za
                    to: ADMIN_EMAILS,
                    subject: `New Lead: ${data.serviceType} from ${data.name}`,
                    react: LeadNotificationEmail({
                        name: data.name,
                        email: data.email,
                        phone: data.phone || 'N/A',
                        serviceType: data.serviceType,
                        message: data.message,
                    }),
                });

                if (error) {
                    console.error('Resend Error:', error);
                }
            } catch (emailError) {
                console.warn('Email sending failed:', emailError);
            }
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Quote error:', error);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}
