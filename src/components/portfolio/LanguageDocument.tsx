'use client'

import { useEffect } from 'react'

interface LanguageDocumentProps {
  locale: 'en' | 'es'
}

export function LanguageDocument({ locale }: LanguageDocumentProps) {
  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  return null
}
