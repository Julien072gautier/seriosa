'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Award, Zap, MessageSquare, BarChart3, Phone, Clock, Tag, CreditCard, Star, PenTool as Tool, Wallet, Search } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { useStatsAnimation } from '../hooks/useStatsAnimation';
import { STATS_CONFIG } from '../lib/stats-config';

const HomePage = () => {


  
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
              Des compétences <span className="relative inline-block">
                <span className="relative z-10">pratiques</span>
                <span className="absolute bottom-1 left-0 w-full h-2 bg-white opacity-20 rounded animate-pulse"></span>
              </span>, une Form'action <span className="relative inline-block">
                <span className="relative z-10">sur-mesure</span>
                <span className="absolute bottom-1 left-0 w-full h-2 bg-white opacity-20 rounded animate-pulse"></span>
              </span>.
            </motion.h1>
            
            <motion.p 
              className="text-xl mb-8"
              initial="hidden"
              animate={controls}
              variants={subtitleVariants}
            >
              Apprenez à votre rythme avec une Form'action individualisée, conçue pour une mise en pratique immédiate et 100 % finançable.
            </motion.p>
            
            {/* Dynamic Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-4 mb-10 text-white"
              initial="hidden"
              animate={controls}
              variants={statsVariants}
            >
              <div className="bg-white bg-opacity-10 rounded-lg p-3">
                <div className="text-2xl font-bold">+{count1}</div>
                <div className="text-sm">{STATS_CONFIG.hero.labels.apprenantsFormes}</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-3">
                <div className="text-2xl font-bold">{count2}%</div>
                <div className="text-sm">{STATS_CONFIG.hero.labels.nouvellesCompetences}</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-3">
                <div className="text-2xl font-bold">{count3}%</div>
                <div className="text-sm">{STATS_CONFIG.hero.labels.financement}</div>
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
                Découvrir nos Form'actions
              </Link>
              <a 
                href="tel:0975856510"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-700 font-medium py-3 px-6 rounded-md transition-colors inline-flex items-center justify-center"
              >
                <Phone size={18} className="mr-2" />
                09 75 85 65 10
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Updated with new icons and animations */}
      <section className="py-16 bg-gray-50" ref={whyChooseUsRef}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Pourquoi nous choisir ?</h2>
            <p className="text-gray-600 mb-8">
              Un accompagnement expert, une formation sur-mesure, des compétences certifiées.
            </p>
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
                <Star className="text-brand" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Un suivi personnalisé pour une montée en compétences efficace</h3>
              <p className="text-gray-600">
                Nos experts métier vous accompagnent tout au long de votre parcours pour garantir l'acquisition de compétences immédiatement exploitables en situation réelle.
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
                <Tool className="text-brand" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Nos Form'actions vous permettent de construire un parcours sur mesure.</h3>
              <p className="text-gray-600">
              Vous choisissez le rythme, les modalités et les formats les plus adaptés pour atteindre vos objectifs professionnels tout en valorisant vos acquis.
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
                <Wallet className="text-brand" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Des formations conçues pour certifier vos compétences avec votre CPF</h3>
              <p className="text-gray-600">
                Toutes nos formations certifient vos acquis et renforcent vos compétences. Elles sont donc 100 % finançables par votre CPF et tous les autres dispositifs de financement.
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
              <span>Découvrez nos form'actions et personnalisez votre parcours</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Form'actions Certifiantes */}
      <section className="py-16">
         <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Le top 3 de nos Form'actions</h2>
            <p className="text-gray-600 mb-8">
              Atteignez vos objectifs avec nos Form'actions certifiantes, 100% opérationnelles et finançables !
            </p>
          </div>
          
          {/* Featured Formations - Alignement parfait (hauteurs fixes) */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Formation 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] transform h-full flex flex-col">
              {/* Image on top - Fixed height */}
              <div className="h-48 overflow-hidden flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                  alt="Communication professionnelle" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow min-h-0">
                {/* Bloc titre+icône */}
                <div className="flex items-start mb-4 h-[80px]">
                  <div className="bg-brand-100 p-2 rounded-full mr-3 flex-shrink-0">
                    <MessageSquare className="text-brand" size={20} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight">Communiquer avec impact à l'oral en présentiel et à distance</h3>
                </div>
                {/* Espace obligatoire */}
                <div className="mb-4"></div>
                {/* Description */}
                <div className="mb-5 h-[60px] flex items-center">
                  <p className="text-sm sm:text-base text-gray-600 w-full overflow-hidden">
                    Gagnez en aisance, maîtrisez votre stress et développez votre impact, que ce soit en présentiel ou à distance.
                  </p>
                </div>
                {/* Infos */}
                <div className="flex flex-wrap items-center justify-between mb-5 border-t border-b border-gray-100 py-3 h-[48px]">
                  <div className="flex items-center text-sm text-gray-600 mr-3 mb-2">
                    <Clock size={16} className="mr-2 text-brand-600 flex-shrink-0" />
                    <span>21 heures</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mr-3 mb-2">
                    <Tag size={16} className="mr-2 text-brand-600 flex-shrink-0" />
                    <span>2450€</span>
                  </div>
                  <div className="flex items-center text-sm text-green-600 font-medium mr-3 mb-2">
                    <CreditCard size={16} className="mr-2 text-green-600 flex-shrink-0" />
                    <span>Éligible CPF</span>
                  </div>
                </div>
                {/* Certification */}
                <div className="flex items-center text-sm text-gray-600 mb-5 h-[28px]">
                  <Award size={16} className="mr-2 text-brand-600 flex-shrink-0" />
                  <span>Certifié par Pollen Conseil</span>
                </div>
                {/* Bouton */}
                <div className="mt-auto flex-shrink-0">
                  <Link 
                    href="/formation/communication-prise-parole" 
                    className="btn-primary btn-md btn-with-icon w-full"
                  >
                    Découvrir cette Form'actions <ArrowRight size={14} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Formation 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] transform h-full flex flex-col">
              {/* Image on top - Fixed height */}
              <div className="h-48 overflow-hidden flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                  alt="Intelligence Artificielle pour le marketing" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow min-h-0">
                {/* Bloc titre+icône */}
                <div className="flex items-start mb-4 h-[80px]">
                  <div className="bg-brand-100 p-2 rounded-full mr-3 flex-shrink-0">
                    <Zap className="text-brand" size={20} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight">Intégrer l'IA conversationnelle dans le cycle de vente</h3>
                </div>
                {/* Espace obligatoire */}
                <div className="mb-4"></div>
                {/* Description */}
                <div className="mb-5 h-[60px] flex items-center">
                  <p className="text-sm sm:text-base text-gray-600 w-full overflow-hidden">
                    Automatisez vos processus, optimisez vos ventes et engagez mieux vos clients grâce à l'IA conversationnelle.
                  </p>
                </div>
                {/* Infos */}
                <div className="flex flex-wrap items-center justify-between mb-5 border-t border-b border-gray-100 py-3 h-[48px]">
                  <div className="flex items-center text-sm text-gray-600 mr-3 mb-2">
                    <Clock size={16} className="mr-2 text-brand-600 flex-shrink-0" />
                    <span>21 heures</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mr-3 mb-2">
                    <Tag size={16} className="mr-2 text-brand-600 flex-shrink-0" />
                    <span>2450€</span>
                  </div>
                  <div className="flex items-center text-sm text-green-600 font-medium mr-3 mb-2">
                    <CreditCard size={16} className="mr-2 text-green-600 flex-shrink-0" />
                    <span>Éligible CPF</span>
                  </div>
                </div>
                {/* Certification */}
                <div className="flex items-center text-sm text-gray-600 mb-5 h-[28px]">
                  <Award size={16} className="mr-2 text-brand-600 flex-shrink-0" />
                  <span>Certifié par Online Sales Success</span>
                </div>
                {/* Bouton */}
                <div className="mt-auto flex-shrink-0">
                  <Link 
                    href="/formation/ia-vente" 
                    className="btn-primary btn-md btn-with-icon w-full"
                  >
                    Découvrir cette Form'action <ArrowRight size={14} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Formation 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] transform h-full flex flex-col">
              {/* Image on top - Fixed height */}
              <div className="h-48 overflow-hidden flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                  alt="Stratégie digitale et réseaux sociaux" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow min-h-0">
                {/* Bloc titre+icône */}
                <div className="flex items-start mb-4 h-[80px]">
                  <div className="bg-brand-100 p-2 rounded-full mr-3 flex-shrink-0">
                    <BarChart3 className="text-brand" size={20} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight">Développer son activité avec le Webmarketing</h3>
                </div>
                {/* Espace obligatoire */}
                <div className="mb-4"></div>
                {/* Description */}
                <div className="mb-5 h-[60px] flex items-center">
                  <p className="text-sm sm:text-base text-gray-600 w-full overflow-hidden">
                    Élaborez une stratégie digitale efficace et maîtrisez les leviers des réseaux sociaux pour votre présence en ligne.
                  </p>
                </div>
                {/* Infos */}
                <div className="flex flex-wrap items-center justify-between mb-5 border-t border-b border-gray-100 py-3 h-[48px]">
                  <div className="flex items-center text-sm text-gray-600 mr-3 mb-2">
                    <Clock size={16} className="mr-2 text-brand-600 flex-shrink-0" />
                    <span>21 heures</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mr-3 mb-2">
                    <Tag size={16} className="mr-2 text-brand-600 flex-shrink-0" />
                    <span>2450€</span>
                  </div>
                  <div className="flex items-center text-sm text-green-600 font-medium mr-3 mb-2">
                    <CreditCard size={16} className="mr-2 text-green-600 flex-shrink-0" />
                    <span>Éligible CPF</span>
                  </div>
                </div>
                {/* Certification */}
                <div className="flex items-center text-sm text-gray-600 mb-5 h-[28px]">
                  <Award size={16} className="mr-2 text-brand-600 flex-shrink-0" />
                  <span>Certifié par Webmarketing & Com</span>
                </div>
                {/* Bouton */}
                <div className="mt-auto flex-shrink-0">
                  <Link 
                    href="/formation/community-management" 
                    className="btn-primary btn-md btn-with-icon w-full"
                  >
                    Découvrir cette Form'action <ArrowRight size={14} className="ml-2" />
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
              <span>Toutes nos Form'action</span>
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
                    <h3 className="text-lg md:text-xl font-semibold mb-2">Choisissez votre Form'action</h3>
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
                Je crée ma Form'action !
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
                  "Grâce à cette formation, j'ai enfin dépassé mon stress et découvert que l'aisance orale pouvait s'apprendre ! Lors de ma certification, j'ai pris la parole avec plaisir et confiance."
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium">Marianne</p>
                  <p className="text-sm text-gray-600">Assistante de direction</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full flex flex-col">
              <div className="flex items-start mb-4">
                <div className="bg-brand-100 text-brand p-2 rounded-full mr-4">
                  <MessageSquare size={20} />
                </div>
                <p className="italic text-gray-700">
                  "Hyper complet, énormément de ressources, beaucoup de retours d'expériences ultra intéressants. Formateurs très talentueux et dynamiques."
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium">Arthur</p>
                  <p className="text-sm text-gray-600">Entrepreneur digital</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full flex flex-col">
              <div className="flex items-start mb-4">
                <div className="bg-brand-100 text-brand p-2 rounded-full mr-4">
                  <MessageSquare size={20} />
                </div>
                <p className="italic text-gray-700">
                  "Cette formation est une pépite pour mieux comprendre l'univers du financement de la formation en France. Tellement pépite, qu'elle devrait rester confidentielle... seulement pour quelques heureux élus !"
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium">Benjamin</p>
                  <p className="text-sm text-gray-600">Formateur en management</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full flex flex-col">
              <div className="flex items-start mb-4">
                <div className="bg-brand-100 text-brand p-2 rounded-full mr-4">
                  <MessageSquare size={20} />
                </div>
                <p className="italic text-gray-700">
                  "Le format demi-journée permet de garder un bon rythme de concentration tout en assimilant toutes les informations. L'expérience et l'expertise du formateur sont riches et permettent d'illustrer chaque concept de manière claire et engageante."
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium">Virginie</p>
                  <p className="text-sm text-gray-600">Consultante</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats */}
          <div className="bg-brand text-white rounded-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">+{STATS_CONFIG.bottom.apprenantsFormes}</div>
                <p>{STATS_CONFIG.bottom.labels.apprenantsFormes}</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">{STATS_CONFIG.bottom.nouvellesCompetences}%</div>
                <p>{STATS_CONFIG.bottom.labels.nouvellesCompetences}</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">{STATS_CONFIG.bottom.recommandation}%</div>
                <p>{STATS_CONFIG.bottom.labels.recommandation}</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">{STATS_CONFIG.bottom.expertiseFormateurs}%</div>
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