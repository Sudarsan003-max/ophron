import { pexels } from "../data/gallery";
import { Icon, MaskText, Reveal, SectionHead, SectionFade } from "../components/ui";
import { FooterServiceIndex, HotlineBand, PageHero } from "../components/shared";

/* [Section 2] Key Strengths: Our Strength & Competitive Edge */
const STRENGTHS = [
  {
    title: "Two decades, one standard",
    text: "Our specialists bring 20+ years of hands-on experience cleaning Singapore's kitchens, wards, suites and floors through every regulation change, manpower cycle and public health scare — expertise built into GKT International Pte. Ltd. since our incorporation in 2012. Experience here is not a slogan — it is the reason our SOPs survive contact with reality.",
    stat: "20+ yrs",
    statLabel: "of industry expertise",
  },
  {
    title: "Documented, not promised",
    text: "Every shift closes with a supervisor-signed checklist; every deep clean with photographs; every disinfection cycle with compound batch records. When your auditor asks, the evidence already exists.",
    stat: "100%",
    statLabel: "of shifts logged & signed",
  },
  {
    title: "Fixed teams who know your building",
    text: "We staff your site with the same screened, WSQ-trained crew week after week. They learn your access quirks, your sensitive areas and your definition of done — which is why our renewals read like a client list.",
    stat: "85",
    statLabel: "certified specialists",
  },
  {
    title: "Chemistry you can audit",
    text: "Only NEA-approved compounds, dosed by calibrated systems, with safety data sheets on file for your inspection. Food-safe where food is prepared, low-VOC where people work.",
    stat: "NEA",
    statLabel: "approved compounds only",
  },
  {
    title: "A hotline that actually answers",
    text: "One number reaches a site supervisor, not a queue. Outbreak disinfection deploys within hours; urgent deep cleans are scheduled the same day. 24/7 means 24/7.",
    stat: "24/7",
    statLabel: "supervisor response",
  },
];

function Strengths() {
  return (
    <SectionFade className="bg-paper py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          index="01"
          eyebrow="Key Strengths"
          lines={[
            "Our strength &",
            <span key="a">competitive <em className="font-light">edge.</em></span>,
          ]}
          lead="Five commitments, each with a number behind it. This is the difference between hiring cleaners and engaging a cleaning partner."
          className="mb-8 sm:mb-14"
        />
        <div className="border-t border-ink/15">
          {STRENGTHS.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <div className="ledger-row group grid gap-4 sm:gap-5 border-b border-ink/15 px-2 py-6 sm:py-9 lg:grid-cols-[3.2rem_1fr_13rem] lg:items-center">
                <span className="font-mono text-xs tracking-[0.25em] text-brass">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-medium tracking-tight text-pine-950 transition-colors duration-300 group-hover:text-brass sm:text-3xl">
                    {s.title}
                  </h3>
                  <p className="mt-2 sm:mt-3 max-w-2xl text-xs sm:text-base leading-relaxed text-pine-700/85">{s.text}</p>
                </div>
                <div className="border-l-2 border-brass/50 pl-4 py-1 lg:text-right lg:border-l-0 lg:border-r-2 lg:pr-5 lg:pl-0 hover-lift">
                  <p className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-pine-950">{s.stat}</p>
                  <p className="mt-0.5 sm:mt-1 font-mono text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.22em] text-moss uppercase">{s.statLabel}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* client word */}
      <div className="mx-auto max-w-7xl px-5 pt-14 sm:pt-24 sm:px-8">
        <Reveal>
          <figure className="relative border border-brass/40 bg-pine-950 px-5 py-8 sm:px-12 sm:py-14 text-center">
            <span className="absolute -top-3 sm:-top-4 left-6 sm:left-8 bg-pine-950 px-2.5 sm:px-3 font-mono text-[9px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.3em] text-brass-300 uppercase">
              A client, in their words
            </span>
            <blockquote>
              <MaskText
                className="mx-auto max-w-4xl font-display text-xl sm:text-3xl md:text-4xl leading-snug font-medium tracking-tight text-paper"
                lines={[
                  "\u201CWe stopped managing cleaners and started",
                  <span key="q">
                    renewing a <em className="font-light text-brass-300">standard.</em> That changed everything.\u201D
                  </span>,
                ]}
              />
            </blockquote>
            <figcaption className="mt-5 sm:mt-7 flex items-center justify-center gap-2.5 sm:gap-3 font-mono text-[10px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.28em] text-sage uppercase">
              <Icon.Diamond className="h-1.5 w-1.5 text-brass-300 shrink-0" />
              <span>Facilities Director — Orchard Road hospitality group</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </SectionFade>
  );
}

export default function WhyUs() {
  return (
    <>
      {/* [Section 1] Hero Header */}
      <PageHero
        crumb="Why Choose Us"
        titleLines={[
          "Why Choose GKT for",
          <span key="a">
            Your <em className="font-light text-brass-300">Cleaning</em> Needs.
          </span>,
        ]}
        lead="Anyone can clean once. The discipline is in the two-hundredth visit — same crew, same checklist, same signed standard. That is what you are choosing."
        image={pexels(4481329, 1000, 900)}
        imageAlt="GKT industrial team at work in a facility"
        meta={["NEA Licensed", "bizSAFE Level 3", "Est. 2012"]}
      />
      <Strengths />
      <HotlineBand title="Put the standard to the test." />
      {/* [Section 3] Footer Service Index */}
      <FooterServiceIndex />
    </>
  );
}
