'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Head from 'next/head';
import { Clock, Award, Users, CheckCircle, ArrowRight, Calendar, Phone, X, Tag, MessageSquare, Target, Brain, Star, Globe, BookOpen, Laptop, Shield, DollarSign, FileCheck } from 'lucide-react';
import formationsConfig from '../lib/config/formations';
import themeConfig from '../lib/config/theme';
import Link from 'next/link';
import ContactForm from './ContactForm';

// Mapping des icônes pour les formations
const iconMap: Record<string, React.ReactNode> = {
  'Clock': <Clock className="mr-2" />,
  'Award': <Award className="mr-2" />,
  'Users': <Users className="mr-2" />,
  'CheckCircle': <CheckCircle className="mr-2" />,
  'ArrowRight': <ArrowRight className="mr-2" />,
  'Calendar': <Calendar className="mr-2" />,
  'Tag': <Tag className="mr-2" />,
  'Brain': <Brain className="mr-2" />,
  'Target': <Target className="mr-2" />,
  'Globe': <Globe className="mr-2" />,
  'BookOpen': <BookOpen className="mr-2" />,
  'MessageSquare': <MessageSquare className="mr-2" />,
  'Laptop': <Laptop className="mr-2" />,
  'Star': <Star className="mr-2" />,
  'Shield': <Shield className="mr-2" />,
  'DollarSign': <DollarSign className="mr-2" />,
  'FileCheck': <FileCheck className="mr-2" />
};

