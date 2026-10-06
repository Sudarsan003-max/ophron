import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "motion/react";
import { ScrollReveal } from "./ui/animations";
import { SectionHead } from "./About";

const industries = [
  {
    n: "01",
    icon: "⊙",
    label: "Hotels",
    title: "Hotels & Luxury Resorts",
    desc: "5-star to boutique. Housekeeping, stewarding, facility management, and tech.",
    sub: "LUXURY & BOUTIQUE HOSPITALITY",
    scope: [
      "Daily Housekeeping & Turndown SLA",
      "Full Stewarding & Dishwashing Crews",
      "24/7 Facility Maintenance & Repairs",
      "Guest Service Automation & Portals",
    ],
    highlight: "99.8% SLA across 45+ Singapore Hotel Properties",
  },
  {
    n: "02",
    icon: "✦",
    label: "Restaurants",
    title: "Restaurants & Dining",
    desc: "SFA compliance, canopy cleaning, kitchen hygiene, and staff deployment.",
    sub: "SFA & NEA COMPLIANT DINING",
    scope: [
      "Exhaust Duct & Canopy Degreasing",
      "NEA-Approved Deep Kitchen Sanitisation",
      "Relief Kitchen Hand & Stewarding Staff",
      "Audit-Ready Chemical Log Records",
    ],
    highlight: "100% SFA Cleanliness Grade Retention Rate",
  },
  {
    n: "03",
    icon: "⬡",
    label: "F&B Groups",
    title: "Multi-Outlet F&B Groups",
    desc: "Multi-outlet operations, centralized manpower, and cost visibility.",
    sub: "MULTI-VENUE ENTERPRISE F&B",
    scope: [
      "Centralized Rostering & Relief Pool",
      "Cross-Outlet Chemical Standardisation",
      "Consolidated Monthly Single Invoicing",
      "Operational Intelligence & Cost Analytics",
    ],
    highlight: "Up to 22% Operational Overhead Reduction",
  },
  {
    n: "04",
    icon: "◈",
    label: "Events & Banquets",
    title: "Event & Banquet Operations",
    desc: "High-volume event support, certified hygiene, certified banquet stewarding, and reliable surge crew deployment.",
    sub: "LARGE-SCALE EVENT & BANQUET OPERATIONS",
    scope: [
      "Certified Banquet & Stewarding Crew",
      "High-Throughput Warewashing Logistics",
      "Pre-Event Food Safety Sanitisation",
      "Rapid Surge Capacity Mobilisation",
    ],
    highlight: "Rapid 4-Hour Urgent Mobilisation Response",
  },
  {
    n: "05",
    icon: "◎",
    label: "Hospitality Groups",
    title: "Hospitality & Portfolio Assets",
    desc: "Scalable infrastructure across multiple properties under one contract.",
    sub: "PORTFOLIO & ASSET OPERATORS",
    scope: [
      "Unified 5-Pillar Operating Agreement",
      "Dedicated Executive Account Director",
      "Enterprise SLA Performance Portal",
      "Full Vendor Consolidation Management",
    ],
    highlight: "Single Accountable Strategic Operating Partner",
  },
  {
    n: "06",
    icon: "⊡",
    label: "Commercial Properties",
    title: "Commercial & Mixed-Use Properties",
    desc: "Facilities management, cleaning programs, and compliance reporting.",
    sub: "PREMIUM RETAIL & COMMERCIAL ASSETS",
    scope: [
      "Integrated Facility Services (IFM Lite)",
      "High-Traffic Public Area Janitorial",
      "Grease Trap, Waste & Pest Upkeep",
      "bizSAFE Level 3 Compliance Audits",
    ],
    highlight: "NEA Licensed & WSH Council Level 3 Certified",
  },
];

