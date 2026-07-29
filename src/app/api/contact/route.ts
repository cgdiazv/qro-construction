import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, inquiryType, message } = body as {
    name?: string;
    email?: string;
    inquiryType?: string;
    message?: string;
  };

  const toEmail = process.env.CONTACT_TO_EMAIL || "info@qroconstructionllc.com";
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "notifications@indevasa.com";
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 }
    );
  }

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `QRO Construction <${fromEmail}>`,
      to: [toEmail],
      reply_to: email,
      subject: `New inquiry from ${name}${inquiryType ? ` (${inquiryType})` : ""}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Inquiry Type:</strong> ${inquiryType || "General Inquiry"}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    }),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    return NextResponse.json(
      { error: data.error?.message || "Failed to send email." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true, id: data.id });
}
