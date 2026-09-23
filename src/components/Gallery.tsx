import { useState } from "react";
import { SectionHead } from "./About";
import {
  MaskedHeadline,
  ScrollReveal,
  TiltCard,
  CornerBrackets,
} from "./ui/animations";

export type Photo = { src: string; alt: string; category: string; caption: string };

export const GALLERY_ITEMS: Photo[] = [
  {
    src: "/images/commercial_cleaning_4k.jpg",
    alt: "Luxury Singapore commercial building lobby and atrium with polished marble",
    category: "Office & Commercial",
    caption: "Grand Atrium Daily Janitorial — Singapore Commercial Tower",
  },
  {
    src: "/images/technology_saas_dashboard_4k.jpg",
    alt: "SaaS Operations Dashboard and shift tracking interface",
    category: "Technology & AI",
    caption: "OphronOS Command Portal — Real-Time Hospitality Workforce Telemetry",
  },
  {
    src: "/images/tech_analytics_4k.jpg",
    alt: "Digital workforce scheduling and operational telemetry analytics",
    category: "Technology & AI",
    caption: "AI Automation & Shift Dispatch Management Console",
  },
  {
    src: "/images/commercial_intelligence_4k.jpg",
    alt: "Executive business intelligence data charts and boardroom advisory",
    category: "Technology & AI",
    caption: "Commercial Intelligence & Margin Optimization Briefing",
  },
  {
    src: "/images/revenue_optimization_4k.jpg",
    alt: "Financial and operational yield performance analytics",
    category: "Technology & AI",
    caption: "Revenue & Labor Efficiency Optimization Dashboard",
  },
  {
    src: "/images/disinfection_service_4k.jpg",
    alt: "Technician in protective gear using electrostatic mist sprayer",
    category: "Disinfecting",
    caption: "Precision Electrostatic Fogging — High-Density Commercial Zone",
  },
  {
    src: "/images/restaurant_kitchen_4k.jpg",
    alt: "Spotless commercial restaurant kitchen cookline and prep station",
    category: "Kitchen & F&B",
    caption: "SFA-Ready Cookline Degreasing — 5-Star Hotel Central Kitchen",
  },
  {
    src: "/images/facility_management_4k.jpg",
    alt: "Modern commercial building operations and facility architecture",
    category: "Facility Operations",
    caption: "Integrated Facility Management (IFM Lite) — Singapore Mixed-Use Complex",
  },
  {
    src: "/images/people_hospitality_4k.jpg",
    alt: "Uniformed 5-star hotel hospitality crew",
    category: "Hospitality",
    caption: "Vetted WSQ-Certified Hospitality Manpower — Hotel Operations",
  },
  {
    src: "/images/industrial_warehouse_4k.jpg",
    alt: "Industrial warehouse logistics aisles after pressure wash",
    category: "Industrial",
    caption: "High-Bay Logistics Floor Machine Scrubbing — Tuas Industrial Hub",
  },
  {
    src: "/images/office_cleaning_4k.jpg",
    alt: "Executive corporate boardroom and workplace in Singapore CBD",
    category: "Office & Commercial",
    caption: "Boardroom & Executive Suite Scheduled Detailing — Marina Bay Financial Centre",
  },
  {
    src: "/images/restroom.jpg",
    alt: "Marble and brass hotel restroom after deep cleaning",
    category: "Restroom",
    caption: "Washroom Descaling & Grout Restoration — Boutique Hotel, Duxton",
  },
  {
    src: "/images/photo-8629127.jpg",
    alt: "Stewarding sink polished bright in a commercial kitchen",
    category: "Kitchen & F&B",
    caption: "Stewarding Bay Restoration — La Nonna, Bugis",
  },
  {
    src: "/images/photo-34416078.jpg",
    alt: "Stainless steel food warmers gleaming after degreasing",
    category: "Kitchen & F&B",
    caption: "Hot-Line Degreasing — Stainless Restored to Mill Finish",
  },
  {
    src: "/images/photo-5499416.jpg",
    alt: "Technician in protective gear disinfecting an office suite",
    category: "Disinfecting",
    caption: "ULV Fogging Cycle — Grade A Office Tower, Raffles Place",
  },
  {
    src: "/images/photo-6466496.jpg",
    alt: "Hotel suite attendant dressing a bed to five-star standard",
    category: "Hospitality",
    caption: "Suite Turnover Programme — YOTEL, Orchard Road",
  },
  {
    src: "/images/photo-4099090.jpg",
    alt: "Technician in full PPE sanitising floors",
    category: "Disinfecting",
    caption: "Floor Sanitisation Protocol, PPE Level B",
  },
  {
    src: "/images/photo-29226709.jpg",
    alt: "Spotless stainless prep counter in a commercial kitchen",
    category: "Kitchen & F&B",
    caption: "Prep-Counter Programme — Central Kitchen",
  },
  {
    src: "/images/photo-17509184.jpg",
    alt: "Restaurant kitchen kept to inspection standard",
    category: "Kitchen & F&B",
    caption: "Post-Service Kitchen Reset — Fine Dining",
  },
  {
    src: "/images/photo-5953713.jpg",
    alt: "Cold-storage facility kept clean and clear",
    category: "Industrial",
    caption: "Cold-Room Hygiene Cycle — Food Distribution Hub",
  },
  {
    src: "/images/photo-4481329.jpg",
    alt: "High-angle view of a cleaned facility floor",
    category: "Industrial",
    caption: "Facility Floor Scrub & Recoat — Manufacturing Plant",
  },
  {
    src: "/images/photo-6466234.jpg",
    alt: "Housekeeper stacking fresh linen in a suite",
    category: "Hospitality",
    caption: "Linen & Turndown Support — Pan Pacific Hotels",
  },
  {
    src: "/images/photo-3770215.jpg",
    alt: "Attendant restocking a luxury hotel bathroom",
    category: "Restroom",
    caption: "Washroom Restocking & Presentation — Luxury Tower",
  },
];

