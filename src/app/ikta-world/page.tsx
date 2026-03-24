import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'IKTA World',
  description: 'IKTA World - Organigramma, Titoli, Ranking, Cinture e Record mondiali.',
};

const sections = [
  { name: 'Organigramma', href: '/ikta-world/organigramma' },
  { name: 'Titoli', href: '/ikta-world/titoli' },
  { name: 'Ranking', href: '/ikta-world/ranking' },
  { name: 'Cinture Kick Boxe', href: '/ikta-world/cinture-kick-boxe' },
  { name: 'Cinture Krav Maga', href: '/ikta-world/cinture-krav-maga' },
  { name: 'New World Record', href: '/ikta-world/new-world-record' },
];

export default function IktaWorldPage() {
  return (
    <section className="section" style={{ marginTop: '100px' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-[#1e40af] tracking-wider uppercase">Internazionale</span>
          <h1 className="text-3xl md:text-5xl font-bold mt-2">IKTA World</h1>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            La nostra presenza nel mondo degli sport da combattimento a livello internazionale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {sections.map((section) => (
            <Link
              key={section.name}
              href={section.href}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 text-center group hover:-translate-y-1"
            >
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#1e40af] transition-colors">
                {section.name}
              </h3>
              <svg className="w-5 h-5 mx-auto mt-3 text-gray-400 group-hover:text-[#1e40af] transition-colors" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
