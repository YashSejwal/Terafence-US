<?php
/* Terafence US website forms -> email via Microsoft Graph (sends as noreply@terafence.us).
   The certificate and private key live on the server only, in KEY_DIR. Nothing secret is in this file. */

const TENANT    = '002dd23d-eb18-42be-acfb-6fd7c03873b2';
const CLIENT_ID = 'cb2bff35-3127-468d-82df-bf56df9be81f';
const KEY_DIR   = '/etc/terafence-mailer/';
const SENDER    = 'noreply@terafence.us';

/* TEST MODE: while this is set, every form email goes to this one address only.
   Set to '' to use the real routing in ROUTES below. */
const TEST_TO = 'aakash@pivotmkg.com';

/* Who receives what (used when TEST_TO is ''). */
const ROUTES = [
  'pilot'     => 'sales@terafence.us',
  'demo'      => 'sales@terafence.us',
  'quote'     => 'sales@terafence.us',
  'datasheet' => 'sales@terafence.us',
  'certifications' => 'sales@terafence.us',
  'custom' => 'info@terafence.us',
  'contact'   => 'info@terafence.us',
  'support:technical' => 'support@terafence.us',
  'support:sales'     => 'sales@terafence.us',
  'support:product'   => 'sales@terafence.us',
  'support:general'   => 'info@terafence.us',
];

const TOPIC_TITLES = ['certifications' => 'Certifications and compliance', 'custom' => 'Custom build', 'pilot' => 'Plan a pilot', 'demo' => 'Request a demo', 'quote' => 'Get a quote', 'datasheet' => 'Request the datasheet', 'contact' => 'Talk to Terafence'];
const SUPPORT_TYPES = ['technical' => 'Technical Support', 'sales' => 'Sales Inquiry', 'product' => 'Product Information', 'general' => 'General Inquiry'];
const MODELS = ['tfg-121' => 'TFG-121', 'tfg-1urp' => 'TFG-1URP', 'tfg121-bf' => 'TFG121-BF', 'tfg121-bsg' => 'TFG121-BSG', 'tfg-vsecure' => 'TFG-VSecure'];

const RATE_MAX = 5;      // submissions
const RATE_WINDOW = 600; // per 10 minutes per IP
const MIN_FILL_MS = 2500;

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

function out(int $code, array $body): void { http_response_code($code); echo json_encode($body); exit; }

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') out(405, ['ok' => false, 'error' => 'method']);

/* same-site only */
$host = strtolower($_SERVER['HTTP_HOST'] ?? '');
$from = $_SERVER['HTTP_ORIGIN'] ?? ($_SERVER['HTTP_REFERER'] ?? '');
if ($from === '' || strtolower((string) parse_url($from, PHP_URL_HOST)) !== preg_replace('/:\d+$/', '', $host)) out(403, ['ok' => false, 'error' => 'origin']);

$raw = file_get_contents('php://input', false, null, 0, 20000);
$in = json_decode($raw ?: '', true);
if (!is_array($in)) out(400, ['ok' => false, 'error' => 'bad request']);

$s = function (string $k, int $max = 200) use ($in): string {
  $v = $in[$k] ?? '';
  if (!is_string($v)) return '';
  $v = trim(preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $v) ?? '');
  return preg_match('/^.{0,' . $max . '}/su', $v, $m) ? $m[0] : '';
};

/* spam traps: hidden field must be empty, form must not be filled instantly. Bots get a fake success. */
if ($s('website') !== '' || (int) ($in['elapsed'] ?? 0) < MIN_FILL_MS) out(200, ['ok' => true, 'ref' => 'TF-' . random_int(100000, 999999)]);

/* rate limit per IP */
$ip = $_SERVER['REMOTE_ADDR'] ?? '0';
$rf = sys_get_temp_dir() . '/tf-form-rate-' . hash('sha256', $ip);
$now = time();
$hits = array_values(array_filter(json_decode(@file_get_contents($rf) ?: '[]', true) ?: [], fn($t) => $t > $now - RATE_WINDOW));
if (count($hits) >= RATE_MAX) out(429, ['ok' => false, 'error' => 'too many']);
$hits[] = $now; @file_put_contents($rf, json_encode($hits), LOCK_EX);

$email = $s('email', 254);
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) out(422, ['ok' => false, 'error' => 'email']);

$ref = 'TF-' . random_int(100000, 999999);
$page = $s('page', 300);

