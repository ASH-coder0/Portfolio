// components/Header.js
import React from "react";
import ContactInfo from "./ContactInfo";

const Header = () => {
  return (
    <header>
      <div className="profile-img" />
      <h1>Ashwin Gautam</h1>
      <div className="title">Computer Science Student & Web Developer</div>
      <ContactInfo />

      <a href="/" className="portfolio-btn">
        View Portfolio
      </a>
    </header>
  );
};

export default Header;
