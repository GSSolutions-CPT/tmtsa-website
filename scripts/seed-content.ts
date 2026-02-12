import "dotenv/config";
import { db } from "@/db";
import { blogPosts, projects } from "@/db/schema";


async function seed() {
    console.log("🌱 Seeding Content...");

    // 1. Add "True Cost of Waterproofing" Blog Post
    const blogTitle = "The True Cost of Waterproofing in Cape Town (2025 Guide)";
    const blogSlug = "cost-of-waterproofing-cape-town-2025";

    // Check if exists
    const existingPost = await db.query.blogPosts.findFirst({
        where: (posts, { eq }) => eq(posts.slug, blogSlug)
    });

    if (!existingPost) {
        await db.insert(blogPosts).values({
            title: blogTitle,
            slug: blogSlug,
            imageUrl: "/images/blog/cost-guide-hero.png", // We'll need to make sure this image exists or use a placeholder
            isPublished: true,
            content: `
                <h2>Is Cheap Waterproofing Really Cheaper?</h2>
                <p>When quotes for a standard roof waterproofing job in Cape Town range from R5,000 to R50,000, it's easy to get confused. Why the massive price difference?</p>
                <p>In this guide, we break down the <strong>real costs</strong> of waterproofing per square meter, and why "cheap" fixes often end up costing double in the long run.</p>

                <h3>Average Costs per m² (2025 Estimates)</h3>
                <ul>
                    <li><strong>Torch-on Maintenance (Silver Coat only):</strong> R85 - R120 per m²</li>
                    <li><strong>Standard 4mm Torch-on (New Layer):</strong> R250 - R450 per m²</li>
                    <li><strong>Board & Torch (Full Replacement):</strong> R650 - R950 per m²</li>
                </ul>

                <h3>Factors Influencing Price</h3>
                <p><strong>1. Accessibility:</strong> High-rope access for apartments costs more than a single-storey house.<br>
                <strong>2. Substrate Condition:</strong> Does the old bitumen need stripping? This is labor-intensive.<br>
                <strong>3. Warranty:</strong> A contractor offering a 10-year insurance-backed guarantee will charge more than a "bakkie builder".</p>

                <blockquote>"The bitterness of poor quality remains long after the sweetness of low price is forgotten."</blockquote>

                <h3>Hidden Costs to Watch Out For</h3>
                <p>Always ask if the quote includes <strong>rubble removal</strong> and <strong>flashing repairs</strong>. Many low-ball quotes exclude these essentials.</p>
            `,
            createdAt: new Date(),
        });
        console.log("✅ Blog Post Created");
    } else {
        console.log("ℹ️ Blog Post already exists");
    }

    // 2. Add Sample Projects for Camps Bay (Area Page Test)
    const campsBayProject = await db.query.projects.findFirst({
        where: (p, { eq }) => eq(p.title, "Luxury Villa Waterproofing")
    });

    if (!campsBayProject) {
        await db.insert(projects).values({
            title: "Luxury Villa Waterproofing",
            location: "Camps Bay, Atlantic Seaboard",
            description: "Complete strip and seal of a 500m² concrete roof deck. Installed double-layer torch-on system with silver UV protection.",
            afterImageUrl: "/images/projects/camps-bay-roof.png", // Placeholder path
            createdAt: new Date(),
        });
        console.log("✅ Camps Bay Project Created");
    }

    // 3. Add Sample Projects for Durbanville (Area Page Test)
    const durbanvilleProject = await db.query.projects.findFirst({
        where: (p, { eq }) => eq(p.title, "Durbanville Roof Restoration")
    });

    if (!durbanvilleProject) {
        await db.insert(projects).values({
            title: "Durbanville Roof Restoration",
            location: "Durbanville, Northern Suburbs",
            description: "High-pressure clean and airless spray of a 350m² tiled roof. Color changed to Charcoal Grey.",
            afterImageUrl: "/images/projects/durbanville-roof.png", // Placeholder path
            createdAt: new Date(),
        });
        console.log("✅ Durbanville Project Created");
    }

    console.log("🏁 Seeding Complete!");
    process.exit(0);
}

seed().catch((err) => {
    console.error("❌ Seeding failed:", err);
    process.exit(1);
});
