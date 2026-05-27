"use client";

import { useCallback, useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type RevealVariant = "up" | "down" | "left" | "right" | "scale" | "fade";

export type RevealProps = {
  /** Animation direction. @default "up" */
  variant?: RevealVariant;
  /** Render the section as a different tag (default `div`). */
  as?: ElementType;
  className?: string;
  /** If `true`, child elements stagger in one after another. */
  stagger?: boolean;
  /** IO threshold (0–1). @default 0.15 */
  threshold?: number;
  /** Trigger only once. @default true */
  once?: boolean;
  /** Pixel offset to start a bit before the section enters. @default "0px 0px -10% 0px" */
  rootMargin?: string;
  /** Optional one-time delay (ms) before the visible class is applied. */
  delay?: number;
  children: ReactNode;
};

/**
 * `<Reveal>` wraps a block of content and fades / slides it in once it
 * enters the viewport. When `stagger` is true, direct children animate
 * sequentially (driven by `.reveal-stagger` CSS in `globals.css`).
 *
 * The component is a CLIENT component but it is safe to import from
 * server components — the React Server Components boundary will handle
 * hydration automatically.
 */
export default function Reveal({
  variant = "up",
  as: Tag = "div",
  className = "",
  stagger = false,
  threshold = 0.15,
  once = true,
  rootMargin = "0px 0px -10% 0px",
  delay,
  children,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  const reveal = useCallback(
    (immediately = false) => {
      if (delay && delay > 0 && !immediately) {
        window.setTimeout(() => setVisible(true), delay);
      } else {
        setVisible(true);
      }
    },
    [delay]
  );

  const checkViewport = useCallback(
    (immediately = false) => {
      const el = ref.current;
      if (!el || visible) return;

      if (typeof IntersectionObserver === "undefined") {
        reveal(immediately);
        return;
      }

      const rect = el.getBoundingClientRect();
      const alreadyInView =
        rect.top < window.innerHeight && rect.bottom > 0;
      if (alreadyInView) {
        reveal(immediately);
      }
    },
    [visible, reveal]
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Wait one frame so layout is stable, then check.
    let raf = requestAnimationFrame(() => {
      raf = requestAnimationFrame(() => checkViewport(true));
    });

    // bfcache restore: browser may keep the page hidden then swap it in.
    const onPageShow = (e: PageTransitionEvent) => {
      if (e.persisted) checkViewport(true);
    };
    window.addEventListener("pageshow", onPageShow);

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          reveal();
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pageshow", onPageShow);
      observer.disconnect();
    };
  }, [once, rootMargin, threshold, checkViewport, reveal]);

  const classes = [
    stagger ? "reveal-stagger" : "",
    visible ? "is-visible" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag
      ref={ref as React.Ref<HTMLElement>}
      data-reveal={variant}
      className={classes}
    >
      {children}
    </Tag>
  );
}
