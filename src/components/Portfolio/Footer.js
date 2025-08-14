// src/components/portfolio/Footer.js
import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">Ashwin Gautam</div>
        <p>Web Developer & Computer Science Student</p>

        <div className="social-links">
          <a
            href="https://github.com/ASH-coder0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ashwingautam"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/ashwin.gautam.16147"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/_gautam_ashwin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.tiktok.com/@ashwin12345678?lang=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok />
          </a>
          <a href="mailto:ashwingautum19@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Ashwin Gautam. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
