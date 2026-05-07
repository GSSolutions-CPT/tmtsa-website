'use client';

import { ShieldCheck } from "lucide-react";
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
    const [state, handleSubmit] = useForm('mdayrnbg');

    if (state.succeeded) {
        return (
            <div className="flex flex-col items-center justify-center p-8 text-center space-y-4 bg-black/50 border border-tmt-orange/20 rounded-lg">
                <ShieldCheck className="w-12 h-12 text-tmt-orange" />
                <h3 className="text-xl font-bold text-white">Request Sent Successfully!</h3>
                <p className="text-neutral-400">We have received your request and will contact you shortly.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label htmlFor="contact-name" className="text-sm font-bold uppercase text-neutral-500">Name</label>
                    <input id="contact-name" name="name" type="text" autoComplete="name" required className="w-full bg-black/50 border border-white/20 rounded-lg p-3 text-white focus:border-tmt-orange focus:outline-none transition-colors" placeholder="John Doe" />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>
                <div className="space-y-2">
                    <label htmlFor="contact-phone" className="text-sm font-bold uppercase text-neutral-500">Phone</label>
                    <input id="contact-phone" name="phone" type="tel" autoComplete="tel" required className="w-full bg-black/50 border border-white/20 rounded-lg p-3 text-white focus:border-tmt-orange focus:outline-none transition-colors" placeholder="071 234 5678" />
                    <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="contact-email" className="text-sm font-bold uppercase text-neutral-500">Email</label>
                <input id="contact-email" name="email" type="email" autoComplete="email" required className="w-full bg-black/50 border border-white/20 rounded-lg p-3 text-white focus:border-tmt-orange focus:outline-none transition-colors" placeholder="john@example.com" />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            <div className="space-y-2">
                <label htmlFor="contact-service" className="text-sm font-bold uppercase text-neutral-500">Service Required</label>
                <select id="contact-service" name="serviceType" className="w-full bg-black/50 border border-white/20 rounded-lg p-3 text-white focus:border-tmt-orange focus:outline-none transition-colors">
                    <option value="Waterproofing">Waterproofing</option>
                    <option value="Painting">Painting (Interior/Exterior)</option>
                    <option value="Roofing">Roofing Repairs</option>
                    <option value="Renovations">Renovations</option>
                    <option value="Plumbing">Plumbing / Other</option>
                </select>
                <ValidationError prefix="Service" field="serviceType" errors={state.errors} />
            </div>

            <div className="space-y-2">
                <label htmlFor="contact-message" className="text-sm font-bold uppercase text-neutral-500">Message</label>
                <textarea id="contact-message" name="message" className="w-full bg-black/50 border border-white/20 rounded-lg p-3 text-white h-32 focus:border-tmt-orange focus:outline-none transition-colors" placeholder="Tell us about your project..." />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <button type="submit" disabled={state.submitting} className="w-full bg-tmt-orange text-white font-bold py-4 rounded-lg uppercase tracking-wider hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                {state.submitting ? 'Sending Request...' : 'Submit Request'}
            </button>

            <div className="flex items-center justify-center gap-2 text-xs text-neutral-500 mt-4">
                <ShieldCheck className="w-4 h-4 text-tmt-orange" />
                <span>100% Privacy Guaranteed. No Spam.</span>
            </div>
        </form>
    );
}
