import React from 'react';
import { Helmet } from 'react-helmet-async';

const StructuredData: React.FC = () => {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "Monceau David & Co",
    "alternateName": "MDC",
    "description": "Cabinet de conseil indépendant spécialisé en assurance, gestion d'actifs et développement durable",
    "url": "https://site-web-professionn-vqib.bolt.host",
    "logo": "https://site-web-professionn-vqib.bolt.host/logo.png",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "47 Bd de Courcelles",
      "addressLocality": "Paris",
      "postalCode": "75008",
      "addressCountry": "FR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+33-1-XX-XX-XX-XX",
      "email": "contact@monceaudavid.fr",
      "contactType": "customer service",
      "availableLanguage": ["French"],
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    },
    "sameAs": [],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services de conseil",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Conseil en Assurance et Prévoyance",
            "description": "Solutions d'assurance professionnelle et privée"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Gestion d'Actifs",
            "description": "Structuration et valorisation du patrimoine"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Développement Durable",
            "description": "Stratégie énergétique et transition durable"
          }
        }
      ]
    }
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": "https://site-web-professionn-vqib.bolt.host#accueil"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://site-web-professionn-vqib.bolt.host#services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Contact",
        "item": "https://site-web-professionn-vqib.bolt.host#contact"
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbData)}
      </script>
    </Helmet>
  );
};

export default StructuredData;