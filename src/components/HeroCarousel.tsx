'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const heroImages = [
  { src: '/hero/homescorre2.jpg', objectPosition: 'center top', fit: 'cover' as const },
  { src: '/hero/homescorre3.jpg', objectPosition: 'center center', fit: 'cover' as const },
  { src: '/hero/cinturagiallaikta.jpg', objectPosition: 'center center', fit: 'contain' as const },
  { src: '/hero/hero2.jpg', objectPosition: 'center center', fit: 'cover' as const },
  { src: '/hero/fotohomeikta11.jpg', objectPosition: 'center center', fit: 'cover' as const },
  { src: '/hero/hero3.jpg', objectPosition: 'center center', fit: 'cover' as const },
  { src: '/hero/hero4.jpg', objectPosition: 'center center', fit: 'cover' as const },
  { src: '/hero/hero5.jpg', objectPosition: 'center center', fit: 'cover' as const },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
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
          style={{
            opacity: index === currentIndex ? 1 : 0,
            backgroundColor: image.fit === 'contain' ? '#000' : 'transparent',
          }}
        >
          <Image
            src={image.src}
            alt={`IKTA Hero ${index + 1}`}
            fill
            className={image.fit === 'contain' ? 'object-contain' : 'object-cover'}
            style={{ objectPosition: image.objectPosition }}
            priority={index === 0}
            loading={index === 0 ? 'eager' : 'lazy'}
            sizes="100vw"
            quality={80}
          />
        </div>
      ))}

      {/* White transparent overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-white w-6'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
