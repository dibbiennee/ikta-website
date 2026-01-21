import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Formazione',
  description: 'Corsi IKTA per allenatori, istruttori e maestri. Percorsi formativi certificati per le discipline di combattimento.',
};

const courses = [
  {
    title: 'Corso Allenatori',
    level: '1° Livello',
    duration: '2 giorni (16 ore)',
    requirements: [
      'Maggiore età',
      'Pratica sportiva di almeno 2 anni',
      'Tessera IKTA in corso di validità',
    ],
    contents: [
      'Fondamenti di anatomia e fisiologia',
      'Metodologia dell\'allenamento',
      'Tecniche base della disciplina scelta',
      'Sicurezza e primo soccorso',
      'Aspetti psicologici dell\'allenamento',
    ],
    certification: 'Diploma di Allenatore IKTA - Valido per assistere un istruttore',
    price: '250',
  },
  {
    title: 'Corso Istruttori',
    level: '2° Livello',
    duration: '3 giorni (24 ore)',
    requirements: [
      'Diploma di Allenatore IKTA da almeno 1 anno',
      'Esperienza pratica documentata',
      'Superamento esame di ammissione',
    ],
    contents: [
      'Metodologia avanzata',
      'Programmazione annuale',
      'Tecniche avanzate della disciplina',
      'Gestione del gruppo',
      'Preparazione atleti alle gare',
      'Regolamenti federali',
    ],
    certification: 'Diploma di Istruttore IKTA - Abilitazione all\'insegnamento autonomo',
    price: '400',
  },
  {
    title: 'Corso Maestri',
    level: '3° Livello',
    duration: '5 giorni (40 ore)',
    requirements: [
      'Diploma di Istruttore IKTA da almeno 3 anni',
      'Esperienza comprovata nell\'insegnamento',
      'Partecipazione a eventi federali',
      'Colloquio con il comitato tecnico',
    ],
    contents: [
      'Didattica avanzata',
      'Formazione formatori',
      'Gestione di una scuola',
      'Preparazione di atleti agonisti',
      'Organizzazione eventi',
      'Etica e filosofia delle arti marziali',
    ],
    certification: 'Diploma di Maestro IKTA - Abilitazione alla formazione di istruttori',
    price: '800',
  },
];

const beltPrograms = [
  { discipline: 'Kick Boxing', belts: ['Bianca', 'Gialla', 'Arancione', 'Verde', 'Blu', 'Marrone', 'Nera'] },
  { discipline: 'Muay Thai', belts: ['Praijat Bianco', 'Giallo', 'Arancione', 'Verde', 'Blu', 'Marrone', 'Nero'] },
  { discipline: 'Brazilian Jiu Jitsu', belts: ['Bianca', 'Blu', 'Viola', 'Marrone', 'Nera'] },
  { discipline: 'Karate', belts: ['Bianca (9° Kyu)', 'Gialla (8° Kyu)', 'Arancione (7° Kyu)', 'Verde (6° Kyu)', 'Blu (5° Kyu)', 'Marrone (4°-1° Kyu)', 'Nera (Dan)'] },
];

const instructors = [
  { name: 'Marco Rossi', qualification: 'Maestro', discipline: 'Kick Boxing', city: 'Roma' },
  { name: 'Laura Bianchi', qualification: 'Istruttore', discipline: 'Muay Thai', city: 'Milano' },
  { name: 'Giuseppe Verdi', qualification: 'Maestro', discipline: 'BJJ', city: 'Napoli' },
  { name: 'Anna Ferrari', qualification: 'Istruttore', discipline: 'Krav Maga', city: 'Torino' },
  { name: 'Luca Conti', qualification: 'Maestro', discipline: 'Karate', city: 'Bologna' },
  { name: 'Sara Ricci', qualification: 'Istruttore', discipline: 'Boxe', city: 'Firenze' },
];

const calendar = [
  { date: '15-16 Febbraio 2025', course: 'Corso Allenatori', location: 'Civitavecchia (RM)', discipline: 'Kick Boxing' },
  { date: '8-9-10 Marzo 2025', course: 'Corso Istruttori', location: 'Roma', discipline: 'Muay Thai' },
  { date: '5-6 Aprile 2025', course: 'Corso Allenatori', location: 'Milano', discipline: 'Full Contact' },
  { date: '10-14 Maggio 2025', course: 'Corso Maestri', location: 'Civitavecchia (RM)', discipline: 'Multi-disciplina' },
];

