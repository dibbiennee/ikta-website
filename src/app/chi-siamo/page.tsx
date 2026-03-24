import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Chi Siamo',
  description: 'IKTA - Intercontinental Kick Thai Boxing Association. Scopri la nostra storia, missione e il nostro organigramma.',
};

export default function ChiSiamoPage() {
  return (
    <>
      {/* 1. LA FEDERAZIONE */}
      <section id="federazione" className="section" style={{ marginTop: '100px' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#1e40af] tracking-wider uppercase">Chi Siamo</span>
            <h1 className="text-3xl md:text-5xl font-bold mt-2">La Federazione</h1>
          </div>

          {/* La Federazione degli Sport da Combattimento */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-20">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-center lg:text-left">
                La Federazione degli Sport da Combattimento
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed text-center lg:text-left">
                IKTA riunisce sotto lo stesso tetto Kick Boxing, Thai Boxe e altre discipline affini. Offriamo un quadro tecnico e organizzativo serio per gli sport da combattimento e arti marziali: organigramma definito, percorsi ufficiali per allenatori, istruttori e maestri, programmi cinture, regolamenti, ranking e omologazione dei titoli.
              </p>
            </div>
            <div className="relative order-1 lg:order-2">
              <Image
                src="/iktafoto1.jpg"
                alt="IKTA - Sport da Combattimento"
                width={600}
                height={400}
                className="rounded-xl shadow-lg object-cover w-full"
              />
            </div>
          </div>

          {/* La Nostra Missione */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20" style={{ marginTop: '60px' }}>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">La Nostra Missione</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  IKTA nasce con l&apos;obiettivo di offrire un quadro tecnico e organizzativo
                  serio per gli sport da combattimento e arti marziali. Riuniamo sotto lo stesso tetto
                  Kick Boxing, Thai Boxe e altre discipline affini.
                </p>
                <p>La nostra missione è quella di:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Promuovere gli sport da combattimento con professionalità e sicurezza</li>
                  <li>Formare istruttori, allenatori e maestri qualificati</li>
                  <li>Organizzare gare e eventi di alto livello</li>
                  <li>Supportare le palestre affiliate nella crescita</li>
                  <li>Valorizzare gli atleti attraverso ranking e titoli ufficiali</li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/iktafoto2.jpg"
                alt="IKTA - La Nostra Missione"
                width={600}
                height={600}
                className="rounded-xl shadow-lg object-cover w-full"
              />
            </div>
          </div>

          {/* I Nostri Valori */}
          <div className="text-center" style={{ marginTop: '80px', marginBottom: '48px' }}>
            <h3 className="text-3xl md:text-5xl font-bold">I Nostri Valori</h3>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <Image
                src="/ikta123.jpg"
                alt="I Nostri Valori IKTA"
                width={500}
                height={400}
                className="rounded-xl shadow-lg object-cover w-full"
              />
            </div>
            <div className="flex flex-col gap-6">
              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex items-start gap-5">
                <div className="w-10 h-10 bg-[#1e40af] text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1 text-gray-900">Sicurezza</h4>
                  <p className="text-gray-600 text-sm">
                    La sicurezza degli atleti è la nostra priorità. Regolamenti chiari e formazione adeguata.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex items-start gap-5">
                <div className="w-10 h-10 bg-[#1e40af] text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1 text-gray-900">Professionalità</h4>
                  <p className="text-gray-600 text-sm">
                    Standard elevati in ogni aspetto: dalla formazione alle gare, dall&apos;organizzazione alla comunicazione.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex items-start gap-5">
                <div className="w-10 h-10 bg-[#1e40af] text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1 text-gray-900">Comunità</h4>
                  <p className="text-gray-600 text-sm">
                    Una famiglia di atleti, istruttori e appassionati uniti dalla passione per gli sport da combattimento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

