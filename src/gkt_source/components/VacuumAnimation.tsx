import { useEffect, useState, useRef } from "react";

/* ------------------------------------------------------------------ */
/*  GKT International — Bespoke SVG Vacuum Cleaner Animation          */
/*  One-time left-to-right sweep across hero on scroll transition     */
/* ------------------------------------------------------------------ */

export function VacuumAnimation() {
  const [animating, setAnimating] = useState(false);
  const [completed, setCompleted] = useState(false);
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    // Only run on client and if not already triggered
    if (typeof window === "undefined" || hasTriggeredRef.current) return;

    const handleScroll = () => {
      if (hasTriggeredRef.current) return;

      const scrollY = window.scrollY || document.documentElement.scrollTop;

      // Trigger as soon as user starts scrolling down from hero section (e.g. > 35px)
      if (scrollY > 35) {
        hasTriggeredRef.current = true;
        setAnimating(true);

        // Remove listener immediately to ensure zero scroll overhead
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleAnimationEnd = () => {
    setAnimating(false);
    setCompleted(true);
  };

  // If completed, keep cleanly out of view
  if (completed) return null;

  return (
    <div
      className={`pointer-events-none absolute inset-x-0 bottom-12 sm:bottom-14 lg:bottom-16 z-30 overflow-hidden select-none transition-opacity duration-700 ${
        animating ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-hidden="true"
    >
      {/* Vacuum track container that moves left to right */}
      <div
        className={`relative flex items-end ${
          animating ? "animate-vacuum-glide" : "translate-x-[-140%]"
        }`}
        onAnimationEnd={handleAnimationEnd}
        style={{
          width: "max-content",
          willChange: "transform",
        }}
      >
        {/* Spotless Floor Gleam Trail Behind Vacuum */}
        <div className="absolute right-[140px] sm:right-[190px] lg:right-[240px] bottom-1 h-2 w-[85vw] max-w-[1400px] bg-gradient-to-r from-transparent via-brass/45 to-champagne/85 blur-[1px] opacity-90">
          {/* Sparkle cluster on clean path */}
          <div className="absolute right-8 -top-3.5 animate-pulse">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-brass-300 fill-current drop-shadow-[0_0_8px_rgba(211,176,102,0.9)]">
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
            </svg>
          </div>
          <div className="absolute right-24 -top-1 animate-ping opacity-75">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-champagne fill-current">
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
            </svg>
          </div>
          <div className="absolute right-48 -top-2.5 animate-pulse">
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-brass-200 fill-current drop-shadow-[0_0_6px_rgba(211,176,102,0.7)]">
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
            </svg>
          </div>
          <div className="absolute right-72 -top-1 animate-ping opacity-60">
            <svg viewBox="0 0 24 24" className="h-3 w-3 text-champagne fill-current">
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
            </svg>
          </div>
          <div className="absolute right-96 -top-3 animate-pulse">
            <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 text-brass-300 fill-current drop-shadow-[0_0_8px_rgba(211,176,102,0.8)]">
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
            </svg>
          </div>
        </div>

        {/* Master SVG Vacuum Cleaner Asset */}
        <div className="relative z-10 w-[200px] sm:w-[270px] lg:w-[330px] drop-shadow-[0_15px_25px_rgba(0,0,0,0.65)]">
          <svg
            viewBox="0 0 340 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-auto w-full"
          >
            <defs>
              {/* Metallic Brass Gradient */}
              <linearGradient id="gkt-brass-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#F5E8C7" />
                <stop offset="35%" stopColor="#D3B066" />
                <stop offset="70%" stopColor="#9C7B34" />
                <stop offset="100%" stopColor="#D3B066" />
              </linearGradient>

              {/* Canister Body Pine Gradient */}
              <linearGradient id="gkt-canister-body" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#16382E" />
                <stop offset="40%" stopColor="#0B201B" />
                <stop offset="100%" stopColor="#040C0A" />
              </linearGradient>

              {/* Chrome Metal Tube Gradient */}
              <linearGradient id="gkt-chrome-tube" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#94A3B8" />
                <stop offset="45%" stopColor="#FFFFFF" />
                <stop offset="75%" stopColor="#CBD5E1" />
                <stop offset="100%" stopColor="#64748B" />
              </linearGradient>

              {/* Headlight Beam Light Gradient */}
              <linearGradient id="headlight-beam" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="rgba(245, 232, 199, 0.85)" />
                <stop offset="35%" stopColor="rgba(211, 176, 102, 0.45)" />
                <stop offset="100%" stopColor="rgba(211, 176, 102, 0)" />
              </linearGradient>

              {/* Suction Vortex Flow Gradient */}
              <linearGradient id="suction-flow" x1="1" y1="0" x2="0" y2="0">
                <stop offset="0%" stopColor="rgba(245,232,199,0)" />
                <stop offset="70%" stopColor="rgba(211,176,102,0.3)" />
                <stop offset="100%" stopColor="rgba(245,232,199,0.9)" />
              </linearGradient>

              {/* Rubber Wheel Radial Gradient */}
              <radialGradient id="wheel-rim" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#475569" />
                <stop offset="60%" stopColor="#1E293B" />
                <stop offset="85%" stopColor="#0F172A" />
                <stop offset="100%" stopColor="#334155" />
              </radialGradient>
            </defs>

            {/* =================================================== */}
            {/* 1. SUCTION HEADLIGHT BEAM & VORTEX (IN FRONT)      */}
            {/* =================================================== */}
            <g className="opacity-90">
              {/* Projected Light Beam Cone */}
              <polygon
                points="305,152 338,138 340,172 305,168"
                fill="url(#headlight-beam)"
              />
              {/* Dynamic Suction Air Current Streamlines */}
              <path
                d="M336,146 C326,148 316,154 306,156"
                stroke="url(#suction-flow)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="4 3"
                className="animate-pulse"
              />
              <path
                d="M338,162 C328,161 318,158 306,158"
                stroke="url(#suction-flow)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeDasharray="5 2"
              />
              {/* Tiny suction dust particles */}
              <circle cx="334" cy="150" r="1.5" fill="#F5E8C7" opacity="0.8" />
              <circle cx="324" cy="164" r="1.2" fill="#D3B066" opacity="0.9" />
              <circle cx="314" cy="154" r="1" fill="#FFFFFF" opacity="0.9" />
            </g>

            {/* =================================================== */}
            {/* 2. REAR HOSE & CONNECTORS                          */}
            {/* =================================================== */}
            {/* Flexible Ribbed Vacuum Hose from Canister to Wand */}
            <path
              d="M78,92 C78,35 175,25 212,68"
              stroke="#071512"
              strokeWidth="15"
              strokeLinecap="round"
            />
            <path
              d="M78,92 C78,35 175,25 212,68"
              stroke="#2A4A3F"
              strokeWidth="11"
              strokeLinecap="round"
            />
            {/* Hose Rib Rings */}
            <path
              d="M78,92 C78,35 175,25 212,68"
              stroke="url(#gkt-brass-grad)"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray="2 6"
              opacity="0.85"
            />

            {/* =================================================== */}
            {/* 3. CANISTER VACUUM UNIT (LEFT SIDE)                 */}
            {/* =================================================== */}
            {/* Heavy Cast Chassis & Base */}
            <rect
              x="20"
              y="118"
              width="90"
              height="38"
              rx="10"
              fill="#06120E"
              stroke="#D3B066"
              strokeWidth="1.5"
            />

            {/* Main Canister Body */}
            <path
              d="M26,118 C26,78 40,64 65,64 C90,64 104,78 104,118 Z"
              fill="url(#gkt-canister-body)"
              stroke="#1D3E33"
              strokeWidth="2"
            />

            {/* Top Metallic Brass Trim Band & Filter Cap */}
            <rect
              x="42"
              y="58"
              width="46"
              height="10"
              rx="4"
              fill="url(#gkt-brass-grad)"
            />
            <rect x="52" y="52" width="26" height="8" rx="3" fill="#0B201B" stroke="#D3B066" strokeWidth="1" />

            {/* Ergonomic Top Carry Handle */}
            <path
              d="M50,52 C50,42 80,42 80,52"
              stroke="url(#gkt-brass-grad)"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />

            {/* Middle Brass Accent Trim Belt */}
            <rect
              x="25"
              y="98"
              width="80"
              height="6"
              rx="2"
              fill="url(#gkt-brass-grad)"
            />

            {/* GKT PRO Branding Seal Badge on Canister */}
            <g transform="translate(65, 84)">
              <rect x="-22" y="-9" width="44" height="17" rx="3" fill="#040C0A" stroke="#D3B066" strokeWidth="1" />
              <text
                x="0"
                y="3.5"
                textAnchor="middle"
                fill="#F5E8C7"
                fontSize="7.5"
                fontFamily="monospace"
                fontWeight="bold"
                letterSpacing="1.5"
              >
                GKT·PRO
              </text>
            </g>

            {/* LED Digital Power Indicator Gauge */}
            <circle cx="42" cy="126" r="3.5" fill="#040C0A" stroke="#334155" strokeWidth="1" />
            <circle cx="42" cy="126" r="2" fill="#10B981" className="animate-ping" />
            <circle cx="42" cy="126" r="2" fill="#10B981" />

            {/* Air Exhaust Louvers */}
            <line x1="88" y1="124" x2="100" y2="124" stroke="#D3B066" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="88" y1="128" x2="100" y2="128" stroke="#D3B066" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="88" y1="132" x2="100" y2="132" stroke="#D3B066" strokeWidth="1.5" strokeLinecap="round" />

            {/* Large Rear Canister Wheels with Brass Wheel Cap */}
            <circle cx="34" cy="148" r="16" fill="url(#wheel-rim)" stroke="#475569" strokeWidth="2" />
            <circle cx="34" cy="148" r="9" fill="#0B201B" stroke="url(#gkt-brass-grad)" strokeWidth="2.5" />
            <circle cx="34" cy="148" r="3.5" fill="url(#gkt-brass-grad)" />

            {/* Front Caster Wheel */}
            <circle cx="98" cy="154" r="10" fill="url(#wheel-rim)" stroke="#334155" strokeWidth="1.5" />
            <circle cx="98" cy="154" r="5" fill="url(#gkt-brass-grad)" />

            {/* =================================================== */}
            {/* 4. EXTENSION WAND & HANDLE                          */}
            {/* =================================================== */}
            {/* Ergonomic Wand Handle */}
            <rect
              x="206"
              y="62"
              width="24"
              height="14"
              rx="4"
              transform="rotate(32 206 62)"
              fill="#06120E"
              stroke="#D3B066"
              strokeWidth="1.5"
            />
            {/* Chrome Telescopic Wand Shaft (Angled Down to Floorhead) */}
            <line
              x1="220"
              y1="75"
              x2="280"
              y2="148"
              stroke="url(#gkt-chrome-tube)"
              strokeWidth="8.5"
              strokeLinecap="round"
            />
            {/* Wand Brass Joint Coupling */}
            <rect
              x="244"
              y="102"
              width="10"
              height="12"
              rx="2"
              transform="rotate(39 244 102)"
              fill="url(#gkt-brass-grad)"
            />

            {/* =================================================== */}
            {/* 5. VACUUM FLOORHEAD / POWER NOZZLE                  */}
            {/* =================================================== */}
            {/* Swivel Neck Connector */}
            <path
              d="M276,144 L285,152"
              stroke="url(#gkt-brass-grad)"
              strokeWidth="9"
              strokeLinecap="round"
            />

            {/* Low-Profile Aerodynamic Floorhead Housing */}
            <path
              d="M260,165 L272,148 L302,148 L308,165 Z"
              fill="url(#gkt-canister-body)"
              stroke="#D3B066"
              strokeWidth="1.5"
            />

            {/* Front Floorhead Bumper Guard */}
            <rect
              x="256"
              y="162"
              width="54"
              height="7"
              rx="3.5"
              fill="#06120E"
              stroke="url(#gkt-brass-grad)"
              strokeWidth="1.5"
            />

            {/* Integrated LED Headlight Bar */}
            <rect
              x="294"
              y="153"
              width="11"
              height="5"
              rx="1.5"
              fill="#FFFFFF"
              stroke="#F5E8C7"
              strokeWidth="1"
            />

            {/* Floorhead Gliding Micro-Wheels */}
            <circle cx="266" cy="168" r="3.5" fill="#1E293B" stroke="#D3B066" strokeWidth="1" />
            <circle cx="298" cy="168" r="3.5" fill="#1E293B" stroke="#D3B066" strokeWidth="1" />
          </svg>
        </div>
      </div>
    </div>
  );
}
