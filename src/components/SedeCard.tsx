'use client';

import { useState } from 'react';
import Image from 'next/image';

interface SedeCardProps {
  name: string;
  badge?: string;
  color: string;
  colorHover: string;
  logo: string;
  address: string;
  phone: string;
  mapsUrl: string;
  gallery: string[];
}

export default function SedeCard({
  name,
  badge,
  color,
  colorHover,
  logo,
  address,
  phone,
  mapsUrl,
  gallery,
}: SedeCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
      {/* Header */}
      <div
        className="px-4 sm:px-6 py-4 sm:py-5"
        style={{ background: `linear-gradient(to right, ${color}, ${colorHover})` }}
      >
        <div className="flex items-center gap-3">
          {badge && (
            <span className="px-2 py-1 bg-white/20 text-white text-[10px] sm:text-xs font-bold rounded-full whitespace-nowrap">
              {badge}
            </span>
          )}
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">{name}</h3>
        </div>
      </div>

      {/* Compact View - Always visible */}
      <div className="p-4 sm:p-6 md:p-8">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-start gap-4 lg:block">
            <Image
              src={logo}
              alt={name}
              width={200}
              height={200}
              loading="lazy"
              className="rounded-xl object-cover w-20 h-20 sm:w-28 sm:h-28 lg:w-52 lg:h-52 shadow-md"
            />

            {/* Mobile: Compact info next to logo */}
            <div className="flex-1 lg:hidden">
              <p className="text-sm text-gray-600 mb-1">{address}</p>
              <a
                href={`tel:${phone.replace(/\s/g, '')}`}
                className="text-sm font-medium"
                style={{ color }}
              >
                {phone}
              </a>
            </div>
          </div>

          {/* Desktop: Full content */}
          <div className="hidden lg:block flex-1 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: color }}
                >
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Indirizzo</p>
                  <p className="font-medium text-gray-900">{address}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: color }}
                >
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Telefono</p>
                  <p className="font-medium text-gray-900">{phone}</p>
                </div>
              </div>
            </div>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white px-5 py-3 rounded-xl font-medium transition-colors"
              style={{ backgroundColor: color }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colorHover)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = color)}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
              </svg>
              Apri in Google Maps
            </a>
          </div>
        </div>

        {/* Mobile: Expand/Collapse Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="lg:hidden w-full mt-4 py-3 px-4 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm font-medium text-gray-700 flex items-center justify-center gap-2 transition-colors"
        >
          {isExpanded ? 'Mostra meno' : 'Mostra dettagli e galleria'}
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </button>

        {/* Mobile: Expanded Content */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${
            isExpanded ? 'max-h-[800px] opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          {/* Action Buttons */}
          <div className="flex gap-2 mb-4">
            <a
              href={`tel:${phone.replace(/\s/g, '')}`}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-white text-sm font-medium"
              style={{ backgroundColor: color }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              Chiama
            </a>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-gray-800 text-white text-sm font-medium"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
              </svg>
              Mappa
            </a>
          </div>

          {/* Gallery - rendered only when expanded to avoid double-loading */}
          {isExpanded && (
            <div className="pt-4 border-t border-gray-100">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Galleria</p>
              <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1 snap-x snap-mandatory">
                {gallery.map((foto, i) => (
                  <Image
                    key={i}
                    src={foto}
                    alt={`${name} ${i + 1}`}
                    width={160}
                    height={120}
                    loading="lazy"
                    className="rounded-lg object-cover h-24 w-32 flex-shrink-0 shadow-md snap-start"
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Desktop: Gallery - Always visible */}
        <div className="hidden lg:block mt-8 pt-8 border-t border-gray-100">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Galleria</p>
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-2 px-2">
            {gallery.map((foto, i) => (
              <Image
                key={i}
                src={foto}
                alt={`${name} ${i + 1}`}
                width={200}
                height={150}
                loading="lazy"
                className="rounded-xl object-cover h-32 w-44 flex-shrink-0 shadow-md hover:shadow-lg transition-shadow"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
