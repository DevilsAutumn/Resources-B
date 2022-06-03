import React from "react";
import FeedCard from "../Feed card/FeedCard";
import "./feed.css";

const Feed = () => {
  return (
    <div className="feed-page">
      <div className="right-col">
        <div className="feed-page-search nav-item ">
          <input type="text" id="feed-search" />
        </div>
        <div className="right-col-items">
          <p>Profile</p>
          <p>Messages</p>
          <p>Friends</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
        </div>
        <hr />
        <div className="right-col-items">
          <p>Communities</p>
          <p>Events</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
        </div>
      </div>
      <div className="left-col">
        <FeedCard
          title="sample card"
          description="This seems to be a long project, make sure you pay clear attention to all steps and don’t lose motivation."
        />
        <FeedCard
          title="sample card"
          description="This seems to be a long project, make sure you pay clear attention to all steps and don’t lose motivation."
        />
        <FeedCard
          title="sample card"
          description="This seems to be a long project, make sure you pay clear attention to all steps and don’t lose motivation."
        />
        <FeedCard
          title="sample card"
          description="This seems to be a long project, make sure you pay clear attention to all steps and don’t lose motivation."
        />
        <FeedCard
          title="sample card"
          description="This seems to be a long project, make sure you pay clear attention to all steps and don’t lose motivation."
        />
        <FeedCard
          title="sample card"
          description="This seems to be a long project, make sure you pay clear attention to all steps and don’t lose motivation."
        />
      </div>
    </div>
  );
};

export default Feed;
