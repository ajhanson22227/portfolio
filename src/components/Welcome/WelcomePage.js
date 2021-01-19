import React from "react";
import "./Welcome.css";

const WelcomePage = (props) => {
  return (
    <div className="welcome-container">
      <div className="welcome-content">
        HELLO I AM <span className="bold-text">ADAM HANSON</span>
      </div>
      <div className="welcome-content">
        I AM A <span className="bold-text">FULL STACK DEVELOPER</span>
      </div>
      <div
        className="welcome-content arrow-container"
        onClick={() => props.ScrollTo(props.aboutRef)}
      >
        <div className="welcome-content arrow arrow-down bounce-2"></div>
      </div>
    </div>
  );
};

export default WelcomePage;
