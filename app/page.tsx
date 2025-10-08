import type { Metadata } from 'next'
import HomePage from './components/HomePage'

export const metadata: Metadata = {
  title: 'Seriosa 2.0 - Cabinet de conseil RSE et développement durable | Certifié Qualiopi',
  description: 'Cabinet de conseil RSE et développement durable. Accompagnement des entreprises dans leur transition écologique et sociale. Audit, stratégie, formation RSE.',
  keywords: [
    'RSE',
    'responsabilité sociétale',
    'développement durable',
    'transition écologique',
    'audit RSE',
    'stratégie RSE',
    'formation RSE',
    'cabinet conseil RSE',
    'gouvernance RSE',
    'accompagnement RSE'
  ],
  openGraph: {
    title: 'Seriosa 2.0 - Cabinet de conseil RSE et développement durable',
    description: 'Cabinet de conseil RSE et développement durable. Accompagnement des entreprises dans leur transition écologique et sociale.',
    url: 'https://www.seriosa.fr',
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
    description: 'Cabinet de conseil RSE et développement durable. Accompagnement des entreprises dans leur transition écologique et sociale.',
    images: ['/logo.jpg'],
  },
  alternates: {
    canonical: 'https://www.seriosa.fr',
  },
}

export default function Page() {
  return <HomePage />
}