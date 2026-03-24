import { Metadata } from 'next';
import Link from 'next/link';
import CorsiAccordion from '@/components/CorsiAccordion';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Formazione',
  description: 'Corsi IKTA per allenatori, istruttori e maestri di Kick Boxing, Muay Thai e MMA. Formazione certificata con rilascio qualifica federale.',
};

const alboAllenatori = [
  { name: 'Andrea Gufi', discipline: 'Kick Boxing', date: '05/05/2009' },
  { name: 'Nicola De Prisco', discipline: 'Kick Boxing', date: '05/05/2009' },
  { name: 'Enzo Abuashesh', discipline: 'K1 Style', date: '09/09/2012' },
  { name: 'Francesco Albani', discipline: 'Kick Boxing', date: '23/03/2013' },
  { name: 'Sergio Bernabei', discipline: 'Kick Boxing', date: '23/03/2013' },
  { name: 'Pamela Paluzzi', discipline: 'Kick Boxing', date: '23/03/2013' },
  { name: 'Ivan Anastasi', discipline: 'Kick Boxing', date: '23/03/2013' },
  { name: 'Gianmarco Pozzi', discipline: 'Kick Boxing', date: '23/03/2013' },
  { name: 'Umberto Castagna', discipline: 'Kick Boxing', date: '25/03/2013' },
  { name: 'Antonio La Musta', discipline: 'K1 Style', date: '20/09/2014' },
  { name: 'Stefano Sgrulloni', discipline: 'Kick Boxing', date: '08/01/2016' },
  { name: 'Manuel Mammetti', discipline: 'Pugilato', date: '28/01/2026' },
  { name: 'Massimiliano Bottoni', discipline: 'Difesa Personale', date: '28/01/2026' },
];

