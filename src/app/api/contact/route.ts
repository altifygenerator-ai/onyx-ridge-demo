import { NextResponse } from "next/server";
import { Resend } from "resend";

const clientEmail = "jake_shockley@outlook.com";
const yourEmail = "altifygenerator@gmail.com";

export async function POST(req: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await req.json();

    const { name, phone, email, service, message } = body;

    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const html = `
      <div style="font-family:Arial,sans-serif;padding:20px;">
        <h2>New Website Lead</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || "Not Provided"}</p>
        <p><strong>Service Needed:</strong> ${service || "Not Specified"}</p>

        <p><strong>Message:</strong></p>
        <p>${message}</p>
      </div>
    `;

    await Promise.all([
      resend.emails.send({
        from: "Onyx Ridge Website <leads@hometownwebservicesar.com>",
        to: [clientEmail],
        replyTo: email || undefined,
        subject: `New Onyx Ridge Lead - ${service || "General Inquiry"}`,
        html,
      }),

      resend.emails.send({
        from: "Onyx Ridge Website <leads@hometownwebservicesar.com>",
        to: [yourEmail],
        replyTo: email || undefined,
        subject: `Copy: New Onyx Ridge Lead - ${service || "General Inquiry"}`,
        html,
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