export const GALLERY_CATEGORIES = [
  "All",
  "Technology & AI",
  "Kitchen & F&B",
  "Disinfecting",
  "Hospitality",
  "Office & Commercial",
  "Industrial",
  "Restroom",
  "Facility Operations",
];

export default function Gallery() {
  const [selectedCat, setSelectedCat] = useState("All");
  const [activePhoto, setActivePhoto] = useState<Photo | null>(null);

  const filtered = selectedCat === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((p) => p.category === selectedCat);

  return (
    <section id="gallery-grid" className="relative py-28 bg-[#032147] text-[#EDE5DA] overflow-hidden" style={{ background: "#032147", color: "#EDE5DA" }}>
      {/* Background radial glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#B7A38B]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#B7A38B]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5">
        <SectionHead n="007" label="OPHRON Photography Gallery" light />

        <div className="mt-12 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <MaskedHeadline
              as="h2"
              className="font-canela font-bold text-[38px] sm:text-[58px] lg:text-[76px] leading-[0.95] tracking-tight text-white"
              staggerMs={130}
              lines={[
                <>
                  Operational <span className="font-serif-i italic text-[#B7A38B]">excellence</span>
                </>,
                "in frame.",
              ]}
            />
          </div>
          <p className="lg:col-span-5 font-inter text-[15px] leading-relaxed text-[#EDE5DA]/80 max-w-md lg:ml-auto">
            <ScrollReveal variant="left" delay={150}>
              100% authentic photography from recent OPHRON deployments across Singapore's leading hotels, Michelin-starred kitchens, office towers, and industrial facilities.
            </ScrollReveal>
          </p>
        </div>

        {/* Category Filter Pills */}
        <ScrollReveal variant="up" delay={100}>
          <div className="mt-14 flex flex-wrap items-center gap-2.5 border-b border-white/10 pb-6">
            {GALLERY_CATEGORIES.map((cat) => {
              const active = selectedCat === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCat(cat)}
                  className={`px-5 py-2.5 rounded-full text-[12px] font-montserrat font-bold transition-all duration-300 ${
                    active
                      ? "bg-[#B7A38B] text-[#032147] shadow-lg shadow-[#B7A38B]/20 scale-105"
                      : "bg-white/5 border border-white/15 text-[#EDE5DA] hover:bg-white/10 hover:border-white/30"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Gallery Grid with 3D perspective tilt and corner registration brackets */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((photo, i) => (
            <ScrollReveal key={i} variant="up" delay={(i % 8) * 70}>
              <TiltCard
                maxTilt={6}
                onClick={() => setActivePhoto(photo)}
                className="group relative cursor-pointer rounded-3xl overflow-hidden bg-white/[0.03] border border-white/10 hover:border-[#B7A38B]/50 transition-all duration-500 shadow-xl h-full"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                  />
                  <CornerBrackets color="#B7A38B" size={12} hoverSize={18} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#032147] via-[#032147]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  <span className="absolute top-4 left-4 z-30 rounded-full bg-[#B7A38B] text-[#032147] px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-[0.1em]">
                    {photo.category}
                  </span>

                  <div className="absolute bottom-4 inset-x-4 z-30">
                    <p className="font-montserrat font-bold text-[14px] leading-snug text-white group-hover:text-[#B7A38B] transition-colors">
                      {photo.caption}
                    </p>
                    <p className="mt-1 font-inter text-[11px] text-[#EDE5DA]/70 line-clamp-1">
                      {photo.alt}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-5 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-4xl w-full rounded-3xl bg-[#032147] border border-[#B7A38B]/40 overflow-hidden shadow-2xl p-6 sm:p-8">
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-5 right-5 grid place-items-center h-10 w-10 rounded-full bg-white/10 text-white hover:bg-[#B7A38B] hover:text-[#032147] transition duration-300 font-bold"
            >
              ✕
            </button>

            <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl bg-black">
              <img src={activePhoto.src} alt={activePhoto.alt} className="h-full w-full object-cover" />
            </div>

            <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="inline-block rounded-full bg-[#B7A38B] text-[#032147] px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-[0.1em]">
                  {activePhoto.category}
                </span>
                <h3 className="mt-2 font-canela text-2xl font-bold text-white">{activePhoto.caption}</h3>
                <p className="mt-1 font-inter text-[13.5px] text-[#EDE5DA]/80">{activePhoto.alt}</p>
              </div>

              <a
                href="#contact"
                onClick={() => setActivePhoto(null)}
                className="inline-flex items-center gap-2 rounded-full bg-[#B7A38B] text-[#032147] px-6 py-3 text-[13px] font-montserrat font-bold hover:bg-white transition duration-300 shrink-0"
              >
                Book Inspection Audit →
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

