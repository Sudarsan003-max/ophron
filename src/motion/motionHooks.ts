import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MOTION_TOKENS } from "./motionTokens";

gsap.registerPlugin(ScrollTrigger);

// Helper to determine if animations should be simplified for accessibility
function isReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// Helper to scale distances down on mobile
function getDistanceMultiplier(): number {
  if (typeof window === "undefined") return 1;
  return window.innerWidth < 768 ? MOTION_TOKENS.mobileScale : 1;
}

/**
 * ==============================================================================
 * 1. DIRECTIONAL REVEAL HOOK (LAW 2)
 * ==============================================================================
 * Directional entrance with intentional rhythm:
 * - up:    y: 60 -> 0
 * - down:  y: -60 -> 0
 * - left:  x: -80 -> 0
 * - right: x: 80 -> 0
 * - scale: scale: 1.06 -> 1, y: 30 -> 0
 */
export function useDirectionalReveal<T extends HTMLElement = HTMLDivElement>(
  direction: "up" | "down" | "left" | "right" | "scale" = "up",
  options?: {
    delay?: number;
    duration?: number;
    triggerHook?: string;
    distance?: number;
    blur?: boolean;
    once?: boolean;
  }
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (isReducedMotion()) {
      gsap.set(el, { opacity: 1, x: 0, y: 0, scale: 1, filter: "none" });
      return;
    }

    const mult = getDistanceMultiplier();
    const baseDist = options?.distance ?? (direction === "left" || direction === "right" ? MOTION_TOKENS.distance.lg : MOTION_TOKENS.distance.md);
    const dist = baseDist * mult;
    const dur = options?.duration ?? MOTION_TOKENS.duration.base;
    const hook = options?.triggerHook ?? MOTION_TOKENS.scroll.triggerHook;

    let x = 0;
    let y = 0;
    let scale = 1;

    if (direction === "up") y = dist;
    else if (direction === "down") y = -dist;
    else if (direction === "left") x = -dist;
    else if (direction === "right") x = dist;
    else if (direction === "scale") {
      scale = 1.06;
      y = 30 * mult;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          x,
          y,
          scale,
          filter: options?.blur ? "blur(6px)" : "none",
          willChange: "transform, opacity",
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          filter: "none",
          duration: dur,
          delay: options?.delay ?? 0,
          ease: MOTION_TOKENS.ease.enter,
          scrollTrigger: {
            trigger: el,
            start: hook,
            once: options?.once ?? true,
          },
          onComplete: () => {
            gsap.set(el, { clearProps: "willChange" });
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [direction, options?.delay, options?.duration, options?.distance, options?.blur]);

  return ref;
}

/**
 * ==============================================================================
 * 2. STAGGER GRID & CARD REVEAL HOOK (LAW 2)
 * ==============================================================================
 * Staggers cards/items 0.09s apart smoothly as the container enters the viewport.
 */
export function useStaggerReveal<T extends HTMLElement = HTMLDivElement>(
  childSelector: string,
  options?: {
    stagger?: number;
    distance?: number;
    duration?: number;
    triggerHook?: string;
  }
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const items = container.querySelectorAll(childSelector);
    if (!items.length) return;

    if (isReducedMotion()) {
      gsap.set(items, { opacity: 1, y: 0 });
      return;
    }

    const mult = getDistanceMultiplier();
    const dist = (options?.distance ?? MOTION_TOKENS.distance.md) * mult;
    const staggerTime = options?.stagger ?? MOTION_TOKENS.stagger.card;
    const dur = options?.duration ?? MOTION_TOKENS.duration.base;
    const hook = options?.triggerHook ?? MOTION_TOKENS.scroll.triggerHook;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        {
          opacity: 0,
          y: dist,
          willChange: "transform, opacity",
        },
        {
          opacity: 1,
          y: 0,
          duration: dur,
          stagger: staggerTime,
          ease: MOTION_TOKENS.ease.enter,
          scrollTrigger: {
            trigger: container,
            start: hook,
            once: true,
          },
          onComplete: () => {
            gsap.set(items, { clearProps: "willChange" });
          },
        }
      );
    }, container);

    return () => ctx.revert();
  }, [childSelector, options?.stagger, options?.distance, options?.duration]);

  return ref;
}

/**
 * ==============================================================================
 * 3. SCROLL-LINKED PARALLAX HOOK (LAW 3)
 * ==============================================================================
 * Moves media / decorative shapes 10-25% relative to scroll progress.
 */
