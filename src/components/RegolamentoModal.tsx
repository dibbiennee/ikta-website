'use client';

import { useState, useEffect } from 'react';

import { regolamenti } from '@/data/regolamenti';

export default function RegolamentoModal() {
  const [selectedRegolamento, setSelectedRegolamento] = useState<string | null>(null);

  const openModal = (key: string) => {
    setSelectedRegolamento(key);
  };

  const closeModal = () => {
    setSelectedRegolamento(null);
  };

  useEffect(() => {
    if (selectedRegolamento) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedRegolamento]);

  const currentRegolamento = selectedRegolamento ? regolamenti[selectedRegolamento as keyof typeof regolamenti] : null;

  return (
    <>
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {Object.entries(regolamenti).map(([key, reg]) => (
          <div key={key} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 text-center flex flex-col items-center">
            <div className="w-12 h-12 bg-[#1e40af]/10 rounded-lg flex items-center justify-center mb-4" style={{ marginTop: '1rem' }}>
              <svg className="w-6 h-6 text-[#1e40af]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2">{reg.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{reg.description}</p>
            <button
              onClick={() => openModal(key)}
              className="bg-[#1e40af] text-white font-semibold text-sm px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-[#1e3a8a] transition-colors shadow-md"
              style={{ marginBottom: '1rem' }}
            >
              Leggi ora
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedRegolamento && currentRegolamento && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center"
          style={{ padding: '2rem 2rem 1rem 2rem' }}
          onClick={closeModal}
        >
          <div
            className="bg-white w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-[#1e40af] text-white py-4 flex items-center justify-between" style={{ padding: '1rem 1.5rem' }}>
              <h2 className="text-xl font-bold">{currentRegolamento.title}</h2>
              <button
                onClick={closeModal}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-80px)]" style={{ padding: '1.5rem 2rem' }}>
              <div className="prose prose-sm max-w-none">
                {currentRegolamento.content.split('\n').map((line, i) => {
                  if (line.startsWith('---')) {
                    return <hr key={i} className="my-6 border-gray-200" />;
                  }
                  if (line.match(/^(REGOLAMENTO|NORME|SOMMARIO|PROTEZIONI|TEMPO|ALLESTIMENTO|RIUNIONI|PENALI|MODALITÀ|REGOLAMENTAZIONI|UFFICIALI|ATTIVITÀ|STATUS|DEFINIZIONE|DURATA|PARTI|CLASSI|CLINCH|ESITI|TECNICHE)/)) {
                    return <h2 key={i} className="text-xl font-bold text-[#1e40af] mt-6 mb-3">{line}</h2>;
                  }
                  if (line.match(/^Art\. \d+/)) {
                    return <h3 key={i} className="text-lg font-semibold text-gray-900 mt-4 mb-2">{line}</h3>;
                  }
                  if (line.startsWith('- ')) {
                    return <li key={i} className="ml-4 text-gray-700">{line.substring(2)}</li>;
                  }
                  if (line.trim() === '') {
                    return <br key={i} />;
                  }
                  return <p key={i} className="text-gray-700 mb-2">{line}</p>;
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
