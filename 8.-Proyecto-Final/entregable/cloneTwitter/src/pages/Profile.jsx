const Profile = ({ user }) => {
  return (
    <div className="glass-card">
      <h1>Perfil</h1>
      <div className="user-info">
        <p>Nombre de usuario: <strong>{user.username}</strong></p>
        <p style={{ fontSize: '0.9rem', marginTop: '1rem' }}>
          Esta es una sección privada de tu cuenta.
        </p>
      </div>
    </div>
  );
};

export default Profile;
