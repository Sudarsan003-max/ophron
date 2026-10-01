import { useState, useMemo, useEffect } from "react";
import { SectionHead } from "./About";
import {
  MaskedHeadline,
  ScrollReveal,
  CornerBrackets,
} from "./ui/animations";
import {
  Search,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  MapPin,
  ShieldCheck,
  X,
  Layers,
} from "lucide-react";

export interface GalleryProject {
  id: string;
  src: string;
  alt: string;
  category: "Marble & Stone Care" | "Kitchen & Stewarding" | "Hospitality & Suites" | "High-Rise & Façade" | "Technology & AI" | "Facility Operations";
  title: string;
  venue: string;
  location: string;
  scope: string;
  metric: string;
  featured?: boolean;
  tall?: boolean;
}

export const GALLERY_PROJECTS: GalleryProject[] = [
  {
    id: "marble-atrium",
    src: "/images/hero/hero_marble_polish_4k.jpg",
    alt: "Planetary diamond marble floor polishing in a luxury 5-star hotel grand atrium",
    category: "Marble & Stone Care",
    title: "Planetary Diamond Marble Grinding & Mirror Restoration",
    venue: "5-Star Luxury Hotel Grand Atrium",
    location: "Marina Bay, Singapore",
    scope: "Dustless wet diamond grinding, Italian oxalic crystallization, 98+ GU gloss finish.",
    metric: "98+ GU Mirror Finish",
    featured: true,
  },
  {
    id: "kitchen-stewarding",
    src: "/images/hero/hero_kitchen_hygiene_4k.jpg",
    alt: "Commercial kitchen deep hygiene and stewarding team in Michelin-starred hotel kitchen",
    category: "Kitchen & Stewarding",
    title: "Thermal Degreasing & Turnkey Kitchen Stewarding",
    venue: "Michelin-Star Hotel Central Kitchen",
    location: "Orchard Road, Singapore",
    scope: "Cookline degreasing, high-temp 85°C dishwashing, exhaust fire-safety compliance.",
    metric: "100% SFA Audit Pass",
    featured: true,
  },
  {
    id: "facade-abseiling",
    src: "/images/hero/hero_facade_rope_4k.jpg",
    alt: "Industrial rope access facade cleaning technicians polishing skyscraper glass",
    category: "High-Rise & Façade",
    title: "IRATA Rope Access Skyscraper Façade Detailing",
    venue: "Commercial Glass Tower & Hotel",
    location: "Marina Bay Financial Centre, SG",
    scope: "Multi-point anchor rigging, de-ionized pure water wash, sealant inspection.",
    metric: "Zero Safety Incidents",
    featured: true,
  },
  {
    id: "event-ballroom",
    src: "/images/hero/hero_event_venue_4k.jpg",
    alt: "Grand event ballroom and banquet venue setup and turnover",
    category: "Facility Operations",
    title: "Rapid 60-Minute Ballroom Turnover & Gala Presentation",
    venue: "Grand Ballroom & Convention Centre",
    location: "Marina Bay Sands Vicinity, SG",
    scope: "Rapid turnover, gold tableware alignment, marble polish, discreet live porterage.",
    metric: "< 60m Turnover SLA",
    featured: true,
  },
  {
    id: "executive-suite",
    src: "/images/hero/hero_manpower_suite_4k.jpg",
    alt: "Luxury presidential suite housekeeping and turndown service",
    category: "Hospitality & Suites",
    title: "Presidential Penthouse Suite Executive Housekeeping",
    venue: "Pan Pacific Hotel Singapore",
    location: "Marina Bay, Singapore",
    scope: "WSQ-trained 5-star room attendants, bespoke linen staging, turndown service.",
    metric: "99.8% Shift SLA",
  },
  {
    id: "tech-dashboard",
    src: "/images/hero/hero_tech_dashboard_4k.jpg",
    alt: "OphronOS Operations AI Monitoring Command Station",
    category: "Technology & AI",
    title: "OphronOS Real-Time Operations Telemetry & Shift Dispatch",
    venue: "Command Operations Center",
    location: "Singapore HQ",
    scope: "Live SLA tracking, automated SFA compliance logs, IoT indoor air quality feeds.",
    metric: "Real-Time Telemetry",
  },
  {
    id: "commercial-atrium",
    src: "/images/commercial_cleaning_4k.jpg",
    alt: "Commercial building lobby with mirror-polished marble floors",
    category: "Marble & Stone Care",
    title: "Grand Atrium Floor Polish & Daily Janitorial Management",
    venue: "Grade-A Commercial Tower",
    location: "Raffles Place, Singapore",
    scope: "Heavy-duty orbital buffing, entrance matting maintenance, brass detailing.",
    metric: "24/7 Audit Ready",
  },
  {
    id: "hotel-suite-turnover",
    src: "/images/photo-6466496.jpg",
    alt: "Attendant dressing a luxury hotel bed to five-star standard",
    category: "Hospitality & Suites",
    title: "Rapid Suite Turnover Programme",
    venue: "YOTEL Singapore",
    location: "Orchard Road, Singapore",
    scope: "Room turnover, mattress sanitization, amenity restocking, supervisor inspection.",
    metric: "100% QA Signed",
  },
  {
    id: "restaurant-cookline",
    src: "/images/restaurant_kitchen_4k.jpg",
    alt: "Commercial kitchen stainless steel cookline gleaming after deep clean",
    category: "Kitchen & Stewarding",
    title: "Exhaust Canopy & Cookline Deep Degreasing",
    venue: "La Nonna Italian Ristorante",
    location: "Bugis, Singapore",
    scope: "Canopy degreasing, grease trap descaling, floor scrubbing, chemical sanitization.",
    metric: "NEA Grade-A Verified",
  },
  {
    id: "restroom-restoration",
    src: "/images/restroom.jpg",
    alt: "Marble and brass hotel restroom after deep descaling",
    category: "Marble & Stone Care",
    title: "Marble Grout Restoration & Sanitary Descaling",
    venue: "Duxton Reserve Hotel",
    location: "Tanjong Pagar, Singapore",
    scope: "Calcium scale removal, marble honing, antimicrobial sealing, brass polishing.",
    metric: "Zero Chemical Odor",
  },
  {
    id: "cleanroom-hospital",
    src: "/images/hospital_healthcare_4k.jpg",
    alt: "Healthcare facility surgical corridor and cleanroom sterilization",
    category: "Facility Operations",
    title: "Clinical Cleanroom Sanitization & Bio-Decontamination",
    venue: "Private Medical Suites",
    location: "Novena Medical Centre, SG",
    scope: "ULV cold fogging, ISO Class 7/8 bio-burden reduction, HEPA air scrub.",
    metric: "Clinical Sterility Pass",
  },
  {
    id: "carpet-extraction",
    src: "/images/carpet_deep_clean_4k.jpg",
    alt: "Commercial carpet steam extraction on executive boardroom floors",
    category: "Marble & Stone Care",
    title: "85°C Thermal Carpet Steam Extraction & Odor Neutralization",
    venue: "Corporate Advisory Headquarters",
    location: "Marina Bay Financial Centre, SG",
    scope: "Low-moisture encapsulation, stain neutralization, allergen reduction.",
    metric: "2-Hour Rapid Dry",
  },
  {
    id: "yacht-detailing",
    src: "/images/yacht_marina_detailing_4k.jpg",
    alt: "Luxury superyacht teak deck and interior deep detailing",
    category: "Facility Operations",
    title: "Superyacht Teak Deck Restoration & Marine Detailing",
    venue: "ONE°15 Marina",
    location: "Sentosa Cove, Singapore",
    scope: "Teak acid brightening, marine-grade gelcoat polish, interior cabin steam clean.",
    metric: "Marine Grade Spec",
  },
  {
    id: "disinfection-ulv",
    src: "/images/disinfection_service_4k.jpg",
    alt: "Technician applying precision electrostatic fogging in a corporate office",
    category: "Facility Operations",
    title: "Precision Electrostatic Surface Decontamination",
    venue: "Financial Tech Campus",
    location: "Changi Business Park, SG",
    scope: "Electrostatic sprayers, 30-day antimicrobial barrier, surface ATP swab testing.",
    metric: "99.999% Pathogen Kill",
  },
  {
    id: "tech-analytics",
    src: "/images/tech_analytics_4k.jpg",
    alt: "AI shift dispatch and workforce analytics interface",
    category: "Technology & AI",
    title: "AI Predictive Workforce Scheduling & Shift Cost Auditing",
    venue: "Multi-Unit Hospitality Group",
    location: "Central Singapore",
    scope: "Shift optimization, labor margin analysis, automated biometric timecard logs.",
    metric: "-22% Labor Waste",
  },
  {
    id: "linen-turndown",
    src: "/images/photo-6466234.jpg",
    alt: "Housekeeper stacking fresh linen in five-star hotel suite",
    category: "Hospitality & Suites",
    title: "Linen & Turndown Hospitality Support",
    venue: "Pan Pacific Hotels",
    location: "Marina Square, Singapore",
    scope: "Daily linen changeover, VIP suite staging, evening turndown service.",
    metric: "5-Star Standard",
  },
];

