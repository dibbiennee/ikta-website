import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Discipline',
  description: 'Le discipline IKTA: Kick Boxing, Muay Thai, MMA, Krav Maga, Brazilian Jiu Jitsu, Boxe, Kung Fu Sanda e Karate. Regolamenti ufficiali e percorsi formativi dedicati.',
};

const disciplines = [
  {
    id: 'kick-boxing',
    name: 'Kick Boxing',
    category: 'Ring Sports',
    description: 'Sport da combattimento che combina tecniche di pugno derivate dalla boxe occidentale con calci delle arti marziali orientali.',
    features: ['Tecniche di pugno: jab, cross, hook, uppercut', 'Tecniche di calcio: front kick, roundhouse, side kick', 'Combinazioni e footwork'],
    levels: ['Light', 'KO', 'Professional'],
  },
  {
    id: 'muay-thai',
    name: 'Muay Thai',
    category: 'Ring Sports',
    description: 'Arte marziale thailandese conosciuta come "l\'arte delle otto armi" per l\'utilizzo di pugni, calci, gomiti e ginocchia.',
    features: ['Pugni e calci tradizionali', 'Tecniche di gomito (sok)', 'Tecniche di ginocchio (kao)', 'Clinch e tecniche in presa'],
    levels: ['Light', 'KO', 'Professional'],
  },
  {
    id: 'mma',
    name: 'MMA',
    category: 'Ring Sports',
    description: 'Le arti marziali miste combinano tecniche di striking e grappling. Disciplina completa che integra pugni, calci, lotta e sottomissioni.',
    features: ['Striking in piedi', 'Takedown e lotta', 'Ground and pound', 'Sottomissioni'],
    levels: ['Light', 'KO', 'Professional'],
  },
  {
    id: 'krav-maga',
    name: 'Krav Maga',
    category: 'Difesa Personale',
    description: 'Sistema di autodifesa israeliano sviluppato per situazioni reali. Enfatizza risposte istintive e tecniche efficaci sotto stress.',
    features: ['Difesa istintiva', 'Risposte sotto stress', 'Difesa da armi', 'Scenari realistici'],
    levels: [],
  },
  {
    id: 'bjj',
    name: 'Brazilian Jiu Jitsu',
    category: 'Grappling',
    description: 'Arte marziale brasiliana focalizzata sulla lotta a terra. L\'obiettivo è portare l\'avversario al suolo e sottometterlo.',
    features: ['Takedown e proiezioni', 'Controllo a terra', 'Sottomissioni (leve, strangolamenti)', 'Escape e transizioni'],
    levels: ['Light', 'KO', 'Professional'],
  },
  {
    id: 'boxe',
    name: 'Boxe',
    category: 'Ring Sports',
    description: 'Il pugilato classico, la nobile arte. Sport da combattimento che utilizza esclusivamente tecniche di pugno, difesa e movimento.',
    features: ['Tecniche di pugno fondamentali', 'Footwork e spostamenti', 'Guardia e parate', 'Schivate e contrattacchi'],
    levels: ['Light', 'KO', 'Professional'],
  },
  {
    id: 'kung-fu-sanda',
    name: 'Kung Fu Sanda',
    category: 'Ring Sports',
    description: 'La versione sportiva del Kung Fu cinese. Combina tecniche di calcio, pugno e proiezioni (shuai jiao).',
    features: ['Tecniche di pugno e calcio', 'Proiezioni e spazzate', 'Combattimento su pedana', 'Sistema a punti'],
    levels: ['Light', 'KO', 'Professional'],
  },
  {
    id: 'karate',
    name: 'Karate',
    category: 'Arti Marziali Tradizionali',
    description: 'Arte marziale giapponese che utilizza tecniche di pugno, calcio e percussione. Enfatizza disciplina e perfezionamento tecnico.',
    features: ['Kata (forme)', 'Kumite (combattimento)', 'Kihon (fondamentali)', 'Bunkai (applicazioni)'],
    levels: ['Light', 'KO', 'Professional'],
  },
];

export default function DisciplinePage() {
  return (
    <>
      {/* Disciplines Grid */}
      <section className="section" style={{ marginTop: '100px' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-5xl font-bold">Le Nostre Discipline</h1>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Dall&apos;arte tradizionale allo sport moderno, tutte le discipline IKTA con regolamenti e percorsi formativi dedicati.
            </p>
          </div>
          <div className="space-y-6 sm:space-y-8">
            {disciplines.map((discipline, index) => (
              <div
                key={discipline.id}
                id={discipline.id}
                className={`rounded-xl ${index % 2 === 0 ? 'bg-white border border-gray-100 shadow-md' : 'bg-gray-50 border border-gray-200'}`}
                style={{ padding: '1.5rem' }}
              >
                <div className="flex flex-col gap-4">
                  <div>
                    <span className="text-xs font-semibold text-[#1e40af] tracking-wider uppercase">{discipline.category}</span>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-1 mb-2">{discipline.name}</h2>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{discipline.description}</p>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {discipline.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                          <svg className="w-4 h-4 text-[#1e40af] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                          </svg>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {discipline.levels.length > 0 && (
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-xs text-gray-500 mb-2 font-medium">Livelli:</p>
                    <div className="flex flex-wrap gap-2">
                      {discipline.levels.map((level) => (
                        <span key={level} className="px-3 py-1 bg-[#1e40af]/10 text-[#1e40af] rounded-full text-xs sm:text-sm font-medium">
                          {level}
                        </span>
                      ))}
                    </div>
                  </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-dark section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Vuoi praticare una di queste discipline?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Trova la palestra IKTA più vicina a te o scopri i nostri corsi di formazione.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/palestre" className="btn bg-white text-gray-900 hover:bg-gray-100 px-8">
              Trova Palestra
            </Link>
            <Link href="/formazione" className="btn border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8">
              Diventa Istruttore
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
