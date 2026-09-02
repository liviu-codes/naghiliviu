"use client";

import { EnvelopeSimple, GithubLogo, LinkedinLogo, Star } from "@phosphor-icons/react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { RevealOnScroll } from "./RevealOnScroll";
import { ContactForm } from "./ContactForm";

const EMAIL = "liviu.codes@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/liviu-naghi-b172a4b8/";
const GITHUB_URL = "https://github.com/liviu-codes";

export function Contact() {
  const { t } = useLanguage();

  const links = [
    { icon: EnvelopeSimple, label: t.contact.email, href: `mailto:${EMAIL}` },
    { icon: LinkedinLogo, label: t.contact.linkedin, href: LINKEDIN_URL, external: true },
    { icon: GithubLogo, label: t.contact.github, href: GITHUB_URL, external: true },
    { icon: Star, label: t.contact.leaveTestimonial, href: "/review" },
  ];

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <RevealOnScroll>
        <h2 className="text-3xl font-bold tracking-tight text-fg sm:text-4xl">
          {t.contact.heading}
        </h2>
        <p className="mt-3 max-w-[55ch] text-base text-fg-muted">{t.contact.intro}</p>
      </RevealOnScroll>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_280px] lg:gap-14">
        <RevealOnScroll delay={0.05}>
          <ContactForm />
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="rounded-xl border border-border bg-bg-elevated p-6 transition-colors duration-300 hover:border-accent/30">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-fg-faint">
              {t.contact.elsewhere}
            </h3>
            <ul className="mt-4 flex flex-col gap-1">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 rounded-md px-2 py-2.5 text-sm font-medium text-fg-muted transition-colors hover:bg-accent/10 hover:text-accent"
                  >
                    <link.icon size={17} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
