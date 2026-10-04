import { useState, useEffect, useCallback, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ScrollReveal } from "./ui/animations";
import { SectionHead } from "./About";

const pillars = [
  {
    n: "01",
    icon: "⊙",
    label: "People",
    title: "People & Manpower",
    desc: "WSQ-certified, supervisor-led crews. Reliable staffing for housekeeping, stewarding, and F&B operations. No gaps.",
    tag: "STAFFING · COMPLIANCE",
    href: "#contact",
  },
  {
    n: "02",
    icon: "✦",
    label: "Hygiene",
    title: "Cleaning & Hygiene",
    desc: "NEA-licensed. Hospital-grade chemistry. SFA-compliant chemical records. Canopy degreasing to daily sanitisation.",
    tag: "NEA · BIZSAFE 3",
    href: "#contact",
  },
  {
    n: "03",
    icon: "⬡",
    label: "Facilities",
    title: "Facility Services",
    desc: "Integrated facility maintenance — reactive and planned. Equipment upkeep, marble care, pest, waste, and IFM.",
    tag: "IFM LITE · PREVENTIVE",
    href: "#contact",
  },
  {
    n: "04",
    icon: "◈",
    label: "Technology",
    title: "Hospitality Technology",
    desc: "Operational SaaS, automation tools, and AI-enabled workflows that replace manual coordination and reporting.",
    tag: "AI · AUTOMATION · SAAS",
    href: "#contact",
  },
  {
    n: "05",
    icon: "◎",
    label: "Intelligence",
    title: "Operational Intelligence",
    desc: "Real-time dashboards, SLA tracking, cost analytics, and performance reporting — across all your locations.",
    tag: "DATA · VISIBILITY",
    href: "#contact",
  },
];

const AUTOPLAY_INTERVAL = 4200; // ms per card

