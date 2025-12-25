import React from 'react';
import { Award, Users, Clock, Target } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import WhatsAppButton from '../components/WatshappButton';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Une expertise reconnue et une approche méthodique pour des conseils de qualité supérieure.'
    },
    {
      icon: Users,
      title: 'Proximité',
      description: 'Une relation de confiance basée sur l\'écoute et la compréhension de vos enjeux spécifiques.'
    },
    {
      icon: Clock,
      title: 'Pérennité',
      description: 'Des solutions durables pensées dans une vision long terme pour accompagner votre développement.'
    },
    {
      icon: Target,
      title: 'Sur-mesure',
      description: 'Chaque stratégie est adaptée à votre situation particulière et à vos objectifs uniques.'
    }
  ];

  return (
    <>
      <SEOHead 
        title="À Propos - Monceau David & Co"
        description="Cabinet de conseil indépendant fondé sur des valeurs traditionnelles d'excellence, d'intégrité et de service client personnalisé."
      />
      
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-serif font-semibold text-primary-900 mb-8">
              À Propos de Monceau David & Co
            </h1>
            <p className="text-xl text-anthracite-600 font-sans max-w-3xl mx-auto leading-relaxed">
              Cabinet de conseil indépendant fondé sur des valeurs traditionnelles d'excellence, 
              d'intégrité et de service client personnalisé.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm p-8 lg:p-12 border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-primary-900 mb-6">
                  Une Expertise Traditionnelle
                </h2>
                <div className="space-y-4">
                  <p className="text-anthracite-600 font-sans leading-relaxed">
                    Depuis sa création, Monceau David & Co accompagne les entreprises et les particuliers 
                    dans leurs décisions stratégiques les plus importantes. Notre approche se distingue 
                    par une méthodologie éprouvée et une connaissance approfondie des marchés.
                  </p>
                  <p className="text-anthracite-600 font-sans leading-relaxed">
                    Nous privilégions les relations durables basées sur la confiance mutuelle et la 
                    transparence. Chaque client bénéficie d'un accompagnement personnalisé, 
                    adapté à ses spécificités et à ses ambitions.
                  </p>
                  <p className="text-anthracite-600 font-sans leading-relaxed">
                    Notre cabinet s'appuie sur une équipe d'experts reconnus, formés aux meilleures 
                    pratiques du conseil et régulièrement mis à jour sur les évolutions réglementaires 
                    et les tendances du marché.
                  </p>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg"
                  alt="Bureau de conseil professionnel"
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-primary-900 mb-4">
              Nos Valeurs
            </h2>
            <p className="text-lg text-anthracite-600 font-sans max-w-2xl mx-auto">
              Les principes qui guident notre action quotidienne et notre relation avec nos clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 text-center border border-gray-100 group hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center justify-center w-14 h-14 bg-primary-100 rounded-lg mx-auto mb-4 group-hover:bg-primary-200 transition-colors duration-300">
                  <value.icon className="w-7 h-7 text-primary-900" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-primary-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-anthracite-600 font-sans text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 lg:py-28 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl lg:text-3xl font-serif italic leading-relaxed mb-6">
            "L'excellence dans le conseil naît de la combinaison entre expertise technique, 
            compréhension humaine et vision stratégique long terme."
          </blockquote>
          <cite className="text-lg font-sans">
            — La philosophie Monceau David & Co
          </cite>
        </div>
        <WhatsAppButton />
      </section>
    </>
  );
};

export default AboutPage;