import React, { useState } from "react";
import "./Project.css";
import constructionPic from "../../assets/conStruction.png";
import tooDOo from "../../assets/TooDoo800.png";
import brickbreak from "../../assets/brickbreaker.png";
import cakeCard from "../../assets/cakeCard.png";
import discordBot from "../../assets/discordBot.png";
const Project = () => {
  return (
    <div className="project-main-container">
      <div className="topline"></div>
      <div className="top-projects-title">PROJECTS</div>

      <div className="projects-container">
        {/* Proj 1 */}
        <div className="project">
          <div className="project-image">
            <img src={constructionPic} alt="construction calculator preview" />
          </div>
          <div className="project-info">
            <div className="project-title">Project 1</div>
            <div className="project-tools">Make With CSS HTML JS</div>
            <div className="project-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </div>

            <div className="project-view">
              <div className="view-button">View </div>
              <div className="view-button"> Repo</div>
            </div>
          </div>
        </div>

        {/* Proj 2 */}
        <div className="project">
          <div className="project-image">
            <img src={tooDOo} alt="construction calculator preview" />
          </div>
          <div className="project-info">
            <div className="project-title">Project 2</div>
            <div className="project-tools">Make With CSS HTML JS</div>
            <div className="project-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </div>

            <div className="project-view">
              <div className="view-button">View </div>
              <div className="view-button"> Repo</div>
            </div>
          </div>
        </div>

        {/* Proj 3 */}
        <div className="project">
          <div className="project-image">
            <img src={brickbreak} alt="construction calculator preview" />
          </div>
          <div className="project-info">
            <div className="project-title">Project 3</div>
            <div className="project-tools">Make With CSS HTML JS</div>
            <div className="project-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </div>

            <div className="project-view">
              <div className="view-button">View </div>
              <div className="view-button"> Repo</div>
            </div>
          </div>
        </div>

        {/* Proj 4 */}
        <div className="project">
          <div className="project-image">
            <img src={discordBot} alt="construction calculator preview" />
          </div>
          <div className="project-info">
            <div className="project-title">Project 4</div>
            <div className="project-tools">Make With CSS HTML JS</div>
            <div className="project-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </div>

            <div className="project-view">
              <div className="view-button">View </div>
              <div className="view-button"> Repo</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
