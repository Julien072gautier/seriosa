'use client';

import React from 'react';
import Link from 'next/link';
import { CheckCircle, Phone, Mail, Clock, ArrowRight, Star, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { STATS_CONFIG } from '../lib/stats-config';

const MerciPage = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 to-brand-100 flex items-center justify-center py-12">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Icône de succès animée */}
          <motion.div 
            className="mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          >
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="text-green-600" size={40} />
            </div>
          </motion.div>

          {/* Titre principal */}
          <motion.h1 
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Merci pour votre demande !
          </motion.h1>

          {/* Message de confirmation */}
          <motion.p 
            className="text-lg text-gray-600 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            Votre message a été envoyé avec succès. Notre équipe d'experts va l'étudier 
            et vous recontacter dans les plus brefs délais pour vous accompagner 
            dans votre projet de formation.
          </motion.p>

          {/* Informations de contact */}
          <motion.div 
            className="bg-gray-50 rounded-xl p-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Comment nous joindre
            </h3>
                         <div className="grid md:grid-cols-2 gap-4">
               <a 
                 href="tel:0975856510"
                 className="flex items-center justify-center p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
               >
                 <Phone className="text-brand mr-3" size={20} />
                 <div className="text-left">
                   <p className="font-medium text-gray-800">09 75 85 65 10</p>
                   <p className="text-sm text-gray-600">Appel direct</p>
                 </div>
               </a>
               <a 
                 href="mailto:hello@formaprobyaccertif.fr"
                 className="flex items-center justify-center p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
               >
                 <Mail className="text-brand mr-3" size={20} />
                 <div className="text-left">
                   <p className="font-medium text-gray-800">hello@formaprobyaccertif.fr</p>
                   <p className="text-sm text-gray-600">Email</p>
                 </div>
               </a>
             </div>
          </motion.div>

          {/* Prochaines étapes */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Prochaines étapes
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center">
                <div className="bg-brand text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  1
                </div>
                <span className="text-gray-700">Analyse de votre demande par nos experts</span>
              </div>
              <div className="flex items-center justify-center">
                <div className="bg-brand text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  2
                </div>
                <span className="text-gray-700">Contact sous 24h pour personnaliser votre parcours</span>
              </div>
              <div className="flex items-center justify-center">
                <div className="bg-brand text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  3
                </div>
                <span className="text-gray-700">Démarrage de votre formation sur-mesure</span>
              </div>
            </div>
          </motion.div>

          {/* Statistiques de confiance */}
          <motion.div 
            className="grid grid-cols-3 gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
          >
                         <div className="text-center">
               <div className="flex items-center justify-center mb-2">
                 <Users className="text-brand mr-1" size={20} />
                 <span className="text-2xl font-bold text-gray-800">+{STATS_CONFIG.apprenantsFormes}</span>
               </div>
               <p className="text-sm text-gray-600">{STATS_CONFIG.apprenantsFormesLabel}</p>
             </div>
             <div className="text-center">
               <div className="flex items-center justify-center mb-2">
                 <Star className="text-brand mr-1" size={20} />
                 <span className="text-2xl font-bold text-gray-800">{STATS_CONFIG.nouvellesCompetences}%</span>
               </div>
               <p className="text-sm text-gray-600">{STATS_CONFIG.nouvellesCompetencesLabel}</p>
             </div>
             <div className="text-center">
               <div className="flex items-center justify-center mb-2">
                 <Award className="text-brand mr-1" size={20} />
                 <span className="text-2xl font-bold text-gray-800">{STATS_CONFIG.financement}%</span>
               </div>
               <p className="text-sm text-gray-600">{STATS_CONFIG.financementLabel}</p>
             </div>
          </motion.div>

          {/* Boutons d'action */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            <Link 
              href="/formations"
              className="btn-primary btn-lg btn-with-icon group"
            >
              <ArrowRight size={20} className="mr-2 group-hover:translate-x-1 transition-transform" />
              Découvrir nos formations
            </Link>
            <Link 
              href="/"
              className="bg-transparent border-2 border-brand text-brand hover:bg-brand hover:text-white font-medium py-3 px-6 rounded-lg transition-colors inline-flex items-center justify-center"
            >
              Retour à l'accueil
            </Link>
          </motion.div>


        </motion.div>
      </div>
    </div>
  );
};

export default MerciPage;
