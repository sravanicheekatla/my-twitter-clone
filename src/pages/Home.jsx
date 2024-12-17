import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import TweetInput from "../components/TweetInput";
import TweetList from "../components/TweetList";
import FollowSuggestions from "../components/FollowSuggestions";
import TrendList from "../components/TrendList";
import Header from "../components/Header";
import { ThemeProvider } from "../context/ThemeContext";

const Home = () => {
  const [tweets, setTweets] = useState([
    {
      id: 1,
      user: {
        name: "Adhya",
        username: "Adhya",
      },
      content: "Have a nice day!",
      likes: 10,
      retweets: 2,
      comments: ["Nice tweet!"],
    },
    {
      id: 2,
      user: {
        name: "aaradhana",
        username: "radha",
        
      },
      content: "Hello Twitter!",
      likes: 5,
      retweets: 1,
      comments: ["First comment!", "Another one."],
    },
  ]);

  const handleTweetSubmit = (tweetContent) => {
    const newTweet = {
      id: tweets.length + 1,
      user: {
        name: "New User",
        username: "newuser",
      },
      content: tweetContent,
      likes: 0,
      retweets: 0,
      comments: [],
    };
    setTweets([newTweet, ...tweets]); // Add new tweet at the top of the list
  };

  const handleInteraction = (id, type) => {
    setTweets((prevTweets) =>
      prevTweets.map((tweet) => {
        if (tweet.id === id) {
          // Update the count based on the interaction type
          switch (type) {
            case "likes":
              return { ...tweet, likes: tweet.likes + 1 };
            case "retweets":
              return { ...tweet, retweets: tweet.retweets + 1 };
            case "comments":
              return { ...tweet, comments: [...tweet.comments, `Comment ${tweet.comments.length + 1}`] };
            default:
              return tweet;
          }
        }
        return tweet;
      })
    );
  };

  return (
    <ThemeProvider>
      <div className="home">
        <Sidebar />
        <div className="main-content">
          <Header />
          <TweetInput onTweetSubmit={handleTweetSubmit} />
          <TweetList tweets={tweets} onInteraction={handleInteraction} />
        </div>
        <div className="right-sidebar">
          <FollowSuggestions />
          <TrendList />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Home;
