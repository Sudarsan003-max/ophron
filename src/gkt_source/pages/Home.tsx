import { Link } from "react-router-dom";
import {
  CONTACT,
  PILLARS,
  OPERATIONS_POINTS,
  SERVICES,
  STATS,
  COMPANY_LINKS,
} from "../data/site";
import { FEATURED_WORKS, pexels } from "../data/gallery";
import { BrassLink, CountUp, Eyebrow, GhostLink, Icon, MaskText, Reveal, SectionHead, useParallax, SectionFade } from "../components/ui";
import { GalleryCarousel, HotlineBand, ServiceLedger } from "../components/shared";
import { OurValuableClientsSection } from "../components/ClientLogos";
import { VacuumAnimation } from "../components/VacuumAnimation";
import { AppleWorkforceTab } from "../components/AppleWorkforceTab";

/* ---------------------------------------------------------------- */
/*  [Section 1] Hero Banner                                          */
/* ---------------------------------------------------------------- */

function HeroBanner() {
  const parallaxRef1 = useParallax(0.05);
  const parallaxRef2 = useParallax(0.03);
  return (
    <section className="relative overflow-hidden bg-pine-950 text-paper">
      {/* vacuum cleaner scroll sweep animation */}
      <VacuumAnimation />

      {/* ambient grid + vignette */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.13]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(211,176,102,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(211,176,102,0.16) 1px, transparent 1px)",
          backgroundSize: "76px 76px",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(120% 90% at 75% 10%, transparent 40%, rgba(6,12,9,0.75) 100%)" }}
        aria-hidden="true"
      />
      <p
        className="text-outline pointer-events-none absolute top-1/2 -right-6 hidden -translate-y-1/2 font-display text-[15rem] leading-none font-semibold tracking-tight select-none xl:block"
        aria-hidden="true"
      >
        03
      </p>

      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 pt-12 pb-10 sm:gap-14 sm:px-8 sm:pt-16 sm:pb-12 lg:grid-cols-12 lg:gap-8 lg:pt-24 lg:pb-16">
        <div className="lg:col-span-7">
          <Reveal>
            <Eyebrow light>Singapore — Est. 2012</Eyebrow>
          </Reveal>
          <MaskText
            className="mt-6 sm:mt-7 font-display text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] xl:text-[4.6rem] leading-[1.04] sm:leading-[1.02] font-medium tracking-tight"
            lines={[
              "Spotless & Safe",
              "Cleaning for",
              "Kitchens, Healthcare",
              <span key="i2">
                <span className="font-light italic text-brass-300">&</span> Hospitality.
              </span>,
            ]}
          />
          <Reveal delay={500}>
            <p className="mt-5 sm:mt-7 max-w-xl text-sm sm:text-base leading-relaxed text-sage sm:text-lg">
              GKT International is the cleaning and maintenance partner behind some of Singapore's most
              scrutinised spaces — restaurant kitchens, clinics, hotels and corporate floors. NEA licensed,
              bizSAFE Level 3 certified, and accountable to a written standard on every shift.
            </p>
          </Reveal>
          <Reveal delay={640} className="mt-7 sm:mt-9 flex flex-wrap items-center gap-3.5 sm:gap-5">
            <BrassLink to="/contact">Request a Quote</BrassLink>
            <GhostLink to="/services">Explore Services</GhostLink>
          </Reveal>
          <Reveal delay={760} className="mt-9 sm:mt-12 flex flex-wrap gap-x-6 sm:gap-x-9 gap-y-2.5 sm:gap-y-3 border-t border-paper/10 pt-5 sm:pt-6">
            {["NEA Licensed Operator", "bizSAFE Level 3", "24/7 Hotline Response"].map((m) => (
              <span key={m} className="flex items-center gap-2 sm:gap-2.5 font-mono text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.24em] text-champagne/85 uppercase">
                <Icon.Shield className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-brass-300" />
                {m}
              </span>
            ))}
          </Reveal>
        </div>

        {/* stacked imagery with rotating seal */}
        <div className="relative lg:col-span-5 pt-4 sm:pt-0">
          <Reveal delay={250} className="relative ml-auto w-[88%] sm:w-[82%]">
            <div ref={parallaxRef1} className="parallax-img frame-corners relative overflow-hidden">
              <img
                src={pexels(34416078, 900, 1080)}
                alt="Stainless steel kitchen surfaces restored to a mirror finish"
                className="kenburns h-[240px] sm:h-[320px] md:h-[380px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pine-950/60 via-transparent to-transparent" />
            </div>
          </Reveal>
          <Reveal delay={430} className="relative -mt-10 sm:-mt-16 w-[68%] sm:w-[62%]">
            <div ref={parallaxRef2} className="parallax-img overflow-hidden border-2 sm:border-4 border-pine-950 shadow-[0_30px_60px_rgba(0,0,0,0.45)]">
              <img
                src={pexels(6466496, 900, 720)}
                alt="Hotel suite dressed to five-star standard"
                className="kenburns h-32 sm:h-44 md:h-52 w-full object-cover"
              />
            </div>
          </Reveal>
          <div className="absolute top-[42%] right-[2%] sm:right-[8%] block" aria-hidden="true">
            <div className="relative flex h-24 w-24 sm:h-32 sm:w-32 items-center justify-center">
              <svg viewBox="0 0 120 120" className="spin-slow absolute inset-0 h-full w-full">
                <defs>
                  <path id="seal-circle" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
                </defs>
                <text className="fill-champagne font-mono text-[8.6px] tracking-[2.6px] uppercase">
                  <textPath href="#seal-circle">Est. 2012 · NEA Licensed · bizSAFE 3 · Singapore ·</textPath>
                </text>
              </svg>
              <Icon.Diamond className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-brass-300" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-paper/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 sm:gap-6 overflow-x-auto no-scrollbar px-5 py-3.5 sm:px-8 sm:py-4">
          {["Kitchens", "Healthcare", "Hospitality", "Corporate", "Industrial"].map((s) => (
            <span key={s} className="flex shrink-0 items-center gap-4 sm:gap-6 font-mono text-[9px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.34em] text-sage uppercase">
              {s}
              <Icon.Diamond className="h-1.5 w-1.5 text-brass" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/*  [Section 2] Visual Work & Gallery Showcase                       */
/* ---------------------------------------------------------------- */

function GalleryShowcase() {
  return (
    <SectionFade className="bg-paper py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            index="02"
            eyebrow="The Work — Gallery"
            lines={["Recent projects,", <span key="a">judged in <em className="font-light">daylight.</em></span>]}
          />
          <Reveal delay={200}>
            <GhostLink to="/gallery" light={false}>
              Full Gallery
            </GhostLink>
          </Reveal>
        </div>
        <GalleryCarousel photos={FEATURED_WORKS} />
      </div>
    </SectionFade>
  );
}

/* ---------------------------------------------------------------- */
/*  [Section 3] Core Services Showcase                               */
/* ---------------------------------------------------------------- */

function CoreServices() {
  return (
    <section className="bg-paper pb-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          index="03"
          eyebrow="Our Services"
          lines={["Six disciplines,", <span key="a">one accountable <em className="font-light">standard.</em></span>]}
          lead="Each service runs to its own written protocol — and every protocol closes with a log your team can audit."
          className="mb-12"
        />
        <ServiceLedger />
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/*  [Section 4] Recognized Clients & Partner Logos                   */
/* ---------------------------------------------------------------- */

function Clients() {
  return <OurValuableClientsSection />;
}

/* ---------------------------------------------------------------- */
/*  [Section 5] Operations & Trust Overview                          */
/* ---------------------------------------------------------------- */

function Operations() {
  return (
    <section className="bg-paper py-14 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 sm:gap-14 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-36">
            <SectionHead
              index="05"
              eyebrow="Operations & Trust"
              lines={[
                "Your trusted cleaning",
                "and maintenance",
                <span key="a">
                  <em className="font-light">partner.</em>
                </span>,
              ]}
              lead="Trust is not claimed, it is operated. These are the mechanics behind ours — the same on a Tuesday night deep clean as on an outbreak call-out."
            />
            <Reveal delay={250} className="mt-8 sm:mt-10 grid grid-cols-2 gap-px border border-ink/15 bg-ink/15">
              {STATS.map((s) => (
                <div key={s.label} className="bg-paper p-4 sm:p-6 hover-lift">
                  <CountUp
                    to={s.value}
                    suffix={s.suffix}
                    className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-pine-950"
                  />
                  <p className="mt-1 sm:mt-2 font-mono text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.22em] text-moss uppercase">{s.label}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
        <div className="lg:col-span-7">
          {OPERATIONS_POINTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 70}>
              <div className="ledger-row group flex gap-4 sm:gap-8 lg:gap-10 border-t border-ink/15 px-2 py-6 sm:py-8">
                <span className="font-display text-xl sm:text-2xl font-light text-brass italic shrink-0">
                  {["i", "ii", "iii", "iv"][i]}
                </span>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-medium tracking-tight text-pine-950 transition-colors group-hover:text-brass">
                    {p.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-xs sm:text-sm leading-relaxed text-pine-700/80">{p.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
          <Reveal delay={300}>
            <div className="mt-2 border-t border-ink/15 pt-6 sm:pt-8">
              <BrassLink to="/why-us">Why teams choose GKT</BrassLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/*  [Section 6] Corporate Workforce Standard                         */
/* ---------------------------------------------------------------- */

function Workforce() {
  return (
    <section className="relative overflow-hidden bg-pine-900 py-14 sm:py-20 lg:py-24 text-paper">
      <p
        className="text-outline pointer-events-none absolute -bottom-10 left-0 hidden sm:block font-display text-[11rem] leading-none font-semibold select-none opacity-40"
        aria-hidden="true"
      >
        GKT
      </p>
      
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-10 sm:mb-14 text-center max-w-3xl mx-auto">
          <SectionHead
            index="06"
            eyebrow="About GKT International"
            light
            center
            lines={["The corporate", "workforce", <span key="a"><em className="font-light text-brass-300">standard.</em></span>]}
            lead="Incorporated in 2012 and built on 20+ years of hands-on industry expertise, GKT International has grown into one of Singapore's most trusted specialist cleaning firms by treating cleaning as a profession — trained, certified, supervised and measured."
          />
        </div>

        <Reveal delay={150}>
          <AppleWorkforceTab />
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/*  [Section 7] 4 Pillars of Excellence & Certifications             */
/* ---------------------------------------------------------------- */

function Pillars() {
  return (
    <section className="bg-paper py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          index="07"
          eyebrow="Pillars of Excellence"
          lines={["Built on four", <span key="a">unshakeable <em className="font-light">pillars.</em></span>]}
          className="mb-8 sm:mb-12"
        />
        <div className="grid gap-px border border-ink/15 bg-ink/15 sm:grid-cols-2">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 100} className="bg-paper">
              <div
                className="group h-full p-6 transition-colors duration-500 hover:bg-pine-950 sm:p-10 hover-shine">
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-4xl sm:text-5xl font-light text-brass italic transition-colors group-hover:text-brass-300">
                    {p.index}
                  </span>
                  <Icon.Diamond className="h-2 w-2 text-brass opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                <h3 className="mt-4 sm:mt-6 font-display text-xl sm:text-2xl font-medium tracking-tight text-pine-950 transition-colors duration-500 group-hover:text-paper">
                  {p.title}
                </h3>
                <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm leading-relaxed text-pine-700/80 transition-colors duration-500 group-hover:text-sage">
                  {p.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200} className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap gap-3 sm:gap-4">
          {[
            { label: "NEA Licensed", icon: <Icon.Shield className="h-4 w-4 sm:h-5 sm:w-5" /> },
            { label: "bizSAFE Level 3", icon: <Icon.Check className="h-4 w-4 sm:h-5 sm:w-5" /> },
            { label: "WSQ Certified Teams", icon: <Icon.Spray className="h-4 w-4 sm:h-5 sm:w-5" /> },
            { label: "20+ Years of Expertise", icon: <Icon.Clock className="h-4 w-4 sm:h-5 sm:w-5" /> },
          ].map((c) => (
            <div
              key={c.label}
              className="frame-corners hover-lift flex items-center gap-3 border border-brass/40 px-4 py-3 sm:px-6 sm:py-4 font-mono text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] sm:tracking-[0.22em] text-pine-900 uppercase"
            >
              <span className="text-brass shrink-0">{c.icon}</span>
              <span>{c.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/*  [Section 8] Service Navigation Catalog & Footer Hotline          */
/* ---------------------------------------------------------------- */

function Catalog() {
  return (
    <section className="border-t border-ink/10 bg-parchment py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          index="08"
          eyebrow="Service Navigation Catalog"
          lines={["Navigate the", <span key="a">full <em className="font-light">catalogue.</em></span>]}
          className="mb-8 sm:mb-12"
        />
        <div className="grid gap-10 sm:gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={i * 40}>
                <Link
                  to={s.route}
                  className="group flex items-center gap-4 sm:gap-6 border-t border-ink/15 py-4 sm:py-6 transition-colors hover:border-brass"
                >
                  <span className="font-mono text-xs tracking-[0.2em] text-brass">{s.index}</span>
                  <span className="font-display text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight text-pine-950 transition-colors group-hover:text-brass">
                    {s.name}
                  </span>
                  <span className="ml-auto hidden font-mono text-[10px] tracking-[0.22em] text-moss uppercase md:block">
                    {s.short}
                  </span>
                  <Icon.ArrowNE className="h-4 w-4 sm:h-5 sm:w-5 text-brass transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0" />
                </Link>
              </Reveal>
            ))}
            <div className="border-t border-ink/15" />
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal delay={200}>
              <p className="font-mono text-[10.5px] sm:text-[11px] tracking-[0.3em] text-brass uppercase">The Company</p>
              <ul className="mt-4 sm:mt-5 space-y-2.5 sm:space-y-3">
                {COMPANY_LINKS.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="u-sweep font-display text-lg sm:text-xl font-medium text-pine-950 hover:text-brass">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-8 sm:mt-10 border border-brass/40 p-5 sm:p-7">
                <p className="font-mono text-[9px] sm:text-[10px] tracking-[0.3em] text-moss uppercase">Prefer to talk?</p>
                <a href={CONTACT.telHref} className="u-sweep mt-2 sm:mt-3 block font-display text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-pine-950 hover:text-brass break-words">
                  {CONTACT.hotlineDisplay}
                </a>
                <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-pine-700/75 leading-relaxed">
                  24/7 for emergencies · Quotes returned within one business day.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
      <div className="mt-14 sm:mt-24">
        <HotlineBand />
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */

export default function Home() {
  return (
    <>
      <HeroBanner />
      <GalleryShowcase />
      <CoreServices />
      <Clients />
      <Operations />
      <Workforce />
      <Pillars />
      <Catalog />
    </>
  );
}
