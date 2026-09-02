import { Resend } from "resend";
import { testimonials } from "@/data/testimonials";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "liviu.codes@gmail.com";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? "Portfolio Testimonials <onboarding@resend.dev>";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function jsStringLiteral(value: string) {
  return JSON.stringify(value);
}

function buildTestimonialSnippet({
  name,
  role,
  rating,
  testimonial,
}: {
  name: string;
  role: string;
  rating: number;
  testimonial: string;
}) {
  const nextId = String(testimonials.length + 1);
  return `{
    id: "${nextId}",
    name: ${jsStringLiteral(name)},
    role: ${jsStringLiteral(role)},
    rating: ${rating},
    quote: {
      en: ${jsStringLiteral(testimonial)},
      ro: ${jsStringLiteral(testimonial)}, // TODO: translate to Romanian
    },
  },`;
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
    const snippet = buildTestimonialSnippet({ name, role, rating, testimonial });
    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: `New testimonial submission from ${name} (${rating}★)`,
      html: `<p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Role / Company:</strong> ${escapeHtml(role)}</p><p><strong>Rating:</strong> ${rating} / 5</p><p><strong>Testimonial:</strong></p><p>${escapeHtml(testimonial).replace(/\n/g, "<br/>")}</p><p><em>Not yet published. Review, then paste the entry below into the <code>testimonials</code> array in src/data/testimonials.ts:</em></p><pre style="background:#f4f4f5;border:1px solid #e4e4e7;border-radius:8px;padding:12px 16px;font-family:ui-monospace,monospace;font-size:13px;white-space:pre-wrap;overflow-wrap:break-word;">${escapeHtml(snippet)}</pre>`,
    });
    return Response.json({ ok: true });
  } catch (error) {
    console.error("[testimonial] Failed to send email:", error);
    return Response.json({ error: "Failed to send." }, { status: 502 });
  }
}
