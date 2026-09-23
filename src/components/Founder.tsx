import { useState } from "react";
import isaacPortrait from "./isaac_portrait.png";
import {
  AnimatedCounter,
  MaskedHeadline,
  ScrollReveal,
  TiltCard,
  ExpandRule,
  CornerBrackets,
} from "./ui/animations";

export default function Founder() {
  const [activeTab, setActiveTab] = useState("overview");

  const results = [
    "Architected and deployed OPHRON's 5-Pillar Operational Infrastructure Platform powering People, Hygiene, Facilities, Technology, and Commercial Intelligence.",
    "Established 100% SLA fulfillment across 140+ active Singapore commercial contracts spanning luxury hotels, Michelin-starred restaurants, and corporate facilities.",
    "Engineered standardized SFA and HACCP kitchen hygiene deep-cleaning protocols ensuring zero-downtime inspection readiness for premier F&B groups.",
    "Integrated digital shift-logging, real-time supervisor verification, and IoT facility reporting to eliminate multi-vendor friction for facility directors.",
    "Spearheaded NEA-licensed electrostatic disinfection and Indoor Air Quality (IAQ) testing protocols protecting over 2 million sq. ft. of commercial space.",
    "Designed targeted labor optimization programs delivering 30%+ operating overhead reduction for hospitality partners.",
    "Built long-term operational partnerships with iconic Singapore establishments including Pan Pacific Hotels, YOTEL, and ATLAS Bar."
  ];

  return (
    <div className="mx-auto max-w-[1200px] px-5 py-12 text-[#032147]">
      {/* Back button */}
      <a
        href="#top"
        className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-[#B7A38B] hover:text-[#032147] transition duration-300 mb-8 font-bold"
      >
        ← Back to Platform Home
      </a>

      {/* 1. Header: Immersive Editorial Split Card with 3D Tilt */}
      <TiltCard maxTilt={5} className="rounded-[32px]">
        <div className="rounded-[32px] border border-[#B7A38B]/30 bg-[#EDE5DA] overflow-hidden shadow-xl relative flex flex-col md:flex-row">
          {/* Left Side: Dark Portrait block with grid overlay */}
          <div className="w-full md:w-72 bg-[#032147] relative flex items-center justify-center p-8 shrink-0 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#B7A38B]/20 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#B7A38B]/20 rounded-full blur-2xl pointer-events-none" />
            
            {/* High-End Squircle Portrait with Glass offset & Corner Brackets */}
            <div className="relative group">
              <div className="absolute inset-0 rounded-[40px_16px_40px_16px] bg-[#B7A38B]/30 blur-lg opacity-40 group-hover:opacity-75 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute -inset-1.5 rounded-[42px_18px_42px_18px] border border-white/20 bg-white/[0.05] backdrop-blur-sm pointer-events-none" />
              
              <div className="h-48 w-48 rounded-[40px_16px_40px_16px] overflow-hidden border border-white/30 bg-[#0a1e3f] shadow-2xl relative transition-all duration-700 hover:scale-[1.03]">
                <img src={isaacPortrait} alt="Isaac Vivian Portrait" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
              </div>
              <CornerBrackets color="#B7A38B" size={14} hoverSize={20} />
            </div>
          </div>

          {/* Right Side: Profile Details */}
          <div className="flex-1 p-8 flex flex-col justify-between gap-6">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#B7A38B] font-bold block mb-2">[ Executive Leadership ]</span>
              <MaskedHeadline
                as="h1"
                className="font-canela text-3xl md:text-4xl font-bold tracking-tight text-[#032147] flex items-center gap-2"
                lines={[
                  <span className="inline-flex items-center gap-2">
                    Isaac Vivian
                    <span className="text-[#B7A38B] inline-flex items-center" title="Verified Founder">
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </span>
                  </span>
                ]}
              />
              
              <p className="mt-3 text-[14.5px] font-inter font-medium leading-relaxed text-[#032147]/85 max-w-2xl flex flex-wrap items-center gap-x-1">
                Founder <a href="https://www.instagram.com/ophronsystems/" target="_blank" rel="noopener noreferrer" className="text-[#032147] hover:text-[#B7A38B] transition duration-300 font-bold underline-draw">@ophronsystems</a> – Complete Hospitality Operational Infrastructure Platform | Singapore & International
              </p>

              {/* Monospace Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "People · Workforce",
                  "Hygiene & Compliance",
                  "Facilities Operations",
                  "SaaS & Automation",
                  "Commercial Intelligence"
                ].map((label, index) => (
                  <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase border border-[#032147]/15 bg-white/60 text-[#032147]">
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer details */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pt-5 border-t border-[#032147]/10 mt-auto">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px] font-mono text-[#032147]/70 font-bold">
                <span className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 fill-current opacity-70" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  Singapore HQ & Global Infrastructure
                </span>
              </div>

              <div className="shrink-0">
                <a
                  href="https://www.linkedin.com/in/isaac-vivian/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#032147] text-[#EDE5DA] px-6 py-3.5 text-[12.5px] font-montserrat font-bold hover:bg-[#B7A38B] hover:text-[#032147] transition-all duration-300 hover:shadow-lg group relative overflow-hidden"
                >
                  <svg className="w-4.5 h-4.5 fill-current transition-transform duration-500 group-hover:rotate-[15deg]" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </TiltCard>

      {/* 2. Interactive Navigation Tabs */}
      <div className="mt-12 border-b border-[#032147]/15 flex gap-2 md:gap-6 overflow-x-auto pb-px">
        {[
          { id: "overview", label: "Overview & Vision", count: null },
          { id: "experience", label: "Timeline & Milestones", count: results.length }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative pb-4 px-2 md:px-4 font-montserrat text-[14px] font-bold tracking-tight transition-all duration-300 focus:outline-none whitespace-nowrap ${
              activeTab === tab.id
                ? "text-[#032147]"
                : "text-[#032147]/50 hover:text-[#032147]/80"
            }`}
          >
            <span className="flex items-center gap-1.5">
              {tab.label}
              {tab.count !== null && (
                <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded font-bold ${activeTab === tab.id ? "bg-[#B7A38B] text-[#032147]" : "bg-[#032147]/10 text-[#032147]/60"}`}>
                  {tab.count}
                </span>
              )}
            </span>
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B7A38B] rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* 3. Tab Content Modules */}
      <div className="mt-8 transition-opacity duration-300">
        
        {/* A. OVERVIEW & STORY TAB */}
        {activeTab === "overview" && (
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-6">
              <ScrollReveal variant="left">
                <div className="rounded-3xl border border-[#B7A38B]/30 bg-[#EDE5DA] p-6 sm:p-8 shadow-sm">
                  <h3 className="font-canela text-2xl font-bold text-[#032147] mb-6 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-[#B7A38B] rounded-full" />
                    Founder Vision & Platform Architecture
                  </h3>
                  <div className="text-[14.5px] leading-relaxed text-[#032147]/85 space-y-6 font-inter">
                    <p className="first-letter:text-5xl first-letter:font-canela first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-[#B7A38B] first-letter:leading-none">
                      Isaac Vivian is the Founder of OPHRON, with the vision of building a complete Hospitality Operational Infrastructure Platform for hotels, restaurants, resorts, serviced apartments, healthcare facilities, and commercial establishments across Singapore and internationally.
                    </p>
                    <p>
                      Instead of viewing OPHRON as a standard cleaning or manpower vendor, Isaac designed OPHRON as a strategic operating partner that unifies people, facilities, hygiene, technology, and commercial performance on a single platform.
                    </p>
                    <p>
                      Under his leadership, OPHRON transforms hospitality and commercial establishments from multi-vendor chaos to unified excellence — driving reliability, 100% SLA compliance, and sustainable operating overhead reduction.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Core Belief Callout Card with Tilt */}
              <ScrollReveal variant="up" delay={150}>
                <TiltCard className="rounded-3xl">
                  <div className="rounded-3xl border border-[#B7A38B]/40 bg-gradient-to-br from-[#EDE5DA] to-white/40 p-8 relative overflow-hidden shadow-md group hover:border-[#B7A38B] transition duration-500">
                    <CornerBrackets size={12} hoverSize={18} />
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#B7A38B]/10 rounded-full blur-2xl pointer-events-none" />
                    <span className="font-serif text-[130px] text-[#B7A38B]/15 absolute -top-12 -left-2 select-none pointer-events-none">“</span>
                    <blockquote className="font-serif-i text-[20px] leading-relaxed text-[#032147] pt-8 relative z-10 font-medium">
                      When I look at this model, I don't see us selling manpower or cleaning services. I see us becoming the operating system that powers hospitality operations.
                    </blockquote>
                    <cite className="block mt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-[#B7A38B] font-bold">— Isaac Vivian, Founder</cite>
                  </div>
                </TiltCard>
              </ScrollReveal>
            </div>

            {/* Right Side Bento */}
            <div className="lg:col-span-5 space-y-6">
              <ScrollReveal variant="right" delay={100}>
                <div className="rounded-3xl border border-[#B7A38B]/30 bg-[#EDE5DA] p-6 sm:p-8">
                  <h3 className="font-montserrat text-lg font-bold text-[#032147] border-b border-[#032147]/10 pb-3">The 5 Pillar Ecosystem</h3>
                  <div className="mt-4 text-[13.5px] leading-relaxed text-[#032147]/80 space-y-4 font-inter">
                    <p>
                      Hospitality operators routinely struggle with siloed vendor management, manpower shortages, and hygiene compliance risks.
                    </p>
                    <p>
                      OPHRON solves this by deploying a unified operating infrastructure across five core pillars:
                    </p>
                    
                    <div className="space-y-3 mt-4">
                      {[
                        { num: "01", title: "OPHRON PEOPLE", desc: "Vetted hospitality manpower, kitchen stewarding & housekeeping." },
                        { num: "02", title: "OPHRON HYGIENE", desc: "Kitchen deep cleaning, exhaust degreasing & IAQ audit compliance." },
                        { num: "03", title: "OPHRON FACILITIES", desc: "IFM Lite, pest control, waste management & minor maintenance." },
                        { num: "04", title: "OPHRON TECHNOLOGY", desc: "Hotel/F&B SaaS, AI automation & real-time operational dashboards." },
                        { num: "05", title: "COMMERCIAL INTELLIGENCE", desc: "Labor cost reduction, hygiene reporting & revenue efficiency." }
                      ].map((item, index) => (
                        <div key={index} className="rounded-xl border border-[#032147]/10 bg-white/60 p-4 hover:border-[#B7A38B]/60 transition-all duration-300 group">
                          <div className="flex items-center gap-2.5">
                            <span className="font-mono text-[10px] text-[#032147] font-bold bg-[#B7A38B] px-2 py-0.5 rounded">{item.num}</span>
                            <h4 className="font-montserrat font-bold text-[13.5px] text-[#032147] group-hover:text-[#B7A38B] transition duration-200">{item.title}</h4>
                          </div>
                          <p className="mt-2 text-[12px] leading-relaxed text-[#032147]/70">{item.desc}</p>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-[#032147]/10 pt-5 mt-5">
                      <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#B7A38B] font-bold block mb-3">Track Record</span>
                      <TiltCard maxTilt={5}>
                        <div className="grid grid-cols-3 gap-2 border border-[#B7A38B]/30 bg-white/70 rounded-2xl p-4 divide-x divide-[#032147]/10">
                          <div className="text-center">
                            <span className="block font-montserrat text-xl sm:text-2xl font-bold text-[#032147]">
                              <AnimatedCounter value={140} suffix="+" />
                            </span>
                            <span className="block text-[8px] font-mono uppercase tracking-wider text-[#B7A38B] font-bold mt-1">SG Contracts</span>
                          </div>
                          <div className="text-center">
                            <span className="block font-montserrat text-xl sm:text-2xl font-bold text-[#032147]">
                              <AnimatedCounter value={20} suffix="+ Yrs" />
                            </span>
                            <span className="block text-[8px] font-mono uppercase tracking-wider text-[#B7A38B] font-bold mt-1">Expertise</span>
                          </div>
                          <div className="text-center px-1 flex flex-col justify-center items-center">
                            <span className="block font-montserrat text-[12px] sm:text-[13px] font-bold text-[#032147] leading-none">
                              <AnimatedCounter value={100} suffix="% SLA" />
                            </span>
                            <span className="block text-[8px] font-mono uppercase tracking-wider text-[#B7A38B] font-bold mt-1">Compliance</span>
                          </div>
                        </div>
                      </TiltCard>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        )}

        {/* B. TIMELINE & MILESTONES TAB */}
        {activeTab === "experience" && (
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-6">
              <ScrollReveal variant="left">
                <h3 className="font-canela text-xl font-bold text-[#032147] mb-6 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-[#B7A38B] rounded-full" />
                  Professional Journey & Academic Foundation
                </h3>

                <div className="relative border-l-2 border-[#032147]/15 pl-6 ml-4 space-y-10">
                  {/* Node 1: OPHRON */}
                  <div className="relative">
                    <span className="absolute -left-[33px] top-1.5 w-4.5 h-4.5 rounded-full border-[3px] border-[#EDE5DA] bg-[#032147] shadow-sm z-10" />
                    <TiltCard maxTilt={4}>
                      <div className="rounded-2xl border border-[#B7A38B]/30 bg-[#EDE5DA] p-6 hover:bg-white/80 transition duration-300 group">
                        <div className="flex justify-between items-start flex-wrap gap-2">
                          <div>
                            <h4 className="font-montserrat font-bold text-[17px] text-[#032147] group-hover:text-[#B7A38B] transition duration-300">Founder</h4>
                            <p className="text-[13px] text-[#B7A38B] font-bold mt-0.5">OPHRON Platform · Full-time</p>
                          </div>
                          <span className="rounded-full bg-[#032147]/5 px-3 py-1 font-mono text-[9px] text-[#032147]/70 font-bold">2023 – Present</span>
                        </div>
                        <p className="mt-3.5 text-[13.5px] leading-relaxed text-[#032147]/80 font-inter">
                          Architecting the unified Hospitality Operational Infrastructure Platform powering People, Hygiene, Facilities, Technology, and Intelligence across 140+ premium Singapore hotels, F&B establishments, and commercial towers.
                        </p>
                      </div>
                    </TiltCard>
                  </div>

                  {/* Node 2: MBA Golden Gate University */}
                  <div className="relative">
                    <span className="absolute -left-[33px] top-1.5 w-4.5 h-4.5 rounded-full border-[3px] border-[#EDE5DA] bg-[#B7A38B] shadow-sm z-10 pulse-dot" />
                    <TiltCard maxTilt={4}>
                      <div className="rounded-2xl border border-[#B7A38B]/30 bg-[#EDE5DA] p-6 hover:bg-white/80 transition duration-300 group">
                        <div className="flex justify-between items-start flex-wrap gap-2">
                          <div>
                            <h4 className="font-montserrat font-bold text-[17px] text-[#032147] group-hover:text-[#B7A38B] transition duration-300">MBA – Business Analytics & Finance</h4>
                            <p className="text-[13px] text-[#032147]/70 font-semibold mt-0.5">Golden Gate University</p>
                          </div>
                          <span className="rounded-full bg-[#032147]/5 px-3 py-1 font-mono text-[9px] text-[#032147]/70 font-bold">2025 – 2026</span>
                        </div>
                        <p className="mt-3.5 text-[13.5px] leading-relaxed text-[#032147]/80 font-inter">
                          Advanced business analytics, financial modeling, and operational intelligence methodologies applied directly to scaling enterprise hospitality platforms and international supply chains.
                        </p>
                      </div>
                    </TiltCard>
                  </div>

                  {/* Node 3: BBA LLB (Hons.) */}
                  <div className="relative">
                    <span className="absolute -left-[33px] top-1.5 w-4.5 h-4.5 rounded-full border-[3px] border-[#EDE5DA] bg-[#032147]/40 shadow-sm z-10" />
                    <TiltCard maxTilt={4}>
                      <div className="rounded-2xl border border-[#B7A38B]/30 bg-[#EDE5DA] p-6 hover:bg-white/80 transition duration-300 group">
                        <div className="flex justify-between items-start flex-wrap gap-2">
                          <div>
                            <h4 className="font-montserrat font-bold text-[17px] text-[#032147] group-hover:text-[#B7A38B] transition duration-300">BBA LLB (Hons.)</h4>
                            <p className="text-[13.5px] text-[#032147]/70 font-semibold mt-0.5">School of Excellence in Law – Dr. Ambedkar Law University</p>
                          </div>
                          <span className="rounded-full bg-[#032147]/5 px-3 py-1 font-mono text-[9px] text-[#032147]/70 font-bold">2017 – 2022</span>
                        </div>
                        <p className="mt-3.5 text-[13.5px] leading-relaxed text-[#032147]/80 font-inter">
                          Strong foundation in commercial contracts, corporate compliance, labor laws, and regulatory governance essential for structuring large-scale enterprise SLAs.
                        </p>
                      </div>
                    </TiltCard>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Metric Milestone Grid */}
            <div className="lg:col-span-5 space-y-6">
              <ScrollReveal variant="right" delay={150}>
                <h3 className="font-canela text-xl font-bold text-[#032147] mb-6 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-[#B7A38B] rounded-full" />
                  Key Operational Milestones
                </h3>

                <div className="grid sm:grid-cols-1 gap-4">
                  {results.map((r, idx) => (
                    <TiltCard key={idx} maxTilt={4}>
                      <div
                        className="rounded-2xl border border-[#B7A38B]/30 bg-white/70 p-5 transition-all duration-300 hover:border-[#B7A38B] hover:shadow-md group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] text-[#B7A38B] font-bold uppercase tracking-wider">Milestone {idx + 1}</span>
                          <span className="w-5.5 h-5.5 rounded-full bg-[#B7A38B] text-[#032147] font-bold text-[11px] grid place-items-center">✓</span>
                        </div>
                        <p className="mt-3 text-[13.5px] leading-relaxed text-[#032147]/85 font-inter">
                          {r}
                        </p>
                      </div>
                    </TiltCard>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
