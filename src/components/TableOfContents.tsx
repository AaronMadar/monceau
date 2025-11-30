import React, { useState, useEffect } from 'react';
import { List, X } from 'lucide-react';

const TableOfContents: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');

  const sections = [
    { id: 'accueil', title: 'Accueil' },
    { id: 'services', title: 'Nos Services' },
    { id: 'assurance', title: 'Assurance & Prévoyance' },
    { id: 'gestion-actifs', title: 'Gestion d\'Actifs' },
    { id: 'developpement-durable', title: 'Développement Durable' },
    { id: 'a-propos', title: 'À Propos' },
    { id: 'contact', title: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-6 top-1/2 transform -translate-y-1/2 bg-primary-900 text-white p-3 rounded-full shadow-lg hover:bg-primary-800 transition-colors duration-200 z-40"
        aria-label="Table des matières"
      >
        {isOpen ? <X className="w-5 h-5" /> : <List className="w-5 h-5" />}
      </button>

      {/* Table of Contents Panel */}
      {isOpen && (
        <div className="fixed right-6 top-1/2 transform -translate-y-1/2 translate-x-0 bg-white rounded-lg shadow-xl border border-gray-200 p-4 z-30 w-64">
          <h3 className="text-lg font-serif font-semibold text-primary-900 mb-4">
            Navigation
          </h3>
          <nav>
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded text-sm font-sans transition-colors duration-200 ${
                      activeSection === section.id
                        ? 'bg-primary-100 text-primary-900 font-medium'
                        : 'text-anthracite-600 hover:bg-gray-50 hover:text-primary-900'
                    }`}
                  >
                    {section.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-20 z-20"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default TableOfContents;