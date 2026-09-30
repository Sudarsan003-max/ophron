<?php
/**
 * Master Front-Page Template for OPHRON WordPress Theme
 *
 * @package Ophron
 */

get_header();
?>

<div id="root">
    <!-- Server-Side SEO Fallback for Search Engine Crawlers (overridden on client-side React hydration) -->
    <noscript>
        <main class="p-8 text-center bg-[#EDE5DA] text-[#032147]">
            <h1 class="text-4xl font-bold font-serif">OPHRON — Hospitality & Facilities Operational Infrastructure</h1>
            <p class="mt-4 text-lg">Unifying People, Hygiene, Facilities, Technology, and Commercial Intelligence across Singapore & globally. NEA Licensed & bizSAFE Level 3 Certified.</p>
        </main>
    </noscript>
</div>

<?php
get_footer();
