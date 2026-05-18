import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import HeroCarousel from '@/components/HeroCarousel';
import SedeCard from '@/components/SedeCard';

export const metadata: Metadata = {
  title: 'IKTA Italia | Federazione Kick Boxing, Muay Thai, MMA e Krav Maga',
  description: 'IKTA - Intercontinental Kick Thai Boxing Association. Federazione internazionale di sport da combattimento: Kick Boxing, Muay Thai, MMA, Krav Maga, BJJ e Boxe. 50+ palestre affiliate, formazione certificata e gare ufficiali.',
  keywords: ['IKTA', 'kick boxing', 'muay thai', 'MMA', 'krav maga', 'BJJ', 'arti marziali', 'federazione', 'Italia'],
  openGraph: {
    title: 'IKTA Italia | Federazione Kick Boxing, Muay Thai, MMA e Krav Maga',
    description: 'Federazione internazionale di sport da combattimento: Kick Boxing, Muay Thai, MMA, Krav Maga, BJJ e Boxe. 50+ palestre affiliate, formazione certificata e gare ufficiali.',
    url: 'https://iktaworld.com',
    siteName: 'IKTA World',
    type: 'website',
    locale: 'it_IT',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IKTA Italia | Federazione Kick Boxing, Muay Thai, MMA',
    description: 'Federazione internazionale di sport da combattimento. 50+ palestre affiliate, formazione certificata, gare ufficiali e titoli omologati.',
  },
};

const BRAND_BLUE = '#1e40af';
const BRAND_BLUE_HOVER = '#1e3a8a';

const disciplines = [
  {
    name: 'Kick Boxing',
    description: 'Pugni e calci. Tecnica di boxe occidentale unita ad arti marziali orientali.',
  },
  {
    name: 'Muay Thai',
    description: 'L\'arte delle otto armi: pugni, calci, gomiti e ginocchia.',
  },
  {
    name: 'MMA',
    description: 'Striking e grappling in una sola disciplina. Versatilita totale.',
  },
  {
    name: 'Krav Maga',
    description: 'Difesa personale israeliana. Pragmatica, diretta, efficace.',
  },
  {
    name: 'Boxe',
    description: 'Pugilato classico. Solo pugni, footwork e timing.',
  },
  {
    name: 'Brazilian Jiu Jitsu',
    description: 'Lotta a terra, leve e sottomissioni. Tecnica sopra la forza.',
  },
];

const stats = [
  { value: '22', label: 'Titoli Mondiali' },
  { value: '50+', label: 'Palestre Affiliate' },
  { value: '1000+', label: 'Atleti Tesserati' },
  { value: '8', label: 'Discipline' },
];

const sediJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "name": "IKTA GYM Santa Marinella",
    "parentOrganization": { "@type": "SportsOrganization", "name": "IKTA Italia" },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Via 4 Novembre 25",
      "addressLocality": "Santa Marinella",
      "addressRegion": "RM",
      "addressCountry": "IT",
    },
    "telephone": "+393485913895",
    "sport": ["Kick Boxing", "Muay Thai", "MMA", "Krav Maga"],
  },
  {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "name": "IKTA GYM Civitavecchia",
    "parentOrganization": { "@type": "SportsOrganization", "name": "IKTA Italia" },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Via Ticino 15",
      "addressLocality": "Civitavecchia",
      "addressRegion": "RM",
      "addressCountry": "IT",
    },
    "telephone": "+393384012397",
    "sport": ["Kick Boxing", "Muay Thai", "MMA", "Krav Maga"],
  },
  {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "name": "IKTA GYM Tolfa",
    "parentOrganization": { "@type": "SportsOrganization", "name": "IKTA Italia" },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Via G. Amendola 1A",
      "addressLocality": "Tolfa",
      "addressRegion": "RM",
      "addressCountry": "IT",
    },
    "telephone": "+393384012397",
    "sport": ["Kick Boxing", "Muay Thai", "MMA", "Krav Maga"],
  },
];

