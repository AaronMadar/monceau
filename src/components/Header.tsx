import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const navItems = [
    { href: '/', label: 'Accueil' },
    { 
      href: '/assurance', 
      label: 'Assurance',
      subItems: [
        { href: '/assurance/professionnelle', label: 'Assurance Professionnelle' },
        { href: '/assurance/privee', label: 'Assurance Privée' }
      ]
    },
    { 
      href: '/gestion-actifs', 
      label: 'Gestion d\'Actifs',
      subItems: [
        { href: '/gestion-actifs/produits-assurantiels', label: 'Produits Assurantiels' },
        { href: '/gestion-actifs/placements-financiers', label: 'Placements Financiers' },
        { href: '/gestion-actifs/solutions-societes', label: 'Solutions Sociétés' },
        { href: '/gestion-actifs/produits-alternatifs', label: 'Produits Alternatifs' }
      ]
    },
    { 
      href: '/developpement-durable', 
      label: 'Développement Durable',
      subItems: [
        { href: '/developpement-durable/audit-energetique', label: 'Audit Énergétique' },
        { href: '/developpement-durable/optimisation-couts', label: 'Optimisation des Coûts' },
        { href: '/developpement-durable/strategie-energetique', label: 'Stratégie Énergétique' },
        { href: '/developpement-durable/accompagnement', label: 'Accompagnement' }
      ]
    },
    { href: '/a-propos', label: 'À Propos' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary-900 rounded flex items-center justify-center">
                <span className="text-white font-serif font-semibold text-xs">MDC</span>
              </div>
              <div>
                <h1 className="text-base font-serif font-semibold text-primary-900">
                  Monceau David & Co
                </h1>
                <p className="text-xs text-anthracite-600 font-sans">Cabinet de conseil</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.href} className="relative">
                  {item.subItems ? (
                    // Menu avec sous-items
                    <div className="relative">
                      <button
                        onClick={() => handleDropdownToggle(item.label)}
                        onMouseEnter={() => setActiveDropdown(item.label)}
                        className={`px-3 py-2 text-sm font-medium font-sans transition-colors duration-200 flex items-center rounded-md ${
                          isActive(item.href)
                            ? 'text-primary-900 bg-primary-50' 
                            : 'text-anthracite-600 hover:text-primary-900 hover:bg-gray-50'
                        }`}
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {/* Dropdown Menu */}
                      {activeDropdown === item.label && (
                        <div 
                          className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                          onMouseLeave={closeDropdown}
                        >
                          <Link
                            to={item.href}
                            onClick={closeDropdown}
                            className="block px-4 py-2 text-sm text-primary-900 hover:bg-primary-50 font-sans font-medium border-b border-gray-100"
                          >
                            Voir tout - {item.label}
                          </Link>
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.href}
                              to={subItem.href}
                              onClick={closeDropdown}
                              className="block px-4 py-2 text-sm text-anthracite-600 hover:text-primary-900 hover:bg-gray-50 font-sans"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    // Lien simple
                    <Link
                      to={item.href}
                      className={`px-3 py-2 text-sm font-medium font-sans transition-colors duration-200 rounded-md ${
                        isActive(item.href)
                          ? 'text-primary-900 bg-primary-50' 
                          : 'text-anthracite-600 hover:text-primary-900 hover:bg-gray-50'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-anthracite-600 hover:text-primary-900 hover:bg-gray-100 transition-colors duration-200"
              aria-label="Menu principal"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              {navItems.map((item) => (
                <div key={item.href}>
                  <Link
                    to={item.href}
                    className={`block px-3 py-2 text-base font-medium font-sans rounded-md transition-colors duration-200 ${
                      isActive(item.href)
                        ? 'text-primary-900 bg-primary-50'
                        : 'text-anthracite-600 hover:text-primary-900 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.subItems && (
                    <div className="ml-4 space-y-1">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.href}
                          to={subItem.href}
                          className="block px-3 py-1 text-sm font-sans text-anthracite-500 hover:text-primary-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;