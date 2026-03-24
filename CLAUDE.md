# IKTA World - iktaworld.com

## Progetto
Sito web ufficiale della federazione **IKTA - Intercontinental Kick Thai Boxing Association**.
Federazione internazionale di sport da combattimento: Kick Boxing, Muay Thai, MMA, Krav Maga, BJJ, Boxe, Kung Fu Sanda e Karate.

## Stack Tecnico
- **Framework**: Next.js 14+ (App Router)
- **CSS**: Tailwind CSS (utility-first)
- **Font**: Geist + Geist Mono (Vercel)
- **Linguaggio**: TypeScript
- **Deploy**: Vercel
- **Immagini**: Next.js Image con ottimizzazione automatica, formato WebP per sedi

## Struttura Progetto
```
src/
  app/                          # App Router pages
    page.tsx                    # Homepage
    layout.tsx                  # Layout globale (Header, Footer, JSON-LD, skip-nav)
    globals.css                 # Stili globali + classi utility custom
    affiliazione/               # Pagina affiliazione palestre
    chi-siamo/                  # Chi siamo + organigramma
    contatti/                   # Contatti (email offuscata)
    discipline/                 # 8 discipline con dettagli
    formazione/                 # Corsi istruttore + WhatsApp button
    gare/                       # Calendario gare, ranking, eventi
    ikta-world/                 # Sezione internazionale
      cinture-kick-boxe/
      cinture-krav-maga/
      new-world-record/
      news/
      organigramma/
      ranking/
      titoli/
    palestre/                   # Elenco palestre affiliate
    robots.ts                   # robots.txt generato
    sitemap.ts                  # sitemap.xml generata
    opengraph-image.tsx         # OG image dinamica
  components/
    Header.tsx                  # Navbar fissa con dropdown desktop + menu mobile
    Footer.tsx                  # Footer 4 colonne
    HeroCarousel.tsx            # Slider hero homepage (8 immagini)
    SedeCard.tsx                # Card palestra con galleria espandibile
    ContactEmail.tsx            # Email offuscata anti-bot (client-side)
    WhatsAppButton.tsx          # Pulsante WhatsApp (solo Formazione)
    EventGallery.tsx            # Griglia locandine eventi
    CalendarioEventi.tsx        # Calendario annuale eventi
    RankingItalia.tsx           # Tabelle ranking per categoria
    CorsiAccordion.tsx          # Accordion corsi formazione
    ScrollToTop.tsx             # Scroll to top automatico
    PolicyModal.tsx             # Modali privacy/cookie
    RegolamentoModal.tsx        # Modali regolamenti
    ComingSoonGate.tsx          # Gate "coming soon"
public/
    logo-ikta.png               # Logo principale
    hero/                       # Immagini hero carousel
    foto-eventi/                # Locandine eventi (28SETT, 7DIC, 8MARZ, 20GIUGNO)
    sedi/                       # Foto e loghi palestre (webp)
    loghi-world/                # Loghi federazioni internazionali
    fototitoli*.jpg             # Foto cinture e titoli
```

## Colori Brand
- **Primario (CTA)**: `#eab308` (giallo/oro)
- **Secondario**: `#1e40af` (blu IKTA)
- **Hover secondario**: `#1e3a8a` (blu scuro)
- **Sfondo**: bianco
- **Testo**: `text-gray-900`, `text-gray-700`
- **Card palestre**: tutte `#1e40af` (uniformate al brand)

## SEO
- Ogni pagina ha esattamente 1 tag `<h1>`
- JSON-LD `SportsOrganization` nel layout globale
- JSON-LD `SportsActivityLocation` per ogni sede nella homepage
- Meta description e Open Graph su tutte le pagine
- `robots.ts` e `sitemap.ts` generati automaticamente
- Template titolo: `%s | IKTA`

## Accessibilita
- Skip navigation link nel layout (`#main-content`)
- Alt text su tutte le immagini
- Aria-labels su bottoni e link social
- `lang="it"` sull'html
- Email offuscata via JS client-side (anti-scraping bot)

## Comandi
```bash
npm run dev          # Dev server (localhost:3000)
npx next build       # Build produzione
npx vercel           # Deploy preview
npx vercel --prod    # Deploy produzione
```

## Note Importanti
- Il WhatsApp button e SOLO sulla pagina Formazione (scelta del cliente)
- Le immagini sedi sono in formato WebP (convertite da JPG)
- L'email di contatto (`massimo.brizi@tiscali.it`) e offuscata nel componente `ContactEmail.tsx`
- Il Vercel project ID e in `.vercel/project.json`
- Non esiste un remote git configurato, il deploy e via Vercel CLI
