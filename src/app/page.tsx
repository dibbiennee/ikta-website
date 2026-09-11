import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import HeroCarousel from '@/components/HeroCarousel';
import SedeCard from '@/components/SedeCard';
import { sedi, sediJsonLd } from '@/data/sedi';
import { disciplines, stats } from '@/data/home';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
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

export default function Home() {
  return (
    <>
      {/* JSON-LD Schema per le sedi */}
      {sediJsonLd().map((sede, i) => (
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

        {/* Gradient overlay navy (brand) per leggibilita testo, senza spegnere le foto */}
        <div className="absolute inset-0 z-[5] bg-gradient-to-b from-[#0B2340]/45 via-[#0B2340]/55 to-[#0B2340]/85 pointer-events-none" />

        {/* Content Container */}
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-16 pt-[clamp(5rem,12vh,12rem)]">
          <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center gap-5 md:gap-7">
            <span className="eyebrow !text-[#eab308]">Federazione Internazionale</span>

            <h1 className="!text-white drop-shadow-2xl max-w-2xl !tracking-normal !font-semibold !text-[1.75rem] sm:!text-4xl md:!text-[2.75rem] !leading-[1.15]">
              Kick Boxing, Muay Thai, MMA, Krav Maga e altre discipline.
              <span className="block mt-3 sm:mt-4 !font-normal text-gray-200 !text-lg sm:!text-xl md:!text-2xl drop-shadow-md">
                Gare ufficiali e titoli.
              </span>
            </h1>

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

      {/* Percorsi per pubblico */}
      <section className="section section-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-8 sm:mb-12">
            <span className="eyebrow mb-3">Da dove vuoi iniziare</span>
            <h2 className="text-center">Il tuo percorso in IKTA</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="card flex flex-col text-center">
              <h3 className="!text-xl mb-2">Gestisci una palestra?</h3>
              <p className="text-sm text-gray-600 flex-1">
                Entra nella rete IKTA: formazione certificata, gare ufficiali, assicurazione atleti e visibilità.
              </p>
              <Link href="/affiliazione" className="btn btn-primary mt-4 w-full">
                Affilia la tua palestra
              </Link>
            </div>
            <div className="card flex flex-col text-center">
              <h3 className="!text-xl mb-2">Vuoi allenarti?</h3>
              <p className="text-sm text-gray-600 flex-1">
                Trova la palestra IKTA più vicina e allenati con istruttori certificati.
              </p>
              <Link href="/palestre" className="btn btn-secondary mt-4 w-full">
                Trova la sede
              </Link>
            </div>
            <div className="card flex flex-col text-center">
              <h3 className="!text-xl mb-2">Vuoi insegnare?</h3>
              <p className="text-sm text-gray-600 flex-1">
                Diventa istruttore, allenatore o maestro con i corsi di formazione IKTA.
              </p>
              <Link href="/formazione" className="btn btn-secondary mt-4 w-full">
                Scopri i corsi
              </Link>
            </div>
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
            {sedi.map((s) => (
              <SedeCard
                key={s.name}
                name={s.name}
                color={BRAND_BLUE}
                colorHover={BRAND_BLUE_HOVER}
                logo={s.logo}
                address={s.address}
                phone={s.phone}
                mapsUrl={s.mapsUrl}
                gallery={s.gallery}
              />
            ))}
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
