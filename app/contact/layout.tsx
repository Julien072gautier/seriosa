import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contactez-nous | Seriosa 2.0',
  description: 'Contactez Seriosa 2.0 pour plus d\'informations sur nos services RSE. Notre équipe vous accompagne dans votre transition écologique et sociale. Prenez rendez-vous ou envoyez-nous un message.',
  keywords: [
    'contact Seriosa',
    'information RSE',
    'conseiller RSE',
    'accompagnement RSE',
    'rendez-vous RSE',
    'renseignements RSE'
  ],
  openGraph: {
    title: 'Contactez-nous | Seriosa 2.0',
    description: 'Notre équipe vous accompagne dans votre transition écologique et sociale. Contactez-nous pour plus d\'informations.',
    type: 'website',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
