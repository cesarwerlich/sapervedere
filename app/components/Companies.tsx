import Section from "./Section";

type Context = {
  title: string;
  detail: string;
};

type Stage = {
  period: string;
  title: string;
  focus: string;
};

const contexts: Context[] = [
  {
    title: "Venture-backed B2B SaaS",
    detail:
      "Built operating cadence, GTM systems, and customer experience infrastructure from early traction to growth.",
  },
  {
    title: "Founder-led startups",
    detail:
      "From 2-person teams to larger organizations, with direct ownership across operations, finance, and execution.",
  },
  {
    title: "Complex restructuring moments",
    detail:
      "Led post-M&A transitions and scale-up realignment for cross-functional teams with high execution pressure.",
  },
];

const stages: Stage[] = [
  {
    period: "2007 — 2013",
    title: "Operational foundations",
    focus: "Industrial operations and process discipline",
  },
  {
    period: "2013 — 2019",
    title: "Operator-builder phase",
    focus: "GTM, finance, team leadership, and founder execution",
  },
  {
    period: "2013 — 2016",
    title: "Scale and restructure",
    focus: "Cross-functional execution in high-growth and transition contexts",
  },
  {
    period: "2019 — 2026",
    title: "Founder partner",
    focus: "Embedded fractional COO and operating partner work",
  },
];

export default function Companies() {
  return (
    <Section id="companies" label="Experience" className="py-24 sm:py-32 bg-[color:var(--surface)]">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-xs sm:text-sm uppercase tracking-[0.18em] text-[color:var(--muted)]">
            Operating Context
          </p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl tracking-tight text-[color:var(--ink)]">
            Eighteen years across different complexity levels.
          </h2>
          <p className="mt-5 text-lg text-[color:var(--ink-soft)]">
            Same operating principles, different environments: from early-stage
            startup build mode to high-pressure scale and restructuring.
          </p>
        </div>

        <div className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {contexts.map((item) => (
            <article
              key={item.title}
              className="rounded-[var(--radius-lg)] border border-[color:var(--border)] bg-[color:var(--bg)] p-6"
            >
              <h3 className="font-display text-2xl tracking-tight text-[color:var(--ink)]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[color:var(--ink-soft)]">
                {item.detail}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-[var(--radius-lg)] border border-[color:var(--border)] bg-[color:var(--bg)] p-6 sm:p-8">
          <h3 className="font-display text-2xl sm:text-3xl tracking-tight text-[color:var(--ink)]">
            Journey at a glance
          </h3>
          <ol className="mt-5 space-y-3">
            {stages.map((stage) => (
              <li key={`${stage.period}-${stage.title}`} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                <span className="text-xs sm:text-sm uppercase tracking-wider text-[color:var(--muted)] tabular-nums sm:w-36">
                  {stage.period}
                </span>
                <p className="text-[color:var(--ink-soft)]">
                  <span className="font-medium text-[color:var(--ink)]">{stage.title}</span>
                  {" · "}
                  {stage.focus}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
