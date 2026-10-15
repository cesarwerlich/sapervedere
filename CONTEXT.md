# Context

## What This Project Is

Saper Vedere (`sapervedere.com.br`) is the official marketing and operating partner advisory website for Cesar Werlich (Fractional COO & Operating Partner for B2B SaaS founders).

## Who It Serves

- B2B SaaS founders (Pre-seed to Series A) seeking operating leverage, GTM systems, and fundraising readiness.
- Prospective advisory clients booking intro calls.

## Success Criteria

- Clean, fast, accessible presentation of service offerings and track record.
- Working booking workflow (Google Calendar scheduling and LinkedIn connection).
- No personal email or sensitive private data exposed on public UI surfaces.
- Green checks across linting, typechecking, and production builds (`./scripts/check.sh`).

## Non-Goals

- Complex backend infrastructure or database storage (the site is predominantly static marketing copy with external scheduling/analytics embeds).
- Exposing personal private email addresses in public UI grids or direct mailto links without spam protection.

## Architecture

- **Framework**: Next.js 16.2.4 with App Router and Turbopack.
- **Frontend / Styling**: React 19.2.4, Tailwind CSS v4 design tokens via CSS custom properties in `app/globals.css`.
- **Analytics**: PostHog client analytics with ingest rewrites in `next.config.ts`, and Google Tag Manager (GA4) script tags in `app/layout.tsx`.
- **Deployment**: Vercel with automatic production deployment on `main` push and preview deployments on pull requests.

## Repository Layout

```text
app/
  components/       Reusable UI sections (Hero, Nav, FitCheck, Services, Companies, Contact, Footer)
  theme-*/          Iterative theme & copy variant routes (/theme-2 to /theme-7)
  globals.css       Design tokens, Tailwind 4 theme definitions, typography
  layout.tsx        Root layout, metadata, font loading (Geist, Fraunces), analytics
  page.tsx          Production canonical homepage
public/             Logos, icons, static assets
scripts/            bootstrap.sh, check.sh, worktree-bootstrap.sh, worktree-finish.sh
docs/               Memory, roadmap, operations, testing
.github/            Issue templates, PR template, CI workflows
```

## Local Commands

```bash
./scripts/bootstrap.sh   # Install dependencies (npm ci / npm install)
./scripts/check.sh       # Stack-aware verification: lint, typecheck, build
npm run dev              # Run local development server on port 3001
npm run build            # Next.js production build
```

## Constraints

- **Port**: Local development runs on port 3001 (`next dev -p 3001`).
- **Privacy**: No personal email addresses exposed on public UI surfaces.
- **Deploy Safety**: Automatic production deploys occur on `main` merge; verify all changes via `./scripts/check.sh` before merging.

## External Systems

| System | Purpose | Owner | Notes |
| --- | --- | --- | --- |
| Vercel | Hosting & Edge CDN | Cesar Werlich | Automated GitHub App deployments |
| Google Calendar | Appointment scheduling | Cesar Werlich | Embedded iframe + direct booking link |
| PostHog | Product analytics | Cesar Werlich | Ingest proxy via `/ingest/*` rewrites |
| Google Analytics | Traffic analytics | Cesar Werlich | GA4 ID `G-QTT2N0E134` |
