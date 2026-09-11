// Ranking IKTA World - dati (estratti da ikta-world/ranking/page.tsx)

export type WeightClass = {
  kg: string;
  champion?: string;
  country?: string;
};

export type Category = {
  title: string;
  men: WeightClass[];
  women: WeightClass[];
};

export const kickBoxingRanking: Category[] = [
  {
    title: 'World Champion',
    men: [
      { kg: '57' },
      { kg: '61', champion: 'Sirbu Ionut', country: 'Romania' },
      { kg: '64', champion: 'Amilcar Da Fonseca', country: 'Brasil' },
      { kg: '67', champion: 'George Lima', country: 'England' },
      { kg: '70', champion: 'Martin Gil', country: 'Argentina' },
      { kg: '73', champion: 'Fernando Chametla', country: 'Mexico' },
      { kg: '76' },
      { kg: '80' },
      { kg: '85' },
      { kg: '90', champion: 'Umberto Lucci', country: 'Italy' },
      { kg: '+90' },
    ],
    women: [
      { kg: '50' },
      { kg: '55' },
      { kg: '60', champion: 'Jorgelina Bascur', country: 'Argentina' },
      { kg: '65' },
    ],
  },
  {
    title: 'Intercontinental Champion',
    men: [
      { kg: '57' },
      { kg: '61', champion: 'Salomao Blade', country: 'Brasil' },
      { kg: '64', champion: 'Almicar De Fonseca', country: 'Brasil' },
      { kg: '67' },
      { kg: '70', champion: "Giorgi' Flower", country: 'France' },
      { kg: '73' },
      { kg: '76' },
      { kg: '80' },
      { kg: '85' },
      { kg: '90' },
      { kg: '+90' },
    ],
    women: [
      { kg: '50' },
      { kg: '55' },
      { kg: '60' },
      { kg: '65' },
    ],
  },
  {
    title: 'Pan-American Champion',
    men: [
      { kg: '57' },
      { kg: '61' },
      { kg: '64' },
      { kg: '67' },
      { kg: '70' },
      { kg: '73' },
      { kg: '76' },
      { kg: '80' },
      { kg: '85' },
      { kg: '90' },
      { kg: '+90' },
    ],
    women: [
      { kg: '50' },
      { kg: '55' },
      { kg: '60', champion: 'Noemi Hernandez', country: 'Mexico' },
      { kg: '65' },
    ],
  },
  {
    title: 'Oceanian Champion',
    men: [
      { kg: '57' },
      { kg: '61' },
      { kg: '64' },
      { kg: '67' },
      { kg: '70' },
      { kg: '73' },
      { kg: '76' },
      { kg: '80' },
      { kg: '85' },
      { kg: '90' },
      { kg: '+90' },
    ],
    women: [
      { kg: '50' },
      { kg: '55' },
      { kg: '60' },
      { kg: '65' },
    ],
  },
  {
    title: 'African Champion',
    men: [
      { kg: '57' },
      { kg: '61' },
      { kg: '64' },
      { kg: '67' },
      { kg: '70' },
      { kg: '73' },
      { kg: '76' },
      { kg: '80' },
      { kg: '85' },
      { kg: '90' },
      { kg: '+90' },
    ],
    women: [
      { kg: '50' },
      { kg: '55' },
      { kg: '60' },
      { kg: '65' },
    ],
  },
  {
    title: 'Asian Champion',
    men: [
      { kg: '57' },
      { kg: '61' },
      { kg: '64' },
      { kg: '67' },
      { kg: '70' },
      { kg: '73' },
      { kg: '76' },
      { kg: '80' },
      { kg: '85' },
      { kg: '90' },
      { kg: '+90' },
    ],
    women: [
      { kg: '50' },
      { kg: '55' },
      { kg: '60' },
      { kg: '65' },
    ],
  },
  {
    title: 'European Champion',
    men: [
      { kg: '57' },
      { kg: '61' },
      { kg: '64' },
      { kg: '67', champion: 'Zolusis Alex', country: 'Greece' },
      { kg: '70', champion: 'Nistor Ionut', country: 'Romania' },
      { kg: '73', champion: 'Serban Marian', country: 'Romania' },
      { kg: '76', champion: 'Sokol Jakini', country: 'Albania' },
      { kg: '80', champion: 'Roznovan Andrea', country: 'Romania' },
      { kg: '85', champion: 'John Bistrit', country: 'France' },
      { kg: '90' },
      { kg: '+90', champion: 'Massimo Venturini', country: 'Italy' },
    ],
    women: [
      { kg: '50' },
      { kg: '55' },
      { kg: '60' },
      { kg: '65' },
    ],
  },
];

