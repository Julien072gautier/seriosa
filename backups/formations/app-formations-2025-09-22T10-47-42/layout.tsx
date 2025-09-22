import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nos Formations Professionnelles | FormaPro by Accertif',
  description: 'Découvrez toutes nos formations professionnelles certifiées Qualiopi : IA, langues étrangères, communication, community management. Formations éligibles CPF.',
  keywords: [
    'formations professionnelles',
    'liste formations',
    'formation IA',
    'formation langues',
    'formation communication',
    'CPF',
    'Qualiopi'
  ],
  openGraph: {
    title: 'Nos Formations Professionnelles | FormaPro by Accertif',
    description: 'Découvrez toutes nos formations professionnelles certifiées Qualiopi : IA, langues étrangères, communication, community management.',
    type: 'website',
  },
}

export default function FormationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
