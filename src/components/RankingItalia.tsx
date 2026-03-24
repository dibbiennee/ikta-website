'use client';

type WeightClass = {
  kg: string;
  champion?: string;
};

type Discipline = {
  id: string;
  name: string;
  gradient: string;
  shadow: string;
  color: string;
  men: WeightClass[];
  women: WeightClass[];
};

// ==================== DILETTANTI ====================

const dilettantiDisciplines: Discipline[] = [
  {
    id: 'dil-light-contact',
    name: 'Light Contact',
    gradient: 'linear-gradient(135deg, #4c1d95, #7c3aed)',
    shadow: '0 10px 30px rgba(124, 58, 237, 0.3)',
    color: '#7c3aed',
    men: [
      { kg: '60' },
      { kg: '65', champion: 'Spagnolo Gabbriele' },
      { kg: '70', champion: 'Gennaro Tisi' },
      { kg: '75', champion: 'Stefano Mugnai' },
      { kg: '80', champion: 'Giordano Ferri' },
      { kg: '85', champion: 'Luigi Verri' },
      { kg: '+85', champion: 'Paolino Patrizio' },
    ],
    women: [
      { kg: '50', champion: 'Valentina Polindo' },
      { kg: '55' },
      { kg: '60' },
      { kg: '65', champion: 'Luisa Gatti' },
    ],
  },
  {
    id: 'dil-kick-boxing-light',
    name: 'Kick Boxing Light',
    gradient: 'linear-gradient(135deg, #1e3a8a, #3b82f6)',
    shadow: '0 10px 30px rgba(59, 130, 246, 0.3)',
    color: '#3b82f6',
    men: [
      { kg: '60', champion: 'Domenico Cornacchia' },
      { kg: '65', champion: 'Ramieri Mirko' },
      { kg: '70', champion: 'Sebastian Raduloghin' },
      { kg: '75', champion: 'Mattia Paoloni' },
      { kg: '80' },
      { kg: '85', champion: 'Emanuele Mariotti' },
      { kg: '+85', champion: 'Dhoaudi Domenico' },
    ],
    women: [
      { kg: '50', champion: 'Fiorino Jessica' },
      { kg: '55', champion: 'Clarissa Belli' },
      { kg: '60', champion: 'Camilla Spagnolo' },
      { kg: '65', champion: 'Amanda Rosbi' },
    ],
  },
  {
    id: 'dil-k1-style-light',
    name: 'K1 Style Light',
    gradient: 'linear-gradient(135deg, #854d0e, #ca8a04)',
    shadow: '0 10px 30px rgba(202, 138, 4, 0.3)',
    color: '#ca8a04',
    men: [
      { kg: '60' },
      { kg: '65', champion: 'Angelo Menna' },
      { kg: '70', champion: 'Antony Cavazza' },
      { kg: '75' },
      { kg: '80', champion: 'Claudio Stroffi' },
      { kg: '85' },
      { kg: '+85' },
    ],
    women: [
      { kg: '50' },
      { kg: '55' },
      { kg: '60' },
      { kg: '65' },
    ],
  },
  {
    id: 'dil-full-contact',
    name: 'Full Contact',
    gradient: 'linear-gradient(135deg, #14532d, #16a34a)',
    shadow: '0 10px 30px rgba(22, 163, 74, 0.3)',
    color: '#16a34a',
    men: [
      { kg: '60', champion: 'Michele Avallone' },
      { kg: '65', champion: 'Mirko Maglio' },
      { kg: '70', champion: 'Enzo Abiushesh' },
      { kg: '75', champion: 'Lino Rodio' },
      { kg: '80', champion: 'Dante Gaggioli' },
      { kg: '85' },
      { kg: '+85', champion: 'Sannino Massimo' },
    ],
    women: [
      { kg: '50' },
      { kg: '55' },
      { kg: '60', champion: 'Lucia Porro' },
      { kg: '65' },
    ],
  },
  {
    id: 'dil-kick-boxing',
    name: 'Kick Boxing',
    gradient: 'linear-gradient(135deg, #1e3a8a, #1e40af)',
    shadow: '0 10px 30px rgba(30, 64, 175, 0.3)',
    color: '#1e40af',
    men: [
      { kg: '60', champion: 'Mirko Maglio' },
      { kg: '65', champion: 'Angelo Di Palmo' },
      { kg: '70' },
      { kg: '75' },
      { kg: '80' },
      { kg: '85' },
      { kg: '+85' },
    ],
    women: [
      { kg: '50' },
      { kg: '55' },
      { kg: '60' },
      { kg: '65', champion: 'Mandatori Emanuela' },
    ],
  },
  {
    id: 'dil-k1-style',
    name: 'K1 Style',
    gradient: 'linear-gradient(135deg, #78350f, #d97706)',
    shadow: '0 10px 30px rgba(217, 119, 6, 0.3)',
    color: '#d97706',
    men: [
      { kg: '60' },
      { kg: '65', champion: 'Ciprian Varaclescu' },
      { kg: '70', champion: 'Adriano M. Schettini' },
      { kg: '75', champion: 'Francesco Cisternino' },
      { kg: '80' },
      { kg: '85', champion: 'Gianmarco Pozzi' },
      { kg: '+85' },
    ],
    women: [
      { kg: '50' },
      { kg: '55' },
      { kg: '60', champion: 'Alessandra Fornari' },
      { kg: '65' },
    ],
  },
  {
    id: 'dil-muay-thai',
    name: 'Muay Thai',
    gradient: 'linear-gradient(135deg, #7f1d1d, #b91c1c)',
    shadow: '0 10px 30px rgba(185, 28, 28, 0.3)',
    color: '#b91c1c',
    men: [
      { kg: '60', champion: 'Leonardo Brozzetti' },
      { kg: '65' },
      { kg: '70' },
      { kg: '75' },
      { kg: '80' },
      { kg: '85' },
      { kg: '+85' },
    ],
    women: [
      { kg: '50' },
      { kg: '55' },
      { kg: '60' },
      { kg: '65' },
    ],
  },
  {
    id: 'dil-mma-light',
    name: 'M.M.A. Light',
    gradient: 'linear-gradient(135deg, #0c4a6e, #0284c7)',
    shadow: '0 10px 30px rgba(2, 132, 199, 0.3)',
    color: '#0284c7',
    men: [
      { kg: '60' },
      { kg: '65', champion: 'Alessandro Marcelli' },
      { kg: '70' },
      { kg: '75' },
      { kg: '80' },
      { kg: '85' },
      { kg: '+85' },
    ],
    women: [
      { kg: '50' },
      { kg: '55' },
      { kg: '60' },
      { kg: '65' },
    ],
  },
  {
    id: 'dil-mma',
    name: 'M.M.A.',
    gradient: 'linear-gradient(135deg, #064e3b, #059669)',
    shadow: '0 10px 30px rgba(5, 150, 105, 0.3)',
    color: '#059669',
    men: [
      { kg: '60' },
      { kg: '65' },
      { kg: '70' },
      { kg: '75' },
      { kg: '80' },
      { kg: '85' },
      { kg: '+85' },
    ],
    women: [
      { kg: '50' },
      { kg: '55' },
      { kg: '60' },
      { kg: '65' },
    ],
  },
  {
    id: 'dil-free-boxing-light',
    name: 'Free Boxing Light',
    gradient: 'linear-gradient(135deg, #581c87, #a855f7)',
    shadow: '0 10px 30px rgba(168, 85, 247, 0.3)',
    color: '#a855f7',
    men: [
      { kg: '60' },
      { kg: '65', champion: 'Angelo Esposito' },
      { kg: '70' },
      { kg: '75', champion: 'Simone Olivieri' },
      { kg: '80' },
      { kg: '85' },
      { kg: '+85', champion: 'Enzo Di Pietro' },
    ],
    women: [
      { kg: '50' },
      { kg: '55' },
      { kg: '60' },
      { kg: '65' },
    ],
  },
  {
    id: 'dil-free-boxing',
    name: 'Free Boxing',
    gradient: 'linear-gradient(135deg, #3730a3, #6366f1)',
    shadow: '0 10px 30px rgba(99, 102, 241, 0.3)',
    color: '#6366f1',
    men: [
      { kg: '60' },
      { kg: '65' },
      { kg: '70' },
      { kg: '75' },
      { kg: '80' },
      { kg: '85' },
      { kg: '+85' },
    ],
    women: [
      { kg: '50' },
      { kg: '55' },
      { kg: '60' },
      { kg: '65' },
    ],
  },
];

