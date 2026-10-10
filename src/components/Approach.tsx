import { useState, useEffect } from "react";
import {
  MaskedHeadline,
  ScrollReveal,
} from "./ui/animations";

const pillars = [
  { 
    n: "01", 
    title: "OPHRON People", 
    t: "workforce infrastructure", 
    text: "Vetted hospitality manpower, stewarding, kitchen helpers, and housekeeping teams deployed with 100% SLA reliability.",
    metric: "Staffing SLA: 100%",
    label: "Workforce Deployment",
    badge: "Hospitality Manpower",
    chart: [40, 55, 65, 75, 80, 95, 90, 110, 130]
  },
  { 
    n: "02", 
    title: "OPHRON Hygiene", 
    t: "compliance & deep cleaning", 
    text: "Kitchen deep cleaning, exhaust and duct degreasing, hygiene audits, IAQ services, and hospital-grade disinfection.",
    metric: "Compliance: 100%",
    label: "Hygiene & Audit Index",
    badge: "SFA & NEA Compliance",
    chart: [30, 45, 50, 65, 85, 90, 95, 105, 125]
  },
  { 
    n: "03", 
    title: "OPHRON Facility Services", 
    t: "integrated facility operations", 
    text: "IFM Lite, pest control through partners, waste management, minor maintenance, and post-renovation handover support.",
    metric: "Uptime: 99.8%",
    label: "Facility Health",
    badge: "IFM Lite Management",
    chart: [50, 60, 55, 70, 75, 88, 92, 108, 120]
  },
  { 
    n: "04", 
    title: "OPHRON Technology", 
    t: "SaaS & AI automation", 
    text: "Restaurant & hotel software, AI operations automation, digital reporting, workforce management, and customer dashboards.",
    metric: "Automation: 4.5x",
    label: "Digital Efficiency",
    badge: "SaaS & Operations AI",
    chart: [25, 40, 50, 65, 78, 85, 98, 115, 140]
  },
  { 
    n: "05", 
    title: "Commercial Intelligence", 
    t: "revenue & margin optimization", 
    text: "Targeted cost reduction programs, labor optimization, hygiene compliance management, and executive operational reporting.",
    metric: "Margin Lift: +24%",
    label: "Commercial Index",
    badge: "Commercial Intelligence",
    chart: [35, 50, 60, 75, 90, 100, 115, 128, 145]
  },
];

