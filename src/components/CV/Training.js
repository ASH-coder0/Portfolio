// components/Training.js
import React from "react";

const Training = () => {
  return (
    <div className="education-card" style={{ maxWidth: "600px" }}>
      <div className="edu-title">Web Development Bootcamp</div>
      <div className="edu-institution">Nepathya College</div>
      <div className="edu-details">
        Intensive training covering modern web technologies
      </div>
      <ul style={{ margin: "15px 0 15px 20px", color: "#555" }}>
        <li>HTML5, CSS3, JavaScript, Node.js</li>
        <li>Built 3+ practice applications with real-world features</li>
        <li>Responsive design principles and cross-browser compatibility</li>
      </ul>
    </div>
  );
};

export default Training;
