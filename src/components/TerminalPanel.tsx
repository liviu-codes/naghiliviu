"use client";

import { motion, useReducedMotion } from "motion/react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function TerminalPanel() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();
  const { terminal } = t.hero;

  const lines = [
    { cmd: terminal.whoamiCmd, out: terminal.whoamiOut },
    { cmd: terminal.stackCmd, out: terminal.stackItems.join(", ") },
    { cmd: terminal.statusCmd, out: terminal.statusOut },
  ];

  return (
    <div className="animate-glow w-full max-w-md overflow-hidden rounded-xl border border-accent/25 bg-bg-elevated shadow-[0_1px_0_rgba(255,255,255,0.04)_inset]">
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
        <span className="size-2.5 rounded-full bg-fg-faint/40" />
        <span className="size-2.5 rounded-full bg-fg-faint/40" />
        <span className="size-2.5 rounded-full bg-fg-faint/40" />
        <span className="ml-2 font-mono text-[11px] text-fg-faint">liviu@portfolio</span>
      </div>
      <div className="space-y-3 p-5 font-mono text-[13px] leading-relaxed">
        {lines.map((line, i) => (
          <motion.div
            key={line.cmd}
            initial={reduce ? false : { opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: reduce ? 0 : 0.15 + i * 0.18 }}
          >
            <p className="text-fg-muted">
              <span className="text-accent">$</span> {line.cmd}
            </p>
            <p className="text-fg">
              {line.out}
              {i === lines.length - 1 && (
                <span className="animate-caret ml-0.5 inline-block h-[1em] w-[7px] translate-y-[2px] bg-accent align-middle" />
              )}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
