import { Metadata } from 'next';
import Link from 'next/link';
import CorsiAccordion from '@/components/CorsiAccordion';
import WhatsAppButton from '@/components/WhatsAppButton';
import { alboAllenatori, alboIstruttori, alboMaestri, alboUfficiali } from '@/data/albo';
import { courses } from '@/data/corsi';

export const metadata: Metadata = {
  alternates: { canonical: '/formazione' },
  title: 'Formazione',
  description: 'Corsi IKTA per allenatori, istruttori e maestri di Kick Boxing, Muay Thai e MMA. Formazione certificata con rilascio qualifica federale.',
};

export default function FormazionePage() {
  const coursesJsonLd = {
    '@context': 'https://schema.org',
    '@graph': courses.flatMap((c) =>
      c.levels.map((lvl) => ({
        '@type': 'Course',
        name: `Corso Istruttore ${c.discipline} - ${lvl.name}`,
        description: lvl.description,
        provider: {
          '@type': 'SportsOrganization',
          name: 'IKTA - Intercontinental Kick Thai Boxing Association',
          url: 'https://iktaworld.com',
        },
        url: 'https://iktaworld.com/formazione',
        hasCourseInstance: {
          '@type': 'CourseInstance',
          courseMode: 'Online',
        },
        offers: {
          '@type': 'Offer',
          price: lvl.price,
          priceCurrency: 'EUR',
          availability: 'https://schema.org/InStock',
          url: 'https://iktaworld.com/formazione',
        },
      }))
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesJsonLd) }}
      />

      {/* 1. CORSI */}
      <section id="corsi" className="section pt-28 md:pt-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="eyebrow">Formazione certificata</span>
            <h1 className="mt-2">Diventa istruttore IKTA</h1>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mt-4">
              Cinque discipline, tre livelli (Allenatore, Istruttore, Maestro), formato FAD online disponibile 24/7. Diploma riconosciuto e iscrizione all&apos;albo federale.
            </p>
          </div>

          <CorsiAccordion />
        </div>
      </section>

      {/* 2. ALBO ISTRUTTORI */}
      <section id="albo-istruttori" className="section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="eyebrow">Certificati</span>
            <h2 className="mt-2">Albo Istruttori</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mt-4">
              Elenco completo degli allenatori, istruttori, maestri e ufficiali di gara certificati IKTA. Tutti i diplomi sono nominativi e verificabili.
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

      {/* 4. COME FUNZIONA */}
      <section id="calendario" className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="eyebrow">Come funziona</span>
            <h2 className="mt-2">Tre livelli, formato FAD online</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mt-4">
              Il percorso e in didattica a distanza: studi quando vuoi, accesso 24/7 al materiale. Le sessioni di esame sono periodiche, contattaci per il calendario aggiornato.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl border border-gray-200 shadow-md p-8 text-center">
              <svg className="w-16 h-16 text-[#1e40af] mx-auto mb-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
              </svg>
              <p className="text-xl font-semibold text-gray-900 mb-2">Pronto a iscriverti?</p>
              <p className="text-gray-600 mb-6">Scrivici su WhatsApp: ti diciamo subito quando parte la prossima sessione e cosa serve per partecipare.</p>
              <Link href="/contatti" className="btn btn-primary">
                Richiedi il calendario
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-dark section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6">
            Hai una palestra? Organizza un corso IKTA in sede
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-base md:text-lg">
            Se gestisci una palestra o una scuola di arti marziali, possiamo portare un corso direttamente da te. Modulo presenziale o ibrido FAD + workshop pratico.
          </p>
          <Link href="/contatti" className="btn btn-primary">
            Parliamo del tuo corso
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
