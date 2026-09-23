import { useState } from "react";
import { SectionHead } from "./About";
import { BlogPost, OPHRON_BLOG_POSTS } from "../data/ophronBlogPosts";
import ArticleReaderModal from "./ArticleReaderModal";
import AppleResearchTab from "./AppleResearchTab";
import { ScrollReveal } from "./ui/animations";

export default function Blog() {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  return (
    <section
      id="blog"
      className="relative pt-28 pb-16 bg-[#032147] overflow-hidden border-b border-white/10"
      style={{ background: "#032147", color: "#EDE5DA" }}
    >
      {/* Ambient Lighting Blobs */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-[#B7A38B]/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 h-[350px] w-[350px] rounded-full bg-[#0A2647]/60 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px] px-5">
        <SectionHead n="006" label="Insights & Operations Research" light />

        {/* Section Intro Subheading */}
        <ScrollReveal variant="up" delay={50}>
          <div className="mt-4 max-w-3xl">
            <p className="font-inter text-base sm:text-lg text-[#EDE5DA]/80 leading-relaxed">
              Empirical hygiene science, Singapore regulatory compliance matrices, and workforce operational discipline unified in an interactive digital platform.
            </p>
          </div>
        </ScrollReveal>

        {/* Apple 3D Interactive Table Container */}
        <div className="mt-12">
          <ScrollReveal variant="up" delay={100}>
            <AppleResearchTab onOpenArticle={(post) => setActivePost(post)} />
          </ScrollReveal>
        </div>

        {/* Bottom Operating Verdict Card */}
        <ScrollReveal variant="up" delay={200}>
          <div className="mt-10 max-w-5xl mx-auto rounded-2xl border border-[#B7A38B]/35 bg-gradient-to-r from-white/[0.04] via-white/[0.02] to-white/[0.04] p-6 sm:p-7 backdrop-blur-md shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-2">
                <div className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#B7A38B] font-bold flex items-center gap-2">
                  <span>[ OPHRON Operating Verdict ]</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <p className="font-inter text-[14px] leading-relaxed text-[#EDE5DA]/90 max-w-3xl">
                  Hospitality establishments in Singapore that hold Grade A health ratings and zero SLA penalties treat cleaning as an integrated operational platform. Combining WSQ-certified crews with digital audit logging delivers complete SLA confidence 365 days a year.
                </p>
              </div>

              <div className="shrink-0 self-start sm:self-center">
                <button
                  type="button"
                  onClick={() => setActivePost(OPHRON_BLOG_POSTS[0])}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-[#B7A38B] text-[#EDE5DA] hover:text-[#032147] text-xs font-montserrat font-bold transition-all duration-300 border border-white/15 cursor-pointer shadow-sm hover:scale-105"
                >
                  Read Whitepaper →
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Master CTA to Explore All Research */}
        <ScrollReveal variant="scale" delay={250}>
          <div className="mt-14 flex justify-center">
            <a
              href="#all-articles"
              className="group inline-flex items-center gap-3.5 rounded-full border border-[#B7A38B]/40 bg-white/[0.02] hover:bg-[#B7A38B] hover:text-[#032147] px-10 py-5 text-[15px] font-montserrat font-bold transition-all duration-300 hover:scale-105 shadow-2xl"
              style={{ color: "#EDE5DA" }}
            >
              <span className="group-hover:text-[#032147] transition-colors">
                Explore All OPHRON Research Articles
              </span>
              <span className="grid place-items-center h-7 w-7 rounded-full bg-[#B7A38B] text-[#032147] group-hover:bg-[#032147] group-hover:text-[#EDE5DA] transition-all">
                →
              </span>
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Full Article Reader Modal Popup */}
      <ArticleReaderModal post={activePost} onClose={() => setActivePost(null)} />
    </section>
  );
}


