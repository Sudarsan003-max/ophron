import { useState } from "react";
import { SectionHead } from "./About";
import { BlogPost } from "../data/ophronBlogPosts";
import ArticleReaderModal from "./ArticleReaderModal";
import AppleResearchTab from "./AppleResearchTab";
import { ScrollReveal } from "./ui/animations";

export default function Blog() {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  return (
    <section
      id="blog"
      className="relative pt-16 pb-14 bg-[#032147] overflow-hidden border-b border-white/10"
      style={{ background: "#032147", color: "#EDE5DA" }}
    >
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#B7A38B]/10 blur-[150px] pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px] px-5">
        <SectionHead n="011" label="Insights & Operations Research" light />

        {/* Section Intro Subheading */}
        <ScrollReveal variant="up" delay={50}>
          <div className="mt-3 mb-6 max-w-2xl">
            <h2 className="font-canela text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Empirical Standards. <span className="font-serif-i italic text-[#B7A38B]">Audited Delivery.</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Apple Interactive Table Container */}
        <ScrollReveal variant="up" delay={100}>
          <AppleResearchTab onOpenArticle={(post) => setActivePost(post)} />
        </ScrollReveal>

        {/* Clean Link to All Articles */}
        <ScrollReveal variant="up" delay={150}>
          <div className="mt-6 text-center">
            <a
              href="#all-articles"
              className="inline-flex items-center gap-2 text-xs font-montserrat font-bold uppercase tracking-wider text-[#B7A38B] hover:text-white transition-colors"
            >
              <span>Browse All Editorial Research Whitepapers</span>
              <span>→</span>
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Full Article Reader Modal Popup */}
      <ArticleReaderModal post={activePost} onClose={() => setActivePost(null)} />
    </section>
  );
}
