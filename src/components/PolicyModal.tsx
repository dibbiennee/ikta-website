'use client';

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'cookie';
}

export default function PolicyModal({ isOpen, onClose, type }: PolicyModalProps) {
  if (!isOpen) return null;

  const content = {
    privacy: {
      title: 'Privacy Policy',
      text: `IKTA (Intercontinental Kick Thai Boxing Association) rispetta la tua privacy.

I dati personali raccolti (nome, email, telefono) vengono utilizzati esclusivamente per:
• Gestione delle richieste di affiliazione
• Comunicazioni relative a eventi e corsi
• Tesseramento atleti

I tuoi dati non vengono ceduti a terzi e sono trattati nel rispetto del GDPR (Regolamento UE 2016/679).

Per informazioni o cancellazione dei dati, contattaci a: massimo.brizi@tiscali.it`,
    },
    cookie: {
      title: 'Cookie Policy',
      text: `Questo sito utilizza solo cookie tecnici necessari al funzionamento.

Non utilizziamo cookie di profilazione o di terze parti per scopi pubblicitari.

Cookie utilizzati:
• Cookie di sessione (necessari per la navigazione)
• Cookie di preferenze (per salvare le tue scelte)

Continuando la navigazione accetti l'utilizzo dei cookie tecnici.`,
    },
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center"
      style={{ padding: '1rem' }}
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-lg max-h-[80vh] overflow-hidden shadow-2xl rounded-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200" style={{ padding: '1rem 1.5rem' }}>
          <h2 className="text-xl font-bold text-gray-900">{content[type].title}</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Chiudi"
          >
            <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto" style={{ padding: '1.5rem', maxHeight: 'calc(80vh - 60px)' }}>
          <p className="text-gray-700 text-sm whitespace-pre-line leading-relaxed">
            {content[type].text}
          </p>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200" style={{ padding: '1rem 1.5rem' }}>
          <button
            onClick={onClose}
            className="w-full btn btn-primary justify-center"
          >
            Ho capito
          </button>
        </div>
      </div>
    </div>
  );
}
