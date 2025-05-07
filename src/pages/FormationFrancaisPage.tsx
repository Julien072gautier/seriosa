import React, { useState } from 'react';
import { Clock, Award, Users, CheckCircle, ArrowRight, Calendar, Phone, X, Tag, MessageSquare, Target, Brain, Star, Globe } from 'lucide-react';
import { useSendEmail } from '../hooks/useSendEmail';
import { Link } from 'react-router-dom';


const FormationFrancaisPage = () => {
  const [selectedModality, setSelectedModality] = useState<'individuel' | 'collectif'>('individuel');
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);
  const [callbackData, setCallbackData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const { sendEmail, loading, error, success } = useSendEmail();

  const prices = {
    individuel: { price: "1 950€*", label: "Éligible CPF" },
    collectif: { price: "1 250€*", label: "Éligible CPF" }
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
      subject: "Demande d'information - Formation Français",
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
              <span className="text-white font-medium">Langues</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Français (FLE)
            </h1>
            <p className="text-xl mb-8">
              Développez vos compétences en français pour une meilleure intégration professionnelle et sociale. Formation adaptée aux besoins spécifiques de votre secteur d'activité.
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
                  src="https://irp.cdn-website.com/e0ab763a/dms3rep/multi/Fran%C3%A7ais-61b9e88d.png" 
                  alt="Formation Français Professionnel" 
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
                      <p className="text-gray-600">LILATE - RS6916</p>
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
                   <br></br><p className="text-gray-600 text-sm">*Les tarifs indiqués couvrent une formation mixte alliant 20% d'e-learning et 80% de Form'action. <br></br><br></br>Cette formation professionnelle de par son caractère certifiant peut être prise en charge par le CPF. Toute action ne rentrant pas dans le cadre de l’article L6313-1 du code du travail ne rentre pas dans ce dispositif de prise en charge </p><br></br>
                    <Link 
                      to="/demande-formation"
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
              <h2 className="text-2xl font-bold mb-6">Pourquoi améliorer votre français ?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-start mb-4">
                    <div className="bg-brand-100 p-3 rounded-full mr-4">
                      <Globe className="text-brand" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Intégration professionnelle</h3>
                      <p className="text-gray-600">Facilitez votre intégration et votre évolution dans l'entreprise</p>
                    </div>
                  </div>
                  <div className="flex items-start mb-4">
                    <div className="bg-brand-100 p-3 rounded-full mr-4">
                      <Target className="text-brand" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Communication efficace</h3>
                      <p className="text-gray-600">Améliorez vos échanges professionnels au quotidien</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-start mb-4">
                    <div className="bg-brand-100 p-3 rounded-full mr-4">
                      <MessageSquare className="text-brand" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Autonomie accrue</h3>
                      <p className="text-gray-600">Gagnez en indépendance dans vos tâches quotidiennes</p>
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
                  <span>Accueillir une personne en français et identifier son besoin</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Recueillir des informations et poser des questions en français</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Transmettre des consignes et des informations dans un cadre professionnel</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Consulter des documents en français et comprendre des messages audios</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Programme */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Programme détaillé</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Module 1 : Accueillir une personne</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                    <span>Se présenter et identifier son interlocuteur</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                    <span>Comprendre et répondre à une demande simple</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                    <span>Vocabulaire de l'accueil et formules de politesse</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Module 2 : Recueillir des informations</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                    <span>Poser des questions de manière appropriée</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                    <span>Reformuler pour confirmer sa compréhension</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                    <span>Prendre des notes efficaces en français</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Module 3 : Transmettre des consignes et informations</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                    <span>Structurer un message clair et concis</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                    <span>Expliquer des procédures étape par étape</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                    <span>Vérifier la compréhension de son interlocuteur</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Module 4 : Consulter des documents et assister à des réunions</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                    <span>Comprendre des documents professionnels en français</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                    <span>Participer activement à des réunions en français</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                    <span>Comprendre et réagir à des messages audio</span>
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
                    <span>Toute personne non francophone souhaitant améliorer son français professionnel</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Professionnels travaillant dans un environnement francophone</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-4">Prérequis</h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Être en contact avec des francophones dans un contexte professionnel</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Test de niveau initial obligatoire</span>
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
                    <span>Formation 100% synchrone (présentiel ou distanciel)</span>
                  </li>
                  <li className="flex items-start">
                    <Brain className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Exposés théoriques et mises en situation</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Études de cas et jeux de rôles</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Supports pédagogiques personnalisés</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-4">Modalités d'évaluation</h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Audit de niveau initial</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Mini-tests de compréhension réguliers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Évaluation finale LILATE</span>
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
                    Test d'aptitude à travailler en Français – LILATE
                  </h3>
                  <p className="text-gray-600">Cette formation prépare au passage du test LILATE (Live Language Test), certification professionnelle enregistrée au Répertoire Spécifique de France Compétences sous le numéro RS6916.</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-2">Épreuves finales</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                      <span>Mise en situation avec interaction en français</span>
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
                    Intéressé(e) par notre form'action en français professionnel ? Laissez-nous vos coordonnées et un conseiller vous contactera sous 24h.
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

export default FormationFrancaisPage;