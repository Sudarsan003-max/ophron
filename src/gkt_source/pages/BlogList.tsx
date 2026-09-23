import { Link } from "react-router-dom";
import { BLOG_POSTS } from "../data/blog";
import { pexels } from "../data/gallery";
import { Eyebrow, GhostLink, Icon, MaskText, Reveal, ImageReveal, SectionFade } from "../components/ui";
import { FooterServiceIndex, PageHero } from "../components/shared";

export default function BlogList() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <>
      <PageHero
        crumb="Journal"
        titleLines={[
          "Notes on the",
          <span key="a">
            discipline of <em className="font-light text-brass-300">clean.</em>
          </span>,
        ]}
        lead="Field notes from two decades of Singapore commercial cleaning — hygiene science, facilities strategy and the economics of a spotless premises."
        image={pexels(6197121, 1000, 900)}
        imageAlt="GKT team detailing glass and floors"
        meta={[`${BLOG_POSTS.length} Articles`, "Facilities Insight", "Updated Monthly"]}
      />

      {/* [Section 2] Featured article */}
      <section className="bg-paper py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Eyebrow>Featured — Article 01</Eyebrow>
          <div className="mt-6 sm:mt-8 grid items-center gap-8 sm:gap-12 lg:grid-cols-2">
            <Reveal>
              <Link to={`/blog/${featured.slug}`} className="group block">
                <ImageReveal>
                <div className="frame-corners relative overflow-hidden">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="kenburns h-56 sm:h-80 lg:h-[420px] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pine-950/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                </ImageReveal>
              </Link>
            </Reveal>
            <div>
              <Reveal delay={120} className="flex flex-wrap items-center gap-3 sm:gap-4 font-mono text-[9.5px] sm:text-[10px] tracking-[0.22em] sm:tracking-[0.25em] text-moss uppercase">
                <span className="border border-brass/50 px-2.5 sm:px-3 py-0.5 sm:py-1 text-brass">{featured.category}</span>
                <span>{featured.date}</span>
                <Icon.Diamond className="h-1.5 w-1.5 text-brass" />
                <span>{featured.readTime}</span>
              </Reveal>
              <Reveal delay={200}>
                <Link to={`/blog/${featured.slug}`} className="group mt-4 sm:mt-6 block">
                  <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl leading-tight font-medium tracking-tight text-pine-950 transition-colors group-hover:text-brass">
                    {featured.title}
                  </h2>
                </Link>
              </Reveal>
              <Reveal delay={280}>
                <p className="mt-4 sm:mt-6 text-sm sm:text-base leading-relaxed text-pine-700/85">{featured.excerpt}</p>
              </Reveal>
              <Reveal delay={360} className="mt-6 sm:mt-8">
                <GhostLink to={`/blog/${featured.slug}`} light={false}>
                  Read Article
                </GhostLink>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* [Sections 3–7] Article cards as an editorial index */}
      <SectionFade className="border-t border-ink/10 bg-parchment py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mb-6 sm:mb-10 flex items-center gap-3 sm:gap-4">
            <span className="h-px w-8 sm:w-10 bg-brass" />
            <p className="font-mono text-[10px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] text-moss uppercase">The rest of the journal</p>
          </Reveal>
          <div className="border-t border-ink/15">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={i * 60}>
                <Link
                  to={`/blog/${p.slug}`}
                  className="ledger-row group grid gap-3 sm:gap-5 border-b border-ink/15 px-2 py-5 sm:py-8 lg:grid-cols-[6rem_7rem_1fr_auto] lg:items-center lg:gap-8"
                >
                  <span className="font-mono text-xs tracking-[0.2em] text-brass">
                    Art. {String(i + 2).padStart(2, "0")}
                  </span>
                  <span className="hidden font-mono text-[10px] tracking-[0.18em] text-moss uppercase lg:block">
                    {p.date}
                  </span>
                  <div>
                    <span className="mb-1.5 sm:mb-2 inline-block border border-brass/40 px-2 sm:px-2.5 py-0.5 font-mono text-[8.5px] sm:text-[9px] tracking-[0.2em] text-brass uppercase">
                      {p.category}
                    </span>
                    <span className="block font-display text-xl sm:text-2xl lg:text-3xl leading-snug font-medium tracking-tight text-pine-950 transition-colors group-hover:text-brass">
                      {p.title}
                    </span>
                    <span className="mt-1.5 sm:mt-2 block max-w-2xl text-xs sm:text-sm leading-relaxed text-pine-700/75">{p.excerpt}</span>
                  </div>
                  <span className="flex items-center gap-3 sm:gap-5">
                    <span className="hidden font-mono text-[10px] tracking-[0.2em] text-moss uppercase md:block">{p.readTime}</span>
                    <Icon.ArrowNE className="h-5 w-5 sm:h-6 sm:w-6 text-brass transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200} className="mt-8 sm:mt-10">
            <MaskText
              className="max-w-2xl font-display text-2xl sm:text-3xl lg:text-4xl leading-snug font-medium tracking-tight text-pine-950"
              lines={[
                "Hygiene, treated as a",
                <span key="a"><em className="font-light">management discipline.</em></span>,
              ]}
            />
          </Reveal>
        </div>
      </SectionFade>

      {/* [Section 8] Footer Service Index */}
      <FooterServiceIndex />
    </>
  );
}
