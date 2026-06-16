import TweetList from "../components/TweetList";

const Profile = ({ user, tweets, onEditTweet, onDeleteTweet }) => {
  const userTweets = tweets.filter(t => t.author === user.username);

  return (
    <div className="profile-page">
      <div className="glass-card profile-info-card">
        <h1>Perfil</h1>
        <div className="user-info">
          <p>Nombre de usuario: <strong>{user.username}</strong></p>
          <p style={{ fontSize: '0.9rem', marginTop: '1rem' }}>
            Esta es una sección privada de tu cuenta. Aquí puedes ver y gestionar tus publicaciones.
          </p>
        </div>
      </div>

      <h3 className="section-title">Mis Publicaciones</h3>
      
      <TweetList 
        tweets={userTweets} 
        currentUser={user} 
        onEdit={onEditTweet} 
        onDelete={onDeleteTweet} 
      />
    </div>
  );
};

export default Profile;
