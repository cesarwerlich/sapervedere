import Section from "./Section";

const tags = ["YC W22", "IESE EMBA", "MSc Production Engineering", "EN · PT · ES · DE · IT"];

export default function AboutConcise() {
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

          <div className="md:col-span-8">
            <p className="text-lg leading-relaxed text-[color:var(--ink-soft)]">
              I&apos;m Cesar. My background starts in engineering and operational
              discipline, then moves into startups where I&apos;ve worked as a
              founder, operator, and company builder across GTM, finance, and
              execution. Most recently I was Co-founder &amp; COO at{" "}
              <span className="text-[color:var(--ink)]">Lightmeter</span> (YC
              W22). Today I work with founders who need stronger systems,
              cleaner execution, and more leverage at the operating layer.
            </p>

            <div className="pt-6 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-[color:var(--border-strong)] bg-[color:var(--surface)] px-3 py-1 text-xs text-[color:var(--ink-soft)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
