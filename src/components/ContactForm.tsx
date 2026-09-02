"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle, SpinnerGap, WarningCircle } from "@phosphor-icons/react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if ((data.get("company") as string)?.length > 0) {
      setStatus("success");
      form.reset();
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          method: data.get("method"),
          message: data.get("message"),
        }),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="absolute h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-medium text-fg">
          {t.contact.nameLabel}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="h-11 rounded-md border border-border-strong bg-bg-elevated px-3.5 text-sm text-fg placeholder:text-fg-faint transition-colors focus-visible:border-accent"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="method" className="text-sm font-medium text-fg">
          {t.contact.methodLabel}
        </label>
        <input
          id="method"
          name="method"
          type="text"
          required
          placeholder={t.contact.methodPlaceholder}
          className="h-11 rounded-md border border-border-strong bg-bg-elevated px-3.5 text-sm text-fg placeholder:text-fg-faint transition-colors focus-visible:border-accent"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-fg">
          {t.contact.messageLabel}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="resize-none rounded-md border border-border-strong bg-bg-elevated px-3.5 py-3 text-sm text-fg placeholder:text-fg-faint transition-colors focus-visible:border-accent"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-accent px-5 text-sm font-semibold text-accent-contrast shadow-[0_10px_26px_-12px_var(--accent)] transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-12px_var(--accent)] active:translate-y-0 active:scale-[0.98] disabled:opacity-70"
      >
        {status === "sending" && <SpinnerGap size={16} className="animate-spin" />}
        {status === "sending" ? t.contact.sending : t.contact.send}
      </button>

      {status === "success" && (
        <p className="flex items-center gap-2 text-sm text-accent">
          <CheckCircle size={16} weight="fill" />
          {t.contact.success}
        </p>
      )}
      {status === "error" && (
        <p className="flex items-center gap-2 text-sm text-red-500">
          <WarningCircle size={16} weight="fill" />
          {t.contact.error}
        </p>
      )}
    </form>
  );
}
