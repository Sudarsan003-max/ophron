import { SectionHead } from "./About";
import { ScrollReveal } from "./ui/animations";

const faqs = [
  {
    q: "What services does OPHRON provide?",
    a: "OPHRON covers five areas: People & Manpower, Cleaning & Hygiene, Facility Services, Hospitality Technology, and Operational Intelligence. Clients typically engage us across two or more areas.",
  },
  {
    q: "Can OPHRON provide multiple services under one contract?",
    a: "Yes. Many clients consolidate multiple services under a single OPHRON agreement — one contract, one point of contact, one SLA.",
  },
  {
    q: "Can OPHRON work alongside our existing vendors?",
    a: "Yes. We can complement your current arrangements. Some clients start with one service and expand. We never push for unnecessary consolidation.",
  },
  {
    q: "Is OPHRON only a manpower or cleaning company?",
    a: "No. OPHRON is an operational infrastructure platform. Manpower and cleaning are part of a broader ecosystem that includes facilities, technology, and operational intelligence.",
  },
  {
    q: "Can you support multiple locations?",
    a: "Yes. OPHRON is structured to support multi-location hospitality and F&B businesses across Singapore. Speak with us about your specific footprint.",
  },
  {
    q: "What happens after I enquire?",
    a: "You will hear from us within one business day. We will arrange an initial operational review — no pitch decks, no pressure. Just a clear conversation about what you're managing and where we can help.",
  },
  {
    q: "How do you maintain service quality?",
    a: "Through documented SOPs, supervisor-led deployment, digital SLA tracking, and regular operational reviews. You will always have visibility into performance.",
  },
  {
    q: "How quickly can we start?",
    a: "Depends on scope. For focused engagements, we can typically be operational within 2–4 weeks of agreement. We will confirm a realistic timeline during the review.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="relative py-10 sm:py-16 overflow-hidden"
      style={{ background: "#EDE5DA" }}
      aria-label="Frequently Asked Questions"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-5">
        <SectionHead n="009" label="Frequently Asked" />

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start mt-6 sm:mt-8">
          <div className="lg:col-span-4">
            <ScrollReveal variant="up" delay={80}>
              <h2
                style={{
                  fontFamily: "'Georgia', serif",
                  fontSize: "clamp(32px, 4vw, 52px)",
                  fontWeight: 700,
                  lineHeight: 0.95,
                  letterSpacing: "-0.025em",
                  color: "#032147",
                  margin: "0 0 16px 0",
                }}
              >
                Common questions,
                <br />
                <span style={{ color: "#B7A38B", fontStyle: "italic", fontWeight: 400 }}>
                  direct answers.
                </span>
              </h2>
              <p style={{ fontSize: "14px", lineHeight: 1.65, color: "rgba(3,33,71,0.60)" }}>
                These are the questions we hear most from operations teams, GMs, and procurement managers. We answer them here so you can evaluate OPHRON without a sales call.
              </p>
              <div style={{ marginTop: "20px" }}>
                <a
                  href="#contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "#032147",
                    color: "#EDE5DA",
                    padding: "12px 20px",
                    borderRadius: "50px",
                    fontSize: "13px",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  Ask a specific question →
                </a>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-8">
            <div>
              {faqs.map((item, i) => (
                <ScrollReveal key={i} variant="up" delay={i * 60}>
                  <details
                    style={{
                      borderBottom: "1px solid rgba(3,33,71,0.10)",
                      padding: "14px 0",
                    }}
                  >
                    <summary
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        cursor: "pointer",
                        listStyle: "none",
                        gap: "16px",
                        fontSize: "15px",
                        fontWeight: 600,
                        color: "#032147",
                        lineHeight: 1.45,
                      }}
                    >
                      <span>{item.q}</span>
                      <span
                        style={{
                          color: "#B7A38B",
                          fontSize: "20px",
                          fontWeight: 300,
                          lineHeight: 1,
                          flexShrink: 0,
                          marginTop: "1px",
                        }}
                      >
                        +
                      </span>
                    </summary>
                    <p
                      style={{
                        marginTop: "12px",
                        fontSize: "14px",
                        lineHeight: 1.75,
                        color: "rgba(3,33,71,0.65)",
                      }}
                    >
                      {item.a}
                    </p>
                  </details>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
