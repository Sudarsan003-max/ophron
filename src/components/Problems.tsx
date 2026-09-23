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
    title: "Critical manpower shortages & high stewarding churn",
    items: [
      "Inconsistent back-of-house staffing & casual labor reliability",
      "Unvetted stewarding crews failing workplace safety checks",
      "Severe labor shortages during peak service & weekend surges",
      "High managerial overhead recruiting & retraining replacements",
      "Absence of WSQ-certified, supervisor-led deployment",
      "Unpredictable overtime costs eating into thin F&B margins",
    ],
  },
  {
    n: "02",
    title: "SFA hygiene demerits, canopy grease & fire risks",
    items: [
      "Heavy grease accumulation in exhaust hoods & ventilation ducts",
      "Persistent grease trap odors & drainage backup risks",
      "Cross-contamination risks from uncalibrated chemical use",
      "Lack of documented batch-level chemical records for inspectors",
      "Demerit points & risk of forced SFA suspension during unannounced audits",
      "Poor washroom hygiene damaging guest reviews & ratings",
    ],
  },
  {
    n: "03",
    title: "Fragmented multi-vendor chaos & rising operational overhead",
    items: [
      "Managing 5+ separate vendors for cleaning, manpower, pest & waste",
      "No centralized SLA tracking, digital logs, or unified reporting",
      "Sudden kitchen equipment & facility breakdown downtime",
      "Lack of proactive maintenance and integrated facility care (IFM Lite)",
      "Unsynchronized schedules disrupting guest & tenant experience",
      "Escalating vendor invoices with zero accountability",
    ],
  },
];

export default function Problems() {
  return (
    <section id="problems" className="relative py-28 bg-[#032147] overflow-hidden" style={{ background: "#032147", color: "#EDE5DA" }}>
      {/* Subtle dot bg */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(rgba(237,229,218,1) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative mx-auto max-w-[1400px] px-5">
        <SectionHead n="004" label="Operational Realities" light />

        <div className="mt-12 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <MaskedHeadline
              as="h2"
              className="font-canela text-[40px] sm:text-[60px] lg:text-[76px] leading-[0.95] tracking-tight text-white font-bold"
              staggerMs={130}
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
          <div className="lg:col-span-5 lg:pt-6">
            <ScrollReveal variant="left" delay={150}>
              <p className="text-[15.5px] font-inter leading-relaxed text-[#EDE5DA]/80">
                Singapore's premier hospitality and commercial venues battle three recurring operational bottlenecks: manpower shortages, strict SFA regulatory compliance, and multi-vendor chaos. OPHRON unifies the solution under one accountable platform.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Problems list */}
        <div className="mt-16 border-t border-white/10">
          {problems.map((p, idx) => (
            <ScrollReveal key={p.n} variant={idx % 2 === 0 ? "left" : "right"} delay={idx * 100}>
              <ProblemRow p={p} />
            </ScrollReveal>
          ))}
        </div>

        <ExpandRule className="border-white/15 my-12" />

        {/* CTA strip */}
        <ScrollReveal variant="scale">
          <div className="rounded-3xl bg-[#EDE5DA] text-[#032147] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-[#B7A38B]/30 shadow-xl">
            <div className="flex items-start gap-4">
              <span className="grid place-items-center h-12 w-12 rounded-full bg-[#032147] text-[#B7A38B] text-xl font-bold shrink-0">
                ✓
              </span>
              <div>
                <div className="font-canela font-bold text-2xl sm:text-3xl tracking-tight text-[#032147]">
                  Solved across <AnimatedCounter value={140} suffix="+" /> Singapore establishments.
                </div>
                <div className="text-[13.5px] font-inter text-[#032147]/75 mt-1">
                  From 5-star hotel towers and Michelin-starred dining to high-throughput commercial central kitchens.
                </div>
              </div>
            </div>
            <a
              href="#services"
              className="group inline-flex items-center gap-2 rounded-full bg-[#032147] text-[#EDE5DA] pl-6 pr-2 py-2 text-[13px] font-montserrat font-bold hover:bg-[#B7A38B] hover:text-[#032147] transition shrink-0 hover:scale-105"
              style={{ color: "#EDE5DA" }}
            >
              Explore OPHRON Solutions
              <span className="grid place-items-center h-9 w-9 rounded-full bg-[#B7A38B] text-[#032147] transition-transform group-hover:rotate-45 font-bold">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function ProblemRow({ p }: { p: { n: string; title: string; items: string[] } }) {
  return (
    <div className="group relative border-b border-white/10 py-8 md:py-10 grid grid-cols-12 gap-6 hover:bg-white/[0.04] transition cursor-pointer">
      {/* Number */}
      <div className="col-span-2 md:col-span-1">
        <div className="font-mono text-[11px] tracking-[0.22em] text-[#B7A38B] font-bold">[ {p.n} ]</div>
      </div>
      {/* Title */}
      <div className="col-span-10 md:col-span-5">
        <h3 className="font-canela text-2xl md:text-3xl font-bold tracking-tight leading-tight text-white transition group-hover:text-[#B7A38B]">
          {p.title}
        </h3>
      </div>
      {/* Items */}
      <div className="col-span-12 md:col-span-5">
        <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
          {p.items.map((it) => (
            <li key={it} className="flex items-start gap-2.5 text-[13px] font-inter text-[#EDE5DA]/80">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#B7A38B] flex-none" />
              <span>{it}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-12 md:col-span-1 flex justify-end items-start">
        <span className="grid place-items-center h-10 w-10 rounded-full border border-white/15 text-[#B7A38B] transition group-hover:bg-[#B7A38B] group-hover:text-[#032147] group-hover:rotate-45 font-bold">
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17 17 7M9 7h8v8" />
          </svg>
        </span>
      </div>
    </div>
  );
}
