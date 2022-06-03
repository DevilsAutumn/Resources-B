import React from "react";
import "./feedcard.css";

const FeedCard = ({ title, description }) => {
  return (
    <div className="feed-card">
      <div className="feed-card-left"></div>
      <div className="feed-card-content">
        <div className="feed-card-title">
          <div className="feed-card-pic"></div>
          <h2>{title}</h2>
        </div>
        <div className="feed-card-description">{description}</div>
        <hr />
        <div className="feed-card-icons">
          <img src="https://img.icons8.com/ios/40/undefined/like--v1.png" />
          <img src="https://img.icons8.com/ios/40/undefined/comments.png" />
          <img src="https://img.icons8.com/ios/40/undefined/bookmark-ribbon--v1.png" />
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
