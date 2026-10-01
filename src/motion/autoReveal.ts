import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MOTION_TOKENS } from "./motionTokens";

gsap.registerPlugin(ScrollTrigger);

/**
 * ==============================================================================
 * AUTOMATIC MOTION SCANNER & ATTACHER (LAW 2 & 6)
 * ==============================================================================
 * Scans the DOM for motion classes & data attributes and attaches GSAP ScrollTrigger
 * animations with unified easing, single RAF integration, and zero layout thrash.
 */
export function initAutoReveals(): () => void {
  if (typeof window === "undefined") return () => {};

  const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isMobile = window.innerWidth < 768;
  const mult = isMobile ? MOTION_TOKENS.mobileScale : 1;

  // Reduced motion: reveal all instantly
  if (isReduced) {
    document.querySelectorAll(".scroll-reveal, .reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-down, .scroll-reveal-scale, .scroll-reveal-stagger, [data-reveal]").forEach((el) => {
      (el as HTMLElement).style.opacity = "1";
      (el as HTMLElement).style.transform = "none";
    });
    return () => {};
  }

  const ctx = gsap.context(() => {
    // 1. Standard Up Reveals (.scroll-reveal, [data-reveal="up"])
    const upEls = document.querySelectorAll<HTMLElement>(".scroll-reveal:not(.in), [data-reveal='up']");
    upEls.forEach((el) => {
      const dist = (parseFloat(el.dataset.distance || "") || MOTION_TOKENS.distance.md) * mult;
      const delay = parseFloat(el.dataset.delay || "0");
      gsap.fromTo(
        el,
        { opacity: 0, y: dist, willChange: "transform, opacity" },
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
          onComplete: () => {
            el.classList.add("in");
            gsap.set(el, { clearProps: "willChange" });
          },
        }
      );
    });

    // 2. Left Reveals (.scroll-reveal-left, [data-reveal="left"])
    const leftEls = document.querySelectorAll<HTMLElement>(".scroll-reveal-left:not(.in), [data-reveal='left']");
    leftEls.forEach((el) => {
      const dist = (parseFloat(el.dataset.distance || "") || MOTION_TOKENS.distance.lg) * mult;
      const delay = parseFloat(el.dataset.delay || "0");
      gsap.fromTo(
        el,
        { opacity: 0, x: -dist, willChange: "transform, opacity" },
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
          onComplete: () => {
            el.classList.add("in");
            gsap.set(el, { clearProps: "willChange" });
          },
        }
      );
    });

    // 3. Right Reveals (.scroll-reveal-right, [data-reveal="right"])
    const rightEls = document.querySelectorAll<HTMLElement>(".scroll-reveal-right:not(.in), [data-reveal='right']");
    rightEls.forEach((el) => {
      const dist = (parseFloat(el.dataset.distance || "") || MOTION_TOKENS.distance.lg) * mult;
      const delay = parseFloat(el.dataset.delay || "0");
      gsap.fromTo(
        el,
        { opacity: 0, x: dist, willChange: "transform, opacity" },
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
          onComplete: () => {
            el.classList.add("in");
            gsap.set(el, { clearProps: "willChange" });
          },
        }
      );
    });

    // 4. Down Reveals (.scroll-reveal-down, [data-reveal="down"])
    const downEls = document.querySelectorAll<HTMLElement>(".scroll-reveal-down:not(.in), [data-reveal='down']");
    downEls.forEach((el) => {
      const dist = (parseFloat(el.dataset.distance || "") || MOTION_TOKENS.distance.md) * mult;
      const delay = parseFloat(el.dataset.delay || "0");
      gsap.fromTo(
        el,
        { opacity: 0, y: -dist, willChange: "transform, opacity" },
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
          onComplete: () => {
            el.classList.add("in");
            gsap.set(el, { clearProps: "willChange" });
          },
        }
      );
    });

    // 5. Scale Reveals (.scroll-reveal-scale, [data-reveal="scale"])
    const scaleEls = document.querySelectorAll<HTMLElement>(".scroll-reveal-scale:not(.in), [data-reveal='scale']");
    scaleEls.forEach((el) => {
      const delay = parseFloat(el.dataset.delay || "0");
      gsap.fromTo(
        el,
        { opacity: 0, scale: 0.94, y: 20 * mult, willChange: "transform, opacity" },
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
          onComplete: () => {
            el.classList.add("in");
            gsap.set(el, { clearProps: "willChange" });
          },
        }
      );
    });

    // 6. Stagger Containers (.reveal-stagger, .scroll-reveal-stagger, [data-stagger])
    const staggerContainers = document.querySelectorAll<HTMLElement>(".reveal-stagger, .scroll-reveal-stagger, [data-stagger]");
    staggerContainers.forEach((container) => {
      const childSelector = container.dataset.staggerChildren || ":scope > *";
      const children = container.querySelectorAll<HTMLElement>(childSelector);
      if (!children.length) return;

      const staggerTime = parseFloat(container.dataset.stagger || "") || MOTION_TOKENS.stagger.card;
      const dist = (parseFloat(container.dataset.distance || "") || MOTION_TOKENS.distance.md) * mult;

      gsap.fromTo(
        children,
        { opacity: 0, y: dist, willChange: "transform, opacity" },
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
          onComplete: () => {
            container.classList.add("in");
            gsap.set(children, { clearProps: "willChange" });
          },
        }
      );
    });

    // 7. Scroll-Linked Parallax Layers ([data-parallax])
    if (!isMobile) {
      const parallaxEls = document.querySelectorAll<HTMLElement>("[data-parallax]");
      parallaxEls.forEach((el) => {
        const speed = parseFloat(el.dataset.parallax || "0.15");
        const travel = 100 * speed;
        gsap.fromTo(
          el,
          { y: -travel },
          {
            y: travel,
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement || el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
    }

    // 8. Expanding Horizontal Rules (.hr-expand)
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
