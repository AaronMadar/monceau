import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbProps {
  currentSection: string;
  sectionTitle: string;
}

const BreadcrumbNavigation: React.FC<BreadcrumbProps> = ({ currentSection, sectionTitle }) => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-gray-50 border-b border-gray-200 py-3" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 text-sm">
          <button
            onClick={() => scrollToSection('#accueil')}
            className="flex items-center text-anthracite-500 hover:text-primary-900 transition-colors duration-200"
            aria-label="Retour à l'accueil"
          >
            <Home className="w-4 h-4 mr-1" />
            Accueil
          </button>
          <ChevronRight className="w-4 h-4 text-anthracite-400" />
          <span className="text-primary-900 font-medium" aria-current="page">
            {sectionTitle}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default BreadcrumbNavigation;