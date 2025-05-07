import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <span className="text-2xl font-bold">
                <span className="text-white">FORMA</span>
                <span className="text-brand-400">PRO</span>
              </span>
              <span className="text-gray-400 text-sm ml-1">by Accertif</span>
            </div>
            <p className="text-gray-300 mb-4">
              Organisme de formation certifié proposant des Form'actions certifiantes personnalisées.
            </p>
            <div className="flex items-center text-gray-300 mb-2">
              <MapPin size={18} className="mr-2" />
              <span>905 Chemin de l'Évêque, 82290 Montbeton, France</span>
            </div>
            <div className="flex items-center text-gray-300 mb-2">
              <Phone size={18} className="mr-2" />
              <span>09 75 85 65 10</span>
            </div>
            <div className="flex items-center text-gray-300 mb-2">
              <Mail size={18} className="mr-2" />
              <span>hello@formaprobyaccertif.fr</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Linkedin size={18} className="mr-2" />
              <a 
                href="https://www.linkedin.com/company/93788178" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-brand-400"
              >
                FORMAPRO by Accertif LinkedIn
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-brand-400">Accueil</Link>
              </li>
              <li>
                <Link to="/formations" className="text-gray-300 hover:text-brand-400">Nos Formations</Link>
              </li>
              <li>
                <Link to="/a-propos" className="text-gray-300 hover:text-brand-400">À Propos</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-brand-400">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Certification */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Certification</h3>
            <div className="bg-white p-3 rounded-lg inline-block mb-4">
              <a 
                href="https://irp.cdn-website.com/e0ab763a/files/uploaded/Certificat_Qualiopi_Sign%C3%A9_HD.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img 
                  src="https://irp.cdn-website.com/e0ab763a/dms3rep/multi/qualiopi.png" 
                  alt="Certification Qualiopi" 
                  className="h-16 w-auto cursor-pointer"
                  onError={(e) => {
                    // Fallback à l'image externe si l'image locale n'est pas disponible
                    e.currentTarget.src = "https://irp.cdn-website.com/e0ab763a/dms3rep/multi/Logo+qualiopi.png";
                  }}
                />
              </a>
            </div>
            <p className="text-gray-300">
              Certifié Qualiopi - Éligible au CPF et autres dispositifs de financement de la formation professionnelle.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} FORMAPRO by Accertif. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;