export default function Ecosystem() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [progress, setProgress] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const total = pillars.length;

  // Parallax Tilt State for Hero Card
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const tiltX = useSpring(useTransform(mouseY, [-180, 180], [6, -6]), springConfig);
  const tiltY = useSpring(useTransform(mouseX, [-180, 180], [-8, 8]), springConfig);

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
    setProgress(0);
  }, [total]);

  const prevCard = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
    setProgress(0);
  }, [total]);

  const goToCard = (index: number) => {
    setActiveIndex(index);
    setProgress(0);
    // Pause for 5 seconds on manual tap, then resume auto-cycling
    setIsHovered(true);
    setTimeout(() => {
      setIsHovered(false);
    }, 5000);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isInView) return;
      if (e.key === "ArrowRight") nextCard();
      if (e.key === "ArrowLeft") prevCard();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isInView, nextCard, prevCard]);

  // Smooth Autoplay with Segmented Progress
  useEffect(() => {
    if (isHovered || !isInView || prefersReducedMotion) {
      if (timerRef.current) clearInterval(timerRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      return;
    }

    const stepMs = 50;
    const progressIncrement = (stepMs / AUTOPLAY_INTERVAL) * 100;

    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextCard();
          return 0;
        }
        return prev + progressIncrement;
      });
    }, stepMs);

    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="ecosystem"
      ref={containerRef}
      className="relative py-28 overflow-hidden select-none"
      style={{ background: "#032147" }}
      aria-label="The OPHRON Ecosystem"
    >
      {/* Subtle Dot Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.04,
          backgroundImage: "radial-gradient(rgba(237,229,218,1) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      {/* Dynamic Radial Spotlight Behind Hero Card */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[520px] pointer-events-none transition-opacity duration-1000"
        style={{
          background: "radial-gradient(ellipse at center, rgba(183, 163, 139, 0.16) 0%, rgba(3, 33, 71, 0) 70%)",
          opacity: isInView ? 1 : 0.4,
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1400px] px-5">
        {/* Section Header */}
        <SectionHead n="004" label="The OPHRON Ecosystem" light />

        <div className="grid lg:grid-cols-12 gap-10 items-end mt-12 mb-16">
          <div className="lg:col-span-7">
            <ScrollReveal variant="up" delay={80}>
              <h2
                style={{
                  fontFamily: "'Georgia', serif",
                  fontSize: "clamp(36px, 5vw, 68px)",
                  fontWeight: 700,
                  lineHeight: 0.95,
                  letterSpacing: "-0.025em",
                  color: "#EDE5DA",
                  margin: 0,
                }}
              >
                Not a vendor.
                <br />
                <span style={{ color: "#B7A38B", fontStyle: "italic", fontWeight: 400 }}>
                  An operating partner.
                </span>
              </h2>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-5">
            <ScrollReveal variant="left" delay={150}>
              <p style={{ fontSize: "15px", lineHeight: 1.75, color: "rgba(237,229,218,0.75)", margin: 0 }}>
                Most hospitality businesses manage People, Cleaning, Facilities, and Technology through
                separate vendors — separate contracts, separate accountability gaps, separate points of failure.
                <br /><br />
                OPHRON closes all of them. One ecosystem. One partner. One point of accountability.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* ── CINEMATIC 3D FOCUS STAGE ────────────────────────────────────────── */}
        <div
          className="relative w-full py-6 md:py-10 group/stage"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            handleMouseLeave();
          }}
          onMouseMove={handleMouseMove}
        >
          {/* Subtle Ambient Vignette Curve */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(ellipse_at_center,transparent_40%,#032147_95%)]"
            aria-hidden="true"
          />

          {/* 3D Depth Perspective Stage */}
          <div
            className="relative w-full h-[420px] sm:h-[440px] flex items-center justify-center"
            style={{
              perspective: prefersReducedMotion ? "none" : "1500px",
              perspectiveOrigin: "50% 50%",
            }}
          >
            {pillars.map((p, i) => {
              // Relative circular offset (-2, -1, 0, 1, 2)
              let offset = (i - activeIndex) % total;
              if (offset < -2) offset += total;
              if (offset > 2) offset -= total;

              const isCenter = offset === 0;
              const isAdjacent = Math.abs(offset) === 1;

              // Smooth 3D depth parameters
              const xPos = `${offset * 102}%`;
              const scale = isCenter ? 1.08 : isAdjacent ? 0.88 : 0.74;
              const yPos = isCenter ? 0 : isAdjacent ? 14 : 30;
              const zPos = isCenter ? 110 : isAdjacent ? -55 : -175;
              const rotateYVal = prefersReducedMotion ? 0 : offset * -14;
              const opacityVal = isCenter ? 1 : isAdjacent ? 0.58 : 0.18;
              const blurVal = isCenter ? "blur(0px)" : isAdjacent ? "blur(1.2px)" : "blur(2.8px)";
              const brightnessVal = isCenter ? "brightness(1.05)" : isAdjacent ? "brightness(0.85)" : "brightness(0.65)";

              return (
                <motion.div
                  key={p.n}
                  onClick={() => goToCard(i)}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={handleDragEnd}
                  initial={false}
                  animate={{
                    x: xPos,
                    scale: scale,
                    y: yPos,
                    z: zPos,
                    rotateY: rotateYVal,
                    opacity: opacityVal,
                    filter: `${blurVal} ${brightnessVal}`,
                    zIndex: isCenter ? 30 : isAdjacent ? 20 : 10,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 210,
                    damping: 26,
                    mass: 0.9,
                  }}
                  style={{
                    position: "absolute",
                    width: "min(360px, 86vw)",
                    height: "380px",
                    willChange: "transform, opacity, filter",
                    transformStyle: "preserve-3d",
                    cursor: isCenter ? "default" : "pointer",
                    rotateX: isCenter && !prefersReducedMotion ? tiltX : 0,
                    rotateY: isCenter && !prefersReducedMotion ? tiltY : rotateYVal,
                  }}
                  className="rounded-2xl"
                >
                  {/* Card Shell with Premium Glass & Border Shimmer */}
                  <div
                    className="group/card relative w-full h-full rounded-[22px] p-7 sm:p-8 flex flex-col justify-between overflow-hidden transition-all duration-500"
                    style={{
                      background: isCenter
                        ? "linear-gradient(145deg, rgba(183, 163, 139, 0.18) 0%, rgba(3, 33, 71, 0.94) 100%)"
                        : "rgba(237, 229, 218, 0.035)",
                      border: isCenter
                        ? "1.5px solid rgba(183, 163, 139, 0.65)"
                        : isAdjacent
                        ? "1px solid rgba(237, 229, 218, 0.10)"
                        : "1px solid rgba(237, 229, 218, 0.04)",
                      boxShadow: isCenter
                        ? "0 30px 80px -15px rgba(0, 0, 0, 0.75), 0 0 45px rgba(183, 163, 139, 0.22), inset 0 1px 1.5px rgba(237, 229, 218, 0.35)"
                        : "0 10px 30px -10px rgba(0, 0, 0, 0.35)",
                      backdropFilter: "blur(24px)",
                      WebkitBackdropFilter: "blur(24px)",
                    }}
                  >
                    {/* Top Ambient Highlight Streak on Focus */}
                    {isCenter && (
                      <div
                        className="absolute -top-12 left-1/4 right-1/4 h-24 bg-[#B7A38B]/20 blur-xl pointer-events-none rounded-full"
                        aria-hidden="true"
                      />
                    )}

                    {/* Top Row: Icon with Micro-Interaction + Index */}
                    <div className="relative flex items-center justify-between z-10">
                      {/* Geometric Icon with Halo */}
                      <div className="relative flex items-center justify-center">
                        <motion.div
                          animate={
                            isCenter
                              ? { scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }
                              : { scale: 1, rotate: 0 }
                          }
                          transition={{
                            duration: 4.0,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className={`h-12 w-12 rounded-full flex items-center justify-center text-2xl transition-all duration-400 ${
                            isCenter
                              ? "bg-[#B7A38B] text-[#032147] shadow-[0_0_24px_rgba(183,163,139,0.5)] font-bold"
                              : "bg-white/5 text-[#B7A38B] border border-white/10"
                          }`}
                        >
                          <span>{p.icon}</span>
                        </motion.div>
                      </div>

                      {/* Number Display */}
                      <span
                        style={{
                          fontSize: "12px",
                          fontFamily: "'Courier New', monospace",
                          letterSpacing: "0.16em",
                          color: isCenter ? "#B7A38B" : "rgba(183,163,139,0.55)",
                          fontWeight: 700,
                          textTransform: "uppercase",
                        }}
                      >
                        {p.n}
                      </span>
                    </div>

                    {/* Middle: Title & Description with Sharp Hierarchy */}
                    <div className="relative my-auto z-10">
                      <div
                        style={{
                          fontSize: "19px",
                          fontWeight: 700,
                          color: isCenter ? "#FFFFFF" : "#EDE5DA",
                          marginBottom: "12px",
                          letterSpacing: "-0.015em",
                          fontFamily: "'Montserrat', sans-serif",
                          textShadow: isCenter ? "0 2px 10px rgba(0,0,0,0.4)" : "none",
                        }}
                      >
                        {p.title}
                      </div>
                      <p
                        style={{
                          fontSize: "13.5px",
                          lineHeight: 1.7,
                          color: isCenter ? "rgba(237,229,218,0.95)" : "rgba(237,229,218,0.50)",
                          margin: 0,
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        {p.desc}
                      </p>
                    </div>

                    {/* Bottom: Tag + "Explore →" Reveal on Hover */}
                    <div
                      className="relative pt-4 flex items-center justify-between z-10"
                      style={{
                        borderTop: isCenter
                          ? "1px solid rgba(183, 163, 139, 0.30)"
                          : "1px solid rgba(237, 229, 218, 0.08)",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "9.5px",
                          fontFamily: "'Courier New', monospace",
                          letterSpacing: "0.15em",
                          color: isCenter ? "#B7A38B" : "rgba(183,163,139,0.60)",
                          fontWeight: 700,
                          textTransform: "uppercase",
                        }}
                      >
                        {p.tag}
                      </span>

                      {/* Minimal "Explore →" Reveal */}
                      {isCenter && (
                        <a
                          href={p.href}
                          className="group/link inline-flex items-center gap-1.5 text-[11px] font-montserrat font-semibold tracking-wider text-[#EDE5DA] hover:text-[#B7A38B] transition-colors uppercase cursor-pointer"
                        >
                          <span>Explore</span>
                          <span className="text-[#B7A38B] text-xs transition-transform group-hover/link:translate-x-1" aria-hidden="true">
                            →
                          </span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* ── MINIMAL ARROWS THAT APPEAR PRIMARILY ON HOVER ───────────── */}
          <button
            onClick={prevCard}
            aria-label="Previous Ecosystem Pillar"
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-40 h-11 w-11 rounded-full border border-[#B7A38B]/30 bg-[#032147]/80 backdrop-blur-md text-[#EDE5DA] opacity-40 group-hover/stage:opacity-100 hover:bg-[#B7A38B] hover:text-[#032147] hover:border-[#B7A38B] transition-all duration-300 grid place-items-center shadow-lg shadow-black/40 cursor-pointer"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <button
            onClick={nextCard}
            aria-label="Next Ecosystem Pillar"
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-40 h-11 w-11 rounded-full border border-[#B7A38B]/30 bg-[#032147]/80 backdrop-blur-md text-[#EDE5DA] opacity-40 group-hover/stage:opacity-100 hover:bg-[#B7A38B] hover:text-[#032147] hover:border-[#B7A38B] transition-all duration-300 grid place-items-center shadow-lg shadow-black/40 cursor-pointer"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>

          {/* ── SMOOTH ACTIVE-CARD COUNTER & SEGMENTED PROGRESS INDICATOR ── */}
          <div className="mt-8 flex flex-col items-center gap-3">
            {/* Active Card Counter: e.g. "01 / 05" */}
            <div className="flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-[#EDE5DA]/70 font-semibold">
              <span className="text-[#B7A38B] font-bold">0{activeIndex + 1}</span>
              <span className="opacity-40">/</span>
              <span className="opacity-60">0{total}</span>
            </div>

            {/* Refined Segmented Progress Bar */}
            <div className="flex items-center gap-2.5 max-w-xs w-full px-4">
              {pillars.map((_, idx) => {
                const isActive = idx === activeIndex;
                const isPast = idx < activeIndex;
                return (
                  <button
                    key={idx}
                    onClick={() => goToCard(idx)}
                    aria-label={`Go to pillar 0${idx + 1}`}
                    className="relative flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden cursor-pointer group/seg focus:outline-none transition-all"
                  >
                    {/* Active Progress Fill */}
                    {isActive ? (
                      <div
                        className="h-full rounded-full bg-[#B7A38B] shadow-[0_0_10px_rgba(183,163,139,0.7)] transition-all duration-75 ease-linear"
                        style={{ width: `${progress}%` }}
                      />
                    ) : isPast ? (
                      <div className="h-full w-full rounded-full bg-[#B7A38B]/40" />
                    ) : (
                      <div className="h-full w-0 bg-transparent group-hover/seg:w-full group-hover/seg:bg-white/20 transition-all duration-300" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <ScrollReveal variant="up" delay={200}>
          <div style={{ marginTop: "32px", display: "flex", justifyContent: "center" }}>
            <a
              href="#solutions"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                border: "1.5px solid rgba(183,163,139,0.35)",
                color: "#B7A38B",
                padding: "13px 24px",
                borderRadius: "50px",
                fontSize: "13px",
                fontWeight: 500,
                fontFamily: "'Courier New', monospace",
                letterSpacing: "0.08em",
                textDecoration: "none",
                textTransform: "uppercase",
                transition: "background 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "rgba(183,163,139,0.10)";
                el.style.borderColor = "rgba(183,163,139,0.60)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "transparent";
                el.style.borderColor = "rgba(183,163,139,0.35)";
              }}
            >
              See All OPHRON Solutions →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
