import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MOTION_TOKENS } from "./motionTokens";

gsap.registerPlugin(ScrollTrigger);

/**
 * ==============================================================================
 * ULTRA-PERFORMANT MOTION SCANNER & REVEAL ENGINE
 * ==============================================================================
 * On mobile devices, uses lightweight native IntersectionObserver for zero layout-thrash
 * and buttery 120fps scrolling. On desktop, uses batch ScrollTriggers.
 */
export function initAutoReveals(): () => void {
  if (typeof window === "undefined") return () => {};

  const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isMobile = window.innerWidth < 768;

  // Reduced motion: reveal all instantly
  if (isReduced) {
    document.querySelectorAll(".scroll-reveal, .reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-down, .scroll-reveal-scale, .scroll-reveal-stagger, [data-reveal]").forEach((el) => {
      (el as HTMLElement).classList.add("in");
      (el as HTMLElement).style.opacity = "1";
      (el as HTMLElement).style.transform = "none";
    });
    return () => {};
  }

  // Lightweight mobile IntersectionObserver
  if (isMobile) {
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
        rootMargin: "0px 0px -50px 0px",
        threshold: 0.05,
      }
    );

    const elements = document.querySelectorAll(
      ".scroll-reveal:not(.in), .scroll-reveal-left:not(.in), .scroll-reveal-right:not(.in), .scroll-reveal-down:not(.in), .scroll-reveal-scale:not(.in), .scroll-reveal-stagger:not(.in), [data-reveal]:not(.in), .hr-expand:not(.in)"
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }

  // Desktop GSAP Context
  const ctx = gsap.context(() => {
    // 1. Standard Up Reveals
    const upEls = document.querySelectorAll<HTMLElement>(".scroll-reveal:not(.in), [data-reveal='up']");
    upEls.forEach((el) => {
      const dist = parseFloat(el.dataset.distance || "") || MOTION_TOKENS.distance.md;
      const delay = parseFloat(el.dataset.delay || "0");
      gsap.fromTo(
        el,
        { opacity: 0, y: dist },
        {
          opacity: 1,
          y: 0,
          duration: MOTION_TOKENS.duration.base,
          delay,
          ease: MOTION_TOKENS.ease.enter,
          scrollTrigger: {
            trigger: el,
            start: MOTION_TOKENS.scroll.triggerHook,
            once: true,
          },
          onComplete: () => el.classList.add("in"),
        }
      );
    });

    // 2. Left Reveals
    const leftEls = document.querySelectorAll<HTMLElement>(".scroll-reveal-left:not(.in), [data-reveal='left']");
    leftEls.forEach((el) => {
      const dist = parseFloat(el.dataset.distance || "") || MOTION_TOKENS.distance.lg;
      const delay = parseFloat(el.dataset.delay || "0");
      gsap.fromTo(
        el,
        { opacity: 0, x: -dist },
        {
          opacity: 1,
          x: 0,
          duration: MOTION_TOKENS.duration.base,
          delay,
          ease: MOTION_TOKENS.ease.enter,
          scrollTrigger: {
            trigger: el,
            start: MOTION_TOKENS.scroll.triggerHook,
            once: true,
          },
          onComplete: () => el.classList.add("in"),
        }
      );
    });

    // 3. Right Reveals
    const rightEls = document.querySelectorAll<HTMLElement>(".scroll-reveal-right:not(.in), [data-reveal='right']");
    rightEls.forEach((el) => {
      const dist = parseFloat(el.dataset.distance || "") || MOTION_TOKENS.distance.lg;
      const delay = parseFloat(el.dataset.delay || "0");
      gsap.fromTo(
        el,
        { opacity: 0, x: dist },
        {
          opacity: 1,
          x: 0,
          duration: MOTION_TOKENS.duration.base,
          delay,
          ease: MOTION_TOKENS.ease.enter,
          scrollTrigger: {
            trigger: el,
            start: MOTION_TOKENS.scroll.triggerHook,
            once: true,
          },
          onComplete: () => el.classList.add("in"),
        }
      );
    });

    // 4. Scale Reveals
    const scaleEls = document.querySelectorAll<HTMLElement>(".scroll-reveal-scale:not(.in), [data-reveal='scale']");
    scaleEls.forEach((el) => {
      const delay = parseFloat(el.dataset.delay || "0");
      gsap.fromTo(
        el,
        { opacity: 0, scale: 0.96, y: 15 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: MOTION_TOKENS.duration.slow,
          delay,
          ease: MOTION_TOKENS.ease.enter,
          scrollTrigger: {
            trigger: el,
            start: MOTION_TOKENS.scroll.triggerHook,
            once: true,
          },
          onComplete: () => el.classList.add("in"),
        }
      );
    });

    // 5. Stagger Containers
    const staggerContainers = document.querySelectorAll<HTMLElement>(".reveal-stagger, .scroll-reveal-stagger, [data-stagger]");
    staggerContainers.forEach((container) => {
      const childSelector = container.dataset.staggerChildren || ":scope > *";
      const children = container.querySelectorAll<HTMLElement>(childSelector);
      if (!children.length) return;

      const staggerTime = parseFloat(container.dataset.stagger || "") || MOTION_TOKENS.stagger.card;
      const dist = parseFloat(container.dataset.distance || "") || MOTION_TOKENS.distance.md;

      gsap.fromTo(
        children,
        { opacity: 0, y: dist },
        {
          opacity: 1,
          y: 0,
          duration: MOTION_TOKENS.duration.base,
          stagger: staggerTime,
          ease: MOTION_TOKENS.ease.enter,
          scrollTrigger: {
            trigger: container,
            start: MOTION_TOKENS.scroll.triggerHook,
            once: true,
          },
          onComplete: () => container.classList.add("in"),
        }
      );
    });

    // 6. Expanding Horizontal Rules
    const hrs = document.querySelectorAll<HTMLElement>(".hr-expand:not(.in)");
    hrs.forEach((hr) => {
      gsap.fromTo(
        hr,
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: MOTION_TOKENS.duration.slow,
          ease: MOTION_TOKENS.ease.enter,
          scrollTrigger: {
            trigger: hr,
            start: MOTION_TOKENS.scroll.triggerHook,
            once: true,
          },
          onComplete: () => hr.classList.add("in"),
        }
      );
    });
  });

  return () => ctx.revert();
}
