import Link from 'next/link';
import Image from 'next/image';
import HeroCarousel from '@/components/HeroCarousel';

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
    name: 'CSE Combat System',
    description: 'Sistema di combattimento evolutivo per difesa personale e sport.',
  },
  {
    name: 'Full Contact',
    description: 'Disciplina a contatto pieno con tecniche di calcio sopra la cintura.',
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
  { value: '22+', label: 'Titoli Mondiali' },
  { value: '50+', label: 'Palestre Affiliate' },
  { value: '1000+', label: 'Atleti Tesserati' },
  { value: '10+', label: 'Discipline' },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen text-white overflow-hidden">
        {/* Background Carousel */}
        <HeroCarousel />

        {/* Content Container */}
        <div
          className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-16"
          style={{ paddingTop: 'clamp(6rem, 15vh, 12rem)' }}
        >
          <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center gap-6 md:gap-8">
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight drop-shadow-lg">
              IKTA
            </h1>
            <p className="text-lg md:text-2xl text-gray-200 font-medium -mt-2 md:-mt-4 drop-shadow-md">
              Intercontinental Kick Thai Boxing Association
            </p>

            <p className="text-base md:text-xl text-gray-200 max-w-2xl leading-relaxed text-center drop-shadow-md">
              Kick Boxing, Thai Boxe e altre discipline.
              Formazione certificata, gare ufficiali, ranking e titoli omologati.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link href="/affiliazione" className="btn bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg shadow-lg">
                Affiliati Ora
              </Link>
              <Link href="/chi-siamo" className="btn border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg backdrop-blur-sm">
                Scopri di Più
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Brief Section */}
      <section id="federazione" className="section">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                La Federazione degli Sport da Combattimento
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                IKTA riunisce sotto lo stesso tetto Kick Boxing, Thai Boxe, Combat System Evolution
                e altre discipline affini. Offriamo un quadro tecnico e organizzativo serio: organigramma
                definito, percorsi ufficiali per allenatori, istruttori e maestri, programmi cinture,
                regolamenti, ranking e omologazione dei titoli.
              </p>
              <Link href="/chi-siamo" className="btn bg-[#1e40af] text-white hover:bg-[#1e3a8a] inline-flex items-center">
                Scopri la nostra storia
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <Image
                src="/iktafoto1.jpg"
                alt="IKTA - Sport da Combattimento"
                width={600}
                height={400}
                className="rounded-xl shadow-lg object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="flex items-center justify-center py-8">
        <span className="w-16 h-0.5 bg-[#0a0a0a]"></span>
        <span className="w-16 h-0.5 bg-[#1e40af]"></span>
        <span className="w-16 h-0.5 bg-[#eab308]"></span>
      </div>

      {/* Disciplines Section */}
      <section id="discipline" className="section pt-0">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">Le Nostre Discipline</h2>
            <p className="text-gray-600 max-w-2xl text-center">
              Dall&apos;arte tradizionale allo sport moderno, copriamo tutte le principali discipline
              di combattimento con regolamenti e percorsi formativi dedicati.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="grid sm:grid-cols-2 gap-4">
                {disciplines.map((discipline, index) => (
                  <div
                    key={discipline.name}
                    className="card group cursor-pointer hover:shadow-xl transition-all duration-300 border-l-4 border-l-transparent hover:border-l-[#eab308] bg-white"
                  >
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-[#1e40af] transition-colors">
                      {discipline.name}
                    </h3>
                    <p className="text-sm text-gray-600">{discipline.description}</p>
                  </div>
                ))}
              </div>

              <div className="text-center" style={{ marginTop: '60px' }}>
                <Link href="/discipline" className="btn bg-[#eab308] text-black hover:bg-[#ca8a04]">
                  Tutte le Discipline
                </Link>
              </div>
            </div>

            <div className="flex justify-center">
              <Image
                src="/iktagym.jpg"
                alt="IKTA Gym - Le Nostre Discipline"
                width={500}
                height={600}
                className="rounded-xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="affiliazione" className="section relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)' }}>
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center text-white">
            Vuoi Affiliare la Tua Palestra?
          </h2>
          <p className="text-gray-300 max-w-2xl mb-8 text-center">
            Entra a far parte della famiglia IKTA Italia. Accedi a formazione certificata,
            gare ufficiali, supporto tecnico e visibilita nazionale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/affiliazione" className="btn bg-[#eab308] text-black hover:bg-[#ca8a04] px-8">
              Richiedi Affiliazione
            </Link>
            <Link href="/contatti" className="btn border-2 border-white/30 text-white hover:bg-white/10 px-8">
              Contattaci
            </Link>
          </div>
        </div>
      </section>

      {/* Sedi IKTA GYM */}
      <section id="sedi" className="section bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#1e40af]/10 text-[#1e40af] text-sm font-semibold rounded-full mb-4">
              Le Nostre Sedi
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">IKTA GYM</h2>
            <p className="text-gray-600 text-center max-w-2xl">
              Palestre ufficiali dove allenarti con istruttori certificati IKTA
            </p>
          </div>

          <div className="grid gap-8 lg:gap-12">
            {/* IKTA GYM Santa Marinella */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-[#e30613] to-[#ff1a1a] px-6 py-5">
                <h3 className="text-xl md:text-2xl font-bold text-white">IKTA GYM Santa Marinella</h3>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <Image
                      src="/sedi/santamarinella/iktasantalogo.jpg"
                      alt="IKTA GYM Santa Marinella"
                      width={200}
                      height={200}
                      className="rounded-xl object-cover w-full lg:w-52 h-52 shadow-md"
                    />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                        <div className="w-10 h-10 bg-[#e30613] rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">Indirizzo</p>
                          <p className="font-medium text-gray-900">Via 4 Novembre n 25, Santa Marinella</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                        <div className="w-10 h-10 bg-[#e30613] rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">Telefono</p>
                          <p className="font-medium text-gray-900">+39 348 5913895</p>
                        </div>
                      </div>
                    </div>
                    <a
                      href="https://maps.google.com/?q=Via+4+Novembre+25+Santa+Marinella"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#e30613] text-white px-5 py-3 rounded-xl font-medium hover:bg-[#c00510] transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                      </svg>
                      Apri in Google Maps
                    </a>
                  </div>
                </div>
                {/* Gallery */}
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Galleria</p>
                  <div className="flex gap-4 overflow-x-auto pb-4 -mx-2 px-2">
                    {['iktafotosanta1.jpg', 'iktafotosanta2.jpg', 'iktafotosanta3.jpg', 'iktafotosanta4.jpg', 'iktafotosanta5.jpg'].map((foto, i) => (
                      <Image
                        key={i}
                        src={`/sedi/santamarinella/${foto}`}
                        alt={`IKTA Santa Marinella ${i + 1}`}
                        width={200}
                        height={150}
                        className="rounded-xl object-cover h-32 w-44 flex-shrink-0 shadow-md hover:shadow-lg transition-shadow"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* IKTA GYM Civitavecchia */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-[#c71585] to-[#d81b94] px-6 py-5">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-white/20 text-white text-xs font-bold rounded-full">SEDE NAZIONALE</span>
                  <h3 className="text-xl md:text-2xl font-bold text-white">IKTA GYM Civitavecchia</h3>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <Image
                      src="/sedi/civitavecchia/iktacvlogo.jpg"
                      alt="IKTA GYM Civitavecchia"
                      width={200}
                      height={200}
                      className="rounded-xl object-cover w-full lg:w-52 h-52 shadow-md"
                    />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                        <div className="w-10 h-10 bg-[#c71585] rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">Indirizzo</p>
                          <p className="font-medium text-gray-900">Via Ticino n 15, Civitavecchia</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                        <div className="w-10 h-10 bg-[#c71585] rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">Telefono</p>
                          <p className="font-medium text-gray-900">+39 338 4012397</p>
                        </div>
                      </div>
                    </div>
                    <a
                      href="https://maps.google.com/?q=Via+Ticino+15+Civitavecchia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#c71585] text-white px-5 py-3 rounded-xl font-medium hover:bg-[#a01270] transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                      </svg>
                      Apri in Google Maps
                    </a>
                  </div>
                </div>
                {/* Gallery */}
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Galleria</p>
                  <div className="flex gap-4 overflow-x-auto pb-4 -mx-2 px-2">
                    {['iktacv1.jpg', 'iktacv2.jpg', 'iktacv4.jpg', 'iktacv5.jpg', 'iktacv6.jpg', 'iktacv7.jpg', 'iktacv8.jpg', 'iktacv9.jpg', 'iktacv10.jpg', 'iktacv11.jpg'].map((foto, i) => (
                      <Image
                        key={i}
                        src={`/sedi/civitavecchia/${foto}`}
                        alt={`IKTA Civitavecchia ${i + 1}`}
                        width={200}
                        height={150}
                        className="rounded-xl object-cover h-32 w-44 flex-shrink-0 shadow-md hover:shadow-lg transition-shadow"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* IKTA GYM Tolfa */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-[#00c853] to-[#2ecc71] px-6 py-5">
                <h3 className="text-xl md:text-2xl font-bold text-white">IKTA GYM Tolfa</h3>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <Image
                      src="/sedi/tolfa/iktatolfalogo.jpeg"
                      alt="IKTA GYM Tolfa"
                      width={200}
                      height={200}
                      className="rounded-xl object-cover w-full lg:w-52 h-52 shadow-md"
                    />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                        <div className="w-10 h-10 bg-[#00c853] rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">Indirizzo</p>
                          <p className="font-medium text-gray-900">Via G. Amendola 1A, Tolfa</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                        <div className="w-10 h-10 bg-[#00c853] rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">Telefono</p>
                          <p className="font-medium text-gray-900">+39 338 4012397</p>
                        </div>
                      </div>
                    </div>
                    <a
                      href="https://maps.google.com/?q=Via+Amendola+1A+Tolfa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#00c853] text-white px-5 py-3 rounded-xl font-medium hover:bg-[#00a844] transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                      </svg>
                      Apri in Google Maps
                    </a>
                  </div>
                </div>
                {/* Gallery */}
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Galleria</p>
                  <div className="flex gap-4 overflow-x-auto pb-4 -mx-2 px-2">
                    {['iktatolfa.webp', 'iktatolfa1.webp', 'iktatolfa2.webp', 'iktatolfa4.webp', 'iktatolfa5.webp'].map((foto, i) => (
                      <Image
                        key={i}
                        src={`/sedi/tolfa/${foto}`}
                        alt={`IKTA Tolfa ${i + 1}`}
                        width={200}
                        height={150}
                        className="rounded-xl object-cover h-32 w-44 flex-shrink-0 shadow-md hover:shadow-lg transition-shadow"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-24">
            <Link href="/contatti" className="btn bg-[#1e40af] text-white hover:bg-[#1e3a8a] px-8 py-4 text-lg">
              Contattaci
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
