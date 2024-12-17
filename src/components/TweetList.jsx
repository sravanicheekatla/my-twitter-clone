import React from "react";
import Tweet from "./Tweet";

const TweetList = ({ tweets, onInteraction }) => {
  return (
    <div className="tweet-list">
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} onInteraction={onInteraction} />
      ))}
    </div>
  );
};

export default TweetList;
