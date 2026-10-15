import { useEffect, useMemo } from "react";
import {
  OPHRON_SERVICE_PAGES,
  ALL_SERVICES_CATALOG,
  ServicePageData,
  SectionBlock,
} from "../data/ophronServicePages";
import {
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Phone,
  FileText,
} from "lucide-react";
import { CornerBrackets } from "./ui/animations";

type Props = {
  slug: string;
};

// Aliases for sub-service slugs that map to main specialized SOP pages
const SLUG_ALIASES: Record<string, string> = {
  "kitchen-helpers": "fnb-stewarding-manpower",
  "venue-utility-personnel": "fnb-stewarding-manpower",
  "dishwasher-manpower": "dishwashing-kitchen",
  "dishwashing-services": "dishwashing-kitchen",
  "stewarding-staff": "fnb-stewarding-manpower",
  "restroom-deep-cleaning": "commercial-cleaning",
  "microfibre-concept": "microfibre-cleaning",
  "cleanroom-cleaning": "cleanroom-healthcare",
  "carpet-cleaning": "carpet-upholstery",
  "events-venue-cleaning": "events-venue",
};

export default function ServiceDetailPage({ slug }: Props) {
  const resolvedSlug = SLUG_ALIASES[slug] || slug;
  const serviceData: ServicePageData | undefined = OPHRON_SERVICE_PAGES[resolvedSlug];

  useEffect(() => {
    window.scrollTo(0, 0);
    (window as any).__lenis?.scrollTo(0);
  }, [slug]);

  // Find related services in the same pillar
  const relatedServices = useMemo(() => {
    if (!serviceData) return [];
    return ALL_SERVICES_CATALOG.filter(
      (s) => s.pillarId === serviceData.pillarId && s.slug !== resolvedSlug
    ).slice(0, 3);
  }, [serviceData, resolvedSlug]);

  if (!serviceData) {
    return (
      <div className="min-h-screen bg-paper text-ink pt-32 pb-24 px-5">
        <div className="mx-auto max-w-3xl text-center py-20 rounded-3xl bg-[#EDE5DA] border border-[#B7A38B]/40 p-8 shadow-xl">
          <div className="text-4xl mb-3">🔍</div>
          <h1 className="font-canela text-3xl font-bold text-[#032147]">
            Service Not Found
          </h1>
          <p className="mt-3 text-[15px] font-inter text-[#032147]/80">
            The specialized service you requested (<code>{slug}</code>) could not be located in our active operational directory.
          </p>
          <a
            href="/services"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#032147] text-[#EDE5DA] px-7 py-3 text-sm font-montserrat font-bold hover:bg-[#B7A38B] hover:text-[#032147] transition shadow-md"
          >
            ← Return to Services Directory
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-paper text-ink pb-24">
      {/* ── 1. DEDICATED HERO BANNER ───────────────────────────────────────── */}
      <section className="relative bg-[#032147] text-[#EDE5DA] pt-14 pb-20 overflow-hidden border-b border-[#B7A38B]/30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#B7A38B]/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-[1400px] px-5">
          {/* Breadcrumb Bar */}
          <div className="flex flex-wrap items-center gap-2.5 text-[11px] font-mono uppercase tracking-[0.2em] text-[#B7A38B] mb-8">
            <a href="/" className="hover:text-white transition">
              Home
            </a>
            <span className="opacity-40">/</span>
            <a href="/services" className="hover:text-white transition">
              Services
            </a>
            <span className="opacity-40">/</span>
            <span className="opacity-60">{serviceData.pillarName}</span>
            <span className="opacity-40">/</span>
            <span className="text-white font-bold">{serviceData.crumb}</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Heading and Summary */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#B7A38B]/20 border border-[#B7A38B]/40 px-3.5 py-1 text-[11px] font-mono text-[#B7A38B] uppercase tracking-[0.15em] font-bold">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#B7A38B] animate-pulse" />
                  <span>{serviceData.pillarName}</span>
                </span>
                {serviceData.badge && (
                  <span className="rounded-full bg-white/10 border border-white/15 px-3 py-0.5 text-[10px] font-mono text-white font-semibold uppercase">
                    {serviceData.badge}
                  </span>
                )}
                <span className="rounded-full bg-[#B7A38B]/10 border border-[#B7A38B]/30 px-3 py-0.5 text-[10px] font-mono text-[#B7A38B] font-semibold uppercase">
                  NEA Licensed & bizSAFE 3
                </span>
              </div>

              <h1 className="font-canela font-bold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[0.98]">
                {serviceData.heroTitle}
              </h1>

              <p className="mt-6 font-inter text-[16px] sm:text-[18px] leading-relaxed text-[#EDE5DA]/90 max-w-2xl">
                {serviceData.heroLead}
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#B7A38B] text-[#032147] px-8 py-4 text-[13px] font-montserrat font-bold hover:bg-white hover:scale-105 transition duration-300 shadow-xl shadow-[#B7A38B]/20"
                >
                  <span>Request {serviceData.crumb} Site Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="tel:+6592951155"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 text-white px-6 py-4 text-[13px] font-mono font-bold hover:bg-white/10 transition"
                >
                  <Phone className="w-4 h-4 text-[#B7A38B]" />
                  <span>+65 9295 1155</span>
                </a>
              </div>
            </div>

            {/* Right Column: High-Res Visual Frame */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#B7A38B]/40 shadow-2xl bg-black/30 aspect-[4/3] group">
                <img
                  src={serviceData.heroImage}
                  alt={serviceData.heroTitle}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="eager"
                  decoding="async"
                />
                <CornerBrackets color="#B7A38B" size={16} hoverSize={24} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#032147]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-[#EDE5DA] bg-[#032147]/80 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10">
                  <span className="font-bold text-[#B7A38B]">Verified Field Standard</span>
                  <span>100% Supervisor Signed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Metrics Strip */}
          <div className="mt-12 pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-[#EDE5DA]">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#B7A38B]">Compliance Standard</div>
              <div className="text-lg font-montserrat font-bold text-white mt-1">SFA & NEA Approved</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#B7A38B]">Response SLA</div>
              <div className="text-lg font-montserrat font-bold text-white mt-1">24/7 Rapid Incident Desk</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#B7A38B]">Supervisory Oversight</div>
              <div className="text-lg font-montserrat font-bold text-white mt-1">100% On-Site Signoff</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#B7A38B]">Personnel Certification</div>
              <div className="text-lg font-montserrat font-bold text-white mt-1">WSQ Trained & Badged</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. MAIN TECHNICAL SPECIFICATION BODY ──────────────────────────── */}
      <div className="mx-auto max-w-[1400px] px-5 pt-16">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Main Content Columns */}
          <div className="lg:col-span-8 space-y-16">
            {/* Section Blocks Render */}
            {serviceData.sections.map((block, idx) => (
              <ServiceBlockSection key={idx} block={block} />
            ))}

            {/* Custom Scope Card */}
            <div className="rounded-3xl bg-[#032147] text-[#EDE5DA] p-8 sm:p-10 border border-[#B7A38B]/40 shadow-xl relative overflow-hidden">
              <div className="relative z-10 max-w-2xl">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#B7A38B] font-bold block mb-2">
                  [ Singapore Facility Integration ]
                </span>
                <h3 className="font-canela text-2xl sm:text-3xl font-bold text-white">
                  Need {serviceData.crumb} Integrated into a Master Facility Contract?
                </h3>
                <p className="mt-3 text-[14px] font-inter text-[#EDE5DA]/80 leading-relaxed">
                  Consolidate {serviceData.crumb.toLowerCase()} alongside stewarding, hygiene, and engineering under a single supervisor-signed monthly SLA with zero subcontractor markups.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-[#B7A38B] text-[#032147] px-6 py-3 text-xs font-montserrat font-bold hover:bg-white transition shadow-md"
                  >
                    Request Tailored SLA Scope →
                  </a>
                  <a
                    href="/services"
                    className="text-xs font-mono text-[#B7A38B] hover:underline"
                  >
                    View All 19 Operational Scopes
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar: Quick Actions, Pillar Tree, and Related Services */}
          <div className="lg:col-span-4 space-y-8 sticky top-28">
            {/* Operational Fact Sheet */}
            <div className="rounded-3xl bg-[#EDE5DA] border border-[#B7A38B]/40 p-6 sm:p-8 shadow-md">
              <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-[#B7A38B] font-bold mb-4">
                <FileText className="w-4 h-4" />
                <span>Operational Factsheet</span>
              </div>

              <div className="space-y-4 text-xs font-inter border-t border-[#032147]/10 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-[#032147]/70 font-mono">Service Category:</span>
                  <span className="font-montserrat font-bold text-[#032147]">{serviceData.category}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#032147]/70 font-mono">Governing Pillar:</span>
                  <span className="font-montserrat font-bold text-[#032147]">{serviceData.pillarName}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#032147]/70 font-mono">Deployment SLA:</span>
                  <span className="font-montserrat font-bold text-[#032147]">Within 24 Hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#032147]/70 font-mono">Emergency Hotline:</span>
                  <span className="font-mono font-bold text-[#032147]">+65 9295 1155</span>
                </div>
              </div>

              <a
                href="/contact"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#032147] text-[#EDE5DA] px-5 py-3.5 text-xs font-montserrat font-bold hover:bg-[#B7A38B] hover:text-[#032147] transition shadow-md"
              >
                Schedule Site Inspection
              </a>
            </div>

            {/* Related Services in Same Pillar */}
            {relatedServices.length > 0 && (
              <div className="rounded-3xl bg-[#EDE5DA] border border-[#B7A38B]/40 p-6 sm:p-8 shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-montserrat font-bold text-sm text-[#032147] uppercase tracking-wider">
                    Related {serviceData.pillarName}
                  </h4>
                  <span className="text-[10px] font-mono text-[#B7A38B] font-bold">
                    Pillar Scopes
                  </span>
                </div>

                <div className="space-y-3">
                  {relatedServices.map((rel) => (
                    <a
                      key={rel.id}
                      href={`/services/${rel.slug}`}
                      className="group flex items-center gap-3 p-3 rounded-2xl bg-white/70 border border-[#032147]/10 hover:border-[#B7A38B] hover:bg-white hover:shadow-md transition-all duration-300"
                    >
                      <img
                        src={rel.image}
                        alt={rel.name}
                        className="h-12 w-12 rounded-xl object-cover shrink-0"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="font-montserrat font-bold text-xs text-[#032147] group-hover:text-[#B7A38B] transition-colors truncate">
                          {rel.name}
                        </div>
                        <div className="text-[11px] font-inter text-[#032147]/70 truncate">
                          {rel.badge}
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-[#B7A38B] shrink-0 group-hover:translate-x-1 transition-transform" />
                    </a>
                  ))}
                </div>

                <a
                  href="/services"
                  className="mt-5 block text-center text-xs font-mono font-bold text-[#032147] hover:text-[#B7A38B] transition"
                >
                  ← Browse Full 19-Service Directory
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  REUSABLE BLOCK RENDERER FOR DETAILED SERVICE SECTIONS                     */
/* ────────────────────────────────────────────────────────────────────────── */

function ServiceBlockSection({ block }: { block: SectionBlock }) {
  if (block.kind === "overview") {
    return (
      <div className="rounded-3xl bg-[#EDE5DA] border border-[#B7A38B]/40 p-8 sm:p-10 shadow-md">
        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#B7A38B] font-bold block mb-2">
          [ Standard Operating Protocol ]
        </span>
        <h2 className="font-canela text-3xl sm:text-4xl font-bold text-[#032147] tracking-tight">
          {block.title}
        </h2>

        <div className="mt-6 grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-7 space-y-4">
            {block.paragraphs.map((p, i) => (
              <p key={i} className="font-inter text-[14.5px] leading-relaxed text-[#032147]/85">
                {p}
              </p>
            ))}
          </div>

          <div className="md:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-[#032147]/15 shadow-md aspect-[16/10]">
              <img
                src={block.image}
                alt={block.imageAlt}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>

        {block.bullets && block.bullets.length > 0 && (
          <div className="mt-8 pt-6 border-t border-[#032147]/10">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#B7A38B] font-bold mb-4">
              Scope of Work & Protocol Execution Deliverables:
            </h4>
            <div className="grid sm:grid-cols-2 gap-3">
              {block.bullets.map((b, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 text-[13px] font-inter text-[#032147] bg-white/60 border border-[#032147]/10 rounded-xl p-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#B7A38B] shrink-0 mt-0.5" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  if (block.kind === "value") {
    return (
      <div className="space-y-6">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#B7A38B] font-bold block mb-1">
            [ Operational Value & Impact ]
          </span>
          <h2 className="font-canela text-3xl font-bold text-[#032147]">
            {block.title}
          </h2>
          {block.lead && (
            <p className="mt-2 text-[14.5px] font-inter text-[#032147]/80 max-w-2xl">
              {block.lead}
            </p>
          )}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {block.items.map((it, i) => (
            <div
              key={i}
              className="rounded-2xl bg-[#EDE5DA] border border-[#B7A38B]/40 p-6 shadow-md flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-[#B7A38B] font-bold">0{i + 1}</span>
                <h3 className="mt-2 font-montserrat font-bold text-base text-[#032147]">
                  {it.title}
                </h3>
                <p className="mt-2 text-[13px] font-inter text-[#032147]/80 leading-relaxed">
                  {it.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (block.kind === "guide") {
    return (
      <div className="rounded-3xl bg-[#032147] text-[#EDE5DA] p-8 sm:p-10 border border-[#B7A38B]/30 shadow-xl">
        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#B7A38B] font-bold block mb-2">
          [ Technical Specification & Method Statement ]
        </span>
        <h2 className="font-canela text-3xl font-bold text-white mb-2">
          {block.title}
        </h2>
        {block.intro && (
          <p className="text-[14.5px] font-inter text-[#EDE5DA]/80 max-w-2xl mb-8">
            {block.intro}
          </p>
        )}

        <div className="grid sm:grid-cols-2 gap-6">
          {block.blocks.map((b, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <h3 className="font-montserrat font-bold text-[15px] text-[#B7A38B] mb-2">
                {b.heading}
              </h3>
              <p className="text-[13px] font-inter text-[#EDE5DA]/85 leading-relaxed">
                {b.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (block.kind === "faq") {
    return (
      <div className="rounded-3xl bg-[#EDE5DA] border border-[#B7A38B]/40 p-8 sm:p-10 shadow-md">
        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#B7A38B] font-bold block mb-2">
          [ Protocol Questions & Answers ]
        </span>
        <h2 className="font-canela text-3xl font-bold text-[#032147] mb-6">
          {block.title}
        </h2>

        <div className="space-y-4">
          {block.items.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white/70 border border-[#032147]/10 p-5"
            >
              <h4 className="font-montserrat font-bold text-[15px] text-[#032147] flex items-center gap-2">
                <span className="text-[#B7A38B] font-bold">Q:</span>
                <span>{item.q}</span>
              </h4>
              <p className="mt-2 text-[13.5px] font-inter text-[#032147]/80 leading-relaxed pl-5">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
}
