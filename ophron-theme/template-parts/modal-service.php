<?php
/**
 * Template Part: Service Detail Modal
 *
 * @package Ophron
 */
?>
<div id="ophron-service-modal" class="fixed inset-0 z-50 hidden bg-[#032147]/80 backdrop-blur-md flex items-center justify-center p-4">
    <div class="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#EDE5DA] text-[#032147] p-8 sm:p-10 shadow-2xl border border-[#B7A38B]/40">
        
        <!-- Close Button -->
        <button class="ophron-close-modal absolute top-6 right-6 h-10 w-10 grid place-items-center rounded-full bg-[#032147]/10 hover:bg-[#032147] hover:text-[#EDE5DA] transition text-[#032147]">
            <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>

        <div id="modal-service-tag" class="text-[11px] font-mono text-[#B7A38B] font-bold uppercase tracking-widest mb-2">
            [ SOP OPERATIONAL STANDARD ]
        </div>

        <h3 id="modal-service-title" class="font-canela text-3xl font-bold text-[#032147] mb-4">
            Specialized Service Details
        </h3>

        <div id="modal-service-desc" class="font-inter text-sm text-[#032147]/80 leading-relaxed space-y-3 mb-8">
            Detailed operational protocols, chemical data safety sheets (MSDS), labor shift rotations, and SFA / NEA compliance benchmarks.
        </div>

        <div class="p-6 rounded-2xl bg-[#032147] text-[#EDE5DA] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
                <div class="font-bold font-heading text-sm">Need this protocol deployed at your site?</div>
                <div class="text-xs text-[#EDE5DA]/60 mt-0.5">Response within 4 business hours with dedicated supervisor.</div>
            </div>
            <a href="#contact" class="ophron-close-modal px-6 py-2.5 rounded-full bg-[#B7A38B] text-[#032147] font-bold text-xs uppercase tracking-wider shrink-0 hover:scale-105 transition">
                Request Quote
            </a>
        </div>

    </div>
</div>
