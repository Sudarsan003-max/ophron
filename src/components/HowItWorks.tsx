import { SectionHead } from "./About";
import { ScrollReveal } from "./ui/animations";
import WhoWeServe from "./WhoWeServe";

const steps = [
  {
    n: "01",
    title: "Tell us what you need",
    desc: "Share your current operational challenges—whether you need dishwashing staff, kitchen stewarding support, commercial cleaning or multi-service operational coordination.",
    outcome: "Operational assessment completed",
  },
  {
    n: "02",
    title: "We review your site",
    desc: "We look at your operating hours, layout, volume and specific requirements so we can propose a plan that fits your day-to-day reality.",
    outcome: "Custom solution scoped",
  },
  {
    n: "03",
    title: "You receive a clear proposal",
    desc: "We provide clear scope, transparent pricing, agreed schedules and assigned points of contact. No hidden assumptions.",
    outcome: "Transparent plan agreed",
  },
  {
    n: "04",
    title: "We get to work",
    desc: "Our team deploys with briefed staff, standard operating procedures and active supervision. Operations start smoothly without disrupting your business.",
    outcome: "Seamless operational delivery",
  },
];

export default function HowItWorks() {
  return (
    <>
      {/* ─── §007 HOW IT WORKS ──────────────────────────────── */}
      <section
        id="how-it-works"
        className="relative py-10 sm:py-16 overflow-hidden"
        style={{ background: "#EDE5DA" }}
      >
        <div className="mx-auto max-w-[1400px] px-4 sm:px-5">
          <SectionHead n="007" label="How It Works" />

          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-end mt-6 sm:mt-8 mb-6 sm:mb-8">
            <div className="lg:col-span-6">
              <ScrollReveal variant="up" delay={80}>
                <h2
                  style={{
                    fontFamily: "'Georgia', serif",
                    fontSize: "clamp(32px, 4.5vw, 64px)",
                    fontWeight: 700,
                    lineHeight: 0.95,
                    letterSpacing: "-0.025em",
                    color: "#032147",
                    margin: 0,
                  }}
                >
                  Straightforward from the
                  <br />
                  <span style={{ color: "#B7A38B", fontStyle: "italic", fontWeight: 400 }}>
                    first conversation.
                  </span>
                </h2>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-6">
              <ScrollReveal variant="left" delay={150}>
                <p style={{ fontSize: "14px", lineHeight: 1.7, color: "rgba(3,33,71,0.70)", margin: 0 }}>
                  Engaging OPHRON is designed to be simple, transparent and practical. Here is how we start working together.
                </p>
              </ScrollReveal>
            </div>
          </div>

          {/* Steps: 2x2 grid on mobile and tablet, 4-col on desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {steps.map((s, i) => (
              <ScrollReveal key={s.n} variant="up" delay={i * 80}>
                <div
                  style={{
                    border: "1px solid rgba(3,33,71,0.12)",
                    borderRadius: "16px",
                    padding: "16px 14px sm:20px",
                    background: "rgba(255,255,255,0.50)",
                    backdropFilter: "blur(8px)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                  className="p-3.5 sm:p-5"
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <span
                      style={{
                        fontSize: "22px",
                        fontFamily: "'Georgia', serif",
                        fontWeight: 700,
                        color: "rgba(3,33,71,0.15)",
                        lineHeight: 1,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {s.n}
                    </span>
                    <span
                      style={{
                        width: "26px",
                        height: "26px",
                        borderRadius: "50%",
                        background: "#032147",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#B7A38B",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    >
                      →
                    </span>
                  </div>

                  <div>
                    <div
                      style={{
                        fontSize: "15px",
                        fontWeight: 700,
                        color: "#032147",
                        marginBottom: "4px",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {s.title}
                    </div>
                    <p style={{ fontSize: "12px", lineHeight: 1.5, color: "rgba(3,33,71,0.70)", margin: 0 }}>
                      {s.desc}
                    </p>
                  </div>

                  <div
                    style={{
                      marginTop: "auto",
                      paddingTop: "8px",
                      borderTop: "1px solid rgba(3,33,71,0.08)",
                      fontSize: "9.5px",
                      fontFamily: "'Courier New', monospace",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#B7A38B",
                      fontWeight: 600,
                    }}
                  >
                    ✓ {s.outcome}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal variant="up" delay={200}>
            <div style={{ textAlign: "center", marginTop: "32px", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
              <p style={{ fontSize: "14px", fontWeight: 600, color: "#032147", margin: 0 }}>
                Ready to simplify your operations?
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
                <a
                  href="#contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    background: "#032147",
                    color: "#EDE5DA",
                    padding: "13px 26px",
                    borderRadius: "50px",
                    fontSize: "13px",
                    fontWeight: 600,
                    textDecoration: "none",
                    transition: "transform 0.2s, box-shadow 0.2s",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.transform = "translateY(-2px)";
                    el.style.boxShadow = "0 10px 24px rgba(3,33,71,0.25)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "none";
                  }}
                >
                  Request a Site Assessment
                  <span
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      background: "#B7A38B",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#032147",
                      fontWeight: 800,
                      fontSize: "14px",
                    }}
                  >
                    →
                  </span>
                </a>
                <a
                  href="#contact"
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#032147",
                    textDecoration: "underline",
                    textUnderlineOffset: "4px",
                  }}
                >
                  Talk to our Singapore team →
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── §008 WHO WE SERVE (3D Continuous Flow & Interactive Ribbon) ── */}
      <WhoWeServe />
    </>
  );
}
