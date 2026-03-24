'use client';

import { useState } from 'react';

type Module = {
  title: string;
  topics: string[];
};

type Level = {
  name: string;
  price: string;
  description: string;
  didattica: string[];
  collaborazioni: string[];
  modules: Module[];
  competenze: string[];
  diplomi: string[];
};

type Course = {
  discipline: string;
  color: string;
  gradient: string;
  levels: Level[];
};

// ==================== DATI CORSI ====================

const courses: Course[] = [
  {
    discipline: 'Pugilato',
    color: '#1e40af',
    gradient: 'linear-gradient(135deg, #1e3a8a, #1e40af)',
    levels: [
      {
        name: '1° Livello - Allenatore',
        price: '490',
        description: 'A chi desidera diventare Istruttore di Pugilato per la disciplina sportiva del Pugilato per Bambini e Giovani.',
        didattica: [
          'FAD (Formazione a Distanza) su Piattaforma di Studi, accessibile 7 giorni su 7, H24',
          'Materiali consultabili in PDF',
          'Esercizi di Simulazione con Quiz a risposta multipla',
          'Esami con Quiz a risposta multipla',
        ],
        collaborazioni: [
          'Centro Studi Discipline Olistiche e del Fitness',
          'Unitelematica Leonardo da Vinci, ateneo privato Svizzero',
          'Scuola Alta Formazione',
          'Federazione Italiana Arti Marziali e Sport',
        ],
        modules: [
          { title: 'Modulo 1: Fondamenti Teorici del Pugilato', topics: ['Cenni storici e l\'evoluzione del pugilato nel contesto sportivo', 'I valori fondamentali del pugilato: disciplina, rispetto, autocontrollo e lealtà', 'Il Pugilato oggi'] },
          { title: 'Modulo 2: Il Ruolo dell\'Istruttore di Pugilato 1° Livello', topics: ['L\'Istruttore di Pugilato: Una Figura Professionale di Rilievo nel Mondo Sportivo', 'Obbiettivi del corso', 'Presentazione del regolamento per i bambini e i giovani', 'Ruolo dell\'istruttore e responsabilità etiche e legali'] },
          { title: 'Modulo 3: Sviluppo Psicofisico del Bambino e del Giovane', topics: ['Caratteristiche dello sviluppo nelle fasce d\'età (6-10 anni e 11-14 anni)', 'Importanza delle capacità motorie di base: equilibrio, coordinazione, velocità e resistenza', 'Come motivare e incoraggiare i bambini attraverso il gioco', 'Gestione delle emozioni e degli atteggiamenti in un contesto sportivo'] },
          { title: 'Modulo 4: Prevenzione e Gestione degli Infortuni', topics: ['Nozioni di base sulla sicurezza e prevenzione degli infortuni', 'Tecniche di riscaldamento e defaticamento per ridurre i rischi', 'Strategie di recupero post-allenamento per giovani atleti', 'Il Ruolo dell\'istruttore e l\'Importanza della Collaborazione con le Figure Sanitarie'] },
          { title: 'Modulo 5: Psicologia e Gestione delle Emozioni', topics: ['Identificare paure, ansie e aspettative dei giovani atleti', 'Creare un ambiente positivo', 'Tecniche per aiutare i bambini a gestire la pressione delle prime gare', 'Creare routine pre-allenamento e pre-gara per ridurre l\'ansia'] },
          { title: 'Modulo 6: Costruire Fiducia e Autostima con il Pugilato', topics: ['Come l\'apprendimento di nuove abilità sportive rafforza la fiducia in sé stessi', 'Il ruolo del preparatore atletico come figura di riferimento'] },
          { title: 'Modulo 7: Gioco e Divertimento nell\'Allenamento', topics: ['Utilizzare attività ludiche per sviluppare abilità motorie e coordinazione', 'L\'importanza di un allenamento creativo per mantenere l\'interesse dei più piccoli'] },
          { title: 'Modulo 8: Strategie di Comunicazione Efficace con i Bambini', topics: ['Come spiegare tecniche complesse in modo semplice e comprensibile', 'Utilizzo del linguaggio positivo per correggere errori e motivare'] },
          { title: 'Modulo 9: Didattica del Pugilato Giovanile', topics: ['Posizione di guardia', 'Spiegazione e pratica dei colpi principali: jab, diretto, gancio e montante', 'Esercizi di coordinazione pugno-piede', 'Tecniche di difesa e schivate', 'Attività ludiche per sviluppare velocità e reattività'] },
          { title: 'Modulo 10: Allenamento e Gioco per Bambini e Giovani', topics: ['Creazione di esercizi e percorsi a carattere ludico', 'Utilizzo di attrezzi come palle mediche, coni, elastici, sacchi morbidi e corde', 'Giochi a squadre e sfide individuali: circuiti di agilità, staffette e combattimenti simulati', 'Introduzione graduale al potenziamento fisico (a corpo libero)'] },
          { title: 'Modulo 11: Preparazione Fisica Generale', topics: ['Squat, affondi, plank e push-up adattati alle fasce d\'età', 'Circuiti funzionali con intensità adeguata', 'Attività aerobiche con salti con la corda, corsa leggera e scatti brevi', 'Esercizi di mobilità articolare e allungamento muscolare'] },
          { title: 'Modulo 12: Ruolo del Pugilato nello Sviluppo delle Abilità Sociali', topics: ['Come il lavoro in coppia o in gruppo favorisce la collaborazione e il rispetto', 'Insegnare l\'importanza delle regole e dell\'etica sportiva'] },
          { title: 'Modulo 13: Adattare l\'Allenamento a Diversi Tipi di Personalità', topics: ['Strategie per coinvolgere bambini più timidi o molto competitivi', 'Creare un ambiente inclusivo per tutti i livelli di abilità'] },
          { title: 'Modulo 14: Valori Educativi e Sociali del Pugilato', topics: ['Il pugilato come strumento educativo per insegnare valori fondamentali', 'La gestione delle vittorie e delle sconfitte in modo sano e costruttivo', 'Come integrare il rispetto, la disciplina e il divertimento nell\'allenamento'] },
          { title: 'Modulo 15: Verifica Finale e Pratica in Palestra', topics: ['Ogni partecipante progetterà e condurrà una breve lezione di pugilato per bambini', 'Esame con quiz a risposta multipla da svolgersi online', 'Esame pratico in sede'] },
        ],
        competenze: [
          'Conoscenza della storia e dei valori fondamentali del pugilato',
          'Ruolo e responsabilità dell\'istruttore di pugilato',
          'Sviluppo psicofisico del bambino e del giovane',
          'Prevenzione e gestione degli infortuni',
          'Psicologia e gestione delle emozioni dei giovani atleti',
          'Costruzione di fiducia e autostima attraverso il pugilato',
          'Utilizzo del gioco per sviluppare abilità motorie e coordinazione',
          'Strategie di comunicazione efficace con i bambini',
          'Didattica del pugilato giovanile e insegnamento delle tecniche di base',
          'Metodologie di allenamento ludico per bambini e giovani',
          'Preparazione fisica generale e sviluppo della resistenza',
          'Promozione delle abilità sociali attraverso il lavoro di squadra',
          'Adattamento dell\'allenamento a diverse personalità',
          'Promozione dei valori educativi e sociali del pugilato',
          'Capacità di progettare e condurre lezioni di pugilato per bambini',
        ],
        diplomi: [
          'Diploma EPS - CONI nel percorso di Istruttore di Pugilato - 1° livello',
          'Tesserino Tecnico',
          'Inserimento Albo CONI',
          'Responsabilità Civile come Professionista',
        ],
      },
      {
        name: '2° Livello - Istruttore',
        price: '490',
        description: 'Diventa un Istruttore di Pugilato con il corso online di 2° Livello. Apprenderai le nozioni indispensabili di tecniche, preparazione, allenamento fisico e mentale, nonché nozioni per post e pre infortunio. Comprenderai come approcciarsi a diversi tipi di personalità ed atleti agonisti.',
        didattica: [
          'FAD (Formazione a Distanza) su Piattaforma di Studi, accessibile 7 giorni su 7, H24',
          'Materiali consultabili in PDF',
          'Esercizi di Simulazione con Quiz a risposta multipla',
          'Esami con Quiz a risposta multipla',
        ],
        collaborazioni: [
          'Centro Studi Discipline Olistiche e del Fitness',
          'Unitelematica Leonardo da Vinci, ateneo privato Svizzero',
          'Scuola Alta Formazione',
          'Federazione Italiana Arti Marziali e Sport',
        ],
        modules: [
          { title: 'Modulo 1: Introduzione al Pugilato', topics: ['Il Pugilato', 'La Storia', 'Il Pugilato oggi'] },
          { title: 'Modulo 2: Il Pugilato per Ragazzi, Adulti e Agonisti', topics: ['Il Pugilato per Bambini', 'Il Pugilato per Ragazzi', 'Il Pugilato per Adulti', 'Il Pugilato per Atleti Agonisti', 'Il Pugilato per Professionisti'] },
          { title: 'Modulo 3: Il Ruolo dell\'Istruttore di Pugilato 2° Livello', topics: ['Competenze Chiave dell\'Istruttore', 'Ruolo dell\'Istruttore nella Preparazione Agonistica', 'Importanza dell\'Istruttore nel Pugilato Moderno', 'Obiettivi Tecnici, Fisici, Mentali, Didattici, Organizzativi'] },
          { title: 'Modulo 4: L\'Istruttore come Figura Professionale', topics: ['Compiti e Responsabilità dell\'Istruttore', 'Prevenzione e Gestione degli Infortuni', 'Ruolo nella Motivazione e nello Sviluppo Psicologico', 'Rischi Legali e Responsabilità', 'Collaborazione con Professionisti Sanitari e Tecnici'] },
          { title: 'Modulo 5: Fondamenti della Preparazione Atletica', topics: ['Principi della Preparazione Atletica', 'Struttura dell\'Allenamento per Diverse Fasce d\'Età', 'Aspetti Psicologici e Motivazionali', 'Prevenzione e Sicurezza'] },
          { title: 'Modulo 6: Sviluppo Psicofisico Avanzato', topics: ['Ruolo dell\'Istruttore nel Potenziamento Psicofisico', 'Sviluppo delle Capacità Fisiche', 'Approccio Psicologico per Agonisti'] },
          { title: 'Modulo 7: Tecniche di Base e Avanzate del Pugilato', topics: ['Le Basi e gli Sviluppi', 'Errori Comuni e Correzioni', 'Combinazioni Avanzate, Finte e Colpi Sequenziali', 'Difesa e Contrattacco', 'Strategie per Affrontare Diversi Stili di Combattimento'] },
          { title: 'Modulo 8: Allenamento Avanzato per Atleti Intermedi e Agonisti', topics: ['Allenamento Funzionale e Specifico', 'Potenziamento Fisico e Cardiovascolare', 'Personalizzazione degli Allenamenti'] },
          { title: 'Modulo 9: Didattica del Pugilato Intermedio e Avanzato', topics: ['Insegnamento delle Tecniche Avanzate', 'Introduzione al Combattimento Agonistico', 'Simulazioni di Gara'] },
          { title: 'Modulo 10: Allenamento della Velocità e dell\'Esplosività', topics: ['Esercizi avanzati per la velocità e il tempo di reazione', 'Metodi di allenamento pliometrico', 'Programmi specifici per incrementare la velocità'] },
          { title: 'Modulo 11: Prevenzione Avanzata e Gestione degli Infortuni', topics: ['Strategie di prevenzione e trattamento degli infortuni', 'Recupero attivo e recupero muscolare', 'Stretching Avanzato per la Flessibilità'] },
          { title: 'Modulo 12: Psicologia e Motivazione nel Pugilato', topics: ['Motivazione e Obiettivi Personali', 'Gestione dello Stress e delle Emozioni', 'Tecniche di rilassamento e gestione dell\'ansia', 'Approccio al Post-Gara e Analisi degli Errori'] },
          { title: 'Modulo 13: Come Conquistare la Fiducia del Pugile', topics: ['Creare un Ambiente Positivo', 'Fornire Feedback Costruttivo', 'Valorizzare l\'Impegno dell\'Atleta'] },
          { title: 'Modulo 14: Tecniche di Preparazione Mentale', topics: ['Visualizzazione e Immagini Mentali', 'Autodialogo Positivo', 'Routine Pre-Allenamento e Pre-Gara'] },
          { title: 'Modulo 15: Sviluppo della Competenza Tecnica e Fisica', topics: ['Allenamenti Personalizzati', 'Simulazioni di Gara e Situazioni Realistiche', 'Progressione Graduale'] },
          { title: 'Modulo 16: Nutrizione e Integrazione per Pugili', topics: ['Pianificazione Nutrizionale per Diverse Fasce d\'Età', 'Supplementazione per Atleti Agonisti', 'Gestione del Peso e della Composizione Corporea'] },
          { title: 'Modulo 17: Collaborazione con Figure Sanitarie', topics: ['Limiti delle Competenze dell\'Istruttore', 'Collaborazione con Nutrizionisti, Fisioterapisti e Medici Sportivi'] },
          { title: 'Modulo 18: Valori Educativi e Sociali del Pugilato', topics: ['Il Ruolo Educativo dell\'Istruttore', 'Insegnare il Concetto di Fair Play', 'Etica Sportiva e Disciplina'] },
          { title: 'Modulo 19: Adattamento dell\'Allenamento in Base al Profilo', topics: ['Personalizzazione dell\'Allenamento', 'Adattamento agli Stili di Pugilato Diversi', 'Valutazione delle Capacità Fisiche e Tecniche'] },
          { title: 'Modulo 20: Leadership del Team Tecnico', topics: ['Il Ruolo dell\'Istruttore come Leader', 'Comunicazione e Organizzazione del Team Tecnico', 'Pianificazione e Monitoraggio degli Obiettivi'] },
          { title: 'Modulo 21: Specifica di Preparazione su Livelli', topics: ['Allenamento Progressivo per Ragazzi', 'Allenamento Progressivo per Adulti', 'Allenamento Progressivo per Agonisti'] },
          { title: 'Modulo 22: Verifica Finale e Pratica in Palestra', topics: ['Progettazione e conduzione di una lezione per ragazzi, adulti o agonisti', 'Test teorico online con domande a risposta multipla', 'Esame pratico in sede con simulazioni di gara'] },
        ],
        competenze: [
          'Comprendere i fondamenti teorici del pugilato per ragazzi, adulti e agonisti',
          'Ricoprire il ruolo di guida tecnica e psicologica per atleti intermedi e agonisti',
          'Pianificare allenamenti personalizzati per migliorare le prestazioni',
          'Applicare tecniche avanzate di allenamento per potenziare forza, velocità e resistenza',
          'Sviluppare capacità coordinative e reattive per atleti intermedi e avanzati',
          'Utilizzare strategie per prevenire infortuni e gestire il recupero',
          'Gestire le emozioni e motivare gli atleti a raggiungere i propri obiettivi',
          'Preparare psicologicamente gli atleti alle competizioni',
          'Insegnare tecniche avanzate di attacco e difesa con combinazioni complesse',
          'Introdurre gli atleti al combattimento agonistico',
          'Promuovere valori di fair play, disciplina e rispetto',
          'Gestire il team tecnico e collaborare con allenatori e preparatori atletici',
          'Monitorare i progressi degli atleti attraverso strumenti e tecnologie moderne',
          'Preparare e condurre lezioni avanzate per ragazzi e adulti',
        ],
        diplomi: [
          'Diploma EPS - CONI nel percorso di Istruttore di Pugilato - 2° livello',
          'Tesserino Tecnico',
          'Inserimento Albo CONI',
          'Responsabilità Civile come Professionista',
        ],
      },
      {
        name: '3° Livello - Maestro',
        price: '490',
        description: 'Diventa un Istruttore di Pugilato con il corso online di 3° Livello, indispensabile per chi lavora con Atleti Agonisti e Professionisti. Apprenderai tecniche avanzate, preparazione ai match, allenamento fisico e mentale. Questo corso è studiato per chi ha atleti agonisti di livello e professionisti.',
        didattica: [
          'FAD (Formazione a Distanza) su Piattaforma di Studi, accessibile 7 giorni su 7, H24',
          'Materiali consultabili in PDF',
          'Esercizi di Simulazione con Quiz a risposta multipla',
          'Esami con Quiz a risposta multipla',
        ],
        collaborazioni: [
          'Centro Studi Discipline Olistiche e del Fitness',
          'Unitelematica Leonardo da Vinci, ateneo privato Svizzero',
          'Scuola Alta Formazione',
          'Federazione Italiana Arti Marziali e Sport',
        ],
        modules: [
          { title: 'Modulo 1: Fondamenti Teorici del Pugilato Professionistico', topics: ['Il pugilato come sport professionistico: storia e regolamenti', 'Analisi dell\'evoluzione tecnica e strategica del pugilato moderno', 'Le differenze tra pugilato dilettantistico e professionistico', 'Analisi del contesto competitivo internazionale'] },
          { title: 'Modulo 2: Il Ruolo dell\'Istruttore di 3° Livello', topics: ['L\'Istruttore come guida tecnica, psicologica e strategica per professionisti', 'Responsabilità verso la carriera dell\'atleta', 'Collaborazione con figure tecniche, sanitarie e manageriali', 'Gestione della pianificazione a breve e lungo termine'] },
          { title: 'Modulo 3: Preparazione Psicologica Avanzata', topics: ['Strategie per sviluppare la resilienza e la determinazione', 'Creazione di una mentalità vincente e stabile', 'Come affrontare lo stress delle grandi competizioni', 'Tecniche per mantenere il focus e la concentrazione sotto pressione'] },
          { title: 'Modulo 4: Allenamento Avanzato per Professionisti', topics: ['Strutturazione di cicli di allenamento stagionali', 'Bilanciamento tra carichi di lavoro, recupero e prestazioni in gara', 'Circuiti ad altissima intensità per potenza e resistenza', 'Analisi biomeccanica dei movimenti'] },
          { title: 'Modulo 5: Strategie di Preparazione alla Competizione', topics: ['Sviluppo di routine personalizzate pre-gara', 'Tecniche di visualizzazione e pianificazione tattica', 'Gestione della sconfitta e delle transizioni di carriera', 'Strategie per pianificare una transizione post-carriera'] },
          { title: 'Modulo 6: Tattica Avanzata nel Pugilato Professionistico', topics: ['Studio dettagliato delle caratteristiche dell\'avversario', 'Sviluppo di piani di gara personalizzati', 'Capacità di leggere l\'avversario e modificare le strategie durante il combattimento', 'Simulazioni di combattimento'] },
          { title: 'Modulo 7: Leadership e Gestione del Team', topics: ['Coordinamento tra staff tecnico, medico e manageriale', 'Creazione di un ambiente collaborativo e orientato al successo', 'Tecniche di comunicazione efficace nel team', 'Gestione delle dinamiche interne ed esterne'] },
          { title: 'Modulo 8: Alimentazione e Recupero per Professionisti', topics: ['Piani alimentari personalizzati per le diverse fasi della preparazione', 'Strategie per il mantenimento del peso e del livello energetico', 'Uso di terapie innovative per accelerare il recupero', 'Ruolo del sonno e del recupero attivo'] },
          { title: 'Modulo 9: Prevenzione e Trattamento Infortuni Professionali', topics: ['Strategie per ridurre l\'impatto di sovraccarichi e microtraumi', 'Programmi di mobilità articolare e stabilizzazione muscolare', 'Collaborazione con il team medico per trattamento e riabilitazione', 'Ritorno sicuro all\'attività agonistica dopo un infortunio'] },
          { title: 'Modulo 10: Valori e Disciplina nel Pugilato Professionistico', topics: ['Insegnare valori di integrità e rispetto nello sport', 'Promuovere un\'immagine positiva del pugilato', 'Come bilanciare ambizioni sportive e responsabilità etiche'] },
          { title: 'Modulo 11: Innovazione Tecnologica', topics: ['Utilizzo di sensori, analisi video e app per monitorare le prestazioni', 'Implementazione di dati biometrici e tecnologie di analisi avanzata', 'Uso della realtà virtuale per migliorare le abilità tattiche'] },
          { title: 'Modulo 12: Comunicazione e Immagine Pubblica', topics: ['Come gestire le interviste e mantenere un\'immagine professionale', 'Strategie per costruire e proteggere il proprio brand personale', 'Supporto all\'atleta nella comunicazione esterna'] },
          { title: 'Modulo 13: Preparazione Tattica e Strategica Avanzata', topics: ['Come strutturare una gara in round strategici', 'Sviluppo di piani tattici per il massimo rendimento', 'Tecniche per massimizzare l\'efficacia in attacco e difesa', 'Integrazione di combinazioni avanzate'] },
          { title: 'Modulo 14: Sviluppo della Resilienza Mentale', topics: ['Tecniche per affrontare le difficoltà e mantenere la motivazione', 'Strategie per superare gli ostacoli e adattarsi ai cambiamenti', 'Focus su crescita personale e professionale continua'] },
          { title: 'Modulo 15: Verifica Finale e Pratica in Palestra', topics: ['Progettazione e conduzione di un allenamento per un pugile professionista', 'Test teorico online con domande a risposta multipla', 'Esame pratico in sede con simulazioni avanzate e analisi critica'] },
        ],
        competenze: [
          'Comprendere l\'evoluzione e i fondamenti del pugilato professionistico',
          'Ricoprire il ruolo di guida tecnica, psicologica e strategica per professionisti',
          'Pianificare allenamenti a lungo termine per mantenere il picco di forma',
          'Implementare tecniche avanzate di condizionamento fisico e analisi biomeccanica',
          'Sviluppare routine pre-gara personalizzate e strategie tattiche adattabili',
          'Gestire la pressione e le aspettative delle competizioni ad alto livello',
          'Studiare l\'avversario per creare piani di gara efficaci e dinamici',
          'Coordinare un team tecnico multidisciplinare',
          'Applicare piani nutrizionali personalizzati e strategie di recupero avanzate',
          'Prevenire e gestire gli infortuni specifici del pugilato professionistico',
          'Utilizzare tecnologie innovative per monitorare e migliorare le prestazioni',
          'Supportare gli atleti nella gestione dell\'immagine pubblica',
          'Sviluppare strategie di resilienza mentale a lungo termine',
          'Guidare atleti professionisti nella gestione delle transizioni di carriera',
          'Preparare e condurre lezioni mirate per atleti professionisti',
        ],
        diplomi: [
          'Diploma EPS - CONI nel percorso di Istruttore di Pugilato - 3° livello',
          'Tesserino Tecnico',
          'Inserimento Albo CONI',
          'Responsabilità Civile come Professionista',
        ],
      },
    ],
  },
  {
    discipline: 'MMA',
    color: '#dc2626',
    gradient: 'linear-gradient(135deg, #b91c1c, #dc2626)',
    levels: [
      {
        name: '1° Livello - Allenatore',
        price: '490',
        description: 'A chi desidera diventare Istruttore di MMA per la disciplina sportiva delle Arti Marziali Miste per Bambini e Giovani. Se vuoi iniziare la tua carriera come istruttore di Mixed Martial Arts (MMA), questo corso ti fornirà le conoscenze e le competenze necessarie per guidare i principianti nel mondo delle arti marziali miste.',
        didattica: [
          'FAD (Formazione a Distanza) su Piattaforma di Studi, accessibile 7 giorni su 7, H24',
          'Materiali consultabili in PDF',
          'Esercizi di Simulazione con Quiz a risposta multipla',
          'Esami con Quiz a risposta multipla',
        ],
        collaborazioni: [
          'Scuola Alta Formazione',
        ],
        modules: [
          { title: 'Modulo 1: Fondamenti Teorici delle MMA', topics: ['Storia e sviluppo delle Mixed Martial Arts', 'Origini e diffusione a livello mondiale', 'MMA oggi: sport, educazione e formazione giovanile', 'Valori fondamentali delle MMA: disciplina, rispetto, autocontrollo, resilienza e inclusività'] },
          { title: 'Modulo 2: Il Ruolo dell\'Istruttore di MMA 1° Livello', topics: ['L\'Istruttore come figura professionale di rilevanza educativa e tecnica', 'Obiettivi del corso e responsabilità didattiche', 'Linee guida per l\'attività con bambini e adolescenti', 'Responsabilità etiche e legali'] },
          { title: 'Modulo 3: Sviluppo Psicofisico del Bambino e del Giovane', topics: ['Caratteristiche nelle fasce d\'età 6-9, 10-13, 13-15 anni', 'Capacità motorie di base: equilibrio, coordinazione, velocità, agilità', 'Motivazione e incoraggiamento tramite il gioco', 'Gestione delle emozioni e degli atteggiamenti'] },
          { title: 'Modulo 4: Prevenzione e Gestione degli Infortuni', topics: ['Nozioni di base sulla sicurezza in palestra', 'Strategie per evitare sovraccarichi e incidenti', 'Riscaldamento, stretching e defaticamento specifici per MMA', 'Collaborazione tra istruttore, medico e preparatore atletico'] },
          { title: 'Modulo 5: Psicologia e Gestione delle Emozioni', topics: ['Comprendere paure, ansie e aspettative del giovane atleta', 'Creare un ambiente positivo e motivante', 'Routine pre-allenamento e pre-gara', 'Gestione della sconfitta e resilienza'] },
          { title: 'Modulo 6: Costruire Fiducia e Autostima con le MMA', topics: ['Come l\'apprendimento tecnico aumenta autostima e fiducia', 'Il ruolo dell\'istruttore come guida e punto di riferimento'] },
          { title: 'Modulo 7: Gioco e Divertimento nell\'Allenamento', topics: ['Attività ludiche per sviluppare abilità motorie e coordinazione', 'Giochi educativi per mantenere l\'interesse dei bambini'] },
          { title: 'Modulo 8: Comunicazione Efficace con i Bambini', topics: ['Linguaggio positivo e spiegazioni semplici di tecniche complesse', 'Strategie per correggere errori senza demotivare'] },
          { title: 'Modulo 9: Didattica delle MMA Giovanili', topics: ['Posizione e mobilità', 'Colpi fondamentali: pugni, calci, ginocchiate, gomitate (in forma educativa e controllata)', 'Tecniche di base di grappling e controllo', 'Introduzione al combattimento controllato', 'Difesa e schivate', 'Esercizi a coppie con guantoni e protezioni'] },
          { title: 'Modulo 10: Allenamento e Gioco per Bambini e Giovani', topics: ['Percorsi motori, staffette, circuiti agili', 'Uso di attrezzi: sacchi morbidi, elastici, palle mediche, corde', 'Introduzione al potenziamento fisico a corpo libero', 'Esercizi strutturati per resistenza, velocità e agilità'] },
          { title: 'Modulo 11: Preparazione Fisica Generale per le MMA', topics: ['Esercizi a corpo libero (squat, plank, push-up, trazioni adattate)', 'Resistenza aerobica e anaerobica (corda, corsa, circuiti)', 'Stretching, mobilità articolare e defaticamento'] },
          { title: 'Modulo 12: Sviluppo delle Abilità Sociali', topics: ['Lavoro in coppia e di gruppo per collaborazione e rispetto', 'Apprendimento del fair play e gestione dei conflitti'] },
          { title: 'Modulo 13: Adattare l\'Allenamento a Diverse Personalità', topics: ['Coinvolgere bambini timidi o molto competitivi', 'Creare un contesto inclusivo per tutti i livelli'] },
          { title: 'Modulo 14: Valori Educativi e Sociali delle MMA', topics: ['Le MMA come strumento educativo: disciplina, rispetto e resilienza', 'Gestione di vittorie e sconfitte in modo costruttivo'] },
          { title: 'Modulo 15: Verifica Finale e Pratica in Palestra', topics: ['Simulazione di una lezione completa di MMA per bambini/adolescenti', 'Verifica teorica online (quiz a risposta multipla)', 'Esame pratico in sede'] },
        ],
        competenze: [
          'Progettare programmi di preparazione fisica per giovani atleti di MMA',
          'Implementare esercizi specifici per migliorare rapidità, forza e resistenza muscolare',
          'Prevenire infortuni attraverso tecniche di riscaldamento e recupero adeguate',
          'Fornire supporto alla crescita fisica e alla sicurezza degli atleti in giovane età',
          'Insegnare tecniche fondamentali di combattimento: lotta in piedi, grappling e ground and pound',
          'Gestire le emozioni e motivare i giovani atleti',
        ],
        diplomi: [
          'Diploma EPS - CONI nel percorso di Istruttore MMA - 1° livello',
          'Tesserino Tecnico',
          'Inserimento Albo CONI',
          'Responsabilità Civile come Professionista',
        ],
      },
      {
        name: '2° Livello - Istruttore',
        price: '490',
        description: 'Pensato per chi ha già esperienza come istruttore e desidera affinare le proprie tecniche di insegnamento per atleti di livello avanzato. Imparerai a strutturare sessioni di allenamento più complesse, incorporando tecniche avanzate di striking, lotta e sottomissioni. Approfondirai anche aspetti legati alla gestione di atleti agonisti, alla preparazione psicofisica e alla pianificazione delle competizioni.',
        didattica: [
          'FAD (Formazione a Distanza) su Piattaforma di Studi, accessibile 7 giorni su 7, H24',
          'Materiali consultabili in PDF',
          'Esercizi di Simulazione con Quiz a risposta multipla',
          'Esami con Quiz a risposta multipla',
        ],
        collaborazioni: [
          'Scuola Alta Formazione',
        ],
        modules: [
          { title: 'Modulo 1: Introduzione alle Mixed Martial Arts', topics: ['Evoluzione storica e diffusione internazionale delle MMA', 'Regolamenti, federazioni e contesto agonistico moderno', 'Valori fondamentali: disciplina, rispetto, resilienza, inclusività'] },
          { title: 'Modulo 2: MMA per Ragazzi, Adulti e Agonisti', topics: ['Differenze tra allenamento amatoriale e agonistico', 'Approccio progressivo per adolescenti, adulti e atleti agonisti', 'Gestione di obiettivi e carichi in base all\'età e al livello'] },
          { title: 'Modulo 3: Ruolo dell\'Istruttore di MMA 2° Livello', topics: ['Competenze avanzate e responsabilità professionali', 'Obiettivi del corso: tecnici, fisici, mentali, didattici e organizzativi', 'Pianificazione e gestione del percorso agonistico'] },
          { title: 'Modulo 4: L\'Istruttore come Figura Professionale', topics: ['Compiti e limiti delle competenze', 'Rischi legali e responsabilità etiche', 'Collaborazione con preparatori atletici, medici sportivi e nutrizionisti'] },
          { title: 'Modulo 5: Preparazione Atletica Avanzata per le MMA', topics: ['Principi della preparazione fisica ad alte prestazioni', 'Programmazione a lungo termine: macro e microcicli', 'Sviluppo di forza, resistenza, esplosività e agilità specifiche per le MMA'] },
          { title: 'Modulo 6: Sviluppo Psicofisico Avanzato', topics: ['Potenziamento delle capacità condizionali (forza, velocità, resistenza)', 'Gestione dello stress da gara', 'Strategie motivazionali per atleti agonisti'] },
          { title: 'Modulo 7: Tecniche Avanzate delle MMA', topics: ['Striking: combinazioni complesse di pugni, calci, gomitate e ginocchiate', 'Grappling e lotta: takedown, transizioni avanzate, sottomissioni', 'Ground and pound e gestione del clinch', 'Difesa, contrattacco e adattamento agli stili dell\'avversario'] },
          { title: 'Modulo 8: Allenamento Funzionale e Personalizzato', topics: ['Metodi ad alta intensità, circuit training e lavoro a stazioni', 'Adattamento dei carichi per amatori evoluti e agonisti', 'Monitoraggio dei progressi e gestione della fatica'] },
          { title: 'Modulo 9: Didattica e Metodologia Avanzata', topics: ['Insegnamento di tecniche complesse a gruppi misti', 'Gestione di classi con diversi livelli di esperienza', 'Correzione degli errori in tempo reale e feedback motivanti'] },
          { title: 'Modulo 10: Velocità, Esplosività e Reattività', topics: ['Esercizi pliometrici e drills specifici per le MMA', 'Allenamenti per migliorare tempo di reazione, riflessi e potenza dei colpi'] },
          { title: 'Modulo 11: Prevenzione e Gestione Avanzata degli Infortuni', topics: ['Strategie di prevenzione per traumi da impatto e da grappling', 'Tecniche di recupero muscolare e riabilitazione', 'Stretching e mobilità articolare avanzata per atleti agonisti'] },
          { title: 'Modulo 12: Psicologia e Motivazione dell\'Atleta', topics: ['Gestione della pressione pre-gara e dell\'ansia competitiva', 'Tecniche di visualizzazione e routine mentali', 'Analisi post-gara e sviluppo della resilienza'] },
          { title: 'Modulo 13: Leadership e Comunicazione', topics: ['Creare fiducia e motivazione nel team', 'Tecniche di comunicazione efficace con atleti e collaboratori', 'Coordinamento di sparring partner, preparatori e staff medico'] },
          { title: 'Modulo 14: Nutrizione e Integrazione per le MMA', topics: ['Pianificazione nutrizionale per allenamenti e gare', 'Gestione del peso e della composizione corporea', 'Supplementazione mirata per atleti agonisti'] },
          { title: 'Modulo 15: Valori Educativi e Etica Sportiva', topics: ['Promozione di fair play, disciplina e rispetto', 'Insegnamento dell\'etica sportiva e responsabilità individuale', 'MMA come strumento di crescita personale e sociale'] },
          { title: 'Modulo 16: Adattamento dell\'Allenamento al Profilo dell\'Atleta', topics: ['Personalizzazione in base a età, obiettivi e caratteristiche fisiche', 'Gestione di differenti stili e background tecnici', 'Valutazione periodica e monitoraggio dei progressi'] },
          { title: 'Modulo 17: Preparazione Specifica su Livelli', topics: ['Programmi progressivi per intermedi (ragazzi e adulti)', 'Programmi per agonisti in preparazione gara', 'Strategie per il passaggio dal livello amatoriale all\'agonismo'] },
          { title: 'Modulo 18: Verifica Finale e Pratica in Palestra', topics: ['Progettazione e conduzione di una sessione per atleti di livello intermedio/agonistico', 'Test online a risposta multipla', 'Valutazione pratica in palestra con simulazioni di combattimento e analisi tecnica'] },
        ],
        competenze: [
          'Progettare e gestire allenamenti avanzati per atleti di MMA',
          'Migliorare forza, velocità, resistenza e agilità degli atleti',
          'Eseguire valutazioni fisiche e monitorare i progressi delle prestazioni',
          'Applicare tecniche di prevenzione e gestione degli infortuni per atleti intermedi',
          'Fornire linee guida nutrizionali e supporto per la gestione del peso e della performance',
          'Preparare atleti per competizioni locali e nazionali',
        ],
        diplomi: [
          'Diploma EPS - CONI nel percorso di Istruttore MMA - 2° livello',
          'Tesserino Tecnico',
          'Inserimento Albo CONI',
          'Responsabilità Civile come Professionista',
        ],
      },
      {
        name: '3° Livello - Maestro',
        price: '490',
        description: 'Rivolto a chi vuole diventare un esperto nell\'insegnamento delle MMA per atleti professionisti. Questo corso ti fornirà le conoscenze più avanzate su tecniche di combattimento e strategie per competizioni di alto livello, aiutandoti a preparare atleti per sfide nazionali e internazionali. Imparerai la gestione degli allenamenti e il miglioramento delle prestazioni fisiche e mentali.',
        didattica: [
          'FAD (Formazione a Distanza) su Piattaforma di Studi, accessibile 7 giorni su 7, H24',
          'Materiali consultabili in PDF',
          'Esercizi di Simulazione con Quiz a risposta multipla',
          'Esami con Quiz a risposta multipla',
        ],
        collaborazioni: [
          'Scuola Alta Formazione',
        ],
        modules: [
          { title: 'Modulo 1: Fondamenti Teorici delle MMA Professionistiche', topics: ['Le MMA come sport globale: storia, regolamenti internazionali e promozioni (UFC, Bellator, ecc.)', 'Sviluppo tecnico e strategico dell\'atleta completo', 'Differenze tra MMA dilettantistiche e professionistiche', 'Analisi del contesto competitivo e dei circuiti internazionali'] },
          { title: 'Modulo 2: Il Ruolo dell\'Istruttore di MMA di 3° Livello', topics: ['L\'Istruttore come figura di riferimento tecnica, mentale e strategica', 'Supporto alla carriera e crescita del fighter professionista', 'Collaborazione con allenatori di striking, grappling, conditioning, nutrizionisti e mental coach', 'Coordinamento dei vari aspetti della preparazione annuale'] },
          { title: 'Modulo 3: Preparazione Psicologica Avanzata', topics: ['Costruzione di resilienza, disciplina e determinazione', 'Lavoro sull\'equilibrio emotivo e concentrazione', 'Strategie per affrontare le pressioni del palcoscenico mediatico e competizioni internazionali'] },
          { title: 'Modulo 4: Allenamento Avanzato per Professionisti', topics: ['Cicli di allenamento periodizzati per preparazioni da 3 a 5 round', 'Bilanciamento tra carico, recupero e prestazioni', 'Allenamenti combinati per forza esplosiva, resistenza e rapidità', 'Analisi biomeccanica dei movimenti', 'Ottimizzazione di colpi, transizioni, takedown e scramble'] },
          { title: 'Modulo 5: Strategie Avanzate di Preparazione alla Competizione', topics: ['Routine specifiche, cutting e adattamenti per ogni avversario', 'Visualizzazione e pianificazione strategica', 'Approccio resiliente a sconfitte e infortuni', 'Pianificazione della carriera a lungo termine'] },
          { title: 'Modulo 6: Tattiche Avanzate nelle MMA Professionistiche', topics: ['Analisi delle abilità nei diversi stili: striker, wrestler, BJJ, ibridi', 'Creazione di piani personalizzati in base allo stile e alle debolezze', 'Lettura del match in tempo reale', 'Strategie di adattamento tra i round'] },
          { title: 'Modulo 7: Leadership e Gestione del Team', topics: ['Gestione dello staff tecnico, medico, preparatori e manager', 'Costruzione di un ambiente vincente e coeso', 'Leadership, empatia e assertività', 'Coordinamento efficace tra atleta e professionisti coinvolti'] },
          { title: 'Modulo 8: Alimentazione e Recupero per Fighters Professionisti', topics: ['Piani per weight cut, mantenimento e performance', 'Cura dell\'idratazione e della ricomposizione post-peso', 'Tecnologie di recupero, fisioterapia e riposo programmato', 'Monitoraggio degli indici di stress e recupero'] },
          { title: 'Modulo 9: Prevenzione e Gestione degli Infortuni Professionali', topics: ['Traumi articolari, impatti, lesioni da grappling e striking', 'Prevenzione tramite esercizi specifici e mobilità', 'Lavoro integrato con medici e fisioterapisti', 'Percorsi di recupero sicuri per il ritorno in gabbia'] },
          { title: 'Modulo 10: Valori e Disciplina nelle MMA', topics: ['Onore, rispetto e controllo emotivo', 'Rappresentare le MMA con integrità', 'Disciplina personale e rispetto delle regole federali', 'Costruzione di una carriera coerente con valori etici'] },
          { title: 'Modulo 11: Innovazione Tecnologica nella Preparazione', topics: ['GPS, sensori, app di tracking, wearable tech', 'Analisi avanzata dei dati biometrici e di carico', 'Realtà aumentata per scenari tattici', 'Training per la reattività decisionale sotto stress'] },
          { title: 'Modulo 12: Comunicazione e Immagine Pubblica', topics: ['Comunicazione post-combattimento, interviste, social', 'Personal branding e posizionamento nel mondo delle MMA', 'Supporto alla visibilità del team', 'Promozione della disciplina in ambito professionale'] },
          { title: 'Modulo 13: Strategie e Tattiche da Match', topics: ['Strategie specifiche per 3 e 5 round', 'Studio dei tempi, distanze e fasi della lotta', 'Integrazione efficace tra striking, clinch, wrestling e submission', 'Transizioni fluide e gestione degli scambi'] },
          { title: 'Modulo 14: Resilienza Mentale nelle MMA', topics: ['Gestione di momenti critici, pressioni e critiche pubbliche', 'Costruzione di una mentalità solida e reattiva', 'Obiettivi a lungo termine e visione strategica della carriera', 'Supporto allo sviluppo personale dell\'atleta'] },
          { title: 'Modulo 15: Verifica Finale e Pratica in Palestra', topics: ['Progettazione e conduzione di una sessione per atleti di livello agonistico/professionistico', 'Test online a risposta multipla', 'Valutazione pratica in palestra con simulazioni di combattimento e analisi tecnica'] },
        ],
        competenze: [
          'Creare programmi di allenamento per atleti di MMA professionisti',
          'Migliorare forza, velocità, resistenza ed esplosività degli atleti',
          'Monitorare e valutare le prestazioni fisiche per ottimizzare i risultati',
          'Implementare strategie di recupero avanzato e prevenzione degli infortuni',
          'Fornire linee guida nutrizionali specifiche per la gestione del peso e la performance',
          'Supportare gli atleti dal punto di vista psicologico e motivazionale in preparazione alle competizioni',
          'Preparare atleti per competizioni nazionali e internazionali',
        ],
        diplomi: [
          'Diploma EPS - CONI nel percorso di Istruttore MMA - 3° livello',
          'Tesserino Tecnico',
          'Inserimento Albo CONI',
          'Responsabilità Civile come Professionista',
        ],
      },
    ],
  },
  {
    discipline: 'Muay Thai',
    color: '#d97706',
    gradient: 'linear-gradient(135deg, #b45309, #d97706)',
    levels: [
      {
        name: '1° Livello - Allenatore',
        price: '490',
        description: 'A chi desidera diventare Istruttore di Muay Thai per bambini e giovani. Questo corso ti fornirà le basi tecniche e pedagogiche per insegnare l\'arte degli otto arti ai principianti, con particolare attenzione alla sicurezza e allo sviluppo motorio.',
        didattica: [
          'FAD (Formazione a Distanza) su Piattaforma di Studi, accessibile 7 giorni su 7, H24',
          'Materiali consultabili in PDF',
          'Esercizi di Simulazione con Quiz a risposta multipla',
          'Esami con Quiz a risposta multipla',
        ],
        collaborazioni: [
          'Scuola Alta Formazione',
        ],
        modules: [
          { title: 'Modulo 1: Fondamenti Teorici della Muay Thai', topics: ['Storia e origini della Muay Thai in Thailandia', 'Evoluzione da arte marziale tradizionale a sport da combattimento', 'L\'arte degli otto arti: pugni, gomiti, ginocchia e calci', 'Valori fondamentali: rispetto, disciplina, onore e tradizione'] },
          { title: 'Modulo 2: Il Ruolo dell\'Istruttore di Muay Thai 1° Livello', topics: ['L\'Istruttore come figura educativa e tecnica', 'Obiettivi del corso e responsabilità didattiche', 'Regolamento e sicurezza per bambini e giovani', 'Responsabilità etiche e legali nell\'insegnamento'] },
          { title: 'Modulo 3: Sviluppo Psicofisico del Bambino e del Giovane', topics: ['Caratteristiche dello sviluppo nelle fasce d\'età 6-10 e 11-14 anni', 'Capacità motorie di base: equilibrio, coordinazione, flessibilità', 'Motivazione e incoraggiamento attraverso il gioco', 'Gestione delle emozioni in un contesto marziale'] },
          { title: 'Modulo 4: Prevenzione e Gestione degli Infortuni', topics: ['Nozioni di base sulla sicurezza in palestra', 'Riscaldamento specifico per Muay Thai', 'Stretching e defaticamento per giovani atleti', 'Collaborazione con figure sanitarie'] },
          { title: 'Modulo 5: Psicologia e Gestione delle Emozioni', topics: ['Identificare paure e aspettative dei giovani atleti', 'Creare un ambiente positivo e stimolante', 'Gestione della pressione durante sparring e gare', 'Routine pre-allenamento per ridurre l\'ansia'] },
          { title: 'Modulo 6: Costruire Fiducia e Autostima', topics: ['Come l\'apprendimento delle tecniche rafforza la fiducia', 'Il ruolo dell\'istruttore come mentore'] },
          { title: 'Modulo 7: Gioco e Divertimento nell\'Allenamento', topics: ['Attività ludiche per sviluppare coordinazione e riflessi', 'Esercizi creativi per mantenere l\'interesse dei più piccoli'] },
          { title: 'Modulo 8: Comunicazione Efficace con i Bambini', topics: ['Spiegare tecniche complesse in modo semplice', 'Linguaggio positivo per correggere e motivare'] },
          { title: 'Modulo 9: Didattica della Muay Thai Giovanile', topics: ['Posizione di guardia (Cherng Muay)', 'Pugni fondamentali: Jab, Cross, Hook, Uppercut', 'Calci base: Teep (front kick) e Low kick', 'Introduzione a ginocchiate e gomitate in forma educativa', 'Tecniche di difesa e parate', 'Esercizi al sacco e con colpitori'] },
          { title: 'Modulo 10: Allenamento e Gioco per Bambini', topics: ['Percorsi motori e circuiti di agilità', 'Uso di attrezzi: focus pad, thai pad, sacchi leggeri', 'Giochi a squadre e sfide individuali', 'Shadow boxing ludico'] },
          { title: 'Modulo 11: Preparazione Fisica Generale', topics: ['Esercizi a corpo libero adattati all\'età', 'Circuiti funzionali con intensità adeguata', 'Salto della corda e skip', 'Mobilità articolare e allungamento'] },
          { title: 'Modulo 12: Sviluppo delle Abilità Sociali', topics: ['Lavoro in coppia e rispetto del compagno', 'Insegnare l\'importanza delle regole e del Wai Kru'] },
          { title: 'Modulo 13: Adattare l\'Allenamento a Diverse Personalità', topics: ['Strategie per bambini timidi o molto competitivi', 'Creare un ambiente inclusivo'] },
          { title: 'Modulo 14: Valori Educativi della Muay Thai', topics: ['La Muay Thai come strumento educativo', 'Gestione di vittorie e sconfitte', 'Rispetto per avversari e tradizione'] },
          { title: 'Modulo 15: Verifica Finale e Pratica in Palestra', topics: ['Progettazione e conduzione di una lezione per bambini', 'Esame con quiz a risposta multipla online', 'Esame pratico in sede'] },
        ],
        competenze: [
          'Conoscenza della storia e tradizioni della Muay Thai',
          'Ruolo e responsabilità dell\'istruttore di Muay Thai',
          'Sviluppo psicofisico del bambino e del giovane',
          'Prevenzione e gestione degli infortuni',
          'Psicologia e gestione delle emozioni dei giovani atleti',
          'Didattica della Muay Thai giovanile',
          'Insegnamento delle tecniche fondamentali degli otto arti',
          'Metodologie di allenamento ludico',
          'Preparazione fisica generale per bambini',
          'Promozione dei valori educativi della Muay Thai',
        ],
        diplomi: [
          'Diploma EPS - CONI nel percorso di Istruttore Muay Thai - 1° livello',
          'Tesserino Tecnico',
          'Inserimento Albo CONI',
          'Responsabilità Civile come Professionista',
        ],
      },
      {
        name: '2° Livello - Istruttore',
        price: '490',
        description: 'Corso avanzato per chi desidera specializzarsi nell\'insegnamento della Muay Thai ad atleti intermedi e agonisti. Apprenderai tecniche avanzate di striking, clinch work, e preparazione per le competizioni.',
        didattica: [
          'FAD (Formazione a Distanza) su Piattaforma di Studi, accessibile 7 giorni su 7, H24',
          'Materiali consultabili in PDF',
          'Esercizi di Simulazione con Quiz a risposta multipla',
          'Esami con Quiz a risposta multipla',
        ],
        collaborazioni: [
          'Scuola Alta Formazione',
        ],
        modules: [
          { title: 'Modulo 1: Introduzione Avanzata alla Muay Thai', topics: ['Evoluzione della Muay Thai moderna', 'Differenze tra stile tradizionale e sportivo', 'Regolamenti federali e internazionali'] },
          { title: 'Modulo 2: Muay Thai per Ragazzi, Adulti e Agonisti', topics: ['Approccio progressivo per diverse fasce d\'età', 'Differenze tra allenamento amatoriale e agonistico', 'Gestione di obiettivi e carichi di lavoro'] },
          { title: 'Modulo 3: Ruolo dell\'Istruttore di 2° Livello', topics: ['Competenze avanzate e leadership', 'Pianificazione del percorso agonistico', 'Obiettivi tecnici, fisici e mentali'] },
          { title: 'Modulo 4: L\'Istruttore come Figura Professionale', topics: ['Compiti e limiti delle competenze', 'Responsabilità legali ed etiche', 'Collaborazione con preparatori e medici sportivi'] },
          { title: 'Modulo 5: Preparazione Atletica Avanzata', topics: ['Principi della preparazione fisica per Muay Thai', 'Programmazione macro e microcicli', 'Sviluppo di potenza, resistenza e esplosività'] },
          { title: 'Modulo 6: Sviluppo Psicofisico Avanzato', topics: ['Potenziamento delle capacità condizionali', 'Gestione dello stress pre-gara', 'Strategie motivazionali'] },
          { title: 'Modulo 7: Tecniche Avanzate di Muay Thai', topics: ['Combinazioni avanzate di pugni e calci', 'Tecniche di clinch: controllo, proiezioni, ginocchiate', 'Gomitate: varianti e applicazioni', 'Sweep e tecniche di squilibrio', 'Difesa e contrattacco avanzati'] },
          { title: 'Modulo 8: Allenamento Funzionale per Muay Thai', topics: ['Circuit training ad alta intensità', 'Lavoro ai Thai pad e focus mitt', 'Sparring controllato e tecnico'] },
          { title: 'Modulo 9: Didattica Avanzata', topics: ['Insegnamento di tecniche complesse', 'Gestione di classi con diversi livelli', 'Correzione degli errori in tempo reale'] },
          { title: 'Modulo 10: Velocità, Esplosività e Timing', topics: ['Esercizi pliometrici specifici', 'Drills per migliorare il timing dei colpi', 'Allenamento della reattività'] },
          { title: 'Modulo 11: Prevenzione e Gestione Avanzata degli Infortuni', topics: ['Strategie di prevenzione per traumi da impatto', 'Tecniche di recupero muscolare', 'Stretching e mobilità per atleti agonisti'] },
          { title: 'Modulo 12: Psicologia e Motivazione', topics: ['Gestione della pressione pre-gara', 'Tecniche di visualizzazione', 'Analisi post-combattimento'] },
          { title: 'Modulo 13: Leadership e Comunicazione', topics: ['Creare fiducia nel team', 'Comunicazione efficace corner-atleta', 'Coordinamento dello staff tecnico'] },
          { title: 'Modulo 14: Nutrizione per Atleti di Muay Thai', topics: ['Pianificazione nutrizionale per allenamenti e gare', 'Gestione del peso e weight cut sicuro', 'Supplementazione mirata'] },
          { title: 'Modulo 15: Valori e Tradizioni', topics: ['Il Wai Kru Ram Muay: significato e pratica', 'Rispetto per la tradizione thailandese', 'Etica sportiva e fair play'] },
          { title: 'Modulo 16: Adattamento dell\'Allenamento', topics: ['Personalizzazione in base allo stile dell\'atleta', 'Gestione di fighter con background diversi', 'Valutazione periodica dei progressi'] },
          { title: 'Modulo 17: Preparazione Specifica per Competizioni', topics: ['Programmi per agonisti in preparazione gara', 'Strategie di match e game plan', 'Corner work durante le competizioni'] },
          { title: 'Modulo 18: Verifica Finale e Pratica in Palestra', topics: ['Progettazione e conduzione di sessione avanzata', 'Test online a risposta multipla', 'Esame pratico con sparring e analisi tecnica'] },
        ],
        competenze: [
          'Progettare allenamenti avanzati per atleti di Muay Thai',
          'Insegnare tecniche avanzate di striking e clinch',
          'Preparare atleti per competizioni regionali e nazionali',
          'Applicare tecniche di prevenzione infortuni',
          'Fornire supporto nutrizionale e gestione del peso',
          'Sviluppare game plan e strategie di combattimento',
        ],
        diplomi: [
          'Diploma EPS - CONI nel percorso di Istruttore Muay Thai - 2° livello',
          'Tesserino Tecnico',
          'Inserimento Albo CONI',
          'Responsabilità Civile come Professionista',
        ],
      },
      {
        name: '3° Livello - Maestro',
        price: '490',
        description: 'Il livello più alto di formazione per chi vuole guidare atleti professionisti verso competizioni nazionali e internazionali. Apprenderai le strategie più avanzate, la gestione completa della carriera dell\'atleta e le tecniche di preparazione ai massimi livelli.',
        didattica: [
          'FAD (Formazione a Distanza) su Piattaforma di Studi, accessibile 7 giorni su 7, H24',
          'Materiali consultabili in PDF',
          'Esercizi di Simulazione con Quiz a risposta multipla',
          'Esami con Quiz a risposta multipla',
        ],
        collaborazioni: [
          'Scuola Alta Formazione',
        ],
        modules: [
          { title: 'Modulo 1: Fondamenti della Muay Thai Professionistica', topics: ['La Muay Thai nel panorama mondiale: stadi thailandesi e promozioni internazionali', 'Regolamenti professionistici e differenze tra circuiti', 'Analisi del contesto competitivo internazionale'] },
          { title: 'Modulo 2: Il Ruolo del Maestro di Muay Thai', topics: ['Il Maestro come guida tecnica, strategica e mentale', 'Supporto alla carriera dell\'atleta professionista', 'Collaborazione con manager, promoter e staff medico', 'Pianificazione a lungo termine della carriera'] },
          { title: 'Modulo 3: Preparazione Psicologica Avanzata', topics: ['Costruzione di resilienza e mentalità vincente', 'Gestione della pressione degli eventi internazionali', 'Tecniche per mantenere focus e concentrazione'] },
          { title: 'Modulo 4: Allenamento per Professionisti', topics: ['Cicli di allenamento periodizzati per match di 5 round', 'Bilanciamento tra carico, recupero e performance', 'Allenamenti specifici per potenza e resistenza', 'Analisi biomeccanica dei movimenti'] },
          { title: 'Modulo 5: Strategie di Preparazione alla Competizione', topics: ['Studio dell\'avversario e analisi video', 'Sviluppo di game plan personalizzati', 'Routine pre-fight e gestione del weight cut', 'Recupero post-combattimento'] },
          { title: 'Modulo 6: Tattiche Avanzate', topics: ['Lettura dell\'avversario in tempo reale', 'Adattamento della strategia durante il match', 'Gestione delle diverse fasi del combattimento', 'Clinch work avanzato e controllo della distanza'] },
          { title: 'Modulo 7: Leadership e Gestione del Team', topics: ['Coordinamento tra staff tecnico, medico e manager', 'Costruzione di un ambiente orientato al successo', 'Corner work professionale', 'Gestione delle dinamiche di team'] },
          { title: 'Modulo 8: Alimentazione e Recupero Professionale', topics: ['Piani nutrizionali per le diverse fasi di preparazione', 'Weight cut sicuro ed efficace', 'Tecnologie e terapie di recupero avanzate', 'Gestione del sonno e del riposo'] },
          { title: 'Modulo 9: Prevenzione e Gestione Infortuni Professionali', topics: ['Traumi specifici della Muay Thai professionale', 'Prevenzione tramite esercizi mirati', 'Collaborazione con il team medico', 'Ritorno sicuro alle competizioni'] },
          { title: 'Modulo 10: Valori e Tradizione nel Professionismo', topics: ['Mantenere i valori della Muay Thai ai massimi livelli', 'Rappresentare la disciplina con integrità', 'Il ruolo dell\'atleta come ambasciatore della Muay Thai'] },
          { title: 'Modulo 11: Innovazione Tecnologica', topics: ['Analisi video e software di performance', 'Wearable tech e monitoraggio biometrico', 'Utilizzo di dati per ottimizzare l\'allenamento'] },
          { title: 'Modulo 12: Comunicazione e Immagine Pubblica', topics: ['Gestione interviste e media', 'Personal branding dell\'atleta', 'Social media e promozione'] },
          { title: 'Modulo 13: Strategie da Match Professionale', topics: ['Pianificazione round per round', 'Gestione dell\'energia durante match lunghi', 'Tattiche per diversi stili di avversari'] },
          { title: 'Modulo 14: Resilienza Mentale', topics: ['Gestione di sconfitte e battute d\'arresto', 'Costruzione di una mentalità a lungo termine', 'Transizione e fine carriera'] },
          { title: 'Modulo 15: Verifica Finale e Pratica in Palestra', topics: ['Progettazione di camp completo per professionista', 'Test teorico online', 'Esame pratico con analisi strategica avanzata'] },
        ],
        competenze: [
          'Creare programmi di allenamento per atleti professionisti',
          'Preparare atleti per competizioni internazionali',
          'Sviluppare game plan complessi e strategie adattive',
          'Gestire corner work a livello professionale',
          'Coordinare team multidisciplinari',
          'Supportare la carriera a lungo termine dell\'atleta',
        ],
        diplomi: [
          'Diploma EPS - CONI nel percorso di Istruttore Muay Thai - 3° livello',
          'Tesserino Tecnico',
          'Inserimento Albo CONI',
          'Responsabilità Civile come Professionista',
        ],
      },
    ],
  },
  {
    discipline: 'Kick Boxing',
    color: '#7c3aed',
    gradient: 'linear-gradient(135deg, #6d28d9, #7c3aed)',
    levels: [
      {
        name: '1° Livello - Allenatore',
        price: '490',
        description: 'Corso per diventare Istruttore di Kick Boxing per bambini e giovani. Imparerai le basi tecniche e pedagogiche per insegnare questa disciplina che combina tecniche di pugilato con calci delle arti marziali.',
        didattica: [
          'FAD (Formazione a Distanza) su Piattaforma di Studi, accessibile 7 giorni su 7, H24',
          'Materiali consultabili in PDF',
          'Esercizi di Simulazione con Quiz a risposta multipla',
          'Esami con Quiz a risposta multipla',
        ],
        collaborazioni: [
          'Scuola Alta Formazione',
        ],
        modules: [
          { title: 'Modulo 1: Fondamenti Teorici della Kick Boxing', topics: ['Storia e evoluzione della Kick Boxing', 'Origini negli USA e in Giappone', 'Stili principali: Full Contact, Low Kick, K-1 Rules', 'Valori fondamentali: disciplina, rispetto, determinazione'] },
          { title: 'Modulo 2: Il Ruolo dell\'Istruttore di Kick Boxing 1° Livello', topics: ['L\'Istruttore come figura educativa', 'Obiettivi del corso e responsabilità', 'Sicurezza e regolamento per bambini e giovani', 'Responsabilità etiche e legali'] },
          { title: 'Modulo 3: Sviluppo Psicofisico del Bambino e del Giovane', topics: ['Caratteristiche dello sviluppo 6-10 e 11-14 anni', 'Capacità motorie: coordinazione, equilibrio, velocità', 'Motivazione attraverso il gioco', 'Gestione delle emozioni nel contesto sportivo'] },
          { title: 'Modulo 4: Prevenzione e Gestione degli Infortuni', topics: ['Sicurezza in palestra', 'Riscaldamento specifico per Kick Boxing', 'Stretching e defaticamento', 'Collaborazione con figure sanitarie'] },
          { title: 'Modulo 5: Psicologia e Gestione delle Emozioni', topics: ['Paure e aspettative dei giovani atleti', 'Ambiente positivo e stimolante', 'Gestione della pressione durante sparring', 'Routine pre-allenamento'] },
          { title: 'Modulo 6: Costruire Fiducia e Autostima', topics: ['Apprendimento tecnico e crescita personale', 'Il ruolo dell\'istruttore come mentore'] },
          { title: 'Modulo 7: Gioco e Divertimento nell\'Allenamento', topics: ['Attività ludiche per sviluppare coordinazione', 'Esercizi creativi per mantenere l\'interesse'] },
          { title: 'Modulo 8: Comunicazione Efficace con i Bambini', topics: ['Spiegare tecniche in modo semplice', 'Linguaggio positivo e correzioni costruttive'] },
          { title: 'Modulo 9: Didattica della Kick Boxing Giovanile', topics: ['Posizione di guardia corretta', 'Pugni fondamentali: jab, cross, hook, uppercut', 'Calci base: front kick, roundhouse kick, side kick', 'Combinazioni pugno-calcio semplici', 'Tecniche di difesa e schivate', 'Esercizi al sacco e con colpitori'] },
          { title: 'Modulo 10: Allenamento e Gioco per Bambini', topics: ['Percorsi motori e circuiti', 'Uso di focus pad e sacco', 'Giochi a squadre e sfide', 'Shadow boxing per bambini'] },
          { title: 'Modulo 11: Preparazione Fisica Generale', topics: ['Esercizi a corpo libero adattati', 'Circuiti funzionali', 'Salto della corda', 'Mobilità e stretching'] },
          { title: 'Modulo 12: Sviluppo delle Abilità Sociali', topics: ['Lavoro in coppia e rispetto', 'Importanza delle regole e fair play'] },
          { title: 'Modulo 13: Adattare l\'Allenamento', topics: ['Strategie per diversi tipi di bambini', 'Ambiente inclusivo'] },
          { title: 'Modulo 14: Valori Educativi della Kick Boxing', topics: ['Sport come strumento educativo', 'Gestione vittorie e sconfitte', 'Rispetto per avversari e compagni'] },
          { title: 'Modulo 15: Verifica Finale e Pratica in Palestra', topics: ['Progettazione lezione per bambini', 'Esame quiz online', 'Esame pratico in sede'] },
        ],
        competenze: [
          'Conoscenza della storia e degli stili della Kick Boxing',
          'Ruolo e responsabilità dell\'istruttore',
          'Sviluppo psicofisico del bambino',
          'Prevenzione infortuni',
          'Didattica della Kick Boxing giovanile',
          'Insegnamento tecniche fondamentali di pugni e calci',
          'Metodologie di allenamento ludico',
          'Preparazione fisica per bambini',
          'Promozione dei valori educativi dello sport',
        ],
        diplomi: [
          'Diploma EPS - CONI nel percorso di Istruttore Kick Boxing - 1° livello',
          'Tesserino Tecnico',
          'Inserimento Albo CONI',
          'Responsabilità Civile come Professionista',
        ],
      },
      {
        name: '2° Livello - Istruttore',
        price: '490',
        description: 'Corso avanzato per specializzarsi nell\'insegnamento della Kick Boxing ad atleti intermedi e agonisti. Tecniche avanzate di striking, combinazioni complesse e preparazione per competizioni.',
        didattica: [
          'FAD (Formazione a Distanza) su Piattaforma di Studi, accessibile 7 giorni su 7, H24',
          'Materiali consultabili in PDF',
          'Esercizi di Simulazione con Quiz a risposta multipla',
          'Esami con Quiz a risposta multipla',
        ],
        collaborazioni: [
          'Scuola Alta Formazione',
        ],
        modules: [
          { title: 'Modulo 1: Introduzione Avanzata alla Kick Boxing', topics: ['Evoluzione e regolamenti internazionali', 'Differenze tra Full Contact, Low Kick, K-1, Oriental Rules', 'Federazioni e circuiti professionistici'] },
          { title: 'Modulo 2: Kick Boxing per Diverse Categorie', topics: ['Approccio per adolescenti, adulti e agonisti', 'Differenze tra amatoriale e agonistico', 'Gestione dei carichi di lavoro'] },
          { title: 'Modulo 3: Ruolo dell\'Istruttore di 2° Livello', topics: ['Competenze avanzate', 'Pianificazione percorso agonistico', 'Obiettivi tecnici e mentali'] },
          { title: 'Modulo 4: L\'Istruttore Professionista', topics: ['Compiti e responsabilità', 'Aspetti legali', 'Collaborazione con preparatori atletici'] },
          { title: 'Modulo 5: Preparazione Atletica Avanzata', topics: ['Principi della preparazione fisica', 'Programmazione annuale', 'Potenza, resistenza, esplosività'] },
          { title: 'Modulo 6: Sviluppo Psicofisico Avanzato', topics: ['Potenziamento capacità condizionali', 'Gestione stress da gara', 'Motivazione atleti agonisti'] },
          { title: 'Modulo 7: Tecniche Avanzate di Kick Boxing', topics: ['Combinazioni avanzate pugno-calcio', 'Spinning techniques: spinning back fist, spinning kick', 'Calci alti e tecniche acrobatiche', 'Tecniche di Low Kick e attacco alle gambe', 'Difesa e contrattacco avanzati', 'Footwork e gestione della distanza'] },
          { title: 'Modulo 8: Allenamento Funzionale', topics: ['Circuit training ad alta intensità', 'Lavoro ai focus pad e al sacco pesante', 'Sparring controllato e tecnico'] },
          { title: 'Modulo 9: Didattica Avanzata', topics: ['Insegnamento tecniche complesse', 'Gestione classi multilivello', 'Correzione errori in tempo reale'] },
          { title: 'Modulo 10: Velocità ed Esplosività', topics: ['Esercizi pliometrici', 'Drills per timing e reattività', 'Potenza dei colpi'] },
          { title: 'Modulo 11: Prevenzione Infortuni Avanzata', topics: ['Strategie di prevenzione', 'Recupero muscolare', 'Stretching per agonisti'] },
          { title: 'Modulo 12: Psicologia e Motivazione', topics: ['Pressione pre-gara', 'Visualizzazione', 'Analisi post-match'] },
          { title: 'Modulo 13: Leadership', topics: ['Fiducia nel team', 'Comunicazione corner-atleta', 'Coordinamento staff'] },
          { title: 'Modulo 14: Nutrizione per Kick Boxer', topics: ['Pianificazione nutrizionale', 'Gestione del peso', 'Supplementazione'] },
          { title: 'Modulo 15: Valori ed Etica Sportiva', topics: ['Fair play e rispetto', 'Etica nel combattimento', 'Crescita personale'] },
          { title: 'Modulo 16: Personalizzazione dell\'Allenamento', topics: ['Adattamento allo stile dell\'atleta', 'Valutazione progressi', 'Background tecnici diversi'] },
          { title: 'Modulo 17: Preparazione Gare', topics: ['Programmi per agonisti', 'Game plan e strategie', 'Corner work'] },
          { title: 'Modulo 18: Verifica Finale', topics: ['Sessione avanzata', 'Test online', 'Esame pratico con sparring'] },
        ],
        competenze: [
          'Progettare allenamenti avanzati',
          'Insegnare tecniche avanzate di pugni e calci',
          'Preparare atleti per competizioni',
          'Prevenzione infortuni',
          'Supporto nutrizionale',
          'Sviluppare strategie di combattimento',
        ],
        diplomi: [
          'Diploma EPS - CONI nel percorso di Istruttore Kick Boxing - 2° livello',
          'Tesserino Tecnico',
          'Inserimento Albo CONI',
          'Responsabilità Civile come Professionista',
        ],
      },
      {
        name: '3° Livello - Maestro',
        price: '490',
        description: 'Formazione al massimo livello per guidare atleti professionisti verso competizioni nazionali e internazionali. Strategie avanzate, gestione della carriera e preparazione ai massimi livelli del circuito K-1 e Glory.',
        didattica: [
          'FAD (Formazione a Distanza) su Piattaforma di Studi, accessibile 7 giorni su 7, H24',
          'Materiali consultabili in PDF',
          'Esercizi di Simulazione con Quiz a risposta multipla',
          'Esami con Quiz a risposta multipla',
        ],
        collaborazioni: [
          'Scuola Alta Formazione',
        ],
        modules: [
          { title: 'Modulo 1: Kick Boxing Professionistica', topics: ['Il panorama mondiale: K-1, Glory, ONE Championship', 'Regolamenti professionistici', 'Analisi del contesto competitivo internazionale'] },
          { title: 'Modulo 2: Il Ruolo del Maestro', topics: ['Guida tecnica, strategica e mentale', 'Supporto alla carriera del professionista', 'Collaborazione con manager e promoter', 'Pianificazione carriera a lungo termine'] },
          { title: 'Modulo 3: Preparazione Psicologica Avanzata', topics: ['Resilienza e mentalità vincente', 'Gestione pressione eventi internazionali', 'Focus e concentrazione sotto stress'] },
          { title: 'Modulo 4: Allenamento Professionale', topics: ['Cicli di allenamento per match professionistici', 'Bilanciamento carico-recupero', 'Allenamenti per potenza e resistenza', 'Analisi biomeccanica'] },
          { title: 'Modulo 5: Preparazione alla Competizione', topics: ['Studio dell\'avversario', 'Game plan personalizzati', 'Routine pre-fight', 'Recupero post-match'] },
          { title: 'Modulo 6: Tattiche Avanzate', topics: ['Lettura dell\'avversario in real time', 'Adattamento strategico', 'Gestione delle fasi del match', 'Controllo della distanza'] },
          { title: 'Modulo 7: Leadership e Team Management', topics: ['Coordinamento staff', 'Ambiente orientato al successo', 'Corner work professionale'] },
          { title: 'Modulo 8: Alimentazione e Recupero', topics: ['Piani nutrizionali professionali', 'Weight cut sicuro', 'Tecnologie di recupero', 'Gestione del sonno'] },
          { title: 'Modulo 9: Gestione Infortuni Professionali', topics: ['Traumi specifici della Kick Boxing', 'Prevenzione', 'Team medico', 'Ritorno alle competizioni'] },
          { title: 'Modulo 10: Valori nel Professionismo', topics: ['Integrità e rispetto ai massimi livelli', 'Atleta come ambasciatore dello sport'] },
          { title: 'Modulo 11: Tecnologia e Analisi', topics: ['Analisi video', 'Wearable tech', 'Ottimizzazione tramite dati'] },
          { title: 'Modulo 12: Media e Immagine', topics: ['Gestione interviste', 'Personal branding', 'Social media'] },
          { title: 'Modulo 13: Strategie da Match', topics: ['Pianificazione round per round', 'Gestione energia', 'Tattiche per diversi avversari'] },
          { title: 'Modulo 14: Resilienza Mentale', topics: ['Gestione sconfitte', 'Mentalità a lungo termine', 'Fine carriera e transizione'] },
          { title: 'Modulo 15: Verifica Finale', topics: ['Camp completo per professionista', 'Test teorico', 'Esame pratico avanzato'] },
        ],
        competenze: [
          'Programmi per atleti professionisti',
          'Preparazione per competizioni internazionali',
          'Game plan e strategie adattive',
          'Corner work professionale',
          'Coordinamento team multidisciplinari',
          'Gestione carriera dell\'atleta',
        ],
        diplomi: [
          'Diploma EPS - CONI nel percorso di Istruttore Kick Boxing - 3° livello',
          'Tesserino Tecnico',
          'Inserimento Albo CONI',
          'Responsabilità Civile come Professionista',
        ],
      },
    ],
  },
  {
    discipline: 'Difesa Personale',
    color: '#16a34a',
    gradient: 'linear-gradient(135deg, #15803d, #16a34a)',
    levels: [
      {
        name: '1° Livello - Allenatore',
        price: '490',
        description: 'Corso per diventare Istruttore di Difesa Personale. Imparerai le tecniche fondamentali di autodifesa e le metodologie didattiche per insegnare a persone di tutte le età come proteggersi in situazioni di pericolo.',
        didattica: [
          'FAD (Formazione a Distanza) su Piattaforma di Studi, accessibile 7 giorni su 7, H24',
          'Materiali consultabili in PDF',
          'Esercizi di Simulazione con Quiz a risposta multipla',
          'Esami con Quiz a risposta multipla',
        ],
        collaborazioni: [
          'Scuola Alta Formazione',
        ],
        modules: [
          { title: 'Modulo 1: Fondamenti della Difesa Personale', topics: ['Cosa significa difesa personale: prevenzione, consapevolezza, azione', 'Differenza tra arti marziali sportive e autodifesa', 'Aspetti legali della legittima difesa in Italia', 'Principi etici e responsabilità dell\'istruttore'] },
          { title: 'Modulo 2: Il Ruolo dell\'Istruttore di Difesa Personale', topics: ['L\'Istruttore come educatore alla sicurezza', 'Obiettivi del corso: prevenzione prima, reazione poi', 'Responsabilità verso gli allievi', 'Creare un ambiente di apprendimento sicuro'] },
          { title: 'Modulo 3: Psicologia della Minaccia', topics: ['Riconoscere segnali di pericolo', 'Comportamento dell\'aggressore: tipologie e motivazioni', 'Gestione della paura e dello stress', 'La risposta "fight, flight, freeze"'] },
          { title: 'Modulo 4: Prevenzione e Consapevolezza Situazionale', topics: ['Evitare situazioni a rischio', 'Linguaggio del corpo e assertività', 'Uso della voce come deterrente', 'Strategie di de-escalation verbale'] },
          { title: 'Modulo 5: Tecniche di Base per la Difesa', topics: ['Postura e guardia di protezione', 'Colpi fondamentali: palmo, gomito, ginocchiata', 'Difesa da afferramenti: polsi, braccia, vestiti', 'Liberarsi da prese al collo e strangolamenti base'] },
          { title: 'Modulo 6: Difesa da Terra e Contro Muro', topics: ['Cadute controllate e protezione a terra', 'Difesa da posizione supina', 'Liberarsi quando si è bloccati contro un muro', 'Uso dell\'ambiente circostante'] },
          { title: 'Modulo 7: Difesa per Donne', topics: ['Scenari specifici: molestie, aggressioni sessuali', 'Tecniche adattate alla differenza di forza', 'Aspetti psicologici e empowerment', 'Uso di oggetti comuni come strumenti di difesa'] },
          { title: 'Modulo 8: Comunicazione nell\'Insegnamento', topics: ['Spiegare tecniche in modo chiaro e non allarmante', 'Gestire allievi con traumi pregressi', 'Creare fiducia e sicurezza in aula'] },
          { title: 'Modulo 9: Didattica della Difesa Personale', topics: ['Strutturare una lezione efficace', 'Progressione didattica: dal semplice al complesso', 'Esercizi a coppie in sicurezza', 'Simulazioni controllate di scenari reali'] },
          { title: 'Modulo 10: Preparazione Fisica per la Difesa Personale', topics: ['Condizionamento fisico funzionale', 'Esercizi per forza, velocità e reattività', 'Allenamento sotto stress', 'Recupero e prevenzione infortuni'] },
          { title: 'Modulo 11: Aspetti Legali della Legittima Difesa', topics: ['Art. 52 del Codice Penale italiano', 'Proporzionalità e necessità', 'Eccesso di difesa: quando si supera il limite', 'Come documentare e testimoniare un\'aggressione'] },
          { title: 'Modulo 12: Difesa Personale per Categorie Specifiche', topics: ['Bambini e adolescenti: bullismo e sicurezza', 'Anziani: tecniche adattate', 'Persone con disabilità: approcci inclusivi'] },
          { title: 'Modulo 13: Uso di Oggetti di Difesa', topics: ['Spray al peperoncino: normativa e uso corretto', 'Oggetti comuni come strumenti improvvisati', 'Torce tattiche e altri strumenti legali'] },
          { title: 'Modulo 14: Valori e Responsabilità', topics: ['La difesa personale come strumento di empowerment', 'Responsabilità sociale dell\'istruttore', 'Non violenza e uso della forza come ultima risorsa'] },
          { title: 'Modulo 15: Verifica Finale e Pratica', topics: ['Progettazione e conduzione di una lezione', 'Esame con quiz a risposta multipla online', 'Esame pratico: dimostrazione tecniche e gestione scenario'] },
        ],
        competenze: [
          'Conoscenza dei principi della difesa personale',
          'Aspetti legali della legittima difesa',
          'Tecniche fondamentali di autodifesa',
          'Psicologia della minaccia e gestione dello stress',
          'Prevenzione e consapevolezza situazionale',
          'Didattica specifica per la difesa personale',
          'Tecniche di difesa per donne',
          'Uso corretto di strumenti legali di difesa',
          'Adattamento per diverse categorie di allievi',
        ],
        diplomi: [
          'Diploma EPS - CONI nel percorso di Istruttore Difesa Personale - 1° livello',
          'Tesserino Tecnico',
          'Inserimento Albo CONI',
          'Responsabilità Civile come Professionista',
        ],
      },
      {
        name: '2° Livello - Istruttore',
        price: '490',
        description: 'Corso avanzato per istruttori che vogliono specializzarsi nella difesa personale per professionisti, forze dell\'ordine e security. Tecniche avanzate, gestione di armi e scenari multipli.',
        didattica: [
          'FAD (Formazione a Distanza) su Piattaforma di Studi, accessibile 7 giorni su 7, H24',
          'Materiali consultabili in PDF',
          'Esercizi di Simulazione con Quiz a risposta multipla',
          'Esami con Quiz a risposta multipla',
        ],
        collaborazioni: [
          'Scuola Alta Formazione',
        ],
        modules: [
          { title: 'Modulo 1: Difesa Personale Avanzata', topics: ['Evoluzione delle tecniche di autodifesa', 'Sistemi moderni: Krav Maga, RBSD, Combatives', 'Integrazione di tecniche da diverse discipline'] },
          { title: 'Modulo 2: Profili degli Allievi Avanzati', topics: ['Professionisti della sicurezza', 'Forze dell\'ordine e militari', 'Personale sanitario e sociale', 'Cittadini ad alto rischio'] },
          { title: 'Modulo 3: Ruolo dell\'Istruttore di 2° Livello', topics: ['Competenze avanzate e specializzazioni', 'Formazione per contesti professionali', 'Responsabilità legali aumentate'] },
          { title: 'Modulo 4: Analisi delle Minacce Avanzata', topics: ['Profilazione comportamentale', 'Riconoscimento di armi nascoste', 'Valutazione rapida della situazione', 'Intelligence situazionale'] },
          { title: 'Modulo 5: Tecniche Avanzate di Striking', topics: ['Colpi devastanti per neutralizzazione rapida', 'Attacco ai punti vulnerabili', 'Combinazioni rapide ed efficaci', 'Uso di gomiti e ginocchia in spazi ristretti'] },
          { title: 'Modulo 6: Lotta e Controllo a Terra', topics: ['Immobilizzazioni e controlli', 'Tecniche di sottomissione per sicurezza', 'Difesa da terra contro più aggressori', 'Transizioni rapide terra-piedi'] },
          { title: 'Modulo 7: Difesa da Armi', topics: ['Difesa da coltello: angoli di attacco e neutralizzazione', 'Difesa da bastone e oggetti contundenti', 'Difesa da minaccia con pistola (simulata)', 'Principi di disarmo e controllo dell\'arma'] },
          { title: 'Modulo 8: Scenari Multipli Aggressori', topics: ['Gestione di 2-3 aggressori', 'Strategia di posizionamento e movimento', 'Quando combattere, quando fuggire', 'Uso dell\'ambiente come alleato'] },
          { title: 'Modulo 9: Protezione di Terzi', topics: ['Difesa di familiari e accompagnatori', 'Estrazione da situazioni pericolose', 'Comunicazione durante l\'emergenza', 'Coordinamento con le forze dell\'ordine'] },
          { title: 'Modulo 10: Allenamento sotto Stress', topics: ['Simulazioni ad alto realismo', 'Gestione dell\'adrenalina', 'Drill di reazione rapida', 'Scenario training'] },
          { title: 'Modulo 11: Aspetti Legali Avanzati', topics: ['Uso della forza proporzionata in contesti professionali', 'Responsabilità penale e civile', 'Documentazione e reportistica', 'Collaborazione con autorità'] },
          { title: 'Modulo 12: Psicologia del Confronto', topics: ['Gestione dell\'aggressore verbalmente', 'Lettura del linguaggio del corpo', 'Tecniche di negoziazione', 'Recupero post-traumatico'] },
          { title: 'Modulo 13: Difesa in Ambienti Specifici', topics: ['Ambienti ristretti: ascensore, auto, corridoi', 'Ambienti affollati: locali, trasporti pubblici', 'Ambienti esterni: parcheggi, strade isolate'] },
          { title: 'Modulo 14: Fitness e Preparazione Fisica Avanzata', topics: ['Condizionamento specifico per operatori', 'Forza funzionale e resistenza', 'Flessibilità e mobilità articolare', 'Prevenzione infortuni in servizio'] },
          { title: 'Modulo 15: Primo Soccorso Tattico', topics: ['Valutazione immediata delle ferite', 'Controllo emorragie', 'Gestione del ferito in ambiente ostile', 'Coordinamento con soccorsi'] },
          { title: 'Modulo 16: Formazione per Security', topics: ['Tecniche di controllo non violente', 'Accompagnamento e allontanamento', 'Gestione di individui alterati', 'Aspetti legali per operatori privati'] },
          { title: 'Modulo 17: Didattica Avanzata', topics: ['Strutturare corsi per professionisti', 'Valutazione delle competenze', 'Certificazioni e aggiornamenti'] },
          { title: 'Modulo 18: Verifica Finale', topics: ['Progettazione corso per professionisti', 'Test teorico online', 'Esame pratico con scenari complessi'] },
        ],
        competenze: [
          'Tecniche avanzate di autodifesa',
          'Difesa da armi (coltello, bastone, arma da fuoco simulata)',
          'Gestione di scenari con più aggressori',
          'Protezione di terzi',
          'Formazione per professionisti della sicurezza',
          'Allenamento sotto stress e scenario training',
          'Primo soccorso tattico',
          'Aspetti legali per operatori',
        ],
        diplomi: [
          'Diploma EPS - CONI nel percorso di Istruttore Difesa Personale - 2° livello',
          'Tesserino Tecnico',
          'Inserimento Albo CONI',
          'Responsabilità Civile come Professionista',
        ],
      },
      {
        name: '3° Livello - Maestro',
        price: '490',
        description: 'Il massimo livello di formazione per diventare formatore di formatori nella difesa personale. Specializzazione in programmi per forze speciali, VIP protection e sviluppo di sistemi proprietari.',
        didattica: [
          'FAD (Formazione a Distanza) su Piattaforma di Studi, accessibile 7 giorni su 7, H24',
          'Materiali consultabili in PDF',
          'Esercizi di Simulazione con Quiz a risposta multipla',
          'Esami con Quiz a risposta multipla',
        ],
        collaborazioni: [
          'Scuola Alta Formazione',
        ],
        modules: [
          { title: 'Modulo 1: Sistemi di Difesa Personale nel Mondo', topics: ['Analisi comparativa: Krav Maga, Systema, MCMAP, Keysi', 'Evoluzione storica dei sistemi di combattimento', 'Adattamento culturale e contestuale', 'Sviluppo di metodologie proprietarie'] },
          { title: 'Modulo 2: Il Ruolo del Maestro', topics: ['Formatore di istruttori', 'Sviluppo di programmi formativi', 'Consulenza per organizzazioni', 'Leadership nel settore'] },
          { title: 'Modulo 3: Psicologia Avanzata del Conflitto', topics: ['Profili criminologici', 'Gestione di individui psicologicamente instabili', 'Tecniche avanzate di de-escalation', 'Resilienza e recupero post-traumatico'] },
          { title: 'Modulo 4: Tecniche per Operatori Speciali', topics: ['Neutralizzazione rapida e silenziosa', 'Controllo e immobilizzazione avanzati', 'Tecniche di estrazione', 'Combattimento in condizioni estreme'] },
          { title: 'Modulo 5: VIP Protection', topics: ['Principi della protezione ravvicinata', 'Valutazione delle minacce', 'Formazioni di protezione', 'Evacuazione d\'emergenza'] },
          { title: 'Modulo 6: Difesa in Ambienti Tattici', topics: ['CQB (Close Quarter Battle) per civili', 'Movimento tattico in edifici', 'Uso di coperture e ripari', 'Coordinamento di team'] },
          { title: 'Modulo 7: Gestione Armi Avanzata', topics: ['Tecniche avanzate di disarmo', 'Ritenzione dell\'arma', 'Uso difensivo di armi improvvisate', 'Aspetti legali internazionali'] },
          { title: 'Modulo 8: Anti-Terrorismo per Civili', topics: ['Riconoscimento di minacce terroristiche', 'Sopravvivenza in attacchi di massa', 'Primo soccorso in scenario CBRN', 'Evacuazione e punti di raccolta'] },
          { title: 'Modulo 9: Sviluppo di Programmi Formativi', topics: ['Creazione di curriculum completi', 'Metodologie didattiche avanzate', 'Valutazione e certificazione', 'Aggiornamento continuo dei contenuti'] },
          { title: 'Modulo 10: Leadership e Management', topics: ['Gestione di scuole e centri di formazione', 'Marketing per istruttori', 'Aspetti amministrativi e fiscali', 'Networking professionale'] },
          { title: 'Modulo 11: Ricerca e Innovazione', topics: ['Analisi di nuove minacce', 'Sviluppo di tecniche innovative', 'Collaborazione con forze dell\'ordine', 'Pubblicazione e divulgazione'] },
          { title: 'Modulo 12: Etica e Responsabilità del Maestro', topics: ['Codice deontologico', 'Responsabilità verso la comunità', 'Uso responsabile della conoscenza', 'Mentoring di nuovi istruttori'] },
          { title: 'Modulo 13: Formazione a Distanza e Online', topics: ['Strutturare corsi FAD efficaci', 'Tecnologie per la formazione', 'Valutazione online', 'Integrazione teoria-pratica'] },
          { title: 'Modulo 14: Preparazione Fisica Estrema', topics: ['Condizionamento per operatori speciali', 'Resistenza mentale e fisica', 'Recupero accelerato', 'Longevità nella professione'] },
          { title: 'Modulo 15: Verifica Finale', topics: ['Sviluppo di un sistema/programma originale', 'Test teorico avanzato', 'Esame pratico con valutazione come formatore'] },
        ],
        competenze: [
          'Sviluppo di sistemi di difesa personale',
          'Formazione di istruttori',
          'Consulenza per organizzazioni e aziende',
          'VIP Protection e protezione ravvicinata',
          'Gestione di centri di formazione',
          'Ricerca e innovazione nel settore',
          'Leadership nel campo della sicurezza personale',
        ],
        diplomi: [
          'Diploma EPS - CONI nel percorso di Istruttore Difesa Personale - 3° livello',
          'Tesserino Tecnico',
          'Inserimento Albo CONI',
          'Responsabilità Civile come Professionista',
        ],
      },
    ],
  },
];

// ==================== COMPONENTI ====================

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-5 h-5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
      fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

function LevelSection({ level, color, isOpen, onToggle }: { level: Level; color: string; isOpen: boolean; onToggle: () => void }) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div style={{ borderLeft: `4px solid ${color}` }} className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
      {/* Header livello */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
        style={{ padding: '20px 24px' }}
      >
        <div className="flex-1">
          <h4 className="text-lg font-bold text-gray-900">{level.name}</h4>
          <p className="text-sm text-gray-500 mt-1">{level.modules.length} moduli formativi</p>
        </div>
        <div className="flex items-center gap-4 flex-shrink-0">
          <span className="text-xl font-bold" style={{ color }}>&euro;{level.price}</span>
          <ChevronIcon open={isOpen} />
        </div>
      </button>

      {/* Contenuto espandibile */}
      {isOpen && (
        <div style={{ padding: '0 24px 24px' }}>
          {/* Descrizione */}
          <p className="text-gray-600 text-sm leading-relaxed mb-6">{level.description}</p>

          {/* Didattica */}
          <div className="mb-8">
            <button onClick={() => toggleSection('didattica')} className="w-full flex items-center justify-between py-5 border-b border-gray-200">
              <span className="font-semibold text-sm text-gray-800">Didattica</span>
              <ChevronIcon open={openSection === 'didattica'} />
            </button>
            {openSection === 'didattica' && (
              <ul className="mt-3 space-y-2">
                {level.didattica.map((item, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: color }} />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Programma moduli */}
          <div className="mb-8">
            <button onClick={() => toggleSection('programma')} className="w-full flex items-center justify-between py-5 border-b border-gray-200">
              <span className="font-semibold text-sm text-gray-800">Percorso Formativo ({level.modules.length} Moduli)</span>
              <ChevronIcon open={openSection === 'programma'} />
            </button>
            {openSection === 'programma' && (
              <div className="mt-3 space-y-4">
                {level.modules.map((mod, i) => (
                  <ModuleItem key={i} module={mod} color={color} />
                ))}
              </div>
            )}
          </div>

          {/* Competenze */}
          <div className="mb-8">
            <button onClick={() => toggleSection('competenze')} className="w-full flex items-center justify-between py-5 border-b border-gray-200">
              <span className="font-semibold text-sm text-gray-800">Competenze Acquisite</span>
              <ChevronIcon open={openSection === 'competenze'} />
            </button>
            {openSection === 'competenze' && (
              <ul className="mt-3 space-y-2">
                {level.competenze.map((item, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                    <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color }} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Diplomi */}
          <div className="mb-8">
            <button onClick={() => toggleSection('diplomi')} className="w-full flex items-center justify-between py-5 border-b border-gray-200">
              <span className="font-semibold text-sm text-gray-800">Diplomi e Certificazioni</span>
              <ChevronIcon open={openSection === 'diplomi'} />
            </button>
            {openSection === 'diplomi' && (
              <ul className="mt-3 space-y-2">
                {level.diplomi.map((item, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                    <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color }} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* WhatsApp CTA */}
          <a
            href={`https://wa.me/393341989193?text=${encodeURIComponent('Salve, volevo chiedere delle informazioni')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-4 sm:py-3 rounded-lg text-white font-semibold text-sm transition-all hover:brightness-110"
            style={{ backgroundColor: '#25D366' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#fff">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Vorrei informazioni
          </a>
        </div>
      )}
    </div>
  );
}

function ModuleItem({ module, color }: { module: Module; color: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
        style={{ padding: '12px 16px' }}
      >
        <span className="text-sm font-medium text-gray-800">{module.title}</span>
        <ChevronIcon open={open} />
      </button>
      {open && (
        <ul className="space-y-2" style={{ padding: '0 16px 12px' }}>
          {module.topics.map((topic, i) => (
            <li key={i} className="text-xs text-gray-600 flex items-baseline gap-2">
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 relative top-[-1px]" style={{ backgroundColor: color }} />
              <span>{topic}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// ==================== MAIN ====================

export default function CorsiAccordion() {
  const [openCourse, setOpenCourse] = useState<string | null>(null);
  const [openLevel, setOpenLevel] = useState<string | null>(null);

  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-8 md:gap-10">
      {courses.map((course) => (
        <div key={course.discipline} className="mb-0">
          {/* Discipline header */}
          <button
            onClick={() => {
              setOpenCourse(openCourse === course.discipline ? null : course.discipline);
              setOpenLevel(null);
            }}
            className="w-full text-left rounded-2xl text-white transition-all duration-300 hover:scale-[1.01]"
            style={{
              background: course.gradient,
              padding: '24px 28px',
              boxShadow: openCourse === course.discipline
                ? `0 10px 30px ${course.color}40`
                : '0 4px 15px rgba(0,0,0,0.1)',
            }}
          >
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest opacity-70">Corso Istruttore</span>
                <h3 className="text-2xl md:text-3xl font-bold mt-1">{course.discipline}</h3>
                <p className="text-white/70 text-sm mt-2">{course.levels.length} livelli formativi — FAD Online</p>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  className={`w-6 h-6 transition-transform duration-300 ${openCourse === course.discipline ? 'rotate-180' : ''}`}
                  fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            </div>
          </button>

          {/* Livelli */}
          {openCourse === course.discipline && (
            <div className="mt-6 space-y-6">
              {course.levels.map((level) => (
                <LevelSection
                  key={level.name}
                  level={level}
                  color={course.color}
                  isOpen={openLevel === level.name}
                  onToggle={() => setOpenLevel(openLevel === level.name ? null : level.name)}
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
