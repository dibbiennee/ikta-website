# IKTA — Redesign sito (refactor + ridisegno) — Design Doc

**Data:** 2026-07-23
**Approccio scelto:** A — Refactor + ridisegno sullo stack attuale (Next.js 16 / React 19 / Tailwind 4)
**Repo:** dibbiennee/ikta-website · **Deploy:** Vercel · **Dominio/email:** Hostinger

---

## 1. Obiettivo

Modernizzare **struttura, UX e manutenibilità** del sito della federazione IKTA, mantenendo lo stack moderno e l'infrastruttura già solida (sicurezza, SEO, immagini). Non è un cambio di tecnologia: è un ridisegno dell'esperienza + separazione dei dati dalla presentazione + aggiunta dei form.

**Fonti di verità:**
- **Struttura/layout/UX** → la demo mobile realizzata dal committente.
- **Identità visiva** → `BRAND.md` del repo (autorità sui colori/font).
- **Contenuti reali** → sito attuale iktaworld.com (dati già tipizzati nel codice).

**Obiettivi di business:** affiliare palestre (conversione primaria), iscrivere istruttori ai corsi, tesseramento, visibilità locale e di categoria.

## 2. Approccio

Refactor in-place sul repo esistente. Si riusa: header di sicurezza (CSP/HSTS), generazione sitemap/robots, OG dinamica, pipeline immagini, e **tutti i dati già tipizzati** (ranking, albo, ecc.). Si rifà: design system applicato, struttura/IA, componenti (restyle), form, e i fix SEO/CRO/accessibilità.

## 3. Architettura & modello dati

- Nuova cartella **`src/data/`** con moduli TypeScript tipizzati (tipi condivisi in `src/data/types.ts`):
  `federazione.ts` (statistiche, missione, valori), `discipline.ts`, `sedi.ts`, `organigramma.ts` (Italia + World), `albo.ts` (allenatori/istruttori/maestri/ufficiali), `corsi.ts`, `calendarioCorsi.ts`, `gare.ts` (eventi + locandine), `ranking.ts`, `titoli.ts`, `cinture.ts`, `regolamenti.ts`, `news.ts`, `presidente.ts`.
- I dati esistenti (già array tipizzati dentro i `.tsx`) vengono **spostati**, non reinseriti. Pagine e componenti importano da `src/data`.
- Effetto: i file "mostro" (`ikta-world/ranking/page.tsx` 1234 righe, `CorsiAccordion.tsx` 1034, `RegolamentoModal.tsx` 990) tornano a essere pura presentazione. Aggiornare un contenuto = modificare un array in un file dati chiaro.

## 4. Information Architecture (mappa del sito)

Navigazione (top su desktop, hamburger su mobile — **con CTA "Affiliati" anche su mobile**, oggi assente):

- **Home** — hero con headline di valore (non solo "IKTA") + segmentazione pubblico (palestra / atleta / aspirante istruttore), prova sociale, discipline, sedi, CTA affiliazione. Barra CTA sticky "Affiliati" (nascosta sulla pagina affiliazione).
- **IKTA Italia** → Discipline · Affiliazione · Sedi
- **Chi Siamo** → La Federazione · Organigramma Italia · Il Presidente · Regolamenti · Galleria
- **Formazione** → Corsi · Albo Istruttori · Calendario Corsi
- **Gare & Ranking** → Calendario Gare · Ranking · Omologazione Titoli
- **IKTA World** → News · Organigramma World · Titoli & Record · Cinture · New World Record
- **Contatti** (con form) · **Palestre** (in nav, oggi orfana)

Decisioni:
1. **Pagina `/discipline` reale, server-rendered** (rimuove il redirect `/discipline → /#discipline`): keyword primaria, deve essere indicizzabile come pagina dedicata con le 8 discipline.
2. **Omologazione Titoli** reinserita come contenuto reale (processo a 4 step, come da demo).
3. **URL esistenti mantenuti**; 301 solo dove una route cambia.
4. Base per **pagine-sede singole** (SEO locale) prevista come fase 2.

## 5. Design system (secondo BRAND.md)

- **Tipografia: Geist** (sans, tutto il testo) + **Geist Mono** (dati). Pesi 800 (titoli) / 600 (label) / 450 (corpo). Titoli uppercase con letter-spacing. Un solo `<h1>` per pagina.
- **Colori:** oro `#eab308` (CTA/accenti/dettagli), dark gold `#ca8a04` (hover), light gold `#fbbf24`/`#f6d152`; blu `#1e40af` (brand/eyebrow/link), dark blue `#1e3a8a` (hover), light blue `#3b82f6`; rosso `#c8102e` (dettagli bandiera, minimale); scala grigi `#fafafa`→`#171717`→`#0a0a0a`. **Night Mode** (sezioni scure): bg `#0a1230`, gradiente radiale a `#1c2e78`, testo `#f3f6ff`.
- **Accessibilità contrasto:** l'oro si usa per **riempimenti/CTA** (testo scuro su oro); per **testo/eyebrow/link su bianco si usa il blu `#1e40af`** (≈5,7:1). Evitato l'oro come testo su bianco (≈2:1).
- **Logo:** `public/logo-ikta.png`; su sfondi scuri/foto va su disco bianco `#f7f8fa` con anello oro `#eab308`.
- Riuso delle classi in `globals.css` (`.btn-primary/secondary/outline/ghost/dark`, eyebrow, section wrapper, card, gradient bar).

