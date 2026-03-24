import { Metadata } from 'next';
import Link from 'next/link';
import SedeCard from '@/components/SedeCard';

export const metadata: Metadata = {
  title: 'Palestre IKTA',
  description: 'Trova le palestre IKTA Gym affiliate. Sedi ufficiali per Kick Boxing, Muay Thai e altre discipline.',
};

export default function PalestrePage() {
  return (
    <>
      {/* Sedi IKTA GYM */}
      <section className="section bg-gradient-to-b from-gray-50 to-white" style={{ marginTop: '100px' }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-8 sm:mb-16">
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-[#1e40af]/10 text-[#1e40af] text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4">
              Le Nostre Sedi
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 text-center">IKTA GYM</h1>
            <p className="text-sm sm:text-base text-gray-600 text-center max-w-2xl px-2">
              Palestre ufficiali dove allenarti con istruttori certificati IKTA
            </p>
          </div>

          <div className="grid gap-6 lg:gap-12">
            <SedeCard
              name="IKTA GYM Santa Marinella"
              color="#e30613"
              colorHover="#c00510"
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
              color="#c71585"
              colorHover="#a01270"
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
              color="#00c853"
              colorHover="#00a844"
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

          <div className="text-center px-4 sm:px-0" style={{ marginTop: '4rem' }}>
            <Link href="/contatti" className="btn bg-[#1e40af] text-white hover:bg-[#1e3a8a] px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto justify-center">
              Contattaci
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-dark section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Vuoi Aprire una Sede IKTA Gym?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Affilia la tua palestra a IKTA e diventa parte della nostra rete.
            Supporto tecnico, formazione e visibilità.
          </p>
          <Link href="/affiliazione" className="btn bg-white text-gray-900 hover:bg-gray-100 px-8">
            Richiedi Affiliazione
          </Link>
        </div>
      </section>
    </>
  );
}
