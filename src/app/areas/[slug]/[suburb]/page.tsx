import { ContentPage } from "@/components/templates/ContentPage";
import { SITE_DATA } from "@/lib/siteData";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { db } from "@/db";
import { projects } from "@/db/schema";
import { ilike } from "drizzle-orm";
import Image from "next/image";

// Generate paths for all regions and their suburbs
export async function generateStaticParams() {
    const paths = [];
    for (const region of SITE_DATA.areas) {
        for (const suburb of region.locations) {
            paths.push({
                slug: region.slug,
                suburb: suburb.toLowerCase().replace(/\s+/g, '-'), // URL-safe slug
            });
        }
    }
    return paths;
}

type Props = {
    params: Promise<{ slug: string; suburb: string }>;
};

function getSuburbName(slug: string) {
    return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// SEO Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug, suburb } = await params;
    const region = SITE_DATA.areas.find((s) => s.slug === slug);

    if (!region) return { title: "Area Not Found" };

    const suburbName = getSuburbName(suburb);

    return {
        title: `Waterproofing & Painting in ${suburbName} | The Maintenance Team`,
        description: `Expert waterproofing, roofing, and painting services in ${suburbName}, ${region.title}. Get a free quote from Cape Town's trusted specialists.`,
    };
}

// Fallback Project Data (Simulating Regional Projects when DB is empty)
const REGIONAL_FALLBACKS: Record<string, typeof projects.$inferSelect[]> = {
    "atlantic-seaboard": [
        { id: 1, title: "Clifton 4th Luxury Waterproofing", description: "Complete torch-on waterproofing and slate roof restoration for a sea-facing villa.", location: "Clifton", afterImageUrl: "/images/areas/atlantic-seaboard-hero.png", createdAt: new Date(), beforeImageUrl: "" },
        { id: 2, title: "Camps Bay Villa Painting", description: "Exterior airless spray painting using salt-resistant elastomeric coatings.", location: "Camps Bay", afterImageUrl: "/images/services/hero-painting.png", createdAt: new Date(), beforeImageUrl: "" }
    ],
    "southern-suburbs": [
        { id: 3, title: "Constantia Heritage Roof Repair", description: "Restoration of a Victorian slate roof and chimney waterproofing.", location: "Constantia", afterImageUrl: "/images/areas/southern-suburbs-hero.png", createdAt: new Date(), beforeImageUrl: "" }
    ],
    "city-bowl": [
        { id: 4, title: "Tamboerskloof Box Gutter Relining", description: "Solving complex leaks in a heritage box gutter system.", location: "Tamboerskloof", afterImageUrl: "/images/areas/city-bowl-hero.png", createdAt: new Date(), beforeImageUrl: "" }
    ],
    // Default fallback
    "default": [
        { id: 5, title: "Complete Home Renovation", description: "Turnkey bathroom and kitchen renovation.", location: "Cape Town", afterImageUrl: "/images/hero-services-gold.png", createdAt: new Date(), beforeImageUrl: "" }
    ]
};

export default async function SuburbPage({ params }: Props) {
    const { slug, suburb } = await params;
    const region = SITE_DATA.areas.find((s) => s.slug === slug);

    if (!region) {
        notFound();
    }

    // Find the specific suburb name from the list to ensure correct capitalization if possible, 
    // or fallback to formatting the slug.
    const suburbNameFormatted = getSuburbName(suburb);
    const suburbNameOriginal = region.locations.find(l => l.toLowerCase().replace(/\s+/g, '-') === suburb) || suburbNameFormatted;

    // Check for specific suburb overrides
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const override = (region as any).suburbDetails?.[suburb];

    const introText = override?.introText || `Living in ${suburbNameOriginal} offers a unique lifestyle, but the local climate can take a toll on your property. ${region.introText} We provide specialized maintenance solutions tailored for homes in ${suburbNameOriginal}.`;

    const benefits = override?.benefits
        ? [`Servicing ${suburbNameOriginal}`, ...override.benefits]
        : [`Servicing ${suburbNameOriginal}`, ...region.benefits];

    const heroImage = override?.heroImage || region.heroImage;

    // Fetch projects for this area
    let areaProjects: typeof projects.$inferSelect[] = [];
    try {
        if (process.env.POSTGRES_URL) {
            areaProjects = await db.query.projects.findMany({
                where: ilike(projects.location, `%${suburbNameOriginal}%`),
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                orderBy: (projects: any, { desc }: any) => [desc(projects.createdAt)],
            });
        }
    } catch (error) {
        console.warn(`Database connection failed for ${suburb}:`, error);
    }

    // FALLBACK: If no specific suburb projects found, use Regional Fallbacks
    if (areaProjects.length === 0) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        areaProjects = (REGIONAL_FALLBACKS[slug] || REGIONAL_FALLBACKS["default"]) as any;
    }

    // JSON-LD Schema
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Property Maintenance",
        "provider": {
            "@type": "HomeAndConstructionBusiness",
            "name": "The Maintenance Team",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": suburbNameOriginal,
                "addressRegion": "Western Cape",
                "addressCountry": "ZA"
            }
        },
        "areaServed": {
            "@type": "City",
            "name": suburbNameOriginal
        },
        "description": introText,
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Maintenance Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Waterproofing"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Roof Painting"
                    }
                }
            ]
        }
    };

    return (
        <ContentPage
            title={`Property Maintenance in ${suburbNameOriginal}`}
            subtitle={`Expert Waterproofing, Painting & Renovations for ${suburbNameOriginal} Residents`}
            heroImage={heroImage}
            introText={introText}
            benefits={benefits}
            ctaText={`Get a Quote in ${suburbNameOriginal}`}
            serviceArea={{
                locations: region.locations
            }}
        >
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {areaProjects.length > 0 && (
                <div className="mt-12 pt-12 border-t border-neutral-100">
                    <h3 className="text-2xl font-bold font-heading mb-6">Recent Work in {region.title}</h3>
                    <div className="grid gap-6 md:grid-cols-2">
                        {areaProjects.map((project) => (
                            <div key={project.id} className="bg-white rounded-lg shadow-sm border border-neutral-100 overflow-hidden hover:shadow-md transition-shadow">
                                <div className="aspect-video relative bg-neutral-100">
                                    {project.afterImageUrl ? (
                                        <Image
                                            src={project.afterImageUrl}
                                            alt={project.title}
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        <div className="flex items-center justify-center h-full text-neutral-400 text-sm">No Image</div>
                                    )}
                                </div>
                                <div className="p-4">
                                    <h4 className="font-bold text-lg mb-2 line-clamp-1">{project.title}</h4>
                                    <p className="text-sm text-neutral-600 line-clamp-2 mb-4">{project.description}</p>
                                    <span className="inline-block px-2 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-md">
                                        {project.location}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </ContentPage>
    );
}
