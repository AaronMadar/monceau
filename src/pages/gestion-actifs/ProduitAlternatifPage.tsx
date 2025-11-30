import React from 'react';
import { Link } from 'react-router-dom';
import { Building, TrendingUp, Shield, ArrowLeft } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

const SolutionSocietePage: React.FC = () => {
  const services = [
    {
      category: 'Trésorerie d\'Entreprise',
      items: [
        { name: 'Optimisation via assurance vie', description: 'Placement de la trésorerie excédentaire avec avantages fiscaux' },
        { name: 'Contrats de capitalisation', description: 'Solutions patrimoniales pour sociétés non soumises à l\'ISF' },
        { name: 'Gestion de liquidités', description: 'Optimisation des placements court terme et moyen terme' },
        { name: 'Diversification des risques', description: 'Répartition des investissements selon les objectifs de l\'entreprise' }
      ]
    },
    {
      category: 'Mandats de Gestion',
      items: [
        { name: 'Allocation d\'actifs personnalisée', description: 'Stratégie d\'investissement adaptée au profil de l\'entreprise' },
        { name: 'Gestion pilotée', description: 'Délégation de la gestion à des experts reconnus' },
        { name: 'Reporting régulier', description: 'Suivi transparent des performances et de l\'allocation' },
        { name: 'Rééquilibrage automatique', description: 'Ajustement continu selon les conditions de marché' }
      ]
    },
    {
      category: 'Investissement Socialement Responsable',
      items: [
        { name: 'Fonds ISR certifiés', description: 'Investissements respectant les critères ESG (Environnement, Social, Gouvernance)' },
        { name: 'Impact investing', description: 'Placements générant un impact social et environnemental positif' },
        { name: 'Exclusions sectorielles', description: 'Évitement des secteurs non conformes aux valeurs de l\'entreprise' },
        { name: 'Reporting extra-financier', description: 'Mesure et communication de l\'impact des investissements' }
      ]
    },
    {
      category: 'Optimisation Fiscale',
      items: [
        { name: 'Structuration juridique', description: 'Choix des véhicules d\'investissement optimaux' },
        { name: 'Défiscalisation', description: 'Utilisation des dispositifs fiscaux avantageux' },
        { name: 'Transmission d\'entreprise', description: 'Préparation et optimisation de la cession' },
        { name: 'Holding patrimoniale', description: 'Structuration pour l\'optimisation fiscale et la transmission' }
      ]
    }
  ];

  return (
    <>
      <SEOHead 
        title="Produits Alternatifs - Gestion d'Actifs | Monceau David & Co"
        description="Investissements alternatifs pour diversifier votre allocation d'actifs : SCPI/OPCI, Private Equity, métaux précieux et produits structurés."
      />

      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-anthracite-500 hover:text-primary-900">Accueil</Link>
            <span className="text-anthracite-400">/</span>
            <Link to="/gestion-actifs" className="text-anthracite-500 hover:text-primary-900">Gestion d'Actifs</Link>
            <span className="text-anthracite-400">/</span>
            <span className="text-primary-900 font-medium">Produits Alternatifs</span>
          </div>

          <Link 
            to="/gestion-actifs"
            className="inline-flex items-center text-primary-900 hover:text-primary-700 transition-colors duration-300 mb-8 mt-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à la gestion d'actifs
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-5xl font-serif font-semibold text-primary-900 mb-8">
              Produits Alternatifs
            </h1>
            <p className="text-xl text-anthracite-600 font-sans leading-relaxed">
              Investissements alternatifs pour diversifier et enrichir votre allocation d'actifs. 
              Des solutions d'investissement innovantes pour optimiser votre portefeuille 
              avec des classes d'actifs complémentaires aux placements traditionnels.
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
                Expertise Dédiée aux Entreprises
              </h2>
              <p className="text-anthracite-600 font-sans leading-relaxed mb-6">
                Nous comprenons les enjeux spécifiques des entreprises et des dirigeants. 
                Notre approche intègre les contraintes réglementaires, fiscales et 
                opérationnelles pour proposer des solutions adaptées.
              </p>
              <p className="text-anthracite-600 font-sans leading-relaxed mb-8">
                Chaque stratégie est conçue pour optimiser la performance financière 
                tout en respectant les objectifs de développement durable et de 
                responsabilité sociale de l'entreprise.
              </p>
              <Link 
                to="/contact"
                className="bg-primary-900 text-white px-8 py-3 rounded-sm font-sans font-medium hover:bg-primary-800 transition-colors duration-300 inline-flex items-center"
              >
                Analyser les besoins de votre société
              </Link>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                alt="Solutions financières pour entreprises"
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
            Stratégie Financière d'Entreprise
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Chaque entreprise a des besoins financiers spécifiques. Analysons ensemble 
            votre situation pour définir la stratégie patrimoniale la plus adaptée.
          </p>
          <Link 
            to="/contact"
            className="bg-white text-primary-900 px-8 py-4 rounded-sm font-sans font-medium hover:bg-gray-100 transition-colors duration-300"
          >
            Demander un diagnostic d'entreprise
          </Link>
        </div>
      </section>
    </>
  );
};

export default SolutionSocietePage;