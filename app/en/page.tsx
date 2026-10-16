import type { Metadata } from 'next';
import Nav from '../components/Nav';
import HeroConcise from '../components/HeroConcise';
import FitCheckConcise from '../components/FitCheckConcise';
import ServicesConcise from '../components/ServicesConcise';
import CompaniesConcise from '../components/CompaniesConcise';
import AboutConcise from '../components/AboutConcise';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title:
    'Saper Vedere — Fractional COO & Operating Partner for B2B SaaS Founders',
  description:
    'Fractional COO and operating partner for B2B SaaS founders. GTM systems, operational infrastructure, and fundraising readiness, pre-seed to Series A.',
  alternates: {
    canonical: 'https://sapervedere.com.br/en',
    languages: {
      'pt-BR': 'https://sapervedere.com.br',
      en: 'https://sapervedere.com.br/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sapervedere.com.br/en',
    siteName: 'Saper Vedere',
    title:
      'Saper Vedere — Fractional COO & Operating Partner for B2B SaaS Founders',
    description:
      'Fractional COO and operating partner for B2B SaaS founders. GTM systems, operational infrastructure, and fundraising readiness, pre-seed to Series A.',
    images: [
      {
        url: '/logo-with-headline.png',
        width: 1200,
        height: 630,
        alt: 'Saper Vedere — Cesar Werlich',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Saper Vedere — Fractional COO & Operating Partner for B2B SaaS Founders',
    description:
      'Fractional COO for B2B SaaS founders. Pre-seed to Series A. Systems, metrics, and operational scale.',
    images: ['/logo-with-headline.png'],
  },
};

export default function EnglishHome() {
  return (
    <div className="theme-v2-blue theme-6-logo-blue-headings">
      <Nav />
      <main className="flex-1">
        <HeroConcise />
        <FitCheckConcise />
        <ServicesConcise />
        <CompaniesConcise />
        <AboutConcise />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
