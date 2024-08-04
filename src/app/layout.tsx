import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

import { Providers } from './providers'
import LuminousPointerEffect from '@/components/common/Pointer/LuminousPointer/LuminousPointerEffect'

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: {
    default: 'Samuel Santiesteban',
    template: `%s - Samuel Santiesteban`
  },
  description:
    'Samuel Santiesteban is a software engineer who builds accessible products and digital experiences for the web.',
  icons: {
    icon: '/favicon.ico'
  }
}
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
  // maximumScale: 1,
  // userScalable: false
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0f172a]">
        <Providers>
          <main className={`${inter.className}`}>
            {children}
            <div className="luminous-pointer" />
            <LuminousPointerEffect />
          </main>
        </Providers>
      </body>
    </html>
  )
}
