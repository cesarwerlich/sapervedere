# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into this Next.js App Router project. The following changes were made:

- **`instrumentation-client.ts`** — Created to initialize PostHog client-side using the Next.js 15.3+ instrumentation pattern. Includes session replay, exception capture, and debug mode in development.
- **`next.config.ts`** — Added reverse proxy rewrites so PostHog events are routed through `/ingest` on your own domain, improving ad-blocker resilience and performance.
- **`.env.local`** — Configured `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` environment variables.
- **`app/page.tsx`** — Converted to a client component and added PostHog `capture()` calls on the two main CTA clicks.

| Event | Description | File |
|-------|-------------|------|
| `deploy_now_clicked` | User clicked the "Deploy Now" button linking to Vercel deployment | `app/page.tsx` |
| `documentation_clicked` | User clicked the "Documentation" link to Next.js docs | `app/page.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard — Analytics basics**: https://us.posthog.com/project/391462/dashboard/1493332
- **Deploy Now clicks over time**: https://us.posthog.com/project/391462/insights/Ehy4OGib
- **Documentation clicks over time**: https://us.posthog.com/project/391462/insights/z76zJpgz
- **Deploy vs Documentation clicks comparison**: https://us.posthog.com/project/391462/insights/Ynzz4yiJ
- **CTA click funnel: Deploy Now → Documentation**: https://us.posthog.com/project/391462/insights/NZVbnHTW
- **Unique users clicking CTAs**: https://us.posthog.com/project/391462/insights/3BtkcJbH

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.
