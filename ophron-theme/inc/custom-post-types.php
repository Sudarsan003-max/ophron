<?php
/**
 * Custom Post Types for OPHRON WordPress Theme
 * - Services (ophron_service)
 * - Testimonials / Client Venues (ophron_testimonial)
 * - Articles / Insights (ophron_article)
 */

if (!defined('ABSPATH')) {
    exit;
}

function ophron_register_custom_post_types() {
    // 1. Services CPT
    $service_labels = array(
        'name'               => _x('Services', 'post type general name', 'ophron'),
        'singular_name'      => _x('Service', 'post type singular name', 'ophron'),
        'menu_name'          => _x('OPHRON Services', 'admin menu', 'ophron'),
        'name_admin_bar'     => _x('Service', 'add new on admin bar', 'ophron'),
        'add_new'            => _x('Add New Service', 'service', 'ophron'),
        'add_new_item'       => __('Add New Service', 'ophron'),
        'new_item'           => __('New Service', 'ophron'),
        'edit_item'          => __('Edit Service', 'ophron'),
        'view_item'          => __('View Service', 'ophron'),
        'all_items'          => __('All Services', 'ophron'),
        'search_items'       => __('Search Services', 'ophron'),
        'not_found'          => __('No services found.', 'ophron'),
        'not_found_in_trash' => __('No services found in Trash.', 'ophron')
    );

    $service_args = array(
        'labels'             => $service_labels,
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array('slug' => 'services', 'with_front' => false),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => 5,
        'menu_icon'          => 'dashicons-shield',
        'supports'           => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
        'show_in_rest'       => true, // Enables Gutenberg and REST API
    );
    register_post_type('ophron_service', $service_args);

    // Register Service Pillar Taxonomy (People, Hygiene, Facilities, Technology, Advisory)
    register_taxonomy('ophron_pillar', 'ophron_service', array(
        'label'        => __('Operational Pillars', 'ophron'),
        'rewrite'      => array('slug' => 'pillar'),
        'hierarchical' => true,
        'show_in_rest' => true,
    ));

    // 2. Testimonials CPT
    $testimonial_labels = array(
        'name'               => _x('Testimonials & Venues', 'post type general name', 'ophron'),
        'singular_name'      => _x('Testimonial', 'post type singular name', 'ophron'),
        'menu_name'          => _x('Testimonials', 'admin menu', 'ophron'),
        'add_new'            => _x('Add Testimonial', 'testimonial', 'ophron'),
        'add_new_item'       => __('Add New Testimonial', 'ophron'),
        'edit_item'          => __('Edit Testimonial', 'ophron'),
        'all_items'          => __('All Testimonials', 'ophron'),
    );

    $testimonial_args = array(
        'labels'             => $testimonial_labels,
        'public'             => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'menu_position'      => 6,
        'menu_icon'          => 'dashicons-star-filled',
        'supports'           => array('title', 'editor', 'thumbnail', 'custom-fields'),
        'show_in_rest'       => true,
    );
    register_post_type('ophron_testimonial', $testimonial_args);

    // 3. Articles / Research CPT (or standard posts)
    $article_labels = array(
        'name'               => _x('Articles & Insights', 'post type general name', 'ophron'),
        'singular_name'      => _x('Article', 'post type singular name', 'ophron'),
        'menu_name'          => _x('Articles & Insights', 'admin menu', 'ophron'),
        'add_new'            => _x('Add Article', 'article', 'ophron'),
        'add_new_item'       => __('Add New Article', 'ophron'),
        'edit_item'          => __('Edit Article', 'ophron'),
        'all_items'          => __('All Articles', 'ophron'),
    );

    $article_args = array(
        'labels'             => $article_labels,
        'public'             => true,
        'has_archive'        => true,
        'rewrite'            => array('slug' => 'insights', 'with_front' => false),
        'menu_position'      => 7,
        'menu_icon'          => 'dashicons-welcome-write-blog',
        'supports'           => array('title', 'editor', 'thumbnail', 'excerpt', 'author', 'custom-fields'),
        'show_in_rest'       => true,
    );
    register_post_type('ophron_article', $article_args);

    register_taxonomy('ophron_article_cat', 'ophron_article', array(
        'label'        => __('Article Categories', 'ophron'),
        'rewrite'      => array('slug' => 'insights-category'),
        'hierarchical' => true,
        'show_in_rest' => true,
    ));
}
add_action('init', 'ophron_register_custom_post_types');
