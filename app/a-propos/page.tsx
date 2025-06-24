'use client';

import Link from 'next/link';
import { Check, ArrowRight, Star, Target } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section - Enhanced with gradient and animation */}
        <div className="max-w-4xl mx-auto text-center mb-16">
                    <h1 className="text-3xl md:text-4xl font-bold mb-6">L'Excellence en Formation Professionnelle</h1>
          <p className="text-xl text-gray-600 mb-4">
            Organisme de formation certifié et reconnu, spécialisé dans les Form'actions certifiantes sur-mesure pour les professionnels et les entreprises.
          </p>
          <p className="text-lg text-gray-600">
            Notre approche unique allie flexibilité, expertise et certification officielle pour une montée en compétences immédiatement applicable.
          </p>
        </div>

        {/* Vision & Mission - Redesigned with cards */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center mb-6">
                <div className="bg-brand-100 p-3 rounded-full mr-4">
                  <Target className="text-brand" size={24} />
                </div>
                <h2 className="text-2xl font-bold">Notre Vision</h2>
              </div>
              <div className="bg-brand-50 text-brand-800 text-lg font-medium px-4 py-3 rounded-md mb-4">
                "Le meilleur de la formation, partout, pour tous."
              </div>
              <p className="text-gray-600">
                Nous croyons en une formation professionnelle accessible, personnalisée et directement applicable dans votre contexte professionnel, transformant l'apprentissage en une expérience sur-mesure.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center mb-6">
                <div className="bg-brand-100 p-3 rounded-full mr-4">
                  <Star className="text-brand" size={24} />
                </div>
                <h2 className="text-2xl font-bold">Notre Mission</h2>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Fournir des formations de haute qualité avec des experts métier reconnus</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Garantir l'acquisition de compétences certifiées et valorisables</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Assurer un accompagnement personnalisé tout au long du parcours</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Form'action Concept - Enhanced with better layout */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-brand-600 to-brand text-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8">
                <h2 className="text-2xl font-bold mb-6">Le Concept "Form'action"</h2>
                <div className="bg-white bg-opacity-10 p-4 rounded-lg mb-6">
                  <p className="text-lg">
                    Une Form'action, c'est bien plus qu'une formation ! C'est un parcours complet vers l'excellence professionnelle.
                  </p>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Apprentissage flexible sur SKILLUP by Accertif avec un rythme adapté à vos besoins</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Accompagnement individuel par des experts pour une mise en pratique concrète</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Contenu sur-mesure adapté à votre secteur et vos objectifs</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Certification reconnue pour valoriser vos nouvelles compétences</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Financement simplifié via CPF et autres dispositifs (100% finançable)</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 bg-brand-700 p-8 flex items-center justify-center">
                <img 
                  src="https://irp.cdn-website.com/e0ab763a/dms3rep/multi/Form-action.png" 
                  alt="Form'action Concept" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

         
        
        {/* Certifications & Accreditations - Enhanced with images */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center">Nos Garanties de Qualité</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center transform transition-transform hover:scale-105">
              <div className="bg-brand-50 p-6 rounded-lg mb-4 flex items-center justify-center h-40">
                <img 
                  src="https://irp.cdn-website.com/e0ab763a/dms3rep/multi/qualiopi.png"
                  alt="Certification Qualiopi"
                  className="h-32 w-auto object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Certification Qualiopi</h3>
              <p className="text-gray-600">
                Notre engagement qualité reconnu par l'État français pour l'excellence de nos prestations de formation.
              </p>
            </div>
            
            <div className="text-center transform transition-transform hover:scale-105">
              <div className="bg-brand-50 p-6 rounded-lg mb-4 flex items-center justify-center h-40">
                <img 
                  src="https://irp.cdn-website.com/e0ab763a/dms3rep/multi/CPF.png"
                  alt="Éligibilité CPF"
                  className="h-32 w-auto object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Éligibilité CPF</h3>
              <p className="text-gray-600">
                Toutes nos Form'actions sont éligibles au CPF pour un financement simplifié de votre montée en compétences.
              </p>
            </div>
            
            <div className="text-center transform transition-transform hover:scale-105">
              <div className="bg-brand-50 p-6 rounded-lg mb-4 flex items-center justify-center h-40">
                <img 
                  src="https://irp.cdn-website.com/e0ab763a/dms3rep/multi/r%C3%A9seau+accertif.png"
                  alt="Réseau d'Excellence"
                  className="h-32 w-auto object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Réseau d'Excellence</h3>
              <p className="text-gray-600">
                Plus de 35 certificateurs partenaires et un réseau d'experts métier reconnus dans leur domaine.
              </p>
            </div>
          </div>
        </section>
        
        {/* CTA - Enhanced with gradient and animation */}
        <section className="text-center">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">Prêt à Développer Votre Potentiel ?</h2>
            <p className="text-gray-600 mb-8">
              Découvrez nos Form'actions certifiantes et bénéficiez d'un accompagnement personnalisé par nos experts pour atteindre vos objectifs professionnels.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/formations" 
                className="btn-primary btn-lg btn-with-icon group"
              >
                Découvrir nos Form'actions 
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link 
                href="/contact" 
                className="btn-outline btn-lg"
              >
                Nous Contacter
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;