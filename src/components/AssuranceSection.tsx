import React from 'react';
import { Shield, Users, Building, Home } from 'lucide-react';

const AssuranceSection: React.FC = () => {
  const professionalServices = [
    'RC Pro', 'Multirisque professionnelle', 'Cyber-risques', 
    'Décennale (BTP)', 'Pertes d\'exploitation', 'Flotte automobile'
  ];

  const teamProtection = [
    'Mutuelle d\'entreprise', 'Prévoyance collective', 
    'Retraite collective', 'Homme-clé / Associés'
  ];

  const strategy = [
    'Assurance crédit', 'Caution / Garantie financière',
    'Assurance transport', 'Protection juridique',
    'Environnement / événementiel'
  ];

  const familyProtection = [
    'Responsabilité civile', 'Santé', 'Accident de la vie',
    'Décès / Obsèques', 'Assurance scolaire'
  ];

  const assetProtection = [
    'Habitation', 'Auto / Moto / Vélo', 'Objets de valeur'
  ];

  const futurePreparation = [
    'Assurance vie', 'Retraite (PER)', 'Assurance emprunteur',
    'Protection juridique'
  ];

  const ServiceCategory = ({ title, items, icon: Icon, bgColor }: {
    title: string;
    items: string[];
    icon: React.ComponentType<{ className?: string }>;
    bgColor: string;
  }) => (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
      <div className={`flex items-center justify-center w-12 h-12 ${bgColor} rounded-lg mb-4`}>
        <Icon className="w-6 h-6 text-primary-900" />
      </div>
      <h4 className="text-lg font-serif font-semibold text-primary-900 mb-4">{title}</h4>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-anthracite-600 font-sans text-sm flex items-center">
            <span className="w-1.5 h-1.5 bg-primary-900 rounded-full mr-3"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section id="assurance" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-primary-900 mb-6">
            Conseil en Assurance et Prévoyance
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-anthracite-600 font-sans leading-relaxed mb-6">
              Notre approche indépendante et experte du conseil en assurance permet à nos clients 
              d'identifier leurs enjeux clés en matière de protection, de gestion des risques et de performance.
            </p>
            <p className="text-lg text-anthracite-600 font-sans leading-relaxed">
              Nous les accompagnons dans la définition de leur stratégie assurantielle et dans la mise en place 
              de solutions sur mesure, adaptées à leurs objectifs.
            </p>
          </div>
        </div>

        {/* Professional Insurance */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-serif font-semibold text-primary-900 mb-4">
              Solutions Professionnelles
            </h3>
            <p className="text-lg text-anthracite-600 font-sans">
              Sécuriser votre activité et protéger vos équipes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <ServiceCategory 
              title="Sécuriser votre activité"
              items={professionalServices}
              icon={Building}
              bgColor="bg-blue-100"
            />
            <ServiceCategory 
              title="Protéger vos équipes"
              items={teamProtection}
              icon={Users}
              bgColor="bg-green-100"
            />
            <ServiceCategory 
              title="Renforcer votre stratégie"
              items={strategy}
              icon={Shield}
              bgColor="bg-purple-100"
            />
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <img 
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
              alt="Consultation professionnelle en assurance"
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
          </div>
        </div>

        {/* Personal Insurance */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-serif font-semibold text-primary-900 mb-4">
              Solutions Privées
            </h3>
            <p className="text-lg text-anthracite-600 font-sans">
              Protection familiale et patrimoniale complète
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCategory 
              title="Protéger votre famille"
              items={familyProtection}
              icon={Home}
              bgColor="bg-red-100"
            />
            <ServiceCategory 
              title="Protéger vos biens"
              items={assetProtection}
              icon={Shield}
              bgColor="bg-yellow-100"
            />
            <ServiceCategory 
              title="Préparer l'avenir"
              items={futurePreparation}
              icon={Users}
              bgColor="bg-indigo-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssuranceSection;