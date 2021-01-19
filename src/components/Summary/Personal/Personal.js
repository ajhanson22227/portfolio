import React from "react";
import "./Personal.css";
import facepic from "../../../assets/facepic.png";

const Personal = () => {
  return (
    <div className="personal-container df-row">
      <div className="personal-picture">
        <img src={facepic} alt="adam, the site creator" />
      </div>
      <div className="about-content">
        <div className="about-title">About yo</div>
        <div className="about-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </div>
        <div className="icon-container">
          <i class="fab fa-github fa-2x"></i>
          <i class="fab fa-linkedin fa-2x"></i>
        </div>
      </div>
    </div>
  );
};

export default Personal;
