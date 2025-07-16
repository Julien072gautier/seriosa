import { getFormationMetadata } from '../../lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = getFormationMetadata('community-management')

export default function CommunityManagementLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 