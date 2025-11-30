import React from 'react';
import { Shield, TrendingUp, Leaf } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Shield,
      title: 'Assurance',
      description: 'Conseil en assurance et prévoyance avec une approche indépendante et experte pour la protection et la gestion des risques.',
      link: '#assurance'
    },
    {
      icon: TrendingUp,
      title: 'Gestion d\'actifs',
      description: 'Structuration, valorisation et transmission du patrimoine professionnel et privé avec des stratégies d\'investissement personnalisées.',
      link: '#gestion-actifs'
    },
    {
      icon: Leaf,
      title: 'Développement durable',
      description: 'Stratégie énergétique et transition durable avec optimisation des coûts et mise en place de pratiques RSE.',
      link: '#developpement-durable'
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-gray-50">
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
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-8 border border-gray-100 group cursor-pointer"
              onClick={() => scrollToSection(service.link)}
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
              
              <button className="text-primary-900 font-sans font-medium hover:text-primary-700 transition-colors duration-200 flex items-center">
                En savoir plus
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;