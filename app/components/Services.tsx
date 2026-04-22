"use client";

import Link from "next/link";
import Section from "./Section";
import { track, Events } from "../lib/analytics";

type Tier = {
  name: string;
  tag: string;
  description: string;
  scope: string[];
  duration: string;
  for: string;
  featured?: boolean;
};

const tiers: Tier[] = [
  {
    name: "Fractional COO",
    tag: "Embedded · 2–3 days / week",
    description:
      "Senior operating partner inside your company, not advising from the sidelines. I run the operating rhythm, unblock the team, and turn vision into an execution plan you can actually ship.",
    scope: [
      "Operating cadence &amp; team leadership",
      "GTM and revenue ops infrastructure",
      "Cross-functional delivery",
      "Hiring and org design",
    ],
    duration: "Ongoing, 3-month minimum",
    for: "Seed to Series A founders who need leverage, not another advisor",
    featured: true,
  },
  {
    name: "GTM Sprint",
    tag: "Project · 6–12 weeks",
    description:
      "Install the outbound engine, customer experience workflows, and revenue operations that turn inbound interest into repeatable revenue. Built on the same system I scaled at Lightmeter.",
    scope: [
      "Outbound playbook &amp; sales tooling",
      "Onboarding &amp; CX workflows",
      "Revenue reporting &amp; CRM setup",
      "Handover &amp; enablement",
    ],
    duration: "6–12 weeks, fixed scope",
    for: "Founders with early traction ready to build a repeatable sales motion",
  },
  {
    name: "Fundraising Sprint",
    tag: "Project · 4–6 weeks",
    description:
      "From narrative to metrics, valuation model to data room. The back-office and storytelling work that turns a scrappy pitch into an investable story.",
    scope: [
      "Narrative &amp; deck",
      "Metrics &amp; FP&amp;A",
      "Valuation &amp; cap table prep",
      "Data room &amp; investor pipeline",
    ],
    duration: "4–6 weeks before the raise",
    for: "Pre-seed and seed-stage founders preparing to fundraise",
  },
  {
    name: "Advisor",
    tag: "Retainer · monthly",
    description:
      "A monthly sparring partner for founders who already have an operating team but need a trusted outside voice on ops, GTM, and fundraising decisions.",
    scope: [
      "Bi-weekly 1:1s",
      "Ad-hoc founder Slack access",
      "Deck / memo review",
      "Network intros",
    ],
    duration: "Rolling, 6-month minimum",
    for: "Founders with a leadership team who want a senior operator on call",
  },
];

export default function Services() {
  const onCta = (tier: string) =>
    track(Events.ctaClick, { location: "services", label: tier });

  return (
    <Section id="services" label="Services" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs sm:text-sm uppercase tracking-[0.18em] text-[color:var(--muted)]">
            Work with me
          </p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl tracking-tight text-[color:var(--ink)]">
            Four ways I plug in.
          </h2>
          <p className="mt-5 text-lg text-[color:var(--ink-soft)]">
            From embedded operator to monthly sparring partner — depending on
            where your company is and what you need next.
          </p>
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className={`relative rounded-[var(--radius-lg)] p-7 sm:p-8 bg-[color:var(--surface)] border ${
                tier.featured
                  ? "border-[color:var(--accent)]"
                  : "border-[color:var(--border)]"
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-7 inline-flex items-center rounded-full bg-[color:var(--accent)] text-[color:var(--bg)] px-3 py-1 text-xs font-medium uppercase tracking-wider">
                  Most engaged
                </span>
              )}

              <header className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl text-[color:var(--ink)] tracking-tight">
                    {tier.name}
                  </h3>
                  <p className="mt-1 text-sm text-[color:var(--muted)] font-medium">
                    {tier.tag}
                  </p>
                </div>
              </header>

              <p className="mt-5 text-[color:var(--ink-soft)] leading-relaxed">
                {tier.description}
              </p>

              <ul className="mt-5 space-y-2">
                {tier.scope.map((s) => (
                  <li
                    key={s}
                    className="flex items-start gap-2 text-sm text-[color:var(--ink-soft)]"
                  >
                    <span
                      aria-hidden
                      className="mt-2 inline-block h-1 w-1 rounded-full bg-[color:var(--accent)] flex-shrink-0"
                    />
                    <span dangerouslySetInnerHTML={{ __html: s }} />
                  </li>
                ))}
              </ul>

              <dl className="mt-6 pt-5 border-t border-[color:var(--border)] grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-wider text-[color:var(--muted)]">
                    Duration
                  </dt>
                  <dd className="mt-1 text-[color:var(--ink)]">{tier.duration}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-[color:var(--muted)]">
                    Best for
                  </dt>
                  <dd className="mt-1 text-[color:var(--ink)]">{tier.for}</dd>
                </div>
              </dl>

              <div className="mt-6">
                <Link
                  href="#contact"
                  onClick={() => onCta(tier.name)}
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
