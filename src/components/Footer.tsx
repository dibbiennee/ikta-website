import Link from 'next/link';
import Image from 'next/image';

const footerLinks = {
  federazione: [
    { name: 'Chi Siamo', href: '/chi-siamo' },
    { name: 'Organigramma', href: '/chi-siamo#organigramma' },
    { name: 'Discipline', href: '/discipline' },
    { name: 'Regolamenti', href: '/gare#regolamenti' },
  ],
  servizi: [
    { name: 'Formazione', href: '/formazione' },
    { name: 'Affiliazione', href: '/affiliazione' },
    { name: 'Gare e Ranking', href: '/gare' },
    { name: 'Palestre IKTA', href: '/palestre' },
  ],
  contatti: [
    { name: 'Contattaci', href: '/contatti' },
    { name: 'Sedi', href: '/palestre' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* IKTA Brand Top Bar */}
      <div className="h-1 ikta-gradient" />

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="bg-white rounded-lg p-1">
                <Image
                  src="/logo-ikta.png"
                  alt="IKTA Logo"
                  width={50}
                  height={50}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-2xl font-bold tracking-tight">IKTA</span>
            </Link>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Intercontinental Kick Thai Boxing Association.
              Federazione di sport da combattimento.
            </p>
            <div className="mt-6">
              <p className="text-sm text-gray-400">
                <span className="block font-medium text-white">Sede Nazionale</span>
                Via Ticino 15, Civitavecchia (RM)
              </p>
              <p className="mt-2 text-sm text-gray-400">
                <span className="block font-medium text-white">Contatti</span>
                +39 338 4012397
                <br />
                massimo.brizi@tiscali.it
              </p>
            </div>
          </div>

          {/* Federazione Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Federazione
            </h3>
            <ul className="space-y-3">
              {footerLinks.federazione.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Servizi Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Servizi
            </h3>
            <ul className="space-y-3">
              {footerLinks.servizi.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Seguici
            </h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/ikta.italia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/ikta_italia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2.16c3.2,0,3.58.01,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s-.01,3.58-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.17,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33.01,7.05.07c-4.27.2-6.78,2.71-6.98,6.98C.01,8.33,0,8.74,0,12s.01,3.67.07,4.95c.2,4.27,2.71,6.78,6.98,6.98,1.28.06,1.69.07,4.95.07s3.67-.01,4.95-.07c4.27-.2,6.78-2.71,6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.27-2.71-6.78-6.98-6.98C15.67.01,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@iktaitalia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.5,6.19a3,3,0,0,0-2.12-2.12C19.54,3.5,12,3.5,12,3.5s-7.54,0-9.38.57A3,3,0,0,0,.5,6.19,31.24,31.24,0,0,0,0,12a31.24,31.24,0,0,0,.5,5.81,3,3,0,0,0,2.12,2.12c1.84.57,9.38.57,9.38.57s7.54,0,9.38-.57a3,3,0,0,0,2.12-2.12A31.24,31.24,0,0,0,24,12,31.24,31.24,0,0,0,23.5,6.19ZM9.54,15.57V8.43L15.82,12Z"/>
                </svg>
              </a>
            </div>
            <div className="mt-8">
              <Link
                href="/contatti"
                className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-gray-300 transition-colors"
              >
                Contattaci
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} IKTA. Tutti i diritti riservati.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/cookie" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