const alboIstruttori = [
  { name: 'Giuseppe Quadrani', discipline: 'Kick Boxing', date: '25/03/2008' },
  { name: 'Luca Valentini', discipline: 'Kick Boxing', date: '23/03/2013' },
  { name: 'Paolo Fildigrano', discipline: 'Kick Boxing', date: '23/03/2013' },
  { name: 'Roberto Petretti', discipline: 'Kick Boxing', date: '23/03/2013' },
  { name: 'Enzo Abiushesh', discipline: 'Kick Boxing', date: '23/03/2013' },
  { name: 'Victor Hrepaco', discipline: 'Kick Boxing', date: '23/03/2013' },
  { name: 'Antonio Esposito', discipline: 'Kick Boxing', date: '23/03/2013' },
  { name: 'Alessandro Melone', discipline: 'Kick Boxing', date: '14/09/2013' },
  { name: 'Francesco Malatesta', discipline: 'Muay Thai', date: '18/01/2014' },
  { name: 'Mauro Noci', discipline: 'K1 Style', date: '20/09/2014' },
  { name: 'Voltarelli Andrea', discipline: 'Kick Boxing', date: '08/11/2014' },
  { name: 'Marco Squarcialupi', discipline: 'Kick Boxing', date: '08/11/2014' },
  { name: 'Samuele Squarcialupi', discipline: 'Kick Boxing', date: '08/11/2014' },
  { name: 'Leonardo Cartocci', discipline: 'Kick Boxing', date: '08/11/2014' },
  { name: 'Alessandro Pali', discipline: 'Kick Boxing', date: '08/11/2014' },
  { name: 'Francesco Conti', discipline: 'Kick Boxing', date: '08/11/2014' },
  { name: 'Alessandro Mileto', discipline: 'Kick Boxing', date: '08/11/2014' },
  { name: 'Cristian Jakini', discipline: 'Kick Boxing', date: '08/11/2014' },
  { name: 'Paolo Gianfranceschi', discipline: 'Kick Boxing', date: '08/11/2014' },
  { name: 'Samet Vay', discipline: 'Muay Thai', date: '20/12/2014' },
  { name: 'Mino Russo', discipline: 'Kick Boxing', date: '22/03/2015' },
  { name: 'Denis Kovachev', discipline: 'Kick Boxing', date: '22/03/2015' },
  { name: 'Alessandro Ruschi', discipline: 'Kick Boxing', date: '22/03/2015' },
  { name: 'Elio Bargigli', discipline: 'Muay Thai', date: '19/06/2015' },
  { name: 'Marco Negrisolo', discipline: 'Muay Thai', date: '19/06/2015' },
  { name: 'Marco Sabbatini', discipline: 'Kick Boxing', date: '23/03/2016' },
  { name: 'Maurilio Giaffreda', discipline: 'Krav Maga', date: '23/03/2016' },
  { name: 'Maurilio Giaffreda', discipline: 'MMA', date: '23/03/2016' },
  { name: 'Maurilio Giaffreda', discipline: 'Kick Boxing', date: '23/03/2016' },
  { name: 'Emanuele Vaccarini', discipline: 'Krav Maga', date: '23/03/2016' },
  { name: 'Daniele Viti', discipline: 'Kick Boxing', date: '08/04/2016' },
  { name: 'Simone Capocchia', discipline: 'Kick Boxing', date: '08/04/2016' },
  { name: 'Silviu Cocos', discipline: 'Kick Boxing', date: '10/06/2016' },
  { name: 'Gambara Caius', discipline: 'Kick Boxing', date: '10/06/2016' },
  { name: 'Giusti Marco', discipline: 'Kick Boxing', date: '10/06/2016' },
  { name: 'Narcis Dumitri', discipline: 'Kick Boxing', date: '10/06/2016' },
  { name: 'Patrik Benati', discipline: 'Kick Boxing', date: '10/06/2016' },
  { name: 'Alessandro Casani', discipline: 'Kick Boxing', date: '15/06/2016' },
  { name: 'Paolo Gianfranceschi', discipline: 'MMA', date: '24/06/2016' },
  { name: 'Elena Petriccione', discipline: 'Kick Boxing', date: '26/11/2016' },
  { name: 'Alessio Crescentini', discipline: 'Kick Boxing', date: '26/11/2016' },
  { name: 'Aron Catalin', discipline: 'Kick Boxing', date: '26/11/2016' },
  { name: 'Rodio Pasquale', discipline: 'Kick Boxing', date: '26/11/2016' },
  { name: 'Marcello Giannini', discipline: 'Kick Boxing', date: '26/11/2016' },
  { name: 'Antonio Tullio', discipline: 'Kick Boxing', date: '26/02/2017' },
  { name: 'Bruno Pagliai', discipline: 'Kick Boxing', date: '26/02/2017' },
  { name: 'Valerio Vannucci', discipline: 'Kick Boxing', date: '26/02/2017' },
  { name: 'Adriano Marchesini', discipline: 'Kick Boxing', date: '11/02/2018' },
  { name: 'Lobrano Pasqualino', discipline: 'Kick Boxing', date: '11/02/2018' },
  { name: 'Michele Montemurro', discipline: 'Kick Boxing', date: '11/02/2018' },
  { name: 'Luigi Pia', discipline: 'Kick Boxing', date: '21/12/2020' },
  { name: 'Alessio Ferrazzoli', discipline: 'Krav Maga', date: '14/03/2021' },
  { name: 'Valentina Cionni', discipline: 'Krav Maga', date: '14/03/2021' },
  { name: 'Igor Bastioni', discipline: 'Krav Maga', date: '14/03/2021' },
  { name: 'Marco Caramelli', discipline: 'Pugilato', date: '28/01/2026' },
  { name: 'Antonio Giacomini', discipline: 'Pugilato', date: '28/01/2026' },
];

const alboMaestri = [
  { name: 'Alessio Panetta', discipline: 'Kick Boxing', date: '23/03/2013' },
  { name: 'Hermann Di Mauro', discipline: 'Kick Boxing', date: '08/09/2014' },
  { name: 'Francesco La Barbera', discipline: 'Kick Boxing', date: '22/03/2015' },
  { name: 'Giuseppe Mariotti', discipline: 'Kick Boxing', date: '03/08/2015' },
  { name: 'Umberto Lucci', discipline: 'Kick Boxing', date: '08/01/2016' },
  { name: 'Giuseppe Mariotti', discipline: 'K1 Style', date: '24/06/2016' },
  { name: 'Marcello Giannini', discipline: 'Kick Boxing', date: '28/01/2026' },
];

