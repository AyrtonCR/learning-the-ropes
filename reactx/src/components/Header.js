import { React } from "react";
// import onClick from "/button-one";

const Header = () => {
  return (
    <div class="my-header-container">
      <div class="my-logo-container">
        <img src="./logo.jpeg" className="logo-image" alt="logo"></img>
      </div>
      <div class="three-buttons-container">
        <a href="https://www.google.com" className="contact-button">
          CONTACT US
        </a>
        <a href className="referral-button">
          REFERRAL FORM
        </a>

        <a href className="donate-button">
          DONATE NOW
        </a>
        <p>Follow us on Facebook 03 379 2590 admin@dementiacanterbury.org.nz</p>
      </div>
    </div>
  );
};

export default Header;
