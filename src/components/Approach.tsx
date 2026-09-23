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
  const [isAutoplay, setIsAutoplay] = useState(true);

  // Auto-play loop sequence through the 5 pillars/stages
  useEffect(() => {
    if (!isAutoplay) return;
    const timer = setInterval(() => {
      setScene((prev) => (prev + 1) % pillars.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoplay]);

  const activePillar = pillars[scene];

  return (
    <section className="relative py-28 bg-[#032147] overflow-hidden" id="opportunity">
      {/* Ambient background spotlight scene */}
      <div className="absolute inset-0 bg-[#032147] z-0" />
      <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#B7A38B]/10 blur-[130px] pointer-events-none z-0" />
      
      {/* Looping dynamic glowing elements */}
      <div className="absolute top-[25%] left-[20%] w-[350px] h-[350px] rounded-full bg-[#B7A38B]/10 blur-[100px] animate-pulse pointer-events-none z-0" style={{ animationDuration: '10s' }} />
      <div className="absolute bottom-[15%] right-[20%] w-[300px] h-[300px] rounded-full bg-[#B7A38B]/10 blur-[90px] animate-pulse pointer-events-none z-0" style={{ animationDuration: '15s' }} />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 flex flex-col items-center">
        
        {/* Title and Intro layout matching original style but styled for dark backdrop */}
        <div className="w-full max-w-[1000px] mb-8 text-center sm:text-left">
          <ScrollReveal variant="up" delay={50}>
            <div className="flex items-center justify-center sm:justify-start gap-3 text-[10px] font-mono uppercase tracking-[0.22em] text-[#EDE5DA]/60">
              <span className="grid place-items-center h-5 w-5 rounded-full text-[9px] font-bold bg-[#B7A38B] text-[#032147]">
                ✦
              </span>
              <span>004 / The Strategic Advantage</span>
            </div>
          </ScrollReveal>

          <div className="mt-8 grid lg:grid-cols-12 gap-8 items-end">
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

        {/* MacBook Container */}
        <ScrollReveal variant="scale" delay={200} className="w-full flex justify-center">
          <div className="relative w-full max-w-[1020px] mt-6 flex flex-col items-center group @container">
            
            {/* Lid (MacBook Screen) */}
            <div className="relative w-[88%] aspect-[16/10] bg-gradient-to-b from-[#032147] via-[#021733] to-[#01183b] rounded-t-[2.2cqi] p-[1.2cqi] shadow-[0_30px_75px_-10px_rgba(3, 33, 71,0.95),inset_0_1px_2px_rgba(255,255,255,0.25),inset_0_-1px_1px_rgba(255,255,255,0.05)] border border-[#B7A38B]/30 flex flex-col z-10">
              {/* Webcam & Sensors */}
              <div className="absolute top-[0.4%] left-1/2 -translate-x-1/2 flex items-center gap-[0.5cqi] pointer-events-none">
                <div className="w-[0.12cqi] h-[0.12cqi] rounded-full bg-green-500/30" />
                <div className="w-[0.7cqi] h-[0.7cqi] rounded-full bg-[#01183b] border border-white/10 flex items-center justify-center relative">
                  <div className="w-[0.25cqi] h-[0.25cqi] rounded-full bg-[#B7A38B]/50" />
                </div>
                <div className="w-[0.12cqi] h-[0.12cqi] rounded-full bg-[#01183b]" />
              </div>

              {/* Screen Content Viewport */}
              <div className="relative flex-1 bg-[#021733] rounded-[0.4cqi] overflow-hidden border border-[#032147] flex flex-col p-[4cqi] text-[#EDE5DA] select-none @container">
                <div className="absolute inset-0 bg-gradient-to-br from-[#B7A38B]/15 via-[#021733] to-[#032147] -z-10 transition-all duration-1000" />
                <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(237,229,218,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(237,229,218,0.08)_1px,transparent_1px)] bg-[size:16px_16px] -z-10" />

                {/* Dynamic Product Showcase UI */}
                <div className="flex-1 flex flex-col justify-between">
                  
                  {/* Navbar mock inside the screen */}
                  <div className="flex items-center justify-between border-b border-white/15 pb-[1.5cqi] text-[max(8px,1cqi)] font-mono uppercase tracking-[0.2cqi] text-[#EDE5DA]/60">
                    <div className="flex items-center gap-[1.5cqi]">
                      <span className="font-semibold text-white tracking-wider flex items-center gap-[0.5cqi]">
                        <span className="inline-block w-[1cqi] h-[1cqi] rounded-full bg-[#B7A38B] animate-ping" />
                        OphronOS
                      </span>
                      <span className="opacity-45">/</span>
                      <span className="text-[#B7A38B]">Hospitality Platform</span>
                    </div>
                    <div className="flex items-center gap-[2cqi]">
                      {pillars.map((p, idx) => (
                        <button 
                          key={p.n}
                          onClick={() => { setScene(idx); setIsAutoplay(false); }}
                          className={`transition hover:text-white cursor-pointer ${idx === scene ? "text-[#B7A38B] font-semibold" : ""}`}
                        >
                          {p.n}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Dashboard layout inside the screen */}
                  <div className="grid grid-cols-12 gap-[3cqi] items-stretch my-auto py-[1cqi]">
                    
                    {/* Left Column: Metric Visualizer Card */}
                    <div className="col-span-5 bg-white/[0.04] border border-white/[0.1] rounded-[1cqi] p-[2.5cqi] flex flex-col justify-between relative overflow-hidden backdrop-blur-md shadow-[0_15px_30px_-5px_rgba(0,0,0,0.5)]">
                      <div className="absolute top-0 right-0 w-[10cqi] h-[10cqi] bg-[#B7A38B]/20 rounded-full blur-[20px] pointer-events-none" />
                      
                      <div className="space-y-[0.8cqi]">
                        <span className="inline-block text-[max(6px,0.85cqi)] font-mono font-bold text-[#B7A38B] uppercase tracking-wider bg-[#B7A38B]/15 px-[1.2cqi] py-[0.4cqi] rounded-full border border-[#B7A38B]/30">
                          {activePillar.badge}
                        </span>
                        <h4 className="text-[max(14px,2.2cqi)] font-montserrat font-bold text-white tracking-tight leading-none">
                          {activePillar.title}<span className="text-[#B7A38B]">.</span>
                        </h4>
                        <p className="text-[max(9px,1.2cqi)] text-[#EDE5DA]/70 leading-relaxed font-serif-i italic">
                          {activePillar.t}
                        </p>
                      </div>

                      {/* Chart / Analytics visualization */}
                      <div className="h-[9cqi] w-full mt-[1.5cqi] flex items-end justify-between gap-[0.5cqi]">
                        {activePillar.chart.map((val, idx) => {
                          const heightPct = val + "%";
                          return (
                            <div 
                              key={idx} 
                              className="flex-1 bg-gradient-to-t from-[#B7A38B] to-[#B7A38B]/40 rounded-[0.2cqi] transition-all duration-700 ease-out origin-bottom shadow-[0_0_8px_rgba(183, 163, 139,0.3)]" 
                              style={{ 
                                height: heightPct, 
                                transitionDelay: `${idx * 50}ms` 
                              }} 
                            />
                          );
                        })}
                      </div>

                      <div className="mt-[2cqi] border-t border-white/10 pt-[1.5cqi] flex items-center justify-between text-[max(8px,1.1cqi)]">
                        <span className="text-[#EDE5DA]/60 font-mono text-[max(7px,0.9cqi)]">{activePillar.label}</span>
                        <span className="font-montserrat font-bold text-[#B7A38B] tracking-tight">{activePillar.metric}</span>
                      </div>
                    </div>

                    {/* Right Column: Narrative workflow & impact */}
                    <div className="col-span-7 flex flex-col justify-between pl-[1cqi] py-[1cqi]">
                      
                      <div className="space-y-[1.8cqi]">
                        <div className="text-[max(8px,1cqi)] font-mono text-white/50 tracking-widest uppercase">
                          [ OPHRON PILLAR / {activePillar.n} ]
                        </div>
                        <p className="text-[max(11px,1.75cqi)] font-inter leading-relaxed text-[#EDE5DA]/90">
                          {activePillar.text}
                        </p>
                      </div>

                      {/* Stepper timeline tracking */}
                      <div className="mt-[3cqi] border-t border-white/10 pt-[2cqi] flex justify-between items-center">
                        <div className="flex gap-[0.8cqi]">
                          {pillars.map((_, idx) => (
                            <div 
                              key={idx} 
                              onClick={() => { setScene(idx); setIsAutoplay(false); }}
                              className={`h-[0.5cqi] rounded-full transition-all duration-500 cursor-pointer ${
                                idx === scene ? "w-[4cqi] bg-[#B7A38B]" : "w-[1.2cqi] bg-white/25 hover:bg-white/45"
                              }`} 
                            />
                          ))}
                        </div>
                        <div className="text-[max(7px,0.9cqi)] font-mono text-[#EDE5DA]/50 flex items-center gap-[0.6cqi]">
                          <span>SINGAPORE PLATFORM SLA</span>
                          <span className="inline-block w-[0.8cqi] h-[0.8cqi] rounded-full bg-[#B7A38B] pulse-dot" />
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Footer status mock inside the screen */}
                  <div className="flex items-center justify-between border-t border-white/10 pt-[1.5cqi] text-[max(6px,0.85cqi)] font-mono text-white/40 tracking-widest uppercase">
                    <span>ENTERPRISE HOSPITALITY OS</span>
                    <span>SINGAPORE & INTERNATIONAL INFRASTRUCTURE</span>
                  </div>

                </div>

              </div>

              {/* Screen glass reflection overlay with realistic diagonal glare */}
              <div className="absolute inset-[1.2cqi] rounded-[0.4cqi] pointer-events-none z-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.10]" />
                <div 
                  className="absolute -inset-[50%] rotate-[25deg]" 
                  style={{
                    background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.06) 45%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.06) 55%, rgba(255,255,255,0) 100%)',
                    transform: 'translateY(-20%) translateX(15%) rotate(-35deg)'
                  }} 
                />
              </div>
            </div>

            {/* Hinge with 3D inset shadow */}
            <div className="w-[88%] h-[1cqi] bg-gradient-to-b from-[#050608] via-[#101114] to-[#1a1b22] border-b border-black/80 relative z-20 shadow-[inset_0_4px_6px_rgba(0,0,0,0.9),0_2px_4px_rgba(0,0,0,0.5)]" />

            {/* Base with 3D chamfered edge */}
            <div className="relative w-full h-[2.2cqi] bg-gradient-to-b from-[#2d313d] via-[#14151a] to-[#08080a] rounded-b-[1.4cqi] border-t border-[#3b3f4f] shadow-[0_25px_50px_-10px_rgba(0,0,0,0.9),0_10px_20px_-5px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.15)] z-20 flex justify-center">
              {/* Top highlight light catcher on the base */}
              <div className="absolute top-0 left-0 right-0 h-[0.15cqi] bg-gradient-to-r from-transparent via-white/25 to-transparent z-30" />
              
              {/* Opening notch */}
              <div className="w-[16%] h-[40%] bg-gradient-to-b from-[#050506] to-[#0e0f12] rounded-b-[0.6cqi] border-t border-black/80 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)]" />
            </div>

            {/* Surface Glossy Reflection (matching dashboard vibe) */}
            <div className="w-[108%] h-[160px] bg-gradient-to-t from-transparent via-[#1b3bf5]/12 to-transparent absolute bottom-[-150px] blur-lg pointer-events-none -z-10 opacity-80" />
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
