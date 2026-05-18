import { Metadata } from 'next';
import Link from 'next/link';
import SedeCard from '@/components/SedeCard';

export const metadata: Metadata = {
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
            <SedeCard
              name="IKTA GYM Santa Marinella"
              color={BRAND_BLUE}
              colorHover={BRAND_BLUE_HOVER}
              logo="/sedi/santamarinella/iktasantalogo.webp"
              address="Via 4 Novembre n 25, Santa Marinella"
              phone="+39 348 5913895"
              mapsUrl="https://maps.google.com/?q=Via+4+Novembre+25+Santa+Marinella"
              gallery={[
                '/sedi/santamarinella/iktafotosanta1.webp',
                '/sedi/santamarinella/iktafotosanta2.webp',
                '/sedi/santamarinella/iktafotosanta3.webp',
                '/sedi/santamarinella/iktafotosanta4.webp',
                '/sedi/santamarinella/iktafotosanta5.webp',
              ]}
            />

            <SedeCard
              name="IKTA GYM Civitavecchia"
              color={BRAND_BLUE}
              colorHover={BRAND_BLUE_HOVER}
              logo="/sedi/civitavecchia/iktacvlogo.webp"
              address="Via Ticino n 15, Civitavecchia"
              phone="+39 338 4012397"
              mapsUrl="https://maps.google.com/?q=Via+Ticino+15+Civitavecchia"
              gallery={[
                '/sedi/civitavecchia/iktacv1.webp',
                '/sedi/civitavecchia/iktacv2.webp',
                '/sedi/civitavecchia/iktacv4.webp',
                '/sedi/civitavecchia/iktacv5.webp',
                '/sedi/civitavecchia/iktacv6.webp',
                '/sedi/civitavecchia/iktacv7.webp',
                '/sedi/civitavecchia/iktacv8.webp',
                '/sedi/civitavecchia/iktacv9.webp',
                '/sedi/civitavecchia/iktacv10.webp',
                '/sedi/civitavecchia/iktacv11.webp',
              ]}
            />

            <SedeCard
              name="IKTA GYM Tolfa"
              color={BRAND_BLUE}
              colorHover={BRAND_BLUE_HOVER}
              logo="/sedi/tolfa/iktatolfalogo.webp"
              address="Via G. Amendola 1A, Tolfa"
              phone="+39 338 4012397"
              mapsUrl="https://maps.google.com/?q=Via+Amendola+1A+Tolfa"
              gallery={[
                '/sedi/tolfa/iktatolfa.webp',
                '/sedi/tolfa/iktatolfa1.webp',
                '/sedi/tolfa/iktatolfa2.webp',
                '/sedi/tolfa/iktatolfa4.webp',
                '/sedi/tolfa/iktatolfa5.webp',
              ]}
            />
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
