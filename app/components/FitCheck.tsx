import Section from "./Section";

const goodFit = [
  "B2B SaaS or marketplace, pre-seed to Series A",
  "Between 3 and 30 people, with at least some PMF signal",
  "Funded (or close to it), with founders ready to delegate ops",
  "Looking for an embedded operator, not a consultant with slides",
  "Willing to implement systems, not just talk about them",
];

const notFit = [
  "Pre-product, no founder alignment on direction yet",
  "Consumer-only, deep hardware, or regulated health/pharma",
  "Looking for cheap freelance work or task execution",
  "Expecting advice without willingness to change how things run",
  "Series B+ with an existing COO already in seat",
];

export default function FitCheck() {
  return (
    <Section id="fit" label="Fit check" className="py-24 sm:py-32 bg-[color:var(--surface)]">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs sm:text-sm uppercase tracking-[0.18em] text-[color:var(--muted)]">
            Fit check
          </p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl tracking-tight text-[color:var(--ink)]">
            Are we a fit?
          </h2>
          <p className="mt-5 text-lg text-[color:var(--ink-soft)]">
            Operating engagements are close partnerships. I only take on work
            where I can genuinely move the needle &mdash; here&rsquo;s how to
            tell.
          </p>
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {/* Good fit */}
          <div className="rounded-[var(--radius-lg)] border border-[color:var(--border)] bg-[color:var(--bg)] p-7 sm:p-8">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-[color:var(--olive)]/15 text-[color:var(--olive)]">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path
                    d="M3.5 8.5l3 3 6-7"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <h3 className="font-display text-2xl text-[color:var(--ink)]">
                Good fit
              </h3>
            </div>
            <ul className="mt-5 space-y-3">
              {goodFit.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 text-[color:var(--ink-soft)]"
                >
                  <span
                    aria-hidden
                    className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--olive)] flex-shrink-0"
                  />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not a fit */}
          <div className="rounded-[var(--radius-lg)] border border-[color:var(--border)] bg-[color:var(--bg)] p-7 sm:p-8">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-[color:var(--muted)]/15 text-[color:var(--muted)]">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path
                    d="M4 4l8 8M12 4l-8 8"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <h3 className="font-display text-2xl text-[color:var(--ink)]">
                Probably not a fit
              </h3>
            </div>
            <ul className="mt-5 space-y-3">
              {notFit.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 text-[color:var(--muted)]"
                >
                  <span
                    aria-hidden
                    className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--muted)] flex-shrink-0"
                  />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-8 text-sm text-[color:var(--muted)] max-w-2xl">
          Not sure if you qualify? Send a short note anyway &mdash; if
          I can&rsquo;t help I can usually point you to someone who can.
        </p>
      </div>
    </Section>
  );
}