export default function Approach() {
  const [scene, setScene] = useState(0);
  const [timerKey, setTimerKey] = useState(0);

  // Auto-play loop sequence through the 5 pillars/stages
  useEffect(() => {
    const timer = setInterval(() => {
      setScene((prev) => (prev + 1) % pillars.length);
    }, 4800);
    return () => clearInterval(timer);
  }, [timerKey]);

  const selectPillar = (idx: number) => {
    setScene(idx);
    setTimerKey((k) => k + 1); // Reset timer so user sees their selection, then auto-loop continues
  };

  const activePillar = pillars[scene];

  return (
    <section className="relative py-16 bg-[#032147] overflow-hidden" id="approach">
      {/* Ambient background spotlight scene */}
      <div className="absolute inset-0 bg-[#032147] z-0" />
      <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#B7A38B]/10 blur-[130px] pointer-events-none z-0" />
      
      {/* Looping dynamic glowing elements */}
      <div className="absolute top-[25%] left-[20%] w-[350px] h-[350px] rounded-full bg-[#B7A38B]/10 blur-[100px] animate-pulse pointer-events-none z-0" style={{ animationDuration: '10s' }} />
      <div className="absolute bottom-[15%] right-[20%] w-[300px] h-[300px] rounded-full bg-[#B7A38B]/10 blur-[90px] animate-pulse pointer-events-none z-0" style={{ animationDuration: '15s' }} />

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 flex flex-col items-center">
        
        {/* Title and Intro layout */}
        <div className="w-full max-w-[1000px] mb-4 text-center sm:text-left">
          <ScrollReveal variant="up" delay={50}>
            <div className="flex items-center justify-center sm:justify-start gap-3 text-[10px] font-mono uppercase tracking-[0.22em] text-[#EDE5DA]/60">
              <span className="grid place-items-center h-5 w-5 rounded-full text-[9px] font-bold bg-[#B7A38B] text-[#032147]">
                ✦
              </span>
              <span>004 / The Strategic Advantage</span>
            </div>
          </ScrollReveal>

          <div className="mt-4 grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <MaskedHeadline
                as="h2"
                className="font-canela font-bold text-[36px] sm:text-[52px] lg:text-[68px] leading-[0.95] tracking-tight text-[#EDE5DA] text-left"
                staggerMs={130}
                lines={[
                  "Transforming hospitality",
                  <>
                    <span className="font-serif-i italic text-[#B7A38B]">operations.</span>
                  </>,
                ]}
              />
            </div>
            <p className="lg:col-span-4 font-inter text-[14.5px] leading-relaxed text-[#EDE5DA]/80 text-left max-w-md lg:ml-auto">
              <ScrollReveal variant="left" delay={150}>
                OPHRON empowers hotel general managers, F&B groups, and commercial facility directors with unified control over workforce, hygiene, technology, and performance.
              </ScrollReveal>
            </p>
          </div>
        </div>

        {/* ── MACBOOK PRO DEVICE CONTAINER (16:10 AUTHENTIC LAPTOP PROPORTION ON ALL SCREENS) ── */}
        <ScrollReveal variant="scale" delay={200} className="w-full flex justify-center">
          <div className="relative w-full max-w-[1020px] mt-2 sm:mt-4 flex flex-col items-center group @container">
            
            {/* ── LAPTOP LID (SCREEN FRAME - STRICT 16:10 LANDSCAPE ON BOTH MOBILE & DESKTOP) ── */}
            <div className="relative w-[92%] sm:w-[90%] md:w-[88%] aspect-[16/10] bg-gradient-to-b from-[#0e1626] via-[#051124] to-[#020b18] rounded-t-[14px] sm:rounded-t-[20px] md:rounded-t-[2.2cqi] p-1.5 sm:p-2.5 md:p-[1.2cqi] shadow-[0_25px_60px_-10px_rgba(0,0,0,0.9),inset_0_1px_2px_rgba(255,255,255,0.3),inset_0_-1px_1px_rgba(255,255,255,0.05)] border border-[#B7A38B]/30 flex flex-col z-10">
              
              {/* Webcam & Ambient Light Sensor Notch */}
              <div className="absolute top-[0.6%] sm:top-[0.4%] left-1/2 -translate-x-1/2 flex items-center gap-1 sm:gap-1.5 md:gap-[0.5cqi] pointer-events-none z-30">
                <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 md:w-[0.12cqi] md:h-[0.12cqi] rounded-full bg-green-500/50" />
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-[0.6cqi] md:h-[0.6cqi] rounded-full bg-[#010814] border border-white/15 flex items-center justify-center relative">
                  <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 md:w-[0.22cqi] md:h-[0.22cqi] rounded-full bg-[#B7A38B]/70" />
                </div>
                <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 md:w-[0.12cqi] md:h-[0.12cqi] rounded-full bg-[#010814]" />
              </div>

              {/* ── LAPTOP SCREEN CONTENT VIEWPORT ── */}
              <div className="relative flex-1 bg-[#021733] rounded-[8px] sm:rounded-[10px] md:rounded-[0.4cqi] overflow-hidden border border-[#032147] flex flex-col p-2 sm:p-4 md:p-[3.5cqi] text-[#EDE5DA] select-none">
                
                {/* Background Grid & Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#B7A38B]/12 via-[#021733] to-[#032147] -z-10 transition-all duration-1000" />
                <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(237,229,218,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(237,229,218,0.08)_1px,transparent_1px)] bg-[size:16px_16px] -z-10" />

                {/* ── DESKTOP/TABLET SCREEN UI (>= 768px: ORIGINAL DETAILED DASHBOARD) ── */}
                <div className="hidden md:flex flex-1 flex-col justify-between">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between border-b border-white/15 pb-[1.5cqi]">
                    <div className="flex items-center gap-[1.5cqi] text-[max(8px,1cqi)] font-mono uppercase tracking-wider text-[#EDE5DA]/70">
                      <span className="font-semibold text-white tracking-wider flex items-center gap-1.5">
                        <span className="inline-block w-[1cqi] h-[1cqi] rounded-full bg-[#B7A38B] animate-ping" />
                        OphronOS
                      </span>
                      <span className="opacity-45">/</span>
                      <span className="text-[#B7A38B] truncate">Hospitality Platform</span>
                    </div>

                    <div className="flex items-center gap-[1.2cqi] overflow-x-auto scrollbar-none">
                      {pillars.map((p, idx) => (
                        <button 
                          key={p.n}
                          type="button"
                          onClick={() => selectPillar(idx)}
                          className={`px-2.5 py-1 rounded-md text-[max(8px,0.95cqi)] font-mono uppercase transition-all duration-200 cursor-pointer whitespace-nowrap ${
                            idx === scene 
                              ? "bg-[#B7A38B] text-[#032147] font-bold shadow-md scale-105" 
                              : "bg-white/5 text-[#EDE5DA]/70 hover:bg-white/15 hover:text-white border border-white/5"
                          }`}
                        >
                          <span className="mr-1">{p.n}</span>
                          <span>{p.title.replace("OPHRON ", "")}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Main Grid Body */}
                  <div className="grid grid-cols-12 gap-[3cqi] items-stretch my-auto py-[1cqi]">
                    {/* Left Column: Metric Visualizer */}
                    <div className="col-span-5 bg-white/[0.04] border border-white/[0.1] rounded-[1cqi] p-[2.2cqi] flex flex-col justify-between relative overflow-hidden backdrop-blur-md shadow-[0_15px_30px_-5px_rgba(0,0,0,0.5)]">
                      <div className="absolute top-0 right-0 w-[10cqi] h-[10cqi] bg-[#B7A38B]/20 rounded-full blur-[20px] pointer-events-none" />
                      
                      <div className="space-y-[0.6cqi]">
                        <span className="inline-block text-[max(6px,0.85cqi)] font-mono font-bold text-[#B7A38B] uppercase tracking-wider bg-[#B7A38B]/15 px-[1.2cqi] py-[0.4cqi] rounded-full border border-[#B7A38B]/30">
                          {activePillar.badge}
                        </span>
                        <h4 className="text-[max(14px,2cqi)] font-montserrat font-bold text-white tracking-tight leading-snug">
                          {activePillar.title}<span className="text-[#B7A38B]">.</span>
                        </h4>
                        <p className="text-[max(9px,1.15cqi)] text-[#EDE5DA]/70 leading-relaxed font-serif-i italic">
                          {activePillar.t}
                        </p>
                      </div>

                      <div className="h-[7.5cqi] w-full mt-[1.2cqi] flex items-end justify-between gap-[0.5cqi]">
                        {activePillar.chart.map((val, idx) => (
                          <div 
                            key={idx} 
                            className="flex-1 bg-gradient-to-t from-[#B7A38B] to-[#B7A38B]/40 rounded-[0.2cqi] transition-all duration-700 ease-out origin-bottom shadow-[0_0_8px_rgba(183,163,139,0.3)]" 
                            style={{ 
                              height: `${val}%`, 
                              transitionDelay: `${idx * 40}ms` 
                            }} 
                          />
                        ))}
                      </div>

                      <div className="mt-[1.5cqi] border-t border-white/10 pt-[1.2cqi] flex items-center justify-between text-[max(8px,1.1cqi)]">
                        <span className="text-[#EDE5DA]/60 font-mono text-[max(7px,0.9cqi)]">{activePillar.label}</span>
                        <span className="font-montserrat font-bold text-[#B7A38B] tracking-tight">{activePillar.metric}</span>
                      </div>
                    </div>

                    {/* Right Column: Narrative workflow */}
                    <div className="col-span-7 flex flex-col justify-between pl-[1cqi] py-[1cqi]">
                      <div className="space-y-[1.5cqi]">
                        <div className="text-[max(8px,1cqi)] font-mono text-white/50 tracking-widest uppercase flex items-center justify-between">
                          <span>[ OPHRON PILLAR / {activePillar.n} ]</span>
                        </div>
                        <p className="text-[max(11px,1.65cqi)] font-inter leading-relaxed text-[#EDE5DA]/90">
                          {activePillar.text}
                        </p>
                      </div>

                      <div className="mt-[2.5cqi] border-t border-white/10 pt-[1.5cqi] flex justify-between items-center">
                        <div className="flex gap-[0.8cqi]">
                          {pillars.map((_, idx) => (
                            <button 
                              key={idx}
                              type="button"
                              aria-label={`Jump to stage ${idx + 1}`}
                              onClick={() => selectPillar(idx)}
                              className={`h-[0.5cqi] rounded-full transition-all duration-500 cursor-pointer ${
                                idx === scene ? "w-[4cqi] bg-[#B7A38B]" : "w-[1.2cqi] bg-white/25 hover:bg-white/45"
                              }`} 
                            />
                          ))}
                        </div>
                        <div className="text-[max(7px,0.9cqi)] font-mono text-[#EDE5DA]/60 flex items-center gap-[0.6cqi]">
                          <span>SINGAPORE PLATFORM SLA</span>
                          <span className="inline-block w-[0.8cqi] h-[0.8cqi] rounded-full bg-[#B7A38B] pulse-dot" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Footer */}
                  <div className="flex items-center justify-between border-t border-white/10 pt-[1.2cqi] text-[max(6px,0.85cqi)] font-mono text-white/40 tracking-wider uppercase">
                    <span>ENTERPRISE HOSPITALITY OS</span>
                    <span>SINGAPORE & INTERNATIONAL INFRASTRUCTURE</span>
                  </div>
                </div>

                {/* ── MOBILE SCREEN UI (< 768px: CRISP NATIVE LANDSCAPE LAPTOP VIEWPORT) ── */}
                <div className="flex md:hidden flex-1 flex-col justify-between overflow-hidden">
                  
                  {/* macOS Window Titlebar with Traffic Lights */}
                  <div className="flex items-center justify-between border-b border-white/15 pb-1 sm:pb-1.5">
                    <div className="flex items-center gap-1.5">
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff5f56]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ffbd2e]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-[#27c93f]" />
                      </div>
                      <span className="text-[8.5px] sm:text-[10px] font-mono uppercase tracking-wider text-white font-semibold ml-1">
                        OphronOS
                      </span>
                    </div>

                    <div className="flex items-center gap-1">
                      {pillars.map((p, idx) => (
                        <button
                          key={p.n}
                          type="button"
                          onClick={() => selectPillar(idx)}
                          className={`w-4 h-4 sm:w-5 sm:h-5 rounded text-[8px] sm:text-[9px] font-mono font-bold flex items-center justify-center transition-all ${
                            idx === scene
                              ? "bg-[#B7A38B] text-[#032147] shadow-sm scale-110"
                              : "bg-white/10 text-white/60 hover:bg-white/20"
                          }`}
                        >
                          {p.n}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 2-Column Split Dashboard inside 16:10 Screen */}
                  <div className="grid grid-cols-12 gap-2 my-auto items-center">
                    
                    {/* Left Column: Visual Card */}
                    <div className="col-span-6 bg-white/[0.04] border border-white/[0.1] rounded-lg p-2 sm:p-2.5 flex flex-col justify-between shadow-md">
                      <div>
                        <span className="inline-block text-[7px] sm:text-[8px] font-mono font-bold text-[#B7A38B] uppercase tracking-wider bg-[#B7A38B]/15 px-1.5 py-0.5 rounded-full border border-[#B7A38B]/30 mb-0.5">
                          {activePillar.badge}
                        </span>
                        <h4 className="text-[10px] sm:text-xs font-montserrat font-bold text-white tracking-tight leading-tight truncate">
                          {activePillar.title}
                        </h4>
                      </div>

                      {/* Mini Sparkline Chart */}
                      <div className="h-5 sm:h-7 w-full mt-1.5 flex items-end justify-between gap-0.5">
                        {activePillar.chart.slice(0, 7).map((val, idx) => (
                          <div
                            key={idx}
                            className="flex-1 bg-gradient-to-t from-[#B7A38B] to-[#B7A38B]/40 rounded-xs shadow-[0_0_4px_rgba(183,163,139,0.3)]"
                            style={{ height: `${val}%` }}
                          />
                        ))}
                      </div>

                      <div className="mt-1 border-t border-white/10 pt-1 flex items-center justify-between text-[7.5px] sm:text-[8.5px]">
                        <span className="text-[#EDE5DA]/60 font-mono truncate">{activePillar.label}</span>
                        <span className="font-bold text-[#B7A38B] tracking-tight">{activePillar.metric}</span>
                      </div>
                    </div>

                    {/* Right Column: Narrative & Status */}
                    <div className="col-span-6 flex flex-col justify-between pl-1">
                      <div>
                        <div className="text-[7.5px] sm:text-[8.5px] font-mono text-[#B7A38B] tracking-wider uppercase font-semibold mb-0.5">
                          ✦ Pillar {activePillar.n}
                        </div>
                        <p className="text-[8.5px] sm:text-[10px] font-inter text-[#EDE5DA]/90 leading-tight line-clamp-3">
                          {activePillar.text}
                        </p>
                      </div>

                      <div className="mt-2 flex items-center justify-between text-[7px] sm:text-[8px] font-mono text-white/50 border-t border-white/10 pt-1">
                        <div className="flex gap-1">
                          {pillars.map((_, idx) => (
                            <span
                              key={idx}
                              className={`h-1 rounded-full transition-all ${
                                idx === scene ? "w-2.5 bg-[#B7A38B]" : "w-1 bg-white/20"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-[#B7A38B] font-bold">100% SLA</span>
                      </div>
                    </div>

                  </div>

                  {/* Mobile Screen Status Bar */}
                  <div className="flex items-center justify-between border-t border-white/10 pt-1 text-[7px] sm:text-[8px] font-mono text-white/40 tracking-wider uppercase">
                    <span>ENTERPRISE HOSPITALITY OS</span>
                    <span className="text-[#B7A38B]">SINGAPORE INFRASTRUCTURE</span>
                  </div>

                </div>

              </div>

              {/* Realistic Glass Reflection Glare */}
              <div className="absolute inset-1.5 sm:inset-2.5 md:inset-[1.2cqi] rounded-[8px] sm:rounded-[10px] md:rounded-[0.4cqi] pointer-events-none z-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.08]" />
                <div 
                  className="absolute -inset-[50%] rotate-[25deg]" 
                  style={{
                    background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.05) 45%, rgba(255,255,255,0.10) 50%, rgba(255,255,255,0.05) 55%, rgba(255,255,255,0) 100%)',
                    transform: 'translateY(-20%) translateX(15%) rotate(-35deg)'
                  }} 
                />
              </div>
            </div>

            {/* ── LAPTOP HINGE ────────────────────────────────────────── */}
            <div className="w-[92%] sm:w-[90%] md:w-[88%] h-1.5 sm:h-2 md:h-[1cqi] bg-gradient-to-b from-[#050608] via-[#0e1014] to-[#181a20] border-b border-black/80 relative z-20 shadow-[inset_0_3px_5px_rgba(0,0,0,0.9),0_2px_4px_rgba(0,0,0,0.5)]" />

            {/* ── LAPTOP BASE (CHAMFERED ALUMINIUM CHASSIS & NOTCH) ───── */}
            <div className="relative w-full h-3.5 sm:h-5 md:h-[2.2cqi] bg-gradient-to-b from-[#2b2f3a] via-[#14151a] to-[#08080a] rounded-b-[10px] sm:rounded-b-xl md:rounded-b-[1.4cqi] border-t border-[#3b3f4f] shadow-[0_20px_45px_-8px_rgba(0,0,0,0.9),0_8px_16px_-4px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.18)] z-20 flex justify-center">
              {/* Highlight catcher on base edge */}
              <div className="absolute top-0 left-0 right-0 h-[1px] md:h-[0.15cqi] bg-gradient-to-r from-transparent via-white/30 to-transparent z-30" />
              
              {/* MacBook Thumb Opening Notch */}
              <div className="w-16 sm:w-28 md:w-[16%] h-[42%] bg-gradient-to-b from-[#050506] to-[#0d0e11] rounded-b-[5px] sm:rounded-b-md md:rounded-b-[0.6cqi] border-t border-black/80 shadow-[inset_0_2px_3px_rgba(0,0,0,0.8)]" />
            </div>

            {/* Surface Ambient Desk Glow */}
            <div className="w-[105%] h-[120px] bg-gradient-to-t from-transparent via-[#1b3bf5]/10 to-transparent absolute bottom-[-110px] blur-lg pointer-events-none -z-10 opacity-70" />
            
            {/* ── MOBILE TOUCH-FRIENDLY PILLAR SELECTOR BAR (BENEATH LAPTOP) ── */}
            <div className="flex md:hidden items-center justify-center gap-1.5 mt-4 w-full overflow-x-auto pb-1 px-2 scrollbar-none">
              {pillars.map((p, idx) => (
                <button
                  key={p.n}
                  type="button"
                  onClick={() => selectPillar(idx)}
                  className={`px-2.5 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer shrink-0 ${
                    idx === scene
                      ? "bg-[#B7A38B] text-[#032147] font-bold shadow-md scale-105"
                      : "bg-[#032147]/80 text-[#EDE5DA]/70 border border-white/10 hover:border-white/30"
                  }`}
                >
                  <span className="font-bold mr-1">{p.n}</span>
                  <span>{p.title.replace("OPHRON ", "")}</span>
                </button>
              ))}
            </div>

          </div>
        </ScrollReveal>

        {/* Section Conversion Dual CTAs */}
        <ScrollReveal variant="up" delay={250} className="mt-8 sm:mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#solutions"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#B7A38B] text-[#032147] hover:bg-white text-xs sm:text-sm font-montserrat font-bold tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <span>Explore All 5 Operational Pillars</span>
            <span>→</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-[#EDE5DA] text-xs sm:text-sm font-montserrat font-bold tracking-wide transition-all duration-300 hover:scale-105"
          >
            <span>Request Platform Audit</span>
            <span>↗</span>
          </a>
        </ScrollReveal>

      </div>
    </section>
  );
}
