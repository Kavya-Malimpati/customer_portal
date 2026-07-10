import './App.css';

import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';

import MainLayout from './common/MainLayout';
import BillingPage from './pages/Billing/BillingPage';
import Claims from './pages/Claims';
import ClaimSuccessPage from './pages/Claims/FNOL/ClaimsSuccess/ClaimSuccessPage';
import FNOLPage from './pages/Claims/FNOL/FNOLPage';
import Dashboard from './pages/Dashboard/Dashboard';
import AutoQuotePage from './pages/Policy/AutoQuoteFrom/AutoQuotePage';
import HomeownersQuotePage from './pages/Policy/HomeOwnerQuoteFrom/HomeownersQuotePage';
import PolicyPage from './pages/Policy/PolicyPage';
import ProfilePage from './pages/Profile/ProfilePage';
import Settings from './pages/Profile/Settings';
import FAQsPage from './pages/Services/FAQsPage/FAQsPage';
import ServicesPage from './pages/Services/ServicesPage';
import TestPage from './pages/TestPage';

function App() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  // Skip routing for static document files - let the browser handle them
  if (window.location.pathname.includes('/documents/')) {
    return null;
  }

  return (
    <Routes>
      <Route
        path='/'
        element={
          <MainLayout onLogout={handleLogout}>
            <Dashboard />
          </MainLayout>
        }
      />

      <Route
        path='/quoteAuto'
        element={
          <MainLayout onLogout={handleLogout}>
            <AutoQuotePage />
          </MainLayout>
        }
      />

      <Route
        path='/quoteHome'
        element={
          <MainLayout onLogout={handleLogout}>
            <HomeownersQuotePage />
          </MainLayout>
        }
      />

      <Route
        path='/settings'
        element={
          <MainLayout onLogout={handleLogout}>
            <Settings />
          </MainLayout>
        }
      />
      <Route
        path='/profile-page'
        element={
          <MainLayout onLogout={handleLogout}>
            <ProfilePage />
          </MainLayout>
        }
      />

      <Route
        path='/billing'
        element={
          <MainLayout onLogout={handleLogout}>
            <BillingPage />
          </MainLayout>
        }
      />

      <Route
        path='/claims'
        element={
          <MainLayout onLogout={handleLogout}>
            <Claims />
          </MainLayout>
        }
      />
      <Route
        path='/services'
        element={
          <MainLayout onLogout={handleLogout}>
            <ServicesPage />
          </MainLayout>
        }
      />
      <Route
        path='/policy'
        element={
          <MainLayout onLogout={handleLogout}>
            <PolicyPage />
          </MainLayout>
        }
      />

      <Route
        path='/claims/fnol/:claimType'
        element={
          <MainLayout onLogout={handleLogout}>
            <FNOLPage />
          </MainLayout>
        }
      />

      <Route
        path='/claims/fnol/success'
        element={
          <MainLayout onLogout={handleLogout}>
            <ClaimSuccessPage />
          </MainLayout>
        }
      />

      <Route
        path='/faqs'
        element={
          <MainLayout onLogout={handleLogout}>
            <FAQsPage />
          </MainLayout>
        }
      />

      <Route
        path='/test'
        element={
          <MainLayout onLogout={handleLogout}>
            <TestPage />
          </MainLayout>
        }
      />

      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
}

export default App;
