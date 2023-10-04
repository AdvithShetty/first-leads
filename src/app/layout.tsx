import type { Metadata } from 'next'
import { Archivo, Outfit, Plus_Jakarta_Sans, Rubik } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo',
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta-sans',
})

const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rubik',
})

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: 'First Lead',
  description: 'Leads for Every Business',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body
        className={`${archivo.variable} ${plusJakartaSans.variable} ${rubik.variable} ${outfit.variable}
      `}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
