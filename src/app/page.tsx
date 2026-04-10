import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { BentoCard, BentoGrid } from "@/components/ui/BentoGrid";
import { DynamicHero } from "@/components/ui/DynamicHero";
import { FAQ } from "@/components/ui/FAQ";
import { ReviewsTicker } from "@/components/ui/ReviewsTicker";
import { Droplets, Paintbrush, ShieldCheck, Wrench, BadgeCheck, UserCheck } from "lucide-react";
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

      {/* 1.5. SEO INTRO SECTION */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-black mb-6">
            Cape Town’s Trusted <span className="text-tmt-orange">Waterproofing</span> & <span className="text-tmt-orange">Roofing</span> Experts
          </h2>
          <p className="text-neutral-600 text-lg leading-relaxed mb-8">
            The Maintenance Team (TMT) is Cape Town&apos;s premier contractor for <strong>industrial waterproofing</strong>, <strong>roof painting</strong>, and <strong>structural repairs</strong>.
            Serving the greater Cape Town area—from the <strong>Atlantic Seaboard</strong> to <strong>Durbanville</strong>—we deliver long-term solutions backed by our <strong>10-year insurance-backed guarantee</strong>.
            Whether you have rising damp, spalling concrete, or a leaking roof, our master craftsmen use Sika and Abe approved systems to restore and protect your property.
          </p>
          <div className="w-24 h-1 bg-tmt-orange mx-auto rounded-full"></div>
        </div>
      </section>

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
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 66vw, 800px"
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
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 33vw, 400px"
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
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 33vw, 400px"
              />
            }
          />
        </BentoGrid>

        {/* NEW: Why Choose Us Section */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-100 flex flex-col items-center text-center hover:border-tmt-orange/30 transition-colors group">
            <div className="w-16 h-16 bg-tmt-orange/10 rounded-full flex items-center justify-center mb-6 text-tmt-orange group-hover:bg-tmt-orange group-hover:text-white transition-colors">
              <BadgeCheck className="w-8 h-8" />
            </div>
            <h4 className="font-heading font-bold text-xl mb-3">10-Year Guarantee</h4>
            <p className="text-neutral-600">All our structural waterproofing and roof coating projects come with a fully comprehensive, insurance-backed warranty.</p>
          </div>
          <div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-100 flex flex-col items-center text-center hover:border-tmt-orange/30 transition-colors group">
            <div className="w-16 h-16 bg-tmt-orange/10 rounded-full flex items-center justify-center mb-6 text-tmt-orange group-hover:bg-tmt-orange group-hover:text-white transition-colors">
              <Wrench className="w-8 h-8" />
            </div>
            <h4 className="font-heading font-bold text-xl mb-3">Master Craftsmen</h4>
            <p className="text-neutral-600">Our teams are Sika and Abe approved applicators, trained to handle complex structural repairs and industrial coatings.</p>
          </div>
          <div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-100 flex flex-col items-center text-center hover:border-tmt-orange/30 transition-colors group">
            <div className="w-16 h-16 bg-tmt-orange/10 rounded-full flex items-center justify-center mb-6 text-tmt-orange group-hover:bg-tmt-orange group-hover:text-white transition-colors">
              <UserCheck className="w-8 h-8" />
            </div>
            <h4 className="font-heading font-bold text-xl mb-3">Owner Supervised</h4>
            <p className="text-neutral-600">Every project is personally overseen by our management team to ensure the highest standards of quality control.</p>
          </div>
        </div>
      </section>

      {/* NEW: 3-Step Process Section */}
      <section className="py-24 bg-neutral-900 text-white border-y border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-tmt-orange font-bold tracking-[0.2em] uppercase mb-4 text-xs">How We Work</h2>
            <h3 className="font-heading text-4xl md:text-5xl font-black">Hassle-Free Restoration</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative max-w-6xl mx-auto">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-neutral-800 z-0"></div>

            {/* Step 1 */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-neutral-800 border-4 border-neutral-900 rounded-full flex items-center justify-center mb-8 text-tmt-orange shadow-xl relative group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-black">1</span>
              </div>
              <h4 className="font-heading font-bold text-2xl mb-4 group-hover:text-tmt-orange transition-colors">Request a Quote</h4>
              <p className="text-neutral-400 leading-relaxed max-w-xs">Contact us via WhatsApp or details form. We&apos;ll respond within 2 hours to schedule a site visit.</p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-neutral-800 border-4 border-neutral-900 rounded-full flex items-center justify-center mb-8 text-tmt-orange shadow-xl group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-black">2</span>
              </div>
              <h4 className="font-heading font-bold text-2xl mb-4 group-hover:text-tmt-orange transition-colors">Site Assessment</h4>
              <p className="text-neutral-400 leading-relaxed max-w-xs">Our expert assesses the damage, identifies the root cause, and provides a detailed, itemized proposal.</p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-tmt-orange border-4 border-neutral-900 rounded-full flex items-center justify-center mb-8 text-black shadow-xl group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-black">3</span>
                <div className="absolute inset-0 border border-tmt-orange rounded-full animate-ping opacity-20"></div>
              </div>
              <h4 className="font-heading font-bold text-2xl mb-4 group-hover:text-tmt-orange transition-colors">Project Execution</h4>
              <p className="text-neutral-400 leading-relaxed max-w-xs">Our team arrives on time, works efficiently, and leaves your property cleaner than we found it.</p>
            </div>
          </div>
        </div>
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
