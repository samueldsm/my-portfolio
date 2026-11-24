import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { defaultUrl } from '@/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: {
    default: 'Samuel Santiesteban',
    template: `%s - Samuel Santiesteban`
  },
  description:
    'Samuel Santiesteban builds web applications and e-commerce experiences with React, Next.js, and TypeScript.',
  icons: {
    icon: '/favicon.ico'
  },
  keywords: 'frontend developer, react, next.js, portfolio, web development',
  robots: 'index, follow'
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#08111f] text-slate-100`}>
        {children}
      </body>
    </html>
  )
}
