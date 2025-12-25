import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Zap, Target, ArrowLeft } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import WhatsAppButton from '../../components/WatshappButton';

const StrategieEnergetiquePage: React.FC = () => {
  const services = [
    {
      category: 'Stratégie Long Terme',
      items: [
        { name: 'Définition de la stratégie énergétique', description: 'Élaboration d\'une feuille de route énergétique alignée sur vos objectifs' },
        { name: 'Pilotage de la transition', description: 'Accompagnement dans la mise en œuvre de votre transition énergétique' },
        { name: 'Planification des investissements', description: 'Programmation des investissements énergétiques sur le long terme' },
        { name: 'Suivi des performances', description: 'Monitoring continu des résultats et ajustements stratégiques' }
      ]
    },
    {
      category: 'Énergies Renouvelables',
      items: [
        { name: 'Projets solaires photovoltaïques', description: 'Étude, financement et mise en œuvre d\'installations solaires' },
        { name: 'Éolien et biomasse', description: 'Développement de projets éoliens et biomasse adaptés à vos besoins' },
        { name: 'Autoconsommation énergétique', description: 'Optimisation de l\'autoconsommation et stockage d\'énergie' },
        { name: 'Contrats d\'achat d\'énergie verte', description: 'Négociation de PPA (Power Purchase Agreement) renouvelables' }
      ]
    },
    {
      category: 'Certificats et Investissements',
      items: [
        { name: 'Gestion des CEE', description: 'Optimisation et valorisation des Certificats d\'Économie d\'Énergie' },
        { name: 'Investissements verts', description: 'Sélection et financement d\'investissements à impact environnemental positif' },
        { name: 'Amélioration du résultat fiscal', description: 'Optimisation fiscale via les investissements durables' },
        { name: 'Reporting ESG', description: 'Mise en place d\'indicateurs de performance environnementale' }
      ]
    }
  ];

  return (
    <>
      <SEOHead 
        title="Stratégie Énergétique - Développement Durable | Monceau David & Co"
        description="Définition d'une stratégie énergétique long terme avec projets durables et énergies renouvelables. CEE, investissements verts et transition énergétique."
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
              Stratégie Énergétique
            </h1>
            <p className="text-xl text-anthracite-600 font-sans leading-relaxed">
              Définition d'une stratégie énergétique long terme avec projets durables 
              et énergies renouvelables. Nous vous accompagnons dans votre transition 
              énergétique pour allier performance économique et responsabilité environnementale.
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
                Expertise en Transition Énergétique
              </h2>
              <p className="text-anthracite-600 font-sans leading-relaxed mb-6">
                Notre expertise couvre l'ensemble de la chaîne de valeur énergétique, 
                des énergies renouvelables aux investissements verts, en passant par 
                l'optimisation des certificats d'économie d'énergie.
              </p>
              <p className="text-anthracite-600 font-sans leading-relaxed mb-8">
                Nous vous accompagnons dans la définition et la mise en œuvre d'une 
                stratégie énergétique durable, créatrice de valeur économique et 
                environnementale pour votre entreprise.
              </p>
              <Link 
                to="/contact"
                className="bg-primary-900 text-white px-8 py-3 rounded-sm font-sans font-medium hover:bg-primary-800 transition-colors duration-300 inline-flex items-center"
              >
                Définir votre stratégie énergétique
              </Link>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/9800000/pexels-photo-9800000.jpeg"
                alt="Stratégie énergétique durable"
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
            Transition Énergétique Sur Mesure
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Chaque entreprise a des enjeux énergétiques spécifiques. Construisons ensemble 
            votre stratégie de transition vers un modèle énergétique durable et performant.
          </p>
          <Link 
            to="/contact"
            className="bg-white text-primary-900 px-8 py-4 rounded-sm font-sans font-medium hover:bg-gray-100 transition-colors duration-300"
          >
            Planifier votre transition énergétique
          </Link>
        </div>
        <WhatsAppButton />    
      </section>
    </>
  );
};

export default StrategieEnergetiquePage;