"use client";

import Link from "next/link";
import Section from "./Section";
import { track, Events } from "../lib/analytics";

type Offer = {
  name: string;
  tag: string;
  description: string;
  scope: string[];
  duration: string;
  for: string;
  featured?: boolean;
};

const offers: Offer[] = [
  {
    name: "Fractional COO",
    tag: "Embedded · 2–3 days / week",
    description:
      "I step into the operating seat, run the rhythm, and help the founder turn priorities into accountable execution.",
    scope: [
      "Weekly operating cadence",
      "Cross-functional alignment",
      "GTM and revenue ops",
      "Team structure and hiring support",
    ],
    duration: "Ongoing, 3-month minimum",
    for: "Founders who need a real operating partner, not an external advisor",
    featured: true,
  },
  {
    name: "Focused Sprint",
    tag: "Project · 4–8 weeks",
    description:
      "A fixed-scope sprint to install one critical system fast, usually around GTM, fundraising readiness, or execution infrastructure.",
    scope: [
      "GTM or revenue ops setup",
      "Fundraising prep",
      "Delivery and ownership cleanup",
      "Handover and next-step plan",
    ],
    duration: "4–8 weeks, fixed scope",
    for: "Teams with a specific bottleneck they need solved now",
  },
  {
    name: "Advisory",
    tag: "Retainer · monthly",
    description:
      "A lighter-touch option for founders who want recurring strategic pressure-testing without a fully embedded engagement.",
    scope: [
      "Founder 1:1s",
      "Decision support on ops and GTM",
      "Async review of decks, plans, and metrics",
      "Targeted introductions when helpful",
    ],
    duration: "Rolling monthly retainer",
    for: "Founders who already have an operating team but want a senior operator in the corner",
  },
];

export default function ServicesConcise() {
  const onCta = (offer: string) =>
    track(Events.ctaClick, { location: "services", label: offer });

  return (
    <Section id="services" label="Services" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs sm:text-sm uppercase tracking-[0.18em] text-[color:var(--muted)]">
            Work with me
          </p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl tracking-tight text-[color:var(--ink)]">
            Three ways I plug in.
          </h2>
          <p className="mt-5 text-lg text-[color:var(--ink-soft)]">
            One embedded offer, one focused sprint, and one lighter-touch advisory
            format.
          </p>
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {offers.map((offer) => (
            <article
              key={offer.name}
              className={`relative rounded-[var(--radius-lg)] p-7 sm:p-8 bg-[color:var(--surface)] border ${
                offer.featured
                  ? "border-[color:var(--accent)]"
                  : "border-[color:var(--border)]"
              }`}
            >
              {offer.featured && (
                <span className="absolute -top-3 left-7 inline-flex items-center rounded-full bg-[color:var(--accent)] text-[color:var(--bg)] px-3 py-1 text-xs font-medium uppercase tracking-wider">
                  Core offer
                </span>
              )}

              <header>
                <h3 className="font-display text-2xl sm:text-3xl text-[color:var(--ink)] tracking-tight">
                  {offer.name}
                </h3>
                <p className="mt-1 text-sm text-[color:var(--muted)] font-medium">
                  {offer.tag}
                </p>
              </header>

              <p className="mt-5 text-[color:var(--ink-soft)] leading-relaxed">
                {offer.description}
              </p>

              <ul className="mt-5 space-y-2">
                {offer.scope.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-[color:var(--ink-soft)]"
                  >
                    <span
                      aria-hidden
                      className="mt-2 inline-block h-1 w-1 rounded-full bg-[color:var(--accent)] flex-shrink-0"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <dl className="mt-6 pt-5 border-t border-[color:var(--border)] grid grid-cols-1 gap-4 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-wider text-[color:var(--muted)]">
                    Duration
                  </dt>
                  <dd className="mt-1 text-[color:var(--ink)]">{offer.duration}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-[color:var(--muted)]">
                    Best for
                  </dt>
                  <dd className="mt-1 text-[color:var(--ink)]">{offer.for}</dd>
                </div>
              </dl>

              <div className="mt-6">
                <Link
                  href="#contact"
                  onClick={() => onCta(offer.name)}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[color:var(--accent)] hover:text-[color:var(--accent-hover)]"
                >
                  Start a conversation
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