export const muayThaiRanking: Category[] = [
  {
    title: 'World Champion',
    men: [
      { kg: '57' },
      { kg: '61' },
      { kg: '64' },
      { kg: '67' },
      { kg: '70' },
      { kg: '73' },
      { kg: '76' },
      { kg: '80' },
      { kg: '85' },
      { kg: '90' },
      { kg: '+90' },
    ],
    women: [
      { kg: '50' },
      { kg: '55' },
      { kg: '60' },
      { kg: '65' },
    ],
  },
  {
    title: 'Intercontinental Champion',
    men: [
      { kg: '57' },
      { kg: '61' },
      { kg: '64' },
      { kg: '67' },
      { kg: '70' },
      { kg: '73' },
      { kg: '76' },
      { kg: '80' },
      { kg: '85' },
      { kg: '90' },
      { kg: '+90' },
    ],
    women: [
      { kg: '50' },
      { kg: '55' },
      { kg: '60' },
      { kg: '65' },
    ],
  },
  {
    title: 'Pan-American Champion',
    men: [
      { kg: '57', champion: 'Mateus Oliveira', country: 'Brasil' },
      { kg: '61' },
      { kg: '64' },
      { kg: '67' },
      { kg: '70' },
      { kg: '73' },
      { kg: '76' },
      { kg: '80' },
      { kg: '85' },
      { kg: '90' },
      { kg: '+90' },
    ],
    women: [
      { kg: '50' },
      { kg: '55' },
      { kg: '60' },
      { kg: '65' },
    ],
  },
  {
    title: 'Asian Champion',
    men: [
      { kg: '57' },
      { kg: '61' },
      { kg: '64' },
      { kg: '67' },
      { kg: '70' },
      { kg: '73' },
      { kg: '76' },
      { kg: '80' },
      { kg: '85' },
      { kg: '90' },
      { kg: '+90' },
    ],
    women: [
      { kg: '50' },
      { kg: '55' },
      { kg: '60' },
      { kg: '65' },
    ],
  },
  {
    title: 'European Champion',
    men: [
      { kg: '57' },
      { kg: '61' },
      { kg: '64' },
      { kg: '67' },
      { kg: '70', champion: 'Ionut Andrei Macesanu', country: 'Romania' },
      { kg: '73' },
      { kg: '76' },
      { kg: '80' },
      { kg: '85' },
      { kg: '90' },
      { kg: '+90' },
    ],
    women: [
      { kg: '50' },
      { kg: '55' },
      { kg: '60' },
      { kg: '65' },
    ],
  },
];

