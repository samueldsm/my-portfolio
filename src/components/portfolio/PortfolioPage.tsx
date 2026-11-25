import Link from 'next/link'

import { LanguageDocument } from './LanguageDocument'

type Locale = 'en' | 'es'

interface PortfolioPageProps {
  locale: Locale
}

const linkedInUrl =
  'https://www.linkedin.com/in/samuel-david-santiesteban-macias/'
const githubUrl = 'https://github.com/samueldsm/'

const copy = {
  es: {
    language: 'EN',
    languageHref: '/en',
    navigation: [
      ['Experiencia', '#experiencia'],
      ['Caso de estudio', '#caso'],
      ['Contacto', '#contacto']
    ],
    eyebrow: 'Desarrollo frontend',
    title: 'Aplicaciones y comercio electrónico hechos para avanzar.',
    intro:
      'Soy Samuel Santiesteban, ingeniero informático y desarrollador frontend. Construyo y mantengo aplicaciones y tiendas en línea con React, Next.js y TypeScript.',
    collaboration:
      'Integro servicios y colaboro con Producto, Diseño, Backend y QA para llevar cambios claros, comprobables y mantenibles a producción.',
    primaryCta: 'Ver caso de estudio',
    primaryHref: '/es/casos/portafolio',
    secondaryCta: 'Contactar por LinkedIn',
    evidenceTitle: 'Cómo aporto a un equipo',
    evidence: [
      ['Interfaces complejas', 'Componentes, estados y recorridos pensados para personas reales.'],
      ['Integraciones', 'Conexiones entre la interfaz, APIs y servicios del producto.'],
      ['Calidad de entrega', 'Cambios revisables, pruebas de navegación y comunicación entre disciplinas.']
    ],
    experienceTitle: 'Experiencia',
    experienceRole: 'Desarrollador frontend',
    experienceCompany: 'Empresa de desarrollo web',
    experienceText:
      'Construyo y mantengo aplicaciones y tiendas en línea. Mi trabajo combina interfaces, integraciones y colaboración con equipos de Producto, Diseño, Backend y QA.',
    caseKicker: 'Caso de estudio',
    caseTitle: 'Renovar un portafolio para una candidatura técnica',
    caseText:
      'Este sitio es el primer caso público. Convierte una página única en un recorrido bilingüe con un enlace compartible, contexto profesional y un contacto visible.',
    caseCta: 'Leer el caso completo',
    caseHref: '/es/casos/portafolio',
    contactTitle: 'Hablemos de tu próximo producto.',
    contactText:
      'Estoy disponible para conversar sobre desarrollo frontend, aplicaciones web, comercio electrónico e integraciones.',
    contactCta: 'Escribir por LinkedIn',
    footer: 'Construido con Next.js, React y TypeScript.'
  },
  en: {
    language: 'ES',
    languageHref: '/es',
    navigation: [
      ['Experience', '#experience'],
      ['Case study', '#case-study'],
      ['Contact', '#contact']
    ],
    eyebrow: 'Frontend development',
    title: 'Web applications and e-commerce built to move forward.',
    intro:
      'I am Samuel Santiesteban, a computer engineer and frontend developer. I build and maintain web applications and online stores with React, Next.js, and TypeScript.',
    collaboration:
      'I integrate services and collaborate with product, design, backend, and QA teams to bring clear, testable, maintainable changes into production.',
    primaryCta: 'Read the case study',
    primaryHref: '/en/case-studies/portfolio',
    secondaryCta: 'Contact me on LinkedIn',
    evidenceTitle: 'How I contribute to a team',
    evidence: [
      ['Complex interfaces', 'Components, states, and journeys designed around real people.'],
      ['Integrations', 'Connections between the interface, APIs, and product services.'],
      ['Delivery quality', 'Reviewable changes, navigation testing, and collaboration across disciplines.']
    ],
    experienceTitle: 'Experience',
    experienceRole: 'Frontend developer',
    experienceCompany: 'Web development company',
    experienceText:
      'I build and maintain web applications and online stores. My work combines interfaces, integrations, and collaboration with product, design, backend, and QA teams.',
    caseKicker: 'Case study',
    caseTitle: 'Renewing a portfolio for a technical application',
    caseText:
      'This site is the first public case study. It turns a single page into a bilingual journey with a shareable link, professional context, and visible contact path.',
    caseCta: 'Read the full case study',
    caseHref: '/en/case-studies/portfolio',
    contactTitle: 'Let’s discuss your next product.',
    contactText:
      'I am available to discuss frontend development, web applications, e-commerce, and integrations.',
    contactCta: 'Write on LinkedIn',
    footer: 'Built with Next.js, React, and TypeScript.'
  }
} as const

