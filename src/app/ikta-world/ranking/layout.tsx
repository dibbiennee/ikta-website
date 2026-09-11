import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: '/ikta-world/ranking' },
  title: 'Ranking - IKTA World',
  description: 'Ranking ufficiali IKTA World: campioni mondiali e intercontinentali per disciplina e categoria di peso, dilettanti e professionisti.',
};

export default function RankingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
