# Funnel di vendita corsi IKTA — Design

Data: 6 maggio 2026
Owner: Edoardo (dev) + Massimo Brizi (business)
Status: Draft, in attesa review

---

## Contesto

IKTA vende 15 corsi di certificazione istruttore (5 discipline × 3 livelli) a 490€ ciascuno. Il diploma rilasciato è un **Diploma Nazionale Libertas**, equipollente al sistema S.Na.Q. del CONI, con iscrizione all'Albo Nazionale Libertas. È un asset di valore reale che la concorrenza vende tipicamente a 800–1500€.

Negli ultimi 20 anni Massimo Brizi (presidente) ha venduto solo tramite passaparola. Il sito non ha mai generato vendite online. Esiste una pagina IG `@iktaitalia` con reel educational (tecniche, consigli) ma senza CTA verso i corsi.

**Bottleneck attuale**: pochi lead in entrata. Il bottleneck NON è la conversione (chi chiede info, di solito acquista) né la capacità operativa (i corsi FAD scalano).

**Vincoli**:
- Filosofia ROI-first: niente budget ads prima che il funnel organico abbia validato il messaggio.
- Esame pratico in sede (Civitavecchia) per i livelli che lo richiedono → la capacità non è illimitata, ma per ora non è il vincolo.
- Massimo gestisce direttamente le iscrizioni via WhatsApp.

## Obiettivi

**Outcome di business** (entro 90 giorni dal go-live):
1. Generare ≥30 lead qualificati / mese (download lead magnet + opt-in email)
2. Tasso di conversione lead → iscritto ≥ 8%
3. ≥3-5 iscrizioni / mese da canale online (vs ~0 oggi)

**Outcome tecnico**:
4. Funnel completo testabile in locale prima del go-live, senza toccare il sito di produzione
5. Pagine dinamiche per disciplina con singolo template (no duplicazione)
6. Integrazione con Brevo per email transazionali e nurture sequence
7. Tutti i prezzi restano 490€ in v1 (decisione confermata, da rivalutare dopo i primi dati di vendita)

## Posizionamento

### Frase di posizionamento (corretta dopo analisi competitor FIAMS)

IKTA non vince sul prezzo (490€ è prezzo di mercato standard, allineato con FIAMS e altri EPS riconosciuti CONI). IKTA vince sulla **specializzazione**:

> IKTA e l'unica federazione italiana **specializzata negli sport da combattimento**: Kick Boxing, Muay Thai, MMA, Pugilato, Difesa Personale. 20 anni di Massimo Brizi, 60+ istruttori in rete, gare e ranking ufficiali. I diplomi S.Na.Q. CONI sono identici a quelli di altre EPS generaliste; cambia chi insegna e con chi entri in rete.

### Claim hero pagina formazione

```
Diploma istruttore S.Na.Q., riconosciuto CONI.
Da chi insegna fighting da 20 anni.

Diploma Nazionale Libertas, iscrizione Albo CONI, RC professionale inclusa.
FAD online H24, esame pratico a Civitavecchia. 490€ per livello.

[Scarica la guida gratuita]   [Vedi i corsi]
```

### Cosa NON scriviamo

- "La piattaforma del futuro" / "Forma il tuo futuro" / "Diventa il numero uno" → corporate-vuoto
- Em dash nei copy UI (regola progetto)
- Qualunque claim non verificabile con un dato

## Architettura del funnel

```
INTERESSE      →  LEAD CAPTURE     →  NURTURE         →  VENDITA       →  ALUMNI / LOOP
(IG + SEO)        (Lead magnet)      (Brevo, 5-7 gg)    (Pagina corso)   (Albo + referral)
```

### Step 1 — INTERESSE

- **IG @iktaitalia**: ogni nuovo reel ha CTA "Guida gratuita su come diventare istruttore CONI di [disciplina], link in bio"
- **SEO sito**: ottimizzazione `/formazione` e nuove `/formazione/[disciplina]` su keyword italiane mirate. Esempi di keyword target:
  - `corso istruttore kick boxing online`
  - `diventare istruttore CONI muay thai`
  - `certificazione S.Na.Q. arti marziali`
  - `corso istruttore MMA Italia`
  - `diploma istruttore pugilato online`
  - `corso istruttore difesa personale riconosciuto`
- **Passaparola istruttori**: programma referral con i 60+ certificati esistenti (fase 2, dopo go-live)

### Step 2 — LEAD CAPTURE

**Lead magnet**: PDF gratuito "Guida: Diventa istruttore di sport da combattimento riconosciuto CONI in 6 mesi"

