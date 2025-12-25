import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Zap, BarChart, Settings, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import WhatsAppButton from '../components/WatshappButton';

const DeveloppementDurablePage: React.FC = () => {
  const services = [
    {
      icon: BarChart,
      title: 'Audit Énergétique',
      description: 'Analyse complète de vos contrats énergétiques et identification des opportunités d\'optimisation.',
      link: '/developpement-durable/audit-energetique',
      highlights: ['Analyse des contrats gaz/électricité', 'Renégociation tarifaire', 'Achats groupés']
    },
    {
      icon: Settings,
      title: 'Optimisation des Coûts',
      description: 'Réduction de vos factures énergétiques grâce à l\'optimisation fiscale et la récupération de taxes.',
      link: '/developpement-durable/optimisation-couts',
      highlights: ['Optimisation fiscale', 'Refacturation interne', 'Valorisation des droits']
    },
    {
      icon: Leaf,
      title: 'Stratégie Énergétique',
      description: 'Définition d\'une stratégie énergétique long terme avec projets durables et énergies renouvelables.',
      link: '/developpement-durable/strategie-energetique',
      highlights: ['Énergies renouvelables', 'CEE', 'Investissements verts']
    },
    {
      icon: Zap,
      title: 'Accompagnement',
      description: 'Suivi personnalisé et reporting énergétique pour une consommation responsable et optimisée.',
      link: '/developpement-durable/accompagnement',
      highlights: ['Suivi énergétique', 'Stratégies sur mesure', 'Objectifs RSE']
    }
  ];

  return (
    <>
      <SEOHead 
        title="Développement Durable et Stratégie Énergétique - Monceau David & Co"
        description="Stratégie énergétique et transition durable. Audit énergétique, optimisation des coûts, énergies renouvelables et accompagnement RSE."
      />
      
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-serif font-semibold text-primary-900 mb-8">
              Énergie & Développement Durable
            </h1>
            <p className="text-xl text-anthracite-600 font-sans max-w-4xl mx-auto leading-relaxed">
              Parce que l'énergie est l'essence de notre activité, Monceau David & Co vous accompagne 
              dans la construction de votre stratégie énergétique, avec une vision à la fois économique et durable.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 lg:p-12 mb-16 border border-green-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-primary-900 mb-6">
                  Notre Mission
                </h2>
                <p className="text-anthracite-600 font-sans leading-relaxed mb-4">
                  Nos solutions intégrées couvrent l'ensemble du spectre : trading d'électricité et de gaz, 
                  optimisation et renégociation des contrats, gestion des Certificats d'Économie d'Énergie (CEE), 
                  audits énergétiques, transition vers des énergies renouvelables, et mise en place de pratiques RSE concrètes.
                </p>
                <p className="text-anthracite-600 font-sans leading-relaxed font-medium">
                  <strong>Transformer vos consommations en leviers de compétitivité et inscrire votre modèle 
                  énergétique dans un avenir durable.</strong>
                </p>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg"
                  alt="Énergies renouvelables"
                  className="w-full h-64 object-cover rounded-lg shadow-sm"
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
                <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-lg mb-6 group-hover:bg-green-200 transition-colors duration-300">
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
                        <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3"></span>
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

      {/* Performance & Responsibility */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <img 
              src="https://images.pexels.com/photos/9800000/pexels-photo-9800000.jpeg"
              alt="Transition énergétique RSE"
              className="w-full h-80 object-cover rounded-lg shadow-sm"
            />
            <div>
              <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-primary-900 mb-6">
                Performance & Responsabilité
              </h2>
              <p className="text-anthracite-600 font-sans leading-relaxed mb-6">
                Chaque stratégie est pensée pour être à la fois performante, économiquement viable 
                et écologiquement responsable. Une approche intégrée qui place la durabilité au cœur 
                de la performance économique.
              </p>
              <p className="text-anthracite-600 font-sans leading-relaxed mb-8">
                Dans un monde où les enjeux écologiques sont de plus en plus essentiels, nous vous aidons 
                à sécuriser vos approvisionnements, à réduire vos coûts et à anticiper les évolutions du marché.
              </p>
              <Link 
                to="/contact"
                className="bg-primary-900 text-white px-8 py-3 rounded-sm font-sans font-medium hover:bg-primary-800 transition-colors duration-300 inline-flex items-center"
              >
                Demander un audit énergétique
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-semibold mb-6">
            Stratégie Énergétique Sur Mesure
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Chaque entreprise a des besoins énergétiques spécifiques. Construisons ensemble 
            votre stratégie de transition énergétique et de développement durable.
          </p>
          <Link 
            to="/contact"
            className="bg-white text-primary-900 px-8 py-4 rounded-sm font-sans font-medium hover:bg-gray-100 transition-colors duration-300 inline-flex items-center"
          >
            Planifier un diagnostic énergétique
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>
      <WhatsAppButton />
    </>
  );
};

export default DeveloppementDurablePage;