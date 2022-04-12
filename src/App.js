import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Register from './pages/Register';
import Login from './pages/Login';
import axios from 'axios';
import Dashboard from './pages/Dashboard';
import NovaCokolada from './components/NovaCokolada';
import PrikazCokolada from './components/PrikazCokolada';

axios.defaults.baseURL = "http://localhost:8000/"
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dodaj-cokoladu" element={<NovaCokolada />} />
          <Route path="/prikazi-cokolade" element={<PrikazCokolada />} />

        </Routes>
      </Router >
    </div>
  );
}

export default App;
