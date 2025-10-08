import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { GoogleTagManager } from './components/GoogleTagManager'
import { JsonLd } from './components/JsonLd'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import CookieBanner from './components/CookieBanner'
import ConsentInitializer from './components/ConsentInitializer'
import { ConsentProvider } from './hooks/useConsent'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Seriosa 2.0 - Cabinet de conseil RSE et développement durable',
    template: '%s | Seriosa 2.0'
  },
  description: 'Seriosa 2.0 est un cabinet de conseil spécialisé en RSE (Responsabilité Sociétale des Entreprises) et développement durable. Nous accompagnons les entreprises dans leur transition écologique et sociale.',
  keywords: [
    'Seriosa 2.0',
    'RSE',
    'responsabilité sociétale',
    'développement durable',
    'conseil RSE',
    'transition écologique',
    'cabinet de conseil',
    'audit RSE',
    'stratégie RSE',
    'gouvernance RSE',
    'bilan carbone',
    'performance durable',
    'entreprise responsable'
  ],
  authors: [{ name: 'Seriosa 2.0' }],
  creator: 'Seriosa 2.0',
  publisher: 'Seriosa 2.0',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.seriosa.fr/'),
  alternates: {
    canonical: 'https://www.seriosa.fr/',
  },
  openGraph: {
    title: 'Seriosa 2.0 - Cabinet de conseil RSE et développement durable',
    description: 'Cabinet de conseil spécialisé en RSE, Seriosa 2.0 accompagne les entreprises dans leur transition écologique et sociale.',
    url: 'https://www.seriosa.fr/',
    siteName: 'Seriosa 2.0',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Seriosa 2.0 - Cabinet de conseil RSE',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seriosa 2.0 - Cabinet de conseil RSE et développement durable',
    description: 'Découvrez nos services de conseil RSE. Seriosa 2.0 accompagne les entreprises dans leur transition écologique et sociale.',
    images: ['/logo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/logo.jpg" />
        <meta name="theme-color" content="#87B946" />
        <meta name="description" content="Seriosa 2.0 est un cabinet de conseil spécialisé en RSE et développement durable. Nous accompagnons les entreprises dans leur transition écologique et sociale." />
        <meta name="author" content="Seriosa 2.0" />
        <meta name="keywords" content="RSE, responsabilité sociétale, développement durable, conseil RSE, transition écologique, cabinet de conseil, audit RSE, stratégie RSE, gouvernance RSE, bilan carbone, performance durable, entreprise responsable" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.seriosa.fr/" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta property="og:title" content="Seriosa 2.0 - Cabinet de conseil RSE et développement durable" />
        <meta property="og:description" content="Cabinet de conseil spécialisé en RSE, Seriosa 2.0 accompagne les entreprises dans leur transition écologique et sociale." />
        <meta property="og:url" content="https://www.seriosa.fr/" />
        <meta property="og:image" content="/logo.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Seriosa 2.0 - Cabinet de conseil RSE" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Seriosa 2.0 - Cabinet de conseil RSE" />
        <meta name="twitter:description" content="Seriosa 2.0, cabinet de conseil RSE, accompagne les entreprises dans leur transition écologique et sociale. Audit, stratégie, gouvernance RSE." />
        <meta name="twitter:image" content="/logo.jpg" />
        <JsonLd />
      </head>
      <body className={inter.className}>
        <ConsentProvider>
          <ConsentInitializer />
          <Header />
          <main>
            {children}
          </main>
          <Footer />
          <ScrollToTop />
          <CookieBanner />
          <GoogleTagManager />
        </ConsentProvider>
      </body>
    </html>
  )
}
