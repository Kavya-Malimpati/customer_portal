import './App.css';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import MainLayout from './common/MainLayout';
import Login from './pages/Login';
import PersonalDetailsPage from './pages/Profile/ViewPersonalDetails/PersonalDetailApi';
import Home from './pages/Home';
import AddContactDetails from './pages/Profile/AddContactDetails';
import PaperlessPreferences from './pages/Profile/PaperlessPreferences';
import EditPersonalDetails from './pages/Profile/EditPersonalDetails';
import AgentContactDetails from './pages/Profile/AgentContactDetails/';

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
        path='/cdetails'
        element={
          <MainLayout onLogout={handleLogout}>
            <AddContactDetails />
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

      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
}

export default App;
