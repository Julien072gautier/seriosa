import { getFormationMetadata } from '../../lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = getFormationMetadata('espagnol-professionnel')

export default function EspagnolLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 