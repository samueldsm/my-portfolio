import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { defaultUrl } from '@/utils'
import LuminousPointer from '@/components/common/Pointer/LuminousPointer/LuminousPointer'
import Navbar from '@/components/ui/Navbar/Navbar'
import Footer from '@/components/ui/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

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
      <body className="bg-[#0f172a]">
        <Providers>
          <div className=" text-gray-300 min-h-screen p-0 mx-auto max-w-screen-xl flex flex-col lg:flex-row">
            <Navbar />
            <main
              className={`${inter.className} w-full lg:w-1/2 ml-auto p-3 md:p-8 lg:py-24`}
            >
              {children}
              <Footer />
              <LuminousPointer />
            </main>
          </div>
        </Providers>
      </body>
    </html>
  )
}
