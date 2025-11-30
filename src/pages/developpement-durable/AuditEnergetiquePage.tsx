import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Search, Calculator, ArrowLeft } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

const AuditEnergetiquePage: React.FC = () => {
  const services = [
    {
      category: 'Analyse des Contrats',
      items: [
        { name: 'Audit des contrats gaz et électricité', description: 'Analyse détaillée de vos contrats énergétiques actuels' },
        { name: 'Benchmark tarifaire', description: 'Comparaison avec les offres du marché pour identifier les économies' },
        { name: 'Analyse des consommations', description: 'Étude des profils de consommation et identification des pics' },
        { name: 'Diagnostic des factures', description: 'Vérification de la facturation et détection d\'erreurs' }
      ]
    },
    {
      category: 'Renégociation Tarifaire',
      items: [
        { name: 'Négociation avec les fournisseurs', description: 'Renégociation des conditions tarifaires existantes' },
        { name: 'Appels d\'offres énergétiques', description: 'Organisation d\'appels d\'offres pour optimiser les coûts' },
        { name: 'Contrats sur mesure', description: 'Structuration de contrats adaptés à vos besoins spécifiques' },
        { name: 'Suivi des échéances', description: 'Planification des renouvellements de contrats' }
      ]
    },
    {
      category: 'Achats Groupés',
      items: [
        { name: 'Trade clic énergétique', description: 'Accès aux plateformes de trading pour des prix compétitifs' },
        { name: 'Groupements d\'achat', description: 'Mutualisation des achats pour bénéficier d\'économies d\'échelle' },
        { name: 'Optimisation des volumes', description: 'Ajustement des volumes contractuels selon les besoins réels' },
        { name: 'Gestion des risques prix', description: 'Stratégies de couverture contre la volatilité des prix' }
      ]
    }
  ];

  return (
    <>
      <SEOHead 
        title="Audit Énergétique - Développement Durable | Monceau David & Co"
        description="Analyse complète de vos contrats énergétiques et identification des opportunités d'optimisation. Audit gaz/électricité, renégociation tarifaire, achats groupés."
      />

      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/developpement-durable"
            className="inline-flex items-center text-primary-900 hover:text-primary-700 mb-8 font-sans"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour au développement durable
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-5xl font-serif font-semibold text-primary-900 mb-8">
              Audit Énergétique
            </h1>
            <p className="text-xl text-anthracite-600 font-sans leading-relaxed">
              Analyse complète de vos contrats énergétiques et identification des opportunités 
              d'optimisation. Notre audit vous permet de comprendre vos consommations, 
              d'optimiser vos contrats et de réduire significativement vos coûts énergétiques.
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
                Expertise en Audit Énergétique
              </h2>
              <p className="text-anthracite-600 font-sans leading-relaxed mb-6">
                Notre équipe d'experts analyse en profondeur vos contrats et consommations 
                énergétiques pour identifier toutes les opportunités d'optimisation et 
                d'économies.
              </p>
              <p className="text-anthracite-600 font-sans leading-relaxed mb-8">
                Nous vous accompagnons dans la compréhension de vos enjeux énergétiques 
                et vous proposons des solutions concrètes pour réduire vos coûts tout 
                en améliorant votre performance énergétique.
              </p>
              <Link 
                to="/contact"
                className="bg-primary-900 text-white px-8 py-3 rounded-sm font-sans font-medium hover:bg-primary-800 transition-colors duration-300 inline-flex items-center"
              >
                Demander un audit énergétique
              </Link>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg"
                alt="Audit énergétique professionnel"
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
            Optimisez Vos Coûts Énergétiques
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Chaque entreprise a des besoins énergétiques spécifiques. Analysons ensemble 
            vos contrats pour identifier les meilleures opportunités d'économies.
          </p>
          <Link 
            to="/contact"
            className="bg-white text-primary-900 px-8 py-4 rounded-sm font-sans font-medium hover:bg-gray-100 transition-colors duration-300"
          >
            Planifier un audit énergétique
          </Link>
        </div>
      </section>
    </>
  );
};

export default AuditEnergetiquePage;