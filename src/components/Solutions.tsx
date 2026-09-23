import { useState } from "react";
import { SectionHead } from "./About";
import ServiceDetailModal from "./ServiceDetailModal";
import { OPHRON_SERVICE_PAGES } from "../data/ophronServicePages";
import {
  AnimatedCounter,
  MaskedHeadline,
  ScrollReveal,
  TiltCard,
  ExpandRule,
  CornerBrackets,
  CurtainRevealImage,
} from "./ui/animations";

type Pillar = {
  id: string;
  name: string;
  subtitle: string;
  tag: string;
  purpose: string;
  services: string[];
  positioning: string;
  targetCustomer: string;
  highlight?: boolean;
};

const pillars: Pillar[] = [
  {
    id: "people",
    name: "OPHRON PEOPLE",
    subtitle: "Manpower & Workforce Solutions",
    tag: "Pillar 01 · People",
    purpose: "Eliminates staffing bottlenecks and labor shortages for hospitality, hotels & commercial kitchens across Singapore.",
    positioning: "Strategic workforce partner providing vetted, WSQ-trained hospitality manpower on demand.",
    targetCustomer: "Hotels, F&B Groups, Resorts, Serviced Apartments & Central Kitchens.",
    services: [
      "F&B Stewarding Manpower",
      "Kitchen Helpers",
      "Dishwasher Manpower",
      "Stewarding Staff",
      "Venue Utility Personnel",
      "Kitchen & Back-of-House Support",
      "Outsourced Cleaning Manpower",
      "Facility Operations Support",
    ],
  },
  {
    id: "hygiene",
    name: "OPHRON HYGIENE",
    subtitle: "Cleaning, Sanitation & Specialized Hygiene",
    tag: "Pillar 02 · Hygiene",
    purpose: "Guarantees 100% SFA/NEA regulatory compliance, exhaust fire safety, clinical cleanroom sterility, and indoor air excellence.",
    positioning: "Comprehensive hygiene authority ensuring sterile, audit-ready operational environments.",
    targetCustomer: "Commercial Establishments, F&B Kitchens, Healthcare Facilities & Hotels.",
    highlight: true,
    services: [
      "Commercial Office & Showroom Cleaning",
      "Commercial Kitchen & Line Degreasing",
      "Exhaust Hood, Duct & Grease Traps",
      "Disinfection, Decontamination & ULV Cold Fogging",
      "Cleanrooms & Healthcare Facility Maintenance",
      "80°C Carpet & Upholstery Steam Extraction",
      "Planetary Diamond & Powder Marble Polishing",
      "Indoor Air Quality (IAQ) & UV-C Sterilization",
    ],
  },
  {
    id: "facilities",
    name: "OPHRON FACILITIES",
    subtitle: "Facility, Property & Venue Services",
    tag: "Pillar 03 · Facility Services",
    purpose: "Streamlines building operations, rope access abseiling, event turnovers, post-renovation cleans, and luxury yacht detailing.",
    positioning: "Integrated facility management partner reducing asset downtime and vendor complexity.",
    targetCustomer: "Resorts, Multi-Location F&B Chains, Hotels, Commercial Towers & Marinas.",
    services: [
      "High-Rise Façade & IRATA Rope Access Abseiling",
      "Events & Exhibition Venue Maintenance & Resets",
      "Integrated Facility Management (IFM Lite)",
      "Post-Renovation & Handover Deep Cleaning",
      "Marina & Luxury Superyacht Detailing",
      "Pest Control & Waste Management Coordination",
      "Minor Handyman & Daily Facility Cleaning",
    ],
  },
  {
    id: "technology",
    name: "OPHRON TECHNOLOGY",
    subtitle: "SaaS & Operations Automation",
    tag: "Pillar 04 · Technology",
    purpose: "Digitizes real-time reporting, shift management, and automated workflow monitoring.",
    positioning: "Next-gen operational software suite powering smart hospitality operations.",
    targetCustomer: "Hotel Operators, Restaurant Chains & Facility Directors in SG & Globally.",
    services: [
      "Restaurant and hotel technology",
      "AI automation & digital reporting",
      "Operations management software",
      "Workforce scheduling solutions",
      "Real-time customer dashboards",
      "Sales and marketing technology",
    ],
  },
  {
    id: "intelligence",
    name: "COMMERCIAL INTELLIGENCE",
    subtitle: "Revenue & Efficiency Optimization",
    tag: "Pillar 05 · Commercial Intelligence",
    purpose: "Translates operational data into direct cost reduction and margin enhancement.",
    positioning: "Data-driven advisory maximizing labor efficiency and commercial performance.",
    targetCustomer: "Executive Leadership, C-Suite & Financial Controllers across Hospitality.",
    services: [
      "Cost reduction programs",
      "Labor optimization & productivity",
      "Hygiene compliance audit advisory",
      "Executive operational reporting",
      "Revenue and efficiency optimization",
    ],
  },
];

