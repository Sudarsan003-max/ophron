import { useState, useEffect } from "react";
import { cn } from "../utils/cn";
import { VALUABLE_CLIENTS, CLIENT_SECTORS, type ClientItem, type ClientCategory } from "../data/clients";
import { Icon, Eyebrow, Reveal } from "./ui";

/* ------------------------------------------------------------------ */
/*  High-Resolution Vector Logo Graphic for all 31 Brands              */
/* ------------------------------------------------------------------ */

export function ClientLogoGraphic({ client, className }: { client: ClientItem; className?: string }) {
  switch (client.id) {
    case "atlas":
      return (
        <div className={cn("flex flex-col items-center justify-center p-3 text-center", className)} style={{ backgroundColor: "#0e1011" }}>
          <svg viewBox="0 0 40 40" className="h-9 w-9 text-brass-300 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth="1.4">
            <path d="M20 2L13 14V34H27V14L20 2Z" />
            <path d="M17 14V34M23 14V34" />
            <path d="M20 6V34" />
            <circle cx="20" cy="24" r="2" fill="currentColor" />
          </svg>
          <span className="mt-2 font-display text-sm font-semibold tracking-[0.35em] text-[#edd8a8] uppercase">ATLAS</span>
        </div>
      );

    case "pan-pacific":
      return (
        <div className={cn("flex flex-col items-center justify-center p-3 text-center bg-white", className)}>
          <svg viewBox="0 0 44 40" className="h-9 w-9 text-[#b0842c] transition-transform duration-300 group-hover:scale-110" fill="currentColor">
            <path d="M22 4C20 8 16 11 10 12C16 13 19 16 20 22C20 16 23 13 29 12C23 11 20 8 22 4Z" />
            <path d="M22 18C20 21 16 23 12 24C16 25 19 28 20 32C20 28 22 25 27 24C23 23 21 21 22 18Z" opacity="0.75" />
            <path d="M20 22V36H24V22" />
          </svg>
          <span className="mt-1 font-display text-xs font-bold tracking-wider text-[#14261c] uppercase">PAN PACIFIC</span>
          <span className="font-body text-[8px] tracking-[0.15em] text-[#55705e] italic">Hotels and Resorts</span>
        </div>
      );

    case "yotel":
      return (
        <div className={cn("flex items-center justify-center p-3 text-center", className)} style={{ backgroundColor: "#502372" }}>
          <span className="font-mono text-xl font-bold tracking-[0.2em] text-white border-2 border-white px-2.5 py-0.5 rounded-sm transition-transform duration-300 group-hover:scale-105">
            YOTEL
          </span>
        </div>
      );

    case "un-yang-kor-dai":
      return (
        <div className={cn("flex flex-col items-center justify-center p-3 text-center", className)} style={{ backgroundColor: "#f3ebe0" }}>
          <span className="font-body text-[10px] font-semibold text-[#b8532f] tracking-wide">ส้มตำถาด</span>
          <span className="font-display text-sm font-bold tracking-tight text-[#1d2e4a] leading-none mt-0.5">Un-Yang</span>
          <span className="font-display text-sm font-bold tracking-tight text-[#1d2e4a] leading-none">Kor-Dai</span>
          <span className="font-mono text-[7px] tracking-[0.15em] text-[#55705e] uppercase mt-0.5">by PenLaos</span>
        </div>
      );

    case "bengawan-solo":
      return (
        <div className={cn("flex flex-col items-center justify-center p-3 text-center bg-white", className)}>
          <svg viewBox="0 0 36 36" className="h-8 w-8 text-[#b82436] transition-transform duration-300 group-hover:rotate-12" fill="currentColor">
            <circle cx="18" cy="18" r="16" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M18 6C16 11 12 14 7 15C12 17 15 20 16 26C18 21 21 18 26 17C21 15 18 12 18 6Z" />
            <circle cx="18" cy="18" r="4" fill="#ffffff" />
          </svg>
          <span className="mt-1 font-display text-xs font-bold tracking-wider text-[#b82436]">BENGAWAN SOLO</span>
          <span className="font-mono text-[7px] tracking-[0.2em] text-[#777] uppercase">SINGAPORE</span>
        </div>
      );

    case "jamb":
      return (
        <div className={cn("flex items-center justify-center p-3 text-center", className)} style={{ backgroundColor: "#112e1d" }}>
          <span className="font-display text-xl font-bold tracking-[0.3em] text-[#d9b668] border-b border-[#d9b668]/60 pb-0.5">
            JAMB
          </span>
        </div>
      );

    case "hayop":
      return (
        <div className={cn("flex items-center justify-center p-3 text-center", className)} style={{ backgroundColor: "#d5c9e8" }}>
          <span className="font-display text-2xl font-light tracking-normal text-[#271d36] italic">
            hayop
          </span>
        </div>
      );

    case "anatta":
      return (
        <div className={cn("flex flex-col items-center justify-center p-3 text-center bg-white", className)}>
          <svg viewBox="0 0 40 40" className="h-8 w-8 text-[#1b4b96] transition-transform duration-500 group-hover:rotate-90" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="20" cy="20" r="14" />
            <circle cx="20" cy="20" r="8" />
            <path d="M20 6V34M6 20H34M10 10L30 30M10 30L30 10" strokeWidth="1" />
          </svg>
          <span className="mt-1 font-body text-xs font-bold tracking-[0.25em] text-[#1b4b96] uppercase">ANATTA</span>
          <span className="font-mono text-[6.5px] tracking-[0.2em] text-[#666] uppercase">CULINARY ACADEMY</span>
        </div>
      );

    case "fool":
      return (
        <div className={cn("flex items-center justify-center p-3 text-center bg-white", className)}>
          <span className="font-body text-3xl font-black tracking-tight text-[#111111] transition-transform duration-300 group-hover:scale-110">
            Fool
          </span>
        </div>
      );

    case "brewhaus":
      return (
        <div className={cn("flex flex-col items-center justify-center p-3 text-center", className)} style={{ backgroundColor: "#0b2035" }}>
          <svg viewBox="0 0 36 36" className="h-7 w-7 text-[#deb753]" fill="currentColor">
            <path d="M18 4L8 10V22C8 28 18 34 18 34C18 34 28 28 28 22V10L18 4Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M14 18C14 14 18 12 18 12C18 12 22 14 22 18C22 22 18 24 18 24C18 24 14 22 14 18Z" />
          </svg>
          <span className="mt-1 font-body text-[10px] font-extrabold tracking-[0.25em] text-[#deb753] uppercase">BREWHAUS</span>
        </div>
      );

    case "baker-and-cook":
      return (
        <div className={cn("flex flex-col items-center justify-center p-3 text-center", className)} style={{ backgroundColor: "#130f0c" }}>
          <span className="font-display text-sm font-semibold tracking-wide text-white">&amp;baker</span>
          <span className="font-display text-sm font-semibold tracking-wide text-white leading-none">\cook</span>
          <span className="font-mono text-[6px] tracking-widest text-brass-300 uppercase mt-0.5">artisan bakery</span>
        </div>
      );

    case "wild-honey":
      return (
        <div className={cn("flex items-center justify-center p-3 text-center", className)} style={{ backgroundColor: "#0b3947" }}>
          <span className="font-display text-xs font-bold tracking-[0.18em] text-white border-y border-white/60 py-1 uppercase">
            WILD HONEY
          </span>
        </div>
      );

    case "magpie":
      return (
        <div className={cn("flex items-center justify-center p-3 text-center", className)} style={{ backgroundColor: "#f0e6d6" }}>
          <span className="font-mono text-xs font-bold tracking-[0.3em] text-[#2f3d30] border border-[#2f3d30]/50 px-3 py-1.5 uppercase">
            MAGPIE
          </span>
        </div>
      );

    case "kafe-kreams":
      return (
        <div className={cn("flex flex-col items-center justify-center p-3 text-center", className)} style={{ backgroundColor: "#af7d50" }}>
          <svg viewBox="0 0 32 32" className="h-7 w-7 text-[#2c1a0e] transition-transform duration-500 group-hover:rotate-45" fill="currentColor">
            <circle cx="16" cy="16" r="6" />
            <path d="M16 4V8M16 24V28M4 16H8M24 16H28M7.5 7.5L10.5 10.5M21.5 21.5L24.5 24.5M7.5 24.5L10.5 21.5M21.5 10.5L24.5 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className="mt-1 font-body text-xs font-black tracking-[0.25em] text-[#2c1a0e] uppercase">KAFE UTU</span>
        </div>
      );

    case "the-guild":
      return (
        <div className={cn("flex items-center justify-center p-3 text-center", className)} style={{ backgroundColor: "#4a3120" }}>
          <div className="border border-[#cbb08f]/60 px-3 py-1.5 text-center">
            <span className="font-mono text-xs font-bold tracking-[0.35em] text-[#ecd4b6] uppercase">THE GUILD</span>
          </div>
        </div>
      );

    case "lion-brewery":
      return (
        <div className={cn("flex flex-col items-center justify-center p-3 text-center bg-white", className)}>
          <svg viewBox="0 0 40 36" className="h-7 w-7 text-[#262019] transition-transform duration-300 group-hover:scale-110" fill="currentColor">
            <circle cx="20" cy="18" r="14" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M16 14C16 12 18 10 20 10C22 10 24 12 24 14C24 18 20 22 20 22C20 22 16 18 16 14Z" />
            <circle cx="18" cy="14" r="1" fill="#fff" />
            <circle cx="22" cy="14" r="1" fill="#fff" />
          </svg>
          <span className="mt-0.5 font-body text-[9px] font-extrabold tracking-[0.2em] text-[#262019] uppercase">LION BREWERY</span>
        </div>
      );

    case "regina-roast":
      return (
        <div className={cn("flex flex-col items-center justify-center p-3 text-center bg-white", className)}>
          <span className="font-display text-xs font-bold tracking-wider text-[#b82424] uppercase border-b border-[#143321] pb-0.5">
            KING&apos;S ROAST
          </span>
          <span className="font-mono text-[7px] tracking-widest text-[#143321] uppercase mt-0.5">Singapore</span>
        </div>
      );

    case "tempt":
      return (
        <div className={cn("flex flex-col items-center justify-center p-3 text-center bg-white", className)}>
          <svg viewBox="0 0 32 20" className="h-5 w-8 transition-transform duration-300 group-hover:scale-110">
            <path d="M2 18L10 2L16 12L22 2L30 18" fill="none" stroke="url(#tempt-grad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <defs>
              <linearGradient id="tempt-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00d2ff" />
                <stop offset="100%" stopColor="#ff007f" />
              </linearGradient>
            </defs>
          </svg>
          <span className="font-body text-xs font-extrabold tracking-[0.3em] text-[#111111] uppercase mt-1">TEMPT</span>
        </div>
      );

    case "spizza":
      return (
        <div className={cn("flex items-center justify-center p-3 text-center", className)} style={{ backgroundColor: "#bf1f1f" }}>
          <span className="font-body text-xl font-bold tracking-tight text-white italic">
            spizza
          </span>
        </div>
      );

    case "la-nonna":
      return (
        <div className={cn("flex items-center justify-center p-3 text-center", className)} style={{ backgroundColor: "#262321" }}>
          <div className="border border-[#ecd9ab]/60 rounded-full px-4 py-1.5 transition-transform duration-300 group-hover:scale-105">
            <span className="font-display text-sm font-medium tracking-wide text-[#ecd9ab] italic">
              la nonna
            </span>
          </div>
        </div>
      );

    case "n-tech":
      return (
        <div className={cn("flex items-center justify-center p-3 text-center bg-white", className)}>
          <svg viewBox="0 0 36 36" className="h-9 w-9 text-[#182b54] transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth="2.5">
            <rect x="4" y="4" width="28" height="28" />
            <path d="M4 18H22V32" />
            <path d="M18 4V18H32" />
          </svg>
        </div>
      );

    case "go-noodle":
      return (
        <div className={cn("flex items-center justify-center p-3 text-center bg-white", className)}>
          <span className="font-body text-lg font-bold tracking-tight text-[#4c2a79]">
            GoNoodle
          </span>
        </div>
      );

    case "papparich":
      return (
        <div className={cn("flex flex-col items-center justify-center p-3 text-center bg-white", className)}>
          <span className="font-display text-sm font-bold tracking-wide text-[#a4672e]">
            PappaRich
          </span>
          <span className="font-mono text-[7px] tracking-[0.2em] text-[#888] uppercase">MALAYSIAN DELIGHTS</span>
        </div>
      );

    case "mazak":
      return (
        <div className={cn("flex items-center justify-center p-3 text-center bg-white", className)}>
          <span className="font-body text-2xl font-black tracking-tight text-[#f05a1a] transition-transform duration-300 group-hover:scale-110">
            Mazak
          </span>
        </div>
      );

    case "osho":
      return (
        <div className={cn("flex items-center justify-center p-3 text-center", className)} style={{ backgroundColor: "#000000" }}>
          <span className="font-body text-2xl font-black tracking-wider text-[#0099ff]">
            OSHO
          </span>
        </div>
      );

    case "hazuki":
      return (
        <div className={cn("flex flex-col items-center justify-center p-3 text-center bg-white", className)}>
          <div className="flex items-center gap-2">
            <span className="font-serif text-lg font-bold text-[#111111]">晴月</span>
            <span className="font-display text-xs font-semibold tracking-[0.25em] text-[#111111] uppercase">HAZUKI</span>
          </div>
        </div>
      );

    case "hathaway":
      return (
        <div className={cn("flex flex-col items-center justify-center p-3 text-center bg-white", className)}>
          <div className="border border-[#2d3a2e]/50 rounded-full px-3.5 py-1 text-center">
            <svg viewBox="0 0 20 20" className="h-4 w-4 mx-auto text-[#2d3a2e]" fill="currentColor">
              <path d="M10 2C10 6 6 8 6 12C6 15 8 18 10 18C12 18 14 15 14 12C14 8 10 6 10 2Z" fill="none" stroke="currentColor" strokeWidth="1.2" />
              <path d="M10 4V18" stroke="currentColor" strokeWidth="1" />
            </svg>
            <span className="font-display text-[10px] font-medium tracking-[0.2em] text-[#2d3a2e] uppercase block mt-0.5">
              Hathaway
            </span>
          </div>
        </div>
      );

    case "granary":
      return (
        <div className={cn("flex flex-col items-center justify-center p-3 text-center", className)} style={{ backgroundColor: "#c56d4e" }}>
          <span className="font-display text-base font-extrabold tracking-wide text-white uppercase">
            GRANARY
          </span>
          <span className="font-mono text-[7px] tracking-[0.25em] text-white/80 uppercase">CATERING CO.</span>
        </div>
      );

    case "bread-yard":
      return (
        <div className={cn("flex flex-col items-center justify-center p-3 text-center", className)} style={{ backgroundColor: "#ece4d6" }}>
          <svg viewBox="0 0 24 16" className="h-3.5 w-6 text-[#1c1c1c]" fill="currentColor">
            <path d="M2 14C4 6 12 2 22 2C20 10 12 14 2 14Z" />
          </svg>
          <span className="font-body text-xs font-bold tracking-tight text-[#1c1c1c] mt-0.5">
            bread yard
          </span>
        </div>
      );

    case "bacaro":
      return (
        <div className={cn("flex flex-col items-center justify-center p-3 text-center bg-white", className)}>
          <span className="font-body text-base font-black tracking-[0.15em] text-[#111111] uppercase">
            BĀCARO
          </span>
          <span className="font-mono text-[7px] tracking-[0.3em] text-[#777] uppercase">PIZZERIA</span>
        </div>
      );

    case "bbq-jan-jan":
      return (
        <div className={cn("flex flex-col items-center justify-center p-3 text-center bg-white", className)}>
          <span className="font-serif text-sm font-bold text-[#111111]">焼肉</span>
          <span className="font-body text-xs font-extrabold tracking-wider text-[#b82424] uppercase">BBQ JAN-JAN</span>
        </div>
      );

    default:
      return (
        <div className={cn("flex items-center justify-center p-3 text-center bg-pine-900 text-paper", className)}>
          <span className="font-display text-sm font-semibold">{client.name}</span>
        </div>
      );
  }
}

/* ------------------------------------------------------------------ */
/*  Interactive Logo Tile Card with Animated SVG Borders & Hover Glow */
/* ------------------------------------------------------------------ */

export function ClientLogoTileCard({
  client,
  selected = false,
  onClick,
}: {
  client: ClientItem;
  selected?: boolean;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-lg border p-3.5 transition-all duration-300 cursor-pointer select-none",
        selected
          ? "border-brass bg-pine-900 shadow-[0_0_25px_rgba(211,176,102,0.35)] scale-[1.03]"
          : "border-brass/25 bg-pine-900/60 hover:-translate-y-1 hover:border-brass/80 hover:bg-pine-900 hover:shadow-[0_12px_28px_rgba(0,0,0,0.5)]",
      )}
    >
      {/* Corner SVG inspection bracket indicators on active/hover */}
      <div className="pointer-events-none absolute top-1 left-1 opacity-40 group-hover:opacity-100 transition-opacity">
        <svg viewBox="0 0 8 8" className="h-2 w-2 text-brass" fill="none" stroke="currentColor" strokeWidth="1.2">
          <polyline points="0,6 0,0 6,0" />
        </svg>
      </div>
      <div className="pointer-events-none absolute top-1 right-1 opacity-40 group-hover:opacity-100 transition-opacity">
        <svg viewBox="0 0 8 8" className="h-2 w-2 text-brass" fill="none" stroke="currentColor" strokeWidth="1.2">
          <polyline points="2,0 8,0 8,6" />
        </svg>
      </div>

      {/* Top Sector Badge */}
      <div className="mb-2.5 flex items-center justify-between">
        <span className="font-mono text-[9px] font-semibold tracking-[0.18em] text-brass-300/90 uppercase">
          {client.badge || client.categoryLabel}
        </span>
        <span className={cn("h-1.5 w-1.5 rounded-full transition-transform", selected ? "bg-brass scale-125" : "bg-brass/50 group-hover:bg-brass group-hover:scale-125")} />
      </div>

      {/* Brand Logo Display Box */}
      <div className="flex h-20 w-full items-center justify-center overflow-hidden rounded-md border border-paper/10 transition-transform duration-300 group-hover:scale-[1.02]">
        <ClientLogoGraphic client={client} className="h-full w-full" />
      </div>

      {/* Brand Subtitle & Sector */}
      <div className="mt-2.5">
        <p className="font-display text-sm font-semibold text-paper group-hover:text-brass-300 transition-colors">
          {client.name}
        </p>
        {client.subtext && (
          <p className="mt-0.5 line-clamp-1 font-body text-[11px] text-sage/80">
            {client.subtext}
          </p>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Animated SVG "Our Valuable Clients" Showcase Section         */
/* ------------------------------------------------------------------ */

export function OurValuableClientsSection() {
  const [activeTab, setActiveTab] = useState<ClientCategory>("all");
  const [selectedClient, setSelectedClient] = useState<ClientItem>(VALUABLE_CLIENTS[0]);
  const [viewMode, setViewMode] = useState<"stream" | "grid">("stream");

  // Auto-cycle the spotlight in stream mode every 4 seconds if not hovered
  useEffect(() => {
    const timer = setInterval(() => {
      setSelectedClient((prev) => {
        const nextIdx = (VALUABLE_CLIENTS.findIndex((c) => c.id === prev.id) + 1) % VALUABLE_CLIENTS.length;
        return VALUABLE_CLIENTS[nextIdx];
      });
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const filteredClients = activeTab === "all"
    ? VALUABLE_CLIENTS
    : VALUABLE_CLIENTS.filter((c) => c.category === activeTab);

  // Split into 2 rows for kinetic streams
  const row1 = VALUABLE_CLIENTS.slice(0, 16);
  const row2 = VALUABLE_CLIENTS.slice(16);

  return (
    <section className="relative overflow-hidden border-y border-brass/30 bg-pine-950 py-24 text-paper" aria-label="Our Valuable Clients">
      {/* Background Animated SVG Scanning Grid and Laser Line */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20" aria-hidden="true">
        <svg viewBox="0 0 1920 1080" className="h-full w-full object-cover">
          <defs>
            <pattern id="client-grid-pattern" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#d3b066" strokeWidth="0.75" opacity="0.3" />
            </pattern>
            <linearGradient id="laser-glow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#d3b066" stopOpacity="0" />
              <stop offset="50%" stopColor="#ecd9ab" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#d3b066" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect width="1920" height="1080" fill="url(#client-grid-pattern)" />
        </svg>
        {/* Animated Scanning Laser Beam */}
        <div className="scan-line absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-brass to-transparent opacity-60 shadow-[0_0_15px_#d3b066]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-8 border-b border-paper/10 pb-10 lg:flex-row lg:items-end">
          <div>
            <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.3em] text-brass-300 uppercase">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brass opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brass" />
              </span>
              <span>Section 04 · Enterprise Client Showcase</span>
            </div>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl text-paper">
              Our Valuable <span className="italic font-light text-brass-300">Clients</span>
            </h2>
            <p className="mt-3 max-w-2xl font-body text-base text-sage sm:text-lg">
              Thank you for trusting GKT International — powering the hygiene &amp; maintenance standards of Singapore&apos;s Michelin-starred kitchens, 5-star hotels, and industrial giants.
            </p>
          </div>

          {/* Controls: View Mode Switcher + Stats */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="inline-flex rounded-lg border border-brass/40 bg-pine-900/90 p-1 backdrop-blur-md">
              <button
                onClick={() => setViewMode("stream")}
                className={cn(
                  "flex items-center gap-2 rounded-md px-3.5 py-2 font-mono text-xs font-semibold tracking-wider uppercase transition-all",
                  viewMode === "stream"
                    ? "bg-brass text-pine-950 shadow-md"
                    : "text-paper/70 hover:text-paper",
                )}
              >
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 4h12M2 8h12M2 12h12" />
                </svg>
                <span>Live Stream</span>
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={cn(
                  "flex items-center gap-2 rounded-md px-3.5 py-2 font-mono text-xs font-semibold tracking-wider uppercase transition-all",
                  viewMode === "grid"
                    ? "bg-brass text-pine-950 shadow-md"
                    : "text-paper/70 hover:text-paper",
                )}
              >
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="5" height="5" />
                  <rect x="9" y="2" width="5" height="5" />
                  <rect x="2" y="9" width="5" height="5" />
                  <rect x="9" y="9" width="5" height="5" />
                </svg>
                <span>All Logos (31)</span>
              </button>
            </div>

            <div className="hidden sm:flex items-center gap-4 rounded-lg border border-brass/40 bg-pine-900/90 px-5 py-2.5 backdrop-blur-md">
              <div>
                <p className="font-display text-2xl font-bold text-champagne leading-none">31</p>
                <p className="font-mono text-[8px] tracking-widest text-sage uppercase">Partners</p>
              </div>
              <div className="h-6 w-px bg-paper/20" />
              <div>
                <p className="font-display text-2xl font-bold text-champagne leading-none">140+</p>
                <p className="font-mono text-[8px] tracking-widest text-sage uppercase">Contracts</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Interactive Spotlight Banner */}
        <div className="mt-6 sm:mt-8 rounded-xl border border-brass/35 bg-pine-900/70 p-4 sm:p-6 backdrop-blur-md shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
          <div className="grid gap-5 sm:gap-6 lg:grid-cols-12 lg:items-center">
            {/* Left: Logo Graphic */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 lg:col-span-4">
              <div className="relative flex h-20 w-28 sm:h-24 sm:w-32 shrink-0 items-center justify-center rounded-lg border border-brass/40 overflow-hidden shadow-inner">
                {/* Concentric SVG scanning radar ring */}
                <div className="radar-wave absolute h-20 w-20 rounded-full border border-brass/60" />
                <ClientLogoGraphic client={selectedClient} className="h-full w-full" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[9.5px] sm:text-[10px] font-semibold tracking-widest text-brass-300 uppercase">
                    {selectedClient.badge || "Verified Partner"}
                  </span>
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-paper truncate">
                  {selectedClient.name}
                </h3>
                <p className="font-body text-xs text-sage">
                  {selectedClient.categoryLabel}
                </p>
              </div>
            </div>

            {/* Middle: Operational Status */}
            <div className="lg:col-span-5 border-y border-paper/10 py-3 lg:border-y-0 lg:border-x lg:px-6">
              <p className="font-mono text-[9.5px] sm:text-[10px] tracking-widest text-brass-300 uppercase">
                GKT Standard &amp; Contract Scope
              </p>
              <p className="mt-1 font-body text-xs sm:text-sm text-paper/90 leading-relaxed">
                {selectedClient.subtext || "Full scheduled deep cleaning & sanitisation contract with dedicated certified site supervisor."}
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5 sm:gap-2">
                <span className="rounded bg-pine-950/80 px-2 py-0.5 font-mono text-[8.5px] sm:text-[9px] text-champagne border border-brass/30">
                  NEA Standard Verified
                </span>
                <span className="rounded bg-pine-950/80 px-2 py-0.5 font-mono text-[8.5px] sm:text-[9px] text-champagne border border-brass/30">
                  bizSAFE Level 3
                </span>
                <span className="rounded bg-pine-950/80 px-2 py-0.5 font-mono text-[8.5px] sm:text-[9px] text-champagne border border-brass/30">
                  24/7 Hotline Coverage
                </span>
              </div>
            </div>

            {/* Right: Action Callout */}
            <div className="flex flex-col items-start lg:items-end justify-center lg:col-span-3">
              <a
                href="/#/contact"
                className="btn-sweep inv inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded border border-brass bg-brass px-5 py-2.5 font-mono text-xs font-semibold tracking-[0.18em] text-pine-950 uppercase transition-all hover:scale-105 active:scale-95"
              >
                <span>Partner With GKT</span>
                <Icon.ArrowNE className="h-3 w-3" />
              </a>
              <span className="mt-1.5 sm:mt-2 font-mono text-[8.5px] sm:text-[9px] text-sage/70 tracking-widest uppercase">
                Zero-obligation site inspection
              </span>
            </div>
          </div>
        </div>

        {/* View Mode 1: Kinetic Infinite SVG Logo Streams (Live Stream) */}
        {viewMode === "stream" && (
          <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-5">
            {/* Top Stream: Moving Left */}
            <div className="marquee-paused overflow-hidden rounded-xl border border-brass/25 bg-pine-950/80 py-3 sm:py-4 shadow-lg [mask-image:linear-gradient(to_right,transparent,black_2%,black_98%,transparent)]" aria-label="Client logos lane 1">
              <div className="marquee-track flex w-max items-center gap-4 sm:gap-5">
                {[0, 1].map((copy) => (
                  <div key={copy} className="flex items-center gap-4 sm:gap-5" aria-hidden={copy === 1}>
                    {row1.map((client) => (
                      <div
                        key={`${copy}-${client.id}`}
                        onClick={() => setSelectedClient(client)}
                        className={cn(
                          "w-44 sm:w-56 shrink-0 transition-transform duration-300 cursor-pointer",
                          selectedClient.id === client.id && "scale-105",
                        )}
                      >
                        <ClientLogoTileCard
                          client={client}
                          selected={selectedClient.id === client.id}
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Stream: Moving Right */}
            <div className="marquee-paused overflow-hidden rounded-xl border border-brass/25 bg-pine-950/80 py-3 sm:py-4 shadow-lg [mask-image:linear-gradient(to_right,transparent,black_2%,black_98%,transparent)]" aria-label="Client logos lane 2">
              <div className="marquee-track reverse flex w-max items-center gap-4 sm:gap-5">
                {[0, 1].map((copy) => (
                  <div key={copy} className="flex items-center gap-4 sm:gap-5" aria-hidden={copy === 1}>
                    {row2.map((client) => (
                      <div
                        key={`${copy}-${client.id}`}
                        onClick={() => setSelectedClient(client)}
                        className={cn(
                          "w-44 sm:w-56 shrink-0 transition-transform duration-300 cursor-pointer",
                          selectedClient.id === client.id && "scale-105",
                        )}
                      >
                        <ClientLogoTileCard
                          client={client}
                          selected={selectedClient.id === client.id}
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* View Mode 2: Interactive Grid Wall with Sector Tabs */}
        {viewMode === "grid" && (
          <div className="mt-6 sm:mt-8 space-y-5 sm:space-y-6">
            {/* Sector Tabs with horizontal swipe on mobile */}
            <div className="flex items-center gap-2 border-b border-paper/10 pb-3 sm:pb-4 overflow-x-auto no-scrollbar flex-nowrap sm:flex-wrap">
              {CLIENT_SECTORS.map((sector) => (
                <button
                  key={sector.key}
                  onClick={() => setActiveTab(sector.key as ClientCategory)}
                  className={cn(
                    "rounded-full px-3.5 py-1.5 sm:px-4 sm:py-2 font-mono text-[11px] sm:text-xs font-medium tracking-[0.12em] sm:tracking-[0.15em] uppercase whitespace-nowrap transition-all duration-300 shrink-0",
                    activeTab === sector.key
                      ? "bg-brass text-pine-950 shadow-[0_0_20px_rgba(176,132,44,0.4)] font-bold"
                      : "border border-paper/15 text-paper/70 hover:border-brass/50 hover:text-paper",
                  )}
                >
                  {sector.label}
                </button>
              ))}
            </div>

            {/* 31 Logo Tiles Grid */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              {filteredClients.map((client) => (
                <ClientLogoTileCard
                  key={client.id}
                  client={client}
                  selected={selectedClient.id === client.id}
                  onClick={() => setSelectedClient(client)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Trust Endorsement Footer Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-xl border border-brass/25 bg-pine-900/40 p-5 sm:flex-row sm:px-8">
          <p className="font-mono text-xs tracking-wider text-sage">
            <span className="text-brass-300 font-bold">140+ Contracts Active</span> across Central Kitchens, Michelin-Starred Restaurants, Luxury Hotels, and Manufacturing Plants in Singapore.
          </p>
          <div className="flex items-center gap-3">
            <span className="border border-brass/40 px-3 py-1 font-mono text-[10px] tracking-widest text-champagne uppercase rounded">
              NEA Licensed
            </span>
            <span className="border border-brass/40 px-3 py-1 font-mono text-[10px] tracking-widest text-champagne uppercase rounded">
              bizSAFE 3
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
