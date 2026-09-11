'use client';

import { direttoriTecnici, istruttori, belts } from '@/data/cinture-krav-maga';

export default function CintureKravMagaPage() {
  return (
    <section style={{ marginTop: '100px', paddingBottom: '80px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>

        {/* Titolo */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span style={{ fontSize: '13px', fontWeight: 600, color: '#1e40af', textTransform: 'uppercase', letterSpacing: '2px' }}>
            IKTA World
          </span>
          <h1 style={{ fontSize: '40px', fontWeight: 700, marginTop: '8px' }}>Cinture Krav Maga</h1>
        </div>

        {/* Direttori Tecnici */}
        <div style={{ marginBottom: '50px' }}>
          <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#1e40af', marginBottom: '20px' }}>Direttore Tecnico Nazionale</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '16px',
          }}>
            {direttoriTecnici.map((d) => (
              <div key={d.name + d.role} style={{
                backgroundColor: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: '16px',
                padding: '24px 28px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              }}>
                <span style={{ fontSize: '11px', fontWeight: 600, color: '#1e40af', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                  {d.role}
                </span>
                <h4 style={{ fontSize: '16px', fontWeight: 700, marginTop: '10px' }}>{d.name}</h4>
                {d.date && (
                  <p style={{ fontSize: '12px', color: '#6b7280', marginTop: '6px' }}>{d.date}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Istruttori Ufficiali */}
        <div style={{ marginBottom: '50px' }}>
          <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#1e40af', marginBottom: '20px' }}>Istruttori Ufficiali Krav Maga IKTA</h3>
          <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #e5e7eb' }}>
            {istruttori.map((m, i) => (
              <div key={m.name} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 20px',
                backgroundColor: i % 2 === 0 ? '#fff' : '#f9fafb',
                borderBottom: i < istruttori.length - 1 ? '1px solid #f3f4f6' : 'none',
              }}>
                <span style={{ fontSize: '14px', fontWeight: 500, color: '#111827' }}>{m.name}</span>
                <span style={{ fontSize: '12px', color: '#6b7280', whiteSpace: 'nowrap', marginLeft: '16px' }}>Istruttore Krav Maga - {m.date}</span>
              </div>
            ))}
          </div>
          <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', marginTop: '50px' }} />
        </div>

        {/* Navigation Dropdown */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '60px',
          position: 'sticky',
          top: '80px',
          zIndex: 40,
          backgroundColor: 'rgba(255,255,255,0.95)',
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
              minWidth: '340px',
            }}
          >
            <option value="" disabled>Vai alla cintura...</option>
            {belts.map((b) => (
              <option key={b.id} value={b.id}>{b.label}</option>
            ))}
          </select>
        </div>

        {/* Belt Sections */}
        {belts.map((belt, idx) => (
          <div key={belt.id} style={{ marginBottom: idx < belts.length - 1 ? '60px' : '0' }}>
            <div id={belt.id} style={{ scrollMarginTop: '160px' }} />

            {/* Belt Header */}
            <div style={{
              background: belt.color,
              color: belt.textColor || 'white',
              borderRadius: '16px',
              padding: '20px 28px',
              marginBottom: '20px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            }}>
              <h3 style={{ fontSize: '20px', fontWeight: 700 }}>{belt.label}</h3>
              <span style={{ fontSize: '14px', fontWeight: 600, opacity: 0.8 }}>
                {belt.members.length} {belt.members.length === 1 ? 'membro' : 'membri'}
              </span>
            </div>

            {/* Members */}
            {belt.members.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {belt.members.map((m, i) => (
                  <div
                    key={`${m.name}-${m.date}-${i}`}
                    className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-2.5"
                  >
                    <span className="text-sm font-medium text-gray-900">{m.name}</span>
                    <span className="ml-4 whitespace-nowrap text-xs text-gray-500">{m.date}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{
                borderRadius: '12px',
                border: '1px solid #e5e7eb',
                padding: '20px',
                textAlign: 'center',
                color: '#9ca3af',
                fontSize: '14px',
              }}>
                —
              </div>
            )}

            {idx < belts.length - 1 && (
              <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', marginTop: '60px' }} />
            )}
          </div>
        ))}

      </div>
    </section>
  );
}
