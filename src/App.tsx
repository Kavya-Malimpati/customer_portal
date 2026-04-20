import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import MainLayout from './common/MainLayout';
import Login from './pages/Login';
import EditPersonalDetails from './pages/Profile/EditPersonalDetails';

function App() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <Routes>
      <Route
        path="/"
        element={  <Login />  } />
      <Route
        path="/home"
        element={
          <MainLayout onLogout={handleLogout}>
            <Home />
          </MainLayout>
        }
      />
      <Route
        path="/profile/edit"
        element={
          <MainLayout onLogout={handleLogout}>
            <EditPersonalDetails />
          </MainLayout>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
