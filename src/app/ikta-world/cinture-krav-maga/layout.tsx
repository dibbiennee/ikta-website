import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: '/ikta-world/cinture-krav-maga' },
  title: 'Cinture Krav Maga - IKTA World',
  description: 'Cinture Krav Maga IKTA World.',
};

export default function CintureKravMagaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