// ==================== PROFESSIONISTI ====================

const professionistiDisciplines: Discipline[] = [
  {
    id: 'pro-k1-style',
    name: 'K1 Style',
    gradient: 'linear-gradient(135deg, #854d0e, #ca8a04)',
    shadow: '0 10px 30px rgba(202, 138, 4, 0.3)',
    color: '#ca8a04',
    men: [
      { kg: '57', champion: 'Celestre Fabio' },
      { kg: '61' },
      { kg: '64', champion: 'Nicola Carparelli' },
      { kg: '67', champion: 'Simone Del Vecchio' },
      { kg: '70', champion: 'Arnold Lokumu' },
      { kg: '73', champion: 'Luca Andreoli' },
      { kg: '76', champion: 'Nicola Martinelli' },
      { kg: '80', champion: 'Piergiulio Paolucci' },
      { kg: '85' },
      { kg: '90' },
      { kg: '+90' },
    ],
    women: [
      { kg: '50' },
      { kg: '55' },
      { kg: '60' },
      { kg: '65', champion: 'Azzurra Proietti' },
    ],
  },
  {
    id: 'pro-kick-boxing',
    name: 'Kick Boxing',
    gradient: 'linear-gradient(135deg, #1e3a8a, #1e40af)',
    shadow: '0 10px 30px rgba(30, 64, 175, 0.3)',
    color: '#1e40af',
    men: [
      { kg: '57' },
      { kg: '61' },
      { kg: '64' },
      { kg: '67', champion: 'Mithat Isteri' },
      { kg: '70', champion: 'Marco Squarcialupi' },
      { kg: '73', champion: "Nicol\u00F2 Cofano" },
      { kg: '76', champion: 'Lino Rodio' },
      { kg: '80' },
      { kg: '85' },
      { kg: '90' },
      { kg: '+90' },
    ],
    women: [
      { kg: '50' },
      { kg: '55' },
      { kg: '60' },
      { kg: '65' },
    ],
  },
  {
    id: 'pro-full-contact',
    name: 'Full Contact',
    gradient: 'linear-gradient(135deg, #14532d, #16a34a)',
    shadow: '0 10px 30px rgba(22, 163, 74, 0.3)',
    color: '#16a34a',
    men: [
      { kg: '57', champion: 'Andrea Rinaldi' },
      { kg: '61', champion: 'Conte Leonardo' },
      { kg: '64', champion: 'Mauro Marrone' },
      { kg: '67', champion: 'Paolo Albano' },
      { kg: '70' },
      { kg: '73' },
      { kg: '76', champion: 'Alessio Crescentini' },
      { kg: '80' },
      { kg: '85' },
      { kg: '90', champion: 'Umberto Lucci' },
      { kg: '+90' },
    ],
    women: [
      { kg: '50' },
      { kg: '55' },
      { kg: '60' },
      { kg: '65' },
    ],
  },
  {
    id: 'pro-muay-thai',
    name: 'Muay Thai',
    gradient: 'linear-gradient(135deg, #7f1d1d, #b91c1c)',
    shadow: '0 10px 30px rgba(185, 28, 28, 0.3)',
    color: '#b91c1c',
    men: [
      { kg: '57' },
      { kg: '61', champion: 'Vincenzo Ghiani' },
      { kg: '64', champion: 'Chihab Youness' },
      { kg: '67', champion: 'Cerasuolo Francesco' },
      { kg: '70', champion: 'Francesco Malatesta' },
      { kg: '73' },
      { kg: '76' },
      { kg: '80' },
      { kg: '85' },
      { kg: '90' },
      { kg: '+90' },
    ],
    women: [
      { kg: '50' },
      { kg: '55' },
      { kg: '60' },
      { kg: '65' },
    ],
  },
  {
    id: 'pro-sanda',
    name: 'Sanda',
    gradient: 'linear-gradient(135deg, #0c4a6e, #0284c7)',
    shadow: '0 10px 30px rgba(2, 132, 199, 0.3)',
    color: '#0284c7',
    men: [
      { kg: '57' },
      { kg: '61', champion: 'Giorgio Baldassini' },
      { kg: '64' },
      { kg: '67' },
      { kg: '70', champion: 'Mario Spera' },
      { kg: '73' },
      { kg: '76' },
      { kg: '80' },
      { kg: '85' },
      { kg: '90', champion: 'Luigi Cresco' },
      { kg: '+90' },
    ],
    women: [
      { kg: '50' },
      { kg: '55' },
      { kg: '60' },
      { kg: '65' },
    ],
  },
  {
    id: 'pro-mma',
    name: 'M.M.A.',
    gradient: 'linear-gradient(135deg, #064e3b, #059669)',
    shadow: '0 10px 30px rgba(5, 150, 105, 0.3)',
    color: '#059669',
    men: [
      { kg: '57' },
      { kg: '61' },
      { kg: '64' },
      { kg: '67' },
      { kg: '70' },
      { kg: '73' },
      { kg: '76' },
      { kg: '80' },
      { kg: '85' },
      { kg: '90' },
      { kg: '+90' },
    ],
    women: [
      { kg: '50' },
      { kg: '55' },
      { kg: '60' },
      { kg: '65' },
    ],
  },
  {
    id: 'pro-kick-boxing-light',
    name: 'Kick Boxing Light',
    gradient: 'linear-gradient(135deg, #4c1d95, #7c3aed)',
    shadow: '0 10px 30px rgba(124, 58, 237, 0.3)',
    color: '#7c3aed',
    men: [
      { kg: '57' },
      { kg: '61' },
      { kg: '64', champion: 'Valerio Vanucci' },
      { kg: '67', champion: 'Lucio Martellucci' },
      { kg: '70', champion: 'Marino Caroccia' },
      { kg: '73', champion: 'Luigi Pia' },
      { kg: '76', champion: 'Manuel Scorpioni' },
      { kg: '80', champion: 'Enrico Pitoni' },
      { kg: '85' },
      { kg: '90' },
      { kg: '+90', champion: 'Graselli Giancarlo' },
    ],
    women: [
      { kg: '50' },
      { kg: '55' },
      { kg: '60' },
      { kg: '65' },
    ],
  },
];

// ==================== COMPONENTI ====================

function RankingTable({ weights, gender }: { weights: WeightClass[]; gender: string }) {
  return (
    <div style={{ marginBottom: '24px' }}>
      <h5 style={{
        fontSize: '13px',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '1.5px',
        color: gender === 'Men' ? '#1e40af' : '#be185d',
        marginBottom: '12px',
      }}>
        {gender}
      </h5>
      <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #e5e7eb' }}>
        {weights.map((w, i) => (
          <div key={w.kg} style={{
            display: 'flex',
            alignItems: 'center',
            padding: '12px 20px',
            backgroundColor: i % 2 === 0 ? '#fff' : '#f9fafb',
            borderBottom: i < weights.length - 1 ? '1px solid #f3f4f6' : 'none',
          }}>
            <span style={{
              fontSize: '13px',
              fontWeight: 700,
              color: '#374151',
              minWidth: '70px',
            }}>
              KG {w.kg}
            </span>
            {w.champion ? (
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#111827' }}>{w.champion}</span>
            ) : (
              <span style={{ fontSize: '13px', color: '#d1d5db' }}>—</span>
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
