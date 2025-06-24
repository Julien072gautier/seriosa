import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { GoogleTagManager } from './components/GoogleTagManager'
import { JsonLd } from './components/JsonLd'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'FormaPro - Formation Professionnelle de Qualité | Certifiée Qualiopi',
    template: '%s | FormaPro'
  },
  description: 'FormaPro propose des formations professionnelles certifiées Qualiopi dans de nombreux domaines : IA, langues étrangères, communication, community management. Formations éligibles CPF.',
  keywords: [
    'formation professionnelle',
    'CPF',
    'Qualiopi',
    'intelligence artificielle',
    'langues étrangères',
    'communication',
    'community management',
    'anglais professionnel',
    'français professionnel',
    'formation IA vente'
  ],
  authors: [{ name: 'FormaPro' }],
  creator: 'FormaPro',
  publisher: 'FormaPro',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.formapro.fr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'FormaPro - Formation Professionnelle de Qualité',
    description: 'FormaPro propose des formations professionnelles certifiées Qualiopi dans de nombreux domaines. Formations éligibles CPF.',
    url: 'https://www.formapro.fr',
    siteName: 'FormaPro',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/images/logos/formapro-og.jpg',
        width: 1200,
        height: 630,
        alt: 'FormaPro - Formation Professionnelle',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FormaPro - Formation Professionnelle de Qualité',
    description: 'FormaPro propose des formations professionnelles certifiées Qualiopi dans de nombreux domaines. Formations éligibles CPF.',
    images: ['/images/logos/formapro-og.jpg'],
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
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <meta name="theme-color" content="#1e40af" />
        <JsonLd />
      </head>
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <ScrollToTop />
        <GoogleTagManager />
      </body>
    </html>
  )
}
