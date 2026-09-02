"use client";

import { useState } from "react";
import Image from "next/image";
import { Briefcase, CheckCircle, MapPin } from "@phosphor-icons/react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { RevealOnScroll } from "./RevealOnScroll";
import { Lightbox } from "./Lightbox";

const PHOTO_SRC = "/img/profile-pic.png";

export function About() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  const facts = [
    { icon: MapPin, label: t.about.quickFacts.location },
    { icon: Briefcase, label: t.about.quickFacts.role },
    { icon: CheckCircle, label: t.about.quickFacts.openToWork },
  ];

  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <RevealOnScroll>
        <h2 className="text-3xl font-bold tracking-tight text-fg sm:text-4xl">
          {t.about.heading}
        </h2>
      </RevealOnScroll>

      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,220px)_1fr] lg:gap-14">
        <RevealOnScroll delay={0.05}>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="group relative block size-40 overflow-hidden rounded-2xl border border-border-strong transition-all hover:-translate-y-1 hover:shadow-[0_20px_44px_-20px_var(--accent)] active:translate-y-0 active:scale-[0.98] lg:size-full lg:aspect-square"
            aria-label={t.about.photoAlt}
          >
            <Image
              src={PHOTO_SRC}
              alt={t.about.photoAlt}
              fill
              sizes="(min-width: 1024px) 220px, 160px"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
            />
          </button>
        </RevealOnScroll>

        <div>
          <RevealOnScroll delay={0.1}>
            <p className="max-w-[68ch] text-base leading-relaxed text-fg-muted">{t.about.bio1}</p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.15}>
            <p className="mt-4 max-w-[68ch] text-base leading-relaxed text-fg-muted">
              {t.about.bio2}
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <dl className="mt-6 flex flex-wrap gap-3 border-t border-border pt-6">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.07] px-3.5 py-1.5 text-sm font-medium text-fg"
                >
                  <fact.icon size={16} className="text-accent" />
                  <dd>{fact.label}</dd>
                </div>
              ))}
            </dl>
          </RevealOnScroll>
        </div>
      </div>

      {open && (
        <Lightbox
          src={PHOTO_SRC}
          alt={t.about.photoAlt}
          closeLabel={t.header.closeMenuLabel}
          onClose={() => setOpen(false)}
        />
      )}
    </section>
  );
}
