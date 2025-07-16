import type { Metadata } from 'next'
import HomePage from './components/HomePage'

export const metadata: Metadata = {
  title: 'FormaPro by Accertif - Formation Professionnelle de Qualité | Certifiée Qualiopi',
  description: 'Découvrez nos formations professionnelles certifiées Qualiopi : IA et vente, communication, community management, langues étrangères. Formations éligibles CPF avec un accompagnement personnalisé.',
  keywords: [
    'formation professionnelle',
    'CPF',
    'Qualiopi',
    'intelligence artificielle',
    'formation IA vente',
    'communication professionnelle',
    'community management',
    'langues étrangères',
    'anglais professionnel',
    'accompagnement formation'
  ],
  openGraph: {
    title: 'FormaPro by Accertif - Formation Professionnelle Certifiée Qualiopi',
    description: 'Découvrez nos formations professionnelles certifiées Qualiopi dans l\'IA, la communication, les langues. Éligibles CPF.',
    url: 'https://www.formaprobyaccertif.fr',
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
    title: 'FormaPro by Accertif - Formation Professionnelle Certifiée Qualiopi',
    description: 'Découvrez nos formations professionnelles certifiées Qualiopi dans l\'IA, la communication, les langues. Éligibles CPF.',
    images: ['/images/logos/formapro-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.formaprobyaccertif.fr',
  },
}

export default function Page() {
  return <HomePage />
}