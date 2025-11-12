'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Award, Zap, MessageSquare, BarChart3, Phone, Clock, Tag, CreditCard, Star, PenTool as Tool, Wallet, Search, Globe, Target } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { useStatsAnimation } from '../hooks/useStatsAnimation';
import { STATS_CONFIG } from '../lib/stats-config';
import formationsConfig from '../lib/config/formations';

const HomePage = () => {
  // Récupérer les formations du top 3
  const formation1 = formationsConfig.formations.find(f => f.slug === 'formation-pourquoi-comment-rse');
  const formation2 = formationsConfig.formations.find(f => f.slug === 'formation-diagnostic-rse');
  const formation3 = formationsConfig.formations.find(f => f.slug === 'formation-strategie-rse');
  
  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // Why Choose Us section animation
  const [whyChooseUsRef, whyChooseUsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // Steps section animation
  const [stepsRef, stepsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // Process section animation - individual step refs
  const [processRef, processInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // Stats animation hook
  const { count1, count2, count3 } = useStatsAnimation(inView);
  
  // Start animations when section is in view
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);






  
  // Why Choose Us section animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        delay: i * 0.2,
        ease: "easeOut" 
      }
    })
  };
  
  // Steps animation variants
  const stepVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        delay: i * 0.3,
        ease: "easeOut" 
      }
    })
  };

  // Process step animation variants
  const processStepVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        delay: i * 0.15,
        ease: "easeOut" 
      }
    })
  };

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      }
    }
  };
  
  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        delay: 0.3,
        ease: "easeOut" 
      }
    }
  };
  
  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        delay: 0.6,
        ease: "easeOut" 
      }
    }
  };
  
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        delay: 0.9,
        ease: "easeOut" 
      }
    }
  };

  return (
    <div>
      {/* Hero Section with Static Background */}
      <section className="relative bg-gradient-to-r from-brand-600 to-brand text-white py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center" ref={ref}>
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial="hidden"
              animate={controls}
              variants={titleVariants}
            >
              La RSE n'est plus un <span className="relative inline-block">
                <span className="relative z-10">choix</span>
                <span className="absolute bottom-1 left-0 w-full h-2 bg-white opacity-20 rounded animate-pulse"></span>
              </span>, c'est un <span className="relative inline-block">
                <span className="relative z-10">cap</span>
                <span className="absolute bottom-1 left-0 w-full h-2 bg-white opacity-20 rounded animate-pulse"></span>
              </span>.
            </motion.h1>
            
            <motion.p 
              className="text-xl mb-8"
              initial="hidden"
              animate={controls}
              variants={subtitleVariants}
            >
              Des formations sur mesure, qui parlent vrai, qui font bouger les lignes et pas juste les slides.
            </motion.p>
            
            {/* Dynamic Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-4 mb-10 text-white"
              initial="hidden"
              animate={controls}
              variants={statsVariants}
            >
              <div className="bg-white bg-opacity-10 rounded-lg p-3">
                <div className="text-2xl font-bold">+13%</div>
                <div className="text-sm">de compétitivité en moyenne pour les entreprises engagées en RSE</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-3">
                <div className="text-2xl font-bold">Dans 10 ans</div>
                <div className="text-sm">une entreprise sera RSE — ou ne sera plus</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-3">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm">de nos formations sont finançables (OPCO, CPF, etc.)</div>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial="hidden"
              animate={controls}
              variants={buttonVariants}
            >
              <Link 
                href="/formations" 
                className="btn-primary btn-lg btn-with-icon"
              >
                Découvrir nos Formations
              </Link>
              <a 
                href="tel:0489308554"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-700 font-medium py-3 px-6 rounded-md transition-colors inline-flex items-center justify-center"
              >
                <Phone size={18} className="mr-2" />
                04 89 30 85 54
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Updated with new icons and animations */}
      <section className="py-16 bg-gray-50" ref={whyChooseUsRef}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">🧭 Pourquoi choisir Seriosa 2.0 ?</h2>
            <p className="text-gray-600 mb-8">
            Parce qu’ici, la RSE n’est pas une mode, c’est un engagement : celui d’une équipe passionnée, d’un réseau d’experts et de formations certifiantes qui font avancer les organisations.            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]"
              initial="hidden"
              animate={whyChooseUsInView ? "visible" : "hidden"}
              variants={cardVariants}
              custom={0}
            >
              <div className="bg-brand-100 p-3 rounded-full inline-flex justify-center items-center mb-4 transition-transform duration-300 hover:scale-110">
                <Globe className="text-brand" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">🌍 Un réseau d'experts RSE</h3>
              <p className="text-gray-600">
                Des spécialistes reconnus de la transition écologique, du sport, du management et du développement durable. On mutualise nos compétences pour t'offrir des solutions concrètes, adaptées à ton secteur et à ta taille d'entreprise.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]"
              initial="hidden"
              animate={whyChooseUsInView ? "visible" : "hidden"}
              variants={cardVariants}
              custom={1}
            >
              <div className="bg-brand-100 p-3 rounded-full inline-flex justify-center items-center mb-4 transition-transform duration-300 hover:scale-110">
                <Target className="text-brand" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">💪 Un engagement réel, pas juste un discours</h3>
              <p className="text-gray-600">
                Nous appliquons ce que nous transmettons : sobriété, respect, inclusion, impact local. Chaque accompagnement est pensé pour faire progresser les organisations sans perdre leur âme.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]"
              initial="hidden"
              animate={whyChooseUsInView ? "visible" : "hidden"}
              variants={cardVariants}
              custom={2}
            >
              <div className="bg-brand-100 p-3 rounded-full inline-flex justify-center items-center mb-4 transition-transform duration-300 hover:scale-110">
                <Award className="text-brand" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">🎓 Des formations certifiantes et finançables</h3>
              <p className="text-gray-600">
                Formations Qualiopi et éligibles CPF/OPCO, axées sur la mise en pratique immédiate. Tu repars avec des outils, des preuves et une vraie montée en compétences. Et surtout : tu comprends pourquoi tu le fais.
              </p>
            </motion.div>
          </div>
          
          {/* New CTA Button */}
          <div className="mt-12 text-center">
            <Link 
              href="/formations" 
              className="btn-primary btn-lg btn-with-icon btn-rounded group"
            >
              <Search size={20} className="mr-2 group-hover:animate-pulse" />
              <span>Découvrez nos formations et personnalisez votre parcours</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Formations Certifiantes */}
      <section className="py-16">
         <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Le top 3 de nos Formations</h2>
            <p className="text-gray-600 mb-8">
              Découvrez nos formations RSE conçues pour développer vos compétences en responsabilité sociétale et booster votre expertise !
            </p>
          </div>
          
          {/* Featured Formations - Alignement parfait (hauteurs fixes) */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Formation 1 - Pourquoi et comment la RSE */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] transform h-full flex flex-col">
              {/* Image on top - Fixed height */}
              <div className="h-48 overflow-hidden flex-shrink-0">
                <img 
                  src="/pourquoi.png" 
                  alt="Pourquoi et comment la RSE" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow min-h-0">
                {/* Bloc titre+icône */}
                <div className="flex items-start mb-4 h-[80px]">
                  <div className="bg-brand-100 p-2 rounded-full mr-3 flex-shrink-0">
                    <Star className="text-brand" size={20} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight">Pourquoi et comment la RSE</h3>
                </div>
                {/* Espace obligatoire */}
                <div className="mb-4"></div>
                {/* Description */}
                <div className="mb-5 h-[60px] flex items-center">
                  <p className="text-sm sm:text-base text-gray-600 w-full overflow-hidden">
                    Comprenez les enjeux et les principes fondamentaux de la RSE et apprenez à identifier et prioriser les actions adaptées à votre PME.
                  </p>
                </div>
                {/* Infos */}
                <div className="flex flex-wrap items-center justify-between mb-5 border-t border-b border-gray-100 py-3 h-[48px]">
                  <div className="flex items-center text-sm text-gray-600 mr-3 mb-2">
                    <Clock size={16} className="mr-2 text-brand-600 flex-shrink-0" />
                    <span>4h</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mr-3 mb-2">
                    <Tag size={16} className="mr-2 text-brand-600 flex-shrink-0" />
                    <span>{formation1?.prices.individuel.price || '650€ HT'}</span>
                  </div>
                </div>
                {/* Certification - Hidden for non-certifying formations */}
                <div className="mb-5 h-[28px]"></div>
                {/* Bouton */}
                <div className="mt-auto flex-shrink-0">
                  <Link 
                    href="/formation/pourquoi-comment-rse" 
                    className="btn-primary btn-md btn-with-icon w-full"
                  >
                    Découvrir cette formation <ArrowRight size={14} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Formation 2 - Le diagnostic RSE */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] transform h-full flex flex-col">
              {/* Image on top - Fixed height */}
              <div className="h-48 overflow-hidden flex-shrink-0">
                <img 
                  src="/diagnostique.png" 
                  alt="Le diagnostic RSE" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow min-h-0">
                {/* Bloc titre+icône */}
                <div className="flex items-start mb-4 h-[80px]">
                  <div className="bg-brand-100 p-2 rounded-full mr-3 flex-shrink-0">
                    <Search className="text-brand" size={20} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight">Le diagnostic RSE</h3>
                </div>
                {/* Espace obligatoire */}
                <div className="mb-4"></div>
                {/* Description */}
                <div className="mb-5 h-[60px] flex items-center">
                  <p className="text-sm sm:text-base text-gray-600 w-full overflow-hidden">
                    Réaliser un état des lieux RSE pour identifier vos forces, faiblesses et priorités d'action.
                  </p>
                </div>
                {/* Infos */}
                <div className="flex flex-wrap items-center justify-between mb-5 border-t border-b border-gray-100 py-3 h-[48px]">
                  <div className="flex items-center text-sm text-gray-600 mr-3 mb-2">
                    <Clock size={16} className="mr-2 text-brand-600 flex-shrink-0" />
                    <span>4h</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mr-3 mb-2">
                    <Tag size={16} className="mr-2 text-brand-600 flex-shrink-0" />
                    <span>{formation2?.prices.individuel.price || '650€ HT'}</span>
                  </div>
                </div>
                {/* Certification - Hidden for non-certifying formations */}
                <div className="mb-5 h-[28px]"></div>
                {/* Bouton */}
                <div className="mt-auto flex-shrink-0">
                  <Link 
                    href="/formation/diagnostic-rse" 
                    className="btn-primary btn-md btn-with-icon w-full"
                  >
                    Découvrir cette formation <ArrowRight size={14} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Formation 3 - La stratégie RSE */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] transform h-full flex flex-col">
              {/* Image on top - Fixed height */}
              <div className="h-48 overflow-hidden flex-shrink-0">
                <img 
                  src="/strategie.png" 
                  alt="La stratégie RSE" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow min-h-0">
                {/* Bloc titre+icône */}
                <div className="flex items-start mb-4 h-[80px]">
                  <div className="bg-brand-100 p-2 rounded-full mr-3 flex-shrink-0">
                    <Zap className="text-brand" size={20} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight">La stratégie RSE</h3>
                </div>
                {/* Espace obligatoire */}
                <div className="mb-4"></div>
                {/* Description */}
                <div className="mb-5 h-[60px] flex items-center">
                  <p className="text-sm sm:text-base text-gray-600 w-full overflow-hidden">
                    Acquérez les fondamentaux pour élaborer et mettre en œuvre une stratégie RSE personnalisée et mesurer sa performance.
                  </p>
                </div>
                {/* Infos */}
                <div className="flex flex-wrap items-center justify-between mb-5 border-t border-b border-gray-100 py-3 h-[48px]">
                  <div className="flex items-center text-sm text-gray-600 mr-3 mb-2">
                    <Clock size={16} className="mr-2 text-brand-600 flex-shrink-0" />
                    <span>4h</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mr-3 mb-2">
                    <Tag size={16} className="mr-2 text-brand-600 flex-shrink-0" />
                    <span>{formation3?.prices.individuel.price || '650€ HT'}</span>
                  </div>
                </div>
                {/* Certification - Hidden for non-certifying formations */}
                <div className="mb-5 h-[28px]"></div>
                {/* Bouton */}
                <div className="mt-auto flex-shrink-0">
                  <Link 
                    href="/formation/strategie-rse" 
                    className="btn-primary btn-md btn-with-icon w-full"
                  >
                    Découvrir cette formation <ArrowRight size={14} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
           <Link 
              href="/formations" 
              className="btn-primary btn-lg btn-with-icon btn-rounded group"
            >
              <Search size={20} className="mr-2 group-hover:animate-pulse" />
              <span>Toutes nos Formations</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Enrollment Process - Updated with scroll animations */}
      <section className="py-16 bg-gray-50" ref={processRef}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Passez à l'action en 5 étapes simples !</h2>
            <p className="text-gray-600 mb-8">
              Un parcours simple et rapide pour booster vos compétences dès aujourd'hui.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Process Steps */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-brand-200 transform -translate-x-1/2"></div>
              
              <div className="space-y-8 md:space-y-12">
                <motion.div 
                  className="flex flex-col md:flex-row items-center"
                  initial="hidden"
                  animate={processInView ? "visible" : "hidden"}
                  variants={processStepVariants}
                  custom={0}
                >
                  <div className="md:w-1/2 md:pr-12 mb-4 md:mb-0 md:text-left text-center md:text-left order-2 md:order-none">
                    <h3 className="text-lg md:text-xl font-semibold mb-2">Choisissez votre Formation</h3>
                    <p className="text-sm md:text-base text-gray-600">
                      Parcourez notre catalogue et sélectionnez la formation adaptée à vos objectifs.
                    </p>
                  </div>
                  <div className="md:w-12 flex justify-center mb-4 md:mb-0 order-1 md:order-none">
                    <div className="bg-brand text-white rounded-full w-12 h-12 md:w-10 md:h-10 flex items-center justify-center font-bold z-10 text-lg md:text-base">1</div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 md:text-left"></div>
                </motion.div>
                
                <motion.div 
                  className="flex flex-col md:flex-row items-center"
                  initial="hidden"
                  animate={processInView ? "visible" : "hidden"}
                  variants={processStepVariants}
                  custom={1}
                >
                  <div className="md:w-1/2 md:pr-12 mb-4 md:mb-0 md:text-right order-1 md:order-none"></div>
                  <div className="md:w-12 flex justify-center mb-4 md:mb-0">
                    <div className="bg-brand text-white rounded-full w-12 h-12 md:w-10 md:h-10 flex items-center justify-center font-bold z-10 text-lg md:text-base">2</div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 md:text-left text-center md:text-left">
                    <h3 className="text-lg md:text-xl font-semibold mb-2">Concevez votre parcours idéal</h3>
                    <p className="text-sm md:text-base text-gray-600">
                      Profitez d'un accompagnement personnalisé pour identifier vos besoins, adapter (rythme, modalités pédagogiques) et financer votre parcours.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex flex-col md:flex-row items-center"
                  initial="hidden"
                  animate={processInView ? "visible" : "hidden"}
                  variants={processStepVariants}
                  custom={2}
                >
                  <div className="md:w-1/2 md:pr-12 mb-4 md:mb-0 md:text-left text-center md:text-left order-2 md:order-none">
                    <h3 className="text-lg md:text-xl font-semibold mb-2">Formez-vous</h3>
                    <p className="text-sm md:text-base text-gray-600">
                      Bénéficiez d'un accompagnement sur-mesure adapté à votre rythme et à vos objectifs spécifiques.
                    </p>
                  </div>
                  <div className="md:w-12 flex justify-center mb-4 md:mb-0 order-1 md:order-none">
                    <div className="bg-brand text-white rounded-full w-12 h-12 md:w-10 md:h-10 flex items-center justify-center font-bold z-10 text-lg md:text-base">3</div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 md:text-left"></div>
                </motion.div>
                
                <motion.div 
                  className="flex flex-col md:flex-row items-center"
                  initial="hidden"
                  animate={processInView ? "visible" : "hidden"}
                  variants={processStepVariants}
                  custom={3}
                >
                  <div className="md:w-1/2 md:pr-12 mb-4 md:mb-0 md:text-right order-1 md:order-none"></div>
                  <div className="md:w-12 flex justify-center mb-4 md:mb-0">
                    <div className="bg-brand text-white rounded-full w-12 h-12 md:w-10 md:h-10 flex items-center justify-center font-bold z-10 text-lg md:text-base">4</div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 md:text-left text-center md:text-left">
                    <h3 className="text-lg md:text-xl font-semibold mb-2">Accédez à SKILLUP by Accertif</h3>
                    <p className="text-sm md:text-base text-gray-600">
                      Accédez à une plateforme intuitive intégrant des classes virtuelles, des parcours personnalisés, des échanges collaboratifs et un suivi de progression détaillé. Alliez flexibilité et accompagnement expert pour un apprentissage efficace et interactif.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex flex-col md:flex-row items-center"
                  initial="hidden"
                  animate={processInView ? "visible" : "hidden"}
                  variants={processStepVariants}
                  custom={4}
                >
                  <div className="md:w-1/2 md:pr-12 mb-4 md:mb-0 md:text-left text-center md:text-left order-2 md:order-none">
                    <h3 className="text-lg md:text-xl font-semibold mb-2">Certifiez vos compétences</h3>
                    <p className="text-sm md:text-base text-gray-600">
                      Validez vos acquis par une certification reconnue et valorisez vos nouvelles compétences sur le marché du travail.
                    </p>
                  </div>
                  <div className="md:w-12 flex justify-center mb-4 md:mb-0 order-1 md:order-none">
                    <div className="bg-brand text-white rounded-full w-12 h-12 md:w-10 md:h-10 flex items-center justify-center font-bold z-10 text-lg md:text-base">5</div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 md:text-left"></div>
                </motion.div>
              </div>
            </div>
            
            <div className="text-center mt-8 md:mt-12">
              <Link 
                href="/demande-formation" 
                className="btn-primary btn-md md:btn-lg"
              >
                Je crée ma Formation !
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials & Trust */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Ce que nos apprenants pensent de nous</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full flex flex-col">
              <div className="flex items-start mb-4">
                <div className="bg-brand-100 text-brand p-2 rounded-full mr-4">
                  <MessageSquare size={20} />
                </div>
                <p className="italic text-gray-700">
                  "J'avais une image un peu floue de la RSE. Avec Seriosa 2.0, j'ai compris que ça pouvait être concret, utile, et même fun. Les exemples dans le sport m'ont vraiment parlé."
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium">🎓 Emma</p>
                  <p className="text-sm text-gray-600">Étudiante en management du sport</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full flex flex-col">
              <div className="flex items-start mb-4">
                <div className="bg-brand-100 text-brand p-2 rounded-full mr-4">
                  <MessageSquare size={20} />
                </div>
                <p className="italic text-gray-700">
                  "Ce n'est pas juste une formation, c'est une prise de conscience. On en ressort avec des outils, mais aussi avec l'envie d'agir pour son club et sa communauté."
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium">🏉 Lucas</p>
                  <p className="text-sm text-gray-600">Étudiant en gestion d'association sportive</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full flex flex-col">
              <div className="flex items-start mb-4">
                <div className="bg-brand-100 text-brand p-2 rounded-full mr-4">
                  <MessageSquare size={20} />
                </div>
                <p className="italic text-gray-700">
                  "J'étais sceptique au début. Aujourd'hui, notre plan d'action RSE nous aide à mieux gérer les déchets, à motiver nos équipes et à gagner des appels d'offres. Du concret, pas du jargon."
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium">🧱 Marc</p>
                  <p className="text-sm text-gray-600">Dirigeant PME – secteur BTP</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full flex flex-col">
              <div className="flex items-start mb-4">
                <div className="bg-brand-100 text-brand p-2 rounded-full mr-4">
                  <MessageSquare size={20} />
                </div>
                <p className="italic text-gray-700">
                  "L'accompagnement Seriosa 2.0 nous a permis d'obtenir une meilleure note EcoVadis en quelques mois. Sérieux, réactif et humain. On avance, et on comprend pourquoi."
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium">⚙️ Isabelle</p>
                  <p className="text-sm text-gray-600">Chef d'entreprise – industrie</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats */}
          <div className="bg-brand text-white rounded-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">{STATS_CONFIG.bottom.apprenantsFormes} %</div>
                <p>{STATS_CONFIG.bottom.labels.apprenantsFormes}</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">{STATS_CONFIG.bottom.nouvellesCompetences.toLocaleString('fr-FR')}</div>
                <p>{STATS_CONFIG.bottom.labels.nouvellesCompetences}</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">{STATS_CONFIG.bottom.recommandation}%</div>
                <p>{STATS_CONFIG.bottom.labels.recommandation}</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">{STATS_CONFIG.bottom.expertiseFormateurs} %</div>
                <p>{STATS_CONFIG.bottom.labels.expertiseFormateurs}</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/contact" 
              className="btn-primary btn-lg"
            >
              Je contacte mon conseiller
            </Link>
          </div>
        </div>
      </section>


    </div>
  );
};

export default HomePage;