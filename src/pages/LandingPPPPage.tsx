import { useState, useEffect } from "react";
import { useSendEmail } from "../hooks/useSendEmail";
import { motion } from "framer-motion";
import { Phone, Calendar, CheckCircle, ArrowRight, MessageSquare, X, Zap, Target, Clock, AlertTriangle, Lightbulb, Rocket, Star, Award, CreditCard, Tag, PenTool as Tool, Wallet, Search, UserCheck, Brain, Settings, BadgeCheck, ChevronDown, Mic, Users, Presentation as PresentationChart } from 'lucide-react';
import TagManager from 'react-gtm-module';
import { Helmet } from 'react-helmet-async';
import TestimonialsCarousel from '../components/TestimonialsCarousel';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const modules = [
  {
    title: "Module 1 : Structurer sa pensée et le contenu de sa présentation",
    icon: "🎯",
    description:
      "Apprenez à organiser vos idées et à construire un discours impactant.\n\nMaîtrisez les techniques de structuration pour adapter votre message à votre public et au contexte, définir vos objectifs et créer une progression logique captivante.",
  },
  {
    title: "Module 2 : Maîtriser sa posture et sa voix",
    icon: "🎤",
    description:
      "Développez votre présence et votre charisme à l'oral.\n\nDécouvrez comment aligner votre communication verbale et non-verbale, gérer votre respiration et votre voix, et établir une connexion authentique avec votre auditoire.",
  },
  {
    title: "Module 3 : Gérer les interactions et répondre aux objections",
    icon: "💬",
    description:
      "Transformez les échanges difficiles en opportunités.\n\nApprenez à anticiper et gérer les objections, à rebondir efficacement et à obtenir l'adhésion de votre auditoire grâce à des techniques de questionnement et de reformulation efficaces.",
  },
  {
    title: "Module 4 : Adapter sa communication au distanciel",
    icon: "💻",
    description:
      "Excellez dans vos prises de parole à distance.\n\nMaîtrisez les spécificités de la communication en visioconférence, créez un environnement engageant et maintenez l'attention de votre audience même à distance.",
  },
];

const LandingPPPPage = () => {
  const { sendEmail, loading, error: emailError, success } = useSendEmail();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    need: "information",
    message: ""
  });
  const [error, setError] = useState("");
  
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);
  const [callbackData, setCallbackData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: ''
  });

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    TagManager.initialize({ gtmId: '' });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCallbackChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCallbackData(prev => ({ ...prev, [name]: value }));
  };

  const handleCallbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const emailContent = `
      Prénom: ${callbackData.firstName}
      Nom: ${callbackData.lastName}
      Téléphone: ${callbackData.phone}
      Email : ${callbackData.email}
    `;

    await sendEmail({
      to: 'hello@formaprobyaccertif.fr',
      subject: "Contacts Landing Page PPP",
      text: emailContent
    });

    if (success) {
      setTimeout(() => {
        setIsCallbackOpen(false);
        setCallbackData({
          firstName: '',
          lastName: '',
          phone: '',
          email: ''
        });
      }, 3000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      setError("Veuillez remplir tous les champs obligatoires.");
      return;
    }
    setError("");

    await sendEmail({
      to: 'hello@formaprobyaccertif.fr',
      subject: "Contacts Landing Page PPP",
      text: `${form.name} ${form.phone} ${form.message}`
    });
  };

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>Formation Prise de Parole en Public | Développez votre impact à l'oral</title>
        <meta name="description" content="Maîtrisez l'art de la prise de parole en public et gagnez en impact lors de vos interventions grâce à notre formation certifiante de 21h." />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Fixed Contact Bar */}
        <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
              <div className="flex items-center w-full md:w-auto justify-center md:justify-start">
                <img 
                  src="https://irp.cdn-website.com/e0ab763a/dms3rep/multi/Logo-bdcdc0e7.png"
                  alt="FORMAPRO by Accertif"
                  className="h-10"
                />
              </div>
              <div className="flex items-center space-x-4">
                <a
                  href="tel:0789027706"
                  className="group relative inline-flex items-center px-6 py-3 rounded-lg bg-cyan-500 text-white hover:text-cyan-500 font-semibold overflow-hidden shadow-md transition-all duration-300 border-2 border-transparent hover:bg-white hover:border-cyan-500"
                >
                  <span className="absolute inset-0 w-0 bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
                  <span className="relative flex items-center z-10">
                    <Phone size={18} className="mr-2 transition-colors duration-300 group-hover:text-cyan-500" />
                    0789027706
                  </span>
                </a>           
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <motion.section 
          className="from-brand-600 to-brand text-white py-20 px-4 relative overflow-hidden mt-16"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-100 z-0"
            style={{ backgroundImage: "url('https://irp.cdn-website.com/e0ab763a/dms3rep/multi/ChatGPT+Image+7+avr.+2025-+07_15_23.png')" }}
          ></div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl font-bold mb-3">
                <span className="relative">
                  Captivez votre auditoire
                  <span className="absolute bottom-1 left-0 w-full h-2 bg-white opacity-20"></span>
                </span>{" "}
                et gagnez en impact !
              </h1>
              <p className="text-2xl text-white/90">
                Formation certifiante et éligible CPF pour développer votre aisance à l'oral
              </p>                       
            </div>
                                     
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-transform">
                <div className="flex items-center justify-center mb-3">
                  <UserCheck className="text-pink-600" size={28} />
                </div>
                <div className="text-3xl font-bold mb-1">Gagnez en confiance</div>
                <div className="text-sm text-white/80">Développez votre aisance à l'oral et apprenez à maîtriser votre stress pour des interventions impactantes.</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-transform">
                <div className="flex items-center justify-center mb-3">
                  <Mic className="text-brand-200" size={28} />
                </div>
                <div className="text-3xl font-bold mb-1">Captivez votre public</div>
                <div className="text-sm text-white/80">Maîtrisez les techniques pour capter l'attention, convaincre et faire passer vos messages avec impact.</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-transform">
                <div className="flex items-center justify-center mb-3">
                  <Brain className="text-amber-500" size={28} />
                </div>
                <div className="text-3xl font-bold mb-1">Devenez mémorable</div>
                <div className="text-sm text-white/80">La formation vous aide à maîtriser votre voix, votre posture, et votre impact émotionnel.</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <button 
  onClick={() => {
    const section = document.getElementById("programme");
    section?.scrollIntoView({ behavior: "smooth" });
  }}
  className="group relative overflow-hidden bg-white text-brand-600 hover:text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 mt-8"
