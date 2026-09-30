<?php
/**
 * Template Part: Gallery Section (Infrastructure & Venue Visuals)
 *
 * @package Ophron
 */

$gallery_items = array(
    array('title' => 'Marina Bay Financial Tower Façade', 'cat' => 'Facilities · Rope Access', 'img' => 'facade_glass_tower_4k.jpg'),
    array('title' => 'Commercial Michelin Kitchen Deep Cleans', 'cat' => 'Hygiene · SFA Certified', 'img' => 'photo-8629127.jpg'),
    array('title' => 'Luxury Hotel Stewarding Manpower', 'cat' => 'People · WSQ Vetted', 'img' => 'fnb_stewarding_manpower_4k.jpg'),
    array('title' => 'Grand Banquet Hall Overnight Reset', 'cat' => 'Facilities · Venue Turnaround', 'img' => 'banquet_venue_4k.jpg'),
    array('title' => 'Sterile Healthcare Cleanrooms', 'cat' => 'Hygiene · ISO Class 5–8', 'img' => 'cleanroom_healthcare_4k.jpg'),
    array('title' => 'Connected POS & Analytics Terminal', 'cat' => 'Technology · SaaS Platform', 'img' => 'tech_smart_terminal_4k.jpg'),
);
?>
<section id="gallery" class="py-28 bg-[#EDE5DA] overflow-hidden">
    <div class="mx-auto max-w-[1440px] px-5 sm:px-8">
        
        <div class="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-[#B7A38B] font-bold mb-6">
            <span>[ 006 ]</span>
            <span class="h-px w-8 bg-[#B7A38B]/40"></span>
            <span>OPERATIONAL INFRASTRUCTURE GALLERY</span>
        </div>

        <div class="grid lg:grid-cols-12 gap-10 items-end mb-14">
            <div class="lg:col-span-8">
                <h2 class="font-canela text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#032147]">
                    Execution in the <span class="font-serif-i italic text-[#B7A38B]">Field</span>.
                </h2>
            </div>
            <div class="lg:col-span-4 text-sm font-inter text-[#032147]/75">
                Every deployment adheres to rigorous standard operating procedures (SOPs) with real-time digital proof of execution.
            </div>
        </div>

        <!-- Gallery Grid -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <?php foreach ($gallery_items as $item): ?>
                <div class="group relative rounded-3xl overflow-hidden border border-[#B7A38B]/30 bg-[#032147] shadow-lg">
                    <div class="aspect-[4/3] w-full overflow-hidden">
                        <img 
                            src="<?php echo ophron_asset('images/' . $item['img']); ?>" 
                            alt="<?php echo esc_attr($item['title']); ?>" 
                            class="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                        />
                    </div>
                    <div class="p-6 bg-gradient-to-t from-[#032147] via-[#032147]/80 to-transparent">
                        <div class="text-[10px] font-mono uppercase tracking-widest text-[#B7A38B] font-bold">
                            <?php echo esc_html($item['cat']); ?>
                        </div>
                        <h3 class="font-canela text-xl font-bold text-[#EDE5DA] mt-1">
                            <?php echo esc_html($item['title']); ?>
                        </h3>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>

    </div>
</section>
