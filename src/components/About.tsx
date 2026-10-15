import { useEffect, useRef, useState } from "react";
import isaacPortrait from "./isaac_portrait.png";
import gktFounder from "./gkt_founder.jpg";
import { isHomePage } from "../utils/routes";
import {
  AnimatedCounter,
  MaskedHeadline,
  ScrollReveal,
  TiltCard,
  ExpandRule,
  CornerBrackets,
} from "./ui/animations";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setAnimate(true), { threshold: 0.25 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section id="about" className="relative py-10 sm:py-16 lg:py-24 overflow-hidden bg-paper">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-5">
        <SectionHead label="Strategic Operating Platform" />

        <div className="mt-6 sm:mt-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-7">
            <MaskedHeadline
              as="h1"
              className="font-canela font-bold text-[34px] sm:text-[54px] lg:text-[76px] leading-[0.95] tracking-tight text-ink"
              lines={[
                "We make complex",
                <>
                  operations <span className="font-serif-i text-[#B7A38B]">easier to manage.</span>
                </>,
              ]}
            />

            <ScrollReveal variant="up" delay={150}>
              <div className="mt-5 sm:mt-8 space-y-4 font-inter max-w-xl text-[14.5px] sm:text-[16px] leading-relaxed text-[#032147]/85">
                <p className="m-0">
                  A restaurant depends on more than its kitchen. A hotel depends on more than its rooms. Behind every good guest experience is a team of people, cleaning routines, facilities and systems that need to work together.
                </p>
                <p className="m-0">
                  OPHRON was built around a simple idea: businesses should spend less time managing disconnected suppliers and more time focusing on customers, teams and growth.
                </p>
                <p className="m-0">
                  We connect practical frontline services with clearer coordination and useful operational technology. Whether you need one service or several, the goal is the same: reliable support without unnecessary complexity.
                </p>
              </div>

              {/* Mission & Vision */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-xl">
                <div className="rounded-2xl p-4 border border-[#B7A38B]/40 bg-[#EDE5DA]/70">
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8C7355] font-bold mb-1.5">
                    Our Mission
                  </div>
                  <p className="text-[13px] font-inter leading-relaxed text-[#032147] font-medium m-0">
                    To make essential hospitality and commercial operations simpler, more dependable and easier to manage.
                  </p>
                </div>
                <div className="rounded-2xl p-4 border border-[#B7A38B]/40 bg-[#EDE5DA]/70">
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8C7355] font-bold mb-1.5">
                    Our Vision
                  </div>
                  <p className="text-[13px] font-inter leading-relaxed text-[#032147] font-medium m-0">
                    To become a trusted operating partner for hospitality and commercial businesses—bringing the people, services and systems they depend on into one connected ecosystem.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Bento metrics with 3D Tilt & Animated Counters */}
            <div ref={ref} className="mt-6 sm:mt-10 grid grid-cols-2 md:grid-cols-6 gap-2.5 sm:gap-3">
              <TiltCard className="col-span-2 md:col-span-3 rounded-2xl">
                <BentoCard
                  span="w-full h-full"
                  big={<><AnimatedCounter value={5} /> Pillars</>}
                  k="Complete Infrastructure"
                  tone="dark"
                />
              </TiltCard>

              <TiltCard className="col-span-2 md:col-span-3 rounded-2xl">
                <BentoCard
                  span="w-full h-full"
                  big="Singapore"
                  k="& International Hubs"
                  tone="lime"
                />
              </TiltCard>

              <TiltCard className="col-span-1 md:col-span-2 rounded-2xl">
                <BentoCard
                  span="w-full h-full"
                  big={<><AnimatedCounter value={100} suffix="%" /></>}
                  k="SLA Compliance"
                />
              </TiltCard>

              <TiltCard className="col-span-1 md:col-span-2 rounded-2xl">
                <BentoCard
                  span="w-full h-full"
                  big="IFM Lite"
                  k="Facility Operations"
                />
              </TiltCard>

              <TiltCard className="col-span-1 md:col-span-2 rounded-2xl">
                <BentoCard
                  span="w-full h-full"
                  big="AI SaaS"
                  k="Automation Engine"
                />
              </TiltCard>

              <TiltCard className="col-span-1 md:col-span-3 rounded-2xl">
                <BentoCard
                  span="w-full h-full"
                  big={<><AnimatedCounter value={30} suffix="%+" /></>}
                  k="Operating Overhead Reduction"
                  tone="dark"
                />
              </TiltCard>

              <TiltCard className="col-span-1 md:col-span-3 rounded-2xl">
                <BentoCard
                  span="w-full h-full"
                  big="1 Partner"
                  k="Unified Ecosystem Accountability"
                  tone="lime"
                />
              </TiltCard>
            </div>

            <ExpandRule className="border-[#032147]/15 my-8" />

            <div className="grid sm:grid-cols-2 gap-4">
              <ScrollReveal variant="left" delay={100}>
                <MissionCard
                  k="Our Platform Vision"
                  text="To become the complete Hospitality Operational Infrastructure Platform for hotels, restaurants, resorts, serviced apartments, healthcare facilities, and commercial establishments in Singapore and internationally."
                />
              </ScrollReveal>
              <ScrollReveal variant="right" delay={200}>
                <MissionCard
                  k="Our Operating Model"
                  text="Transforming hospitality businesses from multi-vendor chaos to unified excellence — optimizing People, Hygiene, Facilities, Technology, and Commercial Intelligence on a single platform."
                />
              </ScrollReveal>
            </div>
          </div>

          {/* Right: Pulse.Live dashboard with 3D Tilt */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <ScrollReveal variant="right" delay={150}>
              <TiltCard maxTilt={6} className="rounded-[32px]">
                <div className="relative">
                  {/* Stickers */}
                  <div className="absolute -top-6 -left-6 z-10 sticker-pop">
                    <div className="bg-[#B7A38B] text-[#032147] text-[10px] font-mono uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full -rotate-[6deg] font-bold" style={{ color: "#032147" }}>
                      ● OPHRON OS LIVE
                    </div>
                  </div>

                  {/* Glass card container */}
                  <div className="rounded-[32px] bg-[#032147] text-[#EDE5DA] p-7 shadow-2xl border border-[#B7A38B]/30 relative overflow-hidden" style={{ background: "#032147", color: "#EDE5DA" }}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="h-3 w-3 rounded-full bg-[#B7A38B] pulse-dot" />
                        <span className="font-montserrat font-bold text-lg tracking-tight">OPHRON Operations OS</span>
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] opacity-60">SG-CORE</span>
                      </div>
                      <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#B7A38B] font-bold">2026.1</div>
                    </div>

                    <div className="mt-6 rounded-2xl bg-white/5 p-4 border border-white/10">
                      <div className="text-[10px] font-mono tracking-[0.2em] uppercase opacity-60">Active Hospitality Facilities</div>
                      <div className="mt-1 font-montserrat text-3xl tracking-tight text-white font-bold">
                        <AnimatedCounter value={99.8} decimals={1} suffix="%" /> Compliance Rate
                      </div>
                    </div>

                    <div className="mt-4 space-y-2">
                      <div className="text-[10px] font-mono tracking-[0.2em] uppercase opacity-60">Live Workforce & Hygiene Audits</div>
                      <div className="rounded-2xl bg-white/5 p-4 border border-white/10">
                        <div className="flex justify-between text-xs font-mono">
                          <span>SINGAPORE HOTELS & F&B</span>
                          <span className="text-[#B7A38B] font-bold">▲ OPTIMAL SLA</span>
                        </div>
                        <div className="mt-4 flex items-end gap-1.5 h-20">
                          {Array.from({ length: 24 }).map((_, i) => {
                            const h = 40 + Math.abs(Math.sin(i * 0.7)) * 55 + (i > 18 ? 10 : 0);
                            return (
                              <div
                                key={i}
                                className="flex-1 rounded-sm bg-[#B7A38B] ticker-bar"
                                style={{ height: animate ? `${h}%` : "10%", transition: "height 1s ease", transitionDelay: `${i * 30}ms`, animationDelay: `${i * 100}ms` }}
                              />
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          </div>
        </div>

        {/* ── UNIFIED EXECUTIVE LEADERSHIP: OPHRON SYSTEMS × GKT INTERNATIONAL ── */}
        <div id="executive-leadership" className="mt-14 sm:mt-20 pt-10 sm:pt-14 border-t border-[#032147]/15">
          <ScrollReveal variant="up" delay={100}>
            
            {/* Section Introduction Header */}
            <div className="mb-8 sm:mb-12 text-center max-w-3xl mx-auto px-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#032147] text-[#B7A38B] border border-[#B7A38B]/30 text-[10px] font-mono uppercase tracking-[0.22em] font-bold mb-3.5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B7A38B] animate-pulse" />
                <span>Executive Leadership & Strategic Synergy</span>
              </div>
              <h3
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#032147] tracking-tight leading-[1.1] mb-4"
                style={{ fontFamily: "'Canela', 'Cinzel', 'Playfair Display', 'Georgia', serif" }}
              >
                Two Powerhouses. One Combined Platform.
              </h3>
              <p className="text-sm sm:text-base text-[#032147]/80 leading-relaxed font-normal">
                <strong className="text-[#032147] font-semibold">GKT International Pte. Ltd.</strong> operates alongside <strong className="text-[#032147] font-semibold">OPHRON Systems</strong> as part of a unified organization, combining over two decades of Singapore’s facility management expertise with advanced technology, intelligent automation, and modern operational solutions.
              </p>
            </div>

            {/* Dual Founder Cards Grid (Side-by-Side 2-Column Showcase) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
              
              {/* ── CARD 1: ISAAC VIVIAN (OPHRON SYSTEMS) ── */}
              <div className="rounded-[30px] border border-[#B7A38B]/40 bg-[#021733] text-[#EDE5DA] overflow-hidden shadow-2xl relative flex flex-col justify-between group hover:border-[#B7A38B] transition-all duration-500">
                <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#B7A38B]/15 rounded-full blur-3xl pointer-events-none" />
                <CornerBrackets color="#B7A38B" size={14} hoverSize={20} />

                <div className="p-6 sm:p-8 flex-1 flex flex-col">
                  {/* Portrait Visual Frame */}
                  <div className="relative rounded-2xl overflow-hidden border-2 border-[#B7A38B]/50 shadow-[0_15px_40px_rgba(0,0,0,0.85)] bg-black mb-6">
                    <img
                      src={isaacPortrait}
                      alt="Isaac Vivian — Founder, OPHRON Systems"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto aspect-[3/2] object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-white/[0.04] pointer-events-none" />
                    
                    {/* Office Tag Badge */}
                    <div className="absolute bottom-3.5 left-3.5 z-10 flex items-center gap-2 px-3 py-1 rounded-full bg-black/85 backdrop-blur-md border border-[#B7A38B]/40 text-[9.5px] font-mono uppercase tracking-[0.18em] text-[#EDE5DA]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B7A38B] animate-pulse" />
                      <span>Isaac Vivian · Founder, OPHRON Systems</span>
                    </div>
                  </div>

                  {/* Header & Titles */}
                  <div className="flex items-center gap-2 text-[9.5px] font-mono uppercase tracking-[0.22em] text-[#B7A38B] font-bold mb-2">
                    <span>[ Infrastructure & Tech OS ]</span>
                    <span className="opacity-40">/</span>
                    <span className="text-[#EDE5DA]/70 font-normal">Singapore HQ</span>
                  </div>

                  <div className="flex items-center gap-2 mb-1">
                    <h4
                      className="text-2xl sm:text-3xl font-bold text-white tracking-tight"
                      style={{ fontFamily: "'Canela', 'Cinzel', 'Playfair Display', 'Georgia', serif" }}
                    >
                      Isaac Vivian
                    </h4>
                    <span className="text-[#B7A38B] inline-flex items-center" title="Verified Founder">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </span>
                  </div>

                  <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[#B7A38B] font-semibold mb-4">
                    Director & Co-Founder — OPHRON Systems
                  </p>

                  <p className="text-[13px] leading-relaxed text-[#EDE5DA]/85 font-inter mb-5 flex-1">
                    Isaac leads OPHRON's strategy, business development, and long-term vision. Combining business, legal, financial, and technology perspectives, he focuses on building an integrated operational ecosystem that brings essential services and technology together to simplify operations, improve efficiency, and support business growth.
                  </p>

                  {/* Capability Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
                    {[
                      "Director & Co-Founder",
                      "Operational Strategy",
                      "Integrated Ecosystems",
                      "Commercial Growth",
                    ].map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-full text-[9px] font-mono font-semibold tracking-wider uppercase bg-white/10 border border-[#B7A38B]/30 text-[#EDE5DA]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Bar */}
                <div className="px-6 sm:px-8 py-3.5 bg-black/40 border-t border-white/10 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => {
                      window.history.pushState(null, "", "/contact");
                      window.dispatchEvent(new PopStateEvent("popstate"));
                    }}
                    className="inline-flex items-center gap-1.5 text-[10.5px] font-mono uppercase tracking-[0.18em] text-[#B7A38B] hover:text-white font-bold transition-colors cursor-pointer group/btn"
                  >
                    <span>Discuss Your Requirements</span>
                    <span className="transform group-hover/btn:translate-x-1 transition-transform">→</span>
                  </button>
                  <span className="text-[9.5px] font-mono text-[#EDE5DA]/50 uppercase tracking-wider">
                    OPHRON Systems SG
                  </span>
                </div>
              </div>


              {/* ── CARD 2: KELVIN (DIRECTOR, OPHRON SYSTEMS & FOUNDER, GKT INTERNATIONAL) ── */}
              <div className="rounded-[30px] border border-[#B7A38B]/40 bg-[#021733] text-[#EDE5DA] overflow-hidden shadow-2xl relative flex flex-col justify-between group hover:border-[#B7A38B] transition-all duration-500">
                <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#B7A38B]/15 rounded-full blur-3xl pointer-events-none" />
                <CornerBrackets color="#B7A38B" size={14} hoverSize={20} />

                <div className="p-6 sm:p-8 flex-1 flex flex-col">
                  {/* Portrait Visual Frame */}
                  <div className="relative rounded-2xl overflow-hidden border-2 border-[#B7A38B]/50 shadow-[0_15px_40px_rgba(0,0,0,0.85)] bg-black mb-6">
                    <img
                      src={gktFounder}
                      alt="Kelvin — Director & Co-Founder, OPHRON Systems & Founder, GKT International Pte. Ltd."
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto aspect-[3/2] object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-white/[0.04] pointer-events-none" />
                    
                    {/* Office Tag Badge */}
                    <div className="absolute bottom-3.5 left-3.5 z-10 flex items-center gap-2 px-3 py-1 rounded-full bg-black/85 backdrop-blur-md border border-[#B7A38B]/40 text-[9.5px] font-mono uppercase tracking-[0.18em] text-[#EDE5DA]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B7A38B] animate-pulse" />
                      <span>Kelvin · Director & Co-Founder</span>
                    </div>
                  </div>

                  {/* Header & Titles */}
                  <div className="flex items-center gap-2 text-[9.5px] font-mono uppercase tracking-[0.22em] text-[#B7A38B] font-bold mb-2">
                    <span>[ Frontline Operations & Service Delivery ]</span>
                    <span className="opacity-40">/</span>
                    <span className="text-[#EDE5DA]/70 font-normal">Singapore Operations</span>
                  </div>

                  <div className="flex items-center gap-2 mb-1">
                    <h4
                      className="text-2xl sm:text-3xl font-bold text-white tracking-tight"
                      style={{ fontFamily: "'Canela', 'Cinzel', 'Playfair Display', 'Georgia', serif" }}
                    >
                      Kelvin
                    </h4>
                    <span className="text-[#B7A38B] inline-flex items-center" title="Director & Co-Founder">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </span>
                  </div>

                  <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[#B7A38B] font-semibold mb-4">
                    Director & Co-Founder — OPHRON Systems | Founder & Managing Director — GKT International
                  </p>

                  <p className="text-[13px] leading-relaxed text-[#EDE5DA]/85 font-inter mb-5 flex-1">
                    Kelvin brings over two decades of hands-on experience in Singapore's manpower, cleaning, and facility management industries. As the Founder and Managing Director of GKT International, he has built extensive operational expertise serving Singapore's hospitality and commercial sectors. At OPHRON, Kelvin leads frontline operations, service delivery, and quality standards, bringing established industry experience and operational capabilities into a modern, integrated service ecosystem.
                  </p>

                  {/* Capability Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
                    {[
                      "Director & Co-Founder",
                      "20+ Yrs SG Heritage",
                      "Frontline Operations",
                      "Service Delivery Standards",
                    ].map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-full text-[9px] font-mono font-semibold tracking-wider uppercase bg-white/10 border border-[#B7A38B]/30 text-[#EDE5DA]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Bar */}
                <div className="px-6 sm:px-8 py-3.5 bg-black/40 border-t border-white/10 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => {
                      window.history.pushState(null, "", "/contact");
                      window.dispatchEvent(new PopStateEvent("popstate"));
                    }}
                    className="inline-flex items-center gap-1.5 text-[10.5px] font-mono uppercase tracking-[0.18em] text-[#B7A38B] hover:text-white font-bold transition-colors cursor-pointer group/btn"
                  >
                    <span>Discuss Your Requirements</span>
                    <span className="transform group-hover/btn:translate-x-1 transition-transform">→</span>
                  </button>
                  <span className="text-[9.5px] font-mono text-[#EDE5DA]/50 uppercase tracking-wider">
                    OPHRON Systems · GKT International
                  </span>
                </div>
              </div>

            </div>

            {/* ── UNIFIED ALLIANCE SUMMARY CARD ── */}
            <div className="mt-8 rounded-2xl bg-[#EDE5DA] p-6 sm:p-8 border border-[#B7A38B]/50 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-[#8C7355] font-bold">
                  <span>✦ Unified Operating Alliance</span>
                  <span className="text-[#032147]/40">·</span>
                  <span>Part of the GKT International Group</span>
                </div>
                <h4
                  className="text-xl sm:text-2xl font-bold text-[#032147] tracking-tight"
                  style={{ fontFamily: "'Canela', 'Cinzel', 'Playfair Display', 'Georgia', serif" }}
                >
                  Two strengths. One ecosystem. One commitment to better operations.
                </h4>
                <p className="text-xs sm:text-[13.5px] text-[#032147]/85 max-w-3xl leading-relaxed">
                  <strong>OPHRON is part of the GKT International Group</strong>, combining GKT International's established operational expertise in Singapore with OPHRON's modern approach to hospitality and commercial facility management. Together, we bring experienced teams, proven operational capabilities, and technology-driven solutions under one ecosystem. From manpower and cleaning to facility services and operational technology, we help businesses operate more efficiently, reliably, and confidently.
                </p>
              </div>
            </div>

          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function BentoCard({
  span, big, k, tone, wide,
}: { span: string; big: React.ReactNode; k: string; tone?: "dark" | "lime"; wide?: boolean }) {
  const isDark = tone === "dark";
  const isLime = tone === "lime";
  return (
    <div
      className={`${span} lift relative rounded-2xl p-4 sm:p-5 border ${
        isDark ? "bg-[#032147] text-[#EDE5DA] border-[#032147]" : isLime ? "bg-[#B7A38B] text-[#032147] border-[#B7A38B]" : "bg-[#EDE5DA] text-[#032147] border-[#B7A38B]/30"
      }`}
      style={isDark ? { background: "#032147", color: "#EDE5DA", borderColor: "#032147" } : {}}
    >
      <div className={`font-display ${wide ? "text-5xl sm:text-6xl lg:text-7xl" : "text-2xl sm:text-3xl lg:text-4xl"} tracking-[-0.04em] leading-tight`}>{big}</div>
      <div className={`mt-2 text-[9.5px] sm:text-[10px] font-mono uppercase tracking-[0.16em] sm:tracking-[0.2em] ${isDark ? "opacity-60" : "opacity-70"}`}>{k}</div>
      {isLime && <span className="absolute top-3 right-3 text-lg sm:text-xl">✦</span>}
    </div>
  );
}

function MissionCard({ k, text }: { k: string; text: string }) {
  return (
    <div className="rounded-2xl border border-[#032147]/15 p-5 bg-[#EDE5DA] lift" style={{ background: "#EDE5DA" }}>
      <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#032147]/60">[ {k} ]</div>
      <p className="mt-3 text-[14px] leading-relaxed text-[#032147]/80">{text}</p>
    </div>
  );
}

export function SectionHead({
  n,
  label,
  light,
  forceShowNumber,
  forceHideNumber,
}: {
  n?: string;
  label: string;
  light?: boolean;
  forceShowNumber?: boolean;
  forceHideNumber?: boolean;
}) {
  const [isHome, setIsHome] = useState<boolean>(() => isHomePage());

  useEffect(() => {
    const handleLocation = () => setIsHome(isHomePage());
    window.addEventListener("popstate", handleLocation);
    window.addEventListener("hashchange", handleLocation);
    window.addEventListener("ophron-route-change", handleLocation);
    return () => {
      window.removeEventListener("popstate", handleLocation);
      window.removeEventListener("hashchange", handleLocation);
      window.removeEventListener("ophron-route-change", handleLocation);
    };
  }, []);

  const showNumber = forceShowNumber ?? (!forceHideNumber && isHome && Boolean(n));

  return (
    <div
      className={`flex items-center justify-between border-b pb-2.5 ${
        light ? "border-[#EDE5DA]/20 text-[#EDE5DA]" : "border-[#032147]/15 text-[#032147]"
      }`}
      style={light ? { borderColor: "rgba(237,229,218,.2)", color: "#EDE5DA" } : {}}
    >
      <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.22em]">
        {showNumber ? (
          <>
            <span
              className={`grid place-items-center h-6 w-6 rounded-full text-[9px] font-bold ${
                light ? "bg-[#EDE5DA] text-[#032147]" : "bg-[#032147] text-[#EDE5DA]"
              }`}
              style={light ? { background: "#EDE5DA", color: "#032147" } : { background: "#032147", color: "#EDE5DA" }}
            >
              §
            </span>
            <span className="opacity-60">{n}</span>
            <span>/</span>
          </>
        ) : (
          <span
            className={`inline-block h-2 w-2 rounded-full shrink-0 ${
              light ? "bg-[#B7A38B]" : "bg-[#032147]"
            }`}
            style={light ? { background: "#B7A38B" } : { background: "#032147" }}
          />
        )}
        <span className="font-semibold tracking-[0.22em]">{label}</span>
      </div>
      <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.22em] opacity-50">
        <span>scroll</span>
        <span>↓</span>
      </div>
    </div>
  );
}
