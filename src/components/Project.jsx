import React from "react";
import { Link } from "react-router-dom";

function Project({
  projectImg,
  title,
  description,
  githubUrl,
  liveUrl,
  skill,
  isLive,
  slug,
}) {
  const skillLabel = skill.map((label, index) => (
    <span className={label} key={index}>
      {label}
    </span>
  ));

  let liveClassName = "live";
  if (!isLive) {
    liveClassName += " disabled";
    liveUrl = undefined;
  }

  return (
   <div className="project-card">
  <img src={projectImg} className="project-img" />

  <div className="project-content">
    <p className="project-name">{title}</p>
    <p className="project-skill">{skillLabel}</p>
    <p className="project-desc">{description}</p>
  </div>


  <div className="project-buttons">
    {isLive && (
      <a href={liveUrl} className="live" target="_blank" rel="noopener noreferrer">
        Live Demo
      </a>
    )}
    {githubUrl && (
      <a href={githubUrl} className="github" target="_blank">
        Source Code
      </a>
    )}
    <Link to={`/projects/${slug}`} className="read-more-btn">
      Read More
    </Link>
  </div>
</div>

  );
}

export default Project;
