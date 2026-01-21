import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Discipline',
  description: 'Le discipline di IKTA: Kick Boxing, Muay Thai, CSE Combat System, Krav Maga, BJJ, Boxe, Kung Fu Sanda, Karate e Armed Combat.',
};

const disciplines = [
  {
    id: 'kick-boxing',
    name: 'Kick Boxing',
    category: 'Ring Sports',
    description: 'Sport da combattimento che combina tecniche di pugno derivate dalla boxe occidentale con calci delle arti marziali orientali.',
    features: ['Tecniche di pugno: jab, cross, hook, uppercut', 'Tecniche di calcio: front kick, roundhouse, side kick', 'Combinazioni e footwork'],
    levels: ['Light Contact', 'Semi Contact', 'Full Contact'],
  },
  {
    id: 'muay-thai',
    name: 'Muay Thai',
    category: 'Ring Sports',
    description: 'Arte marziale thailandese conosciuta come "l\'arte delle otto armi" per l\'utilizzo di pugni, calci, gomiti e ginocchia.',
    features: ['Pugni e calci tradizionali', 'Tecniche di gomito (sok)', 'Tecniche di ginocchio (kao)', 'Clinch e tecniche in presa'],
    levels: ['Amatoriale', 'Semi-Pro', 'Professionistico'],
  },
  {
    id: 'krav-maga',
    name: 'Krav Maga',
    category: 'Difesa Personale',
    description: 'Sistema di autodifesa israeliano sviluppato per situazioni reali. Enfatizza risposte istintive e tecniche efficaci sotto stress.',
    features: ['Difesa istintiva', 'Risposte sotto stress', 'Difesa da armi', 'Scenari realistici'],
    levels: ['P1-P5', 'G1-G5', 'E1-E5'],
  },
  {
    id: 'bjj',
    name: 'Brazilian Jiu Jitsu',
    category: 'Grappling',
    description: 'Arte marziale brasiliana focalizzata sulla lotta a terra. L\'obiettivo è portare l\'avversario al suolo e sottometterlo.',
    features: ['Takedown e proiezioni', 'Controllo a terra', 'Sottomissioni (leve, strangolamenti)', 'Escape e transizioni'],
    levels: ['Bianca', 'Blu', 'Viola', 'Marrone', 'Nera'],
  },
  {
    id: 'boxe',
    name: 'Boxe',
    category: 'Ring Sports',
    description: 'Il pugilato classico, la nobile arte. Sport da combattimento che utilizza esclusivamente tecniche di pugno, difesa e movimento.',
    features: ['Tecniche di pugno fondamentali', 'Footwork e spostamenti', 'Guardia e parate', 'Schivate e contrattacchi'],
    levels: ['Amatoriale', 'Professionistico'],
  },
  {
    id: 'kung-fu-sanda',
    name: 'Kung Fu Sanda',
    category: 'Ring Sports',
    description: 'La versione sportiva del Kung Fu cinese. Combina tecniche di calcio, pugno e proiezioni (shuai jiao).',
    features: ['Tecniche di pugno e calcio', 'Proiezioni e spazzate', 'Combattimento su pedana', 'Sistema a punti'],
    levels: ['Amatoriale', 'Professionistico'],
  },
  {
    id: 'karate',
    name: 'Karate',
    category: 'Arti Marziali Tradizionali',
    description: 'Arte marziale giapponese che utilizza tecniche di pugno, calcio e percussione. Enfatizza disciplina e perfezionamento tecnico.',
    features: ['Kata (forme)', 'Kumite (combattimento)', 'Kihon (fondamentali)', 'Bunkai (applicazioni)'],
    levels: ['Kyu (colorate)', 'Dan (nere)'],
  },
  {
    id: 'armed-combat',
    name: 'Armed Combat',
    category: 'Specialità',
    description: 'Disciplina dedicata al combattimento con armi tradizionali e moderne. Include tecniche di scherma, bastone e coltello.',
    features: ['Tecniche con bastone', 'Scherma sportiva', 'Difesa da armi', 'Combattimento storico'],
    levels: ['Base', 'Avanzato', 'Istruttore'],
  },
];

export default function DisciplinePage() {
  return (
    <>
      {/* Hero Section */}
      <section style={{ marginTop: '100px' }} className="relative py-20 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex justify-center">
        <div className="w-full max-w-3xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Le Nostre Discipline
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Dall&apos;arte tradizionale allo sport moderno. IKTA copre tutte le principali
            discipline di combattimento con regolamenti e percorsi formativi dedicati.
          </p>
        </div>
      </section>

      {/* Disciplines Grid */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {disciplines.map((discipline, index) => (
              <div
                key={discipline.id}
                id={discipline.id}
                className={`rounded-xl p-6 md:p-8 ${index % 2 === 0 ? 'bg-white border border-gray-100 shadow-md' : 'bg-gray-50'}`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <span className="text-xs font-semibold text-[#1e40af] tracking-wider uppercase">{discipline.category}</span>
                    <h2 className="text-2xl md:text-3xl font-bold mt-1 mb-3">{discipline.name}</h2>
                    <p className="text-gray-600 mb-4">{discipline.description}</p>

                    <div className="grid sm:grid-cols-2 gap-2 mb-4">
                      {discipline.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                          <svg className="w-4 h-4 text-[#1e40af] flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                          </svg>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 md:justify-end">
                    {discipline.levels.map((level) => (
                      <span key={level} className="px-3 py-1 bg-[#1e40af]/10 text-[#1e40af] rounded-full text-sm font-medium">
                        {level}
                      </span>
                    ))}
                  </div>
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
          <p className="text-gray-400 mb-8">
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
