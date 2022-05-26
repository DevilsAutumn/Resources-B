import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-content-left">
          <p>Wanna Know more?</p>
          <a href="/">
            <p>
              <u>Head here.</u>
            </p>
          </a>
          <div className="footer-logo ">
            <div className="logo-div"></div>
            <h1>Befikra</h1>
          </div>
        </div>
        <div className="footer-content-right">
          <div className="footer-right-links">
            <a href="/products">product</a>
            <a href="/support">support</a>
            <a href="/company">company</a>
          </div>
          <p id="newsletter-head">Subscribe to our newsletter.</p>
          <p>Email </p>
          <input type="text" />
          <p>+91 70541 85330</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
