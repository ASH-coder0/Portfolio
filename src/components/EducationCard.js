// components/EducationCard.js
import React from "react";

const EducationCard = ({ title, institution, details, gpa }) => {
  return (
    <div className="education-card">
      <div className="edu-title">{title}</div>
      <div className="edu-institution">{institution}</div>
      {details.map((detail, i) => (
        <div key={i} className="edu-details">
          {detail}
        </div>
      ))}
      {gpa && <div className="edu-gpa">{gpa}</div>}
    </div>
  );
};

export default EducationCard;
