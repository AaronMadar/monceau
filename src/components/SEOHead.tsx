import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Monceau David & Co - Cabinet de Conseil en Assurance, Gestion d'Actifs et Développement Durable",
  description = "Cabinet de conseil indépendant spécialisé en assurance, gestion d'actifs et développement durable. Expertise traditionnelle et solutions sur mesure pour entreprises et particuliers.",
  keywords = "conseil assurance, gestion actifs, développement durable, cabinet conseil Paris, assurance entreprise, patrimoine, prévoyance, RSE",
  canonicalUrl = "https://site-web-professionn-vqib.bolt.host",
  ogImage = "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg"
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Monceau David & Co" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Monceau David & Co" />
      <meta property="og:locale" content="fr_FR" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#1e3a8a" />
      <meta name="msapplication-TileColor" content="#1e3a8a" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Monceau David & Co",
          "description": description,
          "url": canonicalUrl,
          "logo": `${canonicalUrl}/logo.png`,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Paris",
            "postalCode": "75008",
            "addressCountry": "FR"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+33-1-XX-XX-XX-XX",
            "contactType": "customer service",
            "availableLanguage": "French"
          },
          "sameAs": [],
          "serviceType": ["Conseil en assurance", "Gestion d'actifs", "Développement durable"]
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;