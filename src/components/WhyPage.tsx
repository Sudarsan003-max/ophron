import {
  ShieldCheck,
  Award,
  FileCheck,
  Users,
} from "lucide-react";
import Testimonials from "./Testimonials";

export default function WhyPage() {
  return (
    <div className="min-h-screen bg-paper text-ink pb-24">
      {/* ── TOP HERO BANNER ────────────────────────────────────────── */}
      <section className="relative bg-[#032147] text-[#EDE5DA] pt-14 pb-20 overflow-hidden border-b border-[#B7A38B]/30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-[#B7A38B]/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-[1400px] px-5">
          {/* Breadcrumb */}
          <div className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.2em] text-[#B7A38B] mb-6">
            <a href="/" className="hover:text-white transition">
              Home
            </a>
            <span className="opacity-40">/</span>
            <span className="text-white font-bold">Why Choose OPHRON</span>
            <span className="opacity-40">/</span>
            <span className="opacity-70">Enterprise Infrastructure Advantage</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#B7A38B]/20 border border-[#B7A38B]/40 px-3.5 py-1 text-[11px] font-mono text-[#B7A38B] uppercase tracking-[0.15em] font-bold mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-[#B7A38B] animate-pulse" />
                <span>Why OPHRON</span>
              </span>

              <h1 className="font-canela font-bold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[0.98]">
                Your business needs solutions, <span className="font-serif-i italic text-[#B7A38B]">not more suppliers to manage.</span>
              </h1>

              <p className="mt-5 font-inter text-[16px] sm:text-[18px] leading-relaxed text-[#EDE5DA]/85 max-w-2xl">
                Every additional vendor adds another schedule, another invoice and another person to chase when something changes. OPHRON is designed to make that easier.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <div className="rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur-md w-full max-w-sm">
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#B7A38B] font-bold mb-1">
                  Our Commitment
                </div>
                <div className="font-montserrat text-2xl font-bold text-white">
                  Coordinated Delivery
                </div>
                <p className="mt-1.5 text-xs text-[#EDE5DA]/70 font-inter">
                  Direct points of contact, transparent scopes, and reliable operations across all contracted services.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Pillar Strip */}
          <div className="mt-12 pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-[#EDE5DA]">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#B7A38B]">Operations Base</div>
              <div className="text-lg font-montserrat font-bold text-white mt-1">Singapore HQ</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#B7A38B]">Licensing Status</div>
              <div className="text-lg font-montserrat font-bold text-white mt-1">NEA Licensed Operator</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#B7A38B]">Safety Framework</div>
              <div className="text-lg font-montserrat font-bold text-white mt-1">bizSAFE Level 3</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#B7A38B]">Response SLA</div>
              <div className="text-lg font-montserrat font-bold text-white mt-1">1 Business Day Response</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE DIFFERENTIATION SECTIONS ─────────────────────────── */}
      <div className="mx-auto max-w-[1400px] px-5 pt-16 space-y-16">
        
        {/* 1. WHAT WORKING WITH US SHOULD FEEL LIKE */}
        <section className="rounded-[32px] bg-[#032147] text-[#EDE5DA] p-8 sm:p-12 border border-[#B7A38B]/30 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl mb-8">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#B7A38B] font-bold block mb-2">
              [ Operating Principles ]
            </span>
            <h2 className="font-canela text-3xl sm:text-5xl font-bold text-white tracking-tight">
              What working with us should feel like
            </h2>
            <p className="mt-3 font-inter text-[15px] text-[#EDE5DA]/80 leading-relaxed">
              We design every client relationship around clarity, responsiveness, and practical support.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Clear from the beginning.",
                desc: "We define the service, schedule, responsibilities and commercial terms before work starts.",
              },
              {
                title: "Flexible to your needs.",
                desc: "Start with a single service or discuss a wider arrangement across sites.",
              },
              {
                title: "Practical, not complicated.",
                desc: "We focus on the people and work required to keep your operation running.",
              },
              {
                title: "Connected when it matters.",
                desc: "Manpower, cleaning, facilities and reporting can be coordinated instead of treated as unrelated problems.",
              },
              {
                title: "Accountable to an agreed scope.",
                desc: "We agree how performance will be reviewed and how issues should be escalated.",
              },
            ].map((p, idx) => (
              <div key={idx} className="rounded-2xl bg-white/5 border border-white/10 p-5 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#B7A38B] font-bold mb-2">
                    0{idx + 1}
                  </div>
                  <h3 className="font-montserrat font-bold text-base text-white">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-xs font-inter text-[#EDE5DA]/75 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. COMPARE THE APPROACH */}
        <section className="rounded-[32px] bg-[#EDE5DA] p-8 sm:p-12 border border-[#B7A38B]/40 shadow-lg">
          <div className="max-w-3xl mb-8">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8C7355] font-bold block mb-2">
              [ Clear Comparison ]
            </span>
            <h2 className="font-canela text-3xl sm:text-4xl font-bold text-[#032147] tracking-tight">
              Compare the approach
            </h2>
            <p className="mt-2 text-sm font-inter text-[#032147]/75">
              How OPHRON simplifies daily operations versus managing multiple separate vendors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white/60 border border-[#032147]/10 p-6 space-y-4">
              <div className="text-xs font-mono uppercase tracking-[0.18em] text-[#032147]/60 font-bold">
                Traditional arrangement
              </div>
              <ul className="space-y-3 text-sm font-inter text-[#032147]/80">
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold shrink-0">✕</span>
                  <span><strong>Several vendors:</strong> Multiple contracts, negotiations and renewal cycles</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold shrink-0">✕</span>
                  <span><strong>Separate contacts:</strong> Chasing different managers for every issue</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold shrink-0">✕</span>
                  <span><strong>Multiple work schedules:</strong> Overlapping or misaligned deployment shifts</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold shrink-0">✕</span>
                  <span><strong>Disconnected reporting:</strong> Inconsistent updates with no shared visibility</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-[#032147] text-[#EDE5DA] border border-[#B7A38B]/40 p-6 space-y-4 shadow-xl">
              <div className="text-xs font-mono uppercase tracking-[0.18em] text-[#B7A38B] font-bold">
                OPHRON approach
              </div>
              <ul className="space-y-3 text-sm font-inter text-[#EDE5DA]/90">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#B7A38B] font-bold shrink-0">✓</span>
                  <span><strong>Coordinated services:</strong> Manpower, cleaning & facilities where contracted</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#B7A38B] font-bold shrink-0">✓</span>
                  <span><strong>Clear contacts:</strong> A direct, designated point of contact for your site</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#B7A38B] font-bold shrink-0">✓</span>
                  <span><strong>Agreed schedules:</strong> Transparent shift planning matched to your operating hours</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#B7A38B] font-bold shrink-0">✓</span>
                  <span><strong>Defined escalation:</strong> Structured reviews and prompt issue resolution</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="mt-6 text-xs text-[#032147]/60 italic font-inter text-center">
            *Actual service levels depend on the signed agreement; do not imply every client receives a single contract or universal SLA.*
          </p>
        </section>

        {/* 3. REGULATORY & SAFETY STANDARDS */}
        <section className="rounded-[32px] bg-[#032147] text-[#EDE5DA] p-8 sm:p-12 border border-[#B7A38B]/30 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mb-10">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#B7A38B] font-bold block mb-2">
              [ Singapore Statutory & Safety Standards ]
            </span>
            <h2 className="font-canela text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Rigorous Statutory Compliance for Complete Peace of Mind
            </h2>
            <p className="mt-3 font-inter text-[14.5px] text-[#EDE5DA]/80 leading-relaxed">
              In Singapore's stringent regulatory landscape, OPHRON operates with verified institutional standards and active licensing:
            </p>
          </div>

          <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6 flex flex-col justify-between backdrop-blur-sm">
              <div>
                <div className="h-10 w-10 rounded-xl bg-[#B7A38B]/20 border border-[#B7A38B]/40 grid place-items-center text-[#B7A38B] mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-montserrat font-bold text-lg text-white">
                  NEA Clean Mark
                </h3>
                <p className="mt-2 text-xs font-inter text-[#EDE5DA]/75 leading-relaxed">
                  Full operator licensing from the National Environment Agency guaranteeing legal wage compliance, certified skill pathways, and traceable chemical dosing.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-white/10 text-[10px] font-mono text-[#B7A38B] uppercase font-bold">
                NEA Licensed Operator
              </div>
            </div>

            <div className="rounded-2xl bg-white/5 border border-white/10 p-6 flex flex-col justify-between backdrop-blur-sm">
              <div>
                <div className="h-10 w-10 rounded-xl bg-[#B7A38B]/20 border border-[#B7A38B]/40 grid place-items-center text-[#B7A38B] mb-4">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-montserrat font-bold text-lg text-white">
                  bizSAFE Level 3
                </h3>
                <p className="mt-2 text-xs font-inter text-[#EDE5DA]/75 leading-relaxed">
                  Certified by the Workplace Safety and Health Council (WSHC). Every shift is preceded by a safety toolbox briefing, site method statements, and risk assessments.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-white/10 text-[10px] font-mono text-[#B7A38B] uppercase font-bold">
                WSH Council Certified
              </div>
            </div>

            <div className="rounded-2xl bg-white/5 border border-white/10 p-6 flex flex-col justify-between backdrop-blur-sm">
              <div>
                <div className="h-10 w-10 rounded-xl bg-[#B7A38B]/20 border border-[#B7A38B]/40 grid place-items-center text-[#B7A38B] mb-4">
                  <FileCheck className="w-5 h-5" />
                </div>
                <h3 className="font-montserrat font-bold text-lg text-white">
                  SFA Grade A Hygiene
                </h3>
                <p className="mt-2 text-xs font-inter text-[#EDE5DA]/75 leading-relaxed">
                  Singapore Food Agency hygiene standards embedded into every kitchen clean. Exhaust canopies, grease baffles, and dish-pits maintained for unannounced audits.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-white/10 text-[10px] font-mono text-[#B7A38B] uppercase font-bold">
                Food Safety Compliant
              </div>
            </div>

            <div className="rounded-2xl bg-white/5 border border-white/10 p-6 flex flex-col justify-between backdrop-blur-sm">
              <div>
                <div className="h-10 w-10 rounded-xl bg-[#B7A38B]/20 border border-[#B7A38B]/40 grid place-items-center text-[#B7A38B] mb-4">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-montserrat font-bold text-lg text-white">
                  WSQ Trained Crews
                </h3>
                <p className="mt-2 text-xs font-inter text-[#EDE5DA]/75 leading-relaxed">
                  Every operative holds Workforce Skills Qualifications (WSQ) modules covering chemical safety, machine operation, infection control, and hotel guest etiquette.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-white/10 text-[10px] font-mono text-[#B7A38B] uppercase font-bold">
                100% Verified Personnel
              </div>
            </div>
          </div>
        </section>

        {/* 2. VERIFIED CLIENT ENDORSEMENTS (Unique to Why Us, not on Homepage) */}
        <section className="pt-4">
          <Testimonials />
        </section>

        {/* 5. BOTTOM CONSULTATION CTA */}
        <section className="rounded-[32px] bg-[#032147] text-[#EDE5DA] p-8 sm:p-12 lg:p-14 border border-[#B7A38B]/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#B7A38B] font-bold block mb-2">
              [ Executive Operational Walkthrough ]
            </span>
            <h3 className="font-canela text-3xl sm:text-4xl font-bold text-white leading-snug">
              Ready to Upgrade from Fragmented Subcontractors?
            </h3>
            <p className="mt-3 font-inter text-[14.5px] text-[#EDE5DA]/80 leading-relaxed">
              Schedule an on-site operational review with our Singapore directors. We'll inspect your property, identify vendor friction points, and provide an SLA-backed consolidation proposal.
            </p>
          </div>

          <div className="relative z-10 shrink-0 flex flex-col sm:flex-row gap-3">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#B7A38B] text-[#032147] px-7 py-3.5 text-[13px] font-montserrat font-bold hover:bg-white hover:scale-105 transition duration-300 shadow-lg"
            >
              Request a Site Assessment →
            </a>
            <a
              href="tel:+6592951155"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 text-white px-6 py-3.5 text-[13px] font-mono font-bold hover:bg-white/10 transition"
            >
              Direct: +65 9295 1155
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
