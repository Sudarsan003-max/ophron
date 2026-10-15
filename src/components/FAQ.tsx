import { SectionHead } from "./About";
import { ScrollReveal } from "./ui/animations";

const faqs = [
  {
    q: "What services does OPHRON provide?",
    a: "OPHRON provides hospitality manpower (dishwashers, kitchen stewards, cleaners, events crew), commercial cleaning and hygiene services, facility maintenance coordination and hospitality technology solutions for Singapore businesses.",
  },
  {
    q: "Can we start with just one service, like dishwashing or cleaning?",
    a: "Yes. Most clients start with a single, immediate operational need—such as reliable dishwashers for a busy outlet or after-hours restaurant cleaning. You can add more services whenever you are ready.",
  },
  {
    q: "Can OPHRON replace multiple existing vendors?",
    a: "Yes. If you are currently coordinating separate vendors for staffing, cleaning, pest control or maintenance, OPHRON can consolidate those services under a single point of contact, one invoice and consistent standards.",
  },
  {
    q: "Can you work alongside our current suppliers?",
    a: "Yes. We regularly work alongside existing in-house teams and preferred vendors. We fit into the areas where you need additional support or better reliability.",
  },
  {
    q: "Is OPHRON licensed and compliant in Singapore?",
    a: "Yes. We operate fully in compliance with Singapore regulations, including NEA cleaning licensing standards, Ministry of Manpower (MOM) employment guidelines and workplace safety protocols.",
  },
  {
    q: "How quickly can OPHRON deploy staff or start services?",
    a: "Depending on the scope and requirements, we can often deploy staff or begin initial services within 3 to 7 working days following a site review and confirmation.",
  },
  {
    q: "How do you ensure service quality and consistency?",
    a: "Every deployment includes briefed personnel, clear operating checklists, regular site inspections and a designated operations manager who is directly reachable by phone and messaging.",
  },
  {
    q: "What does a site assessment involve?",
    a: "A site assessment is a straightforward 30-minute walkthrough of your premises. We look at your operational volume, layout, current challenges and service hours so we can give you an accurate, no-obligation proposal.",
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
                These are the questions we hear most from business owners, general managers and operations teams. If you need something specific, our Singapore team is ready to help.
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
