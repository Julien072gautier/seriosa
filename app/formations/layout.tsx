import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nos Formations | Seriosa 2.0',
  description: 'Découvrez toutes nos formations : audit, stratégie, transition écologique, développement social, formation. Organisme de formation certifié Qualiopi.',
  keywords: [
    'services RSE',
    'liste services RSE',
    'audit RSE',
    'stratégie RSE',
    'transition écologique',
    'développement social',
    'Qualiopi'
  ],
  openGraph: {
    title: 'Nos Formations | Seriosa 2.0',
    description: 'Découvrez toutes nos formations : audit, stratégie, transition écologique, développement social, formation.',
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