export const k1StyleRanking: Category[] = [
  {
    title: 'World Champion',
    men: [
      { kg: '57', champion: 'Hector Gonzalez', country: 'Mexico' },
      { kg: '61', champion: 'Dimitri Monini', country: 'Italy' },
      { kg: '64', champion: 'Alessandro Riguccini', country: 'Italy' },
      { kg: '67', champion: 'Hakim Ait Hma', country: 'Marocco' },
      { kg: '70' },
      { kg: '73', champion: 'William Araujo', country: 'Brasil' },
      { kg: '76' },
      { kg: '80' },
      { kg: '85' },
      { kg: '90' },
      { kg: '+90' },
    ],
    women: [
      { kg: '50' },
      { kg: '55' },
      { kg: '60' },
      { kg: '65' },
    ],
  },
  {
    title: 'Intercontinental Champion',
    men: [
      { kg: '57' },
      { kg: '61' },
      { kg: '64', champion: 'Almicar De Fonseca', country: 'Brazil' },
      { kg: '67', champion: 'Ahmed Said', country: 'Marocco' },
      { kg: '70', champion: 'Laecio Nunes', country: 'Brazil' },
      { kg: '73', champion: 'Zerella Cristian', country: 'Italy' },
      { kg: '76', champion: 'Javier Romero Zapata', country: 'Mexico' },
      { kg: '80', champion: "Mimmo D'Elia", country: 'Italy' },
      { kg: '85' },
      { kg: '90', champion: 'Alessio Polici', country: 'Italy' },
      { kg: '+90', champion: 'Paterni Giacomo', country: 'Italy' },
    ],
    women: [
      { kg: '50' },
      { kg: '55' },
      { kg: '60' },
      { kg: '65' },
    ],
  },
  {
    title: 'Pan-American Champion',
    men: [
      { kg: '57', champion: 'Renato Lima', country: 'Brasil' },
      { kg: '61' },
      { kg: '64' },
      { kg: '67' },
      { kg: '70', champion: 'Jonas Coelho', country: 'Brasil' },
      { kg: '73' },
      { kg: '76' },
      { kg: '80' },
      { kg: '85' },
      { kg: '90' },
      { kg: '+90' },
    ],
    women: [
      { kg: '50', champion: 'Fabiana Dos Santos', country: 'Brasil' },
      { kg: '55' },
      { kg: '60' },
      { kg: '65' },
    ],
  },
  {
    title: 'Asian Champion',
    men: [
      { kg: '57' },
      { kg: '61' },
      { kg: '64' },
      { kg: '67' },
      { kg: '70' },
      { kg: '73' },
      { kg: '76' },
      { kg: '80' },
      { kg: '85' },
      { kg: '90' },
      { kg: '+90' },
    ],
    women: [
      { kg: '50' },
      { kg: '55' },
      { kg: '60' },
      { kg: '65' },
    ],
  },
  {
    title: 'African Champion',
    men: [
      { kg: '57' },
      { kg: '61' },
      { kg: '64' },
      { kg: '67' },
      { kg: '70' },
      { kg: '73' },
      { kg: '76' },
      { kg: '80' },
      { kg: '85' },
      { kg: '90' },
      { kg: '+90' },
    ],
    women: [
      { kg: '50' },
      { kg: '55' },
      { kg: '60' },
      { kg: '65' },
    ],
  },
  {
    title: 'European Champion',
    men: [
      { kg: '57', champion: 'Sportelli Gianpiero', country: 'Italy' },
      { kg: '61' },
      { kg: '64' },
      { kg: '67' },
      { kg: '70', champion: 'Cristian Zerella', country: 'Italy' },
      { kg: '73', champion: 'El Orafy Vincenzo', country: 'Italy' },
      { kg: '76' },
      { kg: '80' },
      { kg: '85' },
      { kg: '90' },
      { kg: '+90' },
    ],
    women: [
      { kg: '50' },
      { kg: '55', champion: 'Sara Falchetti', country: 'Italy' },
      { kg: '60' },
      { kg: '65' },
    ],
  },
  {
    title: 'Mediterranean Champion',
    men: [
      { kg: '57' },
      { kg: '61' },
      { kg: '64' },
      { kg: '67', champion: 'Mitat Isteri', country: 'Albania' },
      { kg: '70', champion: 'Lorenzo Selvaggio', country: 'Italy' },
      { kg: '73' },
      { kg: '76' },
      { kg: '80' },
      { kg: '85' },
      { kg: '90' },
      { kg: '+90' },
    ],
    women: [
      { kg: '50' },
      { kg: '55' },
      { kg: '60' },
      { kg: '65' },
    ],
  },
];

