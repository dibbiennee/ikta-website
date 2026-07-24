'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const heroImages = [
  { src: '/hero/hf-azione.jpg', alt: 'Incontro di kickboxing IKTA sul ring, colpo in azione' },
  { src: '/hero/hf-campione-cintura.jpg', alt: 'Campione IKTA in piedi sul ring con la cintura del titolo' },
  { src: '/hero/hf-vittoria.jpg', alt: 'Atleta IKTA vincitore con il braccio alzato dall’arbitro' },
  { src: '/hero/hf-due-campioni.jpg', alt: 'Due campioni IKTA con le cinture del titolo' },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Rispetta prefers-reduced-motion: niente autoplay se l'utente lo ha richiesto
    const mq = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
    if (mq && mq.matches) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Images */}
      {heroImages.map((image, index) => (
        <div
          key={image.src}
          className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out"
          style={{ opacity: index === currentIndex ? 1 : 0 }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            style={{ objectPosition: 'center' }}
            priority={index === 0}
            loading={index === 0 ? 'eager' : 'lazy'}
            sizes="100vw"
            quality={80}
          />
        </div>
      ))}

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-[#eab308] w-6' : 'bg-white/50 hover:bg-white/75 w-2'
            }`}
            aria-label={`Vai alla slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
