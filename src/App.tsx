import './App.css';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import MainLayout from './common/MainLayout';
import Home from './pages/Home';
import AddContactDetails from './pages/Profile/AddContactDetails';
import ContactDetails from './pages/Profile/Contact';
import DocumentVault from './pages/Profile/DocumentVault';
import PaperlessPreferences from './pages/Profile/PaperlessPreferences';
import EditPersonalDetails from './pages/Profile/EditPersonalDetails';
import DigitalDocuments from './pages/Profile/DigitalDocuments';
import Settings from './pages/Profile/Settings';
import AgentContactDetails from './pages/Profile/AgentContactDetails/';
import ProfilePage from './pages/Profile/ProfilePage';
import BillingPage from './pages/Billing/BillingPage';

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
        path='/home/contact'
        element={
          <MainLayout onLogout={handleLogout}>
            <ContactDetails />
          </MainLayout>
        }
      />

      <Route
        path='/home/documents'
        element={
          <MainLayout onLogout={handleLogout}>
            <DocumentVault />
          </MainLayout>
        }
      />

      <Route
        path='/cdetails'
        element={
          <MainLayout onLogout={handleLogout}>
            <AddContactDetails />
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
        path='/digital-documents'
        element={
          <MainLayout onLogout={handleLogout}>
            <DigitalDocuments />
          </MainLayout>
        }
      />

      <Route
        path='/paperless'
        element={
          <MainLayout onLogout={handleLogout}>
            <PaperlessPreferences />
          </MainLayout>
        }
      />

      <Route
        path='/agent-contact-details'
        element={
          <MainLayout onLogout={handleLogout}>
            <AgentContactDetails />
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

      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
}

export default App;
