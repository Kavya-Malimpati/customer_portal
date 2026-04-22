import './App.css';
import Home from './pages/Home';
<<<<<<< Updated upstream
=======
import Contact from './pages/Profile/Contact';
import DocumentVault from './pages/Profile/DocumentVault/DocumentVault';
>>>>>>> Stashed changes
import MainLayout from './common/MainLayout';
import Home from './pages/Home';
import AddContactDetails from './pages/Profile/AddContactDetails';
import PaperlessPreferences from './pages/Profile/PaperlessPreferences';
import EditPersonalDetails from './pages/Profile/EditPersonalDetails';

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
