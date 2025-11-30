import React from 'react';
import { Link } from 'react-router-dom';
import { PieChart, TrendingUp, Shield, ArrowLeft } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

const ProduitAssurancielPage: React.FC = () => {
  const services = [
    {
      category: 'Assurance Vie',
      items: [
        { name: 'Contrats d\'assurance vie multisupports', description: 'Solutions d\'épargne diversifiées avec fonds euros et unités de compte' },
        { name: 'Assurance vie luxembourgeoise', description: 'Contrats internationaux pour optimisation fiscale et diversification' },
        { name: 'Contrats dédiés aux non-résidents', description: 'Solutions spécialisées pour la clientèle internationale' },
        { name: 'Assurance vie temporaire', description: 'Protection décès temporaire pour garantir vos projets' }
      ]
    },
    {
      category: 'Contrats de Capitalisation',
      items: [
        { name: 'Capitalisation pour personnes morales', description: 'Placement de trésorerie d\'entreprise avec avantages fiscaux' },
        { name: 'Capitalisation démembrée', description: 'Optimisation de la transmission via démembrement de propriété' },
        { name: 'Contrats collectifs', description: 'Solutions mutualisées pour groupes et associations' },
        { name: 'Capitalisation internationale', description: 'Diversification géographique et monétaire' }
      ]
    },
    {
      category: 'Plan Épargne Retraite',
      items: [
        { name: 'PER individuel', description: 'Constitution d\'un complément de retraite avec déduction fiscale' },
        { name: 'PER d\'entreprise collectif', description: 'Dispositif d\'épargne retraite pour les salariés' },
        { name: 'PER obligatoire', description: 'Régime de retraite supplémentaire d\'entreprise' },
        { name: 'Transfert et optimisation PER', description: 'Optimisation des anciens dispositifs retraite' }
      ]
    },
    {
      category: 'Optimisation Fiscale',
      items: [
        { name: 'Stratégies de transmission', description: 'Optimisation des droits de succession via l\'assurance vie' },
        { name: 'Défiscalisation des primes', description: 'Utilisation des abattements et réductions d\'impôt' },
        { name: 'Gestion de la fiscalité des rachats', description: 'Optimisation de la sortie des contrats' },
        { name: 'Assurance vie et ISF/IFI', description: 'Stratégies d\'optimisation de l\'impôt sur la fortune' }
      ]
    }
  ];

  return (
    <>
      <SEOHead 
        title="Produits Assurantiels - Gestion d'Actifs | Monceau David & Co"
        description="Solutions d'assurance vie et de capitalisation pour optimiser votre patrimoine dans un cadre fiscal avantageux. PER, contrats multisupports, transmission."
      />

      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/gestion-actifs"
            className="inline-flex items-center text-primary-900 hover:text-primary-700 mb-8 font-sans"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à la gestion d'actifs
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-5xl font-serif font-semibold text-primary-900 mb-8">
              Produits Assurantiels
            </h1>
            <p className="text-xl text-anthracite-600 font-sans leading-relaxed">
              Solutions d'assurance vie et de capitalisation pour optimiser votre patrimoine 
              dans un cadre fiscal avantageux. De l'épargne retraite à la transmission, 
              nous vous accompagnons dans la structuration de votre patrimoine financier.
            </p>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h2 className="text-2xl lg:text-3xl font-serif font-semibold text-primary-900 mb-8 text-center">
                  {section.category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                      <h3 className="text-lg font-serif font-semibold text-primary-900 mb-3">
                        {item.name}
                      </h3>
                      <p className="text-anthracite-600 font-sans text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-primary-900 mb-6">
                Expertise en Produits Assurantiels
              </h2>
              <p className="text-anthracite-600 font-sans leading-relaxed mb-6">
                Notre maîtrise des produits assurantiels nous permet de vous proposer 
                les solutions les plus adaptées à vos objectifs patrimoniaux, 
                en optimisant les aspects fiscaux et successoraux.
              </p>
              <p className="text-anthracite-600 font-sans leading-relaxed mb-8">
                De l'assurance vie multisupports aux contrats de capitalisation, 
                nous structurons votre épargne pour concilier performance, 
                sécurité et optimisation fiscale.
              </p>
              <Link 
                to="/contact"
                className="bg-primary-900 text-white px-8 py-3 rounded-sm font-sans font-medium hover:bg-primary-800 transition-colors duration-300 inline-flex items-center"
              >
                Analyser vos besoins d'épargne
              </Link>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                alt="Produits assurantiels et épargne"
                className="w-full h-80 object-cover rounded-lg shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-semibold mb-6">
            Épargne et Transmission Optimisées
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Chaque situation patrimoniale nécessite des solutions spécifiques. Analysons ensemble 
            vos objectifs pour structurer votre épargne de manière optimale.
          </p>
          <Link 
            to="/contact"
            className="bg-white text-primary-900 px-8 py-4 rounded-sm font-sans font-medium hover:bg-gray-100 transition-colors duration-300"
          >
            Demander un diagnostic patrimonial
          </Link>
        </div>
      </section>
    </>
  );
};

export default ProduitAssurancielPage;