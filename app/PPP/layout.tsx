import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Formation Prise de Parole en Public | Développez votre impact à l\'oral',
  description: 'Maîtrisez l\'art de la prise de parole en public et gagnez en impact lors de vos interventions grâce à notre formation certifiante de 21h.',
  robots: 'noindex, nofollow',
  openGraph: {
    title: 'Formation Prise de Parole en Public | Développez votre impact à l\'oral',
    description: 'Maîtrisez l\'art de la prise de parole en public et gagnez en impact lors de vos interventions grâce à notre formation certifiante de 21h.',
    type: 'website',
  },
}

export default function PPPLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
