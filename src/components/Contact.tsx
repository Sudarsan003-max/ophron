import { useState } from "react";
import { SectionHead } from "./About";
import {
  MaskedHeadline,
  ScrollReveal,
  TiltCard,
  CornerBrackets,
} from "./ui/animations";

const FORM_ENDPOINT = "https://script.google.com/a/macros/ophronsystems.com/s/AKfycbzFrV2s1-DpgBT5hlHoMWUwdeU1ESSwS6CoSyRPW7AexgCZ3TKDbQfRxrfxvtNiisI/exec";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    establishment: "",
    service: "Commercial Cleaning",
    stage: "Full-Platform",
    notes: ""
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    if (FORM_ENDPOINT) {
      try {
        await fetch(FORM_ENDPOINT, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "text/plain"
          },
          body: JSON.stringify({
            token: "ophron_secure_token_2026_xyz",
            ...form,
            submittedAt: new Date().toISOString()
          }),
        });
      } catch (error) {
        console.error("Error submitting form to endpoint:", error);
      }
    }

    setSubmitting(false);
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-28 bg-[#032147] overflow-hidden" style={{ background: "#032147", color: "#EDE5DA" }}>
      <div className="absolute -top-20 -right-20 h-[420px] w-[420px] blob bg-[#B7A38B]/20 opacity-90" />
      <div className="absolute bottom-10 -left-20 h-[260px] w-[260px] rounded-full bg-[#B7A38B]/10 blur-[80px]" />

      <div className="relative mx-auto max-w-[1400px] px-5">
        <SectionHead n="008" label="Contact & Singapore Operations" light />

        <div className="mt-12 grid lg:grid-cols-12 gap-12 items-start">
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
              <p className="mt-8 font-inter max-w-md text-[15px] leading-relaxed text-[#EDE5DA]/85">
                Partner with OPHRON to unify People, Hygiene, Facilities, Technology, and Commercial Intelligence under a single strategic platform agreement across Singapore and internationally.
              </p>
            </ScrollReveal>

            <ScrollReveal variant="up" delay={200}>
              <div className="mt-10 space-y-1 border-t border-white/10">
                {[
                  { k: "Singapore Operational Audit", v: "Complimentary site review of manpower, hygiene & facility SLA compliance" },
                  { k: "Rapid 1-Hour SLA Response", v: "Site supervisor dispatched within 48h with formal scope the same week" },
                  { k: "Single Operating Agreement", v: "Unified management across all 5 business pillars" },
                ].map((b) => (
                  <div key={b.k} className="group flex items-center justify-between py-4 border-b border-white/10">
                    <div className="flex items-center gap-4">
                      <span className="grid place-items-center h-8 w-8 rounded-full bg-[#B7A38B] text-[#032147] text-[11px] font-bold">✓</span>
                      <div>
                        <div className="text-[14.5px] font-montserrat font-semibold text-white">{b.k}</div>
                        <div className="text-[12px] font-inter text-[#EDE5DA]/70">{b.v}</div>
                      </div>
                    </div>
                    <span className="text-[#B7A38B] opacity-60 group-hover:opacity-100 transition">↗</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Contact Details Grid */}
            <div className="mt-8 grid sm:grid-cols-2 gap-3.5">
              <ScrollReveal variant="up" delay={250}>
                <TiltCard maxTilt={5} className="rounded-2xl border border-white/10 bg-white/5 p-4.5 h-full">
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#B7A38B] font-bold">Phone Lines / Hotline</div>
                  <div className="mt-1.5 flex flex-col gap-0.5">
                    <a href="tel:+6592951155" className="text-[15px] font-montserrat font-bold text-white hover:text-[#B7A38B] transition">
                      +65 9295 1155
                    </a>
                    <a href="tel:+6596466300" className="text-[13px] font-montserrat font-medium text-[#EDE5DA]/75 hover:text-[#B7A38B] transition">
                      +65 9646 6300 (Secondary)
                    </a>
                  </div>
                </TiltCard>
              </ScrollReveal>

              <ScrollReveal variant="up" delay={300}>
                <TiltCard maxTilt={5} className="rounded-2xl border border-white/10 bg-white/5 p-4.5 h-full">
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#B7A38B] font-bold">Email Contacts</div>
                  <div className="mt-1.5 flex flex-col gap-0.5">
                    <a href="mailto:admin@ophronsystems.com" className="text-[13px] font-inter font-semibold text-white hover:text-[#B7A38B] transition break-all">
                      admin@ophronsystems.com
                    </a>
                    <a href="mailto:kelvin@gkt-intel.com.sg" className="text-[12px] font-inter font-medium text-[#EDE5DA]/70 hover:text-[#B7A38B] transition break-all">
                      kelvin@gkt-intel.com.sg
                    </a>
                  </div>
                </TiltCard>
              </ScrollReveal>

              <ScrollReveal variant="up" delay={350}>
                <TiltCard maxTilt={5} className="rounded-2xl border border-white/10 bg-white/5 p-4.5 h-full">
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#B7A38B] font-bold">Singapore Office</div>
                  <div className="mt-1.5 text-[12.5px] font-inter text-[#EDE5DA]/90 leading-snug">
                    26 Sin Ming Lane, #05-124 Midview City, Singapore 573971
                  </div>
                </TiltCard>
              </ScrollReveal>

              <ScrollReveal variant="up" delay={400}>
                <TiltCard maxTilt={5} className="rounded-2xl border border-white/10 bg-white/5 p-4.5 h-full">
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#B7A38B] font-bold">Operating Hours</div>
                  <div className="mt-1.5 text-[12px] font-inter text-[#EDE5DA]/90 leading-tight space-y-0.5">
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
                className="relative rounded-[28px] bg-[#EDE5DA] text-[#032147] p-7 sm:p-9 border border-[#B7A38B]/40 shadow-2xl overflow-hidden"
                style={{ background: "#EDE5DA", color: "#032147" }}
              >
                <CornerBrackets color="#B7A38B" size={14} hoverSize={20} />
                <div className="flex items-center justify-between">
                  <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#032147] font-bold">[ Site Assessment Request ]</div>
                </div>

                {sent ? (
                  <div className="mt-10 text-center py-14">
                    <div className="mx-auto grid place-items-center h-16 w-16 rounded-full bg-[#B7A38B] text-[#032147] text-2xl font-bold">✓</div>
                    <h3 className="mt-6 font-canela text-3xl font-bold tracking-tight">Audit Request Received.</h3>
                    <p className="mt-3 font-inter opacity-85 text-[14px] max-w-sm mx-auto">
                      Thank you {form.name || "there"} — our Singapore operational supervisor will call{" "}
                      {form.phone || "you"} within one business hour to arrange your complimentary site assessment for {form.establishment || "your establishment"}.
                    </p>
                    <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-[#B7A38B] font-bold">
                      Urgent? Call +65 9295 1155
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="mt-5 font-canela text-3xl sm:text-4xl font-bold tracking-tight">
                      Tell us about <span className="font-serif-i italic text-[#B7A38B]">your premises.</span>
                    </h3>

                    <div className="mt-7 grid sm:grid-cols-2 gap-4">
                      <Field label="Full Name *" value={form.name} onChange={(v) => setForm({ ...form, name: v })} placeholder="Tan Wei Ming" />
                      <Field label="Phone Number *" type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} placeholder="+65 9XXX XXXX" />
                      <Field label="Work Email *" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} placeholder="weiming@hotelgroup.com" />
                      <Field label="Establishment / Venue *" value={form.establishment} onChange={(v) => setForm({ ...form, establishment: v })} placeholder="Grand Park Hotel / F&B Outlet" />
                      
                      <div className="sm:col-span-2">
                        <label className="text-[10px] font-mono tracking-[0.22em] uppercase text-[#032147]/70 font-bold">Primary Service Required</label>
                        <select
                          value={form.service}
                          onChange={(e) => setForm({ ...form, service: e.target.value })}
                          className="mt-2 w-full rounded-2xl bg-white/70 border border-[#032147]/15 px-4 py-3 text-[13.5px] font-inter text-[#032147] focus:outline-none focus:border-[#032147]"
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
                        placeholder="Premises type, square footage, operating hours, special requirements…"
                        className="mt-2 w-full rounded-2xl bg-white/70 border border-[#032147]/15 px-4 py-3 text-[13.5px] placeholder:opacity-50 text-[#032147] focus:outline-none focus:border-[#032147] transition resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="group/btn mt-6 relative inline-flex w-full items-center justify-between rounded-full bg-[#032147] text-[#EDE5DA] pl-6 pr-1.5 py-1.5 text-[13.5px] font-montserrat font-bold overflow-hidden disabled:opacity-50 shadow-lg shadow-[#032147]/20 hover:scale-[1.01] transition-transform"
                      style={{ background: "#032147", color: "#EDE5DA" }}
                    >
                      <span className="relative">{submitting ? "Submitting request..." : "Request Site Assessment"}</span>
                      <span className="relative grid place-items-center h-10 w-10 rounded-full bg-[#B7A38B] text-[#032147] transition-transform group-hover/btn:rotate-45 font-bold">
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 17 17 7M9 7h8v8" />
                        </svg>
                      </span>
                    </button>

                    <p className="mt-4 text-[10px] font-mono tracking-[0.18em] uppercase text-center text-[#032147]/70 font-semibold">
                      🔒 NEA Licensed & bizSAFE Level 3 · Free Assessment · 1-Hour Response
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
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-full bg-white/70 border border-[#032147]/15 px-4 py-2.5 text-[13.5px] placeholder:opacity-45 text-[#032147] focus:outline-none focus:border-[#032147] transition"
      />
    </div>
  );
}

