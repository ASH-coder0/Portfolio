// components/SkillCategory.js
import React from "react";

const SkillCategory = ({ title, skills }) => {
  return (
    <div className="skill-category">
      <h3>{title}</h3>
      <ul className="skill-list">
        {skills.map((skill, index) => (
          <li key={index}>
            <i className={skill.icon}></i> {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCategory;
