import React from "react";
import "./profile.css";
import menu from "./menu.png";
import like from "./like.png";
import follow from "./follow.png";
import views from "./views.png";
import Card from "../Profile Card/Card";

const Feed = () => {
  return (
    <div className="profile-page">
      <div className="navbar">
        <div className="nav-logo">
          <div className="logo-div"></div>
          <p id="fikra">
            <text id="be">Be</text>fikra
          </p>
        </div>
        <div className="nav-items">
          <div className="nav-item">
            <input type="text" id="nav-search" />
          </div>
          <div className="nav-item">
            <p>Login/Register</p>
          </div>
          <div className="nav-item">
            <h3>Menu</h3>
            <img src={menu} alt="menu" />
          </div>
        </div>
      </div>
      <div className="profile-section-main">
        <div className="profile-description">
          <div className="profile-picture">
            <div className="profile-pic-div">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div className="profile-role">
              <img
                src="https://img.icons8.com/glyph-neue/32/undefined/crown.png"
                alt="admin"
              />
              <h3>ADMIN</h3>
            </div>
            <div id="profile-btns">
              <button id="follow-btn">Follow</button>
              <button id="message-btn">Message</button>
            </div>
          </div>
          <div className="profile-right-div">
            <div className="about-user">
              <h1>DINESH DHRUV</h1>
              <p>Java Developer</p>
              <text>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Asperiores beatae maxime quam quidem ratione labore doloremque,
                numquam ipsam? Ratione dolorem repudiandae vel provident rem
                soluta quas laboriosam eaque ut, fuga error dignissimos impedit
                eius architecto facilis ab ipsam! Ipsam alias quos, eveniet
                vitae rerum fugiat facere blanditiis quo assumenda aliquid.
              </text>
            </div>
          </div>
        </div>
        <div className="profile-actions">
          <div className="action-btn">
            <img src={like} alt="like" />
            <p>144 likes</p>
          </div>
          <div className="action-btn">
            <img src={follow} alt="follow" />
            <p>38 followers</p>
          </div>
          <div className="action-btn">
            <img src={views} alt="views" />
            <p>1000 view</p>
          </div>
        </div>
      </div>
      <div className="profile-projects">
        <h1>Projects</h1>
        <div>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className="profile-blogs">
        <h1>Blogs</h1>
        <div>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className="profile-clans">
        <h1>Clans</h1>
        <div>
          <div className="clan"></div>
          <div className="clan"></div>
          <div className="clan"></div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
