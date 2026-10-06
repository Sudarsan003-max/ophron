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
 * UNIFIED HIGH-PERFORMANCE SCROLL & MOTION ENGINE
 * ==============================================================================
 * Ultra-optimized 60/120fps engine. Uses native hardware scrolling on mobile touch
 * devices and buttery-smooth lightweight Lenis inertia on desktop.
 */
export function initScrollEngine(): {
  lenis: Lenis | null;
  destroy: () => void;
  scrollTo: (target: string | HTMLElement | number, offset?: number) => void;
} {
  if (typeof window === "undefined") {
    return {
      lenis: null,
      destroy: () => {},
      scrollTo: () => {},
    };
  }

  // Prevent duplicate initialization
  if (lenisInstance) {
    return {
      lenis: lenisInstance,
      destroy: destroyScrollEngine,
      scrollTo: scrollToElement,
    };
  }

  const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isTouchMobile = window.innerWidth < 768 || "ontouchstart" in window;

  // On mobile touch devices, use native hardware scroll for 0ms latency and 120Hz responsiveness
  if (isTouchMobile || isReduced) {
    return {
      lenis: null,
      destroy: () => {},
      scrollTo: scrollToElement,
    };
  }

  // 1. Initialize Lenis for desktop
  const lenis = new Lenis({
    duration: MOTION_TOKENS.scroll.duration,
    easing: (t) => 1 - Math.pow(1 - t, 3), // cubic ease-out
    orientation: "vertical",
    gestureOrientation: "vertical",
    smoothWheel: true,
    wheelMultiplier: MOTION_TOKENS.scroll.wheelMultiplier,
    touchMultiplier: 0, // Never hijack touch on mobile
    infinite: false,
    autoResize: true,
  });

  lenisInstance = lenis;
  (window as any).__lenis = lenis;

  // 2. Synchronize Lenis scroll updates with GSAP ScrollTrigger
  lenis.on("scroll", ScrollTrigger.update);

  // 3. Single Unified RAF Loop
  tickerFn = (time: number) => {
    lenis.raf(time * 1000);
  };
  gsap.ticker.add(tickerFn);
  gsap.ticker.lagSmoothing(500, 33); // Smooth out any frame spikes

  // 4. Global Resize / Orientation Watcher
  const handleResize = () => {
    lenis.resize();
    ScrollTrigger.refresh();
  };
  window.addEventListener("resize", handleResize);

  return {
    lenis,
    destroy: () => {
      window.removeEventListener("resize", handleResize);
      destroyScrollEngine();
    },
    scrollTo: scrollToElement,
  };
}

/**
 * Programmatic Smooth Glide to target element
 */
export function scrollToElement(target: string | HTMLElement | number, offset = -70, duration = 0.6) {
  if (!lenisInstance) {
    if (typeof target === "number") {
      window.scrollTo({ top: target, behavior: "smooth" });
    } else if (typeof target === "string") {
      const el = document.querySelector(target);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY + offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    } else if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    return;
  }

  lenisInstance.scrollTo(target, {
    offset,
    duration,
    easing: (t) => 1 - Math.pow(1 - t, 3),
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
