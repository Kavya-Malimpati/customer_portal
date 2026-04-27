import './App.css';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import MainLayout from './common/MainLayout';
import PersonalDetailsPage from './pages/Profile/ViewPersonalDetails/PersonalDetailsPage';
import Home from './pages/Home';
import AddContactDetails from './pages/Profile/AddContactDetails';
import UpdateContactDetails from './pages/Profile/UpdateContactDetails';
import ContactDetails from './pages/Profile/Contact';
import DocumentVault from './pages/Profile/DocumentVault';
import PaperlessPreferences from './pages/Profile/PaperlessPreferences';
import EditPersonalDetails from './pages/Profile/EditPersonalDetails';
import DigitalDocuments from './pages/Profile/DigitalDocuments';
import Settings from './pages/Profile/Settings';
import AgentContactDetails from './pages/Profile/AgentContactDetails/';
import ProfilePage from './pages/Profile/ProfilePage';

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
        path='/contact'
        element={
          <MainLayout onLogout={handleLogout}>
            <ContactDetails />
          </MainLayout>
        }
      />

      <Route
        path='/documents'
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
        path='/update-contact'
        element={
          <MainLayout onLogout={handleLogout}>
            <UpdateContactDetails />
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
        path='/edit-personal-details'
        element={
          <MainLayout onLogout={handleLogout}>
            <EditPersonalDetails />
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
      />

      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
}

export default App;
