import React from "react";
import "./resourcecard.css";

const ResourceCard = ({ title, duration, author }) => {
  return (
    <div className="resource-card">
      <div className="resource-card-content">
        <h1>{title}</h1>
        <h3>{duration}</h3>
        <div className="resource-author">
          <div className="resource-author-profile"></div>
          <h3>{author}</h3>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
