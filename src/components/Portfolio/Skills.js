// src/components/portfolio/Skills.js
import React from "react";
import "./styles/Skills.css";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", iconClass: "html" },
        { name: "CSS3", iconClass: "css" },
        { name: "JavaScript", iconClass: "js" },
        // { name: "React", iconClass: "react" },
        { name: "Bootstrap", iconClass: "bootstrap" },
        { name: "Responsive Design", iconClass: "responsive" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", iconClass: "node" },
        { name: "Express", iconClass: "express" },
        { name: "mySQL", iconClass: "mySQL" },
        { name: "REST APIs", iconClass: "rest" },
      ],
    },
    {
      title: "Tools & Other",
      skills: [
        { name: "Git & GitHub", iconClass: "git" },
        { name: "VS Code", iconClass: "vs" },
        { name: "NPM", iconClass: "npm" },
        { name: "Figma", iconClass: "figma" },
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="section-header">
        <h2>My Skills</h2>
        <div className="divider"></div>
        <p>Technologies I work with</p>
      </div>

      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div className="skill-category" key={index}>
            <h3>{category.title}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, i) => (
                <div className="skill-item" key={i}>
                  <div className={`skill-icon ${skill.iconClass}`}></div>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
