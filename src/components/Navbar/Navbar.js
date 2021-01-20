import React from "react";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <div className="navbar-container fade-in">
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

      <div
        onClick={() => props.ScrollTo(props.welcomeRef)}
        className="btt fade-in"
      >
        <i className="far fa-arrow-alt-circle-up fa-2x"></i>
      </div>
    </div>
  );
};

export default Navbar;
