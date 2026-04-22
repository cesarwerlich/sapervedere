import Section from "./Section";

const tags = [
  "IESE EMBA",
  "Y Combinator W22",
  "MSc Production Engineering",
  "Lean Manufacturing certified",
  "Scrum Product Owner",
  "EN · PT · ES · DE · IT",
];

export default function About() {
  return (
    <Section id="about" label="About" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4">
            <p className="text-xs sm:text-sm uppercase tracking-[0.18em] text-[color:var(--muted)]">
              About
            </p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl tracking-tight text-[color:var(--ink)]">
              Engineer first. Operator always.
            </h2>
          </div>

          <div className="md:col-span-8 space-y-5 text-lg leading-relaxed text-[color:var(--ink-soft)]">
            <p>
              I&rsquo;m Cesar. I started my career on the factory floors of
              Siemens and WEG, running lean manufacturing and plant-startup
              projects. That&rsquo;s where I learned the operator&rsquo;s
              instinct: find the bottleneck, fix the system, then move to the
              next one.
            </p>
            <p>
              Over the past twelve years I&rsquo;ve brought that instinct into
              startups &mdash; as co-founder of a digital agency, then COO and
              CFO of a ride-hailing platform where I led the post-M&amp;A
              restructuring of a 90-person team, then founder of a marketplace
              in Brazil, then venture manager helping European founders turn
              ideas into operating companies, and most recently Co-founder and
              COO of <span className="text-[color:var(--ink)]">Lightmeter</span>
              , a YC W22 B2B SaaS.
            </p>
            <p>
              I know what it feels like to wake up with fifty things on fire.
              I&rsquo;ve also learned what it takes to build systems that let
              the founder focus on vision instead of firefighting. That&rsquo;s
              the work I care about &mdash; helping founders install the
              operating system their company needs to scale, then get out of
              the way.
            </p>
            <p>
              I&rsquo;m based between Brazil and Europe, work across five
              languages, and have operated in three continents. Right now
              I&rsquo;m selectively taking on new engagements after a
              four-month sabbatical circumnavigating the globe.
            </p>

            <div className="pt-4 flex flex-wrap gap-2">
              {tags.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-full border border-[color:var(--border-strong)] bg-[color:var(--surface)] px-3 py-1 text-xs text-[color:var(--ink-soft)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
