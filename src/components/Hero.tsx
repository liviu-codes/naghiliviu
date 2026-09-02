"use client";

import { motion, useReducedMotion } from "motion/react";
import { MapPin } from "@phosphor-icons/react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { TerminalPanel } from "./TerminalPanel";

export function Hero() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-[calc(100dvh-4rem)] max-w-6xl flex-col justify-center overflow-hidden px-4 pb-16 pt-16 sm:px-6 lg:px-8 lg:pt-24"
    >
      <div className="glow-blob -top-24 right-[-8rem] size-[28rem] opacity-40" />
      <div className="glow-blob bottom-[-10rem] left-[-10rem] size-[24rem] opacity-20" />

      <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            {t.hero.eyebrow}
          </p>
          <h1 className="text-gradient mt-5 text-6xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
            {t.hero.name}
          </h1>
          <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-fg-muted">
            {t.hero.subtext}
          </p>
          <p className="mt-4 flex items-center gap-1.5 text-sm text-fg-faint">
            <MapPin size={16} />
            {t.hero.location}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex h-12 items-center rounded-md bg-accent px-6 text-sm font-semibold text-accent-contrast shadow-[0_12px_30px_-10px_var(--accent)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-10px_var(--accent)] active:translate-y-0 active:scale-[0.98]"
            >
              {t.hero.viewProjects}
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center rounded-md border border-border-strong px-6 text-sm font-semibold text-fg transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:bg-bg-subtle active:translate-y-0 active:scale-[0.98]"
            >
              {t.hero.getInTouch}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center lg:justify-end"
        >
          <TerminalPanel />
        </motion.div>
      </div>
    </section>
  );
}
