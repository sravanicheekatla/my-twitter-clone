import React from "react";

const TrendList = () => {
  return (
    <div className="trend-list">
      <h3>Trending</h3>
      <div className="trend-item">
        <strong>#JavaScript</strong>
        <span>  2,345 Tweets</span>
      </div>
      <div className="trend-item">
        <strong>#ReactJS</strong>
        <span>  1,234 Tweets</span>
      </div>
      <div className="trend-item">
        <strong>#WebDevelopment</strong>
        <span>  789 Tweets</span>
      </div>
    </div>
  );
};

export default TrendList;
