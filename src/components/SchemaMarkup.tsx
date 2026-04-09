import Script from 'next/script';

export default function SchemaMarkup({
    pageType = 'LocalBusiness',
    data = {}
}: {
    pageType?: 'WebSite' | 'LocalBusiness' | 'Service' | 'FAQPage';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data?: any;
}) {
    const baseSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "The Maintenance Team",
        "image": "https://www.themaintenanceteamsa.co.za/images/tmt-logo-dark.png",
        "telephone": "076 630 0879",
        "email": "info@themaintenanceteamsa.co.za",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Cape Town",
            "addressRegion": "Western Cape",
            "addressCountry": "ZA"
        },
        "priceRange": "$$",
        "areaServed": [
            { "@type": "Place", "name": "Atlantic Seaboard" },
            { "@type": "Place", "name": "Southern Suburbs" },
            { "@type": "Place", "name": "Northern Suburbs" },
            { "@type": "Place", "name": "Winelands" },
            { "@type": "Place", "name": "City Bowl" }
        ],
        "url": "https://www.themaintenanceteamsa.co.za/",
        "sameAs": [
            "https://www.facebook.com/TheMaintenanceTeamSA",
            "https://www.instagram.com/themaintenanceteamsa"
        ]
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let finalSchema: any = { ...baseSchema };

    if (pageType === 'Service') {
        finalSchema = {
            ...baseSchema,
            "@type": "Service",
            ...data // Merge dynamic service data
        };
    } else if (pageType === 'FAQPage') {
        finalSchema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": data // Dynamic FAQ items
        };
    }

    return (
        <Script
            id="schema-markup"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(finalSchema) }}
        />
    );
}
