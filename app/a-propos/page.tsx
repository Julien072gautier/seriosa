'use client';

import Link from 'next/link';
import { Check, ArrowRight, Star, Target } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section - Enhanced with gradient and animation */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Le monde change. Les formations aussi.</h1>
          <p className="text-xl text-gray-600 mb-4">
            Chez Seriosa 2.0, on pense qu'apprendre n'a de valeur que si cela fait grandir les gens et les organisations, durablement.
          </p>
        </div>

        {/* Mission */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold">💡 Notre mission</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Proposer des formations et accompagnements à impact, qui donnent envie d'agir et de progresser.
            </p>
            <p className="text-gray-600 mb-6">
              Chaque formation et chaque accompagnement s'inscrivent dans une approche responsable, qui relie compétences, éthique et plaisir d'agir. Parce qu'on croit qu'on peut faire évoluer les pratiques sans renoncer à l'humain.
            </p>
            <p className="text-gray-600 mb-6">
              Qu'il s'agisse de management, de communication, d'événementiel, de sport ou de transition écologique, chaque module est ancré dans une logique RSE : respect, cohérence, amélioration continue.
            </p>
            <div className="bg-brand-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-3">Notre objectif :</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <ArrowRight className="text-brand mr-2" size={16} />
                  <span>Former autrement,</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="text-brand mr-2" size={16} />
                  <span>Accompagner avec bon sens,</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="text-brand mr-2" size={16} />
                  <span>Et remettre l'humain au cœur du développement.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Notre approche */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold">🧠 Notre approche</h2>
            </div>
            <p className="text-gray-600 mb-4">
              On ne plaque pas des modèles.
            </p>
            <p className="text-gray-600 mb-4">
              On construit avec toi, à partir de ton terrain, de ta réalité et de tes besoins.
            </p>
            <p className="text-gray-600 mb-4">
              Nos formations et nos missions s'adaptent à ton rythme, ton budget et ton niveau de maturité RSE.
            </p>
            <p className="text-gray-600">
              Et surtout, on garde le sourire : parce que le changement, ça marche mieux quand on y prend plaisir.
            </p>
          </div>
        </section>

        {/* Notre réseau */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold">🤝 Notre réseau</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Seriosa 2.0, c'est un collectif d'experts : RSE, management, sport, communication, QVT, développement durable, tourisme, RH, etc.
            </p>
            <p className="text-gray-600">
              Des professionnels passionnés, ancrés dans leurs métiers, et unis par une même envie : transmettre du sens et des solutions concrètes.
            </p>
          </div>
        </section>

        {/* Nos valeurs */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold">🪴 Nos valeurs</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold mb-1">Authenticité</h3>
                    <p className="text-gray-600 text-sm">dire les choses clairement, sans jargon.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold mb-1">Pédagogie</h3>
                    <p className="text-gray-600 text-sm">rendre les sujets complexes simples et actionnables.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold mb-1">Engagement</h3>
                    <p className="text-gray-600 text-sm">chaque projet compte, chaque personne aussi.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold mb-1">Bonne humeur</h3>
                    <p className="text-gray-600 text-sm">on apprend mieux quand on sourit.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* En résumé */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-brand-600 to-brand text-white rounded-lg shadow-md p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold">🏁 En résumé</h2>
            </div>
            <p className="text-lg mb-4">
              Seriosa 2.0, c'est la formation et le conseil autrement : plus humain, plus utile, plus aligné.
            </p>
            <p className="text-lg mb-4">
              Des contenus variés, un ton accessible, et une boussole simple :
            </p>
            <div className="bg-white bg-opacity-10 p-4 rounded-lg">
              <p className="text-xl font-medium italic">
                "Donner du sens à ce qu'on fait, et le faire bien."
              </p>
            </div>
          </div>
        </section>

         
        
        {/* Certifications & Accreditations - Enhanced with images */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center">Nos Garanties de Qualité</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center transform transition-transform hover:scale-105">
              <div className="bg-white p-6 rounded-lg mb-4 flex items-center justify-center h-40">
                <img 
                  src="/qualité.png"
                  alt="Certification Qualiopi"
                  className="h-32 w-auto object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Certification Qualiopi</h3>
              <p className="text-gray-600">
                Notre engagement qualité reconnu par l'État français pour l'excellence de nos prestations de formation.
              </p>
            </div>
            
            <div className="text-center transform transition-transform hover:scale-105">
              <div className="bg-white p-6 rounded-lg mb-4 flex items-center justify-center h-40">
                <img 
                  src="/cpf.png"
                  alt="Éligibilité CPF"
                  className="h-32 w-auto object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Éligibilité CPF</h3>
              <p className="text-gray-600">
                Toutes nos formations sont éligibles au CPF pour un financement simplifié de votre montée en compétences.
              </p>
            </div>
            
            <div className="text-center transform transition-transform hover:scale-105">
              <div className="bg-white p-6 rounded-lg mb-4 flex items-center justify-center h-40">
                <img 
                  src="/accertif.png"
                  alt="Réseau d'Excellence"
                  className="h-20 w-auto object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Réseau d'Excellence</h3>
              <p className="text-gray-600">
                Plus de 35 certificateurs partenaires et un réseau d'experts métier reconnus dans leur domaine.
              </p>
            </div>
          </div>
        </section>
        
        {/* CTA - Enhanced with gradient and animation */}
        <section className="text-center">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">Prêt à Développer Votre Potentiel ?</h2>
            <p className="text-gray-600 mb-8">
              Découvrez nos formations certifiantes et bénéficiez d'un accompagnement personnalisé par nos experts pour atteindre vos objectifs professionnels.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/formations" 
                className="btn-primary btn-lg btn-with-icon group"
              >
                Découvrir nos formations 
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link 
                href="/contact" 
                className="btn-outline btn-lg"
              >
                Nous Contacter
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;