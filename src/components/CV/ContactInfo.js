// components/ContactInfo.js
import React from "react";

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <div className="contact-item">
        <i className="fas fa-map-marker-alt"></i>
        <span>Butwal-01, Rupandehi, Nepal</span>
      </div>
      <div className="contact-item">
        <i className="fas fa-envelope"></i>
        <span>ashwingautum19@gmail.com</span>
      </div>
      <div className="contact-item">
        <a href="https://github.com/ASH-coder0">
          <i className="fab fa-github"></i>
        </a>
        <span>github.com/ASH-coder0</span>
      </div>
      <div className="contact-item">
        <i className="fas fa-phone"></i>
        <span>+977 9815487102</span>
      </div>
    </div>
  );
};

export default ContactInfo;
