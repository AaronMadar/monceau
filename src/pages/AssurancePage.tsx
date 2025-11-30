import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Building, Home, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const AssurancePage: React.FC = () => {
  const professionalServices = [
    { name: 'RC Professionnelle', description: 'Protection contre les risques liés à votre activité' },
    { name: 'Multirisque professionnelle', description: 'Couverture globale de vos locaux et équipements' },
    { name: 'Cyber-risques', description: 'Protection contre les menaces numériques' },
    { name: 'Décennale (BTP)', description: 'Garantie décennale pour les professionnels du bâtiment' }
  ];

  const privateServices = [
    { name: 'Assurance habitation', description: 'Protection complète de votre résidence' },
    { name: 'Assurance automobile', description: 'Couverture optimale pour vos véhicules' },
    { name: 'Assurance vie', description: 'Solutions d\'épargne et de transmission' },
    { name: 'Prévoyance familiale', description: 'Protection de vos proches' }
  ];

  return (
    <>
      <SEOHead 
        title="Conseil en Assurance et Prévoyance - Monceau David & Co"
        description="Solutions d'assurance professionnelle et privée. Conseil indépendant et expertise pour la protection et la gestion des risques."
      />
      
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-serif font-semibold text-primary-900 mb-8">
              Conseil en Assurance et Prévoyance
            </h1>
            <p className="text-xl text-anthracite-600 font-sans max-w-4xl mx-auto leading-relaxed">
              Notre approche indépendante et experte du conseil en assurance permet à nos clients 
              d'identifier leurs enjeux clés en matière de protection, de gestion des risques et de performance.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Professional Insurance */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-100">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6">
                <Building className="w-8 h-8 text-primary-900" />
              </div>
              <h2 className="text-2xl font-serif font-semibold text-primary-900 mb-6">
                Solutions Professionnelles
              </h2>
              <p className="text-anthracite-600 font-sans leading-relaxed mb-8">
                Sécurisez votre activité et protégez vos équipes avec nos solutions d'assurance 
                professionnelle adaptées à votre secteur d'activité.
              </p>
              
              <div className="space-y-4 mb-8">
                {professionalServices.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-primary-900 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <h4 className="font-sans font-medium text-anthracite-900">{service.name}</h4>
                      <p className="text-sm text-anthracite-600">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link 
                to="/assurance/professionnelle"
                className="bg-primary-900 text-white px-6 py-3 rounded-sm font-sans font-medium hover:bg-primary-800 transition-colors duration-300 inline-flex items-center"
              >
                Découvrir nos solutions professionnelles
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Private Insurance */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-100">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-lg mb-6">
                <Home className="w-8 h-8 text-primary-900" />
              </div>
              <h2 className="text-2xl font-serif font-semibold text-primary-900 mb-6">
                Solutions Privées
              </h2>
              <p className="text-anthracite-600 font-sans leading-relaxed mb-8">
                Protection familiale et patrimoniale complète avec des solutions personnalisées 
                pour sécuriser votre avenir et celui de vos proches.
              </p>
              
              <div className="space-y-4 mb-8">
                {privateServices.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-primary-900 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <h4 className="font-sans font-medium text-anthracite-900">{service.name}</h4>
                      <p className="text-sm text-anthracite-600">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link 
                to="/assurance/privee"
                className="bg-primary-900 text-white px-6 py-3 rounded-sm font-sans font-medium hover:bg-primary-800 transition-colors duration-300 inline-flex items-center"
              >
                Découvrir nos solutions privées
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-primary-900 mb-6">
                Notre Expertise
              </h2>
              <p className="text-anthracite-600 font-sans leading-relaxed mb-6">
                Nous accompagnons nos clients dans la définition de leur stratégie assurantielle 
                et dans la mise en place de solutions sur mesure, adaptées à leurs objectifs.
              </p>
              <p className="text-anthracite-600 font-sans leading-relaxed mb-8">
                Notre indépendance nous permet de sélectionner les meilleures solutions du marché, 
                en privilégiant toujours l'intérêt de nos clients.
              </p>
              <Link 
                to="/contact"
                className="bg-primary-900 text-white px-8 py-3 rounded-sm font-sans font-medium hover:bg-primary-800 transition-colors duration-300 inline-flex items-center"
              >
                Demander un diagnostic
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
                alt="Consultation en assurance"
                className="w-full h-80 object-cover rounded-lg shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AssurancePage;