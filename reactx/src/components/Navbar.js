import React from "react";

const Navbar = () => {
  return (
    <div className="my-navbar-container">
      <div className="navbar">
        <ol className="nav-dropdown">
          <ul className="list-button-1">Home</ul>
          <ul className="list-button-2">About Dementia</ul>
          <ul className="list-button-3">Living with Dementia</ul>
          <ul className="list-button-4">Supporting Someone with Dementia</ul>
          <ul className="list-button-5">Education & Resources</ul>
          <ul className="list-button-6">New and Events</ul>
          <ul className="list-button-7">Ways to Help</ul>
        </ol>
      </div>
      <div class="dropdown">
        <button class="dropdown">
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <a href="https://www.google.com">Link 1</a>
          <a href="https://www.google.com">Link 2</a>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