export default function Solutions() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  const specializedServices = Object.values(OPHRON_SERVICE_PAGES);

  return (
    <section id="services" className="relative py-28 bg-paper overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-5">
        <SectionHead n="003" label="Platform Solutions & Specialized Services" />

        <div className="mt-12 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <MaskedHeadline
              as="h2"
              className="font-canela font-bold text-[38px] sm:text-[58px] lg:text-[76px] leading-[0.95] tracking-tight text-ink"
              lines={[
                <>
                  The <AnimatedCounter value={5} /> Pillars powering
                </>,
                <>
                  <span className="font-serif-i text-[#B7A38B]">hospitality operations.</span>
                </>,
              ]}
            />
          </div>
          <ScrollReveal variant="right" className="lg:col-span-4 lg:ml-auto">
            <p className="font-inter text-[15px] leading-relaxed text-ink/75 max-w-md">
              Instead of fragmented vendors, OPHRON provides a single, fully-integrated operational infrastructure across Singapore & international markets.
            </p>
          </ScrollReveal>
        </div>

        {/* Master 5 Pillars with 3D Tilt Cards */}
        <div className="mt-14 grid lg:grid-cols-3 gap-6 scroll-reveal-stagger">
          {pillars.slice(0, 3).map((p) => (
            <TiltCard key={p.id} maxTilt={6} className="h-full rounded-[28px]">
              <PillarCard pillar={p} onSelect={() => setActiveSlug(p.id)} />
            </TiltCard>
          ))}
        </div>

        <div className="mt-6 grid lg:grid-cols-2 gap-6 max-w-[1000px] mx-auto scroll-reveal-stagger">
          {pillars.slice(3).map((p) => (
            <TiltCard key={p.id} maxTilt={6} className="h-full rounded-[28px]">
              <PillarCard pillar={p} onSelect={() => setActiveSlug(p.id)} />
            </TiltCard>
          ))}
        </div>

        {/* Specialized Operational Services Sub-Header */}
        <div className="mt-28 pt-10">
          <ExpandRule className="border-[#032147]/15 mb-14" />
          <div className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#B7A38B] font-bold">[ 100% Operational Service Breakdown ]</div>
          <div className="mt-4 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <MaskedHeadline
                as="h3"
                className="font-canela font-bold text-3xl sm:text-5xl text-[#032147] tracking-tight"
                lines={[
                  <>
                    Specialized Hygiene & Facility <span className="font-serif-i italic text-[#B7A38B]">Services</span>
                  </>
                ]}
              />
              <p className="mt-3 font-inter text-[15px] text-[#032147]/80 max-w-xl">
                Explore the complete scope, protocols, equipment specs, and FAQs for our full spectrum of specialized operational service offerings across Singapore.
              </p>
            </div>
            <span className="text-[12px] font-mono uppercase tracking-[0.15em] text-[#B7A38B] font-bold">
              ✦ Click Any Service for Full Layout & Protocol ✦
            </span>
          </div>

          {/* 6 Specialized Services Grid with Curtain Reveal & Tilt */}
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 scroll-reveal-stagger">
            {specializedServices.map((srv) => {
              const overviewBlock = srv.sections.find((s) => s.kind === "overview");
              return (
                <TiltCard
                  key={srv.slug}
                  maxTilt={5}
                  className="rounded-3xl"
                  onClick={() => setActiveSlug(srv.slug)}
                >
                  <div className="group relative cursor-pointer rounded-3xl bg-[#EDE5DA] border border-[#B7A38B]/30 p-7 flex flex-col justify-between hover:bg-[#032147] hover:text-[#EDE5DA] transition-all duration-500 shadow-lg overflow-hidden h-full">
                    <CornerBrackets color="#B7A38B" size={12} hoverSize={18} />
                    
                    <div>
                      <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-6 bg-[#032147]/10 shadow-md">
                        <img
                          src={srv.heroImage}
                          alt={srv.heroTitle}
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 ken-burns"
                          loading="eager"
                        />
                        <CornerBrackets color="#B7A38B" size={12} hoverSize={18} />
                        <div className="absolute top-3 left-3 z-20 bg-[#032147]/95 backdrop-blur-sm text-[#EDE5DA] group-hover:bg-[#B7A38B] group-hover:text-[#032147] px-3 py-1 rounded-full text-[9.5px] font-mono uppercase font-bold tracking-[0.1em] transition duration-300 shadow">
                          {srv.crumb}
                        </div>
                        <div className="absolute bottom-3 right-3 z-20 bg-black/60 backdrop-blur-sm text-white/90 px-2.5 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-[0.15em] font-semibold opacity-0 group-hover:opacity-100 transition duration-300">
                          HD Protocol
                        </div>
                      </div>

                      <h4 className="font-montserrat font-bold text-xl sm:text-2xl text-[#032147] group-hover:text-white transition duration-300 tracking-tight">
                        {srv.heroTitle}
                      </h4>
                      <p className="mt-3 font-inter text-[13.5px] leading-relaxed text-[#032147]/80 group-hover:text-[#EDE5DA]/80 transition duration-300 line-clamp-3">
                        {srv.heroLead}
                      </p>

                      {overviewBlock && overviewBlock.kind === "overview" && overviewBlock.bullets && (
                        <div className="mt-5 space-y-2 border-t border-[#032147]/10 group-hover:border-white/10 pt-4">
                          {overviewBlock.bullets.slice(0, 3).map((b, bIdx) => (
                            <div key={bIdx} className="flex items-center gap-2 text-[12px] font-inter text-[#032147]/85 group-hover:text-[#EDE5DA]/90">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#B7A38B]" />
                              <span className="line-clamp-1">{b}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="mt-7 pt-4 flex items-center justify-between border-t border-[#032147]/15 group-hover:border-white/20">
                      <span className="text-[11px] font-mono uppercase tracking-[0.1em] text-[#B7A38B] font-bold">100% Scope & FAQs</span>
                      <span className="grid place-items-center h-8 w-8 rounded-full bg-[#032147] text-[#EDE5DA] group-hover:bg-[#B7A38B] group-hover:text-[#032147] font-bold transition duration-300">
                        →
                      </span>
                    </div>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>

        <ScrollReveal variant="up" delay={200} className="mt-16 text-center text-[12px] font-mono uppercase tracking-[0.22em] text-ink/60 font-semibold">
          ✦ Unified Master Platform · Custom SLA Agreements for Singapore & International Hospitality ✦
        </ScrollReveal>
      </div>

      {/* Full Service Detail Modal */}
      <ServiceDetailModal serviceSlug={activeSlug} onClose={() => setActiveSlug(null)} />
    </section>
  );
}

function PillarCard({ pillar, onSelect }: { pillar: Pillar; onSelect?: () => void }) {
  const h = pillar.highlight;
  return (
    <TiltCard
      maxTilt={6}
      className={`group relative rounded-[28px] p-8 flex flex-col justify-between overflow-hidden h-full shadow-lg ${
        h ? "bg-[#032147] text-[#EDE5DA] border-2 border-[#B7A38B] shadow-2xl" : "bg-[#EDE5DA] text-[#032147] border border-[#B7A38B]/40"
      }`}
      style={h ? { background: "#032147", color: "#EDE5DA" } : { background: "#EDE5DA", color: "#032147" }}
    >
      <CornerBrackets color="#B7A38B" size={12} hoverSize={18} />
      {h && (
        <>
          <div className="absolute -top-32 -right-20 h-64 w-64 rounded-full bg-[#B7A38B]/20 blur-3xl pointer-events-none" />
          <div className="absolute top-4 right-4 text-[9px] font-mono uppercase tracking-[0.2em] bg-[#B7A38B] text-[#032147] px-3 py-1 rounded-full font-bold">★ Core Pillar</div>
        </>
      )}

      <div>
        <div className="flex items-center justify-between">
          <span className={`text-[10px] font-mono uppercase tracking-[0.22em] ${h ? "text-[#B7A38B]" : "text-[#032147]/60"} font-bold`}>
            {pillar.tag}
          </span>
          <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${h ? "bg-white/10 text-[#EDE5DA]" : "bg-[#032147]/10 text-[#032147]"}`}>
            {pillar.services.length} Services
          </span>
        </div>

        <h3 className={`mt-4 font-canela text-3xl font-bold tracking-tight ${h ? "text-white" : "text-[#032147]"}`}>
          {pillar.name}
        </h3>
        <p className="mt-1 font-montserrat text-[13px] font-semibold text-[#B7A38B]">
          {pillar.subtitle}
        </p>

        <p className={`mt-4 font-inter text-[14px] leading-relaxed ${h ? "text-[#EDE5DA]/85" : "text-[#032147]/80"}`}>
          {pillar.purpose}
        </p>

        <div className={`mt-4 rounded-2xl p-4 ${h ? "bg-white/5 border border-white/10" : "bg-white/50 border border-[#032147]/10"}`}>
          <div className={`text-[10px] font-mono uppercase tracking-[0.2em] font-bold ${h ? "text-[#B7A38B]" : "text-[#032147]/70"}`}>Strategic Positioning</div>
          <div className={`mt-1 font-inter text-[12.5px] ${h ? "opacity-90" : "text-[#032147]"}`}>{pillar.positioning}</div>
        </div>

        <div className="mt-5 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#B7A38B] font-bold">Service Scope ({pillar.services.length})</span>
            {onSelect && (
              <button
                type="button"
                onClick={onSelect}
                className="text-[10px] font-mono text-[#B7A38B] hover:underline uppercase font-bold cursor-pointer"
              >
                View Blueprint ↗
              </button>
            )}
          </div>
          <ul className="space-y-1.5">
            {pillar.services.map((s, idx) => (
              <li key={idx} className="flex items-start gap-2 text-[12.5px] font-inter leading-tight">
                <span className={`text-[10px] font-bold mt-0.5 ${h ? "text-[#B7A38B]" : "text-[#032147]"}`}>✓</span>
                <span className={h ? "opacity-85" : "text-[#032147]/85"}>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-[#032147]/10 flex flex-col gap-3">
        <div className="flex items-center justify-between text-[11px] font-mono">
          <span className="opacity-60">Target Customer</span>
          <span className="font-bold text-[#B7A38B] truncate max-w-[200px]" title={pillar.targetCustomer}>{pillar.targetCustomer}</span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {onSelect && (
            <button
              type="button"
              onClick={onSelect}
              className={`rounded-full py-2 text-[12px] font-montserrat font-bold transition text-center cursor-pointer ${
                h ? "border border-white/20 hover:bg-white/10 text-white" : "border border-[#032147]/20 hover:bg-[#032147]/10 text-[#032147]"
              }`}
            >
              Learn Scope ↗
            </button>
          )}
          <a
            href="#contact"
            className={`group/btn inline-flex items-center justify-center rounded-full py-2 px-3 text-[12px] font-montserrat font-bold transition ${
              h ? "bg-[#B7A38B] text-[#032147] hover:bg-white" : "bg-[#032147] text-[#EDE5DA] hover:bg-[#B7A38B] hover:text-[#032147]"
            } ${!onSelect ? "col-span-2" : ""}`}
            style={!h ? { background: "#032147", color: "#EDE5DA" } : {}}
          >
            Request Audit →
          </a>
        </div>
      </div>
    </TiltCard>
  );
}
