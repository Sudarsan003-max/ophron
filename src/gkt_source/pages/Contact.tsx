import { useState, type FormEvent } from "react";
import { CONTACT, SERVICES } from "../data/site";
import { Icon, MaskText, Reveal, SectionHead, SectionFade } from "../components/ui";
import { FooterServiceIndex } from "../components/shared";

import { sanitizeInput, isValidPhone, isValidEmail, checkRateLimit } from "../utils/security";

/* [Section 1] Hero Banner: Get a Quote — with request form */
function QuoteHero() {
  const [sent, setSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", service: SERVICES[0].name, message: "" });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    // Anti-Bot Honeypot Trap
    if (honeypot) {
      console.warn("Automated bot submission detected and blocked.");
      setSent(true); // Pretend success to fool bot
      return;
    }

    // Input Validation
    if (!isValidPhone(form.phone)) {
      setErrorMsg("Please enter a valid Singapore / International phone number.");
      return;
    }

    if (form.email && !isValidEmail(form.email)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    // Rate Limiting Protection
    const rateCheck = checkRateLimit(3, 60000);
    if (!rateCheck.allowed) {
      setErrorMsg(`Too many requests. Please wait ${rateCheck.waitSeconds}s before submitting again.`);
      return;
    }

    // Sanitize values
    setForm({
      name: sanitizeInput(form.name),
      company: sanitizeInput(form.company),
      phone: sanitizeInput(form.phone),
      email: sanitizeInput(form.email),
      service: form.service,
      message: sanitizeInput(form.message),
    });

    setSent(true);
  };

  const field =
    "input-glow w-full border-b border-paper/25 bg-transparent py-3 text-base sm:text-sm text-paper placeholder:text-sage/50 outline-none transition-colors focus:border-brass-300";
  const label = "font-mono text-[9.5px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.28em] text-sage uppercase";

  return (
    <section className="relative overflow-hidden bg-pine-950 text-paper">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(211,176,102,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(211,176,102,0.16) 1px, transparent 1px)",
          backgroundSize: "76px 76px",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-7xl gap-10 sm:gap-14 px-5 pt-12 pb-12 sm:px-8 sm:pt-16 sm:pb-16 lg:grid-cols-12 lg:gap-10 lg:pt-24 lg:pb-24">
        <div className="lg:col-span-6">
          <Reveal>
            <p className="flex flex-wrap items-center gap-2 sm:gap-3 font-mono text-[10.5px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] text-sage uppercase">
              <span>Contact — Singapore</span>
              <Icon.Diamond className="h-1.5 w-1.5 text-brass" />
              <span className="text-brass-300">Reply within 1 hr</span>
            </p>
          </Reveal>
          <MaskText
            className="mt-6 sm:mt-8 font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.0] font-medium tracking-tight"
            lines={[
              "Get a",
              <span key="a">
                <em className="font-light text-brass-300">Quote.</em>
              </span>,
            ]}
          />
          <Reveal delay={300}>
            <p className="mt-5 sm:mt-7 max-w-md text-sm sm:text-base leading-relaxed text-sage">
              Tell us about your site — a supervisor will call you back, schedule a free assessment within 48
              hours, and return a written scope the same week.
            </p>
          </Reveal>
          <Reveal delay={420} className="mt-8 sm:mt-10 space-y-4 sm:space-y-5">
            <div className="group hover-lift flex items-start gap-4 sm:gap-5">
              <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center border border-brass/50 text-brass-300 transition-colors group-hover:bg-brass group-hover:text-pine-950">
                <Icon.Phone className="h-4 w-4 sm:h-5 sm:w-5" />
              </span>
              <div className="min-w-0">
                <span className="block font-mono text-[9px] sm:text-[10px] tracking-[0.25em] text-sage uppercase">Phone / Hotline</span>
                <div className="flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-1 mt-1">
                  <a href={CONTACT.telHref} className="u-sweep font-display text-xl sm:text-2xl font-semibold text-champagne hover:text-white">
                    {CONTACT.hotlineDisplay}
                  </a>
                  <span className="text-brass/40 hidden sm:inline">·</span>
                  <a href={CONTACT.telSecondaryHref} className="u-sweep font-display text-xl sm:text-2xl font-semibold text-champagne hover:text-white">
                    {CONTACT.hotlineSecondary}
                  </a>
                </div>
              </div>
            </div>
            <a href={CONTACT.waHref} target="_blank" rel="noreferrer" className="group hover-lift flex items-center gap-4 sm:gap-5">
              <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center border border-brass/50 text-brass-300 transition-colors group-hover:bg-brass group-hover:text-pine-950">
                <Icon.WhatsApp className="h-4 w-4 sm:h-5 sm:w-5" />
              </span>
              <div>
                <span className="block font-mono text-[9px] sm:text-[10px] tracking-[0.25em] text-sage uppercase">WhatsApp Instant Scoping</span>
                <span className="u-sweep font-display text-xl sm:text-2xl font-medium text-paper">{CONTACT.whatsappDisplay}</span>
              </div>
            </a>
            <div className="group hover-lift flex items-start gap-4 sm:gap-5">
              <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center border border-brass/50 text-brass-300 transition-colors group-hover:bg-brass group-hover:text-pine-950">
                <Icon.Mail className="h-4 w-4 sm:h-5 sm:w-5" />
              </span>
              <div className="min-w-0">
                <span className="block font-mono text-[9px] sm:text-[10px] tracking-[0.25em] text-sage uppercase">Email Contacts</span>
                <div className="flex flex-col gap-0.5 mt-1">
                  <a href={`mailto:${CONTACT.email}`} className="u-sweep text-xs sm:text-sm text-paper hover:text-brass-300 break-all">
                    {CONTACT.email}
                  </a>
                  <a href={`mailto:${CONTACT.emailSecondary}`} className="u-sweep text-xs sm:text-sm text-paper/80 hover:text-brass-300 break-all">
                    {CONTACT.emailSecondary}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-6">
          <Reveal delay={200}>
            <div className="frame-corners border border-champagne/25 bg-pine-900 p-5 sm:p-8 md:p-10">
              {sent ? (
                <div className="flex min-h-[380px] sm:min-h-[430px] flex-col items-start justify-center">
                  <span className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center border border-brass text-brass-300">
                    <Icon.Check className="h-5 w-5 sm:h-6 sm:w-6" />
                  </span>
                  <h2 className="mt-6 sm:mt-7 font-display text-2xl sm:text-3xl font-medium tracking-tight text-champagne">
                    Request received.
                  </h2>
                  <p className="mt-3 sm:mt-4 max-w-sm text-xs sm:text-sm leading-relaxed text-sage">
                    Thank you, {form.name || "we'll be in touch"}. A GKT site supervisor will call{" "}
                    {form.phone || "you"} within one business hour to arrange your free site assessment.
                  </p>
                  <p className="mt-5 sm:mt-6 font-mono text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] text-brass-300 uppercase">
                    Urgent? Call {CONTACT.hotlineDisplay}
                  </p>
                </div>
              ) : (
                <form onSubmit={submit}>
                  <p className="font-mono text-[10px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] text-brass-300 uppercase">Request a Site Assessment</p>
                  
                  {/* Anti-Spam Hidden Honeypot Field */}
                  <input
                    type="text"
                    name="website_address_confirm"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    style={{ display: "none" }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {errorMsg && (
                    <div className="mt-4 p-3 rounded border border-rose-500/40 bg-rose-950/40 font-mono text-xs text-rose-300 flex items-center gap-2">
                      <span className="text-rose-400">⚠️</span>
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="mt-5 sm:mt-7 grid gap-4 sm:gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="q-name" className={label}>Full name *</label>
                      <input id="q-name" required className={field} placeholder="Tan Wei Ming" value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })} />
                    </div>
                    <div>
                      <label htmlFor="q-company" className={label}>Company</label>
                      <input id="q-company" className={field} placeholder="Company Pte Ltd" value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })} />
                    </div>
                    <div>
                      <label htmlFor="q-phone" className={label}>Phone *</label>
                      <input id="q-phone" required type="tel" className={field} placeholder="+65 9XXX XXXX" value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                    </div>
                    <div>
                      <label htmlFor="q-email" className={label}>Email</label>
                      <input id="q-email" type="email" className={field} placeholder="you@company.sg" value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })} />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="q-service" className={label}>Service required</label>
                      <select id="q-service" className={field + " appearance-none"} value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}>
                        {SERVICES.map((s) => (
                          <option key={s.slug} value={s.name} className="bg-pine-900 text-paper">
                            {s.name}
                          </option>
                        ))}
                        <option className="bg-pine-900 text-paper">Multiple / Integrated contract</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="q-msg" className={label}>About your site</label>
                      <textarea id="q-msg" rows={3} className={field + " resize-none"} placeholder="Premises type, size, frequency, special requirements…"
                        value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                    </div>
                  </div>
                  <button type="submit"
                    className="btn-sweep mt-6 sm:mt-8 inline-flex w-full items-center justify-center gap-3 bg-brass px-6 py-3.5 sm:px-7 sm:py-4 font-mono text-[10.5px] sm:text-[11px] font-semibold tracking-[0.25em] sm:tracking-[0.28em] text-pine-950 uppercase hover:text-champagne active:scale-98">
                    Send request <Icon.ArrowRight className="h-4 w-4" />
                  </button>
                  <p className="mt-3 sm:mt-4 text-center font-mono text-[8.5px] sm:text-[9px] tracking-[0.18em] sm:tracking-[0.2em] text-sage uppercase">
                    No obligation · Free assessment · Reply within 1 hour
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* [Section 2] Operational Schedule & Contact Channels */
function Schedule() {
  return (
    <SectionFade className="bg-paper py-14 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 sm:gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <div>
          <SectionHead
            index="01"
            eyebrow="Service Schedule"
            lines={["When we're", <span key="a">on <em className="font-light">duty.</em></span>]}
            lead="Scheduled programmes run to your premises' rhythm. Flexible hours available on request."
            className="mb-8 sm:mb-10"
          />
          <Reveal>
            <div className="border-t border-ink/15">
              {[
                { label: "Operating Days", value: "Monday – Sunday", note: "Full week deployment" },
                { label: "Hours", value: "10:00 AM – 10:00 PM", note: "Flexible hours available on request" },
                { label: "Break Time", value: "3:00 PM – 5:00 PM", note: "Scheduled shift rotation" },
              ].map((h) => (
                <div key={h.label} className="ledger-row flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-6 border-b border-ink/15 px-2 py-4 sm:py-5">
                  <span className="flex items-center gap-3 sm:gap-4">
                    <Icon.Clock className="h-4 w-4 text-brass shrink-0" />
                    <div>
                      <span className="font-display text-base sm:text-lg font-medium text-pine-950 block">{h.label}</span>
                      <span className="font-body text-xs text-pine-700/70">{h.note}</span>
                    </div>
                  </span>
                  <span className="font-mono text-xs sm:text-sm font-semibold tracking-wide text-pine-900 sm:text-right pl-7 sm:pl-0">{h.value}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <div>
          <SectionHead
            index="02"
            eyebrow="Contact & Location"
            lines={["Every way", <span key="a">to reach <em className="font-light">us.</em></span>]}
            className="mb-8 sm:mb-10"
          />
          <div className="space-y-px border border-ink/15 bg-ink/15">
            {[
              {
                icon: <Icon.Phone className="h-4 w-4 sm:h-5 sm:w-5" />,
                label: "Phone Lines",
                renderValue: (
                  <div className="flex flex-col gap-0.5">
                    <a href={CONTACT.telHref} className="u-sweep font-display text-base sm:text-lg font-medium text-pine-950 hover:text-brass">
                      {CONTACT.hotlineDisplay}
                    </a>
                    <a href={CONTACT.telSecondaryHref} className="u-sweep font-display text-base sm:text-lg font-medium text-pine-950 hover:text-brass">
                      {CONTACT.hotlineSecondary}
                    </a>
                  </div>
                ),
                note: "Monday – Sunday (10:00 AM – 10:00 PM)",
              },
              {
                icon: <Icon.Mail className="h-4 w-4 sm:h-5 sm:w-5" />,
                label: "Email",
                renderValue: (
                  <div className="flex flex-col gap-0.5">
                    <a href={`mailto:${CONTACT.email}`} className="u-sweep font-mono text-xs sm:text-sm font-medium text-pine-950 hover:text-brass break-all">
                      {CONTACT.email}
                    </a>
                    <a href={`mailto:${CONTACT.emailSecondary}`} className="u-sweep font-mono text-xs sm:text-sm font-medium text-pine-950 hover:text-brass break-all">
                      {CONTACT.emailSecondary}
                    </a>
                  </div>
                ),
                note: "Quotations, service requests, and admin enquiries",
              },
              {
                icon: <Icon.Pin className="h-4 w-4 sm:h-5 sm:w-5" />,
                label: "Location",
                renderValue: (
                  <span className="block font-display text-sm sm:text-base font-medium text-pine-950 leading-snug">
                    {CONTACT.address}
                  </span>
                ),
                note: "Midview City · Singapore 573971",
              },
            ].map((c, i) => (
              <Reveal key={c.label} delay={i * 70} className="bg-paper">
                <div className="flex items-start gap-4 sm:gap-5 p-4 sm:p-6">
                  <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center border border-brass/50 text-brass">
                    {c.icon}
                  </span>
                  <div className="min-w-0 flex-1">
                    <span className="block font-mono text-[9px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.28em] text-moss uppercase mb-1">{c.label}</span>
                    {c.renderValue}
                    <span className="mt-1 block text-xs text-pine-700/70">{c.note}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </SectionFade>
  );
}

export default function Contact() {
  return (
    <>
      <QuoteHero />
      <Schedule />
      {/* [Section 3] Footer Service Index */}
      <FooterServiceIndex />
    </>
  );
}
