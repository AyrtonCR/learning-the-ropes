import { React } from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="my-header-container">
      <div className="my-logo-container">
        <img src="./logo.jpeg" className="logo-image" alt="logo"></img>
      </div>
      <div className="three-buttons-container">
        <div className="contact-button-container">
          <a href="https://www.google.com" className="contact-button">
            <strong>CONTACT US</strong>
          </a>
        </div>
        <div className="referral-button-container">
          <a href className="referral-button">
            <strong className="referral-button">REFERRAL FORM</strong>
          </a>
        </div>
        <div className="donate-button-container">
          <a href className="donate-button">
            <strong className="donate-button">DONATE NOW</strong>
          </a>
        </div>
        <p className="follow-us">
          Follow us on Facebook 03 379 2590 admin@dementiacanterbury.org.nz
        </p>
      </div>
    </div>
  );
};

export default Header;
