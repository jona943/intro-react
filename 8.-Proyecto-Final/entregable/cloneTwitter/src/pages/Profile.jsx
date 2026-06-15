const Profile = ({ user }) => {
  return (
    <div>
      <h1>Tu Perfil</h1>
      <p>Nombre de usuario: {user.username}</p>
    </div>
  );
};

export default Profile;
