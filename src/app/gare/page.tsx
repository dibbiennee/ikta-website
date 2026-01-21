import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gare e Ranking',
  description: 'Calendario gare, ranking IKTA, omologazioni titoli e record mondiali. Eventi di Kick Boxing, Muay Thai e altre discipline.',
};

const upcomingEvents = [
  {
    name: 'Campionato Italiano IKTA 2025',
    date: '15-16 Marzo 2025',
    location: 'Civitavecchia (RM)',
    type: 'Campionato',
    disciplines: ['Kick Boxing', 'Muay Thai', 'Full Contact'],
    categories: 'Dilettanti e Professionisti',
  },
  {
    name: 'IKTA Fight Night Roma',
    date: '12 Aprile 2025',
    location: 'Roma',
    type: 'Fight Night',
    disciplines: ['Kick Boxing', 'Muay Thai'],
    categories: 'Professionisti',
  },
  {
    name: 'Trofeo Primavera IKTA',
    date: '10 Maggio 2025',
    location: 'Milano',
    type: 'Torneo',
    disciplines: ['Kick Boxing', 'Full Contact'],
    categories: 'Dilettanti Under 18',
  },
  {
    name: 'IKTA World Championship 2025',
    date: '20-22 Giugno 2025',
    location: 'Da definire',
    type: 'Campionato Mondiale',
    disciplines: ['Tutte le discipline IKTA'],
    categories: 'Dilettanti e Professionisti',
  },
];

const rankingCategories = [
  {
    name: 'Ranking Professionisti',
    description: 'Classifica degli atleti professionisti IKTA',
    disciplines: [
      { name: 'Kick Boxing', athletes: 45 },
      { name: 'Muay Thai', athletes: 38 },
      { name: 'Full Contact', athletes: 22 },
      { name: 'K-1 Rules', athletes: 15 },
    ],
  },
  {
    name: 'Ranking Dilettanti',
    description: 'Classifica degli atleti dilettanti IKTA',
    disciplines: [
      { name: 'Kick Boxing', athletes: 120 },
      { name: 'Muay Thai', athletes: 95 },
      { name: 'Full Contact', athletes: 68 },
      { name: 'Light Contact', athletes: 85 },
    ],
  },
];

const titles = [
  { name: 'Titolo Italiano IKTA', level: 'Nazionale', defense: '6 mesi' },
  { name: 'Titolo Intercontinentale IKTA', level: 'Internazionale', defense: '9 mesi' },
  { name: 'Titolo Mondiale IKTA', level: 'Mondiale', defense: '12 mesi' },
];

const worldRecords = [
  { category: 'Kick Boxing -70kg', athlete: 'Marco Rossi', record: 'KO più veloce', value: '12 secondi', date: '2024' },
  { category: 'Muay Thai -67kg', athlete: 'Luca Bianchi', record: 'Vittorie consecutive', value: '15 match', date: '2024' },
  { category: 'Full Contact -75kg', athlete: 'Giuseppe Verdi', record: 'Titoli mondiali', value: '3 titoli', date: '2023' },
  { category: 'K-1 Rules -65kg', athlete: 'Andrea Ferrari', record: 'Match imbattuto', value: '20 match', date: '2024' },
];

export default function GarePage() {
  return (
    <>
      {/* Hero Section */}
      <section style={{ marginTop: '100px' }} className="relative py-20 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex justify-center">
        <div className="w-full max-w-3xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Gare & Ranking
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Calendario eventi, ranking ufficiali, omologazioni titoli e record mondiali IKTA.
          </p>
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

          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.map((event) => (
              <div key={event.name} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 bg-gray-900 text-white text-xs font-medium rounded-full">
                    {event.type}
                  </span>
                  <span className="text-sm text-gray-500">{event.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{event.name}</h3>
                <p className="text-gray-600 mb-4 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  {event.location}
                </p>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {event.disciplines.map((discipline) => (
                      <span key={discipline} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        {discipline}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500">{event.categories}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/contatti" className="btn btn-primary">
              Iscrivi i Tuoi Atleti
            </Link>
          </div>
        </div>
      </section>

      {/* 2. RANKING IKTA */}
      <section id="ranking" className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#1e40af] tracking-wider uppercase">Classifiche</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2">Ranking IKTA</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Classifiche ufficiali degli atleti tesserati IKTA suddivise per categoria e disciplina.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {rankingCategories.map((category) => (
              <div key={category.name} className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                <p className="text-gray-600 mb-6">{category.description}</p>

                <div className="space-y-3">
                  {category.disciplines.map((discipline) => (
                    <div key={discipline.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium">{discipline.name}</span>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-500">{discipline.athletes} atleti</span>
                        <Link href="/contatti" className="text-sm font-medium text-[#1e40af] hover:underline">
                          Vedi Ranking
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OMOLOGAZIONI TITOLI */}
      <section id="omologazioni" className="section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#1e40af] tracking-wider uppercase">Titoli Ufficiali</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2">Omologazioni Titoli</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Titoli omologati dalla federazione IKTA con validità internazionale.
              Ogni titolo ha regole specifiche per la difesa obbligatoria.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {titles.map((title) => (
              <div key={title.name} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1e40af] to-[#3b82f6] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-2.749 0" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-1">{title.name}</h3>
                <p className="text-sm text-[#1e40af] font-medium mb-2">{title.level}</p>
                <p className="text-xs text-gray-500">Difesa obbligatoria: {title.defense}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-2xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h4 className="font-semibold mb-4">Come Richiedere un Titolo</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 bg-[#1e40af] text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">1</span>
                  Essere tesserato IKTA da almeno 1 anno
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 bg-[#1e40af] text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">2</span>
                  Avere un record minimo di 5 vittorie professionistiche
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 bg-[#1e40af] text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">3</span>
                  Presentare domanda alla federazione
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 bg-[#1e40af] text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">4</span>
                  Attendere approvazione del match titolato
                </li>
              </ul>
              <div className="mt-4">
                <Link href="/contatti" className="text-[#1e40af] font-semibold text-sm hover:underline">
                  Richiedi informazioni →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. RECORD MONDIALI */}
      <section id="record" className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#1e40af] tracking-wider uppercase">Albo d&apos;Oro</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2">Record Mondiali</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Record ufficiali IKTA nelle varie discipline e categorie di peso.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-md">
              <div className="grid grid-cols-5 gap-4 p-4 bg-gray-50 font-semibold text-sm border-b border-gray-200">
                <span>Categoria</span>
                <span>Atleta</span>
                <span>Record</span>
                <span>Valore</span>
                <span>Anno</span>
              </div>
              {worldRecords.map((record, index) => (
                <div
                  key={record.category}
                  className={`grid grid-cols-5 gap-4 p-4 text-sm ${index !== worldRecords.length - 1 ? 'border-b border-gray-100' : ''}`}
                >
                  <span className="font-medium">{record.category}</span>
                  <span className="text-gray-600">{record.athlete}</span>
                  <span className="text-gray-600">{record.record}</span>
                  <span className="text-[#1e40af] font-semibold">{record.value}</span>
                  <span className="text-gray-500">{record.date}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-sm text-gray-500 mb-4">
                I record sono verificati e certificati dalla commissione tecnica IKTA.
              </p>
              <Link href="/contatti" className="btn btn-outline">
                Segnala un Record
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-dark section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Vuoi Organizzare una Gara IKTA?
          </h2>
          <p className="text-gray-400 mb-8">
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
