import React from "react";

function Project({
  projectImg,
  title,
  description,
  githubUrl,
  liveUrl,
  skill,
  isLive,
}) {
  const skillLabel = skill.map((label, index) => (
    <span className={label} key={index}>
      {label}
    </span>
  ));

  let liveClassName = "live";
  if (!isLive) {
    liveClassName += " disabled";
  }
  return (
    <div>
      <div className="project-card">
        <img src={projectImg} className="project-img" />
        <p className="project-name">{title}</p>
        <p className="project-skill">{skillLabel}</p>
        <p className="project-desc">{description}</p>
        <a
          href={liveUrl}
          className={liveClassName}
          target={liveUrl ? "_blank" : undefined}
        >
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
