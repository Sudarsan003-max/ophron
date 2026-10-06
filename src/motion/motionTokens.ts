/**
 * ==============================================================================
 * OPHRON MOTION DESIGN SYSTEM TOKENS
 * ==============================================================================
 * Optimized high-performance motion tokens for ultra-fluid 60/120fps scrolling.
 */

export const MOTION_TOKENS = {
  // ── 1. DURATIONS ─────────────────────────────────────────────────────────────
  duration: {
    instant: 0.1,
    fast: 0.25,      // Micro-interactions, active indicators
    base: 0.45,      // Standard element entrances, cards, text blocks
    slow: 0.7,       // Headlines, section reveals
    deliberate: 0.9, // Deep section handoffs
  },

  // ── 2. EASING LANGUAGE ───────────────────────────────────────────────────────
  ease: {
    enter: "power2.out",
    enterExpo: "expo.out",
    enterQuint: "quint.out",
    exit: "power2.in",
    inOut: "power2.inOut",
    inOutExpo: "expo.inOut",
    linear: "none",
  },

  // ── 3. TRAVEL DISTANCES ──────────────────────────────────────────────────────
  distance: {
    xs: 12,
    sm: 24,
    md: 36,
    lg: 48,
    xl: 60,
  },

  // ── 4. STAGGER RHYTHMS ───────────────────────────────────────────────────────
  stagger: {
    tight: 0.04,
    card: 0.06,
    loose: 0.09,
  },

  // ── 5. SMOOTH SCROLL INERTIA (LENIS CONFIG) ──────────────────────────────────
  scroll: {
    lerp: 0.12,          // Responsive, snappy fluid scroll without drag
    duration: 0.75,      // Fast response
    wheelMultiplier: 1.15,
    touchMultiplier: 1.0,
    headerOffset: -70,
    triggerHook: "top 88%", // Trigger reveals early so user doesn't wait
  },

  // ── 6. RESPONSIVE SCALE FACTORS ──────────────────────────────────────────────
  mobileScale: 0.5,
};
