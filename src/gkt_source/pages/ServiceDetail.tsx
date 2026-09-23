import { Navigate, useParams } from "react-router-dom";
import { SERVICE_PAGES, type SectionBlock } from "../data/servicePages";
import { Icon, Reveal, SectionHead, useCardTilt, SectionFade } from "../components/ui";
import { cn } from "../utils/cn";
import { FAQAccordion, FooterServiceIndex, HotlineBand, PageHero } from "../components/shared";

/* ------------------------------------------------------------------ */
/*  Section renderers                                                  */
/* ------------------------------------------------------------------ */

function Overview({ s, n }: { s: Extract<SectionBlock, { kind: "overview" }>; n: number }) {
  return (
    <section className="bg-paper py-14 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 sm:gap-14 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-36">
            <Reveal>
              <div className="frame-corners relative overflow-hidden">
                <img src={s.image} alt={s.imageAlt} className="kenburns h-[280px] sm:h-[380px] lg:h-[520px] w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-pine-950/45 via-transparent to-transparent" />
                <p className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 font-mono text-[9px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.28em] text-champagne uppercase">
                  GKT Protocol {String(n).padStart(2, "0")}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="lg:col-span-7">
          <SectionHead
            index={String(n).padStart(2, "0")}
            eyebrow="Overview"
            lines={splitLines(s.title)}
            className="mb-6 sm:mb-8"
          />
          {s.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 100}>
              <p className={i === 0 ? "text-base sm:text-lg leading-relaxed text-pine-800" : "mt-4 sm:mt-5 text-sm sm:text-base leading-relaxed text-pine-700/85"}>
                {p}
              </p>
            </Reveal>
          ))}
          <Reveal delay={220}>
            <ul className="tick-list mt-6 sm:mt-9 grid gap-2.5 sm:gap-3.5 text-xs sm:text-sm text-pine-800 sm:grid-cols-2">
              {s.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Value({ s, n }: { s: Extract<SectionBlock, { kind: "value" }>; n: number }) {
  return (
    <section className="border-y border-brass/20 bg-pine-950 py-14 sm:py-20 lg:py-24 text-paper">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          index={String(n).padStart(2, "0")}
          eyebrow="Why it matters"
          light
          lines={splitLines(s.title)}
          lead={s.lead}
          className="mb-8 sm:mb-14"
        />
        <div className="grid gap-px border border-paper/12 bg-paper/12 sm:grid-cols-2">
          {s.items.map((it, i) => {
            const ItemIcon = it.icon ? Icon[it.icon] : null;
            const isDangling = s.items.length % 2 === 1 && i === s.items.length - 1;
            return (
              <Reveal key={it.title} delay={(i % 2) * 90} className={cn("bg-pine-950", isDangling && "sm:col-span-2")}>
                <div className="group h-full p-6 sm:p-10 transition-colors duration-500 hover:bg-pine-900 hover-shine">
                  <div className="flex items-center gap-3 sm:gap-4">
                    {ItemIcon && (
                      <span className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full border border-brass-300/40 transition-colors duration-500 group-hover:border-brass-300">
                        <ItemIcon className="h-4 w-4 sm:h-5 sm:w-5 text-brass-300" />
                      </span>
                    )}
                    <span className="font-mono text-xs tracking-[0.25em] text-brass-300">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="mt-3.5 sm:mt-4 font-display text-xl sm:text-2xl font-medium tracking-tight text-champagne transition-colors group-hover:text-brass-300">
                    {it.title}
                  </h3>
                  <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm leading-relaxed text-sage">{it.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Guide({ s, n }: { s: Extract<SectionBlock, { kind: "guide" }>; n: number }) {
  return (
    <section className="bg-paper py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          index={String(n).padStart(2, "0")}
          eyebrow="The Method"
          lines={splitLines(s.title)}
          lead={s.intro}
          className="mb-8 sm:mb-12"
        />
        <div className="border-t border-ink/15">
          {s.blocks.map((b, i) => (
            <Reveal key={b.heading} delay={i * 60}>
              <div className="ledger-row grid gap-3 sm:gap-4 border-b border-ink/15 px-2 py-6 sm:py-8 lg:grid-cols-[240px_1fr] lg:gap-10">
                <div className="flex items-center gap-3 sm:gap-4 lg:block">
                  <span className="font-display text-2xl sm:text-3xl font-light text-brass italic">{String(i + 1).padStart(2, "0")}</span>
                  <span className="mt-0 hidden h-px w-12 bg-brass lg:mt-4 lg:block" />
                </div>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-medium tracking-tight text-pine-950">{b.heading}</h3>
                  <p className="mt-2 sm:mt-3 max-w-3xl text-xs sm:text-base leading-relaxed text-pine-700/85">{b.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features({ s, n }: { s: Extract<SectionBlock, { kind: "features" }>; n: number }) {
  return (
    <section className="bg-paper py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          index={String(n).padStart(2, "0")}
          eyebrow="Service Detail"
          lines={splitLines(s.title)}
          lead={s.intro}
          className="mb-8 sm:mb-12"
        />
        <div className="border-t border-ink/15">
          {s.items.map((it, i) => {
            const ItemIcon = it.icon ? Icon[it.icon] : null;
            return (
              <Reveal key={it.title} delay={i * 60}>
                <div
                  className={cn(
                    "ledger-row grid gap-4 sm:gap-6 border-b border-ink/15 px-2 py-6 sm:py-10 lg:grid-cols-[240px_1fr] lg:gap-10",
                    i % 2 === 1 && "bg-parchment/50",
                  )}
                >
                  <div className="flex items-center gap-4 sm:gap-5 lg:flex-col lg:items-start lg:gap-5">
                    {ItemIcon && (
                      <span className="flex h-11 w-11 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full border border-brass/40 bg-paper">
                        <ItemIcon className="h-5 w-5 sm:h-6 sm:w-6 text-brass" />
                      </span>
                    )}
                    <div className="flex items-center gap-3 sm:gap-4 lg:block">
                      <span className="font-display text-2xl sm:text-3xl font-light text-brass italic">{String(i + 1).padStart(2, "0")}</span>
                      <span className="mt-0 hidden h-px w-12 bg-brass lg:mt-4 lg:block" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-medium tracking-tight text-pine-950">{it.title}</h3>
                    <p className="mt-2 sm:mt-3 max-w-3xl text-xs sm:text-base leading-relaxed text-pine-700/85">{it.text}</p>
                    <ul className="tick-list mt-4 sm:mt-6 grid gap-2.5 sm:gap-3 text-xs sm:text-sm text-pine-800 sm:grid-cols-2">
                      {it.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                    {it.badges && it.badges.length > 0 && (
                      <div className="mt-4 sm:mt-6 flex flex-wrap gap-2 sm:gap-3">
                        {it.badges.map((b) => (
                          <span
                            key={b}
                            className="inline-flex items-center gap-1.5 sm:gap-2 border border-brass/30 bg-paper px-2.5 sm:px-3 py-1 sm:py-1.5 font-mono text-[10px] sm:text-[11px] tracking-[0.06em] text-pine-800"
                          >
                            <Icon.Check className="h-3 w-3 text-brass" />
                            {b}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function GridSection({ s, n }: { s: Extract<SectionBlock, { kind: "grid" }>; n: number }) {
  return (
    <section className="bg-parchment py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          index={String(n).padStart(2, "0")}
          eyebrow="Service Scope"
          lines={splitLines(s.title)}
          lead={s.intro}
          className="mb-8 sm:mb-12"
        />
        {s.quote && (
          <Reveal className="mb-8 sm:mb-12">
            <blockquote className="border-l-2 border-brass pl-5 sm:pl-7">
              <p className="font-display text-xl sm:text-2xl lg:text-3xl leading-snug font-light text-pine-950 italic">
                {"“"}
                {s.quote}
                {"”"}
              </p>
            </blockquote>
          </Reveal>
        )}
        <div className={cn("grid gap-px border border-ink/15 bg-ink/15 sm:grid-cols-2", s.cols === 2 ? "" : "lg:grid-cols-3")}>
          {s.items.map((it, i) => {
            const ItemIcon = it.icon ? Icon[it.icon] : null;
            return (
              <Reveal key={it.title} delay={(i % 3) * 80} className="bg-paper">
                <div className="group h-full p-5 sm:p-7 md:p-8 transition-colors duration-500 hover:bg-pine-950 hover-shine">
                  <div className="flex items-center justify-between">
                    {ItemIcon ? (
                      <span className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-brass/40 transition-colors duration-500 group-hover:border-brass-300/60">
                        <ItemIcon className="h-4 w-4 sm:h-5 sm:w-5 text-brass transition-colors duration-500 group-hover:text-brass-300" />
                      </span>
                    ) : (
                      <Icon.Diamond className="h-2.5 w-2.5 text-brass" />
                    )}
                    <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.25em] text-moss transition-colors group-hover:text-brass-300">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-4 sm:mt-6 font-display text-lg sm:text-xl font-medium tracking-tight text-pine-950 transition-colors duration-500 group-hover:text-champagne">
                    {it.title}
                  </h3>
                  <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-pine-700/80 transition-colors duration-500 group-hover:text-sage">
                    {it.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Faq({ s, n }: { s: Extract<SectionBlock, { kind: "faq" }>; n: number }) {
  return (
    <section className="bg-paper py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHead index={String(n).padStart(2, "0")} eyebrow="Answers" lines={splitLines(s.title)} className="mb-8 sm:mb-12" />
        <FAQAccordion items={s.items} />
      </div>
    </section>
  );
}

function Gallery({ s, n }: { s: Extract<SectionBlock, { kind: "gallery" }>; n: number }) {
  return (
    <section className="border-y border-brass/20 bg-pine-900 py-14 sm:py-20 lg:py-24 text-paper">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead index={String(n).padStart(2, "0")} eyebrow="Visual Record" light lines={splitLines(s.title)} lead={s.intro} className="mb-8 sm:mb-12" />
        <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {s.images.map((img, i) => (
            <Reveal key={img.src} delay={i * 80}>
              <figure className="group">
                <div className="overflow-hidden border border-champagne/20">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="h-44 sm:h-52 w-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                </div>
                <figcaption className="mt-2.5 sm:mt-3 font-mono text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.22em] text-sage uppercase">
                  {String(i + 1).padStart(2, "0")} — {img.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Split a long title into two balanced display lines */
function splitLines(title: string): React.ReactNode[] {
  const words = title.split(" ");
  if (words.length <= 3) return [title];
  const total = title.length;
  let best = 1;
  let bestDiff = Infinity;
  for (let i = 1; i < words.length; i++) {
    const left = words.slice(0, i).join(" ").length;
    const diff = Math.abs(left - (total - left));
    if (diff < bestDiff) {
      bestDiff = diff;
      best = i;
    }
  }
  return [
    words.slice(0, best).join(" "),
    <span key="l2">
      <em className="font-light">{words.slice(best).join(" ")}</em>
    </span>,
  ];
}

/* ------------------------------------------------------------------ */

export default function ServiceDetail() {
  const { slug } = useParams();
  const data = slug ? SERVICE_PAGES[slug] : undefined;
  if (!data) return <Navigate to="/services" replace />;

  return (
    <>
      <PageHero
        crumb={data.crumb}
        parent={{ label: "Services", to: "/services" }}
        titleLines={splitLines(data.heroTitle)}
        lead={data.heroLead}
        image={data.heroImage}
        imageAlt={data.crumb}
        meta={["NEA Licensed", "bizSAFE Level 3", "Supervisor-Led"]}
      />
      {data.sections.map((section, i) => {
        const n = i + 1;
        switch (section.kind) {
          case "overview":
            return <Overview key={n} s={section} n={n} />;
          case "value":
            return <Value key={n} s={section} n={n} />;
          case "guide":
            return <Guide key={n} s={section} n={n} />;
          case "grid":
            return <GridSection key={n} s={section} n={n} />;
          case "features":
            return <Features key={n} s={section} n={n} />;
          case "faq":
            return <Faq key={n} s={section} n={n} />;
          case "gallery":
            return <Gallery key={n} s={section} n={n} />;
        }
      })}
      <HotlineBand
        title="Discuss this service for your site."
        note="Free site assessment within 48 hours, a written scope the same week, and a supervisor on your line from day one."
      />
      <FooterServiceIndex />
    </>
  );
}
