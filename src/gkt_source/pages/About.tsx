import { STATS, WORKFORCE_STANDARDS } from "../data/site";
import { pexels } from "../data/gallery";
import { BrassLink, Icon, CountUp, Reveal, SectionHead, useCardTilt, SectionFade } from "../components/ui";
import { ClientMarquee, FooterServiceIndex, PageHero } from "../components/shared";
import { cn } from "../utils/cn";

/* [Section 2] Core Identity */
function CoreIdentity() {
  return (
    <section className="bg-paper py-14 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 sm:gap-14 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-36">
            <SectionHead
              index="01"
              eyebrow="Core Identity"
              lines={[
                "Your trusted cleaning",
                <span key="a">& maintenance <em className="font-light">partner.</em></span>,
              ]}
            />
            <Reveal delay={220} className="mt-8 sm:mt-10 grid grid-cols-2 gap-px border border-ink/15 bg-ink/15">
              {STATS.map((s) => (
                <div key={s.label} className="bg-paper p-4 sm:p-6 hover-lift">
                  <CountUp to={s.value} suffix={s.suffix} className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-pine-950" />
                  <p className="mt-1 sm:mt-2 font-mono text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.22em] text-moss uppercase">{s.label}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
        <div className="lg:col-span-7">
          <Reveal>
            <p className="font-display text-xl sm:text-2xl lg:text-[1.7rem] leading-snug font-medium tracking-tight text-pine-950">
              GKT International was founded on a simple conviction: that cleanliness, done properly, is a
              profession — with training, standards, supervision and accountability like any other.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-5 sm:mt-7 text-sm sm:text-base leading-relaxed text-pine-700/85">
              Since incorporating in 2012, GKT International Pte. Ltd. has grown from a small kitchen-cleaning
              crew into a full-spectrum commercial cleaning and maintenance firm serving restaurants, hotels,
              clinics, offices and industrial facilities across Singapore — built on our team's 20+ years of
              hands-on industry expertise. The growth has never changed the operating principle: fixed teams,
              written protocols, supervisor sign-offs, and a hotline that answers at 3 a.m.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-4 sm:mt-5 text-sm sm:text-base leading-relaxed text-pine-700/85">
              We are licensed by the National Environment Agency, certified to bizSAFE Level 3 by the Workplace
              Safety & Health Council, and staffed by WSQ-trained specialists. But the credentials we value most
              are contractual: the clients who have renewed with us, site after site, for over a decade.
            </p>
          </Reveal>
          <Reveal delay={280}>
            <ul className="tick-list mt-6 sm:mt-9 grid gap-2.5 sm:gap-3.5 text-xs sm:text-sm text-pine-800 sm:grid-cols-2">
              {WORKFORCE_STANDARDS.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={360} className="mt-8 sm:mt-10">
            <BrassLink to="/why-us">Our competitive edge</BrassLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* [Section 3] Company Mission & Values */
const VALUES = [
  {
    title: "Precision",
    text: "Every protocol is written, every dilution measured, every shift logged. We do not clean approximately — we clean to a defined, auditable standard.",
  },
  {
    title: "Care",
    text: "For the surfaces we are trusted with, the people who work beside us, and the environments our chemistry enters. Care is the reason 'safe' sits beside 'spotless' in everything we do.",
  },
  {
    title: "Integrity",
    text: "If a scope is not needed, we say so. If a standard slips, we report it and re-clean it. A decade of renewals were built on that sentence.",
  },
  {
    title: "Continuity",
    text: "The same faces, the same supervisor, the same checklist — week after week. Consistency is the only form of excellence a building can feel.",
  },
];

function MissionValues() {
  return (
    <SectionFade className="relative overflow-hidden bg-pine-950 py-14 sm:py-20 lg:py-24 text-paper">
      <p className="text-outline pointer-events-none absolute top-6 right-0 hidden sm:block font-display text-[9rem] leading-none font-semibold select-none" aria-hidden="true">
        2012
      </p>
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          index="02"
          eyebrow="Mission & Values"
          light
          lines={[
            "Transforming spaces with",
            <span key="a">
              <em className="font-light text-brass-300">precision</em> and <em className="font-light text-brass-300">care.</em>
            </span>,
          ]}
          lead="Our mission is to raise the standard of the working spaces Singapore depends on — kitchens where food is prepared, wards where patients recover, lobbies where brands are judged."
          className="mb-10 sm:mb-14"
        />
        <div className="grid gap-x-12 sm:gap-x-16 lg:grid-cols-2">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={(i % 2) * 90}>
              <div className="group flex gap-5 sm:gap-7 border-t border-champagne/15 py-6 sm:py-8">
                <span className="font-mono text-xs tracking-[0.25em] text-brass-300 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-champagne transition-colors group-hover:text-brass-300">
                    {v.title}
                  </h3>
                  <p className="mt-2 sm:mt-3 max-w-xl text-xs sm:text-sm leading-relaxed text-sage">{v.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200} className="mt-6 flex items-center gap-3 sm:gap-4 border-t border-champagne/15 pt-6 sm:pt-8">
          <Icon.Diamond className="h-2 w-2 text-brass-300 shrink-0" />
          <p className="font-mono text-[9.5px] sm:text-[11px] tracking-[0.22em] sm:tracking-[0.3em] text-sage uppercase">
            Precision · Care · Integrity · Continuity — the GKT standard since 2012
          </p>
        </Reveal>
      </div>
    </SectionFade>
  );
}

/* [Section 4] Featured Venues — premium photography wall */
type Venue = { name: string; subtitle: string; image: string; alt: string; focus?: string };

const FEATURED_VENUES: Venue[] = [
  { name: "Atlas", subtitle: "Cocktail Bar in Singapore", image: "/images/venue-atlas.jpg", alt: "Ornate gold-trimmed cocktail bar at Atlas, Parkview Square" },
  { name: "Yotel", subtitle: "Star Hotel in Singapore", image: "/images/venue-yotel.jpg", alt: "Singapore hotel skyline lit up at night" },
  { name: "Pan Pacific", subtitle: "Top 5-Star Hotel in Singapore", image: "/images/venue-panpacific.jpg", alt: "Rooftop infinity pool overlooking the Singapore skyline at dusk", focus: "center 88%" },
  { name: "Un-Yang-Kor-Dai", subtitle: "Authentic Thai & Isaan Cuisine Restaurant", image: "/images/venue-uykd.jpg", alt: "Woven rattan pendant lamps over a communal dining table" },
  { name: "Baker & Cook", subtitle: "Artisan Bakery & Café", image: "/images/venue-bakercook.jpg", alt: "Warmly lit corner café storefront with rattan bistro chairs" },
  { name: "Solo", subtitle: "Authentic Italian Restaurant", image: "/images/venue-solo.jpg", alt: "Elegant wood-toned dining room set for fine dining" },
  { name: "Fool", subtitle: "Wine Bar & Café", image: "/images/venue-fool.jpg", alt: "Wine bar interior with exposed wood-beam ceiling and green booth seating" },
  { name: "Utu Cafe", subtitle: "Specialty Coffee & Culture Café", image: "/images/venue-utucafe.jpg", alt: "Coffee shop counter under warm hanging pendant lights" },
  { name: "36 Lion Brewery", subtitle: "Craft Beer Brewery in Singapore", image: "/images/venue-lionbrewery.jpg", alt: "Brewery taproom with beer taps and shelved bottles" },
];

function FeaturedVenueTile({ venue, delay, dir }: { venue: Venue; delay: number; dir: "left" | "right" }) {
  const tilt = useCardTilt(2);
  return (
    <Reveal delay={delay} dir={dir} className="group">
      <div
        ref={tilt.ref}
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
        className="card-depth"
      >
        <div className="card-depth-inner frame-corners relative aspect-[4/5] overflow-hidden bg-pine-900">
        <img
          src={venue.image}
          alt={venue.alt}
          loading="lazy"
          style={{ objectPosition: venue.focus ?? "center" }}
          className="h-full w-full scale-[1.03] object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.12]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-pine-950 via-pine-950/15 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="pointer-events-none absolute inset-0 border border-paper/0 transition-colors duration-500 group-hover:border-brass-300/50" />
        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
          <div className="h-px w-9 origin-left scale-x-75 bg-brass-300/70 transition-transform duration-500 group-hover:scale-x-100" />
          <h3 className="mt-2.5 sm:mt-3 font-display text-lg sm:text-2xl font-semibold tracking-tight text-paper">
            {venue.name}
          </h3>
          <p className="mt-0.5 sm:mt-1 font-mono text-[9px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.18em] text-champagne/85 uppercase">
            {venue.subtitle}
          </p>
        </div>
        </div>
      </div>
    </Reveal>
  );
}

function FeaturedVenues() {
  return (
    <section className="relative overflow-hidden bg-pine-950 py-14 sm:py-20 lg:py-24 text-paper">
      <p
        className="text-outline pointer-events-none absolute -top-8 -right-4 hidden font-display text-[10rem] leading-none font-semibold select-none lg:block"
        aria-hidden="true"
      >
        04
      </p>
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 sm:gap-8 lg:flex-row lg:items-end">
          <SectionHead
            index="04"
            eyebrow="Featured Venues"
            light
            lines={["Spaces we keep", <span key="a"><em className="font-light text-brass-300">spotless.</em></span>]}
            lead="From Michelin-selected kitchens to five-star hotel towers, these are a few of the Singapore addresses that trust GKT with the rooms their guests never see us clean."
          />
          <Reveal delay={150} className={cn("flex shrink-0 items-center gap-3 sm:gap-4 border border-paper/15 px-4 py-3 sm:px-6 sm:py-4")}>
            <Icon.Diamond className="h-2 w-2 text-brass-300" />
            <p className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] text-sage uppercase">
              9 of 31 verified client venues
            </p>
          </Reveal>
        </div>

        <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {FEATURED_VENUES.map((v, i) => (
            <FeaturedVenueTile
              key={v.name}
              venue={v}
              delay={(i % 3) * 110}
              dir={i % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>

        <Reveal delay={200} className="mt-8 sm:mt-10 flex items-center justify-center">
          <BrassLink to="/contact" light>
            Become our next site
          </BrassLink>
        </Reveal>
      </div>
    </section>
  );
}

/* [Section 5] Client Brand Showcase */
function ClientShowcase() {
  return (
    <SectionFade className="bg-parchment py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          index="03"
          eyebrow="Client Brand Showcase"
          lines={["The company", <span key="a">we <em className="font-light">keep.</em></span>]}
          lead="A cleaning firm is defined by the rooms it is trusted with. These are some of the names that hand us their keys."
          className="mb-8 sm:mb-12"
        />
        <Reveal>
          <div className="border border-ink/15 bg-paper py-6 sm:py-10">
            <ClientMarquee />
          </div>
        </Reveal>
      </div>
    </SectionFade>
  );
}

export default function About() {
  return (
    <>
      {/* [Section 1] Hero Banner */}
      <PageHero
        crumb="About GKT"
        titleLines={["Welcome to", <span key="a">GKT <em className="font-light text-brass-300">International.</em></span>]}
        lead="Two decades of spotless outcomes across Singapore's kitchens, healthcare facilities and hospitality floors — delivered by a workforce trained to treat cleaning as the profession it is."
        image={pexels(6466219, 1000, 900)}
        imageAlt="GKT hospitality specialist with presentation linen"
        meta={["Est. 2012", "NEA Licensed", "bizSAFE Level 3", "WSQ Trained"]}
      />
      <CoreIdentity />
      <MissionValues />
      <ClientShowcase />
      <FeaturedVenues />
      <FooterServiceIndex />
    </>
  );
}
