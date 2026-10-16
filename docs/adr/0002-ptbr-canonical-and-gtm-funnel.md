# ADR 0002: PT-BR Canonical Root, Modular GTM Funnel, and 2-Step Lead Conversion

- **Status**: Accepted
- **Date**: 2026-10-16

## Context

`sapervedere.com.br` uses a Brazilian `.com.br` TLD and is preparing to run paid acquisition campaigns (Google Ads and Meta Ads) targeting Brazilian B2B SaaS founders. Previously, the root `/` was in English and relied on a cross-origin Google Calendar iframe for lead conversion, which prevented ad platforms from tracking completed bookings due to browser same-origin policies. Meanwhile, international advisory traffic will eventually move to `cesarwerlich.com`.

## Decision

1. **Inversion of Canonical Language**:
   - Root `/` serves native Brazilian Portuguese (PT-BR) content tailored to the Brazilian startup ecosystem.
   - `/en` preserves the English experience so `cesarwerlich.com` can redirect to `/en` until its standalone launch.
2. **Service Packaging for Paid Traffic**:
   - Core positioning remains Fractional COO & Operating Partner, while paid acquisition targets acute, high-intent entry offers: **GTM & Outbound Machine**, **2-Week Operational Diagnostic**, and **Fundraising Readiness**.
3. **Conversion Architecture (`/contato`, `/lp/[slug]`, `/obrigado`)**:
   - `/contato` provides a unified dynamic qualification form with service selection.
   - `/lp/[slug]` (`/lp/gtm`, `/lp/operacoes`, `/lp/diagnostico`) provides dedicated distraction-free ad landing pages.
   - Submitting the form validates via Cloudflare Turnstile + honeypot (`POST /api/leads`) and redirects to `/obrigado`, firing primary ad conversion events (`generate_lead`) on the first-party domain before presenting the Google Calendar scheduling embed.
4. **Measurement & Outbound Boundary**:
   - GTM + GA4 / Google Ads / Meta Pixel are the source of truth for ad ROI; PostHog is the source of truth for funnel behavior and session replay.
   - Cold email and outbound automation tools run in a decoupled external pipeline rather than inside the Next.js marketing repository.

## Consequences

- Ad platforms receive 100% first-party conversion signals on `/obrigado` regardless of cross-origin calendar iframe restrictions.
- Bot submissions are filtered via Cloudflare Turnstile and honeypot fields before polluting ad pixels or CRM webhooks.
- International links remain functional under `/en`.
