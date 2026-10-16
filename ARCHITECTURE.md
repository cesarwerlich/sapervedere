# Architecture

## Overview

Saper Vedere is a Next.js App Router marketing and B2B lead generation platform with a Brazilian Portuguese (PT-BR) canonical root (`/`), an English international route (`/en`), a 2-step pre-qualification funnel (`/contato`, `/lp/[slug]`, `/obrigado`), and legal compliance pages (`/privacidade`, `/termos`).

Primary routes:

- `/` (default production experience in PT-BR)
- `/en` (international English advisory experience)
- `/contato` (unified B2B diagnostic & contact qualification page)
- `/lp/gtm`, `/lp/operacoes`, `/lp/diagnostico` (dedicated paid-traffic landing pages)
- `/obrigado` (post-submission conversion bridge + Google Calendar scheduling)
- `/privacidade`, `/privacy`, `/termos`, `/terms` (LGPD & GDPR compliance pages)

Variant routes (for comparison/testing, `noindex`):

- `/theme-2` through `/theme-7`

## Core Structure

- `app/layout.tsx`
  - Global PT-BR default metadata, `hreflang` alternates, fonts, and GA4 tags.
- `app/page.tsx`
  - Default PT-BR homepage composition (`app/components/pt/*`) and theme wrapper classes.
- `app/en/page.tsx`
  - English homepage composition (`app/components/*`).
- `app/components/LeadForm.tsx`
  - Client pre-qualification form with UTM capture, Cloudflare Turnstile + honeypot, and conversion tracking.
- `app/api/leads/route.ts`
  - Server-side lead validation, Turnstile verification, and webhook forwarding.
- `app/lib/analytics.ts` & `app/lib/utm.ts`
  - Centralized PostHog + GTM `dataLayer` event wrapper and `sessionStorage` UTM/click-ID persistence.
- `instrumentation-client.ts` & `next.config.ts`
  - Defensive PostHog client initialization and `/ingest/*` proxy rewrites.
- `public/*`
  - Logos, favicon, and static media assets.

## Design System Decisions

- Base visual language is token-driven through CSS custom properties in `app/globals.css`.
- Accent/hover/link behavior should be controlled via token updates, not scattered inline colors.
- Theme wrappers (e.g. `theme-v2-blue`, `theme-6-logo-blue-headings`) are used to enforce approved palettes and prevent browser/runtime drift.

## Analytics

- Uses PostHog client-side.
- Event capture is centralized in `app/lib/analytics.ts` to avoid raw `posthog.capture()` usage across components.
- Ingest requests are proxied through site routes to improve reliability against blockers.

## Deployment

- GitHub + Vercel workflow.
- `main` branch merge triggers production deployment.
- PRs trigger preview deployments.

## Operational Notes

- Local dev runs on port `3001` (`npm run dev`).
- Canonical favicon source is `public/favicon.ico`.
- Theme routes are intentionally retained for iterative design validation.
