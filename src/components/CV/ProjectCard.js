// components/ProjectCard.js
import React from "react";

const ProjectCard = ({ title, icon, description, tech, link }) => {
  return (
    <div className="project-card">
      <div className="project-title">
        <i className={icon}></i> {title}
      </div>
      <p>{description}</p>
      <div className="tech-stack">
        {tech.map((item, i) => (
          <span key={i} className="tech-item">
            {item}
          </span>
        ))}
      </div>
      <a
        href={link}
        target="_blank" // Opens link in new tab
        rel="noopener noreferrer"
        className="project-link"
      >
        <i className="fab fa-github"></i> View on GitHub
      </a>
    </div>
  );
};

export default ProjectCard;
