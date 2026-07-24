// dati cinture (estratti)

export const direttoriTecnici = [
  { name: 'Andrea Massaro', role: 'Direttore Tecnico Nazionale' },
  { name: 'Alessio Ferrazzoli', role: 'Nuovo Direttore Tecnico Nazionale', date: '6/9/2021' },
];

export const istruttori = [
  { name: 'Alessio Ferrazzoli', date: '14/3/2021' },
  { name: 'Valentina Cionni', date: '14/3/2021' },
  { name: 'Igor Bastioni', date: '14/3/2021' },
];

export type Belt = {
  id: string;
  label: string;
  color: string;
  textColor?: string;
  gold?: boolean;
  border?: string;
  members: { name: string; date: string }[];
};

export const belts: Belt[] = [
  {
    id: 'bianca',
    label: 'Cintura Bianca',
    color: '#e5e7eb',
    textColor: '#111827',
    members: [
      { name: 'Luigi Brandi', date: '20/11/2019' },
      { name: 'Mario Francesconi', date: '20/11/2019' },
      { name: 'Laura Bonfiglio', date: '20/11/2019' },
      { name: 'Flavia Di Simone', date: '20/11/2019' },
      { name: 'Leonardo Ferri Ricchi', date: '20/11/2019' },
      { name: 'Matteo Sarra', date: '20/11/2019' },
    ],
  },
  {
    id: 'gialla',
    label: 'Cintura Gialla',
    color: '#eab308',
    textColor: '#111827',
    members: [
      { name: 'Ada Roberto', date: '20/11/2019' },
      { name: 'Micaela Baglioni', date: '20/11/2019' },
      { name: 'Luigi Buonincontro', date: '20/11/2019' },
      { name: 'Stefano Patriarca', date: '20/11/2019' },
    ],
  },
  {
    id: 'arancione',
    label: 'Cintura Arancione',
    color: '#ea580c',
    members: [
      { name: 'Franco Carabbosio', date: '20/11/2019' },
      { name: 'Simone Pujia', date: '20/11/2019' },
      { name: 'Anna Di Felice', date: '14/6/2024' },
      { name: 'Matteo Colantoni', date: '16/6/2024' },
      { name: 'Francesco Nunez', date: '20/6/2026' },
      { name: 'Gabriella La Torre', date: '20/6/2026' },
    ],
  },
  {
    id: 'verde',
    label: 'Cintura Verde',
    color: '#16a34a',
    members: [
      { name: 'Alberto Grassi', date: '5/12/2019' },
      { name: 'Daniele Lauri', date: '5/12/2019' },
      { name: 'Aurora Grossi', date: '20/6/2026' },
    ],
  },
  {
    id: 'blu',
    label: 'Cintura Blu',
    color: '#2563eb',
    members: [
      { name: 'Saverio Leo', date: '20/11/2019' },
      { name: 'Giuseppe Bartolini', date: '16/6/2024' },
      { name: 'Loris Marinozzi', date: '20/6/2026' },
    ],
  },
  {
    id: 'marrone',
    label: 'Cintura Marrone',
    color: '#92400e',
    members: [
      { name: 'Leonardo Marchio', date: '20/11/2019' },
      { name: "Roberto D'Andrea", date: '20/11/2019' },
      { name: 'Giuseppe Bartolini', date: '20/6/2026' },
    ],
  },
  {
    id: '1-dan',
    label: 'I DAN - Cintura Nera',
    color: '#111827',
    members: [
      { name: 'Luca Adinolfo', date: '5/12/2019' },
    ],
  },
  {
    id: '2-dan',
    label: 'II DAN - Cintura Nera',
    color: '#111827',
    members: [],
  },
  {
    id: '3-dan',
    label: 'III DAN - Cintura Nera',
    color: '#111827',
    members: [
      { name: 'Andrea Massaro', date: '22/1/2020' },
    ],
  },
  {
    id: '4-dan',
    label: 'IV DAN - Cintura Nera',
    color: '#111827',
    members: [],
  },
  {
    id: '5-dan',
    label: 'V DAN - Cintura Nera',
    color: '#111827',
    members: [],
  },
  {
    id: '6-dan',
    label: 'VI DAN - Cintura Nera',
    color: '#111827',
    members: [],
  },
  {
    id: '7-dan',
    label: 'VII DAN - Cintura Nera',
    color: '#111827',
    members: [],
  },
  {
    id: '8-dan',
    label: 'VIII DAN - Cintura Nera',
    color: '#111827',
    members: [],
  },
  {
    id: '9-dan',
    label: 'IX DAN - Cintura Nera',
    color: '#111827',
    members: [],
  },
  {
    id: 'rossa',
    label: 'Cintura Rossa',
    color: '#dc2626',
    members: [],
  },
];
