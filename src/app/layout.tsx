import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  metadataBase: new URL("https://iktaworld.com"),
  title: {
    default: "IKTA Italia | Federazione Kick Boxing, Muay Thai, MMA e Krav Maga",
    template: "%s | IKTA",
  },
  description:
    "IKTA - Intercontinental Kick Thai Boxing Association. Federazione internazionale di sport da combattimento: Kick Boxing, Muay Thai, MMA, Krav Maga, BJJ e Boxe. 50+ palestre affiliate in Italia, formazione certificata e gare ufficiali.",
  keywords: [
    "IKTA",
    "federazione kick boxing",
    "thai boxe",
    "muay thai federazione",
    "sport da combattimento",
    "arti marziali",
    "kick boxing",
    "formazione istruttori",
    "MMA",
    "krav maga",
    "BJJ",
    "federazione muay thai",
    "federazione MMA Italia",
  ],
  authors: [{ name: "IKTA" }],
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://iktaworld.com",
    siteName: "IKTA World",
    title: "IKTA Italia | Federazione Kick Boxing, Muay Thai, MMA e Krav Maga",
    description:
      "Federazione internazionale di sport da combattimento: Kick Boxing, Muay Thai, MMA, Krav Maga, BJJ e Boxe. 50+ palestre affiliate, formazione certificata e gare ufficiali.",
  },
  twitter: {
    card: "summary_large_image",
    title: "IKTA Italia | Federazione Kick Boxing, Muay Thai, MMA",
    description:
      "Federazione internazionale di sport da combattimento. 50+ palestre affiliate, formazione certificata, gare ufficiali e titoli omologati.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        {/* Fontshare: Clash Display (titoli) + Satoshi (body) */}
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&f[]=clash-display@500,600,700&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsOrganization",
              "name": "IKTA - Intercontinental Kick Thai Boxing Association",
              "alternateName": "IKTA Italia",
              "url": "https://iktaworld.com",
              "description": "Federazione internazionale di sport da combattimento: Kick Boxing, Muay Thai, MMA, Krav Maga, BJJ, Boxe, Kung Fu Sanda e Karate.",
              "foundingDate": "2012",
              "sport": ["Kick Boxing", "Muay Thai", "MMA", "Krav Maga", "Brazilian Jiu Jitsu", "Boxe", "Kung Fu Sanda", "Karate"],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Via Ticino 15",
                "addressLocality": "Civitavecchia",
                "addressRegion": "RM",
                "addressCountry": "IT",
              },
              "telephone": "+393384012397",
              "sameAs": [
                "https://www.instagram.com/iktaitalia",
                "https://it.wikipedia.org/wiki/I.K.T.A._Intercontinental_Kick_Thai_Boxing_Association_Italia",
              ],
              "memberOf": {
                "@type": "SportsOrganization",
                "name": "IKTA World",
              },
              "logo": "https://iktaworld.com/logo-ikta.png",
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {/* Skip Navigation Link - Accessibilita WCAG */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-[#1e40af] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-medium focus:shadow-lg"
        >
          Salta al contenuto principale
        </a>
        <ScrollToTop />
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
