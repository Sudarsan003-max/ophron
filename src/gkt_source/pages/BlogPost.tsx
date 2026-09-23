import { Link, Navigate, useParams } from "react-router-dom";
import { BLOG_POSTS, getPost, type BlogBlock } from "../data/blog";
import { Eyebrow, Icon, MaskText, Reveal } from "../components/ui";
import { FooterServiceIndex, HotlineBand } from "../components/shared";

/* balanced two-line split for display titles */
function splitTitle(title: string) {
  const words = title.split(" ");
  if (words.length <= 4) return [title];
  const mid = Math.ceil(words.length / 2);
  return [
    words.slice(0, mid).join(" "),
    <span key="l2" className="text-brass-300">
      {words.slice(mid).join(" ")}
    </span>,
  ];
}

function Block({ b, first }: { b: BlogBlock; first: boolean }) {
  switch (b.type) {
    case "p":
      return (
        <p className={first ? "text-lg leading-relaxed text-pine-800 sm:text-xl" : "mt-6 text-base leading-relaxed text-pine-700/90 sm:text-lg"}>
          {b.text}
        </p>
      );
    case "h2":
      return (
        <h2 className="mt-14 mb-5 flex items-baseline gap-4 font-display text-2xl font-medium tracking-tight text-pine-950 sm:text-3xl">
          <Icon.Diamond className="h-2.5 w-2.5 shrink-0 translate-y-[-2px] text-brass" />
          {b.text}
        </h2>
      );
    case "quote":
      return (
        <blockquote className="my-12 border-l-2 border-brass pl-7">
          <p className="font-display text-2xl leading-snug font-light text-pine-900 italic sm:text-3xl">
            {"\u201C"}
            {b.text}
            {"\u201D"}
          </p>
        </blockquote>
      );
    case "list":
      return (
        <ul className="tick-list my-9 space-y-3.5 text-base text-pine-800">
          {b.items.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ul>
      );
  }
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = slug ? getPost(slug) : undefined;
  if (!post) return <Navigate to="/blog" replace />;

  const idx = BLOG_POSTS.findIndex((p) => p.slug === post.slug);
  const next = BLOG_POSTS[(idx + 1) % BLOG_POSTS.length];
  const prev = BLOG_POSTS[(idx - 1 + BLOG_POSTS.length) % BLOG_POSTS.length];

  return (
    <>
      {/* [Section 1] Header & Title */}
      <header className="relative overflow-hidden bg-pine-950 text-paper">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(211,176,102,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(211,176,102,0.16) 1px, transparent 1px)",
            backgroundSize: "76px 76px",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-5xl px-5 pt-12 pb-10 sm:px-8 sm:pt-16 sm:pb-16 lg:pt-24 lg:pb-20">
          <Reveal>
            <p className="flex flex-wrap items-center gap-2.5 sm:gap-3 font-mono text-[10px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.28em] text-sage uppercase">
              <Link to="/blog" className="u-sweep hover:text-brass-300">Journal</Link>
              <Icon.Diamond className="h-1.5 w-1.5 text-brass" />
              <span className="border border-brass/50 px-2.5 sm:px-3 py-0.5 sm:py-1 text-brass-300">{post.category}</span>
            </p>
          </Reveal>
          <MaskText
            className="mt-6 sm:mt-8 font-display text-3xl sm:text-5xl md:text-6xl leading-[1.05] font-medium tracking-tight"
            lines={splitTitle(post.title)}
          />
          <Reveal delay={350} className="mt-7 sm:mt-9 flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-2.5 sm:gap-y-3 border-t border-paper/10 pt-5 sm:pt-6">
            <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.22em] text-champagne/90 uppercase">By {post.author}</span>
            <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.22em] text-sage uppercase">{post.date}</span>
            <span className="flex items-center gap-2 font-mono text-[10px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.22em] text-sage uppercase">
              <Icon.Clock className="h-3.5 w-3.5 text-brass-300" />
              {post.readTime}
            </span>
          </Reveal>
        </div>
      </header>

      <div className="bg-paper">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Reveal className="-mt-0 pt-8 sm:pt-14">
            <div className="frame-corners relative overflow-hidden">
              <img src={post.image} alt={post.title} className="kenburns h-52 sm:h-72 md:h-[440px] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-pine-950/40 via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>

        {/* [Section 2] Full Article Text & Key Takeaways */}
        <article className="mx-auto max-w-3xl px-5 py-10 sm:py-16 sm:px-8">
          <Eyebrow>{post.category} · GKT Journal</Eyebrow>
          <div className="mt-6 sm:mt-8">
            {post.body.map((b, i) => (
              <Reveal key={i} delay={Math.min(i, 2) * 60}>
                <Block b={b} first={i === 0} />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 sm:mt-16">
            <div className="frame-corners bg-pine-950 p-6 sm:p-12 text-paper">
              <Eyebrow light>Key Takeaways</Eyebrow>
              <ul className="mt-5 sm:mt-7 space-y-4 sm:space-y-5">
                {post.takeaways.map((t, i) => (
                  <li key={t} className="flex gap-4 sm:gap-5">
                    <span className="font-display text-xl sm:text-2xl font-light text-brass-300 italic shrink-0">{String(i + 1).padStart(2, "0")}</span>
                    <span className="pt-0.5 sm:pt-1 text-xs sm:text-base leading-relaxed text-paper/85">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="mt-10 sm:mt-14 grid gap-px border border-ink/15 bg-ink/15 sm:grid-cols-2">
            {[
              { label: "Previous", p: prev, align: "items-start" },
              { label: "Next", p: next, align: "items-end" },
            ].map(({ label, p, align }) => (
              <Link key={label} to={`/blog/${p.slug}`} className={`group flex flex-col ${align} gap-1.5 sm:gap-2 bg-paper p-5 sm:p-7 transition-colors hover:bg-parchment`}>
                <span className="flex items-center gap-2 font-mono text-[9px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.28em] text-moss uppercase">
                  {label === "Previous" && <Icon.ArrowLeft className="h-3 w-3 text-brass" />}
                  {label}
                  {label === "Next" && <Icon.ArrowRight className="h-3 w-3 text-brass" />}
                </span>
                <span className="font-display text-base sm:text-lg leading-snug font-medium text-pine-950 transition-colors group-hover:text-brass">
                  {p.title}
                </span>
              </Link>
            ))}
          </Reveal>

          <Reveal className="mt-8 sm:mt-10 text-center">
            <Link to="/blog" className="u-sweep font-mono text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] sm:tracking-[0.28em] text-brass uppercase">
              ← Back to the Journal
            </Link>
          </Reveal>
        </article>
      </div>

      <HotlineBand title="Put these insights to work on your site." />
      {/* [Section 3] Footer Service Index */}
      <FooterServiceIndex />
    </>
  );
}
