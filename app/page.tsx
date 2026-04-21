import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Companies from "./components/Companies";
import About from "./components/About";
import FitCheck from "./components/FitCheck";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
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
    </>
  );
}
