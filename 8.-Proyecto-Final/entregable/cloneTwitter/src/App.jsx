import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import "./index.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (username) => {
    const userData = { username };
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <Router>
      <div className="app-layout">
        {/* Sidebar Navigation similar to X */}
        <nav>
          <div className="logo-x">𝕏</div>
          <NavLink to="/" end>Inicio</NavLink>
          <NavLink to="/profile">Perfil</NavLink>
          {!user && <NavLink to="/login">Login</NavLink>}
          {user && (
            <button className="logout-btn" onClick={logout} style={{marginTop: 'auto'}}>
              Cerrar sesión
            </button>
          )}
        </nav>

        {/* Main Content Feed Area */}
        <main className="main-content">
          <div className="page-header">
            <h2>Clon de Twitter</h2>
          </div>
          
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
        </main>
      </div>
    </Router>
  );
}

export default App;
