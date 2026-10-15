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
            <h1 class="text-4xl font-bold font-serif">One partner. One ecosystem. Better operations.</h1>
            <p class="mt-4 text-lg">OPHRON helps Singapore restaurants, hotels and commercial properties manage manpower, cleaning, hygiene and facilities with one accountable operating partner.</p>
        </main>
    </noscript>
</div>

<?php
get_footer();
