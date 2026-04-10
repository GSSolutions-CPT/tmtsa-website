import React from 'react';

export default function PrivacyPolicy() {
    return (
        <main className="container mx-auto px-4 py-24 min-h-screen bg-white text-neutral-800">
            <div className="max-w-3xl mx-auto prose prose-neutral">
                <h1 className="text-4xl font-heading font-bold mb-8 text-neutral-900">Privacy Policy</h1>
                <p className="text-neutral-500 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 font-heading text-neutral-900">1. Introduction</h2>
                    <p>
                        The Maintenance Team (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (<a href="https://www.themaintenanceteamsa.co.za" className="text-tmt-orange hover:underline">www.themaintenanceteamsa.co.za</a>) and tell you about your privacy rights and how the law protects you.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 font-heading text-neutral-900">2. Important Information and Who We Are</h2>
                    <p className="mb-2"><strong>Controller:</strong> The Maintenance Team is the controller and responsible for your personal data.</p>
                    <p className="mb-4"><strong>Contact Details:</strong> If you have any questions about this privacy policy, please contact us:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Business Name:</strong> The Maintenance Team (TMT)</li>
                        <li><strong>Owner:</strong> Sage Seeley</li>
                        <li><strong>Email:</strong> <a href="mailto:info@themaintenanceteamsa.co.za" className="text-tmt-orange hover:underline">info@themaintenanceteamsa.co.za</a></li>
                        <li><strong>WhatsApp:</strong> 076 630 0879</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 font-heading text-neutral-900">3. The Data We Collect About You</h2>
                    <p className="mb-4">We may collect, use, store, and transfer different kinds of personal data about you which we have grouped together follows:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Identity Data:</strong> First name, last name, and title.</li>
                        <li><strong>Contact Data:</strong> Billing address, service address, email address, and telephone numbers.</li>
                        <li><strong>Technical Data:</strong> Internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                        <li><strong>Usage Data:</strong> Information about how you use our website, products, and services.</li>
                        <li><strong>Marketing and Communications Data:</strong> Your preferences in receiving marketing from us (e.g., our newsletter).</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 font-heading text-neutral-900">4. How We Use Your Personal Data</h2>
                    <p className="mb-4">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>To Provide Quotes:</strong> We need your address and contact details to provide an accurate estimate for maintenance services.</li>
                        <li><strong>To Perform a Contract:</strong> Where we need to perform the contract we are about to enter into or have entered into with you (e.g., fixing your roof).</li>
                        <li><strong>For Communication:</strong> To reply to your inquiries sent via our contact forms or WhatsApp.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 font-heading text-neutral-900">5. Data Security</h2>
                    <p>
                        We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. We limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 font-heading text-neutral-900">6. Third-Party Links</h2>
                    <p>
                        This website may include links to third-party websites (e.g., Facebook, WhatsApp). Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 font-heading text-neutral-900">7. POPIA Compliance (South Africa)</h2>
                    <p>
                        We comply with the Protection of Personal Information Act (POPIA). You have the right to ask us to update, correct, or delete your personal information. To exercise these rights, please contact us at <a href="mailto:info@themaintenanceteamsa.co.za" className="text-tmt-orange hover:underline">info@themaintenanceteamsa.co.za</a>.
                    </p>
                </section>
            </div>
        </main>
    );
}
