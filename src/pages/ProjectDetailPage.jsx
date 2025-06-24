import { useParams, Navigate } from "react-router-dom";
import data from "../data";
import "../css/project.css";

function ProjectDetailPage() {
  const { slug } = useParams();
  const project = data.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="project-detail-container">
      <h1>{project.title}</h1>

      <div>
        <ul className="project-detail-skill-list">
          {project.skill.map((s, i) => (
            <li key={i} className="project-detail-skill-item">
              {s}
            </li>
          ))}
        </ul>
      </div>

      <img
        className="project-detail-image"
        src={project.projectImg}
        alt={project.title}
      />

      <div
  className="project-detail-description"
  dangerouslySetInnerHTML={{ __html: project.fullDescription }}
/>

      <div>
        {project.githubUrl ? (
        <a
          href={project.githubUrl}
          className="project-detail-github"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source Code
        </a>
      ) : (
        <span className="project-detail-github-disabled">Source Code</span>
      )}

        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            className="project-detail-live"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
        ) : (
          <span className="project-detail-live-disabled">Live Demo</span>
        )}
      </div>
    </div>
  );
}

export default ProjectDetailPage;
