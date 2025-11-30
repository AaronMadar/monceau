import React, { useEffect } from 'react';
import SEOHead from '../components/SEOHead';

const PolitiqueConfidentialitePage: React.FC = () => {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <SEOHead 
        title="Politique de Confidentialité - Monceau David & Co"
        description="Politique de confidentialité et protection des données personnelles de Monceau David & Co. Conformité RGPD et engagement envers la protection de vos données."
      />
      
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-serif font-semibold text-primary-900 mb-8">
              Politique de Confidentialité
            </h1>
            <p className="text-xl text-anthracite-600 font-sans max-w-3xl mx-auto leading-relaxed">
              Notre engagement envers la protection et la confidentialité de vos données personnelles
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
                <a href="#introduction" className="text-anthracite-600 hover:text-primary-900 font-sans text-sm transition-colors">1. Introduction</a>
                <a href="#responsable" className="text-anthracite-600 hover:text-primary-900 font-sans text-sm transition-colors">2. Responsable du traitement</a>
                <a href="#donnees" className="text-anthracite-600 hover:text-primary-900 font-sans text-sm transition-colors">3. Données collectées</a>
                <a href="#finalites" className="text-anthracite-600 hover:text-primary-900 font-sans text-sm transition-colors">4. Finalités du traitement</a>
                <a href="#base-legale" className="text-anthracite-600 hover:text-primary-900 font-sans text-sm transition-colors">5. Base légale</a>
                <a href="#conservation" className="text-anthracite-600 hover:text-primary-900 font-sans text-sm transition-colors">6. Durée de conservation</a>
                <a href="#destinataires" className="text-anthracite-600 hover:text-primary-900 font-sans text-sm transition-colors">7. Destinataires</a>
                <a href="#transferts" className="text-anthracite-600 hover:text-primary-900 font-sans text-sm transition-colors">8. Transferts internationaux</a>
                <a href="#securite" className="text-anthracite-600 hover:text-primary-900 font-sans text-sm transition-colors">9. Sécurité</a>
                <a href="#droits" className="text-anthracite-600 hover:text-primary-900 font-sans text-sm transition-colors">10. Vos droits</a>
                <a href="#cookies" className="text-anthracite-600 hover:text-primary-900 font-sans text-sm transition-colors">11. Cookies</a>
                <a href="#modifications" className="text-anthracite-600 hover:text-primary-900 font-sans text-sm transition-colors">12. Modifications</a>
                <a href="#contact" className="text-anthracite-600 hover:text-primary-900 font-sans text-sm transition-colors">13. Contact</a>
              </nav>
            </div>
            
            {/* Introduction */}
            <div id="introduction">
              <h2 className="text-2xl font-serif font-semibold text-primary-900 mb-4">
                1. Introduction
              </h2>
              <div className="text-anthracite-600 font-sans leading-relaxed space-y-3">
                <p>
                  Monceau David & Co attache une importance particulière à la protection de vos données 
                  personnelles. Cette politique de confidentialité vous informe sur la manière dont 
                  nous collectons, utilisons, stockons et protégeons vos données personnelles conformément 
                  au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
                </p>
                <p>
                  En utilisant nos services ou en visitant notre site web, vous acceptez les pratiques 
                  décrites dans cette politique. Nous nous réservons le droit de modifier cette politique 
                  à tout moment. Les modifications prendront effet dès leur publication sur cette page.
                </p>
              </div>
            </div>

            {/* Responsable du traitement */}
            <div id="responsable">
              <h2 className="text-2xl font-serif font-semibold text-primary-900 mb-4">
                2. Responsable du traitement
              </h2>
              <div className="text-anthracite-600 font-sans leading-relaxed space-y-2">
                <p><strong>Responsable :</strong> Monceau David & Co</p>
                <p><strong>Adresse :</strong> 47 Bd de Courcelles, 75008 Paris, France</p>
                <p><strong>Email :</strong> contact@monceaudavid.fr</p>
                <p>
                  Monceau David & Co est responsable du traitement de vos données personnelles et s'engage 
                  à respecter la réglementation en vigueur en matière de protection des données.
                </p>
              </div>
            </div>

            {/* Données collectées */}
            <div id="donnees">
              <h2 className="text-2xl font-serif font-semibold text-primary-900 mb-4">
                3. Données personnelles collectées
              </h2>
              <div className="text-anthracite-600 font-sans leading-relaxed space-y-3">
                <p>
                  Nous collectons les données personnelles nécessaires à l'exercice de nos activités de 
                  conseil et à la gestion de notre relation client. Les données collectées peuvent inclure :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Données d'identification : nom, prénom, civilité, fonction</li>
                  <li>Données de contact : adresse postale, email, numéro de téléphone</li>
                  <li>Données professionnelles : entreprise, secteur d'activité, fonction</li>
                  <li>Données de navigation : adresse IP, cookies, données de connexion</li>
                  <li>Données relatives à nos échanges : historique de communication, préférences</li>
                </ul>
                <p>
                  Certaines données peuvent être collectées automatiquement lors de votre navigation 
                  sur notre site web, notamment via l'utilisation de cookies et technologies similaires.
                </p>
              </div>
            </div>

            {/* Finalités du traitement */}
            <div id="finalites">
              <h2 className="text-2xl font-serif font-semibold text-primary-900 mb-4">
                4. Finalités du traitement
              </h2>
              <div className="text-anthracite-600 font-sans leading-relaxed space-y-3">
                <p>
                  Vos données personnelles sont traitées pour les finalités suivantes, dans le respect 
                  de la réglementation applicable :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Gestion de la relation client et fourniture de nos services de conseil</li>
                  <li>Réponse à vos demandes d'information et de contact</li>
                  <li>Amélioration de nos services et personnalisation de notre offre</li>
                  <li>Respect de nos obligations légales et réglementaires</li>
                  <li>Gestion administrative et comptable de la relation contractuelle</li>
                  <li>Prévention de la fraude et gestion des risques</li>
                  <li>Communication marketing (sous réserve de votre consentement)</li>
                </ul>
                <p>
                  Le traitement de vos données est nécessaire à l'exécution de nos obligations contractuelles 
                  et au respect de nos obligations légales. En cas de traitement basé sur votre consentement, 
                  vous pouvez le retirer à tout moment sans affecter la licéité du traitement effectué avant 
                  le retrait.
                </p>
              </div>
            </div>

            {/* Base légale */}
            <div id="base-legale">
              <h2 className="text-2xl font-serif font-semibold text-primary-900 mb-4">
                5. Base légale du traitement
              </h2>
              <div className="text-anthracite-600 font-sans leading-relaxed space-y-3">
                <p>
                  Le traitement de vos données personnelles repose sur les bases légales suivantes :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Exécution d'un contrat :</strong> traitement nécessaire à l'exécution de nos services de conseil</li>
                  <li><strong>Obligation légale :</strong> respect de nos obligations réglementaires et fiscales</li>
                  <li><strong>Intérêt légitime :</strong> amélioration de nos services, prévention de la fraude, sécurité</li>
                  <li><strong>Consentement :</strong> pour les communications marketing et certains cookies</li>
                </ul>
              </div>
            </div>

            {/* Conservation des données */}
            <div id="conservation">
              <h2 className="text-2xl font-serif font-semibold text-primary-900 mb-4">
                6. Durée de conservation
              </h2>
              <div className="text-anthracite-600 font-sans leading-relaxed space-y-3">
                <p>
                  Nous conservons vos données personnelles uniquement pendant la durée nécessaire aux 
                  finalités pour lesquelles elles ont été collectées, conformément à nos obligations 
                  légales et réglementaires :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Données clients actifs : durée de la relation contractuelle plus 3 ans</li>
                  <li>Données clients inactifs : 5 ans à compter du dernier contact</li>
                  <li>Données de prospection : 3 ans à compter de la collecte ou du dernier contact</li>
                  <li>Données comptables : 10 ans conformément aux obligations légales</li>
                  <li>Données de navigation : 13 mois maximum pour les cookies</li>
                </ul>
                <p>
                  Au-delà de ces durées, vos données sont soit supprimées, soit anonymisées de manière 
                  irréversible, sauf obligation légale contraire.
                </p>
              </div>
            </div>

            {/* Destinataires */}
            <div id="destinataires">
              <h2 className="text-2xl font-serif font-semibold text-primary-900 mb-4">
                7. Destinataires des données
              </h2>
              <div className="text-anthracite-600 font-sans leading-relaxed space-y-3">
                <p>
                  Vos données personnelles sont destinées à Monceau David & Co et peuvent être communiquées, 
                  dans le strict respect de la confidentialité, aux destinataires suivants :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Personnel autorisé de Monceau David & Co dans le cadre de leurs fonctions</li>
                  <li>Prestataires techniques et sous-traitants liés par des obligations de confidentialité</li>
                  <li>Partenaires professionnels (assureurs, gestionnaires d'actifs) dans le cadre de nos missions</li>
                  <li>Autorités compétentes en cas d'obligation légale ou de réquisition judiciaire</li>
                </ul>
                <p>
                  Nous nous assurons que tous nos prestataires et partenaires respectent un niveau de 
                  protection équivalent à celui garanti par la réglementation européenne en matière de 
                  protection des données.
                </p>
                <p>
                  Monceau David & Co ne vend, ne loue ni ne cède vos données personnelles à des tiers 
                  à des fins commerciales.
                </p>
              </div>
            </div>

            {/* Transferts internationaux */}
            <div id="transferts">
              <h2 className="text-2xl font-serif font-semibold text-primary-900 mb-4">
                8. Transferts internationaux
              </h2>
              <div className="text-anthracite-600 font-sans leading-relaxed space-y-3">
                <p>
                  Vos données personnelles sont principalement stockées et traitées au sein de l'Union 
                  Européenne. En cas de transfert vers un pays tiers, nous nous assurons que des 
                  garanties appropriées sont mises en place conformément à la réglementation applicable, 
                  notamment par l'utilisation de clauses contractuelles types approuvées par la Commission 
                  Européenne.
                </p>
              </div>
            </div>

            {/* Sécurité */}
            <div id="securite">
              <h2 className="text-2xl font-serif font-semibold text-primary-900 mb-4">
                9. Sécurité des données
              </h2>
              <div className="text-anthracite-600 font-sans leading-relaxed space-y-3">
                <p>
                  Monceau David & Co met en œuvre des mesures techniques et organisationnelles appropriées 
                  pour protéger vos données personnelles contre tout accès non autorisé, perte, altération 
                  ou destruction :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Chiffrement des données sensibles</li>
                  <li>Contrôle d'accès et authentification renforcée</li>
                  <li>Sauvegardes régulières et sécurisées</li>
                  <li>Formation du personnel à la protection des données</li>
                  <li>Surveillance et détection des incidents de sécurité</li>
                </ul>
                <p>
                  Malgré ces mesures, aucun système n'est totalement sécurisé. Monceau David & Co ne peut 
                  garantir une sécurité absolue et décline toute responsabilité en cas d'accès non autorisé 
                  résultant d'un acte de malveillance ou d'une défaillance technique indépendante de sa volonté.
                </p>
              </div>
            </div>

            {/* Droits des personnes */}
            <div id="droits">
              <h2 className="text-2xl font-serif font-semibold text-primary-900 mb-4">
                10. Vos droits
              </h2>
              <div className="text-anthracite-600 font-sans leading-relaxed space-y-3">
                <p>
                  Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Droit d'accès :</strong> obtenir une copie de vos données personnelles</li>
                  <li><strong>Droit de rectification :</strong> corriger vos données inexactes ou incomplètes</li>
                  <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données sous certaines conditions</li>
                  <li><strong>Droit à la limitation :</strong> limiter le traitement de vos données</li>
                  <li><strong>Droit à la portabilité :</strong> récupérer vos données dans un format structuré</li>
                  <li><strong>Droit d'opposition :</strong> vous opposer au traitement pour motifs légitimes</li>
                  <li><strong>Droit de retirer votre consentement :</strong> à tout moment pour les traitements basés sur le consentement</li>
                </ul>
                <p>
                  Pour exercer vos droits, vous pouvez nous contacter à l'adresse : 
                  <a href="mailto:contact@monceaudavid.fr" className="text-primary-900 hover:underline"> contact@monceaudavid.fr</a>
                </p>
                <p>
                  Nous nous engageons à répondre à votre demande dans un délai d'un mois. En cas de 
                  difficulté ou de refus, vous disposez d'un droit de recours auprès de la Commission 
                  Nationale de l'Informatique et des Libertés (CNIL) : 
                  <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary-900 hover:underline"> www.cnil.fr</a>
                </p>
                <p>
                  Monceau David & Co se réserve le droit de vérifier votre identité avant de répondre 
                  à toute demande d'exercice de droits, afin de protéger la confidentialité de vos données.
                </p>
              </div>
            </div>

            {/* Cookies */}
            <div id="cookies">
              <h2 className="text-2xl font-serif font-semibold text-primary-900 mb-4">
                11. Cookies et technologies similaires
              </h2>
              <div className="text-anthracite-600 font-sans leading-relaxed space-y-3">
                <p>
                  Notre site utilise des cookies et technologies similaires pour améliorer votre expérience 
                  de navigation et analyser le trafic. Vous pouvez configurer votre navigateur pour refuser 
                  les cookies, mais cela peut affecter certaines fonctionnalités du site.
                </p>
                <p>
                  Les cookies utilisés sont principalement des cookies techniques nécessaires au fonctionnement 
                  du site et des cookies d'analyse anonymisés. Nous n'utilisons pas de cookies publicitaires 
                  sans votre consentement explicite.
                </p>
                <p>
                  Vous pouvez gérer vos préférences de cookies à tout moment en visitant notre page de{' '}
                  <a href="/preferences-cookies" className="text-primary-900 hover:underline">préférences de cookies</a>.
                </p>
              </div>
            </div>

            {/* Modifications */}
            <div id="modifications">
              <h2 className="text-2xl font-serif font-semibold text-primary-900 mb-4">
                12. Modifications de la politique
              </h2>
              <div className="text-anthracite-600 font-sans leading-relaxed space-y-3">
                <p>
                  Monceau David & Co se réserve le droit de modifier cette politique de confidentialité 
                  à tout moment pour refléter les évolutions de nos pratiques, de nos services ou de la 
                  réglementation. Les modifications prendront effet dès leur publication sur cette page.
                </p>
                <p>
                  Nous vous encourageons à consulter régulièrement cette page pour prendre connaissance 
                  des éventuelles modifications. En cas de modification substantielle, nous vous en 
                  informerons par email ou par un avis sur notre site.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div id="contact" className="pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-serif font-semibold text-primary-900 mb-4">
                13. Contact
              </h2>
              <p className="text-anthracite-600 font-sans leading-relaxed">
                Pour toute question concernant cette politique de confidentialité ou le traitement 
                de vos données personnelles, vous pouvez nous contacter à l'adresse suivante : 
                <a href="mailto:contact@monceaudavid.fr" className="text-primary-900 hover:underline"> contact@monceaudavid.fr</a>
              </p>
            </div>

            {/* Date de mise à jour */}
            <div className="pt-4 text-sm text-anthracite-500 font-sans">
              <p>Dernière mise à jour : {currentYear}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PolitiqueConfidentialitePage;

