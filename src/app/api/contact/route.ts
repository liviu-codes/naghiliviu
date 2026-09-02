import { Resend } from "resend";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "liviu.codes@gmail.com";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? "Portfolio Contact <onboarding@resend.dev>";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const method = typeof body?.method === "string" ? body.method.trim() : "";
  const message = typeof body?.message === "string" ? body.message.trim() : "";

  if (!name || !method || !message || name.length > 200 || method.length > 200 || message.length > 5000) {
    return Response.json({ error: "Invalid submission." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn(
      "[contact] RESEND_API_KEY is not set, skipping email send. Submission:",
      { name, method, message }
    );
    return Response.json({ ok: true });
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: method,
      subject: `New portfolio contact from ${name}`,
      html: `<p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Contact method:</strong> ${escapeHtml(method)}</p><p><strong>Message:</strong></p><p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>`,
    });
    return Response.json({ ok: true });
  } catch (error) {
    console.error("[contact] Failed to send email:", error);
    return Response.json({ error: "Failed to send." }, { status: 502 });
  }
}
