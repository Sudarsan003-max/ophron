<?php
/**
 * Template Part: Logos / Partner Marquee Section
 *
 * @package Ophron
 */

$venues = array(
    array('name' => 'ATLAS Bar Singapore', 'sub' => 'Parkview Square', 'img' => 'venue-atlas.jpg'),
    array('name' => 'Pan Pacific Hotels Group', 'sub' => 'Luxury Hospitality', 'img' => 'venue-panpacific.jpg'),
    array('name' => 'YOTEL Singapore', 'sub' => 'Orchard Road', 'img' => 'venue-yotel.jpg'),
    array('name' => 'Lion Brewery Co', 'sub' => 'Commercial F&B', 'img' => 'venue-lionbrewery.jpg'),
    array('name' => 'Baker & Cook', 'sub' => 'Artisan F&B Group', 'img' => 'venue-bakercook.jpg'),
    array('name' => 'The Guild Singapore', 'sub' => 'Keong Saik', 'img' => 'venue-uykd.jpg'),
);
?>
<section class="py-14 border-y border-[#B7A38B]/20 bg-[#EDE5DA]/50 overflow-hidden">
    <div class="mx-auto max-w-[1440px] px-5 sm:px-8 mb-6">
        <div class="text-center">
            <span class="text-[11px] font-mono uppercase tracking-[0.25em] text-[#B7A38B] font-bold">
                TRUSTED BY 140+ PREMIER HOTELS, RESORTS & F&B OPERATORS IN SINGAPORE
            </span>
        </div>
    </div>

    <!-- Scrolling marquee -->
    <div class="flex overflow-hidden relative">
        <div class="marquee-track flex gap-8 whitespace-nowrap py-2">
            <?php foreach (array_merge($venues, $venues) as $v): ?>
                <div class="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/50 border border-[#B7A38B]/30 shadow-sm backdrop-blur-sm">
                    <span class="h-2 w-2 rounded-full bg-[#B7A38B]"></span>
                    <span class="font-heading text-xs font-bold tracking-wider text-[#032147] uppercase"><?php echo esc_html($v['name']); ?></span>
                    <span class="text-[10px] font-mono text-[#032147]/50"><?php echo esc_html($v['sub']); ?></span>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
