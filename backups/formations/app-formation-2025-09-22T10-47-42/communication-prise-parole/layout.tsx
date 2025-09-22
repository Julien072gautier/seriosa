import { getFormationMetadata } from '../../lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = getFormationMetadata('communication-prise-parole')

export default function CommunicationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 