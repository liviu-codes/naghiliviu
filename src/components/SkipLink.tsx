"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function SkipLink() {
  const { t } = useLanguage();

  return (
    <a
      href="#main-content"
      className="sr-only rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-contrast focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100]"
    >
      {t.a11y.skipToContent}
    </a>
  );
}
