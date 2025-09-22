import { getFormationMetadata } from '../../lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = getFormationMetadata('portugais-professionnel')

export default function PortugaisLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 