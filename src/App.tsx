import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import './App.css';
import MainLayout from './common/MainLayout';
import Login from './pages/Login';
import Home from './pages/Home';
import DigitalDocuments from './pages/Profile/DigitalDocuments';
import Settings from './pages/Profile/Settings';

/**
 * App Component
 *
 * Main application component that serves as the root wrapper.
 * Configures routing for all pages including Home and Vehicle Details.
 */
function App() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<MainLayout onLogout={handleLogout}>{<Home />}</MainLayout>} />

      <Route
        path='/profile/settings'
        element={<MainLayout onLogout={handleLogout}>{<Settings />}</MainLayout>}
      />

      <Route
        path='/profile/digital-documents'
        element={<MainLayout onLogout={handleLogout}>{<DigitalDocuments />}</MainLayout>}
      />

      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
}

export default App;
