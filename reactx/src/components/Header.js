import { React } from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="my-header-container">
      <div className="my-logo-container">
        <img src="./logo.jpeg" className="logo-image" alt="logo"></img>
      </div>
      <div className="three-buttons-container">
        <div className="contact-and-referral">
          <a href="https://www.google.com" className="contact-button">
            <strong>CONTACT US</strong>
          </a>
          <a href className="referral-button">
            <strong>REFERRAL FORM</strong>
          </a>
        </div>
        <div className="donate-button-container">
          <a href className="donate-button">
            <strong>DONATE NOW</strong>
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
