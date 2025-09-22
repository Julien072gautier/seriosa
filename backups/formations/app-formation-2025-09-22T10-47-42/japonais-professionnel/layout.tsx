import { getFormationMetadata } from '../../lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = getFormationMetadata('japonais-professionnel')

export default function JaponaisLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 