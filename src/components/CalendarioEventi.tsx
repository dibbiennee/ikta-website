'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function CalendarioEventi() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div
        className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white cursor-pointer group"
        onClick={() => setModalOpen(true)}
      >
        <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
          <Image
            src="/foto-eventi/EVENTI.jpg"
            alt="Calendario Eventi Annuali IKTA"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 800px"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
            <div className="w-14 h-14 bg-white/80 group-hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
              <svg className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
              </svg>
            </div>
          </div>
        </div>
        <p className="text-center text-sm text-gray-500 py-3">Clicca per ingrandire</p>
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setModalOpen(false)}
        >
          <button
            onClick={() => setModalOpen(false)}
            className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center transition-colors"
          >
            <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
          <div
            className="relative w-[95vw] h-[90vh] max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src="/foto-eventi/EVENTI.jpg"
              alt="Calendario Eventi Annuali IKTA"
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