const alboUfficiali = [
  { name: 'Luca Iarlori', date: '11/11/2011' },
  { name: 'Enzo Abuashesh', date: '11/11/2011' },
  { name: 'Scandale Stefano', date: '11/11/2011' },
  { name: 'Giulia Cerri', date: '11/11/2011' },
  { name: 'Paolo Fildigrano', date: '04/04/2013' },
  { name: 'Ivan Anastasi', date: '04/04/2013' },
  { name: 'Alessandro Casani', date: '28/04/2013' },
  { name: 'Giuseppe Quadrani', date: '28/04/2013' },
  { name: 'Francesco Albani', date: '28/04/2013' },
  { name: 'Ivan Ascensi', date: '28/04/2013' },
  { name: 'Antonio Papale', date: '04/10/2013' },
  { name: 'Lucci Ilaria', date: '10/10/2013' },
  { name: 'Daniela Benedetti', date: '10/10/2013' },
  { name: 'Maurizio Cancedda', date: '07/12/2014' },
  { name: 'Marco Crisostomi', date: '07/12/2014' },
  { name: 'Marco Alaimo', date: '07/12/2014' },
];


export default function FormazionePage() {
  return (
    <>
      {/* 1. CORSI */}
      <section id="corsi" className="section" style={{ marginTop: '100px' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#1e40af] tracking-wider uppercase">Formazione</span>
            <h1 className="text-3xl md:text-5xl font-bold mt-2">Corsi</h1>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Cinque discipline con tre livelli di formazione progressiva per costruire la tua carriera
              nell&apos;insegnamento delle discipline da combattimento.
            </p>
          </div>

          <CorsiAccordion />
        </div>
      </section>

      {/* 2. ALBO ISTRUTTORI */}
      <section id="albo-istruttori" className="section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#1e40af] tracking-wider uppercase">Certificati</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2">Albo Istruttori</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Elenco completo degli allenatori, istruttori, maestri e ufficiali di gara certificati IKTA.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">

            {/* ALBO ALLENATORI - Assistente Istruttore */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-1 flex items-center gap-3">
                <span className="w-1.5 h-8 bg-[#1e40af] rounded-full inline-block"></span>
                Albo Allenatori
              </h3>
              <p className="text-sm text-gray-500 mb-6 ml-5">Assistente Istruttore</p>

              {/* Desktop */}
              <div className="hidden sm:block bg-white rounded-xl overflow-hidden border border-gray-200 shadow-md">
                <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 font-semibold text-sm border-b border-gray-200">
                  <span>Nome</span>
                  <span>Disciplina</span>
                  <span>Data Certificazione</span>
                </div>
                {alboAllenatori.map((item, index) => (
                  <div key={`allenatore-${index}`} className={`grid grid-cols-3 gap-4 p-4 text-sm ${index !== alboAllenatori.length - 1 ? 'border-b border-gray-100' : ''}`}>
                    <span className="font-medium">{item.name}</span>
                    <span className="text-[#1e40af]">{item.discipline}</span>
                    <span className="text-gray-600">{item.date}</span>
                  </div>
                ))}
              </div>
              {/* Mobile */}
              <div className="sm:hidden space-y-3">
                {alboAllenatori.map((item, index) => (
                  <div key={`allenatore-m-${index}`} className="bg-white rounded-xl border border-gray-200 shadow-md p-4">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-bold text-gray-900">{item.name}</span>
                      <span className="text-xs font-semibold text-[#1e40af] bg-[#1e40af]/10 px-2 py-1 rounded-full">{item.discipline}</span>
                    </div>
                    <div className="text-sm text-gray-500">{item.date}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ALBO ISTRUTTORI */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-1.5 h-8 bg-[#eab308] rounded-full inline-block"></span>
                Albo Istruttori
              </h3>

              {/* Desktop */}
              <div className="hidden sm:block bg-white rounded-xl overflow-hidden border border-gray-200 shadow-md">
                <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 font-semibold text-sm border-b border-gray-200">
                  <span>Nome</span>
                  <span>Disciplina</span>
                  <span>Data Certificazione</span>
                </div>
                {alboIstruttori.map((item, index) => (
                  <div key={`istruttore-${index}`} className={`grid grid-cols-3 gap-4 p-4 text-sm ${index !== alboIstruttori.length - 1 ? 'border-b border-gray-100' : ''}`}>
                    <span className="font-medium">{item.name}</span>
                    <span className="text-[#1e40af]">{item.discipline}</span>
                    <span className="text-gray-600">{item.date}</span>
                  </div>
                ))}
              </div>
              {/* Mobile */}
              <div className="sm:hidden space-y-3">
                {alboIstruttori.map((item, index) => (
                  <div key={`istruttore-m-${index}`} className="bg-white rounded-xl border border-gray-200 shadow-md p-4">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-bold text-gray-900">{item.name}</span>
                      <span className="text-xs font-semibold text-[#1e40af] bg-[#1e40af]/10 px-2 py-1 rounded-full">{item.discipline}</span>
                    </div>
                    <div className="text-sm text-gray-500">{item.date}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ALBO MAESTRI */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-1.5 h-8 bg-red-600 rounded-full inline-block"></span>
                Albo Maestri
              </h3>

              {/* Desktop */}
              <div className="hidden sm:block bg-white rounded-xl overflow-hidden border border-gray-200 shadow-md">
                <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 font-semibold text-sm border-b border-gray-200">
                  <span>Nome</span>
                  <span>Disciplina</span>
                  <span>Data Certificazione</span>
                </div>
                {alboMaestri.map((item, index) => (
                  <div key={`maestro-${index}`} className={`grid grid-cols-3 gap-4 p-4 text-sm ${index !== alboMaestri.length - 1 ? 'border-b border-gray-100' : ''}`}>
                    <span className="font-medium">{item.name}</span>
                    <span className="text-[#1e40af]">{item.discipline}</span>
                    <span className="text-gray-600">{item.date}</span>
                  </div>
                ))}
              </div>
              {/* Mobile */}
              <div className="sm:hidden space-y-3">
                {alboMaestri.map((item, index) => (
                  <div key={`maestro-m-${index}`} className="bg-white rounded-xl border border-gray-200 shadow-md p-4">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-bold text-gray-900">{item.name}</span>
                      <span className="text-xs font-semibold text-[#1e40af] bg-[#1e40af]/10 px-2 py-1 rounded-full">{item.discipline}</span>
                    </div>
                    <div className="text-sm text-gray-500">{item.date}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ALBO UFFICIALI DI GARA */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-1.5 h-8 bg-emerald-600 rounded-full inline-block"></span>
                Albo Ufficiali di Gara
              </h3>

              {/* Desktop */}
              <div className="hidden sm:block bg-white rounded-xl overflow-hidden border border-gray-200 shadow-md">
                <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 font-semibold text-sm border-b border-gray-200">
                  <span>Nome</span>
                  <span>Data Certificazione</span>
                </div>
                {alboUfficiali.map((item, index) => (
                  <div key={`ufficiale-${index}`} className={`grid grid-cols-2 gap-4 p-4 text-sm ${index !== alboUfficiali.length - 1 ? 'border-b border-gray-100' : ''}`}>
                    <span className="font-medium">{item.name}</span>
                    <span className="text-gray-600">{item.date}</span>
                  </div>
                ))}
              </div>
              {/* Mobile */}
              <div className="sm:hidden space-y-3">
                {alboUfficiali.map((item, index) => (
                  <div key={`ufficiale-m-${index}`} className="bg-white rounded-xl border border-gray-200 shadow-md p-4">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-gray-900">{item.name}</span>
                      <span className="text-sm text-gray-500">{item.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CALENDARIO CORSI */}
      <section id="calendario" className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#1e40af] tracking-wider uppercase">Prossimi Appuntamenti</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2">Calendario Corsi</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Prossimi corsi in programma. Contattaci per iscriverti o per richiedere
              l&apos;organizzazione di un corso nella tua zona.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-md p-8 text-center">
              <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
              </svg>
              <p className="text-xl font-semibold text-gray-700 mb-2">Date in arrivo prossimamente</p>
              <p className="text-gray-500">Contattaci per maggiori informazioni sui prossimi corsi.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-dark section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Vuoi Organizzare un Corso nella Tua Zona?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Contattaci per richiedere l&apos;organizzazione di un corso IKTA
            presso la tua palestra o nella tua città.
          </p>
          <Link href="/contatti" className="btn bg-white text-gray-900 hover:bg-gray-100 px-8">
            Contattaci
          </Link>
        </div>
      </section>
      <WhatsAppButton
        phone="+393341989193"
        message="Salve, volevo chiedere delle informazioni"
      />
    </>
  );
}
