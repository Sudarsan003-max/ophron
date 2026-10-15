<?php
/**
 * OPHRON — Standalone Hostinger MySQL Database Contact Bridge
 * For use when hosting directly on Hostinger without WordPress.
 * (If using the WordPress theme, WordPress connects to Hostinger MySQL automatically via ajax-handlers.php)
 */

header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit;
}

// ── 1. HOSTINGER DATABASE CONFIGURATION ──────────────────────────────────────
// Replace these with your actual Hostinger MySQL details from hPanel > Databases:
$db_host = getenv('DB_HOST') ?: 'localhost';
$db_name = getenv('DB_NAME') ?: 'u123456789_ophron'; // Your Hostinger Database Name
$db_user = getenv('DB_USER') ?: 'u123456789_user';   // Your Hostinger Database Username
$db_pass = getenv('DB_PASS') ?: 'YourStrongPasswordHere'; // Your Hostinger Database Password
$notification_email = getenv('ADMIN_EMAIL') ?: 'admin@ophronsystems.com';

// ── 2. READ JSON INPUT PAYLOAD ──────────────────────────────────────────────
$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!$data) {
    // Also check form-data / POST
    $data = $_POST;
}

$name    = trim($data['name'] ?? '');
$company = trim($data['company'] ?? '');
$role    = trim($data['role'] ?? '');
$email   = trim($data['email'] ?? '');
$phone   = trim($data['phone'] ?? '');
$service = trim($data['service'] ?? 'General Inquiry');
$notes   = trim($data['notes'] ?? '');

if (empty($name) || empty($email)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Full name and email are required.']);
    exit;
}

// ── 3. CONNECT TO HOSTINGER MYSQL DATABASE ──────────────────────────────────
try {
    $pdo = new PDO(
        "mysql:host=$db_host;dbname=$db_name;charset=utf8mb4",
        $db_user,
        $db_pass,
        [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES   => false,
        ]
    );

    // Auto-create table if not exists
    $pdo->exec("CREATE TABLE IF NOT EXISTS ophron_leads (
        id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(120) NOT NULL,
        company VARCHAR(160) NOT NULL,
        role VARCHAR(80) DEFAULT '',
        email VARCHAR(160) NOT NULL,
        phone VARCHAR(50) DEFAULT '',
        service VARCHAR(160) DEFAULT '',
        notes TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;");

    // Insert lead
    $stmt = $pdo->prepare("INSERT INTO ophron_leads (name, company, role, email, phone, service, notes, created_at)
        VALUES (:name, :company, :role, :email, :phone, :service, :notes, NOW())");

    $stmt->execute([
        ':name'    => $name,
        ':company' => $company,
        ':role'    => $role,
        ':email'   => $email,
        ':phone'   => $phone,
        ':service' => $service,
        ':notes'   => $notes,
    ]);

    // ── 4. SEND EMAIL NOTIFICATION ──────────────────────────────────────────
    $subject = "[OPHRON Inbound] Site Assessment Request from $name ($company)";
    $body = "New Inquiry Submitted on OPHRON Website:\n\n"
          . "Name: $name\n"
          . "Company / Venue: $company\n"
          . "Role: $role\n"
          . "Email: $email\n"
          . "Phone: $phone\n"
          . "Service Requested: $service\n\n"
          . "Operational Notes / Scope:\n$notes\n\n"
          . "Date: " . date('Y-m-d H:i:s') . "\n";

    $headers = "From: noreply@" . ($_SERVER['HTTP_HOST'] ?? 'ophronsystems.com') . "\r\n"
             . "Reply-To: $email\r\n"
             . "X-Mailer: PHP/" . phpversion();

    @mail($notification_email, $subject, $body, $headers);

    echo json_encode([
        'success' => true,
        'message' => 'Thank you. Your assessment request has been recorded in the database.'
    ]);

} catch (PDOException $e) {
    error_log("Database Error: " . $e->getMessage());
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Database connection failed. Please ensure Hostinger database credentials are configured.'
    ]);
}
