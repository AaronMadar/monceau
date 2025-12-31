import React, { useEffect } from 'react';
import SEOHead from '../components/SEOHead';
import WhatsAppButton from '../components/WatshappButton';

const MentionsLegalesPage: React.FC = () => {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <SEOHead 
        title="Mentions Légales - Monceau David & Co"
        description="Mentions légales du cabinet Monceau David & Co. Informations sur l'entreprise, l'hébergement et les droits d'auteur."
      />
      
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-serif font-semibold text-primary-900 mb-8">
              Mentions Légales
            </h1>
            <p className="text-xl text-anthracite-600 font-sans max-w-3xl mx-auto leading-relaxed">
              Informations légales et réglementaires concernant Monceau David & Co
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm p-8 lg:p-12 border border-gray-100 space-y-8">
            
            {/* Menu d'ancres */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8 border border-gray-200">
              <h3 className="text-lg font-serif font-semibold text-primary-900 mb-4">Sommaire</h3>
              <nav className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <a href="#editeur" className="text-anthracite-600 hover:text-primary-900 font-sans text-sm transition-colors">1. Éditeur du site</a>
                <a href="#directeur" className="text-anthracite-600 hover:text-primary-900 font-sans text-sm transition-colors">2. Directeur de publication</a>
                <a href="#hebergement" className="text-anthracite-600 hover:text-primary-900 font-sans text-sm transition-colors">3. Hébergement</a>
                <a href="#propriete" className="text-anthracite-600 hover:text-primary-900 font-sans text-sm transition-colors">4. Propriété intellectuelle</a>
                <a href="#protection" className="text-anthracite-600 hover:text-primary-900 font-sans text-sm transition-colors">5. Protection des données</a>
                <a href="#responsabilite" className="text-anthracite-600 hover:text-primary-900 font-sans text-sm transition-colors">6. Limitation de responsabilité</a>
                <a href="#liens" className="text-anthracite-600 hover:text-primary-900 font-sans text-sm transition-colors">7. Liens hypertextes</a>
                <a href="#droit" className="text-anthracite-600 hover:text-primary-900 font-sans text-sm transition-colors">8. Droit applicable</a>
                <a href="#contact" className="text-anthracite-600 hover:text-primary-900 font-sans text-sm transition-colors">9. Contact</a>
              </nav>
            </div>
            
            {/* Éditeur */}
            <div id="editeur">
              <h2 className="text-2xl font-serif font-semibold text-primary-900 mb-4">
                1. Éditeur du site
              </h2>
              <div className="text-anthracite-600 font-sans leading-relaxed space-y-2">
                <p><strong>Raison sociale :</strong> Monceau David & Co</p>
                <p><strong>Forme juridique :</strong> SASU, société par actions simplifiée unipersonnelle</p>
                <p><strong>Adresse :</strong> 47 Bd de Courcelles, 75008 Paris, France</p>
                <p><strong>Email :</strong> contact@monceaudavidconseil.com</p>
                <p><strong>ORIAS :</strong> 25004557</p>
              </div>
            </div>

            {/* Directeur de publication */}
            <div id="directeur">
              <h2 className="text-2xl font-serif font-semibold text-primary-900 mb-4">
                2. Directeur de publication
              </h2>
              <p className="text-anthracite-600 font-sans leading-relaxed">
                Le directeur de la publication est le représentant légal de Monceau David & Co.
              </p>
            </div>

            {/* Hébergement */}
            <div id="hebergement">
              <h2 className="text-2xl font-serif font-semibold text-primary-900 mb-4">
                3. Hébergement
              </h2>
              <p className="text-anthracite-600 font-sans leading-relaxed">
                Le site est hébergé par un prestataire technique professionnel. Les informations 
                relatives à l'hébergement sont disponibles sur demande auprès de Monceau David & Co.
              </p>
            </div>

            {/* Propriété intellectuelle */}
            <div id="propriete">
              <h2 className="text-2xl font-serif font-semibold text-primary-900 mb-4">
                4. Propriété intellectuelle
              </h2>
              <div className="text-anthracite-600 font-sans leading-relaxed space-y-3">
                <p>
                  L'ensemble des contenus présents sur ce site (textes, images, logos, graphismes, 
                  icônes, vidéos) sont la propriété exclusive de Monceau David & Co, sauf mention 
                  contraire. Toute reproduction, représentation, modification, publication, adaptation 
                  de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, 
                  est interdite sans autorisation écrite préalable de Monceau David & Co.
                </p>
                <p>
                  Toute exploitation non autorisée du site ou de son contenu engage la responsabilité 
                  civile et/ou pénale de l'utilisateur et pourra donner lieu à des poursuites judiciaires.
                </p>
              </div>
            </div>

            {/* Protection des données */}
            <div id="protection">
              <h2 className="text-2xl font-serif font-semibold text-primary-900 mb-4">
                5. Protection des données personnelles
              </h2>
              <div className="text-anthracite-600 font-sans leading-relaxed space-y-3">
                <p>
                  Monceau David & Co s'engage à protéger la confidentialité et la sécurité des données 
                  personnelles de ses clients et visiteurs. Le traitement des données personnelles est 
                  effectué conformément au Règlement Général sur la Protection des Données (RGPD) et à la 
                  loi Informatique et Libertés.
                </p>
                <p>
                  Les données collectées sont utilisées exclusivement dans le cadre de la relation 
                  commerciale et du conseil professionnel. Monceau David & Co met en œuvre tous les 
                  moyens techniques et organisationnels nécessaires pour garantir la sécurité et la 
                  confidentialité des données.
                </p>
                <p>
                  Pour plus d'informations sur le traitement de vos données personnelles, veuillez 
                  consulter notre <a href="/politique-confidentialite" className="text-primary-900 hover:underline">Politique de Confidentialité</a>.
                </p>
              </div>
            </div>

            {/* Responsabilité */}
            <div id="responsabilite">
              <h2 className="text-2xl font-serif font-semibold text-primary-900 mb-4">
                6. Limitation de responsabilité
              </h2>
              <div className="text-anthracite-600 font-sans leading-relaxed space-y-3">
                <p>
                  Monceau David & Co s'efforce d'assurer l'exactitude et la mise à jour des informations 
                  diffusées sur ce site. Cependant, Monceau David & Co ne peut garantir l'exactitude, 
                  la précision ou l'exhaustivité des informations mises à disposition sur ce site.
                </p>
                <p>
                  Les informations contenues sur ce site sont fournies à titre indicatif et ne sauraient 
                  engager la responsabilité de Monceau David & Co en cas d'erreur, d'omission ou d'évolution 
                  réglementaire ou législative. Il appartient à l'utilisateur de vérifier l'exactitude des 
                  informations et de solliciter un conseil personnalisé pour toute décision importante.
                </p>
                <p>
                  Monceau David & Co ne pourra être tenu responsable des dommages directs ou indirects 
                  résultant de l'utilisation du site ou de l'impossibilité de l'utiliser, notamment 
                  en cas d'interruption, de bug, d'erreur, d'omission ou de défaut de transmission.
                </p>
                <p>
                  Les conseils et informations fournis par Monceau David & Co sont adaptés à chaque 
                  situation spécifique et ne peuvent être transposés à d'autres contextes sans analyse 
                  préalable. Toute décision prise sur la base des informations générales du site relève 
                  de la seule responsabilité de l'utilisateur.
                </p>
              </div>
            </div>

            {/* Liens externes */}
            <div id="liens">
              <h2 className="text-2xl font-serif font-semibold text-primary-900 mb-4">
                7. Liens hypertextes
              </h2>
              <div className="text-anthracite-600 font-sans leading-relaxed space-y-3">
                <p>
                  Le site peut contenir des liens hypertextes vers d'autres sites. Monceau David & Co 
                  n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur 
                  contenu et à leur accessibilité.
                </p>
                <p>
                  La création de liens hypertextes vers le site de Monceau David & Co est soumise à 
                  autorisation préalable écrite. Monceau David & Co se réserve le droit de demander 
                  la suppression de tout lien qu'il estime non conforme à ses intérêts.
                </p>
              </div>
            </div>

            {/* Droit applicable */}
            <div id="droit">
              <h2 className="text-2xl font-serif font-semibold text-primary-900 mb-4">
                8. Droit applicable et juridiction compétente
              </h2>
              <div className="text-anthracite-600 font-sans leading-relaxed space-y-3">
                <p>
                  Les présentes mentions légales sont régies par le droit français. En cas de litige 
                  et à défaut d'accord amiable, le litige sera porté devant les tribunaux français 
                  conformément aux règles de compétence en vigueur.
                </p>
                <p>
                  Monceau David & Co se réserve le droit de modifier les présentes mentions légales 
                  à tout moment. Il appartient à l'utilisateur de consulter régulièrement cette page 
                  pour prendre connaissance des éventuelles modifications.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div id="contact" className="pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-serif font-semibold text-primary-900 mb-4">
                9. Contact
              </h2>
              <p className="text-anthracite-600 font-sans leading-relaxed">
                Pour toute question concernant les présentes mentions légales, vous pouvez nous
                contacter à l'adresse suivante : <a href="mailto:contact@monceaudavidconseil.com" className="text-primary-900 hover:underline">contact@monceaudavidconseil.com</a>
              </p>
            </div>

            {/* Date de mise à jour */}
            <div className="pt-4 text-sm text-anthracite-500 font-sans">
              <p>Dernière mise à jour : {currentYear}</p>
            </div>
          </div>
        </div>
        <WhatsAppButton />      
      </section>
    </>
  );
};

export default MentionsLegalesPage;

