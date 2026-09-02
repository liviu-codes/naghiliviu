"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowSquareOut, ImageBroken } from "@phosphor-icons/react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { RevealOnScroll } from "./RevealOnScroll";
import type { ProjectItem } from "@/lib/i18n/types";
import { PROJECT_SHOTS as SHOTS } from "@/lib/projectImages";

function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-md border border-border-strong px-2 py-0.5 font-mono text-[11px] text-fg-muted"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function FeaturedProjectCard({
  project,
  liveDemoLabel,
  caseStudyLabel,
}: {
  project: ProjectItem;
  liveDemoLabel: string;
  caseStudyLabel: string;
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-bg-elevated transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_24px_48px_-24px_var(--accent)]">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={SHOTS[project.image ?? ""]}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        {project.slug ? (
          <Link href={`/projects/${project.slug}`} className="w-fit hover:text-accent">
            <h3 className="text-xl font-bold text-fg">{project.title}</h3>
          </Link>
        ) : (
          <h3 className="text-xl font-bold text-fg">{project.title}</h3>
        )}
        <p className="text-sm leading-relaxed text-fg-muted">{project.description}</p>
        <div className="mt-auto flex items-center justify-between pt-2">
          <TagList tags={project.tags} />
          <div className="flex shrink-0 items-center gap-4">
            {project.slug && (
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-fg-muted transition-colors hover:text-accent"
              >
                {caseStudyLabel}
              </Link>
            )}
            {project.liveHref && (
              <a
                href={project.liveHref}
                target={project.liveHref.startsWith("http") ? "_blank" : undefined}
                rel={project.liveHref.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent"
              >
                {liveDemoLabel}
                <ArrowSquareOut size={15} />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function CompactProjectCard({
  project,
  liveDemoLabel,
}: {
  project: ProjectItem;
  liveDemoLabel: string;
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-bg-elevated transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_24px_48px_-24px_var(--accent)]">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={SHOTS[project.image ?? ""]}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 35vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="text-lg font-bold text-fg">{project.title}</h3>
        <p className="text-sm leading-relaxed text-fg-muted">{project.description}</p>
        <div className="mt-auto flex items-center justify-between pt-2">
          <TagList tags={project.tags} />
          {project.liveHref && (
            <a
              href={project.liveHref}
              target={project.liveHref.startsWith("http") ? "_blank" : undefined}
              rel={project.liveHref.startsWith("http") ? "noopener noreferrer" : undefined}
              className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-accent"
            >
              {liveDemoLabel}
              <ArrowSquareOut size={15} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function EmployerProjectRow({
  project,
  placeholderLabel,
}: {
  project: ProjectItem;
  placeholderLabel: string;
}) {
  return (
    <article className="grid gap-6 rounded-xl border border-border bg-bg-subtle p-6 transition-all duration-300 hover:border-accent/30 sm:grid-cols-[220px_1fr] sm:items-center sm:p-8">
      <div className="flex aspect-[16/10] items-center justify-center rounded-lg border border-dashed border-border-strong text-fg-faint sm:aspect-square">
        <ImageBroken size={28} />
        <span className="sr-only">{placeholderLabel}</span>
      </div>
      <div>
        <h3 className="text-xl font-bold text-fg">{project.title}</h3>
        <p className="mt-2 max-w-[60ch] text-sm leading-relaxed text-fg-muted">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <TagList tags={project.tags} />
          {project.note && (
            <span className="font-mono text-xs text-fg-faint">{project.note}</span>
          )}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const { t } = useLanguage();
  const [b17, portfolio, enterprise] = t.projects.items.map((item) => ({
    ...item,
    note: item.title === "Enterprise Web Platform" ? t.projects.employerNote : item.note,
  }));

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <RevealOnScroll>
        <h2 className="text-3xl font-bold tracking-tight text-fg sm:text-4xl">
          {t.projects.heading}
        </h2>
        <p className="mt-3 max-w-[55ch] text-base text-fg-muted">{t.projects.subhead}</p>
      </RevealOnScroll>

      <div className="mt-10 grid gap-5 lg:grid-cols-5">
        <RevealOnScroll delay={0.05} className="lg:col-span-3">
          <FeaturedProjectCard
            project={b17}
            liveDemoLabel={t.projects.liveDemo}
            caseStudyLabel={t.projects.caseStudyLink}
          />
        </RevealOnScroll>
        <RevealOnScroll delay={0.1} className="lg:col-span-2">
          <CompactProjectCard project={portfolio} liveDemoLabel={t.projects.liveDemo} />
        </RevealOnScroll>
        <RevealOnScroll delay={0.05} className="lg:col-span-5">
          <EmployerProjectRow
            project={enterprise}
            placeholderLabel={t.projects.screenshotPlaceholder}
          />
        </RevealOnScroll>
      </div>
    </section>
  );
}
