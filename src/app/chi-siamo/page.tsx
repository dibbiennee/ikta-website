import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Chi Siamo',
  description: 'IKTA - Intercontinental Kick Thai Boxing Association. Scopri la nostra storia, missione e il nostro organigramma.',
};

const organigramma = [
  {
    name: 'Massimo Brizi',
    role: 'Presidente',
    description: 'Campione mondiale con 22 titoli confermati. Maestro di arti marziali e fondatore di IKTA.',
    sector: 'Direzione',
  },
  {
    name: 'Fabrizio Falconetti',
    role: 'Vice Presidente',
    description: 'Responsabile Settore Sport da Ring.',
    sector: 'Direzione',
  },
  {
    name: 'Luca Iarlori',
    role: 'Segretario',
    description: 'Gestione amministrativa e organizzativa della federazione.',
    sector: 'Direzione',
  },
  {
    name: 'Ivan Ascensi',
    role: 'Arbitri Internazionali',
    description: 'Coordinamento e formazione degli arbitri a livello internazionale.',
    sector: 'Tecnico',
  },
  {
    name: 'Massimo Mendosa',
    role: 'Ufficiali di Gara',
    description: 'Gestione degli ufficiali di gara e supervisione eventi.',
    sector: 'Tecnico',
  },
  {
    name: 'Demetrio Logiudice',
    role: 'Ufficio Stampa',
    description: 'Comunicazione, media relations e promozione eventi.',
    sector: 'Comunicazione',
  },
  {
    name: 'Florina Sitariu',
    role: 'Sport Sociale',
    description: 'Progetti di inclusione e sport per tutti.',
    sector: 'Sociale',
  },
];

const news = [
  {
    title: 'Campionato Nazionale IKTA 2024',
    date: '15 Marzo 2024',
    excerpt: 'Grande successo per il campionato nazionale con oltre 200 atleti partecipanti.',
    image: '/news1.jpg',
  },
  {
    title: 'Nuovo Corso Istruttori',
    date: '1 Febbraio 2024',
    excerpt: 'Aperte le iscrizioni per il corso istruttori di primo livello.',
    image: '/news2.jpg',
  },
  {
    title: 'IKTA World Championship',
    date: '10 Gennaio 2024',
    excerpt: 'Annunciata la data del campionato mondiale IKTA.',
    image: '/news3.jpg',
  },
];

