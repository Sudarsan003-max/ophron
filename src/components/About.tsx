import { useEffect, useRef, useState } from "react";
import isaacPortrait from "./isaac_portrait.png";
import {
  AnimatedCounter,
  MaskedHeadline,
  ScrollReveal,
  TiltCard,
  ExpandRule,
  CornerBrackets,
} from "./ui/animations";

const bars = [
  { label: "Engaging content creation", v: 95, status: "OPTIMAL" },
  { label: "Data‑driven analytics", v: 92, status: "EXCELLENT" },
  { label: "Brand visibility", v: 88, status: "STABLE" },
  { label: "ROI optimization", v: 97, status: "MAXIMUM" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setAnimate(true), { threshold: 0.25 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section id="about" className="relative py-28 overflow-hidden bg-paper">
      <div className="mx-auto max-w-[1400px] px-5">
        <SectionHead n="002" label="Strategic Operating Platform" />

        <div className="mt-12 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <MaskedHeadline
              as="h2"
              className="font-canela font-bold text-[40px] sm:text-[60px] lg:text-[76px] leading-[0.95] tracking-tight text-ink"
              lines={[
                <>Operations <span className="font-serif-i text-[#B7A38B]">unified.</span></>,
                <>
                  Hospitality{" "}
                  <span className="relative inline-block">
                    empowered
                    <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 300 14" fill="none">
                      <path d="M3 9 Q 80 -2 150 6 T 297 5" stroke="#B7A38B" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                  </span>.
                </>,
              ]}
            />

            <ScrollReveal variant="up" delay={150}>
              <p className="mt-8 font-inter max-w-xl text-[16.5px] leading-relaxed text-[#032147]/85">
                Instead of managing fragmented vendors for manpower, cleaning, and tech, OPHRON serves as your single <strong className="text-[#032147] font-semibold">Strategic Operating Partner</strong> — managing people, facilities, hygiene, technology, and performance from a single centralized platform.
              </p>
            </ScrollReveal>

            {/* Bento metrics with 3D Tilt & Animated Counters */}
            <div ref={ref} className="mt-10 grid grid-cols-2 md:grid-cols-6 gap-3">
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

              <TiltCard className="col-span-2 md:col-span-3 rounded-2xl">
                <BentoCard
                  span="w-full h-full"
                  big={<><AnimatedCounter value={30} suffix="%+" /></>}
                  k="Operating Overhead Reduction"
                  tone="dark"
                />
              </TiltCard>
              
              {/* Founder Bento Card with Corner Brackets */}
              <TiltCard
                className="col-span-2 md:col-span-3 rounded-2xl"
                onClick={() => {
                  window.location.hash = "#founder";
                }}
              >
                <div 
                  className="w-full h-full group relative rounded-2xl p-5 border bg-[#EDE5DA] text-[#032147] border-[#B7A38B]/30 flex flex-col justify-between overflow-hidden cursor-pointer"
                  data-cursor="hover"
                >
                  <CornerBrackets size={10} hoverSize={16} />
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-montserrat font-bold text-xl sm:text-2xl tracking-tight text-[#032147]">Isaac Vivian</div>
                      <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#B7A38B] mt-0.5 font-bold">Founder, OPHRON</div>
                    </div>
                    {/* Real Portrait Avatar */}
                    <div className="relative h-12 w-12 shrink-0 rounded-full overflow-hidden border border-[#032147]/15 shadow-sm">
                      <img src={isaacPortrait} alt="Isaac Vivian Portrait" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <p className="mt-4 font-inter text-[12px] leading-relaxed text-[#032147]/80">
                    “We don't sell cleaning or manpower. We become the strategic operating partner that powers hospitality and commercial operations across Singapore and globally.”
                  </p>
                  <div className="mt-3 flex items-center justify-between text-[9px] font-mono tracking-[0.2em] uppercase text-[#032147]/60 border-t border-[#032147]/10 pt-2">
                    <span>Leadership Vision</span>
                    <span className="text-[#B7A38B] font-bold">View Profile →</span>
                  </div>
                </div>
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
      </div>
    </section>
  );
}

function BentoCard({
  span, big, k, tone, wide,
}: { span: string; big: string; k: string; tone?: "dark" | "lime"; wide?: boolean }) {
  const isDark = tone === "dark";
  const isLime = tone === "lime";
  return (
    <div
      className={`${span} lift relative rounded-2xl p-5 border ${
        isDark ? "bg-[#032147] text-[#EDE5DA] border-[#032147]" : isLime ? "bg-[#B7A38B] text-[#032147] border-[#B7A38B]" : "bg-[#EDE5DA] text-[#032147] border-[#B7A38B]/30"
      }`}
      style={isDark ? { background: "#032147", color: "#EDE5DA", borderColor: "#032147" } : {}}
    >
      <div className={`font-display ${wide ? "text-6xl sm:text-7xl" : "text-4xl"} tracking-[-0.04em]`}>{big}</div>
      <div className={`mt-2 text-[10px] font-mono uppercase tracking-[0.2em] ${isDark ? "opacity-60" : "opacity-70"}`}>{k}</div>
      {isLime && <span className="absolute top-3 right-3 text-xl">✦</span>}
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

export function SectionHead({ n, label, light }: { n: string; label: string; light?: boolean }) {
  return (
    <div className={`flex items-center justify-between border-b pb-4 ${light ? "border-[#EDE5DA]/20 text-[#EDE5DA]" : "border-[#032147]/15 text-[#032147]"}`} style={light ? { borderColor: "rgba(237,229,218,.2)", color: "#EDE5DA" } : {}}>
      <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.22em]">
        <span className={`grid place-items-center h-6 w-6 rounded-full text-[9px] ${light ? "bg-[#EDE5DA] text-[#032147]" : "bg-[#032147] text-[#EDE5DA]"}`} style={light ? { background: "#EDE5DA", color: "#032147" } : { background: "#032147", color: "#EDE5DA" }}>
          §
        </span>
        <span className="opacity-60">{n}</span>
        <span>/</span>
        <span>{label}</span>
      </div>
      <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.22em] opacity-50">
        <span>scroll</span><span>↓</span>
      </div>
    </div>
  );
}
