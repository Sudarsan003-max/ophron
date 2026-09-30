<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @package Ophron
 */

get_header();
?>

<main id="primary" class="site-main pt-40 pb-32 bg-[#EDE5DA] min-h-screen flex items-center">
    <div class="mx-auto max-w-[800px] px-5 sm:px-8 text-center">
        
        <div class="text-xs font-mono uppercase tracking-[0.25em] text-[#B7A38B] font-bold mb-4">
            [ 404 · LOCATION NOT FOUND ]
        </div>

        <h1 class="font-canela text-5xl sm:text-7xl font-bold text-[#032147] mb-6">
            Page Not Located.
        </h1>

        <p class="font-inter text-base sm:text-lg text-[#032147]/75 max-w-lg mx-auto mb-10 leading-relaxed">
            The operational briefing or service page you requested is not currently active on the OPHRON platform.
        </p>

        <a href="<?php echo esc_url(home_url('/')); ?>" class="inline-flex items-center gap-3 rounded-full bg-[#032147] text-[#EDE5DA] px-8 py-3.5 text-xs font-heading font-bold uppercase tracking-wider hover:scale-105 transition shadow-lg shadow-[#032147]/20">
            Return to Operational Platform Home →
        </a>

    </div>
</main>

<?php
get_footer();
