import { LucideIcon, Calculator, CalendarCheck, FileText, Lock } from "lucide-react";

export type PageData = {
    title: string;
    description: string;
    heroImage: string;
    slug: string;
    introText: string;
    benefits: string[];
    keywords: string[]; // SEO Keywords
    serviceArea?: {
        image: string;
        locations: string[];
    };
    // Optional overrides for specific suburbs
    suburbDetails?: Record<string, {
        introText?: string;
        heroImage?: string;
        benefits?: string[];
    }>;
    // New Content Sections
    process?: {
        title: string;
        description: string;
    }[];
    faqs?: {
        question: string;
        answer: string;
    }[];
    commonSigns?: {
        title: string;
        description: string;
    }[];
};

export type NavItem = {
    title: string;
    href: string;
    description?: string;
    icon?: LucideIcon;
};

export const SITE_DATA = {
    services: [
        {
            title: "Waterproofing",
            slug: "waterproofing",
            href: "/services/waterproofing",
            description: "Industrial torch-on and injection systems.",
            heroImage: "/images/areas/city-bowl-hero.png", // Existing assest
            introText: "Water intrusion is the single biggest threat to your property's structural integrity. At The Maintenance Team, we employ advanced waterproofing systems designed to withstand the Cape's harsh winter rains and summer heat.",
            benefits: ["10-Year Guarantee", "Torch-on Systems", "Lateral Damp Treatment", "Balcony Waterproofing"],
            keywords: ["Waterproofing Cape Town", "Torch-on waterproofing", "Balcony waterproofing", "Damp proofing Cape Town", "Roof leak repair"],
            commonSigns: [
                { title: "Rising Damp", description: "Tide marks or bubbling paint at the bottom of walls." },
                { title: "Mould Growth", description: "Black or green spots appearing on ceilings and cornices." },
                { title: "Efflorescence", description: "White, powdery salt deposits pushing through plaster." },
                { title: "Peeling Paint", description: "Paint flaking off due to moisture trapped behind the surface." }
            ],
            process: [
                { title: "Moisture Assessment", description: "We use thermal cameras and moisture meters to pinpoint the exact source of the leak, not just the symptoms." },
                { title: "Surface Preparation", description: "All loose material is stripped back. We high-pressure clean the substrate to ensure perfect adhesion for the new system." },
                { title: "Crack Repair", description: "Structural cracks are opened and filled with flexible epoxy or cementitious slurry to prevent re-opening." },
                { title: "Waterproofing Application", description: "We apply a double-layer torch-on system or specialized liquid membrane, depending on the traffic and exposure of the area." },
                { title: "UV Protection", description: "The final layer is coated with high-quality silver aluminium paint or UV-stable topcoat to protect the bitumen from sun damage." }
            ],
            faqs: [
                { question: "How long does torch-on waterproofing last?", answer: "When correctly applied and maintained with a silver coat every 2-3 years, a torch-on system can last over 10 years. We offer a 10-year guarantee on full systems." },
                { question: "Can you waterproof over existing tiles?", answer: "Yes, but it's not always recommended. If the substrate is wet, sealing over it traps moisture. We prefer to strip and seal the slab directly, but we can use specialized non-slip coatings for balconies if the screed is dry." },
                { question: "What causes rising damp?", answer: "Rising damp occurs when ground water is sucked up through the porous masonry of your walls. A failed or missing DPC (Damp Proof Course) is usually the culprit." },
                { question: "Is your work guaranteed?", answer: "Yes, we provide a 5 to 10-year guarantee on all major waterproofing projects, subject to routine maintenance." }
            ]
        },
        {
            title: "Painting & Roofing",
            slug: "painting-roofing",
            href: "/services/painting-roofing",
            description: "Airless roof spraying and exterior coating.",
            heroImage: "/images/areas/winelands-hero.png",
            introText: "Restore your home's value. High-pressure cleaning and airless spray painting services for tiled and metal roofs.",
            benefits: ["Airless Spray Technology", "Fungicidal Wash", "broken tile replacement", "10-15 Year Lifespan"],
            keywords: ["Roof painting Cape Town", "Airless spray painting", "Exterior house painting", "Roof coating", "Tile roof restoration"]
        },
        {
            title: "Plumbing",
            slug: "plumbing",
            href: "/services/plumbing",
            description: "Leak detection, geysers, and maintenance.",
            heroImage: "/images/services/hero-plumbing.png",
            introText: "Reliable plumbing services for leak detection, blocked drains, and geyser maintenance. Fast turnaround times for emergencies.",
            benefits: ["24/7 Emergency Support", "Leak Detection", "Geyser Installation", "Blocked Drains"],
            keywords: ["Plumber Cape Town", "Leak detection", "Geyser installation", "Emergency plumber", "Blocked drains Cape Town"]
        },
        {
            title: "Renovations",
            slug: "renovations",
            href: "/services/renovations",
            description: "Turnkey bathroom and kitchen makeovers.",
            heroImage: "/images/hero-services-gold.png",
            introText: "Turnkey renovation services. We handle the entire project from demolition to tiling, plumbing, and electrical, delivering showroom-quality results.",
            benefits: ["Project Management", "Bathroom & Kitchen", "Tiling & Flooring", "Electrical & Plumbing"],
            keywords: ["Bathroom renovations Cape Town", "Kitchen renovations", "Home improvements", "Turnkey renovations", "Tiling contractors"]
        },
        {
            title: "Structural Repairs",
            slug: "structural-repairs",
            href: "/services/structural-repairs",
            description: "Spalling and concrete restoration.",
            heroImage: "/images/services/hero-structural.png",
            introText: "Fixing concrete cancer and cracks caused by sea spray. Specialized structural repairs for coastal properties.",
            benefits: ["Spalling Repair", "Rebar Treatment", "Structural Engineer Sign-off", "Crack Injection"],
            keywords: ["Spalling repair Cape Town", "Concrete restoration", "Crack injection", "Structural repairs", "Concrete cancer treatment"]
        },
        {
            title: "Paving Cleaning",
            slug: "paving-cleaning",
            href: "/services/paving-cleaning",
            description: "High-pressure clean and seal.",
            heroImage: "/images/bento-cleaning-bright.png",
            introText: "Restore your home's curb appeal. Expert high-pressure paving cleaning, weed removal, and sealing services.",
            benefits: ["Weed Removal", "Oil Stain Treatment", "Sanding & Sealing", "Estate Compliant"],
            keywords: ["Paving cleaning Cape Town", "High pressure cleaning", "Driveway cleaning", "Paving sealing", "Roof cleaning"]
        },
    ],
    solutions: [
        {
            title: "Residential",
            slug: "residential",
            href: "/solutions/residential",
            description: "Home maintenance for private owners.",
            heroImage: "/images/solutions/residential-hero.png",
            introText: "Protecting your family home with premium maintenance solutions. From roof leaks to full renovations.",
            benefits: ["Personalized Service", "Clean Sites", "Trusted Teams", "Long-term Warranties"],
            keywords: ["Residential maintenance Cape Town", "Home repairs", "Handyman services", "House painting", "Roof leak repair"]
        },
        {
            title: "Body Corporate",
            slug: "body-corporate",
            href: "/solutions/body-corporate",
            description: "Managed maintenance for sectional titles.",
            heroImage: "/images/solutions/body-corporate-hero.png",
            introText: "We partner with Trustees and Managing Agents to deliver reliable, budget-compliant maintenance plans for complexes.",
            benefits: ["Budget Planning", "Maintenance Plans", "Compliance Certificates", "Tenant Coordination"],
            keywords: ["Body corporate maintenance", "Sectional title maintenance", "Complex painting", "Apartment block waterproofing", "Maintenance plans"]
        },
        {
            title: "Commercial",
            slug: "commercial",
            href: "/solutions/commercial",
            description: "Industrial and office park solutions.",
            heroImage: "/images/solutions/commercial-hero.png",
            introText: "Keep your business running. We offer commercial waterproofing, painting, and general maintenance with minimal disruption.",
            benefits: ["After-hours Work", "Health & Safety Compliance", "Asset Management", "Industrial Coatings"],
            keywords: ["Commercial maintenance Cape Town", "Office painting", "Industrial waterproofing", "Warehouse maintenance", "Commercial property repairs"]
        },
        {
            title: "Estates",
            slug: "estates",
            href: "/solutions/estates",
            description: "HOA compliant maintenance.",
            heroImage: "/images/solutions/estates-hero.png",
            introText: " specialized services for high-end residential estates. We understand the strict aesthetic and conduct rules of lifestyle estates.",
            benefits: ["HOA Compliance", "Security Cleared Staff", "Uniformed Teams", "Estate Manager Liaison"],
            keywords: ["Estate maintenance Cape Town", "HOA compliant contractors", "Lifestyle estate maintenance", "Luxury home repairs", "Estate painting"]
        },
        {
            title: "Industrial",
            slug: "industrial",
            href: "/solutions/industrial",
            description: "Heavy-duty coating and repairs.",
            heroImage: "/images/solutions/industrial-hero.png",
            introText: "Rugged solutions for warehouses and factories. Anti-corrosion coatings, floor sealing, and structural reinforcement.",
            benefits: ["Epoxy Flooring", "Rust Treatment", "Roof Sheeting", "High-Access Operations"],
            keywords: ["Industrial coatings", "Factory maintenance", "Epoxy flooring Cape Town", "Rust treatment", "Roof sheeting repairs"]
        },
        {
            title: "Rental Agents",
            slug: "rental-agents",
            href: "/solutions/rental-agents",
            description: "Rapid response for tenant issues.",
            heroImage: "/images/solutions/rental-agents-hero.png",
            introText: "The preferred partner for rental agents. We handle incoming/outgoing inspections and urgent tenant repairs efficiently.",
            benefits: ["48hr Turnaround", "Itemized Quoting", "Before/After Photos", "Key Handling"],
            keywords: ["Rental maintenance services", "Property management maintenance", "Tenant repairs", "Rental inspection repairs", "Real estate maintenance"]
        },
    ],
    areas: [
        {
            title: "Atlantic Seaboard",
            slug: "atlantic-seaboard",
            href: "/areas/atlantic-seaboard",
            description: "Premium coastal property protection.",
            heroImage: "/images/areas/atlantic-seaboard-hero.png",
            introText: "Serving Cape Town's premier coastal suburbs. We understand the unique challenges of marine environments, from salt-laden winds to driving rain.",
            benefits: ["Specialized Anti-Corrosion", "High-End Finishes", "Strict Noise Regulations", "Discrete Operations"],
            keywords: ["Atlantic Seaboard maintenance", "Waterproofing Clifton", "Painting Camps Bay", "Luxury home maintenance Cape Town", "Coastal property repairs"],
            locations: ["Clifton", "Bantry Bay", "Camps Bay", "Fresnaye", "Llandudno", "Sea Point", "Green Point"],
            suburbDetails: {
                "clifton": {
                    introText: "Properties in Clifton face the harshest marine conditions in the Cape. Our maintenance team specializes in 316-grade stainless steel restoration and waterproofing systems designed to withstand direct salt spray and driving Atlantic storms.",
                    benefits: ["Marine-Grade Waterproofing", "Holiday Rental Turnarounds", "Rust Treatment for Gates"]
                },
                "bantry-bay": {
                    introText: "Protected from the wind but exposed to the salt, Bantry Bay homes require vigilant corrosion control. We provide specialized exterior coatings that protect luxury finishes from the relentless marine environment.",
                    benefits: ["Salt-Resistant Painting", "Window Seal Waterproofing", "Luxury Villa Maintenance"]
                },
                "camps-bay": {
                    introText: "Camps Bay properties face unique challenges from the Atlantic Seaboard's salt-laden air and strong driving winds. Our specialized waterproofing and painting solutions are designed to protect luxury villas against coastal corrosion and moisture intrusion.",
                    benefits: ["Salt Spray Protection", "Premium Finishes", "Discrete & Secure Teams"]
                },
                "fresnaye": {
                    introText: "Perched high on the slopes of Lion's Head, Fresnaye homes enjoy sun but battle UV damage and wind. Our UV-resistant coatings and windproof waterproofing details ensure your property stays pristine year-round.",
                    benefits: ["UV-Resistant Coatings", "Wind Damage Repair", "High-Access Painting"]
                },
                "llandudno": {
                    introText: "Isolated and exposed, Llandudno properties need robust defense against the elements. We offer comprehensive maintenance solutions that respect the tranquility and privacy of this exclusive enclave.",
                    benefits: ["Storm Damage Repair", "Timber Deck Maintenance", "Privacy-Focused Service"]
                },
                "sea-point": {
                    introText: "From high-rise apartments to ocean-facing homes, Sea Point properties battle constant salt mist. We specialize in spalling repair and waterproofing for promenade-facing sectional titles.",
                    benefits: ["Concrete Spalling Repair", "Body Corporate Services", "Balcony Waterproofing"]
                },
                "green-point": {
                    introText: "Urban living meets the ocean in Green Point. We handle everything from Victorian roof restorations to modern apartment block maintenance, dealing with both age and damp.",
                    benefits: ["Heritage Roof Repairs", "Damp Proofing", "Apartment Renovations"]
                }
            }
        },
        {
            title: "Southern Suburbs",
            slug: "southern-suburbs",
            href: "/areas/southern-suburbs",
            description: "Estate & Heritage Home Maintenance.",
            heroImage: "/images/areas/southern-suburbs-hero.png",
            introText: "From Constantia to Newlands, we provide specialized care for established family homes and heritage properties.",
            benefits: ["Heritage Restoration", "Roof Cleaning & Painting", "Garden Cottage Renovations", "Estate Compliant"],
            keywords: ["Southern Suburbs maintenance", "Constantia waterproofing", "Heritage home restoration", "Roof painting Newlands", "Damp proofing Southern Suburbs"],
            locations: ["Constantia", "Bishopscourt", "Newlands", "Claremont", "Rondebosch", "Wynberg", "Tokai"],
            suburbDetails: {
                "constantia": {
                    introText: "Surrounded by ancient oaks, Constantia homes often struggle with blocked gutters and damp. Our white-glove team provides leaf protection systems and heritage-compliant waterproofing for your estate.",
                    benefits: ["Leaf Gutter Guards", "Slate Roof Repairs", "Rising Damp Treatment"]
                },
                "bishopscourt": {
                    introText: "In the prestigious Bishopscourt area, we offer discreet, high-end maintenance for expansive properties. From slate roof maintenance to tennis court painting, we protect your legacy assets.",
                    benefits: ["Estate Management", "Slate & Tile Roofing", "Tennis Court Maintenance"]
                },
                "newlands": {
                    introText: "With the highest rainfall in the city, Newlands homes need superior waterproofing. We specialize in tree-root barrier systems and managing local groundwater issues for historic homes.",
                    benefits: ["Heavy Rain Waterproofing", "Tree Root Management", "Mould & Algae Removal"]
                },
                "claremont": {
                    introText: "From Harfield Village cottages to upper Claremont estates, we manage rising damp in older structures and provide modern finishes for family homes.",
                    benefits: ["Cottage Renovations", "Injection Damp Proofing", "Roof Sealant"]
                },
                "rondebosch": {
                    introText: "Protecting student accommodation and family homes alike. We understand the specific needs of Rondebosch's Victorian and Edwardian architecture, including intricate fascia and barge board repairs.",
                    benefits: ["Victorian Restoration", "Student Digs Maintenance", "Timber Preservation"]
                },
                "wynberg": {
                    introText: "Historic Wynberg properties require a sensitive touch. We offer heritage-approved restoration services, focusing on lath-and-plaster repairs and sash window waterproofing.",
                    benefits: ["Heritage Compliance", "Sash Window Repairs", "Lime Plaster Work"]
                },
                "tokai": {
                    introText: "Bordering the forest, Tokai homes face pollen, leaves, and shade-related damp. Our teams ensure your roof cavities are sealed and your exterior walls are protected from fungal growth.",
                    benefits: ["Fungal Wash Treatments", "Roof Cavity Sealing", "Forest Debris Cleaning"]
                }
            }
        },
        {
            title: "Northern Suburbs",
            slug: "northern-suburbs",
            href: "/areas/northern-suburbs",
            description: "Luxury Estate Maintenance.",
            heroImage: "/images/areas/northern-suburbs-hero.png",
            introText: "Comprehensive construction and maintenance services for the rapidly growing Northern Suburbs and lifestyle estates.",
            benefits: ["New Build Snagging", "Roof Painting", "Paving Cleaning", "Complex Maintenance"],
            keywords: ["Northern Suburbs maintenance", "Durbanville roof painting", "Estate maintenance Northern Suburbs", "Waterproofing Bellville", "Home repairs Plattekloof"],
            locations: ["Durbanville", "Bellville", "Plattekloof", "Welgemoed", "Brackenfell"],
            suburbDetails: {
                "durbanville": {
                    introText: "In the heat of Durbanville, roof paint fades fast. We use UV-reflective coatings to cool your home and seal your tiled roof against thermal shock.",
                    benefits: ["Heat-Reflective Paint", "Tiled Roof Restoration", "Facebrick Sealing"]
                },
                "bellville": {
                    introText: "As a bustling hub in the Northern Suburbs, Bellville homes and businesses require durable, long-lasting maintenance. From roof painting in Loevenstein to waterproofing in Boston, we provide cost-effective solutions for family homes and commercial properties.",
                    benefits: ["Cost-Effective", "Roof Painting", "Commercial & Residential"]
                },
                "plattekloof": {
                    introText: "With panoramic views comes exposure to the elements. We ensure your Plattekloof palace stays pristine with high-pressure cleaning and elastomeric wall coatings that flex with thermal expansion.",
                    benefits: ["Elastomeric Wall Coatings", "Panoramic Window Sealing", "Paving Refurbishment"]
                },
                "welgemoed": {
                    introText: "Bordering the golf course means specific aesthetic standards. We provide HOA-compliant painting and neat, efficient service for Welgemoed family homes.",
                    benefits: ["HOA Compliant Paint", "Golf Estate Service", "Roof Rubberizing"]
                },
                "brackenfell": {
                    introText: "Practical solutions for modern family homes. We offer rapid-response plumbing and affordable roof maintenance packages for Brackenfell residents.",
                    benefits: ["Affordable Maintenance", "Geyser Replacement", "Rubber Roof Paint"]
                }
            }
        },
        {
            title: "Winelands",
            slug: "winelands",
            href: "/areas/winelands",
            description: "High-Value Property Care.",
            heroImage: "/images/hero-services-gold.png",
            introText: "Serving the prestigious estates of Paarl, Franschhoek, and Stellenbosch with premium maintenance solutions.",
            benefits: ["Val de Vie Accredited", "Farm Maintenance", "Hospitality Renovations", "Long-distance Teams"],
            keywords: ["Winelands property maintenance", "Farm maintenance Paarl", "Stellenbosch waterproofing", "Franschhoek estate maintenance", "Val de Vie contractors"],
            locations: ["Paarl", "Stellenbosch", "Franschhoek", "Val de Vie", "Pearl Valley"],
            suburbDetails: {
                "paarl": {
                    introText: "Paarl's scorching summers demand superior paint technology. We apply heat-barrier coatings that protect your surfaces and lower indoor temperatures during the summer heat.",
                    benefits: ["Thermal Barrier Paint", "Agricultural Painting", "Dust-Resistant Coatings"]
                },
                "stellenbosch": {
                    introText: "Maintaining student flats and historic wine farms with equal care. We specialize in lime wash applications for historic buildings and robust waterproofing for new developments.",
                    benefits: ["Lime Wash Application", "Historic Restoration", "Student Accommodation"]
                },
                "franschhoek": {
                    introText: "French flair meets Cape construction. We provide discrete, high-end maintenance for Franschhoek's holiday homes and guesthouses, ensuring they are guest-ready year-round.",
                    benefits: ["Guesthouse Maintenance", "Turnkey Holiday Care", "Luxury Finishes"]
                },
                "val-de-vie": {
                    introText: "Working within South Africa's top estate requires perfection. Our teams are fully accredited for Val de Vie, adhering to strict security and conduct protocols while delivering flawless results.",
                    benefits: ["Val de Vie Accredited", "Strict Security Compliance", "Premium Estate Care"]
                },
                "pearl-valley": {
                    introText: "Protecting golf estate properties from stray balls and harsh sun. We offer specialized glass replacement and exterior wood treatments for Pearl Valley homes.",
                    benefits: ["Exterior Wood Treatment", "Glass Replacement", "Golf Course Homes"]
                }
            }
        },
        {
            title: "City Bowl",
            slug: "city-bowl",
            href: "/areas/city-bowl",
            description: "Urban Property Solutions.",
            heroImage: "/images/hero-background.png",
            introText: "Fast, efficient updates for City Bowl apartments and heritage offices. We handle the logistics of CBD work.",
            benefits: ["Apartment Renovations", "Body Corporate Work", "Interior Design Support", "Access Control"],
            keywords: ["City Bowl maintenance", "Apartment renovations Cape Town", "Vredehoek waterproofing", "Heritage restoration City Bowl", "Tamboerskloof home repairs"],
            locations: ["Vredehoek", "Oranjezicht", "Tamboerskloof", "Gardens", "Higgovale"],
            suburbDetails: {
                "vredehoek": {
                    introText: "Directly in the path of the Cape Doctor, Vredehoek roofs take a beating. We specialize in reinforcing roof sheets and waterproofing box gutters against horizontal rain.",
                    benefits: ["Wind-Resistant Roofing", "Box Gutter Relining", "Facade Waterproofing"]
                },
                "oranjezicht": {
                    introText: "Restoring the grandeur of Oranjezicht's heritage homes requires skill. We fix leaks in complex roof valleys and restore Victorian facades to their original glory.",
                    benefits: ["Valley Gutter Repairs", "Heritage Facades", "Chimney Waterproofing"]
                },
                "tamboerskloof": {
                    introText: "Protecting German-style mansions and tiered gardens from water runoff. We provide specialized drainage solutions and retaining wall waterproofing for sloping Tamboerskloof plots.",
                    benefits: ["Retaining Wall Waterproofing", "Drainage Solutions", "German Slate Repairs"]
                },
                "gardens": {
                    introText: "Managing maintenance in dense urban environments. We handle logistics for difficult-access row houses, fixing shared parapet walls and aging roof structures.",
                    benefits: ["Parapet Wall Repair", "Rope Access Painting", "Shared Roof Waterproofing"]
                },
                "higgovale": {
                    introText: "High up on Table Mountain, water runoff is a major challenge. We install heavy-duty drainage and tanking systems to keep your mountainside home dry.",
                    benefits: ["Sub-soil Drainage", "Video Gutter Inspection", "Basement Tanking"]
                }
            }
        },
    ],
    legal: [
        { title: "Privacy Policy", href: "/privacy", icon: Lock },
        { title: "Terms of Service", href: "/terms", icon: FileText },
    ],
    tools: [
        { title: "AI Quote Engine", href: "/quote", icon: Calculator, description: "Get an instant visual estimate." },
        { title: "Book Online", href: "/contact", icon: CalendarCheck, description: "Schedule a site assessment." },
    ]
};
