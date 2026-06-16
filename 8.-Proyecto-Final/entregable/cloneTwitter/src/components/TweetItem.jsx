import { useState } from "react";

const TweetItem = ({ tweet, currentUser, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(tweet.content);

  const isOwner = currentUser?.username === tweet.author;

  const handleUpdate = () => {
    if (editContent.trim()) {
      onEdit(tweet.id, editContent);
      setIsEditing(false);
    }
  };

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleString();
  };

  return (
    <div className="glass-card tweet-item">
      <div className="tweet-header">
        <span className="tweet-author">@{tweet.author}</span>
        <span className="tweet-date">{formatDate(tweet.createdAt)}</span>
      </div>

      <div className="tweet-content">
        {isEditing ? (
          <div className="edit-container">
            <textarea
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
              rows="2"
            />
            <div className="edit-actions">
              <button className="save-btn" onClick={handleUpdate}>Guardar</button>
              <button className="cancel-btn" onClick={() => setIsEditing(false)}>Cancelar</button>
            </div>
          </div>
        ) : (
          <p>{tweet.content}</p>
        )}
      </div>

      {isOwner && !isEditing && (
        <div className="tweet-actions">
          <button className="action-btn edit" onClick={() => setIsEditing(true)}>
            <i className="fa-solid fa-pen"></i>
          </button>
          <button className="action-btn delete" onClick={() => onDelete(tweet.id)}>
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default TweetItem;
