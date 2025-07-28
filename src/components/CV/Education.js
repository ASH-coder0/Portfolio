// components/Education.js
import React from "react";
import EducationCard from "../EducationCard";

const Education = () => {
  const educationData = [
    {
      title: "Bachelor in Computer Science",
      institution: "Tribhuvan University",
      details: [
        "2022 - Present (Currently: 6th Semester)",
        "Coursework: Web Development, Algorithms, Database Systems",
      ],
    },
    {
      title: "Higher Secondary (+2)",
      institution: "Tilottama College",
      details: ["Passed: 2020 (BS 2077)"],
      gpa: "GPA: 2.95",
    },
    {
      title: "Secondary Education (SEE)",
      institution: "Horizon School",
      details: ["Passed: 2017 (BS 2074)"],
      gpa: "GPA: 3.10",
    },
  ];

  return (
    <div className="education-grid">
      {educationData.map((edu, index) => (
        <EducationCard key={index} {...edu} />
      ))}
    </div>
  );
};

export default Education;
