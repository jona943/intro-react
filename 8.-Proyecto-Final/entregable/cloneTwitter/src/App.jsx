import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { 
  fetchTweetsFromDB, 
  addTweetToDB, 
  updateTweetInDB, 
  deleteTweetFromDB 
} from "./firebase/tweetService";
import "./index.css";

function App() {
  const [user, setUser] = useState(null);
  const [tweets, setTweets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Auth simple con localStorage
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    // Cargar tweets desde Firebase
    const loadTweets = async () => {
      setIsLoading(true);
      const data = await fetchTweetsFromDB();
      setTweets(data);
      setIsLoading(false);
    };

    loadTweets();
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

  const addTweet = async (content) => {
    try {
      const newTweetData = {
        author: user.username,
        content
      };
      const newTweet = await addTweetToDB(newTweetData);
      setTweets([newTweet, ...tweets]);
    } catch (error) {
      alert("Error al publicar el tweet");
    }
  };

  const editTweet = async (id, newContent) => {
    try {
      await updateTweetInDB(id, newContent);
      setTweets(tweets.map((tweet) =>
        tweet.id === id ? { ...tweet, content: newContent } : tweet
      ));
    } catch (error) {
      alert("Error al editar el tweet");
    }
  };

  const deleteTweet = async (id) => {
    try {
      await deleteTweetFromDB(id);
      setTweets(tweets.filter((tweet) => tweet.id !== id));
    } catch (error) {
      alert("Error al eliminar el tweet");
    }
  };

  return (
    <Router>
      <div className="grain-overlay"></div>
      <div className="app-layout">
        {/* Sidebar Navigation - Icons + Text */}
        <nav className="sidebar">
          <div className="sidebar-header">
            <div className="logo-x">𝕏</div>
          </div>
          
          <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>
            <i className="fa-solid fa-house"></i>
            <span className="sidebar-label">Inicio</span>
          </NavLink>
          
          <NavLink to="/profile" className={({ isActive }) => isActive ? "active" : ""}>
            <i className="fa-solid fa-user"></i>
            <span className="sidebar-label">Perfil</span>
          </NavLink>
          
          {!user && (
            <NavLink to="/login" className={({ isActive }) => isActive ? "active" : ""}>
              <i className="fa-solid fa-key"></i>
              <span className="sidebar-label">Login</span>
            </NavLink>
          )}

          {user && (
            <div className="logout-btn-container">
              <button className="logout-btn" onClick={logout}>
                <i className="fa-solid fa-right-from-bracket"></i>
                <span className="sidebar-label">Salir</span>
              </button>
            </div>
          )}
        </nav>

        {/* Main Content Area */}
        <main className="main-content">
          <div className="page-header">
            <h2>{user ? `Hola, ${user.username}` : "Clon de Twitter"}</h2>
          </div>
          
          <div className="container">
            {isLoading ? (
              <div className="glass-card loading-container">
                <p>Cargando datos de la nube...</p>
              </div>
            ) : (
              <Routes>
                <Route 
                  path="/" 
                  element={
                    <Home 
                      user={user} 
                      tweets={tweets} 
                      onAddTweet={addTweet}
                      onEditTweet={editTweet}
                      onDeleteTweet={deleteTweet}
                    />
                  } 
                />
                <Route path="/login" element={<Login onLogin={login} />} />
                <Route 
                  path="/profile" 
                  element={
                    user ? (
                      <Profile 
                        user={user} 
                        tweets={tweets}
                        onEditTweet={editTweet}
                        onDeleteTweet={deleteTweet}
                      />
                    ) : (
                      <Navigate to="/login" />
                    )
                  } 
                />
              </Routes>
            )}
          </div>
        </main>

        {/* Right Sidebar - Trends */}
        <aside className="trends-sidebar">
          <div className="glass-card trends-card">
            <h3>Qué está pasando</h3>
            <div className="trend-item">
              <span>Tendencia en React</span>
              <p>#SpecKit</p>
            </div>
            <div className="trend-item">
              <span>Tecnología · Tendencia</span>
              <p>#LiquidCrystal</p>
            </div>
            <div className="trend-item">
              <span>Diseño · Vintage</span>
              <p>#Glassmorphism2010</p>
            </div>
          </div>
        </aside>
      </div>
    </Router>
  );
}

export default App;
