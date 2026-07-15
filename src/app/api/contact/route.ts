import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

/**
 * POST /api/contact
 *
 * Receives a contact form submission, stores it in the Turso database,
 * and returns a success acknowledgement.
 *
 * Body: { name, email, phone?, subject, message, honeypot? }
 *   honeypot — a hidden field; if non-empty, the submission is silently
 *              dropped as it likely came from a bot.
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Honeypot — silently accept bot submissions without saving
    if (body.honeypot && body.honeypot.trim() !== "") {
      return NextResponse.json({ success: true, message: "Thank you." });
    }

    const required = ["name", "email", "subject", "message"];
    for (const field of required) {
      const value = body[field];
      if (typeof value !== "string" || value.trim().length === 0) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    await db.contactMessage.create({
      data: {
        name: body.name.trim(),
        email: body.email.trim().toLowerCase(),
        phone: body.phone?.trim() || null,
        subject: body.subject.trim(),
        message: body.message.trim(),
        status: "new",
      },
    });

    return NextResponse.json({
      success: true,
      message: "Message received. We will respond within 2 working days.",
    });
  } catch (err) {
    console.error("[contact] Error:", err);
    return NextResponse.json(
      { error: "Failed to submit your message. Please try again or call the school office." },
      { status: 500 }
    );
  }
}
