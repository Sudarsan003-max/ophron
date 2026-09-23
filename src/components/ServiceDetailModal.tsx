import { useState } from "react";
import { OPHRON_SERVICE_PAGES, ServicePageData, SectionBlock } from "../data/ophronServicePages";

type Props = {
  serviceSlug: string | null;
  onClose: () => void;
};

export default function ServiceDetailModal({ serviceSlug, onClose }: Props) {
  if (!serviceSlug || !OPHRON_SERVICE_PAGES[serviceSlug]) return null;

  const data: ServicePageData = OPHRON_SERVICE_PAGES[serviceSlug];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md p-4 sm:p-6 lg:p-10 animate-fadeIn">
      <div className="relative mx-auto max-w-6xl rounded-[32px] bg-[#032147] text-[#EDE5DA] border border-[#B7A38B]/40 overflow-hidden shadow-2xl">
        {/* Top bar with back/close */}
        <div className="sticky top-0 z-30 flex items-center justify-between bg-[#032147]/95 backdrop-blur-md px-6 sm:px-8 py-5 border-b border-white/10">
          <div className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.2em] text-[#B7A38B]">
            <span className="grid place-items-center h-6 w-6 rounded-full bg-[#B7A38B] shadow-sm">
              <img src="/images/brand/ophron-navy-emblem-transparent.png" className="h-3.5 w-auto object-contain" alt="OPHRON" />
            </span>
            <span>OPHRON Platform</span>
            <span className="opacity-40">/</span>
            <span className="text-white font-bold">{data.crumb}</span>
          </div>

          <button
            onClick={onClose}
            className="grid place-items-center h-10 w-10 rounded-full bg-white/10 text-white hover:bg-[#B7A38B] hover:text-[#032147] transition duration-300 font-bold text-sm"
          >
            ✕
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-10 space-y-16">
          {/* Hero Banner */}
          <div className="relative rounded-3xl overflow-hidden bg-black/40 border border-white/10 p-8 sm:p-12 lg:p-14">
            <div className="absolute inset-0 z-0">
              <img src={data.heroImage} alt={data.heroTitle} className="h-full w-full object-cover opacity-25" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#032147] via-[#032147]/90 to-transparent" />
            </div>

            <div className="relative z-10 max-w-3xl">
              <span className="inline-block rounded-full bg-[#B7A38B]/20 border border-[#B7A38B]/40 px-3.5 py-1 text-[11px] font-mono text-[#B7A38B] uppercase tracking-[0.15em] font-bold">
                OPHRON Specialized Service
              </span>
              <h1 className="mt-4 font-canela font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.05]">
                {data.heroTitle}
              </h1>
              <p className="mt-5 font-montserrat text-[16px] sm:text-[18px] leading-relaxed text-[#EDE5DA]/90">
                {data.heroLead}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  onClick={onClose}
                  className="inline-flex items-center gap-2 rounded-full bg-[#B7A38B] text-[#032147] px-7 py-3.5 text-[13px] font-montserrat font-bold hover:bg-white transition duration-300 shadow-lg shadow-[#B7A38B]/20"
                >
                  Request {data.crumb} Audit →
                </a>
                <span className="text-[11px] font-mono text-[#B7A38B] uppercase tracking-[0.1em]">
                  🔒 NEA Licensed & bizSAFE Level 3
                </span>
              </div>
            </div>
          </div>

          {/* Section Blocks Render */}
          {data.sections.map((block, idx) => (
            <SectionBlockRenderer key={idx} block={block} />
          ))}
        </div>

        {/* Modal Footer CTA */}
        <div className="border-t border-white/10 bg-[#0c224a] p-8 text-center">
          <h3 className="font-canela text-3xl text-white font-bold">Ready to elevate your facility standards?</h3>
          <p className="mt-2 font-inter text-[14px] text-[#EDE5DA]/80 max-w-md mx-auto">
            Book a complimentary Singapore site assessment with OPHRON's senior operational team today.
          </p>
          <a
            href="#contact"
            onClick={onClose}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#B7A38B] text-[#032147] px-8 py-3.5 text-[13px] font-montserrat font-bold hover:bg-white transition duration-300"
          >
            Initiate Contact & Site Audit →
          </a>
        </div>
      </div>
    </div>
  );
}

