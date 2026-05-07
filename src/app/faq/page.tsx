import { PageHero } from "@/components/ui/PageHero";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "FAQs | Client Support",
    description: "Common questions about our waterproofing, painting, structural repair services, warranties, deposits, and service areas in Cape Town.",
};

const FAQS = [
    {
        category: "Services",
        question: "What is your typical lead time for new projects?",
        answer: "For residential waterproofing and painting, we typically book 2-3 weeks in advance. However, for urgent structural repairs, we reserve emergency slots to prevent further property damage."
    },
    {
        category: "Services",
        question: "Do you offer 'Spot Repairs' or only full overhauls?",
        answer: "We focus on comprehensive solutions that come with a guarantee. While we can perform targeted repairs, we often recommend treating the entire affected area to ensure a uniform finish and long-term protection."
    },
    {
        category: "Services",
        question: "What specific waterproofing systems do you use?",
        answer: "We use industrial-grade torch-on systems for flat roofs and specialized acrylic/fiber reinforcement for parapets and flashings. All materials are SABS approved and selected for the Cape's specific climate conditions."
    },
    {
        category: "Billing & Warranty",
        question: "How does your 10-year guarantee work?",
        answer: "Our guarantee covers both workmanship and materials. If any failure occurs due to application error or material defect within 10 years, we repair it at zero cost to you. This is documented in your final handover certificate."
    },
    {
        category: "Billing & Warranty",
        question: "Do you require a deposit?",
        answer: "Yes, a 50% deposit is required to secure your booking and materials. The remaining balance is due strictly upon successful project completion and client sign-off."
    },
    {
        category: "Areas",
        question: "Do you service the Southern Suburbs?",
        answer: "Our primary hub is the Western Seaboard (Blouberg, Melkbos) and Northern Suburbs (Durbanville). However, we do service premium properties in Camps Bay, Clifton, and Bishopscourt for larger scale projects."
    }
];

export default function FAQPage() {
    return (
        <main className="min-h-screen bg-white text-tmt-dark selection:bg-tmt-orange selection:text-white">
            {/* 1. Unique Page Hero */}
            <PageHero
                title={<span>Client <span className="text-tmt-orange">Support</span></span>}
                subtitle="Common questions regarding our premium waterproofing, painting, and structural repair services."
                imageSrc="/images/hero-faq-gold.png"
                imageAlt="Minimalist White & Gold Geometric Shapes"
            />

            {/* 2. FAQ Accordion */}
            <section className="pb-32 px-4 container mx-auto max-w-4xl">
                <FAQAccordion items={FAQS} />
            </section>
        </main>
    );
}
