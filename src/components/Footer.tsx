import Link from 'next/link';
import Image from 'next/image';

const footerLinks = {
  federazione: [
    { name: 'Chi Siamo', href: '/chi-siamo' },
    { name: 'Organigramma', href: '/chi-siamo/organigramma' },
    { name: 'Discipline', href: '/discipline' },
    { name: 'Regolamenti', href: '/chi-siamo#regolamenti' },
  ],
  servizi: [
    { name: 'Formazione', href: '/formazione' },
    { name: 'Affiliazione', href: '/affiliazione' },
    { name: 'Gare e Ranking', href: '/gare' },
    { name: 'Palestre IKTA', href: '/palestre' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      {/* IKTA Brand Top Bar */}
      <div className="h-1 ikta-gradient" />

      <div className="container mx-auto px-4 pt-12 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="bg-white rounded-lg p-1">
                <Image
                  src="/logo-ikta.png"
                  alt="IKTA Logo"
                  width={50}
                  height={50}
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                />
              </div>
              <span className="text-xl sm:text-2xl font-bold tracking-tight">IKTA</span>
            </Link>
            <p className="mt-3 text-xs sm:text-sm text-gray-400 leading-relaxed">
              Intercontinental Kick Thai Boxing Association.
              Federazione di sport da combattimento.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-4 lg:block lg:space-y-3">
              <div>
                <p className="text-xs font-medium text-white">Sede Nazionale</p>
                <p className="text-xs text-gray-400">Via Ticino 15, Civitavecchia</p>
              </div>
              <div>
                <p className="text-xs font-medium text-white">Contatti</p>
                <a href="tel:+393384012397" className="text-xs text-gray-400 hover:text-white block">+39 338 4012397</a>
              </div>
            </div>
          </div>

          {/* Federazione Links */}
          <div>
            <h3 className="!text-xs !font-semibold text-white uppercase tracking-wider mb-3">
              Federazione
            </h3>
            <ul className="space-y-2">
              {footerLinks.federazione.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Servizi Links */}
          <div>
            <h3 className="!text-xs !font-semibold text-white uppercase tracking-wider mb-3">
              Servizi
            </h3>
            <ul className="space-y-2">
              {footerLinks.servizi.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="!text-xs !font-semibold text-white uppercase tracking-wider mb-3">
              Seguici
            </h3>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/share/18EuJXyjK5/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 active:bg-gray-600 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/iktaitalia?igsh=MWhxb3A1b2QxMHc2OQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 active:bg-gray-600 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12,2.16c3.2,0,3.58.01,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s-.01,3.58-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.17,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33.01,7.05.07c-4.27.2-6.78,2.71-6.98,6.98C.01,8.33,0,8.74,0,12s.01,3.67.07,4.95c.2,4.27,2.71,6.78,6.98,6.98,1.28.06,1.69.07,4.95.07s3.67-.01,4.95-.07c4.27-.2,6.78-2.71,6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.27-2.71-6.78-6.98-6.98C15.67.01,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z"/>
                </svg>
              </a>
            </div>
            <div className="mt-4">
              <Link
                href="/contatti"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-white hover:text-gray-300 transition-colors"
              >
                Contattaci
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-xs text-gray-400">
              &copy; {new Date().getFullYear()} IKTA. Tutti i diritti riservati.
            </p>
            <div className="flex gap-4 text-xs text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/cookie-policy" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
