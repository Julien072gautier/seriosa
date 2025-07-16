import { getFormationMetadata } from '../../lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = getFormationMetadata('italien-professionnel')

export default function ItalienLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 