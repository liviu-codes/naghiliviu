"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { RevealOnScroll } from "./RevealOnScroll";
import type { SkillCategory } from "@/lib/i18n/types";

const TAG_PALETTE = [
  "border-sky-500/30 bg-sky-500/10 text-sky-700 dark:text-sky-300",
  "border-violet-500/30 bg-violet-500/10 text-violet-700 dark:text-violet-300",
  "border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300",
  "border-rose-500/30 bg-rose-500/10 text-rose-700 dark:text-rose-300",
  "border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300",
  "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
];

function SkillCell({
  category,
  paletteIndex,
  className = "",
  tinted = false,
}: {
  category: SkillCategory;
  paletteIndex: number;
  className?: string;
  tinted?: boolean;
}) {
  const tagStyle = TAG_PALETTE[paletteIndex % TAG_PALETTE.length];

  return (
    <div
      className={`group rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_var(--accent)] ${
        tinted
          ? "border-accent/25 bg-accent/[0.06] hover:border-accent/45"
          : "border-border bg-bg-elevated hover:border-accent/35"
      } ${className}`}
    >
      <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-fg-faint">
        {category.name}
      </h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {category.items.map((item) => (
          <span
            key={item}
            className={`rounded-md border px-2.5 py-1 text-xs font-medium ${tagStyle}`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  const { t } = useLanguage();
  const [languages, frontend, backend, infrastructure, testing, leadership] = t.skills.categories;

  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <RevealOnScroll>
        <h2 className="text-3xl font-bold tracking-tight text-fg sm:text-4xl">
          {t.skills.heading}
        </h2>
        <p className="mt-3 max-w-[55ch] text-base text-fg-muted">{t.skills.subhead}</p>
      </RevealOnScroll>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        <RevealOnScroll delay={0.05} className="lg:col-span-2">
          <SkillCell category={languages} paletteIndex={0} className="h-full" />
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <SkillCell category={frontend} paletteIndex={1} className="h-full" />
        </RevealOnScroll>

        <RevealOnScroll delay={0.05}>
          <SkillCell category={backend} paletteIndex={2} className="h-full" />
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <SkillCell category={infrastructure} paletteIndex={3} className="h-full" />
        </RevealOnScroll>
        <RevealOnScroll delay={0.15}>
          <SkillCell category={testing} paletteIndex={4} className="h-full" />
        </RevealOnScroll>

        <RevealOnScroll delay={0.1} className="lg:col-span-3">
          <SkillCell category={leadership} paletteIndex={5} tinted />
        </RevealOnScroll>
      </div>
    </section>
  );
}
