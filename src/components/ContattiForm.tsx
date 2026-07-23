'use client';

import { useActionState } from 'react';
import Link from 'next/link';
import { submitContatti } from '@/app/actions/forms';
import { initialFormState } from '@/app/actions/form-types';

const inputClass =
  'w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition-colors focus:border-[var(--ikta-blue)] focus-visible:outline-2 focus-visible:outline-[var(--ikta-blue)]';
const labelClass = 'block mb-1.5 text-sm font-semibold text-gray-700 text-left';

export default function ContattiForm() {
  const [state, formAction, isPending] = useActionState(submitContatti, initialFormState);

  if (state.ok) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-xl border border-green-200 bg-green-50 p-6 text-green-800 text-left"
      >
        <p className="font-semibold">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-4 text-left" noValidate>
      {/* Honeypot anti-spam */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px' }}>
        <label htmlFor="cont-company">Non compilare</label>
        <input id="cont-company" type="text" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="cont-nome" className={labelClass}>Nome e cognome *</label>
        <input id="cont-nome" name="nome" type="text" required className={inputClass} autoComplete="name" />
      </div>
      <div>
        <label htmlFor="cont-email" className={labelClass}>Email *</label>
        <input id="cont-email" name="email" type="email" required className={inputClass} autoComplete="email" />
      </div>
      <div>
        <label htmlFor="cont-messaggio" className={labelClass}>Messaggio *</label>
        <textarea id="cont-messaggio" name="messaggio" rows={5} required className={`${inputClass} resize-y`} />
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
        {isPending ? 'Invio in corso…' : 'Invia messaggio'}
      </button>
    </form>
  );
}
