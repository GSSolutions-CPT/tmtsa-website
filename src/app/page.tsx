import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { BentoCard, BentoGrid } from "@/components/ui/BentoGrid";
import { DynamicHero } from "@/components/ui/DynamicHero";
import { FAQ } from "@/components/ui/FAQ";
import { ReviewsTicker } from "@/components/ui/ReviewsTicker";
import { Droplets, Paintbrush, ShieldCheck, Wrench } from "lucide-react";
import Image from "next/image";
import bentoIndustrial from "../../public/images/bento-industrial.png";
import bentoResidential from "../../public/images/bento-residential-bright.png";
import bentoCleaning from "../../public/images/bento-cleaning-bright.png";
import { db } from "@/db";
import { projects } from "@/db/schema";
import { desc } from "drizzle-orm";

export const revalidate = 3600; // Revalidate every hour

export default async function HomePage() {
  // Fetch the latest project from the database only if fetching is possible
  let latestProject = null;
  try {
    if (process.env.POSTGRES_URL) {
      latestProject = await db.query.projects.findFirst({
        orderBy: [desc(projects.createdAt)],
      });
    }
  } catch (error) {
    console.warn("Database connection failed during build/render:", error);
  }

  return (
    <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white pb-20">
      {/* 1. HERO SECTION */}
      <DynamicHero />

      {/* 2. SERVICES SECTION (Bento Grid) */}
      <section className="py-32 px-4 container mx-auto" id="services">
        <div className="mb-20 text-center">
          <h2 className="text-black font-bold tracking-[0.2em] uppercase mb-6 text-xs bg-neutral-100 inline-block px-4 py-2 rounded-full border border-neutral-200">
            Our Expertise
          </h2>
          <h3 className="font-heading text-5xl md:text-6xl font-black text-black tracking-tight leading-none">
            Industrial Power. <br />
            <span className="text-neutral-400 font-light">Residential Grace.</span>
          </h3>
        </div>

        <BentoGrid className="max-w-7xl mx-auto h-auto md:h-[600px] auto-rows-[minmax(0,1fr)]">
          {/* Large Tile: Waterproofing */}
          <BentoCard
            className="md:col-span-2 md:row-span-2"
            title="Waterproofing"
            description="Lateral damp & roofing systems using industrial-grade sealants."
            cta="View Solutions"
            href="/services/waterproofing"
            icon={<Droplets className="w-10 h-10 text-white" />}
            header={
              <Image
                src={bentoIndustrial}
                alt="Professional Industrial Waterproofing Services in Cape Town"
                fill
                className="object-cover opacity-80 transparent"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
            }
          />

          {/* Medium Tile: Painting */}
          <BentoCard
            className="md:col-span-1 md:row-span-1"
            title="Painting"
            description="Premium interior & exterior coatings."
            icon={<Paintbrush className="w-8 h-8 text-neutral-400" />}
            href="/services/painting-roofing"
            header={
              <Image
                src={bentoResidential}
                alt="Expert Residential Painting and Decorating Services"
                fill
                className="object-cover opacity-80"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            }
          />

          {/* Small Tile: Cleaning */}
          <BentoCard
            className="md:col-span-1 md:row-span-1"
            title="Cleaning"
            description="High-pressure roof & paving restoration."
            icon={<Wrench className="w-8 h-8 text-neutral-400" />}
            href="/services/paving-cleaning"
            header={
              <Image
                src={bentoCleaning}
                alt="Commercial and Residential Cleaning Services"
                fill
                className="object-cover opacity-80"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            }
          />
        </BentoGrid>
      </section>

      {/* 3. PROJECT SPOTLIGHT (Before/After) */}
      <section className="py-32 bg-neutral-50 border-t border-neutral-200 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row gap-20 items-center">

            <div className="w-full md:w-1/2">
              <h2 className="inline-flex items-center gap-3 text-black text-xs font-bold uppercase tracking-[0.2em] mb-8 border-l-2 border-black pl-4">
                Project Spotlight
              </h2>
              <h3 className="font-heading text-5xl md:text-7xl font-bold text-black mb-8 leading-[0.9]">
                {latestProject ? latestProject.title.split(' ')[0] : 'Becott'} <br />
                <span className="text-neutral-400 font-light">
                  {latestProject ? latestProject.title.split(' ').slice(1).join(' ') : 'Heights.'}
                </span>
              </h3>
              <div className="space-y-8 text-neutral-600 font-sans text-xl leading-relaxed">
                <p>
                  <strong className="text-black block mb-2 text-sm uppercase tracking-wide">The Challenge</strong>
                  {latestProject ? latestProject.description : 'Leaking balconies causing structural decay and spalling concrete.'}
                </p>
                <p>
                  <strong className="text-black block mb-2 text-sm uppercase tracking-wide">The Solution</strong>
                  Comprehensive restoration with industrial-grade finish.
                </p>

                <div className="flex items-center gap-3 text-black font-bold mt-12 pt-12 border-t border-neutral-200">
                  <ShieldCheck className="w-6 h-6" />
                  <span className="uppercase tracking-widest text-sm">Certificate Issued</span>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <BeforeAfterSlider
                beforeImage={latestProject?.beforeImageUrl || "/images/project-spotlight-before.jpg"}
                afterImage={latestProject?.afterImageUrl || "/images/project-spotlight-after.jpg"}
                className="shadow-2xl shadow-black/20 border-0"
              />
              <p className="text-[10px] text-center text-neutral-400 mt-4 uppercase tracking-[0.3em]">Drag to Compare</p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. REVIEWS TICKER */}
      <section className="py-12 bg-tmt-orange">
        <h2 className="sr-only">Client Reviews</h2>
        <ReviewsTicker />
      </section>

      {/* 5. FAQ SECTION */}
      <FAQ />

    </main>
  );
}
