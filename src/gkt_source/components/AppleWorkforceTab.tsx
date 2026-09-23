import { useState, useEffect, useRef } from "react";
import { WORKFORCE_STANDARDS } from "../data/site";
import { Icon, BrassLink } from "./ui";

interface StandardDetail {
  id: string;
  number: string;
  shortTitle: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  tag: string;
  metric: string;
  metricLabel: string;
}

const EXTENDED_DETAILS: StandardDetail[] = [
  {
    id: "wsq",
    number: "01",
    shortTitle: "WSQ Pathway",
    title: "WSQ Cleaning Operations Pathway",
    subtitle: "Trained & Certified Specialists",
    category: "Professional Credential",
    description:
      "Every specialist undergoes Workforce Skills Qualifications (WSQ) modules covering chemical safety, infection control, and high-standard surface restoration before stepping onto client sites.",
    tag: "100% WSQ Certified",
    metric: "100%",
    metricLabel: "WSQ Compliant Crew",
  },
  {
    id: "bizsafe",
    number: "02",
    shortTitle: "bizSAFE Safety",
    title: "bizSAFE-Compliant Tool-Box Meetings",
    subtitle: "Pre-Shift Safety Drills",
    category: "Safety Protocol",
    description:
      "Mandatory risk-assessment briefings conducted prior to every shift. Hazards identified, PPE verified, and emergency response routes reviewed before work starts.",
    tag: "Level 3 Certified",
    metric: "Daily",
    metricLabel: "Tool-Box Briefings",
  },
  {
    id: "microfibre",
    number: "03",
    shortTitle: "Microfibre System",
    title: "Colour-Coded Microfibre System",
    subtitle: "Zero Cross-Contamination Guarantee",
    category: "Sanitation Standard",
    description:
      "Strict color separation — Red for restrooms, Blue for common spaces, Yellow for food prep zones, Green for dining. Hospital-grade hygiene discipline applied everywhere.",
    tag: "Cross-Contamination Free",
    metric: "4-Tier",
    metricLabel: "Zonal Separation",
  },
  {
    id: "security",
    number: "04",
    shortTitle: "Security Personnel",
    title: "Uniformed & Security-Screened Personnel",
    subtitle: "Vetted & Badge-Identified",
    category: "Workforce Security",
    description:
      "All staff are full-time employees, background-checked, security-screened, and dressed in sharp GKT uniforms with photo ID badges visible at all times.",
    tag: "Background Checked",
    metric: "100%",
    metricLabel: "Full-Time Staff",
  },
  {
    id: "supervisor",
    number: "05",
    shortTitle: "Site Supervisor",
    title: "Dedicated Site Supervisor Line",
    subtitle: "Direct Client Line & Oversight",
    category: "Accountability",
    description:
      "A dedicated, bilingual site supervisor oversees every deployment, performs spot inspections, and maintains a direct mobile link with your facility management team.",
    tag: "24/7 Direct Contact",
    metric: "< 15m",
    metricLabel: "Escalation Response",
  },
  {
    id: "audit",
    number: "06",
    shortTitle: "Quality Audits",
    title: "Monthly SLA Quality Audits",
    subtitle: "Scored & Logged Performance",
    category: "Performance Metrics",
    description:
      "Rigorous monthly quality assessments scored strictly against your contractual Service Level Agreement (SLA), complete with photo evidence and corrective action logs.",
    tag: "Scored Against SLA",
    metric: "99.4%",
    metricLabel: "Average SLA Pass",
  },
];

