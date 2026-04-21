import './App.css';

import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';

import MainLayout from './common/MainLayout';
import Home from './pages/Home';
import AddContactDetails from './pages/Profile/AddContactDetails';
import PaperlessPreferences from './pages/Profile/PaperlessPreferences';
import UpdateContactDetails from './pages/Profile/UpdateContactDetails';

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
        path='/update-contact'
        element={
          <MainLayout onLogout={handleLogout}>
            <UpdateContactDetails />
          </MainLayout>
        }
      />

      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
}

export default App;