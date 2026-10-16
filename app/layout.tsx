import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono, Fraunces } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  axes: ['opsz', 'SOFT'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sapervedere.com.br'),
  title: {
    default:
      'Saper Vedere — COO Fracionado & Operating Partner para Startups B2B SaaS',
    template: '%s · Saper Vedere',
  },
  description:
    'COO Fracionado e Operating Partner para fundadores e líderes B2B. Máquina de GTM & Outbound, infraestrutura operacional e preparação para captação.',
  keywords: [
    'COO Fracionado',
    'Operating Partner',
    'Startup Operator',
    'Venture Builder',
    'B2B SaaS',
    'GTM B2B',
    'Outbound B2B',
    'Captação de Recursos',
    'Cesar Werlich',
    'Saper Vedere',
  ],
  authors: [{ name: 'Cesar Werlich' }],
  creator: 'Cesar Werlich',
  alternates: {
    canonical: 'https://sapervedere.com.br',
    languages: {
      'pt-BR': 'https://sapervedere.com.br',
      en: 'https://sapervedere.com.br/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://sapervedere.com.br',
    siteName: 'Saper Vedere',
    title:
      'Saper Vedere — COO Fracionado & Operating Partner para Startups B2B SaaS',
    description:
      'COO Fracionado e Operating Partner para fundadores e líderes B2B. GTM, operações e preparação para captação.',
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
      'Saper Vedere — COO Fracionado & Operating Partner para Startups B2B SaaS',
    description:
      'COO Fracionado para fundadores e líderes B2B. GTM, processos e governança de escala.',
    images: ['/logo-with-headline.png'],
  },
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
      { url: '/favicon.ico', sizes: '32x32' },
    ],
    apple: '/icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7f3eb' },
    { media: '(prefers-color-scheme: dark)', color: '#0d0c0a' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full`}
    >
      <body className="theme-v2-blue theme-6-logo-blue-headings min-h-full flex flex-col">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QTT2N0E134"
          strategy="beforeInteractive"
        />
        <Script id="google-analytics" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QTT2N0E134');
          `}
        </Script>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID || '1900617237271607'}');
            fbq('track', 'PageView');
          `}
        </Script>
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Saper Vedere',
              url: 'https://sapervedere.com.br',
              logo: 'https://sapervedere.com.br/logo-with-headline.png',
              description:
                'COO Fracionado e Operating Partner para fundadores e líderes B2B. Máquina de GTM & Outbound, infraestrutura operacional e preparação para captação.',
              founder: {
                '@type': 'Person',
                name: 'Cesar Werlich',
                jobTitle: 'Fractional COO & Operating Partner',
                url: 'https://www.linkedin.com/in/cesarwerlich',
              },
              areaServed: 'BR',
              sameAs: [
                'https://www.linkedin.com/in/cesarwerlich',
                'https://github.com/cesarwerlich',
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
