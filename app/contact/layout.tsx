import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contactez-nous | FormaPro',
  description: 'Contactez FormaPro pour plus d\'informations sur nos formations professionnelles. Notre équipe vous accompagne dans votre projet de formation. Prenez rendez-vous ou envoyez-nous un message.',
  keywords: [
    'contact FormaPro',
    'information formation',
    'conseiller formation',
    'accompagnement',
    'rendez-vous formation',
    'renseignements CPF'
  ],
  openGraph: {
    title: 'Contactez-nous | FormaPro',
    description: 'Notre équipe vous accompagne dans votre projet de formation professionnelle. Contactez-nous pour plus d\'informations.',
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
