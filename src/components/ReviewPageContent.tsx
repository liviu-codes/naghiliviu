"use client";

import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { ReviewForm } from "./ReviewForm";

export function ReviewPageContent() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto max-w-xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-fg-muted transition-colors hover:text-fg"
      >
        <ArrowLeft size={15} />
        {t.review.backHome}
      </Link>

      <h1 className="mt-6 text-3xl font-bold tracking-tight text-fg sm:text-4xl">
        {t.review.title}
      </h1>
      <p className="mt-3 max-w-[55ch] text-base text-fg-muted">{t.review.intro}</p>

      <div className="mt-10 rounded-xl border border-border bg-bg-elevated p-6 sm:p-8">
        <ReviewForm />
      </div>
    </section>
  );
}
