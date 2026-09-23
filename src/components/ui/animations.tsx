import React, { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/*  1. ANIMATED NUMBER COUNTER HOOK & COMPONENT                       */
/*  requestAnimationFrame with cubic-bezier ease-out (60fps)           */
/* ------------------------------------------------------------------ */

export function useCountUp(endVal: number, duration = 1800, start = false, decimals = 0) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    // Check for reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(endVal);
      return;
    }

    let startTimestamp: number | null = null;
    let animFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Cubic ease out: 1 - (1 - x)^3
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = easeProgress * endVal;

      setCount(Number(currentVal.toFixed(decimals)));

      if (progress < 1) {
        animFrameId = requestAnimationFrame(step);
      } else {
        setCount(endVal);
      }
    };

    animFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animFrameId);
  }, [endVal, duration, start, decimals]);

  return count;
}

export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1800,
  className = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const count = useCountUp(value, duration, isVisible, decimals);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  2. MASKED SPLIT-LINE HEADLINE REVEAL                              */
/*  Line-by-line slide-up from overflow: hidden mask (translateY 112%) */
/* ------------------------------------------------------------------ */

export function MaskedHeadline({
  lines,
  as: Component = "h2",
  className = "",
  lineClassName = "",
  staggerMs = 120,
}: {
  lines: (string | React.ReactNode)[];
  as?: React.ElementType;
  className?: string;
  lineClassName?: string;
  staggerMs?: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const [isIn, setIsIn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIn(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Component ref={ref} className={`split-line-headline ${isIn ? "in" : ""} ${className}`}>
      {lines.map((line, idx) => (
        <span key={idx} className="block overflow-hidden py-0.5">
          <span
            className={`split-line-inner block ${lineClassName}`}
            style={{
              transitionDelay: `${idx * staggerMs}ms`,
            }}
          >
            {line}
          </span>
        </span>
      ))}
    </Component>
  );
}

/* ------------------------------------------------------------------ */
/*  3. VIEWPORT SCROLL REVEAL WRAPPER                                 */
/*  Smooth fade & translate (up, down, left, right, scale, stagger)   */
/* ------------------------------------------------------------------ */

export function ScrollReveal({
  children,
  variant = "up",
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  variant?: "up" | "down" | "left" | "right" | "scale" | "stagger";
  delay?: number;
  className?: string;
  as?: React.ElementType;
}) {
  const ref = useRef<HTMLElement>(null);
  const [isIn, setIsIn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIn(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -30px 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const variantClass =
    variant === "left"
      ? "scroll-reveal-left"
      : variant === "right"
      ? "scroll-reveal-right"
      : variant === "down"
      ? "scroll-reveal-down"
      : variant === "scale"
      ? "scroll-reveal-scale"
      : variant === "stagger"
      ? "scroll-reveal-stagger"
      : "scroll-reveal";

  return (
    <Tag
      ref={ref}
      className={`${variantClass} ${isIn ? "in" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------------------ */
/*  4. HORIZONTAL EXPANDING RULE (scaleX 0 -> 1)                      */
/* ------------------------------------------------------------------ */

export function ExpandRule({
  className = "border-[#B7A38B]/30 my-8",
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLHRElement>(null);
  const [isIn, setIsIn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIn(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <hr
      ref={ref}
      className={`hr-expand ${isIn ? "in" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  5. INTERACTIVE 3D PERSPECTIVE TILT CARD                           */
/*  Gyro mouse tracking with specular spotlight gradient              */
/* ------------------------------------------------------------------ */

export function TiltCard({
  children,
  className = "",
  maxTilt = 9,
  spotlight = true,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  spotlight?: boolean;
  onClick?: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");
  const [glow, setGlow] = useState({ x: 50, y: 50, opacity: 0 });
  const rafId = useRef<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    
    if (rafId.current) cancelAnimationFrame(rafId.current);
    
    const clientX = e.clientX;
    const clientY = e.clientY;

    rafId.current = requestAnimationFrame(() => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = (clientX - rect.left) / rect.width; // 0 to 1
      const y = (clientY - rect.top) / rect.height; // 0 to 1

      const tiltX = (y - 0.5) * -maxTilt;
      const tiltY = (x - 0.5) * maxTilt;

      setTransform(`perspective(1000px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) translateZ(6px)`);
      if (spotlight) {
        setGlow({ x: Math.round(x * 100), y: Math.round(y * 100), opacity: 1 });
      }
    });
  };

  const handleMouseLeave = () => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)");
    setGlow((prev) => ({ ...prev, opacity: 0 }));
  };

  useEffect(() => {
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`tilt-card-container relative transition-transform duration-300 ease-out will-change-transform ${className}`}
      style={{
        transform: transform || undefined,
        transformStyle: "preserve-3d",
      }}
    >
      {spotlight && (
        <div
          className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] transition-opacity duration-500"
          style={{
            opacity: glow.opacity,
            background: `radial-gradient(circle 350px at ${glow.x}% ${glow.y}%, rgba(183, 163, 139,0.18), transparent 70%)`,
          }}
        />
      )}
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  6. CORNER REGISTRATION BRACKETS                                   */
/*  Expanding metallic corner accents on image/card containers        */
/* ------------------------------------------------------------------ */

export function CornerBrackets({
  color = "#B7A38B",
  size = 14,
  hoverSize = 22,
  thickness = 2,
  className = "",
}: {
  color?: string;
  size?: number;
  hoverSize?: number;
  thickness?: number;
  className?: string;
}) {
  return (
    <div className={`corner-brackets-layer pointer-events-none absolute inset-0 z-20 ${className}`}>
      {/* Top Left */}
      <span
        className="corner-bracket top-left absolute top-2 left-2 transition-all duration-400 ease-out"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderTop: `${thickness}px solid ${color}`,
          borderLeft: `${thickness}px solid ${color}`,
        }}
      />
      {/* Top Right */}
      <span
        className="corner-bracket top-right absolute top-2 right-2 transition-all duration-400 ease-out"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderTop: `${thickness}px solid ${color}`,
          borderRight: `${thickness}px solid ${color}`,
        }}
      />
      {/* Bottom Left */}
      <span
        className="corner-bracket bottom-left absolute bottom-2 left-2 transition-all duration-400 ease-out"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderBottom: `${thickness}px solid ${color}`,
          borderLeft: `${thickness}px solid ${color}`,
        }}
      />
      {/* Bottom Right */}
      <span
        className="corner-bracket bottom-right absolute bottom-2 right-2 transition-all duration-400 ease-out"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderBottom: `${thickness}px solid ${color}`,
          borderRight: `${thickness}px solid ${color}`,
        }}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  7. CLIP-PATH CURTAIN REVEAL IMAGE CONTAINER                       */
/*  Shutter curtain sweep with optional Ken Burns ambient zoom       */
/* ------------------------------------------------------------------ */

export function CurtainRevealImage({
  src,
  alt,
  aspect = "aspect-[16/10]",
  kenBurns = true,
  showBrackets = true,
  className = "",
  imageClassName = "",
}: {
  src: string;
  alt: string;
  aspect?: string;
  kenBurns?: boolean;
  showBrackets?: boolean;
  className?: string;
  imageClassName?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isIn, setIsIn] = useState(true);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setIsIn(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIn(true);
          io.disconnect();
        }
      },
      { threshold: 0.01, rootMargin: "80px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`group relative overflow-hidden rounded-2xl bg-[#032147]/10 ${aspect} ${
        isIn ? "curtain-reveal in" : "curtain-reveal"
      } ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading="eager"
        className={`h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 ${
          kenBurns ? "ken-burns" : ""
        } ${imageClassName}`}
      />
      {showBrackets && <CornerBrackets />}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  8. CONTINUOUS SCROLL PARALLAX CONTAINER                           */
/*  Subtle 60fps vertical translate3d based on viewport position      */
/* ------------------------------------------------------------------ */

export function ScrollParallax({
  children,
  speed = 0.08,
  className = "",
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = elRef.current;
    if (!el) return;

    let animFrame: number;
    let isVisible = false;

    const io = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          update();
        }
      },
      { rootMargin: "100px 0px" }
    );
    io.observe(el);

    const update = () => {
      if (!elRef.current || !isVisible) return;
      const rect = elRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      const centerY = rect.top + rect.height / 2;
      const distFromCenter = centerY - windowH / 2;
      const translateY = distFromCenter * -speed;

      elRef.current.style.transform = `translate3d(0, ${translateY.toFixed(1)}px, 0)`;
    };

    const handleScroll = () => {
      if (!isVisible) return;
      cancelAnimationFrame(animFrame);
      animFrame = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animFrame);
      io.disconnect();
    };
  }, [speed]);

  return (
    <div ref={elRef} className={`scroll-parallax will-change-transform ${className}`}>
      {children}
    </div>
  );
}
