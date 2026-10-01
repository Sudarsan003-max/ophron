import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MOTION_TOKENS } from "./motionTokens";

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

let lenisInstance: Lenis | null = null;
let tickerFn: ((time: number) => void) | null = null;

/**
 * ==============================================================================
 * UNIFIED SCROLL & MOTION ENGINE (LAW 1)
 * ==============================================================================
 * Locks Lenis inertial smooth scrolling and GSAP ScrollTrigger to a single,
 * high-performance requestAnimationFrame ticker loop running at 60/120fps.
 */
export function initScrollEngine(): {
  lenis: Lenis;
  destroy: () => void;
  scrollTo: (target: string | HTMLElement | number, offset?: number) => void;
} {
  // Prevent duplicate initialization
  if (lenisInstance) {
    return {
      lenis: lenisInstance,
      destroy: destroyScrollEngine,
      scrollTo: scrollToElement,
    };
  }

  // 1. Initialize Lenis with weighted, physical glass-like inertia
  const isReduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const lenis = new Lenis({
    duration: isReduced ? 0 : MOTION_TOKENS.scroll.duration,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential Ease-Out
    orientation: "vertical",
    gestureOrientation: "vertical",
    smoothWheel: !isReduced,
    wheelMultiplier: MOTION_TOKENS.scroll.wheelMultiplier,
    touchMultiplier: MOTION_TOKENS.scroll.touchMultiplier,
    infinite: false,
    autoResize: true,
  });

  lenisInstance = lenis;
  (window as any).__lenis = lenis;

  // 2. Synchronize Lenis scroll updates with GSAP ScrollTrigger
  lenis.on("scroll", ScrollTrigger.update);

  // 3. Single Unified RAF Loop: GSAP ticker drives Lenis (No competing requestAnimationFrame calls!)
  tickerFn = (time: number) => {
    lenis.raf(time * 1000);
  };
  gsap.ticker.add(tickerFn);
  gsap.ticker.lagSmoothing(0); // Prevents frame drops / jumps during heavy CPU tasks

  // 4. Smooth Anchor Navigation Handler
  const handleAnchorClicks = (e: MouseEvent) => {
    const target = (e.target as HTMLElement)?.closest("a");
    if (!target) return;

    const href = target.getAttribute("href");
    if (!href || !href.startsWith("#") || href === "#") return;

    // Exceptions for specialized hash routes handled by app
    if (href === "#services" || href === "#mainframe" || href.includes("?")) return;

    const targetEl = document.querySelector(href);
    if (targetEl) {
      e.preventDefault();
      scrollToElement(targetEl as HTMLElement, MOTION_TOKENS.scroll.headerOffset);
      window.history.pushState(null, "", href);
    }
  };

  document.addEventListener("click", handleAnchorClicks);

  // 5. Global Resize / Orientation Watcher
  const handleResize = () => {
    lenis.resize();
    ScrollTrigger.refresh();
  };
  window.addEventListener("resize", handleResize);

  return {
    lenis,
    destroy: () => {
      document.removeEventListener("click", handleAnchorClicks);
      window.removeEventListener("resize", handleResize);
      destroyScrollEngine();
    },
    scrollTo: scrollToElement,
  };
}

/**
 * Programmatic Smooth Glide to target element with power3.inOut easing
 */
export function scrollToElement(target: string | HTMLElement | number, offset = -70, duration = 1.15) {
  if (!lenisInstance) {
    if (typeof target === "number") {
      window.scrollTo({ top: target, behavior: "smooth" });
    } else if (typeof target === "string") {
      const el = document.querySelector(target);
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      target?.scrollIntoView({ behavior: "smooth" });
    }
    return;
  }

  const isReduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  lenisInstance.scrollTo(target, {
    offset,
    duration: isReduced ? 0.01 : duration,
    easing: (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2, // power3.inOut
    immediate: isReduced,
  });
}

/**
 * Clean up engine on unmount
 */
export function destroyScrollEngine() {
  if (tickerFn) {
    gsap.ticker.remove(tickerFn);
    tickerFn = null;
  }
  if (lenisInstance) {
    lenisInstance.destroy();
    lenisInstance = null;
    delete (window as any).__lenis;
  }
}

/**
 * Lock scroll during modal display
 */
export function pauseSmoothScroll() {
  lenisInstance?.stop();
  document.body.style.overflow = "hidden";
}

/**
 * Resume scroll after modal dismissal
 */
export function resumeSmoothScroll() {
  document.body.style.overflow = "";
  lenisInstance?.start();
  lenisInstance?.resize();
  ScrollTrigger.refresh();
}
