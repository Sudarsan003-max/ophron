import { useEffect, useRef, useState, useCallback } from "react";
import { ScrollReveal } from "./ui/animations";
import logoNavy from "./logo-navy.png";
import {
  ArrowRight,
  Sparkle,
  UtensilsCrossed,
  Building2,
  Layers,
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
    id: "kitchen",
    pillar: "BOH OPERATIONS & KITCHEN HYGIENE",
    number: "02",
    title: "Commercial Kitchen Hygiene & Stewarding",
    tagline: "Deep degreasing, exhaust steam cleaning & SFA-compliant stewarding teams.",
    image: "/images/hero/hero_kitchen_hygiene_4k.jpg",
    icon: UtensilsCrossed,
  },
  {
    id: "venues",
    pillar: "FACILITY SERVICES & RAPID RESETS",
    number: "03",
    title: "Events & Luxury Venue Turnover",
    tagline: "Rapid 60-minute ballroom turnovers & high-traffic venue maintenance.",
    image: "/images/hero/hero_event_venue_4k.jpg",
    icon: Building2,
  },
  {
    id: "facade",
    pillar: "HIGH-ALTITUDE BUILDING SERVICES",
    number: "04",
    title: "High-Rise Façade & Rope Access Cleaning",
    tagline: "IRATA-certified rope access technicians & pure-water skyscraper detailing.",
    image: "/images/hero/hero_facade_rope_4k.jpg",
    icon: Layers,
  },
  {
    id: "manpower",
    pillar: "HOSPITALITY WORKFORCE INFRASTRUCTURE",
    number: "05",
    title: "Hospitality Manpower & Executive Staffing",
    tagline: "WSQ-trained housekeeping, stewarding & operational crews on demand.",
    image: "/images/hero/hero_manpower_suite_4k.jpg",
    icon: Users,
  },
  {
    id: "technology",
    pillar: "OPHRON TECHNOLOGY & AI SAAS",
    number: "06",
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
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  const currentService = HERO_SERVICES[activeIdx];
  const IconComponent = currentService.icon;

  return (
    <section
      id="top"
      ref={ref}
      className="relative overflow-hidden pt-[112px] sm:pt-[132px] lg:pt-[144px] bg-[#032147] text-[#EDE5DA]"
      style={{ fontFamily: "inherit" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
              {/* 4K Background Image with Ken-Burns slow breathing drift */}
              <div
                className={`w-full h-full bg-cover bg-center transition-transform duration-[8000ms] ease-out brightness-105 contrast-[1.03] ${
                  isActive ? "scale-105" : "scale-100"
                }`}
                style={{
                  backgroundImage: `url(${srv.image})`,
                }}
              />

              {/* Dynamic Sheen Sweep Animation simulating polishing mirror gleam */}
              {isActive && (
                <div className="absolute inset-0 pointer-events-none sheen-sweep" />
              )}
            </div>
          );
        })}

        {/* Interactive Polish Spotlight on Cursor */}
        {isHovered && (
          <div
            className="absolute z-20 pointer-events-none transition-opacity duration-300 opacity-60 mix-blend-soft-light hidden lg:block"
            style={{
              left: `${mousePos.x}%`,
              top: `${mousePos.y}%`,
              width: "520px",
              height: "520px",
              transform: "translate(-50%, -50%)",
              background:
                "radial-gradient(circle, rgba(255,255,255,0.5) 0%, rgba(227,209,190,0.25) 40%, transparent 70%)",
              filter: "blur(24px)",
            }}
          />
        )}

        {/* Balanced Luxury Vignette — Clear Background Visibility & Razor-Sharp Text */}
        <div
          className="absolute inset-0 z-20"
          style={{
            background:
              "linear-gradient(90deg, rgba(3,33,71,0.85) 0%, rgba(3,33,71,0.65) 45%, rgba(3,33,71,0.22) 75%, rgba(3,33,71,0.50) 100%)",
          }}
        />
        <div
          className="absolute inset-0 z-20"
          style={{
            background:
              "linear-gradient(180deg, rgba(3,33,71,0.65) 0%, transparent 22%, rgba(3,33,71,0.25) 60%, rgba(3,33,71,0.92) 100%)",
          }}
        />
        <div
          className="absolute inset-0 z-20 opacity-30 mix-blend-overlay"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 45%, rgba(227,209,190,0.4) 0%, transparent 65%)",
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
              className="text-5xl sm:text-6xl lg:text-[76px] xl:text-[86px] font-bold text-white tracking-tight leading-[0.93] mb-6 drop-shadow-md"
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

      {/* Custom Styles for Polish Sheen Animation */}
      <style>{`
        @keyframes sheenSweep {
          0% {
            transform: translateX(-100%) skewX(-20deg);
            opacity: 0;
          }
          20% {
            opacity: 0.6;
          }
          60% {
            opacity: 0.6;
          }
          100% {
            transform: translateX(200%) skewX(-20deg);
            opacity: 0;
          }
        }

        .sheen-sweep {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(227, 209, 190, 0.20) 30%,
            rgba(255, 255, 255, 0.45) 50%,
            rgba(227, 209, 190, 0.20) 70%,
            transparent 100%
          );
          animation: sheenSweep 4.5s ease-in-out infinite;
          width: 150%;
          height: 100%;
        }
      `}</style>
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
