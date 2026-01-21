import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Affiliazione',
  description: 'Affiliazione a IKTA. Scopri come affiliare la tua palestra e i vantaggi di far parte della federazione.',
};

const benefits = [
  {
    title: 'Riconoscimento Ufficiale',
    description: 'La tua palestra diventa sede ufficiale IKTA con logo e certificazione.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
      </svg>
    ),
  },
  {
    title: 'Formazione Tecnica',
    description: 'Accesso ai corsi di formazione IKTA per i tuoi istruttori a tariffe agevolate.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
      </svg>
    ),
  },
  {
    title: 'Gare Ufficiali',
    description: 'I tuoi atleti possono partecipare a tutte le gare e campionati IKTA.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-2.749 0" />
      </svg>
    ),
  },
  {
    title: 'Assicurazione',
    description: 'Copertura assicurativa per tutti gli atleti tesserati IKTA.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    title: 'Visibilita',
    description: 'Inserimento sul sito ufficiale IKTA e sui canali social della federazione.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
  },
  {
    title: 'Supporto Tecnico',
    description: 'Assistenza continua dalla federazione per eventi, formazione e gestione.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
      </svg>
    ),
  },
];

const affiliationTypes = [
  {
    name: 'Affiliazione Base',
    price: '150',
    period: 'anno',
    features: [
      'Riconoscimento ufficiale IKTA',
      'Tesseramento fino a 20 atleti',
      'Partecipazione alle gare',
      'Assicurazione base',
      'Visibilita sul sito',
    ],
    recommended: false,
  },
  {
    name: 'Affiliazione Standard',
    price: '300',
    period: 'anno',
    features: [
      'Tutto il pacchetto Base',
      'Tesseramento fino a 50 atleti',
      'Sconto 10% sui corsi formazione',
      'Kit promozionale IKTA',
      'Priorita organizzazione eventi',
      'Supporto tecnico dedicato',
    ],
    recommended: true,
  },
  {
    name: 'Affiliazione Premium',
    price: '500',
    period: 'anno',
    features: [
      'Tutto il pacchetto Standard',
      'Tesseramento illimitato',
      'Sconto 20% sui corsi formazione',
      'Materiale marketing personalizzato',
      'Organizzazione eventi in sede',
      'Seminari esclusivi',
      'Canale diretto con la direzione',
    ],
    recommended: false,
  },
];

const requirements = [
  'Struttura adeguata per la pratica degli sport da combattimento',
  'Almeno un istruttore con qualifica IKTA o equivalente',
  'Copertura assicurativa della struttura',
  'Regolare posizione fiscale',
  'Accettazione dello statuto e del regolamento IKTA',
];

const steps = [
  {
    step: '1',
    title: 'Compila il Modulo',
    description: 'Invia la richiesta di affiliazione compilando il modulo online o scaricando il PDF.',
  },
  {
    step: '2',
    title: 'Verifica Requisiti',
    description: 'Il nostro team verifichera che la tua struttura soddisfi i requisiti richiesti.',
  },
  {
    step: '3',
    title: 'Pagamento',
    description: 'Effettua il pagamento della quota di affiliazione scelta.',
  },
  {
    step: '4',
    title: 'Attivazione',
    description: 'Ricevi le credenziali, il certificato e il materiale IKTA. Sei ufficialmente affiliato!',
  },
];

export default function AffiliaionePage() {
  return (
    <>
      {/* Hero Section */}
      <section style={{ marginTop: '100px' }} className="relative py-20 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex justify-center">
        <div className="w-full max-w-3xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Affiliazione IKTA
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Entra a far parte della famiglia IKTA. Affiliare la tua palestra
            significa accedere a formazione, gare, visibilita e supporto continuo.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">I Vantaggi dell&apos;Affiliazione</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Scopri tutti i benefici riservati alle palestre affiliate IKTA.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="card">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4 text-gray-700">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Piani di Affiliazione</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Scegli il piano piu adatto alla tua palestra.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {affiliationTypes.map((plan) => (
              <div key={plan.name} className={`card flex flex-col ${plan.recommended ? 'ring-2 ring-gray-900' : ''}`}>
                {plan.recommended && (
                  <span className="inline-block px-3 py-1 bg-gray-900 text-white text-xs font-medium rounded-full mb-3 self-start">
                    Consigliato
                  </span>
                )}
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">&euro;{plan.price}</span>
                  <span className="text-gray-500">/{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contatti"
                  className={`btn w-full justify-center ${plan.recommended ? 'btn-primary' : 'btn-outline'}`}
                >
                  Richiedi Affiliazione
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Requisiti</h2>
              <p className="text-gray-600 mb-6">
                Per affiliarsi a IKTA, la tua palestra deve soddisfare i seguenti requisiti:
              </p>
              <ul className="space-y-4">
                {requirements.map((req) => (
                  <li key={req} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-100 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-6">Come Affiliarsi</h3>
              <div className="space-y-6">
                {steps.map((step) => (
                  <div key={step.step} className="flex gap-4">
                    <div className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-semibold">{step.title}</h4>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-dark section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Pronto ad Affiliarti?
          </h2>
          <p className="text-gray-400 mb-8">
            Contattaci per ricevere tutte le informazioni sull&apos;affiliazione
            o per iniziare subito la procedura.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contatti" className="btn bg-white text-gray-900 hover:bg-gray-100 px-8">
              Contattaci
            </Link>
            <button className="btn border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8">
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Scarica Modulo PDF
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
