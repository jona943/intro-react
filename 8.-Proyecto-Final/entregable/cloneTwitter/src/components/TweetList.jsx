import TweetItem from "./TweetItem";

const TweetList = ({ tweets, currentUser, onEdit, onDelete }) => {
  if (tweets.length === 0) {
    return (
      <div className="glass-card no-tweets">
        <p>No hay tweets para mostrar.</p>
      </div>
    );
  }

  return (
    <div className="tweet-list">
      {tweets.map((tweet) => (
        <TweetItem
          key={tweet.id}
          tweet={tweet}
          currentUser={currentUser}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TweetList;
