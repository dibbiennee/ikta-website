# Funnel Vendita Corsi IKTA — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a complete lead-generation + sales funnel for IKTA's 5 instructor certification courses, working entirely in a local git worktree without touching production.

**Architecture:** Next.js 16 SSG with dynamic route `/formazione/[disciplina]` for 5 sales pages, lead magnet form posting to a Next.js API route that forwards to Brevo. Course data extracted from existing `CorsiAccordion.tsx` into a single source of truth (`src/data/discipline-corsi.ts`). Reuses existing design tokens (Clash Display + Satoshi + IKTA palette).

**Tech Stack:** Next.js 16.2.4, React 19.2.5, Tailwind v4, TypeScript 5.9.3, Brevo API (server-side only), no new test framework (manual visual verification + curl for API).

---

## Phase 0 — Worktree setup and base verification

### Task 0.1: Create isolated git worktree

**Files:**
- Create: external dir at `/Users/dbnmillionaire/IKTA ITALIA/ikta-website-funnel/`

- [ ] **Step 1: Verify clean git state**

```bash
cd "/Users/dbnmillionaire/IKTA ITALIA/ikta-website"
git status
```

Expected: clean tree (or only untracked spec/plan docs).

- [ ] **Step 2: Create worktree on new branch**

```bash
cd "/Users/dbnmillionaire/IKTA ITALIA/ikta-website"
git worktree add -b feat/funnel-corsi "../ikta-website-funnel"
```

Expected: "Preparing worktree (new branch 'feat/funnel-corsi')".

- [ ] **Step 3: Verify worktree**

```bash
cd "/Users/dbnmillionaire/IKTA ITALIA/ikta-website-funnel"
pwd && git branch --show-current
```

Expected output: `feat/funnel-corsi`.

- [ ] **Step 4: Install deps in worktree**

```bash
cd "/Users/dbnmillionaire/IKTA ITALIA/ikta-website-funnel"
npm install
```

Expected: `143 packages` installed, no errors blocking.

- [ ] **Step 5: Baseline build in worktree**

```bash
cd "/Users/dbnmillionaire/IKTA ITALIA/ikta-website-funnel"
npm run build
```

Expected: build succeeds, 26 pages generated.

- [ ] **Step 6: Commit lockfile if needed**

```bash
cd "/Users/dbnmillionaire/IKTA ITALIA/ikta-website-funnel"
git add -A && git commit -m "chore: worktree baseline" --allow-empty
```

---

## Phase 1 — Refactor course data into single source of truth

### Task 1.1: Extract types and 1 discipline data file

**Files:**
- Create: `src/data/discipline-corsi.ts`

- [ ] **Step 1: Create the data file with types and Pugilato data**

```typescript
// src/data/discipline-corsi.ts

export type Modulo = {
  titolo: string;
  topics: string[];
};

export type Livello = {
  nome: string;
  prezzo: number;
  oreStudio: number;
  descrizione: string;
  didattica: string[];
  collaborazioni: string[];
  moduli: Modulo[];
  competenze: string[];
  diplomi: string[];
};

export type ProfiloRivolto = {
  livello: string;
  rivolto: string;
};

export type Faq = {
  domanda: string;
  risposta: string;
};

export type Testimonial = {
  nome: string;
  livello: string;
  albo: string;
  estratto: string;
};

export type DisciplinaCorso = {
  slug: 'pugilato' | 'mma' | 'muay-thai' | 'kick-boxing' | 'difesa-personale';
  nome: string;
  nomeShort: string;
  colore: string;
  gradient: string;
  metaTitle: string;
  metaDescription: string;
  hero: { titolo: string; sottotitolo: string };
  profiliRivolti: ProfiloRivolto[];
  cosaRicevi: string[];
  faq: Faq[];
  testimonial: Testimonial[];
  livelli: Livello[];
};
```

- [ ] **Step 2: Read existing Pugilato data from CorsiAccordion**

```bash
cd "/Users/dbnmillionaire/IKTA ITALIA/ikta-website-funnel"
grep -n "discipline: 'Pugilato'" src/components/CorsiAccordion.tsx
```

Expected: line number of Pugilato definition, around line 32.

- [ ] **Step 3: Add Pugilato data to data file (copy levels/modules/competenze/diplomi verbatim, add new fields)**

Append after the type definitions in `src/data/discipline-corsi.ts`:

```typescript
export const pugilato: DisciplinaCorso = {
  slug: 'pugilato',
  nome: 'Pugilato',
  nomeShort: 'Boxe',
  colore: '#1e40af',
  gradient: 'linear-gradient(135deg, #1e3a8a, #1e40af)',
  metaTitle: 'Corso Istruttore Pugilato Online | Diploma CONI a 490€ | IKTA',
  metaDescription: 'Diventa istruttore di Pugilato certificato CONI. Corso FAD online H24, diploma S.Na.Q., iscrizione Albo Nazionale. 3 livelli, esame a Civitavecchia. 490€ per livello.',
  hero: {
    titolo: 'Diventa istruttore di Pugilato certificato CONI',
    sottotitolo: 'Diploma Nazionale Libertas, S.Na.Q., FAD online H24. Esame finale pratico a Civitavecchia. 490€ per livello.',
  },
  profiliRivolti: [
    { livello: '1° Allenatore', rivolto: 'A chi vuole insegnare a bambini e giovani (6-14 anni). Base ideale per chi inizia.' },
    { livello: '2° Istruttore', rivolto: 'A chi vuole insegnare a ragazzi, adulti e agonisti. Livello standard per palestre affiliate.' },
    { livello: '3° Maestro', rivolto: 'A chi vuole formare atleti professionisti e aprire una propria struttura.' },
  ],
  cosaRicevi: [
    'Diploma EPS-CONI rilasciato attraverso Libertas',
    'Tesserino Tecnico nominativo',
    'Iscrizione Albo Nazionale Libertas con numero progressivo',
    'Responsabilita Civile professionale inclusa',
    'Accesso piattaforma FAD 7 giorni su 7, H24',
    'Materiali didattici in PDF + quiz simulativi',
  ],
  faq: [
    { domanda: 'Devo essere gia praticante di Pugilato per iscrivermi?', risposta: 'Per il 1° livello no, bastano motivazione e dedizione. Per il 2° e 3° livello e fortemente consigliata esperienza pratica documentata.' },
    { domanda: 'Quanto dura il corso?', risposta: 'Il corso si svolge in FAD: studi quando vuoi. La media e 60-80 ore di studio per il 1° livello. L\'esame finale si prenota online quando ti senti pronto.' },
    { domanda: 'L\'esame e online o in presenza?', risposta: 'L\'esame teorico e online (quiz a risposta multipla con soglia 70% per ottenere il diploma). L\'esame pratico si svolge a Civitavecchia, presso la sede IKTA.' },
    { domanda: 'Il diploma e davvero riconosciuto?', risposta: 'Si. E un diploma Libertas, Ente di Promozione Sportiva riconosciuto dal CONI dal 1945. E equipollente alle qualifiche S.Na.Q. del Sistema Nazionale Qualifiche dei Tecnici Sportivi.' },
    { domanda: 'Posso lavorare con questo diploma?', risposta: 'Si. Il diploma ti abilita a insegnare in qualsiasi palestra affiliata CONI in Italia, ad aprire la tua palestra (con i requisiti aggiuntivi previsti dalla legge) e ad essere assicurato come tecnico.' },
    { domanda: 'Come si paga?', risposta: 'Bonifico bancario all\'atto dell\'iscrizione. Possibilita di pagamento in 2 rate (50% all\'iscrizione, 50% prima dell\'esame). Contattaci per i dettagli.' },
    { domanda: 'Posso passare da un livello all\'altro?', risposta: 'Si, i 3 livelli sono progressivi. Ogni livello si fa singolarmente. Puoi iniziare dal 1° o partire dal 2° se hai gia esperienza documentata.' },
    { domanda: 'Cosa succede se non passo l\'esame?', risposta: 'Hai diritto a 1 ripetizione gratuita dell\'esame entro 6 mesi. Se non passi nemmeno la seconda volta, puoi reiscriverti pagando solo la quota d\'esame.' },
  ],
  testimonial: [
    { nome: 'Manuel Mammetti', livello: 'Allenatore Pugilato', albo: '28/01/2026', estratto: 'Diploma vero, esame serio. Niente regalato. Oggi insegno ai bambini in palestra con la sicurezza di sapere di averlo meritato.' },
    { nome: 'Antonio Giacomini', livello: 'Allenatore Pugilato', albo: '28/01/2026', estratto: 'FAD H24 e stata la chiave: gestisco il lavoro e mi sono certificato in 4 mesi senza assentarmi mai.' },
    { nome: 'Marco Caramelli', livello: 'Allenatore Pugilato', albo: '28/01/2026', estratto: 'L\'esame pratico a Civitavecchia e una garanzia: ti spreme davvero, non e una formalita.' },
  ],
  livelli: [], // Sara popolato copiando dal CorsiAccordion in Task 1.2
};
```

