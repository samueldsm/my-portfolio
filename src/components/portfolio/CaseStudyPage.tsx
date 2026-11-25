import Link from 'next/link'

import { LanguageDocument } from './LanguageDocument'

type Locale = 'en' | 'es'

interface CaseStudyPageProps {
  locale: Locale
}

const linkedInUrl =
  'https://www.linkedin.com/in/samuel-david-santiesteban-macias/'

const copy = {
  es: {
    back: 'Volver al portafolio',
    language: 'EN',
    languageHref: '/en/case-studies/portfolio',
    eyebrow: 'Caso de estudio · Portafolio',
    title: 'Un portafolio que explica el trabajo antes de pedir una conversación.',
    intro:
      'La versión anterior reunía experiencia y proyectos en una sola página. Esta iteración reorganiza esa información para que alguien que llegue desde una candidatura pueda entender el perfil, revisar un ejemplo y encontrar cómo contactar.',
    sections: [
      ['El problema', 'La página anterior mostraba proyectos antiguos y una presentación genérica. No ofrecía un caso enlazable ni una ruta clara desde un enlace compartido hasta el contacto.'],
      ['La decisión', 'Se crearon rutas por idioma para que cada versión tenga una URL directa. La portada concentra el perfil, el valor profesional y un único caso inicial. LinkedIn queda disponible como contacto visible en la portada y en este caso.'],
      ['Cómo se construyó', 'La estructura usa rutas estáticas de Next.js y contenido tipado para español e inglés. El diseño prioriza jerarquía de lectura, enlaces con texto y un recorrido usable en pantalla estrecha.'],
      ['Cómo se verifica', 'La comprobación cubre compilación, apertura de las rutas directas, navegación con teclado, ausencia de desbordamiento horizontal en móvil y el recorrido portada → caso → contacto. Los resultados de cada entrega se registran junto con el cambio.']
    ],
    evidence: 'Evidencia de esta iteración',
    evidenceItems: ['La compilación de producción de Next.js finalizó correctamente.', 'La portada anterior se revisó en escritorio y móvil para definir el alcance de esta iteración.', 'El recorrido directo se verificó con Playwright antes de esta entrega.'],
    nextTitle: 'Siguiente mejora',
    nextText: 'Un caso de una integración profesional se añadirá cuando exista autorización para publicar contexto, contribución y evidencia.',
    contact: 'Contactar por LinkedIn'
  },
  en: {
    back: 'Back to portfolio',
    language: 'ES',
    languageHref: '/es/casos/portafolio',
    eyebrow: 'Case study · Portfolio',
    title: 'A portfolio that explains the work before asking for a conversation.',
    intro:
      'The previous version grouped experience and projects on one page. This iteration reorganizes that information so someone arriving from an application can understand the profile, inspect an example, and find a contact path.',
    sections: [
      ['The problem', 'The previous page showed older projects and a general introduction. It did not offer a shareable case study or a clear path from a shared link to contact.'],
      ['The decision', 'Language routes provide a direct URL for each version. The homepage focuses on the professional profile, the value offered, and one initial case. LinkedIn is a visible contact path on the homepage and in this case study.'],
      ['How it is built', 'The structure uses static Next.js routes and typed content for Spanish and English. The design prioritizes reading hierarchy, text-labelled links, and a journey that works on narrow screens.'],
      ['How it is verified', 'Verification covers production builds, direct route loading, keyboard navigation, no horizontal overflow on mobile, and the homepage → case study → contact journey. Each delivery records its results with the change.']
    ],
    evidence: 'Evidence from this iteration',
    evidenceItems: ['The Next.js production build completed successfully.', 'The prior homepage was reviewed on desktop and mobile to define this iteration.', 'The direct journey was verified with Playwright before this delivery.'],
    nextTitle: 'Next improvement',
    nextText: 'A professional integration case study will be added when there is approval to publish its context, contribution, and evidence.',
    contact: 'Contact on LinkedIn'
  }
} as const

export function CaseStudyPage({ locale }: CaseStudyPageProps) {
  const content = copy[locale]

  return (
    <>
      <LanguageDocument locale={locale} />
      <main className="min-h-screen">
        <article className="mx-auto max-w-3xl px-6 py-8 sm:px-10 sm:py-12">
          <header className="flex items-center justify-between">
            <Link href={`/${locale}`} className="text-sm font-semibold text-sky-300 transition hover:text-sky-200">← {content.back}</Link>
            <Link href={content.languageHref} lang={locale === 'es' ? 'en' : 'es'} className="rounded-full border border-slate-600 px-3 py-1.5 text-sm font-semibold text-slate-100 transition hover:border-sky-300">{content.language}</Link>
          </header>
          <section className="py-20">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">{content.eyebrow}</p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">{content.title}</h1>
            <p className="mt-8 text-xl leading-9 text-slate-300">{content.intro}</p>
          </section>
          <div className="space-y-12">
            {content.sections.map(([title, text]) => (
              <section key={title}>
                <h2 className="text-2xl font-semibold text-white">{title}</h2>
                <p className="mt-4 text-lg leading-8 text-slate-300">{text}</p>
              </section>
            ))}
            <section className="rounded-2xl border border-slate-700 bg-slate-900/65 p-7">
              <h2 className="text-2xl font-semibold text-white">{content.evidence}</h2>
              <ul className="mt-5 space-y-3 text-slate-300">
                {content.evidenceItems.map(item => <li key={item} className="flex gap-3"><span aria-hidden="true" className="text-sky-300">•</span><span>{item}</span></li>)}
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-white">{content.nextTitle}</h2>
              <p className="mt-4 text-lg leading-8 text-slate-300">{content.nextText}</p>
            </section>
          </div>
          <aside className="mt-16 rounded-2xl bg-sky-300 p-8 text-slate-950">
            <p className="text-xl font-semibold">{locale === 'es' ? '¿Quieres hablar sobre una aplicación o una integración?' : 'Want to discuss an application or integration?'}</p>
            <a href={linkedInUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex rounded-lg bg-slate-950 px-5 py-3 font-semibold text-white transition hover:bg-slate-800">{content.contact}</a>
          </aside>
        </article>
      </main>
    </>
  )
}
