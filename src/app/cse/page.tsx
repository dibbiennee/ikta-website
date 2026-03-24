import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'CSE - Combat System Evolution',
  description: 'Combat System Evolution: il sistema innovativo di apprendimento delle arti marziali basato su biomeccanica, principi trasversali e preparazione mentale.',
};

export default function CSEPage() {
  return (
    <>
      {/* Intro Section */}
      <section id="cos-e" className="section" style={{ marginTop: '100px' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-[#1e40af] tracking-wider uppercase">Introduzione</span>
              <h1 className="text-3xl md:text-5xl font-bold mt-2">Cos&apos;è il CSE?</h1>
            </div>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                <strong>Combat System Evolution</strong> è il primo sistema di apprendimento, senza precedenti,
                basato sulle tecniche che derivano dai vari sport da combattimento unito alla filosofia
                e ai principi delle arti marziali.
              </p>
              <p>
                Un sistema valido sia per la <strong>difesa personale</strong>, sia per gli <strong>sport da combattimento</strong>,
                adattabile a tutti gli stili classici e moderni. Un sistema completo dove ogni persona può
                seguire un percorso di formazione, adattare a questo percorso i suoi bisogni e arrivare
                al raggiungimento del proprio obiettivo, lezione dopo lezione.
              </p>
              <p>
                Da come indica il termine &quot;evolution&quot;, il percorso di apprendimento ha come scopo principale
                un sistema di combattimento che si modifica nel tempo, adattandosi ai cambiamenti futuri.
                È un sistema innovativo costituito da un programma scrupoloso, che integra il meglio degli
                sport da combattimento e delle arti marziali avendo come base di partenza la <strong>fisica</strong> e
                la <strong>bio-meccanica del corpo</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Perché CSE */}
      <section id="perche" className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-[#1e40af] tracking-wider uppercase">La Motivazione</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-2">Perché Combat System Evolution?</h2>
            </div>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Dopo anni di insegnamento e moltissimi allievi, buona parte dei quali ha conseguito ottimi
                successi sia a livello agonistico che di insegnamento, ho sempre percepito un qualcosa di
                fondo che mancava.
              </p>
              <p>
                <strong>Manca un obiettivo a lungo termine</strong>, con delle mete chiare e definite nel tempo.
                Chi va in palestra ha già un obiettivo: dimagrire, imparare a combattere, passare il tempo,
                sapersi difendere. Tuttavia, dopo un primo ciclo di insegnamento, se non si offre qualcosa
                di concreto, di tangibile, l&apos;allievo potrebbe perdere lo stimolo e abbandonare.
              </p>
              <div className="bg-white rounded-xl p-6 border-l-4 border-[#1e40af]">
                <p className="italic text-gray-700">
                  Se si chiedesse agli istruttori quanti allievi hanno avuto nel corso degli anni e quanti
                  gliene sono rimasti, tutti risponderebbero: più o meno il 5%.
                </p>
              </div>
              <p>
                Ogni persona ha bisogno di cambiamenti, di qualcosa di nuovo, e soprattutto ha bisogno di
                <strong> obiettivi tangibili</strong>, obiettivi che al loro raggiungimento possano gratificare veramente.
                L&apos;obiettivo tangibile, legato al senso di gratificazione e di miglioramento, deve essere
                sempre lo stimolo giusto per mantenere l&apos;apprendimento nella soglia del piacere e non del dovere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filosofia */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-[#1e40af] tracking-wider uppercase">Approccio</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-2">Uomo o Tradizione Culturale?</h2>
            </div>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                In linea generale tutte le arti marziali, così come anche i sistemi di difesa personale,
                sono fortemente influenzati dalla cultura che li ha generati, rimanendo sempre uguali a sé stessi.
              </p>
              <p>
                Essi propongono una visione di parte che <strong>non mette al centro le capacità dell&apos;uomo</strong> ma
                la cultura del popolo cinese, del popolo giapponese, ecc. Perfino i sistemi di derivazione
                militare come il Krav Maga, alla fine, risentono del background culturale in cui sono stati creati.
              </p>
              <p>
                Durante venticinque anni di ricerca e studio degli sport da combattimento e delle arti marziali,
                osservando maestri provenienti da culture completamente diverse, ho notato delle somiglianze ed
                ho capito che, <strong>tecniche a parte, a livello bio-meccanico, tutte le arti marziali del mondo
                sono molto simili tra di loro</strong>.
              </p>
              <div className="bg-[#1e40af]/5 rounded-xl p-6">
                <p className="text-gray-700">
                  Concentrandomi sulla bio-meccanica sono riuscito a determinare i <strong>principi motori</strong> che
                  stanno dietro alle tecniche più efficaci del mondo. Questa decostruzione degli stili e delle
                  tecniche alla ricerca dei principi mi ha permesso di creare una nuova arte che non copia gli
                  esercizi dai vari stili ma che trasmette al praticante le componenti motorie e bio-meccaniche
                  più efficaci.
                </p>
              </div>
              <p>
                Una tecnica non è migliore perché inventata da uno specifico popolo o da un maestro famoso,
                ma lo è se, a parità di premesse, risolve il problema in modo più efficiente: in modo più
                semplice (meno movimenti), più veloce (tempismo migliore) e richiedendo meno spostamenti
                (migliore gestione della distanza).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Preparazione Mentale */}
      <section id="preparazione-mentale" className="section bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-[#eab308] tracking-wider uppercase">Mente e Corpo</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-2">La Preparazione Mentale</h2>
            </div>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Ho sempre dato una grandissima importanza a tutto l&apos;aspetto mentale, che sta alla base
                della tecnica e dell&apos;atteggiamento da tenere prima, durante e dopo la fase di combattimento.
              </p>
              <div className="bg-white/10 rounded-xl p-6 border-l-4 border-[#eab308]">
                <p className="italic text-white">
                  &quot;Spesso il nostro avversario non è fuori di noi, ma dentro di noi. Dobbiamo prima
                  conoscere ciò che abbiamo dentro, prima di affrontare un avversario.&quot;
                </p>
              </div>
              <p>
                Siamo circondati da paure, ansie e insicurezze, che spesso ci bloccano, impedendoci di
                essere padroni di noi stessi. La conquista maggiore è riuscire a <strong>padroneggiare le nostre
                paure</strong> e renderle nostre amiche, utilizzandole come stimolo per farci riscaldare e non
                farci bruciare.
              </p>
              <div className="bg-white/10 rounded-xl p-6 border-l-4 border-[#eab308]">
                <p className="italic text-white">
                  &quot;Siamo come dei pescatori in mare: vediamo l&apos;orizzonte chiaro in lontananza,
                  ma non riusciamo a vedere il fondo del mare anche di pochi metri.&quot;
                </p>
              </div>
              <p>
                I numerosi incontri affrontati mi hanno insegnato che buona parte del combattimento può
                essere vinta prima di essere combattuta. Anche le migliori tecniche del mondo non possono
                niente se mancano il coraggio e la determinazione per agire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Didattica */}
      <section id="didattica" className="section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-[#1e40af] tracking-wider uppercase">Metodo</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-2">La Didattica nel CSE</h2>
            </div>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                La didattica è uno dei punti centrali del CSE: una buona didattica è ciò che permette ad
                un allievo motivato di crescere costantemente attraverso l&apos;allenamento.
              </p>
              <p>
                Il settore delle arti marziali è tradizionalmente povero di spiegazioni e il grosso della
                comprensione è affidato alla tradizione e alla ripetizione di gesti. Il CSE si pone in
                contrapposizione a questa logica: <strong>non si tratta solo di spiegare meglio le singole tecniche
                ma di trasmettere dei principi</strong> che permettano di comprendere nella loro interezza le
                implicazioni e la portata di ogni singolo gesto.
              </p>
              <div className="bg-[#1e40af] text-white rounded-xl p-6 text-center">
                <p className="text-xl font-semibold">
                  &quot;L&apos;obiettivo non è insegnare qualcosa di nuovo, ma insegnare in maniera nuova.&quot;
                </p>
              </div>
              <p>
                Ogni lezione ha una sua importanza che dà valore ad ogni singolo allenamento. Con il CSE
                non ci sarà nessuna mercificazione dei diplomi. Gli attestati di passaggio di grado e di
                insegnamento saranno rilasciati solo a persone veramente qualificate e a insegnanti meritevoli.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Il Percorso - Cinture */}
      <section id="cinture" className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-[#1e40af] tracking-wider uppercase">Progressione</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-2">Il Percorso delle Cinture</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Un sistema strutturato di gradi che permette all&apos;allievo di avere obiettivi chiari e tangibili.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/cse-cinture.jpg"
                alt="Schema delle cinture CSE"
                width={900}
                height={600}
                className="rounded-xl shadow-lg object-contain max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filosofia d'insegnamento */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-[#1e40af] tracking-wider uppercase">Valori</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-2">La Filosofia d&apos;Insegnamento</h2>
            </div>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Una delle cose che caratterizza il CSE è l&apos;approccio sano e sereno alla didattica.
                Per me, così come per i miei collaboratori, le Arti Marziali sono un percorso nobile
                in grado di accrescere la consapevolezza in chi le pratica.
              </p>
              <p>
                Non ho mai tollerato chi, per dimostrare la propria abilità, utilizzasse tecniche senza
                nessun tipo di controllo, solo per il gusto di dimostrare di essere il più forte fisicamente.
                <strong> La vera superiorità deriva più da un atteggiamento mentale, che da uno fisico.</strong>
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white rounded-xl p-6 text-center shadow-md">
                  <div className="w-12 h-12 bg-[#1e40af] text-white rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Disciplina</h3>
                  <p className="text-sm text-gray-600">Metodo e costanza nell&apos;allenamento</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-md">
                  <div className="w-12 h-12 bg-[#1e40af] text-white rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Umiltà</h3>
                  <p className="text-sm text-gray-600">Riconoscere i propri limiti per superarli</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-md">
                  <div className="w-12 h-12 bg-[#1e40af] text-white rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Rispetto</h3>
                  <p className="text-sm text-gray-600">Verso sé stessi, i compagni e l&apos;arte</p>
                </div>
              </div>

              <p className="mt-8">
                Il CSE non insegna solo a combattere ma cura anche tutti gli aspetti più nobili delle arti
                marziali. Questo programma è quindi anche pensato come un metodo di disciplina ed autocontrollo
                utile per migliorare sé stessi nella vita di tutti i giorni.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Le Divise */}
      <section id="divise" className="section">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-[#1e40af] tracking-wider uppercase">Identità</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-2">Le Divise CSE</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                L&apos;abbigliamento ufficiale che identifica i praticanti del Combat System Evolution.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/cse-divise.jpg"
                alt="Divise ufficiali CSE"
                width={900}
                height={600}
                className="rounded-xl shadow-lg object-contain max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Conclusione */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Diventa un Guerriero Moderno</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Siamo in un mondo che è sempre più competitivo e che ci sfida quotidianamente chiedendoci
                più impegno, più disciplina, più resistenza e più forza di volontà. Ed è proprio per questo
                che diventare dei guerrieri moderni è oggi più che mai fondamentale per raggiungere dei veri risultati.
              </p>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Il CSE è un percorso che permette alle persone di allenare in modo efficiente il guerriero
                che è in loro e che le aiuta non solo a difendersi ma soprattutto a vivere in modo migliore
                le sfide della quotidianità.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-dark section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Vuoi Praticare il CSE?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Trova una palestra IKTA dove praticare il Combat System Evolution o diventa istruttore certificato.
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
