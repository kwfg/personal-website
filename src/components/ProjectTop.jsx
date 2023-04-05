import React from "react";
import CodeSolid from "../images/code.png";
import Project from "./Project";
import DATA from "../data";

function ProjectTop() {
  const dataElement = DATA.map((item) => {
    return <Project {...item} />;
  });

  return (
    <div>
      <img src={CodeSolid} className="code-solid" />
      <p className="project-intro">PROJECTS</p>
      <div className="project-box">{dataElement}</div>
    </div>
  );
}

export default ProjectTop;
