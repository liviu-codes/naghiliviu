"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowSquareOut, CheckCircle } from "@phosphor-icons/react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { RevealOnScroll } from "./RevealOnScroll";
import { PROJECT_SHOTS } from "@/lib/projectImages";

export function ProjectCaseStudy({ slug }: { slug: string }) {
  const { t } = useLanguage();
  const project = t.projects.items.find((item) => item.slug === slug);

  if (!project || !project.caseStudy) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <p className="text-fg-muted">{t.projects.caseStudy.notFound}</p>
        <Link
          href="/#projects"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent"
        >
          <ArrowLeft size={16} />
          {t.projects.caseStudy.backLabel}
        </Link>
      </div>
    );
  }

  const image = PROJECT_SHOTS[project.image ?? ""];

  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <RevealOnScroll>
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-fg-muted transition-colors hover:text-accent"
        >
          <ArrowLeft size={16} />
          {t.projects.caseStudy.backLabel}
        </Link>
      </RevealOnScroll>

      <RevealOnScroll delay={0.05}>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-fg sm:text-4xl">
          {project.title}
        </h1>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border-strong px-2 py-0.5 font-mono text-[11px] text-fg-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </RevealOnScroll>

      {image && (
        <RevealOnScroll delay={0.1}>
          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-xl border border-border">
            <Image
              src={image}
              alt={project.title}
              fill
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </RevealOnScroll>
      )}

      <RevealOnScroll delay={0.15}>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_280px]">
          <div>
            <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-fg-faint">
              {t.projects.caseStudy.overviewLabel}
            </h2>
            <p className="mt-4 max-w-[68ch] text-base leading-relaxed text-fg-muted">
              {project.caseStudy.overview}
            </p>
          </div>

          <div className="rounded-xl border border-border bg-bg-elevated p-6">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-fg-faint">
              {t.projects.caseStudy.highlightsLabel}
            </h2>
            <ul className="mt-4 flex flex-col gap-3">
              {project.caseStudy.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2.5 text-sm text-fg-muted">
                  <CheckCircle size={16} weight="fill" className="mt-0.5 shrink-0 text-accent" />
                  {highlight}
                </li>
              ))}
            </ul>

            {project.liveHref && (
              <a
                href={project.liveHref}
                target={project.liveHref.startsWith("http") ? "_blank" : undefined}
                rel={project.liveHref.startsWith("http") ? "noopener noreferrer" : undefined}
                className="mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-accent px-5 text-sm font-semibold text-accent-contrast shadow-[0_10px_26px_-12px_var(--accent)] transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-12px_var(--accent)] active:translate-y-0 active:scale-[0.98]"
              >
                {t.projects.caseStudy.visitSiteLabel}
                <ArrowSquareOut size={15} />
              </a>
            )}
          </div>
        </div>
      </RevealOnScroll>
    </article>
  );
}
