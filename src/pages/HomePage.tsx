import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, BookOpen, Zap, Globe, MessageSquare, BarChart3, GraduationCap, Phone, X, CheckCircle, Clock, Tag, CreditCard, Star, PenTool as Tool, Wallet, Search } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useSendEmail } from '../hooks/useSendEmail';

const HomePage = () => {
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);
  const [callbackData, setCallbackData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactFormData, setContactFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const { sendEmail, loading, error, success } = useSendEmail();
  
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
  
  // Stats counter state
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  
  // Start animations when section is in view
  useEffect(() => {
    if (inView) {
      controls.start('visible');
      
      // Animate counters
      const duration = 2000; // 2 seconds
      const interval = 20; // Update every 20ms
      
      // Counter for +280 apprenants
      let startTime = null;
      const targetCount1 = 280;
      const animateCount1 = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        setCount1(Math.floor(percentage * targetCount1));
        if (percentage < 1) {
          requestAnimationFrame(animateCount1);
        }
      };
      requestAnimationFrame(animateCount1);
      
      // Counter for 97%
      let startTime2 = null;
      const targetCount2 = 97;
      const animateCount2 = (timestamp) => {
        if (!startTime2) startTime2 = timestamp;
        const progress = timestamp - startTime2;
        const percentage = Math.min(progress / duration, 1);
        setCount2(Math.floor(percentage * targetCount2));
        if (percentage < 1) {
          requestAnimationFrame(animateCount2);
        }
      };
      requestAnimationFrame(animateCount2);
      
      // Counter for 100%
      let startTime3 = null;
      const targetCount3 = 100;
      const animateCount3 = (timestamp) => {
        if (!startTime3) startTime3 = timestamp;
        const progress = timestamp - startTime3;
        const percentage = Math.min(progress / duration, 1);
        setCount3(Math.floor(percentage * targetCount3));
        if (percentage < 1) {
          requestAnimationFrame(animateCount3);
        }
      };
      requestAnimationFrame(animateCount3);
    }
  }, [inView, controls]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCallbackData(prev => ({ ...prev, [name]: value }));
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = `${contactFormData.name} ${contactFormData.phone} ${contactFormData.message}`;
    await sendEmail({
      to: 'hello@formaprobyaccertif.fr',
      subject: "Contact - FORMAPRO by Accertif",
      text: data
    });

    if (success) {
      setContactFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate sending email
    setTimeout(() => {
      console.log('Sending email to hello@formaprobyaccertif.fr');
      console.log('Subject: Demande de rappel immédiate');
      console.log('Data:', callbackData);
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsCallbackOpen(false);
        setIsSubmitted(false);
        setCallbackData({ firstName: '', lastName: '', phone: '' });
      }, 3000);
    }, 1000);
  };
  
  // Why Choose Us section animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({ 
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
    visible: (i) => ({ 
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
    visible: (i) => ({ 
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
                <div className="text-sm">apprenants formés</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-3">
                <div className="text-2xl font-bold">{count2}%</div>
                <div className="text-sm">ont acquis de nouvelles compétences</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-3">
                <div className="text-2xl font-bold">{count3}%</div>
                <div className="text-sm">finançable</div>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial="hidden"
              animate={controls}
              variants={buttonVariants}
            >
              <Link 
                to="/formations" 
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
              to="/formations" 
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
          
          {/* Featured Formations - New Structured Layout */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Formation 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] transform">
              {/* Image on top */}
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                  alt="Communication professionnelle" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                {/* Domain icon and title */}
                <div className="flex items-start mb-4">
                  <div className="bg-brand-100 p-2 rounded-full mr-3 flex-shrink-0">
                    <MessageSquare className="text-brand" size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Communiquer avec impact à l'oral en présentiel et à distance</h3>
                </div>
                
                {/* Description */}
                <p className="text-gray-600 mb-5">
                  Gagnez en aisance, maîtrisez votre stress et développez votre impact, que ce soit en présentiel ou à distance.
                </p>
                
                {/* Key information with icons in a single row */}
                <div className="flex flex-wrap items-center justify-between mb-5 border-t border-b border-gray-100 py-3">
                  <div className="flex items-center text-sm text-gray-600 mr-3 mb-2">
                    <Clock size={16} className="mr-2 text-brand-600" />
                    <span>21 heures</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mr-3 mb-2">
                    <Tag size={16} className="mr-2 text-brand-600" />
                    <span>2450€</span>
                  </div>
                  <div className="flex items-center text-sm text-green-600 font-medium mr-3 mb-2">
                    <CreditCard size={16} className="mr-2 text-green-600" />
                    <span>Éligible CPF</span>
                  </div>
                </div>
                
                {/* Certification information */}
                <div className="flex items-center text-sm text-gray-600 mb-5">
                  <Award size={16} className="mr-2 text-brand-600" />
                  <span>Certifié par Pollen Conseil</span>
                </div>
                
                {/* CTA Button - Modified to be thinner */}
                <Link 
                  to="/formation/communication-prise-parole" 
                  className="btn-primary btn-md btn-with-icon w-full"
                >
                  Découvrir cette Form'actions <ArrowRight size={14} className="ml-2" />
                </Link>
              </div>
            </div>

            {/* Formation 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] transform">
              {/* Image on top */}
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                  alt="Intelligence Artificielle pour le marketing" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                {/* Domain icon and title */}
                <div className="flex items-start mb-4">
                  <div className="bg-brand-100 p-2 rounded-full mr-3 flex-shrink-0">
                    <Zap className="text-brand" size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Intégrer l'Intelligence Artificielle conversationnelle dans le cycle de vente</h3>
                </div>
                
                {/* Description */}
                <p className="text-gray-600 mb-5">
                  Automatisez vos processus, optimisez vos ventes et engagez mieux vos clients grâce à l'IA conversationnelle.
                </p>
                
                {/* Key information with icons in a single row */}
                <div className="flex flex-wrap items-center justify-between mb-5 border-t border-b border-gray-100 py-3">
                  <div className="flex items-center text-sm text-gray-600 mr-3 mb-2">
                    <Clock size={16} className="mr-2 text-brand-600" />
                    <span>21 heures</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mr-3 mb-2">
                    <Tag size={16} className="mr-2 text-brand-600" />
                    <span>2450€</span>
                  </div>
                  <div className="flex items-center text-sm text-green-600 font-medium mr-3 mb-2">
                    <CreditCard size={16} className="mr-2 text-green-600" />
                    <span>Éligible CPF</span>
                  </div>
                </div>
                
                {/* Certification information */}
                <div className="flex items-center text-sm text-gray-600 mb-5">
                  <Award size={16} className="mr-2 text-brand-600" />
                  <span>Certifié par Online Sales Success </span>
                </div>
                
                {/* CTA Button - Modified to be thinner */}
                <Link 
                  to="/formation/ia-vente" 
                  className="btn-primary btn-md btn-with-icon w-full"
                >
                  Découvrir cette Form'action <ArrowRight size={14} className="ml-2" />
                </Link>
              </div>
            </div>

            {/* Formation 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] transform">
              {/* Image on top */}
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                  alt="Stratégie digitale et réseaux sociaux" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                {/* Domain icon and title */}
                <div className="flex items-start mb-4">
                  <div className="bg-brand-100 p-2 rounded-full mr-3 flex-shrink-0">
                    <BarChart3 className="text-brand" size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Développer son activité avec le Webmarketing et une stratégie adaptée</h3>
                </div>
                
                {/* Description */}
                <p className="text-gray-600 mb-5">
                  Élaborez une stratégie digitale efficace et maîtrisez les leviers des réseaux sociaux pour votre présence en ligne.
                </p>
                
                {/* Key information with icons in a single row */}
                <div className="flex flex-wrap items-center justify-between mb-5 border-t border-b border-gray-100 py-3">
                  <div className="flex items-center text-sm text-gray-600 mr-3 mb-2">
                    <Clock size={16} className="mr-2 text-brand-600" />
                    <span>21 heures</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mr-3 mb-2">
                    <Tag size={16} className="mr-2 text-brand-600" />
                    <span>2450€</span>
                  </div>
                  <div className="flex items-center text-sm text-green-600 font-medium mr-3 mb-2">
                    <CreditCard size={16} className="mr-2 text-green-600" />
                    <span>Éligible CPF</span>
                  </div>
                </div>
                
                {/* Certification information */}
                <div className="flex items-center text-sm text-gray-600 mb-5">
                  <Award size={16} className="mr-2 text-brand-600" />
                  <span>Certifié par Webmarketing & Com </span>
                </div>
                
                {/* CTA Button - Modified to be thinner */}
                <Link 
                  to="/formation/community-management" 
                  className="btn-primary btn-md btn-with-icon w-full"
                >
                  Découvrir cette Form'action <ArrowRight size={14} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
           <Link 
              to="/formations" 
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
              
              <div className="space-y-12">
                <motion.div 
                  className="flex flex-col md:flex-row items-center"
                  initial="hidden"
                  animate={processInView ? "visible" : "hidden"}
                  variants={processStepVariants}
                  custom={0}
                >
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-left">
                    <h3 className="text-xl font-semibold mb-2">Choisissez votre Form'action</h3>
                    <p className="text-gray-600">
                      Parcourez notre catalogue et sélectionnez la formation adaptée à vos objectifs.
                    </p>
                  </div>
                  <div className="md:w-12 flex justify-center">
                    <div className="bg-brand text-white rounded-full w-10 h-10 flex items-center justify-center font-bold z-10">1</div>
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
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right order-1 md:order-none"></div>
                  <div className="md:w-12 flex justify-center">
                    <div className="bg-brand text-white rounded-full w-10 h-10 flex items-center justify-center font-bold z-10">2</div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 md:text-left">
                    <h3 className="text-xl font-semibold mb-2">Concevez votre parcours idéal</h3>
                    <p className="text-gray-600">
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
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-left">
                    <h3 className="text-xl font-semibold mb-2">Formez-vous</h3>
                    <p className="text-gray-600">
                      Bénéficiez d'un accompagnement sur-mesure adapté à votre rythme et à vos objectifs spécifiques.
                    </p>
                  </div>
                  <div className="md:w-12 flex justify-center">
                    <div className="bg-brand text-white rounded-full w-10 h-10 flex items-center justify-center font-bold z-10">3</div>
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
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right order-1 md:order-none"></div>
                  <div className="md:w-12 flex justify-center">
                    <div className="bg-brand text-white rounded-full w-10 h-10 flex items-center justify-center font-bold z-10">4</div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 md:text-left">
                    <h3 className="text-xl font-semibold mb-2">Accédez à SKILLUP by Accertif</h3>
                    <p className="text-gray-600">
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
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-left">
                    <h3 className="text-xl font-semibold mb-2">Certifiez vos compétences</h3>
                    <p className="text-gray-600">
                      Validez vos acquis par une certification reconnue et valorisez vos nouvelles compétences sur le marché du travail.
                    </p>
                  </div>
                  <div className="md:w-12 flex justify-center">
                    <div className="bg-brand text-white rounded-full w-10 h-10 flex items-center justify-center font-bold z-10">5</div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 md:text-left"></div>
                </motion.div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link 
                to="/contact" 
                className="btn-primary btn-lg"
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
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
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
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
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
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
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
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
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
                <div className="text-3xl font-bold mb-2">+280</div>
                <p>apprenants formés</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">97%</div>
                <p>ont acquis de nouvelles compétences</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <p>recommandent nos formations</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">98%</div>
                <p>soulignent l'expertise des formateurs</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/contact" 
              className="btn-primary btn-lg"
            >
              Je contacte mon conseiller
            </Link>
          </div>
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
              {!isSubmitted ? (
                <>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Être rappelé immédiatement</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="firstName" className="block text-gray-700 mb-2">Prénom</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={callbackData.firstName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="lastName" className="block text-gray-700 mb-2">Nom</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={callbackData.lastName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand"
                        required
                      />
                    </div>
                    <div className="mb-6">
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
                    <button
                      type="submit"
                      className="btn-primary btn-lg btn-with-icon w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="inline-flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg> Envoi en cours...
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
  );
};

export default HomePage;