const FormationPage = () => {
  const params = useParams();
  const slug = params?.slug as string;
  const router = useRouter();
  const [selectedModality, setSelectedModality] = useState<'individuel' | 'collectif'>('individuel');
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);

  // Fonction pour formater les informations de certification
  const formatCertification = (formation: any) => {
    // Priorité au champ formationType (pour l'API future)
    if (formation?.formationType) {
      switch (formation.formationType) {
        case 'non-certifiante':
          return 'Formation non-certifiante';
        case 'partenariat':
          if (formation.certificationDetails?.partenaire) {
            return `En partenariat avec ${formation.certificationDetails.partenaire}`;
          }
          break;
        case 'certifiante':
          if (formation.certificationDetails?.organization) {
            return `Certifié par ${formation.certificationDetails.organization}`;
          }
          break;
      }
    }
    
    // Fallback sur la logique Zuma (compatibilité)
    if (!formation?.cpfEligible && !formation?.certificationDetails) {
      return 'Formation non-certifiante';
    }
    
    // Gestion des formations certifiantes et en partenariat
    if (!formation?.certificationDetails) return null;
    
    const { name, code, organization, partenaire } = formation.certificationDetails;
    if (!name || !code || !organization) return null;
    
    // Si la formation a un code de certification
    if (code) {
      // Pour les formations avec partenaire, afficher "En partenariat avec [partenaire]"
      // Sinon, afficher "Certifié par" + nom du certificateur
      return partenaire ? `En partenariat avec ${partenaire}` : `Certifié par ${organization}`;
    }
    
    // Si pas de code, ne rien afficher
    return null;
  };

  // Trouver la formation correspondante
  const formation = formationsConfig.formations.find(f => f.slug.replace('formation-', '') === slug);
  const category = formation ? formationsConfig.categories.find(cat => cat.id === formation.category) : null;

  // Rediriger si la formation n'existe pas
  useEffect(() => {
    if (!formation && slug) {
      router.push('/');
    }
  }, [formation, slug, router]);

  // Si la formation n'est pas trouvée, ne rien afficher pendant la redirection
  if (!formation) {
    return null;
  }


  // Déterminer quels blocs afficher en fonction des données disponibles
  const hasReasons = formation?.reasons && formation.reasons.length > 0;
  const hasPublicVise = formation?.publicVise && formation.publicVise.length > 0;
  const hasPrerequisites = formation?.prerequis && formation.prerequis.length > 0;
  const hasTeachingMethods = formation?.teachingMethods && formation.teachingMethods.length > 0;
  const hasEvaluationMethods = formation?.evaluationMethods && formation.evaluationMethods.length > 0;
  const hasAccessibility = formation?.accessibility && formation.accessibility.length > 0;
  const hasCertificationDetails = formation?.certificationDetails;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-600 to-brand text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-10 p-2 rounded-md inline-block mb-4">
              <span className="text-white font-medium">
                {category ? category.description : 'Formation'} 
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">{formation.title}</h1>
            <p className="text-xl mb-8">{formation.fullDescription}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setIsCallbackOpen(true)}
                className="bg-brand text-white hover:bg-brand-600 font-medium py-3 px-6 rounded-md transition-colors flex items-center justify-center"
              >
                <MessageSquare size={18} className="mr-2" />
                Demander plus d'informations
              </button>
              <a 
                href="tel:0975856510"
                className="bg-brand text-white hover:bg-brand-600 font-medium py-3 px-6 rounded-md transition-colors inline-flex items-center justify-center"
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
                  src={formation.image}
                  alt={formation.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <h2 className="text-2xl font-bold mb-6">Détails de la formation</h2>
                <div className="space-y-4">
                  {formation.certifications && formation.certifications.length > 0 && (
                    <div className="flex items-center">
                      <Award className="text-brand mr-3 flex-shrink-0" size={20} />
                      <div>
                        <p className="font-medium">Certification</p>
                        <p className="text-gray-600">
                          {formatCertification(formation) || formation.certifications.join(', ')}
                        </p>
                      </div>
                    </div>
                  )}
                  <div className="flex items-center">
                    <Clock className="text-brand mr-3 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-medium">Durée</p>
                      <p className="text-gray-600">{formation.duration}</p>
                    </div>
                  </div>

                  {formation.formateur && (
                    <div className="flex items-center">
                      <Users className="text-brand mr-3 flex-shrink-0" size={20} />
                      <div>
                        <p className="font-medium">Formateur</p>
                        <p className="text-gray-600">{formation.formateur}</p>
                      </div>
                    </div>
                  )}

                  <div className="flex gap-4 mb-4">
                    <button 
                      onClick={() => setSelectedModality('collectif')} 
                      className={`px-4 py-2 border rounded-md ${selectedModality === 'collectif' ? 'bg-brand text-white' : 'bg-gray-100'}`}
                    >
                      Collectif
                    </button>
                    <button 
                      onClick={() => setSelectedModality('individuel')} 
                      className={`px-4 py-2 border rounded-md ${selectedModality === 'individuel' ? 'bg-brand text-white' : 'bg-gray-100'}`}
                    >
                      Individuel
                    </button>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center mb-2">
                      <Tag size={16} className="mr-2 text-brand-600" />
                      <span className="text-2xl font-bold text-gray-800">{formation.prices[selectedModality].price}</span>
                      {formation.prices[selectedModality].label && (
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded ml-3">
                          {formation.prices[selectedModality].label}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-4">*Prix pour une formation en blended learning avec 20% d'e-learning et 80% de formation live</p>
                   
                    {formation.dates && formation.dates[selectedModality] && (
                      <div className="mt-4">
                        <div className="flex items-center mb-2">
                          <Calendar size={20} className="mr-2 text-brand-600" />
                          <p className="text-medium font-medium text-gray-800">Prochaines sessions</p>
                        </div>

                        {selectedModality === "individuel" ? (
                          <p className="italic text-gray-500 ml-6">Dates à planifier avec votre formateur</p>
                        ) : formation.dates[selectedModality].length > 0 ? (
                          <ul className="pl-6 space-y-1 text-sm text-gray-600 list-disc">
                            {formation.dates[selectedModality].map((session, index) => (
                              <li key={index}>{session}</li>
                            ))}
                          </ul>
                        ) : (
                          <p className="italic text-gray-500 ml-6">Aucune session prévue pour le moment</p>
                        )}
                      </div>
                    )}
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 border-t border-gray-100">
              <p className="text-gray-600 text-m mb-4 text-center">
                Vous ne trouvez pas exactement la formation qui correspond à vos enjeux, votre organisation ou votre rythme ? Aucun souci. En quelques clics, vous pouvez définir vos attentes, vos objectifs et vos modalités idéales. Nous reviendrons vers vous avec une proposition sur-mesure, alignée sur vos besoins.
              </p>
              <div className="flex justify-center w-full mt-4">
                <Link
                  href="/demande-formation"
                  className="inline-flex items-center justify-center px-4 py-2 bg-brand text-white rounded-md hover:bg-brand-600 transition-colors mt-4"
                >
                  <Target size={18} className="mr-2" />
                  Composez votre formation sur mesure
                </Link>
              </div>
            </div>
          </section>

          {/* Contexte / Pourquoi suivre cette formation */}
          {hasReasons && formation.reasons && (
            <section className="mb-12">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6">
                  {formation.id === 'community-management' ? 'Pourquoi le Community Management ?' : 'Pourquoi suivre cette formation ?'}
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {formation.reasons.map((reason, index) => (
                    <div key={index} className="flex items-start mb-4">
                      <div className="bg-brand p-3 rounded-full mr-4 flex items-center justify-center" style={{ width: '48px', height: '48px' }}>
                        {reason.icon === 'Users' ? <Users className="text-white" size={24} /> :
                         reason.icon === 'Target' ? <Target className="text-white" size={24} /> :
                         reason.icon === 'MessageSquare' ? <MessageSquare className="text-white" size={24} /> :
                         reason.icon === 'Star' ? <Star className="text-white" size={24} /> :
                         reason.icon === 'Shield' ? <Shield className="text-white" size={24} /> :
                         reason.icon === 'DollarSign' ? <DollarSign className="text-white" size={24} /> :
                         reason.icon === 'FileCheck' ? <FileCheck className="text-white" size={24} /> :
                         <CheckCircle className="text-white" size={24} />}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-4">{reason.title}</h3>
                        <p className="text-gray-600">{reason.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Objectifs */}
          {formation.objectives && formation.objectives.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">🎯 Objectifs pédagogiques</h2>
              <div className="bg-white rounded-lg shadow-md p-8">
                <ul className="space-y-3">
                  {formation.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {/* Programme */}
          {formation.program && formation.program.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Programme détaillé</h2>
              <div className="space-y-6">
                {formation.program.map((module, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-4">{module.title}</h3>
                    <ul className="space-y-2">
                      {module.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Public & Prérequis */}
          {(hasPublicVise || hasPrerequisites) && (
            <section className="mb-12">
              <div className="grid md:grid-cols-2 gap-8">
                {hasPublicVise && formation.publicVise && (
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-4">Public visé</h3>
                    <ul className="space-y-2">
                      {formation.publicVise.map((public_item, index) => (
                        <li key={index} className="flex items-start">
                          <Users className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                          <span>{public_item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {hasPrerequisites && formation.prerequis && (
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-4">Prérequis</h3>
                    <ul className="space-y-2">
                      {formation.prerequis.map((prerequis, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                          <span>{prerequis}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Méthodes & Évaluation */}
          {(hasTeachingMethods || hasEvaluationMethods) && (
            <section className="mb-12">
              <div className="grid md:grid-cols-2 gap-8">
                {hasTeachingMethods && formation.teachingMethods && (
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-4">Méthodes pédagogiques</h3>
                    <ul className="space-y-2">
                      {formation.teachingMethods.map((method, index) => (
                        <li key={index} className="flex items-start">
                          <Target className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                          <span>{method}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {hasEvaluationMethods && formation.evaluationMethods && (
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-4">Modalités d'évaluation</h3>
                    <ul className="space-y-2">
                      {formation.evaluationMethods.map((method, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                          <span>{method}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Certification - Toutes les formations certifiantes */}
          {formation.cpfEligible && formation.certificationDetails?.code && (
            <section className="mb-12">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6">Certification</h2>
                <div className="flex items-center mb-6">
                  <div>
                    <p className="text-gray-600">
                      {formation.certificationDetails?.code?.startsWith('RNCP') ? (
                        <>
                          Cette formation prépare au certificat de compétences "{formation.certificationDetails?.name || formation.title}", du titre "{formation.certificationDetails?.titre || formation.title}", enregistrée à France Compétences sous le numéro <a href={`https://www.francecompetences.fr/recherche/rncp/${formation.certificationDetails?.code?.replace(/^RNCP/, '')}/`} target="_blank" rel="noopener noreferrer" className="text-brand underline hover:no-underline focus:no-underline active:no-underline" style={{backgroundColor: 'transparent', border: 'none', padding: '0', margin: '0'}}>{formation.certificationDetails?.code}</a> par l'organisme certificateur <a href={formation.certificationDetails?.organizationUrl || '#'} target="_blank" rel="noopener noreferrer" className="text-brand underline hover:no-underline focus:no-underline active:no-underline" style={{backgroundColor: 'transparent', border: 'none', padding: '0', margin: '0'}}>{formation.certificationDetails?.organization}</a> pour une durée de {formation.certificationDetails?.dureeEnregistrement || '3'} ans en date du {formation.certificationDetails?.dateEnregistrement || '21-12-2023'}.
                        </>
                      ) : (
                        <>
                          Cette formation prépare à la certification "{formation.certificationDetails?.name || formation.title}" enregistrée à France Compétences sous le numéro <a href={`https://www.francecompetences.fr/recherche/rs/${formation.certificationDetails?.code?.replace(/^RS/, '')}/`} target="_blank" rel="noopener noreferrer" className="text-brand underline hover:no-underline focus:no-underline active:no-underline" style={{backgroundColor: 'transparent', border: 'none', padding: '0', margin: '0'}}>{formation.certificationDetails?.code}</a> par l'organisme certificateur <a href={formation.certificationDetails?.organizationUrl || '#'} target="_blank" rel="noopener noreferrer" className="text-brand underline hover:no-underline focus:no-underline active:no-underline" style={{backgroundColor: 'transparent', border: 'none', padding: '0', margin: '0'}}>{formation.certificationDetails?.organization}</a> pour une durée de {formation.certificationDetails?.dureeEnregistrement || '3'} ans en date du {formation.certificationDetails?.dateEnregistrement || '21-12-2023'}.
                        </>
                      )}
                    </p>
                    <p className="text-gray-600 mt-3">A l'issue de la formation, le stagiaire s'engage à passer l'examen préparant à la certification.</p>
                  </div>
                </div>
                
                {/* Épreuve de certification */}
                {formation.certificationDetails?.examDetails?.format && formation.certificationDetails.examDetails.format.length > 0 && (
                  <div className="mt-6 mb-6">
                    <h4 className="font-semibold mb-4">Épreuve de certification</h4>
                    <p className="text-gray-600">{formation.certificationDetails.examDetails.format[0]}</p>
                  </div>
                )}
                
                <div>
                  <h4 className="font-semibold mb-4">Statistiques</h4>
                  <div 
                    className="p-6 rounded-lg text-white"
                    style={{
                      background: `linear-gradient(to right, ${themeConfig.brand.primaryColor}, ${themeConfig.brand.primaryColor}dd)`
                    }}
                  >
                    <p className="text-white font-medium mb-2 text-lg">Taux de réussite : {formation.certificationDetails?.examDetails?.successRate || '100%'}</p>
                    <p className="text-white text-opacity-90">Données basées sur les candidats ayant préparé la certification "{formation.certificationDetails?.name || formation.title}" auprès de notre organisme de formation</p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Processus de candidature */}
          {formation.cpfEligible && formation.certificationDetails?.code && (
            <section className="mb-12">
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center mb-6">
                  <div 
                    className="p-3 rounded-full mr-4"
                    style={{
                      background: `linear-gradient(to right, ${themeConfig.brand.primaryColor}, ${themeConfig.brand.primaryColor}dd)`
                    }}
                  >
                    <Users className="text-white" size={24} />
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
                <div 
                  className="p-6 rounded-lg text-white"
                  style={{
                    background: `linear-gradient(to right, ${themeConfig.brand.primaryColor}, ${themeConfig.brand.primaryColor}dd)`
                  }}
                >
                  <div className="flex items-start">
                    <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4 flex-shrink-0">
                      <Users className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-3 text-lg text-white">Accessibilité</h3>
                      <p className="text-white text-opacity-90 mb-4">
                        Formation accessible sous 15 jours après inscription.
                      </p>
                      <h4 className="font-semibold mb-2 text-white">Adaptation des conditions d&apos;examen aux personnes en situation de handicap</h4>
                      <p className="text-white text-opacity-90 mb-4">
                        Le référent handicap prendra en compte dès l&apos;inscription du candidat sa situation de handicap, si celle-ci est mentionnée. Il sera alors proposé au candidat un entretien afin d&apos;envisager avec lui les aménagements qui pourront être apportés.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Accessibilité - Formations non certifiantes */}
          {!formation.cpfEligible && hasAccessibility && formation.accessibility && (
            <section className="mb-12">
              <div 
                className="p-6 rounded-lg text-white"
                style={{
                  background: `linear-gradient(to right, ${themeConfig.brand.primaryColor}, ${themeConfig.brand.primaryColor}dd)`
                }}
              >
                <div className="flex items-start">
                  <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4 flex-shrink-0">
                    <Users className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-3 text-lg text-white">Accessibilité</h3>
                    <p className="text-white text-opacity-90 mb-4">
                      Cette formation est accessible à tous. Des adaptations peuvent être proposées selon les besoins spécifiques des participants.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          )}


          {/* CTA Section */}
          <section className="text-center bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">📩 Intéressé(e) ? Inscrivez-vous dès maintenant !</h2>
            <p className="text-gray-600 mb-8">
              Contactez-nous pour obtenir plus d'informations ou démarrer votre inscription.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => setIsCallbackOpen(true)}
                className="btn-primary btn-lg btn-with-icon"
              >
                Je lance mon parcours
              </button>
              <a
                href="tel:0975856510"
                className="bg-brand text-white font-medium py-3 px-6 rounded-md hover:bg-brand-600 transition-colors inline-flex items-center justify-center"
              >
                <Phone size={18} className="mr-2" />
                09 75 85 65 10
              </a>
            </div>
          </section>
        </div>
      </div>

      {/* Contact Form Modal */}
      <ContactForm
        formationName={formation.title}
        isOpen={isCallbackOpen}
        onClose={() => setIsCallbackOpen(false)}
        actionType="information"
      />

      <Head>
        <title>{formation?.title} | FORMAPRO by ACCERTIF</title>
        <meta name="description" content={formation?.fullDescription} />
      </Head>
    </div>
  );
};

export default FormationPage;
