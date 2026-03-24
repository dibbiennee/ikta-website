import { ImageResponse } from 'next/og';
import { readFile } from 'fs/promises';
import { join } from 'path';

export const alt = 'IKTA Italia - Federazione Kick Boxing, Muay Thai, MMA e Krav Maga';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const logoData = await readFile(join(process.cwd(), 'public', 'logo-ikta.png'));
  const logoBase64 = `data:image/png;base64,${logoData.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'white',
        }}
      >
        <img
          src={logoBase64}
          width={400}
          height={400}
          style={{ objectFit: 'contain' }}
        />
      </div>
    ),
    { ...size }
  );
}
