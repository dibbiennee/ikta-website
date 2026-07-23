import { Metadata } from 'next';
import Link from 'next/link';
import GalleriaGare from '@/components/GalleriaGare';
import EventGallery from '@/components/EventGallery';
import RankingItalia from '@/components/RankingItalia';

export const metadata: Metadata = {
  title: 'Gare',
  description: 'Foto e locandine delle gare IKTA, prossimi eventi e ranking ufficiale. Competizioni di Kick Boxing, Free Boxing, Muay Thai e MMA con titoli in palio.',
};

// Dati strutturati per i motori di ricerca (eventi futuri)
const eventsJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SportsEvent',
      name: 'Trofeo Roma - Kick Boxing e Free Boxing',
      startDate: '2026-10-25T17:00:00+02:00',
      sport: 'Kick Boxing',
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      organizer: { '@type': 'SportsOrganization', name: 'IKTA', url: 'https://iktaworld.com' },
      location: {
        '@type': 'Place',
        name: 'Palatorrino',
        address: { '@type': 'PostalAddress', addressLocality: 'Roma', addressCountry: 'IT' },
      },
    },
    {
      '@type': 'SportsEvent',
      name: 'Victory IV - Kick Boxing, Free Boxing e MMA',
      startDate: '2026-11-28T17:00:00+01:00',
      sport: 'Kick Boxing',
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      organizer: { '@type': 'SportsOrganization', name: 'IKTA', url: 'https://iktaworld.com' },
      location: {
        '@type': 'Place',
        name: 'Jungle Palace',
        address: { '@type': 'PostalAddress', streetAddress: 'Via Maratona 5', addressLocality: 'Civitavecchia', addressCountry: 'IT' },
      },
    },
    {
      '@type': 'SportsEvent',
      name: 'Golden Warrior - Free Boxing, Kick Boxing e MMA',
      startDate: '2027-03-07T10:00:00+01:00',
      sport: 'Kick Boxing',
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      organizer: { '@type': 'SportsOrganization', name: 'IKTA', url: 'https://iktaworld.com' },
      location: {
        '@type': 'Place',
        name: 'Palestra Giosuè Carducci',
        address: { '@type': 'PostalAddress', streetAddress: 'Piazzale della Gioventù 1', addressLocality: 'Santa Marinella', addressCountry: 'IT' },
      },
    },
  ],
};

export default function GarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventsJsonLd) }}
      />

      {/* GALLERIA FOTO ATLETI / GARE */}
      <section className="section pt-28 md:pt-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="eyebrow">Galleria</span>
            <h1 className="mt-2">Eventi e gare</h1>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              I nostri atleti in gara: vittorie, premiazioni e titoli conquistati sul ring negli eventi IKTA.
            </p>
          </div>

          <GalleriaGare />
        </div>
      </section>

      {/* LOCANDINE EVENTI (prossimi + passati) */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#1e40af] tracking-wider uppercase">Locandine</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2">Eventi in programma e passati</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Le locandine ufficiali dei prossimi appuntamenti IKTA e degli eventi già svolti.
            </p>
          </div>

          <EventGallery />
        </div>
      </section>

      {/* RANKING IKTA ITALIA */}
      <section id="ranking" className="section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#1e40af] tracking-wider uppercase">Classifiche</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2">Ranking IKTA Italia</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Classifiche ufficiali degli atleti dilettanti e professionisti tesserati IKTA Italia, suddivise per disciplina e categoria di peso.
            </p>
          </div>

          <RankingItalia />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-dark section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Vuoi Organizzare una Gara IKTA?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Contattaci per richiedere l&apos;organizzazione di un evento IKTA
            nella tua città o per iscrivere i tuoi atleti alle prossime gare.
          </p>
          <Link href="/contatti" className="btn bg-white text-gray-900 hover:bg-gray-100 px-8">
            Contattaci
          </Link>
        </div>
      </section>
    </>
  );
}