>
  <span className="absolute inset-0 w-0 bg-brand-600 transition-all duration-300 ease-out group-hover:w-full"></span>
  <span className="relative flex items-center justify-center">
    <Zap size={20} className="mr-2" />
    <span className="mx-2">Découvrir le programme</span>
    <ArrowRight size={20} className="ml-2 transform transition-transform group-hover:translate-x-1" />
  </span>
</button>
            </div>

            <div className="mt-12 flex justify-center space-x-8">
                           <img 
                src="https://irp.cdn-website.com/e0ab763a/dms3rep/multi/CPF.png" 
                alt="Eligible CPF" 
                className="h-16"
              />
            </div>
          </div>
        </motion.section>

        {/* Pourquoi cette formation */}
        <motion.section 
          className="py-16 px-4 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              La prise de parole en public : un levier essentiel pour votre réussite professionnelle
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-pink-50 border-l-4 border-pink-600 rounded-xl p-6 text-pink-700">
                <div className="flex items-center mb-3">
                  <AlertTriangle className="text-pink-600 mr-2" size={28} />
                  <h3 className="text-xl font-bold">Constat</h3>
                </div>
                <p>Le stress et le manque de confiance limitent votre impact lors de vos prises de parole, que ce soit en réunion, en présentation ou en visioconférence.</p>
              </div>
              
              <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6 text-amber-700">
                <div className="flex items-center mb-3">
                  <Clock className="text-amber-500 mr-2" size={28} />
                  <h3 className="text-xl font-bold">Impact</h3>
                </div>
                <p>Une communication peu efficace nuit à votre crédibilité, limite votre influence et peut freiner votre évolution professionnelle.</p>
              </div>
              
              <div className="bg-cyan-50 border-l-4 border-cyan-600 rounded-xl p-6 text-cyan-700">
                <div className="flex items-center mb-3">
                  <Rocket className="text-cyan-600 mr-2" size={28} />
                  <h3 className="text-xl font-bold">Solution</h3>
                </div>
                <p>Notre formation vous donne les clés pour maîtriser votre communication, gagner en impact et faire passer vos messages avec conviction, que ce soit en présentiel ou à distance.</p>
              </div>
            </div>

            {/* New CTA Section */}
            <div className="flex justify-center mt-10">
              <button 
                onClick={() => setIsCallbackOpen(true)}
                className="group relative overflow-hidden bg-cyan-500 text-white hover:text-cyan-500 font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center shadow-md border-2 border-transparent hover:bg-white hover:border-cyan-500"
              >
                <span className="absolute inset-0 w-0 bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
                <span className="relative z-10 flex items-center">
                  <Zap size={20} className="mr-2 transition-colors duration-300 group-hover:text-cyan-500" />
                  <span className="mx-2">Recevoir le programme</span>
                  <ArrowRight size={20} className="ml-2 group-hover:text-cyan-500 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
            
          </div>
        </motion.section>

        {/* pourquoi nous */}
        <motion.section 
          className="py-16 px-4 bg-[#f3f0fa]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Notre expertise au service de votre réussite</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mt-10">
              {/* Bloc 1 */}
              <div className="bg-pink-50 rounded-xl p-6 shadow-sm text-gray-800">
                <div className="flex items-center justify-center mb-4">
                  <CheckCircle className="text-pink-600" size={32} />
                </div>
                <h3 className="text-lg font-bold text-center mb-2">La formation que vous souhaitez</h3>
                <p className="text-sm text-center text-gray-700">Nos formations sont adaptables à vos attentes. Vous choisissez vos modalités d'apprentissage.</p>
              </div>
              
              <div className="bg-amber-50 rounded-xl p-6 shadow-sm text-gray-800">
                <div className="flex items-center justify-center mb-4">
                  <UserCheck className="text-amber-600" size={32} />
                </div>
                <h3 className="text-lg font-bold text-center mb-2">Des experts de la communication</h3>
                <p className="text-sm text-center text-gray-700">Nos formateurs sont des experts qui vous transmettent leur savoir et leurs techniques éprouvées.</p>
              </div>
              
              <div className="bg-emerald-50 rounded-xl p-6 shadow-sm text-gray-800">
                <div className="flex items-center justify-center mb-4">
                  <BadgeCheck className="text-emerald-600" size={32} />
                </div>
                <h3 className="text-lg font-bold text-center mb-2">Formation 100% finançable avec votre CPF</h3>
                <p className="text-sm text-center text-gray-700">Un investissement sûr pour développer vos compétences sans contrainte financière.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <button 
                onClick={() => setIsCallbackOpen(true)}
                className="group relative overflow-hidden bg-cyan-500 text-white hover:text-cyan-500 font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg border-2 border-transparent hover:bg-white hover:border-cyan-500"
              >
                <span className="absolute inset-0 w-0 bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
                <span className="relative z-10 flex items-center">
                  <Zap size={20} className="mr-2 transition-colors duration-300 group-hover:text-cyan-500" />
                  Parler à un expert 
                  <ArrowRight size={20} className="ml-2 group-hover:text-cyan-500 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </motion.section>

        {/* Testimonials & Trust */}
        <motion.section 
          className="py-16 px-4 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Ils ont gagné en impact grâce à notre formation</h2>
              <div className="flex justify-center items-center mb-4">
                <div className="flex items-center bg-brand-50 px-6 py-2 rounded-full">
                  <Star className="text-yellow-400 fill-current h-6 w-6" />
                  <span className="ml-2 font-bold text-brand-600">98% de satisfaction – Découvrez pourquoi !</span>
                </div>
              </div>
            </div>

            <TestimonialsCarousel />

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <button 
                onClick={() => setIsCallbackOpen(true)}
                className="group relative overflow-hidden bg-cyan-500 text-white hover:text-cyan-500 font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg border-2 border-transparent hover:bg-white hover:border-cyan-500"
              >
                <span className="absolute inset-0 w-0 bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
                <span className="relative z-10 flex items-center">
                  <Zap size={20} className="mr-2 transition-colors duration-300 group-hover:text-cyan-500" />
                  Recevoir le programme
                  <ArrowRight size={20} className="ml-2 group-hover:text-cyan-500 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </motion.section>

        {/* Section CPF & Financement */}
        <motion.section 
          className="py-16 px-4 bg-[#f3f0fa]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Éligible CPF : Inscrivez-vous en 2 minutes</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <CreditCard className="h-12 w-12 text-brand-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">100 % finançable</h3>
                <p className="text-gray-600">Un reste à charge de 102 euros peut s'appliquer si votre employeur ou France Travail ne participe pas à votre projet de formation.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Award className="h-12 w-12 text-brand-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Formation certifiée</h3>
                <p className="text-gray-600">Vos nouvelles compétences sont reconnues et certifiées par notre partenaire Pollen Conseil et par France Compétences.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Rocket className="h-12 w-12 text-brand-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Démarrage rapide</h3>
                <p className="text-gray-600">Une fois votre projet validé avec un de nos conseillers votre formation démarre sous 15 jours. </p>
              </div>
            </div>                    
             
            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <button 
                onClick={() => setIsCallbackOpen(true)}
                className="group relative overflow-hidden bg-cyan-500 text-white hover:text-cyan-500 font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg border-2 border-transparent hover:bg-white hover:border-cyan-500"
              >
                <span className="absolute inset-0 w-0 bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
                <span className="relative z-10 flex items-center">
                  <Zap size={20} className="mr-2 transition-colors duration-300 group-hover:text-cyan-500" />
                  Recevoir le programme
                  <ArrowRight size={20} className="ml-2 group-hover:text-cyan-500 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
            </div>            
          </div>
        </motion.section>
        
        {/* Programme détaillé */}
        <motion.section
          id="programme"
          className="py-16 px-4 bg-gray-50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Programme de la formation</h2>

            <div className="space-y-4 mb-12">
              {modules.map((mod, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex justify-between items-center text-left"
                  >
                    <div className="flex items-start">
                      <span className="mr-3 text-xl">✅</span>
                      <h3 className="text-lg font-semibold">{mod.title}</h3>
                    </div>
                    <ChevronDown
                      className={`transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openIndex === index && (
                    <div className="mt-4 text-gray-600 whitespace-pre-line">
                      <p>{mod.icon} {mod.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <a
              href="https://www.moncompteformation.gouv.fr/espace-prive/html/#/formation/recherche/91819995100016_PPP/91819995100016_PPP-Indiv"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-cyan-500 text-white hover:text-cyan-500 font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg border-2 border-transparent hover:bg-white hover:border-cyan-500"
            >
              <span className="absolute inset-0 w-0 bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
              <span className="relative z-10 flex items-center">
                <Zap size={20} className="mr-2 transition-colors duration-300 group-hover:text-cyan-500" />
                Je démarre ma formation
                <ArrowRight size={20} className="ml-2 group-hover:text-cyan-500 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>
        </motion.section>

      <section className="bg-[#f3f0fa] py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Prêt à développer votre impact à l'oral ?
          </h3>
          <p className="text-gray-700 mb-8">
            Rejoignez une formation 100 % opérationnelle, éligible au CPF, pour transformer concrètement votre manière de communiquer.
          </p>

          <a
            href="https://www.moncompteformation.gouv.fr/espace-prive/html/#/formation/recherche/91819995100016_PPP/91819995100016_PPP-Indiv"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden bg-cyan-500 text-white hover:text-cyan-500 font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg border-2 border-transparent hover:bg-white hover:border-cyan-500"
          >
            <span className="absolute inset-0 w-0 bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
            <span className="relative z-10 flex items-center">
              <Zap size={20} className="mr-2 transition-colors duration-300 group-hover:text-cyan-500" />
              Je démarre ma formation
              <ArrowRight size={20} className="ml-2 group-hover:text-cyan-500 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </div>
      </section>
    
        
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
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Être rappelé immédiatement</h3>
                    <form onSubmit={handleCallbackSubmit}>
                      <div className="mb-4">
                        <label htmlFor="firstName" className="block text-gray-700 mb-2">
                          Prénom
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={callbackData.firstName}
                          onChange={handleCallbackChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="lastName" className="block text-gray-700 mb-2">
                          Nom
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={callbackData.lastName}
                          onChange={handleCallbackChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={callbackData.email}
                          onChange={handleCallbackChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand"
                          required
                        />
                      </div>
                      <div className="mb-6">
                        <label htmlFor="phone" className="block text-gray-700 mb-2">
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={callbackData.phone}
                          onChange={handleCallbackChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand"
                          required
                        />
                      </div>

                      {emailError && (
                        <div className="mb-4 p-3 bg-red-50 text-red-800 rounded-md">
                          {emailError}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-brand text-white py-2 px-4 rounded-md hover:bg-brand-600 transition-colors flex items-center justify-center"
                      >
                        {loading ? (
                          <span className="inline-flex items-center">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Envoi en cours...
                          </span>
                        ) : (
                          "Demander un rappel immédiat"
                        )}
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="bg-green-100 text-green-800 p-4 rounded-md mb-4 flex items-center justify-center">
                      <CheckCircle size={24} className="mr-2" />
                      <div>
                        <p className="font-medium">Demande envoyée avec succès !</p>
                        <p>Un conseiller vous contactera très rapidement.</p>
                      </div>
                    </div>
                    <p className="text-gray-600">Merci pour votre confiance.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default LandingPPPPage;