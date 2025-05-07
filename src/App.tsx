import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import FormationsPage from './pages/FormationsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';
import FormationAIVentePage from './pages/FormationAIVentePage';
import FormationCommunicationPage from './pages/FormationCommunicationPage';
import FormationCommunityManagementPage from './pages/FormationCommunityManagementPage';
import FormationAnglaisPage from './pages/FormationAnglaisPage';
import FormationFrancaisPage from './pages/FormationFrancaisPage';
import FormationLSFPage from './pages/FormationLSFPage';
import FormationAllemandPage from './pages/FormationAllemandPage';
import FormationArabePage from './pages/FormationArabePage';
import FormationChinoisPage from './pages/FormationChinoisPage';
import FormationEspagnolPage from './pages/FormationEspagnolPage';
import FormationItalienPage from './pages/FormationItalienPage';
import FormationJaponaisPage from './pages/FormationJaponaisPage';
import FormationPortugaisPage from './pages/FormationPortugaisPage';
import FormationRussePage from './pages/FormationRussePage';
import FormulaireBesoinPage from './pages/FormulaireBesoinPage';
import LandingAIPage from './pages/LandingAIPage';
import LandingPPPPage from './pages/LandingPPPPage';

const AppLayout = () => {
  const location = useLocation();
  const isLandingPage = location.pathname.toLowerCase() === '/ia' || location.pathname.toLowerCase() === '/ppp';
  const shouldShowFooter = !isLandingPage;

  return (
    <div className="flex flex-col min-h-screen">
      {!isLandingPage && <Header />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/formations" element={<FormationsPage />} />
          <Route path="/a-propos" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/formation/ia-vente" element={<FormationAIVentePage />} />
          <Route path="/formation/communication-prise-parole" element={<FormationCommunicationPage />} />
          <Route path="/formation/community-management" element={<FormationCommunityManagementPage />} />
          <Route path="/formation/anglais-professionnel" element={<FormationAnglaisPage />} />
          <Route path="/formation/francais-professionnel" element={<FormationFrancaisPage />} />
          <Route path="/formation/langue-des-signes" element={<FormationLSFPage />} />
          <Route path="/formation/allemand-professionnel" element={<FormationAllemandPage />} />
          <Route path="/formation/arabe-professionnel" element={<FormationArabePage />} />
          <Route path="/formation/chinois-professionnel" element={<FormationChinoisPage />} />
          <Route path="/formation/espagnol-professionnel" element={<FormationEspagnolPage />} />
          <Route path="/formation/italien-professionnel" element={<FormationItalienPage />} />
          <Route path="/formation/japonais-professionnel" element={<FormationJaponaisPage />} />
          <Route path="/formation/portugais-professionnel" element={<FormationPortugaisPage />} />
          <Route path="/formation/russe-professionnel" element={<FormationRussePage />} />
          <Route path="/demande-formation" element={<FormulaireBesoinPage />} />
          <Route path="/IA" element={<LandingAIPage />} />
          <Route path="/PPP" element={<LandingPPPPage />} />
        </Routes>
      </main>
      {shouldShowFooter && <Footer />}
    </div>
  );
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <AppLayout />
      </Router>
    </HelmetProvider>
  );
}

export default App;