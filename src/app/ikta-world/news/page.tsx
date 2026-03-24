'use client';

import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

const news = [
  { src: '/news-locandina-4.jpg', alt: 'Full Contact World Cup Championship - 10-11 Aprile 2026', date: '10-11 Aprile 2026' },
  { src: '/news-locandina-3.jpg', alt: 'Full Combat Extreme - GP 75KG - Março 2026', date: '6 Marzo 2026' },
  { src: '/news-locandina-2.jpg', alt: 'News IKTA World - 14 Febbraio 2026', date: '14 Febbraio 2026' },
  { src: '/news-locandina.jpg', alt: 'News IKTA World - 13 Febbraio 2026', date: '13 Febbraio 2026' },
];

export default function NewsPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.children[index] as HTMLElement;
    if (!card) return;
    container.scrollTo({ left: card.offsetLeft - (container.offsetWidth - card.offsetWidth) / 2, behavior: 'smooth' });
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const handleScroll = () => {
      const center = container.scrollLeft + container.offsetWidth / 2;
      let closest = 0;
      let minDist = Infinity;
      Array.from(container.children).forEach((child, i) => {
        const el = child as HTMLElement;
        const elCenter = el.offsetLeft + el.offsetWidth / 2;
        const dist = Math.abs(center - elCenter);
        if (dist < minDist) { minDist = dist; closest = i; }
      });
      setActiveIndex(closest);
    };
    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section style={{ marginTop: '100px', paddingBottom: '80px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>

        {/* Titolo */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{ fontSize: '13px', fontWeight: 600, color: '#1e40af', textTransform: 'uppercase', letterSpacing: '2px' }}>
            IKTA World
          </span>
          <h1 style={{ fontSize: '40px', fontWeight: 700, marginTop: '8px' }}>News</h1>
        </div>
      </div>

      {/* Carousel */}
      <style>{`
        .news-carousel::-webkit-scrollbar { display: none; }
      `}</style>
      <div
        ref={scrollRef}
        className="news-carousel"
        style={{
          display: 'flex',
          gap: '24px',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          paddingLeft: 'max(24px, calc((100vw - 380px) / 2))',
          paddingRight: 'max(24px, calc((100vw - 380px) / 2))',
          paddingBottom: '8px',
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        }}
      >
        {news.map((item, i) => (
          <div
            key={i}
            style={{
              flex: '0 0 340px',
              scrollSnapAlign: 'center',
              cursor: 'pointer',
            }}
            onClick={() => scrollToIndex(i)}
          >
            <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 8px 30px rgba(0,0,0,0.18)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              transform: activeIndex === i ? 'scale(1.03)' : 'scale(0.97)',
              opacity: activeIndex === i ? 1 : 0.6,
            }}>
              <Image
                src={item.src}
                alt={item.alt}
                width={340}
                height={480}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <p style={{ textAlign: 'center', fontSize: '13px', color: '#888', marginTop: '12px' }}>
              {item.date}
            </p>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '24px' }}>
        {news.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            style={{
              width: activeIndex === i ? '28px' : '10px',
              height: '10px',
              borderRadius: '5px',
              border: 'none',
              background: activeIndex === i ? '#1e40af' : '#d1d5db',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* Frecce navigazione - solo desktop */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '20px' }}>
        <button
          onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
          style={{
            width: '44px', height: '44px', borderRadius: '50%',
            border: '2px solid #e5e7eb', background: 'white',
            cursor: 'pointer', fontSize: '18px', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            color: activeIndex === 0 ? '#d1d5db' : '#1e40af',
            transition: 'all 0.2s ease',
          }}
        >
          &#8249;
        </button>
        <button
          onClick={() => scrollToIndex(Math.min(news.length - 1, activeIndex + 1))}
          style={{
            width: '44px', height: '44px', borderRadius: '50%',
            border: '2px solid #e5e7eb', background: 'white',
            cursor: 'pointer', fontSize: '18px', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            color: activeIndex === news.length - 1 ? '#d1d5db' : '#1e40af',
            transition: 'all 0.2s ease',
          }}
        >
          &#8250;
        </button>
      </div>
    </section>
  );
}
