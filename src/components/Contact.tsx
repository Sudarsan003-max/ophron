import { useState } from "react";
import { SectionHead } from "./About";
import {
  MaskedHeadline,
  ScrollReveal,
  TiltCard,
  CornerBrackets,
} from "./ui/animations";

const FORM_ENDPOINT = (import.meta.env.VITE_FORM_ENDPOINT as string) || "https://script.google.com/a/macros/ophronsystems.com/s/AKfycbzFrV2s1-DpgBT5hlHoMWUwdeU1ESSwS6CoSyRPW7AexgCZ3TKDbQfRxrfxvtNiisI/exec";

// Sanitisation helper against formula injection and excessive length (B-002)
const sanitiseInput = (str: string, maxLen = 250): string => {
  if (!str) return "";
  return str.replace(/^[=+\-@\t\r]/, "").slice(0, maxLen).trim();
};

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [agreedToPdpa, setAgreedToPdpa] = useState(true);
  const [honeypot, setHoneypot] = useState("");
  const [form, setForm] = useState({
    name: "",
    company: "",
    role: "",
    email: "",
    phone: "",
    service: "Discuss All Services",
    notes: ""
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Bot detection via honeypot (R-001)
    if (honeypot) {
      console.warn("Spam bot detected via honeypot trap.");
      setSent(true);
      return;
    }

    // Client-side strict validation (B-002)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[0-9\s\-()]{7,20}$/;

    if (!form.name.trim() || form.name.length < 2) {
      setError("Please provide your full name (minimum 2 characters).");
      return;
    }

    if (!emailRegex.test(form.email.trim())) {
      setError("Please enter a valid business email address.");
      return;
    }

    if (!phoneRegex.test(form.phone.trim())) {
      setError("Please enter a valid contact phone number.");
      return;
    }

    if (!form.company.trim()) {
      setError("Please specify your company or establishment name.");
      return;
    }

    if (!agreedToPdpa) {
      setError("Please accept the PDPA consent statement to proceed.");
      return;
    }

    setSubmitting(true);

    const sanitisedPayload = {
      name: sanitiseInput(form.name, 100),
      company: sanitiseInput(form.company, 120),
      role: sanitiseInput(form.role, 80),
      email: sanitiseInput(form.email, 120),
      phone: sanitiseInput(form.phone, 30),
      service: sanitiseInput(form.service, 150),
      notes: sanitiseInput(form.notes, 1000),
      submittedAt: new Date().toISOString(),
      nonce: Math.random().toString(36).substring(2, 15)
    };

    try {
      // 1. If running inside WordPress theme, submit directly to WordPress AJAX & MySQL
      const wpData = (window as unknown as { ophronData?: { ajaxUrl: string; nonce: string } })?.ophronData;
      if (wpData?.ajaxUrl) {
        const formData = new FormData();
        formData.append("action", "ophron_submit_contact");
        formData.append("security", wpData.nonce);
        formData.append("name", sanitisedPayload.name);
        formData.append("company", sanitisedPayload.company);
        formData.append("role", sanitisedPayload.role);
        formData.append("email", sanitisedPayload.email);
        formData.append("phone", sanitisedPayload.phone);
        formData.append("service", sanitisedPayload.service);
        formData.append("notes", sanitisedPayload.notes);

        const wpRes = await fetch(wpData.ajaxUrl, {
          method: "POST",
          body: formData,
        });
        const wpJson = await wpRes.json();
        if (!wpJson.success) {
          throw new Error(wpJson.data?.message || "WordPress database submission failed");
        }
      } else {
        // 2. Otherwise try Hostinger MySQL PHP Endpoint (/api/contact.php)
        let saved = false;
        try {
          const apiRes = await fetch("/api/contact.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(sanitisedPayload),
          });
          if (apiRes.ok) {
            saved = true;
          }
        } catch {
          // Fallback if running on static dev server without PHP
        }

        // 3. Fallback to webhook if /api/contact.php is not yet set up
        if (!saved && FORM_ENDPOINT) {
          await fetch(FORM_ENDPOINT, {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "text/plain" },
            body: JSON.stringify(sanitisedPayload),
          });
        }
      }
      setSent(true);
    } catch (err) {
      console.error("Form submission error:", err);
      setError("Submission encountered a network issue. Please call +65 9295 1155 directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-16 bg-[#032147] overflow-hidden" style={{ background: "#032147", color: "#EDE5DA" }}>
      <div className="absolute -top-20 -right-20 h-[420px] w-[420px] blob bg-[#B7A38B]/20 opacity-90 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-10 -left-20 h-[260px] w-[260px] rounded-full bg-[#B7A38B]/10 blur-[80px] pointer-events-none" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1400px] px-5">
        <SectionHead n="012" label="Contact & Singapore Operations" light />

        <div className="mt-8 grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Singapore Channels & Details */}
          <div className="lg:col-span-6">
            <MaskedHeadline
              as="h2"
              className="font-canela font-bold text-[38px] sm:text-[56px] lg:text-[76px] leading-[0.92] tracking-tight text-white"
              staggerMs={130}
              lines={[
                <>
                  Power your <span className="font-serif-i italic text-[#B7A38B]">hospitality</span>
                </>,
                "operations",
                <span key="eff" className="text-[#B7A38B]">effortlessly.</span>,
              ]}
            />
            <ScrollReveal variant="left" delay={150}>
              <p className="mt-4 font-inter max-w-md text-[15px] leading-relaxed text-[#EDE5DA]/85">
                Partner with OPHRON to unify People, Hygiene, Facilities, Technology, and Commercial Intelligence under a single strategic platform agreement across Singapore and internationally.
              </p>
            </ScrollReveal>

            <ScrollReveal variant="up" delay={200}>
              <div className="mt-6 space-y-1 border-t border-white/10">
                {[
                  { k: "Singapore Operational Audit", v: "Complimentary site review of manpower, hygiene & facility SLA compliance" },
                  { k: "Rapid 1-Hour SLA Response", v: "Site supervisor dispatched within 48h with formal scope the same week" },
                  { k: "Single Operating Agreement", v: "Unified management across all 5 business pillars" },
                ].map((b) => (
                  <div key={b.k} className="group flex items-center justify-between py-3.5 border-b border-white/10">
                    <div className="flex items-center gap-4">
                      <span className="grid place-items-center h-8 w-8 rounded-full bg-[#B7A38B] text-[#032147] text-[11px] font-bold" aria-hidden="true">✓</span>
                      <div>
                        <div className="text-[14.5px] font-montserrat font-semibold text-white">{b.k}</div>
                        <div className="text-[12px] font-inter text-[#EDE5DA]/70">{b.v}</div>
                      </div>
                    </div>
                    <span className="text-[#B7A38B] opacity-60 group-hover:opacity-100 transition" aria-hidden="true">↗</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Contact Details Grid (Generic inboxes, R-007 compliant) */}
            <div className="mt-5 grid sm:grid-cols-2 gap-3.5">
              <ScrollReveal variant="up" delay={250}>
                <TiltCard maxTilt={5} className="rounded-2xl border border-white/10 bg-white/5 p-4 h-full">
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#B7A38B] font-bold">Phone Lines / Hotline</div>
                  <div className="mt-1 flex flex-col gap-0.5">
                    <a href="tel:+6592951155" className="text-[15px] font-montserrat font-bold text-white hover:text-[#B7A38B] transition" aria-label="Call primary hotline +65 9295 1155">
                      +65 9295 1155
                    </a>
                    <a href="tel:+6596466300" className="text-[13px] font-montserrat font-medium text-[#EDE5DA]/75 hover:text-[#B7A38B] transition" aria-label="Call secondary line +65 9646 6300">
                      +65 9646 6300 (Operations Desk)
                    </a>
                  </div>
                </TiltCard>
              </ScrollReveal>

              <ScrollReveal variant="up" delay={300}>
                <TiltCard maxTilt={5} className="rounded-2xl border border-white/10 bg-white/5 p-4 h-full">
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#B7A38B] font-bold">Email Contacts</div>
                  <div className="mt-1 flex flex-col gap-0.5">
                    <a href="mailto:admin@ophronsystems.com" className="text-[13px] font-inter font-semibold text-white hover:text-[#B7A38B] transition break-all" aria-label="Email Admin at admin@ophronsystems.com">
                      admin@ophronsystems.com
                    </a>
                    <a href="mailto:operations@ophronsystems.com" className="text-[12px] font-inter font-medium text-[#EDE5DA]/70 hover:text-[#B7A38B] transition break-all" aria-label="Email Operations at operations@ophronsystems.com">
                      operations@ophronsystems.com
                    </a>
                  </div>
                </TiltCard>
              </ScrollReveal>

              <ScrollReveal variant="up" delay={350}>
                <TiltCard maxTilt={5} className="rounded-2xl border border-white/10 bg-white/5 p-4 h-full">
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#B7A38B] font-bold">Singapore Office</div>
                  <address className="mt-1 text-[12.5px] font-inter text-[#EDE5DA]/90 leading-snug not-italic">
                    26 Sin Ming Lane, #05-124 Midview City, Singapore 573971
                  </address>
                </TiltCard>
              </ScrollReveal>

              <ScrollReveal variant="up" delay={400}>
                <TiltCard maxTilt={5} className="rounded-2xl border border-white/10 bg-white/5 p-4 h-full">
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#B7A38B] font-bold">Operating Hours</div>
                  <div className="mt-1 text-[12px] font-inter text-[#EDE5DA]/90 leading-tight space-y-0.5">
                    <div>Mon – Sun: 10:00 AM – 10:00 PM</div>
                    <div className="text-[11px] text-[#EDE5DA]/60">Break: 3:00 PM – 5:00 PM · Flexible 24/7 shifts</div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            </div>
          </div>

          {/* Right Column: Interactive Quote / Audit Form */}
          <div className="lg:col-span-6">
            <ScrollReveal variant="scale" delay={150}>
              <form
                onSubmit={handleSubmit}
                className="relative rounded-[28px] bg-[#EDE5DA] text-[#032147] p-6 sm:p-7 border border-[#B7A38B]/40 shadow-2xl overflow-hidden"
                style={{ background: "#EDE5DA", color: "#032147" }}
                noValidate
              >
                <CornerBrackets color="#B7A38B" size={14} hoverSize={20} />
                <div className="flex items-center justify-between">
                  <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#032147] font-bold">[ Site Assessment Request ]</div>
                </div>

                {/* Honeypot hidden field for anti-bot protection (R-001) */}
                <div className="hidden" aria-hidden="true" style={{ display: "none" }}>
                  <label htmlFor="website_hp">Do not fill this</label>
                  <input
                    id="website_hp"
                    type="text"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {sent ? (
                  <div className="mt-8 text-center py-10" role="status" aria-live="polite">
                    <div className="mx-auto grid place-items-center h-16 w-16 rounded-full bg-[#B7A38B] text-[#032147] text-2xl font-bold">✓</div>
                    <h3 className="mt-6 font-canela text-3xl font-bold tracking-tight">Audit Request Received.</h3>
                    <p className="mt-3 font-inter opacity-85 text-[14px] max-w-sm mx-auto">
                      Thank you {form.name || "there"} — our Singapore operational supervisor will call{" "}
                      {form.phone || "you"} within one business hour to arrange your complimentary site assessment at {form.company || "your company"}.
                    </p>
                    <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-[#B7A38B] font-bold">
                      Urgent? Call +65 9295 1155
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="mt-4 font-canela text-3xl sm:text-4xl font-bold tracking-tight">
                      Let's look at <span className="font-serif-i italic text-[#B7A38B]">your operation.</span>
                    </h3>

                    {error && (
                      <div className="mt-4 p-3 rounded-xl bg-red-100/90 border border-red-300 text-red-900 text-xs font-inter font-semibold" role="alert">
                        {error}
                      </div>
                    )}

                    <div className="mt-5 grid sm:grid-cols-2 gap-3.5">
                      <Field label="Full Name *" value={form.name} onChange={(v) => setForm({ ...form, name: v })} placeholder="Tan Wei Ming" />
                      <Field label="Phone Number *" type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} placeholder="+65 9XXX XXXX" />
                      <Field label="Work Email *" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} placeholder="weiming@hotelgroup.com" />
                      <Field label="Company *" value={form.company} onChange={(v) => setForm({ ...form, company: v })} placeholder="Grand Park Hotel Group" />
                      
                      <div className="sm:col-span-2">
                        <label className="text-[10px] font-mono tracking-[0.22em] uppercase text-[#032147]/70 font-bold">Primary Service Required</label>
                        <select
                          value={form.service}
                          onChange={(e) => setForm({ ...form, service: e.target.value })}
                          className="mt-2 w-full rounded-2xl bg-white/70 border border-[#032147]/15 px-4 py-3 text-[13.5px] font-inter text-[#032147] focus:outline-none focus:border-[#032147]"
                          aria-label="Select primary service required"
                        >
                          <optgroup label="── 5 Master Platform Pillars ──">
                            <option value="OPHRON People (Workforce & Stewarding)">01. OPHRON People (Manpower, Stewarding, Kitchen Helpers, Housekeeping)</option>
                            <option value="OPHRON Hygiene (Deep Clean & Compliance)">02. OPHRON Hygiene (Kitchen Deep Clean, Duct Degreasing, IAQ, Disinfection)</option>
                            <option value="OPHRON Facility Services (IFM Lite)">03. OPHRON Facility Services (IFM Lite, Pest Control, Waste, Repairs)</option>
                            <option value="OPHRON Technology (SaaS & AI)">04. OPHRON Technology (Restaurant & Hotel Tech, AI, Portals, Dashboards)</option>
                            <option value="Commercial Intelligence (Cost & Margin)">05. Commercial Intelligence (Cost Reduction, Labor & Revenue Optimization)</option>
                          </optgroup>
                          <optgroup label="── Specialized Operational Services ──">
                            <option value="Commercial Cleaning">Commercial Cleaning (Retail, Lobby, Mixed-Use)</option>
                            <option value="Disinfecting Services">Disinfecting Services (NEA Fogging & Electrostatic)</option>
                            <option value="Office Cleaning">Office Cleaning (Corporate & Scheduled Janitorial)</option>
                            <option value="Industrial Cleaning">Industrial Cleaning (Warehouses & Production Plants)</option>
                            <option value="Restaurant & Kitchen Deep Cleaning">Restaurant & Kitchen Deep Cleaning (SFA Compliance)</option>
                            <option value="Restroom & Toilet Deep Cleaning">Toilet Deep Cleaning (Descaling, Grout & Odour Elimination)</option>
                          </optgroup>
                          <optgroup label="── Multi-Vertical / Enterprise ──">
                            <option value="Full 5-Pillar Master Platform Agreement">Unified 5-Pillar Master Platform Agreement (Multi-Venue)</option>
                          </optgroup>
                        </select>
                      </div>
                    </div>

                    <div className="mt-4">
                      <label className="text-[10px] font-mono tracking-[0.22em] uppercase text-[#032147]/70 font-bold">About your site / special requirements</label>
                      <textarea
                        value={form.notes}
                        onChange={(e) => setForm({ ...form, notes: e.target.value })}
                        rows={3}
                        maxLength={1000}
                        placeholder="Premises type, square footage, operating hours, special requirements…"
                        className="mt-2 w-full rounded-2xl bg-white/70 border border-[#032147]/15 px-4 py-3 text-[13.5px] placeholder:opacity-50 text-[#032147] focus:outline-none focus:border-[#032147] transition resize-none"
                      />
                    </div>

                    {/* PDPA Consent Checkbox (B-007) */}
                    <div className="mt-4 flex items-start gap-2.5">
                      <input
                        id="pdpa-consent"
                        type="checkbox"
                        checked={agreedToPdpa}
                        onChange={(e) => setAgreedToPdpa(e.target.checked)}
                        className="mt-1 h-4 w-4 rounded border-[#032147]/30 text-[#032147] focus:ring-[#032147] cursor-pointer"
                      />
                      <label htmlFor="pdpa-consent" className="text-[11.5px] font-inter leading-tight text-[#032147]/80 cursor-pointer">
                        I agree to OPHRON collecting my contact details in accordance with Singapore's Personal Data Protection Act (PDPA) to arrange a site assessment.
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="group/btn mt-6 relative inline-flex w-full items-center justify-between rounded-full bg-[#032147] text-[#EDE5DA] pl-6 pr-1.5 py-1.5 text-[13.5px] font-montserrat font-bold overflow-hidden disabled:opacity-50 shadow-lg shadow-[#032147]/20 hover:scale-[1.01] transition-transform cursor-pointer"
                      style={{ background: "#032147", color: "#EDE5DA" }}
                    >
                      <span className="relative">{submitting ? "Submitting Request..." : "Discuss Your Operations"}</span>
                      <span className="relative grid place-items-center h-10 w-10 rounded-full bg-[#B7A38B] text-[#032147] transition-transform group-hover/btn:rotate-45 font-bold" aria-hidden="true">
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 17 17 7M9 7h8v8" />
                        </svg>
                      </span>
                    </button>

                    <p className="mt-4 text-[10px] font-mono tracking-[0.18em] uppercase text-center text-[#032147]/70 font-semibold">
                      NEA Licensed &amp; bizSAFE Level 3 · Free Assessment · 1-Hour Response
                    </p>
                  </>
                )}
              </form>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, value, onChange, placeholder, type = "text",
}: { label: string; value: string; onChange: (v: string) => void; placeholder?: string; type?: string; }) {
  return (
    <div>
      <label className="text-[10px] font-mono tracking-[0.22em] uppercase text-[#032147]/70 font-bold">{label}</label>
      <input
        required
        type={type}
        value={value}
        maxLength={120}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-full bg-white/70 border border-[#032147]/15 px-4 py-2.5 text-[13.5px] placeholder:opacity-45 text-[#032147] focus:outline-none focus:border-[#032147] transition"
      />
    </div>
  );
}
