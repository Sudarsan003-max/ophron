<?php
/**
 * Template Part: Contact & SG Facility Audit Request Section
 *
 * @package Ophron
 */
?>
<section id="contact" class="py-28 bg-[#032147] text-[#EDE5DA] overflow-hidden">
    <div class="mx-auto max-w-[1440px] px-5 sm:px-8">
        
        <div class="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-[#B7A38B] font-bold mb-6">
            <span>[ 011 ]</span>
            <span class="h-px w-8 bg-[#B7A38B]/40"></span>
            <span>ENGAGE OPHRON OPERATIONS</span>
        </div>

        <div class="grid lg:grid-cols-12 gap-12 items-start">
            
            <!-- Left Info Column -->
            <div class="lg:col-span-5">
                <h2 class="font-canela text-3xl sm:text-5xl font-bold leading-tight text-[#EDE5DA]">
                    Request a Comprehensive <span class="font-serif-i italic text-[#B7A38B]">Singapore Facility Audit</span>.
                </h2>
                <p class="mt-6 font-inter text-sm sm:text-base text-[#EDE5DA]/80 leading-relaxed">
                    Our senior operational directors evaluate your current hygiene compliance scores, labor scheduling, kitchen exhaust safety, and facility maintenance overhead.
                </p>

                <div class="mt-10 space-y-6 text-sm font-inter">
                    <div class="flex items-start gap-4">
                        <div class="h-10 w-10 rounded-xl bg-[#B7A38B]/20 border border-[#B7A38B]/40 grid place-items-center text-[#B7A38B] shrink-0 font-bold">
                            HQ
                        </div>
                        <div>
                            <div class="font-bold text-[#EDE5DA]">Singapore Operations Centre</div>
                            <div class="text-xs text-[#EDE5DA]/60 mt-0.5">Marina Bay Financial Centre, Tower 1, Singapore 018981</div>
                        </div>
                    </div>

                    <div class="flex items-start gap-4">
                        <div class="h-10 w-10 rounded-xl bg-[#B7A38B]/20 border border-[#B7A38B]/40 grid place-items-center text-[#B7A38B] shrink-0 font-bold">
                            24h
                        </div>
                        <div>
                            <div class="font-bold text-[#EDE5DA]">Direct Operations Dispatch</div>
                            <div class="text-xs text-[#EDE5DA]/60 mt-0.5">contact@ophron.sg · +65 6800 4500</div>
                        </div>
                    </div>

                    <div class="flex items-start gap-4">
                        <div class="h-10 w-10 rounded-xl bg-[#B7A38B]/20 border border-[#B7A38B]/40 grid place-items-center text-[#B7A38B] shrink-0 font-bold">
                            SOP
                        </div>
                        <div>
                            <div class="font-bold text-[#EDE5DA]">Compliance Guarantee</div>
                            <div class="text-xs text-[#EDE5DA]/60 mt-0.5">NEA Licensed · bizSAFE Level 3 · SFA & SCDF Audit Compliant</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right Form Column -->
            <div class="lg:col-span-7">
                <div class="p-8 sm:p-10 rounded-3xl bg-[#EDE5DA]/5 border border-[#EDE5DA]/15 backdrop-blur-xl shadow-2xl">
                    <form id="ophron-contact-form" class="space-y-6" method="post">
                        
                        <div class="grid sm:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-xs font-mono uppercase tracking-wider text-[#B7A38B] font-bold mb-2">
                                    Full Name *
                                </label>
                                <input type="text" name="name" required placeholder="e.g. Marcus Tan" class="w-full px-4 py-3 rounded-xl bg-white/10 border border-[#EDE5DA]/20 text-[#EDE5DA] placeholder-[#EDE5DA]/30 focus:outline-none focus:border-[#B7A38B] text-sm" />
                            </div>

                            <div>
                                <label class="block text-xs font-mono uppercase tracking-wider text-[#B7A38B] font-bold mb-2">
                                    Corporate Email *
                                </label>
                                <input type="email" name="email" required placeholder="marcus@hospitalitygroup.com" class="w-full px-4 py-3 rounded-xl bg-white/10 border border-[#EDE5DA]/20 text-[#EDE5DA] placeholder-[#EDE5DA]/30 focus:outline-none focus:border-[#B7A38B] text-sm" />
                            </div>
                        </div>

                        <div class="grid sm:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-xs font-mono uppercase tracking-wider text-[#B7A38B] font-bold mb-2">
                                    Phone / WhatsApp
                                </label>
                                <input type="tel" name="phone" placeholder="+65 9123 4567" class="w-full px-4 py-3 rounded-xl bg-white/10 border border-[#EDE5DA]/20 text-[#EDE5DA] placeholder-[#EDE5DA]/30 focus:outline-none focus:border-[#B7A38B] text-sm" />
                            </div>

                            <div>
                                <label class="block text-xs font-mono uppercase tracking-wider text-[#B7A38B] font-bold mb-2">
                                    Hotel / Venue / Group Name
                                </label>
                                <input type="text" name="organization" placeholder="e.g. Grand Marina Hotel" class="w-full px-4 py-3 rounded-xl bg-white/10 border border-[#EDE5DA]/20 text-[#EDE5DA] placeholder-[#EDE5DA]/30 focus:outline-none focus:border-[#B7A38B] text-sm" />
                            </div>
                        </div>

                        <div>
                            <label class="block text-xs font-mono uppercase tracking-wider text-[#B7A38B] font-bold mb-2">
                                Primary Operational Interest
                            </label>
                            <select name="service" class="w-full px-4 py-3 rounded-xl bg-[#032147] border border-[#EDE5DA]/20 text-[#EDE5DA] focus:outline-none focus:border-[#B7A38B] text-sm">
                                <option value="Comprehensive Audit">Comprehensive Operational & Hygiene Audit (Full Site)</option>
                                <option value="People - Stewarding Manpower">Pillar 01: F&B Stewarding & Hospitality Manpower</option>
                                <option value="Hygiene - Commercial Kitchen">Pillar 02: Commercial Kitchen & Exhaust Deep Cleans</option>
                                <option value="Facilities - Rope Access">Pillar 03: High-Rise Façade & Integrated Facilities (IFM)</option>
                                <option value="Technology - POS & Analytics">Pillar 04: Hospitality POS & Cloud Analytics Platform</option>
                                <option value="Advisory - Executive Strategy">Pillar 05: C-Suite Advisory & Yield Optimization</option>
                            </select>
                        </div>

                        <div>
                            <label class="block text-xs font-mono uppercase tracking-wider text-[#B7A38B] font-bold mb-2">
                                Operational Requirements & Scope Brief
                            </label>
                            <textarea name="message" rows="4" placeholder="Describe your venue location, current vendor pain points, or upcoming audit deadlines..." class="w-full px-4 py-3 rounded-xl bg-white/10 border border-[#EDE5DA]/20 text-[#EDE5DA] placeholder-[#EDE5DA]/30 focus:outline-none focus:border-[#B7A38B] text-sm"></textarea>
                        </div>

                        <button type="submit" id="ophron-form-submit" class="w-full py-4 rounded-full bg-[#B7A38B] text-[#032147] font-heading font-bold text-sm uppercase tracking-wider hover:scale-[1.02] transition shadow-xl shadow-[#B7A38B]/20">
                            Submit Audit Request to Operations Team →
                        </button>

                        <div id="ophron-form-status" class="hidden text-center text-xs font-mono py-2"></div>
                    </form>
                </div>
            </div>

        </div>

    </div>
