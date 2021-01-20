import React from "react";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <div
          onClick={() => props.ScrollTo(props.aboutRef)}
          className="navbar-item"
        >
          About
        </div>
        <div
          onClick={() => props.ScrollTo(props.projectRef)}
          className="navbar-item"
        >
          Projects
        </div>
        <div
          onClick={() => props.ScrollTo(props.contactRef)}
          className="navbar-item"
        >
          Contact
        </div>
      </div>
    </div>
  );
};

export default Navbar;
