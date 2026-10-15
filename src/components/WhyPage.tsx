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
                <span>The Strategic Operating Alternative</span>
              </span>

              <h1 className="font-canela font-bold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[0.98]">
                Engineered for <span className="font-serif-i italic text-[#B7A38B]">Operational Certainty.</span>
              </h1>

              <p className="mt-5 font-inter text-[16px] sm:text-[18px] leading-relaxed text-[#EDE5DA]/85 max-w-2xl">
                Hospitality operators in Singapore lose hundreds of productive hours managing fragmented subcontractors. OPHRON replaces vendor friction with unified operational governance, supervisor-signed accountability, and contractually backed SLAs.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <div className="rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur-md w-full max-w-sm">
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#B7A38B] font-bold mb-1">
                  Verified SLA Benchmark
                </div>
                <div className="font-montserrat text-3xl font-bold text-white">
                  99.8% Compliance
                </div>
                <p className="mt-1.5 text-xs text-[#EDE5DA]/70 font-inter">
                  Maintained across 140+ active commercial hospitality contracts in Singapore without single contract default.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Pillar Strip */}
          <div className="mt-12 pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-[#EDE5DA]">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#B7A38B]">Licensing Authority</div>
              <div className="text-lg font-montserrat font-bold text-white mt-1">NEA Clean Mark L3</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#B7A38B]">Safety Framework</div>
              <div className="text-lg font-montserrat font-bold text-white mt-1">bizSAFE Level 3</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#B7A38B]">Emergency Escalation</div>
              <div className="text-lg font-montserrat font-bold text-white mt-1">15-Min Response</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#B7A38B]">Overhead Reduction</div>
              <div className="text-lg font-montserrat font-bold text-white mt-1">30%+ Operating Yield</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE DIFFERENTIATION SECTIONS ─────────────────────────── */}
      <div className="mx-auto max-w-[1400px] px-5 pt-16 space-y-20">
        {/* 1. REGULATORY & SAFETY COMPLIANCE FRAMEWORK */}
        <section className="rounded-[32px] bg-[#032147] text-[#EDE5DA] p-8 sm:p-12 lg:p-16 border border-[#B7A38B]/30 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#B7A38B]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mb-12">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#B7A38B] font-bold block mb-2">
              [ Singapore Statutory & Safety Standards ]
            </span>
            <h2 className="font-canela text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Rigorous Statutory Compliance for Complete Legal Peace of Mind
            </h2>
            <p className="mt-3 font-inter text-[15px] text-[#EDE5DA]/80 leading-relaxed">
              In Singapore's stringent regulatory landscape, non-compliance can trigger heavy statutory fines, demerit points, and immediate venue shutdown. OPHRON guarantees absolute compliance through verified institutional standards:
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
              Request Executive Walkthrough →
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
