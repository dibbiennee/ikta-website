import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cinture Kick Boxe - IKTA World',
  description: 'Cinture Kick Boxing IKTA World.',
};

export default function CintureLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
