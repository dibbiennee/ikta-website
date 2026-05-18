import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Informativa sui cookie e sulle tecnologie di tracciamento utilizzate dal sito iktaworld.com.',
  robots: { index: true, follow: true },
};

const LAST_UPDATE = '6 maggio 2026';

const cookieRows = [
  {
    name: 'ikta-cookie-consent',
    type: 'Tecnico',
    duration: '1 anno',
    purpose: 'Memorizza la scelta espressa nel banner cookie. Consente di non ripresentare il banner ad ogni visita.',
    provider: 'IKTA (prima parte)',
  },
  {
    name: '_GRECAPTCHA / NID / SOCS',
    type: 'Terza parte',
    duration: 'Variabile (fino a 2 anni)',
    purpose: 'Utilizzati da Google Maps per il funzionamento e la sicurezza della mappa interattiva embeddata nelle pagine contatti e palestre.',
    provider: 'Google Ireland Ltd',
  },
];

export default function CookiePolicyPage() {
  return (
    <section className="section pt-28 md:pt-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="eyebrow">Informativa</span>
            <h1 className="mt-2">Cookie Policy</h1>
            <p className="text-sm text-gray-500 mt-3">
              Ultimo aggiornamento: {LAST_UPDATE}
            </p>
          </div>

          <div className="space-y-8 text-gray-700 text-base leading-relaxed">
            <div>
              <h2 className="!text-2xl mb-3">Cosa sono i cookie</h2>
              <p>
                I cookie sono piccoli file di testo che i siti web visitati salvano sul dispositivo dell&apos;utente. Servono a far funzionare il sito (cookie tecnici) o a raccogliere informazioni sulla navigazione (cookie analitici, di profilazione, di terze parti).
              </p>
            </div>

            <div>
              <h2 className="!text-2xl mb-3">Cookie utilizzati da iktaworld.com</h2>
              <p>
                Il sito utilizza esclusivamente cookie tecnici di prima parte e cookie di terze parti necessari al funzionamento di servizi tecnici (font e mappe). <strong>Non utilizziamo cookie analitici o di profilazione.</strong>
              </p>

              <div className="overflow-x-auto mt-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left p-3 font-semibold">Nome</th>
                      <th className="text-left p-3 font-semibold">Tipo</th>
                      <th className="text-left p-3 font-semibold">Durata</th>
                      <th className="text-left p-3 font-semibold">Finalita</th>
                      <th className="text-left p-3 font-semibold">Fornitore</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cookieRows.map((row) => (
                      <tr key={row.name} className="border-b border-gray-100">
                        <td className="p-3 font-mono text-xs">{row.name}</td>
                        <td className="p-3">{row.type}</td>
                        <td className="p-3">{row.duration}</td>
                        <td className="p-3 text-gray-600">{row.purpose}</td>
                        <td className="p-3 text-gray-600">{row.provider}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="!text-2xl mb-3">Servizi di terze parti</h2>
              <p>
                Il sito integra alcuni servizi forniti da terze parti che possono raccogliere dati di navigazione (es. indirizzo IP) anche senza installare cookie:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2 mt-3">
                <li>
                  <strong>Vercel Inc.</strong> (hosting): registra log tecnici di accesso (IP, user agent) per finalita di sicurezza e disponibilita del servizio.{' '}
                  <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#1e40af] underline">Privacy policy</a>
                </li>
                <li>
                  <strong>Fontshare (Indian Type Foundry)</strong>: distribuisce i font tramite CDN. Riceve l&apos;IP del visitatore al momento del caricamento del foglio di stile.{' '}
                  <a href="https://www.fontshare.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#1e40af] underline">Privacy policy</a>
                </li>
                <li>
                  <strong>Google Maps (Google Ireland Ltd)</strong>: visualizzazione delle mappe nelle pagine contatti e palestre. Installa cookie e raccoglie dati di navigazione secondo le proprie policy.{' '}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#1e40af] underline">Privacy policy</a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="!text-2xl mb-3">Come gestire i cookie</h2>
              <p>
                Puoi modificare in qualsiasi momento la tua scelta sul banner cookie. Inoltre, ogni browser permette di cancellare i cookie gia salvati e di bloccare l&apos;installazione di nuovi cookie:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2 mt-3">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#1e40af] underline">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/it/kb/Eliminare%20i%20cookie" target="_blank" rel="noopener noreferrer" className="text-[#1e40af] underline">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#1e40af] underline">Apple Safari</a></li>
                <li><a href="https://support.microsoft.com/it-it/microsoft-edge" target="_blank" rel="noopener noreferrer" className="text-[#1e40af] underline">Microsoft Edge</a></li>
              </ul>
              <p className="mt-3 text-sm text-gray-600">
                Disabilitando i cookie tecnici alcune funzionalita del sito potrebbero non essere disponibili (es. la visualizzazione delle mappe).
              </p>
            </div>

            <div>
              <h2 className="!text-2xl mb-3">Riferimenti</h2>
              <p>
                Per il trattamento dei dati personali oltre ai cookie consulta la <Link href="/privacy" className="text-[#1e40af] underline">Privacy Policy</Link>.
                Per ogni richiesta scrivi a <a href="mailto:massimo.brizi@tiscali.it" className="text-[#1e40af] underline">massimo.brizi@tiscali.it</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
