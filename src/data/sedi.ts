// Fonte unica delle sedi IKTA GYM.
// Usata da: home (schede + JSON-LD), pagina /palestre.

export type Sede = {
  name: string;
  city: string;
  /** indirizzo per la visualizzazione nelle schede */
  address: string;
  /** telefono formattato per la visualizzazione */
  phone: string;
  /** telefono senza spazi per tel:/JSON-LD */
  phoneRaw: string;
  mapsUrl: string;
  logo: string;
  gallery: string[];
  /** campi per lo structured data SportsActivityLocation */
  streetAddress: string;
  postalCode: string;
  region: string;
  sports: string[];
  /** pagina di dettaglio della sede (se esiste) */
  url?: string;
};

export const sedi: Sede[] = [
  {
    name: 'IKTA GYM Santa Marinella',
    city: 'Santa Marinella',
    address: 'Via 4 Novembre n 25, Santa Marinella',
    phone: '+39 348 5913895',
    phoneRaw: '+393485913895',
    mapsUrl: 'https://maps.google.com/?q=Via+4+Novembre+25+Santa+Marinella',
    logo: '/sedi/santamarinella/iktasantalogo.webp',
    gallery: [
      '/sedi/santamarinella/iktafotosanta1.webp',
      '/sedi/santamarinella/iktafotosanta2.webp',
      '/sedi/santamarinella/iktafotosanta3.webp',
      '/sedi/santamarinella/iktafotosanta4.webp',
      '/sedi/santamarinella/iktafotosanta5.webp',
    ],
    streetAddress: 'Via 4 Novembre 25',
    postalCode: '00058',
    region: 'RM',
    sports: ['Kick Boxing', 'Muay Thai', 'MMA', 'Krav Maga'],
  },
  {
    name: 'IKTA GYM Civitavecchia',
    city: 'Civitavecchia',
    address: 'Via Ticino n 15, Civitavecchia',
    phone: '+39 338 4012397',
    phoneRaw: '+393384012397',
    mapsUrl: 'https://maps.google.com/?q=Via+Ticino+15+Civitavecchia',
    logo: '/sedi/civitavecchia/iktacvlogo.webp',
    gallery: [
      '/sedi/civitavecchia/iktacv1.webp',
      '/sedi/civitavecchia/iktacv2.webp',
      '/sedi/civitavecchia/iktacv4.webp',
      '/sedi/civitavecchia/iktacv5.webp',
      '/sedi/civitavecchia/iktacv6.webp',
      '/sedi/civitavecchia/iktacv7.webp',
      '/sedi/civitavecchia/iktacv8.webp',
      '/sedi/civitavecchia/iktacv9.webp',
      '/sedi/civitavecchia/iktacv10.webp',
      '/sedi/civitavecchia/iktacv11.webp',
    ],
    streetAddress: 'Via Ticino 15',
    postalCode: '00053',
    region: 'RM',
    sports: ['Kick Boxing', 'K-1', 'Muay Thai', 'MMA', 'Krav Maga'],
    url: '/palestre/civitavecchia',
  },
  {
    name: 'IKTA GYM Tolfa',
    city: 'Tolfa',
    address: 'Via G. Amendola 1A, Tolfa',
    phone: '+39 338 4012397',
    phoneRaw: '+393384012397',
    mapsUrl: 'https://maps.google.com/?q=Via+Amendola+1A+Tolfa',
    logo: '/sedi/tolfa/iktatolfalogo.webp',
    gallery: [
      '/sedi/tolfa/iktatolfa.webp',
      '/sedi/tolfa/iktatolfa1.webp',
      '/sedi/tolfa/iktatolfa2.webp',
      '/sedi/tolfa/iktatolfa4.webp',
      '/sedi/tolfa/iktatolfa5.webp',
    ],
    streetAddress: 'Via G. Amendola 1A',
    postalCode: '00059',
    region: 'RM',
    sports: ['Kick Boxing', 'Muay Thai', 'MMA', 'Krav Maga'],
  },
];

const SITE_URL = 'https://iktaworld.com';

/** Structured data SportsActivityLocation/ExerciseGym generato dalle sedi. */
export function sediJsonLd() {
  return sedi.map((s) => ({
    '@context': 'https://schema.org',
    '@type': ['SportsActivityLocation', 'ExerciseGym'],
    name: s.name,
    parentOrganization: { '@type': 'SportsOrganization', name: 'IKTA Italia', url: SITE_URL },
    address: {
      '@type': 'PostalAddress',
      streetAddress: s.streetAddress,
      addressLocality: s.city,
      postalCode: s.postalCode,
      addressRegion: s.region,
      addressCountry: 'IT',
    },
    telephone: s.phoneRaw,
    sport: s.sports,
    image: SITE_URL + s.gallery[0],
    hasMap: s.mapsUrl,
    ...(s.url ? { url: SITE_URL + s.url } : {}),
  }));
}
