import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Car, Heart, ArrowLeft } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

const AssurancePriveePage: React.FC = () => {
  const services = [
    {
      category: 'Protection du Foyer',
      items: [
        { name: 'Assurance habitation', description: 'Protection complète de votre résidence principale et secondaire' },
        { name: 'Assurance propriétaire non occupant', description: 'Couverture spécifique pour vos biens locatifs' },
        { name: 'Assurance copropriété', description: 'Protection des parties communes et responsabilité syndic' },
        { name: 'Objets de valeur', description: 'Assurance spécialisée pour bijoux, œuvres d\'art et collections' }
      ]
    },
    {
      category: 'Mobilité et Transport',
      items: [
        { name: 'Assurance automobile', description: 'Couverture optimale pour tous vos véhicules' },
        { name: 'Assurance moto et scooter', description: 'Protection adaptée aux deux-roues motorisés' },
        { name: 'Assurance vélo et trottinette', description: 'Couverture des nouveaux modes de transport urbain' },
        { name: 'Assistance voyage', description: 'Protection lors de vos déplacements en France et à l\'étranger' }
      ]
    },
    {
      category: 'Santé et Prévoyance',
      items: [
        { name: 'Complémentaire santé', description: 'Mutuelle adaptée à vos besoins et votre budget' },
        { name: 'Assurance accident de la vie', description: 'Protection contre les accidents domestiques et de loisirs' },
        { name: 'Prévoyance individuelle', description: 'Protection de vos proches en cas d\'incapacité ou décès' },
        { name: 'Assurance dépendance', description: 'Couverture des risques liés à la perte d\'autonomie' }
      ]
    },
    {
      category: 'Épargne et Transmission',
      items: [
        { name: 'Assurance vie', description: 'Solutions d\'épargne et de transmission patrimoniale' },
        { name: 'Plan d\'Épargne Retraite', description: 'Constitution d\'un complément de retraite avec avantages fiscaux' },
        { name: 'Assurance emprunteur', description: 'Protection de vos crédits immobiliers et professionnels' },
        { name: 'Assurance obsèques', description: 'Préparation et financement de vos dernières volontés' }
      ]
    }
  ];

  return (
    <>
      <SEOHead 
        title="Assurance Privée - Monceau David & Co"
        description="Solutions d'assurance privée complètes : habitation, automobile, santé, prévoyance, assurance vie. Protection familiale et patrimoniale personnalisée."
      />

      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/assurance"
            className="inline-flex items-center text-primary-900 hover:text-primary-700 mb-8 font-sans"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux assurances
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-5xl font-serif font-semibold text-primary-900 mb-8">
              Assurance Privée
            </h1>
            <p className="text-xl text-anthracite-600 font-sans leading-relaxed">
              Protection familiale et patrimoniale complète avec des solutions personnalisées 
              pour sécuriser votre avenir et celui de vos proches. De l'assurance habitation 
              à l'épargne retraite, nous couvrons tous vos besoins de protection.
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
                Conseil Patrimonial Personnalisé
              </h2>
              <p className="text-anthracite-600 font-sans leading-relaxed mb-6">
                Notre approche globale de la protection privée intègre vos objectifs 
                familiaux, votre situation patrimoniale et vos projets de vie pour 
                vous proposer des solutions parfaitement adaptées.
              </p>
              <p className="text-anthracite-600 font-sans leading-relaxed mb-8">
                Nous vous accompagnons dans la construction d'un programme de protection 
                cohérent, évolutif et optimisé fiscalement, pour sécuriser votre avenir 
                et celui de vos proches.
              </p>
              <Link 
                to="/contact"
                className="bg-primary-900 text-white px-8 py-3 rounded-sm font-sans font-medium hover:bg-primary-800 transition-colors duration-300 inline-flex items-center"
              >
                Analyser vos besoins de protection
              </Link>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg"
                alt="Assurance privée et protection familiale"
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
            Protection Familiale Sur Mesure
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Chaque famille a des besoins de protection spécifiques. Analysons ensemble 
            votre situation pour construire un programme d'assurance adapté à vos projets de vie.
          </p>
          <Link 
            to="/contact"
            className="bg-white text-primary-900 px-8 py-4 rounded-sm font-sans font-medium hover:bg-gray-100 transition-colors duration-300"
          >
            Demander un bilan de protection
          </Link>
        </div>
      </section>
    </>
  );
};

export default AssurancePriveePage;