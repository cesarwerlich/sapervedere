import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Companies from "../components/Companies";
import About from "../components/About";
import FitCheck from "../components/FitCheck";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Theme4Page() {
  return (
    <div className="theme-4-headings-blue">
      <style>{`
        .theme-4-headings-blue h1,
        .theme-4-headings-blue h2,
        .theme-4-headings-blue h3 {
          color: #7faed6 !important;
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
