import Section from "./Section";

const contexts = [
  {
    title: "Venture-backed B2B SaaS",
    detail:
      "From early traction to growth, with hands-on work across GTM, ops, and the systems founders need before scale breaks them.",
  },
  {
    title: "Founder-led startups",
    detail:
      "Inside companies where the founder is still too central, helping turn instinct and urgency into operating rhythm and delegation.",
  },
  {
    title: "Transition moments",
    detail:
      "Restructuring, cross-functional reset, and other moments when clarity, ownership, and pace matter more than theory.",
  },
];

export default function CompaniesConcise() {
  return (
    <Section
      id="companies"
      label="Experience"
      className="py-24 sm:py-32 bg-[color:var(--surface)]"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-xs sm:text-sm uppercase tracking-[0.18em] text-[color:var(--muted)]">
            Operating Context
          </p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl tracking-tight text-[color:var(--ink)]">
            Built in real operating environments.
          </h2>
          <p className="mt-5 text-lg text-[color:var(--ink-soft)]">
            The common thread is not industry theater. It is helping founder-led
            companies build the systems, cadence, and accountability to keep
            moving without chaos.
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
      </div>
    </Section>
  );
}
