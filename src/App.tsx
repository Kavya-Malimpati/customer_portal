import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import MainLayout from './common/MainLayout';
import Login from './pages/Login';
import CommunicationPreferences from './pages/Profile/CommunicationPreferences';
import AgentContactDetails from './pages/Profile/AgentContactDetails';
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
        path="/profile/communication-preferences"
        element={
          <MainLayout onLogout={handleLogout}>
            <CommunicationPreferences />
          </MainLayout>
        }
      />
      <Route
        path="/profile/agent-contact"
        element={
          <MainLayout onLogout={handleLogout}>
            <AgentContactDetails />
          </MainLayout>
        }
      />
      <Route path="*" element={
        <Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
