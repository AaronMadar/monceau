import React from 'react';
import { Leaf, Zap, BarChart, Settings } from 'lucide-react';

const DeveloppementDurableSection: React.FC = () => {
  const auditServices = [
    'Analyse des contrats gaz / électricité',
    'Renégociation des conditions tarifaires',
    'Mise en place de trade clic ou achats groupés pour bénéficier de prix compétitifs'
  ];

  const optimizationServices = [
    'Optimisation fiscale et récupération des taxes applicables',
    'Systèmes de refacturation internes fiables pour éviter toute erreur',
    'Valorisation et sécurisation des droits énergétiques de l\'entreprise'
  ];

  const sustainabilityServices = [
    'Définition et pilotage d\'une stratégie énergétique long terme',
    'Mise en place de projets durables (énergies renouvelables, efficacité énergétique)',
    'Exploitation des leviers fiscaux liés aux CEE (Certificats d\'Économies d\'Énergie)',
    'Amélioration du résultat fiscal via des investissements verts'
  ];

  const supportServices = [
    'Suivi et reporting énergétique régulier',
    'Stratégies sur mesure pour une consommation responsable et optimisée',
    'Alignement avec les objectifs RSE (Responsabilité Sociétale des Entreprises)'
  ];

  const ServiceCategory = ({ title, items, icon: Icon, bgColor }: {
    title: string;
    items: string[];
    icon: React.ComponentType<{ className?: string }>;
    bgColor: string;
  }) => (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 h-full">
      <div className={`flex items-center justify-center w-12 h-12 ${bgColor} rounded-lg mb-4`}>
        <Icon className="w-6 h-6 text-primary-900" />
      </div>
      <h4 className="text-lg font-serif font-semibold text-primary-900 mb-4">{title}</h4>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="text-anthracite-600 font-sans text-sm leading-relaxed flex items-start">
            <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section id="developpement-durable" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-primary-900 mb-6">
            Énergie & Développement Durable
          </h2>
          <div className="max-w-5xl mx-auto space-y-4">
            <p className="text-xl text-anthracite-600 font-sans leading-relaxed">
              Parce que l'énergie est l'essence de notre activité, Monceau David & Co vous accompagne 
              dans la construction de votre stratégie énergétique, avec une vision à la fois économique et durable.
            </p>
            <p className="text-lg text-anthracite-600 font-sans leading-relaxed">
              Dans un monde où les enjeux écologiques sont de plus en plus essentiels, nous vous aidons 
              à sécuriser vos approvisionnements, à réduire vos coûts et à anticiper les évolutions du marché.
            </p>
          </div>
        </div>

        {/* Vision Statement */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 mb-16 border border-green-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-serif font-semibold text-primary-900 mb-6">
                Notre Mission
              </h3>
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
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <ServiceCategory 
            title="Audit et étude des contrats énergétiques"
            items={auditServices}
            icon={BarChart}
            bgColor="bg-blue-100"
          />
          
          <ServiceCategory 
            title="Optimisation des coûts et de la fiscalité"
            items={optimizationServices}
            icon={Settings}
            bgColor="bg-green-100"
          />
          
          <ServiceCategory 
            title="Stratégies énergétiques et durabilité"
            items={sustainabilityServices}
            icon={Leaf}
            bgColor="bg-emerald-100"
          />
          
          <ServiceCategory 
            title="Accompagnement personnalisé"
            items={supportServices}
            icon={Zap}
            bgColor="bg-yellow-100"
          />
        </div>

        {/* Transition Image */}
        <div className="bg-gray-50 rounded-lg p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <img 
              src="https://images.pexels.com/photos/9800000/pexels-photo-9800000.jpeg"
              alt="Transition énergétique RSE"
              className="w-full h-64 object-cover rounded-lg"
            />
            <div>
              <h3 className="text-2xl font-serif font-semibold text-primary-900 mb-4">
                Performance & Responsabilité
              </h3>
              <p className="text-anthracite-600 font-sans leading-relaxed">
                Chaque stratégie est pensée pour être à la fois performante, économiquement viable 
                et écologiquement responsable. Une approche intégrée qui place la durabilité au cœur 
                de la performance économique.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloppementDurableSection;