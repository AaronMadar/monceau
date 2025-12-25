import React from 'react';
import SEOHead from '../components/SEOHead';
import Contact from '../components/Contact';
import WhatsAppButton from '../components/WatshappButton';

const ContactPage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Contact - Monceau David & Co"
        description="Contactez notre cabinet de conseil. Prenons rendez-vous pour étudier ensemble vos projets et définir les solutions adaptées à vos besoins."
      />
      
      <Contact />
      <WhatsAppButton />
    </>
  );
};

export default ContactPage;