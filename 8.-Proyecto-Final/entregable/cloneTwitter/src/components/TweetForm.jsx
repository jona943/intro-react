import { useState } from "react";

const TweetForm = ({ onSubmit, placeholder = "¿Qué está pasando?", initialValue = "" }) => {
  const [content, setContent] = useState(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      onSubmit(content);
      setContent("");
    }
  };

  return (
    <div className="glass-card tweet-form-container">
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder={placeholder}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="3"
        />
        <div className="tweet-form-actions">
          <button type="submit" disabled={!content.trim()}>
            Postear
          </button>
        </div>
      </form>
    </div>
  );
};

export default TweetForm;
