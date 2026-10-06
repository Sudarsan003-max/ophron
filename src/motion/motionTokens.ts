/**
 * ==============================================================================
 * OPHRON MOTION DESIGN SYSTEM TOKENS
 * ==============================================================================
 * Ultra-fast, zero-latency motion tokens for 120fps smooth scrolling.
 */

export const MOTION_TOKENS = {
  // ── 1. DURATIONS (Snappy & Instant) ──────────────────────────────────────────
  duration: {
    instant: 0.05,
    fast: 0.15,     // Micro-interactions, active indicators
    base: 0.28,     // Standard element entrances, cards, text blocks
    slow: 0.42,     // Headlines, section reveals
    deliberate: 0.55, // Deep section handoffs
  },

  // ── 2. EASING LANGUAGE (Fast Expo Out for Instant Response) ───────────────────
  ease: {
    enter: "power3.out",
    enterExpo: "expo.out",
    enterQuint: "quint.out",
    exit: "power2.in",
    inOut: "power2.inOut",
    inOutExpo: "expo.inOut",
    linear: "none",
  },

  // ── 3. TRAVEL DISTANCES (Subtle, Crisp Micro-shifts) ─────────────────────────
  distance: {
    xs: 8,
    sm: 14,
    md: 18,
    lg: 24,
    xl: 32,
  },

  // ── 4. STAGGER RHYTHMS (Tight & Instant) ─────────────────────────────────────
  stagger: {
    tight: 0.02,
    card: 0.035,
    loose: 0.05,
  },

  // ── 5. SMOOTH SCROLL INERTIA (LENIS CONFIG - 0 LAG) ──────────────────────────
  scroll: {
    lerp: 0.14,           // Ultra-responsive direct tracking
    duration: 0.45,       // Snappy response
    wheelMultiplier: 1.0,
    touchMultiplier: 0,   // Never hijack touch on mobile
    headerOffset: -70,
    triggerHook: "top 98%", // Trigger reveals well before entering viewport
  },

  // ── 6. RESPONSIVE SCALE FACTORS ──────────────────────────────────────────────
  mobileScale: 0.3,
};
