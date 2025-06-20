import React from "react";
import { Link } from "react-router-dom";

function FeaturedProject({
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
    <div className="featured-project-card">
      <div className="featured-left">
        <h2 className="featured-name">{title}</h2>
        <p className="featured-skill">{skillLabel}</p>
        <p className="featured-desc">{description}</p>
<div className="featured-links">
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
      <img src={projectImg} alt={title} className="featured-img" />
    </div>
  );
}

export default FeaturedProject;
