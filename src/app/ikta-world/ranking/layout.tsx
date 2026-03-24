import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ranking - IKTA World',
  description: 'Ranking IKTA World.',
};

export default function RankingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