export default function FormazionePage() {
  return (
    <>
      {/* Hero Section */}
      <section style={{ marginTop: '100px' }} className="relative py-20 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex justify-center">
        <div className="w-full max-w-3xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Formazione IKTA
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Percorsi formativi certificati per diventare allenatore, istruttore o maestro
            nelle discipline di combattimento IKTA.
          </p>
        </div>
      </section>

      {/* 1. CORSI */}
      <section id="corsi" className="section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#1e40af] tracking-wider uppercase">Formazione</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2">Corsi</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Tre livelli di formazione progressiva per costruire la tua carriera
              nell&apos;insegnamento delle discipline da combattimento.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div key={course.title} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex flex-col">
                <div className="mb-4">
                  <span className="text-xs text-[#1e40af] uppercase tracking-wider font-semibold">{course.level}</span>
                  <h3 className="text-2xl font-bold">{course.title}</h3>
                  <p className="text-gray-600">{course.duration}</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-2">Requisiti:</h4>
                  <ul className="space-y-1">
                    {course.requirements.map((req) => (
                      <li key={req} className="text-sm text-gray-600 flex items-start gap-2">
                        <svg className="w-4 h-4 text-[#1e40af] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4 flex-1">
                  <h4 className="font-semibold text-sm mb-2">Contenuti:</h4>
                  <ul className="space-y-1">
                    {course.contents.map((content) => (
                      <li key={content} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                        {content}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600 mb-4">
                    <strong>Certificazione:</strong> {course.certification}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">&euro;{course.price}</span>
                    <Link href="/contatti" className="btn btn-primary text-sm">
                      Info e Iscrizione
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. PROGRAMMI CINTURE */}
      <section id="cinture" className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#1e40af] tracking-wider uppercase">Progressione</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2">Programmi Cinture</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Sistemi di gradi e cinture per ogni disciplina IKTA.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {beltPrograms.map((program) => (
              <div key={program.discipline} className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <h3 className="text-xl font-bold mb-4">{program.discipline}</h3>
                <div className="flex flex-wrap gap-2">
                  {program.belts.map((belt, index) => (
                    <span
                      key={belt}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {index + 1}. {belt}
                    </span>
                  ))}
                </div>
                <Link href="/contatti" className="text-[#1e40af] font-semibold text-sm hover:underline mt-4 inline-block">
                  Richiedi programma completo →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ALBO ISTRUTTORI */}
      <section id="albo-istruttori" className="section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#1e40af] tracking-wider uppercase">Certificati</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2">Albo Istruttori</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Elenco degli istruttori e maestri certificati IKTA.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-md">
              <div className="grid grid-cols-4 gap-4 p-4 bg-gray-50 font-semibold text-sm border-b border-gray-200">
                <span>Nome</span>
                <span>Qualifica</span>
                <span>Disciplina</span>
                <span>Città</span>
              </div>
              {instructors.map((instructor, index) => (
                <div
                  key={instructor.name}
                  className={`grid grid-cols-4 gap-4 p-4 text-sm ${index !== instructors.length - 1 ? 'border-b border-gray-100' : ''}`}
                >
                  <span className="font-medium">{instructor.name}</span>
                  <span className="text-[#1e40af]">{instructor.qualification}</span>
                  <span className="text-gray-600">{instructor.discipline}</span>
                  <span className="text-gray-600">{instructor.city}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/contatti" className="btn btn-primary">
                Cerca Istruttore
              </Link>
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
            <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-md">
              {calendar.map((event, index) => (
                <div key={event.date} className={`p-4 md:p-6 flex flex-col md:flex-row md:items-center gap-4 ${index !== calendar.length - 1 ? 'border-b border-gray-200' : ''}`}>
                  <div className="md:w-40 flex-shrink-0">
                    <span className="font-semibold">{event.date}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{event.course}</h3>
                    <p className="text-sm text-gray-600">{event.discipline}</p>
                  </div>
                  <div className="text-sm text-gray-500">
                    {event.location}
                  </div>
                  <Link href="/contatti" className="btn btn-outline text-sm py-2">
                    Iscriviti
                  </Link>
                </div>
              ))}
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
          <p className="text-gray-400 mb-8">
            Contattaci per richiedere l&apos;organizzazione di un corso IKTA
            presso la tua palestra o nella tua città.
          </p>
          <Link href="/contatti" className="btn bg-white text-gray-900 hover:bg-gray-100 px-8">
            Contattaci
          </Link>
        </div>
      </section>
    </>
  );
}
