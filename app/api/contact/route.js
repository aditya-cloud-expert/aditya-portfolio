import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message, recaptchaToken } = await req.json();

    // 1) Verify reCAPTCHA
    const recaptchaRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      }
    );

    const recaptchaData = await recaptchaRes.json();

    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return NextResponse.json(
        { success: false, error: "Failed reCAPTCHA", score: recaptchaData.score },
        { status: 400 }
      );
    }

    // 2) Send email via Resend
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "aditya.cloud.expert@gmail.com",
      subject: `New message from ${name}`,
      html: `
        <h2>Portfolio Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr/>
        <p>reCAPTCHA score: ${recaptchaData.score}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json(
      { success: false, error: e.message },
      { status: 500 }
    );
  }
}
