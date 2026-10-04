import { useState, useEffect, useRef, MouseEvent } from "react";
import {
  ShieldCheck,
  Sparkles,
  Leaf,
  Users,
  FileText,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { BlogPost, OPHRON_BLOG_POSTS } from "../data/ophronBlogPosts";

interface ResearchItem {
  id: string;
  number: string;
  tabLabel: string;
  icon: typeof ShieldCheck;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  metric: string;
  metricLabel: string;
  highlights: string[];
  image: string;
  imageCaption: string;
}

const RESEARCH_BENCHMARKS: ResearchItem[] = [
  {
    id: "sfa",
    number: "01",
    tabLabel: "SFA Kitchens",
    icon: ShieldCheck,
    tag: "SFA GRADE A COMPLIANCE",
    title: "Commercial Kitchen Hygiene Standards",
    subtitle: "Daily Close-Down & SFA Inspectable Readiness",
    description:
      "Daily close-down protocols, rotary cookline degreasing, and exhaust fire-hazard suppression engineered for 100% SFA Grade A audit pass rates.",
    metric: "Grade A",
    metricLabel: "SFA Audit Standard",
    highlights: [
      "Daily close-down & food-contact sanitization",
      "Rotary canopy & exhaust duct degreasing",
      "Automated digital audit logs for health inspectors",
    ],
    image: "/images/photo-8629127.jpg",
    imageCaption: "SFA Grade A Kitchen Compliance Protocol",
  },
  {
    id: "nea",
    number: "02",
    tabLabel: "NEA Disinfection",
    icon: Sparkles,
    tag: "NEA REGISTERED BIOCIDE",
    title: "Broad-Spectrum Pathogen Defense",
    subtitle: "Electrostatic Spraying & ULV Cold Fogging",
    description:
      "Medical-grade electrostatic misting and ULV cold fogging using NEA-approved broad-spectrum compounds to ensure zero pathogen downtime.",
    metric: "99.99%",
    metricLabel: "Pathogen Bio-Kill",
    highlights: [
      "360° electrostatic wrap-around micro-droplets",
      "Hospital-grade NEA registered virucides",
      "Rapid dwell time with zero schedule disruption",
    ],
    image: "/images/disinfection_service_4k.jpg",
    imageCaption: "NEA Registered Electrostatic Bio-Defense",
  },
  {
    id: "esg",
    number: "03",
    tabLabel: "Green Mark ESG",
    icon: Leaf,
    tag: "BCA GREEN MARK ECO",
    title: "Sustainable Environmental Cleaning",
    subtitle: "Low-VOC Chemistry & Closed-Loop Fibres",
    description:
      "Biodegradable eco-labelled formulations and closed-loop microfibre systems supporting Singapore BCA Green Mark sustainability disclosures.",
    metric: "Low VOC",
    metricLabel: "Eco-Chemical Rating",
    highlights: [
      "Biodegradable, zero-residue eco chemistry",
      "Color-coded closed-loop sanitization fibres",
      "Auditable metrics for building ESG reporting",
    ],
    image: "/images/photo-4098000.jpg",
    imageCaption: "BCA Green Mark Certified Protocol",
  },
  {
    id: "workforce",
    number: "04",
    tabLabel: "Workforce & SLA",
    icon: Users,
    tag: "100% WSQ CERTIFIED",
    title: "Auditable Workforce & Operations Tracking",
    subtitle: "Trained Stewards & Named Site Supervisors",
    description:
      "Security-screened, WSQ-trained hospitality manpower supervised under strict Master Service Agreements with real-time digital shift logging.",
    metric: "99.8%",
    metricLabel: "SLA Delivery Benchmark",
    highlights: [
      "WSQ-trained & background-verified crews",
      "Dedicated named site supervisor on duty",
      "Time-stamped photo verification & shift logs",
    ],
    image: "/images/fnb_stewarding_manpower_4k.jpg",
    imageCaption: "WSQ-Certified Deployment & Digital Audit",
  },
  {
    id: "whitepaper",
    number: "05",
    tabLabel: "Research Briefing",
    icon: FileText,
    tag: "ANNUAL FIELD REPORT",
    title: "Singapore Hospitality Operations Whitepaper",
    subtitle: "Regulatory Benchmarks & Cost Optimization",
    description:
      "Official field report analyzing vendor consolidation, kitchen compliance margins, and labor retention strategies across 140+ premier Singapore venues.",
    metric: "2026",
    metricLabel: "Annual Industry Whitepaper",
    highlights: [
      "In-depth SFA & NEA regulatory analysis",
      "IFM vendor consolidation cost models",
      "Downloadable operational execution checklist",
    ],
    image: "/images/facade_glass_tower_4k.jpg",
    imageCaption: "Official OPHRON Operations Whitepaper",
  },
];

type Props = {
  onOpenArticle?: (post: BlogPost) => void;
};

export default function AppleResearchTab({ onOpenArticle }: Props) {
  // Default to tab index 3 (Workforce & SLA) to match exact visual preview
  const [activeTab, setActiveTab] = useState<number>(3);
  const [timerKey, setTimerKey] = useState<number>(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0, mouseX: 50, mouseY: 50 });
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const chassisRef = useRef<HTMLDivElement | null>(null);

  // Auto-cycle through tabs every 6 seconds continuously
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % RESEARCH_BENCHMARKS.length);
    }, 6000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [timerKey]);

  const selectTab = (idx: number) => {
    setActiveTab(idx);
    setTimerKey((k) => k + 1); // Reset timer so user sees selected tab for full duration before cycling
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!chassisRef.current) return;
    const rect = chassisRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 3;
    const rotateX = -((y - rect.height / 2) / (rect.height / 2)) * 3;
    const mouseX = (x / rect.width) * 100;
    const mouseY = (y / rect.height) * 100;
    setTilt({ x: rotateX, y: rotateY, mouseX, mouseY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, mouseX: 50, mouseY: 50 });
  };

  const current = RESEARCH_BENCHMARKS[activeTab];

  const handleOpenModal = () => {
    if (onOpenArticle) {
      const targetPost =
        OPHRON_BLOG_POSTS[activeTab % OPHRON_BLOG_POSTS.length] ||
        OPHRON_BLOG_POSTS[0];
      onOpenArticle(targetPost);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-2 sm:px-4">
      {/* Outer 3D Perspective Wrapper */}
      <div className="relative group">
        
        {/* Ambient Backlight Glow */}
        <div className="absolute -inset-2 rounded-[44px] bg-gradient-to-r from-[#B7A38B]/20 via-[#0a254a]/30 to-[#B7A38B]/20 blur-3xl opacity-60 group-hover:opacity-90 transition-opacity duration-700 pointer-events-none" />

        {/* 3D Apple Studio Chassis Container */}
        <div
          ref={chassisRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `perspective(1500px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transition: tilt.x === 0 ? "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)" : "transform 0.08s ease-out",
          }}
          className="relative rounded-[32px] sm:rounded-[38px] bg-[#07152B] p-6 sm:p-10 lg:p-12 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.9),0_0_50px_rgba(183,163,139,0.12)] border border-[#22395d]/80 backdrop-blur-2xl overflow-hidden"
        >
          {/* Subtle Top Specular Edge */}
          <div className="absolute top-0 inset-x-16 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />

          {/* Top Header Row: Hardware Dots, Title & Counter */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-7 border-b border-white/[0.08]">
            {/* Window Dots + Title */}
            <div className="flex items-center gap-3.5">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#FF5F56] shadow-[0_0_8px_rgba(255,95,86,0.7)]" />
                <span className="h-3 w-3 rounded-full bg-[#FFBD2E] shadow-[0_0_8px_rgba(255,189,46,0.7)]" />
                <span className="h-3 w-3 rounded-full bg-[#27C93F] shadow-[0_0_8px_rgba(39,201,63,0.7)]" />
              </div>
              <div className="h-3.5 w-px bg-white/20 mx-1" />
              <span className="text-[11px] font-mono tracking-[0.2em] text-[#EDE5DA]/70 uppercase font-semibold">
                OPHRON OPERATIONS BENCHMARK
              </span>
            </div>

            {/* Right Index Indicator Pill */}
            <div className="flex items-center gap-3">
              <span className="text-[11.5px] font-mono text-[#EDE5DA]/75 bg-white/[0.04] px-3.5 py-1 rounded-full border border-white/10 font-medium">
                <strong className="text-white">0{activeTab + 1}</strong> / 0{RESEARCH_BENCHMARKS.length}
              </span>
            </div>
          </div>

          {/* Apple Bordered Tab Bar Design */}
          <div className="relative z-10 mt-7 p-1.5 rounded-2xl bg-[#030e20]/85 border border-white/15 backdrop-blur-2xl shadow-[inset_0_1px_3px_rgba(0,0,0,0.6)]">
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 w-full">
              {RESEARCH_BENCHMARKS.map((item, idx) => {
                const isActive = activeTab === idx;
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => selectTab(idx)}
                    className={`group relative flex items-center justify-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-3 rounded-xl text-xs font-montserrat transition-all duration-300 cursor-pointer overflow-hidden ${
                      idx === 4 ? "col-span-2 sm:col-span-1" : ""
                    } ${
                      isActive
                        ? "border-2 border-[#B7A38B] bg-gradient-to-b from-[#B7A38B]/25 via-[#B7A38B]/10 to-[#071830] text-white font-bold shadow-[0_0_20px_rgba(183,163,139,0.3),inset_0_1px_1px_rgba(255,255,255,0.35)] z-10"
                        : "border border-white/10 bg-white/[0.03] text-[#EDE5DA]/70 hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
                    }`}
                  >
                    {/* Active Apple Specular Top Rim */}
                    {isActive && (
                      <span className="absolute top-0 inset-x-2 h-[1.5px] bg-gradient-to-r from-transparent via-[#EDE5DA]/80 to-transparent pointer-events-none" />
                    )}

                    {/* Active Apple Bottom Accent Line */}
                    {isActive && (
                      <span className="absolute bottom-0 inset-x-4 h-[2px] bg-gradient-to-r from-transparent via-[#B7A38B] to-transparent rounded-full shadow-[0_0_8px_rgba(183,163,139,0.9)] pointer-events-none" />
                    )}

                    {/* Apple Status Dot */}
                    <span
                      className={`h-1.5 w-1.5 rounded-full shrink-0 transition-all duration-300 ${
                        isActive
                          ? "bg-[#B7A38B] shadow-[0_0_8px_rgba(183,163,139,0.9)]"
                          : "bg-white/20 group-hover:bg-white/40"
                      }`}
                    />

                    {/* Tab Icon */}
                    <Icon
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 transition-colors ${
                        isActive ? "text-[#B7A38B]" : "text-[#EDE5DA]/60 group-hover:text-white"
                      }`}
                    />

                    {/* Tab Label */}
                    <span className="truncate tracking-wide font-medium">
                      {item.tabLabel}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Content Showcase: 2-Column Luxury 3D Grid */}
          <div className="relative z-10 mt-9 grid lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-2">
            
            {/* Left Column: Clear Typography, Badge & Highlights */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.05] border border-white/10 text-[10px] font-mono tracking-[0.18em] text-[#EDE5DA]/80 uppercase font-semibold">
                <span>[ {current.tag} ]</span>
              </div>

              <div>
                <h3 className="font-canela text-3xl sm:text-4xl lg:text-[42px] font-bold text-white leading-[1.08] tracking-tight uppercase">
                  {current.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base font-serif-i italic text-[#C0A990]">
                  {current.subtitle}
                </p>
              </div>

              <p className="font-inter text-sm text-[#EDE5DA]/80 leading-relaxed max-w-xl pt-1">
                {current.description}
              </p>

              {/* Feature Highlights with Clean Circle Checkmarks */}
              <div className="space-y-3 pt-3">
                {current.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs sm:text-[13px] font-inter text-[#EDE5DA]/90">
                    <CheckCircle2 className="w-4 h-4 text-[#C0A990] shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Metric Card + Live Photo + Gold CTA */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              
              {/* Metric Card */}
              <div className="p-6 rounded-2xl bg-[#0B1E38]/90 border border-[#28426b]/70 shadow-lg relative overflow-hidden">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#EDE5DA]/60 font-semibold">
                    VERIFIED OPERATIONAL STANDARD
                  </span>
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)] animate-pulse" />
                </div>

                <div className="font-montserrat font-bold text-4xl sm:text-5xl text-white tracking-tight">
                  {current.metric}
                </div>
                <div className="text-xs font-inter text-[#EDE5DA]/70 mt-1">
                  {current.metricLabel}
                </div>
              </div>

              {/* Photo Display Card */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/9] border border-[#28426b]/70 shadow-xl bg-[#041021] group">
                <img
                  src={current.image}
                  alt={current.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041021] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-4 right-4 text-[11px] font-mono text-white/95 truncate font-semibold tracking-wide">
                  {current.imageCaption}
                </div>
              </div>

              {/* Full Width Gold Action Button */}
              <button
                type="button"
                onClick={handleOpenModal}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#C2AF98] via-[#B8A28A] to-[#A89279] hover:brightness-110 text-[#06152B] font-montserrat font-bold text-xs uppercase tracking-[0.14em] transition-all duration-300 shadow-lg flex items-center justify-center gap-2 cursor-pointer border border-[#D8C6B2]/40"
              >
                <span>Read Full Research Briefing</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
