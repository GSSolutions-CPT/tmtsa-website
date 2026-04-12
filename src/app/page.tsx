import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { BentoCard, BentoGrid } from "@/components/ui/BentoGrid";
import { CTABanner } from "@/components/ui/CTABanner";
import { DynamicHero } from "@/components/ui/DynamicHero";
import { FAQ } from "@/components/ui/FAQ";
import { ReviewsTicker } from "@/components/ui/ReviewsTicker";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { StatsBar } from "@/components/ui/StatsBar";
import { Droplets, Paintbrush, ShieldCheck, Wrench, BadgeCheck, UserCheck, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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
    <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      {/* 1. HERO SECTION */}
      <DynamicHero />

      {/* 1.5. STATS BAR */}
      <StatsBar />

      {/* 2. SEO INTRO SECTION */}
      <section className="py-24 bg-white text-center relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
        <div className="absolute -top-[300px] -left-[300px] w-[600px] h-[600px] bg-tmt-orange/[0.03] rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-[200px] -right-[200px] w-[500px] h-[500px] bg-tmt-orange/[0.03] rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <ScrollReveal>
            <span className="inline-block text-tmt-orange font-bold uppercase tracking-[0.2em] text-xs mb-6 border border-tmt-orange/20 px-4 py-2 rounded-full bg-tmt-orange/5">
              Trusted Since 2015
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-black mb-8 leading-tight">
              Cape Town&apos;s Trusted{" "}
              <span className="text-tmt-orange">Waterproofing</span> &{" "}
              <span className="text-tmt-orange">Roofing</span> Experts
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-neutral-500 text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto">
              The Maintenance Team (TMT) is Cape Town&apos;s premier contractor for <strong className="text-neutral-700">industrial waterproofing</strong>, <strong className="text-neutral-700">roof painting</strong>, and <strong className="text-neutral-700">structural repairs</strong>.
              Serving the greater Cape Town area—from the <strong className="text-neutral-700">Atlantic Seaboard</strong> to <strong className="text-neutral-700">Durbanville</strong>—we deliver long-term solutions backed by our <strong className="text-neutral-700">10-year insurance-backed guarantee</strong>.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="w-24 h-1 bg-gradient-to-r from-tmt-orange to-amber-400 mx-auto rounded-full" />
          </ScrollReveal>
        </div>
      </section>

      {/* 3. SERVICES SECTION (Bento Grid) */}
      <section className="py-32 px-4 container mx-auto" id="services">
        <div className="mb-20 text-center">
          <ScrollReveal>
            <h2 className="text-black font-bold tracking-[0.2em] uppercase mb-6 text-xs bg-neutral-100 inline-block px-4 py-2 rounded-full border border-neutral-200">
              Our Expertise
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h3 className="font-heading text-5xl md:text-6xl font-black text-black tracking-tight leading-none">
              Industrial Power. <br />
              <span className="text-neutral-400 font-light">Residential Grace.</span>
            </h3>
          </ScrollReveal>
        </div>

        <ScrollReveal>
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
        </ScrollReveal>

        {/* Why Choose Us Section */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <BadgeCheck className="w-8 h-8" />,
              title: "10-Year Guarantee",
              description: "All our structural waterproofing and roof coating projects come with a fully comprehensive, insurance-backed warranty.",
            },
            {
              icon: <Wrench className="w-8 h-8" />,
              title: "Master Craftsmen",
              description: "Our teams are Sika and Abe approved applicators, trained to handle complex structural repairs and industrial coatings.",
            },
            {
              icon: <UserCheck className="w-8 h-8" />,
              title: "Owner Supervised",
              description: "Every project is personally overseen by our management team to ensure the highest standards of quality control.",
            },
          ].map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.15}>
              <div className="bg-white p-10 rounded-2xl border border-neutral-100 flex flex-col items-center text-center hover:border-tmt-orange/30 transition-all group shadow-sm hover:shadow-xl hover:shadow-tmt-orange/5 hover:-translate-y-2 duration-300">
                <div className="w-16 h-16 bg-tmt-orange/10 rounded-2xl flex items-center justify-center mb-6 text-tmt-orange group-hover:bg-tmt-orange group-hover:text-white transition-all duration-300 group-hover:rounded-xl group-hover:scale-110">
                  {item.icon}
                </div>
                <h4 className="font-heading font-bold text-xl mb-3 group-hover:text-tmt-orange transition-colors">{item.title}</h4>
                <p className="text-neutral-500 leading-relaxed">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 4. 3-Step Process Section */}
      <section className="py-28 bg-neutral-900 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-tmt-orange/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-tmt-orange/30 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-tmt-orange/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <ScrollReveal>
              <h2 className="text-tmt-orange font-bold tracking-[0.2em] uppercase mb-4 text-xs">How We Work</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h3 className="font-heading text-4xl md:text-6xl font-black">
                Hassle-Free <span className="text-neutral-600">Restoration</span>
              </h3>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative max-w-6xl mx-auto">
            {/* Connector Line (Desktop) — now gradient */}
            <div className="hidden md:block absolute top-14 left-[16%] right-[16%] h-px z-0">
              <div className="w-full h-full bg-gradient-to-r from-tmt-orange/20 via-tmt-orange/40 to-tmt-orange/20" />
              {/* Animated glow dot */}
              <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-tmt-orange rounded-full animate-pulse left-1/2 -translate-x-1/2 shadow-lg shadow-tmt-orange/50" />
            </div>

            {/* Step 1 */}
            <ScrollReveal delay={0}>
              <div className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-28 h-28 bg-neutral-800 border-2 border-neutral-700 rounded-2xl flex items-center justify-center mb-8 text-tmt-orange shadow-2xl relative group-hover:scale-110 group-hover:border-tmt-orange/50 transition-all duration-500 group-hover:shadow-tmt-orange/20">
                  <span className="text-3xl font-black">01</span>
                </div>
                <h4 className="font-heading font-bold text-2xl mb-4 group-hover:text-tmt-orange transition-colors">Request a Quote</h4>
                <p className="text-neutral-400 leading-relaxed max-w-xs">Contact us via WhatsApp or our online form. We&apos;ll respond within 2 hours to schedule a site visit.</p>
              </div>
            </ScrollReveal>

            {/* Step 2 */}
            <ScrollReveal delay={0.15}>
              <div className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-28 h-28 bg-neutral-800 border-2 border-neutral-700 rounded-2xl flex items-center justify-center mb-8 text-tmt-orange shadow-2xl group-hover:scale-110 group-hover:border-tmt-orange/50 transition-all duration-500 group-hover:shadow-tmt-orange/20">
                  <span className="text-3xl font-black">02</span>
                </div>
                <h4 className="font-heading font-bold text-2xl mb-4 group-hover:text-tmt-orange transition-colors">Site Assessment</h4>
                <p className="text-neutral-400 leading-relaxed max-w-xs">Our expert assesses the damage, identifies the root cause, and provides a detailed, itemized proposal.</p>
              </div>
            </ScrollReveal>

            {/* Step 3 */}
            <ScrollReveal delay={0.3}>
              <div className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-28 h-28 bg-gradient-to-br from-tmt-orange to-amber-600 border-2 border-tmt-orange/50 rounded-2xl flex items-center justify-center mb-8 text-white shadow-2xl shadow-tmt-orange/30 group-hover:scale-110 transition-all duration-500 relative overflow-hidden">
                  <span className="text-3xl font-black relative z-10">03</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <h4 className="font-heading font-bold text-2xl mb-4 group-hover:text-tmt-orange transition-colors">Project Execution</h4>
                <p className="text-neutral-400 leading-relaxed max-w-xs">Our team arrives on time, works efficiently, and leaves your property cleaner than we found it.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 5. PROJECT SPOTLIGHT (Before/After) */}
      <section className="py-32 bg-neutral-50 relative overflow-hidden">
        {/* Subtle geometric accents */}
        <div className="absolute top-20 left-10 w-40 h-40 border border-neutral-200 rounded-full opacity-60 pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-64 h-64 border border-neutral-200 rounded-full opacity-40 pointer-events-none" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-tmt-orange/[0.03] rounded-full blur-[80px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row gap-20 items-center">

            <div className="w-full md:w-1/2">
              <ScrollReveal direction="left">
                <h2 className="inline-flex items-center gap-3 text-black text-xs font-bold uppercase tracking-[0.2em] mb-8 border-l-2 border-tmt-orange pl-4">
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
                    <ShieldCheck className="w-6 h-6 text-tmt-orange" />
                    <span className="uppercase tracking-widest text-sm">Certificate Issued</span>
                  </div>
                </div>

                {/* View All Projects link */}
                <Link href="/services" className="inline-flex items-center gap-2 mt-8 text-tmt-orange font-bold uppercase tracking-wider text-sm group">
                  View All Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </ScrollReveal>
            </div>

            <div className="w-full md:w-1/2">
              <ScrollReveal direction="right">
                <BeforeAfterSlider
                  beforeImage={latestProject?.beforeImageUrl || "/images/project-spotlight-before.jpg"}
                  afterImage={latestProject?.afterImageUrl || "/images/project-spotlight-after.jpg"}
                  className="shadow-2xl shadow-black/20 border-0 rounded-2xl"
                />
                <p className="text-[10px] text-center text-neutral-400 mt-4 uppercase tracking-[0.3em]">Drag to Compare</p>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* 6. REVIEWS TICKER */}
      <section className="py-12 bg-tmt-orange">
        <h2 className="sr-only">Client Reviews</h2>
        <ReviewsTicker />
      </section>

      {/* 7. CTA BANNER */}
      <CTABanner />

      {/* 8. FAQ SECTION */}
      <FAQ />

    </main>
  );
}
