"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

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

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // SSR safety + browsers without IO support → reveal immediately.
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          if (delay && delay > 0) {
            window.setTimeout(() => setVisible(true), delay);
          } else {
            setVisible(true);
          }
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, once, rootMargin, threshold]);

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