const CATEGORIES = [
  "All Deployments",
  "Marble & Stone Care",
  "Kitchen & Stewarding",
  "Hospitality & Suites",
  "High-Rise & Façade",
  "Technology & AI",
  "Facility Operations",
] as const;

export default function Gallery() {
  const [selectedCat, setSelectedCat] = useState<string>("All Deployments");
  const [searchQuery, setSearchQuery] = useState("");
  const [activePhotoIdx, setActivePhotoIdx] = useState<number | null>(null);

  // Filtered Items based on category and search query
  const filtered = useMemo(() => {
    return GALLERY_PROJECTS.filter((p) => {
      const matchesCat =
        selectedCat === "All Deployments" || p.category === selectedCat;
      const matchesSearch =
        searchQuery === "" ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.venue.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.scope.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [selectedCat, searchQuery]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (activePhotoIdx === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActivePhotoIdx(null);
      if (e.key === "ArrowRight") {
        setActivePhotoIdx((prev) => (prev !== null ? (prev + 1) % filtered.length : null));
      }
      if (e.key === "ArrowLeft") {
        setActivePhotoIdx((prev) =>
          prev !== null ? (prev - 1 + filtered.length) % filtered.length : null
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePhotoIdx, filtered.length]);

  const activePhoto = activePhotoIdx !== null ? filtered[activePhotoIdx] : null;

  return (
    <section
      id="gallery"
      className="relative py-24 sm:py-32 bg-[#032147] text-[#EDE5DA] overflow-hidden"
    >
      {/* Background Ambient Radial Glows */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#B7A38B]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#B7A38B]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        
        {/* Section Header */}
        <SectionHead n="007" label="Operational Deployments Gallery" light />

        <div className="mt-8 grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <MaskedHeadline
              as="h2"
              className="font-canela font-bold text-4xl sm:text-6xl lg:text-7xl leading-[0.94] tracking-tight text-white"
              staggerMs={120}
              lines={[
                <>
                  Operational <span className="font-serif-i italic text-[#B7A38B]">excellence</span>
                </>,
                "in verified deployment.",
              ]}
            />
          </div>
          <div className="lg:col-span-4 lg:ml-auto">
            <p className="font-inter text-sm sm:text-base leading-relaxed text-[#EDE5DA]/80">
              High-resolution photographic proof from active OPHRON operational sites across Singapore's leading hotels, Michelin-starred kitchens, and commercial towers.
            </p>
          </div>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          
          {/* Category Selector Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => {
              const active = selectedCat === cat;
              const count =
                cat === "All Deployments"
                  ? GALLERY_PROJECTS.length
                  : GALLERY_PROJECTS.filter((p) => p.category === cat).length;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCat(cat)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-montserrat font-bold transition-all duration-300 ${
                    active
                      ? "bg-[#B7A38B] text-[#032147] shadow-lg shadow-black/30 scale-105"
                      : "bg-white/5 border border-white/15 text-[#EDE5DA]/80 hover:text-white hover:bg-white/10 hover:border-white/30"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                      active ? "bg-[#032147] text-[#EDE5DA]" : "bg-white/10 text-[#EDE5DA]/60"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Filter Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B7A38B]" />
            <input
              type="text"
              placeholder="Search venue or service..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white/5 border border-white/15 text-xs text-[#EDE5DA] placeholder:text-white/40 focus:outline-none focus:border-[#B7A38B] focus:bg-white/10 transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

        </div>

        {/* Dynamic Editorial Bento Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, idx) => {
            return (
              <ScrollReveal
                key={item.id}
                variant="up"
                delay={(idx % 6) * 60}
                className={`group relative rounded-3xl overflow-hidden bg-[#031B38] border border-white/10 hover:border-[#B7A38B]/60 transition-all duration-500 shadow-xl flex flex-col justify-between ${
                  item.featured ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Image Container with Smooth Zoom on Hover */}
                <div
                  onClick={() => setActivePhotoIdx(idx)}
                  className="relative aspect-[16/11] w-full overflow-hidden cursor-pointer bg-black/50"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                  />

                  {/* Corner Metallic Brackets */}
                  <CornerBrackets color="#B7A38B" size={14} />

                  {/* Top Badges: Category & Metric */}
                  <div className="absolute top-4 inset-x-4 z-20 flex items-center justify-between gap-2 pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#032147]/85 border border-[#B7A38B]/40 text-[#EDE5DA] text-[10px] font-mono uppercase tracking-wider backdrop-blur-md shadow-md">
                      <Layers className="w-3 h-3 text-[#B7A38B]" />
                      {item.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-[#B7A38B] text-[#032147] text-[10px] font-mono font-bold uppercase tracking-wider shadow-md">
                      {item.metric}
                    </span>
                  </div>

                  {/* Hover Overlay with Inspect Icon */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#032147] via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />
                  
                  <button
                    aria-label="View Fullscreen"
                    className="absolute bottom-4 right-4 z-20 h-9 w-9 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105 hover:bg-[#B7A38B] hover:text-[#032147]"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Card Content & Metadata */}
                <div className="p-5 flex-1 flex flex-col justify-between bg-gradient-to-b from-transparent to-[#021733]/90">
                  <div>
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#B7A38B] mb-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#B7A38B]" />
                      <span>{item.venue} · {item.location}</span>
                    </div>

                    <h3 className="font-canela text-xl font-bold text-white group-hover:text-[#B7A38B] transition-colors line-clamp-1">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs text-[#EDE5DA]/75 leading-relaxed line-clamp-2 font-inter">
                      {item.scope}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#EDE5DA]/60">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#B7A38B]" />
                      <span>Verified Deployment</span>
                    </span>
                    <button
                      onClick={() => setActivePhotoIdx(idx)}
                      className="text-[#B7A38B] hover:text-white font-bold transition flex items-center gap-1"
                    >
                      <span>Examine Proof</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Empty Search State */}
        {filtered.length === 0 && (
          <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/10 mt-10">
            <p className="text-base font-semibold text-white">No deployments found matching "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCat("All Deployments");
              }}
              className="mt-4 px-6 py-2.5 rounded-full bg-[#B7A38B] text-[#032147] text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* ── 4K LIGHTBOX MODAL ───────────────────────────────────────── */}
      {activePhoto && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setActivePhotoIdx(null);
          }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/90 backdrop-blur-xl animate-fadeIn"
        >
          <div className="relative max-w-5xl w-full rounded-3xl bg-[#032147] border border-[#B7A38B]/40 overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
            
            {/* Top Modal Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#031B38]/90">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#B7A38B] text-[#032147] text-[10px] font-mono font-bold uppercase tracking-wider">
                  {activePhoto.category}
                </span>
                <span className="text-xs font-mono text-[#EDE5DA]/70">
                  {activePhoto.metric}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    setActivePhotoIdx(
                      (activePhotoIdx! - 1 + filtered.length) % filtered.length
                    )
                  }
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono text-[#B7A38B] px-2">
                  {activePhotoIdx! + 1} / {filtered.length}
                </span>
                <button
                  onClick={() =>
                    setActivePhotoIdx((activePhotoIdx! + 1) % filtered.length)
                  }
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActivePhotoIdx(null)}
                  className="ml-3 p-2 rounded-full bg-white/10 hover:bg-[#B7A38B] hover:text-[#032147] text-white transition font-bold"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Photo View Container */}
            <div className="relative bg-black flex-1 min-h-[300px] max-h-[58vh] overflow-hidden flex items-center justify-center">
              <img
                src={activePhoto.src}
                alt={activePhoto.alt}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Bottom Modal Metadata & CTAs */}
            <div className="p-6 sm:p-7 bg-[#031B38] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 text-xs font-mono text-[#B7A38B] mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{activePhoto.venue} · {activePhoto.location}</span>
                </div>
                <h3 className="font-canela text-2xl font-bold text-white">
                  {activePhoto.title}
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-[#EDE5DA]/80 leading-relaxed">
                  {activePhoto.scope}
                </p>
              </div>

              <a
                href="#contact"
                onClick={() => setActivePhotoIdx(null)}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#B7A38B] hover:bg-[#EDE5DA] text-[#032147] font-bold text-xs tracking-wide uppercase transition-all duration-300 shadow-xl shrink-0"
              >
                <span>Book Site Audit</span>
                <Sparkles className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
