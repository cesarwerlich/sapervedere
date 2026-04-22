"use client";

import posthog from "posthog-js";

type EventProps = Record<string, string | number | boolean | null | undefined>;

/** Central helper so we never pass a raw string to posthog.capture. */
export function track(event: string, props: EventProps = {}) {
  if (typeof window === "undefined") return;
  try {
    posthog.capture(event, props);
  } catch {
    /* no-op: analytics must never break the UI */
  }
}

/** Named events — single source of truth for analytics vocabulary. */
export const Events = {
  ctaClick: "cta_click",
  sectionView: "section_view",
  outboundClick: "outbound_click",
  scrollDepth: "scroll_depth",
} as const;
