import './App.css';

import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';

import MainLayout from './common/MainLayout';
import BillingPage from './pages/Billing/BillingPage';
import Claims from './pages/Claims';
import Home from './pages/Home';
import PolicyPage from './pages/Policy/PolicyPage';
import ProfilePage from './pages/Profile/ProfilePage';
import Settings from './pages/Profile/Settings';
import ServicesPage from './pages/Services/ServicesPage';
import TestPage from './pages/TestPage';

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
            <Home />
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
