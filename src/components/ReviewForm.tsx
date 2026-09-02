"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle, SpinnerGap, Star, WarningCircle } from "@phosphor-icons/react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

type Status = "idle" | "sending" | "success" | "error";

export function ReviewForm() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<Status>("idle");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [ratingTouched, setRatingTouched] = useState(false);

  const showRatingError = ratingTouched && rating === 0;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setRatingTouched(true);
    if (rating === 0) return;

    const form = e.currentTarget;
    const data = new FormData(form);

    if ((data.get("company") as string)?.length > 0) {
      setStatus("success");
      form.reset();
      setRating(0);
      setRatingTouched(false);
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/testimonial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          role: data.get("role"),
          rating,
          testimonial: data.get("testimonial"),
        }),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
      form.reset();
      setRating(0);
      setRatingTouched(false);
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
          {t.review.nameLabel}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="h-11 rounded-md border border-border-strong bg-bg-elevated px-3.5 text-sm text-fg transition-colors focus-visible:border-accent"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="role" className="text-sm font-medium text-fg">
          {t.review.roleLabel}
        </label>
        <input
          id="role"
          name="role"
          type="text"
          required
          className="h-11 rounded-md border border-border-strong bg-bg-elevated px-3.5 text-sm text-fg transition-colors focus-visible:border-accent"
        />
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium text-fg">{t.review.ratingLabel}</span>
        <div
          className="flex gap-1"
          onMouseLeave={() => setHoverRating(0)}
          role="radiogroup"
          aria-label={t.review.ratingLabel}
        >
          {Array.from({ length: 5 }).map((_, i) => {
            const value = i + 1;
            const filled = value <= (hoverRating || rating);
            return (
              <button
                key={value}
                type="button"
                role="radio"
                aria-checked={rating === value}
                aria-label={String(value)}
                onMouseEnter={() => setHoverRating(value)}
                onClick={() => {
                  setRating(value);
                  setRatingTouched(true);
                }}
                className="flex size-10 items-center justify-center rounded-md transition-transform active:scale-90"
              >
                <Star
                  size={24}
                  weight={filled ? "fill" : "regular"}
                  className={filled ? "text-accent" : "text-fg-faint"}
                />
              </button>
            );
          })}
        </div>
        {showRatingError && (
          <p className="flex items-center gap-2 text-sm text-red-500">
            <WarningCircle size={15} weight="fill" />
            {t.review.ratingRequired}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="testimonial" className="text-sm font-medium text-fg">
          {t.review.testimonialLabel}
        </label>
        <textarea
          id="testimonial"
          name="testimonial"
          required
          rows={5}
          className="resize-none rounded-md border border-border-strong bg-bg-elevated px-3.5 py-3 text-sm text-fg transition-colors focus-visible:border-accent"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-accent px-5 text-sm font-semibold text-accent-contrast shadow-[0_10px_26px_-12px_var(--accent)] transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-12px_var(--accent)] active:translate-y-0 active:scale-[0.98] disabled:opacity-70"
      >
        {status === "sending" && <SpinnerGap size={16} className="animate-spin" />}
        {status === "sending" ? t.review.sending : t.review.submit}
      </button>

      {status === "success" && (
        <p className="flex items-center gap-2 text-sm text-accent">
          <CheckCircle size={16} weight="fill" />
          {t.review.success}
        </p>
      )}
      {status === "error" && (
        <p className="flex items-center gap-2 text-sm text-red-500">
          <WarningCircle size={16} weight="fill" />
          {t.review.error}
        </p>
      )}
    </form>
  );
}
