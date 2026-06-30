import './App.css';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import MainLayout from './common/MainLayout';
<<<<<<< HEAD
=======
import BillingPage from './pages/Billing/BillingPage';
import Claims from './pages/Claims';
import Home from './pages/Home';
import PolicyPage from './pages/Policy/PolicyPage';
import AutoQuotePage from './pages/Policy/AutoQuoteFrom/AutoQuotePage';
import HomeownersQuotePage from './pages/Policy/HomeOwnerQuoteFrom/HomeownersQuotePage';
import ProfilePage from './pages/Profile/ProfilePage';
>>>>>>> 561b6d837a6fa7f3ca8e27875885ecab91bc133a
import Settings from './pages/Profile/Settings';
import ProfilePage from './pages/Profile/ProfilePage';
import Claims from './pages/Claims';
import BillingPage from './pages/Billing/BillingPage';
import ServicesPage from './pages/Services/ServicesPage';
import PolicyPage from './pages/Policy/PolicyPage';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

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
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
}

export default App;
