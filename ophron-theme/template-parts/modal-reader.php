<?php
/**
 * Template Part: Article Reader Modal
 *
 * @package Ophron
 */
?>
<div id="ophron-reader-modal" class="fixed inset-0 z-50 hidden bg-[#032147]/80 backdrop-blur-md flex items-center justify-center p-4">
    <div class="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#EDE5DA] text-[#032147] p-8 sm:p-12 shadow-2xl border border-[#B7A38B]/40">
        
        <!-- Close Button -->
        <button class="ophron-close-modal absolute top-6 right-6 h-10 w-10 grid place-items-center rounded-full bg-[#032147]/10 hover:bg-[#032147] hover:text-[#EDE5DA] transition text-[#032147]">
            <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>

        <div id="reader-category" class="text-[11px] font-mono text-[#B7A38B] font-bold uppercase tracking-widest mb-3">
            [ RESEARCH & EDITORIAL BRIEFING ]
        </div>

        <h2 id="reader-title" class="font-canela text-2xl sm:text-4xl font-bold text-[#032147] mb-4 leading-tight">
            Research Article
        </h2>

        <div class="flex items-center gap-4 text-xs font-mono text-[#032147]/60 pb-6 border-b border-[#032147]/15 mb-6">
            <span id="reader-author">OPHRON Operations Research</span>
            <span>·</span>
            <span id="reader-date">March 2026</span>
            <span>·</span>
            <span id="reader-time">8 min read</span>
        </div>

        <div id="reader-content" class="font-inter text-sm sm:text-base text-[#032147]/85 leading-relaxed space-y-4">
            <!-- Dynamic article content injected via JS -->
        </div>

        <div class="mt-8 pt-6 border-t border-[#032147]/15 flex items-center justify-between">
            <span class="text-xs font-mono text-[#B7A38B] font-bold">OPHRON CENTRAL EDITORIAL</span>
            <button class="ophron-close-modal px-6 py-2 rounded-full bg-[#032147] text-[#EDE5DA] text-xs font-bold uppercase tracking-wider">
                Close Briefing
            </button>
        </div>

    </div>
</div>