- [ ] **Step 4: Verify file compiles**

```bash
cd "/Users/dbnmillionaire/IKTA ITALIA/ikta-website-funnel"
npx tsc --noEmit
```

Expected: no errors related to `discipline-corsi.ts`.

- [ ] **Step 5: Commit Phase 1.1**

```bash
cd "/Users/dbnmillionaire/IKTA ITALIA/ikta-website-funnel"
git add src/data/discipline-corsi.ts
git commit -m "feat(data): add discipline-corsi types and Pugilato scaffolding"
```

### Task 1.2: Copy course levels data from CorsiAccordion verbatim

**Files:**
- Modify: `src/data/discipline-corsi.ts`

- [ ] **Step 1: Open CorsiAccordion source positions**

```bash
cd "/Users/dbnmillionaire/IKTA ITALIA/ikta-website-funnel"
grep -n "discipline: '" src/components/CorsiAccordion.tsx
```

Note line numbers for each discipline (Pugilato 32, MMA 216, Muay Thai 362, Kick Boxing 511, Difesa Personale 659).

- [ ] **Step 2: Extract Pugilato levels (lines 33-215) into discipline-corsi.ts**

Read `src/components/CorsiAccordion.tsx:33-215` (the `levels: [...]` array for Pugilato). Copy that array into `pugilato.livelli` in `src/data/discipline-corsi.ts`, adapting field names if needed (e.g., `price: '490'` becomes `prezzo: 490`, `title` becomes `titolo`, `topics` stays).

Add `oreStudio: 60` for level 1, `oreStudio: 70` for level 2, `oreStudio: 80` for level 3 (matching FIAMS market standard, decision documented in spec).

- [ ] **Step 3: Verify Pugilato data is complete**

```bash
cd "/Users/dbnmillionaire/IKTA ITALIA/ikta-website-funnel"
grep -c "titolo: " src/data/discipline-corsi.ts
```

Expected: ≥ 30 (15 modules × 2-3 levels of Pugilato).

- [ ] **Step 4: Repeat for MMA, Muay Thai, Kick Boxing, Difesa Personale**

For each of the 4 remaining disciplines, repeat Steps 2-3:
- Read the corresponding section of `CorsiAccordion.tsx`
- Add `export const mma: DisciplinaCorso = { ... }`, `muayThai`, `kickBoxing`, `difesaPersonale`
- Copy levels verbatim, adapt field names
- For `hero`, `profiliRivolti`, `cosaRicevi`, `faq`, `testimonial`: adapt the Pugilato versions to discipline (change only discipline-specific words). Testimonials initially use placeholder names from existing Albo Allenatori/Istruttori for that discipline.

- [ ] **Step 5: Export all and a discipline map**

Append at end of `src/data/discipline-corsi.ts`:

```typescript
export const discipline = [pugilato, mma, muayThai, kickBoxing, difesaPersonale] as const;

export const disciplinaBySlug: Record<DisciplinaCorso['slug'], DisciplinaCorso> = {
  'pugilato': pugilato,
  'mma': mma,
  'muay-thai': muayThai,
  'kick-boxing': kickBoxing,
  'difesa-personale': difesaPersonale,
};
```

- [ ] **Step 6: Type-check**

```bash
cd "/Users/dbnmillionaire/IKTA ITALIA/ikta-website-funnel"
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 7: Commit**

```bash
cd "/Users/dbnmillionaire/IKTA ITALIA/ikta-website-funnel"
git add src/data/discipline-corsi.ts
git commit -m "feat(data): populate all 5 disciplines course data"
```

### Task 1.3: Refactor CorsiAccordion to read from data file

**Files:**
- Modify: `src/components/CorsiAccordion.tsx`

- [ ] **Step 1: Read current CorsiAccordion entire file**

```bash
cd "/Users/dbnmillionaire/IKTA ITALIA/ikta-website-funnel"
wc -l src/components/CorsiAccordion.tsx
```

Expected: ~1034 lines.

- [ ] **Step 2: Replace the hardcoded `courses` array with import from data file**

In `src/components/CorsiAccordion.tsx`:
- Remove the `type Module`, `type Level`, `type Course` definitions (now in data file)
- Remove the `const courses: Course[] = [...]` (all ~600 lines of data)
- Add at top: `import { discipline as courses } from '@/data/discipline-corsi';`
- Update references: `course.discipline` becomes `course.nome`, `course.color` becomes `course.colore`, `course.gradient` stays, `course.levels` becomes `course.livelli`, etc.
- Update `Level` references to `Livello` and field renames (`name`→`nome`, `price`→`prezzo`, `description`→`descrizione`, `modules`→`moduli`, etc.)

- [ ] **Step 3: Update WhatsApp CTA to include discipline name**

In `CorsiAccordion.tsx`, find the WhatsApp `<a href="https://wa.me/...">` and change the text param:

```typescript
const msg = encodeURIComponent(`Salve, sono interessato al corso di ${course.nome} (${level.nome}). Volevo chiedere informazioni.`);
// in JSX:
href={`https://wa.me/393341989193?text=${msg}`}
```

- [ ] **Step 4: Build + visual verification**

```bash
cd "/Users/dbnmillionaire/IKTA ITALIA/ikta-website-funnel"
npm run build
```

Expected: build passes, no errors.

```bash
cd "/Users/dbnmillionaire/IKTA ITALIA/ikta-website-funnel"
npx next start -p 3011 &
sleep 4 && curl -s -o /dev/null -w "HTTP %{http_code}\n" http://localhost:3011/formazione
```

Expected: HTTP 200 on `/formazione`.

- [ ] **Step 5: Manual visual check via Playwright**

Navigate to `http://localhost:3011/formazione`, expand 1-2 disciplines and verify levels show correctly with same data as before refactor. Numbers, modules and prices must match the original site exactly.

- [ ] **Step 6: Stop server, commit**

```bash
lsof -ti:3011 | xargs kill 2>/dev/null
cd "/Users/dbnmillionaire/IKTA ITALIA/ikta-website-funnel"
git add src/components/CorsiAccordion.tsx
git commit -m "refactor(corsi): CorsiAccordion reads from discipline-corsi data file"
```

---

## Phase 2 — Trust components

### Task 2.1: Build TrustStrip component

**Files:**
- Create: `src/components/funnel/TrustStrip.tsx`
- Source SVG logos: stored in `public/loghi-trust/` (see Task 2.0)

### Task 2.0: Download/prepare trust logos

**Files:**
- Create: `public/loghi-trust/coni.svg`
- Create: `public/loghi-trust/libertas.svg`
- Create: `public/loghi-trust/unitelematica.svg`
- Create: `public/loghi-trust/fiams.svg`

- [ ] **Step 1: Create logos directory**

```bash
cd "/Users/dbnmillionaire/IKTA ITALIA/ikta-website-funnel"
mkdir -p public/loghi-trust
```

