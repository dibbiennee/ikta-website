'use client';

import {
  kickBoxingRanking,
  muayThaiRanking,
  k1StyleRanking,
  fullContactRanking,
  kickBoxingLightRanking,
  freeBoxingRanking,
  mmaRanking,
  type WeightClass,
} from '@/data/ranking-world';

const disciplines = [
  { id: 'kick-boxing', name: 'Kick Boxing', data: kickBoxingRanking },
  { id: 'muay-thai', name: 'Muay Thai', data: muayThaiRanking },
  { id: 'k1-style', name: 'K1 Style', data: k1StyleRanking },
  { id: 'full-contact', name: 'Full Contact', data: fullContactRanking },
  { id: 'kick-boxing-light', name: 'Kick Boxing Light', data: kickBoxingLightRanking },
  { id: 'free-boxing', name: 'Free Boxing', data: freeBoxingRanking },
  { id: 'mma', name: 'MMA', data: mmaRanking },
];

function RankingTable({ weights, gender }: { weights: WeightClass[]; gender: string }) {
  return (
    <div className="mb-5">
      <h5 className="text-xs font-bold uppercase tracking-wider text-[#1e40af] mb-2">{gender}</h5>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {weights.map((w) => (
          <div
            key={w.kg}
            className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-4 py-2.5"
          >
            <span className="w-14 shrink-0 text-xs font-bold text-gray-500">KG {w.kg}</span>
            {w.champion ? (
              <span className="flex-1 min-w-0 truncate">
                <span className="text-sm font-semibold text-gray-900">{w.champion}</span>{' '}
                <span className="text-xs text-gray-500">{w.country}</span>
              </span>
            ) : (
              <span className="text-sm text-gray-300">—</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function RankingWorldPage() {
  return (
    <section className="pt-28 pb-20">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <span className="eyebrow">IKTA World</span>
          <h1 className="mt-2">Ranking</h1>
        </div>

        {/* Navigazione discipline */}
        <div className="sticky top-20 z-40 mb-12 flex justify-center bg-white/95 py-3 backdrop-blur-sm">
          <select
            onChange={(e) => {
              const el = document.getElementById(e.target.value);
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            defaultValue=""
            className="min-w-[260px] cursor-pointer rounded-xl border-2 border-[#1e40af] bg-white px-5 py-3 text-[15px] font-semibold text-[#1e40af] outline-none"
          >
            <option value="" disabled>
              Vai alla disciplina...
            </option>
            {disciplines.map((d) => (
              <option key={d.id} value={d.id}>
                {d.name}
              </option>
            ))}
          </select>
        </div>

        {disciplines.map((d) => (
          <div key={d.id} className="mb-16 last:mb-0">
            <div id={d.id} className="scroll-mt-40" />
            <div
              className="mb-10 rounded-2xl px-8 py-7 text-center text-white"
              style={{
                background: 'linear-gradient(135deg, #1e3a8a, #1e40af)',
                boxShadow: '0 10px 30px rgba(30, 64, 175, 0.3)',
              }}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70">Disciplina</span>
              <h2 className="mt-1.5 text-2xl font-bold">{d.name}</h2>
            </div>

            {d.data.map((category) => (
              <div key={category.title} className="mb-10 last:mb-0">
                <h3 className="mb-5 border-b-2 border-[#1e40af] pb-3 text-lg font-bold text-[#1e40af]">
                  {category.title}
                </h3>
                <RankingTable weights={category.men} gender="Men" />
                <RankingTable weights={category.women} gender="Women" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