export function PortfolioPage({ locale }: PortfolioPageProps) {
  const content = copy[locale]
  const sectionIds = locale === 'es'
    ? { experience: 'experiencia', caseStudy: 'caso', contact: 'contacto' }
    : { experience: 'experience', caseStudy: 'case-study', contact: 'contact' }

  return (
    <>
      <LanguageDocument locale={locale} />
      <main className="overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 py-6 sm:px-10 lg:px-12">
          <header className="flex items-center justify-between border-b border-slate-700/70 pb-5">
            <Link href={`/${locale}`} className="font-semibold tracking-tight text-white">
              Samuel Santiesteban
            </Link>
            <nav aria-label={locale === 'es' ? 'Navegación principal' : 'Main navigation'} className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
              {content.navigation.map(([label, href]) => (
                <Link key={href} href={href} className="transition hover:text-sky-300">
                  {label}
                </Link>
              ))}
            </nav>
            <Link href={content.languageHref} lang={locale === 'es' ? 'en' : 'es'} className="rounded-full border border-slate-600 px-3 py-1.5 text-sm font-semibold text-slate-100 transition hover:border-sky-300 hover:text-sky-200">
              {content.language}
            </Link>
          </header>

          <section className="grid gap-12 py-20 lg:grid-cols-[1.35fr_0.65fr] lg:py-28">
            <div>
              <p className="mb-5 font-mono text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">{content.eyebrow}</p>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">{content.title}</h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">{content.intro}</p>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-400">{content.collaboration}</p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href={content.primaryHref} className="rounded-lg bg-sky-300 px-5 py-3 text-center font-semibold text-slate-950 transition hover:bg-sky-200">
                  {content.primaryCta}
                </Link>
                <a href={linkedInUrl} target="_blank" rel="noreferrer" className="rounded-lg border border-slate-500 px-5 py-3 text-center font-semibold text-slate-100 transition hover:border-sky-300 hover:text-sky-200">
                  {content.secondaryCta}
                </a>
              </div>
            </div>
            <aside className="self-end rounded-2xl border border-slate-700 bg-slate-900/70 p-7 shadow-2xl shadow-sky-950/30">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-sky-300">React · Next.js · TypeScript</p>
              <p className="mt-5 text-2xl font-medium leading-8 text-white">{locale === 'es' ? 'Producto, calidad y colaboración en cada entrega.' : 'Product, quality, and collaboration in every delivery.'}</p>
            </aside>
          </section>

          <section aria-labelledby="value-heading" className="border-y border-slate-700/70 py-16">
            <h2 id="value-heading" className="text-2xl font-semibold text-white">{content.evidenceTitle}</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {content.evidence.map(([title, text]) => (
                <article key={title} className="rounded-xl border border-slate-700 bg-slate-900/45 p-6">
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-400">{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section id={sectionIds.experience} aria-labelledby="experience-heading" className="grid gap-8 py-20 lg:grid-cols-[0.45fr_1fr]">
            <h2 id="experience-heading" className="text-2xl font-semibold text-white">{content.experienceTitle}</h2>
            <article className="border-l-2 border-sky-300 pl-6">
              <p className="font-mono text-sm text-sky-300">2023 — {locale === 'es' ? 'actualidad' : 'present'}</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{content.experienceRole}</h3>
              <p className="mt-1 text-slate-400">{content.experienceCompany}</p>
              <p className="mt-4 max-w-2xl leading-7 text-slate-300">{content.experienceText}</p>
            </article>
          </section>

          <section id={sectionIds.caseStudy} aria-labelledby="case-heading" className="rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-950 p-8 sm:p-12">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">{content.caseKicker}</p>
            <h2 id="case-heading" className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">{content.caseTitle}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{content.caseText}</p>
            <Link href={content.caseHref} className="mt-8 inline-flex rounded-lg bg-white px-5 py-3 font-semibold text-slate-950 transition hover:bg-sky-200">
              {content.caseCta}
            </Link>
          </section>

          <section id={sectionIds.contact} aria-labelledby="contact-heading" className="py-20 text-center">
            <h2 id="contact-heading" className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{content.contactTitle}</h2>
            <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-300">{content.contactText}</p>
            <a href={linkedInUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-lg bg-sky-300 px-5 py-3 font-semibold text-slate-950 transition hover:bg-sky-200">
              {content.contactCta}
            </a>
          </section>

          <footer className="flex flex-col gap-4 border-t border-slate-700/70 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <p>{content.footer}</p>
            <a href={githubUrl} target="_blank" rel="noreferrer" className="transition hover:text-sky-200">GitHub</a>
          </footer>
        </div>
      </main>
    </>
  )
}
