import { useState } from "react";
import { SectionHead } from "./About";
import { OPHRON_BLOG_POSTS, BlogPost } from "../data/ophronBlogPosts";
import ArticleReaderModal from "./ArticleReaderModal";
import {
  MaskedHeadline,
  ScrollReveal,
  TiltCard,
  CornerBrackets,
} from "./ui/animations";

export default function Blog() {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  const featuredPost = OPHRON_BLOG_POSTS[0];

  const channels = [
    {
      num: "01",
      title: "SFA & Kitchen Compliance",
      desc: "Daily close-down protocols, grease-trap clearing, and canopy degreasing engineered to keep Singapore F&B kitchens SFA Grade A inspectable.",
      badge: "SFA & HACCP",
      metric: "Grade A Standards",
    },
    {
      num: "02",
      title: "NEA Disinfection Defense",
      desc: "Electrostatic spraying & ULV fogging using NEA-approved compounds. Baseline pathogen suppression protecting your operating calendar.",
      badge: "NEA APPROVED",
      metric: "100% Suppression",
    },
    {
      num: "03",
      title: "ESG & Green Mark Cleaning",
      desc: "Low-VOC eco chemistry, automated dilution control, and closed-loop microfibre supporting Singapore Green Mark building disclosures.",
      badge: "GREEN MARK ESG",
      metric: "Low Chemical Load",
    },
    {
      num: "04",
      title: "Workforce & Operational Log",
      desc: "WSQ-trained, security-screened crews operating under named site supervisors with daily checklists and digital audit sign-offs.",
      badge: "WSQ CERTIFIED",
      metric: "Auditable SLA",
    },
  ];

  return (
    <section id="blog" className="relative pt-28 pb-10 bg-[#032147] overflow-hidden border-b border-white/5" style={{ background: "#032147", color: "#EDE5DA" }}>
      {/* Glow Blob */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 h-[350px] w-[350px] rounded-full bg-[#B7A38B]/10 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px] px-5">
        <SectionHead n="006" label="Insights & Operations Research" light />

        <div className="mt-12 grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Featured Post Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <ScrollReveal variant="up" delay={50}>
              <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#B7A38B] font-bold mb-4">[ Featured Research ]</div>
            </ScrollReveal>
            
            <ScrollReveal variant="left" delay={100}>
              <TiltCard
                maxTilt={6}
                className="group relative rounded-[28px] bg-white/[0.03] border border-white/10 p-6 sm:p-8 hover:bg-white/[0.06] hover:border-[#B7A38B]/40 transition-all duration-300 shadow-xl"
              >
                <CornerBrackets color="#B7A38B" size={14} hoverSize={20} />
                <span className="inline-flex items-center gap-2 rounded-full bg-[#B7A38B]/20 border border-[#B7A38B]/30 px-3 py-1 text-[10px] font-mono text-[#B7A38B] uppercase tracking-[0.1em] font-bold">
                  SINGAPORE F&B · HYGIENE GUIDE
                </span>
                
                <h3 className="mt-6 font-canela font-bold text-3xl sm:text-4xl leading-[1.15] tracking-tight text-[#EDE5DA]">
                  Restaurant & Kitchen Deep Cleaning in Singapore: <span className="font-serif-i text-[#B7A38B]">SFA Compliance Guide</span>
                </h3>
                
                <p className="mt-4 font-inter text-[14.5px] leading-relaxed text-[#EDE5DA]/80">
                  Between SFA inspection grades, grease trap maintenance, and canopy fire safety, a Singapore kitchen's cleaning program is its license to operate. Here is how OPHRON ensures inspectable kitchens 24/7.
                </p>
                
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-end">
                  <button
                    type="button"
                    onClick={() => setActivePost(featuredPost)}
                    className="inline-flex items-center gap-2 rounded-full bg-[#B7A38B] text-[#032147] pl-4 pr-1.5 py-1.5 text-[12px] font-montserrat font-bold hover:bg-white transition group/btn cursor-pointer hover:scale-105"
                  >
                    Read Research Guide
                    <span className="grid place-items-center h-7 w-7 rounded-full bg-[#032147] text-[#EDE5DA] transition-transform group-hover/btn:translate-x-0.5">
                      →
                    </span>
                  </button>
                </div>
              </TiltCard>
            </ScrollReveal>
          </div>

          {/* Right Column: Scraped Insights Bento Cards */}
          <div className="lg:col-span-7">
            <ScrollReveal variant="up" delay={150}>
              <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#B7A38B] font-bold mb-4">[ Operational Principles ]</div>
            </ScrollReveal>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {channels.map((ch, idx) => (
                <ScrollReveal key={ch.num} variant="up" delay={idx * 100}>
                  <TiltCard
                    maxTilt={7}
                    className="group relative rounded-2xl bg-white/[0.02] border border-white/10 p-6 hover:border-[#B7A38B]/40 hover:bg-white/[0.05] transition duration-300 h-full flex flex-col justify-between"
                  >
                    <CornerBrackets color="#B7A38B" size={10} hoverSize={16} />
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs text-[#B7A38B] font-bold group-hover:text-white transition duration-300">{ch.num}</span>
                        <span className="rounded-md bg-white/5 border border-white/10 px-2 py-0.5 font-mono text-[9px] text-[#EDE5DA]/80 uppercase tracking-[0.1em]">
                          {ch.badge}
                        </span>
                      </div>

                      <h4 className="mt-4 font-montserrat text-xl font-bold text-[#EDE5DA] group-hover:text-[#B7A38B] transition duration-300">
                        {ch.title}
                      </h4>

                      <p className="mt-2 font-inter text-[13px] leading-relaxed text-[#EDE5DA]/75">
                        {ch.desc}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between text-[11px] font-mono border-t border-white/10 pt-4">
                      <span className="opacity-60">Standard</span>
                      <span className="text-[#B7A38B] font-bold">{ch.metric}</span>
                    </div>
                  </TiltCard>
                </ScrollReveal>
              ))}
            </div>

            {/* Quick Summary Banner */}
            <ScrollReveal variant="up" delay={300}>
              <div className="mt-6 rounded-2xl border border-[#B7A38B]/30 bg-white/[0.03] p-5">
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#B7A38B] font-bold">[ OPHRON Operating Verdict ]</div>
                <p className="mt-2 font-inter text-[13.5px] leading-relaxed text-[#EDE5DA]/85">
                  Hospitality establishments in Singapore that hold Grade A health ratings and zero SLA penalties treat cleaning as an integrated operational platform. Combining WSQ-certified crews with digital audit logging delivers complete SLA confidence 365 days a year.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* More Articles Button */}
        <ScrollReveal variant="scale" delay={200}>
          <div className="mt-16 flex justify-center">
            <a
              href="#all-articles"
              className="group inline-flex items-center gap-3.5 rounded-full border border-white/20 px-10 py-5 text-[15px] font-montserrat font-bold hover:bg-white hover:text-[#032147] transition duration-300 hover:scale-105 shadow-xl"
              style={{ color: "#EDE5DA" }}
            >
              Explore All OPHRON Research Articles
              <span className="grid place-items-center h-7 w-7 rounded-full bg-[#B7A38B] text-[#032147] group-hover:bg-[#032147] group-hover:text-[#EDE5DA] transition-all">
                →
              </span>
            </a>
          </div>
        </ScrollReveal>
      </div>

      <ArticleReaderModal post={activePost} onClose={() => setActivePost(null)} />
    </section>
  );
}

