<?php
/**
 * AJAX Form Processing & REST Handlers for OPHRON
 */

if (!defined('ABSPATH')) {
    exit;
}

function ophron_ensure_leads_table() {
    global $wpdb;
    $table_name = $wpdb->prefix . 'ophron_leads';
    $charset_collate = $wpdb->get_charset_collate();

    if ($wpdb->get_var("SHOW TABLES LIKE '$table_name'") != $table_name) {
        $sql = "CREATE TABLE $table_name (
            id bigint(20) NOT NULL AUTO_INCREMENT,
            name varchar(120) NOT NULL,
            email varchar(160) NOT NULL,
            phone varchar(50) DEFAULT '',
            organization varchar(160) DEFAULT '',
            service varchar(160) DEFAULT '',
            message text DEFAULT '',
            status varchar(30) DEFAULT 'New',
            created_at datetime DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY  (id)
        ) $charset_collate;";

        require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
        dbDelta($sql);
    }
}

function ophron_handle_contact_submission() {
    check_ajax_referer('ophron_contact_nonce', 'security');
    global $wpdb;

    $name     = sanitize_text_field($_POST['name'] ?? '');
    $email    = sanitize_email($_POST['email'] ?? '');
    $phone    = sanitize_text_field($_POST['phone'] ?? '');
    $org      = sanitize_text_field($_POST['company'] ?? $_POST['organization'] ?? '');
    $service  = sanitize_text_field($_POST['service'] ?? 'General Inquiry');
    $message  = sanitize_textarea_field($_POST['notes'] ?? $_POST['message'] ?? '');

    if (empty($name) || empty($email)) {
        wp_send_json_error(array('message' => 'Please fill in all required fields.'));
    }

    // 1. Save to WordPress MySQL Database
    ophron_ensure_leads_table();
    $table_name = $wpdb->prefix . 'ophron_leads';
    $wpdb->insert(
        $table_name,
        array(
            'name'         => $name,
            'email'        => $email,
            'phone'        => $phone,
            'organization' => $org,
            'service'      => $service,
            'message'      => $message,
            'created_at'   => current_time('mysql'),
        ),
        array('%s', '%s', '%s', '%s', '%s', '%s', '%s')
    );

    // 2. Send Notification Email
    $admin_email = get_option('admin_email');
    $subject = sprintf('[OPHRON Inbound] New Inquiry from %s (%s)', $name, $org ? $org : 'Individual');
    $body = sprintf(
        "New inquiry submitted via OPHRON Website:\n\nName: %s\nEmail: %s\nPhone: %s\nOrganization/Venue: %s\nRequested Pillar/Service: %s\n\nOperational Brief:\n%s\n\nSubmitted at: %s",
        $name,
        $email,
        $phone,
        $org,
        $service,
        $message,
        current_time('mysql')
    );

    $headers = array('Content-Type: text/plain; charset=UTF-8', 'Reply-To: ' . $name . ' <' . $email . '>');
    @wp_mail($admin_email, $subject, $body, $headers);

    wp_send_json_success(array('message' => 'Thank you. Your inquiry has been routed to OPHRON operations management.'));
}

add_action('wp_ajax_ophron_submit_contact', 'ophron_handle_contact_submission');
add_action('wp_ajax_nopriv_ophron_submit_contact', 'ophron_handle_contact_submission');

// Add Inbound Leads Menu in WP Admin
function ophron_register_leads_admin_menu() {
    add_menu_page(
        'OPHRON Leads',
        'Inbound Leads',
        'manage_options',
        'ophron-leads',
        'ophron_render_leads_admin_page',
        'dashicons-clipboard',
        25
    );
}
add_action('admin_menu', 'ophron_register_leads_admin_menu');

function ophron_render_leads_admin_page() {
    global $wpdb;
    ophron_ensure_leads_table();
    $table_name = $wpdb->prefix . 'ophron_leads';
    $leads = $wpdb->get_results("SELECT * FROM $table_name ORDER BY id DESC LIMIT 100");
    ?>
    <div class="wrap">
        <h1 style="margin-bottom: 20px;">OPHRON Inbound Hospitality Leads</h1>
        <table class="wp-list-table widefat fixed striped">
            <thead>
                <tr>
                    <th width="60">ID</th>
                    <th width="140">Name</th>
                    <th width="140">Company / Venue</th>
                    <th width="160">Email</th>
                    <th width="110">Phone</th>
                    <th width="150">Service Requested</th>
                    <th>Notes / Requirements</th>
                    <th width="130">Date</th>
                </tr>
            </thead>
            <tbody>
                <?php if (empty($leads)): ?>
                    <tr><td colspan="8">No inquiries received yet.</td></tr>
                <?php else: ?>
                    <?php foreach ($leads as $l): ?>
                        <tr>
                            <td>#<?php echo esc_html($l->id); ?></td>
                            <td><strong><?php echo esc_html($l->name); ?></strong></td>
                            <td><?php echo esc_html($l->organization); ?></td>
                            <td><a href="mailto:<?php echo esc_attr($l->email); ?>"><?php echo esc_html($l->email); ?></a></td>
                            <td><?php echo esc_html($l->phone); ?></td>
                            <td><?php echo esc_html($l->service); ?></td>
                            <td><?php echo nl2br(esc_html($l->message)); ?></td>
                            <td><?php echo esc_html($l->created_at); ?></td>
                        </tr>
                    <?php endforeach; ?>
                <?php endif; ?>
            </tbody>
        </table>
    </div>
    <?php
}

