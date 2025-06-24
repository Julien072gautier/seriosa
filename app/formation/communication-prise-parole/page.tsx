"use client";

import React, { useState } from 'react';
import { Clock, Award, Users, CheckCircle, ArrowRight, Calendar, Phone, X, Tag, MessageSquare, Target, Brain, Star } from 'lucide-react';
import { useSendEmail } from '../../hooks/useSendEmail';
import Link from 'next/link';

const FormationCommunicationPage = () => {
  const [selectedModality, setSelectedModality] = useState<'individuel' | 'collectif'>('individuel');
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);
  const [callbackData, setCallbackData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const { sendEmail, loading, error, success } = useSendEmail();

  const prices = {
    individuel: { price: "2 450€*", label: "Éligible CPF" },
    collectif: { price: "1 650€*", label: "Éligible CPF" }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCallbackData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = `${callbackData.name} ${callbackData.phone}`;
    await sendEmail({
      to: 'hello@formaprobyaccertif.fr',
      subject: "Demande d'information - Formation Communication",
      text: data
    });

    if (success) {
      setCallbackData({
        name: '',
        phone: '',
        email: '',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-600 to-brand text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-10 p-2 rounded-md inline-block mb-4">
              <span className="text-white font-medium">Communication et prise de parole en public</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Communiquer avec impact à l'oral en présentiel et à distance
            </h1>
            <p className="text-xl mb-8">
              Développez votre aisance orale, maîtrisez votre posture et captivez votre auditoire en toutes circonstances.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setIsCallbackOpen(true)}
                className="bg-white text-brand-700 hover:bg-gray-100 font-medium py-3 px-6 rounded-md transition-colors flex items-center justify-center"
              >
                <MessageSquare size={18} className="mr-2" />
                Demander plus d'informations
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
                  src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  alt="Communication avec impact" 
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
                      <p className="text-gray-600">RS6377 - Pollen Conseil</p>
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
                    <br></br><p className="text-gray-600 text-sm">*Les tarifs indiqués couvrent une formation mixte alliant 20% d'e-learning et 80% de Form'action. <br></br><br></br>Cette formation professionnelle de par son caractère certifiant peut être prise en charge par le CPF. Toute action ne rentrant pas dans le cadre de l’article L6313-1 du code du travail ne rentre pas dans ce dispositif de prise en charge </p><br></br>
                    <Link 
                      href="/demande-formation"
                      className="inline-flex items-center justify-center px-4 py-2 bg-brand text-white rounded-md hover:bg-brand-600 transition-colors"
                    >
                      <Target size={18} className="mr-2" />
                      Créer la form'action qui vous ressemble
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contexte */}
          <section className="mb-12">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">Pourquoi développer un impact fort à l'oral ?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-start mb-4">
                    <div className="bg-brand-100 p-3 rounded-full mr-4">
                      <Users className="text-brand" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Crédibilité renforcée</h3>
                      <p className="text-gray-600">Affirmez votre expertise et gagnez en légitimité en captivant votre audience à l'oral.</p>
                    </div>
                  </div>
                  <div className="flex items-start mb-4">
                    <div className="bg-brand-100 p-3 rounded-full mr-4">
                      <Target className="text-brand" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Impact optimisé</h3>
                      <p className="text-gray-600">Structurez clairement vos interventions pour capter et maintenir l'attention de votre auditoire.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-start mb-4">
                    <div className="bg-brand-100 p-3 rounded-full mr-4">
                      <MessageSquare className="text-brand" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Interaction maîtrisée</h3>
                      <p className="text-gray-600">Gérez les objections avec assurance et favorisez des échanges fluides et constructifs.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-brand-100 p-3 rounded-full mr-4">
                      <Star className="text-brand" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Présence affirmée</h3>
                      <p className="text-gray-600">Adoptez posture, gestuelle et ton adaptés pour renforcer charisme et aisance orale.</p>
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
                  <span>Concevoir la structure d'une communication</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Énoncer un message de manière audible et impactante</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Mobiliser son corps et adapter sa posture selon l'environnement et les interlocuteurs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Illustrer son discours pour captiver et convaincre</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Gérer les interactions et répondre aux objections</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Adapter sa communication aux outils et contextes distanciels</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Programme */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Programme détaillé</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Module 1 : Structurer sa pensée et le contenu de sa présentation</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                    <span>Adapter son intervention à son public et au contexte</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                    <span>Définir le sujet, l'objectif et structurer son discours</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                    <span>Construire une progression logique et captivante</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                    <span>Concevoir un support visuel épuré et impactant</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Module 2 : Maîtriser sa posture et sa voix</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                    <span>Alignement Verbal - Visuel – Vocal</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                    <span>Posture, gestuelle et cohérence du message</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                    <span>Respiration et modulation de la voix</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                    <span>Connexion avec l'auditoire par le regard et le rythme</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Module 3 : Répondre aux objections</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                    <span>Gérer et transformer les objections en opportunités</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                    <span>Rebondir efficacement et obtenir l'adhésion</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                    <span>Techniques de questionnement et reformulation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Module 4 : Adapter sa prise de parole à un contexte distanciel</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                    <span>Créer un environnement engageant en visioconférence</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                    <span>Dynamiser son intervention à distance</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                    <span>Maintenir l'interaction et capter l'attention</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                    <span>Conception de supports clairs et synthétiques</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Module 5 : Renforcer confiance et affirmation de soi</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                    <span>Comprendre son profil d'orateur et oser être soi-même</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                    <span>Gérer le stress et les émotions</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                    <span>Appliquer la règle des 3 P (Préparation, Pratique, Performance)</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                    <span>Analyser ses interventions et s'améliorer</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Module 6 : Se rendre mémorable</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                    <span>Créer un lien avec son public et susciter l'engagement</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                    <span>Communiquer avec conviction et authenticité</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                    <span>Développer son charisme et sa présence</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                    <span>L'énergie et l'enthousiasme comme moteurs d'influence</span>
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
                    <span>Commerciaux ou personnel de la relation client</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Managers en situation d'entretien</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Responsables de services en réunion d'équipe</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Chefs ou contributeurs de projet</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Dirigeants en situation de discours</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Demandeurs d'emploi en entretien de recrutement</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-4">Prérequis</h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Justifier d'au moins 1 an d'expérience professionnelle</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Pratiquer régulièrement des prises de parole en présentiel ou à distance</span>
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
                    <span>Exemples concrets et partages d'expériences</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Cas pédagogiques en groupe</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Mises en situation, jeux de rôles et co-développement</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-4">Modalités d'évaluation</h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Évaluation des compétences en entrée et sortie</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Feuilles de présence et certificat de réalisation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Épreuve de certification (mise en situation et QCM)</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Certification */}
          <section className="mb-12">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">Certification</h2>
              <div className="flex items-center mb-6">
                <Award className="text-brand mr-4" size={48} />
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Communiquer à l'oral avec impact en présentiel et à distance
                  </h3>
                  <p className="text-gray-600">Cette formation prépare à l'obtention du certificat de compétences « Communiquer à l'oral avec impact en présentiel et à distance » enregistré par Pollen Conseil auprès de France Compétences en date du 20/09/2023 pour une durée de trois ans sous la référence RS6377</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-2">Épreuves finales</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                      <span>Mise en situation orale (45 min préparation + 7 min intervention)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                      <span>Gestion des objections (2 min)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                      <span>QCM d'évaluation des acquis (10 min)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Statistiques</h4>
                  <div className="bg-brand-50 p-4 rounded-lg">
                    <p className="text-brand-800 font-medium mb-2">Taux de réussite : 95%</p>
                    <p className="text-gray-600">Données basées sur les certifications de l'année en cours</p>
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
                  <span>Formation accessible sous 15 jours après inscription</span>
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
                className="btn-outline btn-lg btn-with-icon"
              >
                <Phone size={18} className="mr-2" />
                09 75 85 65 10
              </a>
            </div>
          </section>
        </div>
      </div>

      {/* Callback Popup */}
      {isCallbackOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md relative">
            <button
              onClick={() => setIsCallbackOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            
            <div className="p-6">
              {!success ? (
                <>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Demande d'information</h3>
                  <p className="text-gray-600 mb-4">
                    Intéressé(e) par notre form'action en communication ? Laissez-nous vos coordonnées et un conseiller vous contactera sous 24h.
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-gray-700 mb-2">Nom complet</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={callbackData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="phone" className="block text-gray-700 mb-2">Téléphone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={callbackData.phone}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand"
                        required
                      />
                    </div>
                    <div className="mb-6">
                      <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={callbackData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand"
                        required
                      />
                    </div>

                    {error && (
                      <div className="mb-4 p-3 bg-red-50 text-red-800 rounded-md">
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-brand text-white py-2 px-4 rounded-md hover:bg-brand-600 transition-colors flex items-center justify-center"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Envoi en cours...
                        </>
                      ) : (
                        "Demander plus d'informations"
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="bg-green-100 text-green-800 p-4 rounded-md mb-4">
                    <p className="font-medium">Demande envoyée avec succès !</p>
                    <p>Un conseiller vous contactera dans les 24h.</p>
                  </div>
                  <p className="text-gray-600">Merci pour votre intérêt pour notre form'action.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormationCommunicationPage;