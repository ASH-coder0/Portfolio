// src/components/portfolio/About.js
import React from "react";
import "./styles/About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-header">
        <h2>About Me</h2>
        <div className="divider"></div>
      </div>
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a passionate Computer Science student currently in my 6th
            semester at Tribhuvan University. My journey in web development
            started 2 years ago, and I've been hooked ever since.
          </p>
          <p>
            I specialize in creating responsive, user-friendly websites and
            applications using modern technologies. My approach combines
            technical expertise with creative problem-solving to deliver
            exceptional digital experiences.
          </p>
          <p>
            When I'm not coding, you can find me exploring new tech trends,
            contributing to open-source projects, or hiking in the beautiful
            landscapes of Nepal.
          </p>
          <div className="about-stats">
            <div className="stat">
              <h4>5+</h4>
              <p>Projects</p>
            </div>
            <div className="stat">
              <h4>1.5</h4>
              <p>Years Learning</p>
            </div>
            <div className="stat">
              <h4>3+</h4>
              <p>Technologies</p>
            </div>
          </div>
        </div>
        <div className="about-image">
          <div className="pattern"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
