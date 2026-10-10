import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * ==============================================================================
 * ULTRA-PERFORMANT PROACTIVE MOTION SCANNER & REVEAL ENGINE
 * ==============================================================================
 * Proactively reveals elements 350px before entering viewport so content is instantly
 * visible when scrolling with zero lag or pop-in delay.
 */
export function initAutoReveals(): () => void {
  if (typeof window === "undefined") return () => {};

  const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isTouchMobile =
    window.innerWidth < 768 ||
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0;

  // On mobile or reduced motion: reveal all instantly with 0ms delay
  if (isReduced || isTouchMobile) {
    document
      .querySelectorAll(
        ".scroll-reveal, .reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-down, .scroll-reveal-scale, .scroll-reveal-stagger, [data-reveal], .hr-expand"
      )
      .forEach((el) => {
        (el as HTMLElement).classList.add("in");
        (el as HTMLElement).style.opacity = "1";
        (el as HTMLElement).style.transform = "none";
      });
    return () => {};
  }

  // Lightweight proactive desktop/tablet IntersectionObserver (350px anticipation margin)
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: "350px 0px 150px 0px",
      threshold: 0,
    }
  );

  const elements = document.querySelectorAll(
    ".scroll-reveal:not(.in), .scroll-reveal-left:not(.in), .scroll-reveal-right:not(.in), .scroll-reveal-down:not(.in), .scroll-reveal-scale:not(.in), .scroll-reveal-stagger:not(.in), [data-reveal]:not(.in), .hr-expand:not(.in)"
  );

  elements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}
