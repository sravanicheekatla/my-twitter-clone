import React, { useState } from "react";

const TweetInput = ({ onTweetSubmit }) => {
  const [tweet, setTweet] = useState("");

  // Handle the change in textarea
  const handleTweetChange = (e) => {
    setTweet(e.target.value);
  };

  // Handle tweet submission
  const handleTweetSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh on submit
    if (tweet.trim()) {
      onTweetSubmit(tweet); // Pass the tweet content to the parent component
      setTweet(""); // Clear input after submitting
    }
  };

  return (
    <div className="tweet-input">
      <form onSubmit={handleTweetSubmit}>
        <textarea
          value={tweet}
          onChange={handleTweetChange}
          placeholder="What's happening?"
          rows="3"
        />
        <button type="submit">Tweet</button>
      </form>
    </div>
  );
};

export default TweetInput;
