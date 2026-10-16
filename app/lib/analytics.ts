'use client';

import posthog from 'posthog-js';

type EventProps = Record<string, string | number | boolean | null | undefined>;

/** Central helper so we never pass a raw string to posthog.capture. */
export function track(event: string, props: EventProps = {}) {
  if (typeof window === 'undefined') return;
  if (!posthog || !posthog.__loaded || typeof posthog.capture !== 'function')
    return;
  if (
    typeof posthog.has_opted_out_capturing === 'function' &&
    posthog.has_opted_out_capturing()
  )
    return;
  if (typeof posthog.is_capturing === 'function' && !posthog.is_capturing())
    return;

  try {
    posthog.capture(event, props);
  } catch {
    /* no-op: analytics must never break the UI */
  }
}

/** Named events — single source of truth for analytics vocabulary. */
export const Events = {
  ctaClick: 'cta_click',
  sectionView: 'section_view',
  outboundClick: 'outbound_click',
  scrollDepth: 'scroll_depth',
  leadFormStarted: 'lead_form_started',
  leadSubmitted: 'lead_submitted',
  leadConfirmed: 'generate_lead',
  calendarBooked: 'calendar_booked',
} as const;

/** Push event payload to Google Tag Manager / GA4 / Meta dataLayer */
export function pushDataLayer(
  event: string,
  data: Record<string, unknown> = {}
) {
  if (typeof window === 'undefined') return;
  try {
    const win = window as unknown as { dataLayer?: unknown[] };
    win.dataLayer = win.dataLayer || [];
    win.dataLayer.push({ event, ...data });
  } catch {
    /* no-op: analytics must never break the UI */
  }
}

/** Alias for pushDataLayer */
export const pushDataLayerEvent = pushDataLayer;

/** Identify lead in PostHog and trigger conversion event in dataLayer */
export function identifyLead(
  email: string,
  traits: Record<string, string | number | boolean | null | undefined> = {}
) {
  if (typeof window === 'undefined') return;

  if (posthog && posthog.__loaded && typeof posthog.identify === 'function') {
    try {
      posthog.identify(email, traits);
    } catch {
      /* no-op */
    }
  }

  pushDataLayer('generate_lead', { user_email: email, ...traits });
}