export default function Home() {
  return (
    <>
      {/* JSON-LD Schema per le sedi */}
      {sediJsonLd.map((sede, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(sede) }}
        />
      ))}

      {/* Hero Section */}
      <section className="relative min-h-screen text-white overflow-hidden">
        {/* Background Carousel */}
        <HeroCarousel />

        {/* Dark gradient overlay per leggibilita testo sopra immagine */}
        <div className="absolute inset-0 z-[5] bg-gradient-to-b from-black/30 via-black/40 to-black/70 pointer-events-none" />

        {/* Content Container */}
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-16 pt-[clamp(5rem,12vh,12rem)]">
          <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center gap-5 md:gap-7">
            <span className="eyebrow !text-white/80">Federazione internazionale</span>

            <h1 className="!text-white drop-shadow-2xl">
              Intercontinental Kick Thai Boxing Association
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-100 max-w-2xl leading-relaxed text-center drop-shadow-md px-4">
              Kick Boxing, Thai Boxe e altre discipline. Formazione certificata, gare ufficiali, ranking e titoli omologati.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 px-4 sm:px-0">
              <Link href="/discipline" className="btn btn-primary">
                Le Nostre Discipline
              </Link>
              <Link
                href="/chi-siamo"
                className="btn !bg-white/10 !text-white !border-2 !border-white/70 hover:!bg-white hover:!text-gray-900 backdrop-blur-md"
              >
                La Nostra Storia
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-900 text-white py-10 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-400 mt-1 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disciplines Section */}
      <section id="discipline" className="section">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-8 sm:mb-12">
            <span className="eyebrow mb-3">Le discipline</span>
            <h2 className="text-center">Otto modi di combattere</h2>
            <p className="text-base text-gray-600 max-w-2xl text-center px-2 mt-3">
              Dall&apos;arte tradizionale allo sport moderno: regolamenti ufficiali e percorsi formativi dedicati per ogni disciplina.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {disciplines.map((discipline) => (
                  <div
                    key={discipline.name}
                    className="card group cursor-pointer border-l-4 border-l-transparent hover:border-l-[#eab308] active:border-l-[#eab308] p-4 sm:p-6"
                  >
                    <h3 className="!text-lg sm:!text-xl mb-1 sm:mb-2 group-hover:text-[#1e40af] transition-colors">
                      {discipline.name}
                    </h3>
                    <p className="text-sm text-gray-600">{discipline.description}</p>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <Link href="/discipline" className="btn btn-primary w-full sm:w-auto justify-center">
                  Esplora tutte le discipline
                </Link>
              </div>
            </div>

            <div className="flex justify-center order-1 lg:order-2">
              <Image
                src="/iktagym.jpg"
                alt="IKTA Gym - Le Nostre Discipline"
                width={500}
                height={600}
                className="rounded-xl shadow-lg object-cover w-full h-48 sm:h-64 lg:h-auto max-h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sedi IKTA GYM */}
      <section id="sedi" className="section bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-8 sm:mb-16">
            <span className="eyebrow mb-3">Le nostre sedi</span>
            <h2 className="text-center">IKTA GYM</h2>
            <p className="text-base text-gray-600 text-center max-w-2xl px-2 mt-3">
              Palestre ufficiali dove allenarti con istruttori certificati IKTA.
            </p>
          </div>

          <div className="grid gap-6 lg:gap-12">
            <SedeCard
              name="IKTA GYM Santa Marinella"
              color={BRAND_BLUE}
              colorHover={BRAND_BLUE_HOVER}
              logo="/sedi/santamarinella/iktasantalogo.webp"
              address="Via 4 Novembre n 25, Santa Marinella"
              phone="+39 348 5913895"
              mapsUrl="https://maps.google.com/?q=Via+4+Novembre+25+Santa+Marinella"
              gallery={[
                '/sedi/santamarinella/iktafotosanta1.webp',
                '/sedi/santamarinella/iktafotosanta2.webp',
                '/sedi/santamarinella/iktafotosanta3.webp',
                '/sedi/santamarinella/iktafotosanta4.webp',
                '/sedi/santamarinella/iktafotosanta5.webp',
              ]}
            />

            <SedeCard
              name="IKTA GYM Civitavecchia"
              color={BRAND_BLUE}
              colorHover={BRAND_BLUE_HOVER}
              logo="/sedi/civitavecchia/iktacvlogo.webp"
              address="Via Ticino n 15, Civitavecchia"
              phone="+39 338 4012397"
              mapsUrl="https://maps.google.com/?q=Via+Ticino+15+Civitavecchia"
              gallery={[
                '/sedi/civitavecchia/iktacv1.webp',
                '/sedi/civitavecchia/iktacv2.webp',
                '/sedi/civitavecchia/iktacv4.webp',
                '/sedi/civitavecchia/iktacv5.webp',
                '/sedi/civitavecchia/iktacv6.webp',
                '/sedi/civitavecchia/iktacv7.webp',
                '/sedi/civitavecchia/iktacv8.webp',
                '/sedi/civitavecchia/iktacv9.webp',
                '/sedi/civitavecchia/iktacv10.webp',
                '/sedi/civitavecchia/iktacv11.webp',
              ]}
            />

            <SedeCard
              name="IKTA GYM Tolfa"
              color={BRAND_BLUE}
              colorHover={BRAND_BLUE_HOVER}
              logo="/sedi/tolfa/iktatolfalogo.webp"
              address="Via G. Amendola 1A, Tolfa"
              phone="+39 338 4012397"
              mapsUrl="https://maps.google.com/?q=Via+Amendola+1A+Tolfa"
              gallery={[
                '/sedi/tolfa/iktatolfa.webp',
                '/sedi/tolfa/iktatolfa1.webp',
                '/sedi/tolfa/iktatolfa2.webp',
                '/sedi/tolfa/iktatolfa4.webp',
                '/sedi/tolfa/iktatolfa5.webp',
              ]}
            />
          </div>

          <div className="text-center px-4 sm:px-0 mt-16">
            <Link href="/contatti" className="btn btn-secondary">
              Contattaci
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
