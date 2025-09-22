import { getFormationMetadata } from '../../lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = getFormationMetadata('russe-professionnel')

export default function RusseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 