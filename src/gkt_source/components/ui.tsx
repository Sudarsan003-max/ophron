import { useCallback, useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "../utils/cn";

/* ------------------------------------------------------------------ */
/*  Motion primitives                                                  */
/* ------------------------------------------------------------------ */

export const reducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function useInView<T extends HTMLElement = HTMLDivElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export function Reveal({
  children,
  delay = 0,
  dir,
  className,
}: {
  children: ReactNode;
  delay?: number;
  dir?: "left" | "right";
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={cn("rv", dir && `rv-${dir}`, inView && "in-view", className)}
      style={{ "--rv-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}

export function MaskText({
  lines,
  className,
  step = 120,
}: {
  lines: ReactNode[];
  className?: string;
  step?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  return (
    <div ref={ref} className={cn(inView && "in-view", className)}>
      {lines.map((line, i) => (
        <span key={i} className="mask-line" style={{ "--ml-delay": `${i * step}ms` } as CSSProperties}>
          <span>{line}</span>
        </span>
      ))}
    </div>
  );
}

export function CountUp({
  to,
  suffix = "",
  duration = 1600,
  className,
}: {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.5);
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    if (reducedMotion()) {
      setVal(to);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      setVal(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);
  return (
    <span ref={ref} className={className}>
      {val}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Typography primitives                                              */
/* ------------------------------------------------------------------ */

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 font-mono text-[11px] font-medium tracking-[0.32em] uppercase",
        light ? "text-brass-300" : "text-brass",
      )}
    >
      <Icon.Diamond className="h-2 w-2" />
      {children}
    </p>
  );
}

export function SectionHead({
  index,
  eyebrow,
  lines,
  lead,
  light = false,
  center = false,
  className,
}: {
  index: string;
  eyebrow: string;
  lines: (string | ReactNode)[];
  lead?: string;
  light?: boolean;
  center?: boolean;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  return (
    <div ref={ref} className={cn("max-w-3xl", center && "mx-auto text-center flex flex-col items-center", inView && "in-view", className)}>
      <div className={cn("flex items-center gap-3 sm:gap-4", center && "justify-center")}>
        <span className={cn("font-mono text-xs tracking-[0.25em]", light ? "text-brass-300" : "text-brass")}>
          {index}
        </span>
        <Eyebrow light={light}>{eyebrow}</Eyebrow>
      </div>
      <MaskText
        lines={lines}
        className={cn(
          "mt-4 sm:mt-5 font-display text-2xl sm:text-4xl md:text-5xl leading-[1.08] sm:leading-[1.04] font-medium tracking-tight",
          light ? "text-paper" : "text-pine-950",
          center && "text-center",
        )}
      />
      <div className={cn("rule-grow mt-5 sm:mt-6 h-px w-20 sm:w-24", center ? "mx-auto" : "", light ? "bg-brass-300" : "bg-brass")} />
      {lead && (
        <p className={cn("mt-5 sm:mt-6 max-w-xl text-sm sm:text-base leading-relaxed", center && "mx-auto text-center", light ? "text-sage" : "text-pine-700/80")}>
          {lead}
        </p>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Buttons & links                                                    */
/* ------------------------------------------------------------------ */

export function BrassLink({
  to,
  href,
  children,
  light = false,
  className,
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  light?: boolean;
  className?: string;
}) {
  const cls = cn(
    "btn-sweep inline-flex items-center justify-center gap-3 px-6 py-3.5 sm:px-7 sm:py-4 font-mono text-[10.5px] sm:text-[11px] font-semibold tracking-[0.25em] sm:tracking-[0.28em] uppercase transition-all duration-300 active:scale-[0.98]",
    light
      ? "inv bg-transparent text-brass-300 border border-brass-300/60 hover:text-pine-950"
      : "bg-brass text-pine-950 hover:text-champagne",
    className,
  );
  const inner = (
    <>
      {children}
      <Icon.ArrowNE className="h-3.5 w-3.5" />
    </>
  );
  if (to)
    return (
      <Link to={to} className={cls}>
        {inner}
      </Link>
    );
  return (
    <a href={href} className={cls} target={href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
      {inner}
    </a>
  );
}

export function GhostLink({
  to,
  href,
  children,
  light = true,
  className,
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  light?: boolean;
  className?: string;
}) {
  const cls = cn(
    "u-sweep inline-flex items-center gap-3 py-2 font-mono text-[11px] font-semibold tracking-[0.28em] uppercase",
    light ? "text-paper" : "text-pine-950",
    className,
  );
  const inner = (
    <>
      {children}
      <Icon.ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
    </>
  );
  if (to)
    return (
      <Link to={to} className={cn("group", cls)}>
        {inner}
      </Link>
    );
  return (
    <a href={href} className={cn("group", cls)}>
      {inner}
    </a>
  );
}

/* ------------------------------------------------------------------ */
/*  Parallax hook                                                       */
/* ------------------------------------------------------------------ */

export function useParallax(speed = 0.08) {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion()) return;
    let raf = 0;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const viewH = window.innerHeight;
      // Only compute when visible
      if (rect.bottom > 0 && rect.top < viewH) {
        const center = rect.top + rect.height / 2;
        const offset = (center - viewH / 2) * speed;
        el.style.setProperty("--parallax", `${offset}px`);
      }
      raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, [speed]);
  return ref;
}

/* ------------------------------------------------------------------ */
/*  3D Card Tilt hook                                                   */
/* ------------------------------------------------------------------ */

export function useCardTilt(maxAngle = 3) {
  const ref = useRef<HTMLDivElement | null>(null);

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el || reducedMotion()) return;
      // Disabled on touch
      if ("ontouchstart" in window) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.setProperty("--rotateY", `${x * maxAngle}deg`);
      el.style.setProperty("--rotateX", `${-y * maxAngle}deg`);
    },
    [maxAngle],
  );

  const onMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rotateY", "0deg");
    el.style.setProperty("--rotateX", "0deg");
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}

/* ------------------------------------------------------------------ */
/*  Section-level fade entrance                                         */
/* ------------------------------------------------------------------ */

export function SectionFade({
  children,
  className,
  as: Tag = "section",
}: {
  children: ReactNode;
  className?: string;
  as?: "section" | "div";
}) {
  const { ref, inView } = useInView<HTMLElement>(0.08);
  return (
    <Tag
      ref={ref as React.Ref<HTMLElement>}
      className={cn("section-fade", inView && "in-view", className)}
    >
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------------------ */
/*  Clip-path image reveal                                              */
/* ------------------------------------------------------------------ */

export function ImageReveal({
  children,
  direction = "right",
  className,
}: {
  children: ReactNode;
  direction?: "right" | "up";
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);
  return (
    <div
      ref={ref}
      className={cn(
        "img-reveal",
        direction === "up" && "img-reveal-up",
        inView && "in-view",
        className,
      )}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Button ripple handler                                               */
/* ------------------------------------------------------------------ */

export function useBtnRipple() {
  return useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--ripple-x", `${x}%`);
    el.style.setProperty("--ripple-y", `${y}%`);
  }, []);
}

/* ------------------------------------------------------------------ */
/*  Custom inline icon set                                             */
/* ------------------------------------------------------------------ */

type IconProps = { className?: string };

export const Icon = {
  Diamond: ({ className }: IconProps) => (
    <svg viewBox="0 0 10 10" className={className} fill="currentColor" aria-hidden="true">
      <path d="M5 0l5 5-5 5L0 5z" />
    </svg>
  ),
  ArrowNE: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M7 17L17 7M9 7h8v8" strokeLinecap="square" />
    </svg>
  ),
  ArrowRight: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M4 12h16m0 0l-6-6m6 6l-6 6" strokeLinecap="square" />
    </svg>
  ),
  ArrowLeft: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M20 12H4m0 0l6-6m-6 6l6 6" strokeLinecap="square" />
    </svg>
  ),
  Phone: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path
        d="M5 4h4l1.5 4.5L8 10.5a12 12 0 005.5 5.5l2-2.5L20 15v4a1.5 1.5 0 01-1.7 1.5C10.6 19.6 4.4 13.4 3.5 5.7A1.5 1.5 0 015 4z"
        strokeLinejoin="round"
      />
    </svg>
  ),
  WhatsApp: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 3.2a8.8 8.8 0 00-7.6 13.2L3.2 20.8l4.5-1.2A8.8 8.8 0 1012 3.2z" strokeLinejoin="round" />
      <path
        d="M9 8.4c.3-.7 1.4-.7 1.7 0l.6 1.2c.2.3.1.7-.1 1l-.5.5c.5 1 1.3 1.8 2.3 2.3l.5-.5c.3-.3.7-.3 1-.1l1.2.6c.7.3.7 1.4 0 1.7-3.3 1.5-8-3.2-6.7-6.7z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  ),
  Mail: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="13" />
      <path d="M4 6.5l8 6.5 8-6.5" strokeLinejoin="round" />
    </svg>
  ),
  Pin: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0113 0c0 5-6.5 11-6.5 11z" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.3" />
    </svg>
  ),
  Clock: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" strokeLinecap="square" />
    </svg>
  ),
  Plus: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 5v14M5 12h14" strokeLinecap="square" />
    </svg>
  ),
  Check: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M4.5 12.5l5 5L19.5 7" strokeLinecap="square" />
    </svg>
  ),
  Shield: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 3l7 2.8v5.4c0 4.6-3 7.9-7 9.8-4-1.9-7-5.2-7-9.8V5.8L12 3z" strokeLinejoin="round" />
      <path d="M8.8 12l2.2 2.2 4.2-4.4" strokeLinecap="square" />
    </svg>
  ),
  Spray: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M9 9h6l1 12H8L9 9zM10.5 9V6.5h3V9M10 4h4" strokeLinejoin="round" />
      <path d="M17.5 5.5l2-1M18 8h2.3M17.5 10.5l2 1" strokeLinecap="square" />
    </svg>
  ),
  Flame: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path
        d="M12 21c3.5 0 6-2.2 6-5.8 0-2.8-1.8-4.6-2.8-6.4-.5 1.8-1.8 2.6-1.8 4.2 0-2.6-1.2-4.6-3-6.7-2 2.8-4.4 5.1-4.4 8.4 0 3.6 2.5 6.3 6 6.3z"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Droplet: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 3.3c3 4.1 6.2 7.6 6.2 11.2a6.2 6.2 0 01-12.4 0c0-3.6 3.2-7.1 6.2-11.2z" strokeLinejoin="round" />
    </svg>
  ),
  Users: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <circle cx="9" cy="8.2" r="2.7" />
      <path d="M3.8 19c0-2.9 2.3-4.6 5.2-4.6s5.2 1.7 5.2 4.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="16.6" cy="8.7" r="2" />
      <path d="M14.6 14.9c.7-.3 1.4-.5 2.3-.5 2.4 0 4.3 1.5 4.3 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Cutlery: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M7 3v5.5M9.5 3v5.5M12 3v5.5M9.5 8.5V21" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17.3 3c-1.8 0-2.8 1.9-2.8 4.2s1 3.8 2.8 4V21" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Clipboard: ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="5.5" y="4.5" width="13" height="16" rx="1" strokeLinejoin="round" />
      <path d="M9 4.5v-1a1 1 0 011-1h4a1 1 0 011 1v1" strokeLinejoin="round" />
      <path d="M8.5 11h7M8.5 14.5h7M8.5 18h4.5" strokeLinecap="round" />
    </svg>
  ),
};

export type IconName = keyof typeof Icon;
