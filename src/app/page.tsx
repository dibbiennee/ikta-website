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

const disciplines = [
  {
    name: 'Kick Boxing',
    description: 'Combinazione di pugni e calci con tecniche di boxe occidentale e arti marziali orientali.',
  },
  {
    name: 'Muay Thai',
    description: 'Arte marziale thailandese che utilizza pugni, calci, gomiti e ginocchia.',
  },
  {
    name: 'MMA',
    description: 'Arti marziali miste che combinano striking e grappling in una disciplina completa.',
  },
  {
    name: 'Krav Maga',
    description: 'Sistema di difesa personale israeliano, pratico ed efficace.',
  },
  {
    name: 'Boxe',
    description: 'Pugilato classico con tecniche di pugno, difesa e movimento.',
  },
  {
    name: 'Brazilian Jiu Jitsu',
    description: 'Arte marziale brasiliana focalizzata su lotta a terra e sottomissioni.',
  },
];

const stats = [
  { value: '22', label: 'Titoli Mondiali' },
  { value: '50+', label: 'Palestre Affiliate' },
  { value: '1000+', label: 'Atleti Tesserati' },
  { value: '10+', label: 'Discipline' },
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

        {/* Content Container */}
        <div
          className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-16"
          style={{ paddingTop: 'clamp(5rem, 12vh, 12rem)' }}
        >
          <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center gap-4 md:gap-8">
            {/* Logo with white background */}
            <div className="bg-white rounded-2xl shadow-2xl p-5 sm:p-8">
              <Image
                src="/logo-ikta.png"
                alt="IKTA Logo"
                width={200}
                height={200}
                className="w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52 object-contain"
              />
            </div>
            <h1 className="text-base sm:text-lg md:text-2xl text-gray-200 font-medium -mt-1 md:-mt-4 drop-shadow-md px-2">
              Intercontinental Kick Thai Boxing Association
            </h1>

            <p className="text-sm sm:text-base md:text-xl text-gray-200 max-w-2xl leading-relaxed text-center drop-shadow-md px-4">
              Kick Boxing, Thai Boxe e altre discipline.
              Formazione certificata, gare ufficiali, ranking e titoli omologati.
            </p>

            {/* CTA Buttons - Stacked on mobile, row on desktop */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 px-4 sm:px-0">
              <Link href="/discipline" className="btn bg-white text-gray-900 hover:bg-gray-100 px-5 py-3 text-sm sm:text-base shadow-lg justify-center">
                Le Nostre Discipline
              </Link>
              <Link href="/chi-siamo" className="btn border-2 border-white text-white hover:bg-white hover:text-gray-900 px-5 py-3 text-sm sm:text-base backdrop-blur-sm justify-center">
                La Nostra Storia
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-900 text-white" style={{ padding: '2.5rem 0' }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disciplines Section */}
      <section id="discipline" className="section">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 text-center">Le Nostre Discipline</h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl text-center px-2">
              Dall&apos;arte tradizionale allo sport moderno, copriamo tutte le principali discipline
              di combattimento con regolamenti e percorsi formativi dedicati.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {disciplines.map((discipline) => (
                  <div
                    key={discipline.name}
                    className="card group cursor-pointer hover:shadow-xl transition-all duration-300 border-l-4 border-l-transparent hover:border-l-[#eab308] active:border-l-[#eab308] bg-white p-4 sm:p-6"
                  >
                    <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 group-hover:text-[#1e40af] transition-colors">
                      {discipline.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 sm:line-clamp-none">{discipline.description}</p>
                  </div>
                ))}
              </div>

              <div className="text-center" style={{ marginTop: '3rem' }}>
                <Link href="/discipline" className="btn bg-[#eab308] text-black hover:bg-[#ca8a04] w-full sm:w-auto justify-center">
                  Tutte le Discipline
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

      {/* CTA Section */}
      <section id="affiliazione" className="section relative overflow-hidden py-12 sm:py-16 md:py-20" style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)' }}>
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 flex">
          <div className="flex-1 bg-[#0a0a0a]"></div>
          <div className="flex-1 bg-[#1e40af]"></div>
          <div className="flex-1 bg-[#eab308]"></div>
        </div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="container mx-auto px-4 flex flex-col items-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 text-center text-white">
            Vuoi Affiliare la Tua Palestra?
          </h2>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mb-6 sm:mb-8 text-center px-2">
            Entra a far parte della famiglia IKTA Italia. Accedi a formazione certificata,
            gare ufficiali, supporto tecnico e visibilita nazionale.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full sm:w-auto px-4 sm:px-0">
            <Link href="/affiliazione" className="btn bg-[#eab308] text-black hover:bg-[#ca8a04] px-8 py-3 sm:py-4 w-full sm:w-auto justify-center">
              Richiedi Affiliazione
            </Link>
            <Link href="/contatti" className="btn border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3 sm:py-4 w-full sm:w-auto justify-center">
              Contattaci
            </Link>
          </div>
        </div>
      </section>

      {/* Sedi IKTA GYM */}
      <section id="sedi" className="section bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-8 sm:mb-16">
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-[#1e40af]/10 text-[#1e40af] text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4">
              Le Nostre Sedi
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 text-center">IKTA GYM</h2>
            <p className="text-sm sm:text-base text-gray-600 text-center max-w-2xl px-2">
              Palestre ufficiali dove allenarti con istruttori certificati IKTA
            </p>
          </div>

          <div className="grid gap-6 lg:gap-12">
            <SedeCard
              name="IKTA GYM Santa Marinella"
              color="#1e40af"
              colorHover="#1e3a8a"
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
              color="#1e40af"
              colorHover="#1e3a8a"
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
              color="#1e40af"
              colorHover="#1e3a8a"
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

          <div className="text-center px-4 sm:px-0" style={{ marginTop: '4rem' }}>
            <Link href="/contatti" className="btn bg-[#1e40af] text-white hover:bg-[#1e3a8a] px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto justify-center">
              Contattaci
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
