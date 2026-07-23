'use server';

import { sendMail } from '@/lib/email';

export type FormState = {
  ok: boolean;
  message: string;
};

export const initialFormState: FormState = { ok: false, message: '' };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function field(data: FormData, name: string): string {
  const value = data.get(name);
  return typeof value === 'string' ? value.trim() : '';
}

const ERR_FALLBACK =
  'Invio non riuscito al momento. Riprova più tardi oppure scrivici su WhatsApp o via email.';

/**
 * Controlli comuni: honeypot (campo "company" deve restare vuoto) e
 * consenso privacy obbligatorio. Ritorna un messaggio d'errore o null.
 */
function commonGuards(data: FormData): string | null {
  if (field(data, 'company') !== '') {
    // bot: fingiamo successo per non dargli feedback
    return '__HONEYPOT__';
  }
  if (data.get('privacy') !== 'on') {
    return 'Per inviare la richiesta devi accettare l’informativa sulla privacy.';
  }
  return null;
}

export async function submitAffiliazione(
  _prev: FormState,
  data: FormData,
): Promise<FormState> {
  const guard = commonGuards(data);
  if (guard === '__HONEYPOT__') {
    return { ok: true, message: 'Domanda inviata. Ti ricontatteremo al più presto.' };
  }
  if (guard) return { ok: false, message: guard };

  const nomePalestra = field(data, 'nomePalestra');
  const referente = field(data, 'referente');
  const citta = field(data, 'citta');
  const email = field(data, 'email');
  const telefono = field(data, 'telefono');
  const messaggio = field(data, 'messaggio');

  if (!nomePalestra || !referente || !citta || !email) {
    return { ok: false, message: 'Compila i campi obbligatori (palestra, referente, città, email).' };
  }
  if (!EMAIL_RE.test(email)) {
    return { ok: false, message: 'Inserisci un indirizzo email valido.' };
  }

  const text = [
    'Nuova richiesta di AFFILIAZIONE dal sito IKTA',
    '',
    `Palestra: ${nomePalestra}`,
    `Referente: ${referente}`,
    `Città: ${citta}`,
    `Email: ${email}`,
    `Telefono: ${telefono || '—'}`,
    '',
    'Discipline / note:',
    messaggio || '—',
  ].join('\n');

  const result = await sendMail({
    subject: `Affiliazione — ${nomePalestra} (${citta})`,
    text,
    replyTo: email,
  });

  if (!result.ok) {
    console.error('submitAffiliazione sendMail error:', result.error);
    return { ok: false, message: ERR_FALLBACK };
  }
  return { ok: true, message: 'Domanda inviata. Il comitato ti ricontatterà al più presto.' };
}

export async function submitContatti(
  _prev: FormState,
  data: FormData,
): Promise<FormState> {
  const guard = commonGuards(data);
  if (guard === '__HONEYPOT__') {
    return { ok: true, message: 'Messaggio inviato. Ti risponderemo al più presto.' };
  }
  if (guard) return { ok: false, message: guard };

  const nome = field(data, 'nome');
  const email = field(data, 'email');
  const messaggio = field(data, 'messaggio');

  if (!nome || !email || !messaggio) {
    return { ok: false, message: 'Compila tutti i campi (nome, email, messaggio).' };
  }
  if (!EMAIL_RE.test(email)) {
    return { ok: false, message: 'Inserisci un indirizzo email valido.' };
  }

  const text = [
    'Nuovo messaggio dal form CONTATTI del sito IKTA',
    '',
    `Nome: ${nome}`,
    `Email: ${email}`,
    '',
    'Messaggio:',
    messaggio,
  ].join('\n');

  const result = await sendMail({
    subject: `Contatto sito — ${nome}`,
    text,
    replyTo: email,
  });

  if (!result.ok) {
    console.error('submitContatti sendMail error:', result.error);
    return { ok: false, message: ERR_FALLBACK };
  }
  return { ok: true, message: 'Messaggio inviato. Ti risponderemo al più presto.' };
}
