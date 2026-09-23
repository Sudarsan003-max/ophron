import { useEffect, useRef, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [time, setTime] = useState("");
  const [hash, setHash] = useState(window.location.hash || "#top");
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    
    const onHashChange = () => {
      setHash(window.location.hash || "#top");
      setServicesDropdownOpen(false);
      setOpen(false);
    };
    window.addEventListener("hashchange", onHashChange);

    const handleClickOutside = (event: MouseEvent) => {
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
        d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "Asia/Kolkata" }) + " IST"
      );
    }, 1000);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", onHashChange);
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
    }, 180);
  };

  const links = [
    { href: "#top", label: "HOME" },
    { href: "#about", label: "ABOUT" },
    { href: "#services", label: "SERVICES", hasDropdown: true },
    { href: "#why", label: "WHY US" },
    { href: "#gallery", label: "GALLERY" },
    { href: "#blog", label: "BLOG" },
    { href: "#contact", label: "CONTACT" },
  ];

  const specializedServices = [
    {
      title: "Disinfecting & Decontamination",
      subtitle: "Microbial suppression, electrostatic spraying & NEA bio-kill protocols",
      href: "#services?service=disinfecting-services",
      tag: "SOP 01",
    },
    {
      title: "Commercial Kitchen & Line Deep Cleans",
      subtitle: "Cookline degreasing, exhaust hoods, ducts & SFA compliance",
      href: "#services?service=dishwashing-kitchen",
      tag: "SOP 02",
    },
    {
      title: "Cleanroom & Healthcare Maintenance",
      subtitle: "ISO Class 5–8 sterile facility maintenance & surgical suite protocols",
      href: "#services?service=cleanroom-healthcare",
      tag: "SOP 03",
    },
    {
      title: "Carpet & Upholstery Steam Extraction",
      subtitle: "80°C thermal extraction & low-moisture encapsulation restoration",
      href: "#services?service=carpet-upholstery",
      tag: "SOP 04",
    },
    {
      title: "Marble Diamond & Powder Polishing",
      subtitle: "Planetary diamond grinding, crystallization & mirror finish honing",
      href: "#services?service=marble-polishing",
      tag: "SOP 05",
    },
    {
      title: "High-Rise Facade & Rope Access",
      subtitle: "IRATA industrial abseiling, BMU & de-ionized pure-water washing",
      href: "#services?service=facade-cleaning",
      tag: "SOP 06",
    },
    {
      title: "Marina & Superyacht Detailing",
      subtitle: "Teak deck restoration, hull descaling, gelcoat compounding & cabin care",
      href: "#services?service=yacht-marina-detailing",
      tag: "SOP 07",
    },
    {
      title: "Post-Renovation & Handover Deep Cleans",
      subtitle: "HEPA silica dust removal, paint/cement stripping & defect-free sign-off",
      href: "#services?service=post-renovation-cleaning",
      tag: "SOP 08",
    },
    {
      title: "Indoor Air Quality (IAQ) & UV-C",
      subtitle: "Sensor monitoring, HVAC chemical wash & germicidal UV-C coils",
      href: "#services?service=air-quality-testing",
      tag: "SOP 09",
    },
  ];

  const masterPillars = [
    {
      title: "OPHRON PEOPLE",
      subtitle: "F&B stewarding, kitchen helpers, dishwashers, utility porters & cleaners",
      href: "#services?service=people",
      tag: "Pillar 01",
    },
    {
      title: "OPHRON HYGIENE",
      subtitle: "Commercial, F&B kitchen, healthcare, carpet, marble & air hygiene",
      href: "#services?service=hygiene",
      tag: "Pillar 02",
    },
    {
      title: "OPHRON FACILITIES",
      subtitle: "IFM Lite, facade abseiling, event turnover, post-renovation & yachts",
      href: "#services?service=facilities",
      tag: "Pillar 03",
    },
    {
      title: "OPHRON TECHNOLOGY",
      subtitle: "Hospitality SaaS, AI automation & real-time operational reporting",
      href: "#services?service=technology",
      tag: "Pillar 04",
    },
    {
      title: "COMMERCIAL INTELLIGENCE",
      subtitle: "Labor optimization, cost reduction & executive margin advisory",
      href: "#services?service=intelligence",
      tag: "Pillar 05",
    },
  ];

  const isActive = (linkHref: string) => {
    if ((linkHref === "#top" || linkHref === "#home") && (hash === "" || hash === "#top" || hash === "#home")) {
      return true;
    }
    if (linkHref === "#services" && hash.startsWith("#services")) {
      return true;
    }
    return hash === linkHref;
  };

  return (
    <>
      {/* Top ticker */}
      <div className="fixed top-0 inset-x-0 z-40 text-bone border-b border-[#B7A38B]/20" style={{ background: "#032147", color: "#EDE5DA" }}>
        <div className="flex items-center justify-between px-5 py-2 text-[10px] font-mono tracking-[0.2em] uppercase">
          <div className="flex items-center gap-4">
            <span className="opacity-90 font-bold text-[#B7A38B]">SINGAPORE & INTERNATIONAL</span>
            <span className="opacity-40 hidden sm:inline">|</span>
            <span className="hidden sm:inline font-bold text-[#EDE5DA]/90">OPHRON HOSPITALITY OPERATIONAL INFRASTRUCTURE PLATFORM</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+6592951155" className="hidden md:inline font-bold text-[#B7A38B] hover:text-white transition">
              SG HOTLINE: +65 9295 1155
            </a>
            <span className="opacity-50 hidden md:inline">·</span>
            <span className="tabular-nums font-semibold">{time || "— —:— IST"}</span>
          </div>
        </div>
      </div>

      <header className="fixed top-9 inset-x-0 z-50 transition-all duration-500" style={{ paddingTop: scrolled ? 8 : 16 }}>
        <div className="mx-auto max-w-[1400px] px-5 relative" ref={dropdownRef}>
          <div
            className={`flex items-center justify-between rounded-full pl-3 pr-2 py-2 transition-all duration-500 ${
              scrolled
                ? "bg-[#032147]/95 backdrop-blur-xl border border-[#B7A38B]/30 shadow-[0_10px_40px_-10px_rgba(3,33,71,.6)]"
                : "bg-[#032147] border border-[#032147]"
            }`}
          >
            {/* Logo */}
            <a href="#top" className="flex items-center gap-3 group pl-2" onClick={() => setServicesDropdownOpen(false)}>
              <span className="relative grid place-items-center h-9 w-9 rounded-full bg-[#B7A38B] shadow-[0_2px_10px_rgba(183,163,139,0.3)] transition-transform group-hover:scale-105">
                <img src="/images/brand/ophron-navy-emblem-transparent.png" className="h-[20px] w-auto object-contain" alt="OPHRON Emblem" />
              </span>
              <div className="leading-none">
                <div className="text-[15px] font-display font-bold tracking-tight text-bone" style={{ color: "#EDE5DA" }}>
                  OPHRON
                </div>
                <div className="text-[8px] font-mono tracking-[0.2em] uppercase text-[#B7A38B] mt-0.5 font-bold">Operational Platform · SG</div>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-0.5 text-[12px] uppercase font-heading font-medium tracking-wider" style={{ color: "#EDE5DA" }}>
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
                          active || servicesDropdownOpen ? "text-white font-semibold" : "hover:bg-white/10"
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
                href="#contact"
                onClick={() => setServicesDropdownOpen(false)}
                className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#B7A38B] text-[#032147] pl-4 pr-1.5 py-1.5 text-[12px] font-heading font-semibold hover:bg-white hover:text-[#032147] transition group"
              >
                Request Platform Audit
                <span className="grid place-items-center h-7 w-7 rounded-full bg-[#032147] text-[#EDE5DA] transition-transform group-hover:rotate-45">
                  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17 17 7M9 7h8v8" />
                  </svg>
                </span>
              </a>
              <button
                onClick={() => setOpen((o) => !o)}
                className="md:hidden grid place-items-center h-11 w-11 rounded-full border border-white/15"
                aria-label="Menu"
                style={{ color: "#EDE5DA" }}
              >
                <div className="space-y-1.5">
                  <span className={`block h-px w-5 bg-current transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
                  <span className={`block h-px w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
                  <span className={`block h-px w-5 bg-current transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
                </div>
              </button>
            </div>
          </div>

          {/* ============================================================== */}
          {/*  DESKTOP CLEAN MEGA-DROPDOWN BOX FOR SERVICES (LUXURY GLASS)  */}
          {/* ============================================================== */}
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`hidden md:block absolute left-4 right-4 top-full mt-3 transition-all duration-300 ease-out origin-top z-50 ${
              servicesDropdownOpen
                ? "opacity-100 translate-y-0 pointer-events-auto scale-100"
                : "opacity-0 -translate-y-4 pointer-events-none scale-[0.97]"
            }`}
          >
            {/* Outer Glow Halo */}
            <div className="relative">
              <div className="absolute -inset-1 rounded-[34px] bg-gradient-to-r from-[#B7A38B]/35 via-[#D4AF37]/25 to-[#B7A38B]/35 blur-xl opacity-80 pointer-events-none" />

              <div className="relative rounded-[32px] bg-gradient-to-b from-[#031C3A]/98 via-[#02132B]/98 to-[#010B18]/98 backdrop-blur-3xl border-2 border-[#B7A38B]/50 p-6 sm:p-7 lg:p-8 shadow-[0_35px_100px_-10px_rgba(0,0,0,0.95),0_0_50px_rgba(183,163,139,0.25)] text-[#EDE5DA] overflow-hidden">
                {/* Background Ambient Blueprint Grid & Glow Blobs */}
                <div
                  className="absolute inset-0 opacity-[0.07] pointer-events-none"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 50% 50%, rgba(212,175,55,0.6) 1.2px, transparent 1.2px)",
                    backgroundSize: "28px 28px",
                  }}
                />
                <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-[#B7A38B]/20 blur-3xl pointer-events-none" />
                <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-[#0A305C]/50 blur-3xl pointer-events-none" />

                {/* Top Master Platform Hub Bar */}
                <a
                  href="#services"
                  onClick={() => setServicesDropdownOpen(false)}
                  className="group relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-white/[0.07] via-[#B7A38B]/15 to-white/[0.04] border border-[#B7A38B]/45 hover:border-[#B7A38B] hover:from-[#B7A38B]/25 hover:to-[#B7A38B]/15 transition-all duration-300 mb-6 shadow-xl overflow-hidden"
                >
                  <div className="absolute top-0 left-0 h-full w-1.5 bg-gradient-to-b from-[#B7A38B] to-transparent" />
                  
                  <div className="flex items-center gap-4">
                    <span className="grid place-items-center h-12 w-12 rounded-2xl bg-gradient-to-br from-[#B7A38B] to-[#E0D0BB] p-2.5 shadow-[0_0_20px_rgba(183,163,139,0.4)] group-hover:scale-108 transition-transform shrink-0">
                      <img
                        src="/images/brand/ophron-navy-emblem-transparent.png"
                        className="h-full w-auto object-contain"
                        alt="OPHRON"
                      />
                    </span>
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="font-canela font-bold text-lg sm:text-xl text-white tracking-tight group-hover:text-[#F3E5AB] transition-colors">
                          All Services & Master Platform Hub
                        </span>
                        <span className="text-[10px] font-mono uppercase bg-[#B7A38B]/30 text-[#EDE5DA] border border-[#B7A38B]/50 px-2.5 py-0.5 rounded-full font-bold shadow-sm">
                          14 ENTERPRISE SCOPES
                        </span>
                      </div>
                      <p className="text-[13px] font-inter text-[#EDE5DA]/85 mt-1">
                        Explore the complete unified scope, chemical SOPs, and technical blueprints across Singapore & internationally.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#032147] border border-[#B7A38B]/40 text-xs font-montserrat font-bold text-[#B7A38B] group-hover:bg-[#B7A38B] group-hover:text-[#032147] transition-all whitespace-nowrap shadow-md group-hover:scale-105">
                    <span>Explore Master Platform Overview</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </a>

                {/* Two Columns: 9 Specialized Services vs 5 Master Platform Pillars */}
                <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start relative z-10">
                  
                  {/* Column 1: 9 Specialized Operational Services (7 Cols) */}
                  <div className="lg:col-span-7 space-y-3.5">
                    <div className="flex items-center justify-between border-b border-white/15 pb-3">
                      <div className="flex items-center gap-2.5">
                        <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#B7A38B] font-bold flex items-center gap-2">
                          <span className="text-[#D4AF37]">◆</span>
                          [ 9 Specialized Operational SOPs ]
                        </span>
                        <span className="text-[9px] font-mono uppercase bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 px-2 py-0.5 rounded-full font-semibold hidden sm:inline">
                          SFA · NEA · ISO Class
                        </span>
                      </div>
                      <a
                        href="#services?tab=catalog"
                        onClick={() => setServicesDropdownOpen(false)}
                        className="text-[11px] font-mono text-[#EDE5DA]/70 hover:text-[#B7A38B] transition uppercase font-bold flex items-center gap-1 group/link"
                      >
                        <span>View SOP Catalog</span>
                        <span className="group-link:translate-x-0.5 transition-transform">↗</span>
                      </a>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-2.5 max-h-[440px] overflow-y-auto no-scrollbar pr-1">
                      {specializedServices.map((item) => (
                        <a
                          key={item.title}
                          href={item.href}
                          onClick={() => setServicesDropdownOpen(false)}
                          className="group/item flex items-start gap-3 p-3 sm:p-3.5 rounded-2xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 hover:border-[#B7A38B]/60 hover:bg-[#032349]/90 transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-[1.01]"
                        >
                          {/* SOP Tag & Icon Box */}
                          <div className="grid place-items-center h-8 w-8 rounded-xl bg-white/5 border border-white/15 text-[#B7A38B] group-hover/item:bg-[#B7A38B] group-hover/item:text-[#032147] group-hover/item:border-[#B7A38B] transition-all shrink-0 mt-0.5 shadow-sm font-mono text-[10px] font-bold">
                            {item.tag.replace("SOP ", "")}
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-1">
                              <span className="font-montserrat font-bold text-[13px] text-white tracking-tight leading-snug group-hover/item:text-[#F3E5AB] transition-colors truncate">
                                {item.title}
                              </span>
                              <span className="opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all text-[12px] text-[#B7A38B] font-bold">
                                →
                              </span>
                            </div>
                            <p className="mt-1 text-[11.5px] font-inter text-[#EDE5DA]/75 line-clamp-2 leading-relaxed">
                              {item.subtitle}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Column 2: 5 Master Platform Pillars (5 Cols) */}
                  <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-white/15 pt-5 lg:pt-0 lg:pl-8 space-y-3.5">
                    <div className="flex items-center justify-between border-b border-white/15 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#B7A38B] font-bold flex items-center gap-2">
                          <span className="text-[#D4AF37]">◆</span>
                          [ 5 Master Platform Pillars ]
                        </span>
                      </div>
                      <a
                        href="#services?tab=pillars"
                        onClick={() => setServicesDropdownOpen(false)}
                        className="text-[11px] font-mono text-[#EDE5DA]/70 hover:text-[#B7A38B] transition uppercase font-bold flex items-center gap-1 group/link"
                      >
                        <span>5 Pillars Scope</span>
                        <span className="group-link:translate-x-0.5 transition-transform">↗</span>
                      </a>
                    </div>

                    <div className="space-y-2.5">
                      {masterPillars.map((item) => (
                        <a
                          key={item.title}
                          href={item.href}
                          onClick={() => setServicesDropdownOpen(false)}
                          className="group/item flex items-start gap-3.5 p-3 sm:p-3.5 rounded-2xl bg-gradient-to-r from-white/[0.04] to-white/[0.01] border border-white/10 hover:border-[#B7A38B]/60 hover:bg-[#032349]/90 transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-[1.01]"
                        >
                          <span className="text-[10px] font-mono uppercase px-2 py-1 rounded-lg bg-[#B7A38B]/20 border border-[#B7A38B]/40 text-[#B7A38B] font-bold shrink-0 mt-0.5 group-hover/item:bg-[#B7A38B] group-hover/item:text-[#032147] transition-all shadow-sm">
                            {item.tag}
                          </span>

                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-1">
                              <span className="font-montserrat font-bold text-[13.5px] text-white tracking-tight leading-snug group-hover/item:text-[#F3E5AB] transition-colors">
                                {item.title}
                              </span>
                              <span className="opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all text-[12px] text-[#B7A38B] font-bold">
                                →
                              </span>
                            </div>
                            <p className="mt-1 text-[11.5px] font-inter text-[#EDE5DA]/75 line-clamp-1 leading-relaxed">
                              {item.subtitle}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Bottom Quick Strip with Certifications & Assessment Trigger */}
                <div className="mt-6 pt-5 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#EDE5DA]/80">
                  <div className="flex items-center gap-3.5 flex-wrap">
                    <span className="flex items-center gap-2 text-[#B7A38B] font-bold bg-[#020F21] px-3 py-1 rounded-full border border-[#B7A38B]/30">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34D399]" />
                      NEA Licensed
                    </span>
                    <span>·</span>
                    <span className="font-bold text-white">bizSAFE Level 3</span>
                    <span>·</span>
                    <span className="font-bold text-white">100% WSQ Certified Crew</span>
                    <span>·</span>
                    <span className="font-bold text-[#B7A38B]">ISO Cleanroom Compliant</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[#EDE5DA]/60 hidden sm:inline">Need a custom SLA?</span>
                    <a
                      href="#contact"
                      onClick={() => setServicesDropdownOpen(false)}
                      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#B7A38B] to-[#E0D0BB] text-[#032147] font-montserrat font-bold text-xs hover:bg-white hover:scale-105 transition-all shadow-md uppercase"
                    >
                      <span>Request Facility Assessment</span>
                      <span>→</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* ============================================================== */}
          {/*  MOBILE DRAWER MENU WITH ACCORDION                           */}
          {/* ============================================================== */}
          <div className={`md:hidden overflow-hidden transition-all duration-500 ${open ? "max-h-[85vh] mt-2 opacity-100 overflow-y-auto" : "max-h-0 opacity-0"}`}>
            <div className="rounded-3xl p-3 flex flex-col bg-[#032147] border border-[#B7A38B]/30 space-y-1">
              {links.map((l) => {
                const active = isActive(l.href);

                if (l.hasDropdown) {
                  return (
                    <div key={l.label} className="rounded-2xl overflow-hidden bg-white/[0.03] border border-white/5">
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
                            14 SCOPES
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
                      <div className={`transition-all duration-300 overflow-hidden ${mobileServicesOpen ? "max-h-[600px] px-3 pb-3" : "max-h-0"}`}>
                        <div className="pt-2 border-t border-white/10 space-y-3">
                          
                          {/* All Services Hub */}
                          <a
                            href="#services"
                            onClick={() => {
                              setOpen(false);
                              setMobileServicesOpen(false);
                            }}
                            className="flex items-center justify-between p-2.5 rounded-xl bg-[#B7A38B]/20 text-white text-[12px] font-montserrat font-bold"
                          >
                            <span className="flex items-center gap-2">
                              <img src="/images/brand/ophron-navy-emblem-transparent.png" className="h-3.5 w-auto object-contain" alt="OPHRON" />
                              <span>All Services & Master Hub</span>
                            </span>
                            <span>→</span>
                          </a>

                          {/* 9 Specialized Operational SOPs */}
                          <div>
                            <div className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#B7A38B] font-bold mb-1.5 px-1">
                              [ 9 Specialized Operational SOPs ]
                            </div>
                            <div className="space-y-1">
                              {specializedServices.map((srv) => (
                                <a
                                  key={srv.title}
                                  href={srv.href}
                                  onClick={() => {
                                    setOpen(false);
                                    setMobileServicesOpen(false);
                                  }}
                                  className="flex items-center justify-between px-2.5 py-1.5 rounded-lg hover:bg-white/10 text-[11.5px] font-inter text-[#EDE5DA]/90"
                                >
                                  <span className="truncate pr-2">{srv.title}</span>
                                  <span className="text-[9px] font-mono text-[#B7A38B]">{srv.tag}</span>
                                </a>
                              ))}
                            </div>
                          </div>

                          {/* 5 Master Pillars */}
                          <div>
                            <div className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#B7A38B] font-bold mb-1.5 px-1">
                              [ 5 Master Platform Pillars ]
                            </div>
                            <div className="space-y-1">
                              {masterPillars.map((p) => (
                                <a
                                  key={p.title}
                                  href={p.href}
                                  onClick={() => {
                                    setOpen(false);
                                    setMobileServicesOpen(false);
                                  }}
                                  className="flex items-center justify-between px-2.5 py-1.5 rounded-lg hover:bg-white/10 text-[11.5px] font-inter text-[#EDE5DA]/90"
                                >
                                  <span className="truncate pr-2">{p.title}</span>
                                  <span className="text-[9px] font-mono text-[#B7A38B]">{p.tag}</span>
                                </a>
                              ))}
                            </div>
                          </div>

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
                href="#contact"
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
