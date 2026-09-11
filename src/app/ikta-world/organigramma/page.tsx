import { Metadata } from 'next';
import Image from 'next/image';
import { countries } from '@/data/organigramma-world';

export const metadata: Metadata = {
  alternates: { canonical: '/ikta-world/organigramma' },
  title: 'Organigramma - IKTA World',
  description: 'Organigramma IKTA World.',
};

export default function OrganigrammaWorldPage() {
  return (
    <section style={{ marginTop: '100px', paddingBottom: '80px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>

        {/* Titolo */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span style={{ fontSize: '13px', fontWeight: 600, color: '#1e40af', textTransform: 'uppercase', letterSpacing: '2px' }}>
            IKTA World
          </span>
          <h1 style={{ fontSize: '40px', fontWeight: 700, marginTop: '8px' }}>Organigramma</h1>
        </div>

        {/* President (Messico) */}
        <div style={{ marginBottom: '70px' }}>

          {/* Logo + Nome nazione */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <Image
              src="/loghi-world/logomessico1.jpg"
              alt="Messico"
              width={56}
              height={56}
              style={{ borderRadius: '50%', objectFit: 'cover', width: '56px', height: '56px' }}
            />
            <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#1e40af' }}>Messico</h3>
          </div>

          {/* Card President */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '20px',
          }}>
            <div style={{
              backgroundColor: '#fffdf5',
              border: '2px solid #eab308',
              borderRadius: '16px',
              padding: '24px 28px',
              boxShadow: '0 6px 18px rgba(234,179,8,0.20)',
            }}>
              <span style={{ fontSize: '11px', fontWeight: 700, color: '#ca8a04', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                President
              </span>
              <h4 style={{ fontSize: '16px', fontWeight: 700, marginTop: '10px' }}>Hector Gonzalez</h4>
              <p style={{ fontSize: '14px', color: '#6b7280', marginTop: '6px' }}>Città del Messico</p>
            </div>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', marginTop: '70px' }} />
        </div>

        {/* Nazioni */}
        {countries.map((country, idx) => (
          <div key={country.name} style={{ marginBottom: idx < countries.length - 1 ? '70px' : '0' }}>

            {/* Bandiera + Nome nazione */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <Image
                src={country.logo}
                alt={country.name}
                width={56}
                height={56}
                style={{ borderRadius: '50%', objectFit: 'cover', width: '56px', height: '56px' }}
              />
              <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#1e40af' }}>{country.name}</h3>
            </div>

            {/* Card manager */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '20px',
            }}>
              {country.members.map((m) => {
                const role = 'role' in m ? (m as { role?: string }).role : undefined;
                const isPresident = !!role;
                return (
                <div key={m.name} style={{
                  backgroundColor: isPresident ? '#fffdf5' : '#fff',
                  border: isPresident ? '2px solid #eab308' : '1px solid #e5e7eb',
                  borderRadius: '16px',
                  padding: '24px 28px',
                  boxShadow: isPresident ? '0 6px 18px rgba(234,179,8,0.20)' : '0 2px 8px rgba(0,0,0,0.06)',
                }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: isPresident ? '#ca8a04' : '#1e40af', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                    {role ?? 'Manager'}
                  </span>
                  <h4 style={{ fontSize: '16px', fontWeight: 700, marginTop: '10px' }}>{m.name}</h4>
                  {m.location && (
                    <p style={{ fontSize: '14px', color: '#6b7280', marginTop: '6px' }}>{m.location}</p>
                  )}
                  {'sector' in m && (m as { sector?: string }).sector && (
                    <p style={{ fontSize: '12px', color: '#93a3bf', marginTop: '8px', fontWeight: 500 }}>
                      {(m as { sector: string }).sector}
                    </p>
                  )}
                </div>
                );
              })}
            </div>

            {/* Separatore tra nazioni */}
            {idx < countries.length - 1 && (
              <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', marginTop: '70px' }} />
            )}
          </div>
        ))}

      </div>
    </section>
  );
}
