import { Source_Sans_3 } from 'next/font/google'
import React from 'react'
import { Toaster } from 'sonner'

import { Footer } from '@/components'
import '../globals.css'

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans-3',
  weight: ['400', '600', '700'],
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sourceSans3.className}>
      <body className="bg-base-white">
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
