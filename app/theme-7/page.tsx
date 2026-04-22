import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import Nav from "../components/Nav";
import Services from "../components/Services";
import Companies from "../components/Companies";
import About from "../components/About";
import FitCheck from "../components/FitCheck";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Section from "../components/Section";

const theme7Vars: CSSProperties = {
  ["--bg" as string]: "#0b1117",
  ["--surface" as string]: "#121c26",
  ["--surface-2" as string]: "#182532",
  ["--ink" as string]: "#e9f1f7",
  ["--ink-soft" as string]: "#c4d2de",
  ["--muted" as string]: "#8aa0b3",
  ["--accent" as string]: "#1a5c88",
  ["--accent-hover" as string]: "#2470a3",
  ["--olive" as string]: "#194162",
  ["--accent-subtle" as string]: "rgba(26, 92, 136, 0.18)",
  ["--accent-ring" as string]: "rgba(26, 92, 136, 0.36)",
  ["--olive-subtle" as string]: "rgba(25, 65, 98, 0.24)",
  ["--border" as string]: "rgba(233, 241, 247, 0.12)",
  ["--border-strong" as string]: "rgba(233, 241, 247, 0.22)",
  ["--bg-blur" as string]: "rgba(11, 17, 23, 0.8)",
  ["--selection-bg" as string]: "#1a5c88",
  ["--selection-fg" as string]: "#e9f1f7",
};

const outcomes = [
  {
    metric: "35%+",
    label: "Pipeline Lift",
    detail: "From founder-led sales chaos to repeatable outbound and qualification motion.",
    image: "/theme7-hero.jpg",
  },
  {
    metric: "2x",
    label: "Execution Clarity",
    detail: "Weekly operating rhythm with explicit ownership and cross-functional accountability.",
    image: "/logo-with-headline.png",
  },
  {
    metric: "90+",
    label: "Team Experience",
    detail: "Operating leadership across scale-up complexity and restructuring moments.",
    image: "/LogoSaperVedere.png",
  },
];

export default function Theme7Page() {
  return (
    <div style={theme7Vars}>
      <Nav />
      <main className="flex-1">
        <section id="top" className="relative min-h-[78vh] overflow-hidden border-b border-[color:var(--border)]">
          <Image
            src="/theme7-hero.jpg"
            alt="Abstract eye sketch background"
            fill
            priority
            className="object-cover opacity-22"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_10%_10%,rgba(26,92,136,0.35)_0%,rgba(11,17,23,0.9)_58%,rgba(11,17,23,1)_100%)]" />
          <div className="relative mx-auto max-w-6xl px-5 sm:px-8 pt-36 pb-24 sm:pt-44 sm:pb-28">
            <p className="text-xs sm:text-sm uppercase tracking-[0.18em] text-[color:var(--muted)]">
              Dark Variant · Image-led
            </p>
            <h1 className="mt-4 font-display text-5xl sm:text-7xl leading-[1.02] tracking-tight max-w-4xl text-[color:var(--ink)]">
              The operator founders bring in when momentum is high and complexity is higher.
            </h1>
            <p className="mt-6 text-lg sm:text-xl max-w-2xl text-[color:var(--ink-soft)] leading-relaxed">
              Same positioning, darker presentation: premium contrast, stronger visual mood, and
              proof-first storytelling.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#contact"
                className="inline-flex items-center rounded-full bg-[color:var(--accent)] text-[color:var(--ink)] px-6 py-3 text-base font-medium hover:bg-[color:var(--accent-hover)] transition-colors"
              >
                Book a 30-min call
              </Link>
              <Link
                href="#outcomes"
                className="inline-flex items-center rounded-full border border-[color:var(--border-strong)] text-[color:var(--ink)] px-6 py-3 text-base font-medium hover:bg-[color:var(--surface)] transition-colors"
              >
                See outcomes
              </Link>
            </div>
          </div>
        </section>

        <Section id="outcomes" label="Outcomes" className="py-24 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="max-w-2xl">
              <p className="text-xs sm:text-sm uppercase tracking-[0.18em] text-[color:var(--muted)]">
                Selected Outcomes
              </p>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl tracking-tight text-[color:var(--ink)]">
                Evidence with texture.
              </h2>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
              {outcomes.map((item) => (
                <article
                  key={item.label}
                  className="overflow-hidden rounded-[var(--radius-lg)] border border-[color:var(--border)] bg-[color:var(--surface)]"
                >
                  <div className="relative h-44 w-full">
                    <Image src={item.image} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(11,17,23,0.75),rgba(11,17,23,0.2))]" />
                  </div>
                  <div className="p-6">
                    <p className="font-display text-4xl tracking-tight text-[color:var(--accent)]">
                      {item.metric}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-[color:var(--ink)]">{item.label}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink-soft)]">
                      {item.detail}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Section>

        <Services />
        <Companies />
        <About />
        <FitCheck />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
