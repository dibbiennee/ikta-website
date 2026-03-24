import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News - IKTA World',
  description: 'News e aggiornamenti IKTA World.',
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
