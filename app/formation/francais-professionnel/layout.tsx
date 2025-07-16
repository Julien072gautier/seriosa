import { getFormationMetadata } from '../../lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = getFormationMetadata('francais-professionnel')

export default function FrancaisLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 