Contenuto (15-20 pagine):
- Cos'è una certificazione CONI e perché conta
- I 3 livelli S.Na.Q. e cosa puoi fare a ciascuno
- Quanto guadagna un istruttore certificato in Italia (dati realistici)
- Il percorso: come scegliere disciplina e livello
- 10 domande da farsi prima di iscriversi a un corso

**Form di cattura** (2 campi):
- Email (required)
- Disciplina di interesse (select, segmentazione email)

**CTA**: "Scarica la guida — niente spam, decidi tu se restare."

**Hosting PDF**: `/risorse/guida-istruttore.pdf` in `/public/`. Generato esternamente (Google Docs → export PDF), nessuna generazione runtime.

### Step 3 — NURTURE (Brevo)

Sequenza automatica di 5 email + 1 recap, attivata dal download:

| Giorno | Tema | Obiettivo |
|---|---|---|
| 0 | Conferma + link guida | Consegna il prodotto |
| 1 | "Perché ho creato IKTA: 20 anni di palestre" (autorità Massimo) | Costruzione fiducia |
| 2 | "La differenza tra un corso privato e una certificazione S.Na.Q." | Educazione posizionamento |
| 3 | Caso reale: storia di un istruttore della rete | Social proof concreto |
| 4 | "Cosa rende un diploma S.Na.Q. diverso da un attestato qualunque" | Posizionamento qualita |
| 5 | CTA: scegli il tuo corso + bonus iscrizione entro 7 giorni | Vendita con scarsità reale |
| 7 | Recap + ultima chiamata | Recupero indecisi |

**Tecnologia**: Brevo (ex Sendinblue), tier free fino a 300 invii/giorno. API SMTP + transactional templates.

### Step 4 — VENDITA

5 pagine dedicate per disciplina:
- `/formazione/pugilato`
- `/formazione/mma`
- `/formazione/muay-thai`
- `/formazione/kick-boxing`
- `/formazione/difesa-personale`

**Struttura singola pagina disciplina** (decisa dopo analisi competitor FIAMS):
1. Hero: diploma fac-simile + claim disciplina-specifico + ore di studio + sede esame Civitavecchia
2. Trust strip: loghi CONI / Libertas / Unitelematica / FIAMS
3. **"A chi si rivolge"** diviso per livello (vinto da FIAMS, ora copiato):
   - Livello 1 Allenatore → bambini e giovani
   - Livello 2 Istruttore → ragazzi, adulti, agonisti
   - Livello 3 Maestro → atleti professionisti
4. "Cosa ricevi": diploma EPS-CONI + Tesserino + Albo + RC inclusa
5. I 3 livelli con prezzo (tutti 490€), durata in **ore di studio** dichiarate per livello (sostituiscono i CFU che FIAMS usa; noi non li dichiariamo)
6. I moduli del corso (15-22 per livello, dati esistenti in CorsiAccordion estratti)
7. **Esami e valutazione** (rubato da FIAMS):
   - Quiz simulativi durante il corso
   - Esame finale: quiz a risposta multipla, soglia minima 70% per il diploma
   - Esame pratico in sede a Civitavecchia (per i livelli che lo richiedono)
8. Social proof: 3 testimonial + numeri verificabili (60+ istruttori, 22 titoli mondiali, dal 2012)
9. FAQ: 8-10 domande reali (gap di FIAMS, opportunita SEO)
10. CTA finale: WhatsApp diretto con testo **precompilato specifico per disciplina** (es. "Salve, sono interessato al corso istruttore di [Disciplina]") — il CTA esistente usa testo generico "Salve, volevo chiedere delle informazioni" che va sostituito. **Niente carrello e-commerce in v1** (decisione confermata: il flusso resta lead magnet + email + WhatsApp + chiusura manuale di Massimo).

**Tecnologia**: una sola route dinamica `/formazione/[disciplina]/page.tsx` + JSON dati discipline. SSG (`generateStaticParams`).

### Step 5 — ALUMNI / LOOP

Fase post-MVP. Programma referral attivato dopo i primi 10 nuovi iscritti:
- Sconto -10% sul livello successivo per chi porta un iscritto
- Email periodica agli alumni con news federazione
- Chiusura del cerchio: alumni diventano canale acquisizione

## Pagine e componenti

### Pagine NUOVE
| Path | Tipo | Scopo |
|---|---|---|
| `/formazione/[disciplina]` | SSG dinamica | Pagina vendita per disciplina (×5) |
| `/grazie` | Static | Post-iscrizione lead magnet |
| `/risorse/guida-istruttore` | PDF in /public + landing | Lead magnet download gated |

### Pagine MODIFICATE
| Path | Modifica |
|---|---|
| `/formazione` | Diventa indice delle 5 pagine disciplina + lead magnet form in alto |
| `/` (home) | Trust strip sotto al titolo + sezione "Diventa istruttore" |
| `/chi-siamo` | Box "Massimo Brizi" (foto + firma + storia 20 anni) |

