import { SectionHead } from "./About";
import { ScrollReveal } from "./ui/animations";
import WhoWeServe from "./WhoWeServe";

const steps = [
  {
    n: "01",
    title: "Understand",
    desc: "We review your current operational setup — staffing, cleaning, facilities, technology, and vendor landscape. No assumptions.",
    outcome: "Operational assessment completed",
  },
  {
    n: "02",
    title: "Design",
    desc: "We identify which combination of OPHRON capabilities closes your specific gaps, with clear scope, timelines, and accountability.",
    outcome: "Custom solution scoped",
  },
  {
    n: "03",
    title: "Deploy",
    desc: "We implement with dedicated on-site leads, documented procedures, and clean handover. Operations continue without disruption.",
    outcome: "Live within agreed timeline",
  },
  {
    n: "04",
    title: "Improve",
    desc: "We monitor performance against defined SLAs, surface operational intelligence, and continuously refine the engagement.",
    outcome: "Ongoing SLA visibility",
  },
];

export default function HowItWorks() {
  return (
    <>
      {/* ─── §007 HOW IT WORKS ──────────────────────────────── */}
      <section
        id="how-it-works"
        className="relative py-16 overflow-hidden"
        style={{ background: "#EDE5DA" }}
      >
        <div className="mx-auto max-w-[1400px] px-5">
          <SectionHead n="007" label="How It Works" />

          <div className="grid lg:grid-cols-12 gap-10 items-end mt-8 mb-8">
            <div className="lg:col-span-6">
              <ScrollReveal variant="up" delay={80}>
                <h2
                  style={{
                    fontFamily: "'Georgia', serif",
                    fontSize: "clamp(36px, 4.5vw, 64px)",
                    fontWeight: 700,
                    lineHeight: 0.95,
                    letterSpacing: "-0.025em",
                    color: "#032147",
                    margin: 0,
                  }}
                >
                  Simple to engage.
                  <br />
                  <span style={{ color: "#B7A38B", fontStyle: "italic", fontWeight: 400 }}>
                    Structured to perform.
                  </span>
                </h2>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-6">
              <ScrollReveal variant="left" delay={150}>
                <p style={{ fontSize: "15px", lineHeight: 1.75, color: "rgba(3,33,71,0.70)" }}>
                  Engaging OPHRON is designed to feel like starting a business conversation — not a procurement project. Here is how we move from first contact to operational delivery.
                </p>
              </ScrollReveal>
            </div>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <ScrollReveal key={s.n} variant="up" delay={i * 90}>
                <div
                  style={{
                    border: "1px solid rgba(3,33,71,0.12)",
                    borderRadius: "16px",
                    padding: "20px 20px",
                    background: "rgba(255,255,255,0.50)",
                    backdropFilter: "blur(8px)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <span
                      style={{
                        fontSize: "26px",
                        fontFamily: "'Georgia', serif",
                        fontWeight: 700,
                        color: "rgba(3,33,71,0.12)",
                        lineHeight: 1,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {s.n}
                    </span>
                    <span
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        background: "#032147",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#B7A38B",
                        fontSize: "13px",
                      }}
                    >
                      →
                    </span>
                  </div>

                  <div>
                    <div
                      style={{
                        fontSize: "17px",
                        fontWeight: 700,
                        color: "#032147",
                        marginBottom: "6px",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {s.title}
                    </div>
                    <p style={{ fontSize: "13px", lineHeight: 1.6, color: "rgba(3,33,71,0.65)", margin: 0 }}>
                      {s.desc}
                    </p>
                  </div>

                  <div
                    style={{
                      marginTop: "auto",
                      paddingTop: "12px",
                      borderTop: "1px solid rgba(3,33,71,0.08)",
                      fontSize: "10px",
                      fontFamily: "'Courier New', monospace",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#B7A38B",
                    }}
                  >
                    ✓ {s.outcome}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal variant="up" delay={200}>
            <div style={{ textAlign: "center", marginTop: "28px" }}>
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
                Start the Conversation
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
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── §008 WHO WE SERVE (3D Continuous Flow & Interactive Ribbon) ── */}
      <WhoWeServe />
    </>
  );
}
