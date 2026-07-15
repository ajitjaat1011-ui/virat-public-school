/**
 * Cloudflare Pages Function: /api/admissions/apply
 *
 * Receives admission application form submissions and stores them
 * in Turso (libSQL) using @libsql/client directly (no Prisma —
 * keeps the function bundle small).
 *
 * Required env vars (set on Cloudflare Pages dashboard):
 *   DATABASE_URL          — libsql://<db>-<org>.turso.io
 *   DATABASE_AUTH_TOKEN   — Turso auth token
 *
 * The Turso schema (see prisma/schema.prisma for full definition)
 * has an AdmissionApplication table with these columns:
 *   id, studentName, dob, gender, applyingClass, fatherName,
 *   motherName, parentPhone, parentEmail, parentOccupation, address,
 *   previousSchool, previousClass, documentUrls, status, notes,
 *   createdAt, updatedAt
 */

import { createClient } from "@libsql/client";

interface Env {
  DATABASE_URL: string;
  DATABASE_AUTH_TOKEN: string;
}

interface ApplicationPayload {
  studentName?: string;
  dob?: string;
  gender?: string;
  applyingClass?: string;
  fatherName?: string;
  motherName?: string;
  parentPhone?: string;
  parentEmail?: string;
  parentOccupation?: string;
  address?: string;
  previousSchool?: string;
  previousClass?: string;
  documents?: Array<{ name?: string }>;
  honeypot?: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { env, request } = context;

  // CORS + JSON content type
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  const origin = request.headers.get("Origin");
  const siteOrigin = new URL(request.url).origin;
  if (origin && origin !== siteOrigin) {
    return new Response(JSON.stringify({ error: "Forbidden origin" }), { status: 403, headers });
  }
  if (!request.headers.get("Content-Type")?.toLowerCase().startsWith("application/json")) {
    return new Response(JSON.stringify({ error: "Content-Type must be application/json" }), { status: 415, headers });
  }
  const contentLength = Number(request.headers.get("Content-Length") || 0);
  if (contentLength > 100_000) {
    return new Response(JSON.stringify({ error: "Request is too large" }), { status: 413, headers });
  }

  // Handle CORS preflight
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers });
  }

  if (!env.DATABASE_URL) {
    return new Response(
      JSON.stringify({
        error:
          "Database not configured. The school office needs to set DATABASE_URL on Cloudflare Pages to enable form submissions.",
      }),
      { status: 503, headers }
    );
  }

  try {
    const body = (await request.json()) as ApplicationPayload;

    // Honeypot: acknowledge automated submissions without storing personal data.
    if (body.honeypot?.trim()) {
      return new Response(JSON.stringify({ success: true, reference: "VPS-RECEIVED" }), { status: 200, headers });
    }

    // Server-side validation
    const required: Array<keyof ApplicationPayload> = [
      "studentName", "dob", "gender", "applyingClass",
      "fatherName", "motherName", "parentPhone", "parentEmail", "address",
    ];
    for (const field of required) {
      const value = body[field];
      if (typeof value !== "string" || value.trim().length === 0) {
        return new Response(
          JSON.stringify({ error: `Missing required field: ${field}` }),
          { status: 400, headers }
        );
      }
    }

    const fieldLimits: Record<string, number> = { name: 120, studentName: 120, fatherName: 120, motherName: 120, email: 254, parentEmail: 254, phone: 20, parentPhone: 20, subject: 160, message: 5000, address: 1000, parentOccupation: 120, previousSchool: 180, previousClass: 40 };
    for (const [field, max] of Object.entries(fieldLimits)) {
      const value = (body as Record<string, unknown>)[field];
      if (typeof value === "string" && value.length > max) {
        return new Response(JSON.stringify({ error: `Field is too long: ${field}` }), { status: 400, headers });
      }
    }

    const allowedGenders = new Set(["male", "female", "other"]);
    const allowedClasses = new Set(["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"].map((x) => `Class ${x}`));
    if (!allowedGenders.has(body.gender!) || !allowedClasses.has(body.applyingClass!)) {
      return new Response(JSON.stringify({ error: "Invalid selection" }), { status: 400, headers });
    }
    const dob = new Date(body.dob!);
    if (Number.isNaN(dob.getTime()) || dob >= new Date() || dob.getFullYear() < 2005) {
      return new Response(JSON.stringify({ error: "Invalid date of birth" }), { status: 400, headers });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.parentEmail!)) {
      return new Response(
        JSON.stringify({ error: "Invalid email address" }),
        { status: 400, headers }
      );
    }
    const phoneDigits = String(body.parentPhone).replace(/\D/g, "");
    if (phoneDigits.length < 10) {
      return new Response(
        JSON.stringify({ error: "Invalid phone number (minimum 10 digits)" }),
        { status: 400, headers }
      );
    }

    // Generate a unique ID (cuid-style not available; use crypto.randomUUID)
    const id = crypto.randomUUID();
    const documentUrls = JSON.stringify(
      Array.isArray(body.documents)
        ? body.documents.map((d) => d.name || "unnamed")
        : []
    );
    const now = new Date().toISOString();

    // Connect to Turso and insert
    const client = createClient({
      url: env.DATABASE_URL,
      authToken: env.DATABASE_AUTH_TOKEN,
    });

    await client.execute({
      sql: `INSERT INTO AdmissionApplication (
        id, studentName, dob, gender, applyingClass,
        fatherName, motherName, parentPhone, parentEmail, parentOccupation, address,
        previousSchool, previousClass, documentUrls, status, createdAt, updatedAt
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'submitted', ?, ?)`,
      args: [
        id,
        body.studentName!.trim(),
        body.dob!,
        body.gender!,
        body.applyingClass!,
        body.fatherName!.trim(),
        body.motherName!.trim(),
        body.parentPhone!.trim(),
        body.parentEmail!.trim().toLowerCase(),
        body.parentOccupation?.trim() || null,
        body.address!.trim(),
        body.previousSchool?.trim() || null,
        body.previousClass?.trim() || null,
        documentUrls,
        now,
        now,
      ],
    });

    const refNumber = `VPS-${new Date().getFullYear()}-${id.slice(-6).toUpperCase()}`;

    return new Response(
      JSON.stringify({
        success: true,
        reference: refNumber,
        message:
          "Application received. Our admissions team will contact you within 2-3 working days.",
      }),
      { status: 200, headers }
    );
  } catch (err) {
    console.error("[admissions/apply] Error:", err);
    return new Response(
      JSON.stringify({
        error:
          "Failed to submit application. Please try again or contact the school office.",
      }),
      { status: 500, headers }
    );
  }
};

// Also handle OPTIONS for CORS preflight via onRequestOptions (alias)
export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    status: 204,
    headers: {
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
};
