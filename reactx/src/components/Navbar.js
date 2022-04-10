import React, { useState } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <header>
        <nav className="navbar">
          <Link to="/" className="navbar-logo"></Link>
          <div className="menu-icon" onClick={handleClick}>
            <i
              className={click ? "fas fa-times" : "fas fa-bars"}
              onClick={handleClick}
            />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li
              className="nav-item"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About Dementia <i className="fas fa-caret-down" />
              </Link>
              {dropdown && <Dropdown />}
            </li>

            <li className="nav-item">
              <Link
                to="/living-with-dementia"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Living With Dementia
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/support-for-dementia"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Supporting Someone with Dementia
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/edu-and-resources"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Education & Resources
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/news-and-events"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                News & Events
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/ways-to-help"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Ways to Help
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          <Button />
        </nav>
      </header>
    </>
  );
}
export default Navbar;

// {
/* <div className="dropdown">
            <div className="blahblah" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
              <li className={click ? "nav-menu active" : "nav-menu"}>
                About Dementia
              </li>
            </div>
            <div id="myDropdown" className="dropdown-content">
              <a href="https://www.google.com">Link 1</a>
              <a href="https://www.google.com">Link 2</a>
              <a href="https://www.google.com">Link 3</a>
            </div>
          </div>

          <li className="list-button-3">Living with Dementia</li>
          <li className="list-button-4">Supporting Someone with Dementia</li>
          <li className="list-button-5">Education & Resources</li>
          <li className="list-button-6">New and Events</li>
          <li className="list-button-7">Ways to Help</li>
        </ul>
      </div>
    </> */
// }
