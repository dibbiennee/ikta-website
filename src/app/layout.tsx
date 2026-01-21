import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "IKTA | Federazione Sport da Combattimento",
    template: "%s | IKTA",
  },
  description:
    "IKTA - Intercontinental Kick Thai Boxing Association. Federazione di Kick Boxing, Thai Boxe, Combat System Evolution e altre discipline da combattimento. Formazione, gare, ranking e affiliazioni.",
  keywords: [
    "IKTA",
    "federazione kick boxing",
    "thai boxe",
    "muay thai federazione",
    "sport da combattimento",
    "arti marziali",
    "kick boxing",
    "formazione istruttori",
  ],
  authors: [{ name: "IKTA" }],
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://ikta.it",
    siteName: "IKTA",
    title: "IKTA | Federazione Sport da Combattimento",
    description:
      "Federazione di Kick Boxing, Thai Boxe, Combat System Evolution e altre discipline da combattimento.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
