import React from 'react';
import { Link } from 'react-router-dom';
import { PieChart, TrendingUp, Building, Coins, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import WhatsAppButton from '../components/WatshappButton';

const GestionActifsPage: React.FC = () => {
  const services = [
    {
      icon: PieChart,
      title: 'Produits Assurantiels',
      description: 'Solutions d\'assurance vie et de capitalisation pour optimiser votre patrimoine dans un cadre fiscal avantageux.',
      link: '/gestion-actifs/produits-assurantiels',
      highlights: ['Assurance vie', 'Contrats de capitalisation', 'PER individuel']
    },
    {
      icon: TrendingUp,
      title: 'Placements Financiers',
      description: 'Diversification de vos investissements avec des solutions adaptées à votre profil de risque et vos objectifs.',
      link: '/gestion-actifs/placements-financiers',
      highlights: ['OPCVM', 'ETF', 'Comptes-titres']
    },
    {
      icon: Building,
      title: 'Solutions Sociétés',
      description: 'Optimisation patrimoniale pour dirigeants et entreprises avec des solutions sur mesure.',
      link: '/gestion-actifs/solutions-societes',
      highlights: ['Trésorerie d\'entreprise', 'Mandats de gestion', 'ISR']
    },
    {
      icon: Coins,
      title: 'Produits Alternatifs',
      description: 'Investissements alternatifs pour diversifier et enrichir votre allocation d\'actifs.',
      link: '/gestion-actifs/produits-alternatifs',
      highlights: ['SCPI/OPCI', 'Private Equity', 'Métaux précieux']
    }
  ];

  return (
    <>
      <SEOHead 
        title="Gestion d'Actifs et Stratégie Patrimoniale - Monceau David & Co"
        description="Structuration, valorisation et transmission du patrimoine professionnel et privé. Stratégies d'investissement personnalisées et optimisation fiscale."
      />
      
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-serif font-semibold text-primary-900 mb-8">
              Gestion d'Actifs & Stratégie Patrimoniale
            </h1>
            <p className="text-xl text-anthracite-600 font-sans max-w-4xl mx-auto leading-relaxed">
              Chez Monceau David & Co, nous accompagnons nos clients dans la structuration, 
              la valorisation et la transmission de leur patrimoine professionnel et privé.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm p-8 lg:p-12 border border-gray-100 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-primary-900 mb-6">
                  Notre Approche
                </h2>
                <div className="space-y-4">
                  <p className="text-anthracite-600 font-sans leading-relaxed">
                    Nous construisons avec vous une architecture patrimoniale cohérente, alignée sur vos 
                    ambitions économiques, vos valeurs et les enjeux d'un monde en transformation.
                  </p>
                  <p className="text-anthracite-600 font-sans leading-relaxed">
                    Notre approche, à taille humaine, privilégie l'écoute, la clarté, la proximité 
                    et elle s'inscrit dans une vision long terme.
                  </p>
                  <p className="text-anthracite-600 font-sans leading-relaxed">
                    Chaque stratégie d'investissement est pensée pour servir des objectifs clairs : 
                    performance, stabilité et protection du capital, dans un cadre fiscal et juridique optimisé.
                  </p>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                  alt="Stratégie patrimoniale"
                  className="w-full h-80 object-cover rounded-lg shadow-sm"
                />
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-8 border border-gray-100 group"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-lg mb-6 group-hover:bg-primary-200 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-primary-900" />
                </div>
                
                <h3 className="text-xl font-serif font-semibold text-primary-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-anthracite-600 font-sans leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="mb-6">
                  <ul className="space-y-2">
                    {service.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-anthracite-600 font-sans text-sm flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary-900 rounded-full mr-3"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  to={service.link}
                  className="text-primary-900 font-sans font-medium hover:text-primary-700 transition-colors duration-200 flex items-center group"
                >
                  Découvrir nos solutions
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-semibold mb-6">
            Optimisation Patrimoniale Personnalisée
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Chaque situation patrimoniale est unique. Découvrons ensemble les solutions 
            les plus adaptées à votre profil et à vos objectifs.
          </p>
          <Link 
            to="/contact"
            className="bg-white text-primary-900 px-8 py-4 rounded-sm font-sans font-medium hover:bg-gray-100 transition-colors duration-300 inline-flex items-center"
          >
            Demander un diagnostic patrimonial
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
        <WhatsAppButton />
      </section>
    </>
  );
};

export default GestionActifsPage;