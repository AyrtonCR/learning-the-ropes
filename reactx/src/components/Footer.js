import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-content-images">
          <img
            className="footer-content-images-one"
            src={require("../images/footer-logo.jpeg")}
            alt="footer-logo"
          />
          <img
            className="footer-content-images-two"
            src={require("../images/footer-logo-two.jpeg")}
            alt="footer-logo-two"
          />
        </div>
        <div className="footer-content-contact">
          <h2 className="footer-content-heading">Contact</h2>
          <p className="footer-content-text">
            <strong>Canterbury:</strong> 0800 444 776{" "}
          </p>
          <p className="footer-content-text">
            <strong>West Coast:</strong> 0800 259 226{" "}
          </p>{" "}
          <p className="footer-content-text">
            3/49 Sir William Pickering Drive, Burnside, Christchurch
          </p>
          <p className="footer-content-text">
            {" "}
            PO Box 20567, Bishopdale, Christchurch 8543{" "}
          </p>
        </div>
        <div className="footer-content-menu">
          <h2 className="footer-content-heading">Menu</h2>
          <ul className="footer-menu-links">
            <li className="footer-menu-links-items">Get Email Updates</li>
            <li className="footer-menu-links-items">Media</li>
            <li className="footer-menu-links-items">Terms and Conditions</li>
            <li className="footer-menu-links-items">Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-content-buttons">
          <img
            className="footer-facebook-button"
            src={require("../images/icon-facebook.jpeg")}
            alt="facebook-logo"
          />
          <button className="footer-donate-button">
            <strong>DONATE NOW</strong>
          </button>
          <button className="footer-referral-button">
            <strong>REFERRAL FORM</strong>
          </button>
        </div>
      </div>
    </div>
  );
}
