import React, { useState } from "react";
import data from "../data";
import Project from "../components/Project";

function ProjectsPage() {
  const [selectedType, setSelectedType] = useState("all");

  const types = ["all", "website", "mobile", ,"application","api"];

  const filteredProjects =
    selectedType === "all"
      ? data
      : data.filter((project) => project.type === selectedType);

  return (
    <div className="project-page">
      <h1 className="project-intro">PROJECTS</h1>

      {/* filter btn */}
      <div className="type-filters">
        {types.map((type) => (
          <button
            key={type}
            className={selectedType === type ? "filter-btn active" : "filter-btn"}
            onClick={() => setSelectedType(type)}
          >
            {type.toUpperCase()}
          </button>
        ))}
      </div>

      {/* project list*/}
      <div className="project-box">
        {filteredProjects.map((p, i) => (
          <Project key={i} {...p} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
