export type ServiceLocation = {
    slug: string;
    service: string;
    location: string;
    title: string;
    description: string;
    content: string; // HTML content (Intro text)
    heroImage?: string;
    // Structured Data for Enhanced Visuals
    structuredData?: {
        processSteps?: { title: string; description: string; }[];
        features?: { title: string; description?: string; }[];
        faqs?: { question: string; answer: string; }[];
        commonSigns?: { title: string; description: string; }[];
    };
    keywords?: string[];
};

export const SERVICE_LOCATIONS: ServiceLocation[] = [
    {
        slug: "waterproofing-cape-town",
        service: "Waterproofing",
        location: "Cape Town",
        heroImage: "/images/services/hero-waterproofing.png",
        title: "Premier Waterproofing Contractors Cape Town | 10-Year Guarantee",
        description: "Stop leaks permanently. TMT specializes in industrial-grade torch-on waterproofing for roofs, balconies, and concrete slabs in Cape Town.",
        content: `
            <h2>The No.1 Solution for Cape Winter Leaks</h2>
            <p>In Cape Town, waterproofing isn't a luxury—it's a necessity. The combination of torrential winter rains and blistering summer heat causes standard sealants to crack and fail. At <strong>The Maintenance Team (TMT)</strong>, we don't just patch leaks; we engineer permanent solutions.</p>
            
            <h3>Our Waterproofing Systems</h3>
            <p>We utilize industrial-grade materials suited for the harsh Western Cape climate, including 4mm Torch-on membranes for flat roofs and specialized cementitious slurries for retaining walls.</p>

            <h3>Why Choose TMT for Waterproofing?</h3>
            <p>Leak detection is an art. Our team uses moisture mapping to identify the root cause of water ingress, ensuring we fix the problem at the source, not just the symptom. Every full waterproofing project comes with a <strong>CERTIFIED 10-YEAR GUARANTEE</strong>.</p>
             <blockquote>
                "Water damage is progressive. A small damp spot today is a structural failure tomorrow. Protect your asset with TMT."
            </blockquote>
            <h3>Areas We cover in Cape Town</h3>
            <p>From the Atlantic Seaboard to the Southern Suburbs, our mobile teams are ready to deploy. We treat every home with the same rigor as an industrial site—clean, efficient, and built to last.</p>
        `,
        structuredData: {
            commonSigns: [
                { title: "Rising Damp", description: "Tide marks or bubbling paint at the bottom of walls." },
                { title: "Mould Growth", description: "Black or green spots appearing on ceilings and cornices." },
                { title: "Efflorescence", description: "White, powdery salt deposits pushing through plaster." },
                { title: "Peeling Paint", description: "Paint flaking off due to moisture trapped behind the surface." }
            ],
            processSteps: [
                { title: "Moisture Assessment", description: "We use thermal cameras and moisture meters to pinpoint the exact source of the leak, not just the symptoms." },
                { title: "Surface Preparation", description: "All loose material is stripped back. We high-pressure clean the substrate to ensure perfect adhesion for the new system." },
                { title: "Crack Repair", description: "Structural cracks are opened and filled with flexible epoxy or cementitious slurry to prevent re-opening." },
                { title: "Waterproofing Application", description: "We apply a double-layer torch-on system or specialized liquid membrane, depending on the traffic and exposure of the area." },
                { title: "UV Protection", description: "The final layer is coated with high-quality silver aluminium paint or UV-stable topcoat to protect the bitumen from sun damage." }
            ],
            features: [
                { title: "10-Year Watertight Guarantee", description: "Peace of mind with a transferable warranty." },
                { title: "Industrial Grade Materials", description: "We use only SABS-approved 4mm membranes." },
                { title: "Certified Applicators", description: "Our teams are trained in correct heat-fusing techniques." },
                { title: "Lateral Damp Specialists", description: "Expertise in complex rising and lateral damp treatments." }
            ],
            faqs: [
                { question: "How long does torch-on waterproofing last?", answer: "When correctly applied and maintained with a silver coat every 2-3 years, a torch-on system can last over 10 years. We offer a 10-year guarantee on full systems." },
                { question: "Can you waterproof over existing tiles?", answer: "Yes, but it's not always recommended. If the substrate is wet, sealing over it traps moisture. We prefer to strip and seal the slab directly, but we can use specialized non-slip coatings for balconies if the screed is dry." },
                { question: "What causes rising damp?", answer: "Rising damp occurs when ground water is sucked up through the porous masonry of your walls. A failed or missing DPC (Damp Proof Course) is usually the culprit." },
                { question: "Is your work guaranteed?", answer: "Yes, we provide a 5 to 10-year guarantee on all major waterproofing projects, subject to routine maintenance." }
            ]
        },
        keywords: ["Waterproofing Cape Town", "Torch-on waterproofing", "Balcony waterproofing", "Damp proofing Cape Town", "Roof leak repair"]
    },
    {
        slug: "roof-painting-durbanville",
        service: "Roof Painting",
        location: "Durbanville",
        heroImage: "/images/services/hero-painting.png",
        title: "Expert Roof Painting & Restoration Durbanville",
        description: "Restore your home's value. High-pressure cleaning and airless spray painting services for tiled and metal roofs in Durbanville.",
        content: `
            <h2>Restore Value to Your Durbanville Home</h2>
            <p>A faded, moss-covered roof doesn't just look bad—it degrades your property's value. Durbanville's leafy environment often leads to heavy fungal and moss buildup on tiled roofs. <strong>The Maintenance Team</strong> restores your roof to showroom condition.</p>
            
            <h3>Thermal Efficiency</h3>
            <p>Modern roof coatings do more than look good. They reflect UV rays, lowering the internal temperature of your home during Durbanville's hot summers. Ask us about our <strong>Heat-Reflective Cool Roof</strong> options.</p>

            <h3>Why Spray Painting?</h3>
            <p>Airless spraying forces paint into the pores of the tiles, creating a stronger bond and a thicker film build than traditional rolling. The result is a finish that lasts 10+ years without peeling.</p>
        `,
        structuredData: {
            commonSigns: [
                { title: "Faded & Chalky Paint", description: "Roof color looking washed out or powdery to the touch (oxidation)." },
                { title: "Moss & Algae Growth", description: "Green or black growth on tiles, common in leafy suburbs like Durbanville." },
                { title: "Cracked Ridge Capping", description: "Cement between ridge tiles falling out, leading to leaks." },
                { title: "Rusted Screws/Flashing", description: "Visible corrosion on metal fasteners or valley flashings." }
            ],
            processSteps: [
                { title: "High-Pressure Cleaning", description: "We strip away years of dirt, moss, and flaking paint using industrial 250-bar pressure washers." },
                { title: "Fungicidal Wash", description: "We apply a chemical treatment to kill spore roots, preventing moss regrowth under the new paint." },
                { title: "Repair & Waterproofing", description: "Broken tiles are replaced, ridge capping is re-pointed, and flashings are sealed before painting begins." },
                { title: "Airless Spray Painting", description: "We apply premium pure-acrylic roof coatings using airless spray technology for a uniform, factory-finish coat." }
            ],
            features: [
                { title: "Airless Spray Technology", description: "Superior coverage and bonding compared to brush/roller." },
                { title: "Heat-Reflective Coatings", description: "Reduce internal temperatures by up to 5°C." },
                { title: "Rust Treatment", description: "Specialized primers for metal roof sheets and fixings." },
                { title: "Color Consulting", description: "Expert advice on modern roof color trends." }
            ],
            faqs: [
                { question: "Is spray painting better than hand painting?", answer: "Yes. Airless spraying atomizes the paint, forcing it into tile pores for better adhesion and a thicker, smoother finish." },
                { question: "How long does the paint last?", answer: "We use premium pure acrylics rated for 10-12 years in the South African sun." },
                { question: "Will cleaning damage my ceiling?", answer: "No. We utilize specialized angles and pressure control to enforce water runs down the roof, not up into the tiles." }
            ]
        },
        keywords: ["Roof painting Durbanville", "Airless spray painting", "Exterior house painting", "Roof coating", "Tile roof restoration"]
    },
    {
        slug: "structural-repairs-blouberg",
        service: "Structural Repairs",
        location: "Blouberg",
        heroImage: "/images/services/hero-structural.png",
        title: "Structural Repair & Spalling Experts Blouberg",
        description: "Fixing concrete cancer and cracks caused by sea spray. Specialized structural repairs for Bloubergstrand properties.",
        content: `
            <h2>Combating the 'Concrete Cancer' of the West Coast</h2>
            <p>Bloubergstrand offers beautiful views, but the salt-laden air is brutal on buildings. "Spalling" or concrete cancer occurs when steel reinforcing bars rust and expand, cracking the concrete from the inside out. This is a critical structural failure that requires expert intervention.</p>
            
            <h3>Crack Injection & Stitching</h3>
            <p>For non-structural cracks, we utilize epoxy injection systems that weld the masonry back together, preventing water ingress and further movement.</p>

            <h3>Don't Wait on Cracks</h3>
            <p>In Blouberg's corrosive environment, a small crack allows salt air to reach your rebar quickly. Early intervention saves tens of thousands in future heavy construction costs. Call TMT for a specialized structural assessment.</p>
        `,
        structuredData: {
            commonSigns: [
                { title: "Spalling (Concrete Cancer)", description: "Chunks of concrete falling off, exposing rusted steel bars." },
                { title: "Rust Stains", description: "Brown streaks running down walls from cracks." },
                { title: "Structural Cracks", description: "Deep cracks in columns, beams, or balconies (mostly horizontal or vertical)." },
                { title: "Hollow Sounding Concrete", description: "Areas that sound drummy or hollow when tapped." }
            ],
            processSteps: [
                { title: "Exposure & Assessment", description: "We mechanically remove damaged concrete to clearly expose the full extent of the corroded rebar." },
                { title: "Rust Treatment", description: "Steel is cleaned to a bright finish and treated with zinc-rich primers to permanently halt corrosion." },
                { title: "Bonding Agent", description: "A structural wet-to-dry epoxy bonding agent is applied to ensure the new mortar fuses with the old concrete." },
                { title: "Reinstatement", description: "We use high-strength, non-shrink structural mortars to rebuild the integrity of the column, beam, or balcony." }
            ],
            features: [
                { title: "Engineering Standards", description: "All repairs follow strict structural engineering protocols." },
                { title: "Sika & Abe Approved", description: "We use only industry-leading repair compounds." },
                { title: "Spalling Specialists", description: "Deep expertise in coastal corrosion issues." },
                { title: "Dust Control", description: "We manage the mess of chipping with strict containment protocols." }
            ],
            faqs: [
                { question: "Is spalling dangerous?", answer: "Yes. Falling chunks of concrete pose a severe safety risk, and untreated spalling weakens the building's support structure." },
                { question: "How long does a repair take?", answer: "It varies, but typically a balcony repair takes 3-5 days to allow for proper curing times between steps." },
                { question: "Can you match the existing paint/texture?", answer: "Yes, once the structural repair is cured, we plaster and paint to blend seamlessly with the existing wall." }
            ]
        },
        keywords: ["Spalling repair Blouberg", "Concrete restoration", "Crack injection", "Structural repairs", "Concrete cancer treatment"]
    },
    // GENERIC SERVICES (For /services main page linking)
    {
        slug: "waterproofing",
        service: "Waterproofing",
        location: "Cape Town",
        heroImage: "/images/services/hero-waterproofing.png", // Corrected path
        title: "Expert Waterproofing Contractors | Torch-on & Lateral Damp",
        description: "Industrial-grade waterproofing solutions. We specialize in torch-on systems for flat roofs and balconies, offering a 10-year guarantee against water ingress.",
        content: `
            <h2>Permanent Waterproofing Solutions</h2>
            <p>Water intrusion is the single biggest threat to your property's structural integrity. At <strong>The Maintenance Team</strong>, we employ advanced waterproofing systems designed to withstand the Cape's harsh winter rains and summer heat.</p>
            
            <img src="/images/services/content-waterproofing.png" alt="Waterproofing Guarantee" class="rounded-lg shadow-lg my-8 w-full block" />

            <h3>The TMT 10-Year Guarantee</h3>
            <p>We stand by our workmanship. All full waterproofing installations come with a certified 10-year guarantee, giving you peace of mind that your asset is protected.</p>
        `,
        structuredData: {
            commonSigns: [
                { title: "Rising Damp", description: "Tide marks or bubbling paint." },
                { title: "Mould Growth", description: "Black or green spots on ceilings." },
                { title: "Efflorescence", description: "White powdery salt deposits." }
            ],
            processSteps: [
                { title: "Moisture Mapping", description: "We identify the exact entry point of water utilizing thermal cameras." },
                { title: "Surface Preparation", description: "Stripping old bitumen and priming the substrate for a perfect bond." },
                { title: "Torch-on Application", description: "Heat-fusing 4mm reinforced bitumen membrane for a seamless seal." },
                { title: "Water Testing", description: "We flood test flat roofs to verify watertightness before signing off." }
            ],
            features: [
                { title: "10-Year Guarantee", description: "Fully transferable written warranty." },
                { title: "Certified Applicators", description: "Teams trained by major manufacturers." },
                { title: "Industrial Grade", description: "We don't use DIY-store products; only commercial specs." },
                { title: "All Surface Types", description: "Concrete, Zinc, Tiled, and Slate roofs." }
            ],
            faqs: [
                { question: "How long does torch-on waterproofing last?", answer: "10-15 years if maintained with a UV silver coat." },
                { question: "Do you do balcony waterproofing?", answer: "Yes, we specialize in under-tile balcony waterproofing systems." }
            ]
        },
        keywords: ["Waterproofing contractors Cape Town", "Torch-on waterproofing", "Balcony waterproofing", "Damp proofing", "Roof leaks"]
    },
    {
        slug: "painting-roofing",
        service: "Paint & Roof",
        location: "Cape Town",
        heroImage: "/images/services/hero-painting.png", // Corrected path
        title: "Interior & Exterior Painting | Roof Restoration",
        description: "Transform your property with our premium painting and roof restoration services. Airless spraying for roofs and expert interior finishing.",
        content: `
            <h2>Professional Painting & Decoration</h2>
            <p>A fresh coat of paint does more than just look good—it protects your home from the elements. We offer comprehensive residential painting services, from detailed interior trim to full exterior re-coating.</p>

            <img src="/images/services/content-painting.png" alt="Interior Painting" class="rounded-lg shadow-lg my-8 w-full block" />

            <h3>Roof Restoration Specialists</h3>
            <p>Don't replace your roof if you don't have to. Our restoration process extends the life of your roof by 10-15 years.</p>
        `,
        structuredData: {
            commonSigns: [
                { title: "Faded Paint", description: "Dull, oxidized exterior walls or roof." },
                { title: "Peeling & Flaking", description: "Paint lifting off the substrate." },
                { title: "Mould on Interior", description: "Black spots due to poor ventilation or leaks." }
            ],
            processSteps: [
                { title: "High-Pressure Cleaning", description: "Removing all moss, lichen, and oxidation." },
                { title: "Fungicidal Treatment", description: "Killing spores to prevent regrowth." },
                { title: "Repairs & Pointing", description: "Replacing broken tiles and fixing ridge capping." },
                { title: "Airless Spraying", description: "Applying heavy-duty roof coating for a brand-new look." }
            ],
            features: [
                { title: "Airless Technology", description: "Superior finish and adhesion." },
                { title: "Cool Roof Coatings", description: "Reduce heat build-up in your home." },
                { title: "Interior & Exterior", description: "Full house repainting services." },
                { title: "Color Consultation", description: "Expert advice on palettes and finishes." }
            ],
            faqs: [
                { question: "Is spray painting better than hand painting?", answer: "Yes, for roofs it provides far better coverage and pore penetration." },
                { question: "How long does it take?", answer: "An average home roof takes 2-3 days to clean, repair, and paint." }
            ]
        },
        keywords: ["Roof painting Cape Town", "Airless spray painting", "House painting", "Roof restoration", "Exterior painting"]
    },
    {
        slug: "plumbing",
        service: "Plumbing",
        location: "Cape Town",
        heroImage: "/images/services/hero-plumbing.png",
        title: "Residential Maintenance Plumbing & Repairs",
        description: "Reliable plumbing services for leak detection, blocked drains, and geyser maintenance. Fast turnaround times for emergencies.",
        content: `
            <h2>Reliable Maintenance Plumbing</h2>
            <p>From a dripping tap to a burst geyser, our plumbing division handles all general maintenance and emergency repairs. We pride ourselves on quick response times and tidy workmanship.</p>
        `,
        structuredData: {
            processSteps: [
                { title: "Leak Detection", description: "Using acoustic and thermal equipment to pinpoint hidden leaks." },
                { title: "Assessment & Quote", description: "We provide a clear, itemized quote before starting any work." },
                { title: "Repair & Replace", description: "Using SABS-approved parts for lasting repairs." },
                { title: "Testing & Certification", description: "Pressure testing and issuing COC certificates where required." }
            ],
            features: [
                { title: "24/7 Emergency", description: "We are available when you need us most." },
                { title: "PIRB Registered", description: "Qualified and compliant plumbers." },
                { title: "Geyser Wise", description: "Smart timer installation and repairs." },
                { title: "Blocked Drains", description: "High-pressure jetting services." }
            ],
            faqs: [
                { question: "Do you issue Plumbing COCs?", answer: "Yes, we can inspect and issue Certificates of Compliance for property transfers." },
                { question: "Do you help with insurance claims?", answer: "Yes, we provide detailed reports and photos to assist with your insurance claim." }
            ]
        }
    },
    {
        slug: "renovations",
        service: "Renovations",
        location: "Cape Town",
        heroImage: "/images/hero-services-gold.png",
        title: "Full-Service Bathroom & Kitchen Renovations",
        description: "Turnkey renovation services. We handle the entire project from demolition to tiling, plumbing, and electrical, delivering showroom-quality results.",
        content: `
            <h2>Turnkey Property Renovations</h2>
            <p>Renovating shouldn't be stressful. TMT offers a complete project management service for bathroom and kitchen makeovers. We coordinate all trades, so you only deal with one point of contact.</p>

            <img src="/images/services/content-renovation.png" alt="Bathroom Renovation" class="rounded-lg shadow-lg my-8 w-full block" />
        `,
        structuredData: {
            processSteps: [
                { title: "Consultation & Design", description: "We meet to discuss your vision, budget, and material choices." },
                { title: "Demolition & Prep", description: "Safe strip-out of old fixtures and carting away of rubble." },
                { title: "Installation", description: "Plumbing, electrical, tiling, and cabinetry installation by skilled tradesmen." },
                { title: "Snagging & Handover", description: "Final quality checks and cleaning before handover." }
            ],
            features: [
                { title: "Turnkey Project Management", description: "One contact person for the whole job." },
                { title: "Licensed Trades", description: "Qualified plumbers and electricians." },
                { title: "Quality Finishes", description: "Expert tiling and joinery." },
                { title: "On-Time Delivery", description: "We stick to the agreed schedule." }
            ],
            faqs: [
                { question: "Do I need plans?", answer: "For internal cosmetic changes, usually no. Structural changes will require plans." },
                { question: "How long does a bathroom renovation take?", answer: "Typically 10-14 working days, depending on the complexity." }
            ]
        },
        keywords: ["Bathroom renovations Cape Town", "Kitchen renovations", "Turnkey renovations", "Home improvements"]
    },
    {
        slug: "structural-repairs",
        service: "Structural Repairs",
        location: "Cape Town",
        heroImage: "/images/services/hero-structural.png", // Corrected path
        title: "Structural Repair Experts | Spalling & Cracks",
        description: "Specialized repair of structural cracks and concrete spalling. Essential maintenance for coastal properties dealing with salt corrosion.",
        content: `
            <h2>Protecting Structural Integrity</h2>
            <p>Coastal living takes a toll on buildings. 'Concrete cancer' or spalling occurs when reinforcing steel rusts and expands, cracking the concrete. If left untreated, this can compromise the building's safety.</p>

             <img src="/images/services/content-structural.png" alt="Structural Repairs" class="rounded-lg shadow-lg my-8 w-full block" />
        `,
        structuredData: {
            commonSigns: [
                { title: "Concrete Cancer", description: "Exploding concrete due to rusting steel." },
                { title: "Step Cracks", description: "Diagonal cracking in brickwork indicating settlement." },
                { title: "Rust Leaks", description: "Red/Brown stains leaching from walls." }
            ],
            processSteps: [
                { title: "Assess & Expose", description: "Exposing corroded rebar to determine the extent of damage." },
                { title: "Treat & Prime", description: "Anti-corrosion treatment for steel and bonding primers for concrete." },
                { title: "Repair Mortar", description: "Application of high-strength structural epoxy mortars." },
                { title: "Finish", description: "Plastering and painting to match the existing wall." }
            ],
            features: [
                { title: "Engineering Approved", description: "Methods that meet structural standards." },
                { title: "Sika Specialists", description: "We use top-tier repair products." },
                { title: "Spalling Experts", description: "Coastal corrosion specialists." },
                { title: "Safety First", description: "Strict safety protocols on all sites." }
            ],
            faqs: [
                { question: "Is spalling dangerous?", answer: "Yes, it weakens the structure and falling debris is a hazard." },
                { question: "Can you fix cracks in my walls?", answer: "Yes, we stitch cracks to prevent them from reopening." }
            ]
        },
        keywords: ["Structural repairs Cape Town", "Spalling repair", "Concrete cancer", "Crack stitching"]
    },
    {
        slug: "paving-cleaning",
        service: "Paving Cleaning",
        location: "Cape Town",
        heroImage: "/images/bento-cleaning-bright.png",
        title: "Paving Cleaning Cape Town | Specialist Driveway Sealing & Restoration",
        description: "Restore your home's curb appeal. Expert high-pressure paving cleaning, weed removal, and sealing services in Cape Town. Get a free quote today.",
        content: `
            <h2>Restore Your Paving to "Like New" Condition</h2>
            <p><strong>Professional Paving Cleaning, Sealing & Restoration in Cape Town</strong></p>
            <p>Is your driveway looking tired? Has your once-pristine patio been taken over by stubborn moss, weeds, and oil stains?</p>
            <p>In Cape Town’s coastal climate, paving takes a beating. Humidity promotes algae growth, winter rains wash away joint sand, and the summer sun fades natural stone. A dirty driveway doesn’t just look neglected—it becomes slippery and dangerous.</p>
            <p><strong>The Maintenance Man (TMT)</strong> provides industrial-grade high-pressure cleaning in Cape Town, restoring the original beauty of your paved surfaces. We don’t just blast dirt; we treat, clean, re-sand, and seal to protect your investment for years to come.</p>
        `,
        structuredData: {
            processSteps: [
                { title: "Chemical Pre-Treatment", description: "We apply an eco-friendly industrial degreaser and weed killer to break down stubborn oil stains, black algae, and root systems between pavers." },
                { title: "Industrial High-Pressure Cleaning", description: "Using commercial-grade rotary surface cleaners (not just standard garden sprayers), we strip away layers of dirt, moss, and grime without 'zebra striping'." },
                { title: "Joint Re-Sanding", description: "We stabilize your cobble and brick paving by replacing old sand with fresh, kiln-dried silica or polymeric sand to lock pavers in place." },
                { title: "Paving Sealing & Protection", description: "Once dry, we apply a premium penetrating sealer to act as a barrier against oil leaks, wine spills, and UV fading." }
            ],
            features: [
                { title: "Estate Compliant (Val de Vie, Silverhurst)", description: "We ensure your driveway meets strict HOA aesthetic guidelines." },
                { title: "\"White Glove\" Property Care", description: "We carefully protect surrounding flower beds, pool pumps, and painted walls." },
                { title: "Specialist Material Knowledge", description: "Custom pressure settings for delicate sandstone vs exposed aggregate." },
                { title: "Owner-Managed Supervision", description: "Every job is overseen to ensure high standards." }
            ],
            faqs: [
                { question: "Will high-pressure cleaning damage my plants or grass?", answer: "No. We pre-soak surrounding vegetation and use biodegradable cleaning agents. For sensitive landscaped gardens in areas like Constantia, we use barriers to control runoff." },
                { question: "How long does paving sealing last?", answer: "A high-quality sealer typically lasts 2–3 years. We recommend a 'maintenance coat' every 24 months to keep your patio looking pristine." },
                { question: "Do you remove oil stains from driveways?", answer: "We use bio-degradable degreasers with a high success rate. Deeply penetrated oil in porous stone may not be 100% removable but can be significantly lightened." },
                { question: "Why do I need to re-sand my paving?", answer: "Re-sanding is critical to prevent pavers from shifting, wobbling, or sinking over time, acting as the 'glue' that holds them together." }
            ]
        },
        keywords: ["Paving cleaning Cape Town", "Driveway sealing", "High pressure cleaning", "Paving restoration"]
    }
];

export const getServiceBySlug = (slug: string) => SERVICE_LOCATIONS.find(s => s.slug === slug);