## 6. Responsive & componenti

- **Mobile-first con layout desktop reale** (la demo è solo 480px). Breakpoint 375 / 768 / 1024 / 1440. Nav orizzontale su desktop, hamburger su mobile; griglie multi-colonna per discipline/sedi/ranking; tabelle ranking responsive (scroll orizzontale controllato o layout a card su mobile).
- **Componenti** (riuso logica, restyle su brand): Header (con CTA Affiliati mobile), Footer, HeroCarousel (`prefers-reduced-motion` + prima slide con priorità LCP), card discipline, SedeCard, RankingItalia, CorsiAccordion, RegolamentoModal, EventGallery/GalleriaGare, CookieBanner, WhatsAppButton (numero unico), form Affiliazione/Contatti, BottomNav.

## 7. Form & invio email (GDPR)

- **Due form:** Affiliazione (nome palestra, referente, città, email, telefono, discipline/note) e Contatti (nome, email, messaggio). Label **visibili** (non solo placeholder), validazione inline, stato di successo.
- **Invio (soluzione gratuita, no servizio Hostinger a pagamento):** Next.js **Server Action** (gira lato server → non tocca la CSP browser; `form-action 'self'` già ok) che invia via un **servizio transazionale gratuito** — consigliato **Resend free tier** (100 email/giorno, verifica dominio via DNS SPF/DKIM gratis). Alternativa: Brevo free.
- **Casella professionale gratuita:** indirizzo dominio da mostrare sul sito (es. `info@iktaworld.com`) con **inoltro gratuito** (es. Cloudflare Email Routing, gratis) verso le caselle esistenti. Nessun costo.
- **Doppia consegna:** i form recapitano a **entrambi** — casella del gestore **+** email del proprietario (`@tiscali`) — come doppio destinatario nell'invio o via regola di inoltro.
- **Anti-spam:** honeypot + rate limiting basico; niente CAPTCHA (privacy).
- **GDPR:** checkbox consenso + link privacy; nessun dato non necessario conservato.
- **Setup lato committente:** creare l'indirizzo dominio + inoltro gratuito, verificare il dominio sul servizio di invio, fornire l'API key come variabile d'ambiente su Vercel.

## 8. SEO & migrazione

- **Metadata per pagina** unici (title 50–60, description 150–160) + **canonical** self-referencing ovunque. `lang="it"`.
- **`/discipline`** diventa pagina reale SSR (via il redirect).
- **Sitemap completa** (include `/discipline`, `/palestre`, hub `/ikta-world`); solo URL canonici/indicizzabili.
- **Dati strutturati:** mantenere `SportsOrganization` + `SportsActivityLocation`; aggiungere `Event` (gare), `Course` (formazione), `BreadcrumbList`, `FAQPage` (affiliazione).
- **Immagini:** alt descrittivi (mantenere lo standard attuale, già buono), WebP/AVIF, LCP prioritario, lazy.
- **Cookie/consenso:** la mappa Google carica **solo dopo consenso**.

## 9. Coerenza contenuti (open items — dati reali dal committente)

- **Sedi Italia/Mondo:** elenco esatto (richiesto al presidente) → confluisce in `sedi.ts` e `organigramma.ts`. Riconciliare col claim "50+ palestre" (mostrare numero reale o contestualizzare).
- **Email professionale gratuita** (dominio + inoltro gratis) al posto di `massimo.brizi@tiscali.it` sul sito.
- **Uniformare nomi** ricorrenti (es. "Enzo Abuashesh" / "Enzo Abiushesh").
- **CLAUDE.md** del repo va aggiornato (oggi disallineato dal codice).

## 10. Fuori scope (per ora) / fasi successive

- Pagine-sede singole per SEO locale (fase 2).
- Blog / contenuti informazionali per keyword gap.
- Eventuale area riservata / CMS (non richiesto: i contenuti li aggiorna lo sviluppatore nei file dati).

## 11. Criteri di successo

- Contenuti in `src/data/`, pagine snelle; nessun file di sola-presentazione > ~300 righe salvo giustificato.
- `/discipline` indicizzabile; nessuna pagina con metadata duplicati; canonical presenti; sitemap completa.
- Form funzionanti con consegna a entrambe le caselle + consenso GDPR.
- Responsive corretto a 375/768/1024/1440; contrasti AA; focus visibile; reduced-motion rispettato.
- Parità di contenuti col sito attuale (nessun dato perso nella migrazione) + brand `BRAND.md` applicato.
