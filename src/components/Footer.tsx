"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-8 text-center text-xs text-fg-faint sm:px-6 lg:px-8">
        {t.footer.builtWith(year)}
      </div>
    </footer>
  );
}
