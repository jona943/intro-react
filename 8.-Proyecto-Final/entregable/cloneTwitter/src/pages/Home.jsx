const Home = ({ user, logout }) => {
  return (
    <div>
      <h1>Bienvenido a Twitter</h1>
      {user ? (
        <div className="user-info">
          <p>Hola, <strong>{user.username}</strong>!</p>
          <button onClick={logout}>Cerrar sesión</button>
        </div>
      ) : (
        <p>Inicia sesión para ver tu perfil.</p>
      )}
    </div>
  );
};

export default Home;
