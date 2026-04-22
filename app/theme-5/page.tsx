import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Services from "../components/Services";
import Companies from "../components/Companies";
import About from "../components/About";
import FitCheck from "../components/FitCheck";
import Footer from "../components/Footer";
import Section from "../components/Section";

const CAL_EMBED =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0bthjlEmSeiF4N8Hu9B9knW7OvOqCVfvDyzNERqgHTz295Fx5mnYOnly9kH9ckBteoAlvT0Wtj?gv=true";
const CAL_SHORT = "https://calendar.app.google/UrbapWUStc9WCJcF7";

const outcomes = [
  {
    metric: "35%",
    label: "Pipeline Growth",
    detail: "Structured outbound and handoff systems that increase qualified opportunities.",
  },
  {
    metric: "6-8w",
    label: "Execution Speed-Up",
    detail: "Operating cadence and owner clarity to move initiatives from idea to shipped.",
  },
  {
    metric: "90+",
    label: "Team Scale Experience",
    detail: "Hands-on operating leadership from scrappy startups to larger restructures.",
  },
];

const stages = [
  {
    title: "Pre-seed / Seed",
    fit: "You are finding PMF and building early GTM muscle.",
    focus: ["Founder leverage", "Sales motion basics", "Fundraising readiness"],
    href: `${CAL_SHORT}?utm_source=theme5&utm_campaign=stage_seed`,
  },
  {
    title: "Series A+",
    fit: "You are scaling delivery, team structure, and forecasting quality.",
    focus: ["Org operating system", "Revenue ops depth", "Cross-functional accountability"],
    href: `${CAL_SHORT}?utm_source=theme5&utm_campaign=stage_series_a`,
  },
];

export default function Theme5Page() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />

        <Section id="outcomes" label="Outcomes" className="py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="max-w-2xl">
              <p className="text-xs sm:text-sm uppercase tracking-[0.18em] text-[color:var(--muted)]">
                Selected Outcomes
              </p>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl tracking-tight text-[color:var(--ink)]">
                Results before aesthetics.
              </h2>
              <p className="mt-5 text-lg text-[color:var(--ink-soft)]">
                A few examples of the kind of leverage this operating partnership is built to
                create.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
              {outcomes.map((item) => (
                <article
                  key={item.label}
                  className="rounded-[var(--radius-lg)] border border-[color:var(--border)] bg-[color:var(--surface)] p-6"
                >
                  <p className="font-display text-4xl tracking-tight text-[color:var(--accent)]">
                    {item.metric}
                  </p>
                  <h3 className="mt-2 text-base font-semibold text-[color:var(--ink)]">
                    {item.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink-soft)]">
                    {item.detail}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Section>

        <Services />
        <Companies />
        <About />
        <FitCheck />

        <Section id="contact" label="Contact" className="py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="max-w-2xl">
              <p className="text-xs sm:text-sm uppercase tracking-[0.18em] text-[color:var(--muted)]">
                Founder Fit
              </p>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl tracking-tight text-[color:var(--ink)]">
                Pick your stage first.
              </h2>
              <p className="mt-5 text-lg text-[color:var(--ink-soft)]">
                Choose the track that matches your company stage and book directly from there.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {stages.map((stage) => (
                <article
                  key={stage.title}
                  className="rounded-[var(--radius-lg)] border border-[color:var(--border)] bg-[color:var(--surface)] p-7 sm:p-8"
                >
                  <h3 className="font-display text-2xl sm:text-3xl tracking-tight text-[color:var(--ink)]">
                    {stage.title}
                  </h3>
                  <p className="mt-3 text-[color:var(--ink-soft)]">{stage.fit}</p>
                  <ul className="mt-4 space-y-2">
                    {stage.focus.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-[color:var(--ink-soft)]">
                        <span
                          aria-hidden
                          className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--accent)] flex-shrink-0"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={stage.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center rounded-full bg-[color:var(--accent)] text-[color:var(--bg)] px-5 py-2.5 text-sm font-medium hover:bg-[color:var(--accent-hover)] transition-colors"
                  >
                    Book Intro Call
                  </a>
                </article>
              ))}
            </div>

            <div className="mt-10 rounded-[var(--radius-lg)] border border-[color:var(--border)] bg-[color:var(--surface)] p-2 sm:p-3">
              <iframe
                src={CAL_EMBED}
                title="Schedule a call"
                loading="lazy"
                className="w-full h-[620px] rounded-[var(--radius-md)] border-0"
              />
            </div>
          </div>
        </Section>
      </main>
      <Footer />

      <a
        href="#contact"
        className="md:hidden fixed bottom-4 left-4 right-4 z-50 inline-flex items-center justify-center rounded-full bg-[color:var(--accent)] text-[color:var(--bg)] px-5 py-3 text-sm font-medium shadow-[0_8px_24px_rgba(0,0,0,0.2)]"
      >
        Book Intro Call
      </a>
    </>
  );
}
