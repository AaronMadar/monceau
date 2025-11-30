import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentYear = new Date().getFullYear();

  const handleNavigation = (sectionId: string, route: string) => {
    // Si on est sur la page d'accueil, essayer d'abord de scroller vers la section
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    // Sinon, naviguer vers la page dédiée
    navigate(route);
    // Scroller en haut de la page après navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-sm flex items-center justify-center">
                <span className="text-primary-900 font-serif font-semibold text-lg">MDC</span>
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold">Monceau David & Co</h3>
                <p className="text-sm text-gray-300">Cabinet de conseil</p>
              </div>
            </div>
            
            <p className="text-gray-300 font-sans leading-relaxed mb-6 max-w-md">
              Cabinet de conseil indépendant spécialisé en assurance, gestion d'actifs et développement durable. 
              Une expertise traditionnelle au service de votre réussite.
            </p>
            
            <div className="bg-white bg-opacity-10 rounded-lg p-4 mb-6">
              <blockquote className="text-sm font-serif italic text-center text-gray-200">
                "Je te montrerai la voie que tu dois suivre."
              </blockquote>
              <cite className="block text-xs text-center mt-2 text-gray-400">
                Psaume 32:8
              </cite>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Nos Services</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handleNavigation('assurance', '/assurance')}
                  className="text-gray-300 hover:text-white font-sans text-sm transition-colors duration-200 text-left w-full"
                >
                  Assurance & Prévoyance
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('gestion-actifs', '/gestion-actifs')}
                  className="text-gray-300 hover:text-white font-sans text-sm transition-colors duration-200 text-left w-full"
                >
                  Gestion d'Actifs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('developpement-durable', '/developpement-durable')}
                  className="text-gray-300 hover:text-white font-sans text-sm transition-colors duration-200 text-left w-full"
                >
                  Développement Durable
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('a-propos', '/a-propos')}
                  className="text-gray-300 hover:text-white font-sans text-sm transition-colors duration-200 text-left w-full"
                >
                  À Propos
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-sans text-sm">75008 Paris</p>
                  <p className="text-gray-400 font-sans text-xs">47 Bd de Courcelles</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <p className="text-gray-300 font-sans text-sm">+33 (0)1 XX XX XX XX</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <p className="text-gray-300 font-sans text-sm">contact@monceaudavid.fr</p>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 font-sans text-sm">
              © {currentYear} Monceau David & Co. Tous droits réservés.
            </p>
            
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button className="text-gray-400 hover:text-white font-sans text-sm transition-colors duration-200">
                Mentions légales
              </button>
              <button className="text-gray-400 hover:text-white font-sans text-sm transition-colors duration-200">
                Politique de confidentialité
              </button>
              <button className="text-gray-400 hover:text-white font-sans text-sm transition-colors duration-200">
                Conditions générales
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;