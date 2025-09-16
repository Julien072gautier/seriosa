'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Search, Filter, ArrowRight, Award, Clock, Tag, CreditCard, Hand } from 'lucide-react'

const formations = [
  {
    id: 'communication-p      return <div className="text-brand w-5 h-5 flex items-center justify-center">🎤</div>ise-parole',
    title: "Communiquer avec impact à l'oral en public",
    category: "Communication",
    level: "Débutant",
    duration: "21 heures",
    certification: "Pollen Conseil",
    price: "Sur-mesure",
    cpf: true,
    description: "Structurer votre pensée, maîtriser votre posture et votre voix, gérer les objections et vous adapter aux prises de parole en distanciel pour captiver et convaincre votre auditoire.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    icon: "MessageSquare",
    path: "/formation/communication-prise-parole"
  },
  {
    id: 'community-management',
    title: "Développer son activité avec le Community Management",
    category: "Digital",
    level: "Débutant",
    duration: "21 heures",
    certification: "Webmarketing & Com",
    price: "Sur-mesure",
    cpf: true,
    description: "Maîtrisez les stratégies et outils du Community Management pour développer votre présence en ligne, animer une communauté et accroître l'engagement sur les réseaux.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    icon: "Users",
    path: "/formation/community-management"
  },
  {
    id: 'ia-vente',
    title: "Intégrer l'IA conversationnelle dans le cycle de vente",
    category: "Intelligence Artificielle",
    level: "Débutant",
    duration: "21 heures",
    certification: "Online Sales Success",
    price: "Sur-mesure",
    cpf: true,
    description: "Optimisez vos performances commerciales en intégrant l'IA à votre cycle de vente. Apprenez à automatiser les interactions clients et à mesurer leur impact sur vos résultats.",
    image: "https://irp.cdn-website.com/e0ab763a/dms3rep/multi/Robot+repr%C3%A9sentant+lIA-90743829.png",
    icon: "Brain",
    path: "/formation/ia-vente"
  },
  {
    id: 'allemand-professionnel',
    title: "Allemand",
    category: "Langues",
    level: "Intermédiaire",
    duration: "30 heures",
    certification: "LILATE",
    price: "Sur-mesure",
    cpf: true,
    description: "Développez votre aisance en allemand et renforcez votre impact professionnel dans un contexte germanophone.",
    image: "https://irp.cdn-website.com/e0ab763a/dms3rep/multi/Allemand.png",
    icon: "🇩🇪",
    path: "/formation/allemand-professionnel"
  },
  {
    id: 'anglais-professionnel',
    title: "Anglais",
    category: "Langues",
    level: "Intermédiaire",
    duration: "30 heures",
    certification: "LILATE",
    price: "Sur-mesure",
    cpf: true,
    description: "Développez votre aisance en anglais et renforcez votre impact professionnel dans un contexte anglophone.",
    image: "https://irp.cdn-website.com/e0ab763a/dms3rep/multi/Anglais.png",
    icon: "🇬🇧",
    path: "/formation/anglais-professionnel"
  },
  {
    id: 'arabe-professionnel',
    title: "Arabe",
    category: "Langues",
    level: "Intermédiaire",
    duration: "30 heures",
    certification: "LILATE",
    price: "Sur-mesure",
    cpf: true,
    description: "Développez votre aisance en arabe et renforcez votre impact professionnel dans un contexte arabophone.",
    image: "https://irp.cdn-website.com/e0ab763a/dms3rep/multi/Arabe.png",
    icon: "🇸🇦",
    path: "/formation/arabe-professionnel"
  },
  {
    id: 'chinois-professionnel',
    title: "Chinois",
    category: "Langues",
    level: "Intermédiaire",
    duration: "30 heures",
    certification: "LILATE",
    price: "Sur-mesure",
    cpf: true,
    description: "Développez votre aisance en chinois et renforcez votre impact professionnel dans un contexte sinophone.",
    image: "https://irp.cdn-website.com/e0ab763a/dms3rep/multi/Chinois.png",
    icon: "🇨🇳",
    path: "/formation/chinois-professionnel"
  },
  {
    id: 'espagnol-professionnel',
    title: "Espagnol",
    category: "Langues",
    level: "Intermédiaire",
    duration: "30 heures",
    certification: "LILATE",
    price: "Sur-mesure",
    cpf: true,
    description: "Développez votre aisance en espagnol et renforcez votre impact professionnel dans un contexte hispanophone.",
    image: "https://irp.cdn-website.com/e0ab763a/dms3rep/multi/Espagnol.png",
    icon: "🇪🇸",
    path: "/formation/espagnol-professionnel"
  },
  {
    id: 'francais-fle',
    title: "Français",
    category: "Langues",
    level: "Débutant",
    duration: "30 heures",
    certification: "LILATE",
    price: "Sur-mesure",
    cpf: true,
    description: "Développez votre aisance en français et renforcez votre impact professionnel dans un contexte francophone.",
    image: "https://irp.cdn-website.com/e0ab763a/dms3rep/multi/Fran%C3%A7ais-61b9e88d.png",
    icon: "🇫🇷",
    path: "/formation/francais-professionnel"
  },
  {
    id: 'italien-professionnel',
    title: "Italien",
    category: "Langues",
    level: "Intermédiaire",
    duration: "30 heures",
    certification: "LILATE",
    price: "Sur-mesure",
    cpf: true,
    description: "Développez votre aisance en italien et renforcez votre impact professionnel dans un contexte italophone.",
    image: "https://irp.cdn-website.com/e0ab763a/dms3rep/multi/Italien.png",
    icon: "🇮🇹",
    path: "/formation/italien-professionnel"
  },
  {
    id: 'japonais-professionnel',
    title: "Japonais",
    category: "Langues",
    level: "Intermédiaire",
    duration: "30 heures",
    certification: "LILATE",
    price: "Sur-mesure",
    cpf: true,
    description: "Développez votre aisance en japonais et renforcez votre impact professionnel dans un contexte japonophone.",
    image: "https://irp.cdn-website.com/e0ab763a/dms3rep/multi/Japonais.png",
    icon: "🇯🇵",
    path: "/formation/japonais-professionnel"
  },
  {
    id: 'langue-des-signes',
    title: "Langue des signes",
    category: "Langues",
    level: "Débutant",
    duration: "30 heures",
    certification: "LILATE",
    price: "Sur-mesure",
    cpf: true,
    description: "Apprenez la Langue des Signes Française pour communiquer efficacement dans un contexte professionnel.",
    image: "https://irp.cdn-website.com/e0ab763a/dms3rep/multi/LSF.png",
    icon: "Hand",
    path: "/formation/langue-des-signes"
  },
  {
    id: 'portugais-professionnel',
    title: "Portugais",
    category: "Langues",
    level: "Intermédiaire",
    duration: "30 heures",
    certification: "LILATE",
    price: "Sur-mesure",
    cpf: true,
    description: "Développez votre aisance en portugais et renforcez votre impact professionnel dans un contexte lusophone.",
    image: "https://irp.cdn-website.com/e0ab763a/dms3rep/multi/Portugais.png",
    icon: "🇵🇹",
    path: "/formation/portugais-professionnel"
  },
  {
    id: 'russe-professionnel',
    title: "Russe",
    category: "Langues",
    level: "Intermédiaire",
    duration: "30 heures",
    certification: "LILATE",
    price: "Sur-mesure",
    cpf: true,
    description: "Développez votre aisance en russe et renforcez votre impact professionnel dans un contexte russophone.",
    image: "https://irp.cdn-website.com/e0ab763a/dms3rep/multi/Russe.png",
    icon: "🇷🇺",
    path: "/formation/russe-professionnel"
  }
]

const categories = [
  "Toutes les catégories",
  "Communication",
  "Intelligence Artificielle", 
  "Digital",
  "Langues"
]

export default function FormationsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Toutes les catégories')
  const [cpfFilter, setCpfFilter] = useState('all') // 'all', 'eligible', 'not-eligible'
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const filteredFormations = formations.filter(formation => {
    const matchesSearch = formation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          formation.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'Toutes les catégories' || formation.category === selectedCategory
    
    let matchesCpf = true
    if (cpfFilter === 'eligible') {
      matchesCpf = formation.cpf === true
    } else if (cpfFilter === 'not-eligible') {
      matchesCpf = formation.cpf === false
    }
    
    return matchesSearch && matchesCategory && matchesCpf
  })

  const getIcon = (icon: any) => {
    // Si ce n'est pas une chaîne de caractères, on utilise une icône par défaut
    if (typeof icon !== 'string') {
      return <div className="text-brand w-5 h-5 flex items-center justify-center">⭐</div>
    }

    if (icon === "MessageSquare") {
      return <div className="text-brand w-5 h-5 flex items-center justify-center">�</div>
    } else if (icon === "Brain") {
      return <div className="text-brand w-5 h-5 flex items-center justify-center">🧠</div>
    } else if (icon === "Users") {
      return <div className="text-brand w-5 h-5 flex items-center justify-center">👥</div>
    } else if (icon === "Globe") {
      return <div className="text-brand w-5 h-5 flex items-center justify-center">🌐</div>
    } else if (icon === "Hand") {
      return <div className="text-brand w-5 h-5 flex items-center justify-center">✋</div>
    } else if (icon.includes("🇩🇪") || icon.includes("🇬🇧") || icon.includes("🇸🇦") || icon.includes("🇨🇳") || 
               icon.includes("🇪🇸") || icon.includes("🇫🇷") || icon.includes("🇮🇹") || icon.includes("🇯🇵") || 
               icon.includes("🇵🇹") || icon.includes("🇷🇺")) {
      return <div className="text-brand w-5 h-5 flex items-center justify-center">{icon}</div>
    }
    
    return <div className="text-brand w-5 h-5 flex items-center justify-center">⭐</div>
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Nos Form'actions Certifiantes</h1>
          <p className="text-gray-600 text-lg mb-4">
            Découvrez notre catalogue de formations certifiantes conçues pour développer vos compétences professionnelles et booster votre carrière.
          </p>
          <div className="bg-brand-50 border border-brand-200 rounded-lg p-6 mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">✓</span>
              </div>
              <h3 className="text-lg font-semibold text-brand-800">Financement facilité</h3>
            </div>
            <p className="text-gray-700">
              Toutes nos formations sont éligibles au financement <strong>OPCO</strong>, <strong>FAF</strong>, <strong>France Travail</strong>. 
              La plupart sont également accessibles avec votre <strong>CPF</strong>.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-grow relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={20} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Rechercher une formation..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button
              className="md:hidden flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-md transition-colors"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <Filter size={18} />
              Filtres
            </button>
          </div>

          <div className="hidden md:flex gap-4">
            <div className="w-full">
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                Catégorie
              </label>
              <select
                id="category"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full">
              <label htmlFor="cpf-filter" className="block text-sm font-medium text-gray-700 mb-1">
                Éligibilité CPF
              </label>
              <select
                id="cpf-filter"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand"
                value={cpfFilter}
                onChange={(e) => setCpfFilter(e.target.value)}
              >
                <option value="all">Toutes les formations</option>
                <option value="eligible">Éligibles CPF</option>
                <option value="not-eligible">Non éligibles CPF</option>
              </select>
            </div>
          </div>

          {isFilterOpen && (
            <div className="md:hidden mt-4 space-y-4">
              <div>
                <label htmlFor="category-mobile" className="block text-sm font-medium text-gray-700 mb-1">
                  Catégorie
                </label>
                <select
                  id="category-mobile"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="cpf-filter-mobile" className="block text-sm font-medium text-gray-700 mb-1">
                  Éligibilité CPF
                </label>
                <select
                  id="cpf-filter-mobile"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand"
                  value={cpfFilter}
                  onChange={(e) => setCpfFilter(e.target.value)}
                >
                  <option value="all">Toutes les formations</option>
                  <option value="eligible">Éligibles CPF</option>
                  <option value="not-eligible">Non éligibles CPF</option>
                </select>
              </div>
            </div>
          )}
        </div>

        <div className="mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <p className="text-gray-600">
              {filteredFormations.length} formation{filteredFormations.length !== 1 ? 's' : ''} trouvée{filteredFormations.length !== 1 ? 's' : ''}
            </p>
            {(cpfFilter !== 'all' || selectedCategory !== 'Toutes les catégories' || searchTerm) && (
              <div className="flex flex-wrap gap-2">
                {cpfFilter === 'eligible' && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <CreditCard size={12} className="mr-1" />
                    Éligibles CPF
                  </span>
                )}
                {cpfFilter === 'not-eligible' && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    <CreditCard size={12} className="mr-1" />
                    Non éligibles CPF
                  </span>
                )}
                {selectedCategory !== 'Toutes les catégories' && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {selectedCategory}
                  </span>
                )}
                {searchTerm && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                    "{searchTerm}"
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Formations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFormations.map((formation) => (
            <div key={formation.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] transform flex flex-col h-full">
              <div className="h-48 overflow-hidden flex-shrink-0">
                <img 
                  src={formation.image} 
                  alt={formation.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow h-full">
                <div className="flex items-center mb-3">
                  <span className="bg-brand-100 text-brand-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {formation.category}
                  </span>
                </div>
                
                <div className="flex items-start mb-4">
                  <div className="bg-brand-100 p-2 rounded-full mr-3 flex-shrink-0">
                    {getIcon(formation.icon)}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{formation.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-5">
                  {formation.description}
                </p>
                
                <div className="flex flex-wrap items-center justify-between mb-5 border-t border-b border-gray-100 py-3">
                  <div className="flex items-center text-sm text-gray-600 mr-3 mb-2">
                    <Clock size={16} className="mr-2 text-brand-600" />
                    <span>{formation.duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mr-3 mb-2">
                    <Tag size={16} className="mr-2 text-brand-600" />
                    <span>{formation.price}</span>
                  </div>
                  <div className={`flex items-center text-sm font-medium mr-3 mb-2 ${
                    formation.cpf ? 'text-green-600' : 'text-red-600'
                  }`}>
                    <CreditCard size={16} className={`mr-2 ${
                      formation.cpf ? 'text-green-600' : 'text-red-600'
                    }`} />
                    <span>{formation.cpf ? 'Éligible CPF' : 'Non éligible CPF'}</span>
                  </div>
                </div>
                
                <div className="flex items-center text-sm text-gray-600 mb-5">
                  <Award size={16} className="mr-2 text-brand-600" />
                  <span>Certifié par {formation.certification}</span>
                </div>
                
                <div className="mt-auto">
                  <Link 
                    href={formation.path}
                    className="btn-primary btn-md btn-with-icon w-full"
                  >
                    Découvrir cette formation <ArrowRight size={14} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredFormations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">Aucune formation ne correspond à votre recherche.</p>
            <button 
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('Toutes les catégories')
                setCpfFilter('all')
              }}
              className="text-brand font-medium hover:text-brand-700"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">Besoin d&apos;une formation sur-mesure ?</h2>
            <p className="text-gray-600 mb-6">
              Notre équipe peut créer une Form&apos;action personnalisée selon vos besoins spécifiques.
            </p>
            <Link href="/contact" className="btn-primary btn-lg">
              Contactez-nous
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
