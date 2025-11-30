import React, { useState, useEffect } from 'react';
import { Cookie, Check, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface CookiePreferencesProps {
  onClose?: () => void;
}

const CookiePreferences: React.FC<CookiePreferencesProps> = ({ onClose }) => {
  const navigate = useNavigate();
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    const savedPreferences = localStorage.getItem('cookiePreferences');
    if (savedPreferences) {
      try {
        const parsed = JSON.parse(savedPreferences);
        setPreferences(parsed);
      } catch (e) {
        // Garder les valeurs par défaut
      }
    }
  }, []);

  const handleToggle = (key: 'essential' | 'analytics' | 'marketing') => {
    if (key === 'essential') return; // Les cookies essentiels ne peuvent pas être désactivés
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSave = () => {
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    localStorage.setItem('cookieConsent', preferences.analytics || preferences.marketing ? 'custom' : 'essential');
    
    if (onClose) {
      onClose();
    } else {
      navigate(-1);
    }
  };

  const handleAcceptAll = () => {
    const allPreferences = {
      essential: true,
      analytics: true,
      marketing: true
    };
    localStorage.setItem('cookiePreferences', JSON.stringify(allPreferences));
    localStorage.setItem('cookieConsent', 'all');
    
    if (onClose) {
      onClose();
    } else {
      navigate(-1);
    }
  };

  const handleRejectAll = () => {
    const essentialOnly = {
      essential: true,
      analytics: false,
      marketing: false
    };
    localStorage.setItem('cookiePreferences', JSON.stringify(essentialOnly));
    localStorage.setItem('cookieConsent', 'essential');
    setPreferences(essentialOnly);
    
    if (onClose) {
      onClose();
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8 lg:p-12 border border-gray-100">
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
              <Cookie className="w-6 h-6 text-primary-900" />
            </div>
            <div>
              <h1 className="text-3xl font-serif font-semibold text-primary-900">
                Préférences de Cookies
              </h1>
              <p className="text-anthracite-600 font-sans text-sm mt-1">
                Gérez vos préférences de cookies
              </p>
            </div>
          </div>

          {/* Introduction */}
          <div className="mb-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
            <p className="text-anthracite-600 font-sans text-sm leading-relaxed">
              Nous utilisons des cookies pour améliorer votre expérience sur notre site. Vous pouvez 
              choisir quels types de cookies vous acceptez. Les cookies essentiels sont nécessaires au 
              fonctionnement du site et ne peuvent pas être désactivés.
            </p>
          </div>

          {/* Cookie Categories */}
          <div className="space-y-6 mb-8">
            {/* Cookies Essentiels */}
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-serif font-semibold text-primary-900 mb-1">
                    Cookies Essentiels
                  </h3>
                  <p className="text-sm text-anthracite-600 font-sans">
                    Toujours actifs
                  </p>
                </div>
                <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg">
                  <Check className="w-6 h-6 text-primary-900" />
                </div>
              </div>
              <p className="text-anthracite-600 font-sans text-sm leading-relaxed">
                Ces cookies sont nécessaires au fonctionnement du site et ne peuvent pas être désactivés. 
                Ils incluent les cookies de session, de sécurité et de préférences de base.
              </p>
            </div>

            {/* Cookies Analytics */}
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-serif font-semibold text-primary-900 mb-1">
                    Cookies d'Analyse
                  </h3>
                  <p className="text-sm text-anthracite-600 font-sans">
                    Nous aident à comprendre comment vous utilisez notre site
                  </p>
                </div>
                <button
                  onClick={() => handleToggle('analytics')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    preferences.analytics ? 'bg-primary-900' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      preferences.analytics ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
              <p className="text-anthracite-600 font-sans text-sm leading-relaxed">
                Ces cookies nous permettent de collecter des informations sur la façon dont les visiteurs 
                utilisent notre site web, comme le nombre de visiteurs, les pages les plus visitées, etc. 
                Ces données sont utilisées de manière anonyme pour améliorer notre site.
              </p>
            </div>

            {/* Cookies Marketing */}
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-serif font-semibold text-primary-900 mb-1">
                    Cookies Marketing
                  </h3>
                  <p className="text-sm text-anthracite-600 font-sans">
                    Utilisés pour vous proposer des publicités personnalisées
                  </p>
                </div>
                <button
                  onClick={() => handleToggle('marketing')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    preferences.marketing ? 'bg-primary-900' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      preferences.marketing ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
              <p className="text-anthracite-600 font-sans text-sm leading-relaxed">
                Ces cookies sont utilisés pour vous proposer des publicités et du contenu personnalisés 
                en fonction de vos intérêts. Ils peuvent également être utilisés pour limiter le nombre 
                de fois que vous voyez une publicité.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
            <button
              onClick={handleRejectAll}
              className="flex-1 px-6 py-3 border border-gray-300 text-anthracite-700 font-sans font-medium hover:bg-gray-50 transition-colors rounded-sm"
            >
              Refuser tout
            </button>
            <button
              onClick={handleSave}
              className="flex-1 px-6 py-3 bg-primary-900 text-white font-sans font-medium hover:bg-primary-800 transition-colors rounded-sm"
            >
              Enregistrer les préférences
            </button>
            <button
              onClick={handleAcceptAll}
              className="flex-1 px-6 py-3 bg-white border-2 border-primary-900 text-primary-900 font-sans font-medium hover:bg-primary-50 transition-colors rounded-sm"
            >
              Tout accepter
            </button>
          </div>

          {/* Link to Privacy Policy */}
          <div className="mt-6 text-center">
            <p className="text-sm text-anthracite-600 font-sans">
              Pour plus d'informations, consultez notre{' '}
              <a 
                href="/politique-confidentialite" 
                className="text-primary-900 hover:underline"
              >
                Politique de Confidentialité
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePreferences;

