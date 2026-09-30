<?php
/**
 * Template Part: Solutions & 5 Operational Pillars
 *
 * @package Ophron
 */
?>
<section id="services" class="py-28 bg-[#EDE5DA] border-t border-[#B7A38B]/20">
    <div class="mx-auto max-w-[1440px] px-5 sm:px-8">
        
        <div class="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-[#B7A38B] font-bold mb-6">
            <span>[ 005 ]</span>
            <span class="h-px w-8 bg-[#B7A38B]/40"></span>
            <span>OPHRON CORE SOLUTIONS</span>
        </div>

        <div class="grid lg:grid-cols-12 gap-10 items-end mb-12">
            <div class="lg:col-span-8">
                <h2 class="font-canela text-3xl sm:text-5xl lg:text-6xl font-bold leading-[0.98] text-[#032147]">
                    The Five Infrastructure <span class="font-serif-i italic text-[#B7A38B]">Pillars</span>.
                </h2>
            </div>
            <div class="lg:col-span-4 text-xs sm:text-sm font-inter text-[#032147]/75">
                Engineered for Singapore's high-compliance regulatory environment with NEA licensing, SFA compliance, and ISO sterile standards.
            </div>
        </div>

        <!-- Interactive Pillar Tabs -->
        <div class="flex flex-wrap gap-2.5 pb-8 border-b border-[#032147]/10">
            <button data-pillar-tab="people" class="active-pillar px-6 py-3 rounded-full font-heading text-xs font-bold uppercase tracking-wider border border-[#032147] bg-[#032147] text-[#EDE5DA] transition">
                01. People
            </button>
            <button data-pillar-tab="hygiene" class="px-6 py-3 rounded-full font-heading text-xs font-bold uppercase tracking-wider border border-[#032147]/20 bg-transparent text-[#032147] transition hover:border-[#032147]">
                02. Hygiene & Cleans
            </button>
            <button data-pillar-tab="facilities" class="px-6 py-3 rounded-full font-heading text-xs font-bold uppercase tracking-wider border border-[#032147]/20 bg-transparent text-[#032147] transition hover:border-[#032147]">
                03. Facilities & IFM
            </button>
            <button data-pillar-tab="tech" class="px-6 py-3 rounded-full font-heading text-xs font-bold uppercase tracking-wider border border-[#032147]/20 bg-transparent text-[#032147] transition hover:border-[#032147]">
                04. Technology & POS
            </button>
            <button data-pillar-tab="advisory" class="px-6 py-3 rounded-full font-heading text-xs font-bold uppercase tracking-wider border border-[#032147]/20 bg-transparent text-[#032147] transition hover:border-[#032147]">
                05. Commercial Advisory
            </button>
        </div>

        <!-- Pillar Panels -->
        <div class="mt-10">
            
            <!-- 1. PEOPLE PANEL -->
            <div data-pillar-panel="people" class="space-y-8">
                <div class="p-8 rounded-3xl bg-white/70 border border-[#B7A38B]/30 grid lg:grid-cols-12 gap-8 items-center shadow-lg">
                    <div class="lg:col-span-7">
                        <span class="text-[11px] font-mono text-[#B7A38B] font-bold uppercase tracking-widest">[ PILLAR 01 · WORKFORCE ]</span>
                        <h3 class="font-canela text-3xl font-bold text-[#032147] mt-2 mb-4">OPHRON PEOPLE — Vetted Hospitality Manpower</h3>
                        <p class="font-inter text-sm text-[#032147]/80 leading-relaxed">
                            Eliminates staffing bottlenecks and labor shortages for hotels, luxury resorts, central kitchens, and premier restaurants across Singapore. Full WSQ-vetted teams on demand.
                        </p>
                    </div>
                    <div class="lg:col-span-5 flex justify-end">
                        <a href="#contact" class="px-6 py-3 rounded-full bg-[#032147] text-[#EDE5DA] text-xs font-bold uppercase tracking-wider shadow-md hover:scale-105 transition">
                            Request Manpower Deployment
                        </a>
                    </div>
                </div>

                <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div class="p-6 rounded-2xl bg-white/50 border border-[#032147]/10 hover:border-[#032147] transition">
                        <div class="font-mono text-xs text-[#B7A38B] font-bold mb-2">01.01</div>
                        <h4 class="font-canela text-lg font-bold text-[#032147] mb-2">F&B Stewarding Manpower</h4>
                        <p class="font-inter text-xs text-[#032147]/70">Full-time and flexi-shift kitchen stewarding teams trained in chemical safety and warewashing.</p>
                    </div>
                    <div class="p-6 rounded-2xl bg-white/50 border border-[#032147]/10 hover:border-[#032147] transition">
                        <div class="font-mono text-xs text-[#B7A38B] font-bold mb-2">01.02</div>
                        <h4 class="font-canela text-lg font-bold text-[#032147] mb-2">Kitchen Helpers & Support</h4>
                        <p class="font-inter text-xs text-[#032147]/70">Back-of-house culinary assistants, prep station staff, and heavy line support personnel.</p>
                    </div>
                    <div class="p-6 rounded-2xl bg-white/50 border border-[#032147]/10 hover:border-[#032147] transition">
                        <div class="font-mono text-xs text-[#B7A38B] font-bold mb-2">01.03</div>
                        <h4 class="font-canela text-lg font-bold text-[#032147] mb-2">Venue Utility Personnel</h4>
                        <p class="font-inter text-xs text-[#032147]/70">Event cleaners, banquet runners, and dedicated venue turn-around crews for high-volume dates.</p>
                    </div>
                    <div class="p-6 rounded-2xl bg-white/50 border border-[#032147]/10 hover:border-[#032147] transition">
                        <div class="font-mono text-xs text-[#B7A38B] font-bold mb-2">01.04</div>
                        <h4 class="font-canela text-lg font-bold text-[#032147] mb-2">Outsourced Facilities Staff</h4>
                        <p class="font-inter text-xs text-[#032147]/70">Long-term outsourced commercial property housekeeping and maintenance personnel.</p>
                    </div>
                </div>
            </div>

            <!-- 2. HYGIENE PANEL -->
            <div data-pillar-panel="hygiene" class="hidden space-y-8">
                <div class="p-8 rounded-3xl bg-white/70 border border-[#B7A38B]/30 grid lg:grid-cols-12 gap-8 items-center shadow-lg">
                    <div class="lg:col-span-7">
                        <span class="text-[11px] font-mono text-[#B7A38B] font-bold uppercase tracking-widest">[ PILLAR 02 · TECHNICAL HYGIENE ]</span>
                        <h3 class="font-canela text-3xl font-bold text-[#032147] mt-2 mb-4">OPHRON HYGIENE — NEA Licensed Decontamination</h3>
                        <p class="font-inter text-sm text-[#032147]/80 leading-relaxed">
                            Guarantees 100% SFA regulatory passing grades, kitchen exhaust fire suppression, cleanroom ISO Class 5–8 maintenance, and indoor air sterilization.
                        </p>
                    </div>
                    <div class="lg:col-span-5 flex justify-end">
                        <a href="#contact" class="px-6 py-3 rounded-full bg-[#032147] text-[#EDE5DA] text-xs font-bold uppercase tracking-wider shadow-md hover:scale-105 transition">
                            Book Specialized Deep Clean
                        </a>
                    </div>
                </div>

                <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div class="p-6 rounded-2xl bg-white/50 border border-[#032147]/10 hover:border-[#032147] transition">
                        <div class="font-mono text-xs text-[#B7A38B] font-bold mb-2">02.01</div>
                        <h4 class="font-canela text-lg font-bold text-[#032147] mb-2">Commercial Kitchen Deep Cleans</h4>
                        <p class="font-inter text-xs text-[#032147]/70">Cookline degreasing, hot water chemical washdowns, and SFA audit compliance certified.</p>
                    </div>
                    <div class="p-6 rounded-2xl bg-white/50 border border-[#032147]/10 hover:border-[#032147] transition">
                        <div class="font-mono text-xs text-[#B7A38B] font-bold mb-2">02.02</div>
                        <h4 class="font-canela text-lg font-bold text-[#032147] mb-2">Exhaust Hoods & Duct Cleans</h4>
                        <p class="font-inter text-xs text-[#032147]/70">Rotary brush duct degreasing and SCDF fire compliance certification logs.</p>
                    </div>
                    <div class="p-6 rounded-2xl bg-white/50 border border-[#032147]/10 hover:border-[#032147] transition">
                        <div class="font-mono text-xs text-[#B7A38B] font-bold mb-2">02.03</div>
                        <h4 class="font-canela text-lg font-bold text-[#032147] mb-2">Cleanrooms & Healthcare Sterilization</h4>
                        <p class="font-inter text-xs text-[#032147]/70">ISO-certified cleanroom cleaning, bio-kill electrostatic misting, and clinic protocol.</p>
                    </div>
                    <div class="p-6 rounded-2xl bg-white/50 border border-[#032147]/10 hover:border-[#032147] transition">
                        <div class="font-mono text-xs text-[#B7A38B] font-bold mb-2">02.04</div>
                        <h4 class="font-canela text-lg font-bold text-[#032147] mb-2">80°C Carpet Steam Extraction</h4>
                        <p class="font-inter text-xs text-[#032147]/70">Thermal extraction and low-moisture encapsulation for luxury hotel suites and offices.</p>
                    </div>
                </div>
            </div>

            <!-- 3. FACILITIES PANEL -->
            <div data-pillar-panel="facilities" class="hidden space-y-8">
                <div class="p-8 rounded-3xl bg-white/70 border border-[#B7A38B]/30 grid lg:grid-cols-12 gap-8 items-center shadow-lg">
                    <div class="lg:col-span-7">
                        <span class="text-[11px] font-mono text-[#B7A38B] font-bold uppercase tracking-widest">[ PILLAR 03 · INTEGRATED FACILITIES ]</span>
                        <h3 class="font-canela text-3xl font-bold text-[#032147] mt-2 mb-4">OPHRON FACILITIES — IRATA Rope Access & IFM</h3>
                        <p class="font-inter text-sm text-[#032147]/80 leading-relaxed">
                            Single-source facility maintenance covering exterior glass towers, major event turnovers, post-renovation handovers, and superyacht detailing.
                        </p>
                    </div>
                    <div class="lg:col-span-5 flex justify-end">
                        <a href="#contact" class="px-6 py-3 rounded-full bg-[#032147] text-[#EDE5DA] text-xs font-bold uppercase tracking-wider shadow-md hover:scale-105 transition">
                            Request Facility Proposal
                        </a>
                    </div>
                </div>

                <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div class="p-6 rounded-2xl bg-white/50 border border-[#032147]/10 hover:border-[#032147] transition">
                        <div class="font-mono text-xs text-[#B7A38B] font-bold mb-2">03.01</div>
                        <h4 class="font-canela text-lg font-bold text-[#032147] mb-2">High-Rise Façade Abseiling</h4>
                        <p class="font-inter text-xs text-[#032147]/70">IRATA Level 3 certified rope access technicians for glass towers and complex architectural envelopes.</p>
                    </div>
                    <div class="p-6 rounded-2xl bg-white/50 border border-[#032147]/10 hover:border-[#032147] transition">
                        <div class="font-mono text-xs text-[#B7A38B] font-bold mb-2">03.02</div>
                        <h4 class="font-canela text-lg font-bold text-[#032147] mb-2">Events & Exhibition Resets</h4>
                        <p class="font-inter text-xs text-[#032147]/70">Rapid overnight venue turnovers for Marina Bay expos, luxury galas, and concert arenas.</p>
                    </div>
                    <div class="p-6 rounded-2xl bg-white/50 border border-[#032147]/10 hover:border-[#032147] transition">
                        <div class="font-mono text-xs text-[#B7A38B] font-bold mb-2">03.03</div>
                        <h4 class="font-canela text-lg font-bold text-[#032147] mb-2">IFM Lite Operations</h4>
                        <p class="font-inter text-xs text-[#032147]/70">Streamlined facility management consolidating MEP maintenance, pest prevention, and daily janitorial.</p>
                    </div>
                    <div class="p-6 rounded-2xl bg-white/50 border border-[#032147]/10 hover:border-[#032147] transition">
                        <div class="font-mono text-xs text-[#B7A38B] font-bold mb-2">03.04</div>
                        <h4 class="font-canela text-lg font-bold text-[#032147] mb-2">Post-Renovation Handover</h4>
                        <p class="font-inter text-xs text-[#032147]/70">Heavy builder cleans, cement scale removal, and luxury handover readiness.</p>
                    </div>
                </div>
            </div>

            <!-- 4. TECH PANEL -->
            <div data-pillar-panel="tech" class="hidden space-y-8">
                <div class="p-8 rounded-3xl bg-white/70 border border-[#B7A38B]/30 grid lg:grid-cols-12 gap-8 items-center shadow-lg">
                    <div class="lg:col-span-7">
                        <span class="text-[11px] font-mono text-[#B7A38B] font-bold uppercase tracking-widest">[ PILLAR 04 · TECHNOLOGY ]</span>
                        <h3 class="font-canela text-3xl font-bold text-[#032147] mt-2 mb-4">OPHRON TECH — Hospitality SaaS & POS Ecosystem</h3>
                        <p class="font-inter text-sm text-[#032147]/80 leading-relaxed">
                            Connected POS terminals, live kitchen display systems (KDS), inventory cost tracking, and automated guest CRM.
                        </p>
                    </div>
                    <div class="lg:col-span-5 flex justify-end">
                        <a href="#contact" class="px-6 py-3 rounded-full bg-[#032147] text-[#EDE5DA] text-xs font-bold uppercase tracking-wider shadow-md hover:scale-105 transition">
                            Explore Tech Stack
                        </a>
                    </div>
                </div>

                <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div class="p-6 rounded-2xl bg-white/50 border border-[#032147]/10 hover:border-[#032147] transition">
                        <div class="font-mono text-xs text-[#B7A38B] font-bold mb-2">04.01</div>
                        <h4 class="font-canela text-lg font-bold text-[#032147] mb-2">Connected POS Matrix</h4>
                        <p class="font-inter text-xs text-[#032147]/70">Ultra-fast table ordering, QR payments, and automated kitchen fire sequencing.</p>
                    </div>
                    <div class="p-6 rounded-2xl bg-white/50 border border-[#032147]/10 hover:border-[#032147] transition">
                        <div class="font-mono text-xs text-[#B7A38B] font-bold mb-2">04.02</div>
                        <h4 class="font-canela text-lg font-bold text-[#032147] mb-2">Real-Time Labor Tracking</h4>
                        <p class="font-inter text-xs text-[#032147]/70">Biometric and digital shift check-ins with automated compliance auditing.</p>
                    </div>
                    <div class="p-6 rounded-2xl bg-white/50 border border-[#032147]/10 hover:border-[#032147] transition">
                        <div class="font-mono text-xs text-[#B7A38B] font-bold mb-2">04.03</div>
                        <h4 class="font-canela text-lg font-bold text-[#032147] mb-2">Food Cost & Inventory AI</h4>
                        <p class="font-inter text-xs text-[#032147]/70">Predictive ingredient wastage prevention and automated vendor reordering.</p>
                    </div>
                    <div class="p-6 rounded-2xl bg-white/50 border border-[#032147]/10 hover:border-[#032147] transition">
                        <div class="font-mono text-xs text-[#B7A38B] font-bold mb-2">04.04</div>
                        <h4 class="font-canela text-lg font-bold text-[#032147] mb-2">Multi-Venue Analytics</h4>
                        <p class="font-inter text-xs text-[#032147]/70">Executive dashboards comparing table turns, RevPASH, and branch labor ratios.</p>
                    </div>
                </div>
            </div>

            <!-- 5. ADVISORY PANEL -->
            <div data-pillar-panel="advisory" class="hidden space-y-8">
                <div class="p-8 rounded-3xl bg-white/70 border border-[#B7A38B]/30 grid lg:grid-cols-12 gap-8 items-center shadow-lg">
                    <div class="lg:col-span-7">
                        <span class="text-[11px] font-mono text-[#B7A38B] font-bold uppercase tracking-widest">[ PILLAR 05 · COMMERCIAL ADVISORY ]</span>
                        <h3 class="font-canela text-3xl font-bold text-[#032147] mt-2 mb-4">OPHRON ADVISORY — Strategic Executive Guidance</h3>
                        <p class="font-inter text-sm text-[#032147]/80 leading-relaxed">
                            C-suite operational diagnostics, menu engineering, RevPASH maximization, and cross-border expansion playbooks for hospitality groups.
                        </p>
                    </div>
                    <div class="lg:col-span-5 flex justify-end">
                        <a href="#contact" class="px-6 py-3 rounded-full bg-[#032147] text-[#EDE5DA] text-xs font-bold uppercase tracking-wider shadow-md hover:scale-105 transition">
                            Schedule Advisory Consultation
                        </a>
                    </div>
                </div>

                <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div class="p-6 rounded-2xl bg-white/50 border border-[#032147]/10 hover:border-[#032147] transition">
                        <div class="font-mono text-xs text-[#B7A38B] font-bold mb-2">05.01</div>
                        <h4 class="font-canela text-lg font-bold text-[#032147] mb-2">RevPASH & Yield Optimization</h4>
                        <p class="font-inter text-xs text-[#032147]/70">Granular pricing strategies and service pace tuning to maximize seat revenue.</p>
                    </div>
                    <div class="p-6 rounded-2xl bg-white/50 border border-[#032147]/10 hover:border-[#032147] transition">
                        <div class="font-mono text-xs text-[#B7A38B] font-bold mb-2">05.02</div>
                        <h4 class="font-canela text-lg font-bold text-[#032147] mb-2">Cross-Border Expansion</h4>
                        <p class="font-inter text-xs text-[#032147]/70">Playbooks for scaling Singapore F&B concepts into Southeast Asian gateway cities.</p>
                    </div>
                    <div class="p-6 rounded-2xl bg-white/50 border border-[#032147]/10 hover:border-[#032147] transition">
                        <div class="font-mono text-xs text-[#B7A38B] font-bold mb-2">05.03</div>
                        <h4 class="font-canela text-lg font-bold text-[#032147] mb-2">Vendor Rationalization</h4>
                        <p class="font-inter text-xs text-[#032147]/70">Consolidating fragmented procurement into unified Master Service Agreements (MSAs).</p>
                    </div>
                    <div class="p-6 rounded-2xl bg-white/50 border border-[#032147]/10 hover:border-[#032147] transition">
                        <div class="font-mono text-xs text-[#B7A38B] font-bold mb-2">05.04</div>
                        <h4 class="font-canela text-lg font-bold text-[#032147] mb-2">M&A Operational Diligence</h4>
                        <p class="font-inter text-xs text-[#032147]/70">Operational health audits and lease diligence for hospitality acquisitions.</p>
                    </div>
                </div>
            </div>

        </div>

    </div>
</section>
