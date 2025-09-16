'use client';

import React, { useState } from 'react';
import { useSendEmail } from '../hooks/useSendEmail';
import { validateForm, ValidationErrors } from '../lib/validation';
import { X } from 'lucide-react';
import Captcha from './Captcha';

interface ContactFormProps {
  formationName: string;
  onClose?: () => void;
  isOpen?: boolean;
  actionType?: 'information' | 'parcours';
}

const ContactForm: React.FC<ContactFormProps> = ({ formationName, onClose, isOpen = true, actionType = 'information' }) => {
  const [formData, setFormData] = useState({
    gender: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  });
  
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [captchaValid, setCaptchaValid] = useState(false);
  
  const { sendEmail, loading, error, success } = useSendEmail();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Marquer le champ comme touché
    setTouched(prev => ({ ...prev, [name]: true }));
    
    // Validation en temps réel
    if (touched[name]) {
      const errors = validateForm({
        firstName: name === 'firstName' ? value : formData.firstName,
        lastName: name === 'lastName' ? value : formData.lastName,
        email: name === 'email' ? value : formData.email,
        phone: name === 'phone' ? value : formData.phone,
      });
      
      setValidationErrors(prev => ({
        ...prev,
        [name]: errors[name as keyof ValidationErrors]
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    
    const errors = validateForm({
      firstName: name === 'firstName' ? value : formData.firstName,
      lastName: name === 'lastName' ? value : formData.lastName,
      email: name === 'email' ? value : formData.email,
      phone: name === 'phone' ? value : formData.phone,
    });
    
    setValidationErrors(prev => ({
      ...prev,
      [name]: errors[name as keyof ValidationErrors]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Vérifier la validation CAPTCHA
    if (!captchaValid) {
      alert('Veuillez compléter la vérification de sécurité avant d\'envoyer votre demande.');
      return;
    }
    
    // Validation complète avant envoi
    const errors = validateForm({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
    });
    
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      setTouched({
        gender: true,
        firstName: true,
        lastName: true,
        email: true,
        phone: true,
      });
      return;
    }
    
    const data = `GENRE: ${formData.gender}
PRENOM: ${formData.firstName}
NOM: ${formData.lastName}
EMAIL: ${formData.email}
TELEPHONE: ${formData.phone}
FORMATION_DEMANDEE: ${formationName}
DATE_ENVOI: ${new Date().toLocaleDateString('fr-FR', { 
  day: '2-digit', 
  month: '2-digit', 
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
})}`;
    const subject = actionType === 'parcours' 
      ? `Je lance mon parcours - Formation ${formationName}`
      : `Demande d'information - Formation ${formationName}`;
      
    const result = await sendEmail({
      to: 'hello@formaprobyaccertif.fr',
      subject: subject,
      text: data
    });

    // Redirection vers la page de remerciement après envoi réussi
    window.location.href = '/merci';
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">
            {actionType === 'parcours' ? 'Je lance mon parcours' : 'Demande d\'information'}
          </h3>
          {onClose && (
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <X size={24} />
            </button>
          )}
        </div>


          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="gender" className="block text-gray-700 mb-2">
                  Genre *
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand ${
                    touched.gender && !formData.gender 
                      ? 'border-red-500' 
                      : 'border-gray-300'
                  }`}
                  required
                >
                  <option value="">Sélectionnez...</option>
                  <option value="Monsieur">Monsieur</option>
                  <option value="Madame">Madame</option>
                </select>
                {touched.gender && !formData.gender && (
                  <p className="text-red-500 text-xs mt-1">Le genre est requis</p>
                )}
              </div>

              <div>
                <label htmlFor="firstName" className="block text-gray-700 mb-2">
                  Prénom *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand ${
                    touched.firstName && validationErrors.firstName 
                      ? 'border-red-500' 
                      : 'border-gray-300'
                  }`}
                  required
                />
                {touched.firstName && validationErrors.firstName && (
                  <p className="text-red-500 text-xs mt-1">{validationErrors.firstName}</p>
                )}
              </div>

              <div>
                <label htmlFor="lastName" className="block text-gray-700 mb-2">
                  Nom *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand ${
                    touched.lastName && validationErrors.lastName 
                      ? 'border-red-500' 
                      : 'border-gray-300'
                  }`}
                  required
                />
                {touched.lastName && validationErrors.lastName && (
                  <p className="text-red-500 text-xs mt-1">{validationErrors.lastName}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="06 12 34 56 78"
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand ${
                    touched.phone && validationErrors.phone 
                      ? 'border-red-500' 
                      : 'border-gray-300'
                  }`}
                  required
                />
                {touched.phone && validationErrors.phone && (
                  <p className="text-red-500 text-xs mt-1">{validationErrors.phone}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand ${
                    touched.email && validationErrors.email 
                      ? 'border-red-500' 
                      : 'border-gray-300'
                  }`}
                  required
                />
                {touched.email && validationErrors.email && (
                  <p className="text-red-500 text-xs mt-1">{validationErrors.email}</p>
                )}
              </div>
            </div>

            {/* CAPTCHA */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <Captcha onValidation={setCaptchaValid} />
            </div>

            {error && (
              <div className="mt-4 p-3 bg-red-50 text-red-800 rounded-md">
                {error}
              </div>
            )}

            <div className="mt-6">
              <button
                type="submit"
                disabled={loading || !formData.gender || !formData.firstName || !formData.lastName || !formData.email || !formData.phone}
                className={`w-full py-3 px-4 rounded-md font-medium text-white transition-all ${
                  loading || !formData.gender || !formData.firstName || !formData.lastName || !formData.email || !formData.phone
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-brand hover:bg-brand-600'
                }`}
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
                  </div>
                ) : (
                  "Envoyer ma demande"
                )}
              </button>
            </div>
          </form>
      </div>
    </div>
  );
};

export default ContactForm;
