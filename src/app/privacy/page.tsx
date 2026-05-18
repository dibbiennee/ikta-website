import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR) per il sito iktaworld.com.',
  robots: { index: true, follow: true },
};

const LAST_UPDATE = '6 maggio 2026';

export default function PrivacyPage() {
  return (
    <section className="section pt-28 md:pt-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="eyebrow">Informativa</span>
            <h1 className="mt-2">Privacy Policy</h1>
            <p className="text-sm text-gray-500 mt-3">
              Ultimo aggiornamento: {LAST_UPDATE}
            </p>
          </div>

          <div className="prose-content space-y-8 text-gray-700 text-base leading-relaxed">
            <p>
              La presente informativa descrive come IKTA - Intercontinental Kick Thai Boxing Association (di seguito anche &quot;IKTA&quot; o &quot;noi&quot;) tratta i dati personali raccolti tramite il sito iktaworld.com, ai sensi del Regolamento UE 2016/679 (GDPR) e del D.Lgs. 196/2003 e successive modifiche.
            </p>

            <div>
              <h2 className="!text-2xl mb-3">1. Titolare del trattamento</h2>
              <p>
                Titolare del trattamento dei dati e: <strong>IKTA - Intercontinental Kick Thai Boxing Association</strong>
                <br />
                Presidente e rappresentante legale: <strong>Massimo Brizi</strong>
                <br />
                Sede operativa: Via Ticino 15, 00053 Civitavecchia (RM), Italia
                <br />
                Email di contatto: <a href="mailto:massimo.brizi@tiscali.it" className="text-[#1e40af] underline">massimo.brizi@tiscali.it</a>
                <br />
                Telefono: +39 338 4012397
              </p>
            </div>

            <div>
              <h2 className="!text-2xl mb-3">2. Tipologie di dati raccolti</h2>
              <p>Il sito raccoglie le seguenti categorie di dati personali:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong>Dati di navigazione</strong>: indirizzo IP, tipo di browser, sistema operativo, pagine visitate, data e ora di accesso. Sono raccolti automaticamente dai sistemi informatici del sito e dai fornitori dei servizi tecnici (vedi sezione 6).</li>
                <li><strong>Dati di contatto forniti volontariamente</strong>: nome, cognome, indirizzo email, numero di telefono, eventuali messaggi inviati tramite i canali di contatto pubblicati sul sito (email, WhatsApp, modulo contatti).</li>
                <li><strong>Dati relativi a istruttori e atleti</strong>: per i tesseramenti, le iscrizioni a corsi e gare, l&apos;inserimento nell&apos;albo istruttori vengono trattati i dati anagrafici, sportivi e formativi necessari alla gestione del rapporto associativo.</li>
              </ul>
            </div>

            <div>
              <h2 className="!text-2xl mb-3">3. Finalita del trattamento</h2>
              <p>I dati vengono trattati esclusivamente per:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Erogazione dei servizi richiesti (informazioni sui corsi, affiliazione palestre, iscrizione a gare e tesseramenti)</li>
                <li>Gestione delle comunicazioni con utenti, atleti, istruttori e palestre affiliate</li>
                <li>Pubblicazione dell&apos;albo istruttori e dei ranking ufficiali, ove previsto dal regolamento federale</li>
                <li>Adempimento di obblighi di legge, contabili e fiscali</li>
                <li>Funzionamento tecnico del sito (statistiche aggregate di accesso, sicurezza informatica)</li>
              </ul>
              <p className="mt-3">
                <strong>Non utilizziamo i dati per profilazione, marketing automatizzato o cessione a terzi a scopo commerciale.</strong>
              </p>
            </div>

            <div>
              <h2 className="!text-2xl mb-3">4. Base giuridica</h2>
              <p>Il trattamento si fonda su una o piu delle seguenti basi giuridiche, a seconda dell&apos;attivita:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong>Consenso</strong> dell&apos;interessato (art. 6.1.a GDPR), per le comunicazioni facoltative e i cookie non strettamente necessari</li>
                <li><strong>Esecuzione di un contratto o misure precontrattuali</strong> (art. 6.1.b GDPR), per la gestione di iscrizioni, tesseramenti e affiliazioni</li>
                <li><strong>Obbligo legale</strong> (art. 6.1.c GDPR), per adempimenti contabili e fiscali</li>
                <li><strong>Legittimo interesse</strong> (art. 6.1.f GDPR), per la sicurezza informatica del sito e la pubblicazione dell&apos;albo istruttori (interesse della federazione e degli iscritti alla trasparenza dei diplomi rilasciati)</li>
              </ul>
            </div>

            <div>
              <h2 className="!text-2xl mb-3">5. Periodo di conservazione</h2>
              <p>I dati vengono conservati per il tempo strettamente necessario alle finalita per cui sono stati raccolti:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong>Dati di contatto e richieste informative</strong>: fino a 24 mesi dall&apos;ultimo contatto, salvo diversa richiesta dell&apos;interessato</li>
                <li><strong>Dati di tesseramento e affiliazione</strong>: per la durata del rapporto associativo e successivamente per il periodo previsto da obblighi di legge (10 anni per documenti contabili)</li>
                <li><strong>Albo istruttori</strong>: i diplomi rilasciati restano pubblicati a tempo indeterminato, salvo richiesta motivata di rimozione</li>
                <li><strong>Log di sistema</strong>: i log di accesso al server vengono conservati per un massimo di 30 giorni</li>
              </ul>
            </div>

            <div>
              <h2 className="!text-2xl mb-3">6. Soggetti destinatari dei dati</h2>
              <p>I dati possono essere trattati, per nostro conto e in qualita di responsabili del trattamento, dai seguenti fornitori tecnici:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong>Vercel Inc.</strong> (hosting del sito) - Server in Unione Europea. <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#1e40af] underline">Privacy policy Vercel</a></li>
                <li><strong>Indian Type Foundry (Fontshare)</strong> (CDN dei font) - Trasferimento al di fuori UE possibile. <a href="https://www.fontshare.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#1e40af] underline">Privacy policy Fontshare</a></li>
                <li><strong>Google Ireland Limited</strong> (Google Maps embed nelle pagine contatti e palestre) - Trasferimento extra-UE secondo standard contrattuali tipo. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#1e40af] underline">Privacy policy Google</a></li>
              </ul>
              <p className="mt-3">
                I dati non vengono ceduti, venduti o comunicati a soggetti terzi diversi da quelli sopra elencati e dalle autorita pubbliche eventualmente legittimate a riceverli per legge.
              </p>
            </div>

            <div>
              <h2 className="!text-2xl mb-3">7. Diritti dell&apos;interessato</h2>
              <p>In qualsiasi momento puoi esercitare i seguenti diritti previsti dagli articoli 15-22 del GDPR:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong>Accesso</strong>: ottenere conferma del trattamento e copia dei dati che ti riguardano</li>
                <li><strong>Rettifica</strong>: chiedere la correzione di dati inesatti o incompleti</li>
                <li><strong>Cancellazione</strong> (diritto all&apos;oblio): chiedere la rimozione dei dati, salvo obblighi di conservazione di legge</li>
                <li><strong>Limitazione</strong> del trattamento</li>
                <li><strong>Portabilita</strong>: ricevere i tuoi dati in formato strutturato e di uso comune</li>
                <li><strong>Opposizione</strong> al trattamento basato su legittimo interesse</li>
                <li><strong>Revoca del consenso</strong> in qualsiasi momento, senza pregiudicare la liceita del trattamento precedente</li>
                <li><strong>Reclamo all&apos;autorita di controllo</strong>: il <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-[#1e40af] underline">Garante per la Protezione dei Dati Personali</a></li>
              </ul>
              <p className="mt-3">
                Per esercitare i tuoi diritti scrivi a <a href="mailto:massimo.brizi@tiscali.it" className="text-[#1e40af] underline">massimo.brizi@tiscali.it</a>. Risponderemo entro 30 giorni.
              </p>
            </div>

            <div>
              <h2 className="!text-2xl mb-3">8. Cookie</h2>
              <p>
                Il sito utilizza cookie tecnici e servizi di terze parti che possono installare cookie sul tuo dispositivo. Per i dettagli e per gestire le preferenze consulta la nostra <Link href="/cookie-policy" className="text-[#1e40af] underline">Cookie Policy</Link>.
              </p>
            </div>

            <div>
              <h2 className="!text-2xl mb-3">9. Modifiche</h2>
              <p>
                IKTA si riserva di modificare la presente informativa per riflettere aggiornamenti normativi o tecnici. La data dell&apos;ultimo aggiornamento e indicata in cima al documento. Ti invitiamo a consultare periodicamente questa pagina.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
