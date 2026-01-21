'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const navigation = [
  {
    name: 'Home',
    href: '/',
    dropdown: [
      { name: 'La Federazione', href: '/#federazione' },
      { name: 'Discipline', href: '/#discipline' },
      { name: 'Affiliazione', href: '/#affiliazione' },
      { name: 'Sedi IKTA', href: '/#sedi' },
    ],
  },
  {
    name: 'Chi Siamo',
    href: '/chi-siamo',
    dropdown: [
      { name: 'La Federazione', href: '/chi-siamo#federazione' },
      { name: 'Organigramma', href: '/chi-siamo#organigramma' },
      { name: 'Il Presidente', href: '/chi-siamo#presidente' },
      { name: 'IKTA World', href: '/chi-siamo#ikta-world' },
      { name: 'Regolamenti', href: '/chi-siamo#regolamenti' },
      { name: 'News & Gallery', href: '/chi-siamo#news' },
    ],
  },
  {
    name: 'CSE',
    href: '/cse',
    dropdown: [
      { name: "Cos'è il CSE", href: '/cse#cos-e' },
      { name: 'Perché CSE', href: '/cse#perche' },
      { name: 'Preparazione Mentale', href: '/cse#preparazione-mentale' },
      { name: 'Didattica', href: '/cse#didattica' },
      { name: 'Cinture', href: '/cse#cinture' },
      { name: 'Divise', href: '/cse#divise' },
    ],
  },
  {
    name: 'Discipline',
    href: '/discipline',
    dropdown: [
      { name: 'Kick Boxing', href: '/discipline#kick-boxing' },
      { name: 'Muay Thai', href: '/discipline#muay-thai' },
      { name: 'Krav Maga', href: '/discipline#krav-maga' },
      { name: 'Brazilian Jiu Jitsu', href: '/discipline#bjj' },
      { name: 'Boxe', href: '/discipline#boxe' },
      { name: 'Kung Fu Sanda', href: '/discipline#kung-fu-sanda' },
      { name: 'Karate', href: '/discipline#karate' },
      { name: 'Armed Combat', href: '/discipline#armed-combat' },
    ],
  },
  {
    name: 'Formazione',
    href: '/formazione',
    dropdown: [
      { name: 'Corsi', href: '/formazione#corsi' },
      { name: 'Programmi Cinture', href: '/formazione#cinture' },
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
      { name: 'Record Mondiali', href: '/gare#record' },
    ],
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenSubmenu, setMobileOpenSubmenu] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      {/* IKTA Brand Top Bar */}
      <div className="h-1 ikta-gradient" />

      <nav className="container mx-auto px-4">
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
              IKTA
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
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block text-center text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1e40af] transition-colors"
                            style={{ padding: '20px 32px' }}
                          >
                            {subItem.name}
                          </Link>
                        ))}
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

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 -mr-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-[calc(1rem+4px+4rem)] bg-white z-40 transform transition-transform duration-300 overflow-y-auto ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-4 gap-1">
          {navigation.map((item) => (
            <div key={item.name}>
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => setMobileOpenSubmenu(mobileOpenSubmenu === item.name ? null : item.name)}
                    className="w-full px-4 py-3 text-lg font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors flex items-center justify-between"
                  >
                    {item.name}
                    <svg
                      className={`w-5 h-5 transition-transform ${mobileOpenSubmenu === item.name ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>

                  {/* Modern Mobile Submenu */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-out ${
                      mobileOpenSubmenu === item.name ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="mx-2 my-2 p-6 bg-gray-50 rounded-xl border border-gray-100">
                      {item.dropdown?.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="flex items-center gap-4 px-6 py-5 text-base text-gray-600 hover:text-[#1e40af] hover:bg-white rounded-lg transition-all"
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setMobileOpenSubmenu(null);
                          }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1e40af]/30" />
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  className="px-4 py-3 text-lg font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <Link
              href="/affiliazione"
              className="btn btn-primary w-full justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Affiliati Ora
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
