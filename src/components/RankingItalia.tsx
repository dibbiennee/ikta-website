'use client';

import {
  dilettantiDisciplines,
  professionistiDisciplines,
  type WeightClass,
  type Discipline,
} from '@/data/ranking-italia';

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
              <span className="flex-1 min-w-0 truncate text-sm font-semibold text-gray-900">{w.champion}</span>
            ) : (
              <span className="text-sm text-gray-300">—</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function DisciplineSection({ discipline }: { discipline: Discipline }) {
  return (
    <>
      <div id={discipline.id} style={{ scrollMarginTop: '160px' }} />
      <div style={{
        background: discipline.gradient,
        color: 'white',
        borderRadius: '20px',
        padding: '28px 30px',
        textAlign: 'center',
        marginBottom: '50px',
        boxShadow: discipline.shadow,
      }}>
        <h3 style={{ fontSize: '28px', fontWeight: 700 }}>{discipline.name}</h3>
      </div>

      <RankingTable weights={discipline.men} gender="Men" />
      <RankingTable weights={discipline.women} gender="Women" />
    </>
  );
}

// ==================== MAIN ====================

export default function RankingItalia() {
  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

      {/* Dropdown navigazione */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '60px',
        position: 'sticky',
        top: '80px',
        zIndex: 40,
        backgroundColor: 'rgba(249,250,251,0.95)',
        backdropFilter: 'blur(8px)',
        padding: '12px 0',
      }}>
        <select
          onChange={(e) => {
            const el = document.getElementById(e.target.value);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
          defaultValue=""
          style={{
            padding: '12px 40px 12px 20px',
            borderRadius: '12px',
            border: '2px solid #1e40af',
            fontSize: '15px',
            fontWeight: 600,
            color: '#1e40af',
            backgroundColor: 'white',
            cursor: 'pointer',
            appearance: 'none',
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%231e40af' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 14px center',
            minWidth: '260px',
          }}
        >
          <option value="" disabled>Vai alla disciplina...</option>
          <optgroup label="Dilettanti">
            {dilettantiDisciplines.map((d) => (
              <option key={d.id} value={d.id}>{d.name}</option>
            ))}
          </optgroup>
          <optgroup label="Professionisti">
            {professionistiDisciplines.map((d) => (
              <option key={d.id} value={d.id}>{d.name}</option>
            ))}
          </optgroup>
        </select>
      </div>

      {/* DILETTANTI */}
      <div style={{
        background: 'linear-gradient(135deg, #0a0a0a, #1e40af)',
        color: 'white',
        borderRadius: '20px',
        padding: '32px 30px',
        textAlign: 'center',
        marginBottom: '60px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
      }}>
        <span style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '3px', opacity: 0.7 }}>
          Ranking IKTA Italia
        </span>
        <h3 style={{ fontSize: '32px', fontWeight: 700, marginTop: '6px' }}>Dilettanti</h3>
      </div>

      {dilettantiDisciplines.map((discipline, idx) => (
        <div key={discipline.id}>
          <DisciplineSection discipline={discipline} />
          {idx < dilettantiDisciplines.length - 1 && (
            <hr style={{ border: 'none', borderTop: '2px solid #e5e7eb', margin: '60px 0 50px' }} />
          )}
        </div>
      ))}

      {/* Separatore grande */}
      <hr style={{ border: 'none', borderTop: '3px solid #1e40af', margin: '80px 0 60px' }} />

      {/* PROFESSIONISTI */}
      <div style={{
        background: 'linear-gradient(135deg, #0a0a0a, #eab308)',
        color: 'white',
        borderRadius: '20px',
        padding: '32px 30px',
        textAlign: 'center',
        marginBottom: '60px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
      }}>
        <span style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '3px', opacity: 0.7 }}>
          Ranking IKTA Italia
        </span>
        <h3 style={{ fontSize: '32px', fontWeight: 700, marginTop: '6px' }}>Professionisti</h3>
      </div>

      {professionistiDisciplines.map((discipline, idx) => (
        <div key={discipline.id}>
          <DisciplineSection discipline={discipline} />
          {idx < professionistiDisciplines.length - 1 && (
            <hr style={{ border: 'none', borderTop: '2px solid #e5e7eb', margin: '60px 0 50px' }} />
          )}
        </div>
      ))}
    </div>
  );
}