export function AppleWorkforceTab() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance tabs every 3 seconds
  useEffect(() => {
    if (!isPlaying) return;

    timerRef.current = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % EXTENDED_DETAILS.length);
    }, 3000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying]);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  const current = EXTENDED_DETAILS[activeTab];

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* ------------------------------------------------------------------ */}
      {/*  Apple iPad Pro Mockup Chassis                                     */}
      {/* ------------------------------------------------------------------ */}
      <div className="relative rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-b from-[#2A3430] via-[#16201B] to-[#0A120E] p-3 sm:p-5 shadow-[0_30px_90px_-15px_rgba(0,0,0,0.85),0_0_35px_rgba(255,255,255,0.12)] border border-white/50 backdrop-blur-xl">
        
        {/* Top Hardware Elements: Camera Notch & Ambient Sensor */}
        <div className="relative mb-3 flex items-center justify-between px-4 pt-1">
          {/* macOS window controls */}
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#FF5F56] shadow-[0_0_8px_rgba(255,95,86,0.5)]" />
            <span className="h-3 w-3 rounded-full bg-[#FFBD2E] shadow-[0_0_8px_rgba(255,189,46,0.5)]" />
            <span className="h-3 w-3 rounded-full bg-[#27C93F] shadow-[0_0_8px_rgba(39,201,63,0.5)]" />
          </div>

          {/* iPad Camera Dot */}
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-pine-950 border border-white/40 shadow-inner" />
            <span className="h-1.5 w-1.5 rounded-full bg-brass/60" />
          </div>

          {/* Spacer to balance camera alignment */}
          <div className="w-16 hidden sm:block" />
        </div>

        {/* Safari Browser Header & Tab Bar */}
        <div className="rounded-t-2xl bg-pine-950/90 border border-white/20 overflow-hidden">
          {/* Safari Navigation Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-3 sm:px-5 py-2.5 bg-pine-900/60 border-b border-white/20">
            {/* Address Bar */}
            <div className="flex items-center gap-2.5 flex-1 max-w-lg bg-pine-950/80 border border-white/25 rounded-lg px-3.5 py-1.5 text-xs text-paper/80 font-mono shadow-inner">
              <span className="text-emerald-400 text-sm">🔒</span>
              <span className="text-brass-300 font-medium">https://</span>
              <span className="text-paper/90 truncate">gkt-intel.com.sg/workforce-standards</span>
              <span className="ml-auto text-[10px] text-sage/60 uppercase hidden sm:inline">SSL 256-bit</span>
            </div>

            {/* Controls: Play/Pause & Speed toggle */}
            <div className="flex items-center gap-2.5">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-2 px-3 py-1 rounded-md bg-paper/10 hover:bg-paper/20 border border-white/20 text-[11px] font-mono text-champagne transition-all"
                title={isPlaying ? "Pause Text Motion" : "Play Text Motion"}
              >
                {isPlaying ? (
                  <>
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Pause Scroll</span>
                  </>
                ) : (
                  <>
                    <span className="h-2 w-2 rounded-full bg-amber-400" />
                    <span>Resume Motion</span>
                  </>
                )}
              </button>

              <div className="hidden md:flex items-center gap-1 text-sage/70 font-mono text-[10px] uppercase px-2.5 py-1 bg-pine-950/50 rounded border border-white/20">
                <span>Tab {activeTab + 1}/6</span>
              </div>
            </div>
          </div>

          {/* Apple Interactive Tab Strip */}
          <div className="flex overflow-x-auto no-scrollbar bg-pine-950/95 border-b border-white/20 px-3 pt-2 gap-2">
            {EXTENDED_DETAILS.map((item, idx) => {
              const isActive = idx === activeTab;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabChange(idx)}
                  className={`group relative flex items-center justify-center gap-2 px-4 py-2.5 rounded-t-xl font-mono text-[11px] sm:text-xs transition-all duration-300 shrink-0 select-none ${
                    isActive
                      ? "bg-pine-900 text-champagne border-t-2 border-x border-white/40 shadow-[0_-5px_15px_rgba(0,0,0,0.5)] border-t-white font-medium"
                      : "text-sage/70 hover:text-paper hover:bg-pine-900/40 border-t border-transparent"
                  }`}
                >
                  <span className={`text-[10px] font-bold ${isActive ? "text-brass-300" : "text-moss"}`}>
                    {item.number}
                  </span>
                  <span>{item.shortTitle}</span>
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-brass-300 shadow-[0_0_6px_#D3B066]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/*  Inner Tablet Screen Display (Dark Apple OLED UI)                   */}
        {/* ------------------------------------------------------------------ */}
        <div
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
          className="relative bg-gradient-to-br from-[#08130E] via-[#0E1E17] to-[#060D0A] rounded-b-2xl p-6 sm:p-9 border-x border-b border-white/20 min-h-[400px] sm:min-h-[440px] flex flex-col justify-between overflow-hidden group"
        >

          {/* Background Ambient Grid & Glow */}
          <div
            className="absolute inset-0 opacity-[0.07] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 50% 50%, rgba(211,176,102,0.4) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-brass/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-emerald-900/20 blur-3xl pointer-events-none" />

          {/* Main Animated Display Content */}
          <div className="relative z-10 grid gap-8 lg:grid-cols-12 items-stretch">
            
            {/* Left Column: Moving Detail Text Card with Smooth Blur Crossfade */}
            <div key={current.id} className="lg:col-span-8 space-y-5 text-left animate-smoothTabFade">
              {/* Badge & Category Row */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brass/15 border border-brass/40 font-mono text-[10px] tracking-widest text-brass-300 uppercase shadow-sm">
                  <Icon.Diamond className="h-2 w-2 text-brass" />
                  {current.category}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 font-mono text-[10px] text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  {current.tag}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div className="space-y-1.5">
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-paper leading-tight text-left">
                  {current.title}
                </h3>
                <p className="font-display italic text-base sm:text-lg text-brass-300 font-light text-left">
                  {current.subtitle}
                </p>

                {/* Main Paragraph Description */}
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-sage/95 text-left bg-pine-950/50 border border-paper/10 rounded-xl p-4 sm:p-5 shadow-inner">
                  {current.description}
                </p>
              </div>

              {/* Bullet Quick Verification Checklist */}
              <div className="pt-1">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-brass-300/80 mb-2.5 text-left">
                  Key Verification Points
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-paper/90">
                  <div className="flex items-center gap-2.5 p-3 rounded-lg bg-pine-900/60 border border-paper/10 text-left">
                    <span className="text-brass shrink-0">◆</span>
                    <span className="leading-snug">{WORKFORCE_STANDARDS[activeTab % WORKFORCE_STANDARDS.length]}</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-3 rounded-lg bg-pine-900/60 border border-paper/10 text-left">
                    <span className="text-brass shrink-0">◆</span>
                    <span className="leading-snug">{WORKFORCE_STANDARDS[(activeTab + 1) % WORKFORCE_STANDARDS.length]}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Live Metric Box & Interactive Controls */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-5 h-full">
              {/* Dynamic Live Metric Scorecard */}
              <div key={`metric-${current.id}`} className="animate-smoothMetricSlide bg-pine-950/90 border border-brass/35 rounded-2xl p-5 sm:p-6 shadow-2xl relative overflow-hidden group/metric text-left">
                <div className="absolute top-2 right-4 font-display font-bold text-6xl text-brass/10 pointer-events-none select-none">
                  {current.number}
                </div>
                <p className="font-mono text-[10.5px] tracking-[0.25em] text-sage uppercase">
                  Verified Metric
                </p>
                <div className="mt-2 font-display text-4xl sm:text-5xl font-semibold tracking-tight text-brass-300">
                  {current.metric}
                </div>
                <p className="mt-1 font-mono text-xs text-paper/90 font-medium">
                  {current.metricLabel}
                </p>
                <div className="mt-5 pt-3.5 border-t border-paper/10 flex items-center justify-between text-[10.5px] font-mono text-sage/80">
                  <span>Status: Active</span>
                  <span className="text-emerald-400 font-medium">● Verified</span>
                </div>
              </div>

              {/* Controls Box */}
              <div className="space-y-2.5">
                {/* Prev / Next Manual Nav Buttons */}
                <div className="flex items-center justify-between gap-2.5 p-2 rounded-xl bg-pine-900/60 border border-paper/10 shadow-md">
                  <button
                    onClick={() => handleTabChange((activeTab - 1 + EXTENDED_DETAILS.length) % EXTENDED_DETAILS.length)}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-pine-950/80 hover:bg-brass/20 text-champagne text-xs font-mono border border-paper/10 transition-all active:scale-95"
                  >
                    <Icon.ArrowLeft className="h-3.5 w-3.5" />
                    <span>Prev</span>
                  </button>
                  <span className="text-xs font-mono text-sage px-2 font-medium">
                    {activeTab + 1} / {EXTENDED_DETAILS.length}
                  </span>
                  <button
                    onClick={() => handleTabChange((activeTab + 1) % EXTENDED_DETAILS.length)}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-pine-950/80 hover:bg-brass/20 text-champagne text-xs font-mono border border-paper/10 transition-all active:scale-95"
                  >
                    <span>Next</span>
                    <Icon.ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>

              </div>

            </div>
          </div>

          {/* ------------------------------------------------------------------ */}
          {/*  Bottom Continuous Moving Marquee Ticker                           */}
          {/* ------------------------------------------------------------------ */}
          <div className="relative mt-8 pt-4 border-t border-paper/10 overflow-hidden">
            <div className="flex whitespace-nowrap gap-8 animate-marquee font-mono text-[11px] tracking-[0.2em] text-champagne/85 uppercase">
              {WORKFORCE_STANDARDS.concat(WORKFORCE_STANDARDS).map((std, i) => (
                <span key={i} className="flex items-center gap-3 shrink-0">
                  <Icon.Diamond className="h-2 w-2 text-brass-300" />
                  <span>{std}</span>
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom iPad Home Indicator Bar */}
        <div className="flex justify-center pt-2.5 pb-0.5">
          <div className="h-1 w-32 rounded-full bg-paper/25 shadow-sm" />
        </div>

      </div>

      {/* Action CTA below Apple Tablet */}
      <div className="mt-8 flex justify-center sm:justify-end px-2">
        <BrassLink to="/about" light>
          More about GKT ↗
        </BrassLink>
      </div>
    </div>
  );
}
