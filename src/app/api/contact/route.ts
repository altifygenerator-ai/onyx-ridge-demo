import { NextResponse } from "next/server";
import { Resend } from "resend";

const CLIENT_EMAIL = "jake_shockley@outlook.com";
const COPY_EMAIL = "altifygenerator@gmail.com";
const FROM_EMAIL =
  "Onyx Ridge Website <leads@hometownwebservicesar.cc>";

function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is missing.");

      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const body = await req.json();

    const name = String(body.name ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const email = String(body.email ?? "").trim();
    const service = String(body.service ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: "Name, phone, and message are required." },
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);

    const html = `
      <div style="font-family:Arial,sans-serif;padding:20px;line-height:1.6;color:#111;">
        <h2>New Onyx Ridge Website Lead</h2>

        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Email:</strong> ${
          email ? escapeHtml(email) : "Not provided"
        }</p>
        <p><strong>Service Needed:</strong> ${
          service ? escapeHtml(service) : "Not specified"
        }</p>

        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
      </div>
    `;

    const clientResult = await resend.emails.send({
      from: FROM_EMAIL,
      to: [CLIENT_EMAIL],
      replyTo: email || undefined,
      subject: `New Onyx Ridge Lead - ${service || "General Inquiry"}`,
      html,
    });

    if (clientResult.error) {
      console.error("Client email failed:", clientResult.error);

      return NextResponse.json(
        {
          error:
            clientResult.error.message ||
            "The quote request could not be delivered.",
        },
        { status: 502 }
      );
    }

    const copyResult = await resend.emails.send({
      from: FROM_EMAIL,
      to: [COPY_EMAIL],
      replyTo: email || undefined,
      subject: `Copy: New Onyx Ridge Lead - ${
        service || "General Inquiry"
      }`,
      html,
    });

    if (copyResult.error) {
      // The client still received the lead, so log this without telling
      // the customer their submission failed.
      console.error("Private copy email failed:", copyResult.error);
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Contact route error:", error);

    return NextResponse.json(
      { error: "Something went wrong while sending the request." },
      { status: 500 }
    );
  }
}