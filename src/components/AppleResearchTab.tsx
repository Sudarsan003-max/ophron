import { useState, useEffect, useRef, MouseEvent } from "react";
import { BlogPost, OPHRON_BLOG_POSTS } from "../data/ophronBlogPosts";

interface ResearchItem {
  id: string;
  number: string;
  shortTitle: string;
  badge: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  standard: string;
  metric: string;
  metricLabel: string;
  checklist: string[];
  isArticle?: boolean;
}

const RESEARCH_DETAILS: ResearchItem[] = [
  {
    id: "sfa",
    number: "01",
    shortTitle: "SFA & Kitchen",
    badge: "SFA & HACCP",
    category: "Food Safety & Regulatory Protocol",
    title: "SFA & Kitchen Compliance Architecture",
    subtitle: "Daily Close-Down & Inspectable Readiness",
    description:
      "Daily close-down protocols, grease-trap clearing, and canopy degreasing engineered to keep Singapore F&B kitchens SFA Grade A inspectable 24/7.",
    standard: "Grade A Standards",
    metric: "Grade A",
    metricLabel: "SFA Inspectable Standard",
    checklist: [
      "Daily close-down protocols & grease-trap clearing",
      "Canopy exhaust degreasing & fire-hazard prevention",
      "Food preparation contact surface sterilization",
      "Audit-ready documentation for SFA health inspectors",
    ],
  },
  {
    id: "nea",
    number: "02",
    shortTitle: "NEA Disinfection",
    badge: "NEA APPROVED",
    category: "Pathogen & Biosecurity Defense",
    title: "NEA Disinfection Defense & Bio-Suppression",
    subtitle: "Electrostatic Spraying & ULV Fogging",
    description:
      "Electrostatic spraying & ULV fogging using NEA-approved compounds. Baseline pathogen suppression protecting your operating calendar and guest safety.",
    standard: "100% Suppression",
    metric: "100%",
    metricLabel: "Pathogen Suppression Baseline",
    checklist: [
      "Electrostatic 360° wrap-around micro-droplet dispersion",
      "Ultra-Low Volume (ULV) cold fogging for air & deep cavities",
      "NEA-approved hospital-grade broad-spectrum virucides",
      "Zero operating calendar disruption with rapid dwell times",
    ],
  },
  {
    id: "esg",
    number: "03",
    shortTitle: "ESG & Green Mark",
    badge: "GREEN MARK ESG",
    category: "Sustainable Facility Operations",
    title: "ESG & Green Mark Environmental Cleaning",
    subtitle: "Low-VOC Eco Chemistry & Closed-Loop Fibres",
    description:
      "Low-VOC eco chemistry, automated dilution control, and closed-loop microfibre supporting Singapore Green Mark building disclosures and sustainability goals.",
    standard: "Low Chemical Load",
    metric: "Low VOC",
    metricLabel: "Green Mark ESG Chemistry",
    checklist: [
      "Biodegradable, low-VOC eco-labelled chemical formulas",
      "Automated closed-loop dilution control dispensing",
      "Closed-loop color-coded microfibre sanitization",
      "Quantifiable metrics supporting BCA Green Mark audits",
    ],
  },
  {
    id: "workforce",
    number: "04",
    shortTitle: "Workforce & SLA",
    badge: "WSQ CERTIFIED",
    category: "Workforce Discipline & SLA Tracking",
    title: "Workforce & Digital Operational Audit Log",
    subtitle: "WSQ-Trained Crew & Named Site Supervisors",
    description:
      "WSQ-trained, security-screened crews operating under named site supervisors with daily checklists and digital audit sign-offs.",
    standard: "Auditable SLA",
    metric: "99.8%",
    metricLabel: "Auditable SLA Compliance",
    checklist: [
      "100% WSQ-certified and security-screened personnel",
      "Dedicated named site supervisor with direct client link",
      "Real-time timestamped digital checklists with photos",
      "Monthly SLA audits with instant remediation logs",
    ],
  },
  {
    id: "guide",
    number: "05",
    shortTitle: "Featured Guide",
    badge: "SINGAPORE F&B · HYGIENE GUIDE",
    category: "Featured Research Whitepaper",
    title: "Restaurant & Kitchen Deep Cleaning in Singapore",
    subtitle: "SFA Compliance Guide & Operations Whitepaper",
    description:
      "Between SFA inspection grades, grease trap maintenance, and canopy fire safety, a Singapore kitchen's cleaning program is its license to operate. Here is how OPHRON ensures inspectable kitchens 24/7.",
    standard: "Inspectable 24/7",
    metric: "24/7",
    metricLabel: "Inspectable Readiness",
    checklist: [
      "Comprehensive SFA Grade A kitchen compliance manual",
      "Exhaust hood grease loading & duct safety standards",
      "Night-shift stewarding vs scheduled deep clean cycles",
      "Direct interactive whitepaper reader with key takeaways",
    ],
    isArticle: true,
  },
];