export function useScrollLinkedParallax<T extends HTMLElement = HTMLDivElement>(
  speed = 0.15, // 0.1 to 0.25
  direction: "vertical" | "horizontal" = "vertical"
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || isReducedMotion()) return;

    const mult = getDistanceMultiplier();
    const travel = 100 * speed * mult;

    const ctx = gsap.context(() => {
      if (direction === "vertical") {
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
      } else {
        gsap.fromTo(
          el,
          { x: -travel },
          {
            x: travel,
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement || el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }
    }, el);

    return () => ctx.revert();
  }, [speed, direction]);

  return ref;
}

/**
 * ==============================================================================
 * 4. MASTER SECTION CHOREOGRAPHY HOOK (LAW 2 & 4)
 * ==============================================================================
 * Orchestrates Heading (up) -> Body Text (left/right) -> Image (opposite) -> CTA (delayed)
 * in deliberate, overlapping master timeline sequence.
 */
export function useSectionChoreography<T extends HTMLElement = HTMLElement>(options?: {
  headingSelector?: string;
  textSelector?: string;
  imageSelector?: string;
  ctaSelector?: string;
  cardsSelector?: string;
  textDirection?: "left" | "right";
  triggerHook?: string;
}) {
  const sectionRef = useRef<T>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const heading = section.querySelector(options?.headingSelector || "h2, h1, .section-heading");
    const text = section.querySelector(options?.textSelector || "p, .section-text");
    const image = section.querySelector(options?.imageSelector || "img, .section-image, .curtain-reveal-container");
    const cta = section.querySelector(options?.ctaSelector || "a.btn, button.btn, .section-cta");
    const cards = options?.cardsSelector ? section.querySelectorAll(options.cardsSelector) : null;

    if (isReducedMotion()) {
      const all = [heading, text, image, cta, ...(cards ? Array.from(cards) : [])].filter(Boolean);
      gsap.set(all, { opacity: 1, x: 0, y: 0, scale: 1 });
      return;
    }

    const mult = getDistanceMultiplier();
    const textDir = options?.textDirection || "left";
    const textX = (textDir === "left" ? -80 : 80) * mult;
    const imgX = (textDir === "left" ? 90 : -90) * mult;
    const hook = options?.triggerHook || MOTION_TOKENS.scroll.triggerHook;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: hook,
          once: true,
        },
      });

      // 1. Heading rises with optional subtle de-blur
      if (heading) {
        tl.fromTo(
          heading,
          { opacity: 0, y: 50 * mult, filter: "blur(6px)" },
          { opacity: 1, y: 0, filter: "none", duration: MOTION_TOKENS.duration.base, ease: MOTION_TOKENS.ease.enter }
        );
      }

      // 2. Body Text glides from chosen side
      if (text) {
        tl.fromTo(
          text,
          { opacity: 0, x: textX },
          { opacity: 1, x: 0, duration: MOTION_TOKENS.duration.base, ease: MOTION_TOKENS.ease.enter },
          "-=0.45" // deliberate overlap
        );
      }

      // 3. Image slides from opposite side with scale decompression
      if (image) {
        tl.fromTo(
          image,
          { opacity: 0, x: imgX, scale: 1.05 },
          { opacity: 1, x: 0, scale: 1, duration: MOTION_TOKENS.duration.slow, ease: MOTION_TOKENS.ease.enter },
          "-=0.55"
        );
      }

      // 4. Staggered Cards (if present)
      if (cards && cards.length) {
        tl.fromTo(
          cards,
          { opacity: 0, y: 45 * mult },
          { opacity: 1, y: 0, duration: MOTION_TOKENS.duration.base, stagger: MOTION_TOKENS.stagger.card, ease: MOTION_TOKENS.ease.enter },
          "-=0.4"
        );
      }

      // 5. CTA Button slides up last
      if (cta) {
        tl.fromTo(
          cta,
          { opacity: 0, y: 35 * mult },
          { opacity: 1, y: 0, duration: MOTION_TOKENS.duration.base, ease: MOTION_TOKENS.ease.enter },
          "-=0.35"
        );
      }
    }, section);

    return () => ctx.revert();
  }, [
    options?.headingSelector,
    options?.textSelector,
    options?.imageSelector,
    options?.ctaSelector,
    options?.cardsSelector,
    options?.textDirection,
  ]);

  return sectionRef;
}

/**
 * ==============================================================================
 * 5. PINNED SHOWCASE HOOK (LAW 3)
 * ==============================================================================
 * Pins container while scrolling through slides/stages.
 */
export function usePinnedShowcase<T extends HTMLElement = HTMLDivElement>(
  pinDuration = "200%"
) {
  const containerRef = useRef<T>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || isReducedMotion() || window.innerWidth < 1024) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el,
        start: "top top",
        end: `+=${pinDuration}`,
        pin: true,
        scrub: 0.5,
        anticipatePin: 1,
      });
    }, el);

    return () => ctx.revert();
  }, [pinDuration]);

  return containerRef;
}
