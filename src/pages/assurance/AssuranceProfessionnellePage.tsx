import React from 'react';
import { Link } from 'react-router-dom';
import { Building, Shield, Users, ArrowLeft } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

const AssuranceProfessionnellePage: React.FC = () => {
  const services = [
    {
      category: 'Responsabilité Civile Professionnelle',
      items: [
        { name: 'RC Professionnelle générale', description: 'Protection contre les dommages causés à des tiers dans le cadre de votre activité' },
        { name: 'RC Produits', description: 'Couverture des dommages causés par vos produits après livraison' },
        { name: 'RC Exploitation', description: 'Protection des dommages liés à l\'exploitation de vos locaux' },
        { name: 'RC Dirigeants', description: 'Assurance spécifique pour la responsabilité des dirigeants d\'entreprise' }
      ]
    },
    {
      category: 'Multirisque Professionnelle',
      items: [
        { name: 'Dommages aux biens', description: 'Couverture de vos locaux, équipements et marchandises' },
        { name: 'Pertes d\'exploitation', description: 'Indemnisation des pertes financières en cas d\'arrêt d\'activité' },
        { name: 'Bris de machine', description: 'Protection de vos équipements professionnels contre les pannes' },
        { name: 'Vol et vandalisme', description: 'Couverture contre les actes de malveillance' }
      ]
    },
    {
      category: 'Assurances Spécialisées',
      items: [
        { name: 'Cyber-risques', description: 'Protection contre les attaques informatiques et violations de données' },
        { name: 'Décennale BTP', description: 'Garantie décennale obligatoire pour les professionnels du bâtiment' },
        { name: 'Transport de marchandises', description: 'Couverture des biens en cours de transport' },
        { name: 'Protection juridique', description: 'Assistance et prise en charge des frais de justice' }
      ]
    },
    {
      category: 'Protection des Équipes',
      items: [
        { name: 'Mutuelle d\'entreprise', description: 'Complémentaire santé collective pour vos salariés' },
        { name: 'Prévoyance collective', description: 'Protection en cas d\'incapacité, invalidité ou décès' },
        { name: 'Retraite supplémentaire', description: 'Dispositifs d\'épargne retraite d\'entreprise' },
        { name: 'Homme-clé', description: 'Assurance sur la vie des personnes clés de l\'entreprise' }
      ]
    }
  ];

  return (
    <>
      <SEOHead 
        title="Assurance Professionnelle - Monceau David & Co"
        description="Solutions d'assurance professionnelle complètes : RC Pro, multirisque, cyber-risques, décennale BTP. Protection de votre activité et de vos équipes."
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
              Assurance Professionnelle
            </h1>
            <p className="text-xl text-anthracite-600 font-sans leading-relaxed">
              Solutions d'assurance professionnelle complètes pour sécuriser votre activité 
              et protéger vos équipes. De la responsabilité civile aux cyber-risques, 
              nous vous accompagnons dans la protection globale de votre entreprise.
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
                Expertise en Assurance Professionnelle
              </h2>
              <p className="text-anthracite-600 font-sans leading-relaxed mb-6">
                Notre connaissance approfondie des risques professionnels nous permet 
                de vous proposer des solutions d'assurance parfaitement adaptées à 
                votre secteur d'activité et à vos enjeux spécifiques.
              </p>
              <p className="text-anthracite-600 font-sans leading-relaxed mb-8">
                Nous analysons vos besoins avec précision pour construire un programme 
                d'assurance sur mesure, offrant une protection optimale au meilleur coût 
                pour votre entreprise.
              </p>
              <Link 
                to="/contact"
                className="bg-primary-900 text-white px-8 py-3 rounded-sm font-sans font-medium hover:bg-primary-800 transition-colors duration-300 inline-flex items-center"
              >
                Analyser vos besoins d'assurance
              </Link>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
                alt="Assurance professionnelle"
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
            Protection Professionnelle Sur Mesure
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Chaque entreprise a des risques spécifiques. Analysons ensemble vos besoins 
            pour construire un programme d'assurance parfaitement adapté à votre activité.
          </p>
          <Link 
            to="/contact"
            className="bg-white text-primary-900 px-8 py-4 rounded-sm font-sans font-medium hover:bg-gray-100 transition-colors duration-300"
          >
            Demander un diagnostic d'assurance
          </Link>
        </div>
      </section>
    </>
  );
};

export default AssuranceProfessionnellePage;