const MARQUEE_ITEMS = [
  "SFA GRADE A COMPLIANCE",
  "NEA-APPROVED VIRUCIDAL DISINFECTION",
  "BCA GREEN MARK ESG STANDARDS",
  "100% WSQ-TRAINED CREWS",
  "DIGITAL AUDIT SIGN-OFFS",
  "24/7 DEDICATED SUPERVISOR ESCALATION",
  "HOSPITAL-GRADE HYGIENE PROTOCOLS",
];

type Props = {
  onOpenArticle?: (post: BlogPost) => void;
};

export default function AppleResearchTab({ onOpenArticle }: Props) {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [tilt, setTilt] = useState({ x: 0, y: 0, mouseX: 50, mouseY: 50 });
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const chassisRef = useRef<HTMLDivElement | null>(null);

  // Auto-cycle through tabs every 4.5 seconds
  useEffect(() => {
    if (!isPlaying) return;

    timerRef.current = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % RESEARCH_DETAILS.length);
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying]);

  // Handle 3D Perspective Tilt on Mouse Movement
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!chassisRef.current) return;
    const rect = chassisRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Limit maximum tilt angle to 3.5 degrees for an ultra-subtle, premium feel
    const rotateY = ((x - centerX) / centerX) * 3.5;
    const rotateX = -((y - centerY) / centerY) * 3.5;
    const mouseX = (x / rect.width) * 100;
    const mouseY = (y / rect.height) * 100;

    setTilt({ x: rotateX, y: rotateY, mouseX, mouseY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, mouseX: 50, mouseY: 50 });
    setIsPlaying(true);
  };

  const current = RESEARCH_DETAILS[activeTab];

  const handleReadGuide = () => {
    if (onOpenArticle) {
      onOpenArticle(OPHRON_BLOG_POSTS[0]);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* 3D Perspective Chassis Container */}
      <div
        ref={chassisRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1400px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: tilt.x === 0 ? "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)" : "transform 0.1s ease-out",
          // @ts-expect-error custom css property
          "--mouse-x": `${tilt.mouseX}%`,
          "--mouse-y": `${tilt.mouseY}%`,
        }}
        className="relative rounded-[28px] sm:rounded-[36px] bg-gradient-to-b from-[#0A2647] via-[#041A35] to-[#021024] p-3 sm:p-5 shadow-[0_35px_100px_-15px_rgba(0,0,0,0.85),0_0_40px_rgba(183,163,139,0.18)] border border-[#B7A38B]/40 backdrop-blur-2xl transition-shadow duration-500 hover:shadow-[0_45px_120px_-10px_rgba(3,33,71,0.9),0_0_55px_rgba(183,163,139,0.3)]"
      >
        {/* Dynamic Specular Glass Glare */}
        <div className="absolute inset-0 rounded-[28px] sm:rounded-[36px] apple-specular-glare opacity-70 transition-opacity duration-300 pointer-events-none" />

        {/* Top Hardware Elements: macOS Controls & Ambient Sensors */}
        <div className="relative mb-3 flex items-center justify-between px-3 sm:px-5 pt-1.5 z-20">
          {/* macOS Traffic Light Buttons */}
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#FF5F56] shadow-[0_0_8px_rgba(255,95,86,0.6)] cursor-pointer hover:scale-110 transition-transform" />
            <span className="h-3 w-3 rounded-full bg-[#FFBD2E] shadow-[0_0_8px_rgba(255,189,46,0.6)] cursor-pointer hover:scale-110 transition-transform" />
            <span className="h-3 w-3 rounded-full bg-[#27C93F] shadow-[0_0_8px_rgba(39,201,63,0.6)] cursor-pointer hover:scale-110 transition-transform" />
            <span className="ml-2 hidden sm:inline-block text-[11px] font-mono text-[#B7A38B]/80 font-medium">
              OPHRON Pro OS · Retina XDR
            </span>
          </div>

          {/* iPad Camera Dot & Ambient Sensor */}
          <div className="flex items-center gap-1.5 bg-[#020E1C] px-3 py-1 rounded-full border border-white/10 shadow-inner">
            <span className="h-2 w-2 rounded-full bg-[#032147] border border-[#B7A38B]/60 shadow-inner" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#B7A38B]/80 animate-pulse" />
          </div>

          {/* Device Model Badge */}
          <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-[#EDE5DA]/60">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>Live Node v2.6</span>
          </div>
        </div>

        {/* Safari Browser Header & Tab Navigation Bar */}
        <div className="rounded-t-2xl bg-[#021329]/95 border border-white/15 overflow-hidden shadow-inner">
          {/* Safari URL / Omnibar */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-3 sm:px-6 py-2.5 bg-[#031B38]/80 border-b border-white/10">
            {/* Address Bar */}
            <div className="flex items-center gap-2.5 flex-1 max-w-xl bg-[#020F21]/90 border border-[#B7A38B]/25 rounded-lg px-3.5 py-1.5 text-xs font-mono text-[#EDE5DA]/90 shadow-inner">
              <span className="text-emerald-400 text-xs">🔒</span>
              <span className="text-[#B7A38B] font-semibold">https://</span>
              <span className="text-[#EDE5DA] truncate">ophron.sg/research/operational-principles-sfa-compliance</span>
              <span className="ml-auto text-[9px] text-[#B7A38B]/70 uppercase hidden sm:inline border border-[#B7A38B]/30 px-1.5 py-0.5 rounded">
                SSL 256-bit
              </span>
            </div>

            {/* Play/Pause & Motion Controls */}
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 hover:bg-[#B7A38B]/20 border border-white/15 text-[11px] font-mono text-[#EDE5DA] transition-all cursor-pointer shadow-sm active:scale-95"
                title={isPlaying ? "Pause Auto Rotation" : "Resume Auto Rotation"}
              >
                {isPlaying ? (
                  <>
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-[#EDE5DA] font-medium">Auto-Cycle On</span>
                  </>
                ) : (
                  <>
                    <span className="h-2 w-2 rounded-full bg-amber-400" />
                    <span className="text-[#EDE5DA]/80 font-medium">Cycle Paused</span>
                  </>
                )}
              </button>

              <div className="hidden md:flex items-center gap-1 text-[#B7A38B] font-mono text-[11px] px-2.5 py-1 bg-[#020F21] rounded border border-[#B7A38B]/30">
                <span>Tab {activeTab + 1}/5</span>
              </div>
            </div>
          </div>

          {/* Apple Interactive Tab Strip */}
          <div className="flex overflow-x-auto no-scrollbar bg-[#020E1F]/95 border-b border-white/10 px-2 sm:px-4 pt-2 gap-1.5 sm:gap-2">
            {RESEARCH_DETAILS.map((item, idx) => {
              const isActive = idx === activeTab;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`group relative flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-t-xl font-mono text-[11px] sm:text-xs transition-all duration-300 shrink-0 select-none cursor-pointer ${
                    isActive
                      ? "bg-[#032147] text-white border-t-2 border-x border-[#B7A38B]/60 shadow-[0_-5px_18px_rgba(0,0,0,0.6)] border-t-[#B7A38B] font-semibold"
                      : "text-[#EDE5DA]/60 hover:text-[#EDE5DA] hover:bg-white/[0.04] border-t-2 border-transparent"
                  }`}
                >
                  <span className={`text-[10px] font-bold ${isActive ? "text-[#B7A38B]" : "text-[#EDE5DA]/40"}`}>
                    {item.number}
                  </span>
                  <span className="tracking-tight">{item.shortTitle}</span>
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-[#B7A38B] shadow-[0_0_8px_#B7A38B]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/*  Inner Tablet Screen Display (Deep OLED Glass Interface)          */}
        {/* ------------------------------------------------------------------ */}
        <div className="relative bg-gradient-to-br from-[#021326] via-[#031B38] to-[#010B18] rounded-b-2xl p-5 sm:p-8 lg:p-10 border-x border-b border-white/15 min-h-[460px] flex flex-col justify-between overflow-hidden shadow-2xl">
          {/* Background Ambient Blueprint Grid & Specular Glows */}
          <div
            className="absolute inset-0 opacity-[0.08] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 50% 50%, rgba(183,163,139,0.5) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-[#B7A38B]/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#0A2647]/50 blur-3xl pointer-events-none" />

          {/* Main Animated Display Content */}
          <div className="relative z-10 grid gap-8 lg:grid-cols-12 items-stretch">
            {/* Left Column: Detailed Moving Text Card */}
            <div key={current.id} className="lg:col-span-8 space-y-5 text-left animate-smoothTabFade">
              {/* Badge & Category Row */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B7A38B]/15 border border-[#B7A38B]/40 font-mono text-[10px] tracking-widest text-[#B7A38B] uppercase font-bold shadow-sm">
                  <span className="text-[#B7A38B]">◆</span>
                  {current.category}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#032147] border border-white/20 font-mono text-[10px] text-[#EDE5DA] font-semibold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  {current.badge}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div className="space-y-2">
                <h3 className="font-canela text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-white leading-[1.2]">
                  {current.title}
                </h3>
                <p className="font-serif-i italic text-base sm:text-lg text-[#B7A38B] font-light">
                  {current.subtitle}
                </p>

                {/* Main Paragraph Description */}
                <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-[#EDE5DA]/90 bg-[#020F21]/80 border border-[#B7A38B]/20 rounded-xl p-4 sm:p-5 shadow-inner backdrop-blur-sm">
                  {current.description}
                </p>
              </div>

              {/* Key Verification Points Checklist */}
              <div className="pt-2">
                <div className="flex items-center justify-between mb-3">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#B7A38B] font-bold">
                    Key Operational Verification Points
                  </p>
                  <span className="text-[10px] font-mono text-[#EDE5DA]/50 uppercase">4/4 Audited</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#EDE5DA]/90">
                  {current.checklist.map((pt, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-lg bg-[#031E3D]/70 border border-white/10 hover:border-[#B7A38B]/40 transition-colors shadow-sm"
                    >
                      <span className="text-[#B7A38B] shrink-0 font-bold mt-0.5">◆</span>
                      <span className="leading-snug text-[#EDE5DA]">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Read Research Guide CTA inside Tab 05 / Whitepaper */}
              {current.isArticle && (
                <div className="pt-3">
                  <button
                    type="button"
                    onClick={handleReadGuide}
                    className="inline-flex items-center gap-3 rounded-full bg-[#B7A38B] text-[#032147] px-6 py-2.5 text-[13px] font-montserrat font-bold hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl cursor-pointer"
                  >
                    <span>Read Complete Whitepaper</span>
                    <span className="grid place-items-center h-6 w-6 rounded-full bg-[#032147] text-[#EDE5DA] text-xs">
                      →
                    </span>
                  </button>
                </div>
              )}
            </div>

            {/* Right Column: Live Verified Metric Box & Nav Controls */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-5 h-full">
              {/* Dynamic Live Metric Scorecard */}
              <div
                key={`metric-${current.id}`}
                className="animate-smoothMetricSlide bg-[#020F21]/95 border border-[#B7A38B]/40 rounded-2xl p-5 sm:p-6 shadow-2xl relative overflow-hidden text-left backdrop-blur-md"
              >
                {/* Background Large Number Watermark */}
                <div className="absolute top-2 right-4 font-canela font-bold text-6xl text-[#B7A38B]/10 pointer-events-none select-none">
                  {current.number}
                </div>

                <p className="font-mono text-[10px] tracking-[0.25em] text-[#B7A38B] uppercase font-bold">
                  Verified Metric
                </p>

                <div className="mt-3 font-canela text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-white leading-tight">
                  {current.metric}
                </div>

                <p className="mt-1.5 font-mono text-xs text-[#EDE5DA]/80 font-medium">
                  {current.metricLabel}
                </p>

                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#EDE5DA]/70">
                  <span className="opacity-75">Standard:</span>
                  <span className="text-[#B7A38B] font-bold">{current.standard}</span>
                </div>

                <div className="mt-2 flex items-center justify-between text-[10px] font-mono text-[#EDE5DA]/60">
                  <span>Audit Frequency:</span>
                  <span className="text-emerald-400 font-medium">● 100% Active</span>
                </div>
              </div>

              {/* Prev / Next Manual Nav Controls */}
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2 p-2 rounded-xl bg-[#020E1F]/90 border border-white/10 shadow-md">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveTab((activeTab - 1 + RESEARCH_DETAILS.length) % RESEARCH_DETAILS.length)
                    }
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[#031B38] hover:bg-[#B7A38B] hover:text-[#032147] text-[#EDE5DA] text-xs font-mono border border-white/10 transition-all active:scale-95 cursor-pointer font-semibold"
                  >
                    <span>←</span>
                    <span>Prev</span>
                  </button>

                  <span className="text-xs font-mono text-[#B7A38B] px-3 font-bold">
                    {activeTab + 1} / {RESEARCH_DETAILS.length}
                  </span>

                  <button
                    type="button"
                    onClick={() => setActiveTab((activeTab + 1) % RESEARCH_DETAILS.length)}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[#031B38] hover:bg-[#B7A38B] hover:text-[#032147] text-[#EDE5DA] text-xs font-mono border border-white/10 transition-all active:scale-95 cursor-pointer font-semibold"
                  >
                    <span>Next</span>
                    <span>→</span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleReadGuide}
                  className="w-full py-2.5 px-3 rounded-xl bg-[#032147] hover:bg-[#B7A38B]/20 text-[#B7A38B] hover:text-white border border-[#B7A38B]/30 text-xs font-mono font-medium transition-all text-center cursor-pointer"
                >
                  View Full Whitepaper (PDF / Reader) ↗
                </button>
              </div>
            </div>
          </div>

          {/* Continuous Moving OLED Marquee Ticker */}
          <div className="relative mt-8 pt-4 border-t border-white/10 overflow-hidden">
            <div className="flex whitespace-nowrap gap-8 marquee-track font-mono text-[11px] tracking-[0.2em] text-[#EDE5DA]/80 uppercase">
              {MARQUEE_ITEMS.concat(MARQUEE_ITEMS).map((item, idx) => (
                <span key={idx} className="flex items-center gap-3 shrink-0">
                  <span className="text-[#B7A38B] text-xs">◆</span>
                  <span>{item}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom iPad Pro Home Indicator Bar */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="h-1 w-36 rounded-full bg-white/30 shadow-sm" />
        </div>
      </div>
    </div>
  );
}
