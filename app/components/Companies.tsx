import Section from "./Section";

type Company = {
  name: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  badge?: string;
};

const companies: Company[] = [
  {
    name: "Lightmeter",
    role: "Co-founder &amp; COO",
    period: "2022 — 2025",
    location: "Berlin",
    summary:
      "Led end-to-end customer experience, built outbound and revenue operations infrastructure, and contributed to product and technical direction for a B2B SaaS platform.",
    badge: "YC W22",
  },
  {
    name: "Saper Vedere",
    role: "Venture Management",
    period: "2019 — 2021",
    location: "Berlin",
    summary:
      "Worked side-by-side with founders to turn ideas into operational startups. Supported strategy, execution, fundraising narratives, and pre-seed / seed readiness.",
  },
  {
    name: "PetDriver",
    role: "Co-founder, COO &amp; CFO",
    period: "2017 — 2019",
    location: "Brazil",
    summary:
      "Led GTM, marketplace operations, and fundraising for a bootstrapped startup. Owned FP&amp;A, valuation modeling, and pitch development with angels and VCs.",
  },
  {
    name: "SaferTaxi",
    role: "Managing Director, COO &amp; CFO",
    period: "2013 — 2016",
    location: "Rio de Janeiro",
    summary:
      "Led post-M&amp;A restructuring of a 90+ person ride-hailing startup. Owned P&amp;L, finance, and cross-functional operations across logistics, HR, legal, sales, and marketing.",
  },
  {
    name: "Bumerang Digital",
    role: "Co-founder, CEO",
    period: "2013 — 2016",
    location: "Joinville, Brazil",
    summary:
      "Built a digital marketing agency from scratch. Web development, paid acquisition, SEO, email marketing, and analytics for growth-focused clients.",
  },
  {
    name: "Siemens · WEG",
    role: "Process &amp; Manufacturing Engineer",
    period: "2007 — 2013",
    location: "Brazil",
    summary:
      "Six years in industrial engineering and lean manufacturing. Led factory startup and restructuring projects. The operational DNA behind everything that came after.",
  },
];

export default function Companies() {
  return (
    <Section id="companies" label="Experience" className="py-24 sm:py-32 bg-[color:var(--surface)]">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs sm:text-sm uppercase tracking-[0.18em] text-[color:var(--muted)]">
            Where I&rsquo;ve operated
          </p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl tracking-tight text-[color:var(--ink)]">
            Eighteen years in the trenches.
          </h2>
          <p className="mt-5 text-lg text-[color:var(--ink-soft)]">
            From Siemens factory floors to YC-backed SaaS, from 90-person
            restructures to 2-person scrappy launches. Same operating
            principles, different scales.
          </p>
        </div>

        <ol className="mt-12 sm:mt-16 relative space-y-4 sm:space-y-5">
          {companies.map((c) => (
            <li
              key={c.name}
              className="group rounded-[var(--radius-lg)] border border-[color:var(--border)] bg-[color:var(--bg)] p-6 sm:p-8 transition-colors hover:border-[color:var(--border-strong)]"
            >
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-display text-2xl sm:text-3xl text-[color:var(--ink)] tracking-tight">
                  {c.name}
                </h3>
                {c.badge && (
                  <span className="inline-flex items-center rounded-full bg-[color:var(--accent)]/10 text-[color:var(--accent)] border border-[color:var(--accent)]/30 px-2.5 py-0.5 text-xs font-medium uppercase tracking-wider">
                    {c.badge}
                  </span>
                )}
                <span className="ml-auto text-sm text-[color:var(--muted)] tabular-nums">
                  {c.period}
                </span>
              </div>

              <p
                className="mt-2 text-sm sm:text-base text-[color:var(--ink-soft)] font-medium"
                dangerouslySetInnerHTML={{
                  __html: `${c.role} <span class="text-[color:var(--muted)] font-normal">· ${c.location}</span>`,
                }}
              />

              <p
                className="mt-4 text-[color:var(--ink-soft)] leading-relaxed"
                dangerouslySetInnerHTML={{ __html: c.summary }}
              />
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
