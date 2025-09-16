'use client';

import React, { useState } from 'react';
import { useSendEmail } from '../hooks/useSendEmail';
import { Users, BookOpen, MessageSquare, School } from 'lucide-react';
import { validateForm, ValidationErrors, formatPhoneNumber } from '../lib/validation';
import Captcha from '../components/Captcha';

const FormulaireBesoinPage = () => {
  const [formData, setFormData] = useState({
    trainingType: 'individuelle',
    formation: '',
    autreFormation: '',
    modality: '',
    modalityDetail: '',
    gender: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [captchaValid, setCaptchaValid] = useState(false);

  const { sendEmail, loading, error, success } = useSendEmail();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
    
    // Validation spéciale pour "autre formation"
    if (formData.formation === 'autre' && !formData.autreFormation.trim()) {
      setValidationErrors({ ...errors });
      setTouched({
        firstName: true,
        lastName: true,
        email: true,
        phone: true,
        autreFormation: true,
      });
      return;
    }

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      setTouched({
        firstName: true,
        lastName: true,
        email: true,
        phone: true,
      });
      return;
    }

    const emailContent = `GENRE: ${formData.gender === 'M' ? 'Monsieur' : 'Madame'}
PRENOM: ${formData.firstName}
NOM: ${formData.lastName}
EMAIL: ${formData.email}
TELEPHONE: ${formData.phone}
FORMATION: ${formData.formation === 'autre' ? 'Autre formation (à préciser)' : formations.find(f => f.value === formData.formation)?.label || formData.formation}
${formData.formation === 'autre' ? `FORMATION_PERSONNALISEE: ${formData.autreFormation}` : ''}
TYPE_FORMATION: ${formData.trainingType}
MODALITE: ${formData.modality}
${formData.modality === 'mixte' ? `DETAIL_MODALITE: ${formData.modalityDetail}` : ''}
DATE_ENVOI: ${new Date().toLocaleDateString('fr-FR', { 
  day: '2-digit', 
  month: '2-digit', 
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
})}`;

    const result = await sendEmail({
      to: 'hello@formaprobyaccertif.fr',
      subject: "Demande de formation personnalisée - FORMAPRO by Accertif",
      text: emailContent
    });

    // Redirection vers la page de remerciement après envoi réussi
    window.location.href = '/merci';
  };

  const formations = [
    { value: 'allemand-professionnel', label: 'Allemand professionnel' },
    { value: 'anglais-professionnel', label: 'Anglais professionnel' },
    { value: 'arabe-professionnel', label: 'Arabe professionnel' },
    { value: 'chinois-professionnel', label: 'Chinois professionnel' },
    { value: 'communication-prise-parole', label: 'Communication et prise de parole' },
    { value: 'community-management', label: 'Community Management' },
    { value: 'espagnol-professionnel', label: 'Espagnol professionnel' },
    { value: 'francais-professionnel', label: 'Français professionnel' },
    { value: 'ia-vente', label: 'IA et vente' },
    { value: 'italien-professionnel', label: 'Italien professionnel' },
    { value: 'japonais-professionnel', label: 'Japonais professionnel' },
    { value: 'langue-des-signes', label: 'Langue des signes' },
    { value: 'portugais-professionnel', label: 'Portugais professionnel' },
    { value: 'russe-professionnel', label: 'Russe professionnel' },
    { value: 'autre', label: 'Autre formation (à préciser)' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Demande de Form'action personnalisée</h1>
            <p className="text-xl text-gray-600">
              Créez votre parcours sur-mesure en quelques clics
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Formation Selection */}
              <div>
                <label htmlFor="formation" className="block text-gray-700 font-medium mb-2">
                  Formation souhaitée *
                </label>
                <select
                  id="formation"
                  name="formation"
                  value={formData.formation}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                  required
                >
                  <option value="">Sélectionnez une formation</option>
                  {formations.map((formation) => (
                    <option key={formation.value} value={formation.value}>
                      {formation.label}
                    </option>
                  ))}
                </select>
                {touched.formation && !formData.formation && (
                  <p className="text-red-500 text-sm mt-1">Veuillez sélectionner une formation</p>
                )}
              </div>

              {/* Champ "Autre formation" conditionnel */}
              {formData.formation === 'autre' && (
                <div>
                  <label htmlFor="autreFormation" className="block text-gray-700 font-medium mb-2">
                    Précisez la formation recherchée *
                  </label>
                  <textarea
                    id="autreFormation"
                    name="autreFormation"
                    value={formData.autreFormation}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Décrivez la formation que vous recherchez..."
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                    required
                  />
                  {touched.autreFormation && !formData.autreFormation && (
                    <p className="text-red-500 text-sm mt-1">Veuillez préciser la formation recherchée</p>
                  )}
                </div>
              )}

              {/* Training Type */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Type de formation
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <label className={`
                    flex items-center justify-center p-4 rounded-lg border-2 cursor-pointer transition-all
                    ${formData.trainingType === 'individuelle' 
                      ? 'border-brand bg-brand-50 text-brand' 
                      : 'border-gray-200 hover:border-brand-200'}
                  `}>
                    <input
                      type="radio"
                      name="trainingType"
                      value="individuelle"
                      checked={formData.trainingType === 'individuelle'}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="hidden"
                    />
                    <Users className="mr-2" size={20} />
                    <span>Individuelle</span>
                  </label>
                  <label className={`
                    flex items-center justify-center p-4 rounded-lg border-2 cursor-pointer transition-all
                    ${formData.trainingType === 'collective' 
                      ? 'border-brand bg-brand-50 text-brand' 
                      : 'border-gray-200 hover:border-brand-200'}
                  `}>
                    <input
                      type="radio"
                      name="trainingType"
                      value="collective"
                      checked={formData.trainingType === 'collective'}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="hidden"
                    />
                    <Users className="mr-2" size={20} />
                    <span>Collective</span>
                  </label>
                </div>
              </div>

              {/* Training Modality */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Modalité de formation
                </label>
                <div className="grid gap-4">
                  <label className={`
                    flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all
                    ${formData.modality === 'presentiel' 
                      ? 'border-brand bg-brand-50 text-brand' 
                      : 'border-gray-200 hover:border-brand-200'}
                  `}>
                    <input
                      type="radio"
                      name="modality"
                      value="presentiel"
                      checked={formData.modality === 'presentiel'}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="hidden"
                    />
                    <School className="mr-2" size={20} />
                    <span>Avec un formateur expert à côté</span>
                  </label>
                  
                  <label className={`
                    flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all
                    ${formData.modality === 'visio' 
                      ? 'border-brand bg-brand-50 text-brand' 
                      : 'border-gray-200 hover:border-brand-200'}
                  `}>
                    <input
                      type="radio"
                      name="modality"
                      value="visio"
                      checked={formData.modality === 'visio'}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="hidden"
                    />
                    <MessageSquare className="mr-2" size={20} />
                    <span>Avec un formateur expert en visioconférence</span>
                  </label>
                  
                  <label className={`
                    flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all
                    ${formData.modality === 'mixte' 
                      ? 'border-brand bg-brand-50 text-brand' 
                      : 'border-gray-200 hover:border-brand-200'}
                  `}>
                    <input
                      type="radio"
                      name="modality"
                      value="mixte"
                      checked={formData.modality === 'mixte'}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="hidden"
                    />
                    <BookOpen className="mr-2" size={20} />
                    <span>Form'action mixte (E-learning + pratique tutorée)</span>
                  </label>
                </div>
              </div>

              {/* Mixed Training Detail */}
              {formData.modality === 'mixte' && (
                <div className="ml-6">
                  <label className="block text-gray-700 font-medium mb-2">
                    Modalité de la pratique tutorée
                  </label>
                  <div className="grid gap-4">
                    <label className={`
                      flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all
                      ${formData.modalityDetail === 'presentiel' 
                        ? 'border-brand bg-brand-50 text-brand' 
                        : 'border-gray-200 hover:border-brand-200'}
                    `}>
                      <input
                        type="radio"
                        name="modalityDetail"
                        value="presentiel"
                        checked={formData.modalityDetail === 'presentiel'}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="hidden"
                      />
                      <School className="mr-2" size={20} />
                      <span>À côté du formateur</span>
                    </label>
                    
                    <label className={`
                      flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all
                      ${formData.modalityDetail === 'visio' 
                        ? 'border-brand bg-brand-50 text-brand' 
                        : 'border-gray-200 hover:border-brand-200'}
                    `}>
                      <input
                        type="radio"
                        name="modalityDetail"
                        value="visio"
                        checked={formData.modalityDetail === 'visio'}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="hidden"
                      />
                      <MessageSquare className="mr-2" size={20} />
                      <span>En visioconférence</span>
                    </label>
                  </div>
                </div>
              )}

              {/* Contact Information */}
              <div className="space-y-4 pt-6 border-t border-gray-200">
                {/* Gender */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Genre *
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <label className={`
                      flex items-center justify-center p-4 rounded-lg border-2 cursor-pointer transition-all
                      ${formData.gender === 'M' 
                        ? 'border-brand bg-brand-50 text-brand' 
                        : 'border-gray-200 hover:border-brand-200'}
                    `}>
                      <input
                        type="radio"
                        name="gender"
                        value="M"
                        checked={formData.gender === 'M'}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="hidden"
                        required
                      />
                      <span>Monsieur</span>
                    </label>
                    <label className={`
                      flex items-center justify-center p-4 rounded-lg border-2 cursor-pointer transition-all
                      ${formData.gender === 'F' 
                        ? 'border-brand bg-brand-50 text-brand' 
                        : 'border-gray-200 hover:border-brand-200'}
                    `}>
                      <input
                        type="radio"
                        name="gender"
                        value="F"
                        checked={formData.gender === 'F'}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="hidden"
                        required
                      />
                      <span>Madame</span>
                    </label>
                  </div>
                </div>

                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                      required
                    />
                    {touched.firstName && validationErrors.firstName && (
                      <p className="text-red-500 text-sm mt-1">{validationErrors.firstName}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                      required
                    />
                    {touched.lastName && validationErrors.lastName && (
                      <p className="text-red-500 text-sm mt-1">{validationErrors.lastName}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                    required
                  />
                  {touched.email && validationErrors.email && (
                    <p className="text-red-500 text-sm mt-1">{validationErrors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                    placeholder="06 12 34 56 78"
                    required
                  />
                  {touched.phone && validationErrors.phone && (
                    <p className="text-red-500 text-sm mt-1">{validationErrors.phone}</p>
                  )}
                </div>
              </div>

              {/* CAPTCHA */}
              <div className="pt-6 border-t border-gray-200">
                <Captcha onValidation={setCaptchaValid} />
              </div>

              {/* Error Message */}
              {error && (
                <div className="p-4 bg-red-50 text-red-700 rounded-md">
                  {error}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading || !formData.formation || !formData.modality || (!formData.modalityDetail && formData.modality === 'mixte') || !formData.gender || !formData.firstName || !formData.lastName || !formData.email || !formData.phone || (formData.formation === 'autre' && !formData.autreFormation.trim())}
                className={`
                  w-full py-3 px-4 rounded-md font-medium text-white transition-all
                  ${loading || !formData.formation || !formData.modality || (!formData.modalityDetail && formData.modality === 'mixte') || !formData.gender || !formData.firstName || !formData.lastName || !formData.email || !formData.phone || (formData.formation === 'autre' && !formData.autreFormation.trim())
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-brand hover:bg-brand-600'}
                `}
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormulaireBesoinPage;