import { getFormationMetadata } from '../../lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = getFormationMetadata('ia-vente')

export default function IAVenteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 