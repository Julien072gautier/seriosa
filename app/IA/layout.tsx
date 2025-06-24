import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Formation IA & Vente | Boostez votre productivité avec l\'IA',
  description: 'Découvrez comment l\'intelligence artificielle peut révolutionner votre prospection et votre closing en seulement 16h de formation.',
  robots: 'noindex, nofollow',
  openGraph: {
    title: 'Formation IA & Vente | Boostez votre productivité avec l\'IA',
    description: 'Découvrez comment l\'intelligence artificielle peut révolutionner votre prospection et votre closing en seulement 16h de formation.',
    type: 'website',
  },
}

export default function IALayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
