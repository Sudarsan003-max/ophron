import { useState } from "react";
import { SectionHead } from "./About";
import ServiceDetailModal from "./ServiceDetailModal";
import { OPHRON_SERVICE_PAGES } from "../data/ophronServicePages";
import {
  MaskedHeadline,
  ScrollReveal,
  TiltCard,
  CornerBrackets,
} from "./ui/animations";
import { ArrowUpRight } from "lucide-react";

export default function Solutions() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  // Exact 3 services in exact order required:
  // 1. Commercial Cleaning
  // 2. F&B Stewarding Manpower & Kitchen Workforce
  // 3. Events Venue Maintenance
  const homeServices = [
    OPHRON_SERVICE_PAGES["commercial-cleaning"],
    OPHRON_SERVICE_PAGES["fnb-stewarding-manpower"],
    OPHRON_SERVICE_PAGES["events-venue"],
  ].filter(Boolean);

  return (
    <section
      id="solutions"
      className="relative py-12 sm:py-20 bg-[#EDE5DA] overflow-hidden"
      style={{ background: "#EDE5DA", color: "#032147" }}
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <SectionHead n="005" label="Specialized Operational Services" />

        {/* Section Header */}
        <div className="mt-6 sm:mt-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#B7A38B] font-bold">
                [ 100% Operational Service Breakdown ]
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#B7A38B]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#032147]/70 font-semibold">
                Primary Singapore Offerings
              </span>
            </div>
            <MaskedHeadline
              as="h2"
              className="font-canela font-bold text-3xl sm:text-5xl lg:text-6xl text-[#032147] tracking-tight leading-[1.02]"
              lines={[
                <>
                  The support your operation needs,{" "}
                  <span className="font-serif-i italic text-[#B7A38B]">under one roof.</span>
                </>,
              ]}
            />
            <p className="mt-3 sm:mt-4 font-inter text-[14px] sm:text-[15.5px] leading-relaxed text-[#032147]/80 max-w-2xl">
              From daily dishwashing and kitchen stewarding to routine commercial cleaning and facility support, we help you keep your operation running smoothly.
            </p>
          </div>
          <div className="hidden lg:block text-right">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#032147]/5 border border-[#B7A38B]/35 text-[11px] font-mono text-[#032147] font-semibold">
              <span className="h-2 w-2 rounded-full bg-[#B7A38B] animate-pulse" />
              <span>Showing 3 Primary Services</span>
            </span>
            <div className="mt-2 text-[11.5px] font-mono uppercase tracking-[0.15em] text-[#B7A38B] font-bold">
              ✦ Click Any Service for Full Layout & Protocol ✦
            </div>
          </div>
        </div>

        {/* 3 Services Cards Grid */}
        <div className="mt-8 sm:mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {homeServices.map((srv, idx) => {
            const overviewBlock = srv.sections.find((s) => s.kind === "overview");
            return (
              <ScrollReveal key={srv.slug} variant="up" delay={idx * 120} className="h-full">
                <TiltCard
                  maxTilt={5}
                  className="rounded-3xl h-full"
                  onClick={() => {
                    window.history.pushState(null, "", `/services/${srv.slug}`);
                    window.dispatchEvent(new PopStateEvent("popstate"));
                  }}
                >
                  <div className="group relative cursor-pointer rounded-3xl bg-[#EDE5DA] border border-[#B7A38B]/35 p-6 sm:p-7 flex flex-col justify-between hover:bg-[#032147] hover:text-[#EDE5DA] hover:border-[#B7A38B] transition-all duration-500 shadow-lg hover:shadow-2xl overflow-hidden h-full">
                    <CornerBrackets color="#B7A38B" size={12} hoverSize={18} />

                    <div>
                      {/* 1. Correct Image positioned on top */}
                      <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-5 bg-[#032147]/10 shadow-md">
                        <img
                          src={srv.heroImage}
                          alt={srv.heroTitle}
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                          loading="lazy"
                          decoding="async"
                        />
                        <CornerBrackets color="#B7A38B" size={12} hoverSize={18} />
                        <div className="absolute top-3 left-3 z-20 bg-[#032147]/95 backdrop-blur-sm text-[#EDE5DA] group-hover:bg-[#B7A38B] group-hover:text-[#032147] px-3 py-1 rounded-full text-[9.5px] font-mono uppercase font-bold tracking-[0.1em] transition duration-300 shadow">
                          {srv.crumb}
                        </div>
                        <div className="absolute bottom-3 right-3 z-20 bg-black/60 backdrop-blur-sm text-white/90 px-2.5 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-[0.15em] font-semibold opacity-0 group-hover:opacity-100 transition duration-300">
                          HD Protocol
                        </div>
                      </div>

                      {/* 2. Service Title and corresponding Description positioned below image */}
                      <h3 className="font-montserrat font-bold text-xl sm:text-[22px] text-[#032147] group-hover:text-white transition duration-300 tracking-tight leading-snug min-h-[56px] flex items-center">
                        {srv.heroTitle}
                      </h3>

                      <p className="mt-2.5 font-inter text-[13.5px] leading-relaxed text-[#032147]/80 group-hover:text-[#EDE5DA]/85 transition duration-300 min-h-[64px] line-clamp-3">
                        {srv.heroLead}
                      </p>

                      {overviewBlock && overviewBlock.kind === "overview" && overviewBlock.bullets && (
                        <div className="mt-4 space-y-2 border-t border-[#032147]/10 group-hover:border-white/10 pt-3.5">
                          {overviewBlock.bullets.slice(0, 3).map((b, bIdx) => (
                            <div
                              key={bIdx}
                              className="flex items-center gap-2 text-[12px] font-inter text-[#032147]/85 group-hover:text-[#EDE5DA]/90"
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-[#B7A38B] shrink-0" />
                              <span className="line-clamp-1">{b}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Card Footer Action */}
                    <div className="mt-6 pt-3.5 flex items-center justify-between border-t border-[#032147]/15 group-hover:border-white/20">
                      <span className="text-[11px] font-mono uppercase tracking-[0.1em] text-[#B7A38B] font-bold">
                        100% Scope & FAQs
                      </span>
                      <span className="grid place-items-center h-8 w-8 rounded-full bg-[#032147] text-[#EDE5DA] group-hover:bg-[#B7A38B] group-hover:text-[#032147] font-bold transition duration-300 group-hover:translate-x-0.5">
                        →
                      </span>
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Action Link to Full Services Directory */}
        <div className="mt-8 sm:mt-10 p-5 rounded-2xl bg-[#EDE5DA]/80 border border-[#B7A38B]/35 shadow-sm backdrop-blur-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-left w-full md:w-auto">
            <div className="h-10 w-10 shrink-0 rounded-xl bg-[#032147] border border-[#B7A38B]/40 flex items-center justify-center shadow-md p-2">
              <img
                src="/images/brand/ophron-gold-emblem-transparent.png"
                alt="OPHRON Emblem"
                loading="lazy"
                decoding="async"
                className="h-5 w-auto object-contain"
              />
            </div>
            <div>
              <div className="text-[13.5px] font-montserrat font-bold text-[#032147]">
                Unified Master Platform · Full Operational Directory
              </div>
              <div className="text-[12px] font-inter text-[#032147]/70">
                Access detailed SOP protocols, scopes, and compliance frameworks for all 40+ specialized services.
              </div>
            </div>
          </div>

          <a
            href="/services"
            className="group inline-flex items-center justify-center gap-2.5 px-6 py-2.5 rounded-full bg-[#032147] text-[#EDE5DA] hover:bg-[#B7A38B] hover:text-[#032147] font-montserrat text-[12.5px] font-bold tracking-wide transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 active:scale-95 cursor-pointer border border-[#B7A38B]/40 shrink-0"
          >
            <span>Explore Full Services Directory</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#B7A38B] group-hover:text-[#032147]" />
          </a>
        </div>

        <ScrollReveal
          variant="up"
          delay={200}
          className="mt-10 text-center text-[12px] font-mono uppercase tracking-[0.22em] text-[#032147]/60 font-semibold"
        >
          ✦ Unified Master Platform · Custom SLA Agreements for Singapore & International Hospitality ✦
        </ScrollReveal>
      </div>

      {/* Full Service Detail Modal */}
      <ServiceDetailModal serviceSlug={activeSlug} onClose={() => setActiveSlug(null)} />
    </section>
  );
}
