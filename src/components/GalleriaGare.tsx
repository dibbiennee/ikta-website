'use client';

import { useState } from 'react';
import Image from 'next/image';

type GaraPhoto = {
  src: string;
  alt: string;
  w: number;
  h: number;
};

const foto: GaraPhoto[] = [
  { src: '/galleria-gare/vittoria-kickboxing-03.jpg', alt: 'Atleta IKTA vincitore proclamato sul ring al tramonto con il braccio alzato', w: 2048, h: 1366 },
  { src: '/galleria-gare/premiazione-cintura-ikta-01.jpg', alt: 'Campione IKTA premiato con la cintura del titolo sul ring', w: 2048, h: 1366 },
  { src: '/galleria-gare/vincitori-ring-ikta.jpg', alt: 'Atleti IKTA esultano sul ring dopo i match', w: 1960, h: 2048 },
  { src: '/galleria-gare/sfida-ring-ikta.jpg', alt: 'Due atleti IKTA si sfidano sul ring prima del match', w: 1366, h: 2048 },
  { src: '/galleria-gare/podio-titoli-ikta.jpg', alt: 'Podio di premiazione IKTA con atleti, trofei e bandiere nazionali', w: 2048, h: 1366 },
  { src: '/galleria-gare/premiazione-cintura-ikta-02.jpg', alt: 'Due campioni IKTA con le cinture dei titoli dopo il match', w: 1066, h: 1600 },
  { src: '/galleria-gare/vittoria-kickboxing-01.jpg', alt: 'Atleta IKTA vincitore con il braccio alzato dall’arbitro sul ring', w: 2048, h: 1366 },
  { src: '/galleria-gare/atleta-ikta-gabbia-mma.jpg', alt: 'Atleta IKTA con lo staff davanti alla gabbia MMA', w: 1366, h: 2048 },
  { src: '/galleria-gare/premiazione-titolo-ikta.jpg', alt: 'Premiazione IKTA con cintura del titolo, bandiere e staff sul ring', w: 2048, h: 1472 },
  { src: '/galleria-gare/vittoria-muay-thai-01.jpg', alt: 'Atleta di Muay Thai IKTA proclamato vincitore sul ring', w: 2048, h: 1642 },
  { src: '/galleria-gare/premiazione-cintura-ikta-03.jpg', alt: 'Campione IKTA con la cintura del titolo insieme agli ufficiali di gara', w: 1066, h: 1600 },
  { src: '/galleria-gare/staff-atleti-ikta.jpg', alt: 'Atleti e tecnici IKTA riuniti sul ring', w: 2048, h: 1366 },
  { src: '/galleria-gare/vittoria-kickboxing-02.jpg', alt: 'Combattente IKTA esulta a torso nudo dopo la vittoria sul ring', w: 1960, h: 2048 },
  { src: '/galleria-gare/premiazione-trofeo-ikta.jpg', alt: 'Premiazione con trofeo e targa a un atleta IKTA sul ring', w: 1600, h: 1066 },
  { src: '/galleria-gare/vittoria-kickboxing-04.jpg', alt: 'Giovane atleta IKTA vincitore con il braccio alzato dall’arbitro', w: 2048, h: 1366 },
  { src: '/galleria-gare/premiazione-cintura-ikta-04.jpg', alt: 'Atleta IKTA con la cintura del titolo intercontinentale', w: 1468, h: 2048 },
  { src: '/galleria-gare/evento-ikta-intervista.jpg', alt: 'Atleta IKTA intervistato sul ring durante l’evento', w: 1600, h: 1066 },
  { src: '/galleria-gare/vittoria-kickboxing-05.jpg', alt: 'Atleta IKTA vincitore acclamato sul ring', w: 2048, h: 1366 },
  { src: '/galleria-gare/premiazione-cintura-ikta-05.jpg', alt: 'Campione IKTA premiato con la cintura del titolo insieme allo staff', w: 400, h: 400 },
  { src: '/galleria-gare/campione-cintura-intercontinentale.jpg', alt: 'Campione IKTA con la cintura del titolo intercontinentale e la madrina di gara', w: 400, h: 400 },
  { src: '/galleria-gare/atleti-gabbia-mma-ikta.jpg', alt: 'Atleti IKTA con la cintura del titolo davanti alla gabbia MMA', w: 604, h: 400 },
];

export default function GalleriaGare() {
  const [lightbox, setLightbox] = useState<GaraPhoto | null>(null);

  return (
    <>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6 [column-fill:_balance]">
        {foto.map((f, idx) => (
          <button
            key={f.src}
            type="button"
            onClick={() => setLightbox(f)}
            aria-label={`Ingrandisci: ${f.alt}`}
            className="mb-4 md:mb-6 block w-full break-inside-avoid rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 bg-gray-50 hover:-translate-y-1 cursor-zoom-in"
          >
            <Image
              src={f.src}
              alt={f.alt}
              width={f.w}
              height={f.h}
              className="w-full h-auto"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              priority={idx < 4}
              loading={idx < 4 ? undefined : 'lazy'}
            />
          </button>
        ))}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
        >
          <button
            onClick={() => setLightbox(null)}
            aria-label="Chiudi"
            className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center transition-colors"
          >
            <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative w-[95vw] h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              fill
              className="object-contain"
              sizes="95vw"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
