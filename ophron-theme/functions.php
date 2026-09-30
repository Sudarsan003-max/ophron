<?php
/**
 * OPHRON WordPress Theme Functions and definitions
 * High-Performance React + WordPress Engine
 *
 * @package Ophron
 * @version 1.0.0
 */

if (!defined('ABSPATH')) {
    exit;
}

// 1. Include Subsystems
require_once get_template_directory() . '/inc/custom-post-types.php';
require_once get_template_directory() . '/inc/seo-schema.php';
require_once get_template_directory() . '/inc/ajax-handlers.php';

// 2. Theme Setup
function ophron_theme_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    set_post_thumbnail_size(1200, 630, true);

    add_theme_support('custom-logo', array(
        'height'      => 80,
        'width'       => 280,
        'flex-height' => true,
        'flex-width'  => true,
    ));

    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script'
    ));

    add_theme_support('align-wide');
    add_theme_support('responsive-embeds');

    register_nav_menus(array(
        'primary-menu' => __('Primary Header Menu', 'ophron'),
        'footer-menu'  => __('Footer Quick Links', 'ophron'),
    ));
}
add_action('after_setup_theme', 'ophron_theme_setup');

// 3. Enqueue Exact Compiled React + Tailwind Styles & Scripts
function ophron_enqueue_assets() {
    // Google Fonts (Cinzel, Inter, Montserrat, Playfair Display, JetBrains Mono)
    wp_enqueue_style(
        'ophron-google-fonts',
        'https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,600&family=Playfair+Display:ital,wght@0,500;0,600;0,700;0,800;1,600&family=JetBrains+Mono:wght@400;500;600&display=swap',
        array(),
        null
    );

    // Compiled exact Tailwind CSS
    wp_enqueue_style(
        'ophron-app-style',
        get_template_directory_uri() . '/assets/dist/css/ophron-app.css',
        array(),
        '1.0.0'
    );

    // WordPress style.css
    wp_enqueue_style(
        'ophron-theme-style',
        get_stylesheet_uri(),
        array('ophron-app-style'),
        '1.0.0'
    );

    // Compiled exact React + Framer Motion + Lenis Bundle
    wp_enqueue_script(
        'ophron-app-script',
        get_template_directory_uri() . '/assets/dist/js/ophron-app.js',
        array(),
        '1.0.0',
        true
    );

    // WordPress context & AJAX data for React
    wp_localize_script('ophron-app-script', 'ophronData', array(
        'ajaxUrl'   => admin_url('admin-ajax.php'),
        'nonce'     => wp_create_nonce('ophron_contact_nonce'),
        'siteUrl'   => home_url('/'),
        'siteName'  => get_bloginfo('name'),
        'themeUrl'  => get_template_directory_uri(),
    ));
}
add_action('wp_enqueue_scripts', 'ophron_enqueue_assets');

// 4. Enable ES Module Support for the React App Script
function ophron_set_script_as_module($tag, $handle, $src) {
    if ('ophron-app-script' === $handle) {
        return '<script type="module" src="' . esc_url($src) . '" id="ophron-app-script-js"></script>';
    }
    return $tag;
}
add_filter('script_loader_tag', 'ophron_set_script_as_module', 10, 3);

// 5. Helper function for asset paths
function ophron_asset($path) {
    return esc_url(get_template_directory_uri() . '/assets/' . ltrim($path, '/'));
}