export default function WhoWeServe() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const total = industries.length;

  // Check prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Viewport Observer for Autoplay (Low threshold + generous rootMargin for mobile reliability)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.05, rootMargin: "150px 0px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nextCard = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevCard = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToCard = (index: number) => {
    setActiveIndex(index);
    // Temporarily pause on tap for 6 seconds, then resume auto-cycling
    setIsHovered(true);
    if (timerRef.current) clearInterval(timerRef.current);
    setTimeout(() => {
      setIsHovered(false);
    }, 6000);
  };

  // Autoplay when in view
  useEffect(() => {
    if (isHovered || !isInView || prefersReducedMotion) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      nextCard();
    }, 4200);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered, isInView, prefersReducedMotion, nextCard]);

  // Touch / Drag swipe handler
  const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
    if (info.offset.x < -40) {
      nextCard();
    } else if (info.offset.x > 40) {
      prevCard();
    }
  };

  return (
    <section
      id="who-we-serve"
      ref={containerRef}
      className="relative py-10 sm:py-16 overflow-hidden select-none"
      style={{ background: "#032147" }}
      aria-label="Who We Serve"
    >
      {/* Subtle Ambient Background Texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.04,
          backgroundImage: "radial-gradient(rgba(237,229,218,1) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      {/* Ambient Lighting Accents */}
      <div
        className="absolute -top-24 left-1/4 w-[500px] h-[500px] rounded-full bg-[#B7A38B]/10 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 right-1/4 w-[500px] h-[500px] rounded-full bg-[#B7A38B]/8 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1400px] px-5">
        {/* Section Head */}
        <SectionHead n="008" label="Who We Serve" light />

        {/* Section Title & Intro */}
        <div className="grid lg:grid-cols-12 gap-10 items-end mt-8 mb-6">
          <div className="lg:col-span-7">
            <ScrollReveal variant="up" delay={80}>
              <h2
                style={{
                  fontFamily: "'Georgia', serif",
                  fontSize: "clamp(34px, 4.5vw, 64px)",
                  fontWeight: 700,
                  lineHeight: 0.95,
                  letterSpacing: "-0.025em",
                  color: "#EDE5DA",
                  margin: 0,
                }}
              >
                Built for Singapore's
                <br />
                <span style={{ color: "#B7A38B", fontStyle: "italic", fontWeight: 400 }}>
                  hospitality operators.
                </span>
              </h2>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-5">
            <ScrollReveal variant="left" delay={150}>
              <p style={{ fontSize: "15px", lineHeight: 1.75, color: "rgba(237,229,218,0.75)", margin: 0 }}>
                From luxury hotels to multi-outlet F&amp;B groups and commercial properties, OPHRON delivers tailored,
                unified operational infrastructure with guaranteed SLA performance.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* ── 1. INTERACTIVE SERVICE RIBBON & CONNECTING PATH ──────────── */}
        <div className="relative mt-4 mb-4 overflow-x-auto pb-2 scrollbar-none">
          {/* Connecting SVG Path Line */}
          <div className="relative flex items-center justify-between min-w-[760px] max-w-4xl mx-auto px-4">
            <div
              className="absolute left-6 right-6 h-[1px] top-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-[#B7A38B]/30 to-transparent pointer-events-none"
              aria-hidden="true"
            />

            {industries.map((ind, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={ind.n}
                  onClick={() => goToCard(idx)}
                  className="group relative flex flex-col items-center gap-2 z-10 px-3 py-2 cursor-pointer focus:outline-none transition-transform"
                  aria-label={`Select category ${ind.n}: ${ind.label}`}
                >
                  {/* Outer Pulsing Ring for Active */}
                  <div className="relative">
                    <div
                      className={`h-9 w-9 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-400 ${
                        isActive
                          ? "bg-[#B7A38B] text-[#032147] shadow-[0_0_20px_rgba(183,163,139,0.5)] scale-110"
                          : "bg-[#032147] text-[#EDE5DA]/70 border border-[#EDE5DA]/20 hover:border-[#B7A38B]/60 hover:text-[#EDE5DA]"
                      }`}
                    >
                      <span>{ind.icon}</span>
                    </div>
                  </div>

                  {/* Category Label */}
                  <span
                    className={`text-[11.5px] font-montserrat font-semibold tracking-wide transition-all duration-300 ${
                      isActive ? "text-[#EDE5DA] scale-105" : "text-[#EDE5DA]/55 group-hover:text-[#EDE5DA]/90"
                    }`}
                  >
                    {ind.label}
                  </span>

                  {/* Active Indicator Underline */}
                  {isActive && (
                    <motion.div
                      layoutId="activeRibbonIndicator"
                      className="absolute -bottom-1 h-0.5 w-6 rounded-full bg-[#B7A38B]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── 2. CONTINUOUS 3D DEPTH CAROUSEL STAGE ────────────────────── */}
        <div
          className="relative w-full py-2 md:py-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* 3D Perspective Stage */}
          <div
            className="relative w-full h-[460px] sm:h-[480px] flex items-center justify-center"
            style={{
              perspective: prefersReducedMotion ? "none" : "1400px",
              perspectiveOrigin: "50% 50%",
            }}
          >
            {industries.map((ind, i) => {
              // Circular offset relative to active index
              let offset = (i - activeIndex) % total;
              if (offset < -3) offset += total;
              if (offset > 2) offset -= total;

              const isCenter = offset === 0;
              const isAdjacent = Math.abs(offset) === 1;

              // Responsive coordinate calculation
              const xPercent = offset * 95;

              return (
                <motion.div
                  key={ind.n}
                  onClick={() => goToCard(i)}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={handleDragEnd}
                  initial={false}
                  animate={{
                    x: `${xPercent}%`,
                    scale: isCenter ? 1.05 : isAdjacent ? 0.91 : 0.78,
                    y: isCenter ? 0 : isAdjacent ? 12 : 26,
                    z: isCenter ? 80 : isAdjacent ? -40 : -130,
                    rotateY: prefersReducedMotion ? 0 : offset * -11,
                    opacity: isCenter ? 1 : isAdjacent ? 0.65 : 0.22,
                    filter: isCenter ? "blur(0px)" : isAdjacent ? "blur(0.3px)" : "blur(1.4px)",
                    zIndex: isCenter ? 30 : isAdjacent ? 20 : 10,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 210,
                    damping: 27,
                    mass: 0.9,
                  }}
                  style={{
                    position: "absolute",
                    width: "min(420px, 88vw)",
                    height: "430px",
                    willChange: "transform, opacity, filter",
                    transformStyle: "preserve-3d",
                    cursor: isCenter ? "default" : "pointer",
                  }}
                  className="rounded-2xl"
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "20px",
                      padding: "32px 28px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      background: isCenter
                        ? "linear-gradient(150deg, rgba(183, 163, 139, 0.16) 0%, rgba(3, 33, 71, 0.94) 100%)"
                        : "rgba(237, 229, 218, 0.04)",
                      border: isCenter
                        ? "1.5px solid rgba(183, 163, 139, 0.60)"
                        : "1px solid rgba(237, 229, 218, 0.10)",
                      boxShadow: isCenter
                        ? "0 30px 70px -15px rgba(0, 0, 0, 0.75), 0 0 40px rgba(183, 163, 139, 0.20), inset 0 1px 1px rgba(237, 229, 218, 0.3)"
                        : "0 10px 30px -10px rgba(0, 0, 0, 0.35)",
                      backdropFilter: "blur(16px)",
                      WebkitBackdropFilter: "blur(16px)",
                      transition: "border-color 0.4s, background 0.4s, box-shadow 0.4s",
                    }}
                  >
                    {/* Top Row: Icon with Micro-Animation + Index */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <div className="flex items-center gap-3">
                        <motion.div
                          animate={
                            isCenter
                              ? { scale: [1, 1.14, 1], rotate: [0, 4, -4, 0] }
                              : { scale: 1, rotate: 0 }
                          }
                          transition={{
                            duration: 3.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className={`h-11 w-11 rounded-full flex items-center justify-center text-xl transition-all duration-300 ${
                            isCenter
                              ? "bg-[#B7A38B] text-[#032147] shadow-[0_0_20px_rgba(183,163,139,0.4)]"
                              : "bg-white/5 text-[#B7A38B] border border-white/10"
                          }`}
                        >
                          <span>{ind.icon}</span>
                        </motion.div>
                        <div>
                          <div className="text-[10px] font-mono tracking-[0.16em] uppercase text-[#B7A38B] font-bold">
                            {ind.sub}
                          </div>
                          <div className="text-[18px] font-montserrat font-bold text-[#EDE5DA] tracking-tight">
                            {ind.label}
                          </div>
                        </div>
                      </div>

                      <span
                        style={{
                          fontSize: "11px",
                          fontFamily: "'Courier New', monospace",
                          letterSpacing: "0.14em",
                          color: isCenter ? "#B7A38B" : "rgba(183,163,139,0.60)",
                          fontWeight: 700,
                          textTransform: "uppercase",
                        }}
                      >
                        {ind.n}
                      </span>
                    </div>

                    {/* Middle: Core Description + Expandable Scope Highlights */}
                    <div className="my-2">
                      <p
                        style={{
                          fontSize: "14px",
                          lineHeight: 1.65,
                          color: isCenter ? "rgba(237,229,218,0.92)" : "rgba(237,229,218,0.55)",
                          margin: 0,
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        {ind.desc}
                      </p>

                      {/* Scope Capabilities Grid */}
                      <div className="mt-4 grid grid-cols-2 gap-2">
                        {ind.scope.map((item) => (
                          <div
                            key={item}
                            className={`flex items-center gap-1.5 text-[11.5px] font-inter rounded-lg p-1.5 transition-all duration-300 ${
                              isCenter
                                ? "bg-white/5 text-[#EDE5DA]/85 border border-white/10"
                                : "text-[#EDE5DA]/45"
                            }`}
                          >
                            <span className="text-[#B7A38B] text-xs font-bold">✓</span>
                            <span className="truncate">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Row: SLA Highlight Banner & CTA Link */}
                    <div
                      style={{
                        paddingTop: "14px",
                        borderTop: isCenter
                          ? "1px solid rgba(183, 163, 139, 0.25)"
                          : "1px solid rgba(237, 229, 218, 0.08)",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "10.5px",
                          fontFamily: "'Courier New', monospace",
                          letterSpacing: "0.08em",
                          color: isCenter ? "#B7A38B" : "rgba(183,163,139,0.70)",
                          fontWeight: 700,
                          textTransform: "uppercase",
                        }}
                      >
                        {ind.highlight}
                      </span>

                      {isCenter && (
                        <a
                          href="#contact"
                          className="text-xs font-montserrat font-bold text-[#EDE5DA] hover:text-[#B7A38B] transition flex items-center gap-1"
                        >
                          Inquire <span aria-hidden="true">→</span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* ── 3. CAROUSEL NAVIGATION CONTROLS ───────────────────────── */}
          <div className="mt-4 flex items-center justify-between max-w-xl mx-auto px-4">
            {/* Prev Button */}
            <button
              onClick={prevCard}
              aria-label="Previous Category"
              className="group grid place-items-center h-10 w-10 rounded-full border border-[#B7A38B]/30 bg-white/5 text-[#EDE5DA] hover:bg-[#B7A38B] hover:text-[#032147] hover:border-[#B7A38B] transition-all duration-300 cursor-pointer"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 transition-transform group-hover:-translate-x-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            {/* Pagination Indicators */}
            <div className="flex items-center gap-2.5">
              {industries.map((ind, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={ind.n}
                    onClick={() => goToCard(idx)}
                    aria-label={`Go to category ${ind.n}: ${ind.label}`}
                    className="relative py-2 px-1 focus:outline-none cursor-pointer"
                  >
                    <div
                      className="h-1.5 rounded-full transition-all duration-400"
                      style={{
                        width: isActive ? "32px" : "10px",
                        background: isActive ? "#B7A38B" : "rgba(237, 229, 218, 0.20)",
                        boxShadow: isActive ? "0 0 10px rgba(183, 163, 139, 0.5)" : "none",
                      }}
                    />
                  </button>
                );
              })}
            </div>

            {/* Next Button */}
            <button
              onClick={nextCard}
              aria-label="Next Category"
              className="group grid place-items-center h-10 w-10 rounded-full border border-[#B7A38B]/30 bg-white/5 text-[#EDE5DA] hover:bg-[#B7A38B] hover:text-[#032147] hover:border-[#B7A38B] transition-all duration-300 cursor-pointer"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* Section Conversion CTA */}
          <div className="mt-8 text-center px-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#B7A38B] text-[#032147] hover:bg-white text-xs sm:text-sm font-montserrat font-bold tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <span>Custom SLA Solutions for Your Sector — Request Consultation</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
