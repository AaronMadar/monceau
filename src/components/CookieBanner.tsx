import React, { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà fait un choix
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'all');
    localStorage.setItem('cookiePreferences', JSON.stringify({
      essential: true,
      analytics: true,
      marketing: true
    }));
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'essential');
    localStorage.setItem('cookiePreferences', JSON.stringify({
      essential: true,
      analytics: false,
      marketing: false
    }));
    setShowBanner(false);
  };

  const handleLearnMore = () => {
    navigate('/preferences-cookies');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-primary-950 text-white shadow-lg z-50 border-t border-primary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <Cookie className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-sm font-sans text-gray-200 leading-relaxed">
                Nous utilisons des cookies pour améliorer votre expérience de navigation, analyser le trafic 
                du site et personnaliser le contenu. En continuant à utiliser ce site, vous acceptez notre 
                utilisation des cookies.{' '}
                <button
                  onClick={handleLearnMore}
                  className="text-white underline hover:text-gray-300 transition-colors"
                >
                  En savoir plus
                </button>
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={handleReject}
              className="px-4 py-2 text-sm font-sans border border-white border-opacity-30 text-white hover:bg-white hover:bg-opacity-10 transition-colors rounded-sm"
            >
              Refuser
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 text-sm font-sans bg-white text-primary-900 hover:bg-gray-100 transition-colors rounded-sm font-medium"
            >
              Accepter
            </button>
            <button
              onClick={() => setShowBanner(false)}
              className="p-2 text-white hover:bg-white hover:bg-opacity-10 transition-colors rounded-sm"
              aria-label="Fermer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;

