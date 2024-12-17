import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faRetweet, faHeart, } from "@fortawesome/free-solid-svg-icons";

const TweetInteractions = ({ tweet, onInteraction }) => {
  return (
    <div className="tweet-interactions">
       <button onClick={() => onInteraction(tweet.id, 'likes')}>
        <FontAwesomeIcon icon={faHeart} /> {tweet.likes}
      </button>
      <button onClick={() => onInteraction(tweet.id, 'comments')}>
        <FontAwesomeIcon icon={faComment} /> {tweet.comments.length}
      </button>
      <button onClick={() => onInteraction(tweet.id, 'retweets')}>
        <FontAwesomeIcon icon={faRetweet} /> {tweet.retweets}
      </button>
     
      
    </div>
  );
};

export default TweetInteractions;