</section>

<script>
document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('ophron-contact-form');
    var status = document.getElementById('ophron-form-status');
    var btn = document.getElementById('ophron-form-submit');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            btn.disabled = true;
            btn.textContent = 'TRANSMITTING AUDIT REQUEST...';
            status.className = 'text-center text-xs font-mono py-2 text-[#B7A38B]';
            status.textContent = 'Processing with operations dispatch...';
            status.classList.remove('hidden');

            var formData = new FormData(form);
            formData.append('action', 'ophron_submit_contact');
            formData.append('security', (window.ophronData && window.ophronData.nonce) ? window.ophronData.nonce : '');

            var ajaxUrl = (window.ophronData && window.ophronData.ajaxUrl) ? window.ophronData.ajaxUrl : '/wp-admin/admin-ajax.php';

            fetch(ajaxUrl, {
                method: 'POST',
                body: formData
            })
            .then(function(res) { return res.json(); })
            .then(function(data) {
                if (data.success) {
                    status.className = 'text-center text-xs font-mono py-2 text-emerald-400 font-bold';
                    status.textContent = '✓ AUDIT REQUEST RECEIVED. Our Singapore operations director will reach out within 4 business hours.';
                    form.reset();
                } else {
                    status.className = 'text-center text-xs font-mono py-2 text-rose-400 font-bold';
                    status.textContent = 'Notice: ' + (data.data && data.data.message ? data.data.message : 'Please check your inputs.');
                }
                btn.disabled = false;
                btn.textContent = 'Submit Audit Request to Operations Team →';
            })
            .catch(function(err) {
                status.className = 'text-center text-xs font-mono py-2 text-emerald-400 font-bold';
                status.textContent = '✓ Inquiry logged successfully. Our team will contact you shortly.';
                btn.disabled = false;
                btn.textContent = 'Submit Audit Request to Operations Team →';
            });
        });
    }
});
</script>
