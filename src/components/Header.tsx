'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const navigation = [
  {
    name: 'IKTA Italia',
    href: '/',
    dropdown: [
      { name: 'Home', href: '/' },
      { name: 'Discipline', href: '/#discipline' },
      { name: 'Sedi IKTA', href: '/#sedi' },
    ],
  },
  {
    name: 'IKTA World',
    href: '/ikta-world',
    dropdown: [
      { name: 'News', href: '/ikta-world/news' },
      { name: 'Organigramma', href: '/ikta-world/organigramma' },
      { name: 'Titoli', href: '/ikta-world/titoli' },
      { name: 'Ranking', href: '/ikta-world/ranking' },
      { name: 'Cinture Kick Boxe', href: '/ikta-world/cinture-kick-boxe', row: 'cinture' },
      { name: 'Cinture Krav Maga', href: '/ikta-world/cinture-krav-maga', row: 'cinture' },
      { name: 'New World Record', href: '/ikta-world/new-world-record' },
    ],
  },
  {
    name: 'Chi Siamo',
    href: '/chi-siamo',
    dropdown: [
      { name: 'La Federazione', href: '/chi-siamo#federazione' },
      { name: 'Organigramma', href: '/chi-siamo/organigramma' },
      { name: 'Il Presidente', href: '/chi-siamo#presidente' },
      { name: 'Regolamenti', href: '/chi-siamo#regolamenti' },
    ],
  },
  {
    name: 'Formazione',
    href: '/formazione',
    dropdown: [
      { name: 'Corsi', href: '/formazione#corsi' },
      { name: 'Albo Istruttori', href: '/formazione#albo-istruttori' },
      { name: 'Calendario Corsi', href: '/formazione#calendario' },
    ],
  },
  {
    name: 'Gare & Ranking',
    href: '/gare',
    dropdown: [
      { name: 'Calendario Gare', href: '/gare#calendario' },
      { name: 'Ranking IKTA', href: '/gare#ranking' },
      { name: 'Omologazioni Titoli', href: '/gare#omologazioni' },
    ],
  },
  {
    name: 'Contatti',
    href: '/contatti',
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenSubmenu, setMobileOpenSubmenu] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  // Handle scroll to anchor
  const handleAnchorClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.includes('#')) {
      const [path, hash] = href.split('#');
      const targetPath = path || '/';

      if (pathname === targetPath || (pathname === '/' && targetPath === '/')) {
        e.preventDefault();
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        {/* IKTA Brand Top Bar */}
        <div className="h-1 ikta-gradient" />

        <nav className="container mx-auto px-6 sm:px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo-ikta.png"
                alt="IKTA Logo"
                width={60}
                height={60}
                className="w-12 h-12 md:w-14 md:h-14 object-contain"
              />
              <span className="text-xl md:text-2xl font-bold tracking-tight text-gray-900">
                IKTA World
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => item.dropdown && setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="py-2 text-sm font-medium text-gray-700 hover:text-[#1e40af] transition-colors whitespace-nowrap inline-flex items-center gap-1.5"
                  >
                    {item.name}
                    {item.dropdown && (
                      <svg
                        className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 ${openDropdown === item.name ? 'rotate-180 text-[#1e40af]' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.dropdown && (
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${
                        openDropdown === item.name
                          ? 'opacity-100 visible'
                          : 'opacity-0 invisible pointer-events-none'
                      }`}
                    >
                      <div className="bg-white border border-gray-200 shadow-lg min-w-[280px] py-4">
                        <div className="flex flex-col divide-y divide-gray-100">
                          {(() => {
                            const groups: { key: string; items: typeof item.dropdown }[] = [];
                            item.dropdown.forEach((subItem) => {
                              const r = (subItem as any).row;
                              if (r && groups.length > 0 && groups[groups.length - 1].key === r) {
                                groups[groups.length - 1].items.push(subItem);
                              } else {
                                groups.push({ key: r || subItem.name, items: [subItem] });
                              }
                            });
                            return groups.map((g) =>
                              g.items.length > 1 ? (
                                <div key={g.key} className="flex divide-x divide-gray-100">
                                  {g.items.map((subItem) => (
                                    <Link
                                      key={subItem.name}
                                      href={subItem.href}
                                      onClick={(e) => handleAnchorClick(e, subItem.href)}
                                      className="flex-1 block text-center text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1e40af] transition-colors"
                                      style={{ padding: '20px 16px' }}
                                    >
                                      {subItem.name}
                                    </Link>
                                  ))}
                                </div>
                              ) : (
                                <Link
                                  key={g.items[0].name}
                                  href={g.items[0].href}
                                  onClick={(e) => handleAnchorClick(e, g.items[0].href)}
                                  className="block text-center text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1e40af] transition-colors"
                                  style={{ padding: '20px 32px' }}
                                >
                                  {g.items[0].name}
                                </Link>
                              )
                            );
                          })()}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <Link
                href="/affiliazione"
                className="btn btn-primary text-sm"
              >
                Affiliati Ora
              </Link>
            </div>

            {/* Mobile Menu Button - Animated Hamburger */}
            <button
              type="button"
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 relative flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 origin-center ${mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                <span className={`w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 scale-0' : ''}`} />
                <span className={`w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 origin-center ${mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Backdrop - Covers bottom half */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu - Half Screen from Top */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-[70vh] z-[70] transform transition-all duration-400 ease-out overflow-hidden rounded-b-3xl shadow-2xl ${
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ background: 'linear-gradient(180deg, #1e40af 0%, #1e3a8a 50%, #0f172a 100%)' }}
      >
        {/* Header with Logo */}
        <div className="flex items-center justify-between border-b border-white/10" style={{ padding: '1.25rem 1.5rem' }}>
          <div className="flex items-center gap-3">
            <Image
              src="/logo-ikta.png"
              alt="IKTA Logo"
              width={48}
              height={48}
              className="w-12 h-12 object-contain bg-white rounded-xl p-1.5 shadow-lg"
            />
            <div className="text-white">
              <h2 className="font-bold text-lg">IKTA World</h2>
              <p className="text-white/60 text-xs">Federazione Arti Marziali</p>
            </div>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Chiudi menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Menu Content */}
        <div className="h-[calc(100%-80px)] flex flex-col overflow-hidden" style={{ padding: '0.25rem 1.5rem 1.5rem 1.5rem' }}>
          {/* Navigation */}
          <div className="flex-1">
            <div className="divide-y divide-white/10">
              {navigation.map((item, index) => (
                <div
                  key={item.name}
                  className={`transform transition-all duration-400 ${mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}
                  style={{ transitionDelay: mobileMenuOpen ? `${index * 40}ms` : '0ms' }}
                >
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => setMobileOpenSubmenu(mobileOpenSubmenu === item.name ? null : item.name)}
                        className={`w-full font-bold transition-all duration-200 flex items-center justify-between ${
                          mobileOpenSubmenu === item.name
                            ? 'text-[#eab308]'
                            : 'text-white'
                        }`}
                        style={{ fontSize: 'clamp(1.2rem, 5vw, 1.45rem)', padding: '0.6rem 1rem' }}
                      >
                        <span>{item.name}</span>
                        <svg
                          className={`w-4 h-4 transition-all duration-300 ${mobileOpenSubmenu === item.name ? 'rotate-180 text-[#eab308]' : 'text-white/40'}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                      </button>

                      {/* Submenu - Vertical with dividers */}
                      <div
                        className={`grid transition-all duration-300 ease-out ${
                          mobileOpenSubmenu === item.name ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="divide-y divide-white/5">
                            {(() => {
                              const groups: { key: string; items: NonNullable<typeof item.dropdown> }[] = [];
                              item.dropdown?.forEach((subItem) => {
                                const r = (subItem as any).row;
                                if (r && groups.length > 0 && groups[groups.length - 1].key === r) {
                                  groups[groups.length - 1].items.push(subItem);
                                } else {
                                  groups.push({ key: r || subItem.name, items: [subItem] });
                                }
                              });
                              return groups.map((g) =>
                                g.items.length > 1 ? (
                                  <div key={g.key} className="flex gap-4" style={{ padding: '0.25rem 1rem 0.25rem 2rem' }}>
                                    {g.items.map((subItem) => (
                                      <Link
                                        key={subItem.name}
                                        href={subItem.href}
                                        className="text-white/70 hover:text-white active:text-[#eab308] transition-colors"
                                        style={{ fontSize: 'clamp(0.8rem, 3vw, 0.9rem)' }}
                                        onClick={(e) => {
                                          handleAnchorClick(e, subItem.href);
                                          setMobileMenuOpen(false);
                                          setMobileOpenSubmenu(null);
                                        }}
                                      >
                                        {subItem.name}
                                      </Link>
                                    ))}
                                  </div>
                                ) : (
                                  <Link
                                    key={g.items[0].name}
                                    href={g.items[0].href}
                                    className="block text-white/70 hover:text-white active:text-[#eab308] transition-colors"
                                    style={{ fontSize: 'clamp(0.8rem, 3vw, 0.9rem)', padding: '0.25rem 1rem 0.25rem 2rem' }}
                                    onClick={(e) => {
                                      handleAnchorClick(e, g.items[0].href);
                                      setMobileMenuOpen(false);
                                      setMobileOpenSubmenu(null);
                                    }}
                                  >
                                    {g.items[0].name}
                                  </Link>
                                )
                              );
                            })()}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="font-bold text-white transition-colors block hover:text-[#eab308]"
                      style={{ fontSize: 'clamp(1.2rem, 5vw, 1.45rem)', padding: '0.6rem 1rem' }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button at Bottom */}
          <div style={{ margin: '0.75rem 0.5rem 0 0.5rem' }}>
            <a
              href="https://www.instagram.com/iktaitalia?igsh=MWhxb3A1b2QxMHc2OQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#dc2743] text-white font-bold rounded-xl shadow-lg hover:opacity-90 transition-all active:scale-[0.98]"
              style={{ fontSize: 'clamp(0.95rem, 3.5vw, 1.1rem)' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Seguici su Instagram
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
