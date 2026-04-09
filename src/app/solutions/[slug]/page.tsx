import { ContentPage } from "@/components/templates/ContentPage";
import { SITE_DATA } from "@/lib/siteData";
import { Metadata } from "next";
import { notFound } from "next/navigation";

// Needed for SSG
export async function generateStaticParams() {
    return SITE_DATA.solutions.map((solution) => ({
        slug: solution.slug,
    }));
}

type Props = {
    params: Promise<{ slug: string }>;
};

// SEO Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const solution = SITE_DATA.solutions.find((s) => s.slug === slug);

    if (!solution) {
        return {
            title: "Solution Not Found",
        };
    }

    return {
        title: `${solution.title} Maintenance Solutions | The Maintenance Team`,
        description: solution.introText,
    };
}

export default async function SolutionPage({ params }: Props) {
    const { slug } = await params;
    const solution = SITE_DATA.solutions.find((s) => s.slug === slug);

    if (!solution) {
        notFound();
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": solution.title,
        "provider": {
            "@type": "HomeAndConstructionBusiness",
            "name": "The Maintenance Team",
            "image": "https://www.themaintenanceteamsa.co.za/images/tmt-logo-2026.png",
            "telephone": "+27766300879",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Cape Town",
                "addressRegion": "Western Cape",
                "addressCountry": "ZA"
            }
        },
        "description": solution.description
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ContentPage
                title={`${solution.title} Solutions`}
                subtitle={solution.description}
                heroImage={solution.heroImage}
                introText={solution.introText}
                benefits={solution.benefits}
            />
        </>
    );
}
