import React from "react";
import "./Welcome.css";

const WelcomePage = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-content">
        HELLO I AM <span className="bold-text">Depressed</span>
      </div>
      <div className="welcome-content">
        I AM A <span className="bold-text">FULL STACK DEVELOPER</span>
      </div>
      <div className="welcome-content arrow arrow-down"></div>
    </div>
  );
};

export default WelcomePage;
