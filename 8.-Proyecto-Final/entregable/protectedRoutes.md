## Instrucciones para Lograr el Resultado Final
0.  **Para este proyecto puedes tomar como base el clon de Twitter de la última lectura del módulo.**
1.  **Crear componentes**:*
    *   `Login.js`: Formulario de inicio de sesión.
    *   `Home.js`: Página principal (línea de tiempo).
    *   `Profile.js`: Página de perfil del usuario.
2.  **Manejo de estado y persistencia**:*
    *   Utilizar `useState` para el estado de autenticación.
    *   Utilizar `localStorage` para persistir la información del usuario entre sesiones.
3.  **Protección de rutas**:*
    *   Utilizar React Router para definir rutas.
    *   Proteger las rutas de `Profile` para que solo sean accesibles para usuarios autenticados.
4.  **Flujo de autenticación**:*
    *   El usuario introduce sus credenciales en `Login.js`.
    *   Si las credenciales son correctas, se actualiza el estado de autenticación y se redirige al usuario a la página principal.
    *   Si el usuario intenta acceder a una ruta protegida sin estar autenticado, se le redirige a la página de inicio de sesión.

## Código Inicial Incompleto con Pistas

```javascript
// App.js (incompleto)
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Pista: Recuperar información del usuario desde localStorage
  }, []);

  const login = (username) => {
    // Pista: Actualizar estado y guardar información en localStorage
  };

  const logout = () => {
    // Pista: Eliminar información del usuario del estado y localStorage
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={login} />} />
        <Route path="/" element={<Home user={user} />} />
        <Route 
          path="/profile" 
          element={/* Pista: Proteger esta ruta */} 
        />
      </Routes>
    </Router>
  );
};

export default App;

// Login.js (incompleto)
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pista: Llamar a la función onLogin y redirigir
  };

  // ... (formulario de inicio de sesión)
};

export default Login;
```

## Propuesta de Solución Completa con Explicaciones (puedes hacerlo diferente!!)

```javascript
// App.js
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
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
      <Routes>
        <Route path="/login" element={<Login onLogin={login} />} />
        <Route path="/" element={<Home user={user} logout={logout} />} />
        <Route
          path="/profile"
          element={user ? <Profile user={user} /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;

// Login.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Iniciar sesión</button>
    </form>
  );
};

export default Login;

// Home.js
const Home = ({ user, logout }) => {
  return (
    <div>
      <h1>Bienvenido a Twitter</h1>
      {user && (
        <div>
          <p>Hola, {user.username}!</p>
          <button onClick={logout}>Cerrar sesión</button>
        </div>
      )}
      {/* ... contenido de la página ... */}
    </div>
  );
};

export default Home;

// Profile.js
const Profile = ({ user }) => {
  return (
    <div>
      <h1>Perfil</h1>
      {user && <p>Nombre de usuario: {user.username}</p>}
      {/* ... contenido de la página ... */}
    </div>
  );
};

export default Profile;
```

Con esta solución completa, has implementado un sistema de autenticación funcional en tu clon de Twitter. ¡Recuerda adaptar el código a tus necesidades específicas y añadir las funcionalidades adicionales que desees!