export const fullContactRanking: Category[] = [
  {
    title: 'World Champion',
    men: [
      { kg: '57', champion: 'Antony Lorder', country: 'France' },
      { kg: '61' },
      { kg: '64', champion: 'Ruben Romano Rodrig', country: 'Mexico' },
      { kg: '67' },
      { kg: '70', champion: 'Akahito Jotaro', country: 'Japan' },
      { kg: '73', champion: 'Laecio Nunes Oliviera', country: 'Brasil' },
      { kg: '76', champion: 'Marco Ghibaudo', country: 'Mexico' },
      { kg: '80', champion: 'Elton Barry', country: 'England' },
      { kg: '85', champion: 'Dilan Frosby', country: 'Canada' },
      { kg: '90' },
      { kg: '+90' },
    ],
    women: [
      { kg: '50' },
      { kg: '55' },
      { kg: '60', champion: 'Andrea Horoba', country: 'Romania' },
      { kg: '65' },
    ],
  },
  {
    title: 'Intercontinental Champion',
    men: [
      { kg: '57' },
      { kg: '61' },
      { kg: '64' },
      { kg: '67' },
      { kg: '70' },
      { kg: '73', champion: 'Alessio Crescentini', country: 'Italy' },
      { kg: '76' },
      { kg: '80' },
      { kg: '85' },
      { kg: '90' },
      { kg: '+90' },
    ],
    women: [
      { kg: '50' },
      { kg: '55' },
      { kg: '60' },
      { kg: '65' },
    ],
  },
  {
    title: 'Pan-American Champion',
    men: [
      { kg: '57' },
      { kg: '61' },
      { kg: '64' },
      { kg: '67' },
      { kg: '70' },
      { kg: '73', champion: 'Thiago Luk', country: 'Brasil' },
      { kg: '76' },
      { kg: '80' },
      { kg: '85' },
      { kg: '90' },
      { kg: '+90' },
    ],
    women: [
      { kg: '50' },
      { kg: '55' },
      { kg: '60' },
      { kg: '65' },
    ],
  },
  {
    title: 'Asian Champion',
    men: [
      { kg: '57' },
      { kg: '61' },
      { kg: '64' },
      { kg: '67' },
      { kg: '70' },
      { kg: '73' },
      { kg: '76' },
      { kg: '80' },
      { kg: '85' },
      { kg: '90' },
      { kg: '+90' },
    ],
    women: [
      { kg: '50' },
      { kg: '55' },
      { kg: '60' },
      { kg: '65' },
    ],
  },
  {
    title: 'African Champion',
    men: [
      { kg: '57' },
      { kg: '61' },
      { kg: '64' },
      { kg: '67' },
      { kg: '70' },
      { kg: '73' },
      { kg: '76' },
      { kg: '80' },
      { kg: '85' },
      { kg: '90' },
      { kg: '+90' },
    ],
    women: [
      { kg: '50' },
      { kg: '55' },
      { kg: '60' },
      { kg: '65' },
    ],
  },
  {
    title: 'European Champion',
    men: [
      { kg: '57' },
      { kg: '61' },
      { kg: '64' },
      { kg: '67' },
      { kg: '70' },
      { kg: '73', champion: 'Alessio Crescentini', country: 'Italy' },
      { kg: '76', champion: 'James Turner', country: 'England' },
      { kg: '80', champion: 'Luca Andreoli', country: 'Italy' },
      { kg: '85' },
      { kg: '90' },
      { kg: '+90' },
    ],
    women: [
      { kg: '50' },
      { kg: '55' },
      { kg: '60' },
      { kg: '65' },
    ],
  },
  {
    title: 'Mediterranean Champion',
    men: [
      { kg: '57' },
      { kg: '61' },
      { kg: '64' },
      { kg: '67' },
      { kg: '70' },
      { kg: '73' },
      { kg: '76', champion: 'Alessio Crescentini', country: 'Italy' },
      { kg: '80' },
      { kg: '85' },
      { kg: '90' },
      { kg: '+90' },
    ],
    women: [
      { kg: '50' },
      { kg: '55' },
      { kg: '60' },
      { kg: '65' },
    ],
  },
];

export const kickBoxingLightRanking: Category[] = [
  {
    title: 'World Champion',
    men: [
      { kg: '57' }, { kg: '61' }, { kg: '64' }, { kg: '67' }, { kg: '70' },
      { kg: '73' }, { kg: '76' }, { kg: '80' }, { kg: '85' }, { kg: '90' }, { kg: '+90' },
    ],
    women: [
      { kg: '50' }, { kg: '55' }, { kg: '60' }, { kg: '65' },
    ],
  },
  {
    title: 'Intercontinental Champion',
    men: [
      { kg: '57' }, { kg: '61' }, { kg: '64' }, { kg: '67' },
      { kg: '70', champion: 'Valerio Vannucci', country: 'Italy' },
      { kg: '73' }, { kg: '76' },
      { kg: '80', champion: 'Russ Riccardo' },
      { kg: '85' }, { kg: '90' }, { kg: '+90' },
    ],
    women: [
      { kg: '50' },
      { kg: '55', champion: 'Fabiana De Angelis' },
      { kg: '60' }, { kg: '65' },
    ],
  },
  {
    title: 'European Champion',
    men: [
      { kg: '57' }, { kg: '61' }, { kg: '64' }, { kg: '67' }, { kg: '70' },
      { kg: '73' }, { kg: '76' }, { kg: '80' },
      { kg: '85', champion: 'Kudret Daniel', country: 'Albania' },
      { kg: '90' }, { kg: '+90' },
    ],
    women: [
      { kg: '50' }, { kg: '55' }, { kg: '60' }, { kg: '65' },
    ],
  },
  {
    title: 'Mediterranean Champion',
    men: [
      { kg: '57' }, { kg: '61' }, { kg: '64' }, { kg: '67' }, { kg: '70' },
      { kg: '73' }, { kg: '76' },
      { kg: '80', champion: 'Guido Capuano' },
      { kg: '85' },
      { kg: '90', champion: 'Mammadov Orkan' },
      { kg: '+90', champion: "Antonio D'Alessio" },
    ],
    women: [
      { kg: '50' }, { kg: '55' }, { kg: '60' }, { kg: '65' },
    ],
  },
];

