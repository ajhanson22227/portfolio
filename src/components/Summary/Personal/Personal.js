import React from "react";
import "./Personal.css";
import facepic from "../../../assets/facepic.png";

const Personal = () => {
  return (
    <div className="personal-container df-row">
      <div className="personal-picture">
        <img src={facepic} alt="adam, the site creator" />
        <div className="icon-container">
          <a
            href="https://github.com/ajhanson22227"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ajhanson22227/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </div>
      </div>
      <div className="about-content">
        <div className="about-title">About Me</div>
        <div className="about-text">
          Hi, I am Adam!
          <br />I am a fullstack web developer with a degree in Computer Science
          from Dakota State University. I find it exciting when I run into a
          problem that I feel could be solved using my programming knowledge.
          This drive has ended up with helpful projects such as an app used in
          my current office and a Discord bot that makes some tabletop games
          easier.
          {/* I graduated with a Bachelor's of Science in Computer Science from
          Dakota State University in 2018. One of my favorite things about
          programming is typing life into what was once an empty file, and
          watching the changes happen over time. <br /> <br />
          Computers and technology have been my hobby since before I could walk
          which is why I became a programmer. */}
        </div>
      </div>
    </div>
  );
};

export default Personal;
