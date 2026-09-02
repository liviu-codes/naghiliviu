import { Resend } from "resend";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "liviu.codes@gmail.com";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? "Portfolio Testimonials <onboarding@resend.dev>";

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
  const role = typeof body?.role === "string" ? body.role.trim() : "";
  const testimonial = typeof body?.testimonial === "string" ? body.testimonial.trim() : "";
  const rating = Number(body?.rating);

  const isValidRating = Number.isInteger(rating) && rating >= 1 && rating <= 5;

  if (
    !name ||
    !role ||
    !testimonial ||
    !isValidRating ||
    name.length > 200 ||
    role.length > 200 ||
    testimonial.length > 5000
  ) {
    return Response.json({ error: "Invalid submission." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn(
      "[testimonial] RESEND_API_KEY is not set, skipping email send. Submission:",
      { name, role, rating, testimonial }
    );
    return Response.json({ ok: true });
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: `New testimonial submission from ${name} (${rating}★)`,
      html: `<p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Role / Company:</strong> ${escapeHtml(role)}</p><p><strong>Rating:</strong> ${rating} / 5</p><p><strong>Testimonial:</strong></p><p>${escapeHtml(testimonial).replace(/\n/g, "<br/>")}</p><p><em>Not yet published. Add to src/data/testimonials.ts after review.</em></p>`,
    });
    return Response.json({ ok: true });
  } catch (error) {
    console.error("[testimonial] Failed to send email:", error);
    return Response.json({ error: "Failed to send." }, { status: 502 });
  }
}
