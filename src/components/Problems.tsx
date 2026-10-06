import { useState } from "react";
import { SectionHead } from "./About";
import {
  MaskedHeadline,
  ScrollReveal,
  AnimatedCounter,
  ExpandRule,
} from "./ui/animations";

const problems = [
  {
    n: "01",
    title: "Manpower Shortages & High Stewarding Churn",
    shortDesc: "Inconsistent casual labor, unvetted kitchen helpers, and weekend staffing shortages driving thin F&B margins.",
    items: [
      "Inconsistent back-of-house staffing & casual labor reliability",
      "Severe labor shortages during peak service & weekend surges",
      "Absence of WSQ-certified, supervisor-led deployment",
      "Unpredictable overtime costs eating into thin F&B margins",
    ],
  },
  {
    n: "02",
    title: "SFA Hygiene Demerits, Canopy Grease & Fire Risks",
    shortDesc: "Grease buildup in exhaust ducts, foul grease traps, and demerit points risking forced SFA audit suspensions.",
    items: [
      "Heavy grease accumulation in exhaust hoods & ventilation ducts",
      "Persistent grease trap odors & drainage backup risks",
      "Lack of documented batch-level chemical records for SFA audits",
      "Poor washroom hygiene damaging guest reviews & ratings",
    ],
  },
  {
    n: "03",
    title: "Fragmented Multi-Vendor Chaos & Rising Overhead",
    shortDesc: "Coordinating 5+ disconnected vendors for cleaning, manpower, and repairs with zero unified SLA accountability.",
    items: [
      "Managing 5+ separate vendors with zero unified reporting",
      "Sudden kitchen equipment & facility breakdown downtime",
      "Unsynchronized vendor schedules disrupting guest experience",
      "Escalating vendor invoices with zero SLA accountability",
    ],
  },
];

export default function Problems() {
  return (
    <section id="problems" className="relative py-10 sm:py-16 bg-[#032147] overflow-hidden" style={{ background: "#032147", color: "#EDE5DA" }}>
      {/* Subtle dot bg */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(rgba(237,229,218,1) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative mx-auto max-w-[1400px] px-5">
        <SectionHead n="003" label="Operational Realities" light />

        <div className="mt-6 sm:mt-8 grid lg:grid-cols-12 gap-6 sm:gap-10">
          <div className="lg:col-span-7">
            <MaskedHeadline
              as="h2"
              className="font-canela text-[32px] sm:text-[54px] lg:text-[72px] leading-[0.96] tracking-tight text-white font-bold"
              staggerMs={100}
              lines={[
                <>
                  The operational <span className="font-serif-i italic text-[#B7A38B]">frictions</span>
                </>,
                <>
                  we eliminate <span className="text-[#B7A38B]">every shift.</span>
                </>,
              ]}
            />
          </div>
          <div className="lg:col-span-5 lg:pt-3">
            <ScrollReveal variant="left" delay={100}>
              <p className="text-[14px] sm:text-[15.5px] font-inter leading-relaxed text-[#EDE5DA]/80">
                Singapore's hospitality and commercial venues battle three recurring bottlenecks: manpower churn, strict SFA compliance, and multi-vendor chaos. OPHRON unifies the solution under one accountable platform.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Problems list */}
        <div className="mt-8 border-t border-white/10">
          {problems.map((p, idx) => (
            <ScrollReveal key={p.n} variant={idx % 2 === 0 ? "left" : "right"} delay={idx * 60}>
              <ProblemRow p={p} />
            </ScrollReveal>
          ))}
        </div>

        <ExpandRule className="border-white/15 my-6" />

        {/* CTA strip */}
        <ScrollReveal variant="scale">
          <div className="rounded-2xl sm:rounded-3xl bg-[#EDE5DA] text-[#032147] p-5 sm:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 border border-[#B7A38B]/30 shadow-xl">
            <div className="flex items-start gap-3.5">
              <span className="grid place-items-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#032147] text-[#B7A38B] text-lg sm:text-xl font-bold shrink-0">
                ✓
              </span>
              <div>
                <div className="font-canela font-bold text-xl sm:text-2xl lg:text-3xl tracking-tight text-[#032147]">
                  Solved across <AnimatedCounter value={140} suffix="+" /> Singapore venues.
                </div>
                <div className="text-[12.5px] sm:text-[13.5px] font-inter text-[#032147]/75 mt-0.5">
                  5-star hotel towers, luxury banquets & commercial central kitchens.
                </div>
              </div>
            </div>
            <a
              href="/services"
              className="group inline-flex items-center gap-2 rounded-full bg-[#032147] text-[#EDE5DA] pl-5 pr-2 py-2 text-[12px] sm:text-[13px] font-montserrat font-bold hover:bg-[#B7A38B] hover:text-[#032147] transition shrink-0 hover:scale-105"
              style={{ color: "#EDE5DA" }}
            >
              Explore Solutions
              <span className="grid place-items-center h-8 w-8 rounded-full bg-[#B7A38B] text-[#032147] transition-transform group-hover:rotate-45 font-bold text-xs">
                →
              </span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function ProblemRow({ p }: { p: { n: string; title: string; shortDesc: string; items: string[] } }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      onClick={() => setExpanded(!expanded)}
      className="group relative border-b border-white/10 py-4 sm:py-6 grid grid-cols-12 gap-3 sm:gap-6 hover:bg-white/[0.04] transition cursor-pointer"
    >
      {/* Number */}
      <div className="col-span-2 md:col-span-1">
        <div className="font-mono text-[10px] sm:text-[11px] tracking-[0.2em] text-[#B7A38B] font-bold">[ {p.n} ]</div>
      </div>
      {/* Title */}
      <div className="col-span-10 md:col-span-5">
        <h3 className="font-canela text-xl sm:text-2xl md:text-3xl font-bold tracking-tight leading-tight text-white transition group-hover:text-[#B7A38B]">
          {p.title}
        </h3>
        {/* Mobile short desc */}
        <p className="mt-1.5 text-xs text-[#EDE5DA]/70 font-inter md:hidden leading-relaxed">
          {p.shortDesc}
        </p>
      </div>
      {/* Items (Clean desktop list, expandable on mobile) */}
      <div className="col-span-12 md:col-span-5 hidden md:block">
        <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-1.5">
          {p.items.map((it) => (
            <li key={it} className="flex items-start gap-2 text-[12.5px] font-inter text-[#EDE5DA]/80 leading-snug">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#B7A38B] flex-none" />
              <span>{it}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* Mobile expanded drawer */}
      {expanded && (
        <div className="col-span-12 block md:hidden pt-2 border-t border-white/10 mt-2 animate-in fade-in duration-200">
          <ul className="space-y-1.5">
            {p.items.map((it) => (
              <li key={it} className="flex items-start gap-2 text-xs font-inter text-[#EDE5DA]/90">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#B7A38B] flex-none" />
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="col-span-12 md:col-span-1 flex justify-end items-start">
        <span className="grid place-items-center h-8 w-8 sm:h-9 sm:w-9 rounded-full border border-white/15 text-[#B7A38B] transition group-hover:bg-[#B7A38B] group-hover:text-[#032147] group-hover:rotate-45 font-bold text-xs">
          {expanded ? "−" : "→"}
        </span>
      </div>
    </div>
  );
}
