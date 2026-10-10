import { useEffect, useRef, useState } from "react";
import { ScrollReveal } from "./ui/animations";
import logoNavy from "./logo-navy.png";
import {
  ArrowRight,
  Sparkle,
  Building2,
  Users,
  Cpu,
} from "lucide-react";

export interface HeroServiceSlide {
  id: string;
  pillar: string;
  number: string;
  title: string;
  tagline: string;
  imageDesktopWebp: string;
  imageDesktopJpg: string;
  imageMobileWebp: string;
  imageMobileJpg: string;
  icon: typeof Sparkle;
}

export const HERO_SERVICES: HeroServiceSlide[] = [
  {
    id: "marble",
    pillar: "SPECIALIZED HYGIENE & STONE CARE",
    number: "01",
    title: "Powder & Diamond Marble Polishing",
    tagline: "Heavy-duty diamond planetary grinding & mirror-reflection restoration.",
    imageDesktopWebp: "/images/hero/hero_marble_polish_desktop.webp",
    imageDesktopJpg: "/images/hero/hero_marble_polish_desktop.jpg",
    imageMobileWebp: "/images/hero/hero_marble_polish_mobile.webp",
    imageMobileJpg: "/images/hero/hero_marble_polish_mobile.jpg",
    icon: Sparkle,
  },
  {
    id: "venues",
    pillar: "FACILITY SERVICES & RAPID RESETS",
    number: "02",
    title: "Events & Luxury Venue Turnover",
    tagline: "Rapid 60-minute ballroom turnovers & high-traffic venue maintenance.",
    imageDesktopWebp: "/images/hero/hero_event_venue_desktop.webp",
    imageDesktopJpg: "/images/hero/hero_event_venue_desktop.jpg",
    imageMobileWebp: "/images/hero/hero_event_venue_mobile.webp",
    imageMobileJpg: "/images/hero/hero_event_venue_mobile.jpg",
    icon: Building2,
  },
  {
    id: "manpower",
    pillar: "HOSPITALITY WORKFORCE INFRASTRUCTURE",
    number: "03",
    title: "Hospitality Manpower & Executive Staffing",
    tagline: "WSQ-trained housekeeping, stewarding & operational crews on demand.",
    imageDesktopWebp: "/images/hero/hero_manpower_suite_desktop.webp",
    imageDesktopJpg: "/images/hero/hero_manpower_suite_desktop.jpg",
    imageMobileWebp: "/images/hero/hero_manpower_suite_mobile.webp",
    imageMobileJpg: "/images/hero/hero_manpower_suite_mobile.jpg",
    icon: Users,
  },
  {
    id: "technology",
    pillar: "OPHRON TECHNOLOGY & AI SAAS",
    number: "04",
    title: "Smart Hospitality Technology & AI Operations",
    tagline: "Real-time shift dashboards, IoT IAQ tracking & automated compliance logs.",
    imageDesktopWebp: "/images/hero/hero_tech_dashboard_desktop.webp",
    imageDesktopJpg: "/images/hero/hero_tech_dashboard_desktop.jpg",
    imageMobileWebp: "/images/hero/hero_tech_dashboard_mobile.webp",
    imageMobileJpg: "/images/hero/hero_tech_dashboard_mobile.jpg",
    icon: Cpu,
  },
];

const MARQUEE_ITEMS = [
  "OPHRON FACILITIES — INTEGRATED FACILITY OPERATIONS",
  "OPHRON TECHNOLOGY — AI AUTOMATION & OPERATIONS SAAS",
  "POWDER & DIAMOND MARBLE POLISHING — 98+ GU GLOSS FINISH",
  "COMMERCIAL KITCHEN HYGIENE — 100% SFA/NEA AUDIT READY",
  "HIGH-RISE FAÇADE CLEANING — IRATA ROPE ACCESS CERTIFIED",
  "OPHRON PEOPLE — WORKFORCE & COMPLIANCE MANAGEMENT",
];

const SKYLINE_VIDEO_SRC = "/videos/hero-singapore-skyline.mp4";
const SKYLINE_POSTER_SRC = "/images/hero/hero_tech_dashboard_desktop.webp";

