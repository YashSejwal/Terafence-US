import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/* ── rate limiting (in-memory; resets on cold start) ─────────────── */

const HITS = new Map<string, number[]>();
const WINDOW_MS = 15 * 60 * 1000;
const MAX_PER_WINDOW = 5;

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const hits = (HITS.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (hits.length >= MAX_PER_WINDOW) return true;
  hits.push(now);
  HITS.set(ip, hits);
  if (HITS.size > 5000) HITS.clear();
  return false;
}

/* ── helpers ─────────────────────────────────────────────────────── */

const clean = (v: unknown, max = 500): string =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!)
  );

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/* ── handler ─────────────────────────────────────────────────────── */

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = clean(body.name, 100);
  const email = clean(body.email, 150).toLowerCase();
  const phone = clean(body.phone, 40);

  /* Company is no longer asked for — derive it from the email domain. */
  const domain = email.split("@")[1] ?? "";
  const derived = domain
    .replace(/\.(com|net|org|io|co|gov|mil|edu|us|in|uk|de|fr|jp|sg|ae)(\.[a-z]{2})?$/i, "")
    .split(".")
    .pop() ?? "";
  const company =
    clean(body.company, 150) ||
    (derived ? derived.charAt(0).toUpperCase() + derived.slice(1) : "") ||
    "Unknown";
  const requirement = clean(body.requirement || "(not specified)", 2000);
  const transcript = clean(body.transcript, 12000);
  const page = clean(body.page, 200);
  const referrer = clean(body.referrer, 300);
  const tags = Array.isArray(body.tags)
    ? (body.tags as unknown[]).map((t) => clean(t, 50)).filter(Boolean).slice(0, 12)
    : [];

  if (!name || !email) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  /* ── SMTP ── */

  const host = process.env.EMAIL_SERVER_HOST;
  const user = process.env.EMAIL_SERVER_USER;
  const pass = process.env.EMAIL_SERVER_PASSWORD;
  const to = process.env.SENTRY_LEAD_TO ?? "info@terafence.in";

  if (!host || !user || !pass) {
    console.error("[sentry/lead] SMTP env vars missing");
    return NextResponse.json({ error: "Mail service unavailable." }, { status: 503 });
  }

  const transporter = nodemailer.createTransport({
    host,
    port: Number(process.env.EMAIL_SERVER_PORT ?? 587),
    secure: process.env.EMAIL_SERVER_SECURE === "true", // false for M365 (STARTTLS on 587)
    auth: { user, pass },
    tls: { ciphers: "TLSv1.2", rejectUnauthorized: true },
  });

  const received = new Date().toLocaleString("en-US", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "America/New_York",
  });

  const row = (label: string, value: string) =>
    value
      ? `<tr>
           <td style="padding:9px 16px 9px 0;color:#64748b;font-size:13px;white-space:nowrap;vertical-align:top;">${label}</td>
           <td style="padding:9px 0;color:#0f172a;font-size:14px;font-weight:600;">${escapeHtml(value)}</td>
         </tr>`
      : "";

  const html = `<!doctype html>
<html><body style="margin:0;padding:0;background:#f1f5f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:32px 16px;">
<tr><td align="center">
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:620px;background:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.08);">

  <tr><td style="background:#1e40af;padding:22px 28px;">
    <p style="margin:0;color:#bfdbfe;font-size:11px;font-weight:700;letter-spacing:1.6px;text-transform:uppercase;">New Lead · Sentry</p>
    <h1 style="margin:6px 0 0;color:#ffffff;font-size:21px;font-weight:700;">${escapeHtml(name)}</h1>
    <p style="margin:3px 0 0;color:#93c5fd;font-size:14px;">${escapeHtml(company)}</p>
  </td></tr>

  <tr><td style="padding:24px 28px 8px;">
    <table width="100%" cellpadding="0" cellspacing="0">
      ${row("Email", email)}
      ${row("Phone", phone)}
      ${row("Organisation", company)}
      ${row("Domain", domain)}
      ${row("Page", page)}
      ${row("Referrer", referrer)}
      ${row("Received", received)}
    </table>
  </td></tr>

  ${tags.length ? `<tr><td style="padding:6px 28px 0;">
    <p style="margin:0 0 8px;color:#64748b;font-size:11px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;">Interests</p>
    <div>${tags.map((t) => `<span style="display:inline-block;background:#eff6ff;color:#1d4ed8;font-size:11px;font-weight:600;padding:4px 10px;border-radius:99px;margin:0 6px 6px 0;">${escapeHtml(t)}</span>`).join("")}</div>
  </td></tr>` : ""}

  <tr><td style="padding:18px 28px 0;">
    <p style="margin:0 0 8px;color:#64748b;font-size:11px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;">Requirement</p>
    <div style="background:#f8fafc;border-left:3px solid #2563eb;border-radius:0 8px 8px 0;padding:14px 16px;">
      <p style="margin:0;color:${requirement ? "#0f172a" : "#94a3b8"};font-size:14px;line-height:1.6;white-space:pre-wrap;">${requirement ? escapeHtml(requirement) : "Not specified — see conversation below for context."}</p>
    </div>
  </td></tr>

  <tr><td style="padding:22px 28px 12px;">
    <a href="mailto:${escapeHtml(email)}?subject=Re:%20Your%20Terafence%20enquiry"
       style="display:inline-block;background:#1e40af;color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;padding:11px 22px;border-radius:8px;">
      Reply to ${escapeHtml(name.split(" ")[0])}
    </a>
  </td></tr>

  ${transcript ? `<tr><td style="padding:8px 28px 24px;">
    <details>
      <summary style="cursor:pointer;color:#64748b;font-size:12px;font-weight:600;padding:8px 0;">View full conversation</summary>
      <pre style="margin:10px 0 0;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:14px;color:#475569;font-size:12px;line-height:1.65;white-space:pre-wrap;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;">${escapeHtml(transcript)}</pre>
    </details>
  </td></tr>` : ""}

  <tr><td style="background:#f8fafc;border-top:1px solid #e2e8f0;padding:16px 28px;">
    <p style="margin:0;color:#94a3b8;font-size:11px;">Captured by Sentry on terafence.us · IP ${escapeHtml(ip)}</p>
  </td></tr>

</table>
</td></tr></table>
</body></html>`;

  const text = [
    `NEW LEAD — Sentry`,
    ``,
    `Name:        ${name}`,
    `Email:       ${email}`,
    phone ? `Phone:       ${phone}` : "",
    `Organisation: ${company}`,
    page ? `Page:        ${page}` : "",
    referrer ? `Referrer:    ${referrer}` : "",
    `Received:    ${received}`,
    tags.length ? `Interests:   ${tags.join(", ")}` : "",
    ``,
    `REQUIREMENT`,
    requirement || "(not specified)",
    ``,
    transcript ? `--- TRANSCRIPT ---\n${transcript}` : "",
  ].filter(Boolean).join("\n");

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM ?? `Terafence Sentry <${user}>`,
      to,
      replyTo: `${name} <${email}>`,
      subject: `New lead — ${name}, ${company}`,
      text,
      html,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[sentry/lead] send failed:", err);
    return NextResponse.json({ error: "Could not send." }, { status: 502 });
  }
}
