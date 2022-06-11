import React from "react";
import "./card.css";

const Card = () => {
  return (
    <div className="p-content-card">
      <div>
        <img
          id="p-content-image"
          src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          alt=""
        />
      </div>
      <h1>Markdown-menu</h1>
      <text>
        Badges for your personal developer branding, profile, and projects.
      </text>
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAAYklEQVRIie3TMQ6AIBBE0R8Lzr6ew7MBpzBYaKUUSNxtnJfQTMEUMCDylIAVKEAG7MrcGdBuxyKKS6e4vr1kmShunWyPKN4Gs88lzjfNBH+u/9GOtWM32nEY7Vg7dqMdy5ADBdQ7vHdVEbMAAAAASUVORK5CYII="
        alt="more"
        id="p-content-more-btn"
      />
    </div>
  );
};

export default Card;
