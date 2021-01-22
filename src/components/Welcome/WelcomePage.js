import React from "react";
import "./Welcome.css";

const WelcomePage = (props) => {
  return (
    <div className="welcome-container" ref={props.welcomeRef}>
      <div className="welcome-content">
        Hello, I am <span className="bold-text">ADAM HANSON</span>
      </div>
      <div className="welcome-content">
        I am a <span className="bold-text">FULL STACK DEVELOPER</span>
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
