import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sapervedere.com.br"),
  title: {
    default: "Saper Vedere — The operator founders bring in to scale without chaos",
    template: "%s · Saper Vedere",
  },
  description:
    "Fractional COO and operating partner for B2B SaaS founders. GTM systems, operational infrastructure, and fundraising readiness, pre-seed to Series A. Ex-Co-founder & COO at Lightmeter (YC W22).",
  keywords: [
    "Fractional COO",
    "Operating Partner",
    "Startup Operator",
    "Venture Builder",
    "B2B SaaS",
    "GTM",
    "Fundraising",
    "Cesar Werlich",
    "Saper Vedere",
    "Y Combinator",
    "Lightmeter",
  ],
  authors: [{ name: "Cesar Werlich" }],
  creator: "Cesar Werlich",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sapervedere.com.br",
    siteName: "Saper Vedere",
    title: "Saper Vedere — The operator founders bring in to scale without chaos",
    description:
      "Fractional COO and operating partner for B2B SaaS founders. GTM, operations, fundraising — pre-seed to Series A.",
    images: [
      {
        url: "/logo-with-headline.png",
        width: 1200,
        height: 630,
        alt: "Saper Vedere — Cesar Werlich",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saper Vedere — The operator founders bring in to scale without chaos",
    description:
      "Fractional COO for B2B SaaS founders. Pre-seed to Series A. Ex-Lightmeter (YC W22).",
    images: ["/logo-with-headline.png"],
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: "/icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f3eb" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0c0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W2JM8S86');
          `}
        </Script>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W2JM8S86"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
