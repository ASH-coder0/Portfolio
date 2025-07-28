// src/components/portfolio/Hero.js
import React from "react";
import "./styles/Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h4>Hello, I'm</h4>

          <h1>Ashwin Gautam</h1>
          <h3>Web Developer & CS Student</h3>
          <p>
            I build engaging web experiences with modern technologies. Currently
            pursuing Computer Science at Tribhuvan University.
          </p>
          <div className="hero-buttons">
            <button
              className="btn primary"
              onClick={() =>
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              My Projects
            </button>
            <button
              className="btn secondary"
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact Me
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-frame">
            <div className="profile-placeholder"></div>
            {/* <div className="tech-icons">
              <div className="icon">React</div>
              <div className="icon">Node.js</div>
              <div className="icon">JS</div>
              <div className="icon">CSS3</div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
