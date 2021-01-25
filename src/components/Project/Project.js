import React from "react";
import "./Project.css";
import constructionPic from "../../assets/Construction.jpg";
import tooDOo from "../../assets/TooDoo.jpg";
import brickbreak from "../../assets/brickbreaker.jpg";
import discordBot from "../../assets/botty.jpg";

const Project = (props) => {
  return (
    <div ref={props.projectRef} className="project-main-container">
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
            <div className="project-line"></div>
            <div className="project-desc">
              Calculator made to reduce office time used to figure estimates for
              gravel-to-pavement roads and alleys. Requests for estimates are
              common in the summer season, and for each one, we have to write
              down the same dozen formulas to figure the quantities. This
              calculator takes the length, width, and depth of the roadway and
              outputs the estimated material quantities that would be requried.
            </div>

            <div className="project-view">
              <a
                href="https://constructionnumbers.web.app/#/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="view-button">View</div>
              </a>
              <a
                href="https://github.com/ajhanson22227/constructionNumbers"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="view-button">Repo</div>
              </a>
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
            <div className="project-title">Too-Doo</div>
            <div className="project-tools">
              JS / React / Express / MongoDB / HTML/ CSS{" "}
            </div>
            <div className="project-line"></div>
            <div className="project-desc">
              Too-Doo is a todo list with unique projects for individual users.
              New users will create an account which will start with 0 projects
              and they may begin by creating a new project. Each project have
              their own tasks which can be sorted by priority and checked off
              when completed.
            </div>

            <div className="project-view">
              <a
                href="https://ajhanson22227.github.io/ToDo-List-React"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="view-button">View</div>
              </a>
              <a
                href="https://github.com/ajhanson22227/ToDo-List-React"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="view-button">Repo</div>
              </a>
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
            <div className="project-line"></div>
            <div className="project-desc">
              Brick Breaker was inspired by the original Breakout game. It
              involves using a paddle at the bottom, to hit the ball into the
              bricks up top. I gave the bricks a colored 'life' system which
              changes their color when hit until they run out of lives.
            </div>

            <div className="project-view">
              <a
                href="https://github.com/ajhanson22227/Brick-Breaker"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="view-button">Repo</div>
              </a>
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
            <div className="project-line"></div>
            <div className="project-desc">
              This Discord bot was made for my tabletop game group of friends.
              When we started a new game which had a complicated dice system
              where there were no online solutions, I decided to make this bot.
              The bot rolls X amount of d10 dice with a success vs failure
              system and outputs whether it passed or failed. The bot also plays
              selected music in the user's voice channel.
            </div>

            <div className="project-view">
              <a
                href="https://github.com/ajhanson22227/discord_bot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="view-button">Repo</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
