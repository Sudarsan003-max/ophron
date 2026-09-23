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
  metricPercent: number;
  checklist: string[];
  image: string;
  imageCaption: string;
  isArticle?: boolean;
}

const RESEARCH_DETAILS: ResearchItem[] = [
  {
    id: "sfa",
    number: "01",
    shortTitle: "SFA & Kitchen",
    badge: "SFA & HACCP GRADE A",
    category: "Food Safety & Regulatory Protocol",
    title: "SFA & Kitchen Compliance Architecture",
    subtitle: "Daily Close-Down & Inspectable Readiness",
    description:
      "Daily close-down protocols, grease-trap clearing, and canopy degreasing engineered to keep Singapore F&B kitchens SFA Grade A inspectable 24/7.",
    standard: "Grade A Standards",
    metric: "Grade A",
    metricLabel: "SFA Inspectable Standard",
    metricPercent: 100,
    checklist: [
      "Daily close-down protocols & grease-trap clearing",
      "Canopy exhaust degreasing & fire-hazard prevention",
      "Food preparation contact surface sterilization",
      "Audit-ready documentation for SFA health inspectors",
    ],
    image: "/images/hygiene_kitchen_compliance_4k.jpg",
    imageCaption: "Live SFA Grade A Kitchen Compliance",
  },
  {
    id: "nea",
    number: "02",
    shortTitle: "NEA Disinfection",
    badge: "NEA APPROVED VIRUCIDAL",
    category: "Pathogen & Biosecurity Defense",
    title: "NEA Disinfection Defense & Bio-Suppression",
    subtitle: "Electrostatic Spraying & ULV Fogging",
    description:
      "Electrostatic spraying & ULV fogging using NEA-approved compounds. Baseline pathogen suppression protecting your operating calendar and guest safety.",
    standard: "100% Suppression",
    metric: "100%",
    metricLabel: "Pathogen Suppression Baseline",
    metricPercent: 100,
    checklist: [
      "Electrostatic 360° wrap-around micro-droplet dispersion",
      "Ultra-Low Volume (ULV) cold fogging for air & cavities",
      "NEA-approved hospital-grade broad-spectrum virucides",
      "Zero operating calendar disruption with rapid dwell times",
    ],
    image: "/images/disinfection_service_4k.jpg",
    imageCaption: "Electrostatic Bio-Defense Protocol",
  },
  {
    id: "esg",
    number: "03",
    shortTitle: "ESG & Green Mark",
    badge: "BCA GREEN MARK ESG",
    category: "Sustainable Facility Operations",
    title: "ESG & Green Mark Environmental Cleaning",
    subtitle: "Low-VOC Eco Chemistry & Closed-Loop Fibres",
    description:
      "Low-VOC eco chemistry, automated dilution control, and closed-loop microfibre supporting Singapore Green Mark building disclosures and sustainability goals.",
    standard: "Low Chemical Load",
    metric: "Low VOC",
    metricLabel: "Green Mark ESG Chemistry",
    metricPercent: 95,
    checklist: [
      "Biodegradable, low-VOC eco-labelled chemical formulas",
      "Automated closed-loop dilution control dispensing",
      "Closed-loop color-coded microfibre sanitization",
      "Quantifiable metrics supporting BCA Green Mark audits",
    ],
    image: "/images/photo-4098000.jpg",
    imageCaption: "BCA Green Mark Certified Protocols",
  },
  {
    id: "workforce",
    number: "04",
    shortTitle: "Workforce & SLA",
    badge: "100% WSQ CERTIFIED",
    category: "Workforce Discipline & SLA Tracking",
    title: "Workforce & Digital Operational Audit Log",
    subtitle: "WSQ-Trained Crew & Named Site Supervisors",
    description:
      "WSQ-trained, security-screened crews operating under named site supervisors with daily checklists and digital audit sign-offs.",
    standard: "Auditable SLA",
    metric: "99.8%",
    metricLabel: "Auditable SLA Compliance",
    metricPercent: 99.8,
    checklist: [
      "100% WSQ-certified and security-screened personnel",
      "Dedicated named site supervisor with direct client link",
      "Real-time timestamped digital checklists with photos",
      "Monthly SLA audits with instant remediation logs",
    ],
    image: "/images/tech_team_operations_4k.jpg",
    imageCaption: "WSQ-Certified Deployment & Digital Audit",
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
    metricPercent: 100,
    checklist: [
      "Comprehensive SFA Grade A kitchen compliance manual",
      "Exhaust hood grease loading & duct safety standards",
      "Night-shift stewarding vs scheduled deep clean cycles",
      "Direct interactive whitepaper reader with key takeaways",
    ],
    image: "/images/photo-8629127.jpg",
    imageCaption: "Official OPHRON Operations Whitepaper",
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

  // Auto-cycle through tabs every 5 seconds
  useEffect(() => {
    if (!isPlaying) return;

    timerRef.current = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % RESEARCH_DETAILS.length);
    }, 5000);

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

    const rotateY = ((x - centerX) / centerX) * 4;
    const rotateX = -((y - centerY) / centerY) * 4;
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
    <div className="w-full max-w-6xl mx-auto px-2 sm:px-4">
      {/* Outer Glow Halo */}
      <div className="relative group">
        <div className="absolute -inset-1.5 rounded-[38px] bg-gradient-to-r from-[#B7A38B]/40 via-[#D4AF37]/30 to-[#B7A38B]/40 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        {/* 3D Perspective Chassis Container */}
        <div
          ref={chassisRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `perspective(1500px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transition: tilt.x === 0 ? "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)" : "transform 0.08s ease-out",
            // @ts-expect-error custom css property
            "--mouse-x": `${tilt.mouseX}%`,
            "--mouse-y": `${tilt.mouseY}%`,
          }}
          className="relative rounded-[30px] sm:rounded-[38px] bg-gradient-to-b from-[#0B2544] via-[#041933] to-[#010D1D] p-3 sm:p-5 shadow-[0_40px_120px_-15px_rgba(0,0,0,0.95),0_0_50px_rgba(183,163,139,0.25)] border-2 border-[#B7A38B]/50 backdrop-blur-2xl transition-all duration-500"
        >
          {/* Dynamic Specular Glass Glare Overlay */}
          <div className="absolute inset-0 rounded-[30px] sm:rounded-[38px] apple-specular-glare opacity-80 transition-opacity duration-300 pointer-events-none" />

          {/* Top Hardware Elements: macOS Controls & Ambient Sensors */}
          <div className="relative mb-3.5 flex items-center justify-between px-3 sm:px-6 pt-2 z-20">
            {/* macOS Traffic Light Buttons */}
            <div className="flex items-center gap-2.5">
              <span className="h-3.5 w-3.5 rounded-full bg-[#FF5F56] shadow-[0_0_12px_rgba(255,95,86,0.8)] cursor-pointer hover:scale-115 transition-transform" />
              <span className="h-3.5 w-3.5 rounded-full bg-[#FFBD2E] shadow-[0_0_12px_rgba(255,189,46,0.8)] cursor-pointer hover:scale-115 transition-transform" />
              <span className="h-3.5 w-3.5 rounded-full bg-[#27C93F] shadow-[0_0_12px_rgba(39,201,63,0.8)] cursor-pointer hover:scale-115 transition-transform" />
              <div className="ml-3 hidden md:flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#020F21]/80 border border-[#B7A38B]/30">
                <span className="h-1.5 w-1.5 rounded-full bg-[#B7A38B] animate-pulse" />
                <span className="text-[10.5px] font-mono text-[#EDE5DA] tracking-wider font-semibold">
                  OPHRON Pro OS · Liquid Retina XDR
                </span>
              </div>
            </div>

            {/* iPad Camera Dot & TrueDepth Sensor Array */}
            <div className="flex items-center gap-2 bg-[#020D1A]/90 px-3.5 py-1.5 rounded-full border border-white/15 shadow-inner">
              <span className="h-2 w-2 rounded-full bg-[#032147] border border-[#B7A38B] shadow-[0_0_6px_#B7A38B]" />
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[9px] font-mono uppercase tracking-widest text-[#B7A38B] hidden sm:inline font-bold">
                SENSOR ACTIVE
              </span>
            </div>

            {/* Device Node Badge */}
            <div className="flex items-center gap-2 text-[10.5px] font-mono uppercase tracking-[0.2em] text-[#EDE5DA]/80">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34D399]" />
              <span className="font-bold text-white">LIVE NODE v2.6</span>
            </div>
          </div>

          {/* Safari Browser Header & Tab Navigation Bar */}
          <div className="rounded-t-2xl sm:rounded-t-3xl bg-[#021124]/95 border border-white/20 overflow-hidden shadow-2xl">
            {/* Safari URL / Omnibar */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-3 sm:px-6 py-3 bg-[#031B38]/90 border-b border-white/15">
              {/* Address Bar */}
              <div className="flex items-center gap-2.5 flex-1 max-w-xl bg-[#020E1F] border border-[#B7A38B]/40 rounded-xl px-4 py-2 text-xs font-mono text-[#EDE5DA] shadow-inner">
                <span className="text-emerald-400 text-sm">🔒</span>
                <span className="text-[#B7A38B] font-bold">https://</span>
                <span className="text-white font-medium truncate">
                  ophron.sg/research/operational-principles-sfa-compliance
                </span>
                <span className="ml-auto text-[9px] font-bold text-[#032147] bg-[#B7A38B] px-2 py-0.5 rounded shadow-sm hidden sm:inline uppercase">
                  SSL 256-BIT SECURE
                </span>
              </div>

              {/* Play/Pause & Motion Controls */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#020F21] hover:bg-[#B7A38B] hover:text-[#032147] border border-[#B7A38B]/40 text-xs font-mono text-[#EDE5DA] transition-all duration-300 cursor-pointer shadow-md active:scale-95 font-semibold group/btn"
                  title={isPlaying ? "Pause Auto Rotation" : "Resume Auto Rotation"}
                >
                  {isPlaying ? (
                    <>
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Auto-Cycle Active</span>
                    </>
                  ) : (
                    <>
                      <span className="h-2 w-2 rounded-full bg-amber-400" />
                      <span>Cycle Paused</span>
                    </>
                  )}
                </button>

                <div className="hidden sm:flex items-center gap-1.5 text-white font-mono text-xs px-3 py-1.5 bg-[#020E1F] rounded-lg border border-[#B7A38B]/40 font-bold shadow-inner">
                  <span className="text-[#B7A38B]">Tab</span>
                  <span>0{activeTab + 1}</span>
                  <span className="opacity-40">/</span>
                  <span>05</span>
                </div>
              </div>
            </div>

            {/* Apple Segmented Control Tab Strip */}
            <div className="p-2 sm:p-3 bg-[#010B17]/95 border-b border-white/10">
              <div className="flex overflow-x-auto no-scrollbar gap-2 bg-[#021021] p-1.5 rounded-2xl border border-white/10 shadow-inner">
                {RESEARCH_DETAILS.map((item, idx) => {
                  const isActive = idx === activeTab;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveTab(idx)}
                      className={`group relative flex-1 flex items-center justify-center gap-2 px-3.5 sm:px-5 py-2.5 rounded-xl font-mono text-xs transition-all duration-300 shrink-0 select-none cursor-pointer ${
                        isActive
                          ? "bg-gradient-to-r from-[#B7A38B] via-[#E2D2BE] to-[#B7A38B] text-[#032147] shadow-[0_4px_20px_rgba(183,163,139,0.45)] font-bold scale-[1.02]"
                          : "text-[#EDE5DA]/70 hover:text-white hover:bg-white/[0.06]"
                      }`}
                    >
                      <span
                        className={`text-[11px] font-bold px-1.5 py-0.5 rounded ${
                          isActive
                            ? "bg-[#032147] text-[#EDE5DA]"
                            : "bg-white/10 text-[#B7A38B] group-hover:bg-[#B7A38B] group-hover:text-[#032147] transition-colors"
                        }`}
                      >
                        {item.number}
                      </span>
                      <span className="tracking-tight text-xs whitespace-nowrap">{item.shortTitle}</span>
                      {isActive && (
                        <span className="h-1.5 w-1.5 rounded-full bg-[#032147] shadow-[0_0_6px_#032147]" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------------ */}
          {/*  Inner Tablet Screen Display (Deep OLED Glass Interface)          */}
          {/* ------------------------------------------------------------------ */}
          <div className="relative bg-gradient-to-br from-[#021122] via-[#031936] to-[#010915] rounded-b-2xl sm:rounded-b-3xl p-5 sm:p-8 lg:p-10 border-x border-b border-white/20 min-h-[480px] flex flex-col justify-between overflow-hidden shadow-2xl">
            {/* Background Ambient High-Tech Blueprint Grid & Luminous Glows */}
            <div
              className="absolute inset-0 opacity-[0.09] pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 50% 50%, rgba(212,175,55,0.6) 1.2px, transparent 1.2px)",
                backgroundSize: "28px 28px",
              }}
            />
            <div className="absolute -top-36 -right-36 h-96 w-96 rounded-full bg-gradient-to-br from-[#B7A38B]/25 to-transparent blur-3xl pointer-events-none" />
            <div className="absolute -bottom-36 -left-36 h-96 w-96 rounded-full bg-gradient-to-tr from-[#0C356A]/60 to-transparent blur-3xl pointer-events-none" />

            {/* Main Display Grid Content */}
            <div className="relative z-10 grid gap-8 lg:grid-cols-12 items-stretch">
              {/* Left & Middle: Detail Card & Interactive Content (8 Cols) */}
              <div key={current.id} className="lg:col-span-8 space-y-6 text-left animate-smoothTabFade">
                {/* Badge & Category Row */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#B7A38B]/25 via-[#D4AF37]/20 to-[#B7A38B]/25 border border-[#B7A38B]/60 font-mono text-[11px] tracking-widest text-[#EDE5DA] uppercase font-bold shadow-md">
                    <span className="text-[#D4AF37]">✦</span>
                    {current.category}
                  </span>
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#020F21] border border-white/25 font-mono text-[11px] text-[#EDE5DA] font-bold shadow-inner">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34D399]" />
                    {current.badge}
                  </span>
                </div>

                {/* Title & Subtitle with Luxury Gold Fill */}
                <div className="space-y-2.5">
                  <h3 className="font-canela text-2xl sm:text-3xl lg:text-[36px] font-bold tracking-tight bg-gradient-to-r from-white via-[#EDE5DA] to-[#B7A38B] bg-clip-text text-transparent leading-[1.18]">
                    {current.title}
                  </h3>
                  <p className="font-serif-i italic text-base sm:text-lg text-[#B7A38B] font-light flex items-center gap-2">
                    <span className="h-px w-6 bg-[#B7A38B]/60" />
                    <span>{current.subtitle}</span>
                  </p>

                  {/* Main Paragraph Description in Frosted Glass Panel */}
                  <div className="mt-4 text-sm sm:text-[15px] leading-relaxed text-[#EDE5DA]/95 bg-gradient-to-r from-[#020E1F]/95 via-[#031B38]/90 to-[#020E1F]/95 border border-[#B7A38B]/35 rounded-2xl p-5 shadow-2xl backdrop-blur-md relative overflow-hidden">
                    <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-[#B7A38B] to-transparent" />
                    <p>{current.description}</p>
                  </div>
                </div>

                {/* Key Operational Verification Points Grid */}
                <div className="pt-2">
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#B7A38B] font-bold flex items-center gap-2">
                      <span>◆ Key Operational Verification Points</span>
                    </p>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase bg-emerald-950/80 border border-emerald-500/40 px-2 py-0.5 rounded-full">
                      ✓ 4/4 Verified
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#EDE5DA]">
                    {current.checklist.map((pt, idx) => (
                      <div
                        key={idx}
                        className="group/item flex items-start gap-3 p-3.5 rounded-xl bg-[#031A35]/80 hover:bg-[#04244D] border border-white/15 hover:border-[#B7A38B]/60 transition-all duration-300 shadow-md hover:shadow-lg"
                      >
                        <span className="grid place-items-center h-5 w-5 rounded-full bg-[#B7A38B]/20 text-[#B7A38B] group-hover/item:bg-[#B7A38B] group-hover/item:text-[#032147] transition-colors shrink-0 text-[10px] font-bold mt-0.5">
                          ✓
                        </span>
                        <span className="leading-snug text-[#EDE5DA]/95 font-medium group-hover/item:text-white transition-colors">
                          {pt}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interactive Read Research Guide Action CTA */}
                {current.isArticle && (
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleReadGuide}
                      className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#B7A38B] via-[#E0D0BB] to-[#B7A38B] text-[#032147] px-8 py-3.5 text-sm font-montserrat font-bold hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_10px_30px_rgba(183,163,139,0.4)] cursor-pointer"
                    >
                      <span>Read Complete Operations Whitepaper</span>
                      <span className="grid place-items-center h-7 w-7 rounded-full bg-[#032147] text-[#EDE5DA] text-xs">
                        →
                      </span>
                    </button>
                  </div>
                )}
              </div>

              {/* Right Column: Visual Preview Window & Live Metric Telemetry (4 Cols) */}
              <div className="lg:col-span-4 flex flex-col justify-between gap-5 h-full">
                {/* 1. Cinematic 4K Photographic Preview Card */}
                <div className="relative rounded-2xl overflow-hidden border border-[#B7A38B]/40 shadow-2xl aspect-[16/10] group/img">
                  <img
                    src={current.image}
                    alt={current.title}
                    className="h-full w-full object-cover group-hover/img:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#010915] via-[#010915]/40 to-transparent" />
                  
                  {/* Image Overlay Tag */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-white font-bold bg-[#032147]/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20">
                      {current.imageCaption}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34D399]" />
                  </div>
                </div>

                {/* 2. Dynamic Live Metric Scorecard */}
                <div
                  key={`metric-${current.id}`}
                  className="animate-smoothMetricSlide bg-gradient-to-b from-[#020F21] to-[#010915] border border-[#B7A38B]/50 rounded-2xl p-5 sm:p-6 shadow-2xl relative overflow-hidden text-left backdrop-blur-xl"
                >
                  {/* Background Number Watermark */}
                  <div className="absolute top-1 right-3 font-canela font-bold text-6xl text-[#B7A38B]/10 pointer-events-none select-none">
                    {current.number}
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="font-mono text-[10.5px] tracking-[0.25em] text-[#B7A38B] uppercase font-bold">
                      VERIFIED METRIC
                    </p>
                    <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34D399]" />
                  </div>

                  <div className="mt-3 font-canela text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white leading-none">
                    {current.metric}
                  </div>

                  <p className="mt-2 font-mono text-xs text-[#EDE5DA]/90 font-medium">
                    {current.metricLabel}
                  </p>

                  {/* Telemetry Progress Bar */}
                  <div className="mt-4 space-y-1.5">
                    <div className="flex justify-between text-[10px] font-mono text-[#EDE5DA]/70">
                      <span>Compliance Index</span>
                      <span className="text-[#B7A38B] font-bold">{current.metricPercent}% Verified</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-[#031B38] overflow-hidden p-0.5 border border-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#B7A38B] via-[#D4AF37] to-[#F3E5AB] transition-all duration-1000 shadow-[0_0_8px_#D4AF37]"
                        style={{ width: `${current.metricPercent}%` }}
                      />
                    </div>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#EDE5DA]/75">
                    <span className="opacity-75">Regulatory Standard:</span>
                    <span className="text-[#B7A38B] font-bold">{current.standard}</span>
                  </div>
                </div>

                {/* 3. Manual Tactile Controls & Action Links */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-2 p-2 rounded-xl bg-[#020D1C] border border-white/15 shadow-lg">
                    <button
                      type="button"
                      onClick={() =>
                        setActiveTab((activeTab - 1 + RESEARCH_DETAILS.length) % RESEARCH_DETAILS.length)
                      }
                      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[#031B38] hover:bg-[#B7A38B] hover:text-[#032147] text-[#EDE5DA] text-xs font-mono border border-white/10 transition-all active:scale-95 cursor-pointer font-bold shadow-sm"
                    >
                      <span>←</span>
                      <span>Previous</span>
                    </button>

                    <span className="text-xs font-mono text-[#B7A38B] px-3 font-bold">
                      0{activeTab + 1} / 0{RESEARCH_DETAILS.length}
                    </span>

                    <button
                      type="button"
                      onClick={() => setActiveTab((activeTab + 1) % RESEARCH_DETAILS.length)}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[#031B38] hover:bg-[#B7A38B] hover:text-[#032147] text-[#EDE5DA] text-xs font-mono border border-white/10 transition-all active:scale-95 cursor-pointer font-bold shadow-sm"
                    >
                      <span>Next</span>
                      <span>→</span>
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={handleReadGuide}
                    className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#032147] to-[#052C5C] hover:from-[#B7A38B] hover:to-[#E0D0BB] text-[#EDE5DA] hover:text-[#032147] border border-[#B7A38B]/40 text-xs font-mono font-bold transition-all duration-300 text-center cursor-pointer shadow-md"
                  >
                    Open Research Whitepaper (PDF / Reader) ↗
                  </button>
                </div>
              </div>
            </div>

            {/* Continuous Moving OLED Marquee Ticker with Edge Gradient Masks */}
            <div className="relative mt-8 pt-5 border-t border-white/15 overflow-hidden">
              {/* Left & Right Gradient Masks */}
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#021122] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#010915] to-transparent z-10 pointer-events-none" />

              <div className="flex whitespace-nowrap gap-8 marquee-track font-mono text-[11px] tracking-[0.22em] text-[#EDE5DA]/85 uppercase">
                {MARQUEE_ITEMS.concat(MARQUEE_ITEMS).map((item, idx) => (
                  <span key={idx} className="flex items-center gap-3 shrink-0">
                    <span className="text-[#D4AF37] text-xs">✦</span>
                    <span className="font-semibold">{item}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom iPad Pro Home Indicator Bar */}
          <div className="flex justify-center pt-3.5 pb-1">
            <div className="h-1.5 w-40 rounded-full bg-gradient-to-r from-transparent via-white/40 to-transparent shadow-sm" />
          </div>
        </div>
      </div>
    </div>
  );
}
