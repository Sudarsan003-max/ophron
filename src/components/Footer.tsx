import { GradientBars } from "./ui/gradient-bars-background";
import Footer3DBackground from "./ui/footer-3d-background";
import {
  ScrollReveal,
  TiltCard,
  CornerBrackets,
  ExpandRule,
} from "./ui/animations";

export default function Footer() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="site-footer"
      className="relative bg-[#021833] text-[#EDE5DA] pt-12 sm:pt-16 lg:pt-20 pb-28 sm:pb-20 lg:pb-14 overflow-hidden border-t border-[#B7A38B]/20"
      style={{
        background: "#021833",
        color: "#EDE5DA",
        paddingBottom: "max(7.5rem, calc(6rem + env(safe-area-inset-bottom, 0px)))",
      }}
      aria-label="Site Footer"
    >
      {/* Background Animated Gradient Bars — subtle ambient illumination */}
      <div className="absolute inset-0 opacity-30 sm:opacity-60 pointer-events-none overflow-hidden">
        <GradientBars
          numBars={14}
          gradientFrom="rgba(183, 163, 139, 0.12)"
          gradientTo="transparent"
          animationDuration={3}
        />
      </div>

      {/* Cinematic ambient background glow */}
      <div className="hidden sm:block opacity-40 lg:opacity-60 pointer-events-none">
        <Footer3DBackground
          text="OPHRON"
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 items-start">
          
          {/* Column 1: Platform Profile & Brand Header */}
          <ScrollReveal
            variant="left"
            delay={50}
            className="md:col-span-2 lg:col-span-4 flex flex-col"
          >
            <div className="flex items-center gap-3.5 mb-4">
              <img
                src="/images/brand/ophron-gold-emblem-transparent.png"
                alt="OPHRON"
                loading="lazy"
                decoding="async"
                className="h-10 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(183,163,139,0.3)]"
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

            <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#B7A38B] font-bold">
              [ OPHRON INFRASTRUCTURE PLATFORM ]
            </div>

            <p className="mt-3 text-[13.5px] sm:text-[14px] leading-relaxed text-[#EDE5DA]/90 font-inter max-w-[480px]">
              <strong className="text-white font-semibold">OPHRON Systems</strong> provides NEA-licensed commercial cleaning, kitchen deep hygiene, manpower supply, and facility operations across Singapore and globally.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-2 text-[10.5px] font-mono text-[#B7A38B]">
              <span className="px-2.5 py-1 rounded-full border border-[#B7A38B]/40 bg-[#B7A38B]/10">
                NEA Licensed Operator
              </span>
              <span className="px-2.5 py-1 rounded-full border border-[#B7A38B]/40 bg-[#B7A38B]/10">
                bizSAFE Level 3
              </span>
            </div>

            <div className="mt-5 flex items-center gap-3">
              {[
                {
                  l: "LinkedIn",
                  s: "in",
                  href: "https://www.linkedin.com/company/ophronsystems/posts/?feedView=all",
                },
                {
                  l: "Instagram",
                  s: "IG",
                  href: "https://www.instagram.com/ophronsystems/",
                },
              ].map((s) => (
                <a
                  key={s.l}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit OPHRON on ${s.l}`}
                  className="grid place-items-center h-10 w-10 rounded-full border border-white/20 bg-white/5 hover:bg-[#B7A38B] hover:text-[#032147] hover:border-[#B7A38B] transition-all text-[11px] font-montserrat font-bold hover:scale-110 active:scale-95 shadow-sm"
                >
                  {s.s}
                </a>
              ))}
            </div>
          </ScrollReveal>

          {/* Combined Navigation Links Section on Mobile/Tablet */}
          <div className="md:col-span-2 lg:col-span-5 grid grid-cols-2 gap-x-6 sm:gap-x-10 gap-y-6">
            {/* Column 2: Platform Links */}
            <ScrollReveal variant="up" delay={100} className="min-w-0">
              <div className="text-[10.5px] font-mono uppercase tracking-[0.22em] text-[#B7A38B] font-bold border-b border-white/10 pb-2 mb-3.5">
                Platform
              </div>
              <ul className="space-y-2.5 text-[13px] sm:text-[13.5px] font-inter opacity-90">
                <li>
                  <a
                    href="/about"
                    className="block break-words whitespace-normal leading-snug hover:text-[#B7A38B] transition-colors"
                  >
                    About OPHRON
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="block break-words whitespace-normal leading-snug hover:text-[#B7A38B] transition-colors"
                  >
                    OPHRON Services
                  </a>
                </li>
                <li>
                  <a
                    href="/#approach"
                    className="block break-words whitespace-normal leading-snug hover:text-[#B7A38B] transition-colors"
                  >
                    5 Pillars
                  </a>
                </li>
                <li>
                  <a
                    href="/gallery"
                    className="block break-words whitespace-normal leading-snug hover:text-[#B7A38B] transition-colors"
                  >
                    Client Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="/blog"
                    className="block break-words whitespace-normal leading-snug hover:text-[#B7A38B] transition-colors"
                  >
                    Insights & Articles
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="block break-words whitespace-normal leading-snug hover:text-[#B7A38B] transition-colors"
                  >
                    Contact Singapore
                  </a>
                </li>
              </ul>
            </ScrollReveal>

            {/* Column 3: Specialized Solutions */}
            <ScrollReveal variant="up" delay={150} className="min-w-0">
              <div className="text-[10.5px] font-mono uppercase tracking-[0.22em] text-[#B7A38B] font-bold border-b border-white/10 pb-2 mb-3.5">
                Specialized Solutions
              </div>
              <ul className="space-y-2 text-[12.5px] sm:text-[13px] font-inter opacity-90">
                <li>
                  <a
                    href="/services?service=disinfecting-services"
                    className="block break-words whitespace-normal leading-snug hover:text-[#B7A38B] transition-colors"
                  >
                    Disinfection & Decon
                  </a>
                </li>
                <li>
                  <a
                    href="/services?service=microfibre-concept"
                    className="block break-words whitespace-normal leading-snug hover:text-[#B7A38B] transition-colors"
                  >
                    Microfibre Concept
                  </a>
                </li>
                <li>
                  <a
                    href="/services?service=cleanroom-cleaning"
                    className="block break-words whitespace-normal leading-snug hover:text-[#B7A38B] transition-colors"
                  >
                    Cleanroom & Healthcare
                  </a>
                </li>
                <li>
                  <a
                    href="/services?service=carpet-cleaning"
                    className="block break-words whitespace-normal leading-snug hover:text-[#B7A38B] transition-colors"
                  >
                    Carpet & Upholstery
                  </a>
                </li>
                <li>
                  <a
                    href="/services?service=marble-polishing"
                    className="block break-words whitespace-normal leading-snug hover:text-[#B7A38B] transition-colors"
                  >
                    Marble Diamond Polish
                  </a>
                </li>
                <li>
                  <a
                    href="/services?service=facade-cleaning"
                    className="block break-words whitespace-normal leading-snug hover:text-[#B7A38B] transition-colors"
                  >
                    High-Rise Facade
                  </a>
                </li>
                <li>
                  <a
                    href="/services?service=dishwashing-services"
                    className="block break-words whitespace-normal leading-snug hover:text-[#B7A38B] transition-colors"
                  >
                    Dishwashing & Kitchen
                  </a>
                </li>
                <li>
                  <a
                    href="/services?service=events-venue-cleaning"
                    className="block break-words whitespace-normal leading-snug hover:text-[#B7A38B] transition-colors"
                  >
                    Events Venue Care
                  </a>
                </li>
              </ul>
            </ScrollReveal>
          </div>

          {/* Column 4: Hospitality Briefing Newsletter */}
          <ScrollReveal
            variant="right"
            delay={200}
            className="md:col-span-2 lg:col-span-3 w-full"
          >
            <div className="rounded-2xl border border-white/10 bg-[#0e0e12]/80 backdrop-blur-md p-5 sm:p-6 shadow-xl">
              <div className="text-[10.5px] font-mono uppercase tracking-[0.22em] text-[#B7A38B] font-bold">
                Hospitality Briefing
              </div>
              <p className="mt-2 text-[12.5px] leading-relaxed text-[#EDE5DA]/85 font-inter">
                Monthly Singapore SFA & NEA compliance guides for hospitality directors.
              </p>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-4 flex flex-col sm:flex-row items-stretch sm:items-center rounded-2xl sm:rounded-full border border-white/15 p-1.5 sm:p-1 bg-black/50 backdrop-blur-sm focus-within:border-[#B7A38B] transition-colors gap-2 sm:gap-0"
              >
                <input
                  type="email"
                  placeholder="gm@hotel.com.sg"
                  aria-label="Enter your business email for monthly hospitality briefing"
                  className="flex-1 min-w-0 bg-transparent px-3.5 py-2 text-[13px] text-white placeholder:text-white/40 focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-full bg-[#B7A38B] text-[#032147] px-4 py-2 sm:py-2 text-[11.5px] font-montserrat font-bold hover:bg-white transition-all hover:scale-105 active:scale-95 shrink-0 shadow-sm text-center"
                >
                  Subscribe
                </button>
              </form>
              <div className="mt-2.5 text-[9.5px] font-mono text-[#EDE5DA]/50 uppercase tracking-wider">
                Direct to inbox · Zero spam guarantee
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* Corporate Wordmark Banner (Consistent High-End Display across Mobile & Desktop) */}
        <div className="relative z-10 w-full mt-10 sm:mt-14 mb-6">
          <div className="relative overflow-hidden rounded-2xl border border-[#B7A38B]/20 bg-gradient-to-b from-[#032147]/90 via-[#021833]/95 to-[#011024] px-4 py-7 sm:py-12 md:py-14 text-center shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            {/* Subtle background ambient lighting */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(183,163,139,0.12)_0%,transparent_70%)] pointer-events-none" />
            
            <div
              className="text-[38px] sm:text-[64px] md:text-[84px] lg:text-[104px] font-display font-bold tracking-[0.16em] sm:tracking-[0.22em] text-[#EDE5DA]/85 uppercase leading-none select-none transition-all duration-500 hover:text-white hover:tracking-[0.25em]"
              style={{
                textShadow:
                  "0 2px 20px rgba(183,163,139,0.25), 0 0 40px rgba(3,33,71,0.8)",
              }}
            >
              OPHRON
            </div>
            <div className="text-[8.5px] sm:text-[10px] md:text-[11px] font-mono tracking-[0.22em] sm:tracking-[0.3em] uppercase text-[#B7A38B] mt-2 sm:mt-3 font-semibold">
              Operational Infrastructure Platform · Singapore & International
            </div>
          </div>
        </div>

        <ExpandRule className="border-white/10 my-6 sm:my-8" />

        {/* Office Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <ScrollReveal variant="up" delay={50}>
            <TiltCard
              maxTilt={5}
              className="rounded-2xl border border-white/[0.08] bg-[#0e0e12]/80 backdrop-blur-md p-5 sm:p-6 hover:border-[#B7A38B]/40 hover:bg-[#0e0e12]/95 transition-all duration-300 group/card relative overflow-hidden h-full"
            >
              <CornerBrackets color="#B7A38B" size={10} hoverSize={16} />
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#B7A38B]/50 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
              <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#B7A38B] flex items-center gap-1.5 font-bold">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#B7A38B] animate-pulse" />
                [ Singapore Operations ]
              </div>
              <p className="mt-3 text-[13.5px] leading-relaxed text-[#EDE5DA]/80 font-inter">
                26 Sin Ming Lane #05-124 Midview City
                <br />
                <span className="text-white font-medium">Singapore 573971</span>
              </p>
            </TiltCard>
          </ScrollReveal>

          <ScrollReveal variant="up" delay={150}>
            <TiltCard
              maxTilt={5}
              className="rounded-2xl border border-white/[0.08] bg-[#0e0e12]/80 backdrop-blur-md p-5 sm:p-6 hover:border-[#B7A38B]/40 hover:bg-[#0e0e12]/95 transition-all duration-300 group/card relative overflow-hidden h-full"
            >
              <CornerBrackets color="#B7A38B" size={10} hoverSize={16} />
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#B7A38B]/50 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
              <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#B7A38B] flex items-center gap-1.5 font-bold">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#B7A38B] animate-pulse" />
                [ Operations & Support ]
              </div>
              <p className="mt-3 text-[13.5px] leading-relaxed text-[#EDE5DA]/80 font-inter">
                24/7 Rapid Incident Support
                <br />
                <a
                  href="mailto:admin@ophronsystems.com"
                  className="text-white hover:text-[#B7A38B] font-medium transition-colors underline-offset-4 hover:underline"
                >
                  admin@ophronsystems.com
                </a>
              </p>
            </TiltCard>
          </ScrollReveal>

          <ScrollReveal variant="up" delay={250} className="sm:col-span-2 lg:col-span-1">
            <TiltCard
              maxTilt={5}
              className="rounded-2xl border border-white/[0.08] bg-[#0e0e12]/80 backdrop-blur-md p-5 sm:p-6 hover:border-[#B7A38B]/40 hover:bg-[#0e0e12]/95 transition-all duration-300 group/card relative overflow-hidden h-full"
            >
              <CornerBrackets color="#B7A38B" size={10} hoverSize={16} />
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#B7A38B]/50 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
              <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#B7A38B] flex items-center gap-1.5 font-bold">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#B7A38B] animate-pulse" />
                [ Singapore Hotline ]
              </div>
              <div className="mt-3">
                <a
                  href="tel:+6592951155"
                  className="text-xl font-montserrat font-bold text-white hover:text-[#B7A38B] transition-colors duration-300 block tracking-tight"
                >
                  +65 9295 1155
                </a>
                <div className="mt-1 text-[11px] text-white/50 font-mono">
                  +65 9646 6300 (Secondary Hotline)
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>
        </div>

        {/* Bottom Legal, Copyright & Safe-area clearance */}
        <div className="mt-10 sm:mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-mono uppercase tracking-[0.16em] sm:tracking-[0.18em] text-[#EDE5DA]/70 md:pr-24 lg:pr-28">
          <div className="text-center md:text-left">
            © {new Date().getFullYear()} OPHRON Systems · All rights reserved
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-5 gap-y-2.5">
            <a
              href="/contact"
              className="hover:text-[#B7A38B] transition-colors py-1"
            >
              Privacy Policy
            </a>
            <a
              href="/why"
              className="hover:text-[#B7A38B] transition-colors py-1"
            >
              NEA Credentials
            </a>
            <a
              href="/why"
              className="hover:text-[#B7A38B] transition-colors py-1"
            >
              bizSAFE Level 3
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="hover:text-white text-[#B7A38B] font-bold transition-colors cursor-pointer py-1"
            >
              Back to top ↑
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
