import { useEffect, useState, useRef, useCallback } from "react";

/* ------------------------------------------------------------------ */
/*  GKT International — Cinematic Brand Motion Intro                  */
/*  Netflix-style ribbon light burst & enlarged bold brand reveal      */
/* ------------------------------------------------------------------ */

/** Sparkle diamond star for glistening clean finish */
function SparkleStar({ delay, x, y, scale = 1 }: { delay: number; x: number; y: number; scale?: number }) {
  return (
    <g transform={`translate(${x}, ${y}) scale(${scale})`} opacity="0">
      <animate
        attributeName="opacity"
        values="0;0;1;0.9;0"
        keyTimes="0;0.2;0.5;0.8;1"
        dur="2.2s"
        begin={`${delay}s`}
        repeatCount="1"
        fill="freeze"
      />
      <animateTransform
        attributeName="transform"
        type="rotate"
        from={`0 ${x} ${y}`}
        to={`90 ${x} ${y}`}
        dur="2.2s"
        begin={`${delay}s`}
        repeatCount="1"
        fill="freeze"
        additive="sum"
      />
      {/* 4-point diamond star */}
      <path
        d="M0,-16 Q0,0 16,0 Q0,0 0,16 Q0,0 -16,0 Q0,0 0,-16 Z"
        fill="url(#sparkle-grad)"
      />
      <circle cx="0" cy="0" r="3" fill="#ffffff" />
    </g>
  );
}

/** Ambient particle mote */
function AmbientMote({ delay, x, y, dy }: { delay: number; x: number; y: number; dy: number }) {
  return (
    <circle cx={x} cy={y} r="1.8" fill="#d3b066" opacity="0">
      <animate
        attributeName="opacity"
        values="0;0.6;0.2;0"
        dur="3.6s"
        begin={`${delay}s`}
        repeatCount="1"
        fill="freeze"
      />
      <animate
        attributeName="cy"
        values={`${y};${y + dy}`}
        dur="3.6s"
        begin={`${delay}s`}
        repeatCount="1"
        fill="freeze"
      />
    </circle>
  );
}

