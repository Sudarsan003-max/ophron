/**
 * Web Application Security & Data Hygiene Utilities
 * GKT International Commercial Platform
 */

/**
 * Sanitizes input string to prevent XSS / Script Injections
 */
export function sanitizeInput(input: string): string {
  if (!input) return "";
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;")
    .trim();
}

/**
 * Validates Singapore / International Phone format safely
 */
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^(\+?65)?[689]\d{7}$/; // Singapore standard phone format
  const sanitized = phone.replace(/[\s\-\(\)]/g, "");
  return phoneRegex.test(sanitized) || sanitized.length >= 8;
}

/**
 * Validates Email Address structure safely
 */
export function isValidEmail(email: string): boolean {
  if (!email) return true; // Optional field in form
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email.trim());
}

/**
 * Client-Side Submission Rate Limiter to prevent Form Flooding / Denial of Service
 */
const submissionTimestamps: number[] = [];
export function checkRateLimit(maxAttempts = 3, timeWindowMs = 60000): { allowed: boolean; waitSeconds?: number } {
  const now = Date.now();
  // Filter out timestamps older than the time window
  const validTimestamps = submissionTimestamps.filter((t) => now - t < timeWindowMs);
  submissionTimestamps.length = 0;
  submissionTimestamps.push(...validTimestamps);

  if (submissionTimestamps.length >= maxAttempts) {
    const oldest = submissionTimestamps[0];
    const waitSeconds = Math.ceil((timeWindowMs - (now - oldest)) / 1000);
    return { allowed: false, waitSeconds };
  }

  submissionTimestamps.push(now);
  return { allowed: true };
}
