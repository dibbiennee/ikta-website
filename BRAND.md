# IKTA — Brand & Design System

Fonte unica di verità per **sito** (iktaworld.com) e **social** (@iktaitalia).
Chi lavora al progetto in qualsiasi sessione/chat deve seguire questo file.
I token del sito sono già definiti in [`src/app/globals.css`](src/app/globals.css) (`:root`) e nel layout.

---

## 1. Colori

### Brand
| Nome | Hex | Uso |
|------|-----|-----|
| **Oro / Yellow** | `#eab308` | Colore primario CTA, accenti, anelli, dettagli oro |
| Oro scuro | `#ca8a04` | Hover/ombra oro |
| Oro chiaro | `#fbbf24` / `#f6d152` | Highlight, icone linea (grafiche) |
| **Blu IKTA** | `#1e40af` | Colore secondario/brand, eyebrow, link, card |
| Blu scuro | `#1e3a8a` | Hover blu |
| Blu chiaro | `#3b82f6` | Accento |
| Rosso | `#c8102e` | Solo dettaglio bandiera/urgenza (usare pochissimo) |

### Neutri (scala grigi)
`--ikta-gray-50 #fafafa` · `100 #f5f5f5` · `200 #e5e5e5` · `300 #d4d4d4` · `400 #a3a3a3` · `500 #737373` · `600 #525252` · `700 #404040` · `800 #262626` · `900 #171717` · black `#0a0a0a` · white `#ffffff`

### Ruoli semantici (sito, tema chiaro)
- background `#ffffff` · foreground `#171717` (gray-900) · testo secondario `#404040`/`#737373`
- border `#e5e5e5` · accent/ring `#eab308`

### Blu notte (mondo "dark", usato nelle grafiche social e sezioni scure)
- Fondo notte: `#0a1230`
- Gradiente radiale: da `#1c2e78` (centro) → `#0a1230` (bordo)
- Testo su notte: bianco `#f3f6ff` · muted bluastro `#a6b6df`

---

## 2. Tipografia
- **Geist** (sans) → tutto il testo. Variabile `--font-geist-sans`. Import: `next/font/google` → `Geist`.
- **Geist Mono** → dati/monospace. Variabile `--font-geist-mono`.
- Display stack: `var(--font-geist-sans), system-ui, -apple-system, sans-serif`.
- **Titoli/label**: spesso MAIUSCOLO con letter-spacing (eyebrow, tag). Pesi: 800 titoli, 600 label, 450 corpo.
- Ogni pagina ha **un solo `<h1>`**.

---

## 3. Misure
- Radii: sm `.375rem` · md `.5rem` · lg `.75rem` · xl `1rem` · 2xl `1.5rem`
- Ombre: sm/md/lg/xl (vedi `globals.css`)
- Spaziatura sezioni (py): mobile `4rem` · tablet `5rem` · desktop `7rem`

---

## 4. Componenti (classi già in `globals.css`)
- `.btn` + varianti: `.btn-primary` (oro), `.btn-secondary` (blu), `.btn-outline`, `.btn-ghost`, `.btn-dark`
- `.eyebrow` → piccola label maiuscola blu sopra i titoli
- `.section` / `.section-tight` / `.section-dark` → wrapper sezioni (spaziatura + tipografia)
- `.card` → card contenuti
- `.ikta-gradient` → barra brand (top bar header/footer)
- Card sedi/palestre: colore uniforme `#1e40af`

---

## 5. Logo
- File: [`public/logo-ikta.png`](public/logo-ikta.png) (globo IKTA, testo scuro "I.K.T.A.").
- Su **sfondo chiaro**: usare così com'è.
- Su **sfondo scuro/foto**: il testo scuro sparisce → mettere il logo su un **dischetto bianco `#f7f8fa` con anello oro `#eab308`** (pattern "seal"). Vale per storie, locandine, cornice post.

---

## 6. Social / grafiche (@iktaitalia)
Stesso brand, mondo **blu notte + oro**. Asset in `../social-instagram/` (repo assets, cartella hub).
- **Copertine highlight** (1080×1080): icona Lucide oro su cerchio blu notte + anello oro. Cinture = icona `black-belt` (game-icons).
- **Storie cover** (1080×1920): logo (badge bianco) + wordmark "IKTA ITALIA" + cerchio-icona + titolo (Geist 800) + sottotitolo + `iktaworld.com`.
- **Locandine** (1080×1350): foto in alto sfumata nel blu notte, tag oro "TITOLI IN PALIO", logo badge, titolo, discipline oro, data/luogo, info.
- **Cornice post** (overlay trasparente 1080×1350): righetta sottile ai bordi — bianco + blu `#1e40af` + oro `#eab308` — con logo badge piccolo in basso.
- **Font grafiche**: Geist (stesso del sito).

---

## 7. Riferimenti
- Repo sito: `github.com/dibbiennee/ikta-website` · Live: `https://iktaworld.com`
- Instagram: `@iktaitalia`
- Regole di prodotto/struttura: vedi [`CLAUDE.md`](CLAUDE.md)

> **Regola d'oro:** se cambi un colore/font qui, aggiorna anche `globals.css` (e viceversa). Questo file e `globals.css` devono restare allineati.
