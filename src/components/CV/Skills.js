// components/Skills.js
import React from "react";
import SkillCategory from "./SkillCategory";

const Skills = () => {
  const skillsData = [
    {
      title: "Frontend Development",
      skills: [
        { icon: "fab fa-html5", name: "HTML5" },
        { icon: "fab fa-css3-alt", name: "CSS3" },
        { icon: "fab fa-js", name: "JavaScript" },
        { icon: "fas fa-mobile-alt", name: "Responsive Design" },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { icon: "fab fa-node-js", name: "Node.js" },
        { icon: "fas fa-database", name: "REST API Development" },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { icon: "fab fa-github", name: "GitHub" },
        { icon: "fas fa-terminal", name: "VS Code" },
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        { icon: "fas fa-users", name: "Team Collaboration" },
        { icon: "fas fa-lightbulb", name: "Problem Solving" },
        { icon: "fas fa-clock", name: "Time Management" },
        { icon: "fas fa-comments", name: "Technical Communication" },
      ],
    },
  ];

  return (
    <div className="skills-container">
      {skillsData.map((category, index) => (
        <SkillCategory
          key={index}
          title={category.title}
          skills={category.skills}
        />
      ))}
    </div>
  );
};

export default Skills;
