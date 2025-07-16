import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <span className="text-2xl font-bold">
                <span className="text-white">FORMA</span>
                <span className="text-blue-400">PRO</span>
              </span>
              <span className="text-gray-400 text-sm ml-1">by Accertif</span>
            </div>
            <p className="text-gray-300 mb-4">
              Organisme de formation certifié proposant des Form&apos;actions certifiantes personnalisées.
            </p>
            <div className="flex items-center text-gray-300 mb-2">
              <MapPin size={18} className="mr-2" />
              <span>905 Chemin de l&apos;Évêque, 82290 Montbeton, France</span>
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
                className="hover:text-blue-400 transition-colors"
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
                <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/formations" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Nos Formations
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-gray-300 hover:text-blue-400 transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/demande-formation" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Demande de Formation
                </Link>
              </li>
            </ul>
          </div>

          {/* Formations Principales */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Formations Populaires</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/formation/anglais-professionnel" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Anglais Professionnel
                </Link>
              </li>
              <li>
                <Link href="/formation/ia-vente" className="text-gray-300 hover:text-blue-400 transition-colors">
                  IA et Vente
                </Link>
              </li>
              <li>
                <Link href="/formation/communication-prise-parole" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Communication et Prise de Parole
                </Link>
              </li>
              <li>
                <Link href="/formation/community-management" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Community Management
                </Link>
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
                <Image 
                  src="https://irp.cdn-website.com/e0ab763a/dms3rep/multi/qualiopi.png" 
                  alt="Certification Qualiopi" 
                  width={80}
                  height={64}
                  className="h-16 w-auto cursor-pointer"
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
  )
}

export default Footer
