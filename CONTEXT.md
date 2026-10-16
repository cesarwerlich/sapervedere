# Context

## What This Project Is

Saper Vedere (`sapervedere.com.br`) is the official marketing, lead generation, and operating partner advisory platform for Cesar Werlich (Fractional COO & Operating Partner for B2B SaaS founders).

## Domain Glossary (Ubiquitous Language)

- **Canonical Root (`/`)**: The primary Brazilian Portuguese (PT-BR) experience tailored to Brazilian B2B SaaS and startup founders.
- **Global Route (`/en`)**: The English-language advisory experience serving international founders, VCs, and traffic redirected from `cesarwerlich.com`.
- **Entry Offer (Oferta de Entrada)**: High-intent, scoped engagements used for paid traffic acquisition — specifically **Máquina de Outbound & GTM** and **Diagnóstico Operacional de 2 Semanas**.
- **Core Advisory (COO Fracionado)**: Ongoing hands-on operating partnership (GTM cadence, operational infrastructure, fundraising readiness).
- **Pre-Qualification Funnel (`/contato` & `/lp/[slug]`)**: First-party lead capture forms protected by Cloudflare Turnstile + honeypot that qualify company stage and primary challenge before booking.
- **Conversion Bridge (`/obrigado`)**: The post-submission confirmation page where first-party ad conversion events (`generate_lead`) fire reliably before presenting the embedded Google Calendar appointment schedule.

## Who It Serves

- Brazilian and international B2B SaaS founders (Pre-seed to Series A) seeking operating leverage, repeatable GTM/outbound systems, and fundraising readiness.

## Success Criteria

- Native PT-BR canonical root (`/`) with preserved English experience (`/en`).
- Full Google Ads and Meta Ads compliance (`/privacidade`, `/termos`).
- Working 2-step conversion funnel (`/contato` and `/lp/[slug]` → `POST /api/leads` → `/obrigado` + Calendar embed) with UTM persistence and Cloudflare Turnstile bot protection.
- Green checks across linting, typechecking, and production builds (`./scripts/check.sh`).

## Non-Goals

- Hosting cold-email sending engines or outbound scraping infrastructure inside this Next.js repo (those run in decoupled external pipelines/MCPs).
- Exposing personal private email addresses on public UI surfaces.

## Architecture

- **Framework**: Next.js 16.2.4 with App Router and Turbopack.
- **Frontend / Styling**: React 19.2.4, Tailwind CSS v4 design tokens via CSS custom properties in `app/globals.css`.
- **Analytics & Attribution**:
  - **Ad Attribution**: GTM + GA4 (`G-QTT2N0E134`) + `window.dataLayer` conversion pushes + first-party UTM persistence (`app/lib/utm.ts`).
  - **Product & Funnel Analytics**: PostHog client analytics with `/ingest/*` proxy rewrites.
- **Bot Protection**: Cloudflare Turnstile + honeypot validation on `POST /api/leads`.
- **Deployment**: Vercel with automatic production deployment on `main` push and preview deployments on pull requests.

## Repository Layout

```text
app/
  api/leads/        Server-side lead validation, Turnstile check, and webhook dispatch
  components/       Reusable English UI sections + LeadForm
  components/pt/    Reusable Brazilian Portuguese (PT-BR) UI sections
  contato/          Unified dynamic pre-qualification form page (/contato)
  en/               English canonical advisory homepage (/en)
  lp/[slug]/        Modular ad campaign landing pages (/lp/gtm, /lp/operacoes, /lp/diagnostico)
  obrigado/         Conversion bridge page with pixel trigger + Google Calendar embed
  privacidade/      LGPD/GDPR Privacy Policy (aliased at /privacy)
  termos/           Terms of Service (aliased at /terms)
  theme-*/          Iterative theme & copy variant routes (/theme-2 to /theme-7, noindexed)
  lib/              Analytics wrapper (analytics.ts) and UTM persistence (utm.ts)
  page.tsx          Production PT-BR canonical homepage (/)
public/             Logos, icons, static assets
scripts/            bootstrap.sh, check.sh, worktree-bootstrap.sh, worktree-finish.sh
docs/               ADRs, memory, roadmap, operations, testing
.github/            Issue templates, PR template, CI workflows
```

## Local Commands

```bash
./scripts/bootstrap.sh   # Install dependencies (npm ci / npm install)
./scripts/check.sh       # Stack-aware verification: lint, typecheck, build
npm run dev              # Run local development server on port 3001
npm run format           # Format codebase with Prettier
```
