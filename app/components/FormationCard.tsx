import React from 'react';
import { Formation } from '../lib/config/types';
import { Clock, Award, Users, ArrowRight, Tag } from 'lucide-react';
import Link from 'next/link';
import FormationIcon from './FormationIcon';

// Propriétés du composant
interface FormationCardProps {
  formation: Formation;
  isCompact?: boolean;
}

const FormationCard: React.FC<FormationCardProps> = ({ formation, isCompact = false }) => {
  // Fonction pour formater les informations de certification
  const formatCertification = () => {
    if (!formation.certifications || formation.certifications.length === 0) return null;
    
    // Afficher la première certification
    return formation.certifications[0];
  };

  const certificationText = formatCertification();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full">
      {/* Image de la formation */}
      <div className="relative">
        <img 
          src={formation.image} 
          alt={formation.title} 
          className="w-full h-48 object-cover"
          onError={(e) => {
            e.currentTarget.src = '/images/formations/default.jpg';
          }} 
        />
        {formation.cpfEligible && (
          <div className="absolute top-4 right-4 bg-brand text-white text-xs font-bold px-2 py-1 rounded uppercase">
            CPF
          </div>
        )}
      </div>
      
      {/* Contenu de la carte */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-start mb-2">
          <div className="bg-brand p-1 rounded-full mr-2 flex-shrink-0 flex items-center justify-center" style={{ width: '32px', height: '32px' }}>
            <FormationIcon icon={formation.icon || "MessageSquare"} size={20} className="" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 leading-tight">{formation.title}</h3>
        </div>
        <p className="text-gray-600 mb-4 flex-grow">{formation.shortDescription}</p>
        
        {/* Détails de la formation en format compact */}
        <div className="mt-auto">
          {isCompact ? (
            <div className="flex flex-wrap justify-between mb-4">
              <div className="flex items-center text-gray-600 text-sm mb-2 mr-3">
                <Clock size={16} className="mr-1" />
                <span>{formation.duration}</span>
              </div>
              {certificationText && (
                <div className="flex items-center text-gray-600 text-sm mb-2">
                  <Award size={16} className="mr-1" />
                  <span className="text-xs">{certificationText}</span>
                </div>
              )}
              {formation.cpfEligible && (
                <div className="flex items-center text-green-600 text-sm mb-2">
                  <Award size={16} className="mr-1" />
                  <span className="text-xs">Éligible CPF</span>
                </div>
              )}
            </div>
          ) : (
            // Détails de la formation en format complet
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-gray-600">
                <Clock size={18} className="mr-2" />
                <span><strong>Durée:</strong> {formation.duration}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Tag size={18} className="mr-2" />
                <span><strong>Prix individuel:</strong> {formation.prices.individuel.price}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Users size={18} className="mr-2" />
                <span><strong>Prix collectif:</strong> {formation.prices.collectif.price}</span>
              </div>
              {formation.cpfEligible && (
                <div className="flex items-center text-brand">
                  <Award size={18} className="mr-2" />
                  <span><strong>Financement:</strong> Éligible CPF</span>
                </div>
              )}
              {certificationText && (
                <div className="flex items-center text-gray-600">
                  <Award size={18} className="mr-2" />
                  <span><strong>Certification:</strong> {certificationText}</span>
                </div>
              )}
            </div>
          )}
          
          {/* Bouton d'action */}
          <Link 
            href={`/formation/${formation.slug.replace('formation-', '')}`} 
            className="btn-primary btn-md inline-flex items-center w-full justify-center"
          >
            En savoir plus <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FormationCard;
