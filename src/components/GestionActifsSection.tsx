import React from 'react';
import { PieChart, TrendingUp, Building, Coins } from 'lucide-react';

const GestionActifsSection: React.FC = () => {
  const insuranceProducts = [
    'Contrats d\'assurance vie (personnes physiques ou morales)',
    'Contrats de capitalisation (outil patrimonial non soumis à l\'ISF pour sociétés)',
    'PEA ou PEA-PME (pour les dirigeants ou salariés)',
    'PER (Plan d\'Épargne Retraite individuel ou collectif)'
  ];

  const financialProducts = [
    'Comptes-titres',
    'OPCVM / Fonds obligataires / actions / monétaires',
    'Fonds structurés (à capital garanti ou protégé)',
    'ETF (Exchange-Traded Funds)'
  ];

  const corporateSolutions = [
    'Trésorerie d\'entreprise : optimisation via assurance vie ou capitalisation',
    'Allocation d\'actifs personnalisée via mandat de gestion',
    'Investissements ISR (Investissement Socialement Responsable)'
  ];

  const alternativeProducts = [
    'SCPI / OPCI (immobilier d\'entreprise ou résidentiel)',
    'Fonds Private Equity / Fonds de dette privée',
    'Produits structurés à rendement défini',
    'Métaux précieux (or d\'investissement)'
  ];

  const ProductCategory = ({ title, items, icon: Icon, bgColor }: {
    title: string;
    items: string[];
    icon: React.ComponentType<{ className?: string }>;
    bgColor: string;
  }) => (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 h-full">
      <div className={`flex items-center justify-center w-12 h-12 ${bgColor} rounded-lg mb-4`}>
        <Icon className="w-6 h-6 text-primary-900" />
      </div>
      <h4 className="text-lg font-serif font-semibold text-primary-900 mb-4">{title}</h4>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="text-anthracite-600 font-sans text-sm leading-relaxed flex items-start">
            <span className="w-1.5 h-1.5 bg-primary-900 rounded-full mr-3 mt-2 flex-shrink-0"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section id="gestion-actifs" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-primary-900 mb-6">
            Gestion d'Actifs & Stratégie Patrimoniale
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-xl text-anthracite-600 font-sans leading-relaxed">
              Chez Monceau David & Co, nous accompagnons nos clients dans la structuration, 
              la valorisation et la transmission de leur patrimoine professionnel et privé.
            </p>
            <p className="text-lg text-anthracite-600 font-sans leading-relaxed">
              Chaque stratégie d'investissement est pensée pour servir des objectifs clairs : 
              performance, stabilité et protection du capital, dans un cadre fiscal et juridique optimisé.
            </p>
          </div>
        </div>

        {/* Philosophy */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-16 border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-serif font-semibold text-primary-900 mb-6">
                Notre Approche
              </h3>
              <div className="space-y-4">
                <p className="text-anthracite-600 font-sans leading-relaxed">
                  Nous construisons avec vous une architecture patrimoniale cohérente, alignée sur vos 
                  ambitions économiques, vos valeurs et les enjeux d'un monde en transformation.
                </p>
                <p className="text-anthracite-600 font-sans leading-relaxed">
                  Notre approche, à taille humaine, privilégie l'écoute, la clarté, la proximité 
                  et elle s'inscrit dans une vision long terme.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                alt="Stratégie patrimoniale"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProductCategory 
            title="Produits assurantiels à vocation patrimoniale"
            items={insuranceProducts}
            icon={PieChart}
            bgColor="bg-blue-100"
          />
          
          <ProductCategory 
            title="Placements financiers"
            items={financialProducts}
            icon={TrendingUp}
            bgColor="bg-green-100"
          />
          
          <ProductCategory 
            title="Solutions sur mesure pour sociétés ou holdings"
            items={corporateSolutions}
            icon={Building}
            bgColor="bg-purple-100"
          />
          
          <ProductCategory 
            title="Produits alternatifs (selon profil client)"
            items={alternativeProducts}
            icon={Coins}
            bgColor="bg-yellow-100"
          />
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-primary-900 text-white rounded-lg p-8">
            <h3 className="text-2xl font-serif font-semibold mb-4">
              Optimisation Patrimoniale Personnalisée
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Chaque situation patrimoniale est unique. Découvrons ensemble les solutions 
              les plus adaptées à votre profil et à vos objectifs.
            </p>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-primary-900 px-8 py-3 rounded-sm font-sans font-medium hover:bg-gray-100 transition-colors duration-300"
            >
              Demander un diagnostic patrimonial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GestionActifsSection;