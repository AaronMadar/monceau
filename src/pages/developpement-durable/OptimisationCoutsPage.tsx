import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, TrendingDown, FileText, ArrowLeft } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

const OptimisationCoutsPage: React.FC = () => {
  const services = [
    {
      category: 'Optimisation Fiscale',
      items: [
        { name: 'Récupération de taxes énergétiques', description: 'Identification et récupération des taxes applicables sur vos factures' },
        { name: 'Optimisation de la TICGN/TICPE', description: 'Gestion des taxes intérieures sur le gaz naturel et les produits énergétiques' },
        { name: 'Exonérations sectorielles', description: 'Application des exonérations spécifiques à votre secteur d\'activité' },
        { name: 'Crédit d\'impôt recherche', description: 'Valorisation des investissements R&D dans le domaine énergétique' }
      ]
    },
    {
      category: 'Refacturation Interne',
      items: [
        { name: 'Systèmes de refacturation', description: 'Mise en place de systèmes fiables pour éviter les erreurs de facturation' },
        { name: 'Répartition des coûts', description: 'Allocation précise des coûts énergétiques par service ou département' },
        { name: 'Tableaux de bord', description: 'Outils de suivi et de contrôle des consommations par entité' },
        { name: 'Automatisation des processus', description: 'Digitalisation des processus de refacturation interne' }
      ]
    },
    {
      category: 'Valorisation des Droits',
      items: [
        { name: 'Sécurisation des droits énergétiques', description: 'Protection et valorisation de vos droits énergétiques' },
        { name: 'Certificats d\'Économie d\'Énergie', description: 'Optimisation et valorisation de vos CEE' },
        { name: 'Garanties d\'origine', description: 'Gestion des certificats verts et garanties d\'origine renouvelable' },
        { name: 'Droits à polluer', description: 'Gestion des quotas carbone et droits d\'émission' }
      ]
    }
  ];

  return (
    <>
      <SEOHead 
        title="Optimisation des Coûts Énergétiques - Développement Durable | Monceau David & Co"
        description="Réduction de vos factures énergétiques grâce à l'optimisation fiscale et la récupération de taxes. Refacturation interne et valorisation des droits."
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
              Optimisation des Coûts
            </h1>
            <p className="text-xl text-anthracite-600 font-sans leading-relaxed">
              Réduction de vos factures énergétiques grâce à l'optimisation fiscale et 
              la récupération de taxes. Nous vous aidons à identifier et valoriser tous 
              les leviers d'économies disponibles pour votre entreprise.
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
                Expertise en Optimisation Fiscale
              </h2>
              <p className="text-anthracite-600 font-sans leading-relaxed mb-6">
                Notre connaissance approfondie de la fiscalité énergétique nous permet 
                d'identifier toutes les opportunités d'optimisation et de récupération 
                de taxes pour votre entreprise.
              </p>
              <p className="text-anthracite-600 font-sans leading-relaxed mb-8">
                Nous mettons en place des systèmes fiables de refacturation interne 
                et vous accompagnons dans la valorisation de tous vos droits énergétiques 
                pour maximiser vos économies.
              </p>
              <Link 
                to="/contact"
                className="bg-primary-900 text-white px-8 py-3 rounded-sm font-sans font-medium hover:bg-primary-800 transition-colors duration-300 inline-flex items-center"
              >
                Analyser vos opportunités d'économies
              </Link>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                alt="Optimisation des coûts énergétiques"
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
            Réduisez Vos Coûts Énergétiques
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Chaque entreprise peut bénéficier d'optimisations fiscales et de récupération 
            de taxes. Découvrons ensemble vos opportunités d'économies.
          </p>
          <Link 
            to="/contact"
            className="bg-white text-primary-900 px-8 py-4 rounded-sm font-sans font-medium hover:bg-gray-100 transition-colors duration-300"
          >
            Demander une analyse d'optimisation
          </Link>
        </div>
      </section>
    </>
  );
};

export default OptimisationCoutsPage;