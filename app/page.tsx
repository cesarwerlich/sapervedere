import Nav from "./components/Nav";
import HeroConcise from "./components/HeroConcise";
import ServicesConcise from "./components/ServicesConcise";
import CompaniesConcise from "./components/CompaniesConcise";
import AboutConcise from "./components/AboutConcise";
import FitCheckConcise from "./components/FitCheckConcise";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="theme-v2-blue theme-6-logo-blue-headings">
      <Nav />
      <main className="flex-1">
        <HeroConcise />
        <ServicesConcise />
        <CompaniesConcise />
        <AboutConcise />
        <FitCheckConcise />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
