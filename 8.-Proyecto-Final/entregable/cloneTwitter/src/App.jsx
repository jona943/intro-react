import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import "./index.css";

function App() {
  const [user, setUser] = useState(null);

  // Al cargar la app, buscamos si hay un usuario guardado
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Función para iniciar sesión
  const login = (username) => {
    const userData = { username };
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // Función para cerrar sesión
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <Router>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/profile">Perfil</Link>
        {!user && <Link to="/login">Login</Link>}
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<Home user={user} logout={logout} />} />
          <Route path="/login" element={<Login onLogin={login} />} />
          <Route 
            path="/profile" 
            element={user ? <Profile user={user} /> : <Navigate to="/login" />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
