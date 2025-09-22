import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import FormationPage from '../../components/FormationPage'
import formationsConfig from '../../lib/config/formations'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  // Générer seulement les slugs des formations valides
  return formationsConfig.formations.map((formation) => ({
    slug: formation.slug.replace('formation-', '')
  }))
}

// Fonction pour vérifier si le slug est valide
function isValidFormationSlug(slug: string): boolean {
  // Exclure les fichiers système et extensions
  if (slug.includes('.') || slug.startsWith('_') || slug.startsWith('api/')) {
    return false
  }
  
  // Vérifier que le slug existe dans nos formations
  return formationsConfig.formations.some((formation) => formation.slug.replace('formation-', '') === slug)
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const formation = formationsConfig.formations.find(
    (formation) => formation.slug.replace('formation-', '') === slug
  )

  if (!formation) {
    return {
      title: 'Formation non trouvée',
    }
  }

  return {
    title: `${formation.title} - FORMAPRO by ACCERTIF`,
    description: formation.shortDescription,
    openGraph: {
      title: formation.title,
      description: formation.shortDescription,
      images: [formation.image],
    },
  }
}

export default async function FormationDetailPage({ params }: Props) {
  const { slug } = await params
  
  // Vérifier si le slug est valide avant de chercher la formation
  if (!isValidFormationSlug(slug)) {
    notFound()
  }
  
  const formation = formationsConfig.formations.find(
    (formation) => formation.slug.replace('formation-', '') === slug
  )

  if (!formation) {
    notFound()
  }

  return <FormationPage />
}