export default function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"playing" | "fadeout" | "done">("playing");
  const containerRef = useRef<HTMLDivElement>(null);

  const handleComplete = useCallback(() => {
    setPhase("fadeout");
    setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 850);
  }, [onComplete]);

  /* auto-complete */
  useEffect(() => {
    const timer = setTimeout(handleComplete, 5400);
    return () => clearTimeout(timer);
  }, [handleComplete]);

  /* allow click/tap to skip */
  useEffect(() => {
    const handleClick = () => handleComplete();
    const el = containerRef.current;
    el?.addEventListener("click", handleClick);
    return () => el?.removeEventListener("click", handleClick);
  }, [handleComplete]);

  /* lock body scroll */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === "done") return null;

  /* sparkle positions around the enlarged logo and title */
  const sparkles = [
    { x: 960, y: 200, delay: 1.8, scale: 1.5 },
    { x: 860, y: 280, delay: 2.1, scale: 1.1 },
    { x: 1060, y: 280, delay: 2.4, scale: 1.2 },
    { x: 800, y: 430, delay: 2.3, scale: 1.4 },
    { x: 1120, y: 430, delay: 2.6, scale: 1.5 },
    { x: 680, y: 480, delay: 2.8, scale: 1.2 },
    { x: 1240, y: 480, delay: 3.0, scale: 1.3 },
    { x: 960, y: 575, delay: 3.2, scale: 1.3 },
    { x: 550, y: 645, delay: 3.4, scale: 1.0 },
    { x: 1370, y: 645, delay: 3.5, scale: 1.0 },
    { x: 960, y: 645, delay: 2.9, scale: 1.6 },
  ];

  /* ambient floating motes */
  const motes = [
    { x: 380, y: 700, dy: -200, delay: 0.8 },
    { x: 520, y: 820, dy: -240, delay: 1.2 },
    { x: 680, y: 660, dy: -180, delay: 0.6 },
    { x: 1260, y: 760, dy: -220, delay: 1.0 },
    { x: 1420, y: 700, dy: -200, delay: 1.4 },
    { x: 1560, y: 840, dy: -260, delay: 0.9 },
  ];

  return (
    <div
      ref={containerRef}
      className="intro-overlay"
      style={{
        opacity: phase === "fadeout" ? 0 : 1,
        transition: "opacity 0.85s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
      role="dialog"
      aria-label="GKT International introduction"
    >
      <svg
        viewBox="0 0 1920 1080"
        className="intro-svg"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Metallic Gold Gradient */}
          <linearGradient id="gold-metal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#edd8a8" />
            <stop offset="25%" stopColor="#d3b066" />
            <stop offset="50%" stopColor="#fff6df" />
            <stop offset="75%" stopColor="#b0842c" />
            <stop offset="100%" stopColor="#ecd9ab" />
          </linearGradient>

          {/* Shimmer Light Sweep across title */}
          <linearGradient id="text-shimmer" x1="-100%" y1="0%" x2="200%" y2="0%">
            <stop offset="0%" stopColor="#f4ede0" />
            <stop offset="40%" stopColor="#f4ede0" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="60%" stopColor="#ffd984" />
            <stop offset="70%" stopColor="#f4ede0" />
            <stop offset="100%" stopColor="#f4ede0" />
            <animate
              attributeName="x1"
              values="-100%;100%"
              dur="2s"
              begin="2.6s"
              repeatCount="1"
              fill="freeze"
            />
            <animate
              attributeName="x2"
              values="0%;200%"
              dur="2s"
              begin="2.6s"
              repeatCount="1"
              fill="freeze"
            />
          </linearGradient>

          {/* Sparkle diamond gradient */}
          <linearGradient id="sparkle-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#ecd9ab" />
            <stop offset="100%" stopColor="#b0842c" />
          </linearGradient>

          {/* Background Ambient Radial Glow */}
          <radialGradient id="stage-glow" cx="50%" cy="48%" r="50%">
            <stop offset="0%" stopColor="#d3b066" stopOpacity="0.25" />
            <stop offset="35%" stopColor="#284733" stopOpacity="0.20" />
            <stop offset="70%" stopColor="#0f1c15" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#050a07" stopOpacity="0.95" />
          </radialGradient>

          {/* Ribbon 1 Gradient (Gold Beam) */}
          <linearGradient id="ribbon-gold" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#b0842c" stopOpacity="0" />
            <stop offset="40%" stopColor="#d3b066" stopOpacity="0.7" />
            <stop offset="80%" stopColor="#fff3d1" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          {/* Ribbon 2 Gradient (Emerald/Sage Beam) */}
          <linearGradient id="ribbon-emerald" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#14261c" stopOpacity="0" />
            <stop offset="50%" stopColor="#55705e" stopOpacity="0.6" />
            <stop offset="80%" stopColor="#93a898" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          {/* Soft Blur for Ribbon Lighting */}
          <filter id="ribbon-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="16" />
          </filter>

          {/* Glow filter for emblem */}
          <filter id="gold-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* === LAYER 0: Cinema Vignette Backdrop === */}
        <rect width="1920" height="1080" fill="#050a07" />
        <rect width="1920" height="1080" fill="url(#stage-glow)" />

        {/* === LAYER 1: Dynamic Light Ribbons (Netflix-style convergence) === */}
        <g opacity="0">
          <animate
            attributeName="opacity"
            values="0;0.9;1;0"
            keyTimes="0;0.2;0.6;1"
            dur="2s"
            begin="0.2s"
            fill="freeze"
          />
          {/* Central gold streak */}
          <polygon
            points="948,1080 972,1080 965,280 955,280"
            fill="url(#ribbon-gold)"
            filter="url(#ribbon-glow)"
          >
            <animate
              attributeName="points"
              values="948,1080 972,1080 960,1080 960,1080; 948,1080 972,1080 965,280 955,280"
              dur="0.8s"
              begin="0.2s"
              fill="freeze"
              calcMode="spline"
              keySplines="0.16 1 0.3 1"
            />
          </polygon>
          {/* Left emerald streak */}
          <polygon
            points="740,1080 770,1080 940,285 930,285"
            fill="url(#ribbon-emerald)"
            filter="url(#ribbon-glow)"
          >
            <animate
              attributeName="points"
              values="740,1080 770,1080 755,1080 755,1080; 740,1080 770,1080 940,285 930,285"
              dur="0.9s"
              begin="0.3s"
              fill="freeze"
              calcMode="spline"
              keySplines="0.16 1 0.3 1"
            />
          </polygon>
          {/* Right gold streak */}
          <polygon
            points="1180,1080 1150,1080 980,285 990,285"
            fill="url(#ribbon-gold)"
            filter="url(#ribbon-glow)"
          >
            <animate
              attributeName="points"
              values="1180,1080 1150,1080 1165,1080 1165,1080; 1180,1080 1150,1080 980,285 990,285"
              dur="0.9s"
              begin="0.3s"
              fill="freeze"
              calcMode="spline"
              keySplines="0.16 1 0.3 1"
            />
          </polygon>
        </g>

        {/* === LAYER 2: Camera Push Group === */}
        <g>
          {/* Gentle cinematic scale */}
          <animateTransform
            attributeName="transform"
            type="scale"
            values="0.97;1.03"
            dur="5.4s"
            fill="freeze"
            additive="sum"
          />
          <animateTransform
            attributeName="transform"
            type="translate"
            values="28.8,16.2;-28.8,-16.2"
            dur="5.4s"
            fill="freeze"
            additive="sum"
          />

          {/* === 2A: Corner Registration Marks (GKT Inspection Framework) === */}
          <g stroke="#b0842c" strokeWidth="1.8" fill="none" opacity="0">
            <animate
              attributeName="opacity"
              values="0;0.8"
              dur="1.2s"
              begin="1.2s"
              fill="freeze"
            />
            {/* top-left */}
            <polyline points="120,150 120,100 170,100" />
            {/* top-right */}
            <polyline points="1750,100 1800,100 1800,150" />
            {/* bottom-left */}
            <polyline points="120,930 120,980 170,980" />
            {/* bottom-right */}
            <polyline points="1750,980 1800,980 1800,930" />
          </g>

          {/* === 2B: EMBLEM BADGE (y = 280, scaled up) === */}
          <g transform="translate(960, 280)" opacity="0">
            <animate
              attributeName="opacity"
              values="0;1"
              dur="0.9s"
              begin="1.1s"
              fill="freeze"
              calcMode="spline"
              keySplines="0.22 1 0.36 1"
            />
            {/* Rotating outer diamond ring */}
            <rect
              x="-52"
              y="-52"
              width="104"
              height="104"
              fill="#0a140e"
              stroke="url(#gold-metal)"
              strokeWidth="2.2"
              transform="rotate(45)"
              filter="url(#gold-glow)"
            />
            {/* Inner diamond accent */}
            <rect
              x="-43"
              y="-43"
              width="86"
              height="86"
              fill="none"
              stroke="#ecd9ab"
              strokeWidth="1"
              strokeDasharray="5 4"
              transform="rotate(45)"
            />
            {/* Emblem Company Logo */}
            <image
              href="/images/company-logo-transparent.png"
              x="-48"
              y="-38"
              width="96"
              height="76"
              preserveAspectRatio="xMidYMid meet"
            />
          </g>

          {/* === 2C: MAIN TITLE: "GKT" (fontSize 160, y = 485) === */}
          <g opacity="0">
            <animate
              attributeName="opacity"
              values="0;1"
              dur="1.1s"
              begin="1.6s"
              fill="freeze"
              calcMode="spline"
              keySplines="0.22 1 0.36 1"
            />
            {/* Ambient gold shadow for GKT */}
            <text
              x="960"
              y="485"
              textAnchor="middle"
              fontFamily="'Fraunces', Georgia, serif"
              fontSize="160"
              fontWeight="700"
              letterSpacing="22"
              fill="#d3b066"
              opacity="0.38"
              filter="url(#gold-glow)"
            >
              GKT
            </text>
            {/* Crisp Foreground GKT */}
            <text
              x="960"
              y="485"
              textAnchor="middle"
              fontFamily="'Fraunces', Georgia, serif"
              fontSize="160"
              fontWeight="700"
              letterSpacing="22"
              fill="url(#text-shimmer)"
            >
              GKT
            </text>
          </g>

          {/* === 2D: SUBTITLE: "INTERNATIONAL" (fontSize 48, y = 575) === */}
          <g opacity="0">
            <animate
              attributeName="opacity"
              values="0;1"
              dur="1.2s"
              begin="2.1s"
              fill="freeze"
              calcMode="spline"
              keySplines="0.22 1 0.36 1"
            />
            <text
              x="960"
              y="575"
              textAnchor="middle"
              fontFamily="'Fraunces', Georgia, serif"
              fontSize="48"
              fontWeight="400"
              fontStyle="italic"
              letterSpacing="24"
              fill="#d3b066"
            >
              INTERNATIONAL
            </text>
          </g>

          {/* === 2E: POLISHED GOLD DIVIDER RULE (y = 645) === */}
          <g opacity="0">
            <animate
              attributeName="opacity"
              values="0;1"
              dur="1s"
              begin="2.6s"
              fill="freeze"
            />
            {/* Left rule */}
            <line x1="960" y1="645" x2="560" y2="645" stroke="url(#gold-metal)" strokeWidth="1.6">
              <animate
                attributeName="x2"
                values="960;560"
                dur="0.9s"
                begin="2.6s"
                fill="freeze"
                calcMode="spline"
                keySplines="0.16 1 0.3 1"
              />
            </line>
            {/* Center diamond marker */}
            <polygon
              points="960,637 968,645 960,653 952,645"
              fill="#ffffff"
              filter="url(#gold-glow)"
            />
            {/* Right rule */}
            <line x1="960" y1="645" x2="1360" y2="645" stroke="url(#gold-metal)" strokeWidth="1.6">
              <animate
                attributeName="x2"
                values="960;1360"
                dur="0.9s"
                begin="2.6s"
                fill="freeze"
                calcMode="spline"
                keySplines="0.16 1 0.3 1"
              />
            </line>
          </g>

          {/* === 2F: TAGLINE: "PREMIUM COMMERCIAL CLEANING & MAINTENANCE" (fontSize 22, y = 700) === */}
          <g opacity="0">
            <animate
              attributeName="opacity"
              values="0;1"
              dur="1s"
              begin="3.0s"
              fill="freeze"
            />
            <text
              x="960"
              y="700"
              textAnchor="middle"
              fontFamily="'Spline Sans Mono', Courier New, monospace"
              fontSize="22"
              fontWeight="600"
              letterSpacing="12"
              fill="#ecd9ab"
            >
              PREMIUM COMMERCIAL CLEANING &amp; MAINTENANCE
            </text>
          </g>

          {/* === 2G: HERITAGE & ACCREDITATION PILLARS (fontSize 16, y = 755) === */}
          <g opacity="0">
            <animate
              attributeName="opacity"
              values="0;0.9"
              dur="1s"
              begin="3.4s"
              fill="freeze"
            />
            <text
              x="960"
              y="755"
              textAnchor="middle"
              fontFamily="'Spline Sans Mono', Courier New, monospace"
              fontSize="16"
              fontWeight="500"
              letterSpacing="8"
              fill="#93a898"
            >
              SINGAPORE · NEA LICENSED · bizSAFE LEVEL 3 · EST. 2012
            </text>
          </g>

          {/* === LAYER 3: Sparkles & Ambient Particles === */}
          {sparkles.map((s, i) => (
            <SparkleStar key={i} x={s.x} y={s.y} delay={s.delay} scale={s.scale} />
          ))}

          {motes.map((m, i) => (
            <AmbientMote key={i} x={m.x} y={m.y} dy={m.dy} delay={m.delay} />
          ))}
        </g>

        {/* === LAYER 4: Final Golden Luster Bloom === */}
        <rect width="1920" height="1080" fill="#d3b066" opacity="0" pointerEvents="none">
          <animate
            attributeName="opacity"
            values="0;0.12;0"
            keyTimes="0;0.5;1"
            dur="0.6s"
            begin="4.5s"
            fill="freeze"
          />
        </rect>
      </svg>

      {/* Skip Button Pill */}
      <div className="intro-skip-pill">
        <span>Click anywhere to skip</span>
        <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 text-brass-300 ml-1.5 inline" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M4 2l8 6-8 6" />
        </svg>
      </div>
    </div>
  );
}