export const freeBoxingRanking: Category[] = [
  {
    title: 'World Champion',
    men: [
      { kg: '57', champion: 'Antony Lorder', country: 'France' },
      { kg: '61' }, { kg: '64' }, { kg: '67' }, { kg: '70' }, { kg: '73' },
      { kg: '76' }, { kg: '80' }, { kg: '85' }, { kg: '90' }, { kg: '+90' },
    ],
    women: [
      { kg: '50' }, { kg: '55' },
      { kg: '60', champion: 'Andrea Horoba', country: 'Romania' },
      { kg: '65' },
    ],
  },
  {
    title: 'Intercontinental Champion',
    men: [
      { kg: '57' }, { kg: '61' }, { kg: '64' }, { kg: '67' }, { kg: '70' },
      { kg: '73' }, { kg: '76' }, { kg: '80' }, { kg: '85' }, { kg: '90' }, { kg: '+90' },
    ],
    women: [
      { kg: '50' }, { kg: '55' }, { kg: '60' }, { kg: '65' },
    ],
  },
  {
    title: 'Pan-American Champion',
    men: [
      { kg: '57' }, { kg: '61' }, { kg: '64' }, { kg: '67' }, { kg: '70' },
      { kg: '73' }, { kg: '76' }, { kg: '80' }, { kg: '85' }, { kg: '90' }, { kg: '+90' },
    ],
    women: [
      { kg: '50' }, { kg: '55' }, { kg: '60' }, { kg: '65' },
    ],
  },
  {
    title: 'Asian Champion',
    men: [
      { kg: '57' }, { kg: '61' }, { kg: '64' }, { kg: '67' }, { kg: '70' },
      { kg: '73' }, { kg: '76' }, { kg: '80' }, { kg: '85' }, { kg: '90' }, { kg: '+90' },
    ],
    women: [
      { kg: '50' }, { kg: '55' }, { kg: '60' }, { kg: '65' },
    ],
  },
  {
    title: 'African Champion',
    men: [
      { kg: '57' }, { kg: '61' }, { kg: '64' }, { kg: '67' }, { kg: '70' },
      { kg: '73' }, { kg: '76' }, { kg: '80' }, { kg: '85' }, { kg: '90' }, { kg: '+90' },
    ],
    women: [
      { kg: '50' }, { kg: '55' }, { kg: '60' }, { kg: '65' },
    ],
  },
  {
    title: 'European Champion',
    men: [
      { kg: '57' }, { kg: '61' }, { kg: '64' }, { kg: '67' }, { kg: '70' },
      { kg: '73', champion: 'Luigi Pia', country: 'Italy' },
      { kg: '76', champion: 'Roberto Petretti', country: 'Italy' },
      { kg: '80' }, { kg: '85' }, { kg: '90' }, { kg: '+90' },
    ],
    women: [
      { kg: '50' }, { kg: '55' }, { kg: '60' }, { kg: '65' },
    ],
  },
  {
    title: 'Mediterranean Champion',
    men: [
      { kg: '57' }, { kg: '61' }, { kg: '64' }, { kg: '67' }, { kg: '70' },
      { kg: '73' },
      { kg: '76', champion: 'Mirko Maglio', country: 'Italy' },
      { kg: '80' }, { kg: '85' }, { kg: '90' }, { kg: '+90' },
    ],
    women: [
      { kg: '50' }, { kg: '55' }, { kg: '60' }, { kg: '65' },
    ],
  },
];

