import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import UpdateContact from './pages/UpdateContact';
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
      <Route
        path="/update-contact"
        element={
          <MainLayout onLogout={handleLogout}>
            <UpdateContact />
          </MainLayout>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
