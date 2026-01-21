import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Palestre IKTA',
  description: 'Trova le palestre IKTA Gym affiliate. Sedi ufficiali per Kick Boxing, Muay Thai e altre discipline.',
};

const gyms = [
  {
    name: 'IKTA Gym Civitavecchia',
    city: 'Civitavecchia',
    region: 'Lazio',
    address: 'Via Ticino 15, 00053 Civitavecchia (RM)',
    phone: '+39 338 4012397',
    email: 'massimo.brizi@tiscali.it',
    disciplines: ['Kick Boxing', 'Muay Thai', 'Full Contact', 'CSE'],
    isHeadquarters: true,
  },
  {
    name: 'IKTA Gym Roma Nord',
    city: 'Roma',
    region: 'Lazio',
    address: 'Via Roma 100, 00100 Roma (RM)',
    phone: '+39 06 1234567',
    email: 'rmanord@iktaitalia.it',
    disciplines: ['Kick Boxing', 'Muay Thai', 'Boxe'],
    isHeadquarters: false,
  },
  {
    name: 'IKTA Gym Milano',
    city: 'Milano',
    region: 'Lombardia',
    address: 'Via Milano 50, 20100 Milano (MI)',
    phone: '+39 02 1234567',
    email: 'milano@iktaitalia.it',
    disciplines: ['Kick Boxing', 'Muay Thai', 'BJJ'],
    isHeadquarters: false,
  },
  {
    name: 'IKTA Gym Torino',
    city: 'Torino',
    region: 'Piemonte',
    address: 'Corso Torino 25, 10100 Torino (TO)',
    phone: '+39 011 1234567',
    email: 'torino@iktaitalia.it',
    disciplines: ['Kick Boxing', 'Full Contact', 'Boxe'],
    isHeadquarters: false,
  },
  {
    name: 'IKTA Gym Napoli',
    city: 'Napoli',
    region: 'Campania',
    address: 'Via Napoli 75, 80100 Napoli (NA)',
    phone: '+39 081 1234567',
    email: 'napoli@iktaitalia.it',
    disciplines: ['Muay Thai', 'Kick Boxing', 'CSE'],
    isHeadquarters: false,
  },
  {
    name: 'IKTA Gym Firenze',
    city: 'Firenze',
    region: 'Toscana',
    address: 'Via Firenze 30, 50100 Firenze (FI)',
    phone: '+39 055 1234567',
    email: 'firenze@iktaitalia.it',
    disciplines: ['Kick Boxing', 'Muay Thai', 'Karate'],
    isHeadquarters: false,
  },
];

const regions = ['Tutte', 'Lazio', 'Lombardia', 'Piemonte', 'Campania', 'Toscana'];

export default function PalestrePage() {
  return (
    <>
      {/* Hero Section */}
      <section style={{ marginTop: '100px' }} className="relative py-20 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex justify-center">
        <div className="w-full max-w-3xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Palestre IKTA Gym
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Trova la palestra IKTA piu vicina a te. Sedi ufficiali affiliate
            dove allenarti seguendo il metodo IKTA con istruttori certificati.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-gray-200 sticky top-[calc(1rem+4px+4rem)] md:top-[calc(1rem+4px+5rem)] bg-white z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            <span className="text-sm text-gray-500 mr-2 self-center">Regione:</span>
            {regions.map((region) => (
              <button
                key={region}
                className="px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors first:bg-gray-900 first:text-white"
              >
                {region}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gyms List */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gyms.map((gym) => (
              <div key={gym.name} className={`card ${gym.isHeadquarters ? 'ring-2 ring-gray-900' : ''}`}>
                {gym.isHeadquarters && (
                  <span className="inline-block px-3 py-1 bg-gray-900 text-white text-xs font-medium rounded-full mb-3">
                    Sede Nazionale
                  </span>
                )}
                <h3 className="text-xl font-bold mb-1">{gym.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{gym.region}</p>

                <div className="space-y-3 text-sm text-gray-600 mb-4">
                  <p className="flex items-start gap-2">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    {gym.address}
                  </p>
                  <p className="flex items-center gap-2">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                    {gym.phone}
                  </p>
                  <p className="flex items-center gap-2">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    {gym.email}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500 mb-2">Discipline:</p>
                  <div className="flex flex-wrap gap-1">
                    {gym.disciplines.map((discipline) => (
                      <span key={discipline} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
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

      {/* Map Placeholder */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Mappa delle Sedi</h2>
          <div className="bg-gray-200 rounded-xl aspect-[16/9] max-w-4xl mx-auto flex items-center justify-center">
            <p className="text-gray-500">Mappa interattiva delle sedi IKTA Gym</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-dark section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Vuoi Aprire una Sede IKTA Gym?
          </h2>
          <p className="text-gray-400 mb-8">
            Affilia la tua palestra a IKTA e diventa parte della nostra rete.
            Supporto tecnico, formazione e visibilità.
          </p>
          <Link href="/affiliazione" className="btn bg-white text-gray-900 hover:bg-gray-100 px-8">
            Richiedi Affiliazione
          </Link>
        </div>
      </section>
    </>
  );
}
