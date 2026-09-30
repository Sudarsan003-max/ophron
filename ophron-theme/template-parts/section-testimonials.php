<?php
/**
 * Template Part: Testimonials Section
 *
 * @package Ophron
 */

$testimonials = array(
    array(
        'quote' => 'OPHRON eliminated our stewarding shortages overnight. Their WSQ-trained team integrated into our banquet kitchens effortlessly, and our SFA inspection passed with flying colors.',
        'author' => 'Executive Chef & Operations Director',
        'venue' => '5-Star Hotel, Marina Bay Singapore',
        'badge' => 'PEOPLE & HYGIENE'
    ),
    array(
        'quote' => 'Consolidating our exhaust cleaning, rope access window maintenance, and kitchen line degreasing under OPHRON reduced our monthly administrative burden by over 40%.',
        'author' => 'Head of Facilities & Asset Management',
        'venue' => 'Commercial Lifestyle Complex, Orchard',
        'badge' => 'IFM & FACILITIES'
    ),
    array(
        'quote' => 'The OPHRON POS and labor tracking dashboard gave us immediate visibility into hourly food cost and table velocity. We improved margins within the first quarter.',
        'author' => 'Managing Partner',
        'venue' => 'Multi-Concept Restaurant Group (8 Outlets)',
        'badge' => 'TECH & ADVISORY'
    ),
);
?>
<section class="py-28 bg-[#032147] text-[#EDE5DA] overflow-hidden">
    <div class="mx-auto max-w-[1440px] px-5 sm:px-8">
        
        <div class="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-[#B7A38B] font-bold mb-6">
            <span>[ 009 ]</span>
            <span class="h-px w-8 bg-[#B7A38B]/40"></span>
            <span>EXECUTIVE ENDORSEMENTS</span>
        </div>

        <div class="grid lg:grid-cols-12 gap-10 items-end mb-14">
            <div class="lg:col-span-8">
                <h2 class="font-canela text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#EDE5DA]">
                    What Hospitality <span class="font-serif-i italic text-[#B7A38B]">Leaders</span> Say.
                </h2>
            </div>
            <div class="lg:col-span-4 text-sm font-inter text-[#EDE5DA]/70">
                Direct feedback from General Managers, Executive Chefs, and Group COO partners across Southeast Asia.
            </div>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
            <?php foreach ($testimonials as $t): ?>
                <div class="p-8 rounded-3xl bg-[#EDE5DA]/5 border border-[#EDE5DA]/10 hover:border-[#B7A38B] transition flex flex-col justify-between">
                    <div>
                        <div class="text-[10px] font-mono uppercase tracking-widest text-[#B7A38B] font-bold mb-4">
                            [ <?php echo esc_html($t['badge']); ?> ]
                        </div>
                        <p class="font-canela text-lg italic text-[#EDE5DA]/90 leading-relaxed mb-6">
                            "<?php echo esc_html($t['quote']); ?>"
                        </p>
                    </div>
                    <div class="pt-6 border-t border-[#EDE5DA]/15">
                        <div class="font-heading font-bold text-sm text-[#EDE5DA]"><?php echo esc_html($t['author']); ?></div>
                        <div class="text-xs font-inter text-[#B7A38B] mt-0.5"><?php echo esc_html($t['venue']); ?></div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>

    </div>
</section>
