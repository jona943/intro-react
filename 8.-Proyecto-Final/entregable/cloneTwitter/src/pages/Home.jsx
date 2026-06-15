const Home = ({ user }) => {
  return (
    <div className="glass-card">
      <h1>Inicio</h1>
      <div className="user-info">
        {user ? (
          <p>Bienvenido de nuevo, <strong>{user.username}</strong>. Revisa las últimas actualizaciones.</p>
        ) : (
          <p>Únete a la conversación. Inicia sesión para ver tu perfil y conectar con otros.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
