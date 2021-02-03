import React from "react";
import "./Personal.css";
import "../Skills/Skills.css";
import facepic from "../../../assets/boomboom-min.jpg";

const Personal = () => {
  return (
    <div>
      <div className="contact-topline"></div>
      <div className="personal-about">ABOUT ME</div>
      <div className="personal-container">
        <div className="personal-picture">
          <img
            src={facepic}
            alt="Adam Hanson staring creepily into the camera"
          />
        </div>

        <div className="personal-icons df row flex-center">
          {" "}
          <a
            href="https://github.com/ajhanson22227"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github fa-2x picon"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ajhanson22227/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin fa-2x picon"></i>
          </a>
        </div>

        <div className="personal-about-content">
          Hi, I am Adam!
          <br /> I am a fullstack developer with a degree in Computer Science
          from Dakota State University. I am the kind of person that enjoys
          running into real world problems with no available solutions. This
          allows me to create my own which end up being used by others. An
          example of this is a calculator for construction projects used in my
          work place and a Discord bot used by a group of friends for our
          table-top games.
        </div>

        <div className="personal-skills-title">
          Languages, Libraries & Frameworks
        </div>
        <div className="personal-skills-container">
          <div className="skills-row">
            <p className="skill b-right">HTML</p>
            <p className="skill b-right">CSS</p>
            <p className="skill b-right">JS</p>
            <p className="skill b-right">React</p>
            <p className="skill">NodeJS + Express</p>
          </div>
          <div className="skills-row">
            {" "}
            <p className="skill b-right">MongoDB + Mongoose</p>
            <p className="skill">C++</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personal;
