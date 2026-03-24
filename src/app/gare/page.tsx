import { Metadata } from 'next';
import Link from 'next/link';
import EventGallery from '@/components/EventGallery';
import CalendarioEventi from '@/components/CalendarioEventi';
import RankingItalia from '@/components/RankingItalia';

export const metadata: Metadata = {
  title: 'Gare',
  description: 'Calendario gare IKTA, ranking ufficiale e omologazione titoli. Competizioni di Kick Boxing, Muay Thai, MMA e altre discipline da combattimento.',
};

const upcomingEvents = [
  {
    name: 'GOLDEN WARRIOR',
    date: 'Domenica 8 Marzo 2026 — ore 09:00',
    location: 'Pala Sport Santa Marinella',
    disciplines: ['Light', 'KO'],
  },
  {
    name: 'THE BEST OF THE BEST',
    date: 'Venerdì 19 e Sabato 20 Giugno 2026 — ore 20:00',
    location: 'Arena del Parco dell\'Oliveto, Via Adige 1, Civitavecchia',
    disciplines: ['Kick Boxing', 'Free Boxing', 'MMA'],
  },
];

export default function GarePage() {
  return (
    <>
      {/* GALLERIA EVENTI */}
      <section className="section" style={{ marginTop: '100px' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#1e40af] tracking-wider uppercase">Galleria</span>
            <h1 className="text-3xl md:text-5xl font-bold mt-2">Eventi Passati e Futuri</h1>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Le locandine dei nostri eventi di Kick Boxing, Muay Thai e altre discipline da combattimento.
            </p>
          </div>

          <EventGallery />
        </div>
      </section>

      {/* 1. CALENDARIO GARE */}
      <section id="calendario" className="section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#1e40af] tracking-wider uppercase">Eventi</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2">Calendario Gare</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Calendario delle competizioni IKTA in programma. Contattaci per iscrivere i tuoi atleti.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {upcomingEvents.map((event) => (
              <div key={event.name} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-gray-100" style={{ padding: '2rem' }}>
                <h3 className="text-xl sm:text-2xl font-bold mb-3">{event.name}</h3>
                <p className="text-[#1e40af] font-medium mb-4 flex items-center gap-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                  </svg>
                  {event.date}
                </p>
                <p className="text-gray-600 mb-5 flex items-start gap-2">
                  <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  {event.location}
                </p>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {event.disciplines.map((discipline) => (
                      <span key={discipline} className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium">
                        {discipline}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CALENDARIO EVENTI ANNUALI */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#1e40af] tracking-wider uppercase">Programmazione</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2">Calendario Eventi Annuali</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              La programmazione completa degli eventi IKTA durante l&apos;anno.
            </p>
          </div>
          <CalendarioEventi />
        </div>
      </section>

      {/* 2. RANKING IKTA ITALIA */}
      <section id="ranking" className="section bg-gray-50">
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
