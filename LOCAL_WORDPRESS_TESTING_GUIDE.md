# Complete Step-by-Step Guide: Testing OPHRON WordPress Theme Locally

This guide walks you through setting up a local WordPress environment on Windows from scratch, installing the **OPHRON** theme, and testing all pages, routes, and admin features.

---

## Table of Contents
1. [What to Download](#1-what-to-download)
2. [Step 1: Install & Set Up Local WP (Recommended - 2 Minutes)](#step-1-install--set-up-local-wp)
3. [Step 2: Install the OPHRON Theme](#step-2-install-the-ophron-theme)
   - [Method A: Direct Folder Copy (Fastest & 100% Guaranteed)](#method-a-direct-folder-copy-fastest--recommended)
   - [Method B: Upload `ophron-theme-lite.zip` via WP Admin](#method-b-upload-ophron-theme-litezip-via-wp-admin)
   - [Method C: Upload Full `ophron-theme.zip` (132MB) via WP Admin](#method-c-upload-full-ophron-themezip-via-wp-admin)
4. [Step 3: Essential WordPress Settings Configuration](#step-3-essential-wordpress-settings-configuration)
5. [Step 4: Testing the Website End-to-End](#step-4-testing-the-website-end-to-end)
6. [Step 5: Testing Inside WP Admin Dashboard](#step-5-testing-inside-wp-admin-dashboard)
7. [Troubleshooting & FAQs](#troubleshooting--faqs)

---

## 1. What to Download

For Windows, the absolute easiest, industry-standard tool for running WordPress locally is **Local WP** (formerly *Local by Flywheel*). It requires zero manual database setup, zero Apache/MySQL configuration, and installs a complete, high-speed WordPress site with 1 click.

| Tool | Download Link | Price | Why Use It |
| :--- | :--- | :--- | :--- |
| **Local WP (Recommended)** | [https://localwp.com/](https://localwp.com/) | **Free** | One-click WordPress installation, automatic database creation, built-in SSL, instant folder access. |
| **Alternative: XAMPP** | [https://www.apachefriends.org/](https://www.apachefriends.org/) | **Free** | Traditional Apache + MySQL stack (requires manual WordPress zip download and MySQL database creation). |

> **Recommendation:** Use **Local WP**. It takes less than 2 minutes and avoids port conflicts or database configuration headaches.

---

## Step 1: Install & Set Up Local WP

1. Go to **[https://localwp.com/](https://localwp.com/)** and click **Download for Free**.
2. Select **Windows**, enter your name/email, and download the `.exe` installer.
3. Run the installer and open **Local**.
4. Click the green **`+ Create a New Site`** button:
   - **Step 1:** Select **Create a new site** → click **Continue**.
   - **Step 2:** Enter your site name (e.g. `Ophron` or `Medscale`) → click **Continue**.
   - **Step 3:** Choose **Preferred** (uses PHP 8.x, Nginx/Apache, MySQL) → click **Continue**.
   - **Step 4:** Set your WordPress Admin credentials:
     - **WordPress Username:** `admin` (or your choice)
     - **WordPress Password:** `admin123` (or your choice)
     - **WordPress Email:** `admin@example.local`
5. Click **Add Site**. Local WP will automatically download WordPress, configure the database, and spin up your local server in ~30 seconds.

---

## Step 2: Install the OPHRON Theme

You have three options to install the theme. **Method A is the recommended method** because it completely bypasses PHP file upload limits.

### Method A: Direct Folder Copy (Fastest & Recommended)
*Takes 5 seconds and never encounters upload size limits.*

1. In Local WP, click the link under your site name that says **`Go to site folder`** (or open the folder: `Local Sites/<your-site-name>/app/public/`).
2. Navigate into:
   ```text
   app/public/wp-content/themes/
   ```
3. Copy the entire **`ophron-theme`** folder from this project directory:
   ```text
   c:\Users\SUDARSANA NARAYANAN\.gemini\antigravity\scratch\Medscale - Copy\ophron-theme
   ```
   and paste it directly into:
   ```text
   .../wp-content/themes/
   ```
   *(Your path will look like: `.../wp-content/themes/ophron-theme/` containing `style.css`, `functions.php`, `images/`, etc.)*
4. In Local WP, click the **WP Admin** button in the top right.
5. Log in with your admin credentials.
6. Go to **Appearance > Themes**.
7. Hover over **OPHRON** and click **Activate**.

---

### Method B: Upload `ophron-theme-lite.zip` via WP Admin
*Best if you want to test the standard WP Admin upload flow without modifying PHP limits.*

1. In Local WP, click **WP Admin** and log in.
2. In the left sidebar, navigate to **Appearance > Themes**.
3. Click the **Add New Theme** button at the top, then click **Upload Theme**.
4. Click **Choose File** and select:
   ```text
   c:\Users\SUDARSANA NARAYANAN\.gemini\antigravity\scratch\Medscale - Copy\ophron-theme-lite.zip
   ```
   *(File size is only **1.22 MB**, so it uploads in 1 second on any PHP limit)*.
5. Click **Install Now**.
6. When installation finishes, click **Activate**.

---

### Method C: Upload Full `ophron-theme.zip` via WP Admin
*To upload the complete 132 MB zip containing all 552 bundled images directly through the browser:*

1. Open Local WP.
2. In your site panel, click **"Go to site folder"** → navigate to `conf/php/php.ini.hbs` (or open Local WP tools).
3. Search for `upload_max_filesize` and change it to:
   ```ini
   upload_max_filesize = 256M
   post_max_size = 256M
   ```
4. In Local WP, click **Stop Site** and then **Start Site** to restart PHP.
5. In WP Admin, go to **Appearance > Themes > Add New > Upload Theme**.
6. Select **`ophron-theme.zip`** (132 MB) → click **Install Now** → click **Activate**.

---

## Step 3: Essential WordPress Settings Configuration

To ensure all modern routing (`/about`, `/services`, `/why`, `/contact`) and SEO features work properly, make these two quick adjustments in WP Admin:

### 1. Enable Clean Permalinks (Crucial for Subpages)
1. In WP Admin, go to **Settings > Permalinks**.
2. Under **General Settings**, select **Post name**:
   ```text
   https://ophron.local/sample-post/
   ```
3. Click **Save Changes** at the bottom.
   *(This ensures Apache / Nginx rewrites subpages like `/about` cleanly instead of throwing 404 errors).*

### 2. Verify Reading Settings
1. Go to **Settings > Reading**.
2. Ensure **"Your homepage displays"** is set to **"Your latest posts"** (the theme's `front-page.php` handles the full application layout automatically).
3. Click **Save Changes**.

---

## Step 4: Testing the Website End-to-End

In Local WP, click **Open Site** (or visit `http://ophron.local` in your browser). Test the following sections:

### 1. Homepage (`/`)
- [ ] **Announcement Ticker**: Check top ticker displays `SINGAPORE OPERATIONS | MANPOWER • CLEANING • FACILITIES • TECHNOLOGY` with live Singapore clock.
- [ ] **Hero Section**: Verify the headline reads *"One partner. One ecosystem. Better operations."* and CTAs read *"Request a Site Assessment"* with microcopy *"Start with one service. Expand when you need more."*
- [ ] **Section Numbers**: Confirm section numbering (e.g. `§ 002`, `§ 003`) is visible on the homepage as designed.
- [ ] **Smooth Scrolling**: Scroll down and check Lenis smooth scroll responsiveness.
- [ ] **Interactive 3D Particle Canvas**: Scroll to the footer and move your mouse/cursor over the interactive **OPHRON** particle text.

### 2. About Page (`/about`)
- [ ] Click **ABOUT** in the navigation menu.
- [ ] Verify **No Section Numbers**: Check that `§` section badges are completely hidden on subpages.
- [ ] **Leadership Cards**:
  - **Isaac Vivian Card**: Check title reads **`Director & Co-Founder — OPHRON Systems`** with badge `Isaac Vivian · Director & Co-Founder`.
  - **Kelvin Card**: Check title reads **`Director & Co-Founder — OPHRON Systems | Founder & Managing Director — GKT International`** with badge `Kelvin · Director & Co-Founder`.
- [ ] **Alliance Card**: Verify the synergy card reads:
  *"Two strengths. One ecosystem. One commitment to better operations."* and confirms membership in the *GKT International Group*.
- [ ] **No Legacy Founder Duplication**: Confirm there is only one unified leadership module without redundant founder blocks.

### 3. Services Directory & Sub-Pages (`/services`)
- [ ] Hover over **SERVICES** in the nav bar to test the 5-pillar mega-dropdown.
- [ ] Click **Explore Our Services** or visit `/services` to view the comprehensive 40+ service catalog.
- [ ] Click any individual service card (e.g., `/services/commercial-cleaning-singapore` or `/services/kitchen-deep-cleaning-singapore`) to verify the dedicated landing page layout with full scope, FAQs, and quote request button.

### 4. Why OPHRON (`/why`)
- [ ] Click **WHY OPHRON** in the navigation menu.
- [ ] Verify the comparison matrix: *Traditional Arrangement* vs. *OPHRON Approach*.
- [ ] Check regulatory and compliance badges: *NEA Clean Mark*, *bizSAFE Level 3*, *WSQ Certified*.

### 5. Inbound Contact Form (`/contact`)
- [ ] Navigate to `/contact`.
- [ ] Test the audit request form with sample test data:
  - Name: `Test Manager`
  - Company: `Marina Bay Hospitality Group`
  - Work Email: `test@marinahospitality.com`
  - Phone: `+65 9123 4567`
  - Service: `Dishwashing / Stewarding`
- [ ] Click **Send My Enquiry**.
- [ ] Confirm the success confirmation message displays:
  *"Audit Request Received. Thank you Test Manager — our Singapore operational supervisor will call..."*

---

## Step 5: Testing Inside WP Admin Dashboard

Log in to `http://ophron.local/wp-admin`:

### 1. Custom Post Types
- In the left admin sidebar, observe custom post type menus registered by the theme:
  - **Services** (`ophron_service`): Add or edit operational services.
  - **Industries** (`ophron_industry`): Manage target sectors (Hotels, F&B, Venues).
  - **Case Studies** (`ophron_case_study`): Add proof points and field metrics.

### 2. Testing Contact Enquiries (AJAX Inbound)
- When a user submits an enquiry from the frontend `/contact` form, the theme sends the data securely through WordPress's `admin-ajax.php` using security nonces.
- By default, the theme hooks into `wp_mail()` to dispatch notice emails to the site administrator email set under **Settings > General**.
- In Local WP, click the **Tools > Mailpit** (or MailHog) tab to view all test emails sent by the contact form locally without needing an external SMTP server.

### 3. Testing SEO Plugins Compatibility
- Go to **Plugins > Add New**.
- Search for **Rank Math SEO** or **Yoast SEO** and click **Install Now** → **Activate**.
- The theme's `header.php` and `inc/seo-schema.php` are fully compatible with both plugins, automatically passing canonical tags, OpenGraph previews, and Schema.org rich snippets.

---

## Troubleshooting & FAQs

### Q: When I click `/about` or `/services`, I see a 404 Not Found error.
**Solution:** Go to **Settings > Permalinks** in WP Admin, choose **Post name**, and click **Save Changes**. This regenerates the `.htaccess` / Nginx rewrite rules.

### Q: WP Admin says "The uploaded file exceeds the upload_max_filesize directive in php.ini".
**Solution:** Use **Method A** (copy the folder `ophron-theme` directly into `wp-content/themes/`), or use `ophron-theme-lite.zip` (1.2 MB) which uploads immediately without restrictions.

### Q: Can I run this online on a live server later?
**Yes.** You can upload `ophron-theme.zip` (or copy the folder over FTP/cPanel File Manager) to any live WordPress hosting (e.g., SiteGround, Hostinger, Cloudways, AWS, Kinsta) running PHP 8.0+.
