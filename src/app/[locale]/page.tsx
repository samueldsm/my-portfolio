import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

import { PortfolioPage } from '@/components/portfolio/PortfolioPage'

interface PageProps {
  params: { locale: string }
}

export function generateStaticParams() {
  return [{ locale: 'es' }, { locale: 'en' }]
}

export function generateMetadata({ params }: PageProps): Metadata {
  if (params.locale === 'es') {
    return {
      title: 'Samuel Santiesteban | Desarrollo frontend',
      description:
        'Desarrollo frontend de aplicaciones y comercio electrónico con React, Next.js y TypeScript.'
    }
  }

  return {
    title: 'Samuel Santiesteban | Frontend development',
    description:
      'Frontend development for web applications and e-commerce with React, Next.js, and TypeScript.'
  }
}

export default function LocalizedPortfolioPage({ params }: PageProps) {
  if (params.locale !== 'es' && params.locale !== 'en') {
    notFound()
  }

  return <PortfolioPage locale={params.locale} />
}
