import { React } from "react";
import onClick from "/button-one";

const Header = () => {
  return (
    <div class="my-header-container">
      <div class="my-logo-container">
        <img src="./public/logo.jpeg" className="logo-image" alt="logo"></img>
      </div>
      <div class="three-buttons-container">
        <button onClick={onClick} className="contact-button">
          CONTACT US
        </button>
        <button onClick={onClick} className="referral-button">
          REFERRAL FORM
        </button>
        <button onClick={onClick} className="donate-button">
          DONATE NOW
        </button>
      </div>
      <p>Follow us on Facebook 03 379 2590 admin@dementiacanterbury.org.nz</p>
    </div>
  );
};

export default Header;