export const mmaRanking: Category[] = [
  {
    title: 'World Champion',
    men: [
      { kg: '57', champion: 'Ralph Termick', country: 'England' },
      { kg: '61' },
      { kg: '64', champion: 'Alex Forghery', country: 'France' },
      { kg: '67' },
      { kg: '70', champion: 'Filosha Paul', country: 'Chile' },
      { kg: '73' }, { kg: '76' }, { kg: '80' }, { kg: '85' }, { kg: '90' },
      { kg: '+90', champion: 'George Friding', country: 'Alaska' },
    ],
    women: [
      { kg: '50' }, { kg: '55' }, { kg: '60' }, { kg: '65' },
    ],
  },
  {
    title: 'Intercontinental Champion',
    men: [
      { kg: '57' }, { kg: '61' }, { kg: '64' },
      { kg: '67', champion: 'Ionut Fideriu', country: 'Romania' },
      { kg: '70', champion: 'Andrea Vega', country: 'Spain' },
      { kg: '73' }, { kg: '76' }, { kg: '80' }, { kg: '85' }, { kg: '90' },
      { kg: '+90', champion: 'Max Boxer', country: 'France' },
    ],
    women: [
      { kg: '50' }, { kg: '55' }, { kg: '60' }, { kg: '65' },
    ],
  },
  {
    title: 'Pan-American Champion',
    men: [
      { kg: '57' }, { kg: '61' }, { kg: '64' }, { kg: '67' }, { kg: '70' },
      { kg: '73' }, { kg: '76' },
      { kg: '80', champion: 'Jonas Coelho', country: 'Brasil' },
      { kg: '85' }, { kg: '90' }, { kg: '+90' },
    ],
    women: [
      { kg: '50' }, { kg: '55' }, { kg: '60' }, { kg: '65' },
    ],
  },
  {
    title: 'Asian Champion',
    men: [
      { kg: '57' }, { kg: '61' }, { kg: '64' }, { kg: '67' }, { kg: '70' },
      { kg: '73' }, { kg: '76' }, { kg: '80' }, { kg: '85' }, { kg: '90' }, { kg: '+90' },
    ],
    women: [
      { kg: '50' }, { kg: '55' }, { kg: '60' }, { kg: '65' },
    ],
  },
  {
    title: 'African Champion',
    men: [
      { kg: '57' }, { kg: '61' }, { kg: '64' }, { kg: '67' }, { kg: '70' },
      { kg: '73' }, { kg: '76' }, { kg: '80' }, { kg: '85' }, { kg: '90' }, { kg: '+90' },
    ],
    women: [
      { kg: '50' }, { kg: '55' }, { kg: '60' }, { kg: '65' },
    ],
  },
  {
    title: 'Oceanian Champion',
    men: [
      { kg: '57' }, { kg: '61' }, { kg: '64' }, { kg: '67' }, { kg: '70' },
      { kg: '73' }, { kg: '76' }, { kg: '80' }, { kg: '85' }, { kg: '90' }, { kg: '+90' },
    ],
    women: [
      { kg: '50' }, { kg: '55' }, { kg: '60' }, { kg: '65' },
    ],
  },
  {
    title: 'European Champion',
    men: [
      { kg: '57' }, { kg: '61' }, { kg: '64' }, { kg: '67' }, { kg: '70' },
      { kg: '73' }, { kg: '76' }, { kg: '80' }, { kg: '85' },
      { kg: '90', champion: 'Dimitri Nomikos', country: 'Greece' },
      { kg: '+90' },
    ],
    women: [
      { kg: '50' }, { kg: '55' }, { kg: '60' }, { kg: '65' },
    ],
  },
  {
    title: 'Mediterranean Champion',
    men: [
      { kg: '57' }, { kg: '61' }, { kg: '64' }, { kg: '67' }, { kg: '70' },
      { kg: '73' }, { kg: '76' }, { kg: '80' }, { kg: '85' },
      { kg: '90', champion: 'Fabio Russo', country: 'Italy' },
      { kg: '+90', champion: 'Alex Stuart', country: 'Spain' },
    ],
    women: [
      { kg: '50' }, { kg: '55' }, { kg: '60' }, { kg: '65' },
    ],
  },
];
