import TweetForm from "../components/TweetForm";
import TweetList from "../components/TweetList";

const Home = ({ user, tweets, onAddTweet, onEditTweet, onDeleteTweet }) => {
  return (
    <div className="home-page">
      <div className="glass-card welcome-card">
        <h1>Inicio</h1>
        <div className="user-info">
          {user ? (
            <p>Bienvenido de nuevo, <strong>{user.username}</strong>. Revisa las últimas actualizaciones.</p>
          ) : (
            <p>Únete a la conversación. Inicia sesión para ver tu perfil y conectar con otros.</p>
          )}
        </div>
      </div>

      {user && <TweetForm onSubmit={onAddTweet} />}

      <TweetList 
        tweets={tweets} 
        currentUser={user} 
        onEdit={onEditTweet} 
        onDelete={onDeleteTweet} 
      />
    </div>
  );
};

export default Home;
