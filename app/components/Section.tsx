"use client";

import { useEffect, useRef } from "react";
import { track, Events } from "../lib/analytics";

type Props = {
  id: string;
  /** Human-readable label for analytics, e.g. "Services" */
  label: string;
  className?: string;
  children: React.ReactNode;
};

/**
 * Section wrapper with:
 *  - Anchor id for deep-linking
 *  - IntersectionObserver that fires a `section_view` event (once per session)
 *  - Reveal-on-scroll animation (CSS-driven, respects prefers-reduced-motion)
 */
export default function Section({ id, label, className = "", children }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const seenRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            if (!seenRef.current) {
              seenRef.current = true;
              track(Events.sectionView, { section: label });
            }
          }
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [label]);

  return (
    <section
      ref={ref}
      id={id}
      aria-label={label}
      className={`reveal scroll-mt-24 ${className}`}
    >
      {children}
    </section>
  );
}
