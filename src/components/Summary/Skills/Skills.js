import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills-outside-container">
      <div className="skills-inside-container">
        <div className="skills-title">Languages, Frameworks & Libraries</div>
        <div className="skills-container">
          <p className="skill b-right">HTML</p>
          <p className="skill b-right">CSS</p>
          <p className="skill b-right">JS</p>
          <p className="skill b-right">React</p>
          <p className="skill b-right">NodeJS + Express</p>
          <p className="skill b-right">MongoDB + Mongoose</p>
          <p className="skill">C++</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
