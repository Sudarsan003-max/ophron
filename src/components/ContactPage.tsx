import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    organization: "",
    email: "",
    phone: "",
    facilityType: "hotel",
    sqft: "",
    services: [] as string[],
    timeline: "immediate",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (srv: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(srv)
        ? prev.services.filter((s) => s !== srv)
        : [...prev.services, srv],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-paper text-ink pb-24">
      {/* ── TOP HERO BANNER ────────────────────────────────────────── */}
      <section className="relative bg-[#032147] text-[#EDE5DA] pt-14 pb-20 overflow-hidden border-b border-[#B7A38B]/30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#B7A38B]/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-[1400px] px-5">
          {/* Breadcrumb */}
          <div className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.2em] text-[#B7A38B] mb-6">
            <a href="/" className="hover:text-white transition">
              Home
            </a>
            <span className="opacity-40">/</span>
            <span className="text-white font-bold">Contact</span>
            <span className="opacity-40">/</span>
            <span className="opacity-70">Singapore Operations Hub</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#B7A38B]/20 border border-[#B7A38B]/40 px-3.5 py-1 text-[11px] font-mono text-[#B7A38B] uppercase tracking-[0.15em] font-bold mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-[#B7A38B] animate-pulse" />
                <span>Central Operations Command · Singapore</span>
              </span>

              <h1 className="font-canela font-bold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[0.98]">
                Tell us what your operation <span className="font-serif-i italic text-[#B7A38B]">needs.</span>
              </h1>

              <p className="mt-5 font-inter text-[16px] sm:text-[18px] leading-relaxed text-[#EDE5DA]/85 max-w-2xl">
                Need dishwashing staff, a reliable cleaning plan or help coordinating facility services? Share a few details and our Singapore team can discuss the next step with you.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <div className="rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur-md w-full max-w-sm">
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#B7A38B] font-bold mb-1">
                  24/7 Rapid Incident Desk
                </div>
                <div className="font-montserrat text-2xl font-bold text-white">
                  +65 9295 1155
                </div>
                <p className="mt-1.5 text-xs text-[#EDE5DA]/70 font-inter">
                  Dedicated on-call Singapore operations director for immediate site emergencies & urgent resets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE OPERATIONS CARDS ──────────────────────────────────── */}
      <div className="mx-auto max-w-[1400px] px-5 pt-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="rounded-3xl bg-[#EDE5DA] border border-[#B7A38B]/40 p-6 shadow-md flex flex-col justify-between">
            <div>
              <div className="h-11 w-11 rounded-2xl bg-[#032147] text-[#EDE5DA] grid place-items-center mb-4 shadow">
                <Phone className="w-5 h-5 text-[#B7A38B]" />
              </div>
              <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#B7A38B] font-bold">
                Direct Telephony
              </div>
              <h3 className="font-montserrat font-bold text-lg text-[#032147] mt-1">
                Emergency & Operations
              </h3>
              <p className="mt-2 text-xs font-inter text-[#032147]/75 leading-relaxed">
                24/7 Singapore Hotline: <strong>+65 9295 1155</strong>
                <br />
                General Inquiries: Mon–Fri 08:30–18:00
              </p>
            </div>
            <a
              href="tel:+6592951155"
              className="mt-4 pt-3 border-t border-[#032147]/10 text-xs font-mono font-bold text-[#8C7355] hover:text-[#032147] transition flex items-center justify-between"
            >
              <span>Call Dispatch Desk</span>
              <span>→</span>
            </a>
          </div>

          <div className="rounded-3xl bg-[#EDE5DA] border border-[#B7A38B]/40 p-6 shadow-md flex flex-col justify-between">
            <div>
              <div className="h-11 w-11 rounded-2xl bg-[#032147] text-[#EDE5DA] grid place-items-center mb-4 shadow">
                <Mail className="w-5 h-5 text-[#B7A38B]" />
              </div>
              <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#B7A38B] font-bold">
                Executive Channels
              </div>
              <h3 className="font-montserrat font-bold text-lg text-[#032147] mt-1">
                Client Service & RFPs
              </h3>
              <p className="mt-2 text-xs font-inter text-[#032147]/75 leading-relaxed">
                RFP / Tender Inquiries: <strong>operations@ophronsystems.com</strong>
                <br />
                General Administration: <strong>admin@ophronsystems.com</strong>
              </p>
            </div>
            <a
              href="mailto:operations@ophronsystems.com"
              className="mt-4 pt-3 border-t border-[#032147]/10 text-xs font-mono font-bold text-[#8C7355] hover:text-[#032147] transition flex items-center justify-between"
            >
              <span>Send Executive Email</span>
              <span>→</span>
            </a>
          </div>

          <div className="rounded-3xl bg-[#EDE5DA] border border-[#B7A38B]/40 p-6 shadow-md flex flex-col justify-between">
            <div>
              <div className="h-11 w-11 rounded-2xl bg-[#032147] text-[#EDE5DA] grid place-items-center mb-4 shadow">
                <MapPin className="w-5 h-5 text-[#B7A38B]" />
              </div>
              <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#B7A38B] font-bold">
                Singapore Base
              </div>
              <h3 className="font-montserrat font-bold text-lg text-[#032147] mt-1">
                Depot & Operational Depot
              </h3>
              <p className="mt-2 text-xs font-inter text-[#032147]/75 leading-relaxed">
                OPHRON Systems Pte. Ltd.
                <br />
                Centralized equipment depot, fleet maintenance, and chemical inventory hub.
              </p>
            </div>
            <span className="mt-4 pt-3 border-t border-[#032147]/10 text-xs font-mono font-bold text-[#032147]/60">
              Singapore Licensed HQ
            </span>
          </div>

          <div className="rounded-3xl bg-[#EDE5DA] border border-[#B7A38B]/40 p-6 shadow-md flex flex-col justify-between">
            <div>
              <div className="h-11 w-11 rounded-2xl bg-[#032147] text-[#EDE5DA] grid place-items-center mb-4 shadow">
                <Clock className="w-5 h-5 text-[#B7A38B]" />
              </div>
              <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#B7A38B] font-bold">
                Operating Discipline
              </div>
              <h3 className="font-montserrat font-bold text-lg text-[#032147] mt-1">
                SLA Deployment Windows
              </h3>
              <p className="mt-2 text-xs font-inter text-[#032147]/75 leading-relaxed">
                Emergency Turnovers: <strong>&lt; 60 Minutes</strong>
                <br />
                Audit Proposals: <strong>Within 24 Hours</strong>
                <br />
                Contract Transition: <strong>7-Day Onboarding</strong>
              </p>
            </div>
            <span className="mt-4 pt-3 border-t border-[#032147]/10 text-xs font-mono font-bold text-emerald-700">
              ● 100% Guaranteed SLA
            </span>
          </div>
        </div>

        {/* ── INTERACTIVE FACILITY AUDIT FORM & ENGAGEMENT MODULE ──────── */}
        <div className="rounded-[32px] bg-[#032147] text-[#EDE5DA] p-8 sm:p-12 lg:p-16 border border-[#B7A38B]/30 shadow-2xl relative overflow-hidden mb-20" style={{ background: "#032147", color: "#EDE5DA" }}>
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Context & Guarantees */}
            <div className="lg:col-span-5">
              <span className="text-[10.5px] font-mono uppercase tracking-[0.2em] text-[#B7A38B] font-bold block mb-2">
                [ Structured Scope Evaluation ]
              </span>
              <h2 className="font-canela text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.05]">
                Initiate Your Facility SLA Assessment
              </h2>
              <p className="mt-4 font-inter text-[14.5px] leading-relaxed text-[#EDE5DA]/80">
                Submit your venue parameters below. An OPHRON senior operational director will contact you within 24 hours to schedule a confidential physical inspection and provide a consolidated single-SLA proposal.
              </p>

              <div className="mt-8 space-y-4 font-inter text-xs text-[#EDE5DA]/90">
                <div className="flex items-start gap-3 bg-white/5 border border-white/10 p-3.5 rounded-2xl">
                  <CheckCircle2 className="w-4 h-4 text-[#B7A38B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-montserrat">Zero Obligation Facility Audit</strong>
                    <span>We inspect marble wear, exhaust duct grease levels, washroom hygiene, and manpower allocation free of charge.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/5 border border-white/10 p-3.5 rounded-2xl">
                  <CheckCircle2 className="w-4 h-4 text-[#B7A38B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-montserrat">Strict Commercial NDA Protection</strong>
                    <span>All client operations data, staffing rosters, and commercial figures are held under strict non-disclosure.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/5 border border-white/10 p-3.5 rounded-2xl">
                  <CheckCircle2 className="w-4 h-4 text-[#B7A38B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-montserrat">Guaranteed Fixed-Rate Pricing</strong>
                    <span>Transparent quotes with no hidden overtime surcharges or chemical pass-through fees.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Comprehensive Audit Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl bg-white/[0.04] border border-white/15 p-6 sm:p-9 backdrop-blur-md">
                {submitted ? (
                  <div className="py-16 text-center">
                    <div className="grid place-items-center h-16 w-16 rounded-full bg-[#B7A38B] text-[#032147] text-3xl font-bold mx-auto mb-4">
                      ✓
                    </div>
                    <h3 className="font-canela text-3xl font-bold text-white">Facility Audit Initiated</h3>
                    <p className="mt-3 text-sm font-inter text-[#EDE5DA]/80 max-w-md mx-auto">
                      Thank you, <strong>{formData.name}</strong>. Our Singapore operations director will review your facility specifications and reach out within 24 hours.
                    </p>
                    <div className="mt-6 inline-flex items-center gap-2 text-xs font-mono text-[#B7A38B]">
                      <span>Reference: OPHRON-SLA-{Math.floor(100000 + Math.random() * 900000)}</span>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-[0.15em] text-[#B7A38B] font-bold mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Jonathan Lee"
                          className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#B7A38B]"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-[0.15em] text-[#B7A38B] font-bold mb-1.5">
                          Executive Title *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.title}
                          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                          placeholder="General Manager / Director of Ops"
                          className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#B7A38B]"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-[0.15em] text-[#B7A38B] font-bold mb-1.5">
                          Organization / Property Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          placeholder="Hotel Group / Commercial Tower"
                          className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#B7A38B]"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-[0.15em] text-[#B7A38B] font-bold mb-1.5">
                          Facility Type
                        </label>
                        <select
                          value={formData.facilityType}
                          onChange={(e) => setFormData({ ...formData, facilityType: e.target.value })}
                          className="w-full rounded-xl bg-[#032147] border border-white/20 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#B7A38B]"
                        >
                          <option value="hotel">Luxury Hotel & Integrated Resort</option>
                          <option value="fnb">Restaurant Group / Commercial Dining</option>
                          <option value="commercial">Commercial Tower / Grade A Corporate</option>
                          <option value="healthcare">Healthcare / Medical Outpatient Center</option>
                          <option value="events">Event Venue / Convention Space</option>
                          <option value="yacht">Private Yacht / Marina Property</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-[0.15em] text-[#B7A38B] font-bold mb-1.5">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="j.lee@property.com"
                          className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#B7A38B]"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-[0.15em] text-[#B7A38B] font-bold mb-1.5">
                          Mobile / Contact Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+65 9123 4567"
                          className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#B7A38B]"
                        />
                      </div>
                    </div>

                    {/* Operational Scopes Required */}
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-[0.15em] text-[#B7A38B] font-bold mb-2">
                        Operational Scopes Required (Select all that apply)
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {[
                          "Commercial Cleaning",
                          "F&B Stewarding Crew",
                          "Kitchen Exhaust Degreasing",
                          "Marble Diamond Honing",
                          "Rope Access Façade Glass",
                          "IFM Lite Facility Mgmt",
                          "Disinfection & Fogging",
                          "Event Turnover Teams",
                          "Operations Tech / SaaS",
                        ].map((srv) => {
                          const isSel = formData.services.includes(srv);
                          return (
                            <button
                              type="button"
                              key={srv}
                              onClick={() => toggleService(srv)}
                              className={`p-2 rounded-xl text-left text-xs font-montserrat font-semibold transition border cursor-pointer ${
                                isSel
                                  ? "bg-[#B7A38B] text-[#032147] border-[#B7A38B]"
                                  : "bg-white/5 border-white/15 text-[#EDE5DA]/80 hover:bg-white/10"
                              }`}
                            >
                              <div className="flex items-center gap-1.5">
                                <span className="text-[10px]">{isSel ? "✓" : "+"}</span>
                                <span className="line-clamp-1">{srv}</span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-[0.15em] text-[#B7A38B] font-bold mb-1.5">
                        Current Operational Challenges / Specific Requests
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Mention existing vendor pain points, total square footage, shift requirements, or target start date..."
                        className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#B7A38B]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-full bg-[#B7A38B] text-[#032147] py-3.5 text-sm font-montserrat font-bold hover:bg-white transition duration-300 shadow-xl cursor-pointer"
                    >
                      Send My Enquiry →
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* ── SINGAPORE ISLANDWIDE COVERAGE DISTRICTS ─────────────────── */}
        <div className="mb-20">
          <div className="max-w-2xl mb-8">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#B7A38B] font-bold block mb-2">
              [ Rapid Mobilization Network ]
            </span>
            <h3 className="font-canela text-3xl font-bold text-[#032147]">
              Active Singapore Coverage Districts
            </h3>
            <p className="mt-2 text-sm font-inter text-[#032147]/80">
              Our mobile operational units, supervisor vans, and chemical supply hubs operate across every major hospitality precinct in Singapore with 24/7 coverage.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                zone: "Central & Marina Bay",
                hubs: "Marina Bay Sands, CBD Towers, Tanjong Pagar, Raffles Place",
                spec: "5-Star Hotels & Luxury Dining",
              },
              {
                zone: "Orchard & Tanglin",
                hubs: "Orchard Road, Somerset, Scotts Road, Botanic Gardens",
                spec: "Luxury Retail Flagships & Hotels",
              },
              {
                zone: "Sentosa & HarbourFront",
                hubs: "Sentosa Cove, Resorts World, ONE°15 Marina, Vivocity",
                spec: "Integrated Resorts, Beach Clubs, Yachts",
              },
              {
                zone: "Changi & East Coast",
                hubs: "Jewel Changi, Expo, Changi Business Park, Siglap",
                spec: "Transit Hospitality & Catering Units",
              },
              {
                zone: "West & Jurong Gateway",
                hubs: "Jurong Innovation Hub, Tuas Logistics, Clementi",
                spec: "Central Production Kitchens & IFM",
              },
            ].map((dist, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-[#EDE5DA] border border-[#B7A38B]/40 p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#B7A38B] font-bold">
                    Zone 0{idx + 1}
                  </span>
                  <h4 className="font-montserrat font-bold text-base text-[#032147] mt-1">
                    {dist.zone}
                  </h4>
                  <p className="mt-2 text-xs font-inter text-[#032147]/70 leading-relaxed">
                    {dist.hubs}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#032147]/10 text-[10.5px] font-mono text-[#8C7355] font-semibold">
                  {dist.spec}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
