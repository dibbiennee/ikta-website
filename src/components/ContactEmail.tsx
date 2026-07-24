'use client';

import { useState, useEffect } from 'react';

export default function ContactEmail() {
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Costruisci l'email lato client per evitare scraping da bot
    const user = 'massimo.brizi';
    const domain = 'tiscali.it';
    // Intenzionale: assemblaggio client-only anti-scraping (non deve finire nell'HTML SSR)
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEmail(`${user}@${domain}`);
  }, []);

  if (!email) return <span className="text-gray-900 font-medium">Caricamento...</span>;

  return (
    <a
      href={`mailto:${email}`}
      className="text-gray-900 font-medium hover:text-[#1e40af] transition-colors"
    >
      {email}
    </a>
  );
}
