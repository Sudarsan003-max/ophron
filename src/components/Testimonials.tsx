import { SectionHead } from "./About";
import {
  MaskedHeadline,
  ScrollReveal,
  AnimatedCounter,
  TiltCard,
  CornerBrackets,
  ExpandRule,
} from "./ui/animations";

const items = [
  {
    quote: "OPHRON has been our trusted operational hygiene partner across our Singapore venues. Their SFA inspection readiness and nightly deep cleans give us 100% confidence.",
    name: "General Manager",
    role: "Pan Pacific Hotels & Resorts Singapore",
    initials: "PP",
    tag: "100% SFA Grade A",
    metricValue: 100,
    metricSuffix: "%",
  },
  {
    quote: "Managing kitchen stewarding, deep degreasing, and washroom restoration under a single OPHRON contract cut our operational overhead while raising venue presentation.",
    name: "Operations Director",
    role: "ATLAS Bar & Hospitality Group",
    initials: "AB",
    tag: "Multi-Venue SLA",
    metricValue: 20,
    metricSuffix: "+ Yrs",
  },
  {
    quote: "Quiet, uniformed WSQ teams that work seamlessly around our guest operating hours. Their NEA compliance logging and supervisor audits set the standard in Singapore.",
    name: "Facilities Head",
    role: "YOTEL Singapore Orchard",
    initials: "YS",
    tag: "Zero Downtime",
    metricValue: 99.8,
    metricSuffix: "%",
    metricDecimals: 1,
  },
];

export default function Testimonials() {
  return (
    <section id="why" className="relative py-28 bg-paper overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-5">
        <SectionHead n="005" label="Singapore Client Endorsements" />

        <div className="mt-12 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <MaskedHeadline
              as="h2"
              className="font-canela font-bold text-[38px] sm:text-[58px] lg:text-[76px] leading-[0.95] tracking-tight text-ink"
              staggerMs={130}
              lines={[
                <>
                  Endorsed by <span className="font-serif-i text-[#B7A38B]">Singapore's finest</span>
                </>,
                "hospitality leaders.",
              ]}
            />
          </div>
          <p className="lg:col-span-5 font-inter text-[15px] leading-relaxed text-ink/75 max-w-md lg:ml-auto">
            <ScrollReveal variant="left" delay={150}>
              140+ active Singapore contracts across hotels, Michelin dining, central kitchens, and commercial towers powered by OPHRON.
            </ScrollReveal>
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {items.map((t, i) => (
            <ScrollReveal key={t.role} variant="up" delay={i * 120}>
              <TiltCard
                maxTilt={6}
                className={`group relative rounded-[28px] p-7 lg:p-8 overflow-hidden flex flex-col justify-between h-full shadow-lg ${
                  i === 1 ? "bg-[#032147] text-[#EDE5DA] border-2 border-[#B7A38B]" : "bg-[#EDE5DA] border border-[#B7A38B]/30 text-[#032147]"
                }`}
              >
                <CornerBrackets color="#B7A38B" size={12} hoverSize={18} />
                <div className="flex items-center justify-between">
                  <div className="flex text-[14px] text-[#B7A38B]">★★★★★</div>
                  <span className={`text-[10px] font-mono uppercase tracking-[0.22em] px-2.5 py-1 rounded-full font-bold ${i === 1 ? "bg-[#B7A38B] text-[#032147]" : "bg-[#032147]/10 text-[#032147]"}`}>
                    {t.tag}
                  </span>
                </div>

                <div>
                  <div className="mt-4 font-canela text-5xl leading-none opacity-30 text-[#B7A38B]">“</div>
                  <blockquote className={`mt-1 font-inter text-[15px] leading-[1.6] ${i === 1 ? "text-[#EDE5DA]/90" : "text-[#032147]/85"}`}>
                    {t.quote}
                  </blockquote>
                </div>

                <div className={`mt-8 flex items-end justify-between gap-3 pt-5 border-t ${i === 1 ? "border-white/20" : "border-[#032147]/15"}`}>
                  <figcaption className="flex items-center gap-3">
                    <span className={`grid place-items-center h-11 w-11 rounded-full font-montserrat font-bold text-[12px] ${i === 1 ? "bg-[#B7A38B] text-[#032147]" : "bg-[#032147] text-[#EDE5DA]"}`}>
                      {t.initials}
                    </span>
                    <div>
                      <div className="text-[13.5px] font-montserrat font-bold">{t.name}</div>
                      <div className="text-[11px] font-inter opacity-75">{t.role}</div>
                    </div>
                  </figcaption>
                  <div className="text-right">
                    <div className="font-montserrat font-bold text-2xl tracking-tight text-[#B7A38B]">
                      <AnimatedCounter
                        value={t.metricValue}
                        suffix={t.metricSuffix}
                        decimals={t.metricDecimals || 0}
                      />
                    </div>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        <ExpandRule className="border-[#032147]/15 my-12" />

        {/* Stats strip */}
        <ScrollReveal variant="scale">
          <div className="rounded-3xl bg-[#032147] text-[#EDE5DA] p-8 grid grid-cols-2 md:grid-cols-4 gap-6 border border-[#B7A38B]/30 shadow-xl" style={{ background: "#032147", color: "#EDE5DA" }}>
            <div>
              <div className="font-montserrat font-bold text-3xl sm:text-4xl tracking-tight text-[#B7A38B]">
                <AnimatedCounter value={140} suffix="+" />
              </div>
              <div className="mt-2 text-[10px] font-mono uppercase tracking-[0.22em] opacity-80">Active SG Contracts</div>
            </div>
            <div>
              <div className="font-montserrat font-bold text-3xl sm:text-4xl tracking-tight text-[#B7A38B]">
                <AnimatedCounter value={20} suffix="+ Yrs" />
              </div>
              <div className="mt-2 text-[10px] font-mono uppercase tracking-[0.22em] opacity-80">Operational Expertise</div>
            </div>
            <div>
              <div className="font-montserrat font-bold text-3xl sm:text-4xl tracking-tight text-[#B7A38B]">
                NEA L3
              </div>
              <div className="mt-2 text-[10px] font-mono uppercase tracking-[0.22em] opacity-80">Licensed Operator</div>
            </div>
            <div>
              <div className="font-montserrat font-bold text-3xl sm:text-4xl tracking-tight text-[#B7A38B]">
                bizSAFE 3
              </div>
              <div className="mt-2 text-[10px] font-mono uppercase tracking-[0.22em] opacity-80">Safety Certified</div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
