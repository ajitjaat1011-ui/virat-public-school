import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

/**
 * POST /api/admissions/apply
 *
 * Receives the admission application form submission, stores it in the
 * Turso database via Prisma, and returns a reference number.
 *
 * File uploads: in this Cloudflare Pages deployment, document files are
 * accepted as base64-encoded JSON (file name + data URL) and stored on
 * R2 / disk by the school office manually after the application is
 * reviewed. For now, we just store the file names.
 *
 * Body: {
 *   studentName, dob, gender, applyingClass,
 *   fatherName, motherName, parentPhone, parentEmail, parentOccupation, address,
 *   previousSchool, previousClass,
 *   documents: [{ name, size }]
 * }
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Basic server-side validation
    const required = [
      "studentName", "dob", "gender", "applyingClass",
      "fatherName", "motherName", "parentPhone", "parentEmail", "address",
    ];
    for (const field of required) {
      const value = body[field];
      if (typeof value !== "string" || value.trim().length === 0) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Email & phone format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.parentEmail)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }
    const phoneDigits = String(body.parentPhone).replace(/\D/g, "");
    if (phoneDigits.length < 10) {
      return NextResponse.json(
        { error: "Invalid phone number (minimum 10 digits)" },
        { status: 400 }
      );
    }

    // Document file names (we don't persist file content — see comment above)
    const documentUrls = Array.isArray(body.documents)
      ? body.documents.map((d: { name?: string }) => d.name || "unnamed")
      : [];

    // Persist to Turso
    const application = await db.admissionApplication.create({
      data: {
        studentName: body.studentName.trim(),
        dob: body.dob,
        gender: body.gender,
        applyingClass: body.applyingClass,
        fatherName: body.fatherName.trim(),
        motherName: body.motherName.trim(),
        parentPhone: body.parentPhone.trim(),
        parentEmail: body.parentEmail.trim().toLowerCase(),
        parentOccupation: body.parentOccupation?.trim() || null,
        address: body.address.trim(),
        previousSchool: body.previousSchool?.trim() || null,
        previousClass: body.previousClass?.trim() || null,
        documentUrls: JSON.stringify(documentUrls),
        status: "submitted",
      },
    });

    // Generate a human-readable reference number
    const refNumber = `VPS-${new Date().getFullYear()}-${application.id.slice(-6).toUpperCase()}`;

    return NextResponse.json({
      success: true,
      reference: refNumber,
      message: "Application received. Our admissions team will contact you within 2-3 working days.",
    });
  } catch (err) {
    console.error("[admissions/apply] Error:", err);
    return NextResponse.json(
      { error: "Failed to submit application. Please try again or contact the school office." },
      { status: 500 }
    );
  }
}
