import { useEffect, useRef, useState } from "react";
import {
  MaskedHeadline,
  ScrollReveal,
  AnimatedCounter,
  CornerBrackets,
} from "./ui/animations";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section id="top" ref={ref} className="relative pt-36 pb-0 overflow-hidden bg-[#EDE5DA]">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-20 -right-40 h-[560px] w-[560px] blob bg-[#032147]/15 opacity-80 z-0" />
      <div className="pointer-events-none absolute top-40 -left-32 h-[360px] w-[360px] rounded-full bg-[#B7A38B]/20 blur-[80px] z-0" />

      <div className="relative z-20 mx-auto max-w-[1400px] px-5">
        {/* Top meta strip */}
        <ScrollReveal variant="down" delay={50}>
          <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.22em] text-[#032147]/70 mb-8">
            <div className="flex items-center gap-3">
              <span className="font-bold text-[#B7A38B]">[ OPHRON INFRASTRUCTURE PLATFORM ]</span>
              <span className="hidden sm:inline opacity-50">/</span>
              <span className="hidden sm:inline font-semibold">NEA Licensed & bizSAFE Level 3</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#032147]">20+ YRS OPERATIONAL EXPERTISE</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Headline in Canela Bold with Masked Split-Line Reveal */}
        <div className="relative">
          <MaskedHeadline
            as="h1"
            className="font-canela font-bold leading-[0.92] tracking-tight text-[#032147]"
            staggerMs={140}
            lines={[
              <span key="1" className="block text-[54px] sm:text-[96px] lg:text-[145px]">
                Hospitality &
              </span>,
              <span key="2" className="block text-[54px] sm:text-[96px] lg:text-[145px] pl-0 lg:pl-3">
                Facilities, <span className="font-serif-i text-[#B7A38B] italic font-normal">powered.</span>
              </span>,
            ]}
          />
        </div>

        {/* Sub row - Manifesto in Montserrat & Inter */}
        <div className="mt-10 grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <ScrollReveal variant="up" delay={200}>
              <div className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#B7A38B] font-bold mb-3">
                [ OPHRON Platform · Operational Infrastructure / 01 ]
              </div>
              <p className="font-montserrat font-medium text-[19px] sm:text-[21px] leading-[1.5] text-[#032147] max-w-2xl">
                OPHRON powers hospitality operations across Singapore & globally with <span className="font-serif-i italic text-[#B7A38B] font-semibold">NEA Licensed & bizSAFE Level 3</span> standards.
              </p>
              <p className="mt-3 font-inter text-[15px] leading-relaxed text-[#032147]/80 max-w-xl">
                We unify People, Hygiene, Facilities, Technology, and Commercial Intelligence into a single strategic system powering 140+ premium hotels, F&B groups, and commercial venues.
              </p>
            </ScrollReveal>

            <ScrollReveal variant="up" delay={350}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#contact" className="group relative inline-flex items-center gap-3 rounded-full bg-[#032147] text-[#EDE5DA] pl-6 pr-2 py-3 text-[13px] font-heading font-semibold overflow-hidden shadow-lg shadow-[#032147]/20 hover:scale-105 transition-transform" style={{ color: "#EDE5DA" }}>
                  <span className="relative z-10">Request SG Facility Audit</span>
                  <span className="relative z-10 grid place-items-center h-9 w-9 rounded-full bg-[#B7A38B] text-[#032147] transition-transform group-hover:rotate-45">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17 17 7M9 7h8v8" />
                    </svg>
                  </span>
                </a>
                <a href="#services" className="group inline-flex items-center gap-2 rounded-full border border-[#032147]/30 px-6 py-3.5 text-[13px] font-heading font-semibold text-[#032147] hover:bg-[#032147] hover:text-[#EDE5DA] transition hover:scale-105">
                  <span className="h-2 w-2 rounded-full bg-[#B7A38B] group-hover:bg-[#EDE5DA]" />
                  Explore OPHRON Services
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Horizontal Stats Strip spanning full width */}
      <div className="relative z-20 mx-auto max-w-[1550px] px-5 mt-14 pb-0">
        <ScrollReveal variant="up" delay={250}>
          <div className="group relative border border-[#B7A38B]/30 bg-[#EDE5DA]/95 backdrop-blur-md shadow-xl shadow-[#032147]/5 rounded-3xl p-8 grid sm:grid-cols-2 lg:grid-cols-5 gap-8 items-start relative z-30">
            <CornerBrackets color="#B7A38B" size={14} hoverSize={20} />
            <div>
              <div className="font-montserrat font-bold text-3xl lg:text-4xl tracking-tight text-[#032147]">
                <AnimatedCounter value={20} suffix="+ Yrs" />
              </div>
              <div className="mt-1 text-[11px] font-heading uppercase tracking-[0.15em] text-[#B7A38B] font-bold">
                Operational Expertise
              </div>
            </div>

            <div>
              <div className="font-montserrat font-bold text-3xl lg:text-4xl tracking-tight text-[#032147]">
                <AnimatedCounter value={140} suffix="+" />
              </div>
              <div className="mt-1 text-[11px] font-heading uppercase tracking-[0.15em] text-[#B7A38B] font-bold">
                Active SG Contracts
              </div>
            </div>

            <div>
              <div className="font-montserrat font-bold text-3xl lg:text-4xl tracking-tight text-[#032147]">
                bizSAFE 3
              </div>
              <div className="mt-1 text-[11px] font-heading uppercase tracking-[0.15em] text-[#B7A38B] font-bold">
                WSH Council Certified
              </div>
            </div>

            <div>
              <div className="font-montserrat font-bold text-3xl lg:text-4xl tracking-tight text-[#032147]">
                NEA Licensed
              </div>
              <div className="mt-1 text-[11px] font-heading uppercase tracking-[0.15em] text-[#B7A38B] font-bold">
                Singapore Operator
              </div>
            </div>

            {/* Strategic Partner Assurance Block */}
            <div className="lg:pl-6 border-t sm:border-t-0 sm:border-l border-[#032147]/10 pt-6 sm:pt-0 sm:pl-8 flex flex-col gap-2">
              <div className="flex items-center gap-1 text-[#B7A38B]">
                {"★★★★★".split("").map((s, i) => <span key={i} className="text-[12px]">{s}</span>)}
                <span className="ml-2 text-[12px] font-mono tabular-nums text-[#032147] font-bold">
                  <AnimatedCounter value={100} suffix="% SLA" />
                </span>
              </div>
              <div className="text-[11px] font-heading font-bold uppercase tracking-[0.1em] text-[#032147]">Pan Pacific · YOTEL · ATLAS</div>
              <div className="text-[10px] font-inter text-[#032147]/70">Trusted by Singapore's Top Hospitality & F&B Groups</div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Bottom marquee strip */}
      <div className="relative mt-0 border-y border-[#032147]/15 bg-[#EDE5DA] overflow-hidden">
        <div className="marquee-track inline-flex whitespace-nowrap py-5">
          {[...Array(2)].map((_, j) => (
            <div key={j} className="inline-flex items-center gap-10 pr-10">
              {[
                "OPHRON PEOPLE — WSQ Hospitality Manpower & Stewarding",
                "OPHRON HYGIENE — Kitchen Deep Cleaning, Exhaust & Disinfection",
                "OPHRON FACILITIES — Integrated Facility Operations (IFM Lite)",
                "OPHRON TECHNOLOGY — AI Automation & Operations SaaS",
                "COMMERCIAL INTELLIGENCE — Labor & Cost Optimization"
              ].map((t, i) => (
                <div key={i} className="inline-flex items-center gap-10">
                  <span className="font-heading text-[13px] uppercase font-bold tracking-[0.18em] text-[#032147]">
                    {t}
                  </span>
                  <span className="grid place-items-center h-5 w-5 rounded-full border border-[#B7A38B] text-[10px] text-[#B7A38B]">
                    ✦
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
