# Naghi Liviu — Portfolio Site

Personal freelance portfolio for Naghi Liviu, built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Stack

- **Next.js 16** (App Router, Route Handlers for the two forms)
- **Tailwind CSS v4**
- **Motion** (`motion/react`) for scroll-reveal and hover motion
- **@phosphor-icons/react** for icons
- **Resend** for contact/testimonial email delivery

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Email delivery

The contact form (`/#contact`) and the testimonial form (`/review`) both POST to
Next.js route handlers (`src/app/api/contact`, `src/app/api/testimonial`) which
send email via [Resend](https://resend.com).

Copy `.env.local.example` to `.env.local` and set `RESEND_API_KEY` to enable
real email delivery. Without it, submissions are logged to the server console
instead so the UI still works during local development.

## Content and structure

- `src/lib/i18n/en.ts` / `ro.ts` — all site copy, bilingual (English/Romanian)
- `src/data/testimonials.ts` — testimonials shown in the Testimonials carousel.
  **These are placeholder entries.** Replace them with real client reviews
  (collected via the `/review` page and emailed to you for approval) before
  launch. The Testimonials section auto-hides when this list is empty.
- `src/data/testimonials.ts` type also documents where real submissions should
  be merged in after manual review.
- `src/components/` — one component per section/UI piece
- `src/app/page.tsx` — homepage section order
- `src/app/review/page.tsx` — the unlisted testimonial submission page

## Images

The profile photo and project screenshots currently use placeholder images
(`picsum.photos`). Swap the URLs in `src/components/About.tsx` and
`src/components/Projects.tsx` for real assets before launch.

## Build

```bash
npm run build
npm run start
```
