import { Metadata } from 'next';
import { Shield, BarChart3, Target, Settings, Info } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Politique des cookies - FormaPro',
  description: 'Politique de gestion des cookies de FormaPro - Conforme RGPD',
  robots: 'index, follow',
};

export default function PolitiqueCookiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* En-tête */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/10 rounded-full mb-4">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Politique des cookies
            </h1>
            <p className="text-lg text-gray-600">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </p>
          </div>

          {/* Introduction */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Qu'est-ce qu'un cookie ?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Un cookie est un petit fichier texte stocké sur votre ordinateur, tablette ou smartphone 
              lorsque vous visitez notre site web. Les cookies nous permettent de reconnaître votre 
              appareil et de mémoriser certaines informations sur vos préférences ou actions passées.
            </p>
            <p className="text-gray-600 leading-relaxed">
              ACCERTIF s'engage à respecter votre vie privée et à utiliser les cookies de manière 
              transparente et conforme au Règlement Général sur la Protection des Données (RGPD).
            </p>
          </div>

          {/* Types de cookies */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Types de cookies utilisés
            </h2>
            
            <div className="space-y-6">
              {/* Cookies fonctionnels */}
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Settings className="w-6 h-6 text-green-600" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Cookies fonctionnels
                  </h3>
                  <span className="px-3 py-1 text-sm font-medium text-green-700 bg-green-100 rounded-full">
                    Toujours actifs
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Ces cookies sont essentiels au fonctionnement de notre site web. Ils vous permettent 
                  de naviguer sur le site et d'utiliser ses fonctionnalités de base.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Exemples d'utilisation :</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Mémorisation de vos préférences de langue</li>
                    <li>• Gestion de votre session de navigation</li>
                    <li>• Sécurité et prévention de la fraude</li>
                    <li>• Fonctionnalités de base du site</li>
                    <li>• Gestion des préférences de cookies</li>
                  </ul>
                </div>
              </div>

              {/* Cookies analytiques */}
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Cookies analytiques
                  </h3>
                  <span className="px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
                    Optionnel
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Ces cookies nous aident à comprendre comment les visiteurs interagissent avec notre 
                  site web en collectant et rapportant des informations de manière anonyme.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Exemples d'utilisation :</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Google Analytics pour analyser le trafic</li>
                    <li>• Statistiques de navigation et de performance</li>
                    <li>• Compréhension du comportement des utilisateurs</li>
                    <li>• Amélioration de l'expérience utilisateur</li>
                  </ul>
                </div>
              </div>

              {/* Cookies publicitaires */}
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-6 h-6 text-purple-600" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Cookies publicitaires
                  </h3>
                  <span className="px-3 py-1 text-sm font-medium text-purple-700 bg-purple-100 rounded-full">
                    Optionnel
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Ces cookies sont utilisés pour afficher des publicités pertinentes et mesurer 
                  l'efficacité de nos campagnes publicitaires.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Exemples d'utilisation :</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Publicités ciblées et personnalisées</li>
                    <li>• Mesure de l'efficacité des campagnes</li>
                    <li>• Limitation du nombre d'affichages publicitaires</li>
                    <li>• Intégration avec les réseaux sociaux</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Gestion des cookies */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Comment gérer vos cookies
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Vous avez le contrôle total sur les cookies utilisés sur notre site. Vous pouvez :
            </p>
            <ul className="text-gray-600 leading-relaxed space-y-2 mb-6">
              <li>• <strong>Accepter tous les cookies</strong> pour une expérience optimale</li>
              <li>• <strong>Refuser les cookies non essentiels</strong> pour une navigation basique</li>
              <li>• <strong>Personnaliser vos préférences</strong> en choisissant les types de cookies à autoriser</li>
              <li>• <strong>Modifier vos choix à tout moment</strong> via le bouton "Gérer mes cookies" en bas de page</li>
            </ul>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-blue-800">
                  <p className="font-medium mb-1">Important</p>
                  <p>
                    Vos préférences sont sauvegardées localement sur votre appareil. 
                    Si vous supprimez les cookies de votre navigateur, vous devrez 
                    refaire vos choix lors de votre prochaine visite.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Cookies tiers */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Cookies tiers
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Notre site peut contenir des cookies provenant de services tiers. Ces cookies 
              sont soumis aux politiques de confidentialité de ces services :
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• <strong>Google Analytics</strong> - Analyse du trafic web</li>
                <li>• <strong>Google Tag Manager</strong> - Gestion des balises</li>
                <li>• <strong>Réseaux sociaux</strong> - Intégration des boutons de partage</li>
              </ul>
            </div>
          </div>

          {/* Durée de conservation */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Durée de conservation
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              La durée de conservation des cookies varie selon leur type :
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• <strong>Cookies de session</strong> - Supprimés à la fermeture du navigateur</li>
                <li>• <strong>Cookies persistants</strong> - Conservés de 30 jours à 2 ans maximum</li>
                <li>• <strong>Cookies de préférences</strong> - Conservés jusqu'à modification ou suppression</li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Contact
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Si vous avez des questions concernant notre utilisation des cookies, 
              vous pouvez nous contacter :
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-600">
                <strong>ACCERTIF</strong><br />
                Email : contact@accertif.fr<br />
                Téléphone : 09 75 85 65 10
              </p>
            </div>
          </div>

          {/* Modifications */}
          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Modifications de cette politique
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Nous nous réservons le droit de modifier cette politique des cookies à tout moment. 
              Toute modification sera publiée sur cette page avec une nouvelle date de mise à jour. 
              Nous vous encourageons à consulter régulièrement cette page pour rester informé de 
              nos pratiques en matière de cookies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
