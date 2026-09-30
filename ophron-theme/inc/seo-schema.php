<?php
/**
 * SEO Schema & Metadata Engine for OPHRON WordPress Theme
 * Seamlessly injects JSON-LD Structured Data for Google Rich Results
 * Works in tandem with Rank Math SEO / Yoast SEO / AIOSEO.
 */

if (!defined('ABSPATH')) {
    exit;
}

function ophron_output_structured_data() {
    // Only output if Rank Math or Yoast haven't already taken over primary schema
    if (function_exists('rank_math') || defined('WPSEO_VERSION')) {
        return;
    }

    $site_url = esc_url(home_url('/'));
    $site_name = esc_attr(get_bloginfo('name'));
    $site_desc = esc_attr(get_bloginfo('description'));
    $logo_url = esc_url(get_template_directory_uri() . '/assets/images/brand/ophron-gold-emblem-transparent.png');

    $schema = array(
        '@context' => 'https://schema.org',
        '@graph' => array(
            array(
                '@type' => 'Organization',
                '@id' => $site_url . '#organization',
                'name' => 'OPHRON',
                'alternateName' => 'OPHRON Systems',
                'url' => $site_url,
                'logo' => $logo_url,
                'contactPoint' => array(
                    array(
                        '@type' => 'ContactPoint',
                        'telephone' => '+65-9295-1155',
                        'contactType' => 'customer service',
                        'areaServed' => 'SG',
                        'availableLanguage' => array('en')
                    )
                ),
                'address' => array(
                    '@type' => 'PostalAddress',
                    'streetAddress' => '26 Sin Ming Lane, #05-124 Midview City',
                    'addressLocality' => 'Singapore',
                    'postalCode' => '573971',
                    'addressCountry' => 'SG'
                )
            ),
            array(
                '@type' => 'LocalBusiness',
                '@id' => $site_url . '#localbusiness',
                'name' => 'OPHRON Operational Infrastructure Platform',
                'image' => $logo_url,
                'telephone' => '+6592951155',
                'priceRange' => '$$$$',
                'address' => array(
                    '@type' => 'PostalAddress',
                    'streetAddress' => '26 Sin Ming Lane, #05-124 Midview City',
                    'addressLocality' => 'Singapore',
                    'postalCode' => '573971',
                    'addressCountry' => 'SG'
                )
            )
        )
    );

    echo '<script type="application/ld+json">' . wp_json_encode($schema, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT) . '</script>' . "\n";
}
add_action('wp_head', 'ophron_output_structured_data', 20);