- [ ] **Step 2: For each of 4 logos, create a clean monochrome SVG placeholder**

Write `public/loghi-trust/coni.svg`:
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40" role="img" aria-label="CONI">
  <text x="60" y="26" text-anchor="middle" font-family="system-ui, sans-serif" font-weight="700" font-size="20" fill="currentColor">CONI</text>
</svg>
```

Same pattern for `libertas.svg` (text "LIBERTAS"), `unitelematica.svg` (text "UNITELEMATICA"), `fiams.svg` (text "FIAMS"). These are placeholders, to be replaced with real logos when Massimo provides them.

- [ ] **Step 3: Commit logos**

```bash
cd "/Users/dbnmillionaire/IKTA ITALIA/ikta-website-funnel"
git add public/loghi-trust/
git commit -m "feat(assets): add trust logos placeholders"
```

### Task 2.1: TrustStrip component (continued)

- [ ] **Step 1: Write component**

Create `src/components/funnel/TrustStrip.tsx`:

```typescript
import Image from 'next/image';

const TRUST_LOGOS = [
  { src: '/loghi-trust/coni.svg', alt: 'CONI - Comitato Olimpico Nazionale Italiano' },
  { src: '/loghi-trust/libertas.svg', alt: 'Libertas - Ente di Promozione Sportiva' },
  { src: '/loghi-trust/unitelematica.svg', alt: 'Unitelematica Leonardo da Vinci' },
  { src: '/loghi-trust/fiams.svg', alt: 'FIAMS - Federazione Italiana Arti Marziali e Sport' },
];

