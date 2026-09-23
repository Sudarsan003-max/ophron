import { useEffect, useState } from "react";
import { OPHRON_BLOG_POSTS, BlogPost } from "../data/ophronBlogPosts";
import ArticleReaderModal from "./ArticleReaderModal";
import {
  MaskedHeadline,
  ScrollReveal,
  TiltCard,
  CornerBrackets,
} from "./ui/animations";

export default function AllArticles() {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative py-12 px-5 min-h-screen bg-[#032147]" style={{ background: "#032147", color: "#EDE5DA" }}>
      <div className="mx-auto max-w-[1400px]">
        {/* Header navigation bar */}
        <ScrollReveal variant="down" delay={50}>
          <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-16">
            <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.22em]">
              <span className="grid place-items-center h-6 w-6 rounded-full bg-[#B7A38B] text-[#032147] text-[9px] font-bold">
                ✦
              </span>
              <span className="opacity-70 text-[#B7A38B] font-bold">OPHRON</span>
              <span>/</span>
              <span>Research Library</span>
            </div>

            <a
              href="#blog"
              className="group inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-[12px] font-montserrat font-bold text-[#EDE5DA] hover:bg-[#B7A38B] hover:text-[#032147] transition duration-300 hover:scale-105"
              style={{ color: "#EDE5DA" }}
            >
              ← Back to Platform
            </a>
          </div>
        </ScrollReveal>

        {/* Section Heading */}
        <div className="max-w-3xl">
          <MaskedHeadline
            as="h1"
            className="font-canela font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-[#EDE5DA]"
            staggerMs={120}
            lines={[
              <>
                OPHRON <span className="font-serif-i italic text-[#B7A38B]">Operations Library</span>
              </>,
            ]}
          />
          <ScrollReveal variant="left" delay={150}>
            <p className="mt-4 font-inter text-[15.5px] sm:text-[16.5px] leading-relaxed text-[#EDE5DA]/80">
              Explore Singapore industry research on SFA kitchen compliance, NEA pathogen suppression, ESG Green Mark cleaning, and physical environment impression management.
            </p>
          </ScrollReveal>
        </div>

        {/* Responsive Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OPHRON_BLOG_POSTS.map((art, idx) => (
            <ScrollReveal key={idx} variant="up" delay={idx * 80}>
              <TiltCard
                maxTilt={6}
                onClick={() => setActivePost(art)}
                className="group cursor-pointer flex flex-col justify-between rounded-3xl bg-white/[0.03] border border-white/10 p-6 sm:p-8 hover:bg-white/[0.06] hover:border-[#B7A38B]/40 transition-all duration-300 h-full shadow-xl"
              >
                <CornerBrackets color="#B7A38B" size={12} hoverSize={18} />
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#B7A38B]/20 border border-[#B7A38B]/30 px-3 py-1 text-[10px] font-mono font-bold text-[#B7A38B] uppercase tracking-[0.1em]">
                    {art.category}
                  </span>

                  <h2 className="mt-6 font-montserrat font-bold text-xl sm:text-2xl leading-snug tracking-tight text-[#EDE5DA] group-hover:text-[#B7A38B] transition duration-300">
                    {art.title}
                  </h2>

                  <p className="mt-3 font-inter text-[13.5px] leading-relaxed text-[#EDE5DA]/75">
                    {art.excerpt}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#EDE5DA]/50">{art.readTime}</span>
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-full bg-[#B7A38B] text-[#032147] pl-4 pr-1.5 py-1.5 text-[12px] font-montserrat font-bold transition group-hover:bg-white group-hover:text-[#032147] duration-300 group-hover:scale-105"
                  >
                    Read Research
                    <span className="grid place-items-center h-7 w-7 rounded-full bg-[#032147] text-[#EDE5DA] transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </button>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      <ArticleReaderModal post={activePost} onClose={() => setActivePost(null)} />
    </section>
  );
}

