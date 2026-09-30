<?php
/**
 * Template Part: Blog / Editorial & Insights Section
 *
 * @package Ophron
 */

// Query latest WordPress posts
$args = array(
    'post_type'      => array('post', 'ophron_article'),
    'posts_per_page' => 3,
    'post_status'    => 'publish'
);
$blog_query = new WP_Query($args);

$fallback_articles = array(
    array(
        'title' => 'Restaurant & Kitchen Deep Cleaning in Singapore: SFA Compliance Guide',
        'cat'   => 'OPHRON Hygiene · Kitchens',
        'date'  => '19 Mar 2026',
        'time'  => '8 min read',
        'desc'  => 'Between SFA inspection grades, grease trap maintenance, and canopy fire safety, a Singapore kitchen cleaning program is its license to operate.',
        'img'   => 'photo-8629127.jpg'
    ),
    array(
        'title' => 'Hospitality Staffing Crisis in Singapore: Solving the Turnaround Bottleneck',
        'cat'   => 'OPHRON People · Workforce',
        'date'  => '14 Mar 2026',
        'time'  => '6 min read',
        'desc'  => 'Why leading hotels are replacing fragmented temp-agencies with dedicated operational infrastructure partners to secure 100% shift coverage.',
        'img'   => 'fnb_stewarding_manpower_4k.jpg'
    ),
    array(
        'title' => 'The IFM Revolution: Why Luxury Hotels Are Consolidating Vendor Contracts',
        'cat'   => 'OPHRON Facilities · IFM',
        'date'  => '08 Mar 2026',
        'time'  => '7 min read',
        'desc'  => 'How single-source integrated facility management eliminates markup layers, speeds emergency response, and safeguards asset value.',
        'img'   => 'facade_glass_tower_4k.jpg'
    ),
);
?>
<section id="blog" class="py-28 bg-[#EDE5DA] overflow-hidden">
    <div class="mx-auto max-w-[1440px] px-5 sm:px-8">
        
        <div class="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-[#B7A38B] font-bold mb-6">
            <span>[ 010 ]</span>
            <span class="h-px w-8 bg-[#B7A38B]/40"></span>
            <span>RESEARCH & EDITORIAL INSIGHTS</span>
        </div>

        <div class="grid lg:grid-cols-12 gap-10 items-end mb-14">
            <div class="lg:col-span-8">
                <h2 class="font-canela text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#032147]">
                    Operational Intelligence & <span class="font-serif-i italic text-[#B7A38B]">Field Reports</span>.
                </h2>
            </div>
            <div class="lg:col-span-4 text-sm font-inter text-[#032147]/75">
                Authoritative guides, regulatory briefings, and best practices published by OPHRON operational directors.
            </div>
        </div>

        <!-- Articles Grid -->
        <div class="grid md:grid-cols-3 gap-8">
            <?php if ($blog_query->have_posts()): ?>
                <?php while ($blog_query->have_posts()): $blog_query->the_post(); ?>
                    <article class="group rounded-3xl overflow-hidden border border-[#B7A38B]/30 bg-white/70 shadow-md flex flex-col justify-between hover:shadow-xl transition">
                        <div>
                            <div class="aspect-[16/10] w-full overflow-hidden bg-[#032147]">
                                <?php if (has_post_thumbnail()): ?>
                                    <?php the_post_thumbnail('medium_large', array('class' => 'h-full w-full object-cover group-hover:scale-105 transition-transform duration-500')); ?>
                                <?php else: ?>
                                    <img src="<?php echo ophron_asset('images/photo-8629127.jpg'); ?>" alt="<?php the_title_attribute(); ?>" class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <?php endif; ?>
                            </div>
                            <div class="p-6">
                                <div class="flex items-center justify-between text-[11px] font-mono text-[#B7A38B] font-bold mb-2">
                                    <span><?php echo esc_html(get_the_category_list(', ') ? strip_tags(get_the_category_list(', ')) : 'OPHRON Research'); ?></span>
                                    <span><?php echo get_the_date('d M Y'); ?></span>
                                </div>
                                <h3 class="font-canela text-xl font-bold text-[#032147] mb-2 group-hover:text-[#B7A38B] transition">
                                    <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                                </h3>
                                <p class="font-inter text-xs text-[#032147]/75 leading-relaxed">
                                    <?php echo wp_trim_words(get_the_excerpt(), 18, '...'); ?>
                                </p>
                            </div>
                        </div>
                        <div class="p-6 pt-0">
                            <a href="<?php the_permalink(); ?>" class="inline-flex items-center gap-2 text-xs font-bold font-heading uppercase text-[#032147] hover:text-[#B7A38B] transition">
                                Read Full Research Briefing →
                            </a>
                        </div>
                    </article>
                <?php endwhile; wp_reset_postdata(); ?>
            <?php else: ?>
                <?php foreach ($fallback_articles as $fa): ?>
                    <article class="group rounded-3xl overflow-hidden border border-[#B7A38B]/30 bg-white/70 shadow-md flex flex-col justify-between hover:shadow-xl transition">
                        <div>
                            <div class="aspect-[16/10] w-full overflow-hidden bg-[#032147]">
                                <img src="<?php echo ophron_asset('images/' . $fa['img']); ?>" alt="<?php echo esc_attr($fa['title']); ?>" class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div class="p-6">
                                <div class="flex items-center justify-between text-[11px] font-mono text-[#B7A38B] font-bold mb-2">
                                    <span><?php echo esc_html($fa['cat']); ?></span>
                                    <span><?php echo esc_html($fa['date']); ?></span>
                                </div>
                                <h3 class="font-canela text-xl font-bold text-[#032147] mb-2 group-hover:text-[#B7A38B] transition">
                                    <?php echo esc_html($fa['title']); ?>
                                </h3>
                                <p class="font-inter text-xs text-[#032147]/75 leading-relaxed">
                                    <?php echo esc_html($fa['desc']); ?>
                                </p>
                            </div>
                        </div>
                        <div class="p-6 pt-0">
                            <a href="#contact" class="inline-flex items-center gap-2 text-xs font-bold font-heading uppercase text-[#032147] hover:text-[#B7A38B] transition">
                                Request Research Whitepaper →
                            </a>
                        </div>
                    </article>
                <?php endforeach; ?>
            <?php endif; ?>
        </div>

    </div>
</section>
