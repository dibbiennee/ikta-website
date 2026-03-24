'use client';

type WeightClass = {
  kg: string;
  champion?: string;
  country?: string;
};

type Category = {
  title: string;
  men: WeightClass[];
  women: WeightClass[];
};

const kickBoxingRanking: Category[] = [
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

const muayThaiRanking: Category[] = [
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

const k1StyleRanking: Category[] = [
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

const fullContactRanking: Category[] = [
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

const kickBoxingLightRanking: Category[] = [
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

const freeBoxingRanking: Category[] = [
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

const mmaRanking: Category[] = [
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

function RankingTable({ weights, gender }: { weights: WeightClass[]; gender: string }) {
  return (
    <div style={{ marginBottom: '24px' }}>
      <h5 style={{
        fontSize: '13px',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '1.5px',
        color: gender === 'Men' ? '#1e40af' : '#be185d',
        marginBottom: '12px',
      }}>
        {gender}
      </h5>
      <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #e5e7eb' }}>
        {weights.map((w, i) => (
          <div key={w.kg} style={{
            display: 'flex',
            alignItems: 'center',
            padding: '12px 20px',
            backgroundColor: i % 2 === 0 ? '#fff' : '#f9fafb',
            borderBottom: i < weights.length - 1 ? '1px solid #f3f4f6' : 'none',
          }}>
            <span style={{
              fontSize: '13px',
              fontWeight: 700,
              color: '#374151',
              minWidth: '70px',
            }}>
              KG {w.kg}
            </span>
            {w.champion ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1 }}>
                <span style={{ fontSize: '14px', fontWeight: 600, color: '#111827' }}>{w.champion}</span>
                <span style={{ fontSize: '12px', color: '#6b7280', fontWeight: 500 }}>{w.country}</span>
              </div>
            ) : (
              <span style={{ fontSize: '13px', color: '#d1d5db' }}>—</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function RankingWorldPage() {
  return (
    <section style={{ marginTop: '100px', paddingBottom: '80px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>

        {/* Titolo */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span style={{ fontSize: '13px', fontWeight: 600, color: '#1e40af', textTransform: 'uppercase', letterSpacing: '2px' }}>
            IKTA World
          </span>
          <h1 style={{ fontSize: '40px', fontWeight: 700, marginTop: '8px' }}>Ranking</h1>
        </div>

        {/* Navigation Discipline - Dropdown */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '60px',
          position: 'sticky',
          top: '80px',
          zIndex: 40,
          backgroundColor: 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(8px)',
          padding: '12px 0',
        }}>
          <select
            onChange={(e) => {
              const el = document.getElementById(e.target.value);
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            defaultValue=""
            style={{
              padding: '12px 40px 12px 20px',
              borderRadius: '12px',
              border: '2px solid #1e40af',
              fontSize: '15px',
              fontWeight: 600,
              color: '#1e40af',
              backgroundColor: 'white',
              cursor: 'pointer',
              appearance: 'none',
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%231e40af' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 14px center',
              minWidth: '260px',
            }}
          >
            <option value="" disabled>Vai alla disciplina...</option>
            <option value="kick-boxing">Kick Boxing</option>
            <option value="muay-thai">Muay Thai</option>
            <option value="k1-style">K1 Style</option>
            <option value="full-contact">Full Contact</option>
            <option value="kick-boxing-light">Kick Boxing Light</option>
            <option value="free-boxing">Free Boxing</option>
            <option value="mma">MMA</option>
          </select>
        </div>

        {/* Disciplina: Kick Boxing */}
        <div id="kick-boxing" style={{ scrollMarginTop: '160px' }} />
        <div style={{
          background: 'linear-gradient(135deg, #1e3a8a, #1e40af)',
          color: 'white',
          borderRadius: '20px',
          padding: '28px 30px',
          textAlign: 'center',
          marginBottom: '50px',
          boxShadow: '0 10px 30px rgba(30, 64, 175, 0.3)',
        }}>
          <span style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '3px', opacity: 0.7 }}>
            Discipline
          </span>
          <h3 style={{ fontSize: '28px', fontWeight: 700, marginTop: '6px' }}>Kick Boxing</h3>
        </div>

        {/* Categorie */}
        {kickBoxingRanking.map((category, idx) => (
          <div key={category.title} style={{ marginBottom: idx < kickBoxingRanking.length - 1 ? '60px' : '0' }}>
            <h4 style={{
              fontSize: '22px',
              fontWeight: 700,
              color: '#1e40af',
              marginBottom: '20px',
              paddingBottom: '12px',
              borderBottom: '2px solid #1e40af',
            }}>
              {category.title}
            </h4>

            <RankingTable weights={category.men} gender="Men" />
            <RankingTable weights={category.women} gender="Women" />

            {idx < kickBoxingRanking.length - 1 && (
              <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', marginTop: '36px' }} />
            )}
          </div>
        ))}

        {/* Separatore tra discipline */}
        <hr style={{ border: 'none', borderTop: '2px solid #e5e7eb', margin: '80px 0 60px' }} />

        {/* Disciplina: Muay Thai */}
        <div id="muay-thai" style={{ scrollMarginTop: '160px' }} />
        <div style={{
          background: 'linear-gradient(135deg, #7f1d1d, #b91c1c)',
          color: 'white',
          borderRadius: '20px',
          padding: '28px 30px',
          textAlign: 'center',
          marginBottom: '50px',
          boxShadow: '0 10px 30px rgba(185, 28, 28, 0.3)',
        }}>
          <span style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '3px', opacity: 0.7 }}>
            Discipline
          </span>
          <h3 style={{ fontSize: '28px', fontWeight: 700, marginTop: '6px' }}>Muay Thai</h3>
        </div>

        {/* Categorie Muay Thai */}
        {muayThaiRanking.map((category, idx) => (
          <div key={category.title + '-mt'} style={{ marginBottom: idx < muayThaiRanking.length - 1 ? '60px' : '0' }}>
            <h4 style={{
              fontSize: '22px',
              fontWeight: 700,
              color: '#b91c1c',
              marginBottom: '20px',
              paddingBottom: '12px',
              borderBottom: '2px solid #b91c1c',
            }}>
              {category.title}
            </h4>

            <RankingTable weights={category.men} gender="Men" />
            <RankingTable weights={category.women} gender="Women" />

            {idx < muayThaiRanking.length - 1 && (
              <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', marginTop: '36px' }} />
            )}
          </div>
        ))}

        {/* Separatore tra discipline */}
        <hr style={{ border: 'none', borderTop: '2px solid #e5e7eb', margin: '80px 0 60px' }} />

        {/* Disciplina: K1 Style */}
        <div id="k1-style" style={{ scrollMarginTop: '160px' }} />
        <div style={{
          background: 'linear-gradient(135deg, #854d0e, #ca8a04)',
          color: 'white',
          borderRadius: '20px',
          padding: '28px 30px',
          textAlign: 'center',
          marginBottom: '50px',
          boxShadow: '0 10px 30px rgba(202, 138, 4, 0.3)',
        }}>
          <span style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '3px', opacity: 0.7 }}>
            Discipline
          </span>
          <h3 style={{ fontSize: '28px', fontWeight: 700, marginTop: '6px' }}>K1 Style</h3>
        </div>

        {/* Categorie K1 Style */}
        {k1StyleRanking.map((category, idx) => (
          <div key={category.title + '-k1'} style={{ marginBottom: idx < k1StyleRanking.length - 1 ? '60px' : '0' }}>
            <h4 style={{
              fontSize: '22px',
              fontWeight: 700,
              color: '#ca8a04',
              marginBottom: '20px',
              paddingBottom: '12px',
              borderBottom: '2px solid #ca8a04',
            }}>
              {category.title}
            </h4>

            <RankingTable weights={category.men} gender="Men" />
            <RankingTable weights={category.women} gender="Women" />

            {idx < k1StyleRanking.length - 1 && (
              <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', marginTop: '36px' }} />
            )}
          </div>
        ))}

        {/* Separatore tra discipline */}
        <hr style={{ border: 'none', borderTop: '2px solid #e5e7eb', margin: '80px 0 60px' }} />

        {/* Disciplina: Full Contact */}
        <div id="full-contact" style={{ scrollMarginTop: '160px' }} />
        <div style={{
          background: 'linear-gradient(135deg, #14532d, #16a34a)',
          color: 'white',
          borderRadius: '20px',
          padding: '28px 30px',
          textAlign: 'center',
          marginBottom: '50px',
          boxShadow: '0 10px 30px rgba(22, 163, 74, 0.3)',
        }}>
          <span style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '3px', opacity: 0.7 }}>
            Discipline
          </span>
          <h3 style={{ fontSize: '28px', fontWeight: 700, marginTop: '6px' }}>Full Contact</h3>
        </div>

        {/* Categorie Full Contact */}
        {fullContactRanking.map((category, idx) => (
          <div key={category.title + '-fc'} style={{ marginBottom: idx < fullContactRanking.length - 1 ? '60px' : '0' }}>
            <h4 style={{
              fontSize: '22px',
              fontWeight: 700,
              color: '#16a34a',
              marginBottom: '20px',
              paddingBottom: '12px',
              borderBottom: '2px solid #16a34a',
            }}>
              {category.title}
            </h4>

            <RankingTable weights={category.men} gender="Men" />
            <RankingTable weights={category.women} gender="Women" />

            {idx < fullContactRanking.length - 1 && (
              <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', marginTop: '36px' }} />
            )}
          </div>
        ))}

        {/* Separatore tra discipline */}
        <hr style={{ border: 'none', borderTop: '2px solid #e5e7eb', margin: '80px 0 60px' }} />

        {/* Disciplina: Kick Boxing Light */}
        <div id="kick-boxing-light" style={{ scrollMarginTop: '160px' }} />
        <div style={{
          background: 'linear-gradient(135deg, #4c1d95, #7c3aed)',
          color: 'white',
          borderRadius: '20px',
          padding: '28px 30px',
          textAlign: 'center',
          marginBottom: '50px',
          boxShadow: '0 10px 30px rgba(124, 58, 237, 0.3)',
        }}>
          <span style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '3px', opacity: 0.7 }}>
            Discipline
          </span>
          <h3 style={{ fontSize: '28px', fontWeight: 700, marginTop: '6px' }}>Kick Boxing Light</h3>
        </div>

        {/* Categorie Kick Boxing Light */}
        {kickBoxingLightRanking.map((category, idx) => (
          <div key={category.title + '-kbl'} style={{ marginBottom: idx < kickBoxingLightRanking.length - 1 ? '60px' : '0' }}>
            <h4 style={{
              fontSize: '22px',
              fontWeight: 700,
              color: '#7c3aed',
              marginBottom: '20px',
              paddingBottom: '12px',
              borderBottom: '2px solid #7c3aed',
            }}>
              {category.title}
            </h4>

            <RankingTable weights={category.men} gender="Men" />
            <RankingTable weights={category.women} gender="Women" />

            {idx < kickBoxingLightRanking.length - 1 && (
              <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', marginTop: '36px' }} />
            )}
          </div>
        ))}

        {/* Separatore tra discipline */}
        <hr style={{ border: 'none', borderTop: '2px solid #e5e7eb', margin: '80px 0 60px' }} />

        {/* Disciplina: Free Boxing */}
        <div id="free-boxing" style={{ scrollMarginTop: '160px' }} />
        <div style={{
          background: 'linear-gradient(135deg, #0c4a6e, #0284c7)',
          color: 'white',
          borderRadius: '20px',
          padding: '28px 30px',
          textAlign: 'center',
          marginBottom: '50px',
          boxShadow: '0 10px 30px rgba(2, 132, 199, 0.3)',
        }}>
          <span style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '3px', opacity: 0.7 }}>
            Discipline
          </span>
          <h3 style={{ fontSize: '28px', fontWeight: 700, marginTop: '6px' }}>Free Boxing</h3>
        </div>

        {/* Categorie Free Boxing */}
        {freeBoxingRanking.map((category, idx) => (
          <div key={category.title + '-fb'} style={{ marginBottom: idx < freeBoxingRanking.length - 1 ? '60px' : '0' }}>
            <h4 style={{
              fontSize: '22px',
              fontWeight: 700,
              color: '#0284c7',
              marginBottom: '20px',
              paddingBottom: '12px',
              borderBottom: '2px solid #0284c7',
            }}>
              {category.title}
            </h4>

            <RankingTable weights={category.men} gender="Men" />
            <RankingTable weights={category.women} gender="Women" />

            {idx < freeBoxingRanking.length - 1 && (
              <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', marginTop: '36px' }} />
            )}
          </div>
        ))}

        {/* Separatore tra discipline */}
        <hr style={{ border: 'none', borderTop: '2px solid #e5e7eb', margin: '80px 0 60px' }} />

        {/* Disciplina: MMA */}
        <div id="mma" style={{ scrollMarginTop: '160px' }} />
        <div style={{
          background: 'linear-gradient(135deg, #78350f, #d97706)',
          color: 'white',
          borderRadius: '20px',
          padding: '28px 30px',
          textAlign: 'center',
          marginBottom: '50px',
          boxShadow: '0 10px 30px rgba(217, 119, 6, 0.3)',
        }}>
          <span style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '3px', opacity: 0.7 }}>
            Discipline
          </span>
          <h3 style={{ fontSize: '28px', fontWeight: 700, marginTop: '6px' }}>MMA</h3>
        </div>

        {/* Categorie MMA */}
        {mmaRanking.map((category, idx) => (
          <div key={category.title + '-mma'} style={{ marginBottom: idx < mmaRanking.length - 1 ? '60px' : '0' }}>
            <h4 style={{
              fontSize: '22px',
              fontWeight: 700,
              color: '#d97706',
              marginBottom: '20px',
              paddingBottom: '12px',
              borderBottom: '2px solid #d97706',
            }}>
              {category.title}
            </h4>

            <RankingTable weights={category.men} gender="Men" />
            <RankingTable weights={category.women} gender="Women" />

            {idx < mmaRanking.length - 1 && (
              <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', marginTop: '36px' }} />
            )}
          </div>
        ))}

      </div>
    </section>
  );
}