### Componenti NUOVI

```
src/components/
  funnel/
    DiplomaCard.tsx          // Fac-simile diploma Libertas (SVG/PNG dati anonimi)
    LeadMagnetForm.tsx       // Email + disciplina + submit (client, fetch a Brevo API)
    PriceAnchor.tsx          // 490€ vs media mercato 1200€
    TestimonialCard.tsx      // Foto + nome + livello + estratto + numero albo
    TrustStrip.tsx           // Loghi CONI / Libertas / Unitelematica / FIAMS
    DisciplineHero.tsx       // Hero standard per pagina disciplina
    FormazioneFaq.tsx        // Accordion FAQ
  CorsoLivelliCards.tsx      // 3 livelli con prezzo (refactor da accordion esistente)
```

### Dati discipline

**Rilevazione**: i dati dei corsi sono attualmente hardcoded dentro `src/components/CorsiAccordion.tsx` (1034 righe, dati misti a JSX). Ogni corso ha gia struttura ricca: prezzo, descrizione, didattica, collaborazioni, 15+ moduli con topics, competenze, diplomi.

**Refactor**: estrazione dei dati in un file separato `src/data/discipline-corsi.ts` come single source of truth, consumato sia dal `CorsiAccordion` esistente sia dalle nuove pagine disciplina.

```typescript
export type Modulo = {
  titolo: string;
  topics: string[];
};

export type Livello = {
  nome: string;           // "1° Livello - Allenatore"
  prezzo: number;         // 490
  descrizione: string;
  didattica: string[];
  collaborazioni: string[];
  moduli: Modulo[];
  competenze: string[];
  diplomi: string[];
};

export type DisciplinaCorso = {
  slug: 'pugilato' | 'mma' | 'muay-thai' | 'kick-boxing' | 'difesa-personale';
  nome: string;           // "Pugilato"
  colore: string;         // hex per UI
  gradient: string;       // gradient CSS per hero
  livelli: Livello[];

  // Campi aggiuntivi per le pagine vendita (nuovi):
  hero: { titolo: string; sottotitolo: string };
  trustStrip: string[];
  profiliRivolti: { titolo: string; descrizione: string }[];
  cosaRicevi: string[];
  faq: { domanda: string; risposta: string }[];
  testimonial?: { nome: string; livello: string; albo: string; estratto: string }[];
};
```

Il `CorsiAccordion.tsx` esistente viene ridotto a pure rendering (rimozione dei 600+ righe di dati). Niente regressioni visive sul componente esistente.

## Integrazione Brevo

