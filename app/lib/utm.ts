export interface UtmParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  gclid?: string;
  fbclid?: string;
  landing_page?: string;
  referrer?: string;
}

export const UTM_STORAGE_KEY = 'sv_utms';

const UTM_KEYS: (keyof UtmParams)[] = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'gclid',
  'fbclid',
];

/**
 * Captures UTM parameters and ad click IDs from the URL query string,
 * merges them with any existing session-stored UTMs, saves to sessionStorage,
 * and returns the merged object. Safe in SSR.
 */
export function captureUtms(): UtmParams {
  if (typeof window === 'undefined') {
    return {};
  }

  let existing: UtmParams = {};
  try {
    const raw = window.sessionStorage.getItem(UTM_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object') {
        existing = parsed;
      }
    }
  } catch {
    /* Ignore sessionStorage read/parse errors */
  }

  const current: UtmParams = {};
  try {
    const searchParams = new URLSearchParams(window.location.search);
    for (const key of UTM_KEYS) {
      const val = searchParams.get(key);
      if (val) {
        current[key] = val;
      }
    }
  } catch {
    /* Ignore URLSearchParams parsing errors */
  }

  const merged: UtmParams = {
    ...existing,
    ...current,
  };

  if (!merged.landing_page && window.location) {
    merged.landing_page = window.location.pathname;
  }

  if (
    !merged.referrer &&
    typeof document !== 'undefined' &&
    document.referrer
  ) {
    merged.referrer = document.referrer;
  }

  try {
    window.sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(merged));
  } catch {
    /* Ignore sessionStorage write errors (e.g. quota, private browsing) */
  }

  return merged;
}

/**
 * Retrieves persisted UTM parameters from sessionStorage.
 * Falls back to captureUtms() if not present or during initial load.
 */
export function getStoredUtms(): UtmParams {
  if (typeof window === 'undefined') {
    return {};
  }

  try {
    const raw = window.sessionStorage.getItem(UTM_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (
        parsed &&
        typeof parsed === 'object' &&
        Object.keys(parsed).length > 0
      ) {
        return parsed;
      }
    }
  } catch {
    /* Fallback on error */
  }

  return captureUtms();
}
