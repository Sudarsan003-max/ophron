import { useState } from "react";
import { SectionHead } from "./About";
import {
  MaskedHeadline,
  ScrollReveal,
  TiltCard,
  CornerBrackets,
} from "./ui/animations";

const reasons = [
  {
    n: "01",
    icon: "✦",
    title: "20+ Years of Operational Expertise",
    items: [
      "Two decades delivering spotless outcomes across Singapore's top kitchens, hotels & corporate towers",
      "140+ active commercial contracts with industry-leading client retention",
      "Track record measured in audited renewals and long-standing partnerships",
      "Specialized protocols built for Michelin dining, luxury resorts & central kitchens",
    ],
  },
  {
    n: "02",
    icon: "⛨",
    title: "NEA Licensed Cleaning Operator",
    items: [
      "Fully licensed by the National Environment Agency (NEA Singapore)",
      "Hospital-grade & food-safe chemistry matching SFA & HACCP compliance",
      "Documented batch-level chemical usage logs ready for immediate health audits",
      "Electrostatic spraying and ULV fogging certified for baseline pathogen suppression",
    ],
  },
  {
    n: "03",
    icon: "↑",
    title: "bizSAFE Level 3 Certified Framework",
    items: [
      "Workplace Safety & Health Council (WSH Council) certified risk management",
      "bizSAFE-compliant tool-box safety briefings conducted before every shift",
      "Working-at-height, heavy degreasing & chemical handling certified crews",
      "Audited site method statements ensuring zero workplace disruption",
    ],
  },
  {
    n: "04",
    icon: "⊕",
    title: "WSQ-Trained & Supervisor-Led Crew",
    items: [
      "WSQ cleaning operations certified, uniformed, badged & security-screened",
      "Dedicated on-site supervisor with a direct escalation line to your facility director",
      "Strict colour-coded microfibre protocol preventing cross-contamination",
      "24/7 Rapid Incident Hotline (+65 9295 1155) for emergency call-outs & deep cleans",
    ],
  },
];

export default function WhyUs() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleExpand = (idx: number) => {
    setExpandedCard(expandedCard === idx ? null : idx);
    setTimeout(() => {
      (window as any).__lenis?.resize();
    }, 100);
  };

  return (
    <section id="why" className="relative py-10 sm:py-16 bg-[#EDE5DA] overflow-hidden" style={{ background: "#EDE5DA" }}>
      <div className="mx-auto max-w-[1400px] px-4 sm:px-5">
        <SectionHead n="006" label="Why Choose OPHRON" />

        <div className="mt-6 sm:mt-8 grid lg:grid-cols-12 gap-6 lg:gap-10 items-end">
          <div className="lg:col-span-7">
            <MaskedHeadline
              as="h2"
              className="font-canela text-[34px] sm:text-[54px] lg:text-[76px] leading-[0.95] tracking-tight text-[#032147] font-bold"
              staggerMs={100}
              lines={[
                "Not another vendor.",
                <>
                  An infrastructure <span className="font-serif-i italic text-[#B7A38B]">operating partner.</span>
                </>,
              ]}
            />
          </div>
          <div className="lg:col-span-5 font-inter text-[14px] sm:text-[15px] leading-relaxed text-[#032147]/80 max-w-md lg:ml-auto">
            <ScrollReveal variant="left" delay={150}>
              <p>
                We exclusively power hospitality & commercial facilities across Singapore — providing 20+ years of operational discipline, NEA regulatory compliance, and supervisor-signed accountability.
              </p>
            </ScrollReveal>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 grid md:grid-cols-2 gap-4 sm:gap-6">
          {reasons.map((r, idx) => {
            const isExp = expandedCard === idx;
            return (
              <ScrollReveal key={r.title} variant="up" delay={idx * 80}>
                <TiltCard
                  maxTilt={6}
                  className="group relative bg-[#EDE5DA] text-[#032147] p-5 sm:p-7 transition duration-300 rounded-[24px] sm:rounded-[28px] border border-[#B7A38B]/40 hover:bg-[#032147] hover:text-[#EDE5DA] hover:border-[#B7A38B] shadow-lg flex flex-col justify-between h-full"
                >
                  <CornerBrackets color="#B7A38B" size={12} hoverSize={18} />
                  <div>
                    <div className="flex items-start justify-between">
                      <span className="grid place-items-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#032147] text-[#B7A38B] text-lg sm:text-xl font-bold group-hover:bg-[#B7A38B] group-hover:text-[#032147] transition duration-300 group-hover:scale-110">
                        {r.icon}
                      </span>
                      <span className="font-mono text-[11px] tracking-[0.22em] text-[#B7A38B] font-bold">[ {r.n} / 04 ]</span>
                    </div>
                    <h3 className="mt-4 sm:mt-5 font-canela text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-[#032147] group-hover:text-white transition duration-300 leading-snug">
                      {r.title}
                    </h3>
                    <ul className="mt-3.5 sm:mt-4 space-y-2 border-t border-[#032147]/10 group-hover:border-white/10 pt-3 sm:pt-3.5">
                      {(isExp ? r.items : r.items.slice(0, 2)).map((it) => (
                        <li key={it} className="flex items-start gap-2.5 sm:gap-3 text-[13px] sm:text-[13.5px] font-inter text-[#032147]/85 group-hover:text-[#EDE5DA]/90 leading-relaxed">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#B7A38B] flex-none" />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Expand/Collapse Toggle for Mobile and compact overview */}
                    <button
                      type="button"
                      onClick={() => toggleExpand(idx)}
                      className="mt-2 text-[11px] font-mono font-bold text-[#B7A38B] hover:underline cursor-pointer inline-flex items-center gap-1"
                    >
                      {isExp ? "▲ Show less" : `▼ View all ${r.items.length} points`}
                    </button>
                  </div>

                  <div className="mt-4 sm:mt-5 pt-3 sm:pt-3.5 flex items-center justify-between border-t border-[#032147]/10 group-hover:border-white/15">
                    <span className="text-[10.5px] sm:text-[11px] font-mono uppercase tracking-[0.15em] text-[#B7A38B] font-bold">100% SLA Verified</span>
                    <span className="grid place-items-center h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-[#032147] text-[#EDE5DA] group-hover:bg-[#B7A38B] group-hover:text-[#032147] transition duration-300 font-bold group-hover:translate-x-1 text-sm">
                      →
                    </span>
                  </div>
                </TiltCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
