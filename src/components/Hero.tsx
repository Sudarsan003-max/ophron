import { useEffect, useRef, useState } from "react";
import { ScrollReveal } from "./ui/animations";
import logoGold from "./logo-gold.png";

const MARQUEE_ITEMS = [
  "OPHRON FACILITIES — INTEGRATED FACILITY OPERATIONS",
  "OPHRON TECHNOLOGY — AI AUTOMATION & OPERATIONS SAAS",
  "COMMERCIAL INTELLIGENCE — LABOR & COST OPTIMIZATION",
  "OPHRON PEOPLE — WORKFORCE & COMPLIANCE MANAGEMENT",
  "HYGIENE & SANITATION — NEA LICENSED OPERATOR",
];

function useCount(target: number, duration = 1600, start = false) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const step = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);
  return v;
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setInView(true), { threshold: 0.1 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const yrs = useCount(20, 1600, inView);
  const contracts = useCount(140, 1800, inView);

  return (
    <section
      id="top"
      ref={ref}
      className="relative overflow-hidden pt-[104px] sm:pt-[112px]"
      style={{ background: "#EDE5DA", fontFamily: "inherit" }}
    >
      {/* ── TOP META STRIP ──────────────────────────────── */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 36px",
          borderBottom: "1px solid rgba(3,33,71,0.10)",
          fontSize: "10px",
          fontFamily: "'Courier New', monospace",
          letterSpacing: "0.20em",
          textTransform: "uppercase",
          color: "rgba(3,33,71,0.50)",
        }}
      >
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <span>[ OPHRON INFRASTRUCTURE PLATFORM ]</span>
          <span style={{ opacity: 0.35 }}>|</span>
          <span>[ NEA LICENSED &amp; BIZSAFE LEVEL 3 ]</span>
        </div>
        <span className="hidden sm:block">SINGAPORE — EST. 2020</span>
      </div>

      {/* ── MAIN HERO BODY ──────────────────────────────── */}
      <div
        style={{
          padding: "40px 36px 32px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
        className="hero-body"
      >
        <div style={{ maxWidth: "860px" }}>

          {/* HEADLINE */}
          <ScrollReveal variant="up" delay={80}>
            <h1
              style={{
                fontFamily: "'Georgia', 'Times New Roman', serif",
                fontSize: "clamp(48px, 6.5vw, 88px)",
                fontWeight: 700,
                lineHeight: 0.92,
                letterSpacing: "-0.025em",
                color: "#032147",
                margin: "0 0 24px 0",
              }}
            >
              One partner.
              <br />
              One ecosystem.
              <br />
              <span
                style={{
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "#B7A38B",
                  fontSize: "clamp(42px, 5.8vw, 80px)",
                }}
              >
                Better operations.
              </span>
            </h1>
          </ScrollReveal>

          {/* SUBHEADLINE */}
          <ScrollReveal variant="up" delay={160}>
            <p
              style={{
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: 1.65,
                color: "rgba(3,33,71,0.80)",
                marginBottom: "10px",
                maxWidth: "600px",
              }}
            >
              OPHRON unifies People, Hygiene, Facilities, Technology, and
              Commercial Intelligence into a{" "}
              <strong style={{ color: "#032147" }}>
                single operational platform
              </strong>{" "}
              — built for Singapore's hotels, restaurants, and hospitality groups.
            </p>
            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.7,
                color: "rgba(3,33,71,0.55)",
                marginBottom: "24px",
                maxWidth: "540px",
              }}
            >
              Instead of coordinating 5+ fragmented vendors, OPHRON gives you
              one accountable partner, one contract, and full operational
              visibility.
            </p>
          </ScrollReveal>

          {/* CTAs */}
          <ScrollReveal variant="up" delay={220}>
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              {/* Primary CTA */}
              <a
                href="#contact"
                className="hero-cta-primary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "#032147",
                  color: "#EDE5DA",
                  padding: "14px 24px 14px 22px",
                  borderRadius: "50px",
                  fontSize: "13px",
                  fontWeight: 600,
                  letterSpacing: "0.01em",
                  textDecoration: "none",
                  transition: "transform 0.22s, box-shadow 0.22s",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.transform = "translateY(-2px)";
                  el.style.boxShadow = "0 10px 28px rgba(3,33,71,0.30)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                }}
              >
                Discuss Your Operations
                <span
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    background: "#B7A38B",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#032147",
                    fontWeight: 800,
                    fontSize: "15px",
                  }}
                >
                  →
                </span>
              </a>

              {/* Secondary CTA */}
              <a
                href="#solutions"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  border: "1.5px solid rgba(3,33,71,0.22)",
                  color: "#032147",
                  padding: "14px 22px",
                  borderRadius: "50px",
                  fontSize: "13px",
                  fontWeight: 500,
                  textDecoration: "none",
                  background: "transparent",
                  transition: "background 0.2s, border-color 0.2s",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "rgba(3,33,71,0.06)";
                  el.style.borderColor = "rgba(3,33,71,0.40)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "transparent";
                  el.style.borderColor = "rgba(3,33,71,0.22)";
                }}
              >
                <span style={{ fontSize: "7px", opacity: 0.6 }}>◆</span>
                Explore Solutions
              </a>
            </div>
          </ScrollReveal>

          {/* TRUST BADGES */}
          <ScrollReveal variant="up" delay={300}>
            <div
              style={{
                display: "flex",
                gap: "20px",
                marginTop: "24px",
                paddingTop: "20px",
                borderTop: "1px solid rgba(3,33,71,0.10)",
                flexWrap: "wrap",
              }}
            >
              {[
                { label: "NEA Licensed", sub: "Cleaning Operator" },
                { label: "bizSAFE Level 3", sub: "WSH Council Certified" },
                { label: "140+ Contracts", sub: "Active SG Clients" },
              ].map((b) => (
                <div key={b.label} style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "12px", fontWeight: 700, color: "#032147", letterSpacing: "0.02em" }}>
                    {b.label}
                  </span>
                  <span
                    style={{
                      fontSize: "10px",
                      fontFamily: "'Courier New', monospace",
                      textTransform: "uppercase",
                      letterSpacing: "0.14em",
                      color: "rgba(3,33,71,0.45)",
                    }}
                  >
                    {b.sub}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* ── STATS STRIP ──────────────────────────────── */}
      <div
        style={{
          margin: "0 36px 20px",
          border: "1px solid rgba(3,33,71,0.12)",
          borderRadius: "14px",
          background: "rgba(255,255,255,0.50)",
          backdropFilter: "blur(12px)",
          padding: "18px 28px",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr) 1.3fr",
          gap: "20px",
          alignItems: "start",
          maxWidth: "1304px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        className="stats-grid"
      >
        <StatBlock value={`${yrs}+`} label="Yrs" sub="OPERATIONAL EXPERTISE" />
        <StatBlock value={`${contracts}+`} label="" sub="ACTIVE SG CONTRACTS" />
        <StatBlock value="bizSAFE 3" label="" sub="WSH COUNCIL CERTIFIED" />
        <StatBlock value="NEA" label=" Licensed" sub="SINGAPORE OPERATOR" />

        <div
          style={{
            borderLeft: "1px solid rgba(3,33,71,0.10)",
            paddingLeft: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          <div style={{ display: "flex", gap: "3px", alignItems: "center" }}>
            {"★★★★★".split("").map((s, i) => (
              <span key={i} style={{ color: "#B7A38B", fontSize: "11px" }}>{s}</span>
            ))}
            <span
              style={{
                fontSize: "10px",
                fontFamily: "'Courier New', monospace",
                color: "rgba(3,33,71,0.55)",
                marginLeft: "7px",
              }}
            >
              100% SLA
            </span>
          </div>
          <div style={{ fontSize: "12px", fontWeight: 700, color: "#032147", letterSpacing: "0.06em" }}>
            PAN PACIFIC · YOTEL · ATLAS
          </div>
          <div style={{ fontSize: "11px", color: "rgba(3,33,71,0.50)", lineHeight: 1.4 }}>
            Trusted by Singapore's top hospitality &amp; F&amp;B groups
          </div>
        </div>
      </div>

      {/* ── BOTTOM MARQUEE ──────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          borderTop: "1px solid rgba(3,33,71,0.12)",
          background: "#EDE5DA",
          overflow: "hidden",
        }}
      >
        <div
          className="marquee-track"
          style={{ display: "inline-flex", whiteSpace: "nowrap", padding: "12px 0" }}
        >
          {[...Array(3)].map((_, j) => (
            <div key={j} style={{ display: "inline-flex", alignItems: "center", gap: "40px", paddingRight: "40px" }}>
              {MARQUEE_ITEMS.map((item, i) => (
                <span
                  key={`${j}-${i}`}
                  style={{ display: "inline-flex", alignItems: "center", gap: "32px" }}
                >
                  <span
                    style={{
                      fontSize: "13px",
                      fontFamily: "'Courier New', monospace",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "rgba(3,33,71,0.75)",
                      fontWeight: 700,
                    }}
                  >
                    {item}
                  </span>
                  <img
                    src={logoGold}
                    alt=""
                    aria-hidden="true"
                    style={{ height: "20px", width: "auto", objectFit: "contain", opacity: 0.75, flexShrink: 0 }}
                  />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-body {
            padding: 32px 20px 24px !important;
          }
          .stats-grid {
            grid-template-columns: 1fr 1fr !important;
            margin: 0 24px 24px !important;
          }
          .stats-grid > div:last-child {
            border-left: none !important;
            padding-left: 0 !important;
            border-top: 1px solid rgba(3,33,71,0.10);
            padding-top: 16px;
            grid-column: 1 / -1;
          }
        }
        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

function StatBlock({ value, label, sub }: { value: string; label: string; sub: string }) {
  const accessibleText = `${value} ${label} - ${sub}`.trim();
  return (
    <div aria-label={accessibleText}>
      <div
        style={{
          fontSize: "clamp(26px, 3vw, 40px)",
          fontFamily: "'Georgia', serif",
          fontWeight: 700,
          color: "#032147",
          letterSpacing: "-0.02em",
          lineHeight: 1,
        }}
      >
        {value}
        {label && (
          <span style={{ fontSize: "55%", fontWeight: 400, marginLeft: "3px" }}>{label}</span>
        )}
      </div>
      <div
        style={{
          marginTop: "5px",
          fontSize: "9.5px",
          fontFamily: "'Courier New', monospace",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "rgba(3,33,71,0.45)",
        }}
      >
        {sub}
      </div>
    </div>
  );
}
