import { React } from "react";
// import onClick from "/button-one";

const Header = () => {
  return (
    <div class="my-header-container">
      <div class="my-logo-container">
        <img src="./logo.jpeg" className="logo-image" alt="logo"></img>
      </div>
      <div class="three-buttons-container">
        <div class="contact-and-referral">
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
