// Fonctions de validation pour les formulaires

export interface ValidationErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
}

// Validation du prénom
export const validateFirstName = (firstName: string): string | undefined => {
  if (!firstName.trim()) {
    return 'Le prénom est requis';
  }
  if (firstName.trim().length < 2) {
    return 'Le prénom doit contenir au moins 2 caractères';
  }
  if (firstName.trim().length > 50) {
    return 'Le prénom ne peut pas dépasser 50 caractères';
  }
  if (!/^[a-zA-ZÀ-ÿ\s'-]+$/.test(firstName.trim())) {
    return 'Le prénom ne peut contenir que des lettres, espaces, tirets et apostrophes';
  }
  return undefined;
};

// Validation du nom
export const validateLastName = (lastName: string): string | undefined => {
  if (!lastName.trim()) {
    return 'Le nom est requis';
  }
  if (lastName.trim().length < 2) {
    return 'Le nom doit contenir au moins 2 caractères';
  }
  if (lastName.trim().length > 50) {
    return 'Le nom ne peut pas dépasser 50 caractères';
  }
  if (!/^[a-zA-ZÀ-ÿ\s'-]+$/.test(lastName.trim())) {
    return 'Le nom ne peut contenir que des lettres, espaces, tirets et apostrophes';
  }
  return undefined;
};

// Validation de l'email
export const validateEmail = (email: string): string | undefined => {
  if (!email.trim()) {
    return 'L\'email est requis';
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return 'Veuillez saisir une adresse email valide';
  }
  if (email.trim().length > 100) {
    return 'L\'email ne peut pas dépasser 100 caractères';
  }
  return undefined;
};

// Validation du téléphone
export const validatePhone = (phone: string): string | undefined => {
  if (!phone.trim()) {
    return 'Le téléphone est requis';
  }
  // Supprime tous les caractères non numériques
  const cleanPhone = phone.replace(/\D/g, '');
  
  if (cleanPhone.length < 10) {
    return 'Le numéro de téléphone doit contenir au moins 10 chiffres';
  }
  if (cleanPhone.length > 15) {
    return 'Le numéro de téléphone ne peut pas dépasser 15 chiffres';
  }
  
  // Vérifie que c'est un numéro français valide (commence par 0)
  if (!cleanPhone.startsWith('0')) {
    return 'Veuillez saisir un numéro de téléphone français valide';
  }
  
  return undefined;
};

// Validation complète d'un formulaire
export const validateForm = (data: {
  firstName?: string;
  lastName?: string;
  name?: string; // Pour les formulaires qui utilisent un seul champ nom
  email: string;
  phone: string;
}): ValidationErrors => {
  const errors: ValidationErrors = {};

  // Validation du nom (gère les deux cas : firstName/lastName ou name)
  if (data.firstName !== undefined) {
    const firstNameError = validateFirstName(data.firstName);
    if (firstNameError) errors.firstName = firstNameError;
  }
  
  if (data.lastName !== undefined) {
    const lastNameError = validateLastName(data.lastName);
    if (lastNameError) errors.lastName = lastNameError;
  }
  
  if (data.name !== undefined) {
    // Si on a un seul champ nom, on le traite comme un nom complet
    const nameError = validateLastName(data.name);
    if (nameError) errors.lastName = nameError;
  }

  // Validation de l'email
  const emailError = validateEmail(data.email);
  if (emailError) errors.email = emailError;

  // Validation du téléphone
  const phoneError = validatePhone(data.phone);
  if (phoneError) errors.phone = phoneError;

  return errors;
};

// Formatage du téléphone pour l'affichage
export const formatPhoneNumber = (phone: string): string => {
  const cleanPhone = phone.replace(/\D/g, '');
  
  if (cleanPhone.length === 10) {
    return cleanPhone.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5');
  }
  
  return phone;
};
