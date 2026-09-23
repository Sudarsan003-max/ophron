import { BlogPost } from "../data/ophronBlogPosts";

type Props = {
  post: BlogPost | null;
  onClose: () => void;
};

export default function ArticleReaderModal({ post, onClose }: Props) {
  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md p-4 sm:p-6 lg:p-10 animate-fadeIn">
      <div className="relative mx-auto max-w-4xl rounded-[32px] bg-[#032147] text-[#EDE5DA] border border-[#B7A38B]/40 overflow-hidden shadow-2xl">
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-30 flex items-center justify-between bg-[#032147]/95 backdrop-blur-md px-6 sm:px-8 py-5 border-b border-white/10">
          <div className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.2em] text-[#B7A38B]">
            <span className="grid place-items-center h-6 w-6 rounded-full bg-[#B7A38B] shadow-sm">
              <img src="/images/brand/ophron-navy-emblem-transparent.png" className="h-3.5 w-auto object-contain" alt="OPHRON" />
            </span>
            <span>OPHRON Research</span>
            <span className="opacity-40">/</span>
            <span className="text-white font-bold">{post.category}</span>
          </div>

          <button
            onClick={onClose}
            className="grid place-items-center h-10 w-10 rounded-full bg-white/10 text-white hover:bg-[#B7A38B] hover:text-[#032147] transition duration-300 font-bold text-sm"
          >
            ✕
          </button>
        </div>

        {/* Article Body */}
        <div className="p-6 sm:p-10 lg:p-12 space-y-8">
          {/* Header Info */}
          <div>
            <span className="inline-block rounded-full bg-[#B7A38B]/20 border border-[#B7A38B]/40 px-3.5 py-1 text-[11px] font-mono text-[#B7A38B] uppercase tracking-[0.15em] font-bold">
              {post.category} · {post.readTime}
            </span>
            <h1 className="mt-4 font-canela font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.1]">
              {post.title}
            </h1>
            
            <div className="mt-6 flex items-center gap-4 text-[12px] font-mono text-[#EDE5DA]/70 border-y border-white/10 py-3">
              <span>By {post.author}</span>
              <span>·</span>
              <span>Published {post.date}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-black/40 border border-white/10">
            <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
          </div>

          {/* Key Takeaways Box */}
          {post.takeaways && post.takeaways.length > 0 && (
            <div className="rounded-2xl bg-white/[0.04] border border-[#B7A38B]/30 p-6">
              <div className="text-[11px] font-mono text-[#B7A38B] uppercase font-bold tracking-[0.15em]">
                [ Key Takeaways ]
              </div>
              <ul className="mt-3 space-y-2.5">
                {post.takeaways.map((t, idx) => (
                  <li key={idx} className="flex items-start gap-3 font-inter text-[14px] text-[#EDE5DA]/90">
                    <span className="grid place-items-center h-5 w-5 rounded-full bg-[#B7A38B] text-[#032147] text-[10px] font-bold shrink-0 mt-0.5">✓</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Article Body Blocks */}
          <div className="space-y-6 font-inter text-[16px] leading-[1.7] text-[#EDE5DA]/90">
            {post.body.map((block, idx) => {
              if (block.type === "p") {
                return <p key={idx}>{block.text}</p>;
              }
              if (block.type === "h2") {
                return (
                  <h2 key={idx} className="pt-4 font-canela font-bold text-2xl sm:text-3xl text-white tracking-tight">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "quote") {
                return (
                  <blockquote key={idx} className="rounded-2xl bg-[#B7A38B]/10 border-l-4 border-[#B7A38B] p-6 font-serif-i italic text-lg text-[#B7A38B]">
                    “{block.text}”
                  </blockquote>
                );
              }
              if (block.type === "list") {
                return (
                  <ul key={idx} className="space-y-3 pl-2">
                    {block.items.map((li, liIdx) => (
                      <li key={liIdx} className="flex items-start gap-3 text-[15px]">
                        <span className="h-2 w-2 rounded-full bg-[#B7A38B] shrink-0 mt-2" />
                        <span>{li}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              return null;
            })}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="border-t border-white/10 bg-[#0c224a] p-8 text-center">
          <h3 className="font-canela text-2xl text-white font-bold">Require specialized compliance support?</h3>
          <p className="mt-2 font-inter text-[14px] text-[#EDE5DA]/80 max-w-md mx-auto">
            OPHRON's technical operations desk provides free hygiene assessments across Singapore.
          </p>
          <a
            href="#contact"
            onClick={onClose}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#B7A38B] text-[#032147] px-7 py-3 text-[13px] font-montserrat font-bold hover:bg-white transition duration-300"
          >
            Contact OPHRON Operations →
          </a>
        </div>
      </div>
    </div>
  );
}
