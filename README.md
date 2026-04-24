# Saper Vedere Website

Marketing site for Saper Vedere (fractional COO / operating partner), built with Next.js App Router.

## Tech Stack

- Next.js 16.2.4
- React 19.2.4
- TypeScript
- Tailwind CSS 4
- PostHog client analytics (`/ingest` proxy rewrites in `next.config.ts`)

## Local Development

Install dependencies and run dev server:

```bash
npm install
npm run dev
```

This project runs on:

- `http://localhost:3001`

### Useful scripts

- `npm run dev` starts local development on port `3001`
- `npm run lint` runs ESLint
- `npm run build` creates a production build
- `npm run start` serves the production build

## Routes

- `/` default production variant with the shortened copy structure
- `/theme-2` preserved pre-copy-refresh production version
- `/theme-3` neutral grayscale variant
- `/theme-4` blue-headings-only variant
- `/theme-5` conversion-focused variant (proof block + sticky CTA + stage split)
- `/theme-6` logo-blue heading variant
- `/theme-7` dark image-led variant

## Project Structure

- `app/page.tsx` default homepage route
- `app/components/*` reusable sections (`Hero`, `Services`, `Companies`, `Contact`, etc.)
- `app/globals.css` design tokens and global styling
- `app/lib/analytics.ts` event helpers
- `instrumentation-client.ts` PostHog initialization
- `public/*` static assets (logos, favicon, imagery)

## Environment Variables

Create `.env.local` with:

```bash
NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN=...
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

If PostHog vars are missing, tracking should be disabled in local testing workflows.

## Deployment

### Vercel (recommended)

1. Connect repo to Vercel project.
2. Set environment variables in Vercel (Production/Preview).
3. Deploy from main branch or open PR previews.

### Manual production check

```bash
npm run build
npm run start
```

## Notes

- Favicon is served from `public/favicon.ico`.
- Theme routes are intentionally kept for design and copy comparison before finalizing.

## Persistent Context Files

To keep continuity across new chats/threads:

- `README.md`: project overview and run/deploy basics
- `ARCHITECTURE.md`: structure and implementation decisions
- `CHANGELOG.md`: timeline of meaningful changes
