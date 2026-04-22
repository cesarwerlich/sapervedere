import type { CSSProperties } from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Companies from "../components/Companies";
import About from "../components/About";
import FitCheck from "../components/FitCheck";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const theme3Vars: CSSProperties = {
  ["--bg" as string]: "#F7F8FA",
  ["--surface" as string]: "#EEF1F4",
  ["--surface-2" as string]: "#E5EAF0",
  ["--ink" as string]: "#1A232D",
  ["--ink-soft" as string]: "#33414D",
  ["--muted" as string]: "#63707C",
  ["--border" as string]: "rgba(26, 35, 45, 0.12)",
  ["--border-strong" as string]: "rgba(26, 35, 45, 0.22)",
  ["--bg-blur" as string]: "rgba(247, 248, 250, 0.82)",
  ["--selection-bg" as string]: "#1A5C88",
  ["--selection-fg" as string]: "#F7F8FA",
};

export default function Theme3Page() {
  return (
    <div style={theme3Vars}>
      <Nav />
      <main className="flex-1">
        <Hero />
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
