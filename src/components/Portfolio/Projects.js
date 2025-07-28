// src/components/portfolio/Projects.js
import React from "react";
import { FaGithub } from "react-icons/fa";
import "./styles/Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio",
      description:
        "Responsive portfolio website showcasing projects and skills with modern design principles and smooth animations.",
      tech: ["HTML5", "CSS3", "JavaScript", "React"],
      github: "https://github.com/ASH-coder0/portfolio",
    },
    {
      title: "E-commerce Dashboard",
      description:
        "Admin dashboard for e-commerce site with product management, order tracking, and analytics features.",
      tech: ["Node.js", "Express", "MySql", "React"],
      github: "https://github.com/ASH-coder0/E-commerce",
    },
    {
      title: "Online movie app",
      description:
        "The web typically provides a platform for users to discover, browse, and stream movies/TV shows directly through a web browser",
      tech: ["Node.js", "Express", "MySql", "React"],
      github: "https://github.com/ASH-coder0/task-manager",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="section-header">
        <h2>Featured Projects</h2>
        <div className="divider"></div>
        <p>Some of my recent work</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className={`project-image type-${index % 3}`}></div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="more-projects">
        <a
          href="https://github.com/ASH-coder0"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          <FaGithub /> View More on GitHub
        </a>
      </div>
    </section>
  );
};

export default Projects;
