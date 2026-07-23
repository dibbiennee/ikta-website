import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: '/ikta-world/news' },
  title: 'News - IKTA World',
  description: 'News e comunicati ufficiali IKTA World: eventi, regolamenti, nuove sedi affiliate e appuntamenti agonistici internazionali.',
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
