import React from "react";
import TweetInteractions from "./TweetInteractions";

const Tweet = ({ tweet, onInteraction }) => {
  return (
    <div className="tweet">
      <div className="tweet-header">
        <div>
        <i class="fa-solid fa-cloud-moon"></i>
          <strong>  {tweet.user.name}</strong>
          
        </div>
      </div>
      <p>{tweet.content}</p>
      
      <TweetInteractions tweet={tweet} onInteraction={onInteraction} />
    </div>
  );
};

export default Tweet;
