import { useEffect, useState, useMemo } from "react";
import ServiceDetailModal from "./ServiceDetailModal";
import {
  BUSINESS_PILLARS_DATA,
  ALL_SERVICES_CATALOG,
  OPHRON_SERVICE_PAGES,
  ServiceSubItem,
} from "../data/ophronServicePages";
import {
  MaskedHeadline,
  ScrollReveal,
  TiltCard,
  CornerBrackets,
  ExpandRule,
} from "./ui/animations";

export default function ServicesPage() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"catalog" | "pillars" | "sops">("catalog");
  const [selectedPillar, setSelectedPillar] = useState<"all" | "people" | "hygiene" | "facilities" | "technology">("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const parseHash = () => {
      const h = window.location.hash;
      if (h.includes("service=")) {
        const match = h.match(/service=([^&]+)/);
        if (match) {
          setActiveSlug(match[1]);
        }
      } else if (h.includes("tab=pillars")) {
        setActiveTab("pillars");
      } else if (h.includes("tab=sops")) {
        setActiveTab("sops");
      } else if (h.includes("tab=catalog") || h === "#services") {
        setActiveTab("catalog");
      }
    };
    parseHash();
    window.addEventListener("hashchange", parseHash);
    return () => window.removeEventListener("hashchange", parseHash);
  }, []);

  // Filtered services list based on search and pillar selection
  const filteredServices = useMemo(() => {
    return ALL_SERVICES_CATALOG.filter((item) => {
      const matchesPillar = selectedPillar === "all" || item.pillarId === selectedPillar;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesPillar;

      const matchesSearch =
        item.name.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.tagline.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.badge.toLowerCase().includes(q) ||
        item.features.some((f) => f.toLowerCase().includes(q));

      return matchesPillar && matchesSearch;
    });
  }, [selectedPillar, searchQuery]);

  const specializedSOPs = Object.values(OPHRON_SERVICE_PAGES);

  return (
    <div className="relative bg-paper text-ink min-h-screen pb-28">
      {/* Top Breadcrumb & Page Banner Header */}
      <section
        className="relative bg-[#032147] text-[#EDE5DA] pt-14 pb-20 overflow-hidden border-b border-[#B7A38B]/30"
        style={{ background: "#032147", color: "#EDE5DA" }}
      >
        {/* Glow Blob */}
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-[#B7A38B]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-[1400px] px-5">
          {/* Breadcrumb strip */}
          <ScrollReveal variant="down" delay={100}>
            <div className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.22em] text-[#B7A38B] mb-6">
              <a href="#top" className="hover:text-white transition">
                Home
              </a>
              <span className="opacity-40">/</span>
              <span className="text-white font-bold">Services</span>
              <span className="opacity-40">/</span>
              <span className="opacity-80">Full Operational Directory</span>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <ScrollReveal variant="up" delay={150}>
                <span className="inline-block rounded-full bg-[#B7A38B]/20 border border-[#B7A38B]/40 px-3.5 py-1 text-[11px] font-mono text-[#B7A38B] uppercase tracking-[0.15em] font-bold mb-4">
                  [ 100% Operational Service Breakdown · Unique Visuals per Service ]
                </span>
              </ScrollReveal>
              <MaskedHeadline
                as="h1"
                className="font-canela font-bold text-4xl sm:text-6xl lg:text-7xl leading-[0.98] tracking-tight text-white"
                staggerMs={130}
                lines={[
                  "Specialized Hospitality &",
                  <>
                    Facility <span className="font-serif-i italic text-[#B7A38B]">Services.</span>
                  </>,
                ]}
              />
            </div>
            <div className="lg:col-span-4">
              <ScrollReveal variant="left" delay={250}>
                <p className="font-inter text-[15.5px] leading-relaxed text-[#EDE5DA]/85">
                  Explore our complete operational directory covering all Business Pillars — <strong>OPHRON PEOPLE</strong>, <strong>OPHRON HYGIENE</strong>, <strong>OPHRON FACILITIES</strong>, and <strong>OPHRON TECHNOLOGY</strong> — with verified standard operating procedures, technical equipment, and high-resolution service-specific photography.
                </p>
              </ScrollReveal>
            </div>
          </div>

          {/* Quick Badges Strip */}
          <ScrollReveal variant="up" delay={300}>
            <div className="mt-10 flex flex-wrap items-center gap-3 pt-6 border-t border-white/10 text-[11px] font-mono text-[#EDE5DA]/80">
              <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
                <span className="h-2 w-2 rounded-full bg-[#B7A38B]" />
                4 Core Business Pillars
              </span>
              <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
                <span className="h-2 w-2 rounded-full bg-[#B7A38B]" />
                Every Service with Unique Visuals
              </span>
              <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
                <span className="h-2 w-2 rounded-full bg-[#B7A38B]" />
                NEA Licensed Cleaning Operator
              </span>
              <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
                <span className="h-2 w-2 rounded-full bg-[#B7A38B]" />
                bizSAFE Level 3 Certified
              </span>
              <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
                <span className="h-2 w-2 rounded-full bg-[#B7A38B]" />
                24/7 Rapid Incident Response
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="mx-auto max-w-[1400px] px-5 pt-16">
        {/* Navigation Switcher */}
        <ScrollReveal variant="up">
          <div className="flex items-center justify-between border-b border-[#032147]/15 pb-4 mb-10 flex-wrap gap-4">
            <div className="flex items-center gap-3 flex-wrap">
              <button
                onClick={() => setActiveTab("catalog")}
                className={`px-6 py-3 rounded-full text-[13px] font-montserrat font-bold transition-all duration-300 cursor-pointer ${
                  activeTab === "catalog"
                    ? "bg-[#032147] text-[#EDE5DA] shadow-lg shadow-[#032147]/20 scale-105"
                    : "bg-ink/5 text-[#032147] hover:bg-ink/10"
                }`}
              >
                All Services Directory ({ALL_SERVICES_CATALOG.length})
              </button>
              <button
                onClick={() => setActiveTab("pillars")}
                className={`px-6 py-3 rounded-full text-[13px] font-montserrat font-bold transition-all duration-300 cursor-pointer ${
                  activeTab === "pillars"
                    ? "bg-[#032147] text-[#EDE5DA] shadow-lg shadow-[#032147]/20 scale-105"
                    : "bg-ink/5 text-[#032147] hover:bg-ink/10"
                }`}
              >
                4 Business Pillars & Category Breakdown
              </button>
              <button
                onClick={() => setActiveTab("sops")}
                className={`px-6 py-3 rounded-full text-[13px] font-montserrat font-bold transition-all duration-300 cursor-pointer ${
                  activeTab === "sops"
                    ? "bg-[#032147] text-[#EDE5DA] shadow-lg shadow-[#032147]/20 scale-105"
                    : "bg-ink/5 text-[#032147] hover:bg-ink/10"
                }`}
              >
                Specialized Technical SOPs
              </button>
            </div>

            <span className="text-[11.5px] font-mono text-[#B7A38B] uppercase tracking-[0.15em] font-bold">
              ✦ Click Any Service Card to Open Full Technical Protocol ✦
            </span>
          </div>
        </ScrollReveal>

        {/* ========================================================================= */}
        {/* TAB 1: ALL SERVICES DIRECTORY WITH LIVE SEARCH & PILLAR FILTERS          */}
        {/* ========================================================================= */}
        {activeTab === "catalog" && (
          <div>
            {/* Search & Filter Bar */}
            <div className="bg-[#EDE5DA] border border-[#B7A38B]/40 rounded-3xl p-6 sm:p-8 mb-12 shadow-md">
              <div className="grid lg:grid-cols-12 gap-6 items-center">
                {/* Search Input */}
                <div className="lg:col-span-5 relative">
                  <label htmlFor="service-search" className="block text-[11px] font-mono uppercase tracking-[0.15em] text-[#032147]/70 font-bold mb-2">
                    Search Service, Equipment or Protocol
                  </label>
                  <div className="relative">
                    <input
                      id="service-search"
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="e.g. yacht, cleanroom, stewarding, marble, kitchen, duct, AI..."
                      className="w-full rounded-full bg-white border border-[#032147]/20 px-5 py-3.5 pl-12 text-[14px] font-inter text-[#032147] placeholder:text-[#032147]/40 focus:outline-none focus:border-[#032147] focus:ring-2 focus:ring-[#032147]/10 transition shadow-inner"
                    />
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#032147]/50 text-base">
                      🔍
                    </span>
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery("")}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-[#032147]/50 hover:text-[#032147] bg-neutral-200 hover:bg-neutral-300 rounded-full h-5 w-5 grid place-items-center cursor-pointer"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                </div>

                {/* Filter Pills by Pillar */}
                <div className="lg:col-span-7">
                  <span className="block text-[11px] font-mono uppercase tracking-[0.15em] text-[#032147]/70 font-bold mb-2">
                    Filter by Business Pillar
                  </span>
                  <div className="flex flex-wrap items-center gap-2">
                    {[
                      { id: "all", label: "All Pillars", count: ALL_SERVICES_CATALOG.length },
                      {
                        id: "people",
                        label: "OPHRON PEOPLE",
                        count: ALL_SERVICES_CATALOG.filter((s) => s.pillarId === "people").length,
                      },
                      {
                        id: "hygiene",
                        label: "OPHRON HYGIENE",
                        count: ALL_SERVICES_CATALOG.filter((s) => s.pillarId === "hygiene").length,
                      },
                      {
                        id: "facilities",
                        label: "OPHRON FACILITIES",
                        count: ALL_SERVICES_CATALOG.filter((s) => s.pillarId === "facilities").length,
                      },
                      {
                        id: "technology",
                        label: "OPHRON TECHNOLOGY",
                        count: ALL_SERVICES_CATALOG.filter((s) => s.pillarId === "technology").length,
                      },
                    ].map((p) => {
                      const isSelected = selectedPillar === p.id;
                      return (
                        <button
                          key={p.id}
                          onClick={() => setSelectedPillar(p.id as any)}
                          className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-[12px] font-montserrat font-bold transition cursor-pointer ${
                            isSelected
                              ? "bg-[#032147] text-[#EDE5DA] shadow-md shadow-[#032147]/20"
                              : "bg-white/80 border border-[#032147]/15 text-[#032147] hover:bg-white"
                          }`}
                        >
                          <span>{p.label}</span>
                          <span
                            className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono ${
                              isSelected ? "bg-[#B7A38B] text-[#032147]" : "bg-[#032147]/10 text-[#032147]"
                            }`}
                          >
                            {p.count}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Status feedback */}
              <div className="mt-4 pt-4 border-t border-[#032147]/10 flex items-center justify-between text-[11.5px] font-mono text-[#032147]/70">
                <span>
                  Showing <strong>{filteredServices.length}</strong> of <strong>{ALL_SERVICES_CATALOG.length}</strong> specialized services (Each with unique 4K visuals)
                </span>
                {searchQuery && (
                  <span className="text-[#B7A38B] font-bold">
                    Filtered by keyword: "{searchQuery}"
                  </span>
                )}
              </div>
            </div>

            {/* Services Grid (All Services with unique images) */}
            {filteredServices.length === 0 ? (
              <div className="text-center py-20 bg-white/50 rounded-3xl border border-dashed border-[#032147]/20 p-8">
                <div className="text-4xl mb-3">🔍</div>
                <h3 className="font-canela text-2xl font-bold text-[#032147]">No services found</h3>
                <p className="mt-2 text-[14px] font-inter text-[#032147]/70">
                  Try searching with different keywords such as "kitchen", "marble", "cleanroom", "yacht", "stewarding", or "technology".
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedPillar("all");
                  }}
                  className="mt-5 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#032147] text-[#EDE5DA] text-xs font-montserrat font-bold hover:bg-[#B7A38B] hover:text-[#032147] transition cursor-pointer"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                {filteredServices.map((srv, idx) => (
                  <ScrollReveal key={srv.id} variant="up" delay={(idx % 6) * 60}>
                    <TiltCard
                      maxTilt={4}
                      onClick={() => setActiveSlug(srv.slug)}
                      className="group relative cursor-pointer rounded-3xl bg-[#EDE5DA] border border-[#B7A38B]/40 p-6 flex flex-col justify-between hover:bg-[#032147] hover:text-[#EDE5DA] hover:border-[#B7A38B] transition-all duration-500 shadow-lg hover:shadow-2xl overflow-hidden h-full"
                    >
                      <CornerBrackets color="#B7A38B" size={12} hoverSize={18} />

                      <div>
                        {/* High-res Unique Image Thumbnail */}
                        <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-5 bg-black/20 shadow-md">
                          <img
                            src={srv.image}
                            alt={srv.name}
                            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                            loading="lazy"
                          />
                          <div className="absolute top-3 left-3 z-20 bg-[#032147] text-[#EDE5DA] group-hover:bg-[#B7A38B] group-hover:text-[#032147] px-2.5 py-1 rounded-full text-[9px] font-mono uppercase font-bold tracking-[0.1em] transition duration-300 shadow">
                            {srv.category}
                          </div>
                          <div className="absolute top-3 right-3 z-20 bg-white/90 text-[#032147] px-2 py-0.5 rounded-full text-[9px] font-mono font-bold shadow">
                            {srv.badge}
                          </div>
                        </div>

                        {/* Title and Tagline */}
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#B7A38B] font-bold">
                            {srv.pillarId === "people"
                              ? "OPHRON PEOPLE"
                              : srv.pillarId === "hygiene"
                              ? "OPHRON HYGIENE"
                              : srv.pillarId === "facilities"
                              ? "OPHRON FACILITIES"
                              : "OPHRON TECHNOLOGY"}
                          </span>
                        </div>

                        <h3 className="font-canela font-bold text-xl text-[#032147] group-hover:text-white transition duration-300 tracking-tight leading-snug">
                          {srv.name}
                        </h3>

                        <p className="mt-2 font-inter text-[13px] leading-relaxed text-[#032147]/80 group-hover:text-[#EDE5DA]/85 transition duration-300">
                          {srv.description}
                        </p>

                        {/* Feature bullets */}
                        <div className="mt-4 pt-3.5 border-t border-[#032147]/10 group-hover:border-white/10 space-y-1.5">
                          {srv.features.slice(0, 3).map((f, fIdx) => (
                            <div
                              key={fIdx}
                              className="flex items-center gap-2 text-[12px] font-inter text-[#032147]/85 group-hover:text-[#EDE5DA]/90"
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-[#B7A38B] shrink-0" />
                              <span className="line-clamp-1">{f}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Card Footer Action */}
                      <div className="mt-6 pt-3.5 flex items-center justify-between border-t border-[#032147]/15 group-hover:border-white/20">
                        <span className="text-[10.5px] font-mono uppercase tracking-[0.1em] text-[#B7A38B] font-bold">
                          View SOP & Protocol
                        </span>
                        <span className="grid place-items-center h-7 w-7 rounded-full bg-[#032147] text-[#EDE5DA] group-hover:bg-[#B7A38B] group-hover:text-[#032147] text-xs font-bold transition duration-300 group-hover:translate-x-0.5">
                          →
                        </span>
                      </div>
                    </TiltCard>
                  </ScrollReveal>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: 4 BUSINESS PILLARS & CATEGORY BREAKDOWN TREES                     */}
        {/* ========================================================================= */}
        {activeTab === "pillars" && (
          <div className="space-y-20">
            {BUSINESS_PILLARS_DATA.map((pillar, pIdx) => (
              <div
                key={pillar.id}
                className="rounded-[32px] bg-[#EDE5DA] border border-[#B7A38B]/40 p-8 sm:p-12 shadow-xl overflow-hidden"
              >
                {/* Pillar Header Banner */}
                <div className="grid lg:grid-cols-12 gap-8 items-center border-b border-[#032147]/15 pb-8 mb-10">
                  <div className="lg:col-span-8">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#032147] text-[#EDE5DA] text-[10px] font-mono uppercase tracking-[0.2em] font-bold mb-3">
                      [ Pillar 0{pIdx + 1} · {pillar.name} ]
                    </span>
                    <h2 className="font-canela text-3xl sm:text-4xl lg:text-5xl font-bold text-[#032147] tracking-tight">
                      {pillar.title}
                    </h2>
                    <p className="mt-2 font-montserrat text-[15px] font-semibold text-[#B7A38B]">
                      {pillar.tagline}
                    </p>
                    <p className="mt-3 font-inter text-[14.5px] leading-relaxed text-[#032147]/80 max-w-2xl">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="lg:col-span-4 flex justify-start lg:justify-end">
                    <button
                      onClick={() => setActiveSlug(pillar.id)}
                      className="inline-flex items-center gap-2 rounded-full bg-[#032147] text-[#EDE5DA] px-6 py-3 text-[13px] font-montserrat font-bold hover:bg-[#B7A38B] hover:text-[#032147] transition shadow-md cursor-pointer"
                    >
                      View Master Pillar Overview →
                    </button>
                  </div>
                </div>

                {/* Categories inside this Pillar */}
                <div className="space-y-12">
                  {pillar.categories.map((cat) => (
                    <div key={cat.id} className="bg-white/60 border border-[#032147]/10 rounded-2xl p-6 sm:p-8">
                      <div className="flex items-center justify-between border-b border-[#032147]/10 pb-3 mb-6 flex-wrap gap-2">
                        <div>
                          <h3 className="font-montserrat font-bold text-xl text-[#032147] tracking-tight">
                            {cat.name}
                          </h3>
                          <p className="text-[13px] font-inter text-[#032147]/70 mt-0.5">
                            {cat.description}
                          </p>
                        </div>
                        <span className="text-[11px] font-mono bg-[#032147]/10 text-[#032147] px-3 py-1 rounded-full font-bold">
                          {cat.services.length} Specialized Offerings
                        </span>
                      </div>

                      {/* Services in Category Grid */}
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {cat.services.map((srv) => (
                          <div
                            key={srv.id}
                            onClick={() => setActiveSlug(srv.slug)}
                            className="group p-5 rounded-2xl bg-white border border-[#032147]/10 hover:border-[#B7A38B] hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden"
                          >
                            <div>
                              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mb-3 bg-black/10">
                                <img
                                  src={srv.image}
                                  alt={srv.name}
                                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                                  loading="lazy"
                                />
                                <span className="absolute top-2 right-2 text-[9px] font-mono font-bold uppercase bg-white/95 text-[#032147] px-2 py-0.5 rounded-full shadow">
                                  {srv.badge}
                                </span>
                              </div>
                              <h4 className="font-montserrat font-bold text-[15px] text-[#032147] group-hover:text-[#B7A38B] transition-colors leading-snug">
                                {srv.name}
                              </h4>
                              <p className="mt-1.5 text-[12.5px] font-inter text-[#032147]/75 line-clamp-2 leading-relaxed">
                                {srv.description}
                              </p>
                            </div>
                            <div className="mt-4 pt-3 border-t border-[#032147]/5 flex items-center justify-between text-[11px] font-mono text-[#B7A38B] font-bold">
                              <span>Open Protocol</span>
                              <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: SPECIALIZED TECHNICAL SOPS                                         */}
        {/* ========================================================================= */}
        {activeTab === "sops" && (
          <div>
            <div className="mb-8">
              <MaskedHeadline
                as="h2"
                className="font-canela text-3xl sm:text-4xl font-bold text-[#032147]"
                lines={["Specialized Standard Operating Procedures (SOPs)"]}
              />
              <ScrollReveal variant="up" delay={100}>
                <p className="mt-2 text-[14.5px] font-inter text-[#032147]/80 max-w-2xl">
                  Every specialized service runs to written standard operating procedures (SOPs), NEA/SFA-approved chemical formulations, and supervisor sign-off — delivered standalone or combined into a single managed contract.
                </p>
              </ScrollReveal>
            </div>

            {/* SOPs Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {specializedSOPs.map((srv, index) => {
                const overviewBlock = srv.sections.find((s) => s.kind === "overview");
                return (
                  <ScrollReveal key={srv.slug} variant="up" delay={(index % 6) * 100}>
                    <TiltCard
                      onClick={() => setActiveSlug(srv.slug)}
                      className="group relative cursor-pointer rounded-3xl bg-[#EDE5DA] border border-[#B7A38B]/40 p-7 flex flex-col justify-between hover:bg-[#032147] hover:text-[#EDE5DA] hover:border-[#B7A38B] transition-all duration-500 shadow-xl overflow-hidden h-full"
                    >
                      <div>
                        {/* Image Frame */}
                        <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-6 bg-black/20 shadow-md">
                          <img
                            src={srv.heroImage}
                            alt={srv.heroTitle}
                            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                            loading="lazy"
                          />
                          <CornerBrackets color="#B7A38B" size={14} hoverSize={22} />
                          <div className="absolute top-3 left-3 z-30 bg-[#032147] text-[#EDE5DA] group-hover:bg-[#B7A38B] group-hover:text-[#032147] px-3 py-1 rounded-full text-[10px] font-mono uppercase font-bold tracking-[0.1em] transition duration-300 shadow">
                            {srv.crumb}
                          </div>
                          {srv.badge && (
                            <div className="absolute top-3 right-3 z-30 bg-white/90 text-[#032147] px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold shadow">
                              {srv.badge}
                            </div>
                          )}
                        </div>

                        <h3 className="font-canela font-bold text-2xl text-[#032147] group-hover:text-white transition duration-300 tracking-tight leading-snug">
                          {srv.heroTitle}
                        </h3>

                        <p className="mt-3 font-inter text-[13.5px] leading-relaxed text-[#032147]/80 group-hover:text-[#EDE5DA]/85 transition duration-300 line-clamp-3">
                          {srv.heroLead}
                        </p>

                        {overviewBlock && overviewBlock.kind === "overview" && overviewBlock.bullets && (
                          <div className="mt-5 space-y-2 border-t border-[#032147]/10 group-hover:border-white/10 pt-4">
                            {overviewBlock.bullets.slice(0, 3).map((b, bIdx) => (
                              <div
                                key={bIdx}
                                className="flex items-center gap-2.5 text-[12.5px] font-inter text-[#032147]/85 group-hover:text-[#EDE5DA]/90"
                              >
                                <span className="h-1.5 w-1.5 rounded-full bg-[#B7A38B] shrink-0" />
                                <span className="line-clamp-1">{b}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="mt-8 pt-4 flex items-center justify-between border-t border-[#032147]/15 group-hover:border-white/20">
                        <span className="text-[11px] font-mono uppercase tracking-[0.1em] text-[#B7A38B] font-bold">
                          View SOP & Chemistry Specs
                        </span>
                        <span className="grid place-items-center h-9 w-9 rounded-full bg-[#032147] text-[#EDE5DA] group-hover:bg-[#B7A38B] group-hover:text-[#032147] font-bold transition duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </div>
                    </TiltCard>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        )}

        <ExpandRule className="border-[#032147]/20 my-16" />

        {/* Bottom Consultation CTA Band */}
        <ScrollReveal variant="scale">
          <div
            className="rounded-[32px] bg-[#032147] text-[#EDE5DA] p-8 sm:p-12 lg:p-14 border border-[#B7A38B]/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-2xl relative overflow-hidden"
            style={{ background: "#032147", color: "#EDE5DA" }}
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#B7A38B]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#B7A38B] font-bold block mb-2">
                [ Custom Operational Agreements ]
              </span>
              <MaskedHeadline
                as="h3"
                className="font-canela font-bold text-3xl sm:text-4xl text-white tracking-tight leading-snug"
                lines={["Need a bespoke facility scope or multi-venue deployment?"]}
              />
              <p className="mt-3 font-inter text-[14.5px] text-[#EDE5DA]/80 leading-relaxed">
                Our Singapore operational directors will conduct an on-site evaluation and provide a customized SLA with guaranteed response windows and transparent pricing.
              </p>
            </div>

            <div className="relative z-10 shrink-0 flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#B7A38B] text-[#032147] px-7 py-3.5 text-[13px] font-montserrat font-bold hover:bg-white hover:scale-105 transition duration-300 shadow-lg"
              >
                Request Site Assessment →
              </a>
              <a
                href="tel:+6592951155"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 text-white px-6 py-3.5 text-[13px] font-mono font-bold hover:bg-white/10 transition"
              >
                Hotline: +65 9295 1155
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Full Service Detail Modal */}
      <ServiceDetailModal serviceSlug={activeSlug} onClose={() => setActiveSlug(null)} />
    </div>
  );
}
