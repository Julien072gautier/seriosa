import { getFormationMetadata } from '../../lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = getFormationMetadata('chinois-professionnel')

export default function ChinoisLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 