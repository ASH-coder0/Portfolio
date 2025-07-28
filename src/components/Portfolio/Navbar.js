// src/components/portfolio/Navbar.js
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./styles/Navbar.css";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + height
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <nav className="portfolio-nav">
      <div className="nav-container">
        <div className="logo">
          Ashwin<span>.</span>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Navigation */}
        <ul className={`nav-links ${mobileMenuOpen ? "open" : ""}`}>
          <li className={activeSection === "home" ? "active" : ""}>
            <button onClick={() => scrollTo("home")}>Home</button>
          </li>
          <li className={activeSection === "about" ? "active" : ""}>
            <button onClick={() => scrollTo("about")}>About</button>
          </li>
          <li className={activeSection === "projects" ? "active" : ""}>
            <button onClick={() => scrollTo("projects")}>Projects</button>
          </li>
          <li className={activeSection === "skills" ? "active" : ""}>
            <button onClick={() => scrollTo("skills")}>Skills</button>
          </li>
          <li className={activeSection === "contact" ? "active" : ""}>
            <button onClick={() => scrollTo("contact")}>Contact</button>
          </li>
          <li>
            <a href="/cv" className="cv-button">
              View CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
