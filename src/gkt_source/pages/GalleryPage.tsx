import { useMemo, useState } from "react";
import { GALLERY, GALLERY_CATEGORIES, type Photo } from "../data/gallery";
import { Icon, MaskText, Reveal, SectionFade } from "../components/ui";
import { FooterServiceIndex, Lightbox } from "../components/shared";
import { cn } from "../utils/cn";

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const photos: Photo[] = useMemo(
    () => (filter === "All" ? GALLERY : GALLERY.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <>
      {/* [Section 1] Master Visual Project Gallery */}
      <section className="relative overflow-hidden bg-pine-950 text-paper">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(211,176,102,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(211,176,102,0.16) 1px, transparent 1px)",
            backgroundSize: "76px 76px",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-5 pt-12 pb-10 sm:px-8 sm:pt-16 sm:pb-14 lg:pt-24">
          <Reveal>
            <p className="flex items-center gap-2.5 sm:gap-3 font-mono text-[10.5px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] text-sage uppercase">
              <span>Photo & Work Gallery</span>
              <Icon.Diamond className="h-1.5 w-1.5 text-brass" />
              <span className="text-brass-300">{GALLERY.length} frames · 6 disciplines</span>
            </p>
          </Reveal>
          <MaskText
            className="mt-6 sm:mt-7 max-w-4xl font-display text-4xl sm:text-6xl lg:text-7xl leading-[1.02] font-medium tracking-tight"
            lines={[
              "The work,",
              <span key="a">
                left to <em className="font-light text-brass-300">speak.</em>
              </span>,
            ]}
          />
          <Reveal delay={300}>
            <p className="mt-4 sm:mt-6 max-w-xl text-sm sm:text-base leading-relaxed text-sage">
              Disinfecting, kitchen, industrial, office, restroom and hospitality frames from recent GKT
              deployments. No staging, no filters — the standard as delivered.
            </p>
          </Reveal>
        </div>
      </section>

      <SectionFade className="bg-paper py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mb-8 sm:mb-10 flex items-center gap-2 overflow-x-auto no-scrollbar flex-nowrap sm:flex-wrap border-y border-ink/15 py-3 sm:py-4">
            {GALLERY_CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={cn(
                  "shrink-0 border px-3.5 py-2 sm:px-5 sm:py-2.5 font-mono text-[10px] sm:text-[11px] font-medium tracking-[0.18em] sm:tracking-[0.2em] uppercase transition-all duration-300 active:scale-98",
                  filter === c
                    ? "border-brass bg-brass text-pine-950"
                    : "border-ink/20 text-pine-700 hover:border-brass hover:text-brass",
                )}
              >
                {c}
              </button>
            ))}
            <span className="ml-auto hidden font-mono text-[11px] tracking-[0.22em] text-moss uppercase sm:block">
              {photos.length} of {GALLERY.length} frames
            </span>
          </Reveal>

          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4 sm:[&>*]:mb-5">
            {photos.map((p, i) => (
              <Reveal key={p.src + p.caption} delay={(i % 3) * 70} className="break-inside-avoid">
                <button
                  onClick={() => setLightbox(i)}
                  className="group hover-lift relative block w-full overflow-hidden border border-ink/10 text-left"
                  aria-label={`Open ${p.caption}`}
                >
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-pine-950/85 via-pine-950/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute right-4 bottom-4 left-4 translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="block font-mono text-[9px] tracking-[0.28em] text-brass-300 uppercase">{p.category}</span>
                    <span className="mt-1 block font-display text-lg font-medium text-paper">{p.caption}</span>
                  </span>
                  <span className="absolute top-3 right-3 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center border border-champagne/50 bg-pine-950/60 text-champagne opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <Icon.Plus className="h-3.5 w-3.5" />
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </SectionFade>

      {lightbox !== null && (
        <Lightbox photos={photos} index={lightbox} onClose={() => setLightbox(null)} onNavigate={setLightbox} />
      )}

      {/* [Section 2] Footer Service Index */}
      <FooterServiceIndex />
    </>
  );
}
