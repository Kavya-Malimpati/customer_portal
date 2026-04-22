import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
<<<<<<< Updated upstream
=======
import Contact from './pages/Profile/Contact';
import DocumentVault from './pages/Profile/DocumentVault/DocumentVault';
>>>>>>> Stashed changes
import MainLayout from './common/MainLayout';
import Login from './pages/Login';

/**
 * App Component
 *
 * Main application component that serves as the root wrapper.
 * Configures routing for all pages including Home (Login).
 */
function App() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/home"
        element={
          <MainLayout onLogout={handleLogout}>
            <Home />
          </MainLayout>
        }
      />
<<<<<<< Updated upstream
=======
      <Route 
        path="/home/contact"
        element={
          <MainLayout onLogout={handleLogout}>
            <Contact />
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
>>>>>>> Stashed changes
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
