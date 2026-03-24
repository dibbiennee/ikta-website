import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'New World Record - IKTA World',
  description: 'New World Record IKTA World.',
};

export default function NewWorldRecordPage() {
  return (
    <section style={{ marginTop: '100px', paddingBottom: '80px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>

        {/* Titolo */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span style={{ fontSize: '13px', fontWeight: 600, color: '#1e40af', textTransform: 'uppercase', letterSpacing: '2px' }}>
            IKTA World
          </span>
          <h1 style={{ fontSize: '40px', fontWeight: 700, marginTop: '8px' }}>New World Record</h1>
        </div>

        {/* Immagine */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
            maxWidth: '600px',
            width: '100%',
          }}>
            <Image
              src="/new-world-record.jpg"
              alt="New World Records 2025 - Sports Event"
              width={600}
              height={850}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>

        {/* Testo Record */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <p style={{ fontSize: '20px', fontWeight: 600, color: '#1e293b' }}>
            Benvenuto Gini, ha totalizzato 415 colpi di braccia in 60 secondi, battendo il record del 2024 detenuto da Mirko Gori
          </p>
        </div>

      </div>
    </section>
  );
}
