import { useState } from "react";
import { VALUABLE_CLIENTS, CLIENT_SECTORS, ClientCategory } from "../data/clients";
import {
  MaskedHeadline,
  ScrollReveal,
  AnimatedCounter,
  TiltCard,
  CornerBrackets,
} from "./ui/animations";

export default function Logos() {
  const [activeCategory, setActiveCategory] = useState<ClientCategory>("all");

  const filteredClients =
    activeCategory === "all"
      ? VALUABLE_CLIENTS
      : VALUABLE_CLIENTS.filter((c) => c.category === activeCategory);

  const clientsWithImages = VALUABLE_CLIENTS.filter((c) => c.image);

  return (
    <section className="relative bg-[#032147] py-24 overflow-hidden border-y border-[#B7A38B]/20" style={{ background: "#032147", color: "#EDE5DA" }}>
      {/* Radial glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#B7A38B]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px] px-5">
        <div className="grid lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-6">
            <ScrollReveal variant="up" delay={50}>
              <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#B7A38B] font-bold mb-3">
                [ <AnimatedCounter value={140} suffix="+" /> Active Singapore Contracts · 002 ]
              </div>
            </ScrollReveal>
            <MaskedHeadline
              as="h2"
              className="font-canela text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight"
              staggerMs={120}
              lines={[
                "Singapore's leading hospitality &",
                <>
                  <span className="font-serif-i italic text-[#B7A38B]">F&B establishments</span> trust OPHRON.
                </>,
              ]}
            />
          </div>
          <div className="lg:col-span-6 text-[14.5px] font-inter leading-relaxed text-[#EDE5DA]/80 max-w-lg lg:ml-auto">
            <ScrollReveal variant="left" delay={200}>
              From 5-star luxury hotels and Michelin-selected dining to artisanal bakery chains and industrial MNC facilities — we power the operational infrastructure behind Singapore's premier brands.
            </ScrollReveal>
          </div>
        </div>

        {/* Sector Filter Tabs */}
        <ScrollReveal variant="up" delay={150}>
          <div className="mt-12 flex flex-wrap items-center gap-2 border-b border-white/10 pb-5">
            {CLIENT_SECTORS.map((sec) => {
              const active = activeCategory === sec.key;
              return (
                <button
                  key={sec.key}
                  onClick={() => setActiveCategory(sec.key as ClientCategory)}
                  className={`px-4 py-2 rounded-full text-[12px] font-montserrat font-semibold transition-all duration-300 ${
                    active
                      ? "bg-[#B7A38B] text-[#032147] shadow-md shadow-[#B7A38B]/20 scale-105"
                      : "bg-white/5 border border-white/10 text-[#EDE5DA] hover:bg-white/10"
                  }`}
                >
                  {sec.label}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Highlighted Venue Badges Grid */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
          {clientsWithImages.slice(0, 6).map((item, idx) => (
            <ScrollReveal key={item.id} variant="up" delay={idx * 80}>
              <TiltCard
                maxTilt={8}
                className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 p-3 hover:border-[#B7A38B]/60 transition-all duration-300 flex flex-col justify-between h-full"
              >
                <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden mb-3 bg-black/40">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <CornerBrackets color="#B7A38B" size={10} hoverSize={16} />
                  {item.badge && (
                    <span className="absolute top-2 left-2 z-30 bg-[#032147] text-[#B7A38B] text-[8.5px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border border-[#B7A38B]/30">
                      {item.badge}
                    </span>
                  )}
                </div>
                <div>
                  <div className="font-montserrat font-bold text-[14px] text-white group-hover:text-[#B7A38B] transition-colors line-clamp-1">
                    {item.name}
                  </div>
                  <div className="text-[10px] font-inter text-[#EDE5DA]/60 mt-0.5 line-clamp-1">
                    {item.subtext}
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Marquee Track 1: Solid Typography */}
      <div className="mt-14 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <div className="marquee-track inline-flex gap-14 whitespace-nowrap pr-14">
          {[...filteredClients, ...filteredClients].map((b, i) => (
            <span key={i} className="inline-flex items-center gap-6">
              <span className="font-canela text-[34px] sm:text-[46px] tracking-tight text-[#EDE5DA] hover:text-[#B7A38B] transition-colors cursor-default">
                {b.name}
              </span>
              <span className="h-2 w-2 rounded-full bg-[#B7A38B]" />
            </span>
          ))}
        </div>
      </div>

      {/* Marquee Track 2: Outlined Typography In Reverse */}
      <div className="mt-5 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <div className="marquee-track-rev inline-flex gap-14 whitespace-nowrap pr-14">
          {[...filteredClients, ...filteredClients].map((b, i) => (
            <span key={i} className="inline-flex items-center gap-6">
              <span className="font-canela italic text-[34px] sm:text-[46px] tracking-tight text-white/40 hover:text-white transition-colors cursor-default">
                {b.name}
              </span>
              <span className="text-[#B7A38B] text-xl">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
