import { GradientBars } from "./ui/gradient-bars-background";
import Footer3DBackground from "./ui/footer-3d-background";
import ParticleText from "./ui/particle-text";
import {
  ScrollReveal,
  TiltCard,
  CornerBrackets,
  ExpandRule,
} from "./ui/animations";

export default function Footer() {
  return (
    <footer className="relative bg-[#032147] text-[#EDE5DA] pt-16 sm:pt-20 pb-28 overflow-hidden" style={{ background: "#032147", color: "#EDE5DA" }}>
      {/* Background Animated Gradient Bars */}
      <GradientBars
        numBars={18}
        gradientFrom="rgba(183, 163, 139, 0.15)"
        gradientTo="transparent"
        animationDuration={3}
      />

      {/* Cinematic 3D "OPHRON" background */}
      <Footer3DBackground text="OPHRON" className="pointer-events-none absolute inset-0 z-0 overflow-hidden" />
      <div className="relative z-10 mx-auto max-w-[1400px] px-5">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Left Column: Studio profile */}
          <ScrollReveal variant="left" delay={50} className="relative w-full md:max-w-[340px] flex-shrink-0">
            <div className="flex items-center gap-3.5 mb-4">
              <img
                src="/images/brand/ophron-gold-emblem-transparent.png"
                alt="OPHRON"
                className="h-10 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(183, 163, 139,0.3)]"
              />
              <div>
                <div className="text-[20px] font-display font-bold tracking-wider text-[#EDE5DA] leading-none">
                  OPHRON
                </div>
                <div className="text-[8.5px] font-mono tracking-[0.2em] uppercase text-[#B7A38B] mt-1 font-bold">
                  Infrastructure Platform
                </div>
              </div>
            </div>
            <div className="relative z-10 text-[10px] font-mono uppercase tracking-[0.22em] text-[#B7A38B] font-bold">[ OPHRON INFRASTRUCTURE PLATFORM ]</div>
            <p className="relative z-10 mt-3 text-[14.5px] leading-relaxed text-[#EDE5DA]/90 font-inter">
              <strong className="text-white font-semibold">OPHRON Systems</strong> provides NEA-licensed commercial cleaning, kitchen deep hygiene, manpower supply, and facility operations across Singapore and globally.
            </p>
            <div className="relative z-10 mt-4 flex items-center gap-3 text-[11px] font-mono text-[#B7A38B]">
              <span className="px-2.5 py-1 rounded-full border border-[#B7A38B]/40 bg-[#B7A38B]/10">NEA Licensed Operator</span>
              <span className="px-2.5 py-1 rounded-full border border-[#B7A38B]/40 bg-[#B7A38B]/10">bizSAFE Level 3</span>
            </div>

            <div className="relative z-10 mt-6 flex items-center gap-2">
              {[
                { l: "LinkedIn", s: "in", href: "https://www.linkedin.com/company/ophronsystems/posts/?feedView=all" },
                { l: "Instagram", s: "IG", href: "https://www.instagram.com/ophronsystems/" },
              ].map((s) => (
                <a
                  key={s.l}
                  href={s.href}
                  target={s.href !== "#" ? "_blank" : undefined}
                  rel={s.href !== "#" ? "noopener noreferrer" : undefined}
                  className="grid place-items-center h-10 w-10 rounded-full border border-white/20 hover:bg-[#B7A38B] hover:text-[#032147] hover:border-[#B7A38B] transition text-[11px] font-medium hover:scale-110"
                >
                  {s.s}
                </a>
              ))}
            </div>
          </ScrollReveal>

          {/* Right Column: Links and Newsletter */}
          <ScrollReveal variant="right" delay={100} className="w-full md:max-w-[340px] flex-shrink-0 grid grid-cols-2 gap-x-4 gap-y-8">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#B7A38B] font-bold">Platform</div>
              <ul className="mt-4 space-y-2 text-[14px] opacity-90">
                <li><a href="#about" className="underline-draw">About OPHRON</a></li>
                <li><a href="#services" className="underline-draw">OPHRON Services</a></li>
                <li><a href="#approach" className="underline-draw">5 Pillars</a></li>
                <li><a href="#gallery-grid" className="underline-draw">Client Portfolio</a></li>
                <li><a href="#blog" className="underline-draw">Insights & Articles</a></li>
                <li><a href="#contact" className="underline-draw">Contact Singapore</a></li>
              </ul>
            </div>

            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#B7A38B] font-bold">Specialized Solutions</div>
              <ul className="mt-4 space-y-2 text-[13.5px] opacity-90">
                <li><a href="#services" className="underline-draw">Disinfection & Decon</a></li>
                <li><a href="#services" className="underline-draw">Microfibre Concept</a></li>
                <li><a href="#services" className="underline-draw">Cleanroom & Healthcare</a></li>
                <li><a href="#services" className="underline-draw">Carpet & Upholstery</a></li>
                <li><a href="#services" className="underline-draw">Marble Diamond Polish</a></li>
                <li><a href="#services" className="underline-draw">High-Rise Facade</a></li>
                <li><a href="#services" className="underline-draw">Dishwashing & Kitchen</a></li>
                <li><a href="#services" className="underline-draw">Events Venue Care</a></li>
              </ul>
            </div>

            <div className="col-span-2">
              <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#B7A38B] font-bold">Hospitality Briefing</div>
              <p className="mt-3 text-[13px] opacity-90 font-inter">Monthly Singapore SFA & NEA compliance guides for hospitality directors.</p>
              <form onSubmit={(e) => e.preventDefault()} className="mt-4 flex items-center rounded-full border border-white/15 p-1 bg-black/40 backdrop-blur-sm">
                <input
                  type="email"
                  placeholder="gm@hotel.com.sg"
                  className="flex-1 bg-transparent px-4 py-2 text-[13px] placeholder:opacity-40 focus:outline-none"
                />
                <button className="rounded-full bg-[#B7A38B] text-[#032147] px-4 py-2 text-[12px] font-semibold hover:bg-white transition hover:scale-105">
                  Subscribe
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>

        {/* 3D Particle Text in natural flow below content columns */}
        <div className="relative z-10 mx-auto max-w-[1400px] w-full h-[clamp(130px,24vw,270px)] px-5 mt-2 mb-1">
          <ParticleText text="OPHRON" className="h-full w-full" />
        </div>

        <ExpandRule className="border-white/10 my-4" />

        {/* Office Contact Info */}
        <div className="pt-6 grid sm:grid-cols-3 gap-6">
          <ScrollReveal variant="up" delay={50}>
            <TiltCard maxTilt={5} className="rounded-2xl border border-white/[0.08] bg-[#0e0e12]/80 backdrop-blur-md p-6 hover:border-[#B7A38B]/40 hover:bg-[#0e0e12]/95 transition-all duration-300 group/card relative overflow-hidden h-full">
              <CornerBrackets color="#B7A38B" size={10} hoverSize={16} />
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#B7A38B]/50 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
              <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#B7A38B] flex items-center gap-1.5 font-bold">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#B7A38B] animate-pulse" />
                [ Singapore Operations ]
              </div>
              <p className="mt-3.5 text-[13.5px] leading-relaxed text-[#EDE5DA]/80 font-inter">
                26 Sin Ming Lane #05-124 Midview City<br />
                <span className="text-white font-medium">Singapore 573971</span>
              </p>
            </TiltCard>
          </ScrollReveal>

          <ScrollReveal variant="up" delay={150}>
            <TiltCard maxTilt={5} className="rounded-2xl border border-white/[0.08] bg-[#0e0e12]/80 backdrop-blur-md p-6 hover:border-[#B7A38B]/40 hover:bg-[#0e0e12]/95 transition-all duration-300 group/card relative overflow-hidden h-full">
              <CornerBrackets color="#B7A38B" size={10} hoverSize={16} />
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#B7A38B]/50 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
              <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#B7A38B] flex items-center gap-1.5 font-bold">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#B7A38B] animate-pulse" />
                [ Operations & Support ]
              </div>
              <p className="mt-3.5 text-[13.5px] leading-relaxed text-[#EDE5DA]/80 font-inter">
                24/7 Rapid Incident Support<br />
                <span className="text-white font-medium">admin@ophronsystems.com</span>
              </p>
            </TiltCard>
          </ScrollReveal>

          <ScrollReveal variant="up" delay={250}>
            <TiltCard maxTilt={5} className="rounded-2xl border border-white/[0.08] bg-[#0e0e12]/80 backdrop-blur-md p-6 hover:border-[#B7A38B]/40 hover:bg-[#0e0e12]/95 transition-all duration-300 group/card relative overflow-hidden h-full">
              <CornerBrackets color="#B7A38B" size={10} hoverSize={16} />
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#B7A38B]/50 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
              <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#B7A38B] flex items-center gap-1.5 font-bold">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#B7A38B] animate-pulse" />
                [ Singapore Hotline ]
              </div>
              <div className="mt-3.5">
                <a href="tel:+6592951155" className="text-xl font-montserrat font-bold text-white hover:text-[#B7A38B] transition-colors duration-300 block tracking-tight">
                  +65 9295 1155
                </a>
                <div className="mt-1 text-[11px] text-white/50 font-mono">+65 9646 6300 (Secondary Hotline)</div>
              </div>
            </TiltCard>
          </ScrollReveal>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono uppercase tracking-[0.2em] opacity-60">
          <div>© {new Date().getFullYear()} OPHRON Systems · All rights reserved</div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-[#B7A38B]">Privacy Policy</a>
            <a href="#" className="hover:text-[#B7A38B]">NEA Credentials</a>
            <a href="#" className="hover:text-[#B7A38B]">bizSAFE Level 3</a>
            <a href="#top" className="hover:text-[#B7A38B]">Back to top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

