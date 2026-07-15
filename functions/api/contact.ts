/**
 * Cloudflare Pages Function: /api/contact
 *
 * Receives contact form submissions and stores them in Turso (libSQL).
 *
 * Required env vars:
 *   DATABASE_URL          — libsql://<db>-<org>.turso.io
 *   DATABASE_AUTH_TOKEN   — Turso auth token
 *
 * Schema (ContactMessage table):
 *   id, name, email, phone, subject, message, status, createdAt, updatedAt
 */

import { createClient } from "@libsql/client";

interface Env {
  DATABASE_URL: string;
  DATABASE_AUTH_TOKEN: string;
}

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  honeypot?: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { env, request } = context;

  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

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
    const body = (await request.json()) as ContactPayload;

    // Honeypot — silently accept bot submissions without saving
    if (body.honeypot && body.honeypot.trim() !== "") {
      return new Response(
        JSON.stringify({ success: true, message: "Thank you." }),
        { status: 200, headers }
      );
    }

    const required: Array<keyof ContactPayload> = ["name", "email", "subject", "message"];
    for (const field of required) {
      const value = body[field];
      if (typeof value !== "string" || value.trim().length === 0) {
        return new Response(
          JSON.stringify({ error: `Missing required field: ${field}` }),
          { status: 400, headers }
        );
      }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email!)) {
      return new Response(
        JSON.stringify({ error: "Invalid email address" }),
        { status: 400, headers }
      );
    }

    const id = crypto.randomUUID();
    const now = new Date().toISOString();

    const client = createClient({
      url: env.DATABASE_URL,
      authToken: env.DATABASE_AUTH_TOKEN,
    });

    await client.execute({
      sql: `INSERT INTO ContactMessage (
        id, name, email, phone, subject, message, status, createdAt, updatedAt
      ) VALUES (?, ?, ?, ?, ?, ?, 'new', ?, ?)`,
      args: [
        id,
        body.name!.trim(),
        body.email!.trim().toLowerCase(),
        body.phone?.trim() || null,
        body.subject!.trim(),
        body.message!.trim(),
        now,
        now,
      ],
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Message received. We will respond within 2 working days.",
      }),
      { status: 200, headers }
    );
  } catch (err) {
    console.error("[contact] Error:", err);
    return new Response(
      JSON.stringify({
        error:
          "Failed to submit your message. Please try again or call the school office.",
      }),
      { status: 500, headers }
    );
  }
};

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
};
