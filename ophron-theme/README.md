# OPHRON — Standard WordPress Theme

A high-performance, pixel-perfect WordPress Theme engineered for **OPHRON Hospitality Operational Infrastructure Platform**. 

Preserves 100% of the original bespoke visual design, luxury typography, champagne gold & navy branding, interactive 5-pillar tabs, 60fps viewport reveals, and smooth modal experiences, while providing full native WordPress CMS capabilities and seamless compatibility with **Rank Math SEO** and **Yoast SEO**.

---

## 📦 Theme Structure

```
ophron-theme/
├── 404.php                 # 404 Error Page
├── archive.php             # Archive / Category Listing
├── footer.php              # Full 5-Pillar Footer & Modal Wrappers
├── front-page.php          # Master Front-Page (All 12 Sections)
├── functions.php           # Theme Setup, Enqueues, Menus & AJAX
├── header.php              # Responsive Header, Brand Logo & Live Clock
├── index.php               # Blog / Insights Fallback Template
├── page.php                # Standard WordPress Page Template
├── screenshot.png          # WordPress Theme Admin Preview
├── single.php              # Single Research Article / Post Template
├── style.css               # WordPress Theme Headers & Core Base Styles
├── assets/
│   ├── css/
│   │   └── ophron-style.css # Full Compiled Tailwind & Animation CSS (156KB)
│   ├── js/
│   │   └── ophron-main.js   # Interactivity, Live Clock, Modals & Tabs
│   └── images/              # All Portals, Badges, Emblems & Venue Photos
├── inc/
│   ├── ajax-handlers.php    # SG Facility Audit Form Submission Handler
│   ├── custom-post-types.php# CPTs for Services, Testimonials & Articles
│   └── seo-schema.php       # JSON-LD Rich Structured Data
└── template-parts/
    ├── modal-reader.php     # Dynamic Article Reader Modal
    ├── modal-service.php    # Specialized Service Details Modal
    ├── section-about.php    # Strategic Operating Platform & Bento Cards
    ├── section-approach.php # 3-Step Operating Pipeline
    ├── section-blog.php     # Research & Insights Listing
    ├── section-contact.php  # SG Facility Audit Inbound Form
    ├── section-gallery.php  # Infrastructure Field Gallery
    ├── section-hero.php     # Master Headline & 5-Metric Counter Strip
    ├── section-logos.php    # 140+ Partner Venues Marquee
    ├── section-problems.php # 4 Industry Bottlenecks
    ├── section-showcase.php # Featured Case Studies
    ├── section-solutions.php# 5 Operational Pillars with Interactive Tabs
    ├── section-testimonials.php # Executive Endorsements
    └── section-whyus.php    # NEA Licensed & bizSAFE Level 3 Badges
```

---

## 🚀 Installation & Quick Start

### Method 1: Upload via WordPress Admin
1. Open your WordPress Admin (`/wp-admin`).
2. Navigate to **Appearance > Themes > Add New > Upload Theme**.
3. Choose the file **`ophron-theme.zip`** located in your project root.
4. Click **Install Now** and then click **Activate**.

### Method 2: Manual Folder Copy
1. Copy the entire `ophron-theme/` directory into your WordPress installation under:
   `wp-content/themes/ophron-theme/`
2. In WordPress Admin, go to **Appearance > Themes** and activate **OPHRON**.

---

## 🔍 SEO Handoff Guide (For your SEO Specialist)

This theme is pre-configured for instant SEO optimization:

1. **Install Rank Math SEO (Recommended) or Yoast SEO:**
   * Go to **Plugins > Add New** > Search `Rank Math SEO` > Install & Activate.
   * The theme's clean template tags automatically hook into Rank Math's title, meta description, and OpenGraph tags.

2. **Managing Meta Titles & Descriptions:**
   * The SEO person can edit meta titles, focus keywords, and social snippet cards right inside the page/post editor.

3. **XML Sitemaps:**
   * Automatically generated at `/sitemap_index.xml` via Rank Math / Yoast.

4. **Structured Schema:**
   * Native JSON-LD organization schema is included in `inc/seo-schema.php` with automatic fallback.

---

## ⚙️ Customization & Features

- **Live Singapore / IST Clock:** Built into header navigation.
- **Inbound Audit Forms:** Handled via secure WordPress AJAX (`inc/ajax-handlers.php`), sending email notifications to the site administrator.
- **5-Pillars Tab Switcher:** Allows visitors to switch between People, Hygiene, Facilities, Technology, and Advisory without page refreshes.
