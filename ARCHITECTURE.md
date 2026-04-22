# Architecture

## Overview

Saper Vedere is a Next.js App Router marketing site with a single canonical page and multiple theme-variant routes used for design and copy testing.

Primary route:
- `/` (default production experience)

Variant routes (for comparison/testing):
- `/theme-3`
- `/theme-4`
- `/theme-5`
- `/theme-6`
- `/theme-7`

## Core Structure

- `app/layout.tsx`
  - Global metadata, fonts, and viewport settings.
- `app/page.tsx`
  - Default homepage composition and theme wrapper classes.
- `app/components/*`
  - Reusable sections (`Nav`, `Hero`, `Services`, `Companies`, `About`, `FitCheck`, `Contact`, `Footer`, `Section`).
- `app/globals.css`
  - Design tokens, utility token exports via `@theme`, and global styles.
- `app/lib/analytics.ts`
  - Lightweight event wrapper and event name constants.
- `instrumentation-client.ts`
  - PostHog initialization.
- `next.config.ts`
  - PostHog ingest proxy rewrites (`/ingest/*`).
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
