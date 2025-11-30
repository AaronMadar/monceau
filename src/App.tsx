import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AssurancePage from './pages/AssurancePage';
import GestionActifsPage from './pages/GestionActifsPage';
import DeveloppementDurablePage from './pages/DeveloppementDurablePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import MentionsLegalesPage from './pages/MentionsLegalesPage';
import PolitiqueConfidentialitePage from './pages/PolitiqueConfidentialitePage';
import ConditionsGeneralesPage from './pages/ConditionsGeneralesPage';
import CookieBanner from './components/CookieBanner';
import CookiePreferences from './components/CookiePreferences';
import AssuranceProfessionnellePage from './pages/assurance/AssuranceProfessionnellePage';
import AssurancePriveePage from './pages/assurance/AssurancePriveePage';
import ProduitAssurancielPage from './pages/gestion-actifs/ProduitAssurancielPage';
import PlacementFinancierPage from './pages/gestion-actifs/PlacementFinancierPage';
import SolutionSocietePage from './pages/gestion-actifs/SolutionSocietePage';
import ProduitAlternatifPage from './pages/gestion-actifs/ProduitAlternatifPage';
import AuditEnergetiquePage from './pages/developpement-durable/AuditEnergetiquePage';
import OptimisationCoutsPage from './pages/developpement-durable/OptimisationCoutsPage';
import StrategieEnergetiquePage from './pages/developpement-durable/StrategieEnergetiquePage';
import AccompagnementPage from './pages/developpement-durable/AccompagnementPage';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/assurance" element={<AssurancePage />} />
              <Route path="/gestion-actifs" element={<GestionActifsPage />} />
              <Route path="/developpement-durable" element={<DeveloppementDurablePage />} />
              <Route path="/a-propos" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
              <Route path="/politique-confidentialite" element={<PolitiqueConfidentialitePage />} />
              <Route path="/conditions-generales" element={<ConditionsGeneralesPage />} />
              <Route path="/preferences-cookies" element={<CookiePreferences />} />
              
              {/* Sous-pages Assurance */}
              <Route path="/assurance/professionnelle" element={<AssuranceProfessionnellePage />} />
              <Route path="/assurance/privee" element={<AssurancePriveePage />} />
              
              {/* Sous-pages Gestion d'Actifs */}
              <Route path="/gestion-actifs/produits-assurantiels" element={<ProduitAssurancielPage />} />
              <Route path="/gestion-actifs/placements-financiers" element={<PlacementFinancierPage />} />
              <Route path="/gestion-actifs/solutions-societes" element={<SolutionSocietePage />} />
              <Route path="/gestion-actifs/produits-alternatifs" element={<ProduitAlternatifPage />} />
              
              {/* Sous-pages Développement Durable */}
              <Route path="/developpement-durable/audit-energetique" element={<AuditEnergetiquePage />} />
              <Route path="/developpement-durable/optimisation-couts" element={<OptimisationCoutsPage />} />
              <Route path="/developpement-durable/strategie-energetique" element={<StrategieEnergetiquePage />} />
              <Route path="/developpement-durable/accompagnement" element={<AccompagnementPage />} />
            </Routes>
          </main>
          <Footer />
          <CookieBanner />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;