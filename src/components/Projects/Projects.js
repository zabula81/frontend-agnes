import React from "react";
import "./Projects.css";
import { useStateValue } from "../../assets/utility/StateProvider";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Project from "../Project/Project";
//images
import reactAll from "../../assets/images/react-all.webp";
import jsAll from "../../assets/images/ja-all.webp";
function Projects() {
  const [{ reactIcon, pureIcons, isEnglish }] = useStateValue();
  return (
    <div className="projects" id="my-projects">
      {!isEnglish ? <h3>Moje Projekty</h3> : <h3>My Projects</h3>}
      {!isEnglish ? (
        <div className="projects__container">
          <Project
            icons={reactIcon}
            title="Projekty React"
            img={reactAll}
            url="/projects/react"
            description="W tym miejscu znajdują się wybrane projekty wykonane w React."
          />
          <Project
            icons={pureIcons}
            title="Projekty JS, HTML, CSS"
            img={jsAll}
            url="/projects/purejs"
            description="W tym miejscu znajdują się wybrane projekty wykonane za pomocą HTML, CSS i czystego JavaScript."
          />
        </div>
      ) : (
        <div className="projects__container">
          <Project
            icons={reactIcon}
            title="React projects"
            img={reactAll}
            url="/projects/react"
            description="Here you will find a selection of projects made in React."
          />
          <Project
            icons={pureIcons}
            title="JS, HTML, CSS projects"
            img={jsAll}
            url="/projects/purejs"
            description="Here you will find a selection of projects made using HTML, CSS and pure JavaScript."
          />
        </div>
      )}
      <div className="projects__bottom">
        <a
          href="https://github.com/frontendagnes?tab=repositories"
          alt="All Projects"
        >
          <div>
            <ArrowDownwardIcon sx={{ fontSize: 80 }} />
            <p>More..</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Projects;
