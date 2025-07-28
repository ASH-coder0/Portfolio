// components/Projects.js
import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projectsData = [
    {
      title: "Personal Portfolio Website",
      icon: "fas fa-globe",
      description:
        "A responsive website showcasing my projects and skills with modern design principles and smooth animations.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      link: "#",
    },
    {
      title: "E-commerce Dashboard",
      icon: "fas fa-shopping-cart",
      description:
        "Admin dashboard for e-commerce site with product management, order tracking, and analytics features.",
      tech: ["Node.js", "Express", "SQL"],
      link: "https://github.com/ASH-coder0/E-commerce",
    },
    {
      title: "Online movie app",
      icon: "fas fa-tasks",
      description:
        "the web typically provides a platform for users to discover, browse, and stream movies/TV shows directly through a web browser.",
      tech: ["JavaScript", "LocalStorage", "Bootstrap"],
      link: "https://github.com/ASH-coder0/Movie",
    },
  ];

  return (
    <div className="projects-grid">
      {projectsData.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default Projects;
