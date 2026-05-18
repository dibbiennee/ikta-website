'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const STORAGE_KEY = 'ikta-cookie-consent';
type Consent = 'all' | 'necessary' | null;

export default function CookieBanner() {
  // null = ancora non determinato (SSR safe), 'all' / 'necessary' = scelta salvata
  const [consent, setConsent] = useState<Consent | undefined>(undefined);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === 'all' || stored === 'necessary') {
        setConsent(stored);
      } else {
        setConsent(null);
      }
    } catch {
      // Privacy mode / storage bloccato: mostra il banner ma non puo persistere la scelta
      setConsent(null);
    }
  }, []);

  const persist = (value: Exclude<Consent, null>) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignora se storage non disponibile
    }
    setConsent(value);
  };

  // Non renderizzare nulla finche non sappiamo lo stato (no flash) o se gia scelto
  if (consent === undefined || consent !== null) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Informativa cookie"
      className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6 sm:pb-6 safe-area-bottom"
    >
      <div className="mx-auto max-w-3xl bg-white border border-gray-200 rounded-2xl shadow-2xl p-5 sm:p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-gray-700 leading-relaxed">
            <p className="font-semibold text-gray-900 mb-1">Usiamo cookie tecnici e servizi di terze parti.</p>
            <p>
              Per offrirti il sito (font, mappe, hosting) usiamo strumenti che possono raccogliere il tuo IP. Nessun cookie di profilazione o pubblicita.
              Leggi la <Link href="/cookie-policy" className="text-[#1e40af] underline font-medium">Cookie Policy</Link>.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 md:flex-shrink-0">
            <button
              type="button"
              onClick={() => persist('necessary')}
              className="btn btn-ghost border border-gray-300 !text-sm !py-2 !px-4"
            >
              Solo necessari
            </button>
            <button
              type="button"
              onClick={() => persist('all')}
              className="btn btn-primary !text-sm !py-2 !px-4"
            >
              Accetta tutti
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
