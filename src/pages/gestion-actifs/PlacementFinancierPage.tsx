import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, BarChart, Target, ArrowLeft } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

const PlacementFinancierPage: React.FC = () => {
  const services = [
    {
      category: 'Comptes-Titres',
      items: [
        { name: 'Compte-titres ordinaire', description: 'Investissement libre sur tous les marchés financiers' },
        { name: 'PEA (Plan d\'Épargne en Actions)', description: 'Investissement en actions européennes avec avantage fiscal' },
        { name: 'PEA-PME', description: 'Soutien aux PME et ETI avec avantages fiscaux renforcés' },
        { name: 'Compte-titres international', description: 'Accès aux marchés financiers mondiaux' }
      ]
    },
    {
      category: 'OPCVM et Fonds',
      items: [
        { name: 'Fonds actions', description: 'Investissement en actions françaises, européennes et internationales' },
        { name: 'Fonds obligataires', description: 'Placement en obligations d\'État et d\'entreprises' },
        { name: 'Fonds monétaires', description: 'Placement sécurisé à court terme avec liquidité immédiate' },
        { name: 'Fonds diversifiés', description: 'Allocation équilibrée entre actions, obligations et autres actifs' }
      ]
    },
    {
      category: 'Produits Structurés',
      items: [
        { name: 'Fonds à capital garanti', description: 'Protection du capital investi avec potentiel de performance' },
        { name: 'Fonds à capital protégé', description: 'Protection partielle du capital avec participation aux gains' },
        { name: 'Produits à barrière', description: 'Optimisation du couple rendement/risque avec mécanismes de protection' },
        { name: 'Certificats d\'investissement', description: 'Exposition à des stratégies d\'investissement spécialisées' }
      ]
    },
    {
      category: 'ETF et Trackers',
      items: [
        { name: 'ETF actions', description: 'Réplication d\'indices actions avec frais réduits' },
        { name: 'ETF obligataires', description: 'Exposition aux marchés obligataires via des trackers' },
        { name: 'ETF sectoriels', description: 'Investissement ciblé sur des secteurs d\'activité spécifiques' },
        { name: 'ETF géographiques', description: 'Diversification géographique via des indices régionaux' }
      ]
    }
  ];

  return (
    <>
      <SEOHead 
        title="Placements Financiers - Gestion d'Actifs | Monceau David & Co"
        description="Diversification de vos investissements avec des solutions adaptées à votre profil de risque. OPCVM, ETF, comptes-titres, fonds structurés."
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
              Placements Financiers
            </h1>
            <p className="text-xl text-anthracite-600 font-sans leading-relaxed">
              Diversification de vos investissements avec des solutions adaptées à votre 
              profil de risque et vos objectifs. De la gestion libre aux mandats pilotés, 
              nous vous accompagnons dans la construction d'un portefeuille performant.
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
                Expertise en Placements Financiers
              </h2>
              <p className="text-anthracite-600 font-sans leading-relaxed mb-6">
                Notre connaissance approfondie des marchés financiers nous permet 
                de vous proposer une allocation d'actifs optimisée, adaptée à 
                votre horizon d'investissement et à votre tolérance au risque.
              </p>
              <p className="text-anthracite-600 font-sans leading-relaxed mb-8">
                Nous sélectionnons les meilleurs supports d'investissement et 
                vous accompagnons dans la construction d'un portefeuille diversifié, 
                performant et maîtrisé.
              </p>
              <Link 
                to="/contact"
                className="bg-primary-900 text-white px-8 py-3 rounded-sm font-sans font-medium hover:bg-primary-800 transition-colors duration-300 inline-flex items-center"
              >
                Analyser votre profil d'investisseur
              </Link>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                alt="Placements financiers et investissements"
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
            Investissements Personnalisés
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Chaque investisseur a des objectifs et une tolérance au risque spécifiques. 
            Construisons ensemble un portefeuille adapté à votre profil et vos ambitions.
          </p>
          <Link 
            to="/contact"
            className="bg-white text-primary-900 px-8 py-4 rounded-sm font-sans font-medium hover:bg-gray-100 transition-colors duration-300"
          >
            Demander une analyse de portefeuille
          </Link>
        </div>
      </section>
    </>
  );
};

export default PlacementFinancierPage;