import { getFormationMetadata } from '../../lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = getFormationMetadata('arabe-professionnel')

export default function ArabeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 