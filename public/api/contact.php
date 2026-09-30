<?php
/**
 * OPHRON Hospitality - Contact Form MySQL Database Endpoint
 * Built for Hostinger Shared / Cloud / VPS Hosting
 */

// 1. CORS & Response Headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "error" => "Method not allowed. Use POST."]);
    exit;
}

// ==========================================
// 2. HOSTINGER DATABASE CREDENTIALS
// Fill in your Hostinger MySQL Database details below:
// ==========================================
define('DB_HOST', 'localhost'); // In Hostinger, MySQL host is usually 'localhost'
define('DB_NAME', 'u123456789_ophron'); // Replace with your Hostinger DB Name
define('DB_USER', 'u123456789_user');   // Replace with your Hostinger DB Username
define('DB_PASS', 'YOUR_DB_PASSWORD');  // Replace with your Hostinger DB Password
define('NOTIFICATION_EMAIL', 'operations@ophronsystems.com'); // Where you want email alerts sent

// 3. Receive & Parse Payload
$rawInput = file_get_contents("php://input");
$data = json_decode($rawInput, true);

// If not JSON, fall back to $_POST
if (!$data && !empty($_POST)) {
    $data = $_POST;
}

if (!$data) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Invalid request. No data received."]);
    exit;
}

// 4. Honeypot Bot Trap
if (!empty($data['honeypot'])) {
    echo json_encode(["success" => true, "message" => "Inquiry received."]);
    exit;
}

// 5. Sanitize & Validate Fields
function clean($str, $maxLen = 250) {
    if (!$str) return "";
    $clean = strip_tags(trim($str));
    return mb_substr($clean, 0, $maxLen, 'UTF-8');
}

$name    = clean($data['name'] ?? '', 100);
$company = clean($data['company'] ?? '', 150);
$role    = clean($data['role'] ?? '', 100);
$email   = filter_var(trim($data['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$phone   = clean($data['phone'] ?? '', 40);
$service = clean($data['service'] ?? 'General Inquiry', 150);
$notes   = clean($data['notes'] ?? '', 2000);
$ip      = $_SERVER['REMOTE_ADDR'] ?? '';

if (empty($name) || strlen($name) < 2) {
    http_response_code(422);
    echo json_encode(["success" => false, "error" => "Full name is required (min 2 characters)."]);
    exit;
}

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(["success" => false, "error" => "A valid email address is required."]);
    exit;
}

// 6. Connect to Hostinger MySQL Database (PDO)
try {
    $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4";
    $pdo = new PDO($dsn, DB_USER, DB_PASS, [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false,
    ]);

    // Auto-create table if not exists
    $createTableSql = "
        CREATE TABLE IF NOT EXISTS ophron_leads (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(120) NOT NULL,
            company VARCHAR(160) NOT NULL,
            role VARCHAR(120) DEFAULT NULL,
            email VARCHAR(160) NOT NULL,
            phone VARCHAR(50) DEFAULT NULL,
            service VARCHAR(160) DEFAULT NULL,
            notes TEXT DEFAULT NULL,
            ip_address VARCHAR(45) DEFAULT NULL,
            status VARCHAR(30) DEFAULT 'New',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    ";
    $pdo->exec($createTableSql);

    // Insert Lead Record
    $stmt = $pdo->prepare("
        INSERT INTO ophron_leads (name, company, role, email, phone, service, notes, ip_address)
        VALUES (:name, :company, :role, :email, :phone, :service, :notes, :ip)
    ");

    $stmt->execute([
        ':name'    => $name,
        ':company' => $company,
        ':role'    => $role,
        ':email'   => $email,
        ':phone'   => $phone,
        ':service' => $service,
        ':notes'   => $notes,
        ':ip'      => $ip,
    ]);

    $insertedId = $pdo->lastInsertId();

    // 7. Optional Email Notification via PHP mail
    if (defined('NOTIFICATION_EMAIL') && NOTIFICATION_EMAIL) {
        $subject = "[OPHRON Inbound] Lead #{$insertedId} from {$name} ({$company})";
        $body = "New Inquiry Recorded in Database:\n\n"
              . "ID: #{$insertedId}\n"
              . "Name: {$name}\n"
              . "Company: {$company}\n"
              . "Role: {$role}\n"
              . "Email: {$email}\n"
              . "Phone: {$phone}\n"
              . "Service: {$service}\n"
              . "Notes:\n{$notes}\n\n"
              . "IP: {$ip}\n"
              . "Time: " . date("Y-m-d H:i:s") . " UTC\n";

        $headers = "From: OPHRON System <no-reply@" . ($_SERVER['HTTP_HOST'] ?? 'ophronsystems.com') . ">\r\n"
                 . "Reply-To: {$name} <{$email}>\r\n"
                 . "X-Mailer: PHP/" . phpversion();

        @mail(NOTIFICATION_EMAIL, $subject, $body, $headers);
    }

    echo json_encode([
        "success" => true,
        "message" => "Thank you. Your inquiry has been securely registered in the operations database.",
        "leadId"  => $insertedId
    ]);

} catch (PDOException $e) {
    // If DB credentials are not yet configured, log error securely
    error_log("Database Error: " . $e->getMessage());
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "error" => "Database connection error. Please verify Hostinger DB credentials in api/contact.php."
    ]);
}