if (($in['form'] ?? '') === 'support') {
  $name = $s('name', 120); $company = $s('company', 160); $type = $s('supportType', 20); $msg = $s('message', 5000);
  if ($name === '' || $msg === '' || !isset(SUPPORT_TYPES[$type])) out(422, ['ok' => false, 'error' => 'fields']);
  $route = 'support:' . $type;
  $subject = 'Website support request: ' . SUPPORT_TYPES[$type] . ' from ' . $name . ($company !== '' ? ', ' . $company : '');
  $rows = ['Category' => SUPPORT_TYPES[$type], 'Name' => $name, 'Email' => $email, 'Company' => $company ?: '-', 'Message' => $msg];
} else {
  $topic = $s('topic', 20); $topic = isset(TOPIC_TITLES[$topic]) ? $topic : 'contact';
  $model = $s('model', 30); $model = MODELS[$model] ?? '';
  $first = $s('first_name', 120); $org = $s('organization', 160);
  if ($first === '' || $org === '') out(422, ['ok' => false, 'error' => 'fields']);
  $route = $topic;
  $subject = 'Website: ' . TOPIC_TITLES[$topic] . ($model ? ' (' . $model . ')' : '') . ' from ' . $first . ', ' . $org;
  $rows = ['Request' => TOPIC_TITLES[$topic], 'Product' => $model ?: '-', 'First name' => $first, 'Work email' => $email, 'Organization' => $org];
}
$rows['Sent from page'] = $page ?: '-';
$rows['Reference'] = $ref;
$to = TEST_TO !== '' ? TEST_TO : (ROUTES[$route] ?? ROUTES['contact']);
if (TEST_TO !== '') $subject = '[TEST] ' . $subject . ' (would go to ' . (ROUTES[$route] ?? ROUTES['contact']) . ')';

$e = fn($v) => htmlspecialchars($v, ENT_QUOTES | ENT_HTML5, 'UTF-8');
$html = '<div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#111">'
  . '<p style="margin:0 0 12px">New form submission from the Terafence US website. Reply to this email to answer the visitor directly.</p>'
  . '<table cellpadding="6" cellspacing="0" style="border-collapse:collapse">';
foreach ($rows as $k => $v) $html .= '<tr><td style="border:1px solid #ddd;background:#f6f6f8;font-weight:bold;vertical-align:top;white-space:nowrap">' . $e($k) . '</td><td style="border:1px solid #ddd;">' . nl2br($e($v), false) . '</td></tr>';
$html .= '</table></div>';

/* --- Microsoft Graph --- */
function b64u(string $b): string { return rtrim(strtr(base64_encode($b), '+/', '-_'), '='); }

function graph_token(): ?string {
  $cache = sys_get_temp_dir() . '/tf-form-token.json';
  $c = json_decode(@file_get_contents($cache) ?: '', true);
  if (is_array($c) && ($c['exp'] ?? 0) > time() + 120) return $c['tok'];
  $cert = @file_get_contents(KEY_DIR . 'mailer.cer'); $key = openssl_pkey_get_private(@file_get_contents(KEY_DIR . 'mailer.key') ?: '');
  if (!$cert || !$key) { error_log('tf-form: cannot read mailer cert/key'); return null; }
  $x5t = openssl_x509_fingerprint($cert, 'sha1', true);
  $aud = 'https://login.microsoftonline.com/' . TENANT . '/oauth2/v2.0/token'; $t = time();
  $si = b64u(json_encode(['alg' => 'RS256', 'typ' => 'JWT', 'x5t' => b64u($x5t)])) . '.' . b64u(json_encode(['aud' => $aud, 'iss' => CLIENT_ID, 'sub' => CLIENT_ID, 'jti' => bin2hex(random_bytes(16)), 'nbf' => $t, 'exp' => $t + 300]));
  openssl_sign($si, $sig, $key, OPENSSL_ALGO_SHA256);
  $ch = curl_init($aud);
  curl_setopt_array($ch, [CURLOPT_POST => true, CURLOPT_RETURNTRANSFER => true, CURLOPT_TIMEOUT => 20, CURLOPT_POSTFIELDS => http_build_query([
    'client_id' => CLIENT_ID, 'scope' => 'https://graph.microsoft.com/.default', 'grant_type' => 'client_credentials',
    'client_assertion_type' => 'urn:ietf:params:oauth:client-assertion-type:jwt-bearer', 'client_assertion' => $si . '.' . b64u($sig)])]);
  $r = json_decode((string) curl_exec($ch), true); curl_close($ch);
  if (empty($r['access_token'])) { error_log('tf-form: token failed ' . ($r['error'] ?? '?')); return null; }
  @file_put_contents($cache, json_encode(['tok' => $r['access_token'], 'exp' => time() + (int) ($r['expires_in'] ?? 3000)]), LOCK_EX); @chmod($cache, 0600);
  return $r['access_token'];
}

$tok = graph_token();
if (!$tok) out(502, ['ok' => false, 'error' => 'send']);
$mail = ['message' => [
  'subject' => $subject,
  'body' => ['contentType' => 'HTML', 'content' => $html],
  'toRecipients' => [['emailAddress' => ['address' => $to]]],
  'replyTo' => [['emailAddress' => ['address' => $email]]],
], 'saveToSentItems' => false];
$ch = curl_init('https://graph.microsoft.com/v1.0/users/' . rawurlencode(SENDER) . '/sendMail');
curl_setopt_array($ch, [CURLOPT_POST => true, CURLOPT_RETURNTRANSFER => true, CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTPHEADER => ['Authorization: Bearer ' . $tok, 'Content-Type: application/json'], CURLOPT_POSTFIELDS => json_encode($mail)]);
$resp = curl_exec($ch); $code = curl_getinfo($ch, CURLINFO_RESPONSE_CODE); curl_close($ch);
if ($code !== 202) { error_log('tf-form: sendMail ' . $code . ' ' . substr((string) $resp, 0, 300)); out(502, ['ok' => false, 'error' => 'send']); }

out(200, ['ok' => true, 'ref' => $ref]);
