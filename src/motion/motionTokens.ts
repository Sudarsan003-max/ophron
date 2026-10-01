/**
 * ==============================================================================
 * OPHRON MOTION DESIGN SYSTEM TOKENS (LAW 5)
 * ==============================================================================
 * Centralized motion tokens ensuring unified timing, easing language,
 * physical inertia, and travel distances across the entire platform.
 *
 * Caliber: Awwwards / FWA / Locomotive / Studio Freight
 */

export const MOTION_TOKENS = {
  // ── 1. DURATIONS ─────────────────────────────────────────────────────────────
  duration: {
    instant: 0.15,
    fast: 0.4,       // Micro-interactions, icons, active indicators
    base: 0.7,       // Standard element entrances, cards, text blocks
    slow: 1.1,       // Hero headlines, master section transitions, curtains
    deliberate: 1.4, // Ambient parallax sweeps, deep section handoffs
  },

  // ── 2. EASING LANGUAGE ───────────────────────────────────────────────────────
  // No bounce. No elastic. Pure physical luxury deceleration & acceleration.
  ease: {
    // Entrances (rapid start, buttery smooth deceleration to rest)
    enter: "power3.out",
    enterExpo: "expo.out",
    enterQuint: "quint.out",

    // Exits & Dismissals (smooth acceleration out of frame)
    exit: "power2.in",

    // Symmetrical / Anchor Glides (continuous fluid travel)
    inOut: "power3.inOut",
    inOutExpo: "expo.inOut",

    // Continuous Scroll-linked Scrub (linear translation)
    linear: "none",
  },

  // ── 3. TRAVEL DISTANCES ──────────────────────────────────────────────────────
  // Scaled automatically by device screen size & reduced-motion preferences.
  distance: {
    xs: 20, // Micro tags, inline pills
    sm: 40, // Standard badges, small buttons
    md: 60, // Section headlines, paragraph blocks
    lg: 90, // Cards, split columns
    xl: 120, // Hero title entries, curtain reveals
  },

  // ── 4. STAGGER RHYTHMS ───────────────────────────────────────────────────────
  stagger: {
    tight: 0.06,  // Split-word typography, character matrices
    card: 0.09,   // Service cards, feature grids, testimonial columns
    loose: 0.14,  // Major section pillars, distinct sequential blocks
  },

  // ── 5. SMOOTH SCROLL INERTIA (LENIS CONFIG) ──────────────────────────────────
  scroll: {
    lerp: 0.082,        // Damped, weighted physical inertia (glass with viscosity)
    duration: 1.15,     // Duration fallback
    wheelMultiplier: 0.92,
    touchMultiplier: 1.1,
    headerOffset: -70,  // Fixed header clearance
    triggerHook: "top 82%", // 18% viewport entry trigger point
  },

  // ── 6. DEVICE & ACCESSIBILITY GUARDS ─────────────────────────────────────────
  mobileScale: 0.60, // 40% reduction in travel distance on mobile (< 768px)
} as const;

export type MotionTokens = typeof MOTION_TOKENS;
