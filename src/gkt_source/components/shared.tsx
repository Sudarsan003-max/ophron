import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "../utils/cn";
import { CLIENTS, CONTACT, SERVICES, type Service } from "../data/site";
import { Icon, Reveal, Eyebrow, MaskText, reducedMotion, useParallax, SectionFade, useCardTilt } from "./ui";

/* ------------------------------------------------------------------ */
/*  Client wordmark marquee                                            */
/* ------------------------------------------------------------------ */

export function ClientMarquee({ compact = false }: { compact?: boolean }) {
  const row = [...CLIENTS, ...CLIENTS];
  return (
    <div className="marquee-paused overflow-hidden py-2" aria-label="Recognised clients">
      <div className="marquee-track flex w-max items-center gap-16">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center gap-16" aria-hidden={half === 1}>
            {row.map((c, i) => (
              <span key={`${half}-${i}`} className="flex items-center gap-16">
                <span
                  className={cn(
                    "whitespace-nowrap text-ink/70 transition-colors duration-300 hover:text-brass",
                    compact && "scale-90",
                    c.style,
                  )}
                >
                  {c.name}
                </span>
                <Icon.Diamond className="h-2 w-2 shrink-0 text-brass/60" />
              </span>
            ))}
          </div>
        ))}
      </div>
      {!compact && (
        <div className="marquee-track reverse mt-6 flex w-max items-center gap-16" aria-hidden="true">
          {[...CLIENTS.slice().reverse(), ...CLIENTS.slice().reverse()].map((c, i) => (
            <span key={i} className="flex items-center gap-16">
              <span className={cn("whitespace-nowrap text-ink/45 transition-colors duration-300 hover:text-brass", c.style)}>
                {c.name}
              </span>
              <Icon.Diamond className="h-2 w-2 shrink-0 text-brass/40" />
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Footer Service Index — appears on every interior page              */
/* ------------------------------------------------------------------ */

export function FooterServiceIndex() {
  return (
    <section className="border-t border-ink/10 bg-parchment" aria-label="Service index">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Service Index</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-pine-950 sm:text-4xl">
              Every discipline, <span className="italic font-light">one partner.</span>
            </h2>
          </div>
          <Link
            to={CONTACT.telHref}
            className="u-sweep font-mono text-sm font-semibold tracking-[0.2em] text-brass uppercase"
          >
            Hotline — {CONTACT.hotlineDisplay}
          </Link>
        </Reveal>

        <div className="mt-10 grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={i * 60}>
              <Link
                to={s.route}
                className="group flex items-baseline gap-4 border-t border-ink/15 py-5 transition-colors hover:border-brass"
              >
                <span className="font-mono text-[11px] tracking-[0.2em] text-brass">{s.index}</span>
                <span>
                  <span className="u-sweep font-display text-xl font-medium text-pine-950 transition-colors group-hover:text-brass">
                    {s.name}
                  </span>
                  <span className="mt-0.5 block font-mono text-[10px] tracking-[0.18em] text-moss uppercase">
                    {s.short}
                  </span>
                </span>
                <Icon.ArrowNE className="ml-auto h-4 w-4 shrink-0 self-center text-brass opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 flex flex-wrap gap-x-8 gap-y-2 border-t border-ink/15 pt-6">
          {[
            { label: "Services Overview", to: "/services" },
            { label: "About GKT", to: "/about" },
            { label: "Why Choose Us", to: "/why-us" },
            { label: "Gallery", to: "/gallery" },
            { label: "Blog", to: "/blog" },
            { label: "Get a Quote", to: "/contact" },
          ].map((l) => (
            <Link key={l.to} to={l.to} className="u-sweep font-mono text-[11px] tracking-[0.22em] text-pine-700 uppercase hover:text-brass">
              {l.label}
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Interior page hero                                                 */
/* ------------------------------------------------------------------ */

export function PageHero({
  crumb,
  parent,
  titleLines,
  lead,
  image,
  imageAlt,
  meta,
}: {
  crumb: string;
  parent?: { label: string; to: string };
  titleLines: React.ReactNode[];
  lead: string;
  image: string;
  imageAlt: string;
  meta?: string[];
}) {
  const parallaxRef = useParallax(0.06);
  return (
    <section className="relative overflow-hidden bg-pine-950 text-paper">
      <div className="pointer-events-none absolute inset-0 opacity-[0.16]" aria-hidden="true">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(211,176,102,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(211,176,102,0.14) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 pt-14 pb-12 sm:px-8 sm:pt-16 sm:pb-14 lg:grid-cols-12 lg:gap-8 lg:pt-24 lg:pb-20">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="flex flex-wrap items-center gap-2 sm:gap-3 font-mono text-[10.5px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] text-sage uppercase">
              <Link to="/" className="u-sweep hover:text-brass-300">Home</Link>
              {parent && (
                <>
                  <Icon.Diamond className="h-1.5 w-1.5 text-brass" />
                  <Link to={parent.to} className="u-sweep hover:text-brass-300">{parent.label}</Link>
                </>
              )}
              <Icon.Diamond className="h-1.5 w-1.5 text-brass" />
              <span className="text-brass-300">{crumb}</span>
            </p>
          </Reveal>
          <MaskText
            lines={titleLines}
            className="mt-6 sm:mt-8 font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.04] font-medium tracking-tight"
          />
          <Reveal delay={350}>
            <p className="mt-5 sm:mt-7 max-w-xl text-sm sm:text-base leading-relaxed text-sage">{lead}</p>
          </Reveal>
          {meta && (
            <Reveal delay={480} className="mt-8 sm:mt-10 flex flex-wrap gap-x-6 sm:gap-x-8 gap-y-2.5 sm:gap-y-3">
              {meta.map((m) => (
                <span key={m} className="flex items-center gap-2 font-mono text-[9.5px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] text-champagne/80 uppercase">
                  <Icon.Diamond className="h-1.5 w-1.5 text-brass-300" />
                  {m}
                </span>
              ))}
            </Reveal>
          )}
        </div>
        <Reveal delay={250} className="lg:col-span-5">
          <div ref={parallaxRef} className="parallax-img frame-corners relative h-60 sm:h-80 overflow-hidden lg:h-full lg:min-h-[380px]">
            <img src={image} alt={imageAlt} className="kenburns h-full w-full object-cover" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-t from-pine-950/55 via-transparent to-transparent" />
          </div>
        </Reveal>
      </div>
      <div className="relative border-t border-paper/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8 sm:py-3.5">
          <span className="font-mono text-[9.5px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.3em] text-sage uppercase">GKT International — Singapore</span>
          <span className="flex items-center gap-2 font-mono text-[9.5px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.3em] text-brass-300 uppercase">
            Scroll <span className="inline-block h-3.5 sm:h-4 w-px animate-pulse bg-brass-300" />
          </span>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Service ledger (editorial rows) & catalog grid                     */
/* ------------------------------------------------------------------ */

export function ServiceLedger({ items = SERVICES }: { items?: Service[] }) {
  return (
    <div className="border-t border-ink/15">
      {items.map((s, i) => (
        <Reveal key={s.slug} delay={i * 50}>
          <Link
            to={s.route}
            className="ledger-row group grid grid-cols-[auto_1fr_auto] items-center gap-5 border-b border-ink/15 px-2 py-7 sm:grid-cols-[3.5rem_1fr_auto_3rem] sm:gap-8 sm:px-4"
          >
            <span className="font-mono text-xs tracking-[0.2em] text-brass">{s.index}</span>
            <span>
              <span className="font-display text-2xl font-medium tracking-tight text-pine-950 transition-colors duration-300 group-hover:text-brass sm:text-3xl">
                {s.name}
              </span>
              <span className="mt-1 block max-w-xl text-sm leading-relaxed text-pine-700/75">{s.desc}</span>
            </span>
            <span className="hidden h-20 w-32 overflow-hidden border border-ink/10 lg:block">
              <img
                src={s.image}
                alt={s.name}
                loading="lazy"
                className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-100"
              />
            </span>
            <Icon.ArrowNE className="h-5 w-5 text-brass transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

function ServiceGridCard({ s, i }: { s: Service; i: number }) {
  const tilt = useCardTilt(2.5);
  return (
    <Reveal key={s.slug} delay={(i % 3) * 90} className="bg-paper">
      <Link to={s.route} className="group flex h-full flex-col">
        <div className="relative h-52 overflow-hidden">
          <img
            src={s.image}
            alt={s.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
          />
          <div className="absolute inset-0 bg-pine-950/25 transition-opacity duration-500 group-hover:opacity-0" />
          <span className="absolute top-4 left-4 border border-champagne/50 bg-pine-950/70 px-2.5 py-1 font-mono text-[10px] tracking-[0.25em] text-champagne">
            {s.index} / 06
          </span>
        </div>
        <div
          ref={tilt.ref}
          onMouseMove={tilt.onMouseMove}
          onMouseLeave={tilt.onMouseLeave}
          className="card-depth flex flex-1 flex-col"
        >
          <div className="card-depth-inner hover-shine flex flex-1 flex-col p-6">
            <p className="font-mono text-[10px] tracking-[0.25em] text-brass uppercase">{s.short}</p>
            <h3 className="mt-3 font-display text-2xl font-medium tracking-tight text-pine-950">{s.name}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-pine-700/80">{s.desc}</p>
            <span className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] font-semibold tracking-[0.25em] text-brass uppercase">
              Explore service
              <Icon.ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

export function ServiceGrid({ items = SERVICES }: { items?: Service[] }) {
  return (
    <div className="grid gap-px border border-ink/15 bg-ink/15 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((s, i) => (
        <ServiceGridCard key={s.slug} s={s} i={i} />
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  FAQ accordion                                                      */
/* ------------------------------------------------------------------ */

export function FAQAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="border-t border-ink/15">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <Reveal key={f.q} delay={i * 40}>
            <div className="border-b border-ink/15">
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="group flex w-full items-center gap-5 py-6 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-mono text-xs tracking-[0.2em] text-brass">{String(i + 1).padStart(2, "0")}</span>
                <span
                  className={cn(
                    "flex-1 font-display text-lg font-medium tracking-tight transition-colors sm:text-xl",
                    isOpen ? "text-brass" : "text-pine-950 group-hover:text-brass",
                  )}
                >
                  {f.q}
                </span>
                <Icon.Plus
                  className={cn("h-4 w-4 shrink-0 text-brass transition-transform duration-500", isOpen && "rotate-45")}
                />
              </button>
              <div
                className={cn(
                  "grid transition-[grid-template-rows] duration-500 ease-out",
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                )}
              >
                <div className="overflow-hidden">
                  <p className="max-w-3xl pb-7 pl-11 text-sm leading-relaxed text-pine-700/85">{f.a}</p>
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Featured works carousel                                            */
/* ------------------------------------------------------------------ */

export function GalleryCarousel({ photos }: { photos: { src: string; alt: string; category: string; caption: string }[] }) {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = photos.length;

  useEffect(() => {
    if (paused || reducedMotion()) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % total), 5200);
    return () => clearInterval(t);
  }, [paused, total]);

  const current = photos[idx];

  return (
    <Reveal>
      <div
        className="group/car relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="frame-corners relative aspect-[4/3] overflow-hidden bg-pine-900 sm:aspect-[16/9] md:aspect-[16/8]">
          {photos.map((p, i) => (
            <div
              key={p.src}
              className={cn(
                "absolute inset-0 transition-opacity duration-1000",
                i === idx ? "opacity-100" : "opacity-0",
              )}
              aria-hidden={i !== idx}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading={i === 0 ? "eager" : "lazy"}
                className={cn("h-full w-full object-cover", i === idx && "kenburns")}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pine-950/85 via-pine-950/15 to-transparent" />
            </div>
          ))}

          <div className="absolute top-4 left-4 sm:top-5 sm:left-5 flex items-center gap-3">
            <span className="border border-champagne/50 bg-pine-950/70 px-2.5 py-1 sm:px-3 sm:py-1.5 font-mono text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] text-champagne uppercase">
              {current.category}
            </span>
          </div>

          <div className="absolute right-4 bottom-4 left-4 sm:right-5 sm:bottom-5 sm:left-5 flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4">
            <div className="max-w-xl">
              <p className="font-display text-lg font-medium text-paper sm:text-2xl">{current.caption}</p>
              <p className="mt-0.5 sm:mt-1 font-mono text-[10px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] text-champagne/80 uppercase">
                {String(idx + 1).padStart(2, "0")} — {String(total).padStart(2, "0")}
              </p>
            </div>
            <div className="flex items-center gap-2 self-end sm:self-auto">
              <button
                onClick={() => setIdx((idx - 1 + total) % total)}
                aria-label="Previous photo"
                className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center border border-champagne/40 bg-pine-950/70 text-champagne transition-colors duration-300 hover:bg-brass hover:text-pine-950 active:scale-95"
              >
                <Icon.ArrowLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => setIdx((idx + 1) % total)}
                aria-label="Next photo"
                className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center border border-champagne/40 bg-pine-950/70 text-champagne transition-colors duration-300 hover:bg-brass hover:text-pine-950 active:scale-95"
              >
                <Icon.ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 h-[3px] w-full bg-paper/10">
            <div
              className="h-full bg-brass transition-all duration-700"
              style={{ width: `${((idx + 1) / total) * 100}%` }}
            />
          </div>
        </div>

        <div className="mt-3 sm:mt-4 flex gap-2 overflow-x-auto no-scrollbar pb-1 sm:grid sm:grid-cols-7 sm:overflow-visible">
          {photos.map((p, i) => (
            <button
              key={p.src}
              onClick={() => setIdx(i)}
              aria-label={`View ${p.category}`}
              className={cn(
                "relative h-12 w-20 shrink-0 overflow-hidden border transition-all duration-300 sm:h-16 sm:w-auto sm:shrink",
                i === idx ? "border-brass opacity-100 ring-1 ring-brass" : "border-ink/10 opacity-50 hover:opacity-90",
              )}
            >
              <img src={p.src} alt="" className="h-full w-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/*  Lightbox                                                           */
/* ------------------------------------------------------------------ */

export function Lightbox({
  photos,
  index,
  onClose,
  onNavigate,
}: {
  photos: { src: string; alt: string; caption: string; category: string }[];
  index: number;
  onClose: () => void;
  onNavigate: (next: number) => void;
}) {
  const p = photos[index];
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % photos.length);
      if (e.key === "ArrowLeft") onNavigate((index - 1 + photos.length) % photos.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, photos.length, onClose, onNavigate]);

  return (
    <div className="fixed inset-0 z-[90] flex flex-col bg-pine-950/97 pt-safe pb-safe" role="dialog" aria-modal="true">
      <div className="flex items-center justify-between px-4 py-3 sm:px-8 sm:py-4 border-b border-paper/10">
        <p className="font-mono text-[10px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] text-champagne uppercase">
          {String(index + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")} — {p.category}
        </p>
        <button
          onClick={onClose}
          aria-label="Close gallery"
          className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center border border-champagne/40 text-champagne transition-colors hover:bg-brass hover:text-pine-950"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>
      <div className="flex flex-1 items-center justify-between gap-3 px-3 py-4 sm:gap-6 sm:px-8">
        <button
          onClick={() => onNavigate((index - 1 + photos.length) % photos.length)}
          aria-label="Previous photo"
          className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center border border-champagne/40 bg-pine-900/60 text-champagne transition-colors hover:bg-brass hover:text-pine-950 active:scale-95"
        >
          <Icon.ArrowLeft className="h-4 w-4" />
        </button>
        <figure className="flex h-full min-h-0 flex-1 flex-col items-center justify-center px-2">
          <img src={p.src} alt={p.alt} className="max-h-[64vh] sm:max-h-[74vh] w-auto max-w-full border border-champagne/20 object-contain shadow-2xl" />
          <figcaption className="mt-3 font-display text-sm sm:text-lg text-paper italic text-center">{p.caption}</figcaption>
        </figure>
        <button
          onClick={() => onNavigate((index + 1) % photos.length)}
          aria-label="Next photo"
          className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center border border-champagne/40 bg-pine-900/60 text-champagne transition-colors hover:bg-brass hover:text-pine-950 active:scale-95"
        >
          <Icon.ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hotline band                                                       */
/* ------------------------------------------------------------------ */

export function HotlineBand({
  title = "One call from a spotless standard.",
  note = "Speak to a site supervisor, not a switchboard. Quotes are free and site assessments are scheduled within 48 hours.",
}: {
  title?: string;
  note?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-pine-900 text-paper">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(rgba(211,176,102,0.35) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-14 sm:px-8 sm:py-16 lg:flex-row lg:items-center">
        <Reveal>
          <Eyebrow light>The Hotline</Eyebrow>
          <p className="mt-3 sm:mt-4 max-w-xl font-display text-2xl sm:text-3xl lg:text-4xl leading-tight font-medium tracking-tight">
            {title}
          </p>
          <p className="mt-3 sm:mt-4 max-w-lg text-sm leading-relaxed text-sage">{note}</p>
        </Reveal>
        <Reveal delay={150} className="flex w-full flex-col items-start gap-4 sm:gap-5 lg:w-auto lg:items-end">
          <a href={CONTACT.telHref} className="u-sweep font-display text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-champagne">
            {CONTACT.hotlineDisplay}
          </a>
          <div className="flex w-full flex-col sm:flex-row flex-wrap gap-3">
            <a
              href={CONTACT.telHref}
              className="btn-sweep inline-flex items-center justify-center gap-3 bg-brass px-6 py-3.5 font-mono text-[11px] font-semibold tracking-[0.25em] text-pine-950 uppercase hover:text-champagne active:scale-98"
            >
              <Icon.Phone className="h-4 w-4" /> Call now
            </a>
            <a
              href={CONTACT.waHref}
              target="_blank"
              rel="noreferrer"
              className="btn-sweep inv inline-flex items-center justify-center gap-3 border border-brass-300/60 px-6 py-3.5 font-mono text-[11px] font-semibold tracking-[0.25em] text-brass-300 uppercase hover:text-pine-950 active:scale-98"
            >
              <Icon.WhatsApp className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
