'use client';

import { useState } from 'react';

import {
  courses,
  type Level,
  type Module,
} from '@/data/corsi';

// ==================== COMPONENTI ====================

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-5 h-5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
      fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

function LevelSection({ level, color, isOpen, onToggle }: { level: Level; color: string; isOpen: boolean; onToggle: () => void }) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div style={{ borderLeft: `4px solid ${color}` }} className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
      {/* Header livello */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
        style={{ padding: '20px 24px' }}
      >
        <div className="flex-1">
          <h4 className="text-lg font-bold text-gray-900">{level.name}</h4>
          <p className="text-sm text-gray-500 mt-1">{level.modules.length} moduli formativi</p>
        </div>
        <div className="flex items-center gap-4 flex-shrink-0">
          <span className="text-xl font-bold" style={{ color }}>&euro;{level.price}</span>
          <ChevronIcon open={isOpen} />
        </div>
      </button>

      {/* Contenuto espandibile */}
      {isOpen && (
        <div style={{ padding: '0 24px 24px' }}>
          {/* Descrizione */}
          <p className="text-gray-600 text-sm leading-relaxed mb-6">{level.description}</p>

          {/* Didattica */}
          <div className="mb-8">
            <button onClick={() => toggleSection('didattica')} className="w-full flex items-center justify-between py-5 border-b border-gray-200">
              <span className="font-semibold text-sm text-gray-800">Didattica</span>
              <ChevronIcon open={openSection === 'didattica'} />
            </button>
            {openSection === 'didattica' && (
              <ul className="mt-3 space-y-2">
                {level.didattica.map((item, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: color }} />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Programma moduli */}
          <div className="mb-8">
            <button onClick={() => toggleSection('programma')} className="w-full flex items-center justify-between py-5 border-b border-gray-200">
              <span className="font-semibold text-sm text-gray-800">Percorso Formativo ({level.modules.length} Moduli)</span>
              <ChevronIcon open={openSection === 'programma'} />
            </button>
            {openSection === 'programma' && (
              <div className="mt-3 space-y-4">
                {level.modules.map((mod, i) => (
                  <ModuleItem key={i} module={mod} color={color} />
                ))}
              </div>
            )}
          </div>

          {/* Competenze */}
          <div className="mb-8">
            <button onClick={() => toggleSection('competenze')} className="w-full flex items-center justify-between py-5 border-b border-gray-200">
              <span className="font-semibold text-sm text-gray-800">Competenze Acquisite</span>
              <ChevronIcon open={openSection === 'competenze'} />
            </button>
            {openSection === 'competenze' && (
              <ul className="mt-3 space-y-2">
                {level.competenze.map((item, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                    <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color }} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Diplomi */}
          <div className="mb-8">
            <button onClick={() => toggleSection('diplomi')} className="w-full flex items-center justify-between py-5 border-b border-gray-200">
              <span className="font-semibold text-sm text-gray-800">Diplomi e Certificazioni</span>
              <ChevronIcon open={openSection === 'diplomi'} />
            </button>
            {openSection === 'diplomi' && (
              <ul className="mt-3 space-y-2">
                {level.diplomi.map((item, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                    <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color }} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* WhatsApp CTA */}
          <a
            href={`https://wa.me/393341989193?text=${encodeURIComponent('Salve, volevo chiedere delle informazioni')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-4 sm:py-3 rounded-lg text-white font-semibold text-sm transition-all hover:brightness-110"
            style={{ backgroundColor: '#25D366' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#fff">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Vorrei informazioni
          </a>
        </div>
      )}
    </div>
  );
}

function ModuleItem({ module, color }: { module: Module; color: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
        style={{ padding: '12px 16px' }}
      >
        <span className="text-sm font-medium text-gray-800">{module.title}</span>
        <ChevronIcon open={open} />
      </button>
      {open && (
        <ul className="space-y-2" style={{ padding: '0 16px 12px' }}>
          {module.topics.map((topic, i) => (
            <li key={i} className="text-xs text-gray-600 flex items-baseline gap-2">
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 relative top-[-1px]" style={{ backgroundColor: color }} />
              <span>{topic}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// ==================== MAIN ====================

export default function CorsiAccordion() {
  const [openCourse, setOpenCourse] = useState<string | null>(null);
  const [openLevel, setOpenLevel] = useState<string | null>(null);

  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-8 md:gap-10">
      {courses.map((course) => (
        <div key={course.discipline} className="mb-0">
          {/* Discipline header */}
          <button
            onClick={() => {
              setOpenCourse(openCourse === course.discipline ? null : course.discipline);
              setOpenLevel(null);
            }}
            className="w-full text-left rounded-2xl text-white transition-all duration-300 hover:scale-[1.01]"
            style={{
              background: course.gradient,
              padding: '24px 28px',
              boxShadow: openCourse === course.discipline
                ? `0 10px 30px ${course.color}40`
                : '0 4px 15px rgba(0,0,0,0.1)',
            }}
          >
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest opacity-70">Corso Istruttore</span>
                <h3 className="text-2xl md:text-3xl font-bold mt-1">{course.discipline}</h3>
                <p className="text-white/70 text-sm mt-2">{course.levels.length} livelli formativi — FAD Online</p>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  className={`w-6 h-6 transition-transform duration-300 ${openCourse === course.discipline ? 'rotate-180' : ''}`}
                  fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            </div>
          </button>

          {/* Livelli */}
          {openCourse === course.discipline && (
            <div className="mt-6 space-y-6">
              {course.levels.map((level) => (
                <LevelSection
                  key={level.name}
                  level={level}
                  color={course.color}
                  isOpen={openLevel === level.name}
                  onToggle={() => setOpenLevel(openLevel === level.name ? null : level.name)}
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
