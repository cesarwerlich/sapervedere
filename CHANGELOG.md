# Changelog

## [v3.2 - 2026-10-16]

### Changed

- **Brand Color Alignment**: Purged untracked utility colors (`emerald-500`, `emerald-600`, `red-500`) in favor of native design system tokens (`var(--olive)`, `var(--accent)`, `var(--surface)`).
- **Footer Navigation Cleanup**: Removed redundant `Privacidade`, `Termos`, `LinkedIn`, and language switch links from the top footer `<nav>`, consolidating them exclusively into the bottom legal utility bar.
- **PT Conversion Flow**: Removed direct calendar booking embed from the PT homepage, standardizing PT lead acquisition through the 2-step qualification funnel (`/contato` & `/lp/*` -> `/obrigado`), reserving direct calendar booking exclusively for `/en#contact`.
- **Anchor Standardization**: Renamed primary service navigation anchor on PT pages from `#services` to `#servicos` (retaining hidden `#services` alias for backward compatibility).
- **Bottleneck Multi-Checkbox Selection**: Upgraded `LeadForm` on landing pages (`/lp/*`) to support multi-select checkboxes for specific bottlenecks rather than single dropdown options, enabling granular problem discovery.
- **Stage & Employee Broadening**: Fully translated and localized business stages into PT-BR with explicit employee headcount brackets (`1 a 5 pessoas`, `6 a 15 pessoas`, etc.), broadening appeal beyond venture-backed startups to all growth-stage B2B businesses.
- **Bio & Resume De-cluttering**: Removed repetitive mentions of past employers and accelerator batches (`Lightmeter`, `YC W22`) across hero badges, about sections, and cards in favor of executive operating philosophy and LinkedIn profile links.
- **Environment & Attribution Keys**: Safely mapped and transferred Meta Pixel (`NEXT_PUBLIC_META_PIXEL_ID`), Resend (`RESEND_API_KEY`), and Cloudflare credentials into `.env.local` and `.env.example`.

### Added

- Native Brazilian Portuguese (PT-BR) components (`app/components/pt/*`) and canonical root `/` positioning entry offers (**Máquina de Outbound & GTM B2B**, **Diagnóstico Operacional de 2 Semanas**) alongside core **COO Fracionado** advisory.
- Preserved English canonical experience at `/en` (`app/en/page.tsx`) with bidirectional `hreflang` metadata (`pt-BR` and `en`).
- 2-step B2B pre-qualification funnel:
  - `/contato` (`app/contato/page.tsx`): Unified pre-qualification form page.
  - `/lp/[slug]` (`app/lp/[slug]/page.tsx`): Dedicated distraction-free campaign landing pages (`/lp/gtm`, `/lp/operacoes`, `/lp/diagnostico`).
  - `/obrigado` (`app/obrigado/page.tsx`): Conversion bridge page firing first-party ad conversion events (`generate_lead` / `lead_confirmed`) before rendering the embedded Google Calendar appointment widget.
- `app/components/LeadForm.tsx` with Cloudflare Turnstile anti-bot verification + honeypot field (`website_hp`).
- `app/api/leads/route.ts` endpoint for server-side validation, Turnstile verification, and optional CRM webhook forwarding (`LEAD_WEBHOOK_URL`).
- First-party UTM & click-ID (`gclid`, `fbclid`) persistence (`app/lib/utm.ts`) and GTM `dataLayer` + PostHog lead identification helpers (`app/lib/analytics.ts`).
- LGPD & GDPR compliance pages: `/privacidade`, `/privacy`, `/termos`, and `/terms`.

## [v3.0 - 2026-10-15]

### Added

- Adopted `multi-agent-scaffold` governance and automation: GitHub Actions CI workflow, secret scanning, issue/PR templates, and lane scripts (`check.sh`, `bootstrap.sh`, `worktree-bootstrap.sh`, `worktree-finish.sh`).
- Prettier, Husky, and `lint-staged` pre-commit hooks to automate formatting and linting.
- Next.js dynamic metadata routes: `app/sitemap.ts` and `app/robots.ts` with sitemap indexing.
- `noindex, nofollow` metadata on all experimental theme routes (`/theme-2` through `/theme-7`).
- Durable project memory files: `CONTEXT.md`, `DECISIONS.md`, `PLAYBOOK.md`, `SECURITY.md`, and `ANTIGRAVITY.md`.

### Changed

- Privacy: Removed direct email address display from `Contact.tsx` and email mailto link from `Footer.tsx`.
- Analytics: Defensively guarded PostHog client initialization against missing tokens in development and test environments.
- Infra: Integrated apex domain proxy redirect (`proxy.ts`) and Google Analytics GA4 script tags from `main`.

## [v2 - 2026-04-22]

### Added

- `redesign/v2` branch workflow.
- Theme wrappers to stabilize approved color behavior in production.

### Changed

- Enforced blue-focused heading/hover/button palette on v2 routes.
- Standardized heading treatment for default and `theme-6`.
- Resolved PR conflict with `main` and merged v2 updates.

## [v1 - 2026-04-21]

### Added

- Major visual redesign with multiple theme variants (`theme-3` to `theme-7`).
- Full logo lockup in header/footer.
- Additional conversion-oriented variant sections and copy experiments.

### Changed

- Reworked navigation, hero, services, experience, and contact presentation.
- Updated color token system and theme experiments.
- Replaced scaffold README with project-specific documentation.
