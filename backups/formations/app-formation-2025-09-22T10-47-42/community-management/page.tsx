'use client'

import React, { useState } from 'react';
import { Clock, Award, Users, CheckCircle, ArrowRight, Calendar, Phone, X, Tag, MessageSquare, Target, Brain, Star } from 'lucide-react';
import { FormationJsonLd } from '../../components/JsonLd';
import ContactForm from '../../components/ContactForm';
import Link from 'next/link';

const FormationCommunityManagementPage = () => {
  const [selectedModality, setSelectedModality] = useState<'individuel' | 'collectif'>('individuel');
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false)
  const [isParcoursModalOpen, setIsParcoursModalOpen] = useState(false);

  const prices = {
    individuel: { price: "2 450€*", label: "Éligible CPF" },
    collectif: { price: "1 650€*", label: "Éligible CPF" }
  };

  return (
    <>
      <FormationJsonLd formationSlug="community-management" />
      <ContactForm 
        formationName="Community Management"
        isOpen={isInfoModalOpen}
        onClose={() => setIsInfoModalOpen(false)}
        actionType="information"
      />
      <ContactForm 
        formationName="Community Management"
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
                <span className="text-white font-medium">Communication digitale et réseaux sociaux</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                Développer son activité avec le Community Management
              </h1>
              <p className="text-xl mb-8">
                Maîtrisez les stratégies et outils du Community Management pour développer votre présence en ligne, animer une communauté et accroître l'engagement sur les réseaux sociaux.
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
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                    alt="Community Management" 
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
                        <p className="text-gray-600">RS6452 - Webmarketing & Com</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="text-brand mr-3 flex-shrink-0" size={20} />
                      <div>
                        <p className="font-medium">Durée</p>
                        <p className="text-gray-600">21 heures</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="text-brand mr-3 flex-shrink-0" size={20} />
                      <div>
                        <p className="font-medium">Modalités</p>
                        <p className="text-gray-600">Présentiel ou distanciel ou mixte</p>
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

            {/* Contexte */}
            <section className="mb-12">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6">Pourquoi le Community Management ?</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-start mb-4">
                      <div className="bg-brand-100 p-3 rounded-full mr-4">
                        <Users className="text-brand" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Relation client renforcée</h3>
                        <p className="text-gray-600">Bâtissez une relation solide avec votre audience sur les réseaux sociaux</p>
                      </div>
                    </div>
                    <div className="flex items-start mb-4">
                      <div className="bg-brand-100 p-3 rounded-full mr-4">
                        <Target className="text-brand" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Visibilité accrue</h3>
                        <p className="text-gray-600">Augmentez votre visibilité et votre crédibilité sur le marché</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-start mb-4">
                      <div className="bg-brand-100 p-3 rounded-full mr-4">
                        <MessageSquare className="text-brand" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Engagement optimisé</h3>
                        <p className="text-gray-600">Favorisez l&apos;engagement et la fidélisation de vos clients</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-brand-100 p-3 rounded-full mr-4">
                        <Star className="text-brand" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">E-réputation maîtrisée</h3>
                        <p className="text-gray-600">Gérez efficacement votre réputation en ligne</p>
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
                    <span>Élaborer une stratégie de Community Management adaptée à vos objectifs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Organiser l&apos;application opérationnelle d&apos;un projet de Community Management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Suivre et évaluer l&apos;impact des actions mises en place</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Programme */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Programme détaillé</h2>
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-4">Module 1 : Définir sa stratégie de Community Management</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                      <span>Définir sa cible et ses objectifs sur les réseaux sociaux</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                      <span>Intégrer le Community Management à sa stratégie globale</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                      <span>Sélectionner les plateformes adaptées et définir son budget</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-4">Module 2 : Créer ses comptes sur les réseaux sociaux</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                      <span>Élaborer une charte graphique cohérente</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                      <span>Créer et paramétrer ses comptes professionnels</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-4">Module 3 : Animer ses comptes sociaux</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                      <span>Concevoir un calendrier éditorial efficace</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                      <span>Créer et publier du contenu engageant</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                      <span>Comprendre les algorithmes et maximiser l&apos;engagement</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-4">Module 4 : Mettre en place des actions d&apos;acquisition d&apos;abonnés</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                      <span>Développer sa communauté naturellement</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                      <span>Utiliser la publicité pour accélérer sa croissance</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-4">Module 5 : Mobiliser les compétences pour un projet de Community Management</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                      <span>Piloter son projet et organiser le travail des intervenants</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                      <span>Sélectionner les outils et plateformes adaptés</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-4">Module 6 : Analyser les résultats de sa stratégie</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                      <span>Suivi des performances et analyse des indicateurs clés</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                      <span>Proposition d&apos;axes d&apos;amélioration et optimisation du ROI</span>
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
                  
                  <p className="text-gray-600">La formation et la certification s’adressent aux dirigeants de petites entreprises et collaborateurs directs chargés de la communication marketing souhaitant mettre en place une stratégie de community management en vue de développer l’activité de leur entreprise.</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-bold mb-4">Prérequis</h2>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                      <span>Être utilisateur des réseaux sociaux</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                      <span>Avoir un projet de communication digitale</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                      <span>Justifier d&apos;un an d&apos;expérience professionnelle</span>
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
                      <span>Approche théorique</span>
                    </li>
                    <li className="flex items-start">
                      <Brain className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                      <span>Exemples concrets et partages d&apos;expériences</span>
                    </li>
                    <li className="flex items-start">
                      <Users className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                      <span>Cas pédagogiques en groupe</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                      <span>Mises en situation et jeux de rôles</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-bold mb-4">Modalités d&apos;évaluation</h2>
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-600 mb-3">Mise en situation réelle portant sur l&apos;élaboration d&apos;une stratégie de community management avec remise de rapport et soutenance orale.</p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Le candidat a 15 jours de préparation avant la remise de ses écrits</li>
                        <li>• L&apos;écrit est ensuite suivi d&apos;une présentation orale de 25 minutes devant un jury</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Certification */}
            <section className="mb-12">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6">Certification</h2>
                <div className="flex items-center mb-6">
                  <div>
                    <p className="text-gray-600">Cette formation prépare à la certification "Développer son activité avec le community management" enregistrée à France Compétences sous le numéro <a href="https://www.francecompetences.fr/recherche/rs/6452/" target="_blank" rel="noopener noreferrer" className="text-brand hover:text-brand-600 underline">RS6452</a> par l'organisme certificateur <a href="https://www.webmarketing-com.com/" target="_blank" rel="noopener noreferrer" className="text-brand hover:text-brand-600 underline">Webmarketing & Com</a>.</p>
                    <p className="text-gray-600 mt-3">A l'issue de la formation, le stagiaire s'engage à passer l'examen préparant à la certification.</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Statistiques</h4>
                  <div className="bg-brand-50 p-6 rounded-lg">
                    <p className="text-brand-800 font-medium mb-2 text-lg">Taux de réussite : 100%</p>
                    <p className="text-gray-600">Données basées sur les candidats ayant préparé la certification "Développer son activité avec le community management" auprès de notre organisme de formation</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Processus de candidature */}
            <section className="mb-12">
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-brand-100 p-3 rounded-full mr-4">
                    <Users className="text-brand" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold">Processus de candidature</h2>
                </div>
                
                <div className="mb-8">
                  <div className="mb-6">
                    <h3 className="font-semibold mb-4 text-lg text-gray-800">Comment s&apos;inscrire ?</h3>
                    <p className="text-gray-600 mb-4">Afin de s&apos;inscrire à la certification, le candidat devra transmettre son dossier de candidature accompagné d&apos;un CV à jour.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-3 text-lg text-gray-800">Documents requis</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <CheckCircle className="text-brand mr-2 flex-shrink-0" size={16} />
                        <span>Dossier de candidature complet</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="text-brand mr-2 flex-shrink-0" size={16} />
                        <span>CV à jour</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Section Accessibilité */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <div className="w-6 h-6 flex items-center justify-center">
                        <span className="text-green-700 font-bold text-sm">♿</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-3 text-lg text-green-800">Adaptation des conditions d&apos;examen aux personnes en situation de handicap</h3>
                      <p className="text-green-700 mb-4">
                        Le référent handicap prendra en compte dès l&apos;inscription du candidat sa situation de handicap, si celle-ci est mentionnée. Il sera alors proposé au candidat un entretien afin d&apos;envisager avec lui les aménagements qui pourront être apportés.
                      </p>
                      
                    </div>
                  </div>
                </div>
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

export default FormationCommunityManagementPage
