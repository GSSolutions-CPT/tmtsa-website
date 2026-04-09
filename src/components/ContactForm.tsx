'use client';

import { ShieldCheck } from "lucide-react";

export default function ContactForm() {
    return (
        <form
            onSubmit={async (e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const formData = new FormData(form);
                const data = {
                    name: formData.get('name'),
                    phone: formData.get('phone'),
                    email: formData.get('email'),
                    serviceType: formData.get('serviceType'),
                    message: formData.get('message'),
                };

                const btn = form.querySelector('button');
                if (btn) {
                    const originalText = btn.innerText;
                    btn.disabled = true;
                    btn.innerText = 'Sending Request...';

                    try {
                        const res = await fetch('/api/quote', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(data),
                        });
                        if (res.ok) {
                            alert('Request sent successfully! We will contact you shortly.');
                            form.reset();
                        } else {
                            alert('Failed to send request. Please try again or call us.');
                        }
                    } catch (err) {
                        console.error(err);
                        alert('An error occurred. Please try again.');
                    } finally {
                        btn.disabled = false;
                        btn.innerText = originalText;
                    }
                }
            }}
            className="space-y-6"
        >
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label htmlFor="contact-name" className="text-sm font-bold uppercase text-neutral-500">Name</label>
                    <input id="contact-name" name="name" type="text" autoComplete="name" required className="w-full bg-black/50 border border-white/20 rounded-lg p-3 text-white focus:border-tmt-orange focus:outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="contact-phone" className="text-sm font-bold uppercase text-neutral-500">Phone</label>
                    <input id="contact-phone" name="phone" type="tel" autoComplete="tel" required className="w-full bg-black/50 border border-white/20 rounded-lg p-3 text-white focus:border-tmt-orange focus:outline-none transition-colors" placeholder="071 234 5678" />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="contact-email" className="text-sm font-bold uppercase text-neutral-500">Email</label>
                <input id="contact-email" name="email" type="email" autoComplete="email" required className="w-full bg-black/50 border border-white/20 rounded-lg p-3 text-white focus:border-tmt-orange focus:outline-none transition-colors" placeholder="john@example.com" />
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
            </div>

            <div className="space-y-2">
                <label htmlFor="contact-message" className="text-sm font-bold uppercase text-neutral-500">Message</label>
                <textarea id="contact-message" name="message" className="w-full bg-black/50 border border-white/20 rounded-lg p-3 text-white h-32 focus:border-tmt-orange focus:outline-none transition-colors" placeholder="Tell us about your project..." />
            </div>

            <button type="submit" className="w-full bg-tmt-orange text-white font-bold py-4 rounded-lg uppercase tracking-wider hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
                Submit Request
            </button>

            <div className="flex items-center justify-center gap-2 text-xs text-neutral-500 mt-4">
                <ShieldCheck className="w-4 h-4 text-tmt-orange" />
                <span>100% Privacy Guaranteed. No Spam.</span>
            </div>
        </form>
    );
}
