import { useEffect, useRef, useState, useCallback } from "react";
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
  image: string;
  icon: typeof Sparkle;
}

const HERO_SERVICES: HeroServiceSlide[] = [
  {
    id: "marble",
    pillar: "SPECIALIZED HYGIENE & STONE CARE",
    number: "01",
    title: "Powder & Diamond Marble Polishing",
    tagline: "Heavy-duty diamond planetary grinding & mirror-reflection restoration.",
    image: "/images/hero/hero_marble_polish_4k.jpg",
    icon: Sparkle,
  },
  {
    id: "venues",
    pillar: "FACILITY SERVICES & RAPID RESETS",
    number: "02",
    title: "Events & Luxury Venue Turnover",
    tagline: "Rapid 60-minute ballroom turnovers & high-traffic venue maintenance.",
    image: "/images/hero/hero_event_venue_4k.jpg",
    icon: Building2,
  },
  {
    id: "manpower",
    pillar: "HOSPITALITY WORKFORCE INFRASTRUCTURE",
    number: "03",
    title: "Hospitality Manpower & Executive Staffing",
    tagline: "WSQ-trained housekeeping, stewarding & operational crews on demand.",
    image: "/images/hero/hero_manpower_suite_4k.jpg",
    icon: Users,
  },
  {
    id: "technology",
    pillar: "OPHRON TECHNOLOGY & AI SAAS",
    number: "04",
    title: "Smart Hospitality Technology & AI Operations",
    tagline: "Real-time shift dashboards, IoT IAQ tracking & automated compliance logs.",
    image: "/images/hero/hero_tech_dashboard_4k.jpg",
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

const SLIDE_DURATION = 6500; // 6.5s per service loop

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
  const [inView, setInView] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

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

  // Auto-loop ticker
  const nextSlide = useCallback(() => {
    setActiveIdx((prev) => (prev + 1) % HERO_SERVICES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [nextSlide]);

  const currentService = HERO_SERVICES[activeIdx];
  const IconComponent = currentService.icon;

  return (
    <section
      id="top"
      ref={ref}
      className="relative overflow-hidden pt-[112px] sm:pt-[132px] lg:pt-[144px] bg-[#032147] text-[#EDE5DA]"
      style={{ fontFamily: "inherit" }}
    >
      {/* ── 4K CINEMATIC BACKGROUND VIDEO / MOTION ENGINE (BRIGHT & VIBRANT) ──────── */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">
        {HERO_SERVICES.map((srv, index) => {
          const isActive = index === activeIdx;
          return (
            <div
              key={srv.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              {/* True 4K UHD Background Image with smooth Ken-Burns drift */}
              <picture className="w-full h-full block">
                <source srcSet={srv.image.replace(".jpg", ".webp")} type="image/webp" />
                <img
                  src={srv.image}
                  alt={srv.title}
                  className={`w-full h-full object-cover object-center transition-transform duration-[8000ms] ease-out will-change-transform ${
                    isActive ? "scale-105" : "scale-100"
                  }`}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
              </picture>
            </div>
          );
        })}

        {/* ── LUXURY DIRECTIONAL SCRIM (LEFT DEEP NAVY FADE → RIGHT VIBRANT PHOTO) ── */}
        {/* Horizontal Directional Fade: Solid behind text on left, transparent on right */}
        <div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(3,33,71,0.97) 0%, rgba(3,33,71,0.95) 32%, rgba(3,33,71,0.82) 48%, rgba(3,33,71,0.40) 66%, rgba(3,33,71,0.08) 82%, rgba(3,33,71,0.0) 100%)",
          }}
        />
        {/* Vertical Top/Bottom Smooth Anchors */}
        <div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(3,33,71,0.60) 0%, rgba(3,33,71,0.15) 25%, transparent 50%, rgba(3,33,71,0.25) 75%, rgba(3,33,71,0.85) 100%)",
          }}
        />
      </div>

      {/* ── MAIN HERO BODY (CLEAN EDITORIAL CONTENT) ─────────────────── */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 sm:px-10 pb-12 sm:pb-16">
        <div className="max-w-3xl">
          
          {/* Active Service Tag Indicator */}
          <ScrollReveal variant="up" delay={50}>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#032147]/85 border border-[#EDE5DA]/35 backdrop-blur-md mb-6 w-fit shadow-lg shadow-black/20">
              <IconComponent className="w-3.5 h-3.5 text-[#E3D1BE]" />
              <span className="text-[11px] font-mono tracking-[0.16em] uppercase text-[#FFFFFF] font-semibold">
                OPHRON INFRASTRUCTURE · {currentService.pillar}
              </span>
            </div>
          </ScrollReveal>

          {/* Main Editorial Headline */}
          <ScrollReveal variant="up" delay={120}>
            <h1
              className="text-4xl sm:text-6xl lg:text-[76px] xl:text-[86px] font-bold text-white tracking-tight leading-[0.93] mb-6 drop-shadow-md"
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
          <ScrollReveal variant="up" delay={180}>
            <p className="text-base sm:text-lg lg:text-[20px] font-normal leading-relaxed text-[#EDE5DA] mb-3.5 max-w-2xl">
              OPHRON unifies <span className="text-white font-semibold">People</span>,{" "}
              <span className="text-white font-semibold">Hygiene</span>,{" "}
              <span className="text-white font-semibold">Facilities</span>,{" "}
              <span className="text-white font-semibold">Technology</span>, and{" "}
              <span className="text-white font-semibold">Commercial Intelligence</span> into a{" "}
              <span className="text-white font-semibold">single operational platform</span>{" "}
              — built for Singapore's hotels, restaurants, and hospitality groups.
            </p>
            <p className="text-xs sm:text-sm lg:text-[14.5px] text-[#EDE5DA]/80 leading-relaxed mb-8 max-w-xl font-normal">
              Instead of coordinating 5+ fragmented vendors, OPHRON gives you one accountable partner,
              one transparent contract, and full operational visibility.
            </p>
          </ScrollReveal>

          {/* High-Conversion Dual CTAs — Bright, Lustrous & Luxurious */}
          <ScrollReveal variant="up" delay={240}>
            <div className="flex flex-wrap items-center gap-4 mb-8">
              {/* Primary CTA */}
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-3.5 px-7 py-4 rounded-full font-bold text-[13px] sm:text-sm tracking-wide text-[#032147] transition-all duration-300 shadow-xl shadow-black/30 hover:scale-[1.03] hover:shadow-[#E3D1BE]/30"
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
                className="inline-flex items-center gap-2.5 px-6 py-4 rounded-full border border-white/40 hover:border-white bg-[#032147]/65 hover:bg-[#032147]/90 text-white text-[13px] sm:text-sm font-semibold transition duration-300 backdrop-blur-md shadow-lg shadow-black/20"
              >
                <span>Explore Solutions</span>
                <span className="text-[#E3D1BE] text-xs">◆</span>
              </a>
            </div>
          </ScrollReveal>

        </div>
      </div>

      {/* ── STATS & SOCIAL PROOF STRIP (LUMINOUS CHAMPAGNE FROSTED GLASS) ──────── */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 sm:px-10 mb-8">
        <div
          className="rounded-2xl p-6 sm:p-7 grid grid-cols-2 lg:grid-cols-5 gap-6 items-center shadow-2xl transition-all duration-300"
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
        className="relative z-30 border-t overflow-hidden py-3"
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
