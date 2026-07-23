'use client';

import { useActionState } from 'react';
import Link from 'next/link';
import { submitAffiliazione } from '@/app/actions/forms';
import { initialFormState } from '@/app/actions/form-types';

const inputClass =
  'w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition-colors focus:border-[var(--ikta-blue)] focus-visible:outline-2 focus-visible:outline-[var(--ikta-blue)]';
const labelClass = 'block mb-1.5 text-sm font-semibold text-gray-700';

export default function AffiliazioneForm() {
  const [state, formAction, isPending] = useActionState(submitAffiliazione, initialFormState);

  if (state.ok) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-xl border border-green-200 bg-green-50 p-6 text-green-800"
      >
        <p className="font-semibold">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-4" noValidate>
      {/* Honeypot anti-spam: nascosto agli utenti */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px' }}>
        <label htmlFor="aff-company">Non compilare</label>
        <input id="aff-company" type="text" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="aff-nomePalestra" className={labelClass}>Nome palestra *</label>
          <input id="aff-nomePalestra" name="nomePalestra" type="text" required className={inputClass} autoComplete="organization" />
        </div>
        <div>
          <label htmlFor="aff-referente" className={labelClass}>Nome referente *</label>
          <input id="aff-referente" name="referente" type="text" required className={inputClass} autoComplete="name" />
        </div>
        <div>
          <label htmlFor="aff-citta" className={labelClass}>Città *</label>
          <input id="aff-citta" name="citta" type="text" required className={inputClass} autoComplete="address-level2" />
        </div>
        <div>
          <label htmlFor="aff-email" className={labelClass}>Email *</label>
          <input id="aff-email" name="email" type="email" required className={inputClass} autoComplete="email" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="aff-telefono" className={labelClass}>Telefono</label>
          <input id="aff-telefono" name="telefono" type="tel" className={inputClass} autoComplete="tel" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="aff-messaggio" className={labelClass}>Discipline insegnate / note</label>
          <textarea id="aff-messaggio" name="messaggio" rows={4} className={`${inputClass} resize-y`} />
        </div>
      </div>

      <label className="flex items-start gap-2 text-sm text-gray-600">
        <input type="checkbox" name="privacy" value="on" required className="mt-1" />
        <span>
          Ho letto e accetto l’<Link href="/privacy" className="underline text-[var(--ikta-blue)]">informativa sulla privacy</Link>. *
        </span>
      </label>

      {!state.ok && state.message && (
        <p role="alert" aria-live="assertive" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {state.message}
        </p>
      )}

      <button type="submit" disabled={isPending} className="btn btn-primary sm:self-start">
        {isPending ? 'Invio in corso…' : 'Invia richiesta di affiliazione'}
      </button>
    </form>
  );
}
