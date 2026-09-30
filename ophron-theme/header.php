<?php
/**
 * The header for OPHRON WordPress Theme
 *
 * @package Ophron
 */
?>
<!doctype html>
<html <?php language_attributes(); ?> class="scroll-smooth">
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <link rel="icon" type="image/png" href="<?php echo esc_url(get_template_directory_uri() . '/images/brand/ophron-gold-emblem-transparent.png'); ?>">
    <link rel="apple-touch-icon" href="<?php echo esc_url(get_template_directory_uri() . '/images/brand/ophron-gold-emblem-transparent.png'); ?>">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,600&family=Playfair+Display:ital,wght@0,500;0,600;0,700;0,800;1,600&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
    <script>
        if (window.top !== window.self) {
            window.top.location = window.self.location;
        }
        window.__OPHRON_THEME_URL__ = "<?php echo esc_url(get_template_directory_uri()); ?>";
    </script>
    <?php wp_head(); ?>
</head>

<body <?php body_class('bg-[#EDE5DA] text-[#032147] antialiased overflow-x-hidden selection:bg-[#032147] selection:text-[#EDE5DA]'); ?>>
<?php wp_body_open(); ?>
