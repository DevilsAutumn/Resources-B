import React from "react";

const Header = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <div className="logo-div"></div>
        <p>Befikra</p>
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
          <img
            src="https://img.icons8.com/external-jumpicon-glyph-ayub-irawan/35/000000/external-_18-user-interface-jumpicon-(glyph)-jumpicon-glyph-ayub-irawan.png"
            alt="menu"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
