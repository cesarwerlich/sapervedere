import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Companies from "../components/Companies";
import About from "../components/About";
import FitCheck from "../components/FitCheck";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Theme6Page() {
  return (
    <div className="theme-6-logo-blue-headings">
      <style>{`
        .theme-6-logo-blue-headings h1 {
          color: var(--muted) !important;
        }

        .theme-6-logo-blue-headings h2,
        .theme-6-logo-blue-headings h3 {
          color: #194162 !important;
        }
      `}</style>
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
