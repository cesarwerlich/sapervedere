# Changelog

## [v3 - 2026-10-15]

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
