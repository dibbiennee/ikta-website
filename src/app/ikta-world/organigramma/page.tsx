import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Organigramma - IKTA World',
  description: 'Organigramma IKTA World.',
};

const countries = [
  {
    name: 'USA',
    logo: '/loghi-world/logoamerica1.jpeg',
    members: [
      { name: 'Kyle Murray', location: 'San Diego, California', sector: 'Kick Boxing' },
      { name: 'Ron Murray', location: 'Orange County, California', sector: 'Kick Boxing / Kempo' },
      { name: 'Dorian Murray', location: 'Florida', sector: 'Kick Boxing' },
      { name: 'Carl Noel', location: 'North Miami Beach, Florida', sector: 'Kick Boxing & Karate' },
      { name: 'Axel Reyes', location: 'Imperial Beach, California', sector: 'Kick Boxing' },
    ],
  },
  {
    name: 'Brasile',
    logo: '/loghi-world/logobrasile1.jpg',
    members: [
      { name: 'Laecio Nunes', location: 'Vitória, Espírito Santo' },
    ],
  },
  {
    name: 'Bolivia',
    logo: '/loghi-world/logobolivia1.jpg',
    members: [
      { name: 'Ricardo Gois A Moraes', location: 'Santa Cruz de la Sierra' },
    ],
  },
  {
    name: 'Chile',
    logo: '/loghi-world/logochile1.jpg',
    members: [
      { name: 'Guillermo Enrique Mitchell Rojas', location: 'Quilpué' },
    ],
  },
  {
    name: 'Argentina',
    logo: '/loghi-world/logoargentina1.jpg',
    members: [
      { name: 'Ariel Aguirre', location: 'Chabas, Santa Fe' },
      { name: 'Martin Tello', location: '' },
    ],
  },
];

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

        {/* President */}
        <div style={{
          background: 'linear-gradient(135deg, #1e3a8a, #1e40af)',
          color: 'white',
          borderRadius: '20px',
          padding: '40px 30px',
          textAlign: 'center',
          marginBottom: '80px',
          boxShadow: '0 10px 30px rgba(30, 64, 175, 0.3)',
        }}>
          <span style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '3px', opacity: 0.7 }}>
            President
          </span>
          <h3 style={{ fontSize: '28px', fontWeight: 700, marginTop: '10px' }}>Hector Gonzalez</h3>
          <p style={{ fontSize: '14px', opacity: 0.7, marginTop: '6px' }}>Città del Messico</p>
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
              {country.members.map((m) => (
                <div key={m.name} style={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '16px',
                  padding: '24px 28px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                }}>
                  <span style={{ fontSize: '11px', fontWeight: 600, color: '#1e40af', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                    Manager
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
              ))}
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
