<?php
/**
 * Template Part: About & Strategic Platform Section
 *
 * @package Ophron
 */
?>
<section id="about" class="relative py-28 overflow-hidden bg-[#EDE5DA]">
    <div class="mx-auto max-w-[1440px] px-5 sm:px-8">
        
        <!-- Section Tag -->
        <div class="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-[#B7A38B] font-bold mb-6">
            <span>[ 002 ]</span>
            <span class="h-px w-8 bg-[#B7A38B]/40"></span>
            <span>STRATEGIC OPERATING PLATFORM</span>
        </div>

        <div class="grid lg:grid-cols-12 gap-12 items-start">
            <div class="lg:col-span-7">
                <h2 class="font-canela font-bold text-[36px] sm:text-[56px] lg:text-[68px] leading-[0.98] tracking-tight text-[#032147]">
                    Operations <span class="font-serif-i italic text-[#B7A38B] font-normal">unified.</span><br />
                    Hospitality empowered.
                </h2>

                <div class="scroll-reveal">
                    <p class="mt-8 font-inter text-base sm:text-lg leading-relaxed text-[#032147]/85 max-w-xl">
                        Instead of managing fragmented vendors for manpower, cleaning, and tech, OPHRON serves as your single <strong class="text-[#032147] font-semibold">Strategic Operating Partner</strong> — managing people, facilities, hygiene, technology, and performance from a single centralized platform.
                    </p>
                </div>

                <!-- Bento Metrics Grid -->
                <div class="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div class="p-6 rounded-2xl bg-[#032147] text-[#EDE5DA] shadow-lg">
                        <div class="font-montserrat font-bold text-3xl text-[#B7A38B]">5 Pillars</div>
                        <div class="mt-1 text-xs font-heading uppercase tracking-wider text-[#EDE5DA]/80">Complete Infrastructure</div>
                    </div>

                    <div class="p-6 rounded-2xl bg-[#B7A38B]/20 border border-[#B7A38B]/40 text-[#032147] shadow-sm">
                        <div class="font-montserrat font-bold text-3xl text-[#032147]">Singapore</div>
                        <div class="mt-1 text-xs font-heading uppercase tracking-wider text-[#032147]/80">& Regional Hubs</div>
                    </div>

                    <div class="p-6 rounded-2xl bg-white/60 border border-[#032147]/10 text-[#032147] shadow-sm">
                        <div class="font-montserrat font-bold text-3xl text-[#032147]" data-counter-target="100" data-counter-suffix="%">100%</div>
                        <div class="mt-1 text-xs font-heading uppercase tracking-wider text-[#032147]/70">SLA Compliance</div>
                    </div>
                </div>
            </div>

            <div class="lg:col-span-5 space-y-6">
                <!-- Leadership Card 1: Isaac Vivian (Founder) -->
                <div class="relative rounded-3xl overflow-hidden border border-[#B7A38B]/30 bg-[#032147] text-[#EDE5DA] p-6 sm:p-7 shadow-2xl">
                    <div class="flex items-center gap-4 mb-4">
                        <img src="<?php echo ophron_asset('images/isaac_portrait.png'); ?>" alt="Isaac Vivian — Founder, OPHRON Systems" class="h-16 w-16 rounded-full object-cover border-2 border-[#B7A38B]" onerror="this.src='<?php echo ophron_asset('images/isaac_portrait.jpg'); ?>'" />
                        <div>
                            <div class="font-canela text-xl font-bold text-[#EDE5DA]">Isaac Vivian</div>
                            <div class="text-xs font-mono uppercase tracking-wider text-[#B7A38B] font-semibold">Founder — OPHRON Systems</div>
                        </div>
                    </div>

                    <blockquote class="font-serif italic text-sm text-[#EDE5DA]/90 leading-relaxed pl-3 border-l-2 border-[#B7A38B]">
                        "We don't sell cleaning or manpower. We become the strategic operating partner that powers hospitality and commercial operations across Singapore and globally."
                    </blockquote>

                    <div class="mt-4 pt-4 border-t border-[#EDE5DA]/15 flex items-center justify-between text-xs font-mono text-[#EDE5DA]/60">
                        <span>SINGAPORE HQ</span>
                        <span class="text-[#B7A38B] font-bold">PLATFORM ARCHITECTURE</span>
                    </div>
                </div>

                <!-- Leadership Card 2: Kelvin (Director) -->
                <div class="relative rounded-3xl overflow-hidden border border-[#B7A38B]/30 bg-[#032147] text-[#EDE5DA] p-6 sm:p-7 shadow-2xl">
                    <div class="flex items-center gap-4 mb-4">
                        <img src="<?php echo ophron_asset('images/gkt_founder.jpg'); ?>" alt="Kelvin — Director, OPHRON Systems & Founder, GKT International" class="h-16 w-16 rounded-full object-cover border-2 border-[#B7A38B]" />
                        <div>
                            <div class="font-canela text-xl font-bold text-[#EDE5DA]">Kelvin</div>
                            <div class="text-xs font-mono uppercase tracking-wider text-[#B7A38B] font-semibold">Director — OPHRON Systems | Founder & MD — GKT International</div>
                        </div>
                    </div>

                    <blockquote class="font-serif italic text-sm text-[#EDE5DA]/90 leading-relaxed pl-3 border-l-2 border-[#B7A38B]">
                        "Cleanliness and operational readiness are never commodities. Since 2012, GKT has set the benchmark for Singapore’s top hotel towers, Michelin-selected kitchens, and premier commercial venues."
                    </blockquote>

                    <div class="mt-4 pt-4 border-t border-[#EDE5DA]/15 flex items-center justify-between text-xs font-mono text-[#EDE5DA]/60">
                        <span>FRONTLINE OPERATIONS</span>
                        <span class="text-[#B7A38B] font-bold">20+ YRS SG HERITAGE</span>
                    </div>
                </div>
            </div>
        </div>

    </div>
</section>
