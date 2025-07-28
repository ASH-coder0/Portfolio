// components/Section.js
import React from "react";
import {
  FaBullseye,
  FaGraduationCap,
  FaLaptopCode,
  FaProjectDiagram,
  FaCertificate,
  FaInfoCircle,
  FaFileSignature,
} from "react-icons/fa";

const Section = ({ icon, title, children }) => {
  const getIcon = () => {
    switch (icon) {
      case "bullseye":
        return <FaBullseye />;
      case "graduation-cap":
        return <FaGraduationCap />;
      case "laptop-code":
        return <FaLaptopCode />;
      case "project-diagram":
        return <FaProjectDiagram />;
      case "certificate":
        return <FaCertificate />;
      case "info-circle":
        return <FaInfoCircle />;
      case "file-signature":
        return <FaFileSignature />;
      default:
        return null;
    }
  };

  return (
    <div className="section">
      <h2>
        <span className="icon-wrapper">{getIcon()}</span>
        {title}
      </h2>
      {children}
    </div>
  );
};

export default Section;
