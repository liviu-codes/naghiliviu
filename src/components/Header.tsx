"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  List,
  MoonStars,
  Star,
  SunDim,
  Translate,
  X,
} from "@phosphor-icons/react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { useTheme } from "@/lib/theme/ThemeProvider";
import { Logo } from "./Logo";

const EMAIL = "liviu.codes@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/liviu-naghi-b172a4b8/";
const GITHUB_URL = "https://github.com/liviu-codes";

export function Header() {
  const { t, locale, toggleLocale } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navItems: Array<{ href: string; label: string }> = [
    { href: "/#about", label: t.nav.about },
    { href: "/#skills", label: t.nav.skills },
    { href: "/#projects", label: t.nav.projects },
    { href: "/#testimonials", label: t.nav.testimonials },
    { href: "/#contact", label: t.nav.contact },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/#top"
          aria-label={t.header.logoLabel}
          className="flex items-center gap-2.5 rounded-md transition-transform active:scale-[0.98]"
        >
          <Logo />
          <span className="font-mono text-sm font-medium tracking-tight">Naghi Liviu</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-fg-muted transition-colors hover:text-fg"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <a
            href={`mailto:${EMAIL}`}
            aria-label={t.header.emailLabel}
            className="hidden size-9 items-center justify-center rounded-md text-fg-muted transition-colors hover:bg-bg-subtle hover:text-fg sm:flex"
          >
            <EnvelopeSimple size={18} weight="regular" />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.header.linkedinLabel}
            className="hidden size-9 items-center justify-center rounded-md text-fg-muted transition-colors hover:bg-bg-subtle hover:text-fg sm:flex"
          >
            <LinkedinLogo size={18} weight="regular" />
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.header.githubLabel}
            className="hidden size-9 items-center justify-center rounded-md text-fg-muted transition-colors hover:bg-bg-subtle hover:text-fg sm:flex"
          >
            <GithubLogo size={18} weight="regular" />
          </a>
          <Link
            href="/review"
            aria-label={t.header.reviewLabel}
            className="hidden size-9 items-center justify-center rounded-md text-fg-muted transition-colors hover:bg-bg-subtle hover:text-fg sm:flex"
          >
            <Star size={18} weight="regular" />
          </Link>
          <button
            type="button"
            onClick={toggleLocale}
            aria-label={t.header.languageLabel}
            className="flex h-9 items-center gap-1 rounded-md px-2 text-fg-muted transition-colors hover:bg-bg-subtle hover:text-fg"
          >
            <Translate size={18} weight="regular" />
            <span className="font-mono text-xs uppercase">{locale}</span>
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={t.header.themeLabel}
            className="flex size-9 items-center justify-center rounded-md text-fg-muted transition-colors hover:bg-bg-subtle hover:text-fg"
          >
            {theme === "dark" ? <SunDim size={18} /> : <MoonStars size={18} />}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label={t.header.menuLabel}
            className="flex size-9 items-center justify-center rounded-md text-fg-muted transition-colors hover:bg-bg-subtle hover:text-fg lg:hidden"
          >
            <List size={20} />
          </button>
        </div>
      </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label={t.header.closeMenuLabel}
            className="absolute inset-0 bg-fg/20 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute right-0 top-0 flex h-full w-full max-w-xs flex-col gap-1 bg-bg-elevated p-6 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-mono text-sm text-fg-muted">Naghi Liviu</span>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label={t.header.closeMenuLabel}
                className="flex size-9 items-center justify-center rounded-md text-fg-muted hover:bg-bg-subtle hover:text-fg"
              >
                <X size={20} />
              </button>
            </div>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-3 py-3 text-base text-fg transition-colors hover:bg-bg-subtle"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 flex items-center gap-2 border-t border-border pt-4">
              <a
                href={`mailto:${EMAIL}`}
                aria-label={t.header.emailLabel}
                className="flex size-10 items-center justify-center rounded-md text-fg-muted hover:bg-bg-subtle hover:text-fg"
              >
                <EnvelopeSimple size={19} />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.header.linkedinLabel}
                className="flex size-10 items-center justify-center rounded-md text-fg-muted hover:bg-bg-subtle hover:text-fg"
              >
                <LinkedinLogo size={19} />
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.header.githubLabel}
                className="flex size-10 items-center justify-center rounded-md text-fg-muted hover:bg-bg-subtle hover:text-fg"
              >
                <GithubLogo size={19} />
              </a>
              <Link
                href="/review"
                aria-label={t.header.reviewLabel}
                className="flex size-10 items-center justify-center rounded-md text-fg-muted hover:bg-bg-subtle hover:text-fg"
              >
                <Star size={19} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
