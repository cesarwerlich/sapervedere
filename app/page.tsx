import NavPt from './components/pt/NavPt';
import HeroPt from './components/pt/HeroPt';
import FitCheckPt from './components/pt/FitCheckPt';
import ServicesPt from './components/pt/ServicesPt';
import CompaniesPt from './components/pt/CompaniesPt';
import AboutPt from './components/pt/AboutPt';
import ContactPt from './components/pt/ContactPt';
import FooterPt from './components/pt/FooterPt';

export default function Home() {
  return (
    <div className="theme-v2-blue theme-6-logo-blue-headings">
      <NavPt />
      <main className="flex-1">
        <HeroPt />
        <FitCheckPt />
        <ServicesPt />
        <CompaniesPt />
        <AboutPt />
        <ContactPt />
      </main>
      <FooterPt />
    </div>
  );
}
