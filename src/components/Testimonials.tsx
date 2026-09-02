"use client";

import { useEffect, useMemo, useRef } from "react";
import { useReducedMotion } from "motion/react";
import { Quotes, Star } from "@phosphor-icons/react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { RevealOnScroll } from "./RevealOnScroll";
import { Avatar } from "./Avatar";
import { testimonials } from "@/data/testimonials";

const RESUME_DELAY = 2500;
const AUTO_SCROLL_SPEED = 36;

function TestimonialCard({
  name,
  role,
  rating,
  quote,
}: {
  name: string;
  role: string;
  rating: number;
  quote: string;
}) {
  return (
    <div className="flex w-[320px] shrink-0 flex-col gap-4 rounded-xl border border-border bg-bg-elevated p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_20px_40px_-24px_var(--accent)]">
      <Quotes size={24} weight="fill" className="text-accent/60" />
      <p className="line-clamp-3 text-sm leading-relaxed text-fg-muted">{quote}</p>
      <div className="mt-auto flex items-center gap-3 pt-2">
        <Avatar name={name} className="size-9" />
        <div className="min-w-0">
          <p className="truncate text-sm font-bold text-fg">{name}</p>
          <p className="truncate text-xs text-fg-faint">{role}</p>
        </div>
        <div className="ml-auto flex shrink-0 gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={12}
              weight={i < rating ? "fill" : "regular"}
              className={i < rating ? "text-accent" : "text-fg-faint"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const { t, locale } = useLanguage();
  const reduce = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const draggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartScrollRef = useRef(0);

  const average = useMemo(() => {
    if (testimonials.length === 0) return 0;
    return testimonials.reduce((sum, item) => sum + item.rating, 0) / testimonials.length;
  }, []);

  const loop = useMemo(() => [...testimonials, ...testimonials], []);

  const triggerPause = () => {
    pausedRef.current = true;
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      pausedRef.current = false;
    }, RESUME_DELAY);
  };

  useEffect(() => {
    if (testimonials.length === 0 || reduce) return;

    let raf = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      const track = trackRef.current;
      if (track && !pausedRef.current && !draggingRef.current) {
        track.scrollLeft += AUTO_SCROLL_SPEED * dt;
        const halfWidth = track.scrollWidth / 2;
        if (track.scrollLeft >= halfWidth) {
          track.scrollLeft -= halfWidth;
        }
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduce]);

  useEffect(() => {
    return () => {
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    };
  }, []);

  if (testimonials.length === 0) return null;

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const track = trackRef.current;
    if (!track) return;
    draggingRef.current = true;
    dragStartXRef.current = e.clientX;
    dragStartScrollRef.current = track.scrollLeft;
    track.setPointerCapture(e.pointerId);
    triggerPause();
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    const track = trackRef.current;
    if (!track) return;
    const delta = e.clientX - dragStartXRef.current;
    track.scrollLeft = dragStartScrollRef.current - delta;
    triggerPause();
  };

  const stopDragging = (e: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = false;
    trackRef.current?.releasePointerCapture(e.pointerId);
  };

  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <RevealOnScroll>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-3xl font-bold tracking-tight text-fg sm:text-4xl">
            {t.testimonials.heading}
          </h2>
          <div className="flex items-center gap-2 text-sm text-fg-muted">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  weight={i < Math.round(average) ? "fill" : "regular"}
                  className={i < Math.round(average) ? "text-accent" : "text-fg-faint"}
                />
              ))}
            </div>
            <span className="font-mono text-xs">
              {average.toFixed(1)} ({testimonials.length} {t.testimonials.reviewsSuffix})
            </span>
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll delay={0.1} className="mt-10 -mx-4 sm:-mx-6 lg:-mx-8">
        <div
          ref={trackRef}
          className="scrollbar-hide flex touch-pan-x cursor-grab gap-5 overflow-x-auto px-4 pb-2 select-none active:cursor-grabbing sm:px-6 lg:px-8"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={stopDragging}
          onPointerCancel={stopDragging}
          onPointerLeave={stopDragging}
          onTouchStart={triggerPause}
          onWheel={triggerPause}
        >
          {loop.map((item, i) => (
            <TestimonialCard
              key={`${item.id}-${i}`}
              name={item.name}
              role={item.role}
              rating={item.rating}
              quote={item.quote[locale]}
            />
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
}
