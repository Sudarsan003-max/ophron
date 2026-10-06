import { useEffect, useRef, useState } from "react";
import {
  Users,
  ShieldCheck,
  Building2,
  Cpu,
  TrendingUp,
  ArrowRight,
  Layers,
} from "lucide-react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [time, setTime] = useState("");
  const [currentPath, setCurrentPath] = useState(
    typeof window !== "undefined" ? window.location.pathname || "/" : "/"
  );

  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const onLocationChange = () => {
      setCurrentPath(window.location.pathname || "/");
      setServicesDropdownOpen(false);
      setOpen(false);
    };
    window.addEventListener("popstate", onLocationChange);
    window.addEventListener("hashchange", onLocationChange);

    const handleClickOutside = (event: globalThis.MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicesDropdownOpen(false);
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    const t = setInterval(() => {
      const d = new Date();
      setTime(
        d.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone: "Asia/Kolkata",
        }) + " IST"
      );
    }, 1000);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("popstate", onLocationChange);
      window.removeEventListener("hashchange", onLocationChange);
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(t);
      if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 200);
  };

  const links = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/services", label: "SERVICES", hasDropdown: true },
    { href: "/why", label: "WHY US" },
    { href: "/gallery", label: "GALLERY" },
    { href: "/blog", label: "BLOG" },
    { href: "/contact", label: "CONTACT" },
  ];

  const corePillars = [
    {
      icon: Users,
      tag: "PILLAR 01",
      title: "OPHRON People",
      subtitle: "Vetted hospitality stewarding, kitchen helpers & venue cleaners",
      badge: "WSQ Vetted",
      href: "/services?service=people",
    },
    {
      icon: ShieldCheck,
      tag: "PILLAR 02",
      title: "OPHRON Hygiene",
      subtitle: "SFA kitchen deep cleans, exhaust ducts & NEA disinfection",
      badge: "SFA Grade A",
      href: "/services?service=hygiene",
    },
    {
      icon: Building2,
      tag: "PILLAR 03",
      title: "OPHRON Facilities",
      subtitle: "High-rise IRATA rope access façade, event resets & IFM Lite",
      badge: "IRATA L3",
      href: "/services?service=facilities",
    },
    {
      icon: Cpu,
      tag: "PILLAR 04",
      title: "OPHRON Technology",
      subtitle: "Connected hospitality POS, AI shift tracking & SaaS telemetry",
      badge: "Cloud POS",
      href: "/services?service=technology",
    },
    {
      icon: TrendingUp,
      tag: "PILLAR 05",
      title: "Commercial Intelligence",
      subtitle: "Labor yield optimization, RevPASH & executive margin advisory",
      badge: "Yield Strategy",
      href: "/services?service=intelligence",
    },
  ];

  const isActive = (linkHref: string) => {
    const p = currentPath.toLowerCase().replace(/\/+$/, "") || "/";
    if (linkHref === "/" && (p === "/" || p === "/home")) {
      return true;
    }
    if (linkHref === "/services" && p.startsWith("/services")) {
      return true;
    }
    return p === linkHref;
  };

  return (
    <>
      {/* Top Ticker */}
      <div
        className="fixed top-0 inset-x-0 z-40 text-bone border-b border-[#B7A38B]/20"
        style={{ background: "#032147", color: "#EDE5DA" }}
      >
        <div className="flex items-center justify-between px-5 py-2 text-[10px] font-mono tracking-[0.2em] uppercase">
          <div className="flex items-center gap-4">
            <span className="opacity-90 font-bold text-[#B7A38B]">
              SINGAPORE & INTERNATIONAL
            </span>
            <span className="opacity-40 hidden sm:inline">|</span>
            <span className="hidden sm:inline font-bold text-[#EDE5DA]/90">
              OPHRON HOSPITALITY OPERATIONAL INFRASTRUCTURE PLATFORM
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="tel:+6592951155"
              className="hidden md:inline font-bold text-[#B7A38B] hover:text-white transition"
            >
              SG HOTLINE: +65 9295 1155
            </a>
            <span className="opacity-50 hidden md:inline">·</span>
            <span className="tabular-nums font-semibold">{time || "— —:— IST"}</span>
          </div>
        </div>
      </div>

      <header
        className="fixed top-9 inset-x-0 z-50 transition-all duration-500"
        style={{ paddingTop: scrolled ? 8 : 16 }}
      >
        <div className="mx-auto max-w-[1400px] px-5 relative" ref={dropdownRef}>
          <div
            className={`flex items-center justify-between rounded-full pl-3 pr-2 py-2 transition-all duration-500 ${
              scrolled
                ? "bg-[#032147]/95 backdrop-blur-xl border border-[#B7A38B]/30 shadow-[0_10px_40px_-10px_rgba(3,33,71,.6)]"
                : "bg-[#032147] border border-[#032147]"
            }`}
          >
            {/* Brand Logo */}
            <a
              href="/"
              className="flex items-center gap-3 group pl-2"
              onClick={() => setServicesDropdownOpen(false)}
            >
              <span className="relative grid place-items-center h-9 w-9 rounded-full bg-[#B7A38B] shadow-[0_2px_10px_rgba(183,163,139,0.3)] transition-transform group-hover:scale-105">
                <img
                  src="/images/brand/ophron-navy-emblem-transparent.png"
                  className="h-[20px] w-auto object-contain"
                  alt="OPHRON Emblem"
                />
              </span>
              <div className="leading-none">
                <div
                  className="text-[15px] font-display font-bold tracking-tight text-bone"
                  style={{ color: "#EDE5DA" }}
                >
                  OPHRON
                </div>
                <div className="text-[8px] font-mono tracking-[0.2em] uppercase text-[#B7A38B] mt-0.5 font-bold">
                  Operational Platform · SG
                </div>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav
              className="hidden md:flex items-center gap-0.5 text-[12px] uppercase font-heading font-medium tracking-wider"
              style={{ color: "#EDE5DA" }}
            >
              {links.map((l) => {
                const active = isActive(l.href);
                if (l.hasDropdown) {
                  return (
                    <div
                      key={l.label}
                      className="relative"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <button
                        type="button"
                        onClick={() => setServicesDropdownOpen((prev) => !prev)}
                        className={`relative flex items-center gap-1.5 px-3.5 py-2 rounded-full transition cursor-pointer ${
                          active || servicesDropdownOpen
                            ? "text-white font-semibold"
                            : "hover:bg-white/10"
                        }`}
                        aria-expanded={servicesDropdownOpen}
                      >
                        <span>{l.label}</span>
                        <svg
                          viewBox="0 0 24 24"
                          className={`h-3 w-3 text-[#B7A38B] transition-transform duration-300 ${
                            servicesDropdownOpen ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                        {(active || servicesDropdownOpen) && (
                          <span className="absolute bottom-0.5 left-3.5 right-3.5 h-[2.5px] bg-[#B7A38B] rounded-full" />
                        )}
                      </button>
                    </div>
                  );
                }

                return (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={() => setServicesDropdownOpen(false)}
                    className={`relative flex items-center gap-1 px-3.5 py-2 rounded-full transition ${
                      active ? "text-white font-semibold" : "hover:bg-white/10"
                    }`}
                  >
                    <span>{l.label}</span>
                    {active && (
                      <span className="absolute bottom-0.5 left-3.5 right-3.5 h-[2.5px] bg-[#B7A38B] rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right Audit CTA & Mobile toggle */}
            <div className="flex items-center gap-2">
              <a
                href="/contact"
                onClick={() => setServicesDropdownOpen(false)}
                className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#B7A38B] text-[#032147] pl-4 pr-1.5 py-1.5 text-[12px] font-heading font-semibold hover:bg-white hover:text-[#032147] transition group"
              >
                Request Platform Audit
                <span className="grid place-items-center h-7 w-7 rounded-full bg-[#032147] text-[#EDE5DA] transition-transform group-hover:rotate-45">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3 w-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17 17 7M9 7h8v8" />
                  </svg>
                </span>
              </a>

              <button
                onClick={() => setOpen((o) => !o)}
                className="md:hidden grid place-items-center h-11 w-11 rounded-full border border-white/15"
                aria-label="Menu"
                aria-expanded={open}
                aria-controls="mobile-nav-drawer"
                style={{ color: "#EDE5DA" }}
              >
                <div className="space-y-1.5">
                  <span
                    className={`block h-px w-5 bg-current transition ${
                      open ? "translate-y-1.5 rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`block h-px w-5 bg-current transition ${
                      open ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`block h-px w-5 bg-current transition ${
                      open ? "-translate-y-1.5 -rotate-45" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>

          {/* ============================================================== */}
          {/*  PREMIUM, CLEAN & EASY-TO-UNDERSTAND SERVICES DROPDOWN        */}
          {/* ============================================================== */}
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`hidden md:block absolute left-1/2 -translate-x-1/2 top-full mt-3 w-full max-w-4xl transition-all duration-300 ease-out origin-top z-50 ${
              servicesDropdownOpen
                ? "opacity-100 translate-y-0 pointer-events-auto scale-100"
                : "opacity-0 -translate-y-3 pointer-events-none scale-[0.98]"
            }`}
          >
            {/* Ambient Shadow Box */}
            <div className="relative rounded-[28px] bg-[#021329]/98 backdrop-blur-2xl border-t border-t-white/40 border-x border-x-white/20 border-b border-b-white/10 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.95),0_0_30px_rgba(183,163,139,0.15)] p-6 sm:p-7 text-[#EDE5DA] overflow-hidden">
              
              {/* Top Specular Line */}
              <div className="absolute top-0 inset-x-8 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none" />

              {/* Clean Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#B7A38B]" />
                  <span className="text-[11px] font-mono tracking-[0.2em] text-[#B7A38B] uppercase font-bold">
                    OPHRON Operational Infrastructure
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#EDE5DA]/60 uppercase tracking-wider bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                  5 Core Strategic Pillars
                </span>
              </div>

              {/* 5 Clean Pillar Cards (Spacious, High-Legibility Grid) */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {corePillars.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.title}
                      href={item.href}
                      onClick={() => setServicesDropdownOpen(false)}
                      className="group relative flex flex-col justify-between p-4 rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border-t border-t-white/30 border-x border-x-white/10 border-b border-b-white/5 hover:border-t-white/70 hover:bg-white/[0.1] hover:scale-[1.02] transition-all duration-300 shadow-sm"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="h-9 w-9 rounded-xl bg-[#B7A38B]/20 border border-[#B7A38B]/40 grid place-items-center text-[#B7A38B] group-hover:bg-[#B7A38B] group-hover:text-[#032147] transition-colors">
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="text-[9.5px] font-mono text-[#B7A38B] font-bold uppercase bg-white/5 px-2 py-0.5 rounded-md border border-white/10">
                            {item.badge}
                          </span>
                        </div>

                        <div className="font-montserrat font-bold text-sm text-white group-hover:text-[#F3E5AB] transition-colors">
                          {item.title}
                        </div>

                        <p className="mt-1 text-xs font-inter text-[#EDE5DA]/75 leading-relaxed">
                          {item.subtitle}
                        </p>
                      </div>

                      <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#B7A38B] font-semibold">
                        <span>Explore Pillar</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </a>
                  );
                })}

                {/* 6th Card: All 14 Scopes & SOP Hub */}
                <a
                  href="/services"
                  onClick={() => setServicesDropdownOpen(false)}
                  className="group relative flex flex-col justify-between p-4 rounded-2xl bg-gradient-to-br from-[#B7A38B]/20 via-[#B7A38B]/10 to-transparent border border-[#B7A38B]/40 hover:border-[#B7A38B] hover:scale-[1.02] transition-all duration-300 shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="h-9 w-9 rounded-xl bg-[#B7A38B] text-[#032147] grid place-items-center shadow-md">
                        <Layers className="w-4 h-4" />
                      </div>
                      <span className="text-[9.5px] font-mono text-[#032147] font-bold uppercase bg-[#B7A38B] px-2 py-0.5 rounded-md">
                        14 Scopes
                      </span>
                    </div>

                    <div className="font-montserrat font-bold text-sm text-white group-hover:text-[#F3E5AB] transition-colors">
                      Master Services Catalog
                    </div>

                    <p className="mt-1 text-xs font-inter text-[#EDE5DA]/80 leading-relaxed">
                      Rope access, cleanrooms, marble honing & specialized chemical SOPs.
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-[#B7A38B]/30 flex items-center justify-between text-[11px] font-mono text-[#B7A38B] font-bold">
                    <span>View All Services</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              </div>

              {/* Bottom Clean Footer Bar */}
              <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#EDE5DA]/70">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    NEA Licensed
                  </span>
                  <span>·</span>
                  <span className="text-white font-semibold">bizSAFE Level 3</span>
                  <span>·</span>
                  <span className="text-[#B7A38B] font-semibold">100% WSQ Trained</span>
                </div>

                <a
                  href="/contact"
                  onClick={() => setServicesDropdownOpen(false)}
                  className="text-xs font-montserrat font-bold text-[#B7A38B] hover:text-white uppercase tracking-wider flex items-center gap-1.5 transition"
                >
                  <span>Request Custom SLA Assessment</span>
                  <span>→</span>
                </a>
              </div>

            </div>
          </div>

          {/* ============================================================== */}
          {/*  MOBILE MENU DRAWER                                          */}
          {/* ============================================================== */}
          <div
            id="mobile-nav-drawer"
            className={`md:hidden overflow-hidden transition-all duration-500 ${
              open
                ? "max-h-[85vh] mt-2 opacity-100 overflow-y-auto"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="rounded-3xl p-3 flex flex-col bg-[#032147] border border-[#B7A38B]/30 space-y-1">
              {links.map((l) => {
                const active = isActive(l.href);

                if (l.hasDropdown) {
                  return (
                    <div
                      key={l.label}
                      className="rounded-2xl overflow-hidden bg-white/[0.03] border border-white/5"
                    >
                      <button
                        type="button"
                        onClick={() => setMobileServicesOpen((prev) => !prev)}
                        className={`w-full flex items-center justify-between px-4 py-3 text-[13px] font-heading font-medium uppercase tracking-wider ${
                          active ? "text-[#B7A38B]" : ""
                        }`}
                        style={{ color: active ? "#B7A38B" : "#EDE5DA" }}
                      >
                        <span className="flex items-center gap-2 font-bold">
                          {l.label}
                          <span className="text-[9px] font-mono text-[#B7A38B] bg-[#B7A38B]/20 px-1.5 py-0.2 rounded font-bold">
                            5 PILLARS
                          </span>
                        </span>
                        <svg
                          viewBox="0 0 24 24"
                          className={`h-4 w-4 text-[#B7A38B] transition-transform duration-300 ${
                            mobileServicesOpen ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </button>

                      {/* Mobile Accordion Content */}
                      <div
                        className={`transition-all duration-300 overflow-hidden ${
                          mobileServicesOpen ? "max-h-[500px] px-3 pb-3" : "max-h-0"
                        }`}
                      >
                        <div className="pt-2 border-t border-white/10 space-y-2">
                          {corePillars.map((p) => {
                            const Icon = p.icon;
                            return (
                              <a
                                key={p.title}
                                href={p.href}
                                onClick={() => {
                                  setOpen(false);
                                  setMobileServicesOpen(false);
                                }}
                                className="flex items-center justify-between p-2 rounded-xl hover:bg-white/10 text-xs font-inter text-[#EDE5DA]/90"
                              >
                                <span className="flex items-center gap-2">
                                  <Icon className="w-3.5 h-3.5 text-[#B7A38B]" />
                                  <span className="font-semibold">{p.title}</span>
                                </span>
                                <span className="text-[9px] font-mono text-[#B7A38B]">
                                  {p.badge}
                                </span>
                              </a>
                            );
                          })}

                          <a
                            href="/services"
                            onClick={() => {
                              setOpen(false);
                              setMobileServicesOpen(false);
                            }}
                            className="mt-2 flex items-center justify-between p-2.5 rounded-xl bg-[#B7A38B]/20 text-white text-xs font-montserrat font-bold"
                          >
                            <span>Explore Full 14-Scope Catalog</span>
                            <span>→</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-2xl hover:bg-white/10 text-[13px] font-heading font-medium uppercase tracking-wider ${
                      active ? "text-[#B7A38B]" : ""
                    }`}
                    style={{ color: active ? "#B7A38B" : "#EDE5DA" }}
                  >
                    <span>{l.label}</span>
                    <span>↗</span>
                  </a>
                );
              })}

              <a
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 mx-1 inline-flex justify-center rounded-2xl bg-[#B7A38B] text-[#032147] px-4 py-3 text-sm font-heading font-semibold hover:bg-white transition"
              >
                Request Platform Audit →
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
