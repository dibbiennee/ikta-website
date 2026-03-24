import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Titoli - IKTA World',
  description: 'Titoli IKTA World - Amateur e Professional.',
};

const titoliAmateur = [
  { level: 'World', price: '400' },
  { level: 'Intercontinental', price: '300' },
  { level: 'Continental', price: '250' },
  { level: 'Mediterranean', price: '200' },
  { level: 'National', price: '150' },
];

const titoliProfessional = [
  { level: 'World', price: '800' },
  { level: 'Intercontinental', price: '700' },
  { level: 'Continental', price: '500' },
  { level: 'Mediterranean', price: '300' },
  { level: 'National', price: '200' },
];

const galleria = [
  { src: '/fototitoli1.jpg', caption: 'Golden Warrior IKTA' },
  { src: '/fototitoli2.jpg', caption: 'Titolo Nazionale IKTA' },
  { src: '/fototitoli3.jpg', caption: 'Titolo Nazionale IKTA' },
  { src: '/fototitoli4.jpg', caption: 'Mediterranean Champion IKTA' },
  { src: '/fototitoli5.jpg', caption: 'World Champion IKTA' },
  { src: '/fotoworldprofessionaltitoli.jpg', caption: 'World Professional IKTA' },
  { src: '/fotoworldprofessionaltitoli1.jpg', caption: 'World Professional IKTA Champion' },
  { src: '/fotointercontinentalprofessionaltitoli.jpg', caption: 'Intercontinental Professional IKTA' },
  { src: '/fotocontinentalprofessionaltitoli.jpg', caption: 'Continental Professional IKTA Champion' },
  { src: '/fotocontinentalprofessionaltitoli1.jpg', caption: 'Continental Professional IKTA Champion' },
  { src: '/fototitoli6.jpg', caption: '' },
  { src: '/cinturagiallaikta.jpg', caption: 'New World IKTA' },
];

export default function TitoliPage() {
  return (
    <section style={{ marginTop: '100px', paddingBottom: '80px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>

        {/* Titolo */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span style={{ fontSize: '13px', fontWeight: 600, color: '#1e40af', textTransform: 'uppercase', letterSpacing: '2px' }}>
            IKTA World
          </span>
          <h1 style={{ fontSize: '40px', fontWeight: 700, marginTop: '8px' }}>Titoli</h1>
          <p style={{ fontSize: '16px', color: '#6b7280', maxWidth: '600px', margin: '12px auto 0' }}>
            Tutti i titoli ufficiali IKTA nelle categorie Amateur e Professional.
          </p>
        </div>

        {/* Tabelle Titoli */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', marginBottom: '80px' }}>

          {/* Amateur */}
          <div style={{
            background: 'linear-gradient(135deg, #1e3a8a, #1e40af)',
            borderRadius: '20px',
            padding: '36px 30px',
            color: 'white',
            boxShadow: '0 10px 30px rgba(30, 64, 175, 0.3)',
          }}>
            <div style={{ textAlign: 'center', marginBottom: '28px' }}>
              <span style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '3px', opacity: 0.7 }}>
                Title
              </span>
              <h3 style={{ fontSize: '28px', fontWeight: 700, marginTop: '6px' }}>Amateur</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {titoliAmateur.map((t) => (
                <div key={t.level} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderRadius: '12px',
                  padding: '16px 20px',
                }}>
                  <span style={{ fontSize: '15px', fontWeight: 600 }}>{t.level}</span>
                  <span style={{ fontSize: '18px', fontWeight: 700 }}>{t.price} &euro;</span>
                </div>
              ))}
            </div>
          </div>

          {/* Professional */}
          <div style={{
            background: 'linear-gradient(135deg, #7f1d1d, #b91c1c)',
            borderRadius: '20px',
            padding: '36px 30px',
            color: 'white',
            boxShadow: '0 10px 30px rgba(185, 28, 28, 0.3)',
          }}>
            <div style={{ textAlign: 'center', marginBottom: '28px' }}>
              <span style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '3px', opacity: 0.7 }}>
                Title
              </span>
              <h3 style={{ fontSize: '28px', fontWeight: 700, marginTop: '6px' }}>Professional</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {titoliProfessional.map((t) => (
                <div key={t.level} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderRadius: '12px',
                  padding: '16px 20px',
                }}>
                  <span style={{ fontSize: '15px', fontWeight: 600 }}>{t.level}</span>
                  <span style={{ fontSize: '18px', fontWeight: 700 }}>{t.price} &euro;</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Separatore */}
        <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', marginBottom: '60px' }} />

        {/* Galleria Cinture */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span style={{ fontSize: '13px', fontWeight: 600, color: '#1e40af', textTransform: 'uppercase', letterSpacing: '2px' }}>
            Gallery
          </span>
          <h3 style={{ fontSize: '32px', fontWeight: 700, marginTop: '8px' }}>Le Cinture IKTA</h3>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '24px',
        }}>
          {galleria.map((foto) => (
            <div key={foto.src} style={{
              backgroundColor: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            }}>
              <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', overflow: 'hidden' }}>
                <Image
                  src={foto.src}
                  alt={foto.caption}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 33vw"
                />
              </div>
              <div style={{ padding: '16px 20px' }}>
                <p style={{ fontSize: '14px', fontWeight: 600, color: '#1e293b' }}>{foto.caption}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
