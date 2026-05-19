import './App.css';

import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';

import MainLayout from './common/MainLayout';
import Home from './pages/Home';
import AddContactDetails from './pages/Profile/AddContactDetails';
import RecentAlerts from './pages/Services/RecentAlerts/RecentAlerts';
import ContactDetails from './pages/Profile/Contact';
import DigitalDocuments from './pages/Profile/DocumentsTab/DigitalDocuments';
import DocumentVault from './pages/Profile/DocumentsTab/DocumentVault';
import EditPersonalDetails from './pages/Profile/EditPersonalDetails';
import PaperlessPreferences from './pages/Profile/PaperlessPreferences';
import ProfilePage from './pages/Profile/ProfilePage';
import FeedbackCard from './pages/Services/FeedbackCard/FeedbackCard';
import ServicesPage from './pages/Services/ServicesPage';

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
        path='/services'
        element={
          <MainLayout onLogout={handleLogout}>
            <ServicesPage/>
          </MainLayout>
        }
      />
      

      <Route
        path='/view-personal-details'
        element={
          <MainLayout onLogout={handleLogout}>
            <PersonalDetailsPage />
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
      /> <Route
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
        path='/payment-methods'
        element={
          <MainLayout onLogout={handleLogout}>
            <PaymentMethods />
          </MainLayout>
        }
      />

      <Route
        path='/policy-page'
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
