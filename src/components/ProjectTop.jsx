import React from "react";
import CodeSolid from "../images/code.png";
import FeaturedProject from "./FeaturedProject";
import DATA from "../data";
import ViewMore from "./ViewMore";

function ProjectTop() {
  const featuredProjects = DATA.filter(project => project.isFeatured);
  const dataElement = featuredProjects.map((item) => (
    <FeaturedProject key={item.slug} {...item} />
  ));

  return (
    <div className="featured-container">
      <img src={CodeSolid} className="code-solid" />
      <p className="featured-title">Featured Projects</p>
      <div className="featured-grid">{dataElement}</div>
      <ViewMore to="/projects" text="View more projects" />
    </div>
  );
}

export default ProjectTop;
