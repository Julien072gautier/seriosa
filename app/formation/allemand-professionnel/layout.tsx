import { getFormationMetadata } from '../../lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = getFormationMetadata('allemand-professionnel')

export default function AllemandLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 