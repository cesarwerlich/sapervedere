"use client";

import Link from "next/link";
import { track, Events } from "../lib/analytics";

const proof = [
  { k: "YC W22", v: "Lightmeter" },
  { k: "4", v: "startups built" },
  { k: "90+", v: "person team led" },
  { k: "3", v: "continents" },
  { k: "5", v: "languages" },
];

export default function Hero() {
  const onCta = (label: string) =>
    track(Events.ctaClick, { location: "hero", label });

  return (
    <div id="top" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Headline */}
        <h1 className="font-display text-[2.75rem] leading-[1.05] sm:text-6xl md:text-7xl tracking-tight text-[color:var(--ink)] max-w-4xl">
          The operator founders bring in when they need to{" "}
          <span className="italic text-[color:var(--accent)]">
            scale without chaos
          </span>
          .
        </h1>

        {/* Sub */}
        <p className="mt-6 sm:mt-8 text-lg sm:text-xl leading-relaxed text-[color:var(--ink-soft)] max-w-2xl">
          I help B2B SaaS founders, pre-seed to Series A, build the GTM systems,
          operational infrastructure, and fundraising readiness to go from scrappy
          to scalable. Ex-Co-founder &amp; COO at Lightmeter (YC W22).
        </p>

        {/* CTAs */}
        <div className="mt-8 sm:mt-10 flex flex-wrap gap-3">
          <Link
            href="#contact"
            onClick={() => onCta("Book a 30-min call")}
            className="inline-flex items-center gap-2 rounded-full bg-[color:var(--accent)] text-[color:var(--bg)] px-6 py-3 text-base font-medium hover:bg-[color:var(--accent-hover)] transition-colors"
          >
            Book a 30-min call
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link
            href="#services"
            onClick={() => onCta("See how I work")}
            className="inline-flex items-center rounded-full border border-[color:var(--border-strong)] text-[color:var(--ink)] px-6 py-3 text-base font-medium hover:bg-[color:var(--surface)] transition-colors"
          >
            See how I work
          </Link>
        </div>

        {/* Proof strip */}
        <div className="mt-14 sm:mt-20 pt-8 border-t border-[color:var(--border)]">
          <dl className="grid grid-cols-2 sm:grid-cols-5 gap-6 sm:gap-4">
            {proof.map((p) => (
              <div key={p.v} className="flex flex-col">
                <dt className="font-display text-3xl sm:text-4xl text-[color:var(--ink)] tracking-tight">
                  {p.k}
                </dt>
                <dd className="mt-1 text-xs sm:text-sm text-[color:var(--muted)] uppercase tracking-wider">
                  {p.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
