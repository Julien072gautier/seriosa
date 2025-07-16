import { getFormationMetadata } from '../../lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = getFormationMetadata('anglais-professionnel')

export default function AnglaisLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 