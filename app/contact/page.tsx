'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Calendar, Clock, CheckCircle } from 'lucide-react';
import { useSendEmail } from "../hooks/useSendEmail";
import { validateForm, ValidationErrors, formatPhoneNumber } from "../lib/validation";
import Captcha from "../components/Captcha";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    gender: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [captchaValid, setCaptchaValid] = useState(false);
  
  const { sendEmail, loading, error, success } = useSendEmail();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      alert('Veuillez compléter la vérification de sécurité avant d\'envoyer le message.');
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
    
    let data = `GENRE: ${formData.gender}
PRENOM: ${formData.firstName}
NOM: ${formData.lastName}
EMAIL: ${formData.email}
TELEPHONE: ${formData.phone}
SUJET: ${formData.subject}
MESSAGE: ${formData.message}`;
    const result = await sendEmail({ to: 'hello@formaprobyaccertif.fr', subject: formData.subject, text: data });
    
    // Redirection vers la page de remerciement après envoi réussi
    window.location.href = '/merci';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-xl text-gray-600">
            Notre équipe est à votre disposition pour répondre à toutes vos questions et vous accompagner dans votre projet de formation.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              {/* Contact Information */}
              <div className="md:w-2/5 bg-brand text-white p-8">
                <h2 className="text-2xl font-bold mb-6">Informations de Contact</h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin size={20} className="mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Adresse</h3>
                      <p>905 Chemin de l'Évêque, 82290 Montbeton, France</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone size={20} className="mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Téléphone</h3>
                      <p>09 75 85 65 10</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail size={20} className="mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <p>hello@formaprobyaccertif.fr</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock size={20} className="mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Horaires d'ouverture</h3>
                      <p>Lundi - Vendredi : 9h00 - 18h00</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="font-medium mb-4">Suivez-nous</h3>
                  <div className="flex space-x-4">
                    <a href="https://www.linkedin.com/company/93788178" target="_blank" rel="noopener noreferrer">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.783-1.75-1.75s.784-1.75 1.75-1.75 1.75.783 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.338-.025-3.063-1.868-3.063-1.868 0-2.155 1.459-2.155 2.965v5.702h-3v-10h2.877v1.366h.041c.4-.758 1.376-1.558 2.832-1.558 3.028 0 3.592 1.993 3.592 4.584v5.608z"/>
    </svg>
</a>

                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="md:w-3/5 p-8">
                <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>

                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-800 rounded-md p-4 mb-6">
                    <div className="flex">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                      <div>
                        <p className="font-medium">Message envoyé avec succès !</p>
                        <p className="text-sm">Nous vous répondrons dans les plus brefs délais.</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="gender" className="block text-gray-700 mb-2">Genre *</label>
                        <select
                          id="gender"
                          name="gender"
                          value={formData.gender}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand"
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
                        <label htmlFor="firstName" className="block text-gray-700 mb-2">Prénom *</label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand"
                          required
                        />
                        {touched.firstName && validationErrors.firstName && (
                          <p className="text-red-500 text-xs mt-1">{validationErrors.firstName}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="lastName" className="block text-gray-700 mb-2">Nom *</label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand"
                          required
                        />
                        {touched.lastName && validationErrors.lastName && (
                          <p className="text-red-500 text-xs mt-1">{validationErrors.lastName}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand"
                          required
                        />
                        {touched.email && validationErrors.email && (
                          <p className="text-red-500 text-xs mt-1">{validationErrors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="phone" className="block text-gray-700 mb-2">Téléphone</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand"
                          required
                        />
                        {touched.phone && validationErrors.phone && (
                          <p className="text-red-500 text-xs mt-1">{validationErrors.phone}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-gray-700 mb-2">Sujet</label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand"
                          required
                        >
                          <option value="">Sélectionnez un sujet</option>
                          <option value="information">Je souhaite plus d'informations</option>
                          <option value="inscription">M'inscrire à une Form'action</option>
                          <option value="financement">Financer une Form'action</option>
                          <option value="surmesure">Personnaliser ma Form'action</option>                          
                          <option value="partenariat">Proposition de partenariat</option>
                          <option value="autre">Autre</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand"
                        required
                      ></textarea>
                    </div>

                    {/* CAPTCHA */}
                    <div className="mb-6">
                      <Captcha onValidation={setCaptchaValid} />
                    </div>

                    <div className="flex justify-between items-center">
                      <button
                        type="submit"
                        className="btn-primary btn-lg"
                      >
                        Envoyer le message
                      </button>

                      <a
                        href="https://calendly.com/julien-gautier-accertif/formaprobyaccertif"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand hover:text-brand-700 font-medium inline-flex items-center"
                      >
                        <Calendar size={18} className="mr-2" />
                        Prendre rendez-vous
                      </a>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>


        {/* FAQ Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Questions Fréquentes</h2>

          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2">Comment financer ma formation ?</h3>
              <p className="text-gray-600">
                Nos formations sont éligibles à différents dispositifs de financement : CPF, plan de développement des compétences, OPCO, Pôle Emploi, etc. Notre équipe vous accompagne dans les démarches administratives pour obtenir un financement optimisé.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2">Combien de temps dure une Form'action certifiante ?</h3>
              <p className="text-gray-600">
                La durée varie selon les formations, généralement entre 14 et 60 heures. Chaque parcours est adapté à vos disponibilités et peut être réalisé à votre rythme grâce à notre plateforme e-learning.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2">Les formations sont-elles accessibles à distance ?</h3>
              <p className="text-gray-600">
                Oui, toutes nos formations sont accessibles à distance via notre plateforme SKILLUP by Accertif. Vous bénéficiez également d'un accompagnement individualisé par visioconférence avec nos experts métier.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;