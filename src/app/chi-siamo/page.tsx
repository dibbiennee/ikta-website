import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Chi Siamo',
  description: 'IKTA - Intercontinental Kick Thai Boxing Association. Federazione attiva dal 2012, 50+ palestre affiliate, 22 titoli mondiali.',
};

export default function ChiSiamoPage() {
  return (
    <>
      {/* 1. LA FEDERAZIONE */}
      <section id="federazione" className="section pt-28 md:pt-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="eyebrow">Chi Siamo</span>
            <h1 className="mt-2">La Federazione</h1>
          </div>

          {/* La Federazione degli Sport da Combattimento */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-20">
            <div className="order-2 lg:order-1">
              <h3 className="mb-4 text-center lg:!text-left">
                Sport da combattimento, regolati con serieta dal 2012
              </h3>
              <p className="text-base md:text-lg text-gray-600 mb-4 leading-relaxed text-center lg:text-left">
                IKTA riunisce Kick Boxing, Thai Boxe, MMA, Krav Maga e altre discipline da combattimento sotto un unico organigramma. Per ogni atleta e palestra forniamo: percorsi ufficiali per allenatori, istruttori e maestri, programmi cinture, regolamenti, ranking e omologazione dei titoli.
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

          {/* La Nostra Missione / Il Presidente */}
          <div id="presidente" className="grid lg:grid-cols-2 gap-12 items-center mb-20 mt-16">
            <div>
              <h3 className="mb-6 text-center lg:!text-left">La nostra missione</h3>
              <div className="space-y-4 text-gray-600 text-base md:text-lg">
                <p>
                  Dare a chi pratica e a chi insegna sport da combattimento un punto di riferimento serio. Niente improvvisazione, niente diplomi facili.
                </p>
                <p className="font-semibold text-gray-900">Concretamente:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Promuovere gli sport da combattimento con sicurezza e regole chiare</li>
                  <li>Formare istruttori, allenatori e maestri qualificati</li>
                  <li>Organizzare gare e eventi a regolamento ufficiale</li>
                  <li>Supportare le palestre affiliate nella crescita</li>
                  <li>Valorizzare gli atleti con ranking e titoli omologati</li>
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

          {/* I Nostri Valori / Regolamenti */}
          <div id="regolamenti" className="text-center mt-20 mb-12">
            <h3>I nostri valori</h3>
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
              <div className="card-flat flex items-start gap-5 !p-6 bg-white border border-gray-100">
                <div className="w-10 h-10 bg-[#1e40af] text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <div>
                  <h4 className="!text-lg mb-1 text-gray-900">Sicurezza</h4>
                  <p className="text-gray-600 text-sm">
                    Regolamenti chiari e formazione adeguata per ogni disciplina. La salute degli atleti viene prima del risultato.
                  </p>
                </div>
              </div>
              <div className="card-flat flex items-start gap-5 !p-6 bg-white border border-gray-100">
                <div className="w-10 h-10 bg-[#1e40af] text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>
                </div>
                <div>
                  <h4 className="!text-lg mb-1 text-gray-900">Standard tecnici</h4>
                  <p className="text-gray-600 text-sm">
                    Esami documentati, programmi cinture verificati, gare a regolamento. Niente scorciatoie, ne nei diplomi ne sui ring.
                  </p>
                </div>
              </div>
              <div className="card-flat flex items-start gap-5 !p-6 bg-white border border-gray-100">
                <div className="w-10 h-10 bg-[#1e40af] text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                  </svg>
                </div>
                <div>
                  <h4 className="!text-lg mb-1 text-gray-900">Rete tra palestre</h4>
                  <p className="text-gray-600 text-sm">
                    50+ palestre affiliate che condividono know-how, atleti e calendario gare. Crescere insieme batte crescere da soli.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galleria */}
      <section id="galleria" className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="eyebrow">Galleria</span>
            <h2 className="mt-2">I nostri momenti</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {['/galleria1.jpg', '/galleria2.jpg', '/galleria3.jpg'].map((src, i) => (
              <div key={src} className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <Image
                  src={src}
                  alt={`Galleria IKTA ${i + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