function useCount(target: number, duration = 1600, start = false) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const step = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);
  return v;
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setInView(true),
      { threshold: 0.1 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const yrs = useCount(20, 1600, inView);
  const contracts = useCount(140, 1800, inView);

  return (
    <section
      id="top"
      ref={ref}
      aria-label="OPHRON Hero Section"
      className="relative overflow-hidden pt-[104px] sm:pt-[124px] lg:pt-[136px] bg-[#032147] text-[#EDE5DA]"
      style={{ fontFamily: "inherit" }}
    >
      {/* ── 50% RIGHT-HALF SINGAPORE SKYLINE AMBIENT BACKGROUND ENGINE ── */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">
        
        {/* Base Solid Deep Navy Canvas for Entire Hero */}
        <div className="absolute inset-0 bg-[#032147]" />

        {/* Ambient illumination aura on left */}
        <div
          className="absolute top-1/4 -left-28 w-[500px] h-[500px] rounded-full opacity-20 blur-[130px]"
          style={{
            background: "radial-gradient(circle, rgba(14, 52, 102, 0.9) 0%, transparent 70%)",
          }}
        />

        {/* The 50% Right-Half Singapore Skyline Video Stage */}
        <div className="absolute top-0 bottom-0 right-0 w-full md:w-[60%] lg:w-[54%] xl:w-[50%] overflow-hidden">
          <video
            ref={videoRef}
            src={SKYLINE_VIDEO_SRC}
            poster={SKYLINE_POSTER_SRC}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover object-center"
            style={{
              filter: "brightness(0.92) contrast(1.10) saturate(1.08)",
            }}
          />

          {/* ── SEAMLESS HORIZONTAL GRADIENT FADE (LEFT NAVY → RIGHT SKYLINE) ── */}
          <div
            className="absolute inset-y-0 left-0 w-32 sm:w-48 lg:w-72"
            style={{
              background:
                "linear-gradient(90deg, #032147 0%, rgba(3,33,71,0.92) 28%, rgba(3,33,71,0.55) 60%, rgba(3,33,71,0.15) 85%, transparent 100%)",
            }}
          />

          {/* ── MOBILE VERTICAL GRADIENT FADE ── */}
          <div
            className="block md:hidden absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(3,33,71,0.95) 0%, rgba(3,33,71,0.88) 45%, rgba(3,33,71,0.40) 80%, #032147 100%)",
            }}
          />

          {/* ── TOP NAV BAR & BOTTOM ANCHOR BLENDS ── */}
          <div
            className="absolute inset-x-0 top-0 h-24 sm:h-32"
            style={{
              background:
                "linear-gradient(180deg, #032147 0%, rgba(3,33,71,0.7) 40%, transparent 100%)",
            }}
          />
          <div
            className="absolute inset-x-0 bottom-0 h-28 sm:h-36"
            style={{
              background:
                "linear-gradient(0deg, #032147 0%, rgba(3,33,71,0.85) 45%, transparent 100%)",
            }}
          />

          {/* Micro Film Texture Overlay */}
          <div
            className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
            style={{
              backgroundImage:
                "radial-gradient(#EDE5DA 1px, transparent 1px), radial-gradient(#EDE5DA 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              backgroundPosition: "0 0, 14px 14px",
            }}
          />
        </div>
      </div>

      {/* ── MAIN HERO BODY (CLEAN EDITORIAL CONTENT + PURE SKYLINE STAGE) ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
          
          {/* ── LEFT COLUMN: EDITORIAL TYPOGRAPHY & VALUE PROPOSITION ──── */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center">
            
            {/* Status Badge */}
            <ScrollReveal variant="up" delay={40}>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#032147]/90 border border-[#EDE5DA]/35 backdrop-blur-md mb-5 sm:mb-6 w-fit shadow-lg shadow-black/20">
                <Sparkle className="w-3.5 h-3.5 text-[#E3D1BE]" />
                <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.16em] uppercase text-[#FFFFFF] font-semibold">
                  OPHRON SINGAPORE · HOSPITALITY INFRASTRUCTURE & AI
                </span>
              </div>
            </ScrollReveal>

            {/* Editorial Headline */}
            <ScrollReveal variant="up" delay={100}>
              <h1
                className="text-[36px] xs:text-[44px] sm:text-6xl lg:text-[68px] xl:text-[78px] font-bold text-white tracking-tight leading-[1.02] sm:leading-[0.94] mb-5 sm:mb-6 drop-shadow-md"
                style={{ fontFamily: "'Canela', 'Playfair Display', 'Georgia', serif" }}
              >
                One partner.
                <br />
                One ecosystem.
                <br />
                <span
                  className="italic font-normal tracking-normal inline-block"
                  style={{
                    background: "linear-gradient(135deg, #F5EFEB 0%, #E3D1BE 35%, #CBB59B 70%, #E3D1BE 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    filter: "drop-shadow(0 2px 14px rgba(227,209,190,0.4))",
                  }}
                >
                  Better operations.
                </span>
              </h1>
            </ScrollReveal>

            {/* Subtitle & Value Proposition */}
            <ScrollReveal variant="up" delay={160}>
              <p className="text-base sm:text-lg lg:text-[19px] font-normal leading-relaxed text-[#EDE5DA] mb-3 max-w-2xl">
                OPHRON unifies <span className="text-white font-semibold">People</span>,{" "}
                <span className="text-white font-semibold">Hygiene</span>,{" "}
                <span className="text-white font-semibold">Facilities</span>,{" "}
                <span className="text-white font-semibold">Technology</span>, and{" "}
                <span className="text-white font-semibold">Commercial Intelligence</span> into a{" "}
                <span className="text-white font-semibold">single operational platform</span>{" "}
                — built for Singapore's hotels, restaurants, and hospitality groups.
              </p>
              <p className="text-xs sm:text-sm lg:text-[14px] text-[#EDE5DA]/80 leading-relaxed mb-6 sm:mb-7 max-w-xl font-normal">
                Instead of coordinating 5+ fragmented vendors, OPHRON gives you one accountable partner,
                one transparent contract, and full operational visibility.
              </p>
            </ScrollReveal>

            {/* 4 Pillars Quick Badges */}
            <ScrollReveal variant="up" delay={200}>
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-7 sm:mb-8">
                <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-[#E3D1BE]/85 uppercase mr-1">
                  PILLARS:
                </span>
                {[
                  { icon: Sparkle, name: "Stone & Marble Care" },
                  { icon: Building2, name: "Luxury Venue Resets" },
                  { icon: Users, name: "Hospitality Manpower" },
                  { icon: Cpu, name: "AI Ops Platform" },
                ].map((p, idx) => (
                  <a
                    key={idx}
                    href="#solutions"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium text-[#EDE5DA]/90 bg-[#032147]/80 hover:bg-[#032147] border border-[#EDE5DA]/25 hover:border-[#E3D1BE] backdrop-blur-sm transition-all duration-200 hover:scale-[1.03]"
                  >
                    <p.icon className="w-3 h-3 text-[#E3D1BE]" />
                    <span>{p.name}</span>
                  </a>
                ))}
              </div>
            </ScrollReveal>

            {/* Dual CTAs */}
            <ScrollReveal variant="up" delay={240}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-2">
                {/* Primary CTA */}
                <a
                  href="#contact"
                  className="group relative inline-flex items-center justify-center gap-3.5 px-6 sm:px-7 py-3.5 sm:py-4 min-h-[48px] rounded-full font-bold text-[13px] sm:text-sm tracking-wide text-[#032147] transition-all duration-300 shadow-xl shadow-black/30 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#E3D1BE]"
                  style={{
                    background: "linear-gradient(135deg, #F5EFEB 0%, #E3D1BE 40%, #CBB59B 100%)",
                    border: "1px solid rgba(255,255,255,0.7)",
                  }}
                >
                  <span className="font-extrabold tracking-tight">Discuss Your Operations</span>
                  <span className="w-7 h-7 rounded-full bg-[#032147] text-[#EDE5DA] inline-flex items-center justify-center transition-transform group-hover:translate-x-1 group-hover:rotate-45 shadow-sm">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </a>

                {/* Secondary CTA */}
                <a
                  href="#solutions"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-4 min-h-[48px] rounded-full border border-white/40 hover:border-white bg-[#032147]/65 hover:bg-[#032147]/90 text-white text-[13px] sm:text-sm font-semibold transition duration-300 backdrop-blur-md shadow-lg shadow-black/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                >
                  <span>Explore Solutions</span>
                  <span className="text-[#E3D1BE] text-xs">◆</span>
                </a>
              </div>
            </ScrollReveal>

          </div>

          {/* ── RIGHT COLUMN: UNOBSTRUCTED CINEMATIC STAGE (NO OVERLAY CARDS) ── */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-5 pointer-events-none min-h-[420px]" />

        </div>
      </div>

      {/* ── STATS & SOCIAL PROOF STRIP (LUMINOUS CHAMPAGNE FROSTED GLASS) ──────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 mb-8">
        <div
          className="rounded-2xl p-5 sm:p-7 grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 items-center shadow-2xl transition-all duration-300"
          style={{
            background: "rgba(245, 239, 230, 0.94)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.9)",
            boxShadow: "0 20px 50px rgba(0,0,0,0.30), 0 0 0 1px rgba(255,255,255,0.4)",
          }}
        >
          <StatBlock value={`${yrs}+`} label="Yrs" sub="OPERATIONAL EXPERTISE" />
          <StatBlock value={`${contracts}+`} label="" sub="ACTIVE SG CONTRACTS" />
          <StatBlock value="bizSAFE 3" label="" sub="WSH COUNCIL CERTIFIED" />
          <StatBlock value="NEA" label=" Licensed" sub="SINGAPORE OPERATOR" />

          <div
            className="col-span-2 lg:col-span-1 border-t lg:border-t-0 lg:border-l pt-4 lg:pt-0 lg:pl-6 flex flex-col justify-center"
            style={{ borderColor: "rgba(3, 33, 71, 0.14)" }}
          >
            <div className="flex items-center gap-1 text-[#9E805E] text-xs mb-1">
              {"★★★★★".split("").map((s, i) => (
                <span key={i}>{s}</span>
              ))}
              <span
                className="text-[10px] font-mono font-bold ml-2"
                style={{ color: "rgba(3, 33, 71, 0.65)" }}
              >
                100% SLA
              </span>
            </div>
            <div className="text-xs font-extrabold text-[#032147] tracking-wider uppercase">
              PAN PACIFIC · YOTEL · ATLAS
            </div>
            <div
              className="text-[11px] font-medium mt-0.5"
              style={{ color: "rgba(3, 33, 71, 0.60)" }}
            >
              Singapore's trusted hospitality partner
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM MARQUEE TICKER ────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="relative z-10 border-t overflow-hidden py-3"
        style={{
          background: "#EDE5DA",
          borderColor: "rgba(3, 33, 71, 0.12)",
        }}
      >
        <div className="marquee-track inline-flex whitespace-nowrap">
          {[...Array(3)].map((_, j) => (
            <div
              key={j}
              className="inline-flex items-center gap-10 pr-10"
            >
              {MARQUEE_ITEMS.map((item, i) => (
                <span
                  key={`${j}-${i}`}
                  className="inline-flex items-center gap-8 text-xs font-mono tracking-[0.16em] uppercase font-bold"
                  style={{ color: "rgba(3, 33, 71, 0.85)" }}
                >
                  <span>{item}</span>
                  <img
                    src={logoNavy}
                    alt=""
                    aria-hidden="true"
                    className="h-5 w-auto object-contain opacity-90 shrink-0"
                  />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatBlock({ value, label, sub }: { value: string; label: string; sub: string }) {
  const accessibleText = `${value} ${label} - ${sub}`.trim();
  return (
    <div aria-label={accessibleText} className="flex flex-col">
      <div
        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#032147] tracking-tight leading-none"
        style={{ fontFamily: "'Canela', 'Georgia', serif" }}
      >
        {value}
        {label && (
          <span
            className="text-base font-normal ml-1"
            style={{ color: "#9E805E" }}
          >
            {label}
          </span>
        )}
      </div>
      <div
        className="mt-1.5 text-[9.5px] font-mono font-bold tracking-[0.16em] uppercase"
        style={{ color: "rgba(3, 33, 71, 0.55)" }}
      >
        {sub}
      </div>
    </div>
  );
}