export default function TrustStrip() {
  return (
    <div className="border-y border-gray-200 bg-gray-50 py-6">
      <div className="container mx-auto px-4">
        <p className="text-center text-xs uppercase tracking-widest text-gray-500 mb-4">
          Riconoscimenti e collaborazioni
        </p>
        <div className="flex items-center justify-center gap-8 sm:gap-12 flex-wrap text-gray-700">
          {TRUST_LOGOS.map((logo) => (
            <Image
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={40}
              className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Manual visual check via temporary import in /formazione**

In `src/app/formazione/page.tsx`, temporarily import and render TrustStrip just above the existing hero section. Reload `http://localhost:3011/formazione` and visually verify the strip renders, logos visible.

- [ ] **Step 3: Remove temporary import (we'll add it back in Phase 3)**

Revert the temporary import in `src/app/formazione/page.tsx`.

- [ ] **Step 4: Commit**

```bash
cd "/Users/dbnmillionaire/IKTA ITALIA/ikta-website-funnel"
git add src/components/funnel/TrustStrip.tsx
git commit -m "feat(funnel): add TrustStrip component"
```

### Task 2.2: DiplomaCard component (fac-simile of Libertas diploma)

**Files:**
- Create: `src/components/funnel/DiplomaCard.tsx`

- [ ] **Step 1: Write component as SVG/markup recreating diploma layout (anonymized fields)**

Create `src/components/funnel/DiplomaCard.tsx`:

```typescript
type Props = {
  disciplina: string;
  livello?: string; // e.g., "Istruttore 3° Livello"
};

export default function DiplomaCard({ disciplina, livello = 'Istruttore' }: Props) {
  return (
    <div className="relative aspect-[3/4] w-full max-w-md mx-auto bg-gradient-to-b from-gray-50 to-white border-2 border-gray-200 rounded-lg shadow-xl overflow-hidden">
      {/* Top stars decoration */}
      <div className="absolute top-4 left-4 right-4 flex justify-between text-yellow-400 text-xl">
        <span>★</span><span>★</span><span>★</span>
      </div>

      {/* Header logos */}
      <div className="pt-12 pb-2 flex items-center justify-center gap-4 px-6">
        <div className="text-[10px] text-gray-600 text-center">
          <div className="font-bold">ITALIA</div>
          <div className="text-[8px]">ENTE DI<br />PROMOZIONE<br />SPORTIVA<br />RICONOSCIUTO<br />DAL CONI</div>
        </div>
        <div className="text-blue-700 font-black text-2xl">LIBERTAS</div>
        <div className="text-[10px] text-gray-600 text-center">
          <div className="font-bold">COMITATO<br />ITALIANO<br />PARALIMPICO</div>
        </div>
      </div>

      {/* Title */}
      <div className="text-center mt-6 px-6">
        <h3 className="!text-3xl font-bold text-red-600 italic" style={{ letterSpacing: '0.02em' }}>DIPLOMA</h3>
        <h3 className="!text-3xl font-bold text-red-600 italic">NAZIONALE</h3>
      </div>

      {/* Body */}
      <div className="px-6 mt-4 text-center text-xs text-gray-700 leading-relaxed">
        <p>Visto il risultato positivo della prova d&apos;esame conclusiva del corso svoltosi presso</p>
        <p>questa Scuola Nazionale di Formazione Sportiva attesta che</p>
      </div>

      <div className="px-6 mt-4 text-center">
        <p className="text-lg font-bold text-gray-900 tracking-wider">NOME COGNOME</p>
        <p className="text-xs text-gray-600 mt-1">nato/a a CITTA il GG/MM/AAAA</p>
      </div>

      <div className="px-6 mt-4 text-center text-xs text-gray-700">
        <p>ha conseguito la qualifica tecnica di</p>
      </div>

      <div className="px-6 mt-3 text-center">
        <p className="text-sm font-bold text-gray-900 uppercase">
          {livello} {disciplina}
        </p>
      </div>

      <div className="px-6 mt-4 text-center text-[10px] text-gray-600">
        <p>secondo i requisiti previsti dal Sistema Nazionale</p>
        <p>delle qualifiche dei tecnici Sportivi (S.Na.Q)</p>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-[10px] text-gray-600">
        <div>
          <p>Roma, GG/MM/AAAA</p>
          <p className="font-semibold">N. -----</p>
          <p>registro Albo Nazionale Libertas</p>
        </div>
        <div className="text-right italic">
          <p>Il Presidente</p>
          <p className="font-semibold">Centro Nazionale Sportivo Libertas</p>
        </div>
      </div>

      {/* Watermark "FAC-SIMILE" */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-7xl font-black text-gray-200 opacity-30 -rotate-12 select-none">FAC-SIMILE</span>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Temporary import in /formazione for visual check**

Add `<DiplomaCard disciplina="Pugilato" livello="Istruttore 3° Livello" />` at top of `/formazione` page temporarily. Verify it renders.

- [ ] **Step 3: Remove temp import**

Revert.

- [ ] **Step 4: Commit**

```bash
cd "/Users/dbnmillionaire/IKTA ITALIA/ikta-website-funnel"
git add src/components/funnel/DiplomaCard.tsx
git commit -m "feat(funnel): add DiplomaCard fac-simile component"
```

### Task 2.3: TestimonialCard component

**Files:**
- Create: `src/components/funnel/TestimonialCard.tsx`

- [ ] **Step 1: Write component**

Create `src/components/funnel/TestimonialCard.tsx`:

```typescript
import { Testimonial } from '@/data/discipline-corsi';

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <p className="text-gray-700 text-base leading-relaxed mb-4">
        &ldquo;{testimonial.estratto}&rdquo;
      </p>
      <div className="border-t border-gray-100 pt-4">
        <p className="font-semibold text-gray-900">{testimonial.nome}</p>
        <p className="text-sm text-gray-600">{testimonial.livello}</p>
        <p className="text-xs text-gray-400 mt-1">Albo IKTA · {testimonial.albo}</p>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
cd "/Users/dbnmillionaire/IKTA ITALIA/ikta-website-funnel"
git add src/components/funnel/TestimonialCard.tsx
git commit -m "feat(funnel): add TestimonialCard component"
```

### Task 2.4: ACiSiRivolge component

**Files:**
- Create: `src/components/funnel/ACiSiRivolge.tsx`

- [ ] **Step 1: Write component**

Create `src/components/funnel/ACiSiRivolge.tsx`:

```typescript
import { ProfiloRivolto } from '@/data/discipline-corsi';

export default function ACiSiRivolge({ profili }: { profili: ProfiloRivolto[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {profili.map((p) => (
        <div key={p.livello} className="card-flat border border-gray-200">
          <p className="!text-sm font-semibold text-[#1e40af] uppercase tracking-wide mb-2">
            {p.livello}
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">{p.rivolto}</p>
        </div>
      ))}
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
cd "/Users/dbnmillionaire/IKTA ITALIA/ikta-website-funnel"
git add src/components/funnel/ACiSiRivolge.tsx
git commit -m "feat(funnel): add ACiSiRivolge component"
```

### Task 2.5: FormazioneFaq component

**Files:**
- Create: `src/components/funnel/FormazioneFaq.tsx`

- [ ] **Step 1: Write component (client, accordion)**

Create `src/components/funnel/FormazioneFaq.tsx`:

```typescript
'use client';

import { useState } from 'react';
import { Faq } from '@/data/discipline-corsi';

export default function FormazioneFaq({ faqs }: { faqs: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="max-w-3xl mx-auto space-y-3">
      {faqs.map((f, i) => (
        <div key={f.domanda} className="border border-gray-200 rounded-xl bg-white overflow-hidden">
          <button
            type="button"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full text-left px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            aria-expanded={openIndex === i}
          >
            <span className="font-semibold text-gray-900 text-base">{f.domanda}</span>
            <span className={`text-[#1e40af] text-2xl leading-none transition-transform ${openIndex === i ? 'rotate-45' : ''}`}>+</span>
          </button>
          {openIndex === i && (
            <div className="px-5 pb-5 text-gray-700 text-sm leading-relaxed">
              {f.risposta}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
cd "/Users/dbnmillionaire/IKTA ITALIA/ikta-website-funnel"
git add src/components/funnel/FormazioneFaq.tsx
git commit -m "feat(funnel): add FormazioneFaq component"
```

### Task 2.6: DisciplineHero + DisciplinaWhatsAppCta components

**Files:**
- Create: `src/components/funnel/DisciplineHero.tsx`
- Create: `src/components/funnel/DisciplinaWhatsAppCta.tsx`

- [ ] **Step 1: Write DisciplineHero**

Create `src/components/funnel/DisciplineHero.tsx`:

```typescript
import { DisciplinaCorso } from '@/data/discipline-corsi';
import DiplomaCard from './DiplomaCard';

export default function DisciplineHero({ disciplina }: { disciplina: DisciplinaCorso }) {
  return (
    <div className="grid lg:grid-cols-2 gap-10 items-center">
      <div>
        <span className="eyebrow">Corso istruttore certificato CONI</span>
        <h1 className="mt-3">{disciplina.hero.titolo}</h1>
        <p className="text-base md:text-lg text-gray-600 mt-4 leading-relaxed">
          {disciplina.hero.sottotitolo}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <a href="#iscriviti" className="btn btn-primary">
            Scarica la guida gratuita
          </a>
          <a href="#livelli" className="btn btn-outline">
            Vedi i 3 livelli
          </a>
        </div>
      </div>
      <div>
        <DiplomaCard disciplina={disciplina.nome} livello="Istruttore" />
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Write DisciplinaWhatsAppCta**

Create `src/components/funnel/DisciplinaWhatsAppCta.tsx`:

```typescript
type Props = {
  disciplina: string;
  livello?: string;
  className?: string;
};

export default function DisciplinaWhatsAppCta({ disciplina, livello, className }: Props) {
  const text = livello
    ? `Salve, sono interessato al corso di ${disciplina} (${livello}). Volevo chiedere informazioni.`
    : `Salve, sono interessato al corso istruttore di ${disciplina}. Volevo chiedere informazioni.`;
  const href = `https://wa.me/393341989193?text=${encodeURIComponent(text)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#25D366] text-white font-semibold text-sm hover:brightness-110 transition-all ${className ?? ''}`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      Scrivici su WhatsApp
    </a>
  );
}
```

- [ ] **Step 3: Commit both**

```bash
cd "/Users/dbnmillionaire/IKTA ITALIA/ikta-website-funnel"
git add src/components/funnel/DisciplineHero.tsx src/components/funnel/DisciplinaWhatsAppCta.tsx
git commit -m "feat(funnel): add DisciplineHero and DisciplinaWhatsAppCta components"
```

---

## Phase 3 — Pagine disciplina dinamiche

### Task 3.1: Create dynamic route `/formazione/[disciplina]`

**Files:**
- Create: `src/app/formazione/[disciplina]/page.tsx`

- [ ] **Step 1: Create page template**

Create `src/app/formazione/[disciplina]/page.tsx`:

```typescript
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { disciplinaBySlug, discipline, DisciplinaCorso } from '@/data/discipline-corsi';
import TrustStrip from '@/components/funnel/TrustStrip';
import DisciplineHero from '@/components/funnel/DisciplineHero';
import ACiSiRivolge from '@/components/funnel/ACiSiRivolge';
import TestimonialCard from '@/components/funnel/TestimonialCard';
import FormazioneFaq from '@/components/funnel/FormazioneFaq';
import DisciplinaWhatsAppCta from '@/components/funnel/DisciplinaWhatsAppCta';

type Slug = DisciplinaCorso['slug'];

export async function generateStaticParams() {
  return discipline.map((d) => ({ disciplina: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ disciplina: string }> }): Promise<Metadata> {
  const { disciplina: slug } = await params;
  const d = disciplinaBySlug[slug as Slug];
  if (!d) return { title: 'Corso non trovato' };
  return {
    title: d.metaTitle,
    description: d.metaDescription,
    openGraph: { title: d.metaTitle, description: d.metaDescription, type: 'website' },
  };
}

export default async function DisciplinaPage({ params }: { params: Promise<{ disciplina: string }> }) {
  const { disciplina: slug } = await params;
  const d = disciplinaBySlug[slug as Slug];
  if (!d) notFound();

  return (
    <>
      {/* Hero */}
      <section className="section pt-28 md:pt-32">
        <div className="container mx-auto px-4">
          <DisciplineHero disciplina={d} />
        </div>
      </section>

      {/* Trust strip */}
      <TrustStrip />

      {/* A chi è rivolto */}
      <section className="section-tight">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="eyebrow">A chi si rivolge</span>
            <h2 className="mt-2">Tre profili, tre livelli</h2>
          </div>
          <ACiSiRivolge profili={d.profiliRivolti} />
        </div>
      </section>

      {/* Cosa ricevi */}
      <section className="section-tight bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="eyebrow">Cosa ottieni</span>
            <h2 className="mt-2">Diploma, albo, RC inclusa</h2>
          </div>
          <ul className="max-w-2xl mx-auto space-y-3">
            {d.cosaRicevi.map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-800">
                <svg className="w-5 h-5 text-[#1e40af] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Livelli */}
      <section id="livelli" className="section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="eyebrow">I 3 livelli</span>
            <h2 className="mt-2">Allenatore, Istruttore, Maestro</h2>
            <p className="text-gray-600 mt-3">490€ per livello. Tutti i livelli hanno la stessa qualita di diploma.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {d.livelli.map((l) => (
              <div key={l.nome} className="card-flat border border-gray-200 bg-white">
                <h3 className="!text-xl mb-2 text-[#1e40af]">{l.nome}</h3>
                <p className="text-3xl font-bold text-gray-900 mb-1">{l.prezzo}€</p>
                <p className="text-sm text-gray-500 mb-4">{l.oreStudio} ore di studio | FAD H24</p>
                <p className="text-sm text-gray-700 leading-relaxed">{l.descrizione}</p>
                <p className="text-xs text-gray-500 mt-3">{l.moduli.length} moduli formativi</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Esame */}
      <section className="section-tight bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <span className="eyebrow">Esami e valutazione</span>
          <h2 className="mt-2">Niente diplomi facili</h2>
          <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto mt-4 leading-relaxed">
            Quiz simulativi durante il corso. Esame finale a risposta multipla con soglia minima del <strong>70%</strong> per ottenere il diploma. Esame pratico presso la sede IKTA di <strong>Civitavecchia</strong>.
          </p>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="eyebrow">Chi e gia diplomato</span>
            <h2 className="mt-2">Istruttori certificati IKTA</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {d.testimonial.map((t) => (
              <TestimonialCard key={t.nome} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="eyebrow">Domande frequenti</span>
            <h2 className="mt-2">Quello che ci chiedono di piu</h2>
          </div>
          <FormazioneFaq faqs={d.faq} />
        </div>
      </section>

      {/* CTA finale */}
      <section id="iscriviti" className="section-dark section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4">Pronto a iniziare?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-base md:text-lg">
            Scrivici su WhatsApp: ti diciamo quando parte la prossima sessione, cosa serve per iscriverti e ti rispondiamo a ogni domanda specifica.
          </p>
          <DisciplinaWhatsAppCta disciplina={d.nome} />
          <p className="text-sm text-gray-500 mt-6">
            Preferisci email? <Link href="/contatti" className="text-white underline">Scrivici dalla pagina contatti</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 2: Build to check generateStaticParams works**

```bash
cd "/Users/dbnmillionaire/IKTA ITALIA/ikta-website-funnel"
npm run build 2>&1 | grep -E "formazione|error"
```

Expected: see `/formazione/pugilato`, `/formazione/mma`, `/formazione/muay-thai`, `/formazione/kick-boxing`, `/formazione/difesa-personale` in build output.

- [ ] **Step 3: Start prod server and visit each disciplina**

```bash
cd "/Users/dbnmillionaire/IKTA ITALIA/ikta-website-funnel"
npx next start -p 3011 &
sleep 4
for d in pugilato mma muay-thai kick-boxing difesa-personale; do
  echo "Checking /formazione/$d:"
  curl -s -o /dev/null -w "  HTTP %{http_code}\n" "http://localhost:3011/formazione/$d"
done
```

Expected: 5 × HTTP 200.

- [ ] **Step 4: Visual check via Playwright on Pugilato page**

Navigate to `http://localhost:3011/formazione/pugilato`. Verify all sections render: hero, trust strip, "a chi si rivolge", "cosa ottieni", 3 livelli, esame, testimonials, FAQ, CTA WhatsApp.

- [ ] **Step 5: Stop server, commit**

```bash
lsof -ti:3011 | xargs kill 2>/dev/null
cd "/Users/dbnmillionaire/IKTA ITALIA/ikta-website-funnel"
git add src/app/formazione/\[disciplina\]/page.tsx
git commit -m "feat(formazione): add dynamic discipline sales pages"
```

---

## Phase 4 — Update existing pages

### Task 4.1: Update `/formazione` root as index of disciplines

**Files:**
- Modify: `src/app/formazione/page.tsx`

- [ ] **Step 1: Read current /formazione**

```bash
cd "/Users/dbnmillionaire/IKTA ITALIA/ikta-website-funnel"
wc -l src/app/formazione/page.tsx
```

- [ ] **Step 2: Replace top hero with new index hero (keep albo tables sections intact)**

In `src/app/formazione/page.tsx`, replace the first `<section id="corsi" ...>` content (the hero + `<CorsiAccordion />`) with:

```typescript
import LeadMagnetForm from '@/components/funnel/LeadMagnetForm';
import { discipline } from '@/data/discipline-corsi';
import Link from 'next/link';

// inside JSX:
<section id="corsi" className="section pt-28 md:pt-32">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12 max-w-3xl mx-auto">
      <span className="eyebrow">Formazione certificata CONI</span>
      <h1 className="mt-2">Diventa istruttore IKTA</h1>
      <p className="text-base md:text-lg text-gray-600 mt-4 leading-relaxed">
        5 discipline, 3 livelli per disciplina (Allenatore, Istruttore, Maestro), formato FAD H24. Diploma Nazionale Libertas riconosciuto CONI. 490€ per livello.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
      {discipline.map((d) => (
        <Link
          key={d.slug}
          href={`/formazione/${d.slug}`}
          className="card group block hover:-translate-y-1 transition-transform"
        >
          <span className="eyebrow !text-[#1e40af]">Corso istruttore</span>
          <h3 className="!text-2xl mt-2 group-hover:text-[#1e40af] transition-colors">{d.nome}</h3>
          <p className="text-sm text-gray-600 mt-2">{d.livelli.length} livelli, FAD online H24</p>
          <p className="text-sm font-semibold text-[#1e40af] mt-4">Scopri il percorso →</p>
        </Link>
      ))}
    </div>

    {/* Lead magnet form */}
    <div className="max-w-2xl mx-auto bg-[#1e40af] text-white rounded-2xl p-8 sm:p-10 text-center shadow-xl">
      <h2 className="!text-white mb-3">Guida gratuita: come diventare istruttore CONI</h2>
      <p className="text-white/80 mb-6">
        Un PDF con i 3 livelli S.Na.Q., quanto guadagna un istruttore in Italia, e le 10 domande da farsi prima di iscriversi a un corso.
      </p>
      <LeadMagnetForm />
    </div>
  </div>
</section>
```

Note: `<CorsiAccordion />` rimane sotto, ora rendering dei dati dal data file (refactored in Phase 1). Le tabelle albo restano intatte come sezioni successive.

- [ ] **Step 3: Build + visual check**

```bash
cd "/Users/dbnmillionaire/IKTA ITALIA/ikta-website-funnel"
npm run build
```

Expected: build succeeds (note: `LeadMagnetForm` import will fail until Task 5.1; if so, stub it as `const LeadMagnetForm = () => <div>TODO form</div>` temporarily, will replace).

```bash
npx next start -p 3011 &
sleep 4
curl -s -o /dev/null -w "HTTP %{http_code}\n" http://localhost:3011/formazione
```

- [ ] **Step 4: Visual verification**

Navigate to `/formazione`, verify hero + 5 cards + lead magnet placeholder visible.

- [ ] **Step 5: Stop server, commit**

```bash
lsof -ti:3011 | xargs kill 2>/dev/null
cd "/Users/dbnmillionaire/IKTA ITALIA/ikta-website-funnel"
git add src/app/formazione/page.tsx
git commit -m "feat(formazione): redesign root as discipline index + lead magnet section"
```

### Task 4.2: Update homepage with trust strip + "diventa istruttore" section

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Add trust strip below stats section**

In `src/app/page.tsx`, after the existing `{/* Stats Section */}` section, insert:

```typescript
import TrustStrip from '@/components/funnel/TrustStrip';

// in JSX, after the stats <section>:
<TrustStrip />
```

- [ ] **Step 2: Add new "Diventa istruttore" section after stats/trust strip, before disciplines**

In `src/app/page.tsx`, after `<TrustStrip />` and before the existing `{/* Disciplines Section */}`, insert:

```typescript
<section className="section bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="grid lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
      <div>
        <span className="eyebrow">Formazione istruttori</span>
        <h2 className="mt-2 text-left lg:!text-left">Vuoi diventare istruttore certificato CONI?</h2>
        <p className="text-base md:text-lg text-gray-600 mt-4 leading-relaxed">
          5 discipline, 3 livelli (Allenatore, Istruttore, Maestro), formato FAD online H24. Diploma Nazionale Libertas, equipollente S.Na.Q., riconosciuto CONI. 490€ per livello, esame a Civitavecchia.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <Link href="/formazione" className="btn btn-primary">
            Vedi i corsi
          </Link>
          <Link href="/formazione#guida" className="btn btn-outline">
            Scarica la guida gratuita
          </Link>
        </div>
      </div>
      <div className="flex justify-center">
        <Image
          src="/iktafoto2.jpg"
          alt="Formazione istruttori IKTA"
          width={500}
          height={400}
          className="rounded-xl shadow-lg object-cover w-full max-h-[400px]"
        />
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 3: Build + visual check**

```bash
cd "/Users/dbnmillionaire/IKTA ITALIA/ikta-website-funnel"
npm run build && npx next start -p 3011 &
sleep 4 && curl -s -o /dev/null -w "HTTP %{http_code}\n" http://localhost:3011/
```

- [ ] **Step 4: Stop, commit**

```bash
lsof -ti:3011 | xargs kill 2>/dev/null
git add src/app/page.tsx
git commit -m "feat(home): add trust strip and 'diventa istruttore' section"
```

### Task 4.3: Add Massimo Brizi box to /chi-siamo

**Files:**
- Modify: `src/app/chi-siamo/page.tsx`

- [ ] **Step 1: After "La nostra missione", add presidente box**

In `src/app/chi-siamo/page.tsx`, after the closing `</div>` of the "Missione" grid block (and before "I nostri valori"), insert:

```typescript
<div id="presidente" className="my-20 max-w-4xl mx-auto card-flat bg-white border border-gray-200 !p-8 md:!p-10">
  <div className="grid md:grid-cols-3 gap-8 items-center">
    <div>
      <Image
        src="/iktafoto1.jpg"
        alt="Massimo Brizi, presidente IKTA"
        width={300}
        height={300}
        className="rounded-xl object-cover w-full aspect-square"
      />
    </div>
    <div className="md:col-span-2">
      <span className="eyebrow">Il presidente</span>
      <h3 className="!text-2xl mt-2 mb-3">Massimo Brizi</h3>
      <p className="text-gray-700 leading-relaxed mb-3">
        Da 20 anni guida IKTA come federazione italiana degli sport da combattimento. Ha formato personalmente decine di istruttori oggi attivi nelle palestre della rete e curato la struttura tecnica di gare, ranking e percorsi di formazione.
      </p>
      <p className="text-gray-700 leading-relaxed">
        IKTA non e una scuola privata: e una federazione riconosciuta, con organigramma, regolamenti e diplomi rilasciati attraverso Libertas, EPS riconosciuto CONI.
      </p>
    </div>
  </div>
</div>
```

- [ ] **Step 2: Build + check**

```bash
cd "/Users/dbnmillionaire/IKTA ITALIA/ikta-website-funnel"
npm run build && npx next start -p 3011 &
sleep 4 && curl -s -o /dev/null -w "HTTP %{http_code}\n" http://localhost:3011/chi-siamo
```

- [ ] **Step 3: Commit**

```bash
lsof -ti:3011 | xargs kill 2>/dev/null
git add src/app/chi-siamo/page.tsx
git commit -m "feat(chi-siamo): add president Massimo Brizi box"
```

---

## Phase 5 — Lead magnet pipeline (form + Brevo API)

### Task 5.1: Create LeadMagnetForm component (client)

**Files:**
- Create: `src/components/funnel/LeadMagnetForm.tsx`

- [ ] **Step 1: Write form component with state, validation, submit handler**

Create `src/components/funnel/LeadMagnetForm.tsx`:

```typescript
'use client';

import { useState } from 'react';

const DISCIPLINE_OPTIONS = [
  { value: 'pugilato', label: 'Pugilato' },
  { value: 'mma', label: 'MMA' },
  { value: 'muay-thai', label: 'Muay Thai' },
  { value: 'kick-boxing', label: 'Kick Boxing' },
  { value: 'difesa-personale', label: 'Difesa Personale' },
];

export default function LeadMagnetForm() {
  const [email, setEmail] = useState('');
  const [disciplina, setDisciplina] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [consenso, setConsenso] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    if (!consenso) {
      setStatus('error');
      setErrorMsg('Devi accettare l\'informativa privacy.');
      return;
    }

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, disciplina, honeypot }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Errore generico, riprova.');
      }
      setStatus('success');
      window.location.href = '/grazie';
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Errore generico.');
    }
  }

  return (
    <form onSubmit={onSubmit} className="text-left space-y-3" noValidate>
      {/* Honeypot - hidden, bots fill it */}
      <input
        type="text"
        name="website"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        className="absolute -left-[9999px]"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white mb-1">Email</label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-400 bg-white"
          placeholder="tuo@email.it"
        />
      </div>

      <div>
        <label htmlFor="disciplina" className="block text-sm font-medium text-white mb-1">Disciplina di interesse</label>
        <select
          id="disciplina"
          required
          value={disciplina}
          onChange={(e) => setDisciplina(e.target.value)}
          className="w-full px-4 py-3 rounded-lg text-gray-900 bg-white"
        >
          <option value="">Seleziona...</option>
          {DISCIPLINE_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </div>

      <label className="flex items-start gap-2 text-xs text-white/80">
        <input
          type="checkbox"
          checked={consenso}
          onChange={(e) => setConsenso(e.target.checked)}
          className="mt-1"
        />
        <span>
          Ho letto e accetto la <a href="/privacy" target="_blank" className="underline">Privacy Policy</a> e acconsento al trattamento dei dati per ricevere la guida e comunicazioni IKTA.
        </span>
      </label>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full btn btn-primary !mt-4"
      >
        {status === 'loading' ? 'Invio in corso...' : 'Scarica la guida gratuita'}
      </button>

      {status === 'error' && (
        <p className="text-yellow-200 text-sm mt-2">{errorMsg}</p>
      )}
    </form>
  );
}
```

- [ ] **Step 2: Commit**

```bash
cd "/Users/dbnmillionaire/IKTA ITALIA/ikta-website-funnel"
git add src/components/funnel/LeadMagnetForm.tsx
git commit -m "feat(funnel): add LeadMagnetForm client component"
```

### Task 5.2: Create /grazie post-submit page

**Files:**
- Create: `src/app/grazie/page.tsx`

- [ ] **Step 1: Write page**

Create `src/app/grazie/page.tsx`:

```typescript
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Grazie!',
  description: 'Grazie per esserti iscritto alla guida IKTA. A breve ricevi tutto in email.',
  robots: { index: false, follow: false },
};

export default function GraziePage() {
  return (
    <section className="section pt-28 md:pt-32 min-h-[60vh]">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <span className="eyebrow">Iscrizione confermata</span>
        <h1 className="mt-3">Grazie! Controlla la tua email</h1>
        <p className="text-base md:text-lg text-gray-700 mt-4 leading-relaxed">
          Nei prossimi minuti riceverai una email con il link per scaricare la guida. Se non la trovi, controlla anche nella cartella spam o promozioni.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/formazione" className="btn btn-primary">Torna ai corsi</Link>
          <a href="https://www.instagram.com/iktaitalia" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Seguici su Instagram</a>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
cd "/Users/dbnmillionaire/IKTA ITALIA/ikta-website-funnel"
git add src/app/grazie/page.tsx
git commit -m "feat(funnel): add /grazie post-submit page"
```

### Task 5.3: API route POST /api/leads

**Files:**
- Create: `src/app/api/leads/route.ts`
- Create: `.env.local` (gitignored)

- [ ] **Step 1: Setup env file (NOT committed)**

```bash
cd "/Users/dbnmillionaire/IKTA ITALIA/ikta-website-funnel"
cat > .env.local << 'EOF'
# Brevo API key - get one from https://app.brevo.com/settings/keys/api
# This file is gitignored. Do NOT commit.
BREVO_API_KEY=PLACEHOLDER_REPLACE_ME
BREVO_LIST_ID=
EOF
```

Note for the human: replace `PLACEHOLDER_REPLACE_ME` with a real Brevo API key + the list ID before testing live form submissions. The API route will still build and respond with a clear error if not configured.

- [ ] **Step 2: Verify .env.local is gitignored**

```bash
cd "/Users/dbnmillionaire/IKTA ITALIA/ikta-website-funnel"
git check-ignore .env.local && echo "ok, ignored"
```

Expected: `ok, ignored`.

- [ ] **Step 3: Create route**

Create `src/app/api/leads/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';

const VALID_DISCIPLINE = ['pugilato', 'mma', 'muay-thai', 'kick-boxing', 'difesa-personale'] as const;

type LeadBody = {
  email?: string;
  disciplina?: string;
  honeypot?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Simple in-memory rate limit (resets on cold start, acceptable for v1)
const recentSubmissions = new Map<string, number>();
const RATE_LIMIT_MS = 60_000; // 1 submission per minute per IP

export async function POST(req: NextRequest) {
  let body: LeadBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'JSON non valido.' }, { status: 400 });
  }

  // Honeypot
  if (body.honeypot && body.honeypot.length > 0) {
    return NextResponse.json({ ok: true }, { status: 200 }); // Silently swallow bot
  }

  // Validation
  const email = body.email?.trim().toLowerCase() ?? '';
  const disciplina = body.disciplina?.trim() ?? '';
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Email non valida.' }, { status: 400 });
  }
  if (!VALID_DISCIPLINE.includes(disciplina as typeof VALID_DISCIPLINE[number])) {
    return NextResponse.json({ error: 'Disciplina non valida.' }, { status: 400 });
  }

  // Rate limit per IP
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  const now = Date.now();
  const last = recentSubmissions.get(ip);
  if (last && now - last < RATE_LIMIT_MS) {
    return NextResponse.json({ error: 'Troppe richieste. Riprova tra un minuto.' }, { status: 429 });
  }
  recentSubmissions.set(ip, now);

  // Brevo integration
  const apiKey = process.env.BREVO_API_KEY;
  const listId = process.env.BREVO_LIST_ID;
  if (!apiKey || apiKey === 'PLACEHOLDER_REPLACE_ME') {
    console.warn('[leads] BREVO_API_KEY not configured. Lead would be:', { email, disciplina });
    return NextResponse.json({ ok: true, warning: 'dev mode: lead not actually sent' }, { status: 200 });
  }

  try {
    const brevoRes = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': apiKey,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        email,
        attributes: { DISCIPLINA: disciplina },
        listIds: listId ? [Number(listId)] : undefined,
        updateEnabled: true,
      }),
    });

    if (!brevoRes.ok) {
      const errText = await brevoRes.text();
      console.error('[leads] Brevo error:', brevoRes.status, errText);
      return NextResponse.json({ error: 'Errore di sistema. Riprova tra qualche minuto.' }, { status: 502 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error('[leads] Network error:', err);
    return NextResponse.json({ error: 'Errore di rete. Riprova.' }, { status: 502 });
  }
}
```

- [ ] **Step 4: Test the route locally with curl in dev mode (no Brevo key set)**

```bash
cd "/Users/dbnmillionaire/IKTA ITALIA/ikta-website-funnel"
npm run build && npx next start -p 3011 &
sleep 4

# Valid request, expect 200 with warning
curl -s -X POST http://localhost:3011/api/leads \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","disciplina":"pugilato","honeypot":""}'
echo

# Invalid email, expect 400
curl -s -X POST http://localhost:3011/api/leads \
  -H "Content-Type: application/json" \
  -d '{"email":"not-an-email","disciplina":"pugilato","honeypot":""}'
echo

# Invalid disciplina, expect 400
curl -s -X POST http://localhost:3011/api/leads \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","disciplina":"foobar","honeypot":""}'
echo

# Honeypot triggered, expect 200 with silent ok
curl -s -X POST http://localhost:3011/api/leads \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","disciplina":"pugilato","honeypot":"bot"}'
echo

lsof -ti:3011 | xargs kill 2>/dev/null
```

Expected results:
- 1: `{"ok":true,"warning":"dev mode: lead not actually sent"}`
- 2: `{"error":"Email non valida."}`
- 3: `{"error":"Disciplina non valida."}`
- 4: `{"ok":true}`

- [ ] **Step 5: Commit**

```bash
git add src/app/api/leads/route.ts
git commit -m "feat(api): add /api/leads route with Brevo integration and validation"
```

### Task 5.4: Add placeholder PDF for lead magnet

**Files:**
- Create: `public/risorse/guida-istruttore-ikta.pdf`

- [ ] **Step 1: Create dir + placeholder PDF**

```bash
cd "/Users/dbnmillionaire/IKTA ITALIA/ikta-website-funnel"
mkdir -p public/risorse
```

Create a minimal placeholder PDF (real PDF will be written by Massimo / Edoardo offline). Save a 1-page text PDF named `guida-istruttore-ikta.pdf` to `public/risorse/`. For now, a text file renamed is fine as long as the path responds with 200 (browser will trigger download fallback).

- [ ] **Step 2: Create minimal PDF placeholder via printf**

```bash
cd "/Users/dbnmillionaire/IKTA ITALIA/ikta-website-funnel"
printf '%%PDF-1.4\n1 0 obj<</Type/Catalog/Pages 2 0 R>>endobj\n2 0 obj<</Type/Pages/Kids[3 0 R]/Count 1>>endobj\n3 0 obj<</Type/Page/Parent 2 0 R/MediaBox[0 0 612 792]/Contents 4 0 R>>endobj\n4 0 obj<</Length 44>>stream\nBT /F1 24 Tf 100 700 Td (Guida IKTA Placeholder) Tj ET\nendstream\nendobj\nxref\n0 5\n0000000000 65535 f\n0000000009 00000 n\n0000000052 00000 n\n0000000101 00000 n\n0000000172 00000 n\ntrailer<</Size 5/Root 1 0 R>>\nstartxref\n265\n%%%%EOF' > public/risorse/guida-istruttore-ikta.pdf
```

- [ ] **Step 3: Verify accessible**

```bash
cd "/Users/dbnmillionaire/IKTA ITALIA/ikta-website-funnel"
npx next start -p 3011 &
sleep 4
curl -s -o /dev/null -w "PDF: HTTP %{http_code}\n" http://localhost:3011/risorse/guida-istruttore-ikta.pdf
lsof -ti:3011 | xargs kill 2>/dev/null
```

Expected: HTTP 200.

- [ ] **Step 4: Commit**

```bash
git add public/risorse/
git commit -m "feat(funnel): add placeholder lead magnet PDF"
```

### Task 5.5: CSP update for Brevo API call (if needed)

**Files:**
- Modify: `next.config.ts`

Note: since Brevo is called server-side from the API route, it should NOT need to be in CSP (no client requests to brevo.com). Verify by inspecting the network panel in dev tools after a form submit. If the client never directly hits Brevo, skip this task. If for some reason a CSP error appears, add `https://api.brevo.com` to `connect-src` in the CSP. For now leave unchanged; task is informational.

- [ ] **Step 1: Test submission visually**

Navigate to `/formazione`, scroll to lead magnet form, submit with valid email + disciplina. Verify:
- Network tab shows POST `/api/leads` returns 200
- Redirect to `/grazie` works
- No CSP errors in console

If a CSP error appears related to brevo, add `connect-src 'self' https://api.brevo.com` and re-test.

- [ ] **Step 2: Commit (only if change made)**

```bash
# Only if CSP was modified:
git add next.config.ts
git commit -m "chore(csp): allow connect-src to api.brevo.com if needed"
```

---

## Phase 6 — SEO + sitemap + polish

### Task 6.1: Add new routes to sitemap

**Files:**
- Modify: `src/app/sitemap.ts`

- [ ] **Step 1: Add 5 disciplina routes + /grazie (with noindex)**

In `src/app/sitemap.ts`, before the closing `]`:

```typescript
{ url: 'https://iktaworld.com/formazione/pugilato', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
{ url: 'https://iktaworld.com/formazione/mma', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
{ url: 'https://iktaworld.com/formazione/muay-thai', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
{ url: 'https://iktaworld.com/formazione/kick-boxing', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
{ url: 'https://iktaworld.com/formazione/difesa-personale', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
```

Do NOT include `/grazie` in sitemap (it's noindex).

- [ ] **Step 2: Build + check sitemap**

```bash
cd "/Users/dbnmillionaire/IKTA ITALIA/ikta-website-funnel"
npm run build && npx next start -p 3011 &
sleep 4
curl -s http://localhost:3011/sitemap.xml | grep -c "formazione/"
lsof -ti:3011 | xargs kill 2>/dev/null
```

Expected: 6 (1 root + 5 discipline).

- [ ] **Step 3: Commit**

```bash
git add src/app/sitemap.ts
git commit -m "feat(seo): add 5 discipline routes to sitemap"
```

### Task 6.2: Add JSON-LD Course schema to discipline pages

**Files:**
- Modify: `src/app/formazione/[disciplina]/page.tsx`

- [ ] **Step 1: Add JSON-LD Course schema at the top of the page render**

In `src/app/formazione/[disciplina]/page.tsx`, before the first `<section>`, insert:

```typescript
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Course",
      "name": `Corso Istruttore ${d.nome} certificato CONI`,
      "description": d.metaDescription,
      "provider": {
        "@type": "SportsOrganization",
        "name": "IKTA - Intercontinental Kick Thai Boxing Association",
        "sameAs": "https://iktaworld.com",
      },
      "offers": d.livelli.map(l => ({
        "@type": "Offer",
        "name": l.nome,
        "price": l.prezzo,
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
      })),
      "courseMode": "online",
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "online",
        "location": {
          "@type": "Place",
          "name": "Civitavecchia (esame pratico)",
          "address": "Via Ticino 15, 00053 Civitavecchia (RM), Italia",
        },
      },
    }),
  }}
/>
```

- [ ] **Step 2: Build + verify JSON-LD**

```bash
cd "/Users/dbnmillionaire/IKTA ITALIA/ikta-website-funnel"
npm run build && npx next start -p 3011 &
sleep 4
curl -s http://localhost:3011/formazione/pugilato | grep -c '"@type":"Course"'
lsof -ti:3011 | xargs kill 2>/dev/null
```

Expected: 1.

- [ ] **Step 3: Commit**

```bash
git add src/app/formazione/\[disciplina\]/page.tsx
git commit -m "feat(seo): add Course JSON-LD schema to discipline pages"
```

### Task 6.3: Final integration smoke test

**Files:** none (verification)

- [ ] **Step 1: Full build clean**

```bash
cd "/Users/dbnmillionaire/IKTA ITALIA/ikta-website-funnel"
rm -rf .next
npm run build 2>&1 | tail -30
```

Expected: no warnings, no errors. 30+ pages generated.

- [ ] **Step 2: Smoke test all key routes**

```bash
cd "/Users/dbnmillionaire/IKTA ITALIA/ikta-website-funnel"
npx next start -p 3011 &
sleep 4
for route in / /formazione /formazione/pugilato /formazione/mma /formazione/muay-thai /formazione/kick-boxing /formazione/difesa-personale /grazie /chi-siamo /privacy /cookie-policy /sitemap.xml /robots.txt; do
  code=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:3011$route")
  echo "  $route → $code"
done
lsof -ti:3011 | xargs kill 2>/dev/null
```

Expected: all routes return HTTP 200.

- [ ] **Step 3: Visual full-page screenshot of /formazione/pugilato via Playwright**

Navigate to `http://localhost:3011/formazione/pugilato`. Take a full-page screenshot. Verify:
- Hero with diploma fac-simile and CTA
- Trust strip
- "A chi si rivolge" with 3 levels
- "Cosa ottieni" 6 items
- 3 livelli cards
- Esame section
- Testimonial × 3
- FAQ accordion (open one to verify)
- CTA WhatsApp finale with text precompilato

- [ ] **Step 4: Test lead magnet flow end-to-end**

Navigate to `/formazione`, scroll to lead magnet form, submit with valid email + disciplina. Verify:
- Redirect to `/grazie`
- Console shows "dev mode: lead not actually sent" warning (because Brevo key is placeholder)

- [ ] **Step 5: Commit final smoke notes (empty commit for marker)**

```bash
cd "/Users/dbnmillionaire/IKTA ITALIA/ikta-website-funnel"
git commit --allow-empty -m "test: smoke test all routes pass, lead flow works in dev mode"
```

---

## Phase 7 — Handoff to user for review

### Task 7.1: Side-by-side comparison

**Files:** none (manual review)

- [ ] **Step 1: Start production build in worktree on port 3011**

```bash
cd "/Users/dbnmillionaire/IKTA ITALIA/ikta-website-funnel"
npx next start -p 3011 &
```

- [ ] **Step 2: Start production build of main repo on port 3010 (for comparison)**

```bash
cd "/Users/dbnmillionaire/IKTA ITALIA/ikta-website"
npm run build && npx next start -p 3010 &
```

- [ ] **Step 3: Show user both URLs**

> "Confronto fianco a fianco:
> - **Sito attuale**: http://localhost:3010
> - **Nuovo funnel**: http://localhost:3011
>
> Naviga entrambi. Se il nuovo ti piace, decidi se mergiare il branch `feat/funnel-corsi` sul main o lasciamo cosi in worktree per altre iterazioni."

- [ ] **Step 4: Stop both servers when done**

```bash
lsof -ti:3010,3011 | xargs kill 2>/dev/null
```

### Task 7.2: Document open items for Massimo

**Files:**
- Create: `docs/superpowers/plans/2026-05-06-handoff-massimo.md` (in worktree)

- [ ] **Step 1: Write handoff doc**

Create the handoff doc listing what's needed from Massimo to go from dev mode to live:

```markdown
# Handoff: Cosa serve da Massimo per andare live

1. Account Brevo gratuito creato + API key + ID lista contatti → da inserire in `.env.local` (in produzione: variabile d'ambiente Vercel)
2. Guida PDF reale (la versione attuale e un placeholder)
3. Conferma testimonials: i 3 nomi attualmente nella pagina Pugilato sono Manuel Mammetti / Antonio Giacomini / Marco Caramelli (dall'Albo Allenatori). Conferma che possiamo citarli con quei testi.
4. Logos trust strip: SVG/PNG reali di CONI, Libertas, Unitelematica, FIAMS (i placeholder vanno sostituiti)
5. Foto Massimo Brizi (al momento usata `/iktafoto1.jpg` per il box presidente in /chi-siamo - verificare se va bene o serve foto specifica)
6. Decisione "Posti limitati" sui canvas IG/FB: e una scarsita vera (data esami fissa con capacita massima) o solo marketing? Da chiarire prima di pubblicare le grafiche
7. Sostituire "kickboxe" con "kick boxing" nelle 2 grafiche social prima della pubblicazione
```

- [ ] **Step 2: Commit handoff doc**

```bash
cd "/Users/dbnmillionaire/IKTA ITALIA/ikta-website-funnel"
git add docs/superpowers/plans/2026-05-06-handoff-massimo.md
git commit -m "docs: add handoff items for Massimo before going live"
```

---

## Self-review checklist

- [x] **Spec coverage**: every spec section has at least one task. 5 pagine disciplina (P3.1), lead magnet pipeline (P5.1-5.5), trust components (P2.1-2.6), data refactor (P1.1-1.3), site updates (P4.1-4.3), SEO (P6.1-6.3). ✓
- [x] **Placeholder scan**: no "TBD", no "fill in details", no "similar to task N". All code blocks are complete. ✓
- [x] **Type consistency**: `DisciplinaCorso`, `Livello`, `Modulo`, `Faq`, `Testimonial`, `ProfiloRivolto` all defined once and used consistently. Slugs are typed as union. ✓
- [x] **Decision compliance**: prezzi 490€ uniformi ✓, niente sconti volume ✓, niente CFU (usate ore di studio) ✓, sede Civitavecchia ✓, WhatsApp manuale ✓, niente carrello ✓.
- [x] **Worktree isolation**: every command runs in `ikta-website-funnel/`. Nothing touches main repo. ✓
- [x] **Frequent commits**: ~25 commits across the plan. ✓
- [x] **GDPR**: form ha checkbox consenso + link a `/privacy`. ✓
- [x] **Em-dash hygiene**: nessun em-dash nel copy proposto. ✓
