import { Metadata } from 'next';
import Image from 'next/image';
import { dirigenza, direttoriTecnici, regionali } from '@/data/organigramma-italia';

export const metadata: Metadata = {
  alternates: { canonical: '/chi-siamo/organigramma' },
  title: 'Organigramma - IKTA Italia',
  description: 'Organigramma IKTA Italia.',
};

export default function OrganigrammaItaliaPage() {
  return (
    <section style={{ marginTop: '100px', paddingBottom: '80px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>

        {/* Titolo */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <Image
            src="/logoitaliaikta.jpg"
            alt="IKTA Italia"
            width={100}
            height={100}
            style={{ borderRadius: '50%', objectFit: 'cover', width: '100px', height: '100px', margin: '0 auto 20px' }}
          />
          <span style={{ fontSize: '13px', fontWeight: 600, color: '#1e40af', textTransform: 'uppercase', letterSpacing: '2px' }}>
            IKTA Italia
          </span>
          <h1 style={{ fontSize: '40px', fontWeight: 700, marginTop: '8px' }}>Organigramma</h1>
        </div>

        {/* Dirigenza */}
        <div style={{ marginBottom: '70px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <Image
              src="/logoitaliaikta.jpg"
              alt="IKTA Italia"
              width={56}
              height={56}
              style={{ borderRadius: '50%', objectFit: 'cover', width: '56px', height: '56px' }}
            />
            <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#1e40af' }}>Dirigenza</h3>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '20px',
          }}>
            {dirigenza.map((m) => (
              <div key={m.name + m.role} style={{
                backgroundColor: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: '16px',
                padding: '24px 28px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              }}>
                <span style={{ fontSize: '11px', fontWeight: 600, color: '#1e40af', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                  {m.role}
                </span>
                <h4 style={{ fontSize: '16px', fontWeight: 700, marginTop: '10px' }}>{m.name}</h4>
              </div>
            ))}
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', marginTop: '70px' }} />
        </div>

        {/* Direttori Tecnici */}
        <div style={{ marginBottom: '70px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <Image
              src="/logoitaliaikta.jpg"
              alt="IKTA Italia"
              width={56}
              height={56}
              style={{ borderRadius: '50%', objectFit: 'cover', width: '56px', height: '56px' }}
            />
            <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#1e40af' }}>Direttori Tecnici</h3>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '20px',
          }}>
            {direttoriTecnici.map((m) => (
              <div key={m.name + m.discipline} style={{
                backgroundColor: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: '16px',
                padding: '24px 28px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              }}>
                <span style={{ fontSize: '11px', fontWeight: 600, color: '#1e40af', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                  {'role' in m && m.role ? m.role : 'Direttore Tecnico'}
                </span>
                <h4 style={{ fontSize: '16px', fontWeight: 700, marginTop: '10px' }}>{m.name}</h4>
                <p style={{ fontSize: '12px', color: '#93a3bf', marginTop: '8px', fontWeight: 500 }}>
                  {m.discipline}
                </p>
              </div>
            ))}
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', marginTop: '70px' }} />
        </div>

        {/* Responsabili Regionali */}
        <div>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span style={{ fontSize: '13px', fontWeight: 600, color: '#1e40af', textTransform: 'uppercase', letterSpacing: '2px' }}>
              Responsabili
            </span>
            <h3 style={{ fontSize: '28px', fontWeight: 700, marginTop: '8px' }}>Responsabili Regionali</h3>
          </div>

          {regionali.map((region, idx) => (
            <div key={region.name} style={{ marginBottom: idx < regionali.length - 1 ? '70px' : '0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <Image
                  src={region.logo}
                  alt={region.name}
                  width={56}
                  height={56}
                  style={{ borderRadius: '50%', objectFit: 'cover', width: '56px', height: '56px' }}
                />
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#1e40af' }}>{region.name}</h3>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '20px',
              }}>
                {region.members.map((m) => (
                  <div key={m.name} style={{
                    backgroundColor: '#fff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '16px',
                    padding: '24px 28px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  }}>
                    <span style={{ fontSize: '11px', fontWeight: 600, color: '#1e40af', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                      Responsabile Regionale
                    </span>
                    <h4 style={{ fontSize: '16px', fontWeight: 700, marginTop: '10px' }}>{m.name}</h4>
                  </div>
                ))}
              </div>

              {idx < regionali.length - 1 && (
                <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', marginTop: '70px' }} />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
