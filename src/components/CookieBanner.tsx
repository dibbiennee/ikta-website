'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const STORAGE_KEY = 'ikta-cookie-consent';
type Consent = 'all' | 'necessary' | null;

export default function CookieBanner() {
  // null = ancora non determinato (SSR safe), 'all' / 'necessary' = scelta salvata
  const [consent, setConsent] = useState<Consent | undefined>(undefined);

  useEffect(() => {
    // Lettura client-only di localStorage (SSR-safe): i setState qui sono intenzionali.
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === 'all' || stored === 'necessary') {
        // eslint-disable-next-line react-hooks/set-state-in-effect
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
      <div className="mx-auto max-w-3xl bg-white border border-gray-200 rounded-2xl shadow-2xl p-4 sm:p-5">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-xs sm:text-sm text-gray-700 leading-snug">
            Cookie tecnici e servizi di terze parti (font, mappe, hosting). Nessun cookie di profilazione o pubblicità.{' '}
            <Link href="/cookie-policy" className="text-[#1e40af] underline font-medium">Cookie Policy</Link>.
          </p>
          <div className="flex flex-row gap-2 md:flex-shrink-0">
            <button
              type="button"
              onClick={() => persist('necessary')}
              className="btn btn-ghost border border-gray-300 !text-xs sm:!text-sm !py-2 !px-3 flex-1 md:flex-none"
            >
              Solo necessari
            </button>
            <button
              type="button"
              onClick={() => persist('all')}
              className="btn btn-primary !text-xs sm:!text-sm !py-2 !px-3 flex-1 md:flex-none"
            >
              Accetta tutti
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
