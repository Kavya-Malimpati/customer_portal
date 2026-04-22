import './App.css';
import Home from './pages/Home';
import MainLayout from './common/MainLayout';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import ContactDetails from './pages/Profile/Contact';
import DocumentVault from './pages/Profile/DocumentVault';

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
        path="/home/contact"
        element={
          <MainLayout onLogout={handleLogout}>
            <ContactDetails />
          </MainLayout>
        }
      />
      
      <Route
        path="/home/documents"
        element={
          <MainLayout onLogout={handleLogout}>
            <DocumentVault />
          </MainLayout>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
