import React from 'react';
import { Link } from 'react-router-dom';
import { Users, BarChart, Target, ArrowLeft } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import WhatsAppButton from '../../components/WatshappButton';

const AccompagnementPage: React.FC = () => {
  const services = [
    {
      category: 'Suivi Énergétique',
      items: [
        { name: 'Monitoring en temps réel', description: 'Surveillance continue de vos consommations énergétiques' },
        { name: 'Tableaux de bord personnalisés', description: 'Outils de pilotage adaptés à vos besoins spécifiques' },
        { name: 'Alertes et notifications', description: 'Système d\'alertes pour détecter les anomalies de consommation' },
        { name: 'Reporting périodique', description: 'Rapports détaillés sur vos performances énergétiques' }
      ]
    },
    {
      category: 'Stratégies Sur Mesure',
      items: [
        { name: 'Conseil personnalisé', description: 'Accompagnement adapté à votre secteur d\'activité et vos enjeux' },
        { name: 'Plans d\'action ciblés', description: 'Définition de plans d\'action concrets et mesurables' },
        { name: 'Formation des équipes', description: 'Sensibilisation et formation de vos collaborateurs aux enjeux énergétiques' },
        { name: 'Optimisation continue', description: 'Amélioration permanente de vos processus énergétiques' }
      ]
    },
    {
      category: 'Objectifs RSE',
      items: [
        { name: 'Définition d\'objectifs RSE', description: 'Élaboration d\'une stratégie RSE alignée sur vos valeurs' },
        { name: 'Indicateurs de performance', description: 'Mise en place de KPI environnementaux et sociaux' },
        { name: 'Reporting extra-financier', description: 'Préparation des rapports RSE et de développement durable' },
        { name: 'Certification et labels', description: 'Accompagnement vers les certifications environnementales' }
      ]
    }
  ];

  return (
    <>
      <SEOHead 
        title="Accompagnement Personnalisé - Développement Durable | Monceau David & Co"
        description="Suivi personnalisé et reporting énergétique pour une consommation responsable et optimisée. Stratégies sur mesure et objectifs RSE."
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
              Accompagnement Personnalisé
            </h1>
            <p className="text-xl text-anthracite-600 font-sans leading-relaxed">
              Suivi personnalisé et reporting énergétique pour une consommation responsable 
              et optimisée. Nous vous accompagnons au quotidien dans l'atteinte de vos 
              objectifs énergétiques et RSE avec des stratégies sur mesure.
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
                Accompagnement de Proximité
              </h2>
              <p className="text-anthracite-600 font-sans leading-relaxed mb-6">
                Notre approche d'accompagnement privilégie la proximité et la personnalisation. 
                Nous adaptons nos méthodes et outils à votre contexte spécifique pour 
                maximiser l'efficacité de votre démarche énergétique.
              </p>
              <p className="text-anthracite-600 font-sans leading-relaxed mb-8">
                De la définition de vos objectifs RSE au suivi quotidien de vos performances, 
                nous vous accompagnons à chaque étape de votre transformation énergétique 
                et environnementale.
              </p>
              <Link 
                to="/contact"
                className="bg-primary-900 text-white px-8 py-3 rounded-sm font-sans font-medium hover:bg-primary-800 transition-colors duration-300 inline-flex items-center"
              >
                Bénéficier d'un accompagnement personnalisé
              </Link>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg"
                alt="Accompagnement personnalisé en développement durable"
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
            Accompagnement Sur Mesure
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Chaque entreprise a des besoins d'accompagnement spécifiques. Définissons ensemble 
            la stratégie d'accompagnement la plus adaptée à vos objectifs énergétiques et RSE.
          </p>
          <Link 
            to="/contact"
            className="bg-white text-primary-900 px-8 py-4 rounded-sm font-sans font-medium hover:bg-gray-100 transition-colors duration-300"
          >
            Demander un accompagnement personnalisé
          </Link>
        </div>
        <WhatsAppButton />
      </section>
    </>
  );
};

export default AccompagnementPage;