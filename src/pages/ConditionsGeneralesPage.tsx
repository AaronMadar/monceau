import React, { useEffect } from 'react';
import SEOHead from '../components/SEOHead';
import WhatsAppButton from '../components/WatshappButton';

const ConditionsGeneralesPage: React.FC = () => {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <SEOHead 
        title="Conditions Générales - Monceau David & Co"
        description="Conditions générales d'utilisation et de prestation de services de Monceau David & Co. Modalités contractuelles et cadre légal de nos services de conseil."
      />
      
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-serif font-semibold text-primary-900 mb-8">
              Conditions Générales
            </h1>
            <p className="text-xl text-anthracite-600 font-sans max-w-3xl mx-auto leading-relaxed">
              Conditions générales d'utilisation et de prestation de services de conseil
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
                <a href="#preambule" className="text-anthracite-600 hover:text-primary-900 font-sans text-sm transition-colors">1. Préambule</a>
                <a href="#objet" className="text-anthracite-600 hover:text-primary-900 font-sans text-sm transition-colors">2. Objet</a>
                <a href="#devis" className="text-anthracite-600 hover:text-primary-900 font-sans text-sm transition-colors">3. Devis et commande</a>
                <a href="#prestations" className="text-anthracite-600 hover:text-primary-900 font-sans text-sm transition-colors">4. Prestations</a>
                <a href="#obligations" className="text-anthracite-600 hover:text-primary-900 font-sans text-sm transition-colors">5. Obligations du client</a>
                <a href="#tarifs" className="text-anthracite-600 hover:text-primary-900 font-sans text-sm transition-colors">6. Tarifs</a>
                <a href="#propriete" className="text-anthracite-600 hover:text-primary-900 font-sans text-sm transition-colors">7. Propriété intellectuelle</a>
                <a href="#confidentialite" className="text-anthracite-600 hover:text-primary-900 font-sans text-sm transition-colors">8. Confidentialité</a>
                <a href="#responsabilite" className="text-anthracite-600 hover:text-primary-900 font-sans text-sm transition-colors">9. Responsabilité</a>
                <a href="#resiliation" className="text-anthracite-600 hover:text-primary-900 font-sans text-sm transition-colors">10. Résiliation</a>
                <a href="#force-majeure" className="text-anthracite-600 hover:text-primary-900 font-sans text-sm transition-colors">11. Force majeure</a>
                <a href="#droit" className="text-anthracite-600 hover:text-primary-900 font-sans text-sm transition-colors">12. Droit applicable</a>
                <a href="#dispositions" className="text-anthracite-600 hover:text-primary-900 font-sans text-sm transition-colors">13. Dispositions générales</a>
                <a href="#contact" className="text-anthracite-600 hover:text-primary-900 font-sans text-sm transition-colors">14. Contact</a>
              </nav>
            </div>
            
            {/* Préambule */}
            <div id="preambule">
              <h2 className="text-2xl font-serif font-semibold text-primary-900 mb-4">
                1. Préambule
              </h2>
              <div className="text-anthracite-600 font-sans leading-relaxed space-y-3">
                <p>
                  Les présentes conditions générales régissent les relations entre Monceau David & Co 
                  (ci-après "le Cabinet") et ses clients (ci-après "le Client") dans le cadre des 
                  prestations de conseil en assurance, gestion d'actifs et développement durable.
                </p>
                <p>
                  Toute commande ou acceptation de prestation implique l'acceptation sans réserve des 
                  présentes conditions générales par le Client. Toute condition contraire proposée par 
                  le Client ne pourra être opposée au Cabinet, sauf accord écrit exprès du Cabinet.
                </p>
                <p>
                  Le Cabinet se réserve le droit de modifier les présentes conditions générales à tout 
                  moment. Les modifications s'appliquent aux prestations commandées après leur publication. 
                  Il appartient au Client de consulter régulièrement ces conditions.
                </p>
              </div>
            </div>

            {/* Objet */}
            <div id="objet">
              <h2 className="text-2xl font-serif font-semibold text-primary-900 mb-4">
                2. Objet et champ d'application
              </h2>
              <div className="text-anthracite-600 font-sans leading-relaxed space-y-3">
                <p>
                  Le Cabinet propose des prestations de conseil et d'accompagnement dans les domaines 
                  suivants :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Conseil en assurance et prévoyance</li>
                  <li>Gestion d'actifs et structuration patrimoniale</li>
                  <li>Développement durable et stratégie énergétique</li>
                </ul>
                <p>
                  Les prestations sont définies dans un devis ou une convention de mission spécifique 
                  signée par les deux parties. En cas de contradiction, les termes du devis ou de la 
                  convention prévalent sur les présentes conditions générales.
                </p>
                <p>
                  Les présentes conditions s'appliquent à toutes les prestations du Cabinet, sauf 
                  disposition contraire expressément prévue dans la convention de mission.
                </p>
              </div>
            </div>

            {/* Devis et commande */}
            <div id="devis">
              <h2 className="text-2xl font-serif font-semibold text-primary-900 mb-4">
                3. Devis et commande
              </h2>
              <div className="text-anthracite-600 font-sans leading-relaxed space-y-3">
                <p>
                  Tout devis établi par le Cabinet est valable pour une durée déterminée, mentionnée 
                  expressément sur le devis. Passé ce délai, le devis devient caduc et le Cabinet se 
                  réserve le droit de le modifier.
                </p>
                <p>
                  La commande devient ferme et définitive après acceptation écrite du devis par le Client 
                  et confirmation écrite du Cabinet. L'acceptation du devis vaut acceptation des présentes 
                  conditions générales.
                </p>
                <p>
                  Le Cabinet se réserve le droit de refuser toute commande sans avoir à justifier sa décision, 
                  notamment en cas de désaccord sur les conditions ou de doute sur la solvabilité du Client.
                </p>
                <p>
                  Toute modification de commande après acceptation doit faire l'objet d'un avenant écrit 
                  et peut entraîner une révision des conditions tarifaires et de délais.
                </p>
              </div>
            </div>

            {/* Prestations */}
            <div id="prestations">
              <h2 className="text-2xl font-serif font-semibold text-primary-900 mb-4">
                4. Exécution des prestations
              </h2>
              <div className="text-anthracite-600 font-sans leading-relaxed space-y-3">
                <p>
                  Le Cabinet s'engage à exécuter les prestations avec diligence et selon les règles de 
                  l'art, en mettant en œuvre ses compétences et son expertise professionnelle.
                </p>
                <p>
                  Les prestations sont exécutées selon les modalités définies dans la convention de mission. 
                  Le Cabinet fournit des conseils et recommandations adaptés à la situation du Client, 
                  sur la base des informations communiquées par ce dernier.
                </p>
                <p>
                  Le Client s'engage à fournir au Cabinet toutes les informations nécessaires à l'exécution 
                  des prestations, de manière complète, exacte et dans les délais convenus. Le Cabinet ne 
                  saurait être tenu responsable des conséquences résultant d'informations incomplètes, 
                  inexactes ou tardives communiquées par le Client.
                </p>
                <p>
                  Les délais d'exécution mentionnés dans les devis ou conventions sont donnés à titre 
                  indicatif. Le Cabinet s'efforce de les respecter mais ne peut être tenu responsable 
                  d'un retard résultant de circonstances indépendantes de sa volonté, notamment en cas 
                  de retard dans la fourniture d'informations par le Client.
                </p>
                <p>
                  Le Cabinet se réserve le droit de faire appel à des sous-traitants ou partenaires 
                  spécialisés, sous sa responsabilité, pour l'exécution de tout ou partie des prestations.
                </p>
              </div>
            </div>

            {/* Obligations du client */}
            <div id="obligations">
              <h2 className="text-2xl font-serif font-semibold text-primary-900 mb-4">
                5. Obligations du Client
              </h2>
              <div className="text-anthracite-600 font-sans leading-relaxed space-y-3">
                <p>
                  Le Client s'engage à :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Fournir au Cabinet toutes les informations nécessaires de manière complète, exacte et à jour</li>
                  <li>Respecter les délais convenus pour la fourniture d'informations et de documents</li>
                  <li>Informer le Cabinet de tout changement susceptible d'affecter l'exécution des prestations</li>
                  <li>Respecter les recommandations et conseils fournis par le Cabinet</li>
                  <li>Effectuer le règlement des factures dans les délais convenus</li>
                  <li>Utiliser les conseils et documents fournis uniquement dans le cadre convenu</li>
                </ul>
                <p>
                  Le Client reconnaît que la qualité des prestations dépend en grande partie de la 
                  complétude et de l'exactitude des informations qu'il fournit. Le Cabinet ne saurait 
                  être tenu responsable des conséquences résultant d'informations erronées, incomplètes 
                  ou tardives.
                </p>
                <p>
                  Le Client s'engage à ne pas utiliser les conseils et documents fournis par le Cabinet 
                  à des fins autres que celles convenues, et à ne pas les communiquer à des tiers sans 
                  autorisation préalable du Cabinet.
                </p>
              </div>
            </div>

            {/* Tarifs et facturation */}
            <div id="tarifs">
              <h2 className="text-2xl font-serif font-semibold text-primary-900 mb-4">
                6. Tarifs et facturation
              </h2>
              <div className="text-anthracite-600 font-sans leading-relaxed space-y-3">
                <p>
                  Les tarifs des prestations sont indiqués dans les devis et conventions de mission. 
                  Ils sont exprimés en euros hors taxes et peuvent être révisés annuellement ou en 
                  cas de modification substantielle de la mission.
                </p>
                <p>
                  Les factures sont établies selon les modalités convenues dans la convention de mission. 
                  En l'absence de convention spécifique, les factures sont payables dans un délai de 
                  30 jours à compter de leur émission.
                </p>
                <p>
                  Tout retard de paiement entraîne de plein droit, sans mise en demeure préalable :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>L'application d'intérêts de retard au taux légal en vigueur</li>
                  <li>Une indemnité forfaitaire pour frais de recouvrement de 40 euros</li>
                  <li>La suspension immédiate des prestations en cours</li>
                  <li>L'exigibilité immédiate de toutes les sommes dues</li>
                </ul>
                <p>
                  Le Cabinet se réserve le droit d'exiger un acompte ou des garanties de paiement avant 
                  le démarrage ou la poursuite des prestations, notamment en cas de doute sur la solvabilité 
                  du Client.
                </p>
              </div>
            </div>

            {/* Propriété intellectuelle */}
            <div id="propriete">
              <h2 className="text-2xl font-serif font-semibold text-primary-900 mb-4">
                7. Propriété intellectuelle
              </h2>
              <div className="text-anthracite-600 font-sans leading-relaxed space-y-3">
                <p>
                  Tous les documents, études, analyses, méthodes et outils développés par le Cabinet 
                  dans le cadre des prestations restent la propriété exclusive du Cabinet, sauf convention 
                  contraire écrite.
                </p>
                <p>
                  Le Client dispose d'un droit d'utilisation des documents remis dans le cadre strict 
                  de la mission pour laquelle ils ont été établis. Toute reproduction, diffusion ou 
                  utilisation à d'autres fins est interdite sans autorisation écrite préalable du Cabinet.
                </p>
                <p>
                  Le Cabinet se réserve le droit d'utiliser les méthodes, outils et savoir-faire développés 
                  dans le cadre des prestations pour d'autres clients, sous réserve de respecter la 
                  confidentialité des informations spécifiques au Client.
                </p>
              </div>
            </div>

            {/* Confidentialité */}
            <div id="confidentialite">
              <h2 className="text-2xl font-serif font-semibold text-primary-900 mb-4">
                8. Confidentialité
              </h2>
              <div className="text-anthracite-600 font-sans leading-relaxed space-y-3">
                <p>
                  Le Cabinet s'engage à respecter la confidentialité de toutes les informations communiquées 
                  par le Client dans le cadre des prestations. Cette obligation de confidentialité s'applique 
                  à l'ensemble du personnel et des partenaires du Cabinet.
                </p>
                <p>
                  Le Cabinet peut toutefois être amené à communiquer certaines informations aux partenaires 
                  et prestataires nécessaires à l'exécution des prestations, sous réserve qu'ils soient 
                  soumis à des obligations de confidentialité équivalentes.
                </p>
                <p>
                  L'obligation de confidentialité ne s'applique pas aux informations :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Déjà connues du public ou du Cabinet avant leur communication</li>
                  <li>Légalement exigées par les autorités compétentes</li>
                  <li>Nécessaires à la défense des intérêts du Cabinet en cas de litige</li>
                </ul>
                <p>
                  L'obligation de confidentialité perdure après la fin des prestations, sans limitation 
                  de durée.
                </p>
              </div>
            </div>

            {/* Responsabilité */}
            <div id="responsabilite">
              <h2 className="text-2xl font-serif font-semibold text-primary-900 mb-4">
                9. Limitation de responsabilité
              </h2>
              <div className="text-anthracite-600 font-sans leading-relaxed space-y-3">
                <p>
                  Le Cabinet s'engage à exercer ses prestations avec diligence et selon les règles de 
                  l'art. Cependant, compte tenu de la nature des prestations de conseil et des incertitudes 
                  inhérentes aux décisions économiques et financières, le Cabinet ne peut garantir les 
                  résultats obtenus par le Client.
                </p>
                <p>
                  La responsabilité du Cabinet est limitée aux dommages directs et prévisibles résultant 
                  d'une faute lourde ou d'une négligence grave dans l'exécution des prestations. En aucun 
                  cas, le Cabinet ne pourra être tenu responsable :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Des dommages indirects, pertes de profits, manques à gagner, perte de clientèle ou d'image</li>
                  <li>Des conséquences résultant de décisions prises par le Client sur la base des conseils fournis</li>
                  <li>Des dommages résultant d'informations incomplètes, inexactes ou tardives communiquées par le Client</li>
                  <li>Des dommages résultant de circonstances indépendantes de la volonté du Cabinet</li>
                  <li>Des dommages résultant de l'évolution de la réglementation ou de la jurisprudence postérieure aux conseils</li>
                </ul>
                <p>
                  Le montant total de la responsabilité du Cabinet est limité au montant des honoraires 
                  perçus au titre de la prestation ayant donné lieu au dommage, sauf faute lourde ou 
                  dolosive dûment constatée.
                </p>
                <p>
                  Le Cabinet dispose d'une assurance responsabilité civile professionnelle couvrant ses 
                  activités. Les garanties de cette assurance constituent la seule garantie du Client 
                  en cas de dommage résultant des prestations.
                </p>
                <p>
                  Le Client reconnaît que les conseils fournis par le Cabinet sont adaptés à sa situation 
                  spécifique au moment de leur émission et ne peuvent être transposés à d'autres contextes 
                  ou périodes sans nouvelle analyse. Toute décision prise par le Client sur la base des 
                  conseils relève de sa seule responsabilité.
                </p>
              </div>
            </div>

            {/* Résiliation */}
            <div id="resiliation">
              <h2 className="text-2xl font-serif font-semibold text-primary-900 mb-4">
                10. Résiliation
              </h2>
              <div className="text-anthracite-600 font-sans leading-relaxed space-y-3">
                <p>
                  Chaque partie peut résilier la convention de mission à tout moment, sous réserve d'un 
                  préavis écrit de 30 jours, sauf convention contraire.
                </p>
                <p>
                  En cas de résiliation par le Client, les prestations déjà exécutées sont facturées 
                  au prorata et restent dues. Le Cabinet peut également réclamer une indemnité pour 
                  les frais engagés et le préjudice subi.
                </p>
                <p>
                  Le Cabinet peut résilier immédiatement la convention en cas de :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Non-paiement des factures dans les délais convenus</li>
                  <li>Manquement grave du Client à ses obligations</li>
                  <li>Perte de confiance rendant impossible la poursuite de la mission</li>
                </ul>
                <p>
                  La résiliation n'affecte pas les obligations de confidentialité et les clauses de 
                  limitation de responsabilité qui continuent à s'appliquer.
                </p>
              </div>
            </div>

            {/* Force majeure */}
            <div id="force-majeure">
              <h2 className="text-2xl font-serif font-semibold text-primary-900 mb-4">
                11. Force majeure
              </h2>
              <div className="text-anthracite-600 font-sans leading-relaxed space-y-3">
                <p>
                  Le Cabinet ne pourra être tenu responsable de tout retard ou défaillance dans l'exécution 
                  des prestations résultant d'un cas de force majeure ou d'un événement indépendant de 
                  sa volonté, notamment : grève, guerre, émeute, embargo, acte de gouvernement, 
                  réglementation, panne ou défaillance des réseaux de télécommunication, catastrophe 
                  naturelle, pandémie, ou tout autre événement imprévisible et irrésistible.
                </p>
                <p>
                  En cas de force majeure, les obligations des parties sont suspendues. Si la force 
                  majeure persiste plus de 60 jours, chaque partie peut résilier la convention sans 
                  indemnité.
                </p>
              </div>
            </div>

            {/* Droit applicable */}
            <div id="droit">
              <h2 className="text-2xl font-serif font-semibold text-primary-900 mb-4">
                12. Droit applicable et juridiction
              </h2>
              <div className="text-anthracite-600 font-sans leading-relaxed space-y-3">
                <p>
                  Les présentes conditions générales sont régies par le droit français. Tout litige 
                  relatif à leur interprétation ou à leur exécution relève de la compétence exclusive 
                  des tribunaux français.
                </p>
                <p>
                  Avant toute action judiciaire, les parties s'engagent à rechercher une solution amiable 
                  par voie de négociation. À défaut d'accord dans un délai de 60 jours, le litige sera 
                  porté devant les tribunaux compétents.
                </p>
              </div>
            </div>

            {/* Dispositions générales */}
            <div id="dispositions">
              <h2 className="text-2xl font-serif font-semibold text-primary-900 mb-4">
                13. Dispositions générales
              </h2>
              <div className="text-anthracite-600 font-sans leading-relaxed space-y-3">
                <p>
                  Si une ou plusieurs stipulations des présentes conditions générales sont tenues pour 
                  non valides ou déclarées telles en application d'une loi, d'un règlement ou à la suite 
                  d'une décision de justice, les autres stipulations gardent leur force et leur portée.
                </p>
                <p>
                  Le fait pour le Cabinet de ne pas se prévaloir à un moment donné de l'une quelconque 
                  des clauses des présentes conditions générales ne peut être interprété comme une 
                  renonciation à s'en prévaloir ultérieurement.
                </p>
                <p>
                  Les présentes conditions générales prévalent sur tout autre document, sauf convention 
                  écrite contraire expressément signée par les deux parties.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div id="contact" className="pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-serif font-semibold text-primary-900 mb-4">
                14. Contact
              </h2>
              <p className="text-anthracite-600 font-sans leading-relaxed">
                Pour toute question concernant les présentes conditions générales, vous pouvez nous 
                contacter à l'adresse suivante : 
                <a href="mailto:contact@monceaudavid.fr" className="text-primary-900 hover:underline"> contact@monceaudavid.fr</a>
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

export default ConditionsGeneralesPage;

