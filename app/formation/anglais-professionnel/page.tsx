'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Clock, Award, Users, CheckCircle, ArrowRight, Calendar, Phone, X, Tag, MessageSquare, Target, Brain, Star, Globe, BookOpen } from 'lucide-react'
import { FormationJsonLd } from '../../components/JsonLd'
import ContactForm from '../../components/ContactForm'

function FormationAnglaisPage() {
  const [selectedModality, setSelectedModality] = useState<'individuel' | 'collectif'>('individuel')
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false)
  const [isParcoursModalOpen, setIsParcoursModalOpen] = useState(false)

  const prices = {
    individuel: { price: "1 950€*", label: "Éligible CPF" },
    collectif: { price: "1 250€*", label: "Éligible CPF" }
  }

  return (
    <>
      <FormationJsonLd formationSlug="anglais-professionnel" />
      <ContactForm 
        formationName="Anglais Professionnel"
        isOpen={isInfoModalOpen}
        onClose={() => setIsInfoModalOpen(false)}
        actionType="information"
      />
      <ContactForm 
        formationName="Anglais Professionnel"
        isOpen={isParcoursModalOpen}
        onClose={() => setIsParcoursModalOpen(false)}
        actionType="parcours"
      />
      <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-600 to-brand text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-10 p-2 rounded-md inline-block mb-4">
              <span className="text-white font-medium">Langues</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Anglais
            </h1>
            <p className="text-xl mb-8">
              Développez des automatismes de communication en anglais et renforcez votre impact professionnel à l&apos;international.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setIsInfoModalOpen(true)}
                className="bg-white text-brand-700 hover:bg-gray-100 font-medium py-3 px-6 rounded-md transition-colors flex items-center justify-center"
              >
                <MessageSquare size={18} className="mr-2" />
                Demander plus d&apos;informations
              </button>
              <a 
                href="tel:0975856510"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-700 font-medium py-3 px-6 rounded-md transition-colors inline-flex items-center justify-center"
              >
                <Phone size={18} className="mr-2" />
                09 75 85 65 10
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Formation Details */}
          <section className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src="https://irp.cdn-website.com/e0ab763a/dms3rep/multi/Anglais.png"
                  alt="Formation Anglais Professionnel - Développez vos compétences linguistiques pour communiquer efficacement en anglais dans un contexte professionnel" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <h2 className="text-2xl font-bold mb-6">Détails de la formation</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Award className="text-brand mr-3 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-medium">Certification</p>
                      <p className="text-gray-600">LILATE - RS6118</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="text-brand mr-3 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-medium">Durée</p>
                      <p className="text-gray-600">30 heures</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="text-brand mr-3 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-medium">Modalités</p>
                      <p className="text-gray-600">Présentiel, distanciel ou mixte</p>
                    </div>
                  </div>
                  <div className="flex gap-4 mb-4">
                    <button 
                      onClick={() => setSelectedModality('individuel')} 
                      className={`px-4 py-2 border rounded-md ${selectedModality === 'individuel' ? 'bg-brand text-white' : 'bg-gray-100'}`}
                    >
                      Individuel
                    </button>
                    <button 
                      onClick={() => setSelectedModality('collectif')} 
                      className={`px-4 py-2 border rounded-md ${selectedModality === 'collectif' ? 'bg-brand text-white' : 'bg-gray-100'}`}
                    >
                      Collectif
                    </button>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center mb-2">
                      <Tag size={16} className="mr-2 text-brand-600" />
                      <span className="text-2xl font-bold text-gray-800">{prices[selectedModality].price}</span>
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded ml-3">
                        {prices[selectedModality].label}
                      </span>
                    </div>
                   <br></br><p className="text-gray-600 text-sm">*Les tarifs indiqués couvrent une formation mixte alliant 20% d&apos;e-learning et 80% de Form&apos;action. <br></br><br></br>Cette formation professionnelle de par son caractère certifiant peut être prise en charge par le CPF. Toute action ne rentrant pas dans le cadre de l&apos;article L6313-1 du code du travail ne rentre pas dans ce dispositif de prise en charge </p><br></br>
                    <Link 
                      href="/demande-formation"
                      className="inline-flex items-center justify-center px-4 py-2 bg-brand text-white rounded-md hover:bg-brand-600 transition-colors"
                    >
                      <Target size={18} className="mr-2" />
                      Créer la form&apos;action qui vous ressemble
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pourquoi cette formation */}
          <section className="mb-12">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">Pourquoi suivre cette formation ?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-start mb-4">
                    <div className="bg-brand-100 p-3 rounded-full mr-4">
                      <Globe className="text-brand" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Ouverture internationale</h3>
                      <p className="text-gray-600">Accédez à de nouvelles opportunités professionnelles à l&apos;international</p>
                    </div>
                  </div>
                  <div className="flex items-start mb-4">
                    <div className="bg-brand-100 p-3 rounded-full mr-4">
                      <Target className="text-brand" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Efficacité professionnelle</h3>
                      <p className="text-gray-600">Communiquez efficacement avec vos interlocuteurs anglophones</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-start mb-4">
                    <div className="bg-brand-100 p-3 rounded-full mr-4">
                      <BookOpen className="text-brand" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Progression garantie</h3>
                      <p className="text-gray-600">Développez rapidement vos compétences grâce à une méthode éprouvée</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-brand-100 p-3 rounded-full mr-4">
                      <Star className="text-brand" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Certification reconnue</h3>
                      <p className="text-gray-600">Validez votre niveau avec une certification officielle</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Objectifs */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">🎯 Objectifs pédagogiques</h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Améliorer sa compréhension orale et écrite en anglais professionnel</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Développer sa capacité à s&apos;exprimer oralement et par écrit</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Acquérir le vocabulaire technique spécifique à son domaine d&apos;activité</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Gagner en confiance lors des interactions professionnelles en anglais</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Programme */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Programme détaillé</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Évaluation initiale et positionnement</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                    <span>Test de niveau oral et écrit</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                    <span>Définition des objectifs personnalisés</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                    <span>Planification du parcours de formation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Compréhension orale et écrite</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                    <span>Travail sur l&apos;écoute active et la compréhension</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                    <span>Analyse de documents professionnels</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                    <span>Exercices de compréhension contextuelle</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Expression orale et écrite</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                    <span>Techniques de prise de parole en anglais</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                    <span>Rédaction d&apos;emails et documents professionnels</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                    <span>Présentations et réunions en anglais</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Vocabulaire professionnel</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                    <span>Acquisition du vocabulaire métier spécialisé</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                    <span>Expressions idiomatiques et tournures professionnelles</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                    <span>Techniques de mémorisation du vocabulaire</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Mises en situation professionnelles</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                    <span>Simulations d&apos;entretiens et négociations</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                    <span>Gestion des appels téléphoniques en anglais</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                    <span>Adaptation culturelle et codes de communication</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Public & Prérequis */}
          <section className="mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-4">Public visé</h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Users className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Professionnels souhaitant développer leurs compétences en anglais</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Cadres et dirigeants en contexte international</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Salariés en mobilité professionnelle</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-4">Prérequis</h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Niveau A1 minimum requis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Motivation à progresser en anglais professionnel</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Accès à un ordinateur et une connexion internet</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Méthodes & Évaluation */}
          <section className="mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-4">Méthodes pédagogiques</h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Target className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Approche communicative et interactive</span>
                  </li>
                  <li className="flex items-start">
                    <Brain className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Apprentissage par la pratique et l&apos;immersion</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Ateliers de conversation et jeux de rôles</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Support multimédia et outils numériques</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-4">Modalités d&apos;évaluation</h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Évaluation initiale et finale du niveau</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Contrôles continus et exercices pratiques</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Certification LILATE à l&apos;issue de la formation</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Certification */}
          <section className="mb-12">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">Certification LILATE</h2>
              <div className="flex items-center mb-6">
                <Award className="text-brand mr-4" size={48} />
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Live Language Test
                  </h3>
                  <p className="text-gray-600">Certification reconnue par les entreprises et inscrite au Répertoire Spécifique RS6118. Test adaptatif qui évalue précisément votre niveau d&apos;anglais professionnel.</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-2">Modalités de certification</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                      <span>Mise en situation avec interaction en anglais</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                      <span>Évaluation via conversation et messages écrits</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                      <span>Niveau B1 minimum requis pour validation</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Statistiques</h4>
                  <div className="bg-brand-50 p-4 rounded-lg">
                    <p className="text-brand-800 font-medium mb-2">Taux de réussite : 95%</p>
                    <p className="text-gray-600">Données basées sur les certifications de l&apos;année en cours</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Accessibilité */}
          <section className="mb-12">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">Accessibilité et inclusion</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Calendar className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Formation accessible sous 2 semaines après inscription</span>
                </li>
                <li className="flex items-start">
                  <Users className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Adaptations possibles sur demande pour les personnes en situation de handicap</span>
                </li>
                <li className="flex items-start">
                  <MessageSquare className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Assistance à la connexion en cas de visioconférence via Microsoft Teams</span>
                </li>
              </ul>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">📩 Intéressé(e) ? Inscrivez-vous dès maintenant !</h2>
            <p className="text-gray-600 mb-8">
              Contactez-nous pour obtenir plus d&apos;informations ou démarrer votre inscription.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => setIsParcoursModalOpen(true)}
                className="btn-primary btn-lg btn-with-icon"
              >
                Je lance mon parcours
              </button>
              <a
                href="tel:0975856510"
                className="btn-outline btn-lg btn-with-icon"
              >
                <Phone size={18} className="mr-2" />
                09 75 85 65 10
              </a>
            </div>
          </section>
        </div>
      </div>


    </div>
    </>
  )
}

export default FormationAnglaisPage
