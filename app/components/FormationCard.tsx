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
    // Priorité au champ formationType (pour l'API future)
    if (formation.formationType) {
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
    if (!formation.cpfEligible && !formation.certificationDetails) {
      return 'Formation non-certifiante';
    }
    
    // Gestion des formations certifiantes et en partenariat
    if (formation.certificationDetails) {
      const { organization, partenaire } = formation.certificationDetails;
      return partenaire ? `En partenariat avec ${partenaire}` : `Certifié par ${organization}`;
    }
    
    // Fallback sur l'ancien système
    if (formation.certifications && formation.certifications.length > 0) {
      return formation.certifications[0];
    }
    
    return null;
  };

  const certificationText = formatCertification();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full min-h-[400px]">
      {/* Image de la formation */}
      <div className="relative flex-shrink-0">
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
      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        <div className="flex items-start mb-2">
          <div className="bg-brand p-1 rounded-full mr-3 flex-shrink-0 flex items-center justify-center" style={{ width: '32px', height: '32px' }}>
            <FormationIcon icon={formation.icon || "MessageSquare"} size={20} className="" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 leading-tight min-h-[48px] flex items-start">{formation.title}</h3>
        </div>
        <p className="text-sm sm:text-base text-gray-600 mb-4 flex-grow overflow-hidden" style={{
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical'
        }}>{formation.shortDescription}</p>
        
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
            className="btn-primary btn-sm sm:btn-md inline-flex items-center w-full justify-center mt-2"
          >
            En savoir plus <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FormationCard;
