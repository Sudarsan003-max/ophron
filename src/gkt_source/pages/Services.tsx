import { pexels } from "../data/gallery";
import { Reveal, SectionHead, SectionFade } from "../components/ui";
import { ClientMarquee, FooterServiceIndex, HotlineBand, PageHero, ServiceGrid } from "../components/shared";

/* [Section 2] Recognized Client Partner Logo Showcase */
function ClientShowcase() {
  return (
    <SectionFade className="border-b border-ink/10 bg-parchment py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mb-6 sm:mb-8 flex items-center gap-3 sm:gap-4">
          <span className="h-px w-8 sm:w-10 bg-brass" />
          <p className="font-mono text-[10px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] text-moss uppercase">
            Trusted by recognised client partners
          </p>
        </Reveal>
        <Reveal>
          <div className="border border-ink/15 bg-paper py-6 sm:py-8">
            <ClientMarquee compact />
          </div>
        </Reveal>
      </div>
    </SectionFade>
  );
}

/* [Section 3] Full Cleaning Services Catalog Grid */
function Catalog() {
  return (
    <section className="bg-paper py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-8 sm:mb-12 flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            index="01"
            eyebrow="Full Services Catalog"
            lines={[
              "Six commercial services,",
              <span key="a">each with its own <em className="font-light">protocol.</em></span>,
            ]}
            lead="Every discipline below is delivered by a dedicated crew with written SOPs, NEA-approved chemistry and supervisor sign-off — standalone or composed into one managed contract."
          />
        </div>
        <ServiceGrid />
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <>
      {/* [Section 1] Hero Header */}
      <PageHero
        crumb="Services"
        titleLines={[
          "Professional Cleaning",
          "Services for",
          <span key="a">
            <em className="font-light text-brass-300">Commercial</em> Spaces.
          </span>,
        ]}
        lead="From daily janitorial programmes to outbreak-response disinfection — the full spectrum of commercial cleaning, engineered for Singapore's most demanding premises."
        image={pexels(6195115, 1000, 900)}
        imageAlt="GKT specialist equipped for a commercial deployment"
        meta={["6 Disciplines", "140+ Active Contracts", "24/7 Hotline"]}
      />
      <ClientShowcase />
      <Catalog />
      <HotlineBand />
      <FooterServiceIndex />
    </>
  );
}
