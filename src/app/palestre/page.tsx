import { Metadata } from 'next';
import Link from 'next/link';
import SedeCard from '@/components/SedeCard';
import { sedi } from '@/data/sedi';

export const metadata: Metadata = {
  alternates: { canonical: '/palestre' },
  title: 'Palestre IKTA',
  description: 'Trova le palestre IKTA Gym affiliate. Sedi ufficiali per Kick Boxing, Muay Thai e altre discipline.',
};

const BRAND_BLUE = '#1e40af';
const BRAND_BLUE_HOVER = '#1e3a8a';

export default function PalestrePage() {
  return (
    <>
      {/* Sedi IKTA GYM */}
      <section className="section bg-gradient-to-b from-gray-50 to-white pt-28 md:pt-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-8 sm:mb-16">
            <span className="eyebrow mb-3">Le Nostre Sedi</span>
            <h1 className="text-center">IKTA GYM</h1>
            <p className="text-base text-gray-600 text-center max-w-2xl px-2 mt-3">
              Palestre ufficiali dove allenarti con istruttori certificati IKTA
            </p>
          </div>

          <div className="grid gap-6 lg:gap-12">
            {sedi.map((s) => (
              <SedeCard
                key={s.name}
                name={s.name}
                color={BRAND_BLUE}
                colorHover={BRAND_BLUE_HOVER}
                logo={s.logo}
                address={s.address}
                phone={s.phone}
                mapsUrl={s.mapsUrl}
                gallery={s.gallery}
              />
            ))}
          </div>

          <div className="text-center px-4 sm:px-0 mt-16">
            <Link href="/contatti" className="btn btn-secondary">
              Contattaci
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-dark section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6">
            Vuoi aprire una sede IKTA Gym?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Affilia la tua palestra a IKTA: supporto tecnico, formazione certificata e visibilita nazionale.
          </p>
          <Link href="/affiliazione" className="btn btn-primary">
            Richiedi Affiliazione
          </Link>
        </div>
      </section>
    </>
  );
}
