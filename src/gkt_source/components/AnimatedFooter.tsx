import { Link } from "react-router-dom";
import { cn } from "../utils/cn";
import { CONTACT, SERVICES, COMPANY_LINKS } from "../data/site";
import { Icon } from "./ui";
import { CompanyLogo } from "./CompanyLogo";

/* ------------------------------------------------------------------ */
/*  Animated SVG Footer for GKT International                         */
/* ------------------------------------------------------------------ */

export default function AnimatedFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-brass/30 bg-pine-950 text-paper" aria-label="Site Footer">
      {/* Background Animated SVG Waves, Light Ribbons & Ambient Grid + Singapore Skyline Line Art */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30 select-none" aria-hidden="true">
        <svg viewBox="0 0 1920 600" className="h-full w-full object-cover">
          <defs>
            <linearGradient id="footer-wave-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#b0842c" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#d3b066" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#14261c" stopOpacity="0.8" />
            </linearGradient>

            <linearGradient id="sg-sky-gold" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#b0842c" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#d3b066" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#ecd9ab" stopOpacity="0.3" />
            </linearGradient>

            <pattern id="footer-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#d3b066" strokeWidth="0.5" opacity="0.2" />
            </pattern>
          </defs>

          {/* Grid pattern */}
          <rect width="1920" height="600" fill="url(#footer-grid)" />

          {/* Singapore Landmark Silhouette Overlay Line Art */}
          <g stroke="url(#sg-sky-gold)" strokeWidth="1" opacity="0.5">
            {/* Marina Bay Sands */}
            <path d="M 1480 600 L 1480 320 L 1520 320 L 1520 600 M 1550 600 L 1550 310 L 1590 310 L 1590 600 M 1620 600 L 1620 300 L 1660 300 L 1660 600" />
            <path d="M 1450 310 Q 1570 280, 1700 290 C 1715 290, 1720 298, 1710 305 Q 1570 300, 1460 320 Z" fill="none" strokeWidth="1.5" />
            {/* Singapore Flyer */}
            <circle cx="1340" cy="380" r="70" strokeDasharray="4 4" />
            <circle cx="1340" cy="380" r="8" fill="#d3b066" />
            <line x1="1340" y1="380" x2="1300" y2="600" strokeWidth="1.5" />
            <line x1="1340" y1="380" x2="1380" y2="600" strokeWidth="1.5" />
            {/* Supertrees */}
            <path d="M 1760 600 C 1770 480, 1740 420, 1730 380 C 1760 350, 1800 350, 1830 380 C 1820 420, 1790 480, 1800 600" />
            <ellipse cx="1780" cy="370" rx="50" ry="18" strokeDasharray="3 3" />
          </g>

          {/* Flowing ambient curves */}
          <path
            d="M-200 450 C 400 300, 800 550, 1400 380 C 1700 300, 1950 420, 2200 350"
            fill="none"
            stroke="url(#footer-wave-grad)"
            strokeWidth="2.5"
            opacity="0.5"
          >
            <animate
              attributeName="d"
              values="
                M-200 450 C 400 300, 800 550, 1400 380 C 1700 300, 1950 420, 2200 350;
                M-200 420 C 400 380, 800 480, 1400 420 C 1700 350, 1950 380, 2200 420;
                M-200 450 C 400 300, 800 550, 1400 380 C 1700 300, 1950 420, 2200 350
              "
              dur="12s"
              repeatCount="indefinite"
            />
          </path>
        </svg>

        {/* Singapore Geographic Coordinates Watermark */}
        <div className="absolute bottom-4 right-8 flex items-center gap-3 font-mono text-[9px] sm:text-[10px] tracking-[0.28em] text-brass/35 uppercase">
          <span>SINGAPORE HQ</span>
          <span>·</span>
          <span>1.3521° N, 103.8198° E</span>
        </div>

        {/* Ambient Laser Beam */}
        <div className="scan-line absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-brass to-transparent opacity-40 shadow-[0_0_12px_#d3b066]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pt-16 pb-10 sm:px-8">
        {/* Top Banner: Big Statement + Animated 24/7 Hotline HUD */}
        <div className="flex flex-col justify-between gap-10 border-b border-paper/10 pb-12 lg:flex-row lg:items-end">
          {/* Brand Headline */}
          <div className="max-w-2xl">
            <div className="mb-5">
              <CompanyLogo size="lg" />
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brass opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brass" />
              </span>
              <p className="font-mono text-[11px] tracking-[0.32em] text-brass-300 uppercase">
                GKT International Pte Ltd · Singapore
              </p>
            </div>
            <h2 className="mt-4 font-display text-4xl leading-[1.08] font-semibold tracking-tight sm:text-5xl lg:text-6xl text-paper">
              Spotless is <span className="italic font-light text-brass-300">a standard,</span>
              <br />
              not an accident.
            </h2>
            <p className="mt-3 font-body text-sm text-sage sm:text-base">
              Certified commercial cleaning, kitchen exhaust degreasing, and facility maintenance partner backed by 20+ years of industry expertise.
            </p>
          </div>

          {/* Animated 24/7 Hotline Callout Card */}
          <div className="group relative overflow-hidden rounded-xl border border-brass/40 bg-pine-900/80 p-6 backdrop-blur-md transition-all duration-300 hover:border-brass hover:shadow-[0_0_30px_rgba(211,176,102,0.3)] lg:items-end">
            {/* Animated sound wave bars */}
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <p className="font-mono text-[10px] tracking-[0.25em] text-sage uppercase">24 / 7 Live Operations Hotline</p>
              </div>
              <div className="flex items-end gap-1 h-3" aria-hidden="true">
                <span className="w-0.5 bg-brass-300 animate-[pulse_1s_ease-in-out_infinite] h-2" />
                <span className="w-0.5 bg-brass-300 animate-[pulse_1.2s_ease-in-out_infinite] h-3" />
                <span className="w-0.5 bg-brass-300 animate-[pulse_0.8s_ease-in-out_infinite] h-1.5" />
                <span className="w-0.5 bg-brass-300 animate-[pulse_1.4s_ease-in-out_infinite] h-3" />
              </div>
            </div>

            <a
              href={CONTACT.telHref}
              className="u-sweep mt-3 block font-display text-4xl font-bold tracking-tight text-champagne sm:text-5xl transition-colors hover:text-white"
            >
              {CONTACT.hotlineDisplay}
            </a>

            <div className="mt-3 flex items-center justify-between pt-3 border-t border-paper/10">
              <span className="font-mono text-[9px] text-sage/80 tracking-widest uppercase">Immediate Response Island-Wide</span>
              <a
                href={CONTACT.waHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-[10px] font-semibold text-brass-300 hover:text-white transition-colors uppercase tracking-wider"
              >
                <Icon.WhatsApp className="h-3 w-3" />
                <span>WhatsApp Now</span>
              </a>
            </div>
          </div>
        </div>

        {/* Middle Navigation Columns */}
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Services */}
          <div>
            <div className="flex items-center gap-2 font-mono text-[11px] font-semibold tracking-[0.3em] text-brass-300 uppercase">
              <Icon.Diamond className="h-2 w-2 text-brass" />
              <span>Services</span>
            </div>
            <ul className="mt-5 space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={s.route}
                    className="u-sweep inline-flex items-center gap-2 text-sm text-paper/75 transition-colors hover:text-brass-300"
                  >
                    <span>{s.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Company */}
          <div>
            <div className="flex items-center gap-2 font-mono text-[11px] font-semibold tracking-[0.3em] text-brass-300 uppercase">
              <Icon.Diamond className="h-2 w-2 text-brass" />
              <span>Company</span>
            </div>
            <ul className="mt-5 space-y-2.5">
              {COMPANY_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="u-sweep inline-flex items-center gap-2 text-sm text-paper/75 transition-colors hover:text-brass-300"
                  >
                    <span>{l.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <div className="flex items-center gap-2 font-mono text-[11px] font-semibold tracking-[0.3em] text-brass-300 uppercase">
              <Icon.Diamond className="h-2 w-2 text-brass" />
              <span>Contact</span>
            </div>
            <ul className="mt-5 space-y-3 text-sm text-paper/75">
              <li className="flex gap-3">
                <Icon.Phone className="mt-0.5 h-4 w-4 shrink-0 text-brass-300" />
                <div className="flex flex-col">
                  <a href={CONTACT.telHref} className="u-sweep font-mono font-medium hover:text-brass-300">
                    {CONTACT.hotlineDisplay}
                  </a>
                  <a href={CONTACT.telSecondaryHref} className="u-sweep font-mono font-medium text-paper/70 hover:text-brass-300">
                    {CONTACT.hotlineSecondary}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Icon.WhatsApp className="mt-0.5 h-4 w-4 shrink-0 text-brass-300" />
                <div className="flex flex-col">
                  <a href={CONTACT.waHref} target="_blank" rel="noreferrer" className="u-sweep font-mono font-medium hover:text-brass-300">
                    {CONTACT.whatsappDisplay}
                  </a>
                  <a href={CONTACT.waSecondaryHref} target="_blank" rel="noreferrer" className="u-sweep font-mono font-medium text-paper/70 hover:text-brass-300">
                    {CONTACT.whatsappSecondary}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Icon.Mail className="mt-0.5 h-4 w-4 shrink-0 text-brass-300" />
                <div className="flex flex-col">
                  <a href={`mailto:${CONTACT.email}`} className="u-sweep font-mono text-xs hover:text-brass-300">
                    {CONTACT.email}
                  </a>
                  <a href={`mailto:${CONTACT.emailSecondary}`} className="u-sweep font-mono text-xs text-paper/70 hover:text-brass-300">
                    {CONTACT.emailSecondary}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Icon.Pin className="mt-0.5 h-4 w-4 shrink-0 text-brass-300" />
                <span className="text-xs leading-relaxed">{CONTACT.address}</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Accreditations with Animated Badges */}
          <div>
            <div className="flex items-center gap-2 font-mono text-[11px] font-semibold tracking-[0.3em] text-brass-300 uppercase">
              <Icon.Diamond className="h-2 w-2 text-brass" />
              <span>Accreditations</span>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-2.5">
              {[
                { title: "NEA Licensed", desc: "Environmental Health" },
                { title: "bizSAFE Level 3", desc: "Workplace Safety" },
                { title: "WSQ Trained", desc: "Skills Certified" },
                { title: "ISO Aligned", desc: "Rigorous SOPs" },
              ].map((a) => (
                <div
                  key={a.title}
                  className="group/badge relative overflow-hidden rounded-lg border border-brass/35 bg-pine-900/60 p-2.5 transition-all duration-300 hover:border-brass hover:bg-pine-900 hover:scale-105"
                >
                  <div className="flex items-center gap-1.5 text-brass-300">
                    <Icon.Shield className="h-3.5 w-3.5" />
                    <span className="font-mono text-[10px] font-bold tracking-wider uppercase text-champagne">
                      {a.title}
                    </span>
                  </div>
                  <p className="mt-1 font-body text-[9px] text-sage/80 leading-tight">{a.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs leading-relaxed text-sage border-t border-paper/10 pt-4">
              Cleaning and maintenance partner to commercial kitchens, healthcare facilities, and hotels across Singapore — backed by 20+ years of industry expertise.
            </p>
          </div>
        </div>

        {/* Bottom Copyright & Guarantee Bar */}
        <div className="flex flex-col items-start justify-between gap-4 border-t border-paper/10 pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-[10px] tracking-[0.22em] text-sage uppercase">
            © 2026 GKT International Pte Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="font-mono text-[10px] tracking-[0.22em] text-sage uppercase flex items-center gap-2">
              <Icon.Diamond className="h-1.5 w-1.5 text-brass" />
              Precision · Care · Continuity
            </span>
            <span className="hidden sm:inline-block h-3 w-px bg-paper/20" />
            <span className="font-mono text-[10px] tracking-[0.2em] text-brass-300 uppercase">
              Singapore Standard
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
