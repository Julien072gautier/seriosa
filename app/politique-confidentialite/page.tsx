import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité - FormaPro',
  description: 'Politique de confidentialité et protection des données personnelles de FormaPro.',
  robots: 'index, follow',
};

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-blue-600 mb-8">Politique de Confidentialité</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
              <p className="mb-4">
                ACCERTIF, société par actions simplifiée au capital de 1 000 €, immatriculée au RCS de Montauban sous le numéro 918 199 951, 
                dont le siège social est situé 905 chemin de l'évêque, 82290 Montbeton, France, s'engage à protéger la confidentialité et la sécurité 
                des informations personnelles de ses utilisateurs et stagiaires.
              </p>
              <p>
                Cette politique de confidentialité décrit comment nous collectons, utilisons, stockons et protégeons vos informations personnelles 
                conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi française "Informatique et Libertés".
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Responsable du traitement</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p><strong>Responsable du traitement :</strong> ACCERTIF</p>
                <p><strong>Adresse :</strong> 905 chemin de l'évêque, 82290 Montbeton, France</p>
                <p><strong>Email :</strong> contact@accertif.fr</p>
                <p><strong>Téléphone :</strong> 09 75 85 65 10</p>
                <p><strong>SIRET :</strong> 91819995100016</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Données collectées</h2>
              <h3 className="text-xl font-semibold text-gray-700 mb-3">3.1 Données collectées directement</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
                <li>Adresse postale</li>
                <li>Date de naissance</li>
                <li>Informations professionnelles (statut, entreprise, secteur d'activité)</li>
                <li>Niveau de formation et compétences</li>
                <li>Messages et communications</li>
                <li>Données de formation (inscriptions, évaluations, certifications)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-700 mb-3">3.2 Données collectées automatiquement</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Adresse IP</li>
                <li>Type de navigateur et version</li>
                <li>Système d'exploitation</li>
                <li>Pages visitées et durée de visite</li>
                <li>Données de géolocalisation approximative</li>
                <li>Cookies et technologies similaires</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Finalités du traitement</h2>
              <p className="mb-4">Nous utilisons vos données personnelles pour :</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Gestion des demandes :</strong> Traitement de vos demandes de contact et de devis</li>
                <li><strong>Conseil et accompagnement :</strong> Fourniture de nos services de conseil et d'accompagnement des professionnels de la formation</li>
                <li><strong>Communication :</strong> Envoi d'informations sur nos services et actualités</li>
                <li><strong>Amélioration du site :</strong> Analyse de l'utilisation du site pour l'améliorer</li>
                <li><strong>Obligations légales :</strong> Respect des obligations comptables et fiscales</li>
                <li><strong>Sécurité :</strong> Protection contre la fraude et les abus</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Base légale du traitement</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="list-disc pl-6">
                  <li><strong>Consentement :</strong> Pour l'envoi de communications marketing</li>
                  <li><strong>Exécution du contrat :</strong> Pour la fourniture de nos services</li>
                  <li><strong>Intérêt légitime :</strong> Pour l'amélioration de nos services et la sécurité</li>
                  <li><strong>Obligation légale :</strong> Pour le respect des obligations comptables, fiscales et de formation</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Partage des données</h2>
              <p className="mb-4">Nous ne vendons jamais vos données personnelles. Nous pouvons partager vos données avec :</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Prestataires de services :</strong> Hébergement, maintenance, services de paiement</li>
                <li><strong>Partenaires commerciaux :</strong> Uniquement avec votre consentement explicite</li>
                <li><strong>Autorités compétentes :</strong> En cas d'obligation légale ou de demande judiciaire</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Durée de conservation</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="list-disc pl-6">
                  <li><strong>Données clients :</strong> 3 ans après la fin de la relation contractuelle</li>
                  <li><strong>Données prospects :</strong> 3 ans après le dernier contact</li>
                  <li><strong>Données comptables :</strong> 10 ans conformément à la législation française</li>
                  <li><strong>Données de navigation :</strong> 13 mois maximum</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Vos droits</h2>
              <p className="mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Droit d'accès :</strong> Obtenir une copie de vos données personnelles</li>
                <li><strong>Droit de rectification :</strong> Corriger des données inexactes</li>
                <li><strong>Droit à l'effacement :</strong> Demander la suppression de vos données</li>
                <li><strong>Droit à la limitation :</strong> Limiter le traitement de vos données</li>
                <li><strong>Droit à la portabilité :</strong> Récupérer vos données dans un format structuré</li>
                <li><strong>Droit d'opposition :</strong> Vous opposer au traitement de vos données</li>
                <li><strong>Droit de retrait du consentement :</strong> Retirer votre consentement à tout moment</li>
              </ul>
              <p className="mb-4">
                Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@accertif.fr" className="text-blue-600 hover:underline">contact@accertif.fr</a>
              </p>
              <p>
                Vous avez également le droit d'introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) 
                si vous estimez que vos droits ne sont pas respectés.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Sécurité des données</h2>
              <p className="mb-4">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre :
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>L'accès non autorisé</li>
                <li>La divulgation</li>
                <li>La modification</li>
                <li>La destruction</li>
                <li>La perte accidentelle</li>
              </ul>
              <p>
                Ces mesures incluent le chiffrement des données, l'authentification sécurisée, 
                la surveillance des accès et la formation de notre personnel.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Transferts internationaux</h2>
              <p>
                Vos données personnelles sont principalement stockées et traitées en France. 
                En cas de transfert vers un pays tiers, nous nous assurons que des garanties appropriées 
                sont en place conformément au RGPD.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Cookies</h2>
              <p className="mb-4">
                Notre site utilise des cookies pour améliorer votre expérience de navigation. 
                Pour plus d'informations, consultez notre <a href="/politique-cookies" className="text-blue-600 hover:underline">politique de cookies</a>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">12. Modifications</h2>
              <p>
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
                Les modifications seront publiées sur cette page avec une date de mise à jour. 
                Nous vous encourageons à consulter régulièrement cette page.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">13. Contact</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-2">Pour toute question concernant cette politique de confidentialité :</p>
                <p><strong>Email :</strong> <a href="mailto:contact@accertif.fr" className="text-blue-600 hover:underline">contact@accertif.fr</a></p>
                <p><strong>Téléphone :</strong> 09 75 85 65 10</p>
                <p><strong>Adresse :</strong> 905 chemin de l'évêque, 82290 Montbeton, France</p>
              </div>
            </section>

            <div className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-600">
              <p className="text-sm text-gray-600">
                <strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
