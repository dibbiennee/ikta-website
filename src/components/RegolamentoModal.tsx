'use client';

import { useState, useEffect } from 'react';

const regolamenti = {
  generali: {
    title: 'Regolamenti Generali',
    description: 'Norme generali per tutti gli sport da combattimento IKTA.',
    content: `NORME GENERALI
Sport da Combattimento
I.K.T.A. ITALIA

A cura di Ascensi Ivan
Arbitro Internazionale
Resp. Nazionale Settore Arbitri – Giudici

Questo regolamento è parte integrante di quelli specifici nelle discipline di:
Full Contact, Kick Boxing, K1 Rules, Thai Boxe, Muay Thai e M.M.A.

Civitavecchia - Settembre 2012

---

ALLESTIMENTO DEL LUOGO DI RIUNIONE

Art. 1
La Società Organizzatrice deve garantire durante tutto il corso della riunione un adeguato servizio d'ordine, preventivamente richiesto, secondo il grado di pericolosità dell'evento alla Pubblica Sicurezza. In caso di mancanza della forza pubblica, nonostante la richiesta, dovrà provvedere con un proprio servizio d'ordine. Ha inoltre l'obbligo di mettere a disposizione della Federazione i posti e i biglietti di ingresso che le sono richiesti secondo le esigenze funzionali.

Art. 2 - Quadrato e accessori
2.1 La Società Organizzatrice è tenuta a mettere in opera e a fornire in perfette condizioni di sicurezza, di efficienza e di igiene:
- una bascula per le operazioni di controllo del peso;
- il quadrato e gli altri materiali accessori;
- un tavolo e sedie per: il commissario di riunione, i medici di servizio, i cronometristi e l'annunciatore;
- posti adatti per i giudici;
- il gong;
- guantoni, caschetti, paratibia, calzari etc… per gli incontri e quelli di riserva;
- l'ambulanza dotata di apparato di rianimazione;
- una cassetta contenente i medicinali di pronto soccorso e almeno due borse del ghiaccio.

2.2 Inoltre, la Società Organizzatrice deve assicurare un adeguato servizio per il rifornimento dell'acqua agli angoli e per il funzionamento degli impianti.

Art. 3 - Del quadrato in particolare
3.1 Il «quadrato» è un recinto delimitato da corde tese tra quattro pali metallici equidistanti su una piattaforma di legno.
3.2 La piattaforma è orizzontale, perfettamente piana, di legno solido e ben unito, coperta per intero (e cioè fino all'estremo bordo) da un feltro sul quale è posto un tappeto, ben teso, di tela forte.
3.3 I giri di corda - in numero di quattro - sono tesi ciascuno mediante quattro tenditori (uno per angolo) collegati orizzontalmente ai pali. Le corde debbono risultare orizzontali e, in ciascun lato del quadrato, sullo stesso piano verticale.
3.4 Le corde sono avvolte per intero da stoffa liscia o materiale equivalente. Sono tra loro collegate verticalmente, su ogni lato del quadrato, mediante due strisce di materiale forte, fisse e ben tese, a ciascun terzo di ogni lato, in modo da permettere lo scorrimento delle corde stesse.
3.5 Il «quadrato» deve inoltre essere munito, in ognuno dei quattro angoli, di cuscini che partono dalla prima corda ed arrivano fino all'ultima.
3.6 Gli angoli occupati dagli atleti devono essere distinti in «angolo rosso» e «angolo blu».

Art. 4 - Dimensioni del quadrato
- Lati del quadrato (entro le corde): lunghezza minima m 5,50; massima m 6,10;
- Piattaforma: tale da assicurare, fuori delle corde, un bordo libero di almeno cm 60;
- Feltro e tappeto: uguali alle dimensioni della piattaforma;
- Spessore del feltro: minimo cm 1,5; massimo cm 2,5;
- Diametro delle corde: minimo cm 3; massimo cm 5;
- Altezza delle corde rispetto al piano del quadrato (con quattro corde): 1° giro cm 30, 2° giro cm 70, 3° giro cm 100, 4° giro cm 130;
- Lunghezza dei tenditori in opera: almeno cm 50;
- Larghezza delle strisce verticali di collegamento delle corde: minimo cm 3; massimo cm 4;
- Altezza dei pali sul piano del quadrato: cm 135 al massimo;
- Diametro max (per la parte sovrastante il piano del quadrato): cm 12.

Art. 5 - Accessori del quadrato
Il quadrato è corredato dai seguenti accessori:
- sgabelli per gli atleti e per i loro assistenti;
- due secchi e due bottiglie con acqua potabile;
- due sputacchiere (o altre apparecchiature analoghe);
- tre scale di accesso: due agli angoli occupati dagli atleti ed una all'angolo neutro (quello più lontano dal tavolo della giuria) per l'accesso del medico e dell'arbitro;
- un contenitore igienico agli angoli neutri.

Art. 6 - Norme per l'allestimento del quadrato
6.1 Il quadrato è rialzato rispetto al suolo, della misura strettamente necessaria per consentire a tutti gli spettatori di vedere interamente la figura degli atleti.
6.2 Il tavolo del commissario di riunione e degli ufficiali di servizio è situato nell'immediata prossimità del quadrato, al centro del lato da cui sia più agevole la visibilità di tutto il locale e il controllo dei vari servizi.
6.3 I posti per i giudici sono collocati lungo il bordo del quadrato discostati, quanto più possibile, dal pubblico e sopraelevati in modo da permettere una perfetta visibilità.
6.4 La zona circostante il quadrato è recintata da transenne e vi potranno accedere solo gli ufficiali di servizio, gli atleti in gara, gli addetti all'organizzazione, i dirigenti federali e gli invitati speciali.

Art. 7 - Il gong
Il gong è costituito da un corpo metallico sonoro e da un idoneo martello o da altro adeguato segnalatore acustico. È situato nell'immediata prossimità del quadrato in modo che i segnali possano sempre essere uditi distintamente dagli atleti e dall'arbitro.

Art. 8 - L'ambulanza
8.1 L'ambulanza deve stazionare vicino all'uscita più facilmente raggiungibile.
8.2 È compito della Società organizzatrice assicurarsi che non intervengano impedimenti a una sua immediata partenza.
8.3 Gli addetti all'ambulanza devono rimanere a disposizione del medico di servizio e del commissario di riunione nella zona limitrofa il tavolo della giuria e potranno lasciare il loro posto solo se congedati dal commissario di riunione, sentito il medico di servizio.

Art. 9 - Ufficiali addetti alle manifestazioni
Prestano servizio:
- Il Commissario di Riunione;
- Gli Arbitri e i Giudici designati;
- Il Medico di servizio;
- Il Cronometrista;
- L'Annunciatore;
- Eventuale supervisore agli arbitri e giudici.

Art. 10 - Il Commissario di Riunione - Obblighi
10.1 Il commissario di riunione è l'unica Autorità federale competente a dare ordini e direttive circa lo svolgimento della riunione. La Società organizzatrice e gli ufficiali di servizio sono tenuti ad uniformarsi alle disposizioni da lui impartite, a norma del presente Regolamento.
10.2 Il commissario di riunione è indicato dal comitato regionale.
10.3 Egli deve trovarsi sul luogo della manifestazione almeno due ore prima dell'inizio. È suo dovere adottare, in sede di operazioni preliminari, tutte le misure preventive occorrenti perché la riunione si svolga in conformità con le norme federali e nel migliore ordine.
10.4 Deve pertanto:
- ispezionare il luogo destinato alla riunione e alle operazioni preliminari;
- procedere al controllo della bascula, del quadrato, dei guantoni e di tutto il materiale occorrente;
- compilare i cartellini per i giudici designati;
- assegnare i rispettivi servizi agli arbitri e ai giudici designati;
- accertare che sia garantito un adeguato servizio delle forze dell'ordine;
- verificare che gli atleti e gli assistenti si presentino sul quadrato nella tenuta prescritta;
- controllare la posizione federale degli atleti, degli assistenti, e accertarsi della loro identità personale;
- controllare i documenti sanitari e controfirmare il verbale di visita medica;
- esercitare le funzioni di commissario al peso o delegare altro ufficiale;
- controllare il bendaggio e i guantoni.

10.5 Il commissario di riunione non deve mai abbandonare il suo posto durante lo svolgimento della riunione.
10.6 Non deve - salvo casi del tutto eccezionali - esercitare le funzioni di arbitro o di giudice.
10.7 Al termine della riunione il commissario di riunione provvede a redigere un circostanziato referto.

Art. 11 - Sospensione delle riunioni e interruzione degli incontri per cause di forza maggiore
11.1 Nel caso che una riunione, per sopravvenute circostanze di forza maggiore, non possa proseguire, il commissario di riunione ne darà comunicazione al pubblico tramite l'annunciatore.
11.2 Se, dovendo sospendere la riunione, si rende necessario interrompere un incontro in corso, il commissario di riunione ordinerà al cronometrista di dare il segnale di arresto con il gong.
11.3 Se l'incontro interrotto non può essere fatto proseguire, il commissario di riunione farà proclamare il «no-decision».

Art. 12 - Gli Arbitri e i Giudici - Obblighi
12.1 Gli Arbitri e i Giudici designati devono trovarsi sul luogo della manifestazione almeno un'ora prima dell'inizio.
12.2 L'Arbitro, finché non sale sul quadrato per la direzione dell'incontro assegnatogli, è alle dirette dipendenze del Commissario di Riunione.
12.3 L'Arbitro e i giudici, nell'esercizio delle loro funzioni, sono autonomi.
12.4 Il commissario di riunione ha tuttavia la facoltà, negli intervalli, di richiamarli al rispetto delle norme federali.
12.5 Per l'arbitro e per i giudici è obbligatorio indossare la prescritta divisa che consiste in camicia bianca con maniche corte o lunghe, munita sul petto a sinistra del distintivo federale, cravatta a farfalla nera o blu, calzoni neri, scarpe e calzini neri, guanti monouso protettivi in lattice.

Art. 13 - Il Medico di Servizio
I compiti e le attribuzioni del medico di servizio alle riunioni sono fissati dal Regolamento Sanitario.

Art. 14 - Il Cronometrista - Obblighi
14.1 Il cronometrista prende il posto al tavolo del commissario di riunione.
14.2 Egli deve:
- regolare il numero e la durata delle riprese e degli intervalli;
- ordinare di sgombrare il quadrato, dieci secondi prima dell'inizio di ciascuna ripresa, con l'ordine «fuori i secondi»;
- sancire l'inizio e la fine di ciascuna ripresa con il suonare del gong;
- annunciare il numero di ciascuna ripresa immediatamente prima dell'inizio della stessa;
- fermare il cronometro all'ordine di "stop" seguito dal gesto del dito indice puntato sul palmo della mano opposta e la parola "time";
- scandire, in caso di conteggio, i secondi sulla piattaforma del quadrato;
- registrare l'esatta durata della ripresa qualora l'incontro finisca prima del termine previsto.

Art. 15 - L'Annunciatore - Obblighi
15.1 L'Annunciatore prende il posto al tavolo del Commissario di Riunione ed è alle sue dirette dipendenze.
15.2 Egli ha il compito di rendere note al pubblico, chiaramente e succintamente, le comunicazioni che il Commissario di Riunione riterrà opportune fare.
15.3 Provvede direttamente ad annunciare l'ordine di sgomberare il quadrato e il numero d'ordine delle riprese.
15.4 È fatto divieto all'annunciatore di fare qualsiasi comunicazione al pubblico che non gli sia ordinata o autorizzata dal Commissario di Riunione.

---

RIUNIONI SPORT DA COMBATTIMENTO

Art. 16 - Autorizzazioni per lo svolgimento di riunioni
Le autorizzazioni a effettuare riunioni e l'approvazione dei programmi, sono di competenza del Comitato Regionale sul cui territorio la riunione avrà luogo.

Art. 17 - Condizioni per l'espletamento delle riunioni
17.1 La Società organizzatrice è tenuta a comunicare ai Comitati Regionali, almeno sei giorni prima della data di effettuazione, il programma della riunione.
17.2 In occasione delle operazioni di peso, la Società Organizzatrice deve depositare, a mani del commissario di riunione, i contratti stipulati.
17.3 Per quanto riguarda gli atleti stranieri, questi devono esibire al Commissario di Riunione il nulla-osta della Federazione di appartenenza e la tessera di atleta professionista.

Art. 18 - Deposito borse degli atleti
Le borse dovranno essere depositate in Federazione prima della disputa dell'incontro, salvo accordi diversi tra le parti.

Art. 19 - Nulla-osta tecnici
Le eventuali sostituzioni dell'ultima ora per incontri tra atleti tesserati debbono essere autorizzate dal Comitato Regionale.

Art. 20 - Concomitanza di riunioni
In caso di concomitanza nella richiesta di data, in sede regionale, da parte di più Società, la preferenza va a quella che deve organizzare incontri di semifinali per il titolo italiano o combattimenti per detto titolo.

Art. 21 - Mancata effettuazione degli incontri - Effetti
21.1 Ove per caso fortuito o di forza maggiore non si effettui il «match-clou» e la Società Organizzatrice fosse costretta a rimborsare il costo del biglietto agli spettatori, la riunione dovrà essere rinviata a nuova data.
21.2 La Società organizzatrice che, nel corso di un anno, si rende per tre volte inadempiente incorre nella revoca dell'affiliazione.

Art. 22 - Categorie di peso
Vedi apposita tabella nel Ranking IKTA.

Art. 23 - Visita pre-gara
Prima dell'incontro gli atleti debbono essere sottoposti a visita medica secondo le normative del Regolamento sanitario.

Art. 24 - Pesatura
Il peso deve essere effettuato almeno due ore e mai oltre le 24 ore prima dell'incontro.

Art. 25 - Operazioni di peso
È compito del Commissario di Riunione verificare l'esattezza della bascula e procedere alle operazioni di controllo. L'atleta deve pesarsi a corpo nudo. Qualora sorpassi il limite di peso, è autorizzato a pesarsi una seconda volta, al massimo, un'ora dopo la prima pesatura.

---

PENALI

Art. 26 - Superamento limiti del peso
26.1 Gli atleti sono tenuti a rispettare i limiti di peso stabiliti nell'accordo tra le Società di appartenenza. In assenza di statuizione, il limite massimo di peso si intende corrispondere a quello della categoria in cui gli atleti sono classificati, con una tolleranza di 500 grammi.
26.2 Quando uno degli atleti supera il limite, l'avversario può ricusare l'incontro.
26.3 Ove entrambi gli atleti superino il limite stabilito, nessuna delle due Società interessate ha facoltà di ricusare l'incontro.

Art. 27 - Penale per superamento limiti al peso
Quando tra le parti sia convenuta l'applicazione di una penale per superamento di peso, la Società di appartenenza dell'atleta che eccede il limite stabilito è tenuta a corrispondere all'altra Società la somma pattuita.

Art. 28 - Superamento limiti di peso tollerato
Quando è prevista una penale per il superamento del peso ma è altresì stabilito un limite all'eccedenza, se anche questo limite è superato, tornano applicabili le disposizioni di cui al precedente articolo.

Art. 29 - Penale per mancata effettuazione del combattimento per forfait al peso
La Società di appartenenza dell'atleta che incorre nel forfait è tenuta al risarcimento del danno sopportato dall'altra Società interessata.

Art. 30 - Provvedimenti disciplinari in caso di forfait e superamento di peso
La Società di appartenenza dell'atleta che incorre in forfait o superamento di peso è passibile di provvedimenti disciplinari, oltre al risarcimento del danno.

Art. 31 - Rifiuto a disputare l'incontro
31.1 Se un atleta, per qualsiasi motivo, non assolve gli obblighi sottoscritti dalla propria società circa l'effettuazione dell'incontro viene sospeso dall'attività agonistica per la durata di 30 giorni.
31.2 Qualora la mancata effettuazione dell'incontro dipenda da comprovata malattia o da infortunio dell'atleta, questi non potrà sostenere alcun incontro per tutto il periodo di convalescenza (non inferiore a 30 giorni).

---

MODALITÀ DI COMPORTAMENTO

Art. 32 - Contegno e comportamento verso l'arbitro durante il match
32.1 L'atleta è tenuto al massimo rispetto verso il Commissario di Riunione, l'arbitro e tutti gli altri ufficiali di gara.
32.2 Nel contatto pieno l'atleta combatterà a torso nudo, mentre nel contatto leggero con maglietta o canottiera. L'abbigliamento non deve riportare scritte ingiuriose politico-religiose.
32.3 Deve astenersi da commenti e discussioni, osservando sempre le regole del più corretto comportamento.
32.4 Durante lo svolgimento delle riprese deve osservare il silenzio più assoluto. Per nessuna ragione può interpellare l'arbitro.
32.5 Deve avere contegno cavalleresco nei confronti dell'avversario e dei suoi secondi.
32.6 Invitato dall'arbitro, immediatamente prima dell'inizio dell'incontro e subito dopo la proclamazione del verdetto, deve stringere la mano all'avversario.
32.7 L'atleta ha la facoltà di abbandonare l'incontro nel caso in cui non sia in grado di continuare, a meno che l'arbitro non lo stia contando.
32.8 Per manifestare tale volontà, deve:
- alzare il braccio e desistere dalla gara;
- pronunciare chiaramente la parola «abbandono»;
- voltare le spalle all'avversario e avviarsi al proprio angolo;
- non riprendere l'incontro, al suono del gong, dopo l'intervallo.
32.9 Quando un atleta viene contato, l'avversario deve immediatamente raggiungere l'angolo neutro indicato dall'arbitro.
32.10 Gli atleti devono presentarsi sul quadrato in perfetta tenuta di gara e con il corpo ben deterso. È vietata l'applicazione di sostanze oleose. È consentito l'utilizzo di una moderata quantità di vasellina.
32.11 Gli atleti debbono calzare i guanti sopra un bendaggio e indossare:
- Calzoncini a mezza coscia;
- Conchiglia protettiva, indossata sotto i pantaloncini;
- Cavigliere (non obbligatorie);
- Paradenti.
32.12 In occasione di Campionati Italiani, i contendenti non possono indossare calzoncini dello stesso colore.
32.13 Non è ammesso alla gara l'atleta sprovvisto del paradenti.
32.14 Non è consentito all'atleta portare la barba salvo previa autorizzazione dell'arbitro.

Art. 33 - Assistenti all'angolo
33.1 È fatto obbligo all'atleta di avere all'angolo almeno un assistente, ma non più di tre (nei dilettanti due).
33.2 È consentito assistere un atleta all'angolo solamente ai tesserati che abbiano la qualifica di: maestro, insegnante, aspirante insegnante.
33.3 Sarà consentito solamente a uno degli assistenti di salire sul ring, dentro le corde, durante il minuto di intervallo.

Art. 34 - Scorrettezze
Vedi regolamento specifico della disciplina.

---

REGOLAMENTAZIONI TECNICHE

Art. 35 - I guantoni
35.1 Per l'attività agonistica si devono utilizzare esclusivamente i guantoni che hanno ottenuto l'omologazione IKTA ITALIA.
35.2 Essi sono di pelle morbida e liscia, con imbottitura uniformemente distribuita sul dorso. I guantoni devono essere ben assicurati alla mano mediante apposite stringhe.

Art. 36 - Peso guantoni - Lunghezza bendaggi
36.1 Il peso dei guantoni è 284 grammi (10 once), dei quali 142 grammi (5 once) per rivestimento di pelle, fodere e imbottitura.
36.2 La lunghezza massima del bendaggio è di metri 1,828 e larghezza cm 5 o 7. Per le categorie mediomassimi, massimi leggeri e massimi è consentita una lunghezza di metri 2,438.
36.3 È consentita anche l'applicazione di una striscia di tessuto adesivo.
36.4 Per gli incontri di Campionato, i guantoni debbono essere sempre nuovi.
36.5 Il Commissario di Riunione e l'arbitro dell'incontro hanno sempre la facoltà di ordinare la sostituzione dei guanti.

Art. 37 - Distanza incontri
La distanza degli incontri può essere prevista in 3-4-5-6-8-9 riprese. Le riprese a seconda della categoria di appartenenza potranno essere da: 1:30 min, 2 min, 3 min. In caso di finale di torneo qualora il verdetto risulti di parità, verrà disputato un extra-round.

Art. 38 - Regolamentazione
38.1 Categorie: Classe A, Classe B, Classe C, Classe D

38.2 Durata rounds per categoria:
- Classe A: 3-5 round da 3 min. con 1 min. di pausa, o 5-9 round da 2 min. con 1 min. di pausa
- Classe B: 3 round da 3 min. con 1 min. di pausa
- Classe C: 3 round da 2 min. con 1 min. di pausa
- Classe D: 3 round da 1:30 minuti con 1 min. di pausa

38.3 Sono vietati gli incontri tra atleti la cui differenza di peso sia superiore a quella che intercorre tra il limite massimo e quello minimo della categoria.

Art. 39 - Disposizioni sanitarie per gli atleti
39.1 Per poter svolgere attività agonistica, l'atleta professionista dovrà rispettare le disposizioni sulla tutela sanitaria.
39.2 Dovrà poi sottoporsi ai controlli sanitari periodici, visita medica agonistica annuale.

---

UFFICIALI ADDETTI AL GIUDIZIO E MODALITÀ D'INTERVENTO

Art. 40 - Compiti e poteri dell'arbitro - Scopo primario
Il dovere principale dell'arbitro è quello di salvaguardare l'integrità fisica degli atleti.

Art. 41 - Compiti dell'arbitro
L'arbitro presta servizio sul ring. Egli deve:
- vigilare che le regole e la lealtà di gara siano strettamente osservate;
- controllare i guanti e l'abbigliamento;
- individuare l'assistente all'angolo autorizzato a entrare nel ring;
- mantenere il controllo della competizione in tutte le sue fasi;
- evitare che gli atleti in condizioni di inferiorità ricevano colpi;
- usare durante l'incontro i seguenti ordini: «stop», «break», «fight», «time»;
- ritirare, al termine dell'incontro, i cartellini di punteggio dei giudici;
- comunicare il verdetto al Commissario di Riunione;
- indicare il vincitore, per mezzo dell'alzata del braccio dell'atleta.

Art. 42 - Poteri dell'arbitro
42.1 L'arbitro ha il potere di:
- porre fine all'incontro ogni qualvolta ritenga che uno dei due atleti si trovi in stato di evidente inferiorità fisica o tecnica;
- porre fine all'incontro ogni qualvolta un atleta abbia riportato una ferita e non lo ritenga in grado di continuare;
- porre fine all'incontro in qualsiasi momento se un atleta non difende lealmente le sue possibilità;
- interrompere l'incontro per ammonire, richiamare o squalificare un atleta;
- interrompere l'incontro per ammonire o allontanare dall'angolo il secondo;
- interrompere l'incontro qualora si verifichi un inconveniente nella tenuta degli atleti;
- interpretare il Regolamento.

42.2 Le interruzioni dell'incontro, da parte dell'arbitro, devono essere tempestive.

Art. 43 - Preliminari dell'incontro
43.1 L'arbitro deve salire per primo sul quadrato e prendere posto all'angolo neutro.
43.2 Deve accertarsi dell'identità e dell'abbigliamento degli atleti.
43.3 Successivamente li chiama al centro del quadrato, invitandoli a stringersi la mano.
43.4 Con il comando «fight», dà inizio alla gara.
43.5 Durante l'incontro egli deve muoversi naturalmente, mantenendo il controllo visivo delle azioni.

Art. 44 - Sanzioni durante l'incontro
44.1 Ammonizione - L'ammonizione è un rimprovero verbale con invito a non commettere altre infrazioni.
44.2 L'arbitro per procedere all'ammonizione, interrompe l'incontro («stop») e deve evidenziare l'irregolarità con la prescritta mimica.
44.3 La somma di ammonizioni dà luogo al richiamo ufficiale.
44.4 Richiamo ufficiale - Il richiamo ufficiale ha lo scopo di penalizzare di un punto quell'atleta che, per somma di ammonizioni o per grave infrazione, determini questa sanzione.
44.5 L'arbitro per procedere al richiamo ufficiale, interrompe l'incontro («stop») e rende edotti i giudici di tale decisione.

Art. 45 - Il conteggio
45.1 Il conteggio ha lo scopo di dare un tempo di recupero a un atleta in difficoltà.
45.2 Il conteggio ha la durata minima di otto secondi.
45.3 L'arbitro, ogni qualvolta ritenga un atleta nelle condizioni di «considerato a terra» e «a terra», deve interrompere l'incontro iniziando simultaneamente a contare (one, two…).
45.4 Se l'avversario non si porta all'angolo neutro indicatogli, l'arbitro interrompe il conteggio.
45.5 L'arbitro, nel caso che ritenga necessario far soccorrere un atleta, interrompe il conteggio decretando la fine dell'incontro.
45.6 Qualora l'atleta rimanga a terra in stato di incoscienza è consentito solo al medico di salire sul quadrato.
45.7 Nel caso che un atleta sia stato contato e alla ripresa dell'incontro torni nella condizione di considerato a terra senza aver ricevuto nessun colpo, l'arbitro prosegue il conteggio precedentemente interrotto.
45.8 Quando entrambi gli atleti sono nelle condizioni di subire il conteggio, l'arbitro li conta contemporaneamente.
45.9 In tutti gli altri casi il gong sarà fatto suonare solo qualora l'arbitro, finito il conteggio, faccia riprendere l'incontro con l'ordine di "fight".

Art. 46 - Ripristino tenuta atleti durante l'incontro
46.1 Ripristino del paradenti - L'arbitro, constatata la perdita del paradenti da parte di un atleta, ferma l'incontro ("time").
46.2 Ripristino della conchiglia protettiva - L'arbitro deve ordinare l'interruzione dell'incontro ("time") e condurre l'atleta al proprio angolo.
46.3 In ogni altro caso concernente la tenuta degli atleti, l'arbitro provvede direttamente a ripristinare la situazione regolamentare.

Art. 47 - Le Giurie
47.1 Per ogni incontro possono essere designati:
- un arbitro giudice unico;
- un arbitro giudice coadiuvato da due giudici;
- un arbitro senza voto e tre giudici.
47.2 I giudici siederanno in posti riservati al Commissario di Riunione, al Supervisor ed eventuali rappresentanti della Federazione.

Art. 48 - I verdetti
48.1 L'esito di un incontro è deciso nei modi che seguono:
- V. P. Vittoria ai Punti
- V. T. P. Vittoria Tecnica ai Punti
- V. K. O. Vittoria per fuori combattimento
- V. ABB. Vittoria per Abbandono
- V. K. O. T. Vittoria per fuori combattimento Tecnico
- V. K. O. T. C. Vittoria per fuori combattimento Tecnico per ferita (Cut = Taglio)
- V. SQ. Vittoria per Squalifica dell'avversario
- N. Pareggio
- N. T. Pareggio Tecnico
- N. D. No Decision

48.2 V. P. Vittoria ai punti - Il verdetto ai punti viene assegnato quando entrambi gli atleti hanno portato a termine le riprese previste.

48.3 V. T. P. Vittoria Tecnica ai punti

48.4 V. K. O. Vittoria per fuori combattimento - Verdetto assegnato ad un atleta quando il suo avversario è a terra ed è contato dall'arbitro fino a dieci.

48.5 V. ABB. Vittoria per abbandono
- Un atleta vince per abbandono quando il suo avversario si ritira dalla contesa.
- Durante il conteggio dell'arbitro l'atleta non può abbandonare.

48.6 V. K. O. T. Vittoria per fuori combattimento tecnico - Un atleta vince per KOT quando l'arbitro ritiene che l'avversario si trovi in stato di evidente inferiorità.

48.7 V. K. O. T. C. Vittoria per fuori combattimento tecnico per ferita

48.8 V. SQ. Vittoria per squalifica dell'avversario
- Verdetto assegnato a favore di un atleta quando l'arbitro pronuncia la squalifica dell'altro atleta.
- L'arbitro ha il potere di squalificare uno degli atleti nei seguenti casi:
  - quando un atleta non difende lealmente le sue possibilità;
  - quando un atleta si è reso intenzionalmente colpevole di colpi proibiti o di falli;
  - quando un atleta abbandona la gara senza giustificato motivo.
- A seguito di un colpo basso, giudicato accidentale dall'arbitro, questi ha la facoltà di assegnare all'atleta colpito un massimo di cinque minuti per riprendersi.

48.9 N. Pareggio - Il verdetto di parità ha luogo quando entrambi gli atleti hanno portato a termine le riprese previste e si registra un verdetto pari dalla maggioranza dei giudici. Non esiste il pareggio nei tornei, dovrà essere data la preferenza.

48.10 N. T. Pareggio Tecnico

48.11 N. D. No decision - È pronunciato il verdetto di "No Decision" nei seguenti casi:
- L'arbitro squalifica entrambi gli atleti;
- Gli atleti sono entrambi nell'impossibilità di proseguire per ferita;
- Gli atleti sono entrambi fuori combattimento;
- Il Commissario di Riunione è costretto ad arrestare l'incontro per circostanze di forza maggiore.

Art. 49 - Decisioni in caso di ferita
49.1 Nei casi di interruzione del match a causa di una ferita, l'arbitro chiamerà il medico di servizio e prenderà in considerazione il suo consiglio.
49.2 Sarà l'arbitro a decidere se fermare l'incontro oppure autorizzarne il proseguimento.
49.3 Casi di ferita per testata:
- Testata intenzionale: quando una ferita è prodotta da una testata intenzionale, l'atleta che si è reso colpevole dell'infrazione perderà il match per squalifica.
- Testata non intenzionale: l'atleta ferito potrà ricevere un punto di deduzione.
49.4 Nel caso in cui la ferita si verifica prima del suono della campana per l'inizio della quinta ripresa, il verdetto finale sarà di "pari tecnico".
49.5 In tutte le situazioni in cui una ferita viene prodotta da colpi regolari, l'atleta non ferito risulterà il vincitore per K. O. T. C.

Art. 50 - Redazione dei cartellini - Criteri di giudizio
50.1 Al termine di ogni ripresa, l'arbitro-giudice e i giudici provvedono a registrare sul cartellino i punti di ciascun atleta:
- Vengono assegnati 10 punti all'atleta che ha vinto la ripresa.
- All'atleta soccombente viene assegnato un punteggio inferiore:
  - 1 punto se ha perso la ripresa
  - 2 punti se ha perso la ripresa ed è stato contato
  - 3 punti se ha perso la ripresa, è stato contato e ha subito un notevole numero di colpi.

50.2 Se l'arbitro ha impartito uno o più richiami ufficiali, il punteggio dell'atleta richiamato va penalizzato di un punto per ciascun richiamo.
50.3 I giudici devono indicare sui cartellini «W» allorché vi è un richiamo ufficiale.
50.4 Quando un atleta subisce un conteggio, l'arbitro giudice deve riportare sul cartellino la sigla «K. D.» e «K. D. H.» se il conteggio è stato determinato per colpi alla testa.
50.5 Controllate le somme, il giudice appone in calce al cartellino, insieme con la propria firma, il nome del vincitore o l'indicazione di «parità».
50.6 Il cartellino di norma non deve mai essere corretto. Nel caso di errore, deve circoscrivere il punteggio errato e porre la correzione controfirmata a fianco.

Art. 51 - Controllo dei cartellini
51.1 Al termine dell'incontro l'arbitro provvede a ritirare i cartellini dai singoli giudici e, dopo averli controllati, li consegna al Commissario di Riunione. Questi procede subito alla loro verifica.

Art. 52 - Proclamazione del verdetto
52.1 Il verdetto è proclamato dal Commissario di Riunione che, tramite l'annunciatore, darà lettura dei cartellini in occasione di incontri di campionato.

Art. 53 - Reclami ai verdetti
53.1 A seguito di presunto errore tecnico è possibile avanzare apposito reclamo. La richiesta deve essere presentata dalla Società al Commissario di Riunione entro 30 minuti dalla proclamazione del verdetto.
53.2 Entro tre giorni dall'incontro la Società deve inviare alla Federazione il reclamo ufficiale unitamente alla tassa di segreteria di euro 100,00 (restituita solo se il ricorso viene accolto).
53.3 La Commissione Esaminatrice è composta dal Rappresentante degli Arbitri, dal Rappresentante degli insegnanti e dal Presidente Federale.
53.4 Il giudizio, una volta emesso, sarà inappellabile.

Art. 54 - Requisiti per la disputa del Titolo Italiano
Per partecipare a incontri per il Titolo di Campione d'Italia è necessario essere cittadino italiano e regolarmente tesserato per la stagione in corso.

---

Il Presidente della IKTA Italia
Massimo Brizi

Il Responsabile Nazionale
Settore Arbitri e Giudici della IKTA Italia
Ascensi Ivan`
  },
  contattoPieno: {
    title: 'Regolamenti Contatto Pieno',
    description: 'Regole per Full Contact, Kick Boxing, K1, Thai Boxe, Muay Thai e MMA.',
    content: `REGOLAMENTI SPORT DA COMBATTIMENTO - CONTATTO PIENO

A cura di Ascensi Ivan
Arbitro Internazionale
Resp. Nazionale Settore Arbitri – Giudici

Questo regolamento è parte integrante di quello relativo alle Norme Generali.

---

REGOLAMENTO FULL CONTACT

STATUS DELL'ATLETA

Gli atleti di Full Contact accettano in toto lo Statuto e i Regolamenti della stessa. Essi si impegnano altresì (su richiesta della Federazione IKTA) a mettersi a disposizione della stessa per l'effettuazione di gare di interesse Federale a carattere Regionale, Interregionale, Nazionale e Internazionale.

Art. 1 - I tesserati possono partecipare a gare di Full Contact solo dai 18 anni compiuti, ai 40 anni d'età. Essi sono divisi non in rapporto all'età, ma sulla base della loro esperienza e validità tecnica. La Commissione Tecnica Nazionale è l'organo preposto alla valutazione degli atleti di Full Contact.

Essi si dividono in:
- Classe A
- Classe B
- Classe C
- Classe D

All'inizio di ciascun anno di attività, per riottenere l'affiliazione, essi dovranno sottoporsi a visita medica di controllo effettuata presso un Centro di Medicina Sportiva.

Art. 2 - A giudizio della Commissione Tecnica saranno declassati quegli atleti di Classe A e Classe B che durante l'anno sportivo non abbiano svolto una adeguata attività, oppure non siano più fisicamente o tecnicamente idonei.

Art. 3 - Durata incontri
Nei Tornei di Classe A e Classe B: 3 riprese da 2 minuti ciascuna, con intervallo di 1 minuto tra un round e l'altro, in caso di parità si svolgerà 1 extraround da 2 minuti.
Per le Finali: 3 riprese da 2 minuti e in caso di parità si svolgerà 1 o 2 extraround da 2 minuti.

Nei Galà i round possono svolgersi sulla distanza di:
- Classe A: 7/8/9 rounds da 2 minuti
- Classe B: 5 rounds da 2 minuti
- Classe C: 3 rounds da 2 minuti
- Classe D: 3 rounds da 1:30 minuti

Art. 4 - La relativa domanda di affiliazione per gli atleti di Full Contact agonisti che non avessero ancora compiuto il 18esimo anno di età dovrà essere munita di "autorizzazione" da parte di chi esercita la patria podestà.

Art. 5 - L'atleta di Full Contact non può essere ammesso al combattimento se non dopo un periodo di preparazione specifica in palestra che non dovrà essere inferiore ai 12 mesi a partire dalla prima data di affiliazione.

Art. 6 - K.O. e sospensioni
L'atleta di Full Contact che subisce un K.O. con perdita di coscienza per colpo al capo deve sospendere l'attività:
- 1° K.O. con perdita di coscienza: sospensione per mesi due
- 2° K.O. con perdita di coscienza: sospensione per mesi quattro
- 3° K.O. con perdita di coscienza: sospensione per mesi sei
- 4° K.O. con perdita di coscienza: sospensione definitiva da ogni attività

Quindici giorni prima della ripresa degli allenamenti, l'atleta che ha subito un K.O. con perdita di coscienza dovrà rifare l'elettroencefalogramma.

---

ATTIVITÀ AGONISTICA - NORME

Art. 7 - Pesi: Vedi Ranking IKTA

Art. 8 - Prima di ogni incontro è obbligatorio il controllo del peso e una visita medica compiuta da un medico che visionerà le Certificazioni Sanitarie previste.

Art. 9 - Si potrà procedere nel torneo o nella riunione solo quando il Commissario del peso e il Medico avranno dichiarato chiuse le rispettive operazioni.

Art. 10 - Il controllo del peso e quello sanitario devono, di norma, avvenire almeno 5 ore prima lo svolgimento di tornei per atleti di Classe A e Classe B.

Art. 11 - Alle operazioni di controllo del peso sono ammessi solo l'atleta che dovrà gareggiare e il suo allenatore. L'atleta dovrà presentarsi vestito delle sole mutande. Se risultasse fuori peso alla prima operazione, avrà a disposizione massimo 60 minuti per rientrare nella categoria desiderata.

Art. 12 - Se alle operazioni di peso entrambi gli atleti superano il limite della categoria, nessuno dei due ha facoltà di rifiutare l'incontro.

---

REGOLE DEL FULL CONTACT

Art. 13 - L'arbitro federale o il Commissario di Riunione controllerà negli spogliatoi, o direttamente sul ring in caso di torneo, il bendaggio degli atleti prima dell'incontro.

Art. 14 - L'arbitro salirà per primo sul quadrato, poi i contendenti con i rispettivi secondi che dovranno salutarlo. Il primo chiamato andrà all'angolo rosso, il secondo chiamato all'angolo blu. Se uno dei combattenti tardasse a salire, trascorsi 5 minuti dalla chiamata sarà dato perdente per forfait.

Art. 15 - Prima di cominciare la gara di Full Contact l'arbitro dovrà procedere alle seguenti operazioni:
- controllo della tenuta degli atleti accertandosi che siano muniti di conchiglia e paradenti;
- controllo di tutte le protezioni e della regolarità dei bendaggi;
- convocare al centro del quadrato i due contendenti completamente abbigliati per l'incontro;
- invitare i contendenti a toccarsi i guanti in segno di saluto;
- accertarsi che il ring sia perfettamente regolare;
- a inizio di ripresa invitare gli atleti al centro del ring e dare inizio all'incontro con l'ordine di "fight".

PARTI DEL CORPO USATE PER COLPIRE NEL FULL CONTACT

Art. 16 - Nel Full Contact si usano i calci e i pugni. Con gli arti inferiori è valido colpire con l'avampiede, con il taglio del piede, con il collo del piede e con il tallone. Con gli arti superiori è valido colpire con i pugni ben chiusi nella loro parte frontale (ossa metacarpiche).

Art. 17 - Con le anzidette parti del corpo, è valido colpire solo la parte frontale e laterale del corpo dalla cintola in su e lo stesso per il capo.

Art. 18 - Tecniche consentite:
- tutte le tecniche di pugno della boxe (il colpo con dorso della mano in rotazione non è valido);
- tutte le tecniche di calcio dalla cintola in su;
- la spazzata rasoterra nel senso delle articolazioni: sotto la caviglia (malleolo).

Art. 19 - Tecniche proibite:
- colpire senza controllo alcuno, di calcio e di pugno;
- attaccare con la testa, con i gomiti, con le ginocchia;
- attaccare o simulare un attacco agli occhi;
- mordere e graffiare;
- colpire al triangolo genitale, la gola, i reni, la nuca, sopra e dietro la testa, la schiena e dietro le spalle, il viso con il ginocchio e con il dorso della mano in rotazione (Spinning back fist);
- non si può colpire a mano aperta, sia di palmo che di taglio, ma solo a mano serrata con la parte delle nocche;
- afferrare le corde per colpire l'avversario;
- proiettare l'avversario a terra con le braccia oppure fare sgambetti;
- usare tecniche di lotta;
- trattenere la gamba calciante dell'avversario a scopo ostruzionistico o per colpire;
- legare deliberatamente le braccia dell'avversario;
- eseguire la presa all'altezza delle vertebre lombari (detta "dell'orso"), eseguire leve articolari;
- eseguire spazzate in senso contrario all'articolazione, colpire la tibia;
- parlare durante l'incontro, gridare senza ragione, fare gesti irriguardosi;
- venire meno in qualsiasi momento all'etica sportiva;
- perdere volutamente tempo, evitare volutamente il combattimento;
- lasciare cadere volontariamente il paradenti;
- uscire deliberatamente dal luogo di gara (1° uscita ammonizione, 2° uscita richiamo, 3° uscita meno un punto, 4° uscita meno un punto, 5° uscita squalifica);
- buttarsi a terra senza ragione o cadere per evitare l'attacco avversario;
- non eseguire immediatamente gli ordini dell'arbitro;
- girare la schiena su azione dell'avversario;
- lanciare tecniche cieche;
- commentare, anche solo con gesti o espressioni del viso, l'operato degli arbitri.

Art. 20 - Quando i due contendenti sono legati l'uno all'altro e si trovano in fase di "clinch", l'arbitro deve intervenire prontamente e dare l'ordine di "break" - separarsi.

Art. 21 - L'arbitro deve fermare subito l'incontro quando:
- uno dei due contendenti trovasi con parte del corpo al di fuori delle corde;
- quando uno di essi è aggrappato alle corde per rialzarsi da terra;
- quando uno dei due contendenti si volta volontariamente dando la schiena;
- quando uno di essi, colpito violentemente, non è in grado di continuare il combattimento;
- ogni qualvolta, pur essendo in piedi, uno dei due contendenti mostra segni evidenti di impotenza;
- quando uno di essi è abbandonato sulle corde o appoggiato ad esse incapace di difendersi;
- quando uno dei due combattenti sanguina troppo o ha delle ferite (l'arbitro deve chiedere l'intervento del medico);
- quando un combattente è ferito, l'arbitro gli concede 1 minuto di tempo per tornare al combattimento.

---

REGOLAMENTO KICK BOXING

DEFINIZIONE

La Kick Boxing è una forma di combattimento che utilizza tutte le tecniche del Full Contact alle quali si aggiunge la possibilità di usare la tibia nel calciare in ogni parte del corpo consentito e di attaccare le cosce dell'avversario in ogni loro parte. È bene precisare che la coscia dell'avversario può essere colpita in ogni sua parte, ma solo con calci circolari tirati col collo del piede o con la tibia.

Art. 1 - I tesserati possono partecipare a gare solo: dai 17 anni compiuti ai 40 anni d'età. Essi sono divisi in: Classe A, Classe B, Classe C, Classe D

Art. 3 - Durata incontri
Nei Tornei di Classe A e Classe B: 3 riprese da 2 minuti ciascuna, con intervallo di 1 minuto.
Nei Galà:
- Classe A: 7/8/9 rounds da 2 minuti
- Classe B: 5 rounds da 2 minuti
- Classe C: 3 rounds da 2 minuti
- Classe D: 3 rounds da 1:30 minuti

Art. 18 - Tecniche consentite:
- tutte le tecniche di pugno della boxe;
- tutte le tecniche di calcio dalla cintola in su;
- tirare calci circolari alla coscia;
- la spazzata rasoterra nel senso delle articolazioni.

---

REGOLAMENTO K1

DEFINIZIONE

Il K1 è una forma di combattimento che utilizza tutte le tecniche del full contact alle quali si aggiunge la possibilità di usare la tibia nel calciare e di attaccare le gambe dell'avversario in ogni loro parte. È bene precisare che la gamba dell'avversario può essere colpita in ogni sua parte, ma solo con calci circolari.

I tesserati possono partecipare a gare solo dai 17 anni compiuti ai 40 anni d'età. Essi si dividono in: Classe A, Classe B, Classe C, Classe D

DURATA DEGLI INCONTRI

Nei Tornei di Classe A e Classe B: 3 riprese da 2 min. ciascuna, con intervallo di 1 min.
Per le Finali: 3 riprese da 2 minuti con 1 o 2 extraround.

Nei Galà:
- Classe A: 5 rounds da 3 minuti, o 3 rounds da 3 min. con 3 min. di extraround, o 5 rounds da 2 min.
- Classe B: 5 rounds da 2 minuti, o 3 rounds da 3 minuti con 3 minuti di extraround
- Classe C: 3 rounds da 2 minuti
- Classe D: 3 rounds da 1:30 minuti

PROTEZIONI E BENDAGGI

Art. 7 - Gli atleti di K1 useranno tutti guantoni da 10 once omologati.
Art. 8 - Il bendaggio alle mani per gli atleti di K1 è obbligatorio. Esso potrà essere formato da una garza oppure da una benda elastica della lunghezza di m 2,50 e larghezza cm 4,5.
Art. 12 - L'uso del paratibia è facoltativo nelle gare amatoriali, mentre è vietato negli incontri pro.
Art. 14 - È fatto obbligo agli atleti di K1 di utilizzare il casco protettivo (per la classe B, C e D).

PARTI DEL CORPO USATE PER COLPIRE NEL K1

Art. 34 - Nella K1 si usano calci, pugni e ginocchia. Con gli arti inferiori è valido colpire con l'avampiede, con il taglio del piede, con il collo del piede, con il tallone con la tibia e le ginocchia.

Art. 36 - Tecniche consentite:
- tutte le tecniche di pugno della boxe;
- tutte le tecniche di calcio dalla cintola in su;
- tirare calci alla coscia con traiettoria circolare;
- ginocchiate al viso solo come colpo singolo;
- ginocchiate al tronco anche in clinch;
- trattenere la gamba calciante dell'avversario per portare un singolo colpo;
- la spazzata rasoterra nel senso delle articolazioni.

Art. 37 - Tecniche proibite:
- colpire senza controllo alcuno;
- attaccare con la testa, con i gomiti;
- mordere e graffiare;
- colpire al triangolo genitale, la gola, i reni, la nuca, sopra e dietro la testa;
- colpire il viso con il ginocchio (classe D e classe C);
- afferrare le corde per colpire l'avversario;
- proiettare l'avversario a terra con le braccia;
- abbassare la testa dell'avversario;
- eseguire la presa all'altezza delle vertebre lombari (detta "dell'orso");
- eseguire spazzate in senso contrario;
- colpire la tibia;
- lanciare tecniche cieche.

---

REGOLAMENTO THAI BOXE E MUAY THAI

La differenza tra Thai Boxe e Muay Thai è l'uso dei gomiti che nella Thai Boxe è vietato. Inoltre nella Thai Boxe non è valido il pugno girato.

CLASSI DI COMBATTIMENTO:
- Classe A (combattenti che combattono senza protezioni)
- Classe B (combattenti che combattono con protezioni limitate con oltre 15 incontri)
- Classe C (tutti i combattenti con dai 3 ai 15 incontri)
- Classe D (tutti i combattenti con meno di 3 incontri)

DURATA DEL COMBATTIMENTO

Nei Tornei di Classe A e Classe B: 3 riprese da 2 minuti ciascuna.
Nei Galà:
- Classe A: 5 rounds da 3 minuti, o 3 rounds da 3 minuti con 3 minuti di extraround
- Classe B: 3 rounds da 3 minuti con 3 minuti di extraround
- Classe C: 3 rounds da 2 minuti
- Classe D: 3 rounds da 1:30 minuti

PROTEZIONI

Classe A e Classe B:
- bendaggi e cavigliere elastiche
- guantoni 10 oz
- paradenti
- conchiglia

Classe C e Classe D:
- bendaggi e cavigliere elastiche
- caschetto protettivo senza parazigomi
- guantoni 10 oz
- paradenti
- conchiglia
- paratibie con piede

TECNICHE

Tecniche di pugno: Diretto, Gancio, Montante, Back fist e Spinning back Fist (solo per la Muay Thai)
Tecniche di calcio: Frontale (front kick), Laterale (side kick), Circolare (a tutti i livelli), Basso (low kick), Medio (middle kick), Alto (high kick), Girato (spinning kick), Ad ascia (axe kick), A uncino (Hook kick). È ammesso spazzare la gamba dell'avversario.
Tecniche di ginocchio: frontali, oblique, circolari e saltate sia al corpo che al viso (nelle Classi D e C solo al corpo)
Tecniche di gomito (solo Muay Thai): frontali, oblique, circolari e saltate

CLINCH

Il clinch non ha una durata purché attivo. Durante il clinch le ginocchiate devono essere portate con determinazione. Sono valide le proiezioni purché non di anca. Non sono ammesse tecniche di lotta tipo judo. Non è valida la presa lombare (presa dell'orso).

---

REGOLAMENTO MMA

NORME GENERALI

Art. 1 - Protezioni
Nelle classi D e C sono obbligatori: paradenti, guantini, caschetto, paratibie, conchiglia.
Nelle classi B e A le protezioni obbligatorie sono: guantini, paradenti, conchiglia.

Art. 2 - Durata degli incontri
- Classe D: 1 round x 4 minuti o 2 rounds x 2 minuti (esordienti fino a 2 match)
- Classe C: 1 round x 4 minuti o 2 rounds x 3 minuti (atleti dai 2 ai 5 match disputati)
- Classe B: 2 rounds x 5 minuti (dai 5 ai 10 match disputati)
- Classe A: 2 rounds x 5 minuti (titolo 3 rounds x 5 minuti; atleti con più di 10 match disputati)

Art. 4 - Regole
Nella MMA è consentito colpire con pugni, calci, ginocchiate, fare proiezioni, lottare a terra, fare sottomissioni tramite leve, chiavi articolari e strangolamenti. Il conteggio da parte di un'atleta è consentito solo in piedi. A terra è consentita la sottomissione per resa dell'avversario.

È vietato colpire con gomiti e avambracci. A terra è vietato colpire un avversario al suolo con calci e ginocchiate alla testa.

È inoltre vietato:
- colpire i genitali, la gola o la colonna vertebrale;
- tirare i capelli;
- mordere o graffiare;
- afferrare o portare in leva le dita di mani e piedi.

Art. 5 - Verdetti
K.O. - vittoria prima del limite (in piedi)
K.O.T. - ko tecnico in caso l'arbitro ritenga un atleta non in grado di continuare
SUB. - sottomissione
SQ. - squalifica
DRAW - pareggio
N.C. - no contest
POINT - punti

---

REGOLAMENTO SUBMISSION GRAPPLING

Art. 1 - Il combattimento avviene tra due atleti in base alle categorie d'appartenenza stabilite su regolamento in limiti di peso.

Art. 3 - L'area di combattimento sarà minimo 5x5 e max 8x8 metri, su tatami, ring o gabbia.

PROTEZIONI OBBLIGATORIE:
- conchiglia
- paradenti

PROTEZIONI FACOLTATIVE:
- ginocchiere
- gomitiere
- paraorecchie
- paragomito o paraginocchio imbottiti
- scarpette da lotta

TECNICHE AMMESSE:
- Strangolamenti (tranne la presa alla trachea con la mano)
- Qualsiasi leva alle braccia o chiave articolare a spalla, gomito o polso
- Qualsiasi leva in asse o chiave NON in torsione a caviglia, piede, ginocchio
- Qualsiasi leva o chiave alle gambe

TECNICHE VIETATE:
- Portare colpi di qualsiasi genere
- Infilare le dita negli occhi o nella bocca dell'avversario
- Tirare o afferrare i capelli o le orecchie dell'avversario
- Mordere, graffiare o pizzicare l'avversario
- Applicare prese o leve alle dita di piedi o mani
- Colpire o premere l'area dei genitali
- Agire con mano, ginocchio o gomito sul viso
- Usare sostanze scivolose e oli
- Applicare chiavi o leve al collo o alla cervicale
- Spingere intenzionalmente l'avversario fuori dal tatami
- Proiettare intenzionalmente l'avversario sulla testa o sul collo
- Leva al tallone in torsione interna ed esterna (heel hook)
- Sbattere l'avversario a terra sulla schiena con violenza

ESITI DI UN INCONTRO:
- Vittoria ai punti
- Vittoria per getto della spugna
- Vittoria per fuori combattimento (Sottomissione)
- Vittoria per superiorità sull'avversario
- Vittoria per capacità di rimanere sempre in piedi
- Vittoria per ferita o intervento medico
- Vittoria per abbandono
- Vittoria per squalifica dell'avversario
- Vittoria per 3 schienate
- Vittoria per blocco delle spalle dell'avversario a terra per 3 secondi x 3 volte
- Vittoria per proiezione senza andare a terra (2 volte)
- Pareggio
- No decision

---

Il Presidente della IKTA Italia
Massimo Brizi

Il Responsabile Nazionale
Settore Arbitri e Giudici della IKTA Italia
Ascensi Ivan`
  },
  contattoLeggero: {
    title: 'Regolamenti Contatto Leggero',
    description: 'Regole per discipline a contatto leggero e light.',
    content: `REGOLAMENTI CONTATTO LEGGERO

A cura di Ascensi Ivan
Arbitro Internazionale
Resp. Nazionale Settore Arbitri – Giudici

Civitavecchia - Settembre 2012

---

REGOLAMENTO - NORME GENERALI

Art. 1 - Vale tutto quello stabilito per il Contatto Pieno a esclusione di:
- colpi affondati (le tecniche devono essere controllate)
- tecniche difficilmente controllabili quali:
  - pugno saltato
  - calcio ad ascia
  - calci girati di qualsiasi tipo
  - qualsiasi tecnica in salto

Art. 2 - In particolare:

LIGHT CONTACT
Fa riferimento al regolamento di Full Contact.

FREE PUNCH LIGHT
Disciplina propedeutica alla kickboxing: sono ammessi i colpi di braccia (diretti, ganci e montanti); vietati i colpi portati con l'interno, la parte laterale del guantone. Possibile colpire col dorso del pugno. Vietato calciare e colpire con le gambe. Vietato lo spinning backfist. Possibilità di colpire con pugni saltati (diretti, ganci, montanti) tipici della kickboxing. Indossare protezioni complete da kickboxing compresi parastinchi essendo la Free Punch Light una disciplina propedeutica alla kickboxing.

KICK BOXING LIGHT
Fa riferimento al regolamento di Kick Boxing.

K1 LIGHT
Fa riferimento al regolamento di K1.

THAI BOXE TECNICA
Fa riferimento al regolamento di Thai Boxe.

MMA LIGHT
Fa riferimento al regolamento di MMA.

SANDA LIGHT
Fa riferimento al regolamento Sanda.

MUAY THAI LIGHT
Fa riferimento al regolamento Muay Thai.

Art. 3 - Verdetti
Non sono previsti conteggi pertanto sono da escludersi i verdetti per:
K.O. - K.O.T. - K.O.T.C.

Art. 4 - Squalifica
Nel caso in cui un atleta sia impossibilitato a continuare l'incontro a causa di un colpo portato senza controllo, il verdetto sarà di squalifica dell'avversario.

---

PROTEZIONI

Art. 5 - Le protezioni obbligatorie per tutte le discipline sono:
- caschetto IKTA
- paradenti
- guantoni da 10 once IKTA

Art. 6 - In aggiunta sono obbligatorie anche:
- Free Punch Light: scarpette ginniche (con suola liscia) e parastinchi
- Kick Boxing Light: calzari e parastinchi
- Thai Boxe Tecnica e K1 Light: parastinchi e para-piede unito

Art. 7 - Le protezioni facoltative per i minori sono:
- caschetto con griglia o parazigomi
- corpetto

---

TEMPO DI COMPETIZIONE

Art. 8 - Le gare si disputeranno sui tre rounds da 1 minuto o 1 minuto e trenta secondi con una pausa di 30 secondi o 1 minuto.

---

Il Presidente della IKTA Italia
Massimo Brizi

Il Responsabile Nazionale
Settore Arbitri e Giudici della IKTA Italia
Ascensi Ivan`
  }
};