function SectionBlockRenderer({ block }: { block: SectionBlock }) {
  switch (block.kind) {
    case "overview":
      return (
        <div className="grid lg:grid-cols-12 gap-10 items-center border-b border-white/10 pb-14">
          <div className="lg:col-span-7">
            <h2 className="font-canela text-3xl sm:text-4xl font-bold text-white tracking-tight">{block.title}</h2>
            <div className="mt-5 space-y-4 font-inter text-[15px] leading-relaxed text-[#EDE5DA]/85">
              {block.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {block.bullets && block.bullets.length > 0 && (
              <div className="mt-6 space-y-2.5">
                {block.bullets.map((b, i) => (
                  <div key={i} className="flex items-center gap-3 font-montserrat text-[13.5px] font-semibold text-[#EDE5DA]">
                    <span className="grid place-items-center h-5 w-5 rounded-full bg-[#B7A38B] text-[#032147] text-[10px] font-bold">✓</span>
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-white/15 aspect-[4/3] bg-black/40 shadow-xl">
              <img src={block.image} alt={block.imageAlt} className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      );

    case "value":
      return (
        <div className="border-b border-white/10 pb-14">
          <h2 className="font-canela text-3xl sm:text-4xl font-bold text-white tracking-tight">{block.title}</h2>
          {block.lead && <p className="mt-3 font-inter text-[15px] text-[#EDE5DA]/80 max-w-2xl">{block.lead}</p>}

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {block.items.map((it, i) => (
              <div key={i} className="rounded-2xl bg-white/[0.03] border border-white/10 p-6 hover:border-[#B7A38B]/40 transition">
                <div className="text-[11px] font-mono text-[#B7A38B] font-bold">0{i + 1}</div>
                <h4 className="mt-3 font-montserrat text-lg font-bold text-white">{it.title}</h4>
                <p className="mt-2 font-inter text-[13px] leading-relaxed text-[#EDE5DA]/75">{it.text}</p>
              </div>
            ))}
          </div>
        </div>
      );

    case "guide":
      return (
        <div className="border-b border-white/10 pb-14">
          <h2 className="font-canela text-3xl sm:text-4xl font-bold text-white tracking-tight">{block.title}</h2>
          {block.intro && <p className="mt-3 font-inter text-[15px] text-[#EDE5DA]/80 max-w-2xl">{block.intro}</p>}

          <div className="mt-8 space-y-4">
            {block.blocks.map((b, i) => (
              <div key={i} className="rounded-2xl bg-white/[0.03] border border-white/10 p-6 flex flex-col sm:flex-row sm:items-start gap-4">
                <span className="grid place-items-center h-9 w-9 rounded-full bg-[#B7A38B] text-[#032147] text-[12px] font-bold shrink-0">
                  0{i + 1}
                </span>
                <div>
                  <h4 className="font-montserrat text-lg font-bold text-white">{b.heading}</h4>
                  <p className="mt-2 font-inter text-[14px] leading-relaxed text-[#EDE5DA]/80">{b.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case "grid":
      return (
        <div className="border-b border-white/10 pb-14">
          <h2 className="font-canela text-3xl sm:text-4xl font-bold text-white tracking-tight">{block.title}</h2>
          {block.intro && <p className="mt-3 font-inter text-[15px] text-[#EDE5DA]/80 max-w-2xl">{block.intro}</p>}

          {block.quote && (
            <div className="mt-4 rounded-xl bg-[#B7A38B]/10 border border-[#B7A38B]/30 p-4 text-[13.5px] font-montserrat italic font-semibold text-[#B7A38B]">
              “{block.quote}”
            </div>
          )}

          <div className={`mt-8 grid gap-5 ${block.cols === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
            {block.items.map((it, i) => (
              <div key={i} className="rounded-2xl bg-white/[0.03] border border-white/10 p-6 hover:border-[#B7A38B]/40 transition">
                <div className="flex items-center gap-2 text-[#B7A38B] font-mono text-[11px] font-bold uppercase tracking-[0.1em]">
                  <span>✦ Discipline</span>
                </div>
                <h4 className="mt-3 font-montserrat text-lg font-bold text-white">{it.title}</h4>
                <p className="mt-2 font-inter text-[13.5px] leading-relaxed text-[#EDE5DA]/75">{it.text}</p>
              </div>
            ))}
          </div>
        </div>
      );

    case "features":
      return (
        <div className="border-b border-white/10 pb-14">
          <h2 className="font-canela text-3xl sm:text-4xl font-bold text-white tracking-tight">{block.title}</h2>
          {block.intro && <p className="mt-3 font-inter text-[15px] text-[#EDE5DA]/80 max-w-2xl">{block.intro}</p>}

          <div className="mt-8 space-y-8">
            {block.items.map((feat, i) => (
              <div key={i} className="rounded-3xl bg-white/[0.03] border border-white/10 p-7 lg:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-montserrat text-2xl font-bold text-white">{feat.title}</h3>
                  {feat.badges && (
                    <div className="flex flex-wrap gap-2">
                      {feat.badges.map((bg, bIdx) => (
                        <span key={bIdx} className="rounded-full bg-[#B7A38B]/20 border border-[#B7A38B]/40 px-3 py-1 text-[10px] font-mono font-bold text-[#B7A38B] uppercase">
                          {bg}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <p className="mt-4 font-inter text-[14.5px] leading-relaxed text-[#EDE5DA]/85">{feat.text}</p>

                {feat.bullets && feat.bullets.length > 0 && (
                  <div className="mt-6 pt-5 border-t border-white/10 grid sm:grid-cols-2 gap-3">
                    {feat.bullets.map((bul, bulIdx) => (
                      <div key={bulIdx} className="flex items-center gap-2.5 font-inter text-[13px] text-[#EDE5DA]/90">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#B7A38B]" />
                        <span>{bul}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      );

    case "gallery":
      return (
        <div className="border-b border-white/10 pb-14">
          <h2 className="font-canela text-3xl sm:text-4xl font-bold text-white tracking-tight">{block.title}</h2>
          {block.intro && <p className="mt-3 font-inter text-[15px] text-[#EDE5DA]/80 max-w-2xl">{block.intro}</p>}

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {block.images.map((img, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-white/10 bg-black/40 aspect-[4/3]">
                <img src={img.src} alt={img.alt} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      );

    case "faq":
      return (
        <div>
          <h2 className="font-canela text-3xl sm:text-4xl font-bold text-white tracking-tight">{block.title}</h2>
          <div className="mt-8 space-y-4">
            {block.items.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      );

    default:
      return null;
  }
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-6 flex items-center justify-between gap-4 font-montserrat font-bold text-[16px] text-white hover:text-[#B7A38B] transition"
      >
        <span>{q}</span>
        <span className="text-xl font-mono text-[#B7A38B]">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="px-6 pb-6 pt-1 font-inter text-[14px] leading-relaxed text-[#EDE5DA]/80 border-t border-white/5">
          {a}
        </div>
      )}
    </div>
  );
}
