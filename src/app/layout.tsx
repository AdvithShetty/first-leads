import type { Metadata } from 'next'
import { Archivo, Inter, Outfit, Plus_Jakarta_Sans, Quicksand, Rubik } from 'next/font/google'
import Script from 'next/script'
import NextTopLoader from 'nextjs-toploader'
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

const quicksand = Quicksand({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-quicksand',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'First Leads',
  description: 'Leads for Every Business',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <Script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
        <Script
          id='gtag-init'
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
								function gtag(){dataLayer.push(arguments);}
								gtag('js', new Date());

								gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', { page_path: window.location.pathname });`,
          }}
        />
      </head>
      <body
        className={`${archivo.variable} ${plusJakartaSans.variable} ${rubik.variable} ${outfit.variable} ${quicksand.variable} ${inter.variable}
      `}
      >
        <NextTopLoader color='#7363F3' showSpinner={false} initialPosition={0.4} />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