export default function RegolamentoModal() {
  const [selectedRegolamento, setSelectedRegolamento] = useState<string | null>(null);

  const openModal = (key: string) => {
    setSelectedRegolamento(key);
  };

  const closeModal = () => {
    setSelectedRegolamento(null);
  };

  useEffect(() => {
    if (selectedRegolamento) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedRegolamento]);

  const currentRegolamento = selectedRegolamento ? regolamenti[selectedRegolamento as keyof typeof regolamenti] : null;

  return (
    <>
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {Object.entries(regolamenti).map(([key, reg]) => (
          <div key={key} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 text-center flex flex-col items-center">
            <div className="w-12 h-12 bg-[#1e40af]/10 rounded-lg flex items-center justify-center mb-4" style={{ marginTop: '1rem' }}>
              <svg className="w-6 h-6 text-[#1e40af]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2">{reg.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{reg.description}</p>
            <button
              onClick={() => openModal(key)}
              className="bg-[#1e40af] text-white font-semibold text-sm px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-[#1e3a8a] transition-colors shadow-md"
              style={{ marginBottom: '1rem' }}
            >
              Leggi ora
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedRegolamento && currentRegolamento && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center"
          style={{ padding: '2rem 2rem 1rem 2rem' }}
          onClick={closeModal}
        >
          <div
            className="bg-white w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-[#1e40af] text-white py-4 flex items-center justify-between" style={{ padding: '1rem 1.5rem' }}>
              <h2 className="text-xl font-bold">{currentRegolamento.title}</h2>
              <button
                onClick={closeModal}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-80px)]" style={{ padding: '1.5rem 2rem' }}>
              <div className="prose prose-sm max-w-none">
                {currentRegolamento.content.split('\n').map((line, i) => {
                  if (line.startsWith('---')) {
                    return <hr key={i} className="my-6 border-gray-200" />;
                  }
                  if (line.match(/^(REGOLAMENTO|NORME|SOMMARIO|PROTEZIONI|TEMPO|ALLESTIMENTO|RIUNIONI|PENALI|MODALITÀ|REGOLAMENTAZIONI|UFFICIALI|ATTIVITÀ|STATUS|DEFINIZIONE|DURATA|PARTI|CLASSI|CLINCH|ESITI|TECNICHE)/)) {
                    return <h2 key={i} className="text-xl font-bold text-[#1e40af] mt-6 mb-3">{line}</h2>;
                  }
                  if (line.match(/^Art\. \d+/)) {
                    return <h3 key={i} className="text-lg font-semibold text-gray-900 mt-4 mb-2">{line}</h3>;
                  }
                  if (line.startsWith('- ')) {
                    return <li key={i} className="ml-4 text-gray-700">{line.substring(2)}</li>;
                  }
                  if (line.trim() === '') {
                    return <br key={i} />;
                  }
                  return <p key={i} className="text-gray-700 mb-2">{line}</p>;
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