export default function ChiSiamoPage() {
  return (
    <>
      {/* Hero Section */}
      <section style={{ marginTop: '100px' }} className="relative py-24 md:py-36 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center">
            Chi Siamo
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center">
            IKTA - Intercontinental Kick Thai Boxing Association.
          </p>
          <p className="text-lg md:text-xl text-gray-400 mt-4 text-center">
            La federazione degli sport da combattimento.
          </p>
        </div>
      </section>

      {/* 1. LA FEDERAZIONE */}
      <section id="federazione" className="section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#1e40af] tracking-wider uppercase">Chi Siamo</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2">La Federazione</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-bold mb-6">La Nostra Missione</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  IKTA nasce con l&apos;obiettivo di offrire un quadro tecnico e organizzativo
                  serio per gli sport da combattimento. Riuniamo sotto lo stesso tetto
                  Kick Boxing, Thai Boxe, Combat System Evolution e altre discipline affini.
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

      {/* 2. ORGANIGRAMMA */}
      <section id="organigramma" className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#1e40af] tracking-wider uppercase">Il Team</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2">Organigramma</h2>
            <p className="text-gray-600 mt-4">
              Il team dirigenziale e tecnico di IKTA.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {organigramma.map((member) => (
              <div key={member.name} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1e40af] to-[#3b82f6] rounded-full flex-shrink-0 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs text-[#1e40af] uppercase tracking-wider font-semibold">{member.sector}</span>
                    <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                    <p className="text-sm font-medium text-gray-700 mb-2">{member.role}</p>
                    <p className="text-sm text-gray-600">{member.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. IL PRESIDENTE */}
      <section id="presidente" className="section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#1e40af] tracking-wider uppercase">Leadership</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2">Il Presidente</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="relative">
              <Image
                src="/presidente.jpg"
                alt="Massimo Brizi - Presidente IKTA"
                width={500}
                height={600}
                className="rounded-xl shadow-lg object-cover w-full"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Massimo Brizi</h3>
              <p className="text-[#1e40af] font-semibold mb-6">Presidente e Fondatore IKTA</p>
              <div className="space-y-4 text-gray-600">
                <p>
                  Campione mondiale con 22 titoli confermati nelle discipline da combattimento.
                  Maestro di arti marziali con oltre 30 anni di esperienza nel settore.
                </p>
                <p>
                  Ha dedicato la sua vita alla promozione degli sport da combattimento,
                  formando centinaia di atleti e istruttori in tutta Italia e nel mondo.
                </p>
                <p>
                  Sotto la sua guida, IKTA è diventata una delle federazioni di riferimento
                  per Kick Boxing, Muay Thai e discipline affini.
                </p>
              </div>
              <div className="mt-8 flex gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#1e40af]">22</p>
                  <p className="text-sm text-gray-600">Titoli Mondiali</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#1e40af]">30+</p>
                  <p className="text-sm text-gray-600">Anni di Esperienza</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#1e40af]">500+</p>
                  <p className="text-sm text-gray-600">Atleti Formati</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. IKTA WORLD */}
      <section id="ikta-world" className="section bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-16">
            <span className="text-sm font-semibold text-[#eab308] tracking-wider uppercase">Internazionale</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2">IKTA World</h2>
            <p className="text-gray-400 mt-4">
              La nostra presenza nel mondo degli sport da combattimento a livello internazionale.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl">
              <div>
                <p className="text-5xl font-bold text-[#eab308] mb-2">15+</p>
                <p className="text-gray-400">Paesi nel Mondo</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-[#eab308] mb-2">50+</p>
                <p className="text-gray-400">Palestre Affiliate</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-[#eab308] mb-2">5000+</p>
                <p className="text-gray-400">Atleti Tesserati</p>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <p className="text-gray-400">
              IKTA è riconosciuta a livello internazionale come federazione di riferimento
              per gli sport da combattimento. Organizziamo campionati mondiali, europei e
              nazionali, garantendo standard elevati di sicurezza e professionalità.
            </p>
          </div>
        </div>
      </section>

      {/* 5. REGOLAMENTI */}
      <section id="regolamenti" className="section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#1e40af] tracking-wider uppercase">Documentazione</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2">Regolamenti</h2>
            <p className="text-gray-600 mt-4">
              Tutti i regolamenti ufficiali IKTA per atleti, istruttori e palestre affiliate.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-[#1e40af]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#1e40af]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Regolamento Gare</h3>
              <p className="text-gray-600 text-sm mb-4">Norme per competizioni e tornei ufficiali IKTA.</p>
              <Link href="#" className="text-[#1e40af] font-semibold text-sm hover:underline">Scarica PDF →</Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-[#1e40af]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#1e40af]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Regolamento Tecnico</h3>
              <p className="text-gray-600 text-sm mb-4">Specifiche tecniche per ogni disciplina.</p>
              <Link href="#" className="text-[#1e40af] font-semibold text-sm hover:underline">Scarica PDF →</Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-[#1e40af]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#1e40af]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Statuto IKTA</h3>
              <p className="text-gray-600 text-sm mb-4">Statuto ufficiale della federazione.</p>
              <Link href="#" className="text-[#1e40af] font-semibold text-sm hover:underline">Scarica PDF →</Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-[#1e40af]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#1e40af]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Affiliazione Palestre</h3>
              <p className="text-gray-600 text-sm mb-4">Requisiti e procedure per affiliarsi.</p>
              <Link href="#" className="text-[#1e40af] font-semibold text-sm hover:underline">Scarica PDF →</Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-[#1e40af]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#1e40af]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Codice Etico</h3>
              <p className="text-gray-600 text-sm mb-4">Principi e valori della federazione.</p>
              <Link href="#" className="text-[#1e40af] font-semibold text-sm hover:underline">Scarica PDF →</Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-[#1e40af]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#1e40af]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Antidoping</h3>
              <p className="text-gray-600 text-sm mb-4">Regolamento antidoping e controlli.</p>
              <Link href="#" className="text-[#1e40af] font-semibold text-sm hover:underline">Scarica PDF →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. NEWS & GALLERY */}
      <section id="news" className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#1e40af] tracking-wider uppercase">Aggiornamenti</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2">News & Gallery</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Le ultime novità dal mondo IKTA.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item) => (
              <div key={item.title} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                  </svg>
                </div>
                <div className="p-6">
                  <p className="text-sm text-[#1e40af] font-semibold mb-2">{item.date}</p>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="#" className="btn btn-primary">
              Vedi Tutte le News
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-dark section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Vuoi far parte di IKTA?
          </h2>
          <p className="text-gray-400 mb-8">
            Scopri come affiliare la tua palestra o diventare un istruttore certificato.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/affiliazione" className="btn bg-white text-gray-900 hover:bg-gray-100 px-8">
              Affiliazione
            </Link>
            <Link href="/formazione" className="btn border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8">
              Formazione
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

