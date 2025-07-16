import { getFormationMetadata } from '../../lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = getFormationMetadata('langue-des-signes')

export default function LangueDesSignesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 