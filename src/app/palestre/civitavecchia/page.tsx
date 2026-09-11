import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { sedi } from '@/data/sedi';

const SITE_URL = 'https://iktaworld.com';
const sede = sedi.find((s) => s.city === 'Civitavecchia')!;

export const metadata: Metadata = {
  alternates: { canonical: '/palestre/civitavecchia' },
  title: 'Palestra di Kick Boxing a Civitavecchia',
  description:
    'IKTA GYM Civitavecchia, in Via Ticino 15: palestra di Kick Boxing, K-1 e Muay Thai per amatori e agonisti, con istruttori certificati IKTA. Vieni a provare un allenamento.',
  openGraph: {
    title: 'IKTA GYM Civitavecchia - Kick Boxing, K-1 e Muay Thai',
    description:
      'La palestra della federazione IKTA a Civitavecchia. Kick Boxing, K-1, Muay Thai e MMA per amatori e agonisti, con istruttori certificati.',
    url: `${SITE_URL}/palestre/civitavecchia`,
    type: 'website',
    locale: 'it_IT',
  },
};

const gymJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['SportsActivityLocation', 'ExerciseGym'],
  name: 'IKTA GYM Civitavecchia',
  description:
    'Palestra ufficiale della federazione IKTA a Civitavecchia. Allenamenti di Kick Boxing, K-1, Muay Thai e MMA per amatori e agonisti, con istruttori certificati.',
  url: `${SITE_URL}/palestre/civitavecchia`,
  image: sede.gallery.slice(0, 3).map((g) => SITE_URL + g),
  telephone: sede.phoneRaw,
  hasMap: sede.mapsUrl,
  address: {
    '@type': 'PostalAddress',
    streetAddress: sede.streetAddress,
    addressLocality: sede.city,
    postalCode: sede.postalCode,
    addressRegion: sede.region,
    addressCountry: 'IT',
  },
  areaServed: [
    { '@type': 'City', name: 'Civitavecchia' },
    { '@type': 'City', name: 'Santa Marinella' },
    { '@type': 'City', name: 'Tarquinia' },
  ],
  sport: sede.sports,
  parentOrganization: {
    '@type': 'SportsOrganization',
    name: 'IKTA - Intercontinental Kick Thai Boxing Association',
    url: SITE_URL,
  },
};

const discipline = [
  { nome: 'Kick Boxing', desc: 'Point Fighting, Light Contact, Kick Light e Full Contact.' },
  { nome: 'K-1', desc: 'Stile in piedi completo con calci, pugni e ginocchia.' },
  { nome: 'Muay Thai', desc: 'La boxe thailandese, l’arte delle otto armi.' },
  { nome: 'MMA', desc: 'Striking e grappling per chi vuole una disciplina completa.' },
];

export default function IktaGymCivitavecchiaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gymJsonLd) }}
      />

      {/* HERO */}
      <section className="section pt-28 md:pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="eyebrow">Sede IKTA GYM</span>
            <h1 className="mt-2">Palestra di Kick Boxing a Civitavecchia</h1>
            <p className="text-base md:text-lg text-gray-600 mt-4">
              <strong>IKTA GYM Civitavecchia</strong> è la palestra ufficiale della federazione IKTA in città:
              qui ci si allena in <strong>Kick Boxing, K-1, Muay Thai e MMA</strong>, per amatori e agonisti,
              con istruttori certificati. La sede è anche il punto di riferimento nazionale della federazione.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <a href={`tel:${sede.phoneRaw}`} className="btn btn-primary">
                Chiama la palestra
              </a>
              <a href={sede.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Apri in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DISCIPLINE */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="eyebrow">Cosa si allena</span>
            <h2 className="mt-2">Discipline in palestra</h2>
            <p className="text-gray-600 mt-3">
              Corsi per <strong>amatori e agonisti</strong>, con percorsi adatti a chi inizia da zero e a chi vuole gareggiare.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 max-w-4xl mx-auto">
            {discipline.map((d) => (
              <div key={d.nome} className="rounded-xl border border-gray-200 bg-white p-5">
                <h3 className="!text-lg font-bold text-[#1e40af]">{d.nome}</h3>
                <p className="text-sm text-gray-600 mt-1">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INFO + MAPPA */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto items-start">
            <div>
              <span className="eyebrow">Dove siamo</span>
              <h2 className="mt-2">Indirizzo e contatti</h2>
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-4">
                  <span className="text-[#1e40af] font-bold text-xs uppercase tracking-wide w-24 flex-shrink-0 pt-0.5">Indirizzo</span>
                  <span className="text-gray-900 font-medium">Via Ticino 15, 00053 Civitavecchia (RM)</span>
                </div>
                <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-4">
                  <span className="text-[#1e40af] font-bold text-xs uppercase tracking-wide w-24 flex-shrink-0 pt-0.5">Telefono</span>
                  <a href={`tel:${sede.phoneRaw}`} className="text-gray-900 font-medium">{sede.phone}</a>
                </div>
                <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-4">
                  <span className="text-[#1e40af] font-bold text-xs uppercase tracking-wide w-24 flex-shrink-0 pt-0.5">Corsi</span>
                  <span className="text-gray-900 font-medium">Amatori e agonisti. Chiama per gli orari aggiornati della stagione.</span>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-gray-200">
              <iframe
                src="https://maps.google.com/maps?q=Via+Ticino+15,+Civitavecchia,+Italy&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="340"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="IKTA GYM Civitavecchia - Via Ticino 15"
              />
            </div>
          </div>
        </div>
      </section>

      {/* GALLERIA */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="eyebrow">La palestra</span>
            <h2 className="mt-2">Gli spazi</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-5xl mx-auto">
            {sede.gallery.slice(0, 6).map((src, i) => (
              <div key={src} className="relative aspect-[4/3] rounded-xl overflow-hidden border border-gray-200">
                <Image
                  src={src}
                  alt={`IKTA GYM Civitavecchia - foto ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6">Vieni a provare un allenamento</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-base md:text-lg">
            Scrivici o chiamaci: ti diciamo quando passare e cosa portare per la prima lezione a Civitavecchia.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={`tel:${sede.phoneRaw}`} className="btn btn-primary">
              Chiama {sede.phone}
            </a>
            <Link href="/contatti" className="btn !bg-white !text-gray-900 hover:!bg-gray-100">
              Contattaci
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