### Setup
- Account Brevo gratuito
- API key in `.env.local` (NON committata): `BREVO_API_KEY`
- Variabile pubblica: nessuna (l'API key resta server-side)
- Lista email: 1 lista principale + tag per `disciplina_interesse`

### Endpoint
- **Form submit**: `POST /api/leads` (server action o route handler Next.js)
  - Valida email (regex + DNS check minimo)
  - Sanitizza disciplina (whitelist 5 valori)
  - Chiama Brevo API `POST /v3/contacts` con tag disciplina
  - Aggiunge a sequenza automatica via `templateId`
  - Honeypot field anti-bot + rate limiting basico (10 req/min/IP)

### Sequence creation
Le 6 email + 1 recap si creano in Brevo dashboard (no infrastruttura nostra). Solo l'API key viene usata dal sito.

## Decisioni di scope

### IN scope per v1
- 5 pagine disciplina dinamiche
- Lead magnet PDF + form + integrazione Brevo
- Diploma fac-simile (componente)
- Trust strip + price anchor + testimonial component
- FAQ accordion
- SEO on-page (meta tags, JSON-LD `Course`, OG image per disciplina)
- Tutte le decisioni prese: tutti 490€, Brevo, organic-first

### OUT scope v1 (fase 2)
- Pagine Allenatore / Istruttore / Maestro separate per livello
- Programma referral istruttori esistenti
- Email transazionale di follow-up post-vendita
- Sezione testimonial video (per ora solo testo)
- Multilingua
- Pagamento online integrato (resta WhatsApp + bonifico, come oggi)
- Calendario corsi live (resta "richiedi info")

### Decisioni esplicite
- **Prezzi a 490€**: confermato dall'utente. Restano uniformi su tutti i 15 corsi
- **Niente sconti volume**: decisione confermata (FIAMS fa 10/20%, IKTA NO). Prezzi puliti e identici
- **Niente CFU dichiarati**: decisione confermata. Sostituiamo con "ore di studio" come metrica concreta
- **Sede esame**: Civitavecchia (sede principale IKTA, l'unica sede esami valida)
- **Modalita acquisto**: WhatsApp manuale, niente carrello in v1
- **Cambio in produzione**: niente. Tutto lavorato in worktree git separato. Merge sul main solo dopo approvazione visiva
- **Niente nuovo branding**: si riutilizza tutto il design system implementato nella fase precedente (Clash Display + Satoshi, palette IKTA, classi utility)
- **Anchor pricing rimosso**: l'analisi FIAMS ha confermato che 490€ e prezzo di mercato standard, non sotto-prezzo. Niente claim "vs 1200€"

## Architettura tecnica

### Stack
- Next.js 16.2.4 (esistente)
- Tailwind v4 (esistente)
- Brevo API (nuovo) — solo lato server
- `next/image` per fac-simile diploma e foto testimonial
- `generateStaticParams` per le 5 pagine disciplina (SSG)

### Sicurezza
- API key Brevo server-side (mai esposta al client)
- Honeypot + rate limit base sul form lead magnet
- Validation server-side dei campi
- CSP aggiornata se Brevo aggiunge endpoint a chiamare (probabilmente no, solo server)
- Conformità GDPR: form lead magnet include checkbox consenso esplicito + link a `/privacy`

### Workflow di sviluppo
1. Worktree git separato (`../ikta-website-funnel` o simile)
2. Branch `feat/funnel-corsi` dentro al worktree
3. Sviluppo + commit dentro il worktree, mai sul main
4. Test in locale parallelo (porta 3001 worktree, porta 3010 main)
5. Approvazione visiva → merge sul main come unico commit (o squash)

## Metriche

### Funnel (da tracciare manualmente o con analytics privacy-friendly tipo Plausible)
- Visite pagina formazione + pagine disciplina
- Download lead magnet (conta opt-in)
- Open rate email Brevo (built-in)
- Click rate sui link nelle email
- Iscrizioni reali ai corsi (manuale, da Massimo)

### Check-point
- **Settimana 4**: form attivo, lead magnet live, target ≥50 download
- **Settimana 8**: prime conversioni, target ≥3-5 corsi venduti
- **Settimana 12**: decisione fase B (ads sì/no in base a ROI)

## Sicurezza, privacy, manutenzione

- Tutti i dati raccolti dal form rispettano la privacy policy esistente (`/privacy`)
- Lead magnet PDF: nessun tracker incluso
- Niente cookie nuovi introdotti dal funnel (Brevo lavora server-side via API)

## Decisioni aperte per la fase implementazione

Da risolvere durante writing-plans / esecuzione:
- Quale grafica esatta per il fac-simile diploma (ricostruzione SVG vs immagine raster)
- Testimonial concreti (testo): se Massimo li raccoglie subito o usiamo placeholder con foto stock
- Foto Massimo Brizi per box "Chi siamo": ne abbiamo già una sul sito o ne serve una nuova
- Copy esatto del lead magnet PDF (il PDF lo scrive Edoardo, basato su questo spec)

---

## Validation (self-review)

- ✅ Nessun "TBD" o placeholder vago
- ✅ Scope definito chiaramente, OUT scope esplicitato
- ✅ Decisioni prese (prezzi, email provider, approccio, acquisto, sconti, CFU, sede) marcate
- ✅ Architettura tecnica concreta (path, file, API key, SSG)
- ✅ Metriche e check-point misurabili
- ✅ Niente em dash nel copy UI proposto
- ✅ Conforme a privacy/GDPR esistente
- ✅ Posizionamento corretto dopo analisi competitor (FIAMS): IKTA vince su specializzazione, non su prezzo

## Analisi competitor (FIAMS, partner istituzionale)

Letti: `fiams.it/categoria-sport-da-combattimento`, `fiams.it/istruttore-muay-thai`, `fiams.it/istruttore-mma`, `fiams.it/corso-istruttore-pugilato-on-line`.

**Cose dove FIAMS e meglio (da copiare):**
- "A chi si rivolge" diviso per livello (bambini / agonisti / professionisti)
- Ore di studio dichiarate (60-80h per livello)
- Soglia esplicita per il diploma (70% al quiz finale)
- Sede esami dichiarata con citta

**Cose dove FIAMS e peggio (le sfruttiamo):**
- Zero testimonial (noi 60+ istruttori + 22 titoli mondiali)
- Zero FAQ (noi 8-10 FAQ reali = SEO + riduzione attrito)
- Niente lead magnet (noi guida PDF gratuita)
- Hero generici (noi punchy + Massimo Brizi come autorita umana)
- Niente storia del fondatore (noi 20 anni di Massimo)

**Allineamenti (mercato standard):**
- 490€/livello = prezzo di mercato standard per EPS-CONI
- Diploma EPS-CONI + Tesserino + Albo + RC = identico
- FAD H24 = identico

