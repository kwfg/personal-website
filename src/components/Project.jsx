import React from "react";

import ProjectImg from "../images/projectimg.png";

function Project({
  projectImg,
  title,
  description,
  githubUrl,
  liveUrl,
  skill,
}) {
  return (
    <div>
      <div className="project-card">
        <img src={projectImg} className="project-img" />
        <p className="project-name">{title}</p>
        <p className="project-skill">{skill}</p>
        <p className="project-desc">{description}</p>
        <a href={liveUrl} className="live">
          Live Demo
        </a>
        <a href={githubUrl} className="github">
          Source Code
        </a>
      </div>
    </div>
  );
}

export default Project;
