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
            <div className="project-title">Construction Calculator</div>
            <div className="project-tools">Dart / Flutter</div>
            <div className="project-desc">
              Calculator made to reduce office time used to figure estimates for
              gravely-to-pavement roads and alleys. Requests for estimates are
              common in the summer season, and each time we have to write the
              same formulas every time. This calculator takes the length, width,
              and depth of the roadway and outputs the estimated materials that
              would be requried.
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
            <img
              src={tooDOo}
              alt="screenshot of the Too-Doo app project page"
            />
          </div>
          <div className="project-info">
            <div className="project-title">Too-Doo List</div>
            <div className="project-tools">
              JS / React / Express / MongoDB / HTML/ CSS{" "}
            </div>
            <div className="project-desc">
              Too-Doo is a todo list with unique projects for individual users.
              New users will create an account which will start with 0 projects
              and they may begin by creating a new project. Each project have
              their own tasks which can be sorted by priority and checked off
              when completed.
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
            <img src={brickbreak} alt="Screenshot of the brick breaker game" />
          </div>
          <div className="project-info">
            <div className="project-title">Brick Breaker</div>
            <div className="project-tools">C++ / SFML</div>
            <div className="project-desc">
              Brick Breaker was inspired by the original Breakout game. It
              involves using a paddle at the bottom, to hit the ball into the
              bricks up top. I gave the bricks a colored 'life' system which
              changes their color when hit until they run out of lives.
            </div>

            <div className="project-view">
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
            <div className="project-title">Discord Bot</div>
            <div className="project-tools">JS</div>
            <div className="project-desc">
              This Discord bot was made for my tabletop game group of friends.
              When we started a new game which had a complicated dice system
              where there were no online solutions, I decided to make this bot.
              The bot rolls X amount of d10 dice with a success vs failure
              system and outputs whether it passed or failed. The bot also plays
              selected music in the user's voice channel.
            </div>

            <div className="project-view">
              <div className="view-button"> Repo</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
