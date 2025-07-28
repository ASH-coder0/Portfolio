// src/components/portfolio/PortfolioPage.js
import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
import ScrollTop from "./ScrollTop";
import "./styles/animations.css";

import "./styles/Projects.css";

const PortfolioPage = () => {
  return (
    <div className="portfolio">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <ScrollTop />
    </div>
  );
};

export default PortfolioPage;
