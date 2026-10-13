import { useEffect, useRef, useState } from "react";
import { ScrollReveal } from "./ui/animations";
import logoNavy from "./logo-navy.png";
import {
  ArrowRight,
  ArrowUpRight,
  Shield,
  Award,
  CheckCircle2,
} from "lucide-react";

const MARQUEE_ITEMS = [
  "OPHRON FACILITIES — INTEGRATED FACILITY OPERATIONS",
  "OPHRON TECHNOLOGY — AI AUTOMATION & OPERATIONS SAAS",
  "POWDER & DIAMOND MARBLE POLISHING — 98+ GU GLOSS FINISH",
  "COMMERCIAL KITCHEN HYGIENE — 100% SFA/NEA AUDIT READY",
  "HIGH-RISE FAÇADE CLEANING — IRATA ROPE ACCESS CERTIFIED",
  "OPHRON PEOPLE — WORKFORCE & COMPLIANCE MANAGEMENT",
];


const HERO_SERVICES = [
  {
    chip: "Kitchen",
    badge: "✦ SFA GRADE A · HOT-LINE RESTORATION",
    title: "Commercial Kitchen Deep Hygiene",
    sector: "Hot-Line Degreasing & SFA Compliance",
    imageWebp: "/images/services/commercial_kitchen_deep_cleaning.webp",
    imageJpg: "/images/services/commercial_kitchen_deep_cleaning.jpg",
    alt: "Commercial kitchen stainless steel surfaces restored to mirror finish",
  },
  {
    chip: "Hotel Suites",
    badge: "✦ 5-STAR SUITE TURNOVER · HOSPITALITY CREW",
    title: "Luxury Hotel Suite Turnover",
    sector: "Housekeeping & Linen Preparation",
    imageWebp: "/images/photo-6466496.webp",
    imageJpg: "/images/photo-6466496.jpg",
    alt: "Luxury hotel suite dressed to five-star standard by OPHRON crew",
  },
  {
    chip: "Marble Polish",
    badge: "✦ 98+ GU GLOSS · MARBLE RESTORATION",
    title: "Diamond & Powder Marble Polishing",
    sector: "Architectural Stone Restoration",
    imageWebp: "/images/services/marble_polishing.webp",
    imageJpg: "/images/services/marble_polishing.jpg",
    alt: "Architectural Italian marble floor diamond polished to mirror gloss",
  },
  {
    chip: "Façade Access",
    badge: "✦ IRATA ROPE ACCESS · FAÇADE CARE",
    title: "High-Rise Façade & Window Care",
    sector: "High-Altitude Exterior Operations",
    imageWebp: "/images/services/high_rise_facade_cleaning.webp",
    imageJpg: "/images/services/high_rise_facade_cleaning.jpg",
    alt: "High-rise rope access certified glass façade cleaning",
  },
  {
    chip: "Stewarding",
    badge: "✦ WSQ TRAINED · BOH KITCHEN STEWARDING",
    title: "F&B Stewarding & Dishwasher Support",
    sector: "Back-of-House Manpower Operations",
    imageWebp: "/images/services/fnb_stewarding_manpower.webp",
    imageJpg: "/images/services/fnb_stewarding_manpower.jpg",
    alt: "WSQ certified stewarding manpower for hospitality groups",
  },
  {
    chip: "Bio-Sanitation",
    badge: "✦ HOSPITAL-GRADE · SANITARY DESCALING",
    title: "Restroom Hygiene & IAQ Decontamination",
    sector: "Sanitation & Bio-Burden Control",
    imageWebp: "/images/services/hospital_grade_disinfection.webp",
    imageJpg: "/images/services/hospital_grade_disinfection.jpg",
    alt: "Commercial washroom hygiene restoration and hospital grade disinfection",
  },
  {
    chip: "Corporate Towers",
    badge: "✦ GRADE-A TOWERS · DAY & NIGHT PORTERS",
    title: "Commercial Office & Corporate Towers",
    sector: "Integrated Corporate Facilities",
    imageWebp: "/images/services/commercial_office_cleaning.webp",
    imageJpg: "/images/services/commercial_office_cleaning.jpg",
    alt: "Grade-A corporate tower day and night facility operations",
  },
  {
    chip: "Venue Turnover",
    badge: "✦ 4-HOUR SLA · OVERNIGHT VENUE TURNOVER",
    title: "Overnight Ballroom & Event Turnover",
    sector: "Time-Critical Hospitality Venues",
    imageWebp: "/images/services/overnight_venue_turnover.webp",
    imageJpg: "/images/services/overnight_venue_turnover.jpg",
    alt: "Luxury ballroom rapid overnight turnover and sanitation",
  },
];

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
  const [slideIndex, setSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // 6-second continuous loop through curated services images
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % HERO_SERVICES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

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
      className="relative overflow-hidden pt-[112px] sm:pt-[132px] lg:pt-[144px] bg-[#02142B] text-[#EDE5DA]"
    >
      {/* ── AMBIENT ATMOSPHERIC ARCHITECTURE ── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
        {/* Base Solid Deep Midnight Canvas */}
        <div className="absolute inset-0 bg-[#02142B]" />

        {/* Subtle Architectural Blueprint Grid */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(183,163,139,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(183,163,139,0.18) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        {/* Ambient Warm Brass Radial Lighting (Top-Right aura illuminating imagery) */}
        <div
          className="absolute -top-32 right-[-5%] w-[680px] h-[680px] rounded-full opacity-25 blur-[140px]"
          style={{
            background: "radial-gradient(circle, rgba(183,163,139,0.45) 0%, rgba(14,52,102,0.55) 50%, transparent 75%)",
          }}
        />

        {/* Ambient Navy Aura on Left */}
        <div
          className="absolute top-1/3 -left-32 w-[520px] h-[520px] rounded-full opacity-20 blur-[130px]"
          style={{
            background: "radial-gradient(circle, rgba(14,52,102,0.9) 0%, transparent 70%)",
          }}
        />

        {/* Watermark Numeral in Background */}
        <p
          className="pointer-events-none absolute top-1/2 -right-8 hidden -translate-y-1/2 font-serif text-[16rem] leading-none font-bold tracking-tight select-none xl:block opacity-[0.035] text-white"
        >
          01
        </p>

        {/* Subtle Micro Film Grain Texture */}
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage:
              "radial-gradient(#EDE5DA 1px, transparent 1px), radial-gradient(#EDE5DA 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            backgroundPosition: "0 0, 14px 14px",
          }}
        />
      </div>

      {/* ── MAIN HERO BODY (EDITORIAL TYPOGRAPHY + LAYERED COLLAGE) ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-6 sm:pt-10 lg:pt-14 pb-10 sm:pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
          
          {/* ── LEFT COLUMN: EDITORIAL TYPOGRAPHY & VALUE PROPOSITION ──── */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center">
            
            {/* Editorial Serif Headline */}
            <ScrollReveal variant="up" delay={60}>
              <h1
                className="text-[40px] xs:text-[48px] sm:text-6xl md:text-[4.2rem] lg:text-[4.5rem] xl:text-[5rem] font-bold text-white tracking-tight leading-[1.06] sm:leading-[1.03] mb-6 sm:mb-7"
                style={{ fontFamily: "'Canela', 'Cinzel', 'Playfair Display', 'Georgia', serif" }}
              >
                One partner.
                <br />
                One ecosystem.
                <br />
                <span className="font-normal italic text-[#CBB59D]">
                  Better operations.
                </span>
              </h1>
            </ScrollReveal>

            {/* Authoritative Subtitle */}
            <ScrollReveal variant="up" delay={120}>
              <div className="space-y-4 max-w-xl mb-7 sm:mb-8">
                <p className="text-base sm:text-lg lg:text-[18px] text-[#EDE5DA]/90 leading-relaxed font-normal">
                  OPHRON unifies <strong className="font-semibold text-white">People</strong>,{" "}
                  <strong className="font-semibold text-white">Hygiene</strong>,{" "}
                  <strong className="font-semibold text-white">Facilities</strong>,{" "}
                  <strong className="font-semibold text-white">Technology</strong>, and{" "}
                  <strong className="font-semibold text-white">Commercial Intelligence</strong> into a{" "}
                  <strong className="font-semibold text-white">single operational platform</strong> — built for Singapore's hotels, restaurants, and hospitality groups.
                </p>
                <p className="text-sm sm:text-base text-[#EDE5DA]/75 leading-relaxed font-normal">
                  Instead of coordinating 5+ fragmented vendors, OPHRON gives you one accountable partner, one transparent contract, and full operational visibility.
                </p>
              </div>
            </ScrollReveal>


            {/* Dual CTAs (Luxury Solid Brass + Ghost Link) */}
            <ScrollReveal variant="up" delay={250}>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-8 sm:mb-10">
                {/* Primary Solid Brass Button */}
                <a
                  href="#contact"
                  className="group relative inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 bg-[#B7A38B] text-[#02142B] font-mono text-xs sm:text-[12.5px] font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#cbb59b] hover:shadow-[0_10px_25px_rgba(183,163,139,0.35)] hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Request Platform Audit</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                {/* Secondary Ghost Link */}
                <a
                  href="#solutions"
                  className="group inline-flex items-center gap-2.5 px-4 py-3.5 text-xs sm:text-[12.5px] font-mono font-bold tracking-[0.2em] text-[#EDE5DA] hover:text-[#B7A38B] transition-colors duration-200 uppercase"
                >
                  <span>Explore 5 Pillars</span>
                  <ArrowRight className="w-4 h-4 text-[#B7A38B] transition-transform group-hover:translate-x-1.5" />
                </a>
              </div>
            </ScrollReveal>

            {/* Trust Badges Row */}
            <ScrollReveal variant="up" delay={300}>
              <div className="flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-2.5 border-t border-[#EDE5DA]/15 pt-5 sm:pt-6">
                <span className="flex items-center gap-2 font-mono text-[10px] sm:text-[10.5px] tracking-[0.22em] text-[#EDE5DA]/80 uppercase">
                  <Shield className="w-3.5 h-3.5 text-[#B7A38B]" />
                  NEA Licensed Operator
                </span>
                <span className="flex items-center gap-2 font-mono text-[10px] sm:text-[10.5px] tracking-[0.22em] text-[#EDE5DA]/80 uppercase">
                  <Award className="w-3.5 h-3.5 text-[#B7A38B]" />
                  bizSAFE Level 3
                </span>
                <span className="flex items-center gap-2 font-mono text-[10px] sm:text-[10.5px] tracking-[0.22em] text-[#EDE5DA]/80 uppercase">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B7A38B]" />
                  100% SLA Guarantee
                </span>
              </div>
            </ScrollReveal>

          </div>

          {/* ── RIGHT COLUMN: APPLE TABLET SHOWCASE (HIGH-QUALITY PHOTO & APPLE TAB CONTROLS) ── */}
          <div
            className="relative lg:col-span-5 xl:col-span-5 pt-4 sm:pt-0"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <ScrollReveal variant="up" delay={200}>
              <div className="relative mx-auto max-w-[500px] lg:max-w-none">
                
                {/* Apple iPad Pro Mockup Chassis */}
                <div className="relative rounded-[2rem] sm:rounded-[2.4rem] bg-gradient-to-b from-[#1E293B] via-[#0F172A] to-[#030A14] p-2.5 sm:p-3.5 border-2 border-white/20 shadow-[0_30px_90px_rgba(0,0,0,0.85),0_0_40px_rgba(183,163,139,0.12)]">
                  
                  {/* iPad Top Hardware: Front Camera Lens & Ambient Light Sensor */}
                  <div className="flex items-center justify-center gap-2 mb-2 pt-0.5" aria-hidden="true">
                    <span className="w-2.5 h-2.5 rounded-full bg-black border border-white/30 flex items-center justify-center shadow-inner">
                      <span className="w-1 h-1 rounded-full bg-[#102A45]" />
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  </div>

                  {/* iPad Display Canvas (Crisp High-Quality Image) */}
                  <div className="relative rounded-2xl overflow-hidden bg-black h-[350px] xs:h-[390px] sm:h-[440px] md:h-[470px] w-full border border-white/10 group">
                    
                    {/* Cross-fading 8 High-Quality Service Photos */}
                    {HERO_SERVICES.map((s, idx) => (
                      <div
                        key={s.badge}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                          idx === slideIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                        }`}
                      >
                        <picture>
                          <source srcSet={s.imageWebp} type="image/webp" />
                          <img
                            src={s.imageJpg}
                            alt={s.alt}
                            className={`h-full w-full object-cover transition-transform duration-[6000ms] ease-out ${
                              idx === slideIndex ? "scale-105" : "scale-100"
                            }`}
                            loading={idx === 0 ? "eager" : "lazy"}
                            decoding="async"
                          />
                        </picture>
                      </div>
                    ))}

                    {/* Subtle Apple Glass Specular Glare */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.08] pointer-events-none z-20" />

                    {/* Apple Tab Bar Inside the Picture (Top Floating Pill Tab Strip to Move On) */}
                    <div className="absolute top-3 inset-x-3 z-30 flex justify-center">
                      <div className="inline-flex items-center gap-1 p-1 rounded-full bg-black/65 backdrop-blur-xl border border-white/25 shadow-2xl max-w-full overflow-x-auto no-scrollbar">
                        {HERO_SERVICES.map((s, idx) => {
                          const isActive = idx === slideIndex;
                          return (
                            <button
                              key={s.chip}
                              type="button"
                              onClick={() => setSlideIndex(idx)}
                              className={`px-2.5 py-1 rounded-full text-[10px] sm:text-[10.5px] font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer whitespace-nowrap select-none ${
                                isActive
                                  ? "bg-[#B7A38B] text-[#02142B] font-bold shadow-[0_0_12px_rgba(183,163,139,0.5)] scale-[1.02]"
                                  : "text-white/75 hover:text-white hover:bg-white/15"
                              }`}
                              title={s.title}
                              aria-label={`Go to ${s.title}`}
                            >
                              {s.chip}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Apple Interactive Navigation Pill at Bottom Inside the Pic */}
                    <div className="absolute bottom-3 inset-x-3 z-30 flex items-center justify-between gap-2">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/65 backdrop-blur-xl border border-white/25 shadow-2xl text-[11px] font-mono text-[#EDE5DA] truncate">
                        <span className="text-[#B7A38B] font-bold">✦</span>
                        <span className="font-semibold truncate">{HERO_SERVICES[slideIndex].title}</span>
                      </div>

                      <div className="inline-flex items-center gap-1 p-1 rounded-full bg-black/65 backdrop-blur-xl border border-white/25 shadow-2xl shrink-0">
                        <button
                          type="button"
                          onClick={() => setSlideIndex((prev) => (prev - 1 + HERO_SERVICES.length) % HERO_SERVICES.length)}
                          className="h-6 w-6 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all cursor-pointer font-bold text-sm"
                          aria-label="Previous slide"
                        >
                          ‹
                        </button>
                        <span className="text-[10px] font-mono text-[#B7A38B] px-1 font-bold">
                          {slideIndex + 1}/{HERO_SERVICES.length}
                        </span>
                        <button
                          type="button"
                          onClick={() => setSlideIndex((prev) => (prev + 1) % HERO_SERVICES.length)}
                          className="h-6 w-6 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all cursor-pointer font-bold text-sm"
                          aria-label="Next slide"
                        >
                          ›
                        </button>
                      </div>
                    </div>

                  </div>

                  {/* iPad Bottom Hardware: Home Indicator Bar */}
                  <div className="flex justify-center pt-2 pb-0.5" aria-hidden="true">
                    <div className="h-1 w-28 rounded-full bg-white/35 shadow-sm" />
                  </div>

                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>


      {/* ── STATS & SOCIAL PROOF STRIP (HALF-WHITE BONE CARD) ──────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 mt-6 sm:mt-8 mb-8 sm:mb-10">
        <div
          className="rounded-xl p-5 sm:p-7 grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 items-center shadow-2xl transition-all duration-300"
          style={{
            background: "#EDE5DA",
            color: "#032147",
            border: "1px solid rgba(183, 163, 139, 0.45)",
            boxShadow: "0 20px 45px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.5)",
          }}
        >
          <StatBlock value={`${yrs}+`} label="Yrs" sub="OPERATIONAL EXPERTISE" />
          <StatBlock value={`${contracts}+`} label="" sub="ACTIVE SG CONTRACTS" />
          <StatBlock value="bizSAFE 3" label="" sub="WSH COUNCIL CERTIFIED" />
          <StatBlock value="NEA" label=" Licensed" sub="SINGAPORE OPERATOR" />

          <div
            className="col-span-2 lg:col-span-1 border-t lg:border-t-0 lg:border-l pt-4 lg:pt-0 lg:pl-6 flex flex-col justify-center"
            style={{ borderColor: "rgba(3, 33, 71, 0.18)" }}
          >
            <div className="flex items-center gap-1 text-[#032147] text-xs mb-1">
              {"★★★★★".split("").map((s, i) => (
                <span key={i} className="text-[#8C7355]">{s}</span>
              ))}
              <span className="text-[10px] font-mono font-bold ml-2 text-[#032147]/80">
                100% SLA
              </span>
            </div>
            <div
              className="text-xs font-bold text-[#032147] tracking-wider uppercase"
              style={{ fontFamily: "'Canela', 'Cinzel', 'Playfair Display', 'Georgia', serif" }}
            >
              PAN PACIFIC · YOTEL · ATLAS
            </div>
            <div className="text-[11px] font-medium mt-0.5 text-[#032147]/70">
              Singapore's trusted partner
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
        style={{ fontFamily: "'Canela', 'Cinzel', 'Playfair Display', 'Georgia', serif" }}
      >
        {value}
        {label && (
          <span
            className="text-base sm:text-lg font-normal ml-1 text-[#032147]/80"
            style={{ fontFamily: "'Canela', 'Cinzel', 'Playfair Display', 'Georgia', serif" }}
          >
            {label}
          </span>
        )}
      </div>
      <div className="mt-1.5 text-[9.5px] font-mono font-bold tracking-[0.16em] uppercase text-[#032147]/75">
        {sub}
      </div>
    </div>
  );
}
