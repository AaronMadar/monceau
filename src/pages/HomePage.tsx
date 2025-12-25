import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, TrendingUp, Leaf, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import WhatsAppButton from '../components/WatshappButton';

const HomePage: React.FC = () => {
  const services = [
    {
      icon: Shield,
      title: 'Assurance & Prévoyance',
      description: 'Solutions d\'assurance professionnelle et privée avec une approche indépendante et experte pour la protection et la gestion des risques.',
      link: '/assurance',
      highlights: ['RC Professionnelle', 'Prévoyance collective', 'Assurance vie']
    },
    {
      icon: TrendingUp,
      title: 'Gestion d\'Actifs',
      description: 'Structuration, valorisation et transmission du patrimoine professionnel et privé avec des stratégies d\'investissement personnalisées.',
      link: '/gestion-actifs',
      highlights: ['Assurance vie', 'OPCVM', 'SCPI/OPCI']
    },
    {
      icon: Leaf,
      title: 'Développement Durable',
      description: 'Stratégie énergétique et transition durable avec optimisation des coûts et mise en place de pratiques RSE.',
      link: '/developpement-durable',
      highlights: ['Audit énergétique', 'CEE', 'Énergies renouvelables']
    }
  ];

  return (
    <>
      <SEOHead 
        title="Monceau David & Co - Cabinet de Conseil"
        description="Cabinet de conseil indépendant spécialisé en assurance, gestion d'actifs et développement durable. Expertise traditionnelle et solutions sur mesure."
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: 'url(/David_09.jpg)' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950/60 via-primary-900/50 to-primary-800/60"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-semibold leading-tight mb-8">
              Monceau David & Co
            </h1>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 sm:p-8 mb-8 sm:mb-12 border border-white border-opacity-20 mx-auto max-w-3xl">
              <blockquote className="text-lg sm:text-xl lg:text-2xl font-serif italic leading-relaxed">
                "Je te montrerai la voie que tu dois suivre."
              </blockquote>
              <cite className="block text-base sm:text-lg text-center mt-4 opacity-90">
                Psaume 32:8
              </cite>
            </div>

            <p className="text-lg sm:text-xl lg:text-2xl font-sans font-light leading-relaxed mb-8 sm:mb-12 px-4 sm:px-0">
              Cabinet de conseil en assurance, gestion d'actifs et développement durable. 
              <br className="hidden sm:block" />
              <span className="font-medium">Une expertise traditionnelle au service de votre réussite.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 sm:px-0">
              <Link 
                to="/contact"
                className="w-full sm:w-auto bg-white text-primary-900 px-6 sm:px-8 py-3 sm:py-4 rounded-sm font-sans font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-center"
              >
                Nous contacter
              </Link>
              <Link 
                to="/a-propos"
                className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-sm font-sans font-medium hover:bg-white hover:text-primary-900 transition-all duration-300 text-center"
              >
                Découvrir notre histoire
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 opacity-10">
          <div className="w-64 h-64 bg-gradient-to-l from-white to-transparent rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-primary-900 mb-6">
              Nos Domaines d'Expertise
            </h2>
            <p className="text-xl text-anthracite-600 font-sans max-w-3xl mx-auto leading-relaxed">
              Trois activités de premier plan pour répondre aux enjeux économiques, 
              financiers et environnementaux de nos clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-8 border border-gray-100 group"
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
                  En savoir plus
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-primary-900 mb-6">
                Une Expertise Traditionnelle
              </h2>
              <p className="text-anthracite-600 font-sans leading-relaxed mb-6">
                Depuis sa création, Monceau David & Co accompagne les entreprises et les particuliers 
                dans leurs décisions stratégiques les plus importantes. Notre approche se distingue 
                par une méthodologie éprouvée et une connaissance approfondie des marchés.
              </p>
              <p className="text-anthracite-600 font-sans leading-relaxed mb-8">
                Nous privilégions les relations durables basées sur la confiance mutuelle et la 
                transparence. Chaque client bénéficie d'un accompagnement personnalisé, 
                adapté à ses spécificités et à ses ambitions.
              </p>
              <Link 
                to="/a-propos"
                className="bg-primary-900 text-white px-8 py-3 rounded-sm font-sans font-medium hover:bg-primary-800 transition-colors duration-300 inline-flex items-center"
              >
                Découvrir notre histoire
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg"
                alt="Bureau de conseil professionnel"
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
            Prenons Rendez-vous
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Étudions ensemble vos projets et définissons les solutions 
            les plus adaptées à vos besoins spécifiques.
          </p>
          <Link 
            to="/contact"
            className="bg-white text-primary-900 px-8 py-4 rounded-sm font-sans font-medium hover:bg-gray-100 transition-colors duration-300 inline-flex items-center"
          >
            Nous contacter
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
        <WhatsAppButton />        
      </section>
    </>
  );
};

export